/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["favicon.png","6bc67ff78373474cfd30e348d387e0a2"],["fonts/materialdesignicons-webfont.eot","d5247f90f15e16a67b0bc907bbf34b41"],["fonts/materialdesignicons-webfont.svg","8b3c39c92337731eed918959d2abee5f"],["fonts/materialdesignicons-webfont.ttf","3daf0eaec12778787d91f136f84bbf72"],["fonts/materialdesignicons-webfont.woff","6f612b80df1b95abf7ca72717f8659d4"],["fonts/materialdesignicons-webfont.woff2","85f0bd26d0491015858074f6dfa2f33e"],["images/144.png","acf2db9529abb32e2def6048e7541ccf"],["images/168.png","1f2426b9017a4753977d5c36aa8f547c"],["images/192.png","704c117257c2672ad284ca61812c19d6"],["images/48.png","3f79260ade5719431cf66e391d5af004"],["images/72.png","e53859c45c81e94d365e35ce43e088b4"],["images/96.png","cc85c41212ed223122b556029abd4a0f"],["images/bg/calendar.png","83d8524b30629b675e167bec58a2b286"],["images/bg/call-for-speakers.png","334fb11cf7b3ee4c9ec02e4b66b8219f"],["images/bg/cover.jpg","1699e6e5659fa28efc04e6911ed58894"],["images/bg/extendedbulacan.png","a2d73f7fcc50e0ff62c7ff2497ad55dc"],["images/bg/extendedcavite.png","fea7547283f05e22dad87a6e9a71a2af"],["images/bg/extendeddaet.png","b5c96eec5053188f7eef4cec37fbb09c"],["images/bg/extendedlaguna.png","57ebf91ea03b608d828d64d4fb167714"],["images/bg/extendedmanila.png","394595e42a7de3800f4f6f3fe10f9f6a"],["images/bg/extendedpalawan.png","74b12da69504a015303af7f65176b324"],["images/bg/extendedroadshow.png","64788213f298e73e62f2562007155187"],["images/bg/extendedseries.png","be6641c2be9082daab0c58947b2aa560"],["images/bg/extendedsubic.png","5b0df592e33d78e006b0b3e828c73c22"],["images/bg/fb.png","323836a323f60a992c56af268146bb6a"],["images/bg/gdgph-logo_black.png","f996777f9d8d025ac392c2bd3031fe1f"],["images/bg/gp.png","ba1f1d52e388e9bbcfd0686860ceb69e"],["images/bg/ic_account-multiple_white.png","004853acdf47831fe38048f006e2192d"],["images/bg/io.png","9b821cf98ce06c937b70c270bde29fcb"],["images/bg/io17.png","7f1c3d764de6268ca6a7b7f1e728efcb"],["images/bg/io_purple.png","3a32425c5cf7015552985545fa68f603"],["images/bg/map.jpg","d2e86a4450591409d2a86eced30b419f"],["images/bg/marker.png","a461fde41b555488b3eae58ed0ca3497"],["images/bg/og.jpg","a8b0a81ab8dd0292fe7a8b60d77a29cb"],["images/bg/roadshow_vertical.png","3be2be88c2ddf2ff99e5752ac76628ac"],["images/bg/slash.png","bdaba622637374befcebc81a3952a8b0"],["images/bg/spaces.png","327deb632c7758fc4197fcba339f787b"],["images/bg/tw.png","4d92e6b981ef2e0d5facbd401553c2dc"],["images/resources/11043539_669944056470862_5366711816719926091_n.jpg","137a6a76977bc1a7fe8461ce881446b7"],["images/resources/11694062_666885283443406_4539138318143027137_n.jpg","25328856e36cf3d4b9571f1377769bbf"],["images/resources/11695888_666796223452312_1438967354087705179_n.jpg","5ca5c65517079f13eec0076b64aad422"],["images/resources/11698480_666795926785675_1474719517803020750_n.jpg","fa2315a6cd6d5ce8c8f99a26490cc72e"],["images/resources/11705108_666886640109937_4893300061516557634_n.jpg","49487d123e91111f1185f01798457f2d"],["images/resources/11737828_666884436776824_2254026215316632571_n.jpg","d7d818130186cca77a4ddc25da5871a7"],["images/resources/11752486_669951223136812_9016990587383101520_n.jpg","3f4403e2232d45259e201a4cfe78dcc7"],["images/resources/11753701_674661032665831_3713080177787902400_n.jpg","137947eddfcf7534e1b6e3fae43547da"],["images/resources/11781814_674712969327304_8114020334375453554_n.jpg","ca695a7627439bad965d6c38ac576ca4"],["images/resources/11817266_674712432660691_7965912749270942320_n.jpg","731d36f38e2f2c32485741f43522abdc"],["images/resources/13537548_820154354783164_3293658120094249256_n.jpg","3a79904ff06e61ad1b7f918d93ee36a1"],["images/resources/21301_669950199803581_6855921762848106247_n.jpg","d40fae039a9f0a6be2048245ada771c0"],["images/resources/io-live-viewing-2016.jpg","f7a0f04dcbf853d178f7482442da50fb"],["images/resources/io-logo.png","7f1c3d764de6268ca6a7b7f1e728efcb"],["images/resources/manila.jpg","d8ce867c5ca78930894cfaf947bcb65b"],["images/schools/bulacan1.png","4b553b5406ba43adcf41c9a999f78280"],["images/schools/bulacan2.png","19c12129e436b207c8b8ea2e044a523d"],["images/schools/cavite1.png","0d2db91e593407c179fab5d986e4ccd7"],["images/schools/cavite2.png","f6241bc1318b4963d06e109512c67e3c"],["images/schools/laguna1.png","5d484800be531fef0ba53de7fba3666d"],["images/schools/manila1.png","2c0c2e4021fb38640807b9e707bfbe6a"],["images/schools/palawan1.png","5250ef3c14ee04a5801403395a99b191"],["images/schools/palawan2.png","57abfdb3bfa747df099ecf5d109ee4a4"],["images/schools/palawan3.png","ba9fbbce4c9a96df10543f4e4ca9a76f"],["images/schools/palawan4.png","a291401ac15e6980e4b48f73612218ca"],["images/schools/palawan5.png","ee3ec8b9ad1b094d6ca09c8a03012f35"],["images/schools/subic1.png","9913f93f341708886ea7b064c10dda64"],["images/speakers/adam-baguyo.jpg","0709c87319a1aeea92206031a063cce9"],["images/speakers/adrian-vincent-tayag.jpg","4a738c0e7bce9dec7aaec8ab129fcacd"],["images/speakers/albert-padin.jpg","fabfe8b4da844fe111edb2dc9bdac226"],["images/speakers/benj-tupas.jpg","f48abf92ec9daa885759e5bf51294dcf"],["images/speakers/brian-baquiran.jpg","dfc84b9174b7747004da2707390f27c4"],["images/speakers/christian-francis-callelero.jpg","c9c2e273cedb84662819773c8119380b"],["images/speakers/cristine-chen.jpg","1bd70f3ba5a0690d9d06ae64fdc83fd1"],["images/speakers/cristopher-david.jpg","716eaf64bfba91c67e21aceb54ba6ead"],["images/speakers/danmark-prince-arqueza.jpg","500dd1aab5dd4f3f7b4eff6cb245a724"],["images/speakers/darth-vidar.jpg","dbbde8fa4a47133cb1fb5dcef9ed4d96"],["images/speakers/elymar-apao.jpg","81ffc54daa13fd589f840e7f5709b7fa"],["images/speakers/jielynn-diroy.jpg","743b486c9f037e77e0d41ca6239d57e2"],["images/speakers/john-hay-supetran.jpg","62d2a65698ef01a4ad855ada1c7ae888"],["images/speakers/johnny-benitez.jpg","232af615fe6c52ee6ae819bba9e5fd92"],["images/speakers/jomar-tigcal.jpg","26397faf329a819e5f90af17fb3bea56"],["images/speakers/jonah-mananghaya.jpg","af6c1bf102f7a67965cc6117b7abcdcd"],["images/speakers/jonathan-joson.jpg","ad63cf8ee5c8c910c96d8d3e09df30d8"],["images/speakers/jordan-deja.jpg","e3338bf827cd5cb2d8faf823d201f96d"],["images/speakers/josan-astrid-dometita.jpg","6287a9ca542d2019edbff92ee6c9f1f7"],["images/speakers/jose-carlo-soriano.jpg","2b187d66d145ba5615d1ee842d1889f6"],["images/speakers/joyce-guiao.jpg","eab2d9c549a2069bd81579d589476f8e"],["images/speakers/justin-gerard-ricardo.jpg","1fe16643248d2e9609d8442b0b08a803"],["images/speakers/juvar-abrera.jpg","45c7ca30cd77cf31f1c09911d0324af5"],["images/speakers/kazunori-sato.jpg","198bfbe33de02de0aed8b4034b037127"],["images/speakers/kristine-mae-adlaon.jpg","6fc50af9cb12a73e1aed70d3b5df6a66"],["images/speakers/neil-joshua-realubit.jpg","780ddaf913058cd804821c59355f0828"],["images/speakers/pete-deyto.jpg","63448d8751915d1cab46d1b913770012"],["images/speakers/ralph-regalado.jpg","3eaf8849de42b62a4d64d072edc25e23"],["images/speakers/randi-julio-haboc.jpg","55ee8715dc27f0737a10613758cc375b"],["images/speakers/reymart-canuel.jpg","cec00fcfbeb0d8b58f7cc3540dcae7b0"],["images/speakers/sami-kizilbash.jpg","166205f5548b0a6bf51377ae1dbdddb9"],["images/speakers/satoru-fujiwara.jpg","6e560c9197e21d8d4d90830225cab1b1"],["images/speakers/takuo-suzuki.jpg","a8b9abbda60fe48de23c98d886904af3"],["images/speakers/teejay-jamlang.jpg","09b0346721c86f78a2960e978168ab3d"],["images/speakers/toni-jan-keith-monserrat.jpg","4193b69d6addadbbc3848d7ba4ef1fde"],["images/speakers/trinmar-boado.jpg","2f0988328a4286d6246fb39cf870837b"],["images/speakers/yohan-totting.jpg","66f65888dbbd2f2db61948c00fd4a75d"],["images/sponsors/1digimedia.png","9e92594300c82a9f41173f3ea3521b92"],["images/sponsors/accenture.png","b3a4e4205f1a182b5d4937a576701a0b"],["images/sponsors/adobo-magazine.png","003a14c86a3a7946127663b6fab8659b"],["images/sponsors/aktivshow_dark.png","344b9d4d54b22fb32098d2464a1116d8"],["images/sponsors/anc.png","520165ff207c0a5bbc8ccec54ff14e04"],["images/sponsors/belle-de-jour.png","1199d231688a7a457b4ba6cc3612e888"],["images/sponsors/cbtl.png","1d4c3cccb6a1c6a15547fb8cd76b47a7"],["images/sponsors/celeteque.png","bd59b0f42320ff15d4e11e67671960c4"],["images/sponsors/google.png","f99da0d13ea3e3a6f12e8c4117f55df4"],["images/sponsors/grab.png","36894b45397eb60aad849fb80b90081a"],["images/sponsors/great-taste-dark-java.png","13401ecd7d2bf18b4c15e124e7a1496f"],["images/sponsors/great-taste-viet-latte.png","4b0fe2f1ef4a62ea0549321cec05c838"],["images/sponsors/griffins.png","1fd07a1bb43c6429956e324ce350731b"],["images/sponsors/hawk-black.png","53c23338ff461dcaeb74116b91d2b042"],["images/sponsors/inquirernet.png","532fdfd864dc4356611532625720997c"],["images/sponsors/jack-n-jill-calbee.png","e29e77db4eaac09bce67e3f6cf42d634"],["images/sponsors/jobstreet.png","9ce6160adb9e348ce7c3ded7bf1a9851"],["images/sponsors/klab-cyscorpions.png","5cea40cdc26399c6d08a62231a6d00c9"],["images/sponsors/kopiko78.png","eb14b249bc378127bca92600e9949884"],["images/sponsors/mih-creative-consulting.png","f910d792113bd65d556a8ef6c9abd8f0"],["images/sponsors/nescafe.jpg","9b3f750b1f3c6251617bc26dc8e1cfeb"],["images/sponsors/paymaya.png","dfc0960ca73e5bd613caf6f64af19ac6"],["images/sponsors/philstar.png","ed6c9636e39be6f52d5d0182348d4bb7"],["images/sponsors/pldt-innolab.png","818b3d07ef1d1104ebd28698d9031175"],["images/sponsors/pye.png","dff4fd5b9b4db16309126bb717fd2de3"],["images/sponsors/qsr.png","feb0fa90ea7e84ce06f2b34d560bcc48"],["images/sponsors/quaker.png","f97436df44d3904a63e2e66570a1026f"],["images/sponsors/regilait.png","c83b431b5499c424e4ca63e1cd3917bf"],["images/sponsors/schutzen.png","bd4d1ee3555c78261ba716d10e7514ca"],["images/sponsors/storm.png","c5305959c88f1a691b8645903e70901b"],["images/sponsors/treetop.png","2dfb64f1de41cee0c9cc246a39125287"],["images/sponsors/usaid.png","5ef9454eb1334ee5fcbbccf075481f1b"],["images/sponsors/when-in-manila.png","b3e09d922d5ce46270c5cacdd4b5ac88"],["images/sponsors/zalora.png","9eefe44d4b946d7fabad28bac21f9b5a"],["images/sponsors/zcom.png","4b9f5a4873816df332d876dbcce39f42"],["index.html","d6bde38b56e814a235d941cbf471c519"],["scripts/App.js","55af07c788dfb44680a21178999ee942"],["scripts/Data.js","1298f74bffbe49151cce9d25aa034117"],["scripts/jquery.min.js","5a104e61f58b01d7f465895e5e283127"],["styles/global.css","dc86dcac9a2211085509b065c3e98d30"],["styles/global.css.map","4f195ec0b9e2eadb01f357cf647cd266"],["styles/global.scss","2ca5598baabdddcd950edaf3d40e4e25"],["styles/mdi.css","8761912e985cd0289c20035c48e792d9"],["styles/mdi.css.map","e25d967c2755d783f2a8369e27f6c8d8"],["styles/mdi.scss","9434a56a10f42eac541240d67a6f610d"],["styles/style.css","e10622b5cd22ccb9f21d9ed55dcc072d"],["styles/style.css.map","8d249b1fb3658aa503073b5f3f3bd4b4"],["styles/style.scss","501898f54d11530e26477d142508a67e"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







