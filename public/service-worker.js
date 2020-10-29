importScripts('/js/cache-polyfill.js')
importScripts('/js/fetch.js');
var STATIC_FILES = [
    '/',
    '/offline.html',
    '/js/clock.js',
    '/js/fetch.js',
    '/js/promise.js',
    '/css/semantic.min.css',
    '/js/vendors.bundle.js',
    '/js/app.bundle.js',
    '/img/favicon/manifest.json',
    '/img/favicon/favicon-32x32.png',
    '/img/favicon/favicon-16x16.png',
    '/img/favicon/favicon-96x96.png',
    '/img/favicon/android-icon-144x144.png',
    '/img/favicon/android-icon-192x192.png',
]

var CACHE_STATIC_NAME = 'static-v3';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
            .then(function (cache) {
                console.log('[Service Worker] Precaching App Shell');
                cache.addAll(STATIC_FILES);
            })
    )
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
        caches.keys()
            .then(function (keyList) {
                return Promise.all(keyList.map(function (key) {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                        console.log('[Service Worker] Removing old cache.', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

function isInArray(string, array) {
    var cachePath;
    if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
        cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
    } else {
        cachePath = string; // store the full request (for CDNs)
    }
    return array.indexOf(cachePath) > -1;
}

var requestedUrl = null;
self.addEventListener('fetch', function (event) {
    const eventFetch = new URL(event.request.url);
    if (event.request.method !== 'GET' || eventFetch.pathname.includes("/api") || (eventFetch.pathname.includes("/login")) || eventFetch.pathname.includes("/register") || eventFetch.pathname.includes("/home")) {

        return;
    }else{
        event.respondWith(
            caches.match(event.request)
                .then(function (response) {
                    if (response) {
                        return response;
                    } else {
                        return fetch(event.request)
                            .then(function (res) {
                                return caches.open(CACHE_DYNAMIC_NAME)
                                    .then(function (cache) {
                                        // trimCache(CACHE_DYNAMIC_NAME, 3);
                                        cache.put(event.request.url, res.clone());
                                        return res;
                                    })
                            })
                            .catch(function (err) {
                                return caches.open(CACHE_STATIC_NAME)
                                    .then(function (cache) {
                                        if (event.request.headers.get('accept').includes('text/html')) {
                                            return cache.match('/offline.html');
                                        }
                                    });
                            });
                    }
                })
        );
    }

});