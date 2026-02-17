self.addEventListener("install",e=>{
e.waitUntil(
caches.open("edu-cache").then(cache=>{
return cache.addAll([
"index.html",
"master.bedx"
]);
})
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
