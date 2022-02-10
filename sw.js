self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('RaceTable').then((cache) => cache.addAll([
            '/RaceTable/',
            '/RaceTable/index.html',
            '/RaceTable/uomTrack.js',
            '/RaceTable/main.css',
            '/RaceTable/assets/uomTitle.png',
            '/RaceTable/assets/rubbish.svg',
            '/RaceTable/assets/copy.svg',

        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});