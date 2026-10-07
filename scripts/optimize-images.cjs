const sharp = require('sharp');
const fs = require('node:fs');
const path = require('node:path');
async function optimize() {
 const out = path.join(process.cwd(),'public','optimized'); fs.mkdirSync(out,{recursive:true});
 const heroSource = fs.existsSync('public/hero-living.png') ? 'public/hero-living.png' : 'public/hero-image.jpg';
 const jobs = [640,1200].map(width => sharp(heroSource).resize({width,withoutEnlargement:true}).webp({quality:78}).toFile(path.join(out,`hero-image-${width}.webp`)));
 for (const folder of ['services','gallery']) for (const file of fs.readdirSync(`public/${folder}`)) {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;
  const name = file.replace(/\.[^.]+$/,'.webp');
  const target = path.join(out,folder); fs.mkdirSync(target,{recursive:true});
  jobs.push(sharp(path.join('public',folder,file)).resize({width:960,withoutEnlargement:true}).webp({quality:78}).toFile(path.join(target,name)));
 }
 await Promise.all(jobs); console.log('Responsive WebP assets ready');
}
optimize().catch(error => { console.error(error.message); process.exit(1); });
