const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve('out');
const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())walk(full);else if(entry.name.endsWith('.html'))files.push(full);}}
walk(root);
const failures=new Set();
let references=0;
for(const file of files){
 const html=fs.readFileSync(file,'utf8');
 const route='/' + path.relative(root,file).replaceAll('\\','/').replace(/index\.html$/,'');
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const value=match[1].replaceAll('&amp;','&');
  if(/^(data:|tel:|mailto:|javascript:)/.test(value))continue;
  const url=new URL(value,'https://local.test'+route);
  if(url.origin!=='https://local.test')continue;
  references++;
  const pathname=decodeURIComponent(url.pathname);
  let target=path.join(root,pathname);
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  if(!fs.existsSync(target)){if(fs.existsSync(target+'.html'))target+='.html';else{failures.add(`${route}: missing ${pathname}`);continue;}}
  if(url.hash && target.endsWith('.html')){
   const page=fs.readFileSync(target,'utf8');
   const id=decodeURIComponent(url.hash.slice(1));
   if(!page.includes(`id="${id}"`))failures.add(`${route}: missing anchor ${pathname}${url.hash}`);
  }
 }
 const h1s=(html.match(/<h1[ >]/g)||[]).length;
 if(!file.endsWith('404.html')&& !file.includes('404'+path.sep)&&h1s!==1)failures.add(`${route}: expected one h1, found ${h1s}`);
}
if(failures.size){console.error([...failures].join('\n'));process.exit(1);}
console.log(`Verified ${files.length} HTML pages and ${references} local asset, route, and anchor references.`);
const hero=fs.statSync('out/optimized/hero-image-640.webp').size;
if(hero>100000)throw new Error('Mobile hero exceeds 100 KB budget');
console.log(`Mobile hero: ${(hero/1024).toFixed(1)} KB. All local references passed.`);
