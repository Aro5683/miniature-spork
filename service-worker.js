const CACHE_NAME="edu-cache-v1";

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll([
        "/miniature-spork/",
        "/miniature-spork/index.html",
        "/miniature-spork/master.bedx",
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch",event=>{
  event.respondWith(
    caches.match(event.request).then(response=>{
      return response || fetch(event.request);
    })
  );
});
