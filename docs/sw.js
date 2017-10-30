importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "fe0ac79c0ef98e921352e050624ab508"
  },
  {
    "url": "build/app.js",
    "revision": "a3be158032bfb0baf954782cd3def4de"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app/app.ldpuklsb.js",
    "revision": "bff82b3d901d61e7a4f524958035cf96"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "c528eaaa8cb14290b4518e4b9a4d4893"
  },
  {
    "url": "build/app/app.ubbz8hou.pf.js",
    "revision": "80117c142792518b79372ae6c775111d"
  },
  {
    "url": "build/app/dz0zxx6l.js",
    "revision": "486e282dc15bf15bd2592584ca6c3536"
  },
  {
    "url": "build/app/l3dk4lkb.js",
    "revision": "d0e6c7430a7f325f0a6d13bdfd89886a"
  },
  {
    "url": "build/app/zgrylv5o.js",
    "revision": "19bf8b3a9b58e15cf24abdacc68b40b1"
  },
  {
    "url": "index.html",
    "revision": "9204084e05d503e6cea5c7d51739c316"
  },
  {
    "url": "manifest.json",
    "revision": "38427119f59b1e4fa86a298b8146ea56"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
