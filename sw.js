!function(){var e=["/","8989276f6220efde/bundle.css","abb9e28b55125ea9/bundle.js","manifest.json","/assets/img/itaf.png","/assets/img/shiai.png","/assets/img/shiai.svg","/assets/img/tas.png","/assets/sfx/horn.mp3","/assets/sfx/horn.ogg"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.2.1").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.2.1"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map