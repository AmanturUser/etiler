'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c96ee38fd21d78d1f0afd3609e37e5de",
"version.json": "f950060819ce5e75a5eb63730a8ad1a5",
"index.html": "edd77e0c639f5dbf4bce17e06f937f42",
"/": "edd77e0c639f5dbf4bce17e06f937f42",
"main.dart.js": "5d20b298239d7013b33380d2a64387f9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "f7b9fcf3f8e1cb7980dfef8c202fce33",
"icons/Icon-192.png": "76c3f2e8ab78ff729ca328befacf7a1f",
"icons/Icon-maskable-192.png": "502e11298e085c7c94f978b27ab3e0d6",
"icons/Icon-maskable-512.png": "c9a0f79924e7388c3e6029c08218f957",
"icons/Icon-512.png": "b9a35b02b4e7507cde74cf48bc09ab79",
"manifest.json": "505d7c644a80516a4deb68528bcaf9b1",
"assets/AssetManifest.json": "16e85b2dc2517227b78f32eb6f465418",
"assets/NOTICES": "9ac3671411ef2396f4f55be2b2942a96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "575fa3752a3a62ce6f4cedbc42662684",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e8c156b033c571479053b5968a825b39",
"assets/fonts/MaterialIcons-Regular.otf": "027b5a46da4aa969ef67c0b707dd47e0",
"assets/assets/menuQlounge/moriwaseSets/image1.jpg": "afa7e8c4d017376f1b5fd9031abe570e",
"assets/assets/menuQlounge/moriwaseSets/image2.jpg": "d6b6e9721f9cf60d9dd8b013ae1b76d4",
"assets/assets/menuQlounge/spicyGunkanSushi/image5.jpg": "7100ab6ee2db075c79a94d8a12bb7ba0",
"assets/assets/menuQlounge/spicyGunkanSushi/image1.jpg": "88f6658d7ecbb80648a517eec3ea2f64",
"assets/assets/menuQlounge/spicyGunkanSushi/image2.jpg": "20202594085669686b0b31b62269f7e6",
"assets/assets/menuQlounge/spicyGunkanSushi/image3.jpg": "7c4aadff41e8df9f638aeea1775e12ef",
"assets/assets/menuQlounge/spicyRolls/image4.jpg": "2270edf981f471ff00e05c2158435cfd",
"assets/assets/menuQlounge/spicyRolls/image5.jpg": "c66f2c72330fa603689c0f7dd2f2110a",
"assets/assets/menuQlounge/spicyRolls/image1.jpg": "4afbfe9ed0564433d09d6ab953d5af58",
"assets/assets/menuQlounge/spicyRolls/image2.jpg": "b1703b2e6b20e0ab95bf85477422a21e",
"assets/assets/menuQlounge/spicyRolls/image3.jpg": "86ac7628af1cc119cdbcc34e8049d4ad",
"assets/assets/menuQlounge/salads/image4.jpg": "8b666ff54aa1d24eb9e41536f7acca34",
"assets/assets/menuQlounge/salads/image1.jpg": "35904e8da199dd69f541dac4a66f8976",
"assets/assets/menuQlounge/salads/image2.jpg": "745241a9bb965c382f40a5a80691d995",
"assets/assets/menuQlounge/salads/image3.jpg": "f72d215927f65fa2a0d34d72b8e1d84e",
"assets/assets/menuQlounge/sushiRolls/image8.jpg": "534a2f82a6c119437e6db787d4b3ea22",
"assets/assets/menuQlounge/sushiRolls/image9.jpg": "9143214b7ea7fd44a7380ebf4c7e6147",
"assets/assets/menuQlounge/sushiRolls/image12.jpg": "6c947adfc40a84cd867c7e4a13327def",
"assets/assets/menuQlounge/sushiRolls/image11.jpg": "9ce5fec5f5016704ae4b4d8934a6fc83",
"assets/assets/menuQlounge/sushiRolls/image10.jpg": "c22a78c2151d6567fe920ac5126ba930",
"assets/assets/menuQlounge/sushiRolls/image7.jpg": "bc77633e522aa59d1f616cd2494bd6e9",
"assets/assets/menuQlounge/sushiRolls/image6.jpg": "77d9ac719cd51250cc40fe0dfe139d45",
"assets/assets/menuQlounge/sushiRolls/image4.jpg": "d1b8d69730ebc27d86d70938c0df1511",
"assets/assets/menuQlounge/sushiRolls/image5.jpg": "3656e3b7c16d9c0fd3abf2ca4290352a",
"assets/assets/menuQlounge/sushiRolls/image1.jpg": "1e0a8b697c7f29b4921f567b057df94e",
"assets/assets/menuQlounge/sushiRolls/image3.jpg": "95bb93a5100dbd0a3c6ee51269ebb757",
"assets/assets/menuQlounge/sushi/image6.jpg": "214d6c6e0070340323718334879d316f",
"assets/assets/menuQlounge/sushi/image4.jpg": "c5aaa2e3ecf0c784f8b4a6a8d403007c",
"assets/assets/menuQlounge/sushi/image5.jpg": "3f4d974ef2cc849479c3b3057214ea6f",
"assets/assets/menuQlounge/sushi/image2.jpg": "3bfcf1e4b9c6f171e77153c0222c0ee1",
"assets/assets/menuQlounge/sushi/image3.jpg": "96ebe7beae9e829c45848c58d31eebbf",
"assets/assets/images/qlounge.jpg": "c7ede87e57686254ac50c16c0f4aac17",
"assets/assets/images/masakaLogo.png": "e146c392cdba1e053a55cefa1523961a",
"assets/assets/images/etiler.jpg": "70b563c807cdd2824d3eb0d7b0d1a8a8",
"assets/assets/bLunch.json": "58e31ebcf2b316ad739f7f96eafc70dc",
"assets/assets/qlounge.json": "8fcb751fa8479109c186782487118f4c",
"assets/assets/temp.json": "7af4ca4354d0bf00c5c7599fdc94d119",
"assets/assets/temp2.json": "538731a1b20a9ce0680f60d5665e6914",
"assets/assets/menu/deserts/phistash.jpg": "7a1e84b8cb36220557613677f4352f78",
"assets/assets/menu/deserts/tiramisu.jpg": "5e896674cda301698b0f7a7903265093",
"assets/assets/menu/deserts/threeChocolates.jpg": "9550ec20ffa856c15c7e94ce92ea9694",
"assets/assets/menu/deserts/sanSebast.jpg": "fe480719650f7392343ca8b30fd26bac",
"assets/assets/menu/deserts/grusha.jpg": "822e3eaecb5b11178e7d504dc1fca7ff",
"assets/assets/menu/coldSnacks/image8.jpg": "d1609473e25d6854d976772e9a9637fb",
"assets/assets/menu/coldSnacks/image9.jpg": "a5d6a212cd6f1fb4fbcb161667f90cc5",
"assets/assets/menu/coldSnacks/image11.jpg": "99a5530c8df700350c2f919193f2d489",
"assets/assets/menu/coldSnacks/image10.jpg": "f77b39b119a01255b05bd3623f15949f",
"assets/assets/menu/coldSnacks/image7.jpg": "443f86c2e4de6f65d324b85b0aeac6d2",
"assets/assets/menu/coldSnacks/image6.jpg": "3ddd6acf0177a1928582c073e7b8af7d",
"assets/assets/menu/coldSnacks/image4.jpg": "41e0452ee3010f4efe89f8fadb1179ce",
"assets/assets/menu/coldSnacks/image5.jpg": "3d9f53dddfbcf839bf43f0d7176ef247",
"assets/assets/menu/coldSnacks/image1.jpg": "a0882ca57d66eaf3e6376bcd49885e5b",
"assets/assets/menu/coldSnacks/image2.jpg": "46d03fedfba640a4a31c0b216eecdbc0",
"assets/assets/menu/coldSnacks/image3.jpg": "a89bcadbad3f805daecf4d2c70ced79a",
"assets/assets/menu/salads/image8.jpg": "d0dc522201d562409531b0b48632319a",
"assets/assets/menu/salads/image9.jpg": "8b73d771664af0a6d70b6dad24e7f35d",
"assets/assets/menu/salads/image14.jpg": "05fd804bd1d697e20759149fa4e3a770",
"assets/assets/menu/salads/image15.jpg": "8788e6185c0542210d30e2d6b062a39c",
"assets/assets/menu/salads/image17.jpg": "24838180462f526ba438db257fbaf17a",
"assets/assets/menu/salads/image16.jpg": "8de51c4490d9cb7e6146d8f65421ea58",
"assets/assets/menu/salads/image12.jpg": "bcee46d869bd8df17c31dfcff13b3d5c",
"assets/assets/menu/salads/image13.jpg": "944cd161831afd95d20f1b82d0674abd",
"assets/assets/menu/salads/image11.jpg": "8fea49653c0f6e3137869345b679086f",
"assets/assets/menu/salads/image10.jpg": "1243bd4ed86ee1194ec03d6315003ecd",
"assets/assets/menu/salads/image18.jpg": "7fd7215e0ca68abe452a816d8f161b69",
"assets/assets/menu/salads/image19.jpg": "1d1c718889d4784f4b61cdd6a5c20f5e",
"assets/assets/menu/salads/image7.jpg": "39d2db6d85dcfee857e0b0f73f1a7875",
"assets/assets/menu/salads/image6.jpg": "f084d6e3ea09fb102c9af42afc34f84b",
"assets/assets/menu/salads/image4.jpg": "111ae90d6ed7447cda5ebe5dd50346c4",
"assets/assets/menu/salads/image5.jpg": "e6c853df73fa174f849845ec84d61284",
"assets/assets/menu/salads/image1.jpg": "aa96a3f8fde230b13d48d9a34be09caa",
"assets/assets/menu/salads/image2.jpg": "6bab75180ce9521e7cdaedf5ba275c9a",
"assets/assets/menu/salads/image.jpg": "d8a9d8b142431545d4027dd10ca30238",
"assets/assets/menu/salads/image3.jpg": "5a76283d018a49416c7388a893e8cc00",
"assets/assets/menu/hotSnacks/image8.jpg": "efb22f6435b80be0d79a0a065c0a0f0c",
"assets/assets/menu/hotSnacks/image9.jpg": "d8e9367ad316772869a52d5c7740e226",
"assets/assets/menu/hotSnacks/image10.jpg": "4e12e1150543065bbf8cfbb540385bb0",
"assets/assets/menu/hotSnacks/image7.jpg": "0efe5e6e8484d1be9b0cc292035ee26a",
"assets/assets/menu/hotSnacks/image6.jpg": "6028c4a3d29cf54769134820daeeb262",
"assets/assets/menu/hotSnacks/image4.jpg": "44e1a320e31b4eaa3e516d9d39db5034",
"assets/assets/menu/hotSnacks/image5.jpg": "85468c8635f13a7c786df851c9a0239d",
"assets/assets/menu/hotSnacks/image1.jpg": "91ea734a42d2817e310c1391a8b0d17a",
"assets/assets/menu/hotSnacks/image2.jpg": "69d4fa26eac276ba89af9642e7a411f6",
"assets/assets/menu/hotSnacks/image3.jpg": "c85a25ebe0347055329c8b4e86136197",
"assets/assets/menu/hotDishes/image8.jpg": "9b2a452a51a4f826e6f7afd5d6b07db0",
"assets/assets/menu/hotDishes/image9.jpg": "e96a6536d1bdbf2d5dd4ebb096fdb836",
"assets/assets/menu/hotDishes/image14.jpg": "5ed929e1679eee1e6b53538c36c275a5",
"assets/assets/menu/hotDishes/image15.jpg": "1324f42c2c8ca25df3d2ad6ee21a502f",
"assets/assets/menu/hotDishes/image17.jpg": "8b82253b52ebb4562d8e6a1a5161116e",
"assets/assets/menu/hotDishes/image16.jpg": "504fb1c3d19da30bde856a2343c5a0cb",
"assets/assets/menu/hotDishes/image12.jpg": "fae24b19878904ba6f8fc991e4c68161",
"assets/assets/menu/hotDishes/image13.jpg": "1b013e210ec9a381a8431dec269e3655",
"assets/assets/menu/hotDishes/image11.jpg": "647c16e610d921c4056eb3097e28107a",
"assets/assets/menu/hotDishes/image10.jpg": "bbefe62c38543259afabc12f46599325",
"assets/assets/menu/hotDishes/image21.jpg": "c46515b0b10471ca03498da79516889b",
"assets/assets/menu/hotDishes/image20.jpg": "0f7fffe9a624e5b11f958716618a7aed",
"assets/assets/menu/hotDishes/image22.jpg": "2a02e673f62f2f9e1de5a2f8cd6d952a",
"assets/assets/menu/hotDishes/image23.jpg": "eb9f22b0fa93d81cc9e386c4f69b1282",
"assets/assets/menu/hotDishes/image18.jpg": "f7ce05c61d31f4a9ebaee3904a30a712",
"assets/assets/menu/hotDishes/image24.jpg": "d590f777513692e4bccffacd1f22eecf",
"assets/assets/menu/hotDishes/image25.jpg": "1635b663a6a6bd04f6f6be555dd79341",
"assets/assets/menu/hotDishes/image19.jpg": "892bb22c1a944e44e8d5ec328c7ce149",
"assets/assets/menu/hotDishes/image7.jpg": "aebde5284ed2ff2874564bf66194ac0c",
"assets/assets/menu/hotDishes/image6.jpg": "f5bb3a2fef6a7f45d3a6bc2d85b74017",
"assets/assets/menu/hotDishes/image4.jpg": "cbf9b537472409f646b194055b9089de",
"assets/assets/menu/hotDishes/image5.jpg": "c55e8d5fd2cc7404003c5b4bb2a584b5",
"assets/assets/menu/hotDishes/image1.jpg": "a49ab576fa71c137f620772d3dd29caa",
"assets/assets/menu/hotDishes/image2.jpg": "80665fe0b4bc5dde21d2d7dd0e29a3c9",
"assets/assets/menu/hotDishes/image3.jpg": "b7a760cf276f60fb5d462c485e404455",
"assets/assets/menu/burger/image1.jpg": "b0ca6199f9f1c0a0ed03409f30e6c015",
"assets/assets/menu/burger/image2.jpg": "9c27b24271a327dbd12e16d3aa9dbb94",
"assets/assets/menu/burger/image3.jpg": "11429bff78b074e4052ddfa1e0ce9a79",
"assets/assets/menu/steaks/image4.jpg": "295de58c6ff0cb49d67b1334058a8060",
"assets/assets/menu/steaks/image5.jpg": "3ee443d1164535e9a51bec89dddd6554",
"assets/assets/menu/steaks/image1.jpg": "b1f209e2e65b535a038770a6fc9bc483",
"assets/assets/menu/steaks/image2.jpg": "0519ee0892aed7b2bd3f55b7c11b9fbc",
"assets/assets/menu/steaks/image3.jpg": "06739501cbfe7108116a1cce43225571",
"assets/assets/menu/soup/image4.jpg": "bf1d553e081a459f508b14076293feeb",
"assets/assets/menu/soup/image5.jpg": "715a147a387e2570b697f268baed32de",
"assets/assets/menu/soup/image1.jpg": "91a5da2c02fd2c868b085aab6f3510d9",
"assets/assets/menu/soup/image2.jpg": "e237cfb5bfbd929cfae19bc7c4320da5",
"assets/assets/menu/soup/image3.jpg": "a9b176ad18ea3bf977ce30caa9f48d17",
"assets/assets/menu/dryAgedSteaks/image4.jpg": "2e8b0e51b978dd6b1d872e05c95bf0b4",
"assets/assets/menu/dryAgedSteaks/image5.jpg": "991897dffcf2a52ceea7354b44f163fe",
"assets/assets/menu/dryAgedSteaks/image1.jpg": "e1858e7288819da17c6bfd56ef54925b",
"assets/assets/menu/dryAgedSteaks/image2.jpg": "b51d6efdff4d222557f7061ae88afbc0",
"assets/assets/menu/dryAgedSteaks/image3.jpg": "b1f209e2e65b535a038770a6fc9bc483",
"assets/assets/sydykova.json": "a64f8044a4c9476976993a2b45c1e873",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
