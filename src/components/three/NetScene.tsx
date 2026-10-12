"use client";

import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";
import { onReady } from "@/components/system/ready";

/**
 * A knotted safety net simulated with verlet integration. The pointer presses into it,
 * a tap/click throws a ball, and the net catches it. `progress` (0 → 1) tilts the
 * net away as the hero scrolls out.
 */

const INK = new THREE.Color("#0b0c0e");
const THREAD = new THREE.Color("#eeede8");
const TENSION = new THREE.Color("#8fa2ff");

const vertexShader = /* glsl */ `
  attribute vec3 color;
  uniform float uSize;
  varying vec3 vColor;
  varying float vFade;
  void main() {
    vColor = color;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFade = clamp(1.0 - (-mv.z - 9.0) / 9.0, 0.0, 1.0);
    gl_PointSize = uSize * (10.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vFade;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.2, d) * 0.85 * vFade);
  }
`;

interface Ball {
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  r: number;
  age: number;
}

export function NetScene({ progress }: { progress?: RefObject<number> }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const section = el.parentElement ?? el;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch {
      el.dataset.fallback = "true";
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.6 : 2));
    renderer.setClearColor(INK, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(INK, 9, 19);
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
    camera.position.set(0, 0, 10);
    scene.add(new THREE.HemisphereLight("#dfe5ff", "#0b0c0e", 1.6));
    const sun = new THREE.DirectionalLight("#ffffff", 2.4);
    sun.position.set(3, 5, 8);
    scene.add(sun);

    const group = new THREE.Group();
    scene.add(group);

    // ---- net state ---------------------------------------------------------
    let cols = 0, rows = 0, count = 0, spacing = 0, halfH = 0;
    let pos = new Float32Array(0), prev = new Float32Array(0), rest = new Float32Array(0), colors = new Float32Array(0);
    let pinned = new Uint8Array(0);
    let links = new Uint32Array(0);
    let geometry: THREE.BufferGeometry | null = null;
    let pointsGeometry: THREE.BufferGeometry | null = null;
    let lines: THREE.LineSegments | null = null;
    let knots: THREE.Points | null = null;
    const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.42, fog: true });
    const knotMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms: { uSize: { value: 4 } },
    });
    let builtWidth = 0;

    function build(width: number, height: number) {
      builtWidth = width;
      const visibleH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      const visibleW = visibleH * (width / height);
      const pxToWorld = visibleH / height;
      spacing = (width < 768 ? 30 : 42) * pxToWorld;
      // Oversized so the tilted net still runs past every edge of the viewport.
      const netW = visibleW * 1.45;
      const netH = visibleH * 1.7;
      cols = Math.min(80, Math.ceil(netW / spacing) + 1);
      rows = Math.min(60, Math.ceil(netH / spacing) + 1);
      count = cols * rows;
      halfH = ((rows - 1) * spacing) / 2;
      const halfW = ((cols - 1) * spacing) / 2;

      pos = new Float32Array(count * 3);
      rest = new Float32Array(count * 3);
      colors = new Float32Array(count * 3);
      pinned = new Uint8Array(count);
      const pairs: number[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          pos[i * 3] = rest[i * 3] = x * spacing - halfW;
          pos[i * 3 + 1] = rest[i * 3 + 1] = halfH - y * spacing;
          pos[i * 3 + 2] = rest[i * 3 + 2] = 0;
          THREAD.toArray(colors, i * 3);
          if (x === 0 || y === 0 || x === cols - 1 || y === rows - 1) pinned[i] = 1;
          if (x < cols - 1) pairs.push(i, i + 1);
          if (y < rows - 1) pairs.push(i, i + cols);
        }
      }
      prev = pos.slice();
      links = new Uint32Array(pairs);

      geometry?.dispose();
      pointsGeometry?.dispose();
      if (lines) group.remove(lines);
      if (knots) group.remove(knots);
      const posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
      const colAttr = new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage);
      geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", posAttr);
      geometry.setAttribute("color", colAttr);
      geometry.setIndex(new THREE.BufferAttribute(links, 1));
      pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute("position", posAttr);
      pointsGeometry.setAttribute("color", colAttr);
      lines = new THREE.LineSegments(geometry, lineMaterial);
      knots = new THREE.Points(pointsGeometry, knotMaterial);
      lines.frustumCulled = knots.frustumCulled = false;
      group.add(lines, knots);
      knotMaterial.uniforms.uSize.value = (width < 768 ? 3.2 : 3.8) * renderer.getPixelRatio();
    }

    function resize() {
      const { clientWidth: w, clientHeight: h } = el!;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      // Rebuild only when the width changes, so mobile URL-bar resizes don't reset the net.
      if (Math.abs(w - builtWidth) > 40) build(w, h);
      if (reduce) render();
    }

    // ---- interaction -------------------------------------------------------
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const plane = new THREE.Plane();
    const hit = new THREE.Vector3();
    const pointer = { x: 0, y: 0, active: false, strength: 0 };
    const look = { x: 0, y: 0 };
    const tilt = { x: 0, y: 0 };

    function toNet(clientX: number, clientY: number) {
      const rect = el!.getBoundingClientRect();
      ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(group.quaternion);
      plane.setFromNormalAndCoplanarPoint(normal, group.position);
      if (!raycaster.ray.intersectPlane(plane, hit)) return null;
      return group.worldToLocal(hit.clone());
    }

    const balls: Ball[] = [];
    const ballGeometry = new THREE.SphereGeometry(1, 32, 24);
    const ballMaterial = new THREE.MeshStandardMaterial({ color: "#3346ff", roughness: 0.35, metalness: 0.1, emissive: "#1b2499", emissiveIntensity: 0.35 });
    const G = 6.5;
    const down = new THREE.Vector3();
    const inverse = new THREE.Quaternion();

    function throwAt(target: THREE.Vector3) {
      if (balls.length >= 4) {
        const old = balls.shift()!;
        group.remove(old.mesh);
      }
      const r = small ? 0.36 : 0.32;
      const mesh = new THREE.Mesh(ballGeometry, ballMaterial);
      mesh.scale.setScalar(r);
      const start = new THREE.Vector3(target.x * 0.3, -2.2, 8.5);
      const T = 0.72;
      // aim with the same tilted gravity the sim applies
      down.set(0, -G, 0).applyQuaternion(inverse.copy(group.quaternion).invert());
      const vel = new THREE.Vector3(
        (target.x - start.x) / T - 0.5 * down.x * T,
        (target.y - start.y) / T - 0.5 * down.y * T,
        (r * 0.6 - start.z) / T - 0.5 * down.z * T,
      );
      balls.push({ mesh, pos: start, vel, r, age: 0 });
      group.add(mesh);
    }

    let lastInteraction = 0;
    function onMove(e: PointerEvent) {
      if (e.pointerType === "touch") return;
      look.x = (e.clientX / window.innerWidth) * 2 - 1;
      look.y = (e.clientY / window.innerHeight) * 2 - 1;
      const p = toNet(e.clientX, e.clientY);
      if (!p) return;
      pointer.x = p.x;
      pointer.y = p.y;
      pointer.active = true;
    }
    function onLeave() {
      pointer.active = false;
    }
    function onDown(e: PointerEvent) {
      if ((e.target as HTMLElement).closest("a,button,input,select,textarea,label")) return;
      if ((progress?.current ?? 0) > 0.4) return;
      const p = toNet(e.clientX, e.clientY);
      if (!p) return;
      lastInteraction = performance.now();
      throwAt(p);
    }

    // ---- simulation --------------------------------------------------------
    const DAMP = 0.975;
    const STEP = 1 / 60;
    let time = 0;
    const tmp = new THREE.Color();

    function step(dt: number) {
      time += dt;
      const press = pointer.active ? 1 : 0;
      pointer.strength += (press - pointer.strength) * 0.08;
      const pressR = spacing * 4.2;
      const gravity = -0.35 * dt * dt;

      for (let i = 0; i < count; i++) {
        if (pinned[i]) continue;
        const ix = i * 3, iy = ix + 1, iz = ix + 2;
        const vx = (pos[ix] - prev[ix]) * DAMP;
        const vy = (pos[iy] - prev[iy]) * DAMP;
        const vz = (pos[iz] - prev[iz]) * DAMP;
        prev[ix] = pos[ix];
        prev[iy] = pos[iy];
        prev[iz] = pos[iz];
        pos[ix] += vx;
        pos[iy] += vy + gravity;
        // pretension pulls the net back to its plane, plus a slow breeze
        const breeze = Math.sin(time * 0.9 + rest[ix] * 0.45 + rest[iy] * 0.3) * 0.0016;
        pos[iz] += vz + (rest[iz] - pos[iz]) * 0.012 + breeze;

        if (pointer.strength > 0.01) {
          const dx = pos[ix] - pointer.x, dy = pos[iy] - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pressR * pressR) {
            const f = 1 - Math.sqrt(d2) / pressR;
            const target = -0.55 * f * f * pointer.strength;
            pos[iz] += (target - pos[iz]) * 0.07;
          }
        }
      }

      // one-sided rope constraints: threads resist stretching, not slack
      const restLen = spacing * 0.992;
      for (let k = 0; k < 4; k++) {
        for (let l = 0; l < links.length; l += 2) {
          const a = links[l] * 3, b = links[l + 1] * 3;
          const dx = pos[b] - pos[a], dy = pos[b + 1] - pos[a + 1], dz = pos[b + 2] - pos[a + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist <= restLen) continue;
          const pa = pinned[links[l]], pb = pinned[links[l + 1]];
          const diff = (dist - restLen) / dist;
          const wa = pa ? 0 : pb ? 1 : 0.5;
          const wb = pb ? 0 : pa ? 1 : 0.5;
          pos[a] += dx * diff * wa; pos[a + 1] += dy * diff * wa; pos[a + 2] += dz * diff * wa;
          pos[b] -= dx * diff * wb; pos[b + 1] -= dy * diff * wb; pos[b + 2] -= dz * diff * wb;
        }
      }

      // balls: sink into the net, get absorbed, roll down it and fall away
      down.set(0, -G, 0).applyQuaternion(inverse.copy(group.quaternion).invert());
      for (let n = balls.length - 1; n >= 0; n--) {
        const ball = balls[n];
        ball.age += dt;
        const depth = -(ball.pos.z - ball.r);
        ball.vel.addScaledVector(down, dt);
        if (depth > 0) {
          // soft spring; the net soaks up energy on the way back out
          const damping = ball.vel.z > 0 ? 14 : 3;
          ball.vel.z += (34 * depth - damping * ball.vel.z) * dt;
          ball.vel.x *= 0.99;
          ball.vel.y *= 0.994;
        }
        ball.pos.addScaledVector(ball.vel, dt);
        ball.mesh.position.copy(ball.pos);
        ball.mesh.rotation.x += ball.vel.y * dt * 2;

        // Knots under the ball's footprint are driven back to its rear surface along the
        // net normal — pushing them radially would just open the mesh and let it through.
        const R = ball.r * 1.2, R2 = R * R;
        for (let i = 0; i < count; i++) {
          if (pinned[i]) continue;
          const ix = i * 3;
          const dx = pos[ix] - ball.pos.x, dy = pos[ix + 1] - ball.pos.y;
          const d2 = dx * dx + dy * dy;
          if (d2 >= R2) continue;
          const surface = ball.pos.z - Math.sqrt(R2 - d2);
          if (pos[ix + 2] > surface) pos[ix + 2] = surface;
        }

        if (ball.pos.y < -halfH - 1 || ball.pos.z > 11 || ball.age > 9) {
          group.remove(ball.mesh);
          balls.splice(n, 1);
        }
      }

      // tension → colour
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const t = Math.min(1, Math.abs(pos[ix + 2] - rest[ix + 2]) * 4);
        tmp.copy(THREAD).lerp(TENSION, t);
        colors[ix] = tmp.r;
        colors[ix + 1] = tmp.g;
        colors[ix + 2] = tmp.b;
      }
      if (geometry) {
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
      }
    }

    function render() {
      const p = progress?.current ?? 0;
      // Resting tilt makes every dent readable in perspective; the pointer adds parallax.
      tilt.x += (look.x - tilt.x) * 0.04;
      tilt.y += (look.y - tilt.y) * 0.04;
      group.rotation.x = -0.42 - p * 0.75 + tilt.y * 0.06;
      group.rotation.y = (small ? 0.12 : 0.22) * (1 - p) + tilt.x * 0.08;
      group.position.y = 0.3 - p * 1.6;
      group.position.z = -p * 2;
      lineMaterial.opacity = 0.42 * (1 - p * 0.6);
      renderer.render(scene, camera);
    }

    // ---- loop & lifecycle --------------------------------------------------
    let raf = 0, running = false, visible = true, last = 0, acc = 0;
    let autoTimer = 0;
    const clock = () => performance.now() / 1000;

    function frame() {
      raf = requestAnimationFrame(frame);
      const now = clock();
      acc += Math.min(now - last, 0.1);
      last = now;
      let steps = 0;
      while (acc >= STEP && steps < 3) {
        step(STEP);
        acc -= STEP;
        steps++;
      }
      if (steps === 3) acc = 0;
      render();
    }
    function start() {
      if (running || reduce) return;
      running = true;
      last = clock();
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }
    const sync = () => (visible && !document.hidden ? start() : stop());

    function autoThrow() {
      const idle = performance.now() - lastInteraction > 6000;
      if (running && idle && (progress?.current ?? 0) < 0.2) {
        const spanX = (cols * spacing) / 2 * 0.55;
        throwAt(new THREE.Vector3((Math.random() * 2 - 1) * spanX, (Math.random() * 0.8 - 0.1) * halfH * 0.6, 0));
      }
      autoTimer = window.setTimeout(autoThrow, 4200 + Math.random() * 1800);
    }

    resize();
    render();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    section.addEventListener("pointerdown", onDown);
    const offReady = onReady(() => {
      el.dataset.ready = "true";
      if (reduce) return;
      sync();
      autoTimer = window.setTimeout(autoThrow, 900);
    });

    return () => {
      offReady();
      stop();
      clearTimeout(autoTimer);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      section.removeEventListener("pointerdown", onDown);
      geometry?.dispose();
      pointsGeometry?.dispose();
      ballGeometry.dispose();
      ballMaterial.dispose();
      lineMaterial.dispose();
      knotMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [progress]);

  return <div ref={host} className="net-scene" aria-hidden="true" />;
}
