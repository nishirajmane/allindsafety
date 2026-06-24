"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const MapContext = createContext<any>(null);

interface MapProps {
  center: LatLngExpression;
  zoom?: number;
  children?: React.ReactNode;
  className?: string;
}

export function Map({
  center,
  zoom = 15,
  children,
  className = "w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden",
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let active = true;

    // Dynamically load leaflet on the client side
    import("leaflet").then((L) => {
      if (!active || !containerRef.current) return;

      // Fix leaflet marker icon paths
      // @ts-ignore
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      const leafletMap = L.map(containerRef.current, {
        center,
        zoom,
        zoomControl: false,
        attributionControl: false,
      });

      mapRef.current = leafletMap;
      setMap(leafletMap);
    });

    return () => {
      active = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        setMap(null);
      }
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  return (
    <div ref={containerRef} className={className}>
      {map && (
        <MapContext.Provider value={map}>
          {children}
        </MapContext.Provider>
      )}
    </div>
  );
}

interface MapTileLayerProps {
  url?: string;
  attribution?: string;
}

export function MapTileLayer({
  url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}: MapTileLayerProps) {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    let tileLayer: any;
    import("leaflet").then((L) => {
      if (!map) return;
      tileLayer = L.tileLayer(url, { attribution }).addTo(map);
    });

    return () => {
      if (tileLayer && map) {
        tileLayer.remove();
      }
    };
  }, [map, url, attribution]);

  return null;
}

export function BasicMap() {
  const SANGAMWADI_COORDINATES = [18.5391, 73.8769] satisfies LatLngExpression;

  return (
    <Map center={SANGAMWADI_COORDINATES} zoom={15}>
      <MapTileLayer />
    </Map>
  );
}
