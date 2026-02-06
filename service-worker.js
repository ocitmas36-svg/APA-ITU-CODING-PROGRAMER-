const CACHE="codeverse-v1";
const FILES=["/","/pages/index.html"];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
