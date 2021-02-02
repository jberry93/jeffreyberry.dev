// cite: https://developers.google.com/web/fundamentals/primers/service-workers/

const cacheName = 'jeff-cache';
const urlsToCache = [
    '/',
    '/images/favicon.ico',
    '/styles/home.css',
    '/scripts/home.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }

                return fetch(event.request).then((response) => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    const responseToCache = response.clone();

                    caches.open(cacheName).then((cache) => cache.put(event.request, responseToCache));

                    return response;
                });
            })
    );
});
