// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iuSFH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a9276bdfd88a3e47";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"inTpd":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _maps = _interopRequireDefault(require("./chart/maps"));
exports.Maps = _maps.default;
var _default = {
    name: "maps",
    type: "package",
    requiresFusionCharts: true,
    extension: function extension(FusionCharts) {
        return FusionCharts.addDep(_maps.default);
    }
};
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","./chart/maps":"gaOmC"}],"gaOmC":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _mscartesian = _interopRequireDefault(require("@fusioncharts/charts/src/chart/_internal/mscartesian"));
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var defaultPaletteOption = _interopRequireWildcard(require("@fusioncharts/charts/src/_internal/color-utils/chart-palette-colors"));
var _domEvent = _interopRequireDefault(require("@fusioncharts/core/src/dom-event"));
var _eventApi = require("@fusioncharts/core/src/event-api");
var _lib = require("@fusioncharts/core/src/lib");
var _mapsDataset = _interopRequireDefault(require("../../factories/maps-dataset"));
var _canvas = _interopRequireDefault(require("@fusioncharts/charts/src/factories/canvas"));
var _colorrange = _interopRequireDefault(require("@fusioncharts/charts/src/factories/colorrange"));
var _legendmanager = _interopRequireDefault(require("@fusioncharts/charts/src/factories/legendmanager"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap;
    var cacheNodeInterop = new WeakMap;
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var defaultPaletteOptions = (0, _lib.extend2)({
    foregroundcolor: "333333",
    foregroundalpha: "100",
    foregrounddarkcolor: "111111",
    foregrounddarkalpha: "100",
    foregroundlightcolor: "666666",
    foregroundlightalpha: "100",
    backgroundlightcolor: "FFFFFF",
    backgroundlightalpha: "100",
    backgroundlightangle: 90,
    backgroundlightratio: "",
    backgroundcolor: "FFFFCC",
    backgroundalpha: "100",
    backgrounddarkcolor: "ffcc66",
    backgrounddarkalpha: "100",
    backgrounddarkangle: 270,
    backgrounddarkratio: "",
    shadow: 1
}, defaultPaletteOption), zeroCommaHundredStr = "0,100", MAP_STR = "Map", MAPS_STR = "maps", GEO_STR = "geo", RIGHT_STR = "right", colorPaletteMapGlobal = {
    basefontcolor: "foregroundcolor",
    bordercolor: "foregrounddarkcolor",
    borderalpha: "foregrounddarkalpha",
    bgcolor: "backgroundlightcolor",
    bgalpha: "backgroundlightalpha",
    bgangle: "backgroundlightangle",
    bgratio: "backgroundlightratio",
    canvasbordercolor: "foregrounddarkcolor",
    canvasborderalpha: "foregrounddarkalpha",
    canvasbgcolor: "backgroundlightcolor",
    canvasbgalpha: "backgroundlightalpha",
    canvasbgangle: "backgroundlightangle",
    canvasbgratio: "backgroundlightratio",
    tooltipbordercolor: "foregrounddarkcolor",
    tooltipborderalpha: "foregrounddarkalpha",
    tooltipbgcolor: "backgroundlightcolor",
    tooltipbgalpha: "backgroundlightalpha",
    tooltipfontcolor: "foregroundcolor",
    legendbordercolor: "foregrounddarkcolor",
    legendborderalpha: "foregrounddarkalpha",
    markerbordercolor: "foregroundlightcolor",
    markerborderalpha: "foregroundlightalpha",
    markerfillcolor: "backgrounddarkcolor",
    markerfillalpha: "backgrounddarkalpha",
    markerfillangle: "backgrounddarkangle",
    markerfillratio: "backgrounddarkratio",
    plotfillcolor: "backgroundcolor",
    plotfillalpha: "backgroundalpha",
    plotfillangle: "backgroundangle",
    plotfillratio: "backgroundratio",
    plothoverfillcolor: "backgrounddarkcolor",
    plothoverfillalpha: "backgrounddarkalpha",
    plothoverfillangle: "backgrounddarkangle",
    plothoverfillratio: "backgrounddarkratio",
    plotbordercolor: "foregroundcolor",
    plotborderalpha: "foregroundalpha",
    shadow: "shadow"
}, eiMethodsGlobal = {
    getMapName: function getMapName() {
        var chart = this, iapi = chart.jsVars.instanceAPI, mapName = iapi.getName().toLowerCase();
        return mapName;
    },
    getEntityList: function getEntityList() {
        var chart = this, iapi = chart.jsVars.instanceAPI, datasets = iapi.getDatasets() || [], i, entities, dataset, len = datasets.length, entityList = [], data, entityObj, config, name;
        for(i = 0; i < len; i++){
            dataset = datasets[i] || [];
            name = dataset.getName();
            if (name === "entities") {
                entities = dataset;
                break;
            }
        }
        data = entities.components.data;
        len = data.length;
        for(i in data)if (data.hasOwnProperty(i)) {
            entityObj = data[i] || {};
            config = entityObj.config || {};
            entityList.push({
                id: config.id,
                originalId: config.originalId || config.id,
                label: config.label,
                shortlabel: config.shortLabel,
                value: config.value,
                formattedValue: config.formattedValue,
                toolText: config.toolText
            });
        }
        return entityList;
    },
    getMapAttribute: function getMapAttribute() {
        var chartObj = this;
        (0, _eventApi.raiseWarning)(this, "12061210581", "run", "JavaScriptRenderer~getMapAttribute()", 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".');
        return chartObj.getChartAttribute.apply(chartObj, arguments);
    },
    exportMap: function exportMap() {
        var chartObj = this;
        (0, _eventApi.raiseWarning)(this, "12061210581", "run", "JavaScriptRenderer~exportMap()", 'Use of deprecated "exportMap()". Replace with "exportChart()".');
        return chartObj.exportChart && chartObj.exportChart.apply(chartObj, arguments);
    },
    addMarker: function addMarker(options) {
        var iapi = this.jsVars.instanceAPI, datasets = iapi.getDatasets() || [], len = datasets.length, i, dataset, markers, name;
        for(i = 0; i < len; i++){
            dataset = datasets[i] || [];
            name = dataset.getName();
            if (name === "markers") {
                markers = dataset;
                break;
            }
        }
        if (markers && !markers.addMarkerItem(options)) (0, _eventApi.raiseWarning)(this, "1309264086", "run", "MapsRenderer~addMarker()", "Failed to add marker. Check the options and try again.");
    },
    updateMarker: function updateMarker(id, options) {
        var iapi = this.jsVars.instanceAPI, datasets = iapi.getDatasets() || [], newId, len = datasets.length, i, dataset, markers, name;
        for(i = 0; i < len; i++){
            dataset = datasets[i] || [];
            name = dataset.getName();
            if (name === "markers") {
                markers = dataset;
                break;
            }
        }
        if (markers && id) {
            newId = (id + BLANK).toLowerCase();
            markers.updateMarkerItem(newId, options);
        }
    },
    removeMarker: function removeMarker(id) {
        var iapi = this.jsVars.instanceAPI, datasets = iapi.getDatasets() || [], len = datasets.length, newId, i, dataset, markers, name;
        for(i = 0; i < len; i++){
            dataset = datasets[i] || [];
            name = dataset.getName();
            if (name === "markers") {
                markers = dataset;
                break;
            }
        }
        if (id) {
            newId = (id + BLANK).toLowerCase();
            markers._removeMarkerItem(newId);
        }
    }
}, UNDEF, DASH_DEF = "none", COMMASPACE = ", ", BLANK = "", POSITION_BOTTOM = "bottom", SHAPE_CIRCLE = "circle", math = window.Math, mathMin = math.min, mathMax = math.max, isWithinCanvas = function isWithinCanvas(e, chart) {
    var mousePos = (0, _lib.getMouseCoordinate)(chart.getFromEnv("chart-container"), e, chart), chartX = mousePos.chartX, chartY = mousePos.chartY, chartConfig = chart.config, minX = chartConfig.canvasLeft, minY = chartConfig.canvasTop, maxX = chartConfig.canvasLeft + chartConfig.canvasWidth, maxY = chartConfig.canvasHeight + chartConfig.canvasTop;
    mousePos.insideCanvas = false;
    mousePos.originalEvent = e;
    if (chartX > minX && chartX < maxX && chartY > minY && chartY < maxY) mousePos.insideCanvas = true;
    return mousePos;
};
var ColorPalette = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(ColorPalette, _ComponentInterface);
    function ColorPalette(hash, index) {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        _this.subpalette = _lib.BLANKSTRING;
        _this.key = _lib.BLANKSTRING;
        _this.index = index;
        var key;
        for(key in hash){
            _this.subpalette = defaultPaletteOptions[hash[key]];
            _this[key] = _this.subpalette instanceof Array ? _this.subpalette[index] : _this.subpalette;
            _this.key = key;
        }
        return _this;
    }
    return ColorPalette;
}(_componentInterface.ComponentInterface);
var Maps = function(_MSCartesian) {
    (0, _inheritsLoose2.default)(Maps, _MSCartesian);
    function Maps() {
        var _this2;
        _this2 = _MSCartesian.call(this) || this;
        _this2.friendlyName = MAP_STR;
        _this2.revision = 1;
        _this2.hasCanvas = true;
        _this2.standaloneInit = false;
        _this2.defaultDatasetType = MAPS_STR;
        _this2.defaultSeriesType = GEO_STR;
        _this2.fireGroupEvent = true;
        _this2.legendposition = RIGHT_STR;
        _this2.hasGradientLegend = true;
        _this2.isMap = true;
        _this2.defaultPaletteOptions = {
            paletteColors: [
                [
                    "A6A6A6",
                    "CCCCCC",
                    "E1E1E1",
                    "F0F0F0"
                ],
                [
                    "A7AA95",
                    "C4C6B7",
                    "DEDFD7",
                    "F2F2EE"
                ],
                [
                    "04C2E3",
                    "66E7FD",
                    "9CEFFE",
                    "CEF8FF"
                ],
                [
                    "FA9101",
                    "FEB654",
                    "FED7A0",
                    "FFEDD5"
                ],
                [
                    "FF2B60",
                    "FF6C92",
                    "FFB9CB",
                    "FFE8EE"
                ]
            ],
            bgColor: [
                "FFFFFF",
                "CFD4BE,F3F5DD",
                "C5DADD,EDFBFE",
                "A86402,FDC16D",
                "FF7CA0,FFD1DD"
            ],
            bgAngle: [
                270,
                270,
                270,
                270,
                270
            ],
            bgRatio: [
                zeroCommaHundredStr,
                zeroCommaHundredStr,
                zeroCommaHundredStr,
                zeroCommaHundredStr,
                zeroCommaHundredStr
            ],
            bgAlpha: [
                "100",
                "60,50",
                "40,20",
                "20,10",
                "30,30"
            ],
            toolTipBgColor: [
                "FFFFFF",
                "FFFFFF",
                "FFFFFF",
                "FFFFFF",
                "FFFFFF"
            ],
            toolTipBorderColor: [
                "545454",
                "545454",
                "415D6F",
                "845001",
                "68001B"
            ],
            baseFontColor: [
                "555555",
                "60634E",
                "025B6A",
                "A15E01",
                "68001B"
            ],
            tickColor: [
                "333333",
                "60634E",
                "025B6A",
                "A15E01",
                "68001B"
            ],
            trendColor: [
                "545454",
                "60634E",
                "415D6F",
                "845001",
                "68001B"
            ],
            plotFillColor: [
                "545454",
                "60634E",
                "415D6F",
                "845001",
                "68001B"
            ],
            borderColor: [
                "767575",
                "545454",
                "415D6F",
                "845001",
                "68001B"
            ],
            borderAlpha: [
                50,
                50,
                50,
                50,
                50
            ]
        };
        _this2.colorPaletteMap = colorPaletteMapGlobal;
        _this2.eiMethods = eiMethodsGlobal;
        _this2.registerFactory("legend", _legendmanager.default, [
            "canvas"
        ]);
        _this2.registerFactory("axis", _lib.stubFN, [
            "canvas"
        ]);
        _this2.registerFactory("colormanager-decider", _colorrange.default, [
            "legend"
        ]);
        _this2.registerFactory("dataset", _mapsDataset.default, [
            "colormanager-decider"
        ]);
        _this2.registerFactory("canvas", _canvas.default);
        return _this2;
    }
    var _proto = Maps.prototype;
    _proto._checkInvalidSpecificData = function _checkInvalidSpecificData() {
        this.config.invalid = false;
        return false;
    };
    _proto.__setDefaultConfig = function __setDefaultConfig() {
        _MSCartesian.prototype.__setDefaultConfig.call(this);
        var config = this.config;
        !config.baseWidth && (config.baseWidth = 400);
        !config.baseHeight && (config.baseHeight = 300);
        !config.baseScaleFactor && (config.baseScaleFactor = 1);
    };
    Maps.getName = function getName() {
        return "maps";
    };
    Maps.getType = function getType() {
        return "chartAPI";
    };
    _proto.getName = function getName() {
        return this.config.name || "GEO";
    };
    _proto.getType = function getType() {
        return "chartAPI";
    };
    _proto.configureAttributes = function configureAttributes(dataObj) {
        var iapi = this, colorPalette = iapi.getChildren("colorPalette") && iapi.getChildren("colorPalette")[0], chartAttrs;
        chartAttrs = dataObj.chart = dataObj.chart || dataObj.graph || dataObj.map || {};
        iapi.jsonData = dataObj;
        if (!colorPalette) {
            colorPalette = new ColorPalette(this.colorPaletteMap, (chartAttrs.palette > 0 && chartAttrs.palette < 6 ? chartAttrs.palette : (0, _lib.pluckNumber)(iapi.paletteIndex, 1)) - 1);
            iapi.attachChild(colorPalette, "colorPalette");
        }
        iapi.config.skipCanvasDrawing = true;
        _MSCartesian.prototype.configureAttributes.call(this, dataObj);
        iapi._parseBackgroundCosmetics();
    };
    _proto.parseChartAttr = function parseChartAttr(dataObj) {
        var iapi = this, config, jsonData = iapi.jsonData, chartAttrs = jsonData.chart || jsonData.map, markerAttrs = jsonData.markers, palette = new ColorPalette(this.colorPaletteMap, (chartAttrs.palette > 0 && chartAttrs.palette < 6 ? chartAttrs.palette : (0, _lib.pluckNumber)(iapi.paletteIndex, 1)) - 1), inCancolor, inCanFontFamily, inCanFontSize, style, entityBorderColor = (0, _lib.pluck)(chartAttrs.entitybordercolor, chartAttrs.bordercolor, palette.plotbordercolor), entityFillColor = (0, _lib.pluck)(chartAttrs.entityfillcolor, chartAttrs.fillcolor, palette.plotfillcolor), entityFillAlpha = (0, _lib.pluck)(chartAttrs.entityfillalpha, chartAttrs.fillalpha, palette.plotfillalpha), entityFillRatio = (0, _lib.pluck)(chartAttrs.entityfillratio, chartAttrs.fillratio, palette.plotfillratio), entityFillAngle = (0, _lib.pluck)(chartAttrs.entityfillangle, chartAttrs.fillangle, palette.plotfillangle), nullEntityColor = (0, _lib.pluck)(chartAttrs.nullentityfillcolor, chartAttrs.nullentitycolor, entityFillColor), markerDataEnabled = (0, _lib.pluckNumber)(chartAttrs.usevaluesformarkers, jsonData.markers && jsonData.markers.items && jsonData.markers.items.length, !(jsonData.markers && jsonData.markers.application && jsonData.markers.application.length && jsonData.markers.definition && jsonData.markers.definition.length));
        _MSCartesian.prototype.parseChartAttr.call(this, dataObj);
        config = iapi.config;
        config.origMarginTop = (0, _lib.pluckNumber)(chartAttrs.charttopmargin, chartAttrs.maptopmargin, 11);
        config.origMarginLeft = (0, _lib.pluckNumber)(chartAttrs.chartleftmargin, chartAttrs.mapleftmargin, 11);
        config.origMarginBottom = (0, _lib.pluckNumber)(chartAttrs.chartbottommargin, chartAttrs.mapbottommargin, 11);
        config.origMarginRight = (0, _lib.pluckNumber)(chartAttrs.chartrightmargin, chartAttrs.maprightmargin, 11);
        config.labelsOnTop = (0, _lib.pluckNumber)(chartAttrs.entitylabelsontop, 1);
        style = config.style;
        inCancolor = style.inCancolor;
        inCanFontFamily = style.inCanfontFamily;
        inCanFontSize = style.inCanfontSize;
        config.entityOpts = {
            baseScaleFactor: config.baseScaleFactor,
            dataLabels: {
                style: {
                    fontFamily: inCanFontFamily,
                    fontSize: inCanFontSize,
                    lineHeight: style.inCanLineHeight,
                    color: (0, _lib.pluck)(chartAttrs.entitylabelcolor, style.inCancolor),
                    bgColor: (0, _lib.pluck)(chartAttrs.entitylabelbgcolor) || BLANK,
                    borderColor: (0, _lib.pluck)(chartAttrs.entitylabelbordercolor) || BLANK
                }
            },
            fillColor: entityFillColor,
            fillAlpha: entityFillAlpha,
            fillRatio: entityFillRatio,
            fillAngle: entityFillAngle,
            borderColor: entityBorderColor,
            borderAlpha: (0, _lib.pluck)(chartAttrs.entityborderalpha, chartAttrs.borderalpha, iapi.borderAlpha, "100"),
            borderThickness: (0, _lib.pluckNumber)(chartAttrs.showentityborder, chartAttrs.showborder, 1) ? (0, _lib.pluckNumber)(chartAttrs.entityborderthickness, chartAttrs.borderthickness, 1) : 0,
            scaleBorder: (0, _lib.pluckNumber)(chartAttrs.scaleentityborder, chartAttrs.scaleborder, 0),
            hoverFillColor: (0, _lib.pluck)(chartAttrs.entityfillhovercolor, chartAttrs.hoverfillcolor, chartAttrs.hovercolor, palette.plothoverfillcolor),
            hoverFillAlpha: (0, _lib.pluck)(chartAttrs.entityfillhoveralpha, chartAttrs.hoverfillalpha, chartAttrs.hoveralpha, palette.plothoverfillalpha),
            hoverFillRatio: (0, _lib.pluck)(chartAttrs.entityfillhoverratio, chartAttrs.hoverfillratio, chartAttrs.hoverratio, palette.plothoverfillratio),
            hoverFillAngle: (0, _lib.pluck)(chartAttrs.entityfillhoverangle, chartAttrs.hoverfillangle, chartAttrs.hoverangle, palette.plothoverfillangle),
            hoverBorderThickness: (0, _lib.pluck)(chartAttrs.entityborderhoverthickness, chartAttrs.hoverborderthickness),
            hoverBorderColor: (0, _lib.pluck)(chartAttrs.entityborderhovercolor, entityBorderColor, palette.plotbordercolor),
            hoverBorderAlpha: (0, _lib.pluck)(chartAttrs.entityborderhoveralpha, palette.plotborderalpha),
            nullEntityColor: nullEntityColor,
            nullEntityAlpha: (0, _lib.pluck)(chartAttrs.nullentityfillalpha, chartAttrs.nullentityalpha, entityFillAlpha),
            nullEntityRatio: (0, _lib.pluck)(chartAttrs.nullentityfillratio, chartAttrs.nullentityratio, entityFillRatio),
            nullEntityAngle: (0, _lib.pluck)(chartAttrs.nullentityfillangle, chartAttrs.nullentityangle, entityFillAngle),
            connectorColor: (0, _lib.pluck)(chartAttrs.labelconnectorcolor, chartAttrs.connectorcolor, inCancolor),
            connectorAlpha: (0, _lib.pluck)(chartAttrs.labelconnectoralpha, chartAttrs.connectoralpha, "100"),
            connectorThickness: (0, _lib.pluckNumber)(chartAttrs.labelconnectorthickness, chartAttrs.borderthickness, 1),
            showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showentityhovereffect, chartAttrs.usehovercolor, chartAttrs.showhovereffect, 1),
            hoverOnNull: (0, _lib.pluckNumber)(chartAttrs.hoveronnull, chartAttrs.entityhoveronnull, 1),
            labelPadding: (0, _lib.pluckNumber)(chartAttrs.labelpadding, 5),
            showLabels: (0, _lib.pluckNumber)(chartAttrs.showlabels, 1),
            labelsOnTop: (0, _lib.pluckNumber)(chartAttrs.entitylabelsontop, 1),
            includeNameInLabels: (0, _lib.pluckNumber)(chartAttrs.includenameinlabels, 1),
            includeValueInLabels: (0, _lib.pluckNumber)(chartAttrs.includevalueinlabels, 0),
            useSNameInTooltip: (0, _lib.pluckNumber)(chartAttrs.usesnameintooltip, 0),
            useShortName: (0, _lib.pluckNumber)(chartAttrs.usesnameinlabels, 1),
            labelSepChar: (0, _lib.pluck)(chartAttrs.labelsepchar, COMMASPACE),
            showTooltip: (0, _lib.pluckNumber)(chartAttrs.showentitytooltip, chartAttrs.showtooltip, 1),
            tooltipSepChar: (0, _lib.pluck)(chartAttrs.tooltipsepchar, ", "),
            tooltext: chartAttrs.entitytooltext,
            hideNullEntities: (0, _lib.pluckNumber)(chartAttrs.hidenullentities, 0),
            showHiddenEntityBorder: (0, _lib.pluckNumber)(chartAttrs.showhiddenentityborder, 1),
            showNullEntityBorder: (0, _lib.pluckNumber)(chartAttrs.shownullentityborder, 1),
            hiddenEntityColor: (0, _lib.pluck)(chartAttrs.hiddenentitycolor, chartAttrs.hiddenentityfillcolor, chartAttrs.hiddenentityalpha || chartAttrs.hiddenentityfillalpha ? nullEntityColor : "ffffff"),
            hiddenEntityAlpha: (0, _lib.pluck)(chartAttrs.hiddenentityalpha, chartAttrs.hiddenentityfillalpha, .001),
            shadow: (0, _lib.pluckNumber)(chartAttrs.showshadow, iapi.defaultPlotShadow, palette.shadow)
        };
        config.markerOpts = {
            dataLabels: {
                style: {
                    fontFamily: (0, _lib.pluck)(chartAttrs.markerfont, inCanFontFamily),
                    fontSize: (0, _lib.pluckNumber)(chartAttrs.markerfontsize, parseInt(inCanFontSize, 10)),
                    fontColor: (0, _lib.pluck)(chartAttrs.markerlabelcolor, chartAttrs.markerfontcolor, inCancolor),
                    labelBgColor: (0, _lib.pluck)(chartAttrs.markerlabelbgcolor) || BLANK,
                    labelBorderColor: (0, _lib.pluck)(chartAttrs.markerlabelbordercolor) || BLANK
                }
            },
            showTooltip: (0, _lib.pluckNumber)(chartAttrs.showmarkertooltip, chartAttrs.showtooltip, 1),
            showLabels: (0, _lib.pluckNumber)(chartAttrs.showmarkerlabels, chartAttrs.showlabels, 1),
            showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showmarkerhovereffect, 1),
            labelPadding: (0, _lib.pluck)(chartAttrs.markerlabelpadding, "5"),
            labelWrapWidth: (0, _lib.pluckNumber)(chartAttrs.markerlabelwrapwidth, 0),
            labelWrapHeight: (0, _lib.pluckNumber)(chartAttrs.markerlabelwrapheight, 0),
            fillColor: (0, _lib.pluck)(chartAttrs.markerfillcolor, chartAttrs.markerbgcolor, palette.markerfillcolor),
            fillAlpha: (0, _lib.pluck)(chartAttrs.markerfillalpha, palette.markerfillalpha),
            fillAngle: (0, _lib.pluck)(chartAttrs.markerfillangle, palette.markerfillangle),
            fillRatio: (0, _lib.pluck)(chartAttrs.markerfillratio, palette.markerfillratio),
            fillPattern: (0, _lib.pluck)(chartAttrs.markerfillpattern, palette.markerbgpattern),
            hoverFillColor: chartAttrs.markerfillhovercolor,
            hoverFillAlpha: chartAttrs.markerfillhoveralpha,
            hoverFillRatio: chartAttrs.markerfillhoverratio,
            hoverFillAngle: chartAttrs.markerfillhoverangle,
            borderThickness: (0, _lib.pluck)(chartAttrs.markerborderthickness, 1),
            borderColor: (0, _lib.pluck)(chartAttrs.markerbordercolor, palette.markerbordercolor),
            borderAlpha: (0, _lib.pluckNumber)(chartAttrs.markerborderalpha, palette.markerborderalpha),
            hoverBorderThickness: chartAttrs.markerborderhoverthickness,
            hoverBorderColor: chartAttrs.markerborderhovercolor,
            hoverBorderAlpha: chartAttrs.markerborderhoveralpha,
            radius: (0, _lib.pluckNumber)(chartAttrs.markerradius && (0, _lib.trimString)(chartAttrs.markerradius), 7),
            shapeId: (0, _lib.pluck)(chartAttrs.defaultmarkershape, SHAPE_CIRCLE),
            labelSepChar: (0, _lib.pluck)(chartAttrs.labelsepchar, COMMASPACE),
            tooltipSepChar: (0, _lib.pluck)(chartAttrs.tooltipsepchar, ", "),
            autoScale: (0, _lib.pluckNumber)(chartAttrs.autoscalemarkers, 0),
            tooltext: (0, _lib.pluck)(markerAttrs && markerAttrs.tooltext, chartAttrs.markertooltext),
            dataEnabled: markerDataEnabled,
            valueToRadius: (0, _lib.pluckNumber)(chartAttrs.markerradiusfromvalue, 1),
            valueMarkerAlpha: (0, _lib.pluck)(chartAttrs.valuemarkeralpha, "75"),
            hideNull: (0, _lib.pluckNumber)(chartAttrs.hidenullmarkers, 0),
            nullRadius: (0, _lib.pluckNumber)(chartAttrs.nullmarkerradius, chartAttrs.markerradius, 7),
            adjustViewPort: (0, _lib.pluckNumber)(chartAttrs.adjustviewportformarkers, 0),
            startAngle: (0, _lib.pluckNumber)(chartAttrs.markerstartangle, 90),
            maxRadius: (0, _lib.pluckNumber)(chartAttrs.maxmarkerradius, 0),
            minRadius: (0, _lib.pluckNumber)(chartAttrs.minmarkerradius, 0),
            applyAll: (0, _lib.pluckNumber)(chartAttrs.applyallmarkers, 0),
            shadow: (0, _lib.pluckNumber)(chartAttrs.showmarkershadow, chartAttrs.showshadow, 0)
        };
        config.connectorOpts = {
            showHoverEffect: (0, _lib.pluckNumber)(chartAttrs.showconnectorhovereffect, 1),
            thickness: (0, _lib.pluckNumber)(chartAttrs.connectorthickness, chartAttrs.markerconnthickness, "2"),
            color: (0, _lib.pluck)(chartAttrs.connectorcolor, chartAttrs.markerconncolor, palette.markerbordercolor),
            alpha: (0, _lib.pluck)(chartAttrs.connectoralpha, chartAttrs.markerconnalpha, "100"),
            hoverThickness: (0, _lib.pluckNumber)(chartAttrs.connectorhoverthickness, chartAttrs.connectorthickness, chartAttrs.markerconnthickness, "2"),
            hoverColor: (0, _lib.pluck)(chartAttrs.connectorhovercolor, chartAttrs.connectorcolor, chartAttrs.markerconncolor, palette.markerbordercolor),
            hoverAlpha: (0, _lib.pluck)(chartAttrs.connectorhoveralpha, chartAttrs.connectoralpha, chartAttrs.markerconnalpha, "100"),
            dashed: (0, _lib.pluckNumber)(chartAttrs.connectordashed, chartAttrs.markerconndashed, 0),
            dashLen: (0, _lib.pluckNumber)(chartAttrs.connectordashlen, chartAttrs.markerconndashlen, 3),
            dashGap: (0, _lib.pluckNumber)(chartAttrs.connectordashgap, chartAttrs.markerconndashgap, 2),
            font: (0, _lib.pluck)(chartAttrs.connectorfont, chartAttrs.markerconnfont, inCanFontFamily),
            fontColor: (0, _lib.pluck)(chartAttrs.connectorlabelcolor, chartAttrs.connectorfontcolor, chartAttrs.markerconnfontcolor, inCancolor),
            fontSize: (0, _lib.pluckNumber)(chartAttrs.connectorfontsize, chartAttrs.markerconnfontsize, parseInt(inCanFontSize, 10)),
            showLabels: (0, _lib.pluckNumber)(chartAttrs.showconnectorlabels, chartAttrs.showmarkerlabels, chartAttrs.showlabels, 1),
            labelBgColor: (0, _lib.pluck)(chartAttrs.connectorlabelbgcolor, chartAttrs.markerconnlabelbgcolor, palette.plotfillcolor),
            labelBorderColor: (0, _lib.pluck)(chartAttrs.connectorlabelbordercolor, chartAttrs.markerconnlabelbordercolor, palette.markerbordercolor),
            shadow: (0, _lib.pluckNumber)(chartAttrs.showconnectorshadow, chartAttrs.showmarkershadow, chartAttrs.showshadow, 0),
            showTooltip: (0, _lib.pluckNumber)(chartAttrs.showconnectortooltip, chartAttrs.showmarkertooltip, chartAttrs.showtooltip, 1),
            tooltext: (0, _lib.pluck)(markerAttrs && markerAttrs.connectortooltext, chartAttrs.connectortooltext),
            hideOpen: (0, _lib.pluckNumber)(chartAttrs.hideopenconnectors, 1)
        };
        config.adjustViewPortForMarkers = (0, _lib.pluckNumber)(chartAttrs.adjustviewportformarkers, markerDataEnabled);
    };
    _proto._attachMouseEvents = function _attachMouseEvents() {
        var iapi = this, listeners = iapi.getFromEnv("eventListeners"), containerElem = iapi.getFromEnv("chart-container");
        listeners.push(_domEvent.default.listen(containerElem, _lib.hasTouch ? "touchstart" : "click", Maps.searchMouseMove, iapi));
        listeners.push(_domEvent.default.listen(window.document, _lib.hasTouch ? "touchstart" : "mousemove", Maps.searchMouseMove, iapi));
    };
    _proto._dispose = function _dispose() {
        var iapi = this, containerElem = iapi.getFromEnv("chart-container");
        if (_lib.hasTouch) {
            _domEvent.default.unlisten(containerElem, "touchstart", Maps.searchMouseMove);
            _domEvent.default.unlisten(window.document, "touchstart", Maps.searchMouseMove);
        }
        _domEvent.default.unlisten(containerElem, "click", Maps.searchMouseMove);
        _domEvent.default.unlisten(window.document, "mousemove", Maps.searchMouseMove);
        _MSCartesian.prototype._dispose.call(this);
    };
    Maps.searchMouseMove = function searchMouseMove(e) {
        var mousePos, chart = e.data, chartConfig = chart.config, datasets = chart.getDatasets(), markers = datasets[1], toolTipController = markers && markers.getFromEnv("toolTipController"), currentToolTip = markers && markers.config.currentToolTip, lastHoveredPoint = chart.config.lastHoveredPoint, lastMouseCoordinate = {};
        if (!chart.getFromEnv("chart-container") || chart.config.lastInteractionEvent === e.originalEvent) return;
        chart.config.lastInteractionEvent = e.originalEvent;
        if ((mousePos = isWithinCanvas(e, chart)) && mousePos.insideCanvas) {
            chartConfig.lastMouseEvent = e;
            lastMouseCoordinate = {
                x: mousePos.chartX,
                y: mousePos.chartY
            };
            chart._searchNearestNeighbour(lastMouseCoordinate, e);
        } else {
            lastHoveredPoint && markers && markers.hoverOutFn(lastHoveredPoint.element);
            chart.config.lastHoveredPoint = null;
            toolTipController && toolTipController.hide(currentToolTip);
        }
    };
    _proto._searchNearestNeighbour = function _searchNearestNeighbour(point, event) {
        var iapi = this, datasets = iapi.getDatasets(), markers = datasets[1], kdPoint;
        if (markers) {
            if (!markers.components.kDTree) return;
            kdPoint = markers.getElement(point);
            if (kdPoint) markers.highlightPoint(kdPoint, event);
            else markers.highlightPoint(false, event);
        }
    };
    _proto._createLayers = function _createLayers() {
        _MSCartesian.prototype._createLayers.call(this);
        this._attachMouseEvents();
    };
    _proto._parseBackgroundCosmetics = function _parseBackgroundCosmetics() {
        var iapi = this, background = iapi.getChildren("background")[0], config = background.config, palette = iapi.getChildren("colorPalette")[0], chartAttrs = iapi.getFromEnv("chart-attrib"), showBorder;
        showBorder = config.showBorder = (0, _lib.pluckNumber)(chartAttrs.showcanvasborder, 1);
        config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.canvasborderthickness, 1) : 0;
        config.borderRadius = config.borderRadius = (0, _lib.pluckNumber)(chartAttrs.canvasborderradius, 0);
        config.borderDashStyle = config.borderDashStyle = (0, _lib.pluckNumber)(chartAttrs.borderdashed, 0) ? (0, _lib.getDashStyle)((0, _lib.pluckNumber)(chartAttrs.borderdashlen, 4), (0, _lib.pluckNumber)(chartAttrs.borderdashgap, 2)) : DASH_DEF;
        config.borderAlpha = (0, _lib.pluck)(chartAttrs.canvasborderalpha, palette.borderAlpha);
        config.borderColor = config.borderColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.canvasbordercolor, palette && palette.borderColor), config.borderAlpha);
    };
    _proto._getBackgroundCosmetics = function _getBackgroundCosmetics() {
        var iapi = this, chartAttrs = iapi.getFromEnv("chart-attrib") || iapi.jsonData.map, palette = iapi.getChildren("colorPalette")[0];
        return {
            FCcolor: {
                color: (0, _lib.pluck)(chartAttrs.bgcolor, chartAttrs.canvasbgcolor, palette.bgcolor),
                alpha: (0, _lib.pluck)(chartAttrs.bgalpha, chartAttrs.canvasbgalpha, palette.bgalpha),
                angle: (0, _lib.pluck)(chartAttrs.bgangle, chartAttrs.canvasbgangle, palette.bgangle),
                ratio: (0, _lib.pluck)(chartAttrs.bgratio, chartAttrs.canvasbgratio, palette.bgratio)
            }
        };
    };
    _proto._parseCanvasCosmetics = function _parseCanvasCosmetics() {
        _MSCartesian.prototype._parseCanvasCosmetics.call(this);
        var iapi = this, config = iapi.config, chartAttrs = iapi.getFromEnv("chart-attrib") || iapi.jsonData.map, canvasConfig = iapi.getChildren("canvas")[0].config;
        config.origMarginTop = (0, _lib.pluckNumber)(chartAttrs.maptopmargin, 11);
        config.origMarginLeft = (0, _lib.pluckNumber)(chartAttrs.mapleftmargin, 11);
        config.origMarginBottom = (0, _lib.pluckNumber)(chartAttrs.mapbottommargin, 11);
        config.origMarginRight = (0, _lib.pluckNumber)(chartAttrs.maprightmargin, 11);
        config.origCanvasLeftMargin = (0, _lib.pluckNumber)(chartAttrs.canvasleftmargin, 0);
        config.origCanvasRightMargin = (0, _lib.pluckNumber)(chartAttrs.canvasrightmargin, 0);
        config.origCanvasTopMargin = (0, _lib.pluckNumber)(chartAttrs.canvastopmargin, 0);
        config.origCanvasBottomMargin = (0, _lib.pluckNumber)(chartAttrs.canvasbottommargin, 0);
        canvasConfig.canvasBorderRadius = (0, _lib.pluckNumber)(chartAttrs.canvasborderradius, 0);
        canvasConfig.origCanvasTopPad = (0, _lib.pluckNumber)(chartAttrs.canvastoppadding, 0);
        canvasConfig.origCanvasBottomPad = (0, _lib.pluckNumber)(chartAttrs.canvasbottompadding, 0);
        canvasConfig.origCanvasLeftPad = (0, _lib.pluckNumber)(chartAttrs.canvasleftpadding, 0);
        canvasConfig.origCanvasRightPad = (0, _lib.pluckNumber)(chartAttrs.canvasrightpadding, 0);
    };
    _proto.preliminaryScaling = function preliminaryScaling() {
        var iapi = this, jsonData = iapi.jsonData, markerArray = jsonData.markers && jsonData.markers.items || [], i = markerArray && markerArray.length || 0, minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, x, y, item;
        while(i--){
            item = markerArray[i];
            x = Number(item.x);
            y = Number(item.y);
            minX = mathMin(minX, x);
            minY = mathMin(minY, y);
            maxX = mathMax(maxX, x);
            maxY = mathMax(maxY, y);
        }
        return {
            x: minX,
            y: minY,
            x1: maxX,
            y1: maxY
        };
    };
    _proto.getScalingParameters = function getScalingParameters(wg, hg, wv, hv) {
        var iapi = this, aspR = wg / hg, widthScaleR = wv / (wg * iapi.config.baseScaleFactor), heightScaleR = hv / (hg * iapi.config.baseScaleFactor), translateX = 0, translateY = 0, scaleFactor, strokeWidth;
        if (widthScaleR > heightScaleR) {
            scaleFactor = heightScaleR;
            translateX += (wv - hv * aspR) / 2;
            strokeWidth = 200 / (hg * scaleFactor);
        } else {
            scaleFactor = widthScaleR;
            translateY += (hv - wv / aspR) / 2;
            strokeWidth = 200 / (wg * scaleFactor);
        }
        return {
            scaleFactor: scaleFactor,
            strokeWidth: strokeWidth,
            translateX: translateX,
            translateY: translateY
        };
    };
    _proto.calculateMarkerBounds = function calculateMarkerBounds(scaleFactor, xOffset, yOffset) {
        var iapi = this, config = iapi.config, markerOptions = config.markerOpts, datasets = iapi.getDatasets(), limits = iapi.getDataLimits(), dataMin = limits.dataMin, dataMax = limits.dataMax, hideNull = markerOptions.hideNull, nullRadius = markerOptions.nullRadius, v2r = markerOptions.valueToRadius, markerDataset, markerConf, minR, maxR, markerArray, i, name, dataset, len, minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, x, y, r, definition, item;
        for(i = 0, len = datasets.length; i < len; i++){
            dataset = datasets[i];
            name = dataset.getName();
            if (name === "markers") markerDataset = dataset;
        }
        if (markerDataset) {
            markerDataset.calculateMarkerRadiusLimits();
            markerConf = markerDataset.config || {};
            minR = markerConf.minRadius;
            maxR = markerConf.maxRadius;
            markerArray = markerDataset.components && markerDataset.components.markerObjs || {};
            for(i in markerArray){
                item = markerArray[i];
                config = item.config;
                definition = config.definition || {};
                if (config.cleanValue !== null) {
                    if (v2r && definition.radius === UNDEF) config.radius = minR + (maxR - minR) * (config.cleanValue - dataMin) / (dataMax - dataMin);
                } else {
                    if (hideNull) config.__hideMarker = true;
                    else if (config.radius === null) config.radius = nullRadius;
                    continue;
                }
                r = Number(config.radius);
                x = (Number(definition.x) + xOffset) * scaleFactor;
                y = (Number(definition.y) + yOffset) * scaleFactor;
                minX = mathMin(minX, x - r);
                minY = mathMin(minY, y - r);
                maxX = mathMax(maxX, x + r);
                maxY = mathMax(maxY, y + r);
            }
        }
        return {
            x: minX,
            y: minY,
            x1: maxX,
            y1: maxY
        };
    };
    _proto._spaceManager = function _spaceManager() {
        var availableHeight, iapi = this, config = iapi.config, legend = iapi.getChildren("legend") && iapi.getChildren("legend")[0], gLegend = iapi.getChildren("gLegend") && iapi.getChildren("gLegend")[0], legendPosition = legend && legend.config.legendPos ? legend.config.legendPos.split("-") : gLegend && gLegend.conf.legendPosition ? gLegend.conf.legendPosition.split("-") : [], initSpace, chartAttrs = iapi.getFromEnv("chart-attrib"), showBorder = config.showBorder, translateX = config.origMarginLeft, translateY = config.origMarginTop, wg = iapi.config.baseWidth, hg = iapi.config.baseHeight, scalingParams, wv, hv, sFactor, extraMarkerSpace = {}, xDifference = 0, yDifference = 0, initHv, initWv, allottedSpace, topSpace, markerOptions = config.markerOpts, chartBorderWidth = config.borderWidth = showBorder ? (0, _lib.pluckNumber)(chartAttrs.borderthickness, 1) : 0;
        iapi._allocateSpace({
            top: chartBorderWidth,
            bottom: chartBorderWidth,
            left: chartBorderWidth,
            right: chartBorderWidth
        });
        iapi._allocateSpace(iapi._manageActionBarSpace && iapi._manageActionBarSpace(config.availableHeight * .225) || {});
        if (legendPosition[0] === "right" || legendPosition[0] === "left") allottedSpace = config.canvasWidth * .3;
        else allottedSpace = config.canvasHeight * .3;
        initSpace = legendPosition[0] === _lib.POSITION_TOP || legendPosition[0] === POSITION_BOTTOM ? config.canvasHeight : config.canvasWidth;
        config.showLegend && iapi._manageLegendSpace(allottedSpace);
        availableHeight = legendPosition[0] === POSITION_BOTTOM || legendPosition[0] === _lib.POSITION_TOP ? config.canvasHeight * .225 : config.canvasWidth * .225;
        if (legendPosition[0] === "top") translateY += initSpace - config.canvasHeight;
        topSpace = iapi._manageChartMenuBar(availableHeight);
        if (legendPosition[0] === "left") translateX += initSpace - config.canvasWidth;
        wv = config.canvasWidth;
        hv = config.canvasHeight;
        if (markerOptions.dataEnabled) {
            if (config.adjustViewPortForMarkers) {
                extraMarkerSpace = iapi.preliminaryScaling();
                if (extraMarkerSpace.x1 > wg) wg = extraMarkerSpace.x1;
                if (extraMarkerSpace.x < 0) {
                    wg += -extraMarkerSpace.x;
                    xDifference = -extraMarkerSpace.x;
                }
                if (extraMarkerSpace.y1 > hg) hg = extraMarkerSpace.y1;
                if (extraMarkerSpace.y < 0) {
                    hg += -extraMarkerSpace.y;
                    yDifference = -extraMarkerSpace.y;
                }
                scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
                extraMarkerSpace = iapi.calculateMarkerBounds(scalingParams.scaleFactor * iapi.config.baseScaleFactor, xDifference, yDifference);
                initHv = hv;
                initWv = wv;
                if (extraMarkerSpace.x < 0) {
                    translateX += -extraMarkerSpace.x;
                    wv += extraMarkerSpace.x;
                }
                if (extraMarkerSpace.y < 0) {
                    translateY += -extraMarkerSpace.y;
                    hv += extraMarkerSpace.y;
                }
                if (extraMarkerSpace.x1 > initWv) wv -= extraMarkerSpace.x1 - initWv;
                if (extraMarkerSpace.y1 > initHv) hv -= extraMarkerSpace.y1 - initHv;
            } else {
                scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
                iapi.calculateMarkerBounds(scalingParams.scaleFactor * iapi.config.baseScaleFactor, xDifference, yDifference);
            }
            scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
            translateX += xDifference * scalingParams.scaleFactor * iapi.config.baseScaleFactor;
            translateY += yDifference * scalingParams.scaleFactor * iapi.config.baseScaleFactor;
        } else scalingParams = iapi.getScalingParameters(wg, hg, wv, hv);
        iapi.config.scalingParams = scalingParams;
        sFactor = scalingParams.scaleFactor;
        scalingParams.translateX = scalingParams.translateX + translateX;
        scalingParams.translateY = scalingParams.translateY + translateY + topSpace.top || 0;
        scalingParams.sFactor = sFactor * iapi.config.baseScaleFactor * 100 / 100;
        scalingParams.transformStr = [
            "t",
            scalingParams.translateX,
            ",",
            scalingParams.translateY,
            "s",
            sFactor,
            ",",
            sFactor,
            ",0,0"
        ].join("");
        iapi.config.annotationConfig = {
            id: "Geo",
            showbelow: 0,
            autoscale: 0,
            grpxshift: scalingParams.translateX ? scalingParams.translateX : 0,
            grpyshift: scalingParams.translateY ? scalingParams.translateY : 0,
            xscale: (sFactor ? sFactor * iapi.config.baseScaleFactor : 1) * 100,
            yscale: (sFactor ? sFactor * iapi.config.baseScaleFactor : 1) * 100,
            scaletext: 1,
            options: {
                useTracker: true
            }
        };
    };
    _proto.getDataLimits = function getDataLimits() {
        var iapi = this, datasets = iapi.getDatasets(), length = datasets.length, dataset, dataMin = Infinity, dataMax = -Infinity, limits, i;
        for(i = 0; i < length; i++){
            dataset = datasets[i];
            limits = dataset.getDataLimits();
            dataMin = mathMin(dataMin, limits.min);
            dataMax = mathMax(dataMax, limits.max);
        }
        return {
            dataMin: dataMin,
            dataMax: dataMax
        };
    };
    _proto.getEntityPaths = function getEntityPaths(copy) {
        var returnObj = {}, ents = this.config.entities, id;
        if (copy) {
            for(id in ents)returnObj[id] = ents[id];
            return returnObj;
        }
        return ents;
    };
    _proto.checkComplete = function checkComplete() {
        var iapi = this;
        if (iapi.config.entityFlag && iapi.config.entitiesReady) {
            iapi.config.entityFlag = false;
            iapi.config.markersDrawn = true;
            iapi.fireChartInstanceEvent("internal.mapdrawingcomplete", {
                renderer: iapi
            });
        }
    };
    return Maps;
}(_mscartesian.default);
var _default = Maps;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/charts/src/chart/_internal/mscartesian":"asDlM","@fusioncharts/core/src/component-interface":"flMoh","@fusioncharts/charts/src/_internal/color-utils/chart-palette-colors":"arOWJ","@fusioncharts/core/src/dom-event":"1xyIg","@fusioncharts/core/src/event-api":"kNy85","@fusioncharts/core/src/lib":"gGvaa","../../factories/maps-dataset":"dcEDd","@fusioncharts/charts/src/factories/canvas":"kMny2","@fusioncharts/charts/src/factories/colorrange":"1kHbM","@fusioncharts/charts/src/factories/legendmanager":"bZT6V"}],"asDlM":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _cartesian = _interopRequireDefault(require("./cartesian"));
var _legendSpacemanager = require("../_internal/legend-spacemanager");
var _multiseriesDataset = _interopRequireDefault(require("../../factories/multiseries-dataset"));
var _legend = _interopRequireDefault(require("../../factories/legend"));
var MSCartesian = function(_Cartesian) {
    (0, _inheritsLoose2.default)(MSCartesian, _Cartesian);
    function MSCartesian() {
        var _this;
        _this = _Cartesian.call(this) || this;
        _this.registerFactory("dataset", _multiseriesDataset.default, [
            "vCanvas"
        ]);
        _this.registerFactory("legend", _legend.default);
        return _this;
    }
    MSCartesian.getName = function getName() {
        return "MSCartesian";
    };
    var _proto = MSCartesian.prototype;
    _proto.getName = function getName() {
        return "MSCartesian";
    };
    _proto.getType = function getType() {
        return "chartAPI";
    };
    _proto._manageLegendSpace = function _manageLegendSpace() {
        _legendSpacemanager._manageLegendSpace.call(this);
    };
    _proto.manageGradientLegendSpace = function manageGradientLegendSpace(allottedSpace) {
        return _legendSpacemanager.manageGradientLegendSpace.call(this, allottedSpace);
    };
    return MSCartesian;
}(_cartesian.default);
var _default = MSCartesian;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","./cartesian":"eNG4F","../_internal/legend-spacemanager":"3MufO","../../factories/multiseries-dataset":"3LVDr","../../factories/legend":"yEc6R"}],"3MufO":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports._manageLegendSpace = _manageLegendSpace;
exports.manageGradientLegendSpace = manageGradientLegendSpace;
var _lib = require("@fusioncharts/core/src/lib");
function _manageLegendSpace() {
    var iapi = this, config = iapi.config, legend = iapi.getChildren("legend") && iapi.getChildren("legend")[0], gradientLegend = iapi.getChildren("gLegend") && iapi.getChildren("gLegend")[0], conf, colorRangeObj = iapi.getFromEnv("dataSource").colorrange, hasLegend = config.hasLegend, spaceTakenByLegend = {}, hasGradientLegend = iapi.hasGradientLegend, legendPosition, allottedSpace, factor, chartAttr = iapi.getFromEnv("dataSource").chart, mapByCategory = (0, _lib.pluckNumber)(chartAttr.mapbycategory, 0), isGradient = hasGradientLegend && colorRangeObj && (0, _lib.pluckNumber)(colorRangeObj.gradient);
    if (isGradient && !mapByCategory) {
        conf = gradientLegend.conf;
        hasGradientLegend = true;
        config.gLegendEnabled = true;
        legendPosition = conf.legendPosition ? conf.legendPosition.split("-") : [];
        factor = legendPosition[0] === _lib.POSITION_RIGHT || legendPosition[0] === _lib.POSITION_LEFT ? .4 : .5;
    } else {
        conf = legend && legend.config;
        hasGradientLegend = false;
        config.gLegendEnabled = false;
        legendPosition = conf && conf.legendPos ? conf.legendPos.split("-") : [
            _lib.POSITION_BOTTOM
        ];
        factor = legendPosition[0] === _lib.POSITION_RIGHT || legendPosition[0] === _lib.POSITION_LEFT ? .8 : .4;
    }
    if (legendPosition[0] === _lib.POSITION_ABSOLUTE) allottedSpace = config.availableHeight * .4;
    else if (legendPosition[0] === _lib.POSITION_RIGHT || legendPosition[0] === _lib.POSITION_LEFT) allottedSpace = config.availableWidth * factor;
    else allottedSpace = config.availableHeight * factor;
    if (hasGradientLegend) spaceTakenByLegend = iapi.manageGradientLegendSpace(allottedSpace);
    else if (hasLegend !== false && legend && !legend.getState("removed")) spaceTakenByLegend = legend && legend._manageLegendPosition(allottedSpace);
    spaceTakenByLegend && iapi._allocateSpace(spaceTakenByLegend);
}
function manageGradientLegendSpace(allottedSpace) {
    var iapi = this, config = iapi.config, gradientLegend = iapi.getFromEnv("gLegend"), conf = gradientLegend && gradientLegend.conf, legendPosition, returnDimension = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }, gLegendPadding, spaceUsed;
    config.gLegendPadding = (0, _lib.pluckNumber)(iapi.getFromEnv("chart-attrib").legendpadding, 10);
    gLegendPadding = Math.min(config.gLegendPadding, .5 * allottedSpace);
    if (conf) {
        legendPosition = conf.legendPosition ? conf.legendPosition.split("-") : [];
        spaceUsed = gradientLegend.getLogicalSpace(allottedSpace);
        if (legendPosition[0] === _lib.POSITION_BOTTOM) returnDimension.bottom = (spaceUsed.height || 0) + gLegendPadding;
        else if (legendPosition[0] === _lib.POSITION_TOP) returnDimension.top = (spaceUsed.height || 0) + gLegendPadding;
        else if (legendPosition[0] === _lib.POSITION_LEFT) returnDimension.left = (spaceUsed.width || 0) + gLegendPadding;
        else if (legendPosition[0] !== _lib.POSITION_ABSOLUTE) returnDimension.right = (spaceUsed.width || 0) + gLegendPadding;
    }
    return returnDimension;
}

},{"@fusioncharts/core/src/lib":"gGvaa"}],"3LVDr":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = _default;
var _lib = require("@fusioncharts/core/src/lib");
function _default(chart) {
    var jsonData = chart.getFromEnv("dataSource"), datasetsJSON = jsonData.dataset, children = chart.getChildren(), canvas = children.canvas[0], vCanvas, datasetParent = vCanvas = canvas.getChildren("vCanvas")[0], DSClass, MultiSeriesManager, dsType = chart.config.defaultDatasetType || "", groupManager;
    if (!datasetsJSON) {
        chart.setChartMessage();
        return;
    }
    MultiSeriesManager = chart.getDSGroupdef();
    if (MultiSeriesManager) {
        (0, _lib.componentFactory)(vCanvas, MultiSeriesManager, "datasetGroup_" + dsType, 1, [
            datasetsJSON
        ]);
        groupManager = vCanvas.getChildren("datasetGroup_" + dsType);
    }
    groupManager && (datasetParent = groupManager[0]);
    DSClass = chart.getDSdef();
    (0, _lib.datasetFactory)(datasetParent, DSClass, "dataset", datasetsJSON.length, datasetsJSON);
}

},{"@fusioncharts/core/src/lib":"gGvaa"}],"yEc6R":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _lib = require("@fusioncharts/core/src/lib");
var _discrete = _interopRequireDefault(require("../_internal/components/legend/discrete"));
function _default(chart) {
    var legend;
    (0, _lib.componentFactory)(chart, _discrete.default, "legend");
    legend = chart.getChildren("legend")[0];
    legend.configure();
    chart.addToEnv("legend", legend);
    if (!chart.config.showLegend) legend.remove();
}

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@fusioncharts/core/src/lib":"gGvaa","../_internal/components/legend/discrete":"3XJdJ"}],"3XJdJ":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _lib = require("@fusioncharts/core/src/lib");
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var _legendItem = _interopRequireDefault(require("./legend-item"));
var _dependencyManager = require("@fusioncharts/core/src/dependency-manager");
var _toolbox = require("@fusioncharts/core/src/toolbox");
var _index = _interopRequireDefault(require("./index.animation"));
var _schedular = require("@fusioncharts/core/src/schedular");
var _faber = require("@fusioncharts/core/src/_internal/vendors/faberjs/src/faber");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var UNDEF, TEXT_ANCHOR_MAP = {
    left: _lib.POSITION_START,
    right: _lib.POSITION_END,
    center: _lib.POSITION_MIDDLE
}, math = Math, mathMin = math.min, mathMax = math.max, mathFloor = math.floor, mathCeil = math.ceil, INHERIT_STR = "inherit", COMMA = ",", NONE = "none", COLOR_WHITE = "#ffffff", PXSTRING = "px", ZERO_STR = "0,", NORMAL = _lib.preDefStr.NORMAL, BOLD = _lib.preDefStr.BOLD, noneStr = _lib.preDefStr.noneStr, styleValueMap = {
    fontWeight: {
        1: BOLD,
        0: NORMAL
    },
    fontStyle: {
        1: "italic",
        0: NORMAL
    },
    textDecoration: {
        1: "underline",
        0: noneStr
    }
}, scrollTimeOut, handlers = function handlers(legend) {
    var dragInitX, dragInitY;
    return {
        dragstart: function dragstart() {
            dragInitX = legend.config.xL || legend.config.xPos;
            dragInitY = legend.config.yL || legend.config.yPos;
        },
        dragmove: function dragmove(e) {
            var dx = e.originalEvent.data[0], dy = e.originalEvent.data[1], config = legend.config, chartConfig = legend.getFromEnv("chartConfig"), translationLimit = (config.borderWidth || 0) + 2, dragOffsetX, dragOffsetY;
            dragOffsetX = mathMin(mathMax(dragInitX + dx, translationLimit), chartConfig.width - config.width - translationLimit);
            dragOffsetY = mathMin(mathMax(dragInitY + dy, translationLimit), chartConfig.height - config.height - translationLimit);
            config.xPos = config.xL = dragOffsetX;
            config.yPos = config.yL = dragOffsetY;
            legend.addJob("draw", legend.dragDraw, _schedular.priorityList && _schedular.priorityList.draw);
        }
    };
};
(0, _dependencyManager.addDep)({
    name: "legendAnimation",
    type: "animationRule",
    extension: _index.default
});
var emptyArrayCreator = function emptyArrayCreator(n) {
    return Array(n).fill();
};
var Legend = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(Legend, _ComponentInterface);
    function Legend() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        var legend = (0, _assertThisInitialized2.default)(_this);
        legend._stateCosmetics = {};
        legend._legendState = [];
        legend.dragDraw = function() {
            legend.draw();
        };
        legend.drawScroll = function() {
            legend.createItemGroup();
            legend.createCaptionGroup();
        };
        legend.config.handlers = handlers(legend);
        return _this;
    }
    var _proto = Legend.prototype;
    _proto.createItem = function createItem(owner) {
        var legend = this, legendItem;
        legendItem = new _legendItem.default;
        legend.attachChild(legendItem, "legendItem");
        legendItem.setLinkedItem("owner", owner);
        legendItem.addEventListener("mouseover", function() {
            legendItem.setLegendState("hover", true);
        });
        legendItem.addEventListener("mouseout", function() {
            legendItem.removeLegendState("hover");
        });
        return legendItem.getId();
    };
    _proto.getItem = function getItem(id) {
        var legend = this, items = legend.getChildren().legendItem;
        if (id !== UNDEF) {
            if (items) for(var i = 0; i < items.length; i++){
                if (items[i].getId() === id) return items[i];
            }
        } else return false;
    };
    _proto.getSortedLegendItems = function getSortedLegendItems() {
        var legend = this, items = legend.getChildren("legendItem") || [], reverselegend = legend.config.reverselegend, map = {}, sortedItems = [], i, len;
        for(i = 0, len = items.length; i < len; i++)if (items[i].config.index === UNDEF) map[len + i] = items[i];
        else map[items[i].config.index] = items[i];
        Object.keys(map).sort(function(index1, index2) {
            if (reverselegend) return index2 - index1;
            return index1 - index2;
        }).forEach(function(index) {
            sortedItems.push(map[index]);
        });
        return sortedItems;
    };
    _proto.disposeItem = function disposeItem(id) {
        var legend = this, legendItem = legend.getItem(id);
        legendItem && legendItem.remove();
    };
    _proto.getName = function getName() {
        return "legend";
    };
    _proto.getType = function getType() {
        return "legend";
    };
    _proto.__setDefaultConfig = function __setDefaultConfig() {
        _ComponentInterface.prototype.__setDefaultConfig.call(this);
        var config = this.config;
        config.enabled = true;
        config.symbolWidth = 12;
        config.borderRadius = 1;
        config.lastScrollPos = 0;
        config.oriSymbolPadding = 3;
        config.textPadding = 4;
        config.scrollY = 0;
        config.scrollX = 0;
        config.backgroundColor = COLOR_WHITE;
        config.initialItemX = 0;
        config.title = {
            text: _lib.BLANKSTRING,
            x: 0,
            y: 0,
            padding: 2
        };
        config.scroll = {};
        config.horizontalScroll = {};
        config.itemStyle = {};
    };
    _proto.createLegendGroup = function createLegendGroup() {
        var legend = this, config = legend.config, chart = legend.getFromEnv("chart"), chartConfig = chart.config, animationManager = legend.getFromEnv("animationManager"), translationLimit = (config.borderWidth || 0) * .5 + 2, legendGroup, legendGroupCheck = legend.getContainer("legendGroup");
        config.xL && (config.xL = mathMin(mathMax(config.xL, translationLimit), chartConfig.width - config.width - translationLimit));
        config.yL && (config.yL = mathMin(mathMax(config.yL, translationLimit), chartConfig.height - config.height - translationLimit));
        legendGroup = animationManager.setAnimation({
            el: legendGroupCheck || "group",
            attr: {
                name: "legendGroup",
                transform: [
                    "T",
                    config.xL || config.xPos,
                    config.yL || config.yPos
                ]
            },
            container: chart.getChildContainer("legendGroup"),
            component: legend
        });
        if (!legendGroupCheck) legend.addContainer("legendGroup", legendGroup);
    };
    _proto.drawDualScrollRect = function drawDualScrollRect() {
        var rect = this.getGraphicalElement("dualScrollRect"), scrollbarContainer = this.getGraphicalElement("scrollbarContainer"), animationManager = this.getFromEnv("animationManager");
        if (this.config.scroll.enabled && this.config.horizontalScroll.enabled) {
            rect = animationManager.setAnimation({
                el: rect || "rect",
                attr: {
                    x: this.config.width - 12,
                    y: this.config.height - 12,
                    height: 12,
                    width: 12,
                    fill: this.config.legendScrollBgColor,
                    stroke: "none"
                },
                component: this,
                container: scrollbarContainer
            });
            rect = this.addGraphicalElement("dualScrollRect", rect);
        } else if (rect) rect.remove();
    };
    _proto.draw = function draw() {
        this.createLegendGroup();
        this.drawLegendBox();
        this.createItemGroup();
        this.createCaptionGroup();
        this.drawCaption();
        this.createScrollGroup();
        this.decideScroll();
        this.drawDualScrollRect();
    };
    _proto.decideScroll = function decideScroll() {
        var legend = this, legendConf = legend.config, scrollEnabled = legendConf.scroll.enabled, horizontalScrollEnabled = legendConf.horizontalScroll.enabled;
        if (scrollEnabled) this.createScrollBar();
        else if (legendConf.hasScroll) {
            legend.getChildren("legendScrollBar")[0].remove();
            legendConf.hasScroll = false;
        }
        if (horizontalScrollEnabled) this.createScrollBar(horizontalScrollEnabled);
        else if (legendConf.hasHorizontalScroll) {
            legend.getChildren("legendHorizontalScrollBar")[0].remove();
            legendConf.hasHorizontalScroll = false;
        }
    };
    _proto.createCaptionGroup = function createCaptionGroup() {
        var captionGroupCheck = this.getChildContainer("captionGroup"), animationManager = this.getFromEnv("animationManager"), legendGroup = this.getContainer("legendGroup"), captionGroup, padding = (0, _lib.pluckNumber)(this.config.padding, 4), halfPad = padding * .5, clipSTR1 = ZERO_STR, clipH = mathMax(this.config.height - padding, 0), clipV = mathMax(this.config.width - padding, 0), clipSTR2 = COMMA + (this.config.horizontalScroll.enabled ? clipV : this.config.width) + COMMA + (this.config.scroll.enabled ? clipH : this.config.height);
        if (this.config.horizontalScroll.enabled) {
            captionGroup = this.addChildContainer("captionGroup", animationManager.setAnimation({
                el: captionGroupCheck && captionGroupCheck[0] !== null ? captionGroupCheck : "group",
                attr: {
                    name: "captionGroup",
                    transform: [
                        "T",
                        0,
                        this.config.scrollY || 0
                    ]
                },
                container: legendGroup,
                component: this
            }));
            if (this.config.scroll.enabled) captionGroup.attr({
                "clip-rect": clipSTR1 + halfPad + clipSTR2
            });
            else captionGroup.attr({
                "clip-rect": null
            });
        } else if (captionGroupCheck) captionGroupCheck.remove();
    };
    _proto.createItemGroup = function createItemGroup() {
        var legend = this, animationManager = legend.getFromEnv("animationManager"), legendGroup = legend.getContainer("legendGroup"), itemGroup, itemGroupCheck = legend.getChildContainer("itemGroup"), padding = (0, _lib.pluckNumber)(legend.config.padding, 4), halfPad = padding * .5, clipSTR1 = ZERO_STR, clipH = mathMax(legend.config.height - padding, 0), clipV = mathMax(legend.config.width - padding, 0), clipSTR2 = COMMA + (legend.config.horizontalScroll.enabled ? clipV : legend.config.width) + COMMA + (legend.config.scroll.enabled ? clipH : legend.config.height);
        itemGroup = animationManager.setAnimation({
            el: itemGroupCheck || "group",
            attr: {
                name: "item",
                transform: [
                    "T",
                    legend.config.scrollX || 0,
                    legend.config.scrollY || 0
                ]
            },
            container: legendGroup,
            component: legend
        });
        if (!itemGroupCheck) legend.addChildContainer("itemGroup", itemGroup);
        if (legend.config.scroll.enabled || legend.config.horizontalScroll.enabled) itemGroup.attr({
            "clip-rect": clipSTR1 + halfPad + clipSTR2
        });
        else itemGroup.attr({
            "clip-rect": null
        });
        return itemGroup;
    };
    _proto.createScrollGroup = function createScrollGroup() {
        var legend = this, animationManager = legend.getFromEnv("animationManager"), scrollGroupCheck = legend.getChildContainer("scrollGroup"), legendGroup = legend.getContainer("legendGroup");
        if ((legend.config.scroll.enabled || legend.config.horizontalScroll.enabled) && !legend.getGraphicalElement("scrollbarContainer")) legend.addGraphicalElement("scrollbarContainer", animationManager.setAnimation({
            el: scrollGroupCheck || "group",
            attr: {
                name: "scrollGroup"
            },
            container: legendGroup,
            component: legend,
            label: "scrollbar"
        }));
    };
    _proto.createScrollBar = function createScrollBar(isHorizontal) {
        if (isHorizontal === void 0) isHorizontal = false;
        var legend = this, config = legend.config, scrollItem, chartAttr = legend.getFromEnv("chart-attrib"), childName = isHorizontal ? "legendHorizontalScrollBar" : "legendScrollBar", legendScrollBar = legend.getChildren(childName) && legend.getChildren(childName)[0], borderWidth = config.borderWidth || 0, semiBorder = borderWidth * .5, padding = (0, _lib.pluckNumber)(config.padding, 4), scrollConfig, clipH, clipV, width = config.width, height = config.height, x, y, h, w;
        scrollItem = {
            conf: {
                isHorizontal: isHorizontal
            },
            handler: {
                scroll: function scroll(pos) {
                    function preventDefault(e) {
                        e.preventDefault();
                    }
                    document.addEventListener("touchmove", preventDefault, {
                        passive: false
                    });
                    config.lastScrollPos = pos;
                    if (isHorizontal) config.scrollX = (clipV - config.totalWidth) * pos;
                    else config.scrollY = (clipH - config.totalHeight) * pos;
                    legend.addJob("scrollDraw", legend.drawScroll, _schedular.priorityList && _schedular.priorityList.draw);
                    if (scrollTimeOut) clearTimeout(scrollTimeOut);
                    scrollTimeOut = setTimeout(function() {
                        document.removeEventListener("touchmove", preventDefault);
                    }, 250);
                },
                mousedown: function mousedown(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        };
        if (chartAttr.legendscrollbgcolor) scrollItem.conf.color = (0, _lib.convertColor)(chartAttr.legendscrollbgcolor);
        if (!legendScrollBar) {
            legendScrollBar = legend.attachChild(new _toolbox.ScrollBar, childName);
            if (isHorizontal) this.config.hasHorizontalScroll = true;
            else this.config.hasScroll = true;
        }
        legendScrollBar.configure(scrollItem.conf);
        legendScrollBar.attachEventHandlers(scrollItem.handler);
        scrollConfig = legendScrollBar.config;
        if (isHorizontal) {
            x = semiBorder;
            y = height - legendScrollBar.getLogicalSpace().height - borderWidth + padding * .5;
            w = width - borderWidth;
            if (this.config.scroll.enabled && this.config.horizontalScroll.enabled) w -= 12;
            w = mathMax(w, 0);
            clipV = mathMax(width - padding, 0);
            scrollConfig.scrollRatio = (clipV + padding) / config.totalWidth;
        } else {
            clipH = mathMax(height - padding, 0);
            x = width - legendScrollBar.getLogicalSpace().width - borderWidth + padding * .5;
            y = semiBorder;
            h = height - borderWidth;
            if (this.config.scroll.enabled && this.config.horizontalScroll.enabled) h -= 12;
            h = mathMax(h, 0);
            scrollConfig.scrollRatio = (clipH + padding) / config.totalHeight;
        }
        scrollConfig.startPercent = 0;
        scrollConfig.scrollPosition = config.lastScrollPos;
        scrollConfig.parentLayer = legend.getChildContainer("scrollGroup");
        legendScrollBar.setDimension({
            x: x,
            y: y,
            height: h,
            width: w
        });
    };
    _proto.drawCaption = function drawCaption() {
        var legend = this, caption = legend.getGraphicalElement("caption"), itemGroup = legend.config.horizontalScroll.enabled ? legend.getChildContainer("captionGroup") : legend.getChildContainer("itemGroup"), animationManager = this.getFromEnv("animationManager"), config = this.config, attrObj, titleStyle, captionX, padding = (0, _lib.pluckNumber)(config.padding, 4), captionCss, scrollEnabled = config.scroll.enabled, scrollbarWidth = 10, width = config.width;
        if (config.title && config.title.text !== _lib.BLANKSTRING && config.validLegendItem) {
            switch(config.title.align){
                case _lib.POSITION_START:
                    captionX = padding;
                    break;
                case _lib.POSITION_END:
                    captionX = width - padding - (scrollEnabled ? scrollbarWidth : 0);
                    break;
                default:
                    captionX = width * .5;
            }
            titleStyle = config.title.style;
            attrObj = {
                text: config.title.text,
                title: config.title.originalText || _lib.BLANKSTRING,
                x: captionX,
                y: padding,
                fill: config.title.style.color,
                direction: config.textDirection,
                "line-height": titleStyle.lineHeight,
                "vertical-align": _lib.POSITION_TOP,
                "text-anchor": config.title.align,
                opacity: 1
            };
            captionCss = {
                "font-weight": titleStyle.fontWeight,
                "font-style": titleStyle.fontStyle,
                "font-family": titleStyle.fontFamily,
                "font-size": titleStyle.fontSize
            };
            caption && caption.show();
            if (!caption || !caption[0]) {
                caption = animationManager.setAnimation({
                    el: "text",
                    attr: attrObj,
                    component: legend,
                    container: itemGroup,
                    css: captionCss
                });
                caption = this.addGraphicalElement("caption", caption);
            } else animationManager.setAnimation({
                el: caption,
                attr: attrObj,
                component: legend,
                container: itemGroup,
                css: captionCss
            });
            legend.getFromEnv("toolTipController").enableToolTip(caption, config.title.originalText);
        } else if (caption) animationManager.setAnimation({
            el: caption,
            component: legend,
            doNotRemove: true,
            callback: function callback() {
                caption.hide();
            }
        });
    };
    _proto.drawLegendBox = function drawLegendBox() {
        var legend = this, animationManager = this.getFromEnv("animationManager"), config = legend.config, box, legendGroup = legend.getContainer("legendGroup"), width = config.width, boxCheck = legend.getGraphicalElement("box"), height = config.height, r = config.borderRadius, backgroundColor = config.backgroundColor, borderColor = config.borderColor, borderAlpha = config.borderAlpha, backgroundAlpha = config.backgroundAlpha, borderWidth = config.borderWidth || 0;
        box = animationManager.setAnimation({
            el: boxCheck || "rect",
            attr: {
                x: 0,
                y: 0,
                width: width,
                height: height,
                r: r,
                stroke: borderColor,
                "stroke-width": borderWidth,
                fill: backgroundColor || NONE,
                "stroke-opacity": borderAlpha / 100,
                "fill-opacity": backgroundAlpha / 100,
                cursor: config.legendAllowDrag ? "move" : "default"
            },
            container: legendGroup,
            component: legend,
            label: "legendGroup"
        });
        if (!boxCheck) {
            legend.addGraphicalElement("box", box);
            box.shadow(config.shadow);
        }
        return box;
    };
    _proto._calculateTopPosition = function _calculateTopPosition(y) {
        var legend = this, chart = legend.getFromEnv("chart"), chartConfig = chart.config, yPos = y, caption = chart.getChildren("caption") && chart.getChildren("caption")[0], subCaption = chart.getChildren("subCaption") && chart.getChildren("subCaption")[0], toolbar = chart.getChildren("chartMenuBar") && chart.getChildren("chartMenuBar")[0], oriCanvasTop = chartConfig.oriTopSpace;
        if (!chartConfig.toolbarY && toolbar && toolbar.props && toolbar.props.height) {
            if (!(oriCanvasTop > toolbar.props.height + toolbar.props.y)) yPos = toolbar.props.y + toolbar.props.height;
        }
        if (caption && caption.config && caption.config.text && caption.config.text !== _lib.BLANKSTRING && caption.config.height && caption.config.isOnTop === 1) yPos = caption.config.height + caption.config.y + caption.config.captionPadding;
        if (subCaption && subCaption.config && subCaption.config.height && subCaption.config.isOnTop === 1) yPos = subCaption.config.y + subCaption.config.height + (caption && caption.config && caption.config.captionPadding || 0);
        return mathMax(yPos, y);
    };
    _proto.getPosition = function getPosition() {
        var legend = this, chart = legend.getFromEnv("chart"), chartConfig = chart.config, xPos, yPos, xLim, yLim, config = legend.config, canvas = chart.getChildren("canvas"), canvasBottom = canvas && canvas.length > 1 ? chartConfig.height - canvas[0].config.canvasBottom : chartConfig.height - chartConfig.canvasBottom, canvasLeft = chartConfig.canvasLeft, canvasRight = chartConfig.canvasRight, canvasWidth = chartConfig.canvasWidth, marginLeft = config.chartMarginLeft || 0, marginRight = config.chartMarginRight || 0, marginTop = config.chartMarginTop || 0, marginBottom = config.chartMarginBottom || 0, actionBarHeight = chartConfig.actionBarHeight || 0, canvasMarginLeft = config.actualCanvasMarginLeft || 0, canvasMarginTop = chartConfig.actualCanvasMarginTop || 0, canvasMarginBottom = chartConfig.actualCanvasMarginBottom || 0, canvasMarginRight = chartConfig.actualCanvasMarginRight || 0, alignLegendWithCanvas = config.alignLegendWithCanvas, chartHeight = chartConfig.height, canvasTop = chartConfig.canvasTop, width = config.width || 0, height = config.height || 0, chartBorderWidth = chartConfig.borderWidth, oriCanvasLeft = chartConfig.oriCanvasLeft, oriCanvasRight = chartConfig.oriCanvasRight, oriCanvasTop = chartConfig.oriTopSpace, oriCanvasBottom = chartConfig.oriBottomSpace, topSpace = 0, bottomSpace = 0, xLeft, xRight, spaceLeftByChart, spaceRightLeft, borderWidth = config.borderWidth || 0, isVertical, legendPos = config.legendPos ? config.legendPos.split("-") : [], caption = chart.getChildren("caption") && chart.getChildren("caption")[0], subCaption = chart.getChildren("subCaption") && chart.getChildren("subCaption")[0], remSpace;
        if (legendPos[0] === _lib.POSITION_LEFT || legendPos[0] === _lib.POSITION_RIGHT) {
            config.align = legendPos[0];
            config.verticalAlign = _lib.POSITION_MIDDLE;
            isVertical = config.layout = "vertical";
        }
        if (legendPos[0] === _lib.POSITION_ABSOLUTE) {
            xPos = config.legendXPosition;
            yPos = config.legendYPosition;
            xLim = chartConfig.width - width - chartBorderWidth;
            yLim = chartConfig.height - height - chartBorderWidth;
            if (xPos > xLim) xPos = xLim;
            if (yPos > yLim) yPos = yLim;
        } else if (isVertical) {
            if (legendPos[0] === _lib.POSITION_LEFT) xPos = marginLeft + canvasMarginLeft + chartBorderWidth;
            else if (legendPos[0] === _lib.POSITION_RIGHT) xPos = chartConfig.width - marginRight - canvasMarginRight - width - chartBorderWidth;
            topSpace = (0, _lib.pluckNumber)(oriCanvasTop, canvasTop);
            bottomSpace = (0, _lib.pluckNumber)(oriCanvasBottom, canvasBottom);
            if (legendPos[1] === _lib.POSITION_TOP) {
                yPos = topSpace + (config.y || 0);
                yPos = this._calculateTopPosition(yPos);
            } else if (legendPos[1] === _lib.POSITION_BOTTOM) {
                yPos = chartHeight - bottomSpace - height + (config.y || 0);
                remSpace = bottomSpace - (chartBorderWidth + marginBottom + actionBarHeight + (caption && caption.config.isOnTop === 0 && caption.config.height ? caption.config.height + caption.config.captionPadding : 0) + (subCaption && caption.config.isOnTop === 0 ? subCaption.config.height : 0));
                if (remSpace < 0) yPos += remSpace;
            } else yPos = topSpace + (chartHeight - bottomSpace - topSpace - height) * .5 + (config.y || 0);
        } else {
            spaceLeftByChart = chartConfig.width - (marginLeft + canvasMarginLeft + (marginRight + canvasMarginRight));
            spaceRightLeft = alignLegendWithCanvas ? canvasWidth - width : spaceLeftByChart - width;
            xLeft = alignLegendWithCanvas ? (0, _lib.pluckNumber)(oriCanvasLeft, canvasLeft) : marginLeft + canvasMarginLeft;
            xRight = alignLegendWithCanvas ? chartConfig.width - (0, _lib.pluckNumber)(oriCanvasRight, canvasRight) : marginRight + canvasMarginRight;
            if (legendPos[1] === _lib.POSITION_LEFT) xPos = xLeft;
            else if (legendPos[1] === _lib.POSITION_RIGHT) xPos = chartConfig.width - (width + xRight);
            else xPos = xLeft + spaceRightLeft / 2;
            if (legendPos[0] === _lib.POSITION_TOP) {
                yPos = marginTop + canvasMarginTop;
                yPos = this._calculateTopPosition(yPos);
            } else yPos = chartHeight - height - canvasMarginBottom - marginBottom - actionBarHeight;
        }
        return (0, _lib.crispBound)(xPos, yPos, width, height, borderWidth);
    };
    _proto.setTranslation = function setTranslation(x, y) {
        var legend = this, config = legend.config;
        config._translateX = x;
        config._translateY = y;
        config.translate = "t" + x + "," + y;
    };
    _proto.allocatePosition = function allocatePosition() {
        var legend = this, legendConfig = legend.config, dim;
        if (legendConfig.translate) dim = (0, _lib.crispBound)(legendConfig._translateX, legendConfig._translateY, legendConfig.width, legendConfig.height, legendConfig.borderWidth);
        else dim = legend.getPosition();
        legendConfig.xPos = dim.x;
        legendConfig.yPos = dim.y;
        legendConfig.width = dim.width;
        legendConfig.height = dim.height;
    };
    _proto._manageLegendPosition = function _manageLegendPosition(allottedSpace) {
        var legend = this, config = legend.config, legendPosition = config.legendPos ? config.legendPos.split("-") : [], spaceTakenByLegend, dim = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        config.padding = 4;
        config.textPadding = 4;
        if (legendPosition[0] === _lib.POSITION_ABSOLUTE) spaceTakenByLegend = legend._placeLegendBlockBottom(allottedSpace, .6);
        else if (legendPosition[0] === _lib.POSITION_LEFT || legendPosition[0] === _lib.POSITION_RIGHT) spaceTakenByLegend = legend._placeLegendBlockRight(allottedSpace);
        else spaceTakenByLegend = legend._placeLegendBlockBottom(allottedSpace);
        if (legendPosition[0] === _lib.POSITION_LEFT) dim.left = spaceTakenByLegend && spaceTakenByLegend.right || 0;
        else if (legendPosition[0] === _lib.POSITION_RIGHT) dim.right = spaceTakenByLegend && spaceTakenByLegend.right || 0;
        else if (legendPosition[0] === _lib.POSITION_TOP) dim.top = spaceTakenByLegend && spaceTakenByLegend.bottom || 0;
        else if (legendPosition[0] !== _lib.POSITION_ABSOLUTE) {
            dim.bottom = spaceTakenByLegend && spaceTakenByLegend.bottom || 0;
            dim.right = spaceTakenByLegend && spaceTakenByLegend.right || 0;
        }
        return dim;
    };
    _proto.setDimension = function setDimension(dim) {
        var legend = this, config = this.config, itemArr = legend.getSortedLegendItems(), chartAttr = legend.getFromEnv("chart-attrib"), len = itemArr.length, availableWidth = (0, _lib.pluckNumber)(chartAttr.legendwidth, dim.width), availableHeight = dim.height, allowedMaxHeight = availableHeight, itemConfig, userConfig, name, item, maxWidth = 0, totalWidth = 0, totalNumber = 0, averageWidth = 0, perItemWidth = 0, maxHeight = 0, legendCaptionHeight = 0, tempTableStructure = [], padding = config.padding, textPadding = config.textPadding, SmartLabel = legend.getFromEnv("smartLabel"), itemStyle = legend.getStateCosmetics("default"), legendFontSize = this.computeFontSize(config.legendFontSizeWithUnit), legendLineHeight = parseInt((0, _lib.setLineHeight)({
            fontSize: legendFontSize + PXSTRING
        }), 10), itemFontSize = parseInt(itemStyle.text["font-size"], 10) || 10, nonItemWidth, rowHeight, usedHeight, textWidth, legendCaption = config.title, captionPadding = legendCaption.padding, captionWidth = 0, minimiseWrappingInLegend = config.minimiseWrappingInLegend, legendPadding = config.legendPadding, legendScale = config.legendScale, alignLegendWithCanvas = config.alignLegendWithCanvas, legendnumcolumns = config.numColumns, legendnumrows = config.numRows, symbolPadding = config.oriSymbolPadding, legendHeight, symbolWidthSpace, dimensions, i, k, itemWidth, itemHeight = Number.MAX_SAFE_INTEGER, parent, children, childLegends, legendSpace, numRows, validLegendItem, smartText, scroll, horizontalScroll, originalAvailableWidth = availableWidth, nonTextElemWidth, hasLegendCaption = false, hasUserGivenLegendNumRows = !!legendnumrows, shiftRows, shiftColumns, insertionState = 0;
        dimensions = {
            width: 2 * padding,
            height: 2 * padding
        };
        legend.setStateCosmetics("default", {
            text: {
                fill: itemStyle.text.fill,
                "font-family": itemStyle.text["font-family"],
                cursor: itemStyle.text.cursor,
                "font-size": itemStyle.text["font-size"],
                "line-height": itemStyle.text["line-height"],
                "vertical-align": _lib.POSITION_TOP,
                "text-anchor": _lib.POSITION_START,
                direction: itemStyle.text.direction,
                "font-weight": itemStyle.text["font-weight"]
            },
            symbol: {
                bgColor: itemStyle.symbol.bgColor,
                cursor: itemStyle.symbol.cursor,
                borderColor: itemStyle.symbol.borderColor,
                bgAlpha: itemStyle.symbol.bgAlpha,
                borderAlpha: itemStyle.symbol.borderAlpha,
                borderThickness: itemStyle.symbol.borderThickness,
                startAngle: itemStyle.symbol.startAngle,
                sides: itemStyle.symbol.sides
            }
        });
        symbolWidthSpace = itemFontSize + 1;
        if (symbolWidthSpace <= 0) symbolWidthSpace = 1;
        availableWidth = Math.max(availableWidth - .5 * padding, 0);
        symbolWidthSpace *= legendScale;
        symbolPadding *= legendScale;
        symbolWidthSpace = mathMin(symbolWidthSpace, availableWidth);
        if (symbolWidthSpace <= 0) symbolPadding = symbolWidthSpace = 0;
        config.symbolWidth = symbolWidthSpace;
        config.textPadding = 4;
        config.legendHeight = legendHeight = symbolWidthSpace + 2 * symbolPadding;
        config.rowHeight = rowHeight = mathMax(parseInt(itemStyle.text["line-height"], 10) || 12, legendHeight);
        nonItemWidth = textPadding + symbolPadding + padding;
        SmartLabel.setStyle((0, _lib.extend2)({}, itemStyle.text));
        usedHeight = legendPadding + config.borderWidth / 2 + 1;
        usedHeight = mathMax(mathMin(usedHeight, availableHeight - legendLineHeight - 8), 0);
        legendPadding = rowHeight * .05;
        config.initialItemY = 0;
        config.initialItemX = 0;
        nonTextElemWidth = legendHeight + legendPadding + textPadding + symbolPadding + 2 * padding;
        for(i = 0; i < len; i += 1){
            item = itemArr[i];
            itemConfig = item.config || (item.config = {});
            userConfig = itemConfig;
            name = itemConfig.name = (0, _lib.parseUnsafeString)(userConfig.label);
            if (name === _lib.BLANKSTRING || userConfig.enabled === 0 || userConfig.enabled === false || item.getState("removed")) {
                itemConfig.enabled = 0;
                continue;
            } else itemConfig.enabled = 1;
            totalNumber += 1;
            validLegendItem = true;
            smartText = SmartLabel.getOriSize(name);
            maxWidth = mathMax(maxWidth, mathMin(smartText.width, availableWidth - nonTextElemWidth));
            maxHeight = mathMax(maxHeight, mathMin(smartText.height, allowedMaxHeight));
            itemConfig._selfTotalWidth = smartText.width + nonTextElemWidth;
            totalWidth += smartText.width;
        }
        config.validLegendItem = validLegendItem;
        averageWidth = totalWidth / totalNumber;
        totalWidth += nonTextElemWidth * totalNumber;
        config.x = !alignLegendWithCanvas && totalWidth > originalAvailableWidth ? 0 : config.x;
        if (validLegendItem) {
            averageWidth += nonTextElemWidth;
            maxWidth += nonTextElemWidth;
            if (legendCaption.oriText !== _lib.BLANKSTRING) {
                hasLegendCaption = true;
                SmartLabel.setStyle(legendCaption.style);
                smartText = SmartLabel.getSmartText(legendCaption.oriText, availableWidth - 2 * padding);
                legendCaption.text = smartText.text;
                smartText.tooltext && (legendCaption.originalText = smartText.tooltext);
                captionWidth = smartText.width + 2 * padding;
                legendCaptionHeight = smartText.height + captionPadding;
            }
            itemWidth = maxWidth;
            if (!legendnumrows) {
                if (totalWidth <= availableWidth) {
                    legendnumcolumns = !legendnumcolumns ? totalNumber : legendnumcolumns;
                    legendnumrows = mathCeil(totalNumber / legendnumcolumns);
                    itemWidth = legendnumrows === 1 ? totalWidth / totalNumber : maxWidth;
                } else if (!legendnumcolumns && availableWidth > maxWidth && (minimiseWrappingInLegend || averageWidth * 1.5 > maxWidth)) {
                    legendnumcolumns = mathFloor(availableWidth / maxWidth);
                    if (totalNumber < legendnumcolumns) legendnumcolumns = totalNumber;
                    itemWidth = maxWidth;
                } else if (legendnumcolumns && availableWidth / legendnumcolumns > averageWidth) {
                    itemWidth = availableWidth / legendnumcolumns;
                    if (itemWidth > maxWidth) itemWidth = maxWidth;
                } else if (!legendnumcolumns && availableWidth >= 2 * averageWidth) {
                    legendnumcolumns = mathFloor(availableWidth / averageWidth);
                    if (totalNumber < legendnumcolumns) legendnumcolumns = totalNumber;
                    itemWidth = mathFloor(availableWidth / legendnumcolumns);
                    if (itemWidth > maxWidth) itemWidth = maxWidth;
                } else if (!legendnumcolumns) {
                    legendnumcolumns = 1;
                    itemWidth = availableWidth;
                }
            } else if (!legendnumcolumns && legendnumrows) {
                insertionState = 1;
                if (totalNumber < legendnumrows) legendnumrows = totalNumber;
                legendnumcolumns = mathCeil(totalNumber / legendnumrows);
            } else if (mathCeil(totalNumber / legendnumcolumns) < legendnumrows && mathCeil(totalNumber / legendnumrows) < legendnumcolumns || totalNumber > legendnumcolumns * legendnumrows) legendnumrows = mathCeil(totalNumber / legendnumcolumns);
            else if (legendnumcolumns === mathCeil(totalNumber / legendnumrows)) insertionState = 1;
            perItemWidth = hasUserGivenLegendNumRows ? maxWidth : itemWidth;
            if (!hasUserGivenLegendNumRows && averageWidth * 1.5 < maxWidth) itemWidth = averageWidth;
            if (legendnumrows && !minimiseWrappingInLegend) {
                var newNumRows, newNumCols, newItemWidth = perItemWidth;
                if (maxWidth > averageWidth * 1.5) newItemWidth = averageWidth;
                newNumCols = mathMin(totalNumber, mathFloor(availableWidth / newItemWidth));
                newNumRows = mathCeil(totalNumber / newNumCols);
                if (!(config.numRows && newNumRows !== legendnumrows || config.numColumns && newNumCols !== legendnumcolumns) && !(legendnumrows === 1 && newNumRows !== 1)) {
                    perItemWidth = newItemWidth;
                    legendnumcolumns = newNumCols;
                    legendnumrows = newNumRows;
                }
            }
            SmartLabel.setStyle((0, _lib.extend2)({}, itemStyle.text));
            for(i = 0; i < len; i++){
                itemConfig = itemArr[i].config;
                if (legendnumrows === 1) perItemWidth = maxWidth > averageWidth * 2.5 ? averageWidth : itemConfig._selfTotalWidth;
                textWidth = Math.ceil(perItemWidth - nonTextElemWidth);
                if (textWidth === 0) {
                    itemConfig.name = _lib.BLANKSTRING;
                    itemConfig._totalWidth = symbolWidthSpace + symbolPadding;
                    itemConfig._selfTotalWidth = itemConfig._totalWidth;
                    itemConfig._selfTotalHeight = rowHeight;
                } else {
                    smartText = SmartLabel.getSmartText(itemConfig.name, textWidth < itemConfig._selfTotalWidth - nonTextElemWidth ? textWidth + textPadding : UNDEF);
                    itemConfig.name = smartText.text;
                    itemConfig._textHeight = smartText.height;
                    smartText.tooltext && (itemConfig.originalText = smartText.tooltext);
                    itemConfig._selfTotalHeight = smartText.height + textPadding > rowHeight ? textPadding + smartText.height : rowHeight;
                    itemConfig._totalWidth = symbolWidthSpace + nonItemWidth + smartText.width;
                    itemConfig._selfTotalWidth = nonTextElemWidth + smartText.width;
                    itemConfig._legendTestY = rowHeight > smartText.height ? (rowHeight - smartText.height) / 2 : 0;
                    maxHeight = mathMax(maxHeight, itemConfig._textHeight);
                    itemHeight = mathMax(1, mathMin(itemHeight, itemConfig._textHeight));
                }
            }
            parent = {
                style: {
                    display: "grid",
                    justifyItems: "center",
                    alignItems: "start"
                }
            };
            children = [];
            if (hasLegendCaption) children.push({
                style: {
                    width: captionWidth,
                    height: legendCaptionHeight,
                    gridRowStart: 1,
                    gridRowEnd: 2,
                    gridColumnStart: 1,
                    gridColumnEnd: 2
                }
            });
            children.push({
                style: {
                    display: "grid",
                    justifyItems: "start",
                    alignItems: "start",
                    width: mathMin(totalWidth, availableWidth, perItemWidth * legendnumcolumns),
                    paddingEnd: padding,
                    paddingTop: padding,
                    gridRowStart: children.length + 1,
                    gridRowEnd: children.length + 2,
                    gridColumnStart: 1,
                    gridColumnEnd: 2
                }
            });
            childLegends = [];
            if (hasUserGivenLegendNumRows || legendnumrows === 1) for(k = 0, i = 1; k < len; k++){
                item = itemArr[k];
                itemConfig = item.config;
                if (itemConfig.enabled === 1) {
                    if (insertionState === 0) {
                        shiftRows = mathCeil(i / legendnumcolumns);
                        shiftColumns = i % legendnumcolumns === 0 ? legendnumcolumns : i % legendnumcolumns;
                    } else {
                        shiftRows = i % legendnumrows === 0 ? legendnumrows : i % legendnumrows;
                        shiftColumns = mathCeil(i / legendnumrows);
                    }
                    childLegends.push({
                        style: {
                            width: legendnumrows === 1 ? itemConfig._selfTotalWidth : shiftColumns === legendnumcolumns ? itemConfig._selfTotalWidth : perItemWidth,
                            height: itemConfig._selfTotalHeight,
                            gridRowStart: shiftRows,
                            gridRowEnd: shiftRows + 1,
                            gridColumnStart: shiftColumns,
                            gridColumnEnd: shiftColumns + 1
                        }
                    });
                    i += 1;
                }
            }
            else {
                legendnumrows = 0;
                itemHeight = mathMax(itemHeight, rowHeight);
                for(k = 0; k < len; k++){
                    item = itemArr[k];
                    itemConfig = item.config;
                    if (itemConfig.enabled === 1) legendnumrows += Math.ceil(itemConfig._selfTotalHeight / itemHeight);
                }
                legendnumrows === 0 && (legendnumrows = Math.max(1, Math.ceil(totalNumber / legendnumcolumns)));
                tempTableStructure = emptyArrayCreator(legendnumrows).map(function() {
                    return emptyArrayCreator(legendnumcolumns);
                });
                var m = 0, n = 0, endRow;
                for(k = 0, i = 1; k < len; k++){
                    item = itemArr[k];
                    itemConfig = item.config;
                    if (itemConfig.enabled === 1) {
                        while(m < legendnumrows){
                            while(n < legendnumcolumns){
                                if (tempTableStructure[m][n] === UNDEF) {
                                    shiftColumns = n + 1;
                                    shiftRows = m + 1;
                                    endRow = legendnumcolumns === 1 ? 1 : +(itemConfig._selfTotalHeight / itemHeight).toFixed(0);
                                    tempTableStructure[m][n] = true;
                                    for(var p = m; p < m + endRow; p++)tempTableStructure[p][n] = true;
                                }
                                n++;
                                if (tempTableStructure[m][n - 1]) break;
                            }
                            if (n >= legendnumcolumns) {
                                n = 0;
                                m++;
                            }
                            if (endRow) break;
                        }
                        childLegends.push({
                            style: {
                                width: shiftColumns === legendnumcolumns ? itemConfig._selfTotalWidth : itemWidth,
                                height: itemConfig._selfTotalHeight,
                                gridRowStart: shiftRows,
                                gridRowEnd: shiftRows + endRow,
                                gridColumnStart: shiftColumns,
                                gridColumnEnd: shiftColumns + 1
                            }
                        });
                        i += 1;
                        endRow = UNDEF;
                    }
                }
                legendnumrows = 0;
                for(i = legendnumrows; i < tempTableStructure.length; i++){
                    for(k = 0; k < legendnumcolumns; k++)if (tempTableStructure[i][k]) {
                        legendnumrows++;
                        break;
                    }
                }
                if (legendnumcolumns > 1) children[children.length - 1].style.gridTemplateRows = (itemHeight + " ").repeat(legendnumrows).slice(0, -1);
            }
            children[children.length - 1].children = childLegends;
            legendSpace = (0, _faber.computeLayout)(_objectSpread(_objectSpread({}, parent), {}, {
                children: children
            }));
            config.itemWidth = perItemWidth;
            textWidth = mathCeil(perItemWidth - nonTextElemWidth);
            if (textWidth < 0) symbolPadding = textWidth = textPadding = 0;
            config.symbolPadding = symbolPadding;
            config.textPadding = textPadding;
            config.width = config.totalWidth = Math.floor(mathMax(legendSpace.layout.width, legendSpace.children[legendSpace.children.length - 1].layout.width));
            SmartLabel.setStyle((0, _lib.extend2)({}, itemStyle.text));
            for(k = 0, i = 0; k < len; k++){
                item = itemArr[k];
                itemConfig = item.config;
                if (legendnumrows === 1) {
                    textWidth = itemConfig._selfTotalWidth;
                    if (textWidth < 0) symbolPadding = textWidth = textPadding = 0;
                }
                if (itemConfig.enabled === 1) {
                    if (textWidth === 0) {
                        itemConfig.name = _lib.BLANKSTRING;
                        itemConfig._totalWidth = symbolWidthSpace + symbolPadding;
                    }
                    itemConfig._legendX = legendSpace.children[legendSpace.children.length - 1].children[i].layout.x;
                    itemConfig._legendY = legendSpace.children[legendSpace.children.length - 1].children[i].layout.y;
                    itemConfig._legendH = legendSpace.children[legendSpace.children.length - 1].children[i].layout.height;
                    i += 1;
                }
            }
            numRows = legendnumrows;
            dimensions.height += numRows * rowHeight + legendCaptionHeight;
            config.height = config.totalHeight = legendSpace.layout.height + 2 * padding;
            config.rowHeight = rowHeight;
            config.legendNumColumns = legendnumcolumns;
            config.initialItemX = hasLegendCaption && captionWidth > legendSpace.children[legendSpace.children.length - 1].layout.width && availableWidth > config.width ? legendSpace.children[legendSpace.children.length - 1].layout.x : 0;
            config.initialItemY = legendSpace.children[legendSpace.children.length - 1].layout.y;
            if (config.height - 2 * symbolPadding > availableHeight) {
                config.height = availableHeight;
                scroll = config.scroll || (config.scroll = {});
                scroll.enabled = true;
                scroll.flatScrollBars = config.flatScrollBars;
                scroll.scrollBar3DLighting = config.scrollBar3DLighting;
                config.width = config.width + 12 > availableWidth ? config.width : config.width + 12;
            } else config.scroll.enabled = false;
            if (config.width > availableWidth && config.scroll.enabled) {
                config.width = availableWidth;
                horizontalScroll = config.horizontalScroll || (config.horizontalScroll = {});
                horizontalScroll.enabled = true;
                horizontalScroll.flatScrollBars = config.flatScrollBars;
                horizontalScroll.scrollBar3DLighting = config.scrollBar3DLighting;
                if (config.height + 12 <= availableHeight) config.height = config.height + 12;
                else {
                    config.height = availableHeight;
                    config.totalHeight += 4;
                    scroll = config.scroll || (config.scroll = {});
                    scroll.enabled = true;
                    scroll.flatScrollBars = config.flatScrollBars;
                    scroll.scrollBar3DLighting = config.scrollBar3DLighting;
                    config.scroll.enabled = true;
                }
            } else config.horizontalScroll.enabled = false;
            if (config.totalWidth > config.width && config.totalWidth - config.width <= 4) {
                for(k = 0, i = 0; k < len; k++){
                    item = itemArr[k];
                    itemConfig = item.config;
                    if (itemConfig.enabled === 1) {
                        if (legendSpace.children[legendSpace.children.length - 1].children[i].style.gridColumnStart % legendnumcolumns !== 1) {
                            itemConfig._legendX += 4;
                            if (legendSpace.children[legendSpace.children.length - 1].children[i].style.gridRowStart === 1) config.totalWidth += 4;
                        }
                        i += 1;
                    }
                }
                config.totalHeight += 4;
            }
            usedHeight += config.height;
            config.isActive = true;
            config.enabled = true;
        } else {
            config.enabled = false;
            config.width = 0;
            usedHeight = 0;
        }
        return {
            width: config.width,
            height: usedHeight
        };
    };
    _proto._placeLegendBlockBottom = function _placeLegendBlockBottom(availableHeight, widthFraction) {
        if (widthFraction === void 0) widthFraction = 1;
        var legend = this, chart = legend.getFromEnv("chart"), chartConfig = chart.config, origRenderWidth = chart.getFromEnv("chartWidth"), origRenderHeight = chart.getFromEnv("chartHeight"), spacingLeft = chartConfig.canvasLeft, spacingRight = chartConfig.width - (chartConfig.canvasRight || 0), SmartLabel = chart.getFromEnv("smartLabel"), config = legend.config, marginLeft = config.chartMarginLeft, marginRight = config.chartMarginRight, marginTop = config.chartMarginTop, alignLegendWithCanvas = config.alignLegendWithCanvas, itemArr = legend.getSortedLegendItems(), len = itemArr.length, legendPadding = config.legendPadding, canvasMarginRight = chartConfig.canvasMarginRight, canvasMarginLeft = chartConfig.canvasMarginLeft, yAxis = chart.getChildren("yAxis"), verticalAxis = yAxis && yAxis[0].config.isVertical ? yAxis : chart.getChildren("xAxis"), axis1Obj = verticalAxis && verticalAxis[0], axis2Obj = verticalAxis && verticalAxis[1], axis1 = axis1Obj && axis1Obj.config || {}, axis2 = axis2Obj && axis2Obj.config || {}, title1Width = axis1.nameMaxW, title2Width = axis2.nameMaxW, axis1NameStyle = axis1.name && axis1.name.style || {}, axis2NameStyle = axis2.name && axis2.name.style || {}, axis1Title = axis1.axisName || _lib.BLANKSTRING, axis2Title = axis2.axisName || _lib.BLANKSTRING, usedHeight, availableWidth = chartConfig.canvasWidth - chartConfig.canvasMarginLeft - chartConfig.canvasMarginRight, widthLimit = chartConfig.width, heightLimit = chartConfig.height, yAxisTitleHeight, yAxisTitleWidth, title1, title2, legendPos = config.legendPos ? config.legendPos.split("-") : [];
        config.paddingBottom = chartConfig.height - chartConfig.canvasBottom;
        SmartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
        SmartLabel.setStyle(axis1NameStyle);
        title1 = SmartLabel.getOriSize(axis1Title);
        SmartLabel.setStyle(axis2NameStyle);
        title2 = SmartLabel.getOriSize(axis2Title);
        if (availableWidth < legendPadding) config.padding = legendPadding = availableWidth = 0;
        if (title1 || title2) yAxisTitleHeight = (0, _lib.pluckNumber)(title1.height, 0) > (0, _lib.pluckNumber)(title2.height, 0) ? (yAxisTitleWidth = title1Width) && title1.width : (yAxisTitleWidth = title2Width) && title2.width;
        availableWidth = alignLegendWithCanvas ? availableWidth : origRenderWidth - (yAxisTitleHeight + marginTop > origRenderHeight - availableHeight ? 2 * yAxisTitleWidth + marginRight + marginLeft + canvasMarginRight + canvasMarginLeft : marginRight + marginLeft + canvasMarginLeft + canvasMarginRight);
        if (legendPos[0] === _lib.POSITION_ABSOLUTE) {
            availableWidth = widthLimit;
            if (config.legendMaxWidth < widthLimit) availableWidth = config.legendMaxWidth;
            else availableWidth *= widthFraction;
        }
        if (!config.showLegend || len === 0) {
            usedHeight = 0;
            config.height = 0;
            config.width = 0;
        } else {
            config.x = (spacingLeft - marginLeft - spacingRight + marginRight) / 2;
            usedHeight = legend.setDimension({
                width: availableWidth,
                height: legendPos[0] === _lib.POSITION_ABSOLUTE ? config.legendMaxHeight < heightLimit ? config.legendMaxHeight : heightLimit : availableHeight
            }).height;
        }
        return {
            bottom: usedHeight,
            right: 0
        };
    };
    _proto._placeLegendBlockRight = function _placeLegendBlockRight(availWidth) {
        var legend = this, availableWidth = availWidth, legendConf = legend.config, chart = legend.getFromEnv("chart"), chartConf = chart.config, SmartLabel = chart.getFromEnv("smartLabel"), legendPadding = legendConf.legendPadding, itemStyle = legend.getStateCosmetics("default"), availableHeight = chartConf.canvasHeight, dimensions = {}, itemArr = legend.getSortedLegendItems(), len = itemArr.length, usedWidth, gutterWidth = 10;
        if (availableWidth < legendPadding) legendConf.padding = legendPadding = availableWidth = 0;
        SmartLabel.useEllipsesOnOverflow(chartConf.useEllipsesWhenOverflow);
        SmartLabel.setStyle((0, _lib.extend2)({}, itemStyle.text));
        if (!legendConf.numColumns && !legendConf.numRows) legendConf.numColumns = 1;
        if (!legendConf.showLegend || len === 0) {
            dimensions.right = 0;
            legendConf.height = 0;
            legendConf.width = 0;
        } else {
            usedWidth = legend.setDimension({
                width: availableWidth - legendPadding,
                height: availableHeight
            }).width;
            dimensions.right = usedWidth + legendPadding;
            if (dimensions.right + gutterWidth <= availableWidth) dimensions.right += gutterWidth;
        }
        return dimensions;
    };
    _proto.postSpaceManager = function postSpaceManager() {
        var legend = this, legendConf = legend.config, legendPosition = legendConf.legendPos ? legendConf.legendPos.split("-") : [], chart = legend.getFromEnv("chart"), availableHeight = chart.config.canvasHeight;
        if (legendPosition[0] === _lib.POSITION_RIGHT || legendPosition[0] === _lib.POSITION_LEFT) {
            if (legendConf.totalHeight > availableHeight) {
                if (legendConf.totalHeight <= legendConf.height) {
                    legendConf.scroll.enabled = true;
                    legendConf.scroll.flatScrollBars = legendConf.flatScrollBars;
                    legendConf.scroll.scrollBar3DLighting = legendConf.scrollBar3DLighting;
                    legendConf.width += (legendConf.scroll.scrollBarWidth = 10) + (legendConf.scroll.scrollBarPadding = 2);
                }
                legendConf.height = availableHeight;
            } else legendConf.scroll.enabled = false;
        }
    };
    _proto.configureAttributes = function configureAttributes(obj) {
        if (obj === void 0) obj = {};
        _ComponentInterface.prototype.configureAttributes.call(this, obj);
        var legend = this, config = legend.config, chart = legend.getFromEnv("chart"), chartConfig = chart.config, legendLineHeight, style = legend.getFromEnv("style"), chartAttr = chart.getFromEnv("chart-attrib"), is3D = chart.config.is3D, colorM = legend.getFromEnv("color-manager"), borderColor, palleteString = is3D ? _lib.chartPaletteStr.chart3D : _lib.chartPaletteStr.chart2D, interactiveLegend = config.interactiveLegend = chart.hasInteractiveLegend !== false && Boolean((0, _lib.pluckNumber)(chartAttr.interactivelegend, 1)), borderAlpha, backgroundAlpha, roundEdges = (0, _lib.pluckNumber)(chartAttr.useroundedges, 0), padding = 4, outCancolor = style.outCancolor, textStyle = obj.style && obj.style.text, legendItemFont = (0, _lib.pluck)(chartAttr.legenditemfont, textStyle && textStyle["font-family"], style.outCanfontFamily), legendScale = (0, _lib.pluckNumber)(chartAttr.legendiconscale, 1), legendFontSize = (0, _lib.pluckFontSize)(chartAttr.legenditemfontsize, textStyle && textStyle["font-size"], style.fontSize) + PXSTRING, legendFontColor = (0, _lib.pluck)(chartAttr.legenditemfontcolor, textStyle && textStyle.color, outCancolor).replace(/^#?([a-f0-9]+)/gi, "#$1"), legendItemHoverFontColor = (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.legenditemhoverfontcolor, legendFontColor)), anchorMap;
        config.isActive = false;
        config.chartMarginTop = chartConfig.origMarginTop;
        config.chartMarginRight = chartConfig.origMarginRight;
        config.chartMarginBottom = chartConfig.origMarginBottom;
        config.chartMarginLeft = chartConfig.origMarginLeft;
        config.reverselegend = (0, _lib.pluckNumber)(chartAttr.reverselegend, 0);
        config.showLegend = (0, _lib.pluckNumber)(chartAttr.showlegend, !chart.dontShowLegendByDefault, 1);
        config.legendFontSizeWithUnit = (0, _lib.pluckFontSizeMaintainUnit)(chartAttr.legenditemfontsize, style.fontSizeWithUnit || style.fontSize);
        legendLineHeight = (0, _lib.setLineHeight)({
            fontSize: legendFontSize
        });
        config.legendPos = (0, _lib.pluck)(chartAttr.legendposition, chart.legendposition, obj.legendPosition, _lib.POSITION_BOTTOM).toLowerCase();
        config.numColumns = (0, _lib.pluckNumber)(Math.floor(chartAttr.legendnumcolumns));
        config.numRows = (0, _lib.pluckNumber)(Math.floor(chartAttr.legendnumrows));
        if (config.numColumns < 0) config.numColumns = UNDEF;
        if (config.numRows < 0) config.numRows = UNDEF;
        config.legendXPosition = mathMax((0, _lib.pluckNumber)(chartAttr.legendxposition, chart.legendxposition, obj.legendXPosition, 0), 0);
        config.legendYPosition = mathMax((0, _lib.pluckNumber)(chartAttr.legendyposition, chart.legendyposition, obj.legendYPosition, 0), 0);
        config.legendMaxWidth = (0, _lib.pluckNumber)(chartAttr.legendmaxwidth, chart.legendmaxwidth, obj.legendMaxWidth);
        config.legendMaxHeight = (0, _lib.pluckNumber)(chartAttr.legendmaxheight, chart.legendmaxheight, obj.legendMaxHeight);
        if (config.legendMaxWidth < 0) config.legendMaxWidth = UNDEF;
        if (config.legendMaxHeight < 0) config.legendMaxHeight = UNDEF;
        config.xL = config.yL = 0;
        if (legendScale <= 0 || legendScale > 5) legendScale = 1;
        config.drawCustomLegendIcon = (0, _lib.pluckNumber)(chartAttr.drawcustomlegendicon, obj.drawcustomlegendicon, 0);
        config.legendScale = legendScale;
        config.legendPadding = (0, _lib.pluckNumber)(chartAttr.legendpadding, 7);
        config.alignLegendWithCanvas = (0, _lib.pluckNumber)(obj.alignlegendwithcanvas, chartConfig.alignLegendWithCanvas);
        config.title.style = {
            fontFamily: (0, _lib.pluck)(chartAttr.legendcaptionfont, legendItemFont),
            fontSize: (0, _lib.pluckFontSize)(chartAttr.legendcaptionfontsize, style.fontSize) + PXSTRING,
            color: (0, _lib.pluck)(chartAttr.legendcaptionfontcolor, outCancolor).replace(/^#?([a-f0-9]+)/gi, "#$1"),
            fontWeight: styleValueMap.fontWeight[(0, _lib.pluckNumber)(chartAttr.legendcaptionfontbold, 1)] || _lib.BLANKSTRING
        };
        anchorMap = chartAttr.legendcaptionalignment ? chartAttr.legendcaptionalignment.toLowerCase() : TEXT_ANCHOR_MAP.center;
        config.title.align = TEXT_ANCHOR_MAP[anchorMap] || TEXT_ANCHOR_MAP.center;
        config.title.style["text-anchor"] = config.title.align;
        config.padding = padding;
        borderColor = (0, _lib.pluck)(chartAttr.legendbordercolor, colorM.getColor(palleteString.legendBorderColor));
        borderAlpha = config.borderAlpha = (0, _lib.pluckNumber)(chartAttr.legendborderalpha, 100);
        config.borderColor = (0, _lib.convertColor)(borderColor, borderAlpha);
        config.borderWidth = (0, _lib.pluckNumber)(chartAttr.legendborderthickness, obj.legendborderthickness, !roundEdges || chartAttr.legendbordercolor ? 1 : 0);
        config.borderRadius = (0, _lib.pluckNumber)(roundEdges, 0);
        config.backgroundAlpha = backgroundAlpha = (0, _lib.pluckNumber)(chartAttr.legendbgalpha, obj.legendbgalpha, 100);
        config.backgroundColor = (0, _lib.convertColor)((0, _lib.pluck)(chartAttr.legendbgcolor, colorM.getColor(palleteString.legendBgColor)), backgroundAlpha);
        config.symbol3DLighting = Boolean((0, _lib.pluckNumber)(chartAttr.use3dlighting, chartAttr.useplotgradientcolor, 1));
        config.symbol3DLighting = !chartConfig.usePattern && config.symbol3DLighting;
        config.shadow = Boolean((0, _lib.pluckNumber)(chartAttr.legendshadow, 1));
        if (config.shadow) config.shadow = {
            enabled: config.shadow,
            opacity: mathMax(borderAlpha, backgroundAlpha) / 100
        };
        config.prevReversed = Boolean((0, _lib.pluckNumber)(config.reversed, 0));
        config.reversed = Boolean((0, _lib.pluckNumber)(chartAttr.reverselegend, 0));
        config.lineWidth = (0, _lib.pluckNumber)(chartAttr.linethickness, 2);
        config.borderRadius = (0, _lib.pluckNumber)(chartAttr.legendborderradius, roundEdges ? 3 : 0);
        config.legendAllowDrag = Boolean((0, _lib.pluckNumber)(chartAttr.legendallowdrag, 0));
        config.title.oriText = (0, _lib.parseUnsafeString)((0, _lib.getFirstValue)(chartAttr.legendcaption, _lib.BLANKSTRING));
        config.legendScrollBgColor = (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.legendscrollbgcolor, chartAttr.scrollcolor, colorM.getColor("altHGridColor")));
        config.legendScrollBarColor = (0, _lib.pluck)(chartAttr.legendscrollbarcolor, borderColor);
        config.legendScrollBtnColor = (0, _lib.pluck)(chartAttr.legendscrollbtncolor, borderColor);
        config.minimiseWrappingInLegend = (0, _lib.pluckNumber)(chartAttr.minimisewrappinginlegend, 0);
        config.flatScrollBars = (0, _lib.pluckNumber)(chartAttr.flatscrollbars, 0);
        config.scrollBar3DLighting = (0, _lib.pluckNumber)(chartAttr.scrollbar3dlighting, 1);
        config.orderReversed = false;
        legend.setStateCosmetics("hidden", {
            symbol: {
                fill: (0, _lib.convertColor)((0, _lib.pluck)(chartAttr.legenditemhiddencolor, "cccccc").replace(/^#?([a-f0-9]+)/gi, "#$1")),
                stroke: (0, _lib.convertColor)((0, _lib.pluck)(chartAttr.legenditemhiddencolor, "cccccc").replace(/^#?([a-f0-9]+)/gi, "#$1"))
            },
            text: {
                fill: (0, _lib.convertColor)((0, _lib.pluck)(chartAttr.legenditemhiddencolor, "cccccc").replace(/^#?([a-f0-9]+)/gi, "#$1"))
            }
        });
        legend.setStateCosmetics("default", {
            text: {
                fill: (0, _lib.convertColor)(legendFontColor),
                "font-family": legendItemFont,
                cursor: interactiveLegend ? _lib.preDefStr.POINTER : "default",
                "font-size": legendFontSize,
                "line-height": legendLineHeight,
                "vertical-align": _lib.POSITION_TOP,
                "text-anchor": _lib.POSITION_START,
                direction: chartConfig.textDirection === "rtl" ? "rtl" : "initial",
                "font-weight": styleValueMap.fontWeight[(0, _lib.pluckNumber)(chartAttr.legenditemfontbold, 0)] || _lib.BLANKSTRING
            },
            symbol: {
                bgColor: (0, _lib.pluck)(chartAttr.legendiconbgcolor),
                cursor: interactiveLegend ? _lib.preDefStr.POINTER : "default",
                borderColor: (0, _lib.pluck)(chartAttr.legendiconbordercolor),
                bgAlpha: (0, _lib.pluckNumber)(chartAttr.legendiconbgalpha, chartAttr.legendiconalpha, 100),
                borderAlpha: (0, _lib.pluckNumber)(chartAttr.legendiconborderalpha, chartAttr.legendiconalpha, 100),
                borderThickness: (0, _lib.pluckNumber)(chartAttr.legendiconborderthickness),
                startAngle: (0, _lib.pluckNumber)(chartAttr.legendiconstartangle, 45),
                sides: (0, _lib.pluckNumber)(chartAttr.legendiconsides, obj.legendiconsides, 4)
            }
        });
        legend.setStateCosmetics("hover", function(cosmetics, legenditem) {
            if (!legenditem.hasState("hidden")) {
                if (!cosmetics.text) cosmetics.text = {};
                cosmetics.text.fill = (0, _lib.convertColor)(legendItemHoverFontColor.replace(/^#?([a-f0-9]+)/gi, "#$1"));
                cosmetics.text.cursor = INHERIT_STR;
            }
            return cosmetics;
        });
        if (config.legendAllowDrag && !config._dragEvtListenerBinded) {
            legend.addEventListener("fc-dragstart", config.handlers.dragstart);
            legend.addEventListener("fc-dragmove", config.handlers.dragmove);
            config._dragEvtListenerBinded = true;
        } else if (!config.legendAllowDrag && config._dragEvtListenerBinded) {
            legend.removeEventListener("fc-dragstart", config.handlers.dragstart);
            legend.removeEventListener("fc-dragmove", config.handlers.dragmove);
            config._dragEvtListenerBinded = false;
        }
    };
    _proto.getLegendState = function getLegendState() {
        return this._legendState;
    };
    _proto.hasState = function hasState(state) {
        var states = this.getLegendState(), i, len;
        for(i = 0, len = states.length; i < len; i++){
            if (states[i] === state) return true;
        }
        return false;
    };
    _proto.setLegendState = function setLegendState(state, pushAtEnd) {
        if (!this.hasState(state)) {
            if (pushAtEnd) this._legendState.push(state);
            else this._legendState.unshift(state);
        }
        this.asyncDraw();
    };
    _proto.removeLegendState = function removeLegendState(state) {
        var i, len, notFound = 1;
        if (state) {
            for(i = 0, len = this._legendState.length; i < len && notFound; i++)if (state === this._legendState[i]) {
                this._legendState.splice(i, 1);
                notFound = 0;
            }
        } else this._legendState.length = 0;
        this.asyncDraw();
    };
    _proto.setStateCosmetics = function setStateCosmetics(state, cosmetics) {
        this._stateCosmetics[state] = cosmetics;
    };
    _proto.removeStateCosmetics = function removeStateCosmetics(state) {
        delete this._stateCosmetics[state];
    };
    _proto.getStateCosmetics = function getStateCosmetics(state) {
        return this._stateCosmetics[state];
    };
    _proto.hide = function hide() {
        var legend = this, chart = legend.getFromEnv("chart"), legendGroup = chart.getChildContainer("legendGroup");
        legendGroup && legendGroup.hide();
    };
    return Legend;
}(_componentInterface.ComponentInterface);
var _default = Legend;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/component-interface":"flMoh","./legend-item":"9FkVn","@fusioncharts/core/src/dependency-manager":"8dbFz","@fusioncharts/core/src/toolbox":"b5Lu6","./index.animation":"1NCxb","@fusioncharts/core/src/schedular":"jbg43","@fusioncharts/core/src/_internal/vendors/faberjs/src/faber":"3iRVg"}],"9FkVn":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _lib = require("@fusioncharts/core/src/lib");
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var _dependencyManager = require("@fusioncharts/core/src/dependency-manager");
var _legendItem = _interopRequireDefault(require("./legend-item.animation"));
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var POINTER = _lib.preDefStr.POINTER, NONE = "none", M = "M", L = "L", Z = "Z", A = "A", _getSymbolPath = function _getSymbolPath(x, y, w, h, seriesType) {
    var path = [
        M
    ], w1, w2, h1, h2, height3, cx1, cx2, cy1, cy2, d1, d2;
    switch(seriesType){
        case "column":
        case "dragColumn":
        case "column3D":
        case "realtimeColumn":
        case "errorBar2D":
            w1 = w * .25;
            w2 = w1 * .5;
            h1 = h * .7;
            h2 = h * .4;
            path = path.concat([
                x,
                y + h,
                "l",
                0,
                -h1,
                w1,
                0,
                0,
                h1,
                "z",
                "m",
                w1 + w2,
                0,
                "l",
                0,
                -h,
                w1,
                0,
                0,
                h,
                "z",
                "m",
                w1 + w2,
                0,
                "l",
                0,
                -h2,
                w1,
                0,
                0,
                h2,
                "z"
            ]);
            break;
        case "bar2D":
        case "bar3D":
            w1 = w * .3;
            w2 = w * .6;
            h1 = h / 4;
            h2 = h1 / 2;
            path = path.concat([
                x,
                y,
                L,
                x + w2,
                y,
                x + w2,
                y + h1,
                x,
                y + h1,
                Z,
                M,
                x,
                y + h1 + h2,
                L,
                x + w,
                y + h1 + h2,
                x + w,
                y + h1 + h2 + h1,
                x,
                y + 2 * h1 + h2,
                Z,
                M,
                x,
                y + 2 * (h1 + h2),
                L,
                x + w1,
                y + 2 * (h1 + h2),
                x + w1,
                y + h,
                x,
                y + h,
                Z
            ]);
            break;
        case "area":
        case "area3d":
        case "areaspline":
        case "dragArea":
        case "realTimeArea":
        case "splinearea":
            w1 = w * .3;
            w2 = w * .6;
            h1 = h * .6;
            h2 = h * .2;
            height3 = h * .8;
            path = path.concat([
                x,
                y + height3,
                L,
                x,
                y + h1,
                x + w1,
                y + h2,
                x + w2,
                y + h1,
                x + w,
                y + h2,
                x + w,
                y + height3,
                Z
            ]);
            break;
        case "pie2D":
        case "pie3d":
        case "doughnut2D":
        case "doughnut3D":
            w1 = w * .5;
            w2 = w1 * .9;
            d1 = 1;
            d2 = 1;
            cx1 = x + w1 + d1;
            cy1 = y + w1 - d1;
            cx2 = x + w1 - d2;
            cy2 = y + w1 + d2;
            path = path.concat([
                cx1,
                cy1,
                L,
                cx1,
                cy1 - w2 + d1,
                A,
                w2 - d1,
                w2 - d1,
                0,
                0,
                1,
                cx1 + w2 - d1,
                cy1,
                Z,
                M,
                cx2,
                cy2,
                L,
                cx2,
                cy2 - w2,
                A,
                w2,
                w2,
                0,
                1,
                0,
                cx2 + w2,
                cy2,
                Z
            ]);
            break;
        case "boxandwhisker2d":
            path = path.concat([
                x,
                y,
                L,
                x + w,
                y,
                x + w,
                y + h,
                x,
                y + h,
                Z
            ]);
            break;
        case "radialBar":
            w1 = w * .5;
            w2 = x + w;
            cy1 = y + w1;
            path = path.concat([
                x,
                cy1,
                A,
                w1,
                w1,
                0,
                0,
                0,
                w2,
                cy1,
                A,
                w1,
                w1,
                0,
                0,
                0,
                x,
                cy1
            ]);
            break;
        default:
            path = path.concat([
                x,
                y,
                L,
                x + w,
                y,
                x + w,
                y + h,
                x,
                y + h,
                Z
            ]);
    }
    return {
        path: path
    };
}, getAnchorProps = function getAnchorProps(legendItem, symbolStyle) {
    var legendItemConfig = legendItem.config, legendConfig = legendItem.getLinkedParent().config, symbolWidth = legendConfig.symbolWidth, radius = symbolWidth * .5, itemX = (legendConfig.initialItemX || 0) + legendItemConfig._legendX, itemY = (legendConfig.initialItemY || 0) + legendItemConfig._legendY, cx = itemX + legendConfig.symbolPadding + radius, cy = itemY + (legendItemConfig._markerYGutter || 0) + legendConfig.symbolPadding + radius, symbolStr = (0, _lib.mapSymbolName)(legendItemConfig.anchorSide), symbol = legendItemConfig.symbol = symbolStr && symbolStr.split("_") || [], dip = symbol[0] === "spoke" ? 1 : 0;
    if (legendItemConfig.type === "line" || legendItemConfig.drawLine) radius *= .6;
    return {
        path: (0, _lib.polyPathToPath)([
            symbol[1] || 2,
            cx,
            cy,
            radius,
            legendItemConfig.startAngle,
            legendItemConfig.spoke || dip
        ]),
        cursor: symbolStyle.cursor || POINTER,
        stroke: symbolStyle.stroke,
        fill: symbolStyle.fill,
        "stroke-width": symbolStyle["stroke-width"] || .5
    };
};
(0, _dependencyManager.addDep)({
    name: "legendItemAnimation",
    type: "animationRule",
    extension: _legendItem.default
});
var LegendItem = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(LegendItem, _ComponentInterface);
    function LegendItem() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        _this._stateCosmetics = {};
        _this._legendState = [];
        return _this;
    }
    var _proto = LegendItem.prototype;
    _proto.getName = function getName() {
        return "legendItem";
    };
    _proto.parseLegendCosmetics = function parseLegendCosmetics() {
        var legendItem = this, legend = this.getLinkedParent(), legendStates = legend.getLegendState(), legendItemStates = legendItem.getLegendState(), legendCosmetic, itemCosmetic, allStates = [
            "default"
        ], finalCosmetics = {}, i;
        allStates = allStates.concat(legendStates, legendItemStates);
        for(i = 0; i < allStates.length; i++){
            legendCosmetic = legend.getStateCosmetics(allStates[i]);
            itemCosmetic = legendItem.getStateCosmetics(allStates[i]);
            if (legendCosmetic) {
                if (typeof legendCosmetic === "function") finalCosmetics = legendCosmetic(finalCosmetics, legendItem);
                else (0, _lib.extend2)(finalCosmetics, legendCosmetic);
            }
            if (itemCosmetic) {
                if (typeof itemCosmetic === "function") finalCosmetics = itemCosmetic(finalCosmetics, legendItem);
                else (0, _lib.extend2)(finalCosmetics, itemCosmetic);
            }
        }
        return finalCosmetics;
    };
    _proto.getType = function getType() {
        return "legendItem";
    };
    _proto.configure = function configure(configObj) {
        var legendItem = this, config = legendItem.config, prop, value;
        for(prop in configObj)if (configObj.hasOwnProperty(prop)) {
            if (typeof configObj[prop] !== "object") config[prop] = configObj[prop];
            else {
                var obj = config[prop] ? config[prop] : {};
                for(value in configObj[prop])obj[value] = configObj[prop][value];
                config[prop] = obj;
            }
        }
    };
    _proto.itemClickFn = function itemClickFn() {
        var legendItem = this, chartAttr = legendItem.getFromEnv("chart-attrib"), interactivelegend = (0, _lib.pluckNumber)(chartAttr.interactivelegend, 1), dataset = legendItem.getLinkedItem("owner");
        if (interactivelegend) dataset.legendInteractivity(legendItem);
    };
    _proto.dispose = function dispose() {
        this.removeEventListener("fc-click", this.click);
        this.removeEventListener("fc-mouseover", this.mouseover);
        this._dispose();
    };
    _proto.getLegendState = function getLegendState() {
        return this._legendState;
    };
    _proto.hasState = function hasState(state) {
        var states = this.getLegendState(), i, len;
        for(i = 0, len = states.length; i < len; i++){
            if (states[i] === state) return true;
        }
        return false;
    };
    _proto.setLegendState = function setLegendState(state, pushAtEnd) {
        if (!this.hasState(state)) {
            if (pushAtEnd) this._legendState.push(state);
            else this._legendState.unshift(state);
        }
        this.asyncDraw();
    };
    _proto.__setDefaultConfig = function __setDefaultConfig() {
        _ComponentInterface.prototype.__setDefaultConfig.call(this);
        this.config.eventArguments = {};
    };
    _proto.removeLegendState = function removeLegendState(state) {
        var i, len, notFound = 1;
        if (state) {
            for(i = 0, len = this._legendState.length; i < len && notFound; i++)if (state === this._legendState[i]) {
                this._legendState.splice(i, 1);
                notFound = 0;
            }
        } else this._legendState.length = 0;
        this.asyncDraw();
    };
    _proto.removeStateCosmetics = function removeStateCosmetics(state) {
        delete this._stateCosmetics[state];
    };
    _proto.setStateCosmetics = function setStateCosmetics(state, cosmetics) {
        this._stateCosmetics[state] = cosmetics;
    };
    _proto.getStateCosmetics = function getStateCosmetics(state) {
        return this._stateCosmetics[state];
    };
    _proto.draw = function draw() {
        var legend = this.getLinkedParent(), chart = legend.getFromEnv("chart"), chartConfig = chart.config, legendItem = this, animationManager = legendItem.getFromEnv("animationManager"), legendItemConfig = legendItem.config, config = legend.config, symbolBoxW = config.legendHeight, symbolPadding = config.symbolPadding, symbolWidth = config.symbolWidth, interactiveLegend = config.interactiveLegend, textPadding = config.textPadding || 2, factor = 2, itemStyle, itemHoverStyle = config.itemHoverStyle, lineWidth, itemGroup = legend.getChildContainer("itemGroup"), drawCustomLegendIcon = config.drawCustomLegendIcon, hidden = legendItem.hasState("hidden"), customLegendConfig, initialItemX, initialItemY, cy, legendItemText, legendItemTextCheck, type, itemX, itemY, legendItemLine, symbolConfig, legendItemSymbol, legendItemIcon, legendItemSymbolCheck, legendItemIconCheck, cx, radius, dip, symbol, strokeColor, fillColor, bgFill, anchorSide, drawLine, symbolStr, customBgColor, customBgAlpha, customBorderColor, customBorderAlpha, fillcolor, strokecolor, legendItemBackground, legendItemBackgroundCheck, textCosmetics, drawItemLine, symbolAttr, iconAttr, backgroundAttr, backgroundCosmetics, lineAttr, lineCosmetics = {}, xPos, yPos;
        itemStyle = legendItem.parseLegendCosmetics();
        customLegendConfig = itemStyle.symbol;
        initialItemX = config.initialItemX || 0;
        initialItemY = config.initialItemY || 0;
        type = legendItemConfig.type;
        strokeColor = itemStyle.symbol.stroke || "000000";
        fillColor = itemStyle.symbol.fill;
        lineWidth = itemStyle.symbol.lineWidth || config.lineWidth;
        anchorSide = legendItemConfig.anchorSide;
        drawLine = legendItemConfig.drawLine;
        itemX = initialItemX + legendItemConfig._legendX;
        itemY = initialItemY + legendItemConfig._legendY;
        legendItemBackgroundCheck = legendItem.getGraphicalElement("legendItemBackground");
        legendItemTextCheck = legendItem.getGraphicalElement("legendItemText");
        legendItemLine = legendItem.getGraphicalElement("legendItemLine");
        legendItemSymbolCheck = legendItem.getGraphicalElement("legendItemSymbol");
        legendItemIconCheck = legendItem.getGraphicalElement("legendItemIcon");
        interactiveLegend = (0, _lib.pluck)(legendItemConfig.interactiveLegend, interactiveLegend);
        !interactiveLegend && (itemStyle.cursor = "default");
        textCosmetics = itemStyle.text;
        xPos = itemX + symbolBoxW + textPadding - 2;
        yPos = itemY + (legendItemConfig._legendTestY || 0);
        textCosmetics.text = legendItemConfig.name;
        textCosmetics.x = xPos;
        textCosmetics.y = yPos;
        legendItemText = animationManager.setAnimation({
            el: legendItemTextCheck || "text",
            attr: textCosmetics,
            component: legendItem,
            container: itemGroup,
            label: "icon"
        });
        if (!legendItemTextCheck) legendItemText = legendItem.addGraphicalElement("legendItemText", legendItemText);
        legendItemText.data("legendItem", legendItemConfig);
        if (legendItemIconCheck) legendItem.removeGraphicalElement("legendItemIcon");
        drawItemLine = false;
        itemStyle.symbol.bgAlpha = (0, _lib.pluckNumber)(itemStyle.symbol.bgAlpha, chartConfig.legendiconalpha, chartConfig.legendiconbgalpha, chartConfig.plotfillalpha);
        itemStyle.symbol.bgAlpha = itemStyle.symbol.bgAlpha > 100 || itemStyle.symbol.bgAlpha < 0 ? 1 : itemStyle.symbol.bgAlpha;
        if (type === "radialBar" && legendItemConfig.showIcon) iconAttr = {
            src: legendItemConfig.iconUrl,
            x: itemX + symbolPadding,
            y: itemY + (legendItemConfig._markerYGutter || 0) + symbolPadding,
            width: symbolWidth,
            height: symbolWidth
        };
        else if (drawCustomLegendIcon && legendItemConfig.customLegendIcon !== false) {
            customBorderColor = !hidden && customLegendConfig.borderColor;
            customBorderAlpha = (0, _lib.pluck)(customLegendConfig.borderAlpha);
            customBgColor = !hidden && customLegendConfig.bgColor;
            customBgAlpha = (0, _lib.pluck)(customLegendConfig.bgAlpha, "100");
            fillcolor = itemStyle.symbol.rawFillColor;
            fillColor = !hidden ? customBgColor || fillcolor : itemStyle.symbol.fill;
            fillColor = (0, _lib.convertColor)(fillColor, customBgAlpha);
            strokecolor = itemStyle.symbol.rawStrokeColor;
            strokeColor = !hidden ? customBorderColor || strokecolor || fillcolor : itemStyle.symbol.stroke;
            strokeColor = (0, _lib.convertColor)(strokeColor, customBorderAlpha);
            radius = symbolWidth * .5;
            cx = itemX + symbolPadding + radius;
            cy = itemY + (legendItemConfig._markerYGutter || 0) + symbolPadding + radius;
            symbolStr = (0, _lib.mapSymbolName)(customLegendConfig.sides);
            symbol = symbolStr && (0, _lib.mapSymbolName)(customLegendConfig.sides).split("_") || [];
            dip = symbol[0] === "spoke" ? 1 : 0;
            symbolAttr = {
                path: (0, _lib.polyPathToPath)([
                    symbol[1] || 2,
                    cx,
                    cy,
                    radius,
                    customLegendConfig.startAngle || 0,
                    dip
                ]),
                cursor: itemStyle.symbol.cursor || POINTER,
                stroke: strokeColor,
                fill: fillColor,
                "stroke-width": (0, _lib.pluckNumber)(customLegendConfig.borderThickness, 1)
            };
        } else if (type === "line" || drawLine) {
            if (anchorSide) {
                symbolAttr = getAnchorProps(legendItem, itemStyle.symbol);
                factor = legendItemConfig.anchorSide > 1 && legendItemConfig.anchorSide < 10 ? 4 : 7;
            }
            cy = itemY + (legendItemConfig._markerYGutter || 0) + symbolPadding + symbolWidth * .5;
            lineAttr = {
                path: [
                    M,
                    itemX + symbolPadding,
                    cy,
                    L,
                    itemX + symbolPadding + symbolWidth / factor,
                    cy,
                    M,
                    itemX + symbolPadding + symbolWidth - symbolWidth / factor,
                    cy,
                    L,
                    itemX + symbolPadding + symbolWidth,
                    cy
                ]
            };
            drawItemLine = true;
            lineCosmetics = {
                opacity: (0, _lib.pluckNumber)(itemStyle.symbol.bgAlpha, 1),
                "stroke-width": lineWidth,
                stroke: strokeColor,
                cursor: itemStyle.cursor || POINTER
            };
        } else if (anchorSide) symbolAttr = getAnchorProps(legendItem, itemStyle.symbol);
        else if (type === "radialBar" && !legendItemConfig.showIcon) {
            strokeColor = legendItemConfig.symbolStroke || strokeColor;
            symbolConfig = _getSymbolPath(itemX + symbolPadding, itemY + (legendItemConfig._markerYGutter || 0) + symbolPadding, symbolWidth, symbolWidth, type);
            symbolAttr = {
                path: symbolConfig.path,
                "stroke-width": .5,
                stroke: strokeColor,
                fill: fillColor,
                cursor: itemStyle.cursor || POINTER
            };
        } else if (type !== "line") {
            strokeColor = legendItemConfig.symbolStroke || strokeColor;
            symbolConfig = _getSymbolPath(itemX + symbolPadding, itemY + (legendItemConfig._markerYGutter || 0) + symbolPadding, symbolWidth, symbolWidth, type);
            symbolAttr = {
                path: symbolConfig.path,
                "stroke-width": .5,
                stroke: strokeColor,
                fill: fillColor,
                cursor: itemStyle.cursor || POINTER
            };
        }
        if (lineAttr && drawItemLine) {
            Object.assign(lineAttr, lineCosmetics);
            legendItemLine = animationManager.setAnimation({
                el: legendItemLine || "path",
                attr: lineAttr,
                component: legendItem,
                callback: function callback() {
                    this.show();
                },
                container: itemGroup
            });
            if (!legendItem.getGraphicalElement("legendItemLine")) legendItemLine = legendItem.addGraphicalElement("legendItemLine", legendItemLine);
        } else if (legendItemLine) legendItemLine.hide();
        if (iconAttr) {
            legendItemIcon = animationManager.setAnimation({
                el: legendItemIconCheck || "image",
                attr: iconAttr,
                component: legendItem,
                callback: function callback() {
                    this.show();
                },
                container: itemGroup,
                label: "icon"
            });
            if (!legendItemIconCheck || !legendItemIconCheck.node) legendItemIcon = legendItem.addGraphicalElement("legendItemIcon", legendItemIcon);
            legendItemIcon.data("legendItem", legendItemConfig);
        } else legendItemIconCheck && this.removeGraphicalElement(legendItemIconCheck);
        if (symbolAttr) {
            symbolAttr.opacity = (0, _lib.pluckNumber)(itemStyle.symbol.bgAlpha, 1);
            legendItemSymbol = animationManager.setAnimation({
                el: legendItemSymbolCheck || "path",
                attr: symbolAttr,
                component: legendItem,
                callback: function callback() {
                    this.show();
                },
                container: itemGroup,
                label: "icon"
            });
            legendItemConfig.usePattern && legendItemConfig.patternAttr && legendItemSymbol.addPattern(_objectSpread(_objectSpread({}, legendItemConfig.patternAttr), {}, {
                color: hidden ? symbolAttr.stroke : legendItemConfig.patternAttr.color,
                x: itemX,
                y: itemY
            }), legendItemConfig.usePattern);
            if (!legendItemSymbolCheck || !legendItemSymbolCheck.node) legendItemSymbol = legendItem.addGraphicalElement("legendItemSymbol", legendItemSymbol);
            legendItemSymbol.data("legendItem", legendItemConfig);
        } else legendItemSymbolCheck && legendItemSymbolCheck.hide();
        if (itemStyle.background && itemStyle.background.legendBackgroundColor) bgFill = (0, _lib.convertColor)(itemStyle.background.legendBackgroundColor, itemStyle.background.alpha);
        else bgFill = _lib.TRACKER_FILL;
        backgroundAttr = {
            x: itemX,
            y: itemY,
            width: legendItemConfig._totalWidth,
            height: legendItemConfig._legendH,
            r: 0,
            fill: bgFill,
            opacity: 1,
            "stroke-width": 1,
            stroke: NONE,
            cursor: itemStyle.symbol.cursor || POINTER
        };
        legendItemBackground = animationManager.setAnimation({
            el: legendItemBackgroundCheck || "rect",
            attr: backgroundAttr,
            css: backgroundCosmetics,
            component: legendItem,
            label: "background",
            container: itemGroup
        });
        if (!legendItemBackgroundCheck) legendItem.addGraphicalElement("legendItemBackground", legendItemBackground);
        legendItemBackground.data("legendItem", legendItem).data("interactive", interactiveLegend).data("itemHoverStyle", itemHoverStyle).data("itemStyle", itemStyle);
    };
    return LegendItem;
}(_componentInterface.ComponentInterface);
var _default = LegendItem;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/component-interface":"flMoh","@fusioncharts/core/src/dependency-manager":"8dbFz","./legend-item.animation":"2Evd9"}],"2Evd9":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = void 0;
var _lib = require("@fusioncharts/core/src/lib");
var _default = {
    "*.legendItem.legendItem": function legendItemLegendItem() {
        return {
            "icon.appearing": function iconAppearing(inputJSON) {
                return [
                    {
                        initialAttr: {
                            opacity: 0
                        },
                        slot: "plot",
                        startEnd: {
                            start: .5,
                            end: 1
                        },
                        finalAttr: {
                            opacity: (0, _lib.pluckNumber)(inputJSON.attr.opacity, 1)
                        }
                    }
                ];
            },
            "background.appearing": function backgroundAppearing(inputJSON) {
                return [
                    {
                        initialAttr: {
                            opacity: 0
                        },
                        slot: "plot",
                        startEnd: {
                            start: .5,
                            end: 1
                        },
                        finalAttr: {
                            opacity: inputJSON.attr.opacity
                        }
                    }
                ];
            },
            "icon.disappearing": function iconDisappearing() {
                return [
                    {
                        finalAttr: {
                            opacity: 0
                        },
                        slot: "initial"
                    }
                ];
            }
        };
    }
};
exports.default = _default;

},{"@fusioncharts/core/src/lib":"gGvaa"}],"1NCxb":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = void 0;
var appearing = [
    {
        initialAttr: {
            opacity: 0
        },
        finalAttr: {
            opacity: 1
        },
        slot: "plot"
    }
], updating = [
    {
        slot: "plot",
        startEnd: {
            start: 0,
            end: .5
        }
    }
], disappearing = [
    {
        slot: "intial"
    }
];
var _default = {
    "*.legend.legend": function legendLegend() {
        return {
            "legendGroup.appearing": appearing,
            "legendGroup.updating": updating,
            "legendGroup.disappearing": disappearing,
            "scrollbar.appearing": appearing,
            "scrollbar.updating": updating,
            "scrollbar.disappearing": disappearing
        };
    }
};
exports.default = _default;

},{}],"3iRVg":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.computeLayout = void 0;
var _utils = require("./utils");
var _constants = require("./utils/constants");
var _grid = require("./grid");
var LayoutEngine = function() {
    function LayoutEngine() {
        this.gridLayoutEngine = _grid.computeGridLayout;
    }
    var _proto = LayoutEngine.prototype;
    _proto.compute = function compute(domTree) {
        switch((0, _utils.getDisplayProperty)(domTree)){
            case _constants.DISPLAY_GRID:
                return this.gridLayoutEngine(domTree);
            case _constants.DISPLAY_FLEX:
                return this.gridLayoutEngine(domTree);
            default:
                return this.gridLayoutEngine(domTree);
        }
    };
    return LayoutEngine;
}();
var computeLayout = function computeLayout(domTree) {
    var faber = new LayoutEngine;
    var clonedDomTree = (0, _utils.cloneObject)(domTree), calculatedTree;
    clonedDomTree.root = true;
    calculatedTree = faber.compute(clonedDomTree);
    (0, _utils.attachLayoutInformation)(domTree, calculatedTree);
    return domTree;
};
exports.computeLayout = computeLayout;

},{"./utils":"9sHnD","./utils/constants":"cwkDn","./grid":"egS8R"}],"9sHnD":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.pluckNumber = exports.getDisplayProperty = exports.attachLayoutInformation = exports.cloneObject = void 0;
var _constants = require("./constants");
var UNDEF;
var getDisplayProperty = function getDisplayProperty(domTree) {
    return domTree.style && domTree.style.display;
}, cloneObject = function cloneObject(arg) {
    if (_constants.ATOMIC_DATA_TYPE.indexOf(typeof arg) > -1 || arg === null) return arg;
    if (Array.isArray(arg)) {
        var i, len, arr = [];
        for(i = 0, len = arg.length; i < len; i++)arr.push(cloneObject(arg[i]));
        return arr;
    } else if (typeof arg === "object") {
        var cloneObj = {}, key;
        for(key in arg)cloneObj[key] = cloneObject(arg[key]);
        return cloneObj;
    }
}, attachLayoutInformation = function attachLayoutInformation(baseTree, calculatedTree) {
    if (baseTree === void 0) baseTree = {};
    if (calculatedTree === void 0) calculatedTree = {};
    var i, len;
    baseTree.layout = calculatedTree.layout;
    for(i = 0, len = (baseTree.children || []).length; i < len; i++)attachLayoutInformation(baseTree.children[i], calculatedTree.children[i]);
}, pluckNumber = function pluckNumber() {
    var arg, i, l;
    for(i = 0, l = arguments.length; i < l; i += 1){
        arg = arguments[i];
        if (!arg && arg !== false && arg !== 0) continue;
        else if (isNaN(arg = Number(arg))) continue;
        return arg;
    }
    return UNDEF;
};
exports.pluckNumber = pluckNumber;
exports.attachLayoutInformation = attachLayoutInformation;
exports.cloneObject = cloneObject;
exports.getDisplayProperty = getDisplayProperty;

},{"./constants":"cwkDn"}],"cwkDn":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.ATOMIC_DATA_TYPE = exports.STRETCH = exports.END = exports.START = exports.CENTER = exports.DISPLAY_FLEX = exports.DISPLAY_GRID = void 0;
var DISPLAY_GRID = "grid", DISPLAY_FLEX = "flex", CENTER = "center", START = "start", END = "end", STRETCH = "stretch", ATOMIC_DATA_TYPE = [
    "string",
    "number",
    "function",
    "boolean",
    "undefined"
];
exports.ATOMIC_DATA_TYPE = ATOMIC_DATA_TYPE;
exports.STRETCH = STRETCH;
exports.END = END;
exports.START = START;
exports.CENTER = CENTER;
exports.DISPLAY_FLEX = DISPLAY_FLEX;
exports.DISPLAY_GRID = DISPLAY_GRID;

},{}],"egS8R":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.computeGridLayout = computeGridLayout;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _utils = require("../utils");
var _trackSizing = _interopRequireDefault(require("./track-sizing"));
var _constants = require("../utils/constants");
var _repeatResolver = require("./helpers/repeatResolver");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var validSizes = [
    "auto",
    "none"
], minmaxRegex = /minmax/, templateSplitRegex = /(?:[^\s[\]()]+|\[[^[\]]*\]|\([^()]*\))+/g, getUCFirstString = function getUCFirstString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}, validNestedGrid = function validNestedGrid(tree) {
    var _ref = tree.style || {}, gridTemplateColumns = _ref.gridTemplateColumns, gridTemplateRows = _ref.gridTemplateRows;
    if (/repeat\(/g.test(gridTemplateColumns) || /repeat\(/g.test(gridTemplateRows)) return false;
    return true;
}, parseRepeatFunction = function parseRepeatFunction(repeatStr) {
    return repeatStr.split(/\(|\)/g)[1].split(",").map(function(arg) {
        return arg && arg.trim();
    });
}, getCleanSize = function getCleanSize(size) {
    size = size.trim();
    if (size === "auto") return size;
    if (!isNaN(+size)) return +size;
    if (minmaxRegex.test(size)) {
        var sizeAr = size.split(/\(|\)/g)[1].split(",");
        return [
            sizeAr[0].trim(),
            sizeAr[1].trim()
        ];
    }
    return size;
}, getItemSize = function getItemSize(items, dimension) {
    var filteredItems, templateCol, parsedDim = getUCFirstString(dimension), size, trackDir = dimension === "width" ? "col" : "row";
    filteredItems = items.map(function(item) {
        templateCol = item.style["gridTemplate" + getUCFirstString(trackDir === "col" ? "columns" : "rows")];
        if ((0, _utils.getDisplayProperty)(item) === "grid" && /repeat\(/g.test(templateCol)) size = parseRepeatFunction(templateCol)[1];
        else size = item.style["min" + parsedDim + "Contribution"] || item.style[dimension] || "auto";
        return {
            start: item[trackDir + "Start"],
            end: item[trackDir + "End"],
            size: size
        };
    });
    return filteredItems;
}, updateMatrix = function updateMatrix(grid, start, end) {
    var i, j;
    for(i = start.x; i < end.x; i++)for(j = start.y; j < end.y; j++)grid[i][j] = true;
}, resolveItemStyle = function resolveItemStyle(itemStyle, mapping) {
    var gridRowStart = itemStyle.gridRowStart, gridRowEnd = itemStyle.gridRowEnd, gridColumnStart = itemStyle.gridColumnStart, gridColumnEnd = itemStyle.gridColumnEnd;
    if (itemStyle.gridColumn) {
        var _itemStyle$gridColumn = itemStyle.gridColumn.split("/").map(function(line) {
            return line.trim();
        });
        gridColumnStart = _itemStyle$gridColumn[0];
        gridColumnEnd = _itemStyle$gridColumn[1];
        gridColumnStart = mapping ? mapping.col.nameToLineMap[gridColumnStart] : 1;
        if (/span\s+\d+/g.test(gridColumnEnd)) gridColumnEnd = gridColumnStart + +gridColumnEnd.match(/span\s+(\d+)/)[1];
        gridColumnEnd = mapping ? mapping.col.nameToLineMap[gridColumnEnd] : 1;
    }
    if (itemStyle.gridRow) {
        var _itemStyle$gridRow$sp = itemStyle.gridRow.split("/").map(function(line) {
            return line.trim();
        });
        gridRowStart = _itemStyle$gridRow$sp[0];
        gridRowEnd = _itemStyle$gridRow$sp[1];
        gridRowStart = mapping ? mapping.row.nameToLineMap[gridRowStart] : 1;
        if (/span\s\d+/g.test(gridRowEnd)) gridRowEnd = gridRowStart + +gridRowEnd.match(/span\s(\d+)/)[1];
        gridRowEnd = mapping ? mapping.row.nameToLineMap[gridRowEnd] : 1;
    }
    return {
        gridRowStart: gridRowStart,
        gridRowEnd: gridRowEnd,
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd
    };
}, getMaxRowColumn = function getMaxRowColumn(items) {
    var maxRow = 1, maxColumn = 1, itemStyle;
    items.forEach(function(item) {
        itemStyle = resolveItemStyle(item.style);
        maxColumn = Math.max(isNaN(+itemStyle.gridColumnStart) ? 0 : +itemStyle.gridColumnStart, maxColumn, isNaN(+itemStyle.gridColumnEnd - 1) ? 0 : +itemStyle.gridColumnEnd - 1);
        maxRow = Math.max(isNaN(+itemStyle.gridRowStart) ? 0 : +itemStyle.gridRowStart, maxRow, isNaN(+itemStyle.gridRowEnd - 1) ? 0 : +itemStyle.gridRowEnd - 1);
    });
    return {
        maxRow: maxRow,
        maxColumn: maxColumn
    };
};
var Grid = function() {
    function Grid() {
        this.setup();
    }
    var _proto = Grid.prototype;
    _proto.setup = function setup() {
        this._tsa = new _trackSizing.default;
        this.props = {};
        this._config = {
            mapping: {}
        };
        return this;
    };
    _proto.set = function set(key, value) {
        this.props[key] = value;
        return this;
    };
    _proto.getProps = function getProps(key) {
        return this.props[key];
    };
    _proto.getConfig = function getConfig(key) {
        return this._config[key];
    };
    _proto.compute = function compute(_domTree) {
        var domTree = _domTree || this.props.domTree;
        this._sanitizeTracks(domTree)._sanitizeItems(domTree)._inflateTracks()._assignCoordinatesToCells(domTree);
    };
    _proto._sanitizeTracks = function _sanitizeTracks(_domTree) {
        if (_domTree === void 0) _domTree = {};
        var style = _domTree.style, gridTemplateRows = style.gridTemplateRows, gridTemplateColumns = style.gridTemplateColumns, config = this._config, trackInfo, _getMaxRowColumn = getMaxRowColumn(_domTree.children), maxColumn = _getMaxRowColumn.maxColumn, maxRow = _getMaxRowColumn.maxRow;
        this.set("maxTracks", maxRow);
        trackInfo = this._fetchTrackInformation(gridTemplateRows);
        config.mapping.row = {
            nameToLineMap: trackInfo.nameToLineMap,
            lineToNameMap: trackInfo.lineToNameMap
        };
        config.rowTracks = trackInfo.tracks;
        this.set("maxTracks", maxColumn);
        trackInfo = this._fetchTrackInformation(gridTemplateColumns);
        config.mapping.col = {
            nameToLineMap: trackInfo.nameToLineMap,
            lineToNameMap: trackInfo.lineToNameMap
        };
        config.colTracks = trackInfo.tracks;
        return this;
    };
    _proto._fetchTrackInformation = function _fetchTrackInformation(tracks) {
        if (tracks === void 0) tracks = "none";
        var i, len, splittedTrackInfo = tracks.match(templateSplitRegex), nameList, sizeList, sanitizedTracks = [
            {}
        ], startLineNames, endLineNames, nameToLineMap = {}, lineToNameMap = {};
        nameList = splittedTrackInfo.filter(function(track) {
            if (track && typeof track === "string" && track.length) {
                len = track.length;
                if (track[0] === "[" && track[len - 1] === "]") return true;
                return false;
            }
            return true;
        });
        sizeList = splittedTrackInfo.filter(function(size) {
            if (!size) return false;
            len = (size + "").toLowerCase().replace(/px|fr/, "");
            if (validSizes.indexOf(len) >= 0 || minmaxRegex.test(len) || !isNaN(len)) return true;
            return false;
        }).map(function(size) {
            return getCleanSize(size);
        });
        len = sizeList.length;
        if (tracks === "none") len = this.getProps("maxTracks");
        for(i = 0; i < len; i++){
            startLineNames = nameList[i] && nameList[i].replace(/\[|\]/g, "").split(" ").filter(function(name) {
                return name.length;
            }).map(function(name) {
                return name.trim();
            }) || [
                i + 1 + ""
            ];
            endLineNames = nameList[i + 1] && nameList[i + 1].replace(/\[|\]/g, "").split(" ").filter(function(name) {
                return name.length;
            }).map(function(name) {
                return name.trim();
            }) || [
                i + 2 + ""
            ];
            sanitizedTracks.push({
                start: i + 1,
                end: i + 2,
                size: sizeList[i] || "auto"
            });
            lineToNameMap[i + 1] = startLineNames;
            lineToNameMap[i + 2] = endLineNames;
            startLineNames.forEach(function(name) {
                return nameToLineMap[name] = i + 1;
            });
            endLineNames.forEach(function(name) {
                return nameToLineMap[name] = i + 2;
            });
            nameToLineMap[i + 1] = i + 1;
            nameToLineMap[i + 2] = i + 2;
        }
        return {
            tracks: sanitizedTracks,
            nameToLineMap: nameToLineMap,
            lineToNameMap: lineToNameMap
        };
    };
    _proto._sanitizeItems = function _sanitizeItems(_domTree) {
        var domTree = _domTree || this.props.domTree, items = domTree.children || [], mapping = this._config.mapping, gridAutoFlow = domTree.style.gridAutoFlow || "row", rowNum = Object.keys(mapping.row.lineToNameMap).length, colNum = Object.keys(mapping.col.lineToNameMap).length, sanitizedItems = [], autoFlowItems = [], itemStyle, gridMatrix = [
            []
        ], freeCells = [], cell, item, extraRows, i, j, len;
        for(i = 1; i <= rowNum; i++)gridMatrix.push([]);
        for(i = 0, len = items.length; i < len; i++){
            itemStyle = resolveItemStyle(items[i].style, mapping);
            sanitizedItems.push(_objectSpread(_objectSpread({}, items[i]), {}, {
                rowStart: mapping.row.nameToLineMap[itemStyle.gridRowStart],
                rowEnd: mapping.row.nameToLineMap[itemStyle.gridRowEnd],
                colStart: mapping.col.nameToLineMap[itemStyle.gridColumnStart],
                colEnd: mapping.col.nameToLineMap[itemStyle.gridColumnEnd]
            }));
            item = sanitizedItems[i];
            updateMatrix(gridMatrix, {
                x: item.rowStart,
                y: item.colStart
            }, {
                x: item.rowEnd,
                y: item.colEnd
            });
        }
        autoFlowItems = sanitizedItems.filter(function(sanitizedItem) {
            return !sanitizedItem.colStart || !sanitizedItem.rowStart;
        });
        if (autoFlowItems) {
            if (gridAutoFlow === "row") {
                for(i = 1; i < rowNum; i++){
                    for(j = 1; j < colNum; j++)if (!gridMatrix[i][j]) freeCells.push({
                        row: i,
                        col: j
                    });
                }
                while(autoFlowItems.length && freeCells.length){
                    item = autoFlowItems.shift();
                    cell = freeCells.shift();
                    item.rowStart = cell.row;
                    item.colStart = cell.col;
                    item.rowEnd = cell.row + 1;
                    item.colEnd = cell.col + 1;
                }
                extraRows = Math.ceil(autoFlowItems.length / colNum);
                if (extraRows) {
                    while(extraRows--){
                        domTree.style.gridTemplateRows += "auto ";
                        mapping.row.nameToLineMap[rowNum + 1] = rowNum + 1;
                        mapping.row.nameToLineMap[rowNum + 2] = rowNum + 2;
                        rowNum++;
                        gridMatrix.push([]);
                    }
                    domTree.style.gridTemplateRows = domTree.style.gridTemplateRows.trim();
                    freeCells = [];
                    for(i = 1; i <= rowNum; i++){
                        for(j = 1; j <= colNum; j++)if (!gridMatrix[i][j]) freeCells.push({
                            row: i,
                            col: j
                        });
                    }
                    while(autoFlowItems.length){
                        item = autoFlowItems.shift();
                        cell = freeCells.shift();
                        item.rowStart = cell.row;
                        item.colStart = cell.col;
                        item.rowEnd = cell.row + 1;
                        item.colEnd = cell.col + 1;
                    }
                }
            }
        }
        this._config.sanitizedItems = sanitizedItems;
        return this;
    };
    _proto._inflateTracks = function _inflateTracks() {
        var _this$_config = this._config, sanitizedItems = _this$_config.sanitizedItems, colTracks = _this$_config.colTracks, rowTracks = _this$_config.rowTracks, sizedTracks, minHeightContribution = 0, minWidthContribution = 0, domTree = this.props.domTree, _ref2 = domTree.style || {}, paddingStart = _ref2.paddingStart, paddingEnd = _ref2.paddingEnd, paddingTop = _ref2.paddingTop, paddingBottom = _ref2.paddingBottom, width = _ref2.width, height = _ref2.height, tsa = new _trackSizing.default;
        if (!isNaN(+width)) width -= paddingStart + paddingEnd;
        sizedTracks = tsa.clear().set("tracks", colTracks).set("items", getItemSize(sanitizedItems, "width")).set("containerSize", width || "auto").resolveTracks();
        colTracks.forEach(function(track, index) {
            track.calculatedStyle = sizedTracks[index];
            minWidthContribution += sizedTracks[index].baseSize || 0;
        });
        this._solveUnresolvedChildren();
        if (!isNaN(+height)) height -= paddingTop + paddingBottom;
        sizedTracks = tsa.clear().set("tracks", rowTracks).set("items", getItemSize(sanitizedItems, "height")).set("containerSize", height || "auto").resolveTracks();
        rowTracks.forEach(function(track, index) {
            track.calculatedStyle = sizedTracks[index];
            minHeightContribution += sizedTracks[index].baseSize || 0;
        });
        domTree.style.minHeightContribution = minHeightContribution;
        domTree.style.minWidthContribution = minWidthContribution;
        return this;
    };
    _proto._solveUnresolvedChildren = function _solveUnresolvedChildren(_domTree) {
        var domTree = _domTree || this.props.domTree, childrenWithRepeatConfiguration = (domTree.unResolvedChildren || []).filter(function(child) {
            return /repeat\(/g.test(child.style.gridTemplateColumns) || /repeat\(/g.test(child.style.gridTemplateRows);
        }), _this$_config2 = this._config, colTracks = _this$_config2.colTracks, mapping = _this$_config2.mapping, parentReference = this.getProps("parent"), colTrackDp = [
            0
        ], resolvedTracks, i, len, trackWidth, parentInfo, parsedWidthOfItem, colStart, colEnd;
        if (!childrenWithRepeatConfiguration.length) return this;
        for(i = 1, len = colTracks.length; i < len; i++)colTrackDp[i] = colTrackDp[i - 1] + colTracks[i].calculatedStyle.baseSize;
        childrenWithRepeatConfiguration.forEach(function(child) {
            parsedWidthOfItem = parseRepeatFunction(child.style.gridTemplateColumns)[1];
            colStart = mapping.col.nameToLineMap[child.style.gridColumnStart];
            colEnd = mapping.col.nameToLineMap[child.style.gridColumnEnd];
            trackWidth = colTrackDp[colEnd - 1] - colTrackDp[colStart - 1];
            parentInfo = {
                itemWidth: parsedWidthOfItem,
                width: trackWidth
            };
            resolvedTracks = (0, _repeatResolver.repeatResolver)(child, parentInfo);
            child.style.gridTemplateColumns = resolvedTracks.gridTemplateColumns;
            child.style.gridTemplateRows = resolvedTracks.gridTemplateRows;
            parentReference.gridLayoutEngine(child);
        });
        return this;
    };
    _proto._assignCoordinatesToCells = function _assignCoordinatesToCells(_domTree) {
        var domTree = _domTree || this.props.domTree, _this$_config3 = this._config, sanitizedItems = _this$_config3.sanitizedItems, rowTracks = _this$_config3.rowTracks, colTracks = _this$_config3.colTracks, item, len, i, _domTree$style = domTree.style, justifyItems = _domTree$style.justifyItems, alignItems = _domTree$style.alignItems, paddingStart = _domTree$style.paddingStart, paddingTop = _domTree$style.paddingTop, trackWidth, trackHeight, width, height, x, y, rowTrackdp = [
            paddingStart
        ], colTrackdp = [
            paddingTop
        ];
        for(i = 1, len = rowTracks.length; i < len; i++)rowTrackdp[i] = rowTrackdp[i - 1] + rowTracks[i].calculatedStyle.baseSize;
        for(i = 1, len = colTracks.length; i < len; i++)colTrackdp[i] = colTrackdp[i - 1] + colTracks[i].calculatedStyle.baseSize;
        domTree.layout = {
            x: 0,
            y: 0,
            width: isNaN(domTree.style.width) ? colTrackdp[colTrackdp.length - 1] : domTree.style.width,
            height: isNaN(domTree.style.height) ? rowTrackdp[rowTrackdp.length - 1] : domTree.style.height
        };
        (domTree.children || []).forEach(function(child, index) {
            item = sanitizedItems[index];
            trackWidth = colTrackdp[item.colEnd - 1] - colTrackdp[item.colStart - 1];
            trackHeight = rowTrackdp[item.rowEnd - 1] - rowTrackdp[item.rowStart - 1];
            width = isNaN(+child.style.width) ? trackWidth : +child.style.width;
            height = isNaN(+child.style.height) ? trackHeight : +child.style.height;
            switch(justifyItems || child.style.justifySelf){
                case _constants.CENTER:
                    x = colTrackdp[item.colStart - 1] + trackWidth / 2 - width / 2;
                    break;
                case _constants.END:
                    x = colTrackdp[item.colEnd - 1] - width;
                    break;
                case _constants.STRETCH:
                    width = trackWidth;
                    x = colTrackdp[item.colStart - 1];
                    break;
                default:
                    x = colTrackdp[item.colStart - 1];
            }
            switch(alignItems || child.style.alignSelf){
                case _constants.CENTER:
                    y = rowTrackdp[item.rowStart - 1] + trackHeight / 2 - height / 2;
                    break;
                case _constants.END:
                    y = rowTrackdp[item.rowEnd - 1] - height;
                    break;
                case _constants.STRETCH:
                    height = trackHeight;
                    y = rowTrackdp[item.rowStart - 1];
                    break;
                default:
                    y = rowTrackdp[item.rowStart - 1];
            }
            x += (0, _utils.pluckNumber)(item.style.paddingStart, item.style.padding, 0);
            y += (0, _utils.pluckNumber)(item.style.paddingTop, item.style.padding, 0);
            child.layout = {
                x: x,
                y: y,
                x2: x + width,
                y2: y + height,
                width: width,
                height: height
            };
        });
        return this;
    };
    return Grid;
}();
var replaceWithAbsValue = function replaceWithAbsValue(styleTrack, calculatedTrack) {
    if (styleTrack === void 0) styleTrack = "";
    var trackSplitAr = (styleTrack.match(templateSplitRegex) || []).filter(function(track) {
        return track && !!track.trim();
    }), trackWithAbsValue = "", counter = 1;
    if (trackSplitAr.length && !/repeat\(/.test(styleTrack)) trackSplitAr.forEach(function(track) {
        if (validSizes.indexOf(track) > -1 || /[0-9]fr/.test(track) || minmaxRegex.test(track) || !isNaN(track)) {
            trackWithAbsValue += calculatedTrack[counter].calculatedStyle.baseSize + " ";
            counter++;
        } else trackWithAbsValue += track + " ";
    });
    else calculatedTrack.forEach(function(track) {
        if (isNaN(track.calculatedStyle.baseSize)) return;
        trackWithAbsValue += track.calculatedStyle.baseSize + " ";
    });
    return trackWithAbsValue.trim();
}, updateDomTreeWithResolvedValues = function updateDomTreeWithResolvedValues(domTree, grid) {
    var containerStyle = domTree.style, rowTracks = grid.getConfig("rowTracks"), colTracks = grid.getConfig("colTracks"), mapping = grid.getConfig("mapping"), gridTemplateRows = containerStyle.gridTemplateRows, gridTemplateColumns = containerStyle.gridTemplateColumns, child, i, j, len, rowTrackSum, colTrackSum, rowStart, rowEnd, colStart, colEnd;
    domTree.style.gridTemplateRows = replaceWithAbsValue(gridTemplateRows, rowTracks);
    domTree.style.gridTemplateColumns = replaceWithAbsValue(gridTemplateColumns, colTracks);
    for(i = 0, len = (domTree.children || []).length; i < len; i++){
        child = domTree.children[i];
        if ((0, _utils.getDisplayProperty)(child)) {
            child.style.gridTemplateColumns = child.userGivenStyles.gridTemplateColumns;
            child.style.gridTemplateRows = child.userGivenStyles.gridTemplateRows;
            if (isNaN(child.userGivenStyles.width)) {
                colStart = child.style.gridColumnStart;
                colEnd = child.style.gridColumnEnd;
                colStart = mapping.col.nameToLineMap[colStart];
                colEnd = mapping.col.nameToLineMap[colEnd];
                for(j = colStart, colTrackSum = 0; j < colEnd; j++)colTrackSum += colTracks[j].calculatedStyle.baseSize;
                child.style.width = colTrackSum;
            }
            if (isNaN(child.userGivenStyles.height)) {
                rowStart = child.style.gridRowStart;
                rowEnd = child.style.gridRowEnd;
                rowStart = mapping.row.nameToLineMap[rowStart];
                rowEnd = mapping.row.nameToLineMap[rowEnd];
                for(j = rowStart, rowTrackSum = 0; j < rowEnd; j++)rowTrackSum += rowTracks[j].calculatedStyle.baseSize;
                child.style.height = rowTrackSum;
            }
        }
    }
    return domTree;
};
function computeGridLayout(domTree, count) {
    if (count === void 0) count = 1;
    var i, len, style = domTree.style, child, grid;
    if (!domTree || !domTree.style) return;
    if (!domTree.userGivenStyles) {
        domTree.style.width = isNaN(domTree.style.width) ? "auto" : domTree.style.width;
        domTree.style.height = isNaN(domTree.style.height) ? "auto" : domTree.style.height;
        style.paddingStart = (0, _utils.pluckNumber)(style.paddingStart, style.padding, 0);
        style.paddingEnd = (0, _utils.pluckNumber)(style.paddingEnd, style.padding, 0);
        style.paddingTop = (0, _utils.pluckNumber)(style.paddingTop, style.padding, 0);
        style.paddingBottom = (0, _utils.pluckNumber)(style.paddingBottom, style.padding, 0);
        domTree.userGivenStyles = {
            gridTemplateColumns: domTree.style.gridTemplateColumns,
            gridTemplateRows: domTree.style.gridTemplateRows,
            width: domTree.style.width,
            height: domTree.style.height
        };
    }
    domTree.unResolvedChildren = [];
    for(i = 0, len = domTree.children && domTree.children.length; i < len; i++){
        child = domTree.children[i];
        if ((0, _utils.getDisplayProperty)(child)) {
            if (validNestedGrid(child)) this.compute(child);
            else domTree.unResolvedChildren.push(child);
        }
    }
    grid = new Grid;
    grid.set("domTree", domTree).set("parent", this).compute();
    if (count < 2) this.gridLayoutEngine(updateDomTreeWithResolvedValues(domTree, grid), 2);
    return domTree;
}

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7","../utils":"9sHnD","./track-sizing":"fviBf","../utils/constants":"cwkDn","./helpers/repeatResolver":"1yvbk"}],"fviBf":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _defineProperty2.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var getMultiplierOfFr = function getMultiplierOfFr(size) {
    return +size.replace(/fr/, "");
}, _frSpaceDistributorHelper = function _frSpaceDistributorHelper(tracks, totalSpaceUsed, containerSize) {
    var freeSpace, spacePerFrTrack, eligibleTracks, totalFrTrackRatio = 0;
    if (!tracks.length) return;
    tracks.forEach(function(track) {
        return totalFrTrackRatio += track.multiplier;
    });
    freeSpace = containerSize - totalSpaceUsed;
    spacePerFrTrack = freeSpace / totalFrTrackRatio;
    eligibleTracks = tracks.filter(function(track) {
        return track.baseSize <= track.multiplier * spacePerFrTrack;
    });
    if (eligibleTracks.length < tracks.length) {
        tracks.filter(function(track) {
            return track.baseSize > track.multiplier * spacePerFrTrack;
        }).forEach(function(track) {
            return totalSpaceUsed += track.baseSize;
        });
        return _frSpaceDistributorHelper(eligibleTracks, totalSpaceUsed, containerSize);
    } else eligibleTracks.forEach(function(track) {
        return track.baseSize = track.multiplier * spacePerFrTrack;
    });
}, _intrinsicSpaceDistributorHelper = function _intrinsicSpaceDistributorHelper(tracks, totalSpaceUsed, containerSize) {
    var freeSpace, spacePerIntrinsicTrack, i, len, frozenTrack = 0, minMaxTracks, growthLimit, baseSize;
    if (!tracks.length) return;
    minMaxTracks = tracks.filter(function(track) {
        return track.type === "minmax" && track.growthLimit !== Infinity;
    });
    freeSpace = containerSize - totalSpaceUsed;
    minMaxTracks.sort(function(a, b) {
        var gap1 = a.growthLimit - a.baseSize, gap2 = b.growthLimit - b.baseSize;
        return gap1 - gap2;
    });
    len = minMaxTracks.length;
    while(frozenTrack < len && freeSpace){
        spacePerIntrinsicTrack = freeSpace / (minMaxTracks.length - frozenTrack || 1);
        for(i = 0, len = minMaxTracks.length; i < len; i++){
            growthLimit = minMaxTracks[i].growthLimit;
            baseSize = Math.min(spacePerIntrinsicTrack + minMaxTracks[i].baseSize, growthLimit);
            freeSpace -= baseSize - minMaxTracks[i].baseSize;
            minMaxTracks[i].baseSize = baseSize;
            if (growthLimit === baseSize && !minMaxTracks[i].frozen) {
                minMaxTracks[i].frozen = true;
                frozenTrack++;
            }
        }
    }
    tracks = tracks.filter(function(track) {
        return track.type === "minmax" && track.growthLimit === Infinity || track.type !== "minmax";
    });
    spacePerIntrinsicTrack = freeSpace / tracks.length;
    tracks.forEach(function(track) {
        return track.baseSize += spacePerIntrinsicTrack;
    });
};
var TrackResolver = function() {
    function TrackResolver(tracks, items, containerSize) {
        if (tracks === void 0) tracks = [];
        if (items === void 0) items = [];
        if (containerSize === void 0) containerSize = 600;
        this.clear();
        this.set("tracks", tracks);
        this.set("items", items);
        this.set("containerSize", containerSize);
        return this;
    }
    var _proto = TrackResolver.prototype;
    _proto.set = function set(key, info) {
        this.props[key] = info;
        switch(key){
            case "tracks":
                this._initTrackSize();
                break;
            case "items":
                this._initItems();
                break;
            case "containerSize":
                this.props[key] = isNaN(+info) ? 0 : +info;
        }
        return this;
    };
    _proto.get = function get(key) {
        return this.props[key];
    };
    _proto._initTrackSize = function _initTrackSize(_tracks) {
        var tracks = _tracks || this.props.tracks || [], config = this._config, trackAr = [
            {}
        ], i, len, size, type, multiplier, baseSize, growthLimit;
        config.frTracks = [];
        config.intrinsicTracks = [];
        for(i = 1, len = tracks.length; i < len; i++){
            size = tracks[i].size;
            multiplier = 1;
            if (Array.isArray(size)) {
                baseSize = +size[0] || 0;
                if (size[1].indexOf("fr") > 0 || size[0].indexOf("fr") > 0) {
                    growthLimit = Infinity;
                    config.frTracks.push(i);
                    type = "minmax";
                } else if (size[1] === "auto" || size[0] === "auto") {
                    growthLimit = Infinity;
                    config.intrinsicTracks.push(i);
                    type = "minmax";
                } else if (!isNaN(+size[0]) && !isNaN(+size[1])) {
                    growthLimit = Math.max(+size[0], +size[1]);
                    baseSize = Math.min(+size[0], +size[1]);
                    config.intrinsicTracks.push(i);
                    type = "minmax";
                }
            } else if (!isNaN(+size)) {
                baseSize = growthLimit = +size;
                type = "fixed";
            } else if (size.indexOf("fr") > 0) {
                baseSize = 0;
                growthLimit = Infinity;
                config.frTracks.push(i);
                type = "flex";
                multiplier = getMultiplierOfFr(size);
            } else {
                baseSize = 0;
                growthLimit = Infinity;
                type = "intrinsic";
                config.intrinsicTracks.push(i);
            }
            trackAr.push(_objectSpread(_objectSpread({}, tracks[i]), {}, {
                type: type,
                multiplier: multiplier,
                baseSize: baseSize,
                growthLimit: growthLimit
            }));
        }
        return config.sanitizedTracks = trackAr;
    };
    _proto._initItems = function _initItems(_items) {
        var items = _items || this.props.items || [], config = this._config, sanitizedItems = [], nonSpanningItemStartIndex, item, validItems = 0, i, len;
        for(i = 0, len = items.length; i < len; i++){
            if (isNaN(items[i].start) || isNaN(items[i].end)) {
                config.autoFlow.push(items[i]);
                continue;
            }
            sanitizedItems.push(_objectSpread({}, items[i]));
            item = sanitizedItems[validItems];
            validItems++;
            item.size = isNaN(item.size) ? this._getParentSize(item) : +item.size;
        }
        sanitizedItems.sort(function(a, b) {
            var gap1 = a.end - a.start, gap2 = b.end - b.start;
            if (gap1 === gap2) return a.start - b.start;
            else return gap1 - gap2;
        });
        for(i = 0, nonSpanningItemStartIndex = len = sanitizedItems.length; i < len; i++)if (sanitizedItems[i].end - sanitizedItems[i].start > 1) {
            nonSpanningItemStartIndex = i;
            break;
        }
        this._config.nonSpanningItemStartIndex = nonSpanningItemStartIndex;
        return this._config.sanitizedItems = sanitizedItems;
    };
    _proto._getParentSize = function _getParentSize(item) {
        var sanitizedTracks = this._config.sanitizedTracks, parentTracks, widthOfParentTracks = 0;
        parentTracks = sanitizedTracks.filter(function(track) {
            return track.start >= item.start && track.end <= item.end;
        });
        parentTracks.forEach(function(track) {
            return widthOfParentTracks += track.baseSize;
        });
        return widthOfParentTracks || 0;
    };
    _proto.resolveTracks = function resolveTracks() {
        this._placeNonSpanningItems()._placeSpanningItems()._distributeFreeSpace();
        return this._config.sanitizedTracks;
    };
    _proto._placeNonSpanningItems = function _placeNonSpanningItems() {
        var _this$_config = this._config, sanitizedItems = _this$_config.sanitizedItems, sanitizedTracks = _this$_config.sanitizedTracks, nonSpanningItemStartIndex = _this$_config.nonSpanningItemStartIndex, nonSpanningItems = sanitizedItems.slice(0, nonSpanningItemStartIndex), track, trackIndex;
        nonSpanningItems.forEach(function(item) {
            trackIndex = item.start;
            track = sanitizedTracks[trackIndex];
            if (track.type !== "fixed") {
                track.baseSize = Math.max(track.baseSize, item.size);
                track.growthLimit = Math.max(track.growthLimit, track.baseSize);
            }
        });
        return this;
    };
    _proto._placeSpanningItems = function _placeSpanningItems() {
        var _this$_config2 = this._config, sanitizedItems = _this$_config2.sanitizedItems, sanitizedTracks = _this$_config2.sanitizedTracks, nonSpanningItemStartIndex = _this$_config2.nonSpanningItemStartIndex, frTracks = _this$_config2.frTracks, spanningItems = sanitizedItems.slice(nonSpanningItemStartIndex), trackSizedp = [
            0
        ], sizeConsumed, sizeLeft, sizePerTrack, availableTracks, hasFrTrack, i, len;
        if (!spanningItems.length) return this;
        for(i = 1, len = sanitizedTracks.length; i < len; i++)trackSizedp[i] = trackSizedp[i - 1] + (sanitizedTracks[i].baseSize || 0);
        spanningItems.forEach(function(item) {
            sizeConsumed = trackSizedp[item.end - 1] - trackSizedp[item.start - 1];
            sizeLeft = Math.max(0, item.size - sizeConsumed);
            if (!sizeLeft) return;
            for(i = item.start, hasFrTrack = false, availableTracks = 0; i < item.end; i++){
                if (frTracks.indexOf(i) >= 0) hasFrTrack = true;
                if (sanitizedTracks[i].type !== "fixed") availableTracks++;
            }
            if (!availableTracks || hasFrTrack) return;
            sizePerTrack = sizeLeft / availableTracks;
            for(i = item.start; i < item.end; i++)if (sanitizedTracks[i].type !== "fixed") sanitizedTracks[i].baseSize += sizePerTrack;
        });
        return this;
    };
    _proto._distributeFreeSpace = function _distributeFreeSpace() {
        var _this$_config3 = this._config, frTracks = _this$_config3.frTracks, intrinsicTracks = _this$_config3.intrinsicTracks, sanitizedTracks = _this$_config3.sanitizedTracks, containerSize = this.props.containerSize, totalSpaceUsed = 0;
        sanitizedTracks.forEach(function(track) {
            return totalSpaceUsed += track.baseSize || 0;
        });
        if (totalSpaceUsed < containerSize) {
            if (frTracks.length) {
                frTracks.forEach(function(trackId, index) {
                    frTracks[index] = sanitizedTracks[trackId];
                });
                frTracks.forEach(function(track) {
                    return totalSpaceUsed -= track.baseSize;
                });
                _frSpaceDistributorHelper(frTracks, totalSpaceUsed, containerSize);
            } else if (intrinsicTracks.length) {
                intrinsicTracks.forEach(function(trackId, index) {
                    intrinsicTracks[index] = sanitizedTracks[trackId];
                });
                _intrinsicSpaceDistributorHelper(intrinsicTracks, totalSpaceUsed, containerSize);
            }
        }
        return this;
    };
    _proto.clear = function clear() {
        this.props = {};
        this._config = {
            frTracks: [],
            intrinsicTracks: [],
            autoFlow: []
        };
        return this;
    };
    return TrackResolver;
}();
var _default = TrackResolver;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/defineProperty":"4x6r7"}],"1yvbk":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.repeatResolver = repeatResolver;
function repeatResolver(domTree, parentInfo) {
    var children = domTree.children, rowWidth = 0, numOfRows, itemInARow = 0, repeatStyle = "auto-fit", newGridTemplateColumns = "", newGridTemplateRows = "", i, len, height = 0, itemWidth = parentInfo.itemWidth, width = parentInfo.width;
    width = isNaN(+width) ? 0 : +width;
    children.forEach(function(child) {
        return height = Math.max(height, +child.style.height || 0);
    });
    itemWidth = +itemWidth;
    if (repeatStyle === "auto-fit") {
        rowWidth += itemWidth;
        newGridTemplateColumns += itemWidth + " ";
        itemInARow = 1;
        for(i = 1, len = children.length; i < len; i++){
            if (rowWidth + itemWidth > width) break;
            rowWidth += itemWidth;
            newGridTemplateColumns += itemWidth + " ";
        }
        itemInARow = i;
        numOfRows = Math.ceil(len / itemInARow);
        while(numOfRows--)newGridTemplateRows += height + " ";
    }
    return {
        gridTemplateColumns: newGridTemplateColumns.trim(),
        gridTemplateRows: newGridTemplateRows.trim()
    };
}

},{}],"dcEDd":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _lib = require("@fusioncharts/core/src/lib");
var _entities = _interopRequireDefault(require("../dataset/entities"));
var _markers = _interopRequireDefault(require("../dataset/markers"));
var _mapGroup = _interopRequireDefault(require("../dataset/groups/map-group"));
function _default(chart) {
    var mapGroupManager, dataObj = chart.getFromEnv("dataSource"), entityJSONData = dataObj.data || {}, markerJSONData = dataObj.markers;
    (0, _lib.componentFactory)(chart, _mapGroup.default, "mapGroup");
    mapGroupManager = chart.getChildren("mapGroup")[0];
    (0, _lib.datasetFactory)(mapGroupManager, _entities.default, "entities", 1, [
        entityJSONData
    ]);
    if (markerJSONData) (0, _lib.datasetFactory)(mapGroupManager, _markers.default, "markers", 1, [
        markerJSONData
    ]);
    else chart.getDatasets()[1] && chart.getDatasets()[1].remove();
}

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@fusioncharts/core/src/lib":"gGvaa","../dataset/entities":"i96dI","../dataset/markers":"gyieI","../dataset/groups/map-group":"9CF40"}],"i96dI":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var _extAnnotation = _interopRequireDefault(require("@fusioncharts/features/src/annotation/ext-annotation"));
var _dependencyManager = require("@fusioncharts/core/src/dependency-manager");
var _mapEntities = _interopRequireDefault(require("../_internal/map-entities.animation"));
var _lib = require("@fusioncharts/core/src/lib");
var _schedular = require("@fusioncharts/core/src/schedular");
var _redraphaelShapes = _interopRequireDefault(require("@fusioncharts/core/src/_internal/redraphael/redraphael-shapes/redraphael-shapes.litepath"));
var Raphael = (0, _dependencyManager.getDep)("redraphael", "plugin"), UNDEF, userAgent = window.navigator.userAgent, isIE = /msie/i.test(userAgent) && !window.opera, COMMA = ",", BLANK = "", POSITION_TOP = "top", POSITION_BOTTOM = "bottom", POSITION_RIGHT = "right", POSITION_LEFT = "left", POSITION_MIDDLE = "middle", POSITION_CENTER = "center", ENTITYLABEL = "entityLabel", TEXT_STR = "text", CRISP = "crisp", math = window.Math, mathMin = math.min, mathMax = math.max, isStrokeReg = /stroke/gi, isWebKit = /AppleWebKit/.test(userAgent), mathCeil = math.ceil, colorize = function colorize(original, obj) {
    var col = !obj ? {
        FCcolor: original
    } : (0, _lib.extend2)(original.FCcolor, obj, false, true);
    col.toString = _lib.toRaphaelColor;
    return col;
}, pruneStrokeAttrs = function pruneStrokeAttrs(obj, thicknessModifier) {
    var key, returnObj = {}, finalThicknessModifier;
    finalThicknessModifier = thicknessModifier || 1;
    if (!obj || typeof obj !== "object") return returnObj;
    for(key in obj)if (!isStrokeReg.test(key)) {
        if (key === "stroke-width") {
            returnObj[key] = Number(obj[key]) / finalThicknessModifier;
            if (isWebKit) returnObj[key] = returnObj[key] && mathCeil(returnObj[key]) || 0;
        } else returnObj[key] = obj[key];
    }
    return returnObj;
}, getTextWrapWidth = {
    right: function right() {
        return arguments[1];
    },
    left: function left(w, x) {
        return w - x;
    },
    center: function center(w, x) {
        return mathMin(x, w - x) * 2;
    }
}, getTextWrapHeight = {
    top: function top() {
        return arguments[1];
    },
    middle: function middle(h, y) {
        return mathMin(y, h - y) * 2;
    },
    bottom: function bottom(h, y) {
        return h - y;
    }
}, setCustomAttrs = function setCustomAttrs(entityObj, attrs) {
    entityObj && entityObj.graphics.outlines.attr(attrs);
}, convertArrayToIdMap = function convertArrayToIdMap(arr) {
    var i = arr && arr.length || 0, ret = {}, item;
    while(i--){
        item = arr[i];
        if (item.id !== UNDEF) ret[item.id.toLowerCase()] = item;
    }
    return ret;
};
(0, _dependencyManager.addDep)({
    name: "mapsAnimation",
    type: "animationRule",
    extension: _mapEntities.default
});
(0, _redraphaelShapes.default)(Raphael);
var Entities = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(Entities, _ComponentInterface);
    function Entities() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        _this.components = {};
        return _this;
    }
    var _proto = Entities.prototype;
    _proto.getName = function getName() {
        return "entities";
    };
    _proto.getType = function getType() {
        return "dataset";
    };
    _proto.configureAttributes = function configureAttributes(entityJSONDataOb) {
        if (!entityJSONDataOb) return;
        this.JSONData = {
            data: entityJSONDataOb
        };
        var dataset = this, chart = dataset.getFromEnv("chart"), rawData = chart.jsonData, conf = dataset.config, mapAttrs = rawData.map || rawData.chart, entityJSONData, entities, dataItem, entityItem, item, minMaxArray = [], minMaxArrayLen, i, d, colorManager = dataset.getFromEnv("colorManager"), entityDef = rawData.entitydef || [];
        if (!conf.attachEvent && colorManager) {
            dataset.addExtEventListener("legendUpdate", function() {
                d = arguments[1];
                if (d.component === "legend") dataset.legendInteractivity(d.legendItem, d.colorObj);
                else {
                    minMaxArray = d.maxMinArray;
                    minMaxArrayLen = minMaxArray.length;
                    for(i = 0; i < minMaxArrayLen; i++)dataset.updateEntityColors(minMaxArray[i].min, minMaxArray[i].max);
                }
            }, colorManager);
            conf.attachEvent = true;
        }
        if (rawData.data && rawData.data[0] && rawData.data[0].data) entityJSONData = dataset.JSONData = rawData.data[0].data || [];
        else entityJSONData = dataset.JSONData = rawData.data || [];
        conf.useSNameAsId = (0, _lib.pluckNumber)(mapAttrs.usesnameasid, 0);
        this._redefineEntities(entityDef);
        entities = dataset.components.data;
        conf.showTooltip = (0, _lib.pluckNumber)(mapAttrs.showtooltip, 1);
        conf.showHoverEffect = (0, _lib.pluckNumber)(mapAttrs.showhovereffect, 0);
        entityJSONData = convertArrayToIdMap(entityJSONData);
        dataset.calculateDataLimits();
        !rawData.colorrange && dataset._detachChild(dataset.getChildren("colorRange") && dataset.getChildren("colorRange")[0]);
        for(item in entities){
            dataItem = entityJSONData[item];
            entityItem = entities[item];
            if (dataItem) this._configureEntity(item, entityItem, (0, _lib.imprint)(Entities._sanitizeEntityOptions((0, _lib.extend2)({}, dataItem)), entityItem.config));
            else this._configureEntity(item, entityItem, entityItem.config);
        }
    };
    _proto.updateEntityColors = function updateEntityColors(minValue, maxValue) {
        var dataset = this, entities = dataset.components.data, chart = dataset.getFromEnv("chart"), _chart$config$entityO = chart.config.entityOpts, nullEntityAlpha = _chart$config$entityO.nullEntityAlpha, nullEntityColor = _chart$config$entityO.nullEntityColor, entityObj, config, value, name, alphaArr, visibleEntityAttr, nullAttr = colorize({
            fill: nullEntityColor,
            alpha: nullEntityAlpha
        }), hiddenAttr = {
            "fill-opacity": 0
        };
        for(name in entities)if (entities.hasOwnProperty(name)) {
            entityObj = entities[name];
            config = entityObj.config;
            value = config.cleanValue;
            alphaArr = config.alphaArr || [];
            visibleEntityAttr = {
                "fill-opacity": alphaArr[0] / 100 || 1
            };
            if (value == null) {
                setCustomAttrs(entityObj, nullAttr);
                entityObj.hidden = false;
            } else if (value < minValue || value > maxValue) {
                setCustomAttrs(entityObj, hiddenAttr);
                entityObj.hidden = true;
            } else {
                setCustomAttrs(entityObj, visibleEntityAttr);
                entityObj.hidden = false;
            }
        }
    };
    _proto.legendInteractivity = function legendInteractivity(legendItem, entityColorObj) {
        var dataset = this, chart = dataset.getFromEnv("chart"), entities = dataset.components.data, i, entity, config = legendItem.config, visible = legendItem.hasState("hidden"), cleanValue, colorRange = dataset.getFromEnv("colorManager"), entityAttrs, visibleEntityAttr = {}, applyAttr, hiddenAttr = {
            "fill-opacity": 0
        }, colorObj;
        chart.getFromEnv("animationManager").setAnimationState("legendInteraction");
        for(i in entities)if (entities.hasOwnProperty(i)) {
            entity = entities[i];
            config = entity.config;
            cleanValue = config.cleanValue;
            colorObj = colorRange.getColorObj(cleanValue);
            entityAttrs = config.visibleEntityAttr;
            visibleEntityAttr["fill-opacity"] = entityAttrs["fill-opacity"];
            applyAttr = !visible ? hiddenAttr : visibleEntityAttr;
            if (entityColorObj.code === (!colorObj.outOfRange && colorObj.code)) {
                entity.hidden = !visible;
                setCustomAttrs(entity, applyAttr);
                if (!visible) legendItem.setLegendState("hidden");
                else legendItem && legendItem.removeLegendState("hidden");
            }
        }
    };
    _proto.calculateDataLimits = function calculateDataLimits() {
        var dataset = this, chart = dataset.getFromEnv("chart"), conf = dataset.config, jsonData = chart.jsonData, dataArr = jsonData.data || [], numberFormatter = this.getFromEnv("number-formatter"), cleanValue, value, minValue = Infinity, maxValue = -Infinity, len, i;
        for(i = 0, len = dataArr.length; i < len; i++){
            value = dataArr[i].value;
            cleanValue = numberFormatter.getCleanValue(value);
            minValue = mathMin(minValue, cleanValue);
            maxValue = mathMax(maxValue, cleanValue);
        }
        conf.max = maxValue;
        conf.min = minValue;
    };
    _proto._configureEntity = function _configureEntity(id, entityItem, entityJSON) {
        var dataset = this, chart = dataset.getFromEnv("chart"), conf = dataset.config, numberFormatter = this.getFromEnv("number-formatter"), chartConf = chart.config, entityOpts = chartConf.entityOpts, entityConf = entityItem.config, labelConfig = entityItem.labelConfig, value = entityJSON.value, cleanValue = entityConf.cleanValue = numberFormatter.getCleanValue(value), formattedValue = entityConf.formattedValue = cleanValue !== UNDEF ? numberFormatter.dataLabels(cleanValue) : UNDEF, showTooltip = (0, _lib.pluckNumber)(entityJSON.showtooltip, entityOpts.showTooltip), defaultTooltip = this._getDefaultTooltip(entityItem, entityJSON, dataset), tooltextMacroObj = {
            formattedValue: formattedValue,
            sName: entityJSON.shortLabel,
            lName: entityJSON.label
        }, styleObj = entityOpts.dataLabels.style, toolText = entityConf.toolText = showTooltip ? (0, _lib.parseUnsafeString)((0, _lib.pluck)((0, _lib.parseTooltext)((0, _lib.pluck)(entityJSON.tooltext, entityOpts.tooltext, defaultTooltip), [
            1,
            2,
            7,
            38,
            39
        ], tooltextMacroObj, entityJSON)), false) : BLANK, borderColor = entityConf.borderColor = (0, _lib.pluck)(entityJSON.bordercolor, entityOpts.borderColor), borderAlpha = entityConf.borderAlpha = (0, _lib.pluck)(entityJSON.borderalpha, entityOpts.borderAlpha), borderThickness = entityConf.borderThickness = (0, _lib.pluckNumber)(entityJSON.borderthickness, entityOpts.borderThickness), hoverOnNull = entityOpts.hoverOnNull, useHoverColor = entityConf.useHoverColor = (0, _lib.pluckNumber)(entityJSON.showhovereffect, entityJSON.usehovercolor, hoverOnNull ? entityOpts.showHoverEffect : isNaN(value) ? 0 : entityOpts.showHoverEffect), labelAlignment = entityConf.labelAlignment, colorManager = dataset.getFromEnv("colorManager"), colorObj, link, align, valign, color, alpha, angle, ratio, fillColor, fontColor, fontFamily, fontBold, emptyColorObject, fillColorObject, hoverColor, bgColor, bgAlpha, labels, labelObj, oriLabels, i, alphaArr;
        entityItem.hidden = false;
        entityConf.showLabel = (0, _lib.pluckNumber)(entityJSON.showlabel, entityOpts.showLabels);
        entityConf.labelPadding = (0, _lib.pluckNumber)(entityJSON.labelpadding, entityOpts.labelPadding);
        entityConf.fontFamily = (0, _lib.pluck)(entityJSON.font, styleObj.fontFamily);
        entityConf.fontSize = (0, _lib.pluckNumber)(parseInt(entityJSON.fontsize, 10), parseInt(styleObj.fontSize, 10));
        entityConf.fontBold = (0, _lib.pluckNumber)(entityJSON.fontbold, 0);
        entityConf.fontColor = (0, _lib.pluck)(entityJSON.labelcolor, entityJSON.fontcolor, styleObj.color);
        entityConf.labelBgColor = (0, _lib.pluck)(entityJSON.labelbgcolor, styleObj.bgColor) || BLANK;
        entityConf.labelBorderColor = (0, _lib.pluck)(entityJSON.labelbordercolor, styleObj.borderColor) || BLANK;
        entityConf.connectorColor = (0, _lib.pluck)(entityJSON.labelconnectorcolor, entityOpts.connectorColor);
        entityConf.connectorAlpha = (0, _lib.pluck)(entityJSON.labelconnectoralpha, entityOpts.connectorAlpha);
        entityConf.hoverBorderThickness = (0, _lib.pluckNumber)(entityJSON.borderhoverthickness, entityJSON.hoverborderthickness, entityOpts.hoverBorderThickness);
        entityConf.hoverBorderColor = (0, _lib.pluck)(entityJSON.borderhovercolor, entityJSON.hoverbordercolor, entityOpts.hoverBorderColor, entityConf.borderColor);
        entityConf.hoverBorderAlpha = (0, _lib.pluck)(entityJSON.borderhoveralpha, entityJSON.hoverborderalpha, entityOpts.hoverBorderAlpha, entityConf.borderAlpha);
        entityConf.connectorThickness = (0, _lib.pluckNumber)(entityJSON.labelconnectorthickness, entityOpts.connectorThickness);
        entityConf.origConnectorThickness = entityConf.connectorThickness;
        entityConf.borderThickness = borderThickness;
        entityConf.link = entityJSON.link;
        entityConf.isVisible = true;
        entityConf.id = id;
        entityConf.originalId = entityJSON.origId;
        if (cleanValue !== null) {
            colorObj = colorManager && colorManager.getColor(cleanValue);
            if (colorObj && !colorObj.outOfRange) {
                bgColor = colorObj.code;
                if (colorObj.oriAlpha !== UNDEF) bgAlpha = colorObj.oriAlpha + "";
            }
        }
        if ((0, _lib.pluck)(entityJSON.color, entityJSON.alpha, entityJSON.angle, entityJSON.ratio) !== UNDEF) {
            color = (0, _lib.pluck)(entityJSON.color, bgColor, entityOpts.fillColor);
            alpha = (0, _lib.pluck)(entityJSON.alpha, bgAlpha, entityOpts.fillAlpha);
            angle = (0, _lib.pluck)(entityJSON.angle, entityOpts.fillAngle);
            ratio = (0, _lib.pluck)(entityJSON.ratio, entityOpts.fillRatio);
            fillColor = colorize({
                color: color,
                alpha: alpha,
                angle: angle,
                ratio: ratio
            });
        } else {
            fillColorObject = colorize({
                color: (0, _lib.pluck)(bgColor, entityOpts.fillColor),
                alpha: (0, _lib.pluck)(bgAlpha, entityOpts.fillAlpha),
                angle: (0, _lib.pluck)(entityOpts.fillAngle),
                ratio: (0, _lib.pluck)(entityOpts.fillRatio)
            });
            emptyColorObject = colorize({
                color: (0, _lib.pluck)(entityOpts.nullEntityColor),
                alpha: (0, _lib.pluck)(entityOpts.nullEntityAlpha),
                angle: (0, _lib.pluck)(entityOpts.nullEntityAngle),
                ratio: (0, _lib.pluck)(entityOpts.nullEntityRatio)
            });
            fillColor = cleanValue === null ? emptyColorObject : fillColorObject;
            color = fillColor.FCcolor.color;
            alpha = fillColor.FCcolor.alpha;
            angle = fillColor.FCcolor.angle;
            ratio = fillColor.FCcolor.ratio;
        }
        if (toolText === BLANK) conf.showTooltip = 0;
        entityConf.visibleEntityAttr = {
            stroke: (0, _lib.convertColor)(borderColor, borderAlpha),
            fill: (entityConf.fillColor = fillColor).toString(),
            "fill-opacity": alpha / 100
        };
        alphaArr = alpha.split(COMMA);
        entityConf.alphaArr = alphaArr;
        if (useHoverColor) {
            if ((0, _lib.pluck)(entityJSON.fillhovercolor, entityJSON.fillhoveralpha, entityJSON.fillhoverangle, entityJSON.fillhoverratio, entityJSON.hoverfillcolor, entityJSON.hoverfillalpha, entityJSON.hoverfillratio, entityJSON.hoverfillangle) !== UNDEF) {
                color = (0, _lib.pluck)(entityJSON.fillhovercolor, entityJSON.hoverfillcolor, entityOpts.hoverFillColor);
                alpha = (0, _lib.pluck)(entityJSON.fillhoveralpha, entityJSON.hoverfillalpha, entityOpts.hoverFillAlpha);
                angle = (0, _lib.pluck)(entityJSON.fillhoverangle, entityJSON.hoverfillangle, entityOpts.hoverFillAngle);
                ratio = (0, _lib.pluck)(entityJSON.fillhoverratio, entityJSON.hoverfillratio, entityOpts.hoverFillRatio);
                hoverColor = colorize({
                    color: color,
                    alpha: alpha,
                    angle: angle,
                    ratio: ratio
                });
            } else {
                if (!entityOpts.hoverColorObject) entityOpts.hoverColorObject = colorize({
                    color: entityOpts.hoverFillColor,
                    alpha: entityOpts.hoverFillAlpha,
                    angle: entityOpts.hoverFillAngle,
                    ratio: entityOpts.hoverFillRatio
                });
                hoverColor = entityOpts.hoverColorObject;
            }
            entityConf.hoverColor = hoverColor;
        }
        !labelConfig && (labelConfig = entityItem.labelConfig = {});
        fontColor = entityConf.fontColor;
        fontFamily = entityConf.fontFamily;
        fontBold = entityConf.fontBold;
        toolText = entityConf.toolText;
        link = entityConf.link;
        if (labelAlignment) {
            align = labelAlignment[0];
            valign = labelAlignment[1];
        } else {
            align = POSITION_CENTER;
            valign = POSITION_MIDDLE;
        }
        labelConfig.align = align;
        labelConfig.vAlign = valign;
        labelConfig.fontColor = fontColor;
        labelConfig.bgColor = entityConf.labelBgColor;
        labelConfig.borderColor = entityConf.labelBorderColor;
        labelConfig.fontFamily = fontFamily;
        labelConfig.fontBold = fontBold;
        labelConfig.toolText = toolText;
        labelConfig.link = link;
        if (typeof entityConf.options === "object") {
            labels = entityConf.entityLabels = entityConf.entityLabels || [];
            oriLabels = entityConf.labels || [];
            i = oriLabels.length;
            while(i--){
                if (!labels[i]) labels[i] = {
                    config: {}
                };
                labelConfig = labels[i].config;
                labelAlignment = oriLabels[i].labelAlignment;
                if (labelAlignment) {
                    align = labelAlignment[0];
                    valign = labelAlignment[1];
                } else {
                    align = POSITION_CENTER;
                    valign = POSITION_MIDDLE;
                }
                labelConfig.align = align;
                labelConfig.vAlign = valign;
                labelConfig.displayValue = dataset.getDisplayValue(entityItem, oriLabels[i], entityConf.options.isDataEnabled, !i, entityJSON);
                labelConfig.toolText = toolText;
                labelConfig.align = align;
                labelConfig.vAlign = valign;
                labelConfig.bgColor = entityConf.labelBgColor;
                labelConfig.borderColor = entityConf.labelBorderColor;
                labelConfig.fontColor = fontColor;
                labelConfig.fontFamily = fontFamily;
                labelConfig.fontBold = fontBold;
                labelConfig.toolText = toolText;
            }
        } else {
            labelObj = {
                shortText: entityConf.shortLabel,
                text: entityConf.label
            };
            labelConfig.displayValue = dataset.getDisplayValue(entityItem, labelObj, true, true, entityJSON);
        }
    };
    _proto.getDisplayValue = function getDisplayValue(entity, labelObj, userValue, userDV, entityJSON) {
        var chart = this.getFromEnv("chart"), entityOpts = chart.config.entityOpts, entityConf = entity.config, cleanValue = entityConf.cleanValue, formattedValue = entityConf.formattedValue, labelSepChar = entityOpts.labelSepChar, displayValue;
        if (userValue) {
            if (userDV && typeof entityJSON.displayvalue !== "undefined") displayValue = entityJSON.displayvalue;
            else {
                displayValue = (0, _lib.pluck)(entityOpts.includeNameInLabels ? entityOpts.useShortName ? labelObj.shortText : labelObj.text : "");
                if (entityOpts.includeValueInLabels && cleanValue !== null) displayValue = displayValue === UNDEF ? formattedValue : displayValue + labelSepChar + formattedValue;
            }
        } else displayValue = entityConf.label;
        return displayValue;
    };
    Entities._sanitizeEntityOptions = function _sanitizeEntityOptions(options) {
        delete options.outlines;
        delete options.label;
        delete options.shortlabel;
        delete options.labelposition;
        delete options.labelalignment;
        delete options.labelconnectors;
        return options;
    };
    _proto._redefineEntities = function _redefineEntities(entityDef) {
        var dataset = this, conf = dataset.config, chart = dataset.getFromEnv("chart"), redefinedEntities = {}, processedIds = {}, entities = chart.config.entities, useSNameAsId = conf.useSNameAsId, i, defObj, oldId, newId, sName, lName, id, newObj, entityCount = 0, entityStore, entityDataStore, item, entityObj;
        i = entityDef.length;
        while(i--){
            defObj = entityDef[i];
            oldId = defObj.internalid;
            newId = defObj.newid ? defObj.newid : oldId;
            sName = defObj.sname;
            lName = defObj.lname;
            entityObj = entities[oldId];
            oldId = (0, _lib.trimString)(oldId);
            newId = (0, _lib.trimString)(newId);
            newId = newId && newId.toLowerCase();
            if (entityObj) {
                redefinedEntities[newId] = newObj = {
                    origId: oldId
                };
                processedIds[oldId] = true;
                for(item in entityObj)newObj[item] = entityObj[item];
                newObj.shortLabel = sName || entityObj.shortLabel;
                newObj.label = lName || entityObj.label;
                newObj.showhovereffect = defObj.showhovereffect;
                newObj.fillhovercolor = defObj.fillhovercolor;
                newObj.fillhoveralpha = defObj.fillhoveralpha;
                newObj.fillhoverangle = defObj.fillhoverangle;
                newObj.fillhoverratio = defObj.fillhoverratio;
                newObj.borderhoverthickness = defObj.borderhoverthickness;
            }
        }
        entityDataStore = dataset.components.data;
        if (!entityDataStore) entityDataStore = dataset.components.data = {};
        for(id in redefinedEntities){
            id = id.toLowerCase();
            if (!entityDataStore[id]) entityDataStore[id] = {
                config: {}
            };
            entityDataStore[id].config = redefinedEntities[id];
            entityCount += 1;
        }
        entityStore = entityDataStore;
        for(id in entities){
            newObj = entities[id];
            id = (0, _lib.trimString)(id);
            if (!processedIds[id]) {
                if (useSNameAsId) {
                    entityObj = entityStore[newObj.shortLabel.toLowerCase()];
                    if (!entityObj) entityObj = entityStore[newObj.shortLabel.toLowerCase()] = {};
                    entityObj.config = {};
                    entityObj.origId = newObj.shortLabel;
                } else {
                    entityObj = entityStore[id.toLowerCase()];
                    if (!entityObj) entityObj = entityStore[id.toLowerCase()] = {};
                    entityObj.config = {};
                    entityObj.config.origId = id;
                }
                for(item in newObj)entityObj.config[item] = newObj[item];
                entityCount += 1;
            }
        }
        conf.entityCount = entityCount;
    };
    _proto.draw = function draw() {
        var dataset = this, conf = dataset.config, chart = dataset.getFromEnv("chart"), BATCH_SIZE = _lib.hasSVG ? 200 : 10, doBatchRendering;
        dataset.createContainer();
        this.config.ready = false;
        conf.BATCH_SIZE = BATCH_SIZE;
        conf.labelBatchSize = _lib.hasSVG ? 200 : 20;
        doBatchRendering = this._batchRender();
        doBatchRendering(0);
        chart.config.entityFlag = true;
        chart.checkComplete();
    };
    _proto._batchRender = function _batchRender() {
        var dataset = this, conf = dataset.config, chart = dataset.getFromEnv("chart"), firstEntity = chart.config.entities.firstEntity, entities = dataset.components.data, batchSize = conf.BATCH_SIZE, keys = conf.entityKeys = firstEntity ? dataset._getKeys(firstEntity, entities) : Object.keys(entities), keysLength = conf.entityLength = keys.length, i, entityObj, count, ent, outlinesDrawn, drawEntities = function drawEntities(entityStartIndex) {
            i = entityStartIndex;
            count = 0;
            while(keys[i] !== UNDEF){
                entityObj = entities[keys[i]];
                outlinesDrawn = dataset.drawEntity(entityObj, batchSize);
                count += outlinesDrawn;
                if (entityObj.config.drawn) {
                    ent = i === keysLength - 1 ? entityObj : entities[keys[i - 1]];
                    if (ent) {
                        ent.config.drawn = false;
                        ent.config.outlineStartIndex = UNDEF;
                    }
                    i++;
                }
                if (count >= batchSize) {
                    dataset.addJob("entityDraw", drawEntities.bind(dataset, i), _schedular.priorityList.entitydraw);
                    break;
                }
            }
            if (i === keysLength) {
                dataset._addEventListenersToEntities(0);
                dataset.initComplete();
            }
        };
        return drawEntities;
    };
    _proto._addEventListenersToEntities = function _addEventListenersToEntities(startIndex) {
        var dataset = this, entities = dataset.components.data, conf = dataset.config, batchSize = conf.BATCH_SIZE, keys = conf.entityKeys, i, len = conf.entityLength, entity, count = 0, options, entityConf;
        for(i = startIndex; i < len; i++){
            entity = entities[keys[i]];
            entityConf = entity.config;
            options = entityConf.options;
            if (!(options && options.isDataEnabled === false)) dataset.addMouseGestures(entity);
            count++;
            if (count === batchSize) {
                dataset.addJob("_addEventListenersToEntities", dataset._addEventListenersToEntities.bind(this, i), _schedular.priorityList.entitydraw);
                break;
            }
        }
    };
    Entities._getKeys = function _getKeys(firstEntity, entities) {
        var keys = [
            firstEntity
        ], item = firstEntity;
        while(entities[item]){
            item = entities[item].nextId;
            keys.push(item);
        }
        return keys;
    };
    _proto._getDefaultTooltip = function _getDefaultTooltip(entity, entityJSON) {
        var dataset = this, value = entity.config.cleanValue, formattedValue = entity.config.formattedValue, entityOpts = dataset.getFromEnv("chart").config.entityOpts, tooltip, labelObj;
        if (typeof entity.config.options === "object") {
            labelObj = entityJSON.labels && entityJSON.labels[0];
            if (!labelObj) return UNDEF;
            tooltip = (entityOpts.useSNameInTooltip ? labelObj.shortText : labelObj.text) + (value === null ? BLANK : entityOpts.tooltipSepChar + formattedValue);
        } else tooltip = (entityOpts.useSNameInTooltip ? entityJSON.shortLabel : entityJSON.label) + (value === null ? BLANK : entityOpts.tooltipSepChar + formattedValue);
        return tooltip;
    };
    _proto.drawEntity = function drawEntity(entity, outlinesDrawCount) {
        var dataset = this, chart = dataset.getFromEnv("chart"), animationManager = chart.getFromEnv("animationManager"), entityConf = entity.config, pathStr = _lib.hasSVG || !isIE ? "litepath" : "path", entityOpts = chart.config.entityOpts, outlines = entityConf.outlines, toolTipController = dataset.getFromEnv("toolTipController"), addTo = this.getLinkedParent().getChildContainer("plot"), shadowGroup = this.getLinkedParent().getChildContainer("plotShadow"), toolText = entityConf.toolText, showShadow = entityOpts.shadow, i, outlinePath = [], path, visibleEntityAttr, applyAttr, outlineGraphics, outline, count, customStrokeWidthModifier, finalAttr = {}, shadowOptions;
        dataset._configureEntityDrawingParams(entity);
        entityConf = entity.config;
        visibleEntityAttr = entityConf.visibleEntityAttr;
        shadowOptions = entityConf.shadowOptions;
        i = entityConf.outlineStartIndex === UNDEF ? outlines.length : entityConf.outlineStartIndex;
        if (!entity.graphics) entity.graphics = {};
        count = 0;
        outlinePath = entityConf.outlinePath || (entityConf.outlinePath = []);
        customStrokeWidthModifier = entityConf.customStrokeWidthModifier;
        if (typeof entityConf.options === "object") {
            while(i--){
                outlinePath = outlines[i].outline;
                if (entityConf.options.isDataEnabled === true) applyAttr = visibleEntityAttr;
                else applyAttr = (0, _lib.extend2)((0, _lib.extend2)({}, visibleEntityAttr), pruneStrokeAttrs(outlines[i].style, customStrokeWidthModifier));
                outlineGraphics = entity.graphics.outlines;
                if (!outlineGraphics) outlineGraphics = entity.graphics.outlines = [];
                !outlineGraphics[i] && (outlineGraphics[i] = {});
                outline = outlineGraphics[i].outline;
                applyAttr[pathStr] = outlinePath;
                outline = outlineGraphics[i].outline = animationManager.setAnimation({
                    el: pathStr,
                    container: addTo,
                    attr: applyAttr,
                    component: dataset,
                    label: "path"
                });
                outline.shadow(showShadow ? shadowOptions : false, shadowGroup);
                toolTipController.enableToolTip(outline, toolText);
                count++;
                entityConf.outlineStartIndex = i;
                if (count === outlinesDrawCount) return count;
            }
            entityConf.drawn = true;
            return count;
        }
        while(i--){
            path = outlines[i];
            outlinePath = path.concat(outlinePath);
            count++;
            entityConf.outlineStartIndex = i;
            if (count === outlinesDrawCount) {
                entityConf.outlinePath = outlinePath;
                return count;
            }
        }
        !entity.graphics.outlines && (visibleEntityAttr[pathStr] = outlinePath);
        Object.assign(finalAttr, visibleEntityAttr, entity.hidden && {
            "fill-opacity": 0
        } || {});
        entity.graphics.outlines = animationManager.setAnimation({
            el: entity.graphics.outlines || pathStr,
            container: addTo,
            attr: finalAttr,
            component: dataset,
            label: "path"
        });
        entityConf.drawn = true;
        entityConf.outlineStartIndex = 0;
        entityConf.outlinePath = [];
        entity.graphics.outlines.shadow(showShadow ? shadowOptions : false, shadowGroup);
        toolTipController.enableToolTip(entity.graphics.outlines, toolText);
        return count;
    };
    _proto._configureEntityDrawingParams = function _configureEntityDrawingParams(entity) {
        var dataset = this, chart = dataset.getFromEnv("chart"), entityConf = entity.config, entityOpts = chart.config.entityOpts, scalingParams = chart.config.scalingParams, scaleStrokes = !isIE || _lib.hasSVG, scaleFactor = scalingParams.scaleFactor, scaledPixel = scalingParams.strokeWidth, scaledPixelWithBaseFactor = (scaleStrokes ? chart.baseScaleFactor : 1) * scaledPixel, scaleBorder = entityOpts.scaleBorder === 1, borderThickness = entityConf.borderThickness, alphaArr = entityConf.alphaArr, connectorThickness = entityConf.origConnectorThickness, hoverBorderThickness = entityConf.hoverBorderThickness, visibleEntityAttr = entityConf.visibleEntityAttr, fillOpacity = visibleEntityAttr["fill-opacity"], customStrokeWidthModifier;
        entityConf.shadowOptions = {
            scalefactor: [
                scaleFactor,
                scaleFactor * chart.config.baseScaleFactor
            ],
            opacity: mathMax.apply(math, alphaArr) / 100,
            useFilter: 0
        };
        entityConf.fillOpacity = entity.hidden ? 0 : fillOpacity;
        if (scaleStrokes) {
            borderThickness = entityConf.entityBorderThickness = scaleBorder ? borderThickness * scaledPixelWithBaseFactor : borderThickness / scaleFactor;
            connectorThickness = connectorThickness / scaleFactor;
            customStrokeWidthModifier = scaleBorder ? scaleFactor : scalingParams.sFactor;
            if (hoverBorderThickness) hoverBorderThickness = entityConf.hoverBorderThickness = scaleBorder ? hoverBorderThickness * scaledPixelWithBaseFactor : hoverBorderThickness / scaleFactor;
        } else {
            borderThickness = scaleBorder ? borderThickness * scaledPixel : borderThickness;
            customStrokeWidthModifier = scaleBorder ? scalingParams.scaleFactor : chart.baseScaleFactor;
        }
        entityConf.entityBorderThickness = borderThickness;
        entityConf.connectorThickness = connectorThickness;
        entityConf.customStrokeWidthModifier = customStrokeWidthModifier;
        visibleEntityAttr["stroke-width"] = borderThickness;
        visibleEntityAttr.transform = _lib.hasSVG || !isIE ? "" : scalingParams.transformStr;
    };
    _proto.drawLabels = function drawLabels(ent) {
        var dataset = this, itemMap = ent, chart = dataset.getFromEnv("chart"), conf = dataset.config, batchSize = conf.labelBatchSize, keysLength = conf.entityLength, labelItems = [], i, j, annGroupElem = chart.getChildContainer("upperAnnotationGroup"), groupItems, annObj, annCount = 0, mapLabelAnnotations = dataset.getChildren("mapLabelAnnotations") && dataset.getChildren("mapLabelAnnotations")[annCount], count = 0, labelItemsAdded = 0, annConfig = chart.config.annotationConfig;
        if (!mapLabelAnnotations) {
            annObj = new _extAnnotation.default;
            dataset.attachChild(annObj, "mapLabelAnnotations");
            mapLabelAnnotations = dataset.getChildren("mapLabelAnnotations")[annCount];
            mapLabelAnnotations.addCustomGroup(annGroupElem);
        }
        mapLabelAnnotations.destroy();
        mapLabelAnnotations._renderer && (mapLabelAnnotations._renderer = null);
        annConfig.showbelow = 0;
        for(i in itemMap){
            dataset.drawLabel(itemMap[i], labelItems);
            count++;
            if (count === batchSize) {
                for(j = 0; j < labelItems.length; j++)labelItems[j].animationLabel = ENTITYLABEL;
                groupItems = mapLabelAnnotations.addGroup(Object.assign(annConfig, {
                    id: "entityLabels" + annCount,
                    items: labelItems,
                    animationLabel: "entityLabelGroup"
                }), dataset);
                for(j = 0; j < groupItems.items.length; j++){
                    groupItems.items[j].addEventListener("fc-mouseover", labelItems[j].onmouseover);
                    groupItems.items[j].addEventListener("fc-mouseout", labelItems[j].onmouseout);
                    groupItems.items[j].addEventListener("fc-click", labelItems[j].onclick);
                }
                annCount++;
                mapLabelAnnotations = dataset.getChildren("mapLabelAnnotations") && dataset.getChildren("mapLabelAnnotations")[annCount];
                if (!mapLabelAnnotations) {
                    annObj = new _extAnnotation.default;
                    dataset.attachChild(annObj, "mapLabelAnnotations");
                    mapLabelAnnotations = dataset.getChildren("mapLabelAnnotations")[annCount];
                    mapLabelAnnotations.addCustomGroup(annGroupElem);
                }
                mapLabelAnnotations.destroy();
                mapLabelAnnotations._renderer && (mapLabelAnnotations._renderer = null);
                count = 0;
                labelItems = [];
            } else if (labelItemsAdded === keysLength - 1) {
                for(j = 0; j < labelItems.length; j++)labelItems[j].animationLabel = ENTITYLABEL;
                groupItems = mapLabelAnnotations.addGroup(Object.assign(annConfig, {
                    id: "entityLabels" + annCount,
                    items: labelItems,
                    animationLabel: "entityLabelGroup"
                }), dataset);
                for(j = 0; j < groupItems.items.length; j++){
                    groupItems.items[j].addEventListener("fc-mouseover", labelItems[j].onmouseover);
                    groupItems.items[j].addEventListener("fc-mouseout", labelItems[j].onmouseout);
                    groupItems.items[j].addEventListener("fc-click", labelItems[j].onclick);
                }
            }
            labelItemsAdded++;
        }
        dataset.drawLabelConnFn(0);
    };
    _proto.drawLabelConnFn = function drawLabelConnFn(startIndex) {
        var dataset = this, conf = dataset.config, entities = dataset.components.data, batchSize = conf.BATCH_SIZE, keys = conf.entityKeys, l, i, length = keys.length, labelArr, config, entity, count = 0;
        for(i = startIndex; i < length; i++){
            entity = entities[keys[i]];
            config = entity.config;
            if (typeof config.options === "object") {
                labelArr = config.labels;
                l = labelArr && labelArr.length || 0;
                while(l--)if (labelArr[l].labelConnectors) {
                    dataset.drawLabelConnectors(entity, labelArr[l].labelConnectors, dataset);
                    count++;
                }
            } else if (config.labelConnectors) {
                dataset.drawLabelConnectors(entity, config.labelConnectors, dataset);
                count++;
            }
            if (count === batchSize) {
                dataset.addJob("drawLabelConnectors", dataset.drawLabelConnFn.bind(this, i), _schedular.priorityList.entitydraw);
                break;
            }
        }
    };
    _proto._getLabelObject = function _getLabelObject(entity, index, userValue) {
        var dataset = this, chart = dataset.getFromEnv("chart"), chartAttrs = dataset.getFromEnv("chart-attrib"), entityConf = entity.config, labelConfig, scalingParams = chart.config.scalingParams, labelPos, labelAlignment, firstEle = entity.graphics && entity.graphics.outlines, fontStyleObj, fontSize = entityConf.fontSize, labelPadding = entityConf.labelPadding, labelsArr = entityConf.labels || [], entityLabels = entityConf.entityLabels || [], baseWidth, baseHeight, labelX, labelY, box, align, valign, fsize, xOffset, yOffset, oriLabelObj, labelObj;
        if (index !== UNDEF) {
            oriLabelObj = labelsArr[index];
            labelObj = entityLabels[index];
            labelConfig = labelObj.config;
            fontStyleObj = labelConfig.style = oriLabelObj.style;
            labelPos = oriLabelObj.labelPosition;
            labelAlignment = oriLabelObj.labelAlignment;
        } else {
            labelConfig = entity.labelConfig;
            labelPos = entityConf.labelPosition;
            labelAlignment = entityConf.labelAlignment;
        }
        if (labelPos) {
            labelX = labelPos[0];
            labelY = labelPos[1];
        } else {
            box = firstEle.getBBox();
            labelX = box.x + box.width / 2;
            labelY = box.y + box.height / 2;
        }
        if (labelAlignment) {
            align = labelAlignment[0];
            valign = labelAlignment[1];
            if (align === POSITION_RIGHT) labelX -= labelPadding;
            else if (align === POSITION_LEFT) labelX += labelPadding;
            if (valign === POSITION_TOP) labelY -= labelPadding;
            else if (valign === POSITION_BOTTOM) labelY += labelPadding;
        } else {
            align = POSITION_CENTER;
            valign = POSITION_MIDDLE;
        }
        fsize = parseFloat(fontSize) / scalingParams.sFactor;
        if (!userValue && fontStyleObj) {
            fontStyleObj.color && (labelConfig.fontColor = fontStyleObj.color);
            fontStyleObj["font-size"] && (fsize = parseFloat(fontStyleObj["font-size"]) / scalingParams.sFactor);
            fontStyleObj["font-family"] && (labelConfig.fontFamily = fontStyleObj["font-family"]);
            fontStyleObj["font-weight"] !== UNDEF && (labelConfig.fontBold = fontStyleObj["font-weight"] === "bold");
        }
        labelConfig.x = labelX.toString();
        labelConfig.y = labelY.toString();
        labelConfig.wrap = 1;
        labelConfig.type = TEXT_STR;
        labelConfig.fontSize = fsize;
        return {
            x: labelX.toString(),
            y: labelY.toString(),
            wrapwidth: getTextWrapWidth[align](baseWidth, labelX + xOffset) - labelPadding,
            wrapheight: getTextWrapHeight[valign](baseHeight, labelY + yOffset) - labelPadding,
            wrap: 1,
            type: "text",
            align: labelConfig.align,
            valign: labelConfig.vAlign,
            text: labelConfig.displayValue,
            tooltext: labelConfig.toolText,
            outlineText: (0, _lib.pluckNumber)(chartAttrs.textoutline, 0),
            css: labelConfig.link !== UNDEF && {
                cursor: "pointer",
                _cursor: "hand"
            },
            bgcolor: labelConfig.bgColor,
            bordercolor: labelConfig.borderColor,
            fillcolor: labelConfig.fontColor,
            fontsize: labelConfig.fontSize,
            font: labelConfig.fontFamily,
            bold: labelConfig.fontBold,
            onclick: function onclick(e) {
                var hoverEnt = entity.graphics.outlines, i, len;
                if (hoverEnt instanceof Array) for(i = 0, len = hoverEnt.length; i < len; i++)dataset.entityClick(hoverEnt[i].outline, e);
                else dataset.entityClick(hoverEnt, e);
            },
            onmouseover: function onmouseover(e) {
                var hoverEnt = entity.graphics.outlines, i, len;
                if (hoverEnt instanceof Array) for(i = 0, len = hoverEnt.length; i < len; i++)dataset.entityRollOver(hoverEnt[i].outline, e);
                else dataset.entityRollOver(hoverEnt, e);
            },
            onmouseout: function onmouseout(e) {
                var hoverEnt = entity.graphics.outlines, i, len;
                if (hoverEnt instanceof Array) for(i = 0, len = hoverEnt.length; i < len; i++)dataset.entityRollOut(hoverEnt[i].outline, e);
                else dataset.entityRollOut(hoverEnt, e);
            },
            ontouchstart: function ontouchstart(e) {
                var hoverEnt = entity.graphics.outlines, i, len;
                if (hoverEnt instanceof Array) for(i = 0, len = hoverEnt.length; i < len; i++)dataset.entityRollOver(hoverEnt[i].outline, e);
                else dataset.entityRollOver(hoverEnt, e);
                dataset.entityRollOver(hoverEnt, e);
            }
        };
    };
    _proto.drawLabel = function drawLabel(entity, annotationsArray) {
        var dataset = this, config = entity.config, showLabel = config.showLabel, useValue, i, labelArr;
        if (!showLabel) return;
        if (typeof config.options === "object") {
            labelArr = config.labels;
            i = labelArr && labelArr.length || 0;
            useValue = config.options.isDataEnabled;
            while(i--)annotationsArray.push(dataset._getLabelObject(entity, i, useValue, !i));
        } else annotationsArray.push(dataset._getLabelObject(entity, UNDEF, true, true));
    };
    _proto.drawLabelConnectors = function drawLabelConnectors(entity, connectorArr, dataSet) {
        var entityConf = entity.config, dataset = this, chart = dataset.getFromEnv("chart"), animationManager = chart.getFromEnv("animationManager"), scalingParams = chart.config.scalingParams, datasetGroup = dataSet.getLinkedParent().getChildContainer("plot"), i = connectorArr && connectorArr.length || 0, connElem, path, showLabel = entityConf.showLabel;
        while(i--){
            path = connectorArr[i];
            connElem = entity.graphics.connectorElem;
            if (showLabel) entity.graphics.connectorElem = connElem = animationManager.setAnimation({
                el: entity.graphics.connectorElem || "path",
                attr: {
                    path: path,
                    opacity: 1,
                    transform: _lib.hasSVG || !isIE ? "" : scalingParams.transformStr,
                    stroke: (0, _lib.convertColor)(entityConf.connectorColor, entityConf.connectorAlpha),
                    "shape-rendering": CRISP,
                    "stroke-width": entityConf.connectorThickness
                },
                container: datasetGroup,
                component: dataset,
                label: "labelConnectors"
            });
            else connElem && connElem.hide();
        }
    };
    _proto.entityClick = function entityClick(entityElem, e) {
        var entity = entityElem.node.__entity, dataset = this, chart = dataset.getFromEnv("chart"), scalingParams = chart.config.scalingParams, entityBox = entityElem.getBBox(), linkClickFN = chart.getFromEnv("linkClickFN"), config = entity.config, link = config.link;
        entityBox.width = entityBox.width * scalingParams.scaleFactor;
        entityBox.height = entityBox.height * scalingParams.scaleFactor;
        entityBox.x = entityBox.x * scalingParams.scaleFactor + scalingParams.translateX;
        entityBox.y = entityBox.y * scalingParams.scaleFactor + scalingParams.translateY;
        entityBox.x2 = entityBox.x + entityBox.width;
        entityBox.y2 = entityBox.y + entityBox.height;
        chart.fireChartInstanceEvent("entityclick", config.eventArgs, e);
        if (link !== UNDEF) linkClickFN.call({
            link: link,
            entity: entity,
            entityBox: entityBox
        }, true);
    };
    _proto.entityRollOver = function entityRollOver(entityElem, e) {
        var entity = entityElem.node.__entity, dataset = this, config = entity.config, chart = dataset.getFromEnv("chart"), animationManager = chart.getFromEnv("animationManager"), hoverAttr = config.hoverAttr;
        chart.plotEventHandler(entityElem, e, "entityRollOver");
        if (entityElem.data("hovered")) clearTimeout(entity.config.timer);
        else if (config.useHoverColor && config.isVisible && !entity.hidden && hoverAttr) {
            chart.config.hoverEntity = entityElem;
            animationManager.setAnimation({
                el: entityElem,
                attr: hoverAttr,
                component: dataset,
                state: "updating",
                label: "path"
            });
            entityElem.data("hovered", true);
        }
    };
    _proto.entityRollOut = function entityRollOut(entityElem, e) {
        var entity = entityElem.node.__entity, dataset = this, hidden, chart = dataset.getFromEnv("chart"), animationManager = chart.getFromEnv("animationManager"), config = entity.config, revertAttr = config.revertAttr;
        chart.plotEventHandler(entityElem, e, "entityRollOut");
        entity.config.timer = setTimeout(function() {
            hidden = entity.hidden;
            if (hidden !== true && revertAttr) {
                animationManager.setAnimation({
                    el: entityElem,
                    attr: revertAttr,
                    component: dataset,
                    state: "updating",
                    label: "path"
                });
                entityElem.data("hovered", false);
            }
        }, 100);
    };
    _proto.addMouseGestures = function addMouseGestures(entity) {
        var config = entity.config, originalId = config.originalId, dataset = this, graphics = entity.graphics, useHoverColor = config.useHoverColor, hoverBorderThickness = config.hoverBorderThickness, hoverBorderColor = config.hoverBorderColor, hoverBorderAlpha = config.hoverBorderAlpha, borderThickness = config.entityBorderThickness, borderColor = config.borderColor, borderAlpha = config.borderAlpha, link = config.link, visibleEntityAttr = config.visibleEntityAttr, groupId = "groupId" + originalId, item, i, graphic, len, outlines, bindListener = function bindListener(graphicEle) {
            if (link !== UNDEF) graphicEle.css({
                cursor: "pointer",
                _cursor: "hand"
            });
            graphicEle.data("eventArgs", config.eventArgs);
            graphicEle.data("groupId", groupId);
            graphicEle.node.__entity = entity;
            if (!entity._listenersBinded) graphicEle.on("fc-click", dataset.entityClick.bind(dataset, graphicEle)).hover(dataset.entityRollOver.bind(dataset, graphicEle), dataset.entityRollOut.bind(dataset, graphicEle));
        };
        config.eventArgs = {
            value: config.cleanValue,
            label: config.label,
            shortLabel: config.shortLabel,
            originalId: config.origId,
            id: config.id || config.origId
        };
        config.legacyEventArgs = {
            value: config.value,
            lName: config.label,
            sName: config.shortLabel,
            id: config.originalId || config.id
        };
        if (useHoverColor) {
            config.hoverAttr = {
                fill: (0, _lib.toRaphaelColor)(config.hoverColor)
            };
            config.revertAttr = {
                fill: (0, _lib.toRaphaelColor)(config.fillColor),
                stroke: (0, _lib.toRaphaelColor)(config.borderColor, config.borderAlpha)
            };
            config.revertAttr["fill-opacity"] = visibleEntityAttr["fill-opacity"];
            if (hoverBorderThickness !== borderThickness) {
                config.hoverAttr["stroke-width"] = (0, _lib.pluckNumber)(hoverBorderThickness, borderThickness);
                config.revertAttr["stroke-width"] = borderThickness;
            }
            if (hoverBorderColor !== borderColor || hoverBorderAlpha !== borderAlpha) {
                config.hoverAttr.stroke = (0, _lib.convertColor)(hoverBorderColor, hoverBorderAlpha);
                config.revertAttr.stroke = (0, _lib.convertColor)(borderColor, borderAlpha);
            }
        }
        for(item in graphics)if (graphics.hasOwnProperty(item)) {
            if (graphics[item] instanceof Array) {
                outlines = graphics[item];
                for(i = 0, len = outlines.length; i < len; i++){
                    graphic = outlines[i].outline;
                    bindListener(graphic);
                }
                entity._listenersBinded = true;
            } else {
                graphic = graphics[item];
                bindListener(graphic);
                entity._listenersBinded = true;
            }
        }
    };
    _proto.getDataLimits = function getDataLimits() {
        var dataset = this, conf = dataset.config;
        return {
            max: conf.max,
            min: conf.min
        };
    };
    _proto.createContainer = function createContainer() {
        var dataset = this, parent = dataset.getLinkedParent(), animationManager = dataset.getFromEnv("animationManager"), pContainer = parent.getChildContainer("layer0");
        !dataset.getChildContainer("abovePlotGroup") && dataset.addChildContainer("abovePlotGroup", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "abovePlotGroup",
                opacity: 1
            },
            container: pContainer,
            component: dataset,
            label: "group"
        }));
        !dataset.getChildContainer("belowPlotGroup") && dataset.addChildContainer("belowPlotGroup", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "belowPlotGroup",
                opacity: 1
            },
            container: pContainer,
            component: dataset,
            label: "group"
        }));
    };
    _proto.initComplete = function initComplete() {
        var dataset = this, chart = dataset.getFromEnv("chart"), entities = dataset.components.data;
        this.drawLabels(entities);
        chart.config.entitiesReady = true;
        chart.checkComplete();
    };
    return Entities;
}(_componentInterface.ComponentInterface);
var _default = Entities;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/core/src/component-interface":"flMoh","@fusioncharts/features/src/annotation/ext-annotation":"f2YS0","@fusioncharts/core/src/dependency-manager":"8dbFz","../_internal/map-entities.animation":"5c5fZ","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/schedular":"jbg43","@fusioncharts/core/src/_internal/redraphael/redraphael-shapes/redraphael-shapes.litepath":"59ytX"}],"5c5fZ":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = void 0;
var PLOT_STR = "plot", FINAL_STR = "final";
var fadeEffect = [
    {
        initialAttr: function initialAttr() {
            return {
                opacity: 0
            };
        },
        finalAttr: function finalAttr() {
            return {
                opacity: 1
            };
        }
    }
], PATH_APPEARING_FN = function PATH_APPEARING_FN() {
    fadeEffect[0].slot = PLOT_STR;
    return fadeEffect;
}, PATH_UPDATING_FN = function PATH_UPDATING_FN(input) {
    return [
        {
            finalAttr: function finalAttr() {
                return input.finalAttr;
            }
        }
    ];
}, LABEL_CONNECTOR_APPEARING_FN = function LABEL_CONNECTOR_APPEARING_FN() {
    fadeEffect[0].slot = FINAL_STR;
    return fadeEffect;
}, ENTITY_LABEL_APPEARING_FN = function ENTITY_LABEL_APPEARING_FN() {
    return [
        {
            initialAttr: {
                opacity: 0
            },
            finalAttr: {
                opacity: 1
            },
            slot: "final"
        }
    ];
}, MARKER_ITEM_APPEARING_FN = function MARKER_ITEM_APPEARING_FN() {
    fadeEffect[0].slot = FINAL_STR;
    return fadeEffect;
}, MARKER_ITEM_UPDATING_FN = function MARKER_ITEM_UPDATING_FN(input) {
    return [
        {
            finalAttr: function finalAttr() {
                return input.finalAttr;
            }
        }
    ];
}, GROUP_APPEARING_FN = function GROUP_APPEARING_FN(input) {
    return [
        {
            initialAttr: function initialAttr() {
                return Object.assign({
                    opacity: 0
                }, input.attr);
            },
            finalAttr: function finalAttr() {
                return input.attr;
            },
            slot: "plot"
        }
    ];
}, GROUP_UPDATING_FN = function GROUP_UPDATING_FN(input) {
    return [
        {
            initialAttr: function initialAttr() {
                return Object.assign({
                    opacity: 0
                }, input.attr);
            },
            finalAttr: function finalAttr() {
                return input.attr;
            },
            slot: "plot"
        }
    ];
};
var _default = {
    "initial.dataset.entities": function initialDatasetEntities() {
        return {
            "path.appearing": PATH_APPEARING_FN,
            "path.updating": PATH_UPDATING_FN,
            "labelConnectors.appearing": LABEL_CONNECTOR_APPEARING_FN,
            "labelConnectors.updating": null,
            "entityLabel.appearing": ENTITY_LABEL_APPEARING_FN,
            "*": null
        };
    },
    "initial.dataset.markers": function initialDatasetMarkers() {
        return {
            markers: null,
            "markerItem.appearing": MARKER_ITEM_APPEARING_FN,
            "markerItem.updating": MARKER_ITEM_UPDATING_FN
        };
    },
    "initial.group.mapGroup": function initialGroupMapGroup() {
        return {
            "group.appearing": GROUP_APPEARING_FN,
            "group.updating": GROUP_UPDATING_FN,
            "*": null
        };
    }
};
exports.default = _default;

},{}],"59ytX":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = _default;
function _default(R) {
    var win = window, UNDEF, toFloat = win.parseFloat, ARRAY = "array", BLANK = "", COMMA = ",", SPACE = " ", NONE = "none", createNode = R._createNode, setFillAndStroke = R._setFillAndStroke, Element = R.el.constructor, LITEPATH = "litepath", CSSFLOOD = "position:absolute;left:0;top:0;width:21600px;height:21600px;", COORD21600 = "21600 21600", s2vcmd = {
        Q: "L",
        Z: "X",
        q: "l",
        z: "x",
        ",": " "
    }, p2s = /,?([achlmqrstvxz]),?/gi, p2srep, path2string = function path2string() {
        return this.join(COMMA).replace(p2s, p2srep);
    }, litepathsetter, vmlTransformHelper;
    if (R.svg) {
        p2srep = "$1";
        litepathsetter = function litepathsetter() {
            var o = this, path = R.is(arguments[0], ARRAY) ? arguments[0] : Array.prototype.slice.call(arguments);
            if (!path) path = "M0,0";
            else if (typeof path === "string") path = path.replace(p2s, p2srep);
            else path.toString = path2string;
            o.node.setAttribute("d", path.toString());
        };
        R._engine.litepath = function(path, svg, zoom, group, attributes) {
            var el = createNode("path"), p;
            (group || svg).canvas.appendChild(el);
            p = new Element(el, svg, group);
            p.type = LITEPATH;
            p.id = el.raphaelid = R._oid++;
            el.raphael = true;
            setFillAndStroke(p, attributes || {
                fill: NONE,
                stroke: "#000"
            });
            return p;
        };
        R._getPath.litepath = function(el) {
            return R.parsePathString(el.node.getAttribute("d"));
        };
    } else if (R.vml) {
        p2srep = function p2srep(cmd, $1) {
            return s2vcmd[$1] || $1;
        };
        vmlTransformHelper = function vmlTransformHelper() {
            var o = this;
            o._transform.apply(o, arguments);
            o._.bcoord && (o.node.coordsize = o._.bcoord);
            return o;
        };
        litepathsetter = function litepathsetter(_path) {
            var o = this, path = _path;
            if (!path) path = "M0,0";
            else if (typeof path === "string") path = path.replace(p2s, p2srep);
            else path.toString = path2string;
            o.node.path = path;
            return o;
        };
        R._engine.litepath = function(pathString, vml, _zoom, group, attributes) {
            var el = createNode("shape"), s = el.style, p = new Element(el, vml, group), attr = attributes || {
                fill: NONE,
                stroke: "#000"
            }, skew, zoom = _zoom;
            s.cssText = CSSFLOOD;
            zoom = toFloat(zoom);
            if (isNaN(zoom)) el.coordsize = COORD21600;
            else {
                p._.bzoom = zoom;
                s.width = "1px";
                s.height = "1px";
                el.coordsize = p._.bcoord = zoom + SPACE + zoom;
            }
            el.coordorigin = vml.coordorigin;
            p.type = LITEPATH;
            p.id = el.raphaelid = R._oid++;
            el.raphael = true;
            p._transform = p.transform;
            p.transform = vmlTransformHelper;
            R._setFillAndStroke(p, attr);
            (group || vml).canvas.appendChild(el);
            skew = createNode("skew");
            skew.on = true;
            el.appendChild(skew);
            p.skew = skew;
            return p;
        };
        R._getPath.litepath = function(el) {
            return R.parsePathString(el.node.path || BLANK);
        };
    }
    R.fn[LITEPATH] = function(_path, _zoomInput, _group) {
        var paper = this, attributes, zoom, out, path = _path, zoomInput = _zoomInput, group = _group;
        if (typeof path === "object" && path.constructor !== Element) {
            attributes = path;
            path = path.litepath;
            zoom = path.zoom;
            group = path.group;
        }
        if (zoomInput && zoomInput.constructor === Element) {
            group = zoomInput;
            zoom = UNDEF;
        } else zoom = zoomInput;
        if (path && path.constructor === Element) {
            group = path;
            path = BLANK;
        }
        out = R._engine[LITEPATH](path, this, zoom, group, attributes);
        out.ca[LITEPATH] = litepathsetter;
        path && out.attr(LITEPATH, R.is(path, ARRAY) ? [
            path
        ] : path);
        return paper.__set__ && this.__set__.push(out), paper._elementsById[out.id] = out;
    };
}

},{}],"gyieI":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _entities = _interopRequireDefault(require("../entities"));
var _kdtree = _interopRequireDefault(require("@fusioncharts/charts/src/dataset/_internal/kdtree"));
var _extAnnotation = _interopRequireDefault(require("@fusioncharts/features/src/annotation/ext-annotation"));
var _dependencyManager = require("@fusioncharts/core/src/dependency-manager");
var _mapEntities = _interopRequireDefault(require("../_internal/map-entities.animation"));
var _lib = require("@fusioncharts/core/src/lib");
var _eventApi = require("@fusioncharts/core/src/event-api");
var _schedular = require("@fusioncharts/core/src/schedular");
var UNDEF, BLANK = "", POSITION_TOP = "top", POSITION_BOTTOM = "bottom", POSITION_RIGHT = "right", POSITION_LEFT = "left", POSITION_MIDDLE = "middle", POSITION_CENTER = "center", LINE_STR = "line", TEXT_STR = "text", POLYGON_STR = "polygon", ACR_STR = "arc", CIRCLE_STR = "circle", CENTER_STR = "center", INNERRADIUSFACTOR = .6, math = window.Math, mathMin = math.min, mathMax = math.max, MARKER_ITEM_KEY = "items", hoverFn = function hoverFn(marker) {
    var dataset = this, chart = dataset.getFromEnv("chart"), annotations = dataset.getChildren("mapAnnotations")[0], shape = marker.markerShape, groupConfig = shape.groupConfig, options = shape.data("unfilteredConfig"), eventArgs = options._markerEventArgs, attrs, markerConfig = marker.config;
    if (options.hovereffect) {
        if (shape.config.type === "circle") attrs = (0, _lib.extend2)({
            fillcolor: options.hoverfillcolor,
            fillalpha: options.hoverfillalpha,
            fillangle: options.hoverfillangle,
            fillratio: options.hoverfillratio,
            gradientUnits: "objectBoundingBox",
            radialGradient: 1
        }, options._hoverattrs);
        attrs = (0, _lib.extend2)({}, options._hoverattrs);
        annotations.update(shape.getId(), attrs);
    }
    if (!eventArgs) eventArgs = options._markerEventArgs = {
        x: +options.x,
        y: +options.y,
        scaledX: options.x * groupConfig.scaleX,
        scaledY: options.y * groupConfig.scaleY,
        chartX: options.x * groupConfig.scaleX + groupConfig.grpXShift,
        chartY: options.y * groupConfig.scaleY + groupConfig.grpYShift,
        id: options.id,
        label: options.label
    };
    (0, _eventApi.raiseEventGroup)(markerConfig.options.id, "markerRollOver", eventArgs, chart.getFromEnv("chartInstance"), markerConfig, UNDEF, UNDEF, UNDEF);
}, hoverOutFn = function hoverOutFn(marker) {
    var dataset = this, chart = dataset.getFromEnv("chart"), annotations = dataset.getChildren("mapAnnotations")[0], shape = marker.markerShape, wrapper = shape.getElement(), markerConfig = marker.config, options = shape.data("unfilteredConfig"), attrs;
    if (wrapper && options.hovereffect) {
        if (shape.config.type === "circle") attrs = (0, _lib.extend2)({
            fillcolor: shape.config.rawColor,
            fillalpha: shape.config.rawAlpha,
            fillangle: shape.config.rawAngle,
            fillratio: shape.config.rawRatio,
            gradientUnits: "objectBoundingBox",
            radialGradient: shape.config.rawFillPattern === "radial"
        }, options._defaultattrs);
        attrs = (0, _lib.extend2)({}, options._defaultattrs);
        annotations.update(shape.getId(), attrs);
    }
    (0, _eventApi.raiseEventGroup)(markerConfig.id, "markerRollOut", options._markerEventArgs, chart.getFromEnv("chartInstance"), UNDEF, UNDEF, UNDEF);
}, clickFn = function clickFn(e, marker) {
    var dataset = this, markerOptions = marker.config.options, chart = dataset.getFromEnv("chart"), shape = marker.markerShape, options = shape.config, groupConfig = shape.groupConfig, linkClickFN = dataset.getFromEnv("linkClickFN"), link = shape.config.link, eventArgs = options._markerEventArgs;
    link && linkClickFN && linkClickFN.call({
        link: link
    }, true);
    if (!eventArgs) eventArgs = options._markerEventArgs = {
        x: +options.x,
        y: +options.y,
        scaledX: options.x * groupConfig.scaleX,
        scaledY: options.y * groupConfig.scaleY,
        chartX: options.x * groupConfig.scaleX + groupConfig.grpXShift,
        chartY: options.y * groupConfig.scaleY + groupConfig.grpYShift,
        id: markerOptions.id,
        label: markerOptions.label
    };
    chart.fireChartInstanceEvent("markerClick", eventArgs, e);
}, convertToObj = function convertToObj(arr, idKey) {
    var i = arr && arr.length || false, key = idKey || "id", returnObj = {}, item;
    if (!arr) return arr;
    while(i--){
        item = arr[i];
        item[key] !== UNDEF && (returnObj[item[key].toLowerCase()] = item);
    }
    return returnObj;
}, topLabelAlignmentFn = function topLabelAlignmentFn(x, y, radius) {
    return {
        x: x.toString(),
        y: (y - radius).toString(),
        align: POSITION_CENTER,
        valign: POSITION_TOP
    };
}, leftLabelAlignmentFn = function leftLabelAlignmentFn(x, y, radius) {
    return {
        x: (x - radius).toString(),
        y: y.toString(),
        align: POSITION_RIGHT,
        valign: POSITION_MIDDLE
    };
}, rightLabelAlignmentFn = function rightLabelAlignmentFn(x, y, radius) {
    return {
        x: (x + radius).toString(),
        y: y.toString(),
        align: POSITION_LEFT,
        valign: POSITION_MIDDLE
    };
}, bottomLabelAlignmentFn = function bottomLabelAlignmentFn(x, y, radius) {
    return {
        x: x.toString(),
        y: (y + radius).toString(),
        align: POSITION_CENTER,
        valign: POSITION_BOTTOM
    };
}, centerLabelAlignmentFn = function centerLabelAlignmentFn(x, y) {
    return {
        x: x.toString(),
        y: y.toString(),
        align: POSITION_CENTER,
        valign: POSITION_MIDDLE
    };
}, rightWrapWidthFn = function rightWrapWidthFn() {
    return arguments[1];
}, leftWrapWidthFn = function leftWrapWidthFn(width, x) {
    return width - x;
}, centerWrapWidthFn = function centerWrapWidthFn(width, x) {
    return mathMin(x, width - x) * 2;
}, topWrapHeightFn = function topWrapHeightFn() {
    return arguments[1];
}, middleWrapHeightFn = function middleWrapHeightFn(height, y) {
    return mathMin(y, height - y) * 2;
}, bottomWrapHeightFn = function bottomWrapHeightFn(height, y) {
    return height - y;
};
(0, _dependencyManager.addDep)({
    name: "mapsAnimation",
    type: "animationRule",
    extension: _mapEntities.default
});
var Markers = function(_Entities) {
    (0, _inheritsLoose2.default)(Markers, _Entities);
    function Markers() {
        var _this;
        _this = _Entities.call(this) || this;
        _this.components = {};
        _this.getLabelAlignment = {
            top: topLabelAlignmentFn,
            left: leftLabelAlignmentFn,
            right: rightLabelAlignmentFn,
            bottom: bottomLabelAlignmentFn,
            center: centerLabelAlignmentFn
        };
        _this.getWrapWidth = {
            right: rightWrapWidthFn,
            left: leftWrapWidthFn,
            center: centerWrapWidthFn
        };
        _this.getWrapHeight = {
            top: topWrapHeightFn,
            middle: middleWrapHeightFn,
            bottom: bottomWrapHeightFn
        };
        _this.hoverFn = hoverFn;
        _this.hoverOutFn = hoverOutFn;
        _this.clickFn = clickFn;
        return _this;
    }
    var _proto = Markers.prototype;
    _proto.getName = function getName() {
        return "markers";
    };
    _proto.getType = function getType() {
        return "dataset";
    };
    _proto.configureAttributes = function configureAttributes(markerJSONData) {
        if (!markerJSONData) return;
        this.JSONData = markerJSONData;
        var dataset = this, annObj, mapAnnotations = dataset.getChildren("mapAnnotations") && dataset.getChildren("mapAnnotations")[0], chart = dataset.getFromEnv("chart"), markerOptions = chart.config.markerOpts;
        if (!mapAnnotations) {
            annObj = new _extAnnotation.default;
            dataset.attachChild(annObj, "mapAnnotations");
            mapAnnotations = dataset.getChildren("mapAnnotations")[0];
        }
        mapAnnotations.destroy();
        dataset.calculateDataLimits();
        if (markerOptions.dataEnabled) this._parseMarkers();
        else this.defineMarkersNShapes();
        this.configureConnectors();
    };
    _proto.calculateMarkerRadiusLimits = function calculateMarkerRadiusLimits() {
        if (!this.JSONData) return;
        var dataset = this, JSONData = dataset.JSONData, conf = dataset.config, chart = dataset.getFromEnv("chart"), width = chart.config.width, height = chart.config.height, markerMaxRadius = JSONData.markermaxradius, markerMinRadius = JSONData.markerminradius, minMax = Markers.getMarkerRadiusLimits(width, height, markerMaxRadius, markerMinRadius);
        conf.minRadius = minMax.min;
        conf.maxRadius = minMax.max;
    };
    _proto.calculateDataLimits = function calculateDataLimits() {
        var dataset = this, chart = dataset.getFromEnv("chart"), conf = dataset.config, jsonData = chart.jsonData, markers = jsonData.markers || {}, markerData = markers[MARKER_ITEM_KEY] || [], numberFormatter = this.getFromEnv("number-formatter"), min = Infinity, max = -Infinity, markerObj, cleanValue, len, value, i;
        for(i = 0, len = markerData.length; i < len; i++){
            markerObj = markerData[i];
            value = markerObj.value;
            cleanValue = numberFormatter.getCleanValue(value);
            if (cleanValue !== null) {
                min = mathMin(cleanValue, min);
                max = mathMax(cleanValue, max);
            }
        }
        conf.min = min;
        conf.max = max;
    };
    _proto._parseMarkers = function _parseMarkers() {
        var dataset = this, chart = dataset.getFromEnv("chart"), jsonData = chart.jsonData, markers = jsonData.markers, markerData = markers[MARKER_ITEM_KEY], shapeArr = markers.shapes, markerOptions = chart.config.markerOpts, markerStyle = markerOptions.dataLabels.style, numberFormatter = this.getFromEnv("number-formatter"), shapeObjs = dataset.components.shapeObjs = {}, markerObjs = dataset.components.markerObjs = {}, value, i, markerObj, item, shapeId, markerConfig, options, id;
        if (!markerData || !markerData.length) return;
        if (shapeArr && shapeArr.length) {
            i = shapeArr.length;
            for(; i; i -= 1){
                item = shapeArr[i - 1];
                if (id = item.id.toLowerCase()) shapeObjs[id] = item;
            }
        }
        i = markerData.length;
        while(i--){
            item = markerData[i];
            if (id = item.id && item.id.toLowerCase()) {
                value = item.value;
                if (value !== UNDEF && value !== "") value = parseFloat(value);
                markerObj = Markers._initializeMarkerItem(id, item, null, chart);
                shapeId = markerObj.config.options.shapeid;
                shapeId && typeof shapeId === "string" && (shapeId = shapeId.toLowerCase());
                markerConfig = markerObj.config;
                options = markerConfig.options;
                markerConfig.cleanValue = numberFormatter.getCleanValue(value);
                if (markerConfig.cleanValue !== null) markerConfig.formattedValue = numberFormatter.dataLabels(value);
                else markerConfig.formattedValue = UNDEF;
                markerConfig.fillColor = (0, _lib.pluck)(options.fillcolor, options.color, markerOptions.fillColor);
                markerConfig.fillAlpha = (0, _lib.pluck)(options.fillalpha, options.alpha, markerOptions.fillAlpha);
                markerConfig.fillRatio = (0, _lib.pluck)(options.fillratio, markerOptions.fillRatio);
                markerConfig.fillAngle = (0, _lib.pluck)(options.fillangle, markerOptions.fillAngle);
                markerConfig.borderThickness = (0, _lib.pluckNumber)(options.borderthickness, markerOptions.borderThickness);
                markerConfig.borderColor = (0, _lib.pluck)(options.bordercolor, markerOptions.borderColor);
                markerConfig.borderAlpha = (0, _lib.pluck)(options.borderalpha, markerOptions.borderAlpha);
                markerConfig.labelPadding = options.labelpadding || markerOptions.labelPadding;
                markerConfig.fontColor = (0, _lib.pluck)(options.labelcolor, markerStyle.fontColor);
                markerConfig.labelBgColor = (0, _lib.pluck)(options.labelbgcolor, markerStyle.labelBgColor) || BLANK;
                markerConfig.labelBorderColor = (0, _lib.pluck)(options.labelbordercolor, markerStyle.labelBorderColor) || BLANK;
                if (item.__hideMarker) markerObj._isHidden = true;
                if (shapeId) markerObj.shapeObj = shapeObjs[shapeId];
                markerObjs[id] = markerObj;
            }
        }
    };
    _proto.defineMarkersNShapes = function defineMarkersNShapes() {
        var dataset = this, chart = dataset.getFromEnv("chart"), jsonData = chart.jsonData, markers = jsonData.markers, defineArr = markers.definition, numberFormatter = this.getFromEnv("number-formatter"), markerOptions = chart.config.markerOpts, markerStyle = markerOptions.dataLabels.style, defineObject = convertToObj(defineArr) || {}, applyObject = convertToObj(markers.application) || {}, shapeArr = markers.shapes, shapeObjs = dataset.components.shapeObjs = dataset.components.shapeObjs || (dataset.components.shapeObjs = {}), markerObjs = dataset.components.markerObjs = dataset.components.markerObjs || (dataset.components.markerObjs = {}), shapeObjHash = {}, markerObjHash = {}, options, markerConfig, value, i, markerObj, item, shapeId, id;
        if (!defineArr || !defineArr.length) return;
        for(i in shapeObjs)shapeObjHash[i] = false;
        for(i in markerObjs)markerObjHash[i] = false;
        if (shapeArr && shapeArr.length) {
            i = shapeArr.length;
            for(; i; i -= 1){
                item = shapeArr[i - 1];
                if (id = item.id.toLowerCase()) {
                    shapeObjs[id] = item;
                    shapeObjHash[id] = true;
                }
            }
        }
        for(id in defineObject){
            item = defineObject[id];
            markerObj = markerObjs[id] = Markers._initializeMarkerItem(id, item, applyObject[id], chart);
            markerObjHash[id] = true;
            shapeId = markerObj.config.options.shapeid;
            markerConfig = markerObj.config;
            value = item.value;
            markerConfig.cleanValue = numberFormatter.getCleanValue(value);
            options = markerConfig.options;
            if (markerConfig.cleanValue !== null) markerConfig.formattedValue = numberFormatter.dataLabels(value);
            else markerConfig.formattedValue = UNDEF;
            markerConfig.fillColor = (0, _lib.pluck)(options.fillcolor, options.color, markerOptions.fillColor);
            markerConfig.fontColor = (0, _lib.pluck)(options.labelcolor, markerStyle.fontColor);
            markerConfig.fillAlpha = (0, _lib.pluck)(options.fillalpha, options.alpha, markerOptions.fillAlpha);
            markerConfig.fillRatio = (0, _lib.pluck)(options.fillratio, markerOptions.fillRatio);
            markerConfig.fillAngle = (0, _lib.pluck)(options.fillangle, markerOptions.fillAngle);
            markerConfig.borderThickness = (0, _lib.pluckNumber)(options.borderthickness, markerOptions.borderThickness);
            markerConfig.borderColor = (0, _lib.pluck)(options.bordercolor, markerOptions.borderColor);
            markerConfig.borderAlpha = (0, _lib.pluck)(options.borderalpha, markerOptions.borderAlpha);
            markerConfig.labelPadding = options.labelpadding || markerOptions.labelPadding;
            markerConfig.options.tooltext = (0, _lib.pluck)(options.tooltext, markerOptions.tooltext);
            markerConfig.link = options.link;
            if (shapeId) markerObj.shapeObj = shapeObjs[shapeId.toLowerCase()];
        }
        for(i in shapeObjHash)if (!shapeObjHash[i]) delete shapeObjs[i];
        for(i in markerObjs)if (!markerObjHash[i]) delete markerObjs[i];
    };
    Markers.getMarkerRadiusLimits = function getMarkerRadiusLimits(width, height, userMax, userMin) {
        var dime = mathMin(width, height), factor = .02, times = 3.5, minR = factor * dime, maxR = factor * times * dime, finalUserMin, finalUserMax;
        finalUserMin = parseFloat(userMin);
        finalUserMax = parseFloat(userMax);
        if (!isNaN(finalUserMin) && !isNaN(finalUserMax)) {
            if (finalUserMin < finalUserMax) return {
                min: finalUserMin,
                max: finalUserMax
            };
            return {
                min: finalUserMax,
                max: finalUserMin
            };
        } else if (!isNaN(finalUserMin)) return {
            min: finalUserMin,
            max: 10 * finalUserMin
        };
        else if (!isNaN(finalUserMax)) return {
            min: parseInt(finalUserMax / 10, 10),
            max: finalUserMax
        };
        return {
            min: minR,
            max: maxR
        };
    };
    _proto.getDataLimits = function getDataLimits() {
        var dataset = this, conf = dataset.config;
        return {
            min: conf.min,
            max: conf.max
        };
    };
    Markers._initializeMarkerItem = function _initializeMarkerItem(id, markerDefinition, markerApplication) {
        var markerObj = {}, config = markerObj.config, opts;
        if (!config) config = markerObj.config = {};
        config.id = id;
        config.definition = markerDefinition;
        config.application = markerApplication;
        config.hasValue = null;
        config.value = null;
        config.options = null;
        config.label = null;
        config.markerShape = null;
        config.markerLabel = null;
        config.drawOptions = {
            shape: null,
            label: null
        };
        config.drawComplete = false;
        opts = markerObj.config.options = (0, _lib.extend2)({}, config.definition);
        if (config.dataEnabled) {
            if (!isNaN(opts.value) && opts.value !== "") {
                markerObj.value = parseFloat(opts.value);
                markerObj.hasValue = true;
            }
        } else if (config.applyAll) config.options = (0, _lib.extend2)(opts, config.application);
        else if (markerApplication) config.options = (0, _lib.extend2)(opts, config.application);
        return markerObj;
    };
    _proto.configureConnectors = function configureConnectors() {
        var dataset = this, chart = dataset.getFromEnv("chart"), annotations = dataset.getChildren("mapAnnotations")[0], jsonData = chart.jsonData, datasetComponents = dataset.components, markers = jsonData.markers || {}, connectors = markers.connector || markers.connectors || [], markerObjs = datasetComponents.markerObjs, length = connectors.length, connectorComponents = dataset.components.connectors, getMouseOverFn = function getMouseOverFn(eventArgs) {
            return function(e) {
                var shape = this, unfilteredConfig = shape.data("unfilteredConfig");
                if (unfilteredConfig.hoverEffect) annotations.update(shape.getId(), unfilteredConfig._hoverAttrs);
                chart.fireChartInstanceEvent("connectorrollover", eventArgs, e);
            };
        }, getMouseOutFn = function getMouseOutFn(eventArgs) {
            return function(e) {
                var shape = this, unfilteredConfig = shape.data("unfilteredConfig");
                if (unfilteredConfig.hoverEffect) annotations.update(shape.getId(), unfilteredConfig._defaultAttrs);
                chart.fireChartInstanceEvent("connectorrollout", eventArgs, e);
            };
        }, getClickFn = function getClickFn(eventArgs) {
            return function(e) {
                chart.fireChartInstanceEvent("connectorClick", eventArgs, e);
            };
        }, chartConnOptions = chart.config.connectorOpts, connectorItem = {}, config, options, fromMarker, toMarker, label, toolText, thickness, color, alpha, hovercolor, hoveralpha, hoverthickness, connLabelConfig, obj, i;
        connectorComponents = dataset.components.connectors = [];
        for(i = 0; i < length; i++){
            obj = connectors[i];
            if (!obj.from && !obj.to) continue;
            fromMarker = markerObjs[obj.from.toLowerCase()];
            toMarker = markerObjs[obj.to.toLowerCase()];
            if (!fromMarker || !toMarker) continue;
            label = connectors[i].label;
            connectorItem = connectorComponents[i];
            !connectorItem && (connectorItem = connectorComponents[i] = {});
            !connectorItem.config && (config = connectorItem.config = {});
            !connectorItem.graphics && (connectorItem.graphics = {});
            config = connectorItem.config = (0, _lib.extend2)({}, obj);
            config.fromMarker = fromMarker;
            config.toMarker = toMarker;
            config.link = obj.link;
            config.showTooltip = (0, _lib.pluckNumber)(obj.showtooltip, chartConnOptions.showTooltip);
            toolText = config.tooltext = config.showTooltip ? (0, _lib.pluck)(obj.tooltext, chartConnOptions.tooltext) : BLANK;
            thickness = config.thickness = (0, _lib.pluck)(obj.thickness, chartConnOptions.thickness);
            color = config.color = (0, _lib.pluck)(obj.color, chartConnOptions.color);
            alpha = config.alpha = (0, _lib.pluck)(obj.alpha, chartConnOptions.alpha);
            config.hoverEffect = (0, _lib.pluckNumber)(obj.showhovereffect, chartConnOptions.showHoverEffect);
            hovercolor = (0, _lib.pluck)(obj.hovercolor, chartConnOptions.hoverColor, color);
            hoveralpha = (0, _lib.pluck)(obj.hoveralpha, chartConnOptions.hoverAlpha, alpha);
            hoverthickness = (0, _lib.pluck)(obj.hoverthickness, chartConnOptions.hoverThickness, thickness);
            config.dashed = (0, _lib.pluck)(obj.dashed, chartConnOptions.dashed);
            config.dashLen = (0, _lib.pluckNumber)(obj.dashlen, chartConnOptions.dashlen);
            config.dashGap = (0, _lib.pluckNumber)(obj.dashgap, chartConnOptions.dashgap);
            if (toolText) config.tooltext = toolText = (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(toolText, [
                3,
                40,
                41,
                42,
                43
            ], {
                label: label,
                fromId: fromMarker.config.definition.id,
                toId: toMarker.config.definition.id,
                fromLabel: fromMarker.config.definition.label,
                toLabel: toMarker.config.definition.label
            }, options), false);
            config.eventArgs = {
                fromMarkerId: fromMarker.config.id,
                toMarkerId: toMarker.config.id,
                label: label
            };
            config._hoverAttrs = {
                color: hovercolor,
                alpha: hoveralpha,
                thickness: hoverthickness
            };
            config._defaultAttrs = {
                color: color,
                alpha: alpha,
                thickness: thickness
            };
            config.type = LINE_STR;
            config.onclick = getClickFn(config.eventArgs);
            config.onmouseover = getMouseOverFn(config.eventArgs);
            config.onmouseout = getMouseOutFn(config.eventArgs);
            if (label) {
                connLabelConfig = connectorItem.labelConfig;
                !connLabelConfig && (connLabelConfig = connectorItem.labelConfig = {});
                connLabelConfig.type = TEXT_STR;
                connLabelConfig.text = label;
                connLabelConfig.align = POSITION_CENTER;
                connLabelConfig.valign = POSITION_MIDDLE;
                connLabelConfig.font = chartConnOptions.font;
                connLabelConfig.fillcolor = (0, _lib.pluck)(obj.labelcolor, chartConnOptions.fontColor);
                connLabelConfig.bgcolor = (0, _lib.pluck)(obj.labelbgcolor, chartConnOptions.labelBgColor);
                connLabelConfig.bordercolor = (0, _lib.pluck)(obj.labelbordercolor, chartConnOptions.labelBorderColor);
                connLabelConfig.tooltext = config.tooltext;
            }
        }
    };
    _proto.draw = function draw() {
        var dataset = this, chart = dataset.getFromEnv("chart"), conf = dataset.config, annotations = dataset.getChildren("mapAnnotations")[0], markers = dataset.components.markerObjs, chartConf = chart.config, chartMarkerOpts = chartConf.markerOpts, scalingParams = chartConf.scalingParams, annConfig = chart.config.annotationConfig, markerItems = [], markerLabels = [], appliedMarkers = {}, appliedObj, markerItem, rawConfig, config, id, i, markerLabelGroup, markerGroup, validShape = {};
        annotations.destroy();
        dataset.createContainer();
        dataset._drawConnectors();
        dataset.imageLoadCount = 0;
        dataset.imageCount = 0;
        conf.autoScale = chartMarkerOpts.autoScale ? scalingParams.sFactor : 1;
        for(id in markers){
            appliedObj = null;
            markerItem = markers[id];
            config = markerItem.config;
            if (!config.conIsHidden) appliedObj = this._drawMarkerItem(markerItem);
            if (!appliedObj) continue;
            validShape[id] = appliedObj;
            config._annotationIndex = markerItems.length;
            appliedMarkers[id] = markerItem;
            if (appliedObj.markerShape) {
                rawConfig = Object.assign({
                    align: "center",
                    valign: "middle",
                    animationLabel: "markerItem",
                    autoscale: appliedObj.markerShape.type === "image" ? 0 : 1
                }, appliedObj.markerShape);
                markerItems.push(rawConfig);
            }
            if (appliedObj.markerLabel) {
                rawConfig = Object.assign({
                    animationLabel: "markerItem",
                    id: appliedObj.markerShape.id
                }, appliedObj.markerLabel);
                markerLabels.push(rawConfig);
            }
        }
        markerGroup = annotations.addGroup(Object.assign(annConfig, {
            id: "markers",
            fillalpha: "100",
            items: markerItems,
            scaleimages: 1
        }), dataset);
        markerLabelGroup = annotations.addGroup(Object.assign(annConfig, {
            id: "markerLabels",
            items: markerLabels,
            scaleimages: 1
        }), dataset);
        dataset.components.markerGroup = markerGroup;
        dataset.components.markerLabelGroup = markerLabelGroup;
        i = 0;
        for(id in markers){
            if (!validShape[id]) continue;
            markerItem = markers[id];
            markerItem.markerShape = markerGroup.retrieveItem(markerItems[i].id);
            markerItem.markerShape.data("unfilteredConfig", markerItems[i]);
            if (validShape[id].markerLabel) {
                markerItem.markerLabel = markerLabelGroup.retrieveItem(markerItems[i].id);
                markerItem.markerLabel.data("unfilteredConfig", markerLabels[i]);
            }
            i++;
        }
        dataset.addJob("buildKdtree", dataset._buildKdTree.bind(dataset), _schedular.priorityList.kdTree);
    };
    _proto._buildKdTree = function _buildKdTree() {
        var dataset = this, kdArrayMap = dataset.components.kdArrayMap, markerGroup = dataset.components.markerGroup, kdPointsArr = [], id, i, items = markerGroup && markerGroup.items, len = items && items.length || 0;
        for(i = 0; i < len; i++){
            id = items[i].config.id;
            kdArrayMap[id] && kdPointsArr.push(kdArrayMap[id]);
        }
        if (!dataset.components.kDTree) dataset.components.kDTree = new _kdtree.default(true);
        dataset.components.kDTree._setSearchLimit(Infinity, Infinity);
        dataset.components.kDTree.buildKdTree(kdPointsArr);
    };
    _proto._drawMarkerItem = function _drawMarkerItem(marker) {
        var dataset = this, chart = dataset.getFromEnv("chart"), conf = chart.config, datasetConfig = dataset.config, scalingParams = conf.scalingParams, markerConfig = marker.config, options = markerConfig.options, definition = markerConfig.definition, chartMarkerOpts = conf.markerOpts, markerStyle = chartMarkerOpts.dataLabels.style, shapeId = options.shapeid, itemScale = options.scale || 1, label = options.label || BLANK, scaleFactor = chart.config.scalingParams.scaleFactor * chart.config.baseScaleFactor, labelPos = (options.labelpos || POSITION_TOP).toLowerCase(), value = markerConfig.formattedValue === UNDEF ? UNDEF : markerConfig.formattedValue, tooltext = options.tooltext || chartMarkerOpts.tooltext, radius = (0, _lib.pluckNumber)(definition.radius, markerConfig.radius, chartMarkerOpts.radius) * itemScale * datasetConfig.autoScale || 1e-4, fillColor = markerConfig.fillColor, fillAlpha = markerConfig.fillAlpha, fillRatio = markerConfig.fillRatio, fillAngle = markerConfig.fillAngle, borderThickness = markerConfig.borderThickness, borderColor = markerConfig.borderColor, borderAlpha = markerConfig.borderAlpha, annotations = dataset.getChildren("mapAnnotations")[0], labelObj, align, valign, baseWidth, baseHeight, xOffset, yOffset, wrapWidth, wrapHeight, labelPadding, shapeObj, temp, calcX, calcY, kdPoint, innerradius, sides, type, kdArrayMap = dataset.components.kdArrayMap || (dataset.components.kdArrayMap = {}), markerId = marker.config.id;
        markerConfig.autoScale = chartMarkerOpts.autoScale ? scaleFactor : 1;
        if (!shapeId) return;
        if (tooltext) tooltext = (0, _lib.parseUnsafeString)((0, _lib.parseTooltext)(tooltext, [
            1,
            2,
            3
        ], {
            formattedValue: value,
            label: label
        }, options), false);
        else tooltext = value ? label + chartMarkerOpts.tooltipSepChar + value : label;
        if (value !== UNDEF && value !== null) label = label + chartMarkerOpts.labelSepChar + value;
        else if (!isNaN(itemScale)) {
            if (itemScale < 0) itemScale = 0;
            else if (itemScale > 5) itemScale = 5;
        } else itemScale = 1;
        (0, _lib.extend2)(options, {
            x: options.x && options.x.toString(),
            y: options.y && options.y.toString(),
            fillcolor: fillColor,
            fillalpha: fillAlpha,
            fillratio: fillRatio,
            fillangle: fillAngle,
            borderthickness: borderThickness,
            bordercolor: borderColor,
            borderalpha: borderAlpha,
            hovereffect: (0, _lib.pluck)(chartMarkerOpts.showHoverEffect),
            radius: radius && radius.toString(),
            link: options.link,
            showshadow: (0, _lib.pluckNumber)(options.showshadow, markerConfig.shadow),
            _markerLabel: label,
            _markerId: options.id,
            id: (options.id + BLANK).toLowerCase()
        });
        delete options.tooltext;
        markerConfig.tooltext = chartMarkerOpts.showTooltip ? tooltext : false;
        calcX = Number(options.x) * scalingParams.sFactor + scalingParams.translateX;
        calcY = Number(options.y) * scalingParams.sFactor + scalingParams.translateY;
        radius = options.radius;
        if (shapeId === "triangle") {
            (0, _lib.extend2)(options, {
                type: "polygon",
                sides: 3,
                startangle: chartMarkerOpts.startAngle
            });
            type = POLYGON_STR;
            sides = 3;
        } else if (shapeId === "diamond") {
            (0, _lib.extend2)(options, {
                type: "polygon",
                sides: 4,
                startangle: chartMarkerOpts.startAngle
            });
            type = POLYGON_STR;
            sides = 4;
        } else if (shapeId === "arc") {
            innerradius = radius * INNERRADIUSFACTOR;
            (0, _lib.extend2)(options, {
                type: "arc",
                startangle: 0,
                endangle: 360,
                innerradius: innerradius
            });
            type = ACR_STR;
        } else if (shapeId === "circle") {
            options.type = CIRCLE_STR;
            type = CIRCLE_STR;
        } else {
            shapeObj = dataset.getShapeArgs.call(marker);
            if (!chartMarkerOpts.dataEnabled || !chartMarkerOpts.valueToRadius || options.radius === UNDEF) {
                !shapeObj.radius && (shapeObj.radius = chartMarkerOpts.radius);
                shapeObj.radius *= itemScale * markerConfig.autoScale;
            } else delete shapeObj.radius;
            (0, _lib.extend2)(options, shapeObj);
            options.id = options._markerId && options._markerId.toLowerCase();
            innerradius = shapeObj.innerradius;
            shapeObj.radius && (radius = shapeObj.radius);
            type = shapeObj.type && shapeObj.type.toLowerCase();
            sides = shapeObj.sides;
            radius = Number(radius);
            if (radius && innerradius && radius < innerradius) {
                temp = radius;
                options.radius = radius = innerradius;
                options.innerradius = innerradius = temp;
            }
        }
        options.type = options.type && options.type.toLowerCase();
        (0, _lib.extend2)(options, {
            hoverfillcolor: (0, _lib.pluck)(options.fillhovercolor, chartMarkerOpts.hoverFillColor, options.fillcolor),
            hoverfillalpha: (0, _lib.pluck)(options.fillhoveralpha, chartMarkerOpts.hoverFillAlpha, options.fillalpha),
            hoverfillratio: (0, _lib.pluck)(options.fillhoverratio, chartMarkerOpts.hoverFillRatio, options.fillratio),
            hoverfillangle: (0, _lib.pluck)(options.fillhoverangle, chartMarkerOpts.hoverFillAngle, options.fillangle),
            hoverborderthickness: (0, _lib.pluckNumber)(options.borderhoverthickness, chartMarkerOpts.hoverBorderThickness, options.borderthickness),
            hoverbordercolor: (0, _lib.pluck)(options.borderhovercolor, chartMarkerOpts.hoverBorderColor, options.bordercolor),
            hoverborderalpha: (0, _lib.pluck)(options.borderhoveralpha, chartMarkerOpts.hoverBorderAlpha, options.borderalpha)
        });
        options._hoverattrs = {
            fillalpha: options.hoverfillalpha,
            fillcolor: options.hoverfillcolor,
            fillangle: options.hoverfillangle,
            fillratio: options.hoverfillratio,
            borderThickness: options.showborder !== "0" ? options.hoverborderthickness : 0,
            borderColor: options.hoverbordercolor,
            borderAlpha: options.hoverborderalpha
        };
        options._defaultattrs = {
            fillalpha: options.fillalpha,
            fillcolor: options.fillcolor,
            fillangle: options.fillangle,
            fillratio: options.fillratio,
            borderThickness: options.showborder !== "0" ? options.borderthickness : 0,
            borderColor: options.bordercolor,
            borderAlpha: options.borderalpha
        };
        if (options.type === "image") {
            options.borderthickness = options.borderthickness || 0;
            options.onload = function(imageattr) {
                var shape = this, width = imageattr.width, height = imageattr.height;
                kdPoint = {};
                options = shape.config;
                calcX = (Number(options.derivedX) - width / (2 * scalingParams.sFactor)) * scalingParams.sFactor;
                calcY = (Number(options.derivedY) - height / (2 * scalingParams.sFactor)) * scalingParams.sFactor;
                kdPoint = kdArrayMap[markerId] || (kdArrayMap[markerId] = {});
                kdPoint.x = calcX + scalingParams.translateX;
                kdPoint.y = calcY + scalingParams.translateY;
                kdPoint.element = marker;
                kdPoint.shapeInfo = {
                    type: "rect",
                    width: width,
                    height: height
                };
                if (width && height) annotations.update(shape.getId(), {
                    x: calcX,
                    y: calcY,
                    width: width,
                    height: height,
                    autoscale: 0
                });
                dataset.imageLoadCount++;
                if (dataset.imageLoadCount === dataset.imageCount) dataset._buildKdTree();
            };
            options.onerror = function() {
                dataset.imageLoadCount++;
                if (dataset.imageLoadCount === dataset.imageCount) dataset._buildKdTree();
            };
            dataset.imageCount++;
        } else {
            kdPoint = kdArrayMap[markerId] || (kdArrayMap[markerId] = {});
            kdPoint.x = calcX;
            kdPoint.y = calcY;
            kdPoint.element = marker;
            kdPoint.shapeInfo = {
                type: type,
                sides: sides,
                radius: Number(radius) + options.borderthickness / 2,
                innerradius: innerradius
            };
        }
        markerConfig.drawOptions.shape = options;
        if (!chartMarkerOpts.showLabels) return {
            markerShape: options
        };
        labelPadding = options.labelpadding || chartMarkerOpts.labelPadding;
        labelObj = dataset._getLabelOptions(labelPos, labelPadding, options);
        align = labelObj.align;
        valign = labelObj.valign;
        baseWidth = markerConfig._labelBaseWidth;
        baseHeight = markerConfig._labelBaseHeight;
        xOffset = markerConfig._labelXOffset;
        yOffset = markerConfig._labelYOffset;
        wrapWidth = chartMarkerOpts.labelWrapWidth ? chartMarkerOpts.labelWrapWidth : dataset.getWrapWidth[align](baseWidth, Number(labelObj.x) + xOffset);
        wrapHeight = chartMarkerOpts.labelWrapHeight ? chartMarkerOpts.labelWrapHeight : dataset.getWrapHeight[valign](baseHeight, Number(labelObj.y) + yOffset);
        if (wrapWidth > labelPadding) wrapWidth -= labelPadding;
        if (wrapHeight > labelPadding) wrapHeight -= labelPadding;
        markerConfig.drawOptions.label = (0, _lib.extend2)({
            type: "text"
        }, {
            text: label,
            tooltext: options.tooltext,
            x: labelObj.x,
            y: labelObj.y,
            align: align,
            valign: labelObj.valign,
            wrap: 1,
            wrapwidth: wrapWidth,
            wrapheight: wrapHeight,
            fontsize: markerStyle.fontSize / scalingParams.sFactor,
            font: markerStyle.fontFamily,
            color: markerConfig.fontColor,
            bgcolor: markerConfig.labelBgColor || BLANK,
            bordercolor: markerConfig.labelBorderColor || BLANK
        });
        return {
            markerShape: options,
            markerLabel: markerConfig.drawOptions.label
        };
    };
    _proto.highlightPoint = function highlightPoint(kdPoint, e) {
        var marker = kdPoint.element, dataset = this, originalEvent = e.originalEvent, chart = dataset.getFromEnv("chart"), toolTipController = dataset.getFromEnv("toolTipController"), currentToolTip = dataset.config.currentToolTip, lastHoveredPoint = chart.config.lastHoveredPoint;
        if (lastHoveredPoint && lastHoveredPoint !== kdPoint) {
            lastHoveredPoint && dataset.hoverOutFn(lastHoveredPoint.element);
            chart.config.lastHoveredPoint = null;
            toolTipController.hide(currentToolTip);
        }
        if (kdPoint === false) return;
        if (e.type === "click" || e.type === "touchstart") {
            if (chart.config.lastHoveredPoint !== kdPoint) dataset.hoverFn(marker);
            dataset.clickFn(e, marker);
        } else if (e.type === "mousemove") {
            if (chart.config.lastHoveredPoint !== kdPoint) dataset.hoverFn(marker);
        }
        if (marker.config.tooltext) {
            if (currentToolTip) toolTipController.draw(originalEvent, marker.config.tooltext, currentToolTip);
            else currentToolTip = dataset.config.currentToolTip = toolTipController.draw(originalEvent, marker.config.tooltext);
        }
        chart.config.lastHoveredPoint = kdPoint;
    };
    _proto._drawConnectors = function _drawConnectors() {
        var dataset = this, chart = dataset.getFromEnv("chart"), annConfig = chart.config.annotationConfig, datasetComponents = dataset.components, connectors = datasetComponents.connectors || (dataset.components.connectors = []), connector, connectorLabel, length = connectors.length, scalingParams = chart.config.scalingParams, chartConnOptions = chart.config.connectorOpts, showConnectorLabels = chartConnOptions.showLabels, annotations = dataset.getChildren("mapAnnotations")[0], i, j, connectorOptions = [], connectorLabelItems = [], x, y, toX, toY, fromMarkerConfig, toMarkerConfig, connectorGroup, connectorLabelGroup, rawConfig, groups = [], validConnector = {};
        groups.push({
            id: "connectorLabels",
            fillalpha: "100",
            items: connectorLabelItems
        });
        groups.push({
            id: "connectors",
            fillalpha: "100",
            items: connectorOptions
        });
        for(i = 0; i < length; i++){
            if (!connectors[i]) continue;
            validConnector[i] = true;
            fromMarkerConfig = connectors[i].config.fromMarker.config;
            toMarkerConfig = connectors[i].config.toMarker.config;
            x = fromMarkerConfig.options.x;
            y = fromMarkerConfig.options.y;
            toX = toMarkerConfig.options.x;
            toY = toMarkerConfig.options.y;
            connectors[i].config.x = x;
            connectors[i].config.y = y;
            connectors[i].config.tox = toX;
            connectors[i].config.toy = toY;
            rawConfig = Object.assign({
                animationLabel: "markerItem"
            }, connectors[i].config);
            connectorOptions.push(rawConfig);
            if (connectors[i].labelConfig && showConnectorLabels) {
                connectors[i].labelConfig.x = ((Number(x) + Number(toX)) / 2).toString();
                connectors[i].labelConfig.y = ((Number(y) + Number(toY)) / 2).toString();
                connectors[i].labelConfig.fontsize = chartConnOptions.fontSize / (scalingParams.scaleFactor * chart.config.baseScaleFactor);
                rawConfig = Object.assign({
                    animationLabel: "markerItem"
                }, connectors[i].labelConfig);
                connectorLabelItems.push(rawConfig);
            }
        }
        connectorGroup = annotations.addGroup(Object.assign(annConfig, groups[1]), dataset);
        connectorLabelGroup = annotations.addGroup(Object.assign(annConfig, groups[0]), dataset);
        for(i = 0, j = 0; i < length; i++){
            if (!validConnector[i]) continue;
            connector = connectorGroup.items[j];
            if (connector) {
                connector.data("unfilteredConfig", connectorOptions[j]);
                connector.addEventListener("fc-mouseover", connectors[i].config.onmouseover);
                connector.addEventListener("fc-mouseout", connectors[i].config.onmouseout);
                connector.addEventListener("fc-click", connectors[i].config.onclick);
            }
            if (connectors[i].labelConfig && showConnectorLabels) {
                connectorLabel = connectorLabelGroup.items[j];
                connectorLabel && connectorLabel.data("unfilteredConfig");
            }
            j++;
        }
    };
    _proto.getShapeArgs = function getShapeArgs() {
        var mark = this, config = mark.config, shapeObj = (0, _lib.extend2)({}, mark.shapeObj), radius;
        config.autoScale = 1;
        if (shapeObj) {
            if (shapeObj.type === "polygon") {
                if (shapeObj.sides < 3) shapeObj.type = CIRCLE_STR;
                else shapeObj.startangle = config.startAngle;
            } else if (shapeObj.type === "arc") {
                radius = (shapeObj.radius || config.markerRadius) * config.autoScale;
                shapeObj.radius = radius;
                shapeObj.innerradius = shapeObj.innerradius && shapeObj.innerradius * config.autoScale || radius * INNERRADIUSFACTOR;
            }
            return shapeObj;
        }
        return null;
    };
    _proto._getLabelOptions = function _getLabelOptions(labelPos, labelPadding, options, width, height) {
        var dataset = this, radius, x, y, alignment = labelPos && labelPos.toLowerCase();
        if (!dataset.getLabelAlignment[alignment]) alignment = CENTER_STR;
        x = Number(options.x);
        y = Number(options.y);
        if (width === UNDEF || height === UNDEF) radius = options.radius || 0;
        else radius = /^(top|bottom)$/gi.test(alignment) && height * .5 || /^(left|right)$/gi.test(alignment) && width * .5 || 0;
        radius = Number(radius) + Number(labelPadding);
        return dataset.getLabelAlignment[alignment](x, y, radius);
    };
    _proto.addMarkerItem = function addMarkerItem(options) {
        var markers = this, chart = markers.getFromEnv("chart"), item = options, markerObj, items = markers.components.markerObjs, shapeObjs = markers.components.shapeObjs, markerGroup = markers.components.markerGroup, markerLabelGroup = markers.components.markerLabelGroup, markerConfigOptions, annotations = markers.getChildren("mapAnnotations")[0], numberFormatter = markers.getFromEnv("number-formatter"), markerOptions = chart.config.markerOpts, drawOptions, markerConfig, rawConfig, value, shapeId, id;
        if (id = item.id.toLowerCase()) {
            if (items[id]) return;
            delete item.value;
            markers.imageLoadCount = 0;
            markerObj = Markers._initializeMarkerItem(id, item, null);
            markerObj.dataset = markers;
            shapeId = markerObj.config.options.shapeid;
            markerConfig = markerObj.config;
            value = item.value;
            markerConfig.cleanValue = numberFormatter.getCleanValue(value);
            markerConfigOptions = markerConfig.options;
            if (markerConfig.cleanValue !== null) markerConfig.formattedValue = numberFormatter.dataLabels(value);
            else markerConfig.formattedValue = UNDEF;
            markerConfig.fillColor = (0, _lib.pluck)(markerConfigOptions.fillcolor, markerConfigOptions.color, markerOptions.fillColor);
            markerConfig.fillAlpha = (0, _lib.pluck)(markerConfigOptions.fillalpha, markerConfigOptions.alpha, markerOptions.fillAlpha);
            markerConfig.fillRatio = (0, _lib.pluck)(markerConfigOptions.fillratio, markerOptions.fillRatio);
            markerConfig.fillAngle = (0, _lib.pluck)(markerConfigOptions.fillangle, markerOptions.fillAngle);
            markerConfig.borderThickness = (0, _lib.pluckNumber)(markerConfigOptions.borderthickness, markerOptions.borderThickness);
            markerConfig.borderColor = (0, _lib.pluck)(markerConfigOptions.bordercolor, markerOptions.borderColor);
            markerConfig.borderAlpha = (0, _lib.pluck)(markerConfigOptions.borderalpha, markerOptions.borderAlpha);
            markerConfig.labelPadding = markerConfigOptions.labelpadding || markerOptions.labelPadding;
            markerConfig.options.tooltext = (0, _lib.pluck)(markerConfigOptions.tooltext, markerOptions.tooltext);
            markerConfig.link = markerConfigOptions.link;
            if (shapeId) markerObj.shapeObj = shapeObjs[shapeId && shapeId.toLowerCase()];
            items[id] = markerObj;
            drawOptions = markers._drawMarkerItem(markerObj);
            if (markerGroup && markerLabelGroup) {
                if (drawOptions.markerShape) {
                    rawConfig = Object.assign({
                        align: "center",
                        valign: "middle",
                        animationLabel: "markerItem",
                        autoscale: drawOptions.markerShape.type === "image" ? 0 : 1
                    }, drawOptions.markerShape);
                    markerObj.markerShape = annotations.addItem(markerGroup.getId(), rawConfig, markers);
                    markerObj.markerShape.data("unfilteredConfig", rawConfig);
                }
                if (drawOptions.markerLabel) {
                    rawConfig = Object.assign({
                        animationLabel: "markerItem"
                    }, drawOptions.markerLabel);
                    markerObj.markerLabel = annotations.addItem(markerLabelGroup.getId(), rawConfig, markers);
                    markerObj.markerLabel.data("unfilteredConfig", rawConfig);
                }
            }
            markers._buildKdTree();
        }
    };
    _proto.updateMarkerItem = function updateMarkerItem(id, options) {
        var markers = this, chart = markers.getFromEnv("chart"), annotations = markers.getChildren("mapAnnotations")[0], markerObjs = markers.components.markerObjs, markerOptions = chart.config.markerOpts, origOptions, key, markerConfig, optConfig = {}, marker = markerObjs[id], annotOptions;
        if (marker) {
            origOptions = marker.config.options;
            (0, _lib.extend2)(origOptions, options);
            markers.imageLoadCount = 0;
            markerConfig = marker.config;
            for(key in options)optConfig[key.toLowerCase()] = options[key] && options[key].toString();
            markerConfig.fillColor = (0, _lib.pluck)(optConfig.fillcolor, optConfig.color, markerOptions.fillColor);
            markerConfig.fillAlpha = (0, _lib.pluck)(optConfig.fillalpha, optConfig.alpha, markerOptions.fillAlpha);
            markerConfig.fillRatio = (0, _lib.pluck)(optConfig.fillratio, markerOptions.fillRatio);
            markerConfig.fillAngle = (0, _lib.pluck)(optConfig.fillangle, markerOptions.fillAngle);
            markerConfig.borderThickness = (0, _lib.pluckNumber)(optConfig.borderthickness, markerOptions.borderThickness);
            markerConfig.borderColor = (0, _lib.pluck)(optConfig.bordercolor, markerOptions.borderColor);
            markerConfig.borderAlpha = (0, _lib.pluck)(optConfig.borderalpha, markerOptions.borderAlpha);
            markerConfig.labelPadding = optConfig.labelpadding || markerOptions.labelPadding;
            markerConfig.options.tooltext = (0, _lib.pluck)(optConfig.tooltext, markerOptions.tooltext);
            markerConfig.link = optConfig.link;
            annotOptions = markers._drawMarkerItem(marker).markerShape;
            markers._buildKdTree();
            annotations.update(id, annotOptions);
        }
    };
    _proto.createContainer = function createContainer() {
        var dataset = this, parent = dataset.getLinkedParent(), animationManager = dataset.getFromEnv("animationManager"), pContainer = parent.getChildContainer("layer1");
        !dataset.getChildContainer("abovePlotGroup") && dataset.addChildContainer("abovePlotGroup", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "abovePlotGroup",
                opacity: 1
            },
            container: pContainer,
            component: dataset,
            label: "group"
        }));
        !dataset.getChildContainer("belowPlotGroup") && dataset.addChildContainer("belowPlotGroup", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "belowPlotGroup",
                opacity: 1
            },
            container: pContainer,
            component: dataset,
            label: "group"
        }));
    };
    _proto._removeMarkerItem = function _removeMarkerItem(id) {
        var markers = this, components = markers.components, markerObjs = components.markerObjs, markerObj = markerObjs[id], kdArrayMap = components.kdArrayMap, annotations = markers.getChildren("mapAnnotations")[0], markerShape, markerLabel;
        if (markerObj) {
            markerShape = markerObj.markerShape;
            markerLabel = markerObj.markerLabel;
            markerShape && annotations.destroy(markerShape.getId());
            markerLabel && annotations.destroy(markerLabel.getId());
            delete kdArrayMap[id];
            markers._buildKdTree();
        }
        delete markerObjs[id];
    };
    _proto.getElement = function getElement(point) {
        var datasetObj = this;
        if (datasetObj.components.kDTree) return datasetObj.components.kDTree.getNeighbour(point);
    };
    return Markers;
}(_entities.default);
var _default = Markers;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","../entities":"i96dI","@fusioncharts/charts/src/dataset/_internal/kdtree":"haGAk","@fusioncharts/features/src/annotation/ext-annotation":"f2YS0","@fusioncharts/core/src/dependency-manager":"8dbFz","../_internal/map-entities.animation":"5c5fZ","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/event-api":"kNy85","@fusioncharts/core/src/schedular":"jbg43"}],"haGAk":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = void 0;
var UNDEF, isWithinCircle = function isWithinCircle(x, y, cx, cy, r) {
    return Math.pow(cx - x, 2) + Math.pow(cy - y, 2) <= Math.pow(r, 2);
}, mathPI = Math.PI, mathCos = Math.cos, mathSin = Math.sin, mathMax = Math.max, mathMin = Math.min, deg2rad = mathPI / 180, rad = function rad(deg) {
    return deg % 360 * deg2rad;
}, orientation = function orientation(p1x, p1y, q1x, q1y, p2x, p2y) {
    var A = q1y - p1y, B = p2x - q1x, C = q1x - p1x, D = p2y - q1y, val1, val2, val;
    val1 = A * B;
    val2 = C * D;
    if (isNaN(val1)) val1 = 0;
    if (isNaN(val2)) val2 = 0;
    val = val1 - val2;
    if (val === 0) return 0;
    return val > 0 ? 1 : 2;
}, onSegment = function onSegment(p1x, p1y, q1x, q1y, p2x, p2y) {
    if (q1x <= mathMax(p1x, p2x) && q1x >= mathMin(p1x, p2x) && q1y <= mathMax(p1y, p2y) && q1y >= mathMin(p1y, p2y)) return true;
    return false;
}, doIntersect = function doIntersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y) {
    var o1 = orientation(p1x, p1y, q1x, q1y, p2x, p2y), o2 = orientation(p1x, p1y, q1x, q1y, q2x, q2y), o3 = orientation(p2x, p2y, q2x, q2y, p1x, p1y), o4 = orientation(p2x, p2y, q2x, q2y, q1x, q1y);
    if (o1 !== o2 && o3 !== o4) return true;
    if (o1 === 0 && onSegment(p1x, p1y, p2x, p2y, q1x, q1y)) return true;
    if (o2 === 0 && onSegment(p1x, p1y, q2x, q2y, q1x, q1y)) return true;
    if (o3 === 0 && onSegment(p2x, p2y, p1x, p1y, q2x, q2y)) return true;
    if (o4 === 0 && onSegment(p2x, p2y, q1x, q1y, q2x, q2y)) return true;
    return false;
}, isWithinPolygon = function isWithinPolygon(x, y, cx, cy, r, sides, startAngle) {
    var i, extreme = Infinity, angle, count = 0, p1x, p2x, p2y, p1y, inangle, inside = false;
    if (isWithinCircle(x, y, cx, cy, r) && sides >= 3) {
        angle = startAngle === UNDEF ? mathPI * .5 : rad(startAngle);
        inangle = 2 * mathPI / sides;
        p1x = cx + r * mathCos(-angle);
        p1y = cy + r * mathSin(-angle);
        for(i = 0; i < sides; i++){
            angle += inangle;
            p2x = cx + r * mathCos(-angle);
            p2y = cy + r * mathSin(-angle);
            if (doIntersect(p1x, p1y, p2x, p2y, x, y, extreme, y)) {
                if (orientation(p1x, p1y, x, y, p2x, p2y) === 0) return onSegment(p1x, p1y, x, y, p2x, p2y);
                count++;
            }
            p1x = p2x;
            p1y = p2y;
        }
        inside = count % 2 !== 0;
    }
    return inside;
}, _compair2closest = function _compair2closest(p1, p2) {
    if (!p1 || p1 && p2 && p2.i > p1.i) return p2;
    return p1;
};
function kdTreeAbs(kdArray) {
    "use strict";
    var arr = kdArray, tolerance = arr && arr[0] && arr[0].r || 5, i, max = Math.max, floor = Math.floor, sqrt = Math.sqrt, min = Math.min, log = Math.log, exp = Math.exp, pow = Math.pow, _quickselectX, _quickselectY;
    function swap(array, swapindexi, swapindexj) {
        var tmp = array[swapindexi];
        array[swapindexi] = array[swapindexj];
        array[swapindexj] = tmp;
    }
    _quickselectX = function quickselectX(copyArr, indexk, lft, rght) {
        var n, m, z, s, sd, newLeft, newRight, t, indexi, indexj, left = lft, right = rght;
        while(right > left){
            if (right - left > 600) {
                n = right - left + 1;
                m = indexk - left + 1;
                z = log(n);
                s = .5 * exp(2 * z / 3);
                sd = .5 * sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
                newLeft = max(left, floor(indexk - m * s / n + sd));
                newRight = min(right, floor(indexk + (n - m) * s / n + sd));
                _quickselectX(copyArr, indexk, newLeft, newRight);
            }
            t = copyArr[indexk];
            indexi = left;
            indexj = right;
            swap(copyArr, left, indexk);
            if (copyArr[right].x > t.x) swap(copyArr, left, right);
            while(indexi < indexj){
                swap(copyArr, indexi, indexj);
                indexi++;
                indexj--;
                while(copyArr[indexi].x < t.x)indexi++;
                while(copyArr[indexj].x > t.x)indexj--;
            }
            if (copyArr[left].x === t.x) swap(copyArr, left, indexj);
            else {
                indexj++;
                swap(copyArr, indexj, right);
            }
            if (indexj <= indexk) left = indexj + 1;
            if (indexk <= indexj) right = indexj - 1;
        }
    };
    _quickselectY = function quickselectY(array, indexk, lft, rght) {
        var n, m, z, s, sd, newLeft, newRight, t, indexi, indexj, left = lft, right = rght, copyarr = array;
        while(right > left){
            if (right - left > 600) {
                n = right - left + 1;
                m = indexk - left + 1;
                z = log(n);
                s = .5 * exp(2 * z / 3);
                sd = .5 * sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
                newLeft = max(left, floor(indexk - m * s / n + sd));
                newRight = min(right, floor(indexk + (n - m) * s / n + sd));
                _quickselectY(copyarr, indexk, newLeft, newRight);
            }
            t = copyarr[indexk];
            indexi = left;
            indexj = right;
            swap(copyarr, left, indexk);
            if (copyarr[right].y > t.y) swap(copyarr, left, right);
            while(indexi < indexj){
                swap(copyarr, indexi, indexj);
                indexi++;
                indexj--;
                while(copyarr[indexi].y < t.y)indexi++;
                while(copyarr[indexj].y > t.y)indexj--;
            }
            if (copyarr[left].y === t.y) swap(copyarr, left, indexj);
            else {
                indexj++;
                swap(copyarr, indexj, right);
            }
            if (indexj <= indexk) left = indexj + 1;
            if (indexk <= indexj) right = indexj - 1;
        }
    };
    arr = arr || [];
    for(i = arr.length; i--;){
        if (arr[i].r > tolerance) tolerance = arr[i].r;
        arr[i].i = i;
        arr[i].x = +arr[i].x;
        arr[i].y = +arr[i].y;
    }
    function buildKdTree(copyArr, left, right, isY) {
        var ob = {}, mid, access = isY ? "y" : "x";
        if (left === right) {
            ob.point = copyArr[left];
            return ob;
        }
        if (right - left === 1) {
            if (copyArr[left][access] > copyArr[right][access]) {
                ob.point = copyArr[left];
                ob.left = {
                    point: copyArr[right]
                };
            } else {
                ob.point = copyArr[right];
                ob.left = {
                    point: copyArr[left]
                };
            }
            return ob;
        }
        mid = left + right >> 1;
        if (isY) _quickselectY(copyArr, mid, left, right);
        else _quickselectX(copyArr, mid, left, right);
        ob.point = copyArr[mid];
        ob.left = buildKdTree(copyArr, left, mid - 1, !isY);
        ob.right = buildKdTree(copyArr, mid + 1, right, !isY);
        return ob;
    }
    return {
        tree: arr.length === 0 ? {} : buildKdTree(arr, 0, arr.length - 1, false),
        search: function search(x, y, type, opts) {
            var tree = this.tree, options = opts, res, x1 = x - tolerance, x2 = x + tolerance, y1 = y - tolerance, y2 = y + tolerance, lastHovered = false, lastDist = 0, searchX, searchY;
            options = options || {};
            function calcDist(distx, disty, distp, distq) {
                return sqrt(pow(distx - distp, 2) + pow(disty - distq, 2));
            }
            function inRange(a, b) {
                if (type === "circle") return calcDist(a, b, x, y) <= x1;
                return a >= x1 && a <= x2 && b >= y1 && b <= y2;
            }
            function inRangeApply(a, r1, r2) {
                return a >= r1 && a <= r2;
            }
            function apply(ob) {
                var currentHovered = inRangeApply(x, ob.x1, ob.x2) && inRangeApply(y, ob.y1, ob.y2), currentDist = calcDist(x, y, ob.point.x, ob.point.y);
                if (!res) {
                    res = ob;
                    lastHovered = currentHovered;
                    lastDist = currentDist;
                    return;
                }
                if (currentHovered) {
                    if (lastHovered) {
                        if (ob.point.i > res.point.i) {
                            res = ob;
                            lastHovered = currentHovered;
                            lastDist = currentDist;
                        }
                    } else {
                        res = ob;
                        lastHovered = currentHovered;
                        lastDist = currentDist;
                    }
                } else {
                    if (!lastHovered) {
                        if (currentDist < lastDist) {
                            res = ob;
                            lastHovered = currentHovered;
                            lastDist = currentDist;
                        }
                    }
                }
            }
            function defineSearchArea(rx, ry) {
                if (type === "circle") x1 = rx;
                else {
                    x1 = x - rx || 0;
                    x2 = x + rx || 0;
                    y1 = y - ry || 0;
                    y2 = y + ry || 0;
                }
            }
            searchY = function searchY(ob) {
                var rx, ry;
                if (!ob || !ob.point) return;
                rx = options.rx || ob.point.r;
                ry = options.ry || ob.point.r;
                defineSearchArea(rx, ry);
                if (inRange(ob.point.x, ob.point.y)) apply(ob);
                if (y1 <= ob.point.y) searchX(ob.left);
                if (y2 >= ob.point.y) searchX(ob.right);
            };
            searchX = function searchX(ob) {
                var rx, ry;
                if (!ob || !ob.point) return;
                rx = options.rx || ob.point.r;
                ry = options.ry || ob.point.r;
                defineSearchArea(rx, ry);
                if (inRange(ob.point.x, ob.point.y)) apply(ob);
                if (x1 <= ob.point.x) searchY(ob.left);
                if (x2 >= ob.point.x) searchY(ob.right);
            };
            searchX(tree);
            return res && res.point || res;
        }
    };
}
var KdTree = function() {
    function KdTree(shape) {
        var kdTreeObj = this;
        kdTreeObj.configure(shape);
    }
    var _proto = KdTree.prototype;
    _proto.configure = function configure(shape) {
        var kdTreeObj = this;
        kdTreeObj.validatorFn = shape ? kdTreeObj.shapeValidator() : kdTreeObj.defaultValidator();
    };
    _proto.defaultValidator = function defaultValidator() {
        var kdTreeObj = this;
        return function(setElem) {
            var mousePoint = kdTreeObj.mousePoint;
            return !!(setElem && Math.pow((setElem.x - mousePoint.x) / kdTreeObj.xLimit, 2) + Math.pow((setElem.y - mousePoint.y) / kdTreeObj.yLimit, 2) <= 1);
        };
    };
    _proto.shapeValidator = function shapeValidator() {
        var kdTreeObj = this;
        return function(setElem) {
            var mousePoint = kdTreeObj.mousePoint, shapeInfo = setElem && setElem.shapeInfo, inside = false, type, innerradius, r, x = mousePoint.x, y = mousePoint.y, sides, startAngle, x1, x2, y1, y2;
            type = shapeInfo && shapeInfo.type;
            switch(type){
                case "circle":
                    r = shapeInfo.radius;
                    inside = isWithinCircle(x, y, setElem.x, setElem.y, r);
                    break;
                case "arc":
                    innerradius = shapeInfo.innerradius;
                    r = shapeInfo.radius;
                    inside = !isWithinCircle(x, y, setElem.x, setElem.y, innerradius) && isWithinCircle(x, y, setElem.x, setElem.y, r);
                    break;
                case "polygon":
                    r = shapeInfo.radius;
                    startAngle = shapeInfo.startAngle;
                    sides = shapeInfo.sides;
                    inside = isWithinPolygon(x, y, setElem.x, setElem.y, r, sides, startAngle);
                    break;
                case "rect":
                case "rectangle":
                    x1 = setElem.x;
                    y1 = setElem.y;
                    x2 = x1 + (shapeInfo.width || 0);
                    y2 = y1 + (shapeInfo.height || 0);
                    inside = x >= x1 && x <= x2 && y >= y1 && y <= y2;
                    break;
                case "default":
                    inside = false;
                    break;
            }
            return inside;
        };
    };
    _proto.buildKdTree = function buildKdTree(points) {
        this.kdTree = kdTreeAbs(points);
        this.tree = this.kdTree.tree;
        return this;
    };
    _proto.getNeighbour = function getNeighbour(point, basicSearch, type) {
        var kDTreeObj = this, tree = kDTreeObj.tree, validatorFn = kDTreeObj.validatorFn;
        kDTreeObj.mousePoint = point;
        if (basicSearch) return this.kdTree && this.kdTree.search(point.x, point.y, type, point.options);
        if (tree) return kDTreeObj._searchBtwnLimit(tree, true, validatorFn);
    };
    _proto._searchBtwnLimit = function _searchBtwnLimit(tree, isX, validatorFn) {
        var point, returnPoint, kdTreeObj = this, axis = isX ? "x" : "y", newLimitBox = {
            x1: tree.point.x - tree.point.shapeInfo.width,
            x2: tree.point.x + tree.point.shapeInfo.width,
            y1: tree.point.y - tree.point.shapeInfo.height,
            y2: tree.point.y + tree.point.shapeInfo.height
        }, lowerLimit = isX ? newLimitBox.x1 : newLimitBox.y1, upperLimit = isX ? newLimitBox.x2 : newLimitBox.y2;
        point = tree && tree.point && tree.point[axis];
        if (point === UNDEF) return;
        if (validatorFn(tree.point)) returnPoint = tree.point;
        if (point >= lowerLimit && tree.left) returnPoint = _compair2closest(returnPoint, kdTreeObj._searchBtwnLimit(tree.left, !isX, validatorFn));
        if (point <= upperLimit && tree.right) returnPoint = _compair2closest(returnPoint, kdTreeObj._searchBtwnLimit(tree.right, !isX, validatorFn));
        return returnPoint;
    };
    _proto._setSearchLimit = function _setSearchLimit(xLimit, yLimit) {
        var kdTree = this;
        kdTree.xLimit = xLimit;
        kdTree.yLimit = yLimit;
    };
    return KdTree;
}();
KdTree.prototype.constructor = KdTree;
var _default = KdTree;
exports.default = _default;

},{}],"9CF40":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var _lib = require("@fusioncharts/core/src/lib");
var _dependencyManager = require("@fusioncharts/core/src/dependency-manager");
var _mapEntities = _interopRequireDefault(require("../_internal/map-entities.animation"));
var configureChildren = function configureChildren(child) {
    child.configure && child.configure();
};
(0, _dependencyManager.addDep)({
    name: "mapsAnimation",
    type: "animationRule",
    extension: _mapEntities.default
});
var MapGroup = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(MapGroup, _ComponentInterface);
    function MapGroup() {
        return _ComponentInterface.apply(this, arguments) || this;
    }
    var _proto = MapGroup.prototype;
    _proto.getType = function getType() {
        return "group";
    };
    _proto.getName = function getName() {
        return "mapGroup";
    };
    _proto.configure = function configure() {
        var manager = this;
        manager._mapChildren(configureChildren);
    };
    _proto.createContainer = function createContainer() {
        var manager = this, parent = manager.getLinkedParent(), animationManager = manager.getFromEnv("animationManager"), pContainer, parentChildContainers = parent.getChildContainer();
        pContainer = parentChildContainers.plotGroup;
        !manager.getChildContainer("plotShadow") && manager.addChildContainer("plotShadow", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "manager-plot-shadow",
                opacity: 1
            },
            container: pContainer,
            component: manager,
            label: "group"
        }));
        !manager.getChildContainer("plot") && manager.addChildContainer("plot", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "manager-plot",
                opacity: 1
            },
            container: pContainer,
            component: manager,
            label: "group"
        }));
        !manager.getChildContainer("layer0") && manager.addChildContainer("layer0", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "ann-layer0",
                opacity: 1
            },
            container: parentChildContainers.abovePlotGroup,
            component: manager,
            label: "group"
        }));
        !manager.getChildContainer("layer1") && manager.addChildContainer("layer1", animationManager.setAnimation({
            el: "group",
            attr: {
                name: "ann-layer1",
                opacity: 1
            },
            container: parentChildContainers.abovePlotGroup,
            component: manager,
            label: "group"
        }));
        if (parent.config.labelsOnTop) manager.getChildContainer("layer0").toFront();
        else manager.getChildContainer("layer0").toBack();
    };
    _proto._transformGroup = function _transformGroup() {
        var manager = this, chart = this.getFromEnv("chart"), chartInstance = chart.getFromEnv("chartInstance"), animationManager = manager.getFromEnv("animationManager"), jsonData = chart.jsonData, plotGroup = manager.getChildContainer("plot"), plotShadowGroup = manager.getChildContainer("plotShadow"), scalingParams = chart.config.scalingParams, transformGroup = function transformGroup() {
            return function(event) {
                event.detachHandler();
                if (_lib.hasSVG) {
                    if (chartInstance.args.link && chartInstance.args.clickedEntityBox && jsonData.chart.linkedcharttransition === "scale") {
                        plotGroup && animationManager.setAnimation({
                            el: plotGroup,
                            attr: {
                                transform: scalingParams.transformStr
                            },
                            component: manager,
                            label: "group"
                        });
                        plotShadowGroup && animationManager.setAnimation({
                            el: plotShadowGroup,
                            attr: {
                                transform: scalingParams.transformStr
                            },
                            component: manager,
                            label: "group"
                        });
                    } else {
                        plotGroup && animationManager.setAnimation({
                            el: plotGroup,
                            attr: {
                                transform: scalingParams.transformStr
                            },
                            component: manager,
                            label: "group"
                        });
                        plotShadowGroup && animationManager.setAnimation({
                            el: plotShadowGroup,
                            attr: {
                                transform: scalingParams.transformStr
                            },
                            component: manager,
                            label: "group"
                        });
                    }
                }
                plotGroup.show();
                plotShadowGroup.show();
            };
        };
        plotGroup.hide();
        plotShadowGroup.hide();
        chart.config.entitiesReady = false;
        chartInstance.addEventListener("internal.mapdrawingcomplete", transformGroup());
        chart.checkComplete();
    };
    _proto.draw = function draw() {
        this.createContainer();
        this._transformGroup();
    };
    _proto.getDataLimits = function getDataLimits(allVisible) {
        var manager = this, min = Infinity, max = -Infinity, maxminObj, numOfColumns = 0, getMaxMin = function getMaxMin(_maxminObj) {
            max = Math.max(max, _maxminObj.max);
            min = Math.min(min, _maxminObj.min);
        };
        manager._mapChildren(function(child) {
            if (child.getState("removed") || child.getState("visible") === false) {
                if (allVisible) {
                    maxminObj = child.getDataLimits(allVisible);
                    getMaxMin(maxminObj);
                }
                return;
            }
            numOfColumns++;
            maxminObj = child.getDataLimits(allVisible);
            getMaxMin(maxminObj);
        });
        if (!numOfColumns) manager.setState("visible", false);
        else manager.setState("visible", true);
        if (!this.config.range) {
            this.config.range = {};
            this.config.range.min = this.config.dataMin;
            this.config.range.max = this.config.dataMax;
        }
        return {
            max: max,
            min: min
        };
    };
    return MapGroup;
}(_componentInterface.ComponentInterface);
var _default = MapGroup;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/core/src/component-interface":"flMoh","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/dependency-manager":"8dbFz","../_internal/map-entities.animation":"5c5fZ"}],"1kHbM":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _colorrange = _interopRequireDefault(require("@fusioncharts/core/src/color-utils/colorrange"));
function _createColorRangeManager(chart) {
    var manager = chart.getChildren("colorManager");
    if (!chart.getFromEnv("dataSource").colorrange) {
        manager && (manager[0].config.legendItemIds = []);
        chart.deleteFromEnv("colorManager");
        return;
    }
    if (manager) {
        chart.addToEnv("colorManager", manager[0]);
        manager[0].configure();
        return;
    }
    manager = new _colorrange.default;
    chart.attachChild(manager, "colorManager");
    chart.addToEnv("colorManager", manager);
    manager.configure();
}
function _default(chart) {
    _createColorRangeManager(chart);
}

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@fusioncharts/core/src/color-utils/colorrange":"aZnwm"}],"aZnwm":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _componentInterface = require("../component-interface");
var _colorBucket = _interopRequireDefault(require("./color-bucket"));
var _gradientColorRange = _interopRequireDefault(require("./gradient-color-range"));
var _lib = require("../lib");
var GRADIENT = "gradient", ICON = "icon", NONE = "none";
function getOppositeColor(code) {
    return (0, _lib.getLightColor)(code, 1);
}
function getValidHexColor(code) {
    var color = code || DEF_COLOR;
    return (0, _lib.getValidColor)(color) || DEF_COLOR;
}
var TRACKER_FILL = "rgba(192,192,192," + (_lib.isIE ? .002 : 1e-6) + ")", UNDEF, PERCENT_STR = "%", DEF_COLOR = "#000000", legendManager = function() {
    var chart, defaultConf = {};
    defaultConf.legendCarpetConf = {
        spreadFactor: .85,
        allowDrag: false,
        captionAlignment: "center",
        padding: {
            v: 3,
            h: 3
        },
        style: {
            fill: "#e4d9c1",
            stroke: "#c4b89d"
        }
    };
    defaultConf.legendCaptionConf = {
        spreadFactor: .2,
        padding: {
            v: 2,
            h: 2
        },
        style: {
            fill: "#786B50",
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: "bold",
            fontStyle: "normal"
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.legendBodyConf = {
        spreadFactor: .8,
        padding: {
            v: 2,
            h: 2
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.legendAxisConf = {
        legendAxisHeight: 11,
        spreadFactor: .4,
        padding: {
            v: 1,
            h: 1
        },
        style: {
            stroke: "none",
            "stroke-opacity": 0,
            "stroke-width": 1
        },
        line: {
            grooveLength: 3,
            offset: 8,
            style: {
                stroke: "rgba(255, 255, 255, 0.65)",
                "stroke-width": 1.5
            }
        },
        shadow: {
            style: {
                stroke: "none",
                fill: (0, _lib.toRaphaelColor)({
                    FCcolor: {
                        alpha: "25,0,0",
                        angle: 360,
                        color: "000000,FFFFFF,FFFFFF",
                        ratio: "0,30,40"
                    }
                })
            }
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.sliderGroupConf = {
        showTooltip: 1,
        outerCircle: {
            rFactor: 1.4,
            style: {
                fill: TRACKER_FILL,
                stroke: "#757575",
                "stroke-width": 3
            }
        },
        innerCircle: {
            rFactor: .65,
            style: {
                fill: TRACKER_FILL,
                stroke: "#FFFFFF"
            }
        }
    };
    defaultConf.axisTextItemConf = {
        spreadFactor: .3,
        padding: {
            v: 1,
            h: 1
        },
        style: {
            fill: "#786B50",
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: "normal",
            fontStyle: "normal"
        }
    };
    function normalizePreprocessedData(confArr) {
        var numberFormatter = chart.getFromEnv("number-formatter"), index, length, rawVal;
        for(index = 0, length = confArr.length; index < length; index++){
            rawVal = confArr[index].maxvalue;
            if (!rawVal) continue;
            confArr[index].maxvalue = numberFormatter.getCleanValue(rawVal);
        }
    }
    return {
        init: function init(options) {
            chart = options.chart;
        },
        legacyDataParser: function legacyDataParser(data, _extremes) {
            var colormanagerConf = {}, numberFormatter = chart.getFromEnv("number-formatter"), dataSource = chart.getFromEnv("dataSource"), mapData = dataSource.data, colorConfArr, colorConf, startColor, endColor, index, validColor, length, colorRange, value, dispValue, mapByPercent, isMaxValPresent, extremes = _extremes || {};
            if (!data) return false;
            if (chart.defaultDatasetType === "maps" && (extremes.min === UNDEF || extremes.max === UNDEF)) {
                extremes = {
                    min: Infinity,
                    max: -Infinity
                };
                mapData && mapData.forEach(function(dataObj) {
                    extremes.min = Math.min(extremes.min, (0, _lib.pluckNumber)(dataObj.value, extremes.min));
                    extremes.max = Math.max(extremes.max, (0, _lib.pluckNumber)(dataObj.value, extremes.min));
                });
            } else if (chart.getName() === "HeatMap" && (extremes.min === UNDEF || extremes.max === UNDEF)) {
                extremes = {
                    min: Infinity,
                    max: -Infinity
                };
                dataSource.dataset.forEach(function(dataset) {
                    dataset.data && dataset.data.forEach(function(dataObj) {
                        extremes.min = Math.min(extremes.min, (0, _lib.pluckNumber)(dataObj.value, extremes.min));
                        extremes.max = Math.max(extremes.max, (0, _lib.pluckNumber)(dataObj.value, extremes.max));
                    });
                });
            }
            colormanagerConf.mapByPercent = mapByPercent = !!(0, _lib.pluckNumber)(data.mapbypercent, 0);
            colorConfArr = data.color || [];
            if (data.minvalue === UNDEF) data.minvalue = extremes.min !== UNDEF ? mapByPercent ? 0 : extremes.min : 0;
            if (data.maxvalue === UNDEF) data.maxvalue = extremes.max !== UNDEF ? mapByPercent ? 100 : extremes.max : 100;
            if (data.maxvalue === data.minvalue || extremes.min === Infinity || extremes.max === -Infinity) {
                data.minvalue = 0;
                data.maxvalue = 100;
            }
            isMaxValPresent = false;
            for(index = 0, length = colorConfArr.length; index < length; index++)if (colorConfArr[index].maxvalue) {
                isMaxValPresent = true;
                break;
            }
            if (!isMaxValPresent) colorConfArr = [];
            startColor = data.code;
            colorRange = colormanagerConf.colorRange = [];
            colormanagerConf.gradient = !!(0, _lib.pluckNumber)(data.gradient, 1);
            if (!colorConfArr.length) {
                if (startColor) {
                    endColor = getValidHexColor(startColor);
                    startColor = getValidHexColor();
                } else {
                    startColor = getValidHexColor();
                    endColor = getOppositeColor(startColor);
                }
                colorConfArr.push({
                    code: endColor,
                    maxvalue: data.maxvalue,
                    label: UNDEF
                });
            } else startColor = getValidHexColor(startColor);
            normalizePreprocessedData(colorConfArr);
            colorConfArr = colorConfArr.sort(function _colorConfComparator(m, n) {
                return m.maxvalue - n.maxvalue;
            });
            value = dispValue = data.minvalue && numberFormatter.getCleanValue(data.minvalue);
            dispValue = (value !== UNDEF || value !== null) && (mapByPercent ? value + PERCENT_STR : numberFormatter.legendValue(value));
            colorRange.push({
                code: (0, _lib.dehashify)(startColor),
                value: value,
                displayValue: dispValue,
                label: data.startlabel
            });
            for(index = 0, length = colorConfArr.length; index < length; index++){
                colorConf = colorConfArr[index];
                validColor = getValidHexColor(colorConf.code || colorConf.color);
                value = dispValue = colorConf.maxvalue;
                if (isNaN(parseInt(value, 10))) continue;
                dispValue = (value !== UNDEF || value !== null) && (mapByPercent ? value + PERCENT_STR : numberFormatter.legendValue(value));
                colorRange.push({
                    code: (0, _lib.dehashify)(validColor),
                    value: value,
                    displayValue: dispValue,
                    label: colorConf.label || colorConf.displayvalue
                });
            }
            colorRange[colorRange.length - 1].label = data.endlabel || colorConf.label;
            return colormanagerConf;
        },
        getDefaultConf: function getDefaultConf(key) {
            return defaultConf[key];
        }
    };
}();
var ColorRange = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(ColorRange, _ComponentInterface);
    function ColorRange() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        _this.datasource = {};
        _this.config.legendItemIds = [];
        return _this;
    }
    var _proto = ColorRange.prototype;
    _proto.configure = function configure() {
        var colorManager = this, chart = this.getFromEnv("chart"), colorrange, legendType, mapByCategory = this.getFromEnv("dataSource").chart.mapbycategory, nData, showLegend = chart.config.showLegend, colorRangeInstance = chart.getChildren("colorRange") && chart.getChildren("colorRange")[0];
        chart.addToEnv("colorManager", colorManager);
        colorManager.datasource = chart.getFromEnv("dataSource");
        colorrange = colorManager.datasource.colorrange;
        colorRangeInstance && colorRangeInstance.remove({
            instant: true
        });
        if (!showLegend) colorManager.config.legendItemIds = [];
        if (chart.defaultDatasetType === "maps") {
            if (colorrange.gradient && Number(colorrange.gradient)) legendType = GRADIENT;
            else if (colorrange.color) legendType = ICON;
            else legendType = NONE;
        } else if (chart.getName() === "TreeMap") legendType = GRADIENT;
        else if (colorrange.gradient && colorrange.gradient !== "0" && !Number(mapByCategory)) legendType = GRADIENT;
        else legendType = ICON;
        switch(legendType){
            case GRADIENT:
                legendManager.init({
                    chart: chart
                });
                nData = legendManager.legacyDataParser(colorrange);
                (0, _lib.componentFactory)(chart, _gradientColorRange.default, "colorRange", 1, [
                    nData
                ]);
                colorRangeInstance = chart.getChildren("colorRange")[0];
                chart.addToEnv("colorRange", colorRangeInstance);
                if (!nData) colorRangeInstance._dontPlot = true;
                colorManager.config.legendItemIds = [];
                colorManager._configureGradientLegend(colorRangeInstance);
                break;
            case "icon":
                (0, _lib.componentFactory)(chart, _colorBucket.default, "colorRange", 1, [
                    {
                        colorRange: colorrange,
                        sortLegend: 0,
                        mapByCategory: (0, _lib.pluckNumber)(mapByCategory, 0),
                        defaultColor: "cccccc",
                        numberFormatter: chart.getFromEnv("number-formatter")
                    }
                ]);
                chart.addToEnv("colorRange", chart.getChildren("colorRange")[0]);
                showLegend && colorManager._addLegendItems();
                break;
            case "none":
                chart.deleteFromEnv("colorManager");
                colorManager.config.legendItemIds = [];
        }
    };
    _proto._configureGradientLegend = function _configureGradientLegend(colorRangeInstance) {
        var colorManager = this, gradientLegend = colorManager.getFromEnv("chart").getFromEnv("gLegend");
        if (!gradientLegend) return;
        gradientLegend.setColorRange(colorRangeInstance);
        colorManager.addExtEventListener("rangeUpdated", function(e, d) {
            colorManager.fireEvent("legendUpdate", {
                "original-event": e,
                maxMinArray: d,
                component: "gradientlegend"
            });
        }, gradientLegend);
    };
    _proto._addLegendItems = function _addLegendItems() {
        var colorManager = this, config = colorManager.config, chart = colorManager.getFromEnv("chart"), legend = chart.getChildren("legend")[0], colorMap = chart.getFromEnv("colorRange").colorArr, fillColor, lightColor, len = colorMap.length, legendItem, i, lconfig;
        for(i = 0; i < len; i++){
            lconfig = {
                label: (0, _lib.pluck)(colorMap[i].label, colorMap[i].displayvalue),
                datasetObj: colorMap[i],
                index: i
            };
            lightColor = (0, _lib.getLightColor)(colorMap[i].code, 40);
            fillColor = {
                FCcolor: {
                    color: colorMap[i].code + "," + colorMap[i].code + "," + lightColor,
                    ratio: "0,70,30",
                    angle: 270,
                    alpha: "100,100,100"
                }
            };
            legendItem = legend.getItem(config.legendItemIds[i]);
            if (!legendItem) {
                config.legendItemIds.push(legend.createItem(colorManager));
                legendItem = legend.getItem(config.legendItemIds[i]);
                legendItem.addEventListener("fc-click", legendItem.itemClickFn);
            }
            legendItem.removeLegendState("hidden");
            colorMap[i].legendItemId = legendItem && legendItem.getId();
            legendItem.configure(lconfig);
            legendItem.setStateCosmetics("default", {
                symbol: {
                    fill: (0, _lib.toRaphaelColor)(fillColor),
                    rawFillColor: colorMap[i].code
                }
            });
        }
        for(i = len; i < config.legendItemIds.length; i++)legend.disposeItem(config.legendItemIds[i]);
        config.legendItemIds.splice(len);
    };
    _proto.legendInteractivity = function legendInteractivity(legendItem) {
        var colorManager = this, colorObj = colorManager.getFromEnv("colorRange").colorArr[legendItem.config.index];
        colorManager.fireEvent("legendUpdate", {
            legendItem: legendItem,
            colorObj: colorObj,
            component: "legend"
        });
    };
    _proto.getColor = function getColor(value) {
        var colorManager = this;
        return !Number(colorManager.datasource.chart.mapbycategory) && Number(colorManager.datasource.colorrange.gradient) ? {
            code: colorManager.getColorByValue(value),
            label: colorManager.getLabelByValue(value)
        } : colorManager.getColorObj(value);
    };
    _proto.getValueRatio = function getValueRatio() {
        return this.getFromEnv("colorRange").getValueRatio();
    };
    _proto.getCumulativeValueRatio = function getCumulativeValueRatio() {
        return this.getFromEnv("colorRange").getCumulativeValueRatio();
    };
    _proto.getBoxFill = function getBoxFill(isVertical) {
        return this.getFromEnv("colorRange").getBoxFill(isVertical);
    };
    _proto.getColorByValue = function getColorByValue(value) {
        return this.getFromEnv("colorRange").getColorByValue(value);
    };
    _proto.getColorObj = function getColorObj(value) {
        return this.getFromEnv("colorRange").getColorObj(value);
    };
    _proto.getLabelByValue = function getLabelByValue(value) {
        return this.getFromEnv("colorRange").getLabelByValue(value);
    };
    return ColorRange;
}(_componentInterface.ComponentInterface);
var _default = ColorRange;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","../component-interface":"flMoh","./color-bucket":"9aWMe","./gradient-color-range":"cJiUd","../lib":"gGvaa"}],"9aWMe":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _lib = require("../lib");
var _componentInterface = require("../component-interface");
var colorComparator = function colorComparator(ob1, ob2) {
    return +ob1.minvalue === +ob2.minvalue ? ob1.maxvalue - ob2.maxvalue : ob1.minvalue - ob2.minvalue;
};
var getTransitColor = function getTransitColor(colorArr1, colorArr2, transitOffset) {
    var R1 = colorArr1[0], G1 = colorArr1[1], B1 = colorArr1[2], R = R1 + (colorArr2[0] - R1) * transitOffset, G = G1 + (colorArr2[1] - G1) * transitOffset, B = B1 + (colorArr2[2] - B1) * transitOffset;
    return {
        hex: (_lib.COLOR_BLACK + (R << 16 | G << 8 | B).toString(16)).slice(-6),
        rgb: [
            R,
            G,
            B
        ]
    };
}, UNDEF;
var ColorBucket = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(ColorBucket, _ComponentInterface);
    function ColorBucket() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        var colorBucket = (0, _assertThisInitialized2.default)(_this);
        colorBucket.mapByCategory = false;
        colorBucket.colorArr = [];
        colorBucket.noValidRange = true;
        colorBucket.sortLegend = false;
        return _this;
    }
    var _proto = ColorBucket.prototype;
    _proto.__setDefaultConfig = function __setDefaultConfig() {
        _ComponentInterface.prototype.__setDefaultConfig.call(this);
        this.config.defaultObj = {
            code: "CCCCCC",
            alpha: "100"
        };
    };
    _proto.getType = function getType() {
        return "colorComponent";
    };
    _proto.getName = function getName() {
        return "colorBucket";
    };
    _proto.configure = function configure(options) {
        if (!options) return;
        var colorBucket = this, mapByCategory = colorBucket.mapByCategory, numberFormatter = options.numberFormatter, colorRange = options.colorRange || {}, color = (0, _lib.extend2)([], colorRange.color), chart = this.getLinkedParent(), paletteIndex = Math.min(Math.max((0, _lib.pluckNumber)(colorBucket.getFromEnv("dataSource").chart.palette, 0) - 1, 0), 4), defaultPaletteOptions = chart.defaultPaletteOptions && chart.defaultPaletteOptions.paletteColors[paletteIndex], upperLimit = (0, _lib.pluckNumber)(numberFormatter.getCleanValue(colorRange.maxvalue), Infinity), lowerLimit = (0, _lib.pluckNumber)(numberFormatter.getCleanValue(colorRange.minvalue), -Infinity), colorArr = colorBucket.colorArr, colorCount, i, code, alpha, borderalpha, bordercolor, colorObj, tempvalue, maxValue, minValue, colorLabel;
        if (options.mapByCategory !== UNDEF) mapByCategory = colorBucket.mapByCategory = !!Number(options.mapByCategory);
        if (!mapByCategory) color = color.filter(function(obj) {
            return obj.minvalue || obj.maxvalue;
        });
        else color = color.filter(function(obj) {
            return obj.code || obj.color;
        });
        color.forEach(function(obj) {
            if (obj.minvalue && obj.maxvalue && +obj.maxvalue < +obj.minvalue) {
                tempvalue = obj.maxvalue;
                obj.maxvalue = obj.minvalue;
                obj.minvalue = tempvalue;
            }
            if (!obj.minvalue) {
                obj.minvalue = minValue = lowerLimit;
                maxValue = numberFormatter.getCleanValue(obj.maxvalue);
                obj.rangeLabel = minValue === -Infinity ? "<" + numberFormatter.dataLabels(maxValue) : numberFormatter.dataLabels(minValue) + "-" + numberFormatter.dataLabels(maxValue);
            } else if (!obj.maxvalue) {
                minValue = numberFormatter.getCleanValue(obj.minvalue);
                obj.maxvalue = maxValue = upperLimit;
                obj.rangeLabel = maxValue === Infinity ? ">" + numberFormatter.dataLabels(minValue) : numberFormatter.dataLabels(minValue) + "-" + numberFormatter.dataLabels(maxValue);
            } else {
                minValue = numberFormatter.getCleanValue(obj.minvalue);
                maxValue = numberFormatter.getCleanValue(obj.maxvalue);
                obj.rangeLabel = numberFormatter.dataLabels(minValue) + "-" + numberFormatter.dataLabels(maxValue);
            }
        });
        color.sort(colorComparator);
        if (color && (colorCount = color.length)) {
            colorArr.length = 0;
            for(i = 0; i < colorCount; i += 1){
                colorObj = color[i];
                code = (0, _lib.pluck)(colorObj.color, colorObj.code, defaultPaletteOptions && defaultPaletteOptions[i]);
                alpha = (0, _lib.pluck)(colorObj.alpha);
                bordercolor = (0, _lib.pluck)(colorObj.bordercolor);
                borderalpha = (0, _lib.pluck)(colorObj.borderalpha, 100);
                maxValue = (0, _lib.pluckNumber)(colorObj.maxvalue);
                minValue = (0, _lib.pluckNumber)(colorObj.minvalue);
                colorLabel = (0, _lib.pluck)(colorObj.label, colorObj.displayvalue, colorObj.rangeLabel);
                if (code && maxValue >= minValue || mapByCategory && colorLabel) colorArr.push({
                    code: code,
                    alpha: alpha || "100",
                    oriAlpha: alpha,
                    maxvalue: maxValue,
                    minvalue: minValue,
                    label: (0, _lib.parseUnsafeString)(colorLabel),
                    labelId: colorLabel.toLowerCase(),
                    bordercolor: bordercolor,
                    borderAlpha: borderalpha,
                    name: colorObj.name,
                    tllabelfont: colorObj.tllabelfont,
                    tllabelfontsize: colorObj.tllabelfontsize,
                    tllabelfontcolor: colorObj.tllabelfontcolor,
                    trlabelfont: colorObj.trlabelfont,
                    trlabelfontsize: colorObj.trlabelfontsize,
                    trlabelfontcolor: colorObj.trlabelfontcolor,
                    bllabelfont: colorObj.bllabelfont,
                    bllabelfontsize: colorObj.bllabelfontsize,
                    bllabelfontcolor: colorObj.bllabelfontcolor,
                    brlabelfont: colorObj.brlabelfont,
                    brlabelfontsize: colorObj.brlabelfontsize,
                    brlabelfontcolor: colorObj.brlabelfontcolor
                });
            }
            colorBucket.sortedColorArr = colorBucket.colorArr.slice(0);
        } else {
            colorBucket.noValidRange = true;
            colorBucket.colorArr = [];
            colorBucket.sortedColorArr = [];
        }
    };
    _proto.getColorObj = function getColorObj(_value) {
        if (_value === UNDEF) return {
            outOfRange: true
        };
        var colorBucket = this, maxContainingRange, colorArr = colorBucket.sortedColorArr, i = colorBucket.gradient ? 1 : 0, colorObj = colorArr[i], updatedColorObj, transitOffset, value = _value;
        if (colorBucket.mapByCategory) {
            value = (0, _lib.parseUnsafeString)(value).toLowerCase() || value.toString().toLowerCase();
            while(colorObj){
                if (colorObj.labelId === value || colorObj.maxvalue >= value && colorObj.minvalue <= value) return {
                    code: colorObj.code,
                    alpha: colorObj.alpha || "100",
                    oriAlpha: colorObj.oriAlpha,
                    seriesIndex: i,
                    legendItemId: colorObj.legendItemId,
                    tlLabelFont: colorObj.tllabelfont,
                    tlLabelFontSize: colorObj.tllabelfontsize,
                    tlLabelFontColor: colorObj.tllabelfontcolor,
                    trLabelFont: colorObj.trlabelfont,
                    trLabelFontSize: colorObj.trlabelfontsize,
                    trLabelFontColor: colorObj.trlabelfontcolor,
                    blLabelFont: colorObj.bllabelfont,
                    blLabelFontSize: colorObj.bllabelfontsize,
                    blLabelFontColor: colorObj.bllabelfontcolor,
                    brLabelFont: colorObj.brlabelfont,
                    brLabelFontSize: colorObj.brlabelfontsize,
                    brLabelFontColor: colorObj.brlabelfontcolor
                };
                i += 1;
                colorObj = colorArr[i];
            }
            return {
                outOfRange: true
            };
        } else if (colorBucket.gradient) {
            if (colorBucket.scaleMin <= value && colorBucket.scaleMax >= value) {
                while(colorObj && colorObj.maxvalue < value){
                    i += 1;
                    colorObj = colorArr[i];
                }
                transitOffset = (value - colorObj.minvalue) / colorObj.range;
                return {
                    code: getTransitColor(colorArr[i - 1].codeRGB, colorObj.codeRGB, transitOffset).hex
                };
            }
            return {
                outOfRange: true
            };
        }
        while(colorObj){
            if (value < colorObj.minvalue && !maxContainingRange) {
                if (i === 0) updatedColorObj = {
                    code: colorObj.code,
                    alpha: colorObj.alpha || "100",
                    oriAlpha: colorObj.oriAlpha,
                    seriesIndex: i,
                    name: colorObj.name,
                    label: colorObj.label,
                    outOfRange: true,
                    bordercolor: colorObj.bordercolor,
                    borderalpha: colorObj.borderAlpha
                };
                else updatedColorObj = {
                    code: colorArr[i - 1].code,
                    alpha: colorArr[i - 1].alpha || "100",
                    oriAlpha: colorArr[i - 1].oriAlpha,
                    seriesIndex: i,
                    name: colorArr[i - 1].name,
                    label: colorArr[i - 1].label,
                    outOfRange: true,
                    bordercolor: colorArr[i - 1].bordercolor,
                    borderalpha: colorArr[i - 1].borderAlpha
                };
            }
            if (value > colorObj.maxvalue && i === colorArr.length - 1) updatedColorObj = {
                code: colorObj.code,
                alpha: colorObj.alpha || "100",
                oriAlpha: colorObj.oriAlpha,
                seriesIndex: i,
                name: colorObj.name,
                label: colorObj.label,
                outOfRange: true,
                bordercolor: colorObj.bordercolor,
                borderalpha: colorObj.borderAlpha
            };
            if (colorObj.maxvalue > value && colorObj.minvalue <= value) updatedColorObj = {
                code: colorObj.code,
                alpha: colorObj.alpha || "100",
                oriAlpha: colorObj.oriAlpha,
                seriesIndex: i,
                name: colorObj.name,
                label: colorObj.label,
                bordercolor: colorObj.bordercolor,
                borderalpha: colorObj.borderAlpha
            };
            else if (value === colorObj.maxvalue) maxContainingRange = {
                code: colorObj.code,
                alpha: colorObj.alpha || "100",
                oriAlpha: colorObj.oriAlpha,
                seriesIndex: i,
                name: colorObj.name,
                label: colorObj.label,
                bordercolor: colorObj.bordercolor,
                borderalpha: colorObj.borderAlpha,
                tlLabelFont: colorObj.tllabelfont,
                tlLabelFontSize: colorObj.tllabelfontsize,
                tlLabelFontColor: colorObj.tllabelfontcolor,
                trLabelFont: colorObj.trlabelfont,
                trLabelFontSize: colorObj.trlabelfontsize,
                trLabelFontColor: colorObj.trlabelfontcolor,
                blLabelFont: colorObj.bllabelfont,
                blLabelFontSize: colorObj.bllabelfontsize,
                blLabelFontColor: colorObj.bllabelfontcolor,
                brLabelFont: colorObj.brlabelfont,
                brLabelFontSize: colorObj.brlabelfontsize,
                brLabelFontColor: colorObj.brlabelfontcolor
            };
            if (i === colorArr.length - 1 && maxContainingRange) return maxContainingRange;
            if (updatedColorObj) {
                updatedColorObj.tlLabelFont = colorObj.tllabelfont;
                updatedColorObj.tlLabelFontSize = colorObj.tllabelfontsize;
                updatedColorObj.tlLabelFontColor = colorObj.tllabelfontcolor;
                updatedColorObj.trLabelFont = colorObj.trlabelfont;
                updatedColorObj.trLabelFontSize = colorObj.trlabelfontsize;
                updatedColorObj.trLabelFontColor = colorObj.trlabelfontcolor;
                updatedColorObj.blLabelFont = colorObj.bllabelfont;
                updatedColorObj.blLabelFontSize = colorObj.bllabelfontsize;
                updatedColorObj.blLabelFontColor = colorObj.bllabelfontcolor;
                updatedColorObj.brLabelFont = colorObj.brlabelfont;
                updatedColorObj.brLabelFontSize = colorObj.brlabelfontsize;
                updatedColorObj.brLabelFontColor = colorObj.brlabelfontcolor;
                return updatedColorObj;
            }
            i += 1;
            colorObj = colorArr[i];
        }
        if (!colorArr.length) return {
            outOfRange: true
        };
    };
    _proto.getColorRangeArr = function getColorRangeArr(_minValue, _maxValue) {
        var temp, i, l, minColorObj, lastMaxValue, maxColorObj, returnArr = [], colorObj, lastColorObj, minValue = _minValue, maxValue = _maxValue;
        if (!this.defaultAsigned) {
            if (minValue > maxValue) {
                temp = minValue;
                minValue = maxValue;
                maxValue = temp;
            }
            if (minValue < maxValue) {
                minColorObj = this.getColorObj(minValue);
                maxColorObj = this.getColorObj(maxValue);
                if (minColorObj && maxColorObj) {
                    lastMaxValue = minValue;
                    i = minColorObj.seriesIndex;
                    l = maxColorObj.seriesIndex;
                    for(; i <= l; i += 1){
                        colorObj = (0, _lib.extend2)({}, this.colorArr[i]);
                        if (colorObj.minvalue !== lastMaxValue) colorObj.minvalue = lastMaxValue;
                        returnArr.push(colorObj);
                        lastColorObj = colorObj;
                        lastMaxValue = colorObj.maxvalue;
                    }
                    lastColorObj && (lastColorObj.maxvalue = maxValue);
                }
            }
        }
        return returnArr;
    };
    return ColorBucket;
}(_componentInterface.ComponentInterface);
var _default = ColorBucket;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inheritsLoose":"bfCya","../lib":"gGvaa","../component-interface":"flMoh"}],"cJiUd":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _componentInterface = require("../component-interface");
var _lib = require("../lib");
var COMMA_STR = ",", getColorBetween = function getColorBetween(range1, range2, value) {
    var value1 = range1.value, rgb1 = (0, _lib.HEXtoRGB)(range1.code), rgb2 = (0, _lib.HEXtoRGB)(range2.code), diff;
    diff = range2.value - value1;
    return (0, _lib.RGBtoHex)([
        Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) / diff * (value - value1)),
        Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) / diff * (value - value1)),
        Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) / diff * (value - value1))
    ]);
};
var GradientColorRange = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(GradientColorRange, _ComponentInterface);
    function GradientColorRange() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        _this.colorRange = {};
        _this.valueRatio = {};
        _this.data = {};
        _this.mapByPercent = _lib.UNDEF;
        return _this;
    }
    var _proto = GradientColorRange.prototype;
    _proto.getType = function getType() {
        return "colorComponent";
    };
    _proto.getName = function getName() {
        return "gradientColorRange";
    };
    _proto.configure = function configure(data) {
        if (!data) return;
        var gradientColorrange = this, index, length, range;
        gradientColorrange.data = data;
        gradientColorrange.appender = _lib.BLANKSTRING;
        range = gradientColorrange.colorRange = data.colorRange.sort(function _colorRangeCompartor(m, n) {
            return m.value - n.value;
        });
        gradientColorrange.valueRatio = _lib.UNDEF;
        gradientColorrange.values = [];
        for(index = 0, length = range.length; index < length; index++)gradientColorrange.values.push(range[index].value);
    };
    _proto.getValueRatio = function getValueRatio() {
        var colorRange = this.colorRange, currentRange, index, length = colorRange.length, ratio = this.valueRatio, maxValue = colorRange[length - 1].value, minValue = colorRange[0].value, range = maxValue - minValue, itemValuePercent, lastValue = 0;
        if (ratio) return ratio;
        ratio = this.valueRatio = [];
        for(index = 0; index < length; index++){
            currentRange = colorRange[index];
            itemValuePercent = (currentRange.value - minValue) / range;
            ratio.push((itemValuePercent - lastValue) * 100);
            lastValue = itemValuePercent;
        }
        return ratio;
    };
    _proto.getCumulativeValueRatio = function getCumulativeValueRatio() {
        var colorRange = this.colorRange, currentRange, index, length = colorRange.length, firstValue = colorRange[0].value, lastValue = colorRange[length - 1].value, ratio = [];
        for(index = 0; index < length; index++){
            currentRange = colorRange[index];
            ratio.push((currentRange.value - firstValue) / (lastValue - firstValue) * 100);
        }
        return ratio;
    };
    _proto.getBoxFill = function getBoxFill(isVertical) {
        var colorRange = this.colorRange, currentRange, index, length = colorRange.length, color = [], angle;
        angle = isVertical ? 90 : 0;
        for(index = 0; index < length; index++){
            currentRange = colorRange[index];
            color.push(currentRange.code);
        }
        return (0, _lib.toRaphaelColor)({
            FCcolor: {
                alpha: "100,100,100",
                angle: angle,
                color: color.join(COMMA_STR),
                ratio: this.getValueRatio().join(COMMA_STR)
            }
        });
    };
    _proto.getColorByValue = function getColorByValue(nVal) {
        var valueArr = this.values, colorRange = this.colorRange, length, index, rangeOutSideColor, color;
        if (nVal === _lib.UNDEF || nVal === null) return;
        for(index = 0, length = valueArr.length; index < length; index++){
            if (nVal === valueArr[index]) {
                color = colorRange[index].code;
                break;
            } else if (!index && nVal < valueArr[index]) {
                rangeOutSideColor = true;
                break;
            } else if (index === length - 1 && nVal > valueArr[index]) {
                rangeOutSideColor = true;
                break;
            } else if (nVal > valueArr[index] && nVal < valueArr[index + 1]) {
                color = getColorBetween(colorRange[index], colorRange[index + 1], nVal);
                break;
            }
        }
        if (rangeOutSideColor) return;
        return color;
    };
    _proto.getLabelByValue = function getLabelByValue(nVal) {
        var valueArr = this.values, colorRange = this.colorRange, length, index, rangeOutSideColor, label;
        if (nVal === _lib.UNDEF || nVal === null) return;
        for(index = 0, length = valueArr.length; index < length; index++){
            if (nVal === valueArr[index]) {
                label = colorRange[index].label;
                break;
            } else if (!index && nVal < valueArr[index]) {
                rangeOutSideColor = true;
                break;
            } else if (index === length - 1 && nVal > valueArr[index]) {
                rangeOutSideColor = true;
                break;
            } else if (nVal > valueArr[index] && nVal < valueArr[index + 1]) {
                label = colorRange[index].label;
                break;
            }
        }
        if (rangeOutSideColor) return;
        return label;
    };
    return GradientColorRange;
}(_componentInterface.ComponentInterface);
var _default = GradientColorRange;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/inheritsLoose":"bfCya","../component-interface":"flMoh","../lib":"gGvaa"}],"bZT6V":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = _default;
var _lib = require("@fusioncharts/core/src/lib");
var _gradient = _interopRequireDefault(require("../../src/_internal/components/legend/gradient"));
var _discrete = _interopRequireDefault(require("../../src/_internal/components/legend/discrete"));
var NONE = "none", GRADIENT = "gradient", ICON = "icon";
function _decideLegendCreation(chart) {
    var colorrange = chart.getFromEnv("dataSource").colorrange, mapbycategory = chart.getFromEnv("dataSource").chart.mapbycategory, isMap = chart.defaultDatasetType === "maps", isTreeMap = chart.getName() === "TreeMap", legendType, legend = chart.getFromEnv("legend"), gLegend = chart.getFromEnv("gLegend");
    if (!colorrange || !chart.config.showLegend) legendType = NONE;
    else if (isMap) {
        if (colorrange.gradient && Number(colorrange.gradient)) legendType = GRADIENT;
        else if (colorrange.color) legendType = ICON;
        else legendType = NONE;
    } else if (isTreeMap) {
        if (colorrange.gradient && colorrange.gradient !== "0") legendType = GRADIENT;
        else legendType = NONE;
    } else if (colorrange.gradient && colorrange.gradient !== "0" && !Number(mapbycategory)) legendType = GRADIENT;
    else legendType = ICON;
    switch(legendType){
        case "gradient":
            chart.deleteFromEnv("legend");
            legend && legend.remove();
            (0, _lib.componentFactory)(chart, _gradient.default, "gLegend", 1);
            gLegend = chart.getChildren("gLegend")[0];
            gLegend.configure();
            chart.addToEnv("gLegend", gLegend);
            break;
        case "icon":
            chart.deleteFromEnv("gLegend");
            gLegend && gLegend.remove();
            (0, _lib.componentFactory)(chart, _discrete.default, "legend", 1, {
                showLegend: true
            });
            legend = chart.getChildren("legend")[0];
            legend.configure();
            chart.addToEnv("legend", legend);
            break;
        case "none":
            chart.deleteFromEnv("gLegend");
            chart.deleteFromEnv("legend");
            gLegend && gLegend.remove();
            legend && legend.remove();
    }
}
function _default(chart) {
    _decideLegendCreation(chart);
}

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@fusioncharts/core/src/lib":"gGvaa","../../src/_internal/components/legend/gradient":"iJYy9","../../src/_internal/components/legend/discrete":"3XJdJ"}],"iJYy9":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _lib = require("@fusioncharts/core/src/lib");
var _componentInterface = require("@fusioncharts/core/src/component-interface");
var UNDEF, compositionKeys = {}, TRACKER_FILL = "rgba(192,192,192," + (_lib.isIE ? .002 : 1e-6) + ")", legendManager, FORMER_SLIDER_INDEX = false, LATER_SLIDER_INDEX = true, PERCENT_STR = "%", COMMA_STR = ",", DEF_COLOR = "#000000", CANVAS_WIDTH = "canvasWidth", CANVAS_LEFT = "canvasLeft", CANVAS_HEIGHT = "canvasHeight", CANVAS_TOP = "canvasTop", VERTICAL = "vertical", ABSOLUTE = "absolute", TOP = "top", BOTTOM = "bottom", LEFT = "left", RIGHT = "right", GL_CARPET = "GL_CARPET", GL_CAPTION = "GL_CAPTION", GL_BODY = "GL_BODY", GL_LABELS = "GL_LABELS", FL_AXIS = "FL_AXIS", GL_SG1 = "GL_SG1", GL_VALUES = "GL_VALUES", FC_GRADIENT_LEGEND = "fc-gradient-legend", hasOwnProp = {}.hasOwnProperty, M = "M", L = "L", gLegendRef;
function merge(src, snk) {
    (function rec(source, sink) {
        var sourceVal, prop;
        for(prop in source){
            if (!hasOwnProp.call(source, prop)) continue;
            sourceVal = source[prop];
            if (sink[prop] === UNDEF) sink[prop] = sourceVal;
            else if (typeof sourceVal === "object" && sourceVal !== null) rec(sourceVal, sink[prop]);
        }
    })(src, snk);
    return snk;
}
function getValidHexColor(code) {
    var color = code || DEF_COLOR;
    return (0, _lib.getValidColor)(color) || DEF_COLOR;
}
function getOppositeColor(code) {
    return (0, _lib.getLightColor)(code, 1);
}
function normalizeFontSizeAppend(obj) {
    var fontSize = obj.fontSize + "", normalizeFontSize;
    if (!fontSize) return obj;
    normalizeFontSize = fontSize.replace(/(\d+)(px)*/, "$1px");
    obj.fontSize = normalizeFontSize;
    return obj;
}
function isInvalid(arg) {
    if (arg === UNDEF || typeof arg === "undefined" || arg === null || isNaN(arg)) return true;
    return false;
}
compositionKeys.CAPTION = "CAPTION";
compositionKeys.LEGEND_BODY = "LEGEND_BODY";
compositionKeys.AXIS_LABEL = "LEGEND_LABEL";
compositionKeys.LEGEND_AXIS = "LEGEND_AXIS";
compositionKeys.RANGE = "RANGE";
compositionKeys.AXIS_VALUE = "AXIS_VALUE";
legendManager = function() {
    var chart, defaultConf = {};
    defaultConf.legendCarpetConf = {
        spreadFactor: .85,
        allowDrag: false,
        captionAlignment: "center",
        padding: {
            v: 3,
            h: 3
        },
        style: {
            fill: "#e4d9c1",
            stroke: "#c4b89d"
        }
    };
    defaultConf.legendCaptionConf = {
        spreadFactor: .2,
        padding: {
            v: 2,
            h: 2
        },
        style: {
            fill: "#786B50",
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: "bold",
            fontStyle: "normal"
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.legendBodyConf = {
        spreadFactor: .8,
        padding: {
            v: 2,
            h: 2
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.legendAxisConf = {
        legendAxisHeight: 11,
        spreadFactor: .4,
        padding: {
            v: 1,
            h: 1
        },
        style: {
            stroke: "none",
            "stroke-opacity": 0,
            "stroke-width": 1
        },
        line: {
            grooveLength: 3,
            offset: 8,
            style: {
                stroke: "rgba(255, 255, 255, 0.65)",
                "stroke-width": 1.5
            }
        },
        shadow: {
            style: {
                stroke: "none",
                fill: (0, _lib.toRaphaelColor)({
                    FCcolor: {
                        alpha: "25,0,0",
                        angle: 360,
                        color: "000000,FFFFFF,FFFFFF",
                        ratio: "0,30,40"
                    }
                })
            }
        },
        bound: {
            style: {
                stroke: "none"
            }
        }
    };
    defaultConf.sliderGroupConf = {
        showTooltip: 1,
        outerCircle: {
            rFactor: 1.4,
            style: {
                fill: TRACKER_FILL,
                stroke: "#757575",
                "stroke-width": 3
            }
        },
        innerCircle: {
            rFactor: .65,
            style: {
                fill: TRACKER_FILL,
                stroke: "#FFFFFF"
            }
        }
    };
    defaultConf.axisTextItemConf = {
        spreadFactor: .3,
        padding: {
            v: 1,
            h: 1
        },
        style: {
            fill: "#786B50",
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: "normal",
            fontStyle: "normal"
        }
    };
    function normalizePreprocessedData(confArr) {
        var numberFormatter = chart.getFromEnv("number-formatter"), index, length, rawVal;
        for(index = 0, length = confArr.length; index < length; index++){
            rawVal = confArr[index].maxvalue;
            if (!rawVal) continue;
            confArr[index].maxvalue = numberFormatter.getCleanValue(rawVal);
        }
    }
    return {
        init: function init(options) {
            chart = options.chart;
        },
        legacyDataParser: function legacyDataParser(data, extremes) {
            var colormanagerConf = {}, numberFormatter = chart.getFromEnv("number-formatter"), colorConfArr, colorConf, startColor, endColor, index, validColor, length, colorRange, value, dispValue, mapByPercent, isMaxValPresent;
            if (!data) return false;
            colormanagerConf.mapByPercent = mapByPercent = !!(0, _lib.pluckNumber)(data.mapbypercent, 0);
            colorConfArr = data.color || [];
            if (data.minvalue === UNDEF) data.minvalue = extremes.min !== UNDEF ? mapByPercent ? 0 : extremes.min : 0;
            if (data.maxvalue === UNDEF) data.maxvalue = extremes.max !== UNDEF ? mapByPercent ? 100 : extremes.max : 100;
            isMaxValPresent = false;
            for(index = 0, length = colorConfArr.length; index < length; index++)if (colorConfArr[index].maxvalue) {
                isMaxValPresent = true;
                break;
            }
            if (!isMaxValPresent) colorConfArr = [];
            startColor = data.code;
            colorRange = colormanagerConf.colorRange = [];
            colormanagerConf.gradient = !!(0, _lib.pluckNumber)(data.gradient, 1);
            if (!colorConfArr.length) {
                if (startColor) {
                    endColor = getValidHexColor(startColor);
                    startColor = getValidHexColor();
                } else {
                    startColor = getValidHexColor();
                    endColor = getOppositeColor(startColor);
                }
                colorConfArr.push({
                    code: endColor,
                    maxvalue: data.maxvalue,
                    label: UNDEF
                });
            } else startColor = getValidHexColor(startColor);
            normalizePreprocessedData(colorConfArr);
            colorConfArr = colorConfArr.sort(function(m, n) {
                return m.maxvalue - n.maxvalue;
            });
            value = dispValue = data.minvalue && numberFormatter.getCleanValue(data.minvalue);
            dispValue = (value !== UNDEF || value !== null) && (mapByPercent ? value + PERCENT_STR : numberFormatter.legendValue(value));
            colorRange.push({
                code: (0, _lib.dehashify)(startColor),
                value: value,
                displayValue: dispValue,
                label: data.startlabel
            });
            for(index = 0, length = colorConfArr.length; index < length; index++){
                colorConf = colorConfArr[index];
                validColor = getValidHexColor(colorConf.code || colorConf.color);
                value = dispValue = colorConf.maxvalue;
                if (isNaN(parseInt(value, 10))) continue;
                dispValue = (value !== UNDEF || value !== null) && (mapByPercent ? value + PERCENT_STR : numberFormatter.legendValue(value));
                colorRange.push({
                    code: (0, _lib.dehashify)(validColor),
                    value: value,
                    displayValue: dispValue,
                    label: (0, _lib.parseUnsafeString)(colorConf.label || colorConf.displayvalue)
                });
            }
            colorRange[colorRange.length - 1].label = (0, _lib.parseUnsafeString)(data.endlabel || colorConf.label);
            return colormanagerConf;
        },
        getDefaultConf: function getDefaultConf(key) {
            return defaultConf[key];
        }
    };
}();
var GLegend = function(_ComponentInterface) {
    (0, _inheritsLoose2.default)(GLegend, _ComponentInterface);
    var _proto = GLegend.prototype;
    _proto.getType = function getType() {
        return "gradientLegend";
    };
    _proto.getName = function getName() {
        return "gLegend";
    };
    function GLegend() {
        var _this;
        _this = _ComponentInterface.call(this) || this;
        gLegendRef = (0, _assertThisInitialized2.default)(_this);
        _this.enabled = false;
        _this.drawOptions = {};
        _this.components = {};
        return _this;
    }
    _proto.setColorRange = function setColorRange(colorRange) {
        var cr = this.drawOptions.colorRange = colorRange;
        cr && cr._preparationGoneWrong && (this._dontPlot = true);
    };
    _proto.configureAttributes = function configureAttributes() {
        var componentAPI = this, chart = componentAPI.getFromEnv("chart"), chartAttrs = componentAPI.getFromEnv("dataSource").chart, conf = componentAPI.conf = {}, outCanvasBaseFont = chartAttrs.outcnvbasefont, outCanvasBaseFontSize = this.computeFontSize(chartAttrs.outcnvbasefontsize), outCanvasBaseFontColor = chartAttrs.outcnvbasefontcolor, labelStyle = chart.config.dataLabelStyle, fColor, fFamily, fSize, fSizeWithUnit, fWeight, cfColor, cfFamily, cfSize, cfSizeWithUnit, cfWeight, axisBorderColor, axisBorderAlpha;
        legendManager.init({
            chart: chart
        });
        componentAPI.data = componentAPI.getFromEnv("dataSource").colorrange;
        if (componentAPI._dontPlot) return;
        componentAPI.drawOptions = {
            smartLabel: componentAPI.getFromEnv("smartLabel"),
            gLegend: componentAPI
        };
        componentAPI._dontPlot = false;
        componentAPI._recalculateLogicalSpace = true;
        conf.caption = (0, _lib.parseUnsafeString)((0, _lib.pluck)(chartAttrs.legendcaption));
        conf.legendPosition = (0, _lib.pluck)(chartAttrs.legendposition, "bottom").toLowerCase();
        conf.legendXPosition = (0, _lib.pluckNumber)(chartAttrs.legendxposition, 0);
        conf.legendYPosition = (0, _lib.pluckNumber)(chartAttrs.legendyposition, 0);
        conf.legendMaxHeight = (0, _lib.pluckNumber)(chartAttrs.legendmaxheight, 0);
        conf.legendMaxWidth = (0, _lib.pluckNumber)(chartAttrs.legendmaxwidth, 0);
        conf.legendVertical = typeof chartAttrs.legendorientation === "string" && chartAttrs.legendorientation.toLowerCase() === VERTICAL;
        conf.showLegend = (0, _lib.pluckNumber)(chartAttrs.showlegend, 1);
        conf.interactiveLegend = (0, _lib.pluckNumber)(chartAttrs.interactivelegend, 1);
        conf.showLegendLabels = (0, _lib.pluckNumber)(chartAttrs.showlegendlabels, 1);
        fColor = chartAttrs.legenditemfontcolor || outCanvasBaseFontColor;
        fFamily = chartAttrs.legenditemfont || outCanvasBaseFont;
        fSize = chartAttrs.legenditemfontsize || outCanvasBaseFontSize;
        fSizeWithUnit = (0, _lib.pluckFontSizeMaintainUnit)(chartAttrs.legenditemfontsize, chartAttrs.outcnvbasefontsize);
        fWeight = (0, _lib.pluckNumber)(chartAttrs.legenditemfontbold, 0);
        cfColor = chartAttrs.legendcaptionfontcolor || outCanvasBaseFontColor;
        cfFamily = chartAttrs.legendcaptionfont || outCanvasBaseFont;
        cfSize = chartAttrs.legendcaptionfontsize || outCanvasBaseFontSize;
        cfSizeWithUnit = (0, _lib.pluckFontSizeMaintainUnit)(chartAttrs.legendcaptionfontsize, chartAttrs.outcnvbasefontsize);
        cfWeight = (0, _lib.pluckNumber)(chartAttrs.legendcaptionfontbold, 1);
        axisBorderColor = chartAttrs.legendaxisbordercolor ? (0, _lib.hashify)((0, _lib.dehashify)(chartAttrs.legendaxisbordercolor)) : UNDEF;
        axisBorderAlpha = axisBorderColor ? (0, _lib.pluckNumber)(chartAttrs.legendaxisborderalpha, 100) / 100 : UNDEF;
        conf.axisTextItemConf = {
            style: {
                fill: fColor ? (0, _lib.convertColor)((0, _lib.pluck)(fColor)) : labelStyle.color,
                fontFamily: fFamily ? (0, _lib.pluck)(fFamily) : labelStyle.fontFamily,
                fontSize: fSize ? (0, _lib.pluckNumber)(fSize) : labelStyle.fontSize.match(/\d+/)[0],
                fontSizeWithUnit: (0, _lib.pluckFontSizeMaintainUnit)(fSizeWithUnit, labelStyle.fontSize.match(/\d+/)[0]),
                fontWeight: fWeight ? "bold" : labelStyle.fontWeight
            }
        };
        conf.legendCaptionConf = {
            style: {
                fill: cfColor ? (0, _lib.convertColor)((0, _lib.pluck)(cfColor)) : labelStyle.color,
                fontFamily: cfFamily ? (0, _lib.pluck)(cfFamily) : labelStyle.fontFamily,
                fontSize: cfSize ? (0, _lib.pluckNumber)(cfSize) : labelStyle.fontSize.match(/\d+/)[0],
                fontSizeWithUnit: (0, _lib.pluckFontSizeMaintainUnit)(cfSizeWithUnit, labelStyle.fontSize.match(/\d+/)[0]),
                fontWeight: cfWeight ? "bold" : labelStyle.fontWeight,
                fontStyle: "normal"
            }
        };
        conf.legendAxisConf = {
            legendAxisHeight: 11,
            style: {
                stroke: axisBorderColor,
                "stroke-opacity": axisBorderAlpha
            },
            line: {
                style: {
                    stroke: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.legendscalelinecolor, "FFF8E9"), (0, _lib.pluckNumber)(chartAttrs.legendscalelinealpha, 100)),
                    "stroke-width": (0, _lib.pluckNumber)(chartAttrs.legendscalelinethickness)
                }
            }
        };
        conf.sliderGroupConf = {
            showTooltip: (0, _lib.pluckNumber)(chartAttrs.showtooltip, 1),
            outerCircle: {
                rFactor: (0, _lib.pluckNumber)(chartAttrs.sliderdiameterfactor),
                style: {
                    stroke: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.legendpointerbordercolor, "757575"), (0, _lib.pluckNumber)(chartAttrs.legendpointerborderalpha, 100))
                }
            },
            innerCircle: {
                rFactor: (0, _lib.pluckNumber)(chartAttrs.sliderholediameterfactor),
                style: {
                    stroke: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.legendpointercolor, "FFFFFF"), (0, _lib.pluckNumber)(chartAttrs.legendpointeralpha, 100))
                }
            }
        };
        conf.legendCarpetConf = {
            spreadFactor: (0, _lib.pluckNumber)(chartAttrs.legendspreadfactor),
            allowDrag: !!(0, _lib.pluckNumber)(chartAttrs.legendallowdrag, 0),
            captionAlignment: (0, _lib.pluck)(chartAttrs.legendcaptionalignment, "center"),
            style: {
                fill: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.legendbgcolor, "e4d9c1"), (0, _lib.pluckNumber)(chartAttrs.legendbgalpha, 100)),
                stroke: (0, _lib.convertColor)((0, _lib.pluck)(chartAttrs.legendbordercolor, "c4b89d"), (0, _lib.pluckNumber)(chartAttrs.legendborderalpha, 100)),
                "stroke-width": (0, _lib.pluckNumber)(chartAttrs.legendborderthickness, 1)
            }
        };
    };
    _proto.postConfigureInit = function postConfigureInit() {
        var componentAPI = this, conf = componentAPI.conf, caption, carpet, axis, sGroup, ovrdConf, ovrdTextConf, body, labels, values, captionConfig, axisConfig, legendPosition = conf.legendPosition ? conf.legendPosition.split("-") : [], bodyConfig;
        componentAPI.elem = {};
        if (conf.interactiveLegend) {
            ovrdConf = merge(legendManager.getDefaultConf("sliderGroupConf"), conf.sliderGroupConf);
            if (this.sGroup) {
                sGroup = componentAPI.elem.sGroup = this.sGroup;
                sGroup.configure(ovrdConf);
                componentAPI.elem.sGroup.gLegend = componentAPI;
            } else {
                this.sGroup = componentAPI.elem.sGroup = sGroup = new SliderGroup(ovrdConf);
                sGroup.configure(ovrdConf);
                componentAPI.elem.sGroup.gLegend = componentAPI;
            }
        } else {
            this.sGroup && this.sGroup.dispose();
            this.sGroup && delete this.sGroup;
        }
        ovrdConf = merge(legendManager.getDefaultConf("legendCarpetConf"), conf.legendCarpetConf);
        ovrdConf.legendPosition = legendPosition[0] === ABSOLUTE && !conf.legendVertical || legendPosition[0] === TOP || legendPosition[0] === BOTTOM ? BOTTOM : RIGHT;
        bodyConfig = legendManager.getDefaultConf("legendBodyConf");
        if (legendPosition[0] === ABSOLUTE && !conf.legendVertical || legendPosition[0] === TOP || legendPosition[0] === BOTTOM) {
            componentAPI.drawOptions.refSideKey = CANVAS_WIDTH;
            componentAPI.drawOptions.refOffsetKey = CANVAS_LEFT;
            ovrdTextConf = merge(legendManager.getDefaultConf("axisTextItemConf"), conf.axisTextItemConf);
            bodyConfig.legendPosition = BOTTOM;
            axisConfig = merge(legendManager.getDefaultConf("legendAxisConf"), conf.legendAxisConf);
            axisConfig.legendPosition = BOTTOM;
            ovrdTextConf.legendPosition = BOTTOM;
        } else {
            componentAPI.drawOptions.refSideKey = CANVAS_HEIGHT;
            componentAPI.drawOptions.refOffsetKey = CANVAS_TOP;
            ovrdTextConf = merge(legendManager.getDefaultConf("axisTextItemConf"), conf.axisTextItemConf);
            bodyConfig.legendPosition = RIGHT;
            axisConfig = merge(legendManager.getDefaultConf("legendAxisConf"), conf.legendAxisConf);
            axisConfig.legendPosition = RIGHT;
            ovrdTextConf.legendPosition = RIGHT;
        }
        if (!Object.keys(this.components).length) {
            this.components.LegendCarpet = new LegendCarpet;
            this.components.LegendBody = new LegendBody;
            this.components.LegendAxis = new LegendAxis;
            this.components.LegendValues = new LegendValues;
            conf.showLegendLabels && (this.components.LegendLabels = new LegendLabels);
        }
        axis = this.components.LegendAxis;
        values = this.components.LegendValues;
        carpet = this.components.LegendCarpet;
        body = this.components.LegendBody;
        conf.showLegendLabels && (labels = this.components.LegendLabels);
        this.components.LegendCarpet.configure(ovrdConf);
        this.components.LegendValues.configure(ovrdTextConf);
        this.components.LegendAxis.configure(axisConfig);
        this.components.LegendBody.configure(componentAPI.drawOptions.colorRange, bodyConfig, ovrdTextConf);
        conf.showLegendLabels && labels.configure(ovrdTextConf);
        if (conf.caption) {
            captionConfig = merge(legendManager.getDefaultConf("legendCaptionConf"), conf.legendCaptionConf);
            if (this.componentCaption && Object.keys(this.componentCaption).length) this.componentCaption.configure(conf.caption, captionConfig);
            else {
                caption = this.componentCaption = new LegendCaption;
                caption.configure(conf.caption, captionConfig);
            }
            carpet.addCompositions(this.componentCaption, compositionKeys.CAPTION);
        } else {
            carpet.removeCompositions(compositionKeys.CAPTION);
            this.componentCaption && this.componentCaption.dispose();
            delete this.componentCaption;
        }
        sGroup && axis.addCompositions(sGroup, compositionKeys.RANGE);
        labels && body.addCompositions(labels, compositionKeys.AXIS_LABEL);
        body.addCompositions(axis, compositionKeys.LEGEND_AXIS);
        body.addCompositions(values, compositionKeys.AXIS_VALUE);
        carpet.addCompositions(body, compositionKeys.LEGEND_BODY);
        componentAPI.elem.gl = new LegendBase(carpet);
    };
    _proto.getValueRange = function getValueRange() {
        var componentAPI = this, rGroup = componentAPI.elem && componentAPI.elem.sGroup, sliders = rGroup.sliders, extremes = rGroup.extremes, minVal, maxVal;
        minVal = sliders["false"].currPos;
        maxVal = extremes[1] - extremes[0] + sliders["true"].currPos;
        return [
            {
                min: rGroup.getValueFormPixel(minVal),
                max: rGroup.getValueFormPixel(maxVal)
            }
        ];
    };
    _proto._dispose = function _dispose() {
        var componentAPI = this;
        componentAPI.elem && componentAPI.elem.gl && componentAPI.elem.gl.dispose();
        componentAPI.elem = {};
        _ComponentInterface.prototype._dispose.call(this);
    };
    _proto.getCalculatedLogicalSpace = function getCalculatedLogicalSpace() {
        return this._logicalArea;
    };
    _proto.setCalculatedLogicalSpace = function setCalculatedLogicalSpace(area) {
        this._logicalArea = area;
    };
    _proto.getLogicalSpace = function getLogicalSpace(maxOtherSide) {
        var componentAPI = this, conf = componentAPI.conf, zeroArea = {
            height: 0,
            width: 0
        }, logicalSpace, drawOptions = componentAPI.drawOptions, refSideKey, chartConfig = componentAPI.getFromEnv("chartConfig"), refOffsetKey, isAbsolute = conf.legendPosition.split("-")[0] === ABSOLUTE, maxHeight, maxWidth;
        if (!componentAPI._recalculateLogicalSpace) {
            refSideKey = drawOptions.refSideKey;
            refOffsetKey = drawOptions.refOffsetKey;
            componentAPI.drawOptions.refSide = chartConfig[refSideKey];
            if (isAbsolute) {
                if (conf.legendMaxHeight <= 0) maxHeight = chartConfig.height * .8;
                else if (conf.legendMaxHeight <= chartConfig.height) maxHeight = conf.legendMaxHeight;
                else maxHeight = chartConfig.height;
                if (conf.legendMaxWidth <= 0) maxWidth = chartConfig.width * .8;
                else if (conf.legendMaxWidth <= chartConfig.width) maxWidth = conf.legendMaxWidth;
                else maxWidth = chartConfig.width;
                if (conf.legendVertical) {
                    componentAPI.drawOptions.refSide = maxHeight;
                    componentAPI.drawOptions.maxOtherSide = maxWidth;
                } else {
                    componentAPI.drawOptions.refSide = maxWidth;
                    componentAPI.drawOptions.maxOtherSide = maxHeight;
                }
            } else {
                componentAPI.drawOptions.refOffset = chartConfig[refOffsetKey];
                componentAPI.drawOptions.maxOtherSide = maxOtherSide || componentAPI.drawOptions.maxOtherSide;
            }
            logicalSpace = componentAPI.elem.gl.getLogicalSpace(componentAPI.drawOptions, true);
            componentAPI.setCalculatedLogicalSpace(logicalSpace);
            return componentAPI.getCalculatedLogicalSpace() || zeroArea;
        }
        if (componentAPI._dontPlot) return zeroArea;
        componentAPI._recalculateLogicalSpace = false;
        componentAPI.postConfigureInit();
        if (!conf.showLegend) return zeroArea;
        refSideKey = drawOptions.refSideKey;
        refOffsetKey = drawOptions.refOffsetKey;
        componentAPI.drawOptions.refSide = chartConfig[refSideKey];
        componentAPI.drawOptions.refOffset = chartConfig[refOffsetKey];
        componentAPI.drawOptions.maxOtherSide = maxOtherSide || componentAPI.drawOptions.maxOtherSide;
        if (componentAPI.elem.gl) {
            logicalSpace = componentAPI.elem.gl.getLogicalSpace(componentAPI.drawOptions, true);
            componentAPI.elem.gl && componentAPI.setCalculatedLogicalSpace(logicalSpace);
        }
        return componentAPI.getCalculatedLogicalSpace();
    };
    _proto.resetLegend = function resetLegend() {
        var componentAPI = this, rGroup;
        rGroup = componentAPI.elem && componentAPI.elem.sGroup;
        if (rGroup) rGroup.reset();
    };
    _proto._calculateTopPosition = function _calculateTopPosition(y) {
        var legend = this, chart = legend.getFromEnv("chart"), chartConfig = chart.config, yPos = y, caption = chart.getChildren("caption") && chart.getChildren("caption")[0], subCaption = chart.getChildren("subCaption") && chart.getChildren("subCaption")[0], toolbar = chart.getChildren("chartMenuBar") && chart.getChildren("chartMenuBar")[0], oriCanvasTop = chartConfig.oriTopSpace;
        if (!chartConfig.toolbarY && toolbar && toolbar.props && toolbar.props.height) {
            if (!(oriCanvasTop > toolbar.props.height + toolbar.props.y)) yPos = toolbar.props.y + toolbar.props.height;
        }
        if (caption && caption.config && caption.config.text && caption.config.text !== _lib.BLANKSTRING && caption.config.height && caption.config.isOnTop === 1) yPos = caption.config.height + caption.config.y + caption.config.captionPadding;
        if (subCaption && subCaption.config && subCaption.config.height && subCaption.config.isOnTop === 1) yPos = subCaption.config.y + subCaption.config.height + (caption && caption.config && caption.config.captionPadding || 0);
        return yPos > y ? yPos : y;
    };
    _proto.allocatePosition = function allocatePosition() {
        var iapi = this.getFromEnv("chart"), config = iapi.config, gradientLegend = this, conf = gradientLegend.conf || {}, legendPosition = conf.legendPosition.split("-"), canvasLeft = config.canvasLeft, canvasTop = config.canvasTop, canvasWidth = config.canvasWidth, canvasHeight = config.canvasHeight, marginTop = config.marginTop, marginBottom = config.marginBottom, marginRight = config.marginRight, marginLeft = config.marginLeft, spaceTakenByGradientLegend, spaceLeft, width, height, xPos, yPos, xLim, yLim;
        conf.axisTextItemConf.style.fontSize = this.computeFontSize(conf.axisTextItemConf.style.fontSizeWithUnit);
        conf.legendCaptionConf.style.fontSize = this.computeFontSize(conf.legendCaptionConf.style.fontSizeWithUnit);
        if (!iapi.config.gLegendEnabled) return;
        spaceTakenByGradientLegend = this.getCalculatedLogicalSpace();
        width = conf.width = spaceTakenByGradientLegend.width;
        height = conf.height = spaceTakenByGradientLegend.height;
        if (legendPosition[0] === ABSOLUTE) {
            xLim = config.width - width;
            yLim = config.height - height;
            xPos = conf.legendXPosition < 0 ? 0 : conf.legendXPosition > xLim ? xLim : conf.legendXPosition;
            yPos = conf.legendYPosition < 0 ? 0 : conf.legendYPosition > yLim ? yLim : conf.legendYPosition;
        } else if (legendPosition[0] === TOP || legendPosition[0] === BOTTOM) {
            spaceLeft = canvasWidth - width;
            if (legendPosition[1] === LEFT) xPos = canvasLeft;
            else if (legendPosition[1] === RIGHT) xPos = canvasLeft + (spaceLeft > 0 ? spaceLeft : 0);
            else xPos = canvasLeft + (spaceLeft < 0 ? 0 : spaceLeft / 2);
            if (legendPosition[0] === TOP) yPos = this._calculateTopPosition(marginTop);
            else yPos = config.height - spaceTakenByGradientLegend.height - marginBottom - (config.actionBarHeight || 0);
        } else {
            spaceLeft = canvasHeight - height;
            if (legendPosition[1] === TOP) yPos = canvasTop;
            else if (legendPosition[1] === BOTTOM) yPos = canvasTop + spaceLeft;
            else yPos = canvasTop + (spaceLeft < 0 ? 0 : spaceLeft / 2);
            if (legendPosition[0] === LEFT) xPos = marginLeft;
            else xPos = config.width - spaceTakenByGradientLegend.width - marginRight;
        }
        conf.xPos = xPos;
        conf.yPos = yPos;
    };
    _proto.draw = function draw() {
        var iapi = this.getFromEnv("chart"), colorRangeObj = iapi.getFromEnv("dataSource").colorrange, gradientLegend = this, conf = gradientLegend.conf || {}, hasGradientLegend = iapi.hasGradientLegend;
        if (!iapi.config.gLegendEnabled) return;
        colorRangeObj && hasGradientLegend && gradientLegend.drawLegendComponent(conf.xPos, conf.yPos, {
            parentGroup: iapi.getContainer("parentgroup"),
            animationManager: iapi.getFromEnv("animationManager")
        });
    };
    _proto.drawLegendComponent = function drawLegendComponent(x, y, options) {
        var componentAPI = this, conf = componentAPI.conf, measurement, node;
        if (componentAPI._dontPlot) return;
        if (!conf.showLegend) {
            componentAPI.enabled = false;
            return;
        }
        componentAPI.drawOptions.animationManager = options.animationManager;
        componentAPI.drawOptions.parentGroup = options.parentGroup;
        componentAPI.drawOptions.x = x;
        componentAPI.drawOptions.y = y;
        componentAPI.drawOptions.maxOtherSide = componentAPI.drawOptions.maxOtherSide || options.maxOtherSide;
        node = componentAPI.elem.gl.draw(componentAPI.drawOptions);
        measurement = node.getBBox();
        conf.xPos = measurement.x;
        conf.yPos = measurement.y;
        conf.height = measurement.height;
        conf.width = measurement.width;
        componentAPI.enabled = true;
    };
    return GLegend;
}(_componentInterface.ComponentInterface);
var LegendBase = function() {
    function LegendBase(carpet) {
        this.carpet = carpet;
    }
    var _proto2 = LegendBase.prototype;
    _proto2.draw = function draw(options) {
        return this.carpet.draw(options);
    };
    _proto2.getLogicalSpace = function getLogicalSpace(options, recalculate) {
        return this.carpet.getLogicalSpace(options, recalculate);
    };
    _proto2.dispose = function dispose() {
        this.carpet && this.carpet.group && this.carpet.group.remove();
    };
    return LegendBase;
}();
var LegendCarpet = function() {
    function LegendCarpet(conf) {
        this.conf = conf;
        this._id = GL_CARPET;
        this.compositionsByCategory = {};
        this.node = UNDEF;
        this.group = UNDEF;
        this._lSpace = UNDEF;
        this.autoRecalculate = false;
        this.groupName = FC_GRADIENT_LEGEND;
        this.moveInstructions = {};
    }
    var _proto3 = LegendCarpet.prototype;
    _proto3.configure = function configure(conf) {
        this.conf = conf;
    };
    _proto3.getName = function getName() {
        return "LegendCarpet";
    };
    _proto3.getType = function getType() {
        return "legend";
    };
    _proto3.addCompositions = function addCompositions(instance, category) {
        this.compositionsByCategory[category] = instance;
    };
    _proto3.removeCompositions = function removeCompositions(category) {
        delete this.compositionsByCategory[category];
    };
    _proto3.getBoundingBox = function getBoundingBox(options) {
        var conf = this.conf, spreadFactor = conf.spreadFactor, refSide = options.refSide, alignment = options.alignment, refOffset = options.refOffset, x = options.x, y = options.y, lWidth, lHeight;
        if (this.conf.legendPosition === "bottom") {
            lWidth = conf.width = refSide * spreadFactor;
            lHeight = options.maxOtherSide;
            if (alignment && (x === UNDEF || x === null)) x = (refOffset + refSide) / 2 - lWidth / 2;
        } else {
            lHeight = conf.height = refSide * spreadFactor;
            lWidth = options.maxOtherSide;
            if (alignment && (y === UNDEF || y === null)) y = (refOffset + refSide) / 2 - lHeight / 2;
        }
        return {
            width: lWidth,
            height: lHeight,
            x: x,
            y: y
        };
    };
    _proto3.getPostCalcDecisionsH = function getPostCalcDecisionsH(bBox, componentsArea) {
        var conf = this.conf, padding = conf.padding, cat, totalHeightTaken = 0;
        this.moveInstructions = {};
        for(cat in componentsArea)totalHeightTaken += componentsArea[cat].height || 0;
        bBox.height = totalHeightTaken + 2 * padding.v;
    };
    _proto3.getLogicalSpace = function getLogicalSpace(options, recalculate) {
        var lSpace = this._lSpace, categoryMap = [
            "CAPTION",
            "LEGEND_BODY"
        ], conf = this.conf, padding = conf.padding, compositionsByCategory = this.compositionsByCategory, composition, bBox, effectivePlotArea, compositionLSPace, compositionHeight = 0, componentsArea = {}, compositionPlotArea, heightNotUsed = 0;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        lSpace = this._lSpace = bBox = this.getBoundingBox(options);
        if (isInvalid(lSpace.x) || isInvalid(lSpace.y) || isInvalid(lSpace.height) || isInvalid(lSpace.width)) this.autoRecalculate = true;
        effectivePlotArea = merge(bBox, {});
        effectivePlotArea.height -= 2 * padding.v;
        effectivePlotArea.width -= 2 * padding.h;
        effectivePlotArea.x += padding.h;
        effectivePlotArea.y += padding.v;
        for(var i = 0; i < categoryMap.length; i++){
            composition = compositionsByCategory[categoryMap[i]];
            if (composition) {
                compositionPlotArea = merge(effectivePlotArea, {});
                compositionPlotArea.y += compositionHeight;
                compositionHeight = effectivePlotArea.height * composition.conf.spreadFactor;
                compositionPlotArea.height = compositionHeight + heightNotUsed;
                compositionLSPace = composition.getLogicalSpace(merge(compositionPlotArea, {}), options, recalculate);
                heightNotUsed = compositionPlotArea.height - compositionLSPace.height;
                componentsArea[categoryMap[i]] = compositionLSPace;
                compositionHeight = compositionLSPace.height;
            }
        }
        this.getPostCalcDecisions(bBox, componentsArea);
        this._lSpace = bBox;
        return bBox;
    };
    _proto3.setupDragging = function setupDragging() {
        var group = this.group, dx = 0, dy = 0, idx = 0, idy = 0;
        group.css({
            cursor: "move"
        });
        group.drag(function(_dx, _dy) {
            dx = _dx;
            dy = _dy;
            group.attr({
                transform: "t" + (idx + dx) + "," + (idy + dy)
            });
        }, function() {
            idx += dx;
            idy += dy;
        }, _lib.stubFN);
    };
    _proto3.draw = function draw(options) {
        var conf = this.conf, ref = this, categoryMap = [
            "CAPTION",
            "LEGEND_BODY"
        ], compositionsByCategory = this.compositionsByCategory, animationManager = options.animationManager, parentGroup = options.parentGroup, group, category, composition, lSpace;
        this.getLogicalSpace(options, this.autoRecalculate);
        lSpace = this._lSpace;
        this.group = group = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: ref.groupName
            },
            component: gLegendRef,
            container: parentGroup,
            label: "carpetGroup"
        });
        this.node = animationManager.setAnimation({
            el: this.node || "rect",
            attr: lSpace,
            css: conf.style,
            component: gLegendRef,
            container: group,
            label: "rect"
        });
        for(var i = 0; i < categoryMap.length; i++){
            composition = compositionsByCategory[categoryMap[i]];
            if (composition) composition.draw(conf.captionAlignment, lSpace, {
                animationManager: animationManager,
                colorRange: options.colorRange,
                numberFormatter: options.numberFormatter,
                parentLayer: group,
                smartLabel: options.smartLabel,
                moveInstructions: this.moveInstructions[category],
                gLegend: options.gLegend
            });
        }
        conf.allowDrag && this.setupDragging();
        return this.node;
    };
    _proto3.getPostCalcDecisions = function getPostCalcDecisions(bBox, componentsArea) {
        return this.conf.legendPosition === "bottom" ? this.getPostCalcDecisionsH(bBox, componentsArea) : this.getPostCalcDecisionsV(bBox, componentsArea);
    };
    _proto3.getPostCalcDecisionsV = function getPostCalcDecisionsV(bBox, componentsArea) {
        var conf = this.conf, padding = conf.padding, maxWidth = Number.NEGATIVE_INFINITY, width, cat, move = this.moveInstructions, diff;
        this.getPostCalcDecisionsH(bBox, componentsArea);
        for(cat in componentsArea){
            width = componentsArea[cat].width;
            maxWidth = maxWidth < width ? width : maxWidth;
        }
        bBox.width = maxWidth + 2 * padding.h;
        for(cat in componentsArea){
            width = componentsArea[cat].width;
            diff = maxWidth - width;
            if (diff) move[cat] = "t" + diff / 2 + ",0";
        }
    };
    return LegendCarpet;
}();
var LegendCaption = function() {
    function LegendCaption(text, conf) {
        this.rawText = text;
        this.conf = conf;
        this._id = GL_CAPTION;
        this.node = UNDEF;
        this.bound = UNDEF;
        this._lSpace = UNDEF;
        this.LegendCaption = {};
        this.LegendCaption.LEFT = {
            x: function x(smartText, boundingBox) {
                return boundingBox.x + smartText.width / 2 + 2;
            }
        };
        this.LegendCaption.RIGHT = {
            x: function x(smartText, boundingBox) {
                return boundingBox.x + boundingBox.width - smartText.width / 2 - 2;
            }
        };
        this.LegendCaption.CENTER = {
            x: function x() {
                var boundingBox = arguments[1];
                return boundingBox.x + boundingBox.width / 2;
            }
        };
    }
    var _proto4 = LegendCaption.prototype;
    _proto4.configure = function configure(text, conf) {
        this.rawText = text;
        this.conf = conf;
    };
    _proto4.getName = function getName() {
        return "LegendCaption";
    };
    _proto4.getType = function getType() {
        return "caption";
    };
    _proto4.getLogicalSpace = function getLogicalSpace(bBox, options, recalculate) {
        var conf = this.conf, padding = conf.padding, lSpace = this._lSpace, text = this.rawText, chartConfig = options.gLegend.getFromEnv("chartConfig"), smartLabel, effectivePlotArea, smartText, copyOfStyle;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        lSpace = this._lSpace = {
            bound: {
                height: 0,
                width: 0
            },
            node: {
                logicArea: UNDEF,
                smartText: UNDEF
            }
        };
        smartLabel = options.smartLabel;
        if (!text) return lSpace.bound;
        effectivePlotArea = merge(bBox, {});
        effectivePlotArea.height -= 2 * padding.v;
        effectivePlotArea.width -= 2 * padding.h;
        effectivePlotArea.x += padding.h;
        effectivePlotArea.y += padding.v;
        smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
        copyOfStyle = merge(this.conf.style, {});
        normalizeFontSizeAppend(copyOfStyle);
        smartLabel.setStyle(this._metaStyle = copyOfStyle);
        smartText = smartLabel.getSmartText(text, effectivePlotArea.width, effectivePlotArea.height);
        effectivePlotArea.height = smartText.height;
        effectivePlotArea.width = smartText.width;
        bBox.height = smartText.height + 2 * padding.v;
        bBox.width = smartText.width + 2 * padding.h;
        lSpace.node.smartText = smartText;
        lSpace.node.logicArea = effectivePlotArea;
        lSpace.bound = bBox;
        return bBox;
    };
    _proto4.draw = function draw() {
        var conf = this.conf, layer, boundAttr = conf.bound || {}, group, bound, boundingArea, lSpace, normalizedX, x, bBox, options, node, animationManager;
        if (arguments.length >= 3) {
            x = arguments[0];
            bBox = arguments[1];
            options = arguments[2];
        } else if (arguments.length >= 2) {
            x = arguments[0];
            options = arguments[1];
        }
        layer = options.parentLayer;
        animationManager = options.animationManager;
        this.group = group = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: "legend-caption"
            },
            css: conf.style,
            component: gLegendRef,
            container: layer
        });
        this.getLogicalSpace(bBox, options);
        lSpace = this._lSpace;
        node = lSpace.node;
        boundingArea = lSpace.bound;
        this.bound = bound = animationManager.setAnimation({
            el: this.bound || "rect",
            attr: boundingArea,
            css: boundAttr.style,
            container: group,
            component: gLegendRef
        });
        normalizedX = typeof x === "string" ? this.LegendCaption[x.toUpperCase()].x(node.smartText, bBox || node.logicArea) : x;
        this.node = animationManager.setAnimation({
            el: this.node || "text",
            attr: {
                text: node.smartText.text,
                x: normalizedX,
                y: node.logicArea.y + node.smartText.height / 2,
                lineHeight: this._metaStyle.lineHeight,
                fill: conf.style.fill
            },
            container: group,
            component: gLegendRef
        });
        return {
            group: group,
            bound: bound,
            node: this.node
        };
    };
    _proto4.dispose = function dispose() {
        this.group.remove();
        this.bound.remove();
        this.node.remove();
    };
    return LegendCaption;
}();
var LegendBody = function() {
    function LegendBody(colorRange, conf, childTextConf) {
        this.colorRange = colorRange;
        this.conf = conf;
        this.childTextConf = childTextConf;
        this._id = GL_BODY;
        this.bound = UNDEF;
        this.group = UNDEF;
        this.compositionsByCategory = {};
        this._lSpace = UNDEF;
        this.SC_STACK = [
            compositionKeys.AXIS_LABEL,
            compositionKeys.LEGEND_AXIS,
            compositionKeys.AXIS_VALUE
        ];
        this.DARW_STACK = [
            compositionKeys.AXIS_VALUE,
            compositionKeys.LEGEND_AXIS,
            compositionKeys.AXIS_LABEL
        ];
    }
    var _proto5 = LegendBody.prototype;
    _proto5.configure = function configure(colorRange, conf, childTextConf) {
        this.colorRange = colorRange;
        this.conf = conf;
        this.childTextConf = childTextConf;
        this.compositionsByCategory = {};
    };
    _proto5.getName = function getName() {
        return "LegendBody";
    };
    _proto5.getType = function getType() {
        return "legend";
    };
    _proto5.addCompositions = function addCompositions(instance, category) {
        this.compositionsByCategory[category] = instance;
    };
    _proto5.getSpaceTaken = function getSpaceTaken(spaceObj) {
        return this.conf.legendPosition === "bottom" ? spaceObj.height : spaceObj.width;
    };
    _proto5.getLogicalSpace = function getLogicalSpace(bBox, options, recalculate) {
        var lSpace = this._lSpace, conf = this.conf, padding = conf.padding, compositionsByCategory = this.compositionsByCategory, composition, compositionPlotArea, compositionAreaOffset, effectivePlotArea, getCompositionPlotArea, spaceTaken = 0, index, length;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        lSpace = this._lSpace = {
            bound: {
                height: 0,
                width: 0
            },
            node: {
                logicArea: UNDEF
            }
        };
        effectivePlotArea = merge(bBox, {});
        effectivePlotArea.height -= 2 * padding.v;
        effectivePlotArea.width -= 2 * padding.h;
        effectivePlotArea.x += padding.h;
        effectivePlotArea.y += padding.v;
        getCompositionPlotArea = this.getCompositionPlotAreaFor(effectivePlotArea);
        options.colorRange = this.colorRange;
        for(index = 0, length = this.SC_STACK.length; index < length; index++){
            if (!(composition = compositionsByCategory[this.SC_STACK[index]])) continue;
            compositionPlotArea = getCompositionPlotArea(compositionAreaOffset, composition.conf.spreadFactor);
            compositionAreaOffset = composition.getLogicalSpace(merge(compositionPlotArea, {}), options, recalculate);
            spaceTaken += this.getSpaceTaken(compositionAreaOffset);
        }
        this.updateEffectivePlotArea(bBox, effectivePlotArea, spaceTaken);
        lSpace.node.logicArea = effectivePlotArea;
        lSpace.bound = bBox;
        return bBox;
    };
    _proto5.draw = function draw() {
        var childTextConf = this.childTextConf, conf = this.conf, boundStyle = conf.bound.style || {}, compositionsByCategory = this.compositionsByCategory, animationManager, layer, bound, composition, legendBodyGroup, bBox, lSpace, options, index, length;
        if (arguments.length >= 3) {
            bBox = arguments[1];
            options = arguments[2];
        } else if (arguments.length >= 2) options = arguments[1];
        layer = options.parentLayer;
        animationManager = options.animationManager;
        this.getLogicalSpace(bBox, options);
        lSpace = this._lSpace;
        this.group = legendBodyGroup = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: "legend-body",
                transform: "t0,0"
            },
            css: childTextConf.style,
            container: layer,
            component: gLegendRef
        });
        this.bound = bound = animationManager.setAnimation({
            el: this.bound || "rect",
            attr: lSpace.bound,
            css: boundStyle,
            container: legendBodyGroup,
            component: gLegendRef
        });
        options.colorRange = this.colorRange;
        options.parentLayer = legendBodyGroup;
        for(index = 0, length = this.DARW_STACK.length; index < length; index++){
            if (!(composition = compositionsByCategory[this.DARW_STACK[index]])) continue;
            composition.draw(options);
        }
        if (options.moveInstructions) legendBodyGroup.attr({
            transform: options.moveInstructions
        });
        return {
            bound: bound,
            group: legendBodyGroup
        };
    };
    _proto5.getCompositionPlotAreaFor = function getCompositionPlotAreaFor(effectivePlotArea) {
        var plotArea, isLPosBottom = this.conf.legendPosition === "bottom";
        plotArea = merge(effectivePlotArea, {});
        return function(compAreaOffset, sf) {
            var compositionAreaOffset = compAreaOffset;
            compositionAreaOffset = compositionAreaOffset || {};
            if (isLPosBottom) {
                plotArea.y += compositionAreaOffset.height || 0;
                plotArea.height = effectivePlotArea.height * sf;
            } else {
                plotArea.x += compositionAreaOffset.width || 0;
                plotArea.width = effectivePlotArea.width * sf;
            }
            return plotArea;
        };
    };
    _proto5.updateEffectivePlotArea = function updateEffectivePlotArea(bBox, effectivePlotArea, val) {
        var conf = this.conf, padding = conf.padding;
        if (this.conf.legendPosition === "bottom") {
            effectivePlotArea.height = val;
            bBox.height = val + 2 * padding.v;
        } else {
            effectivePlotArea.width = val;
            bBox.width = val + 2 * padding.h;
        }
    };
    return LegendBody;
}();
var LegendLabels = function() {
    function LegendLabels(conf) {
        this.conf = conf;
        this.node = [];
        this._id = GL_LABELS;
    }
    var _proto6 = LegendLabels.prototype;
    _proto6.configure = function configure(conf) {
        this.conf = conf;
    };
    _proto6.getType = function getType() {
        return "label";
    };
    _proto6.getName = function getName() {
        return "LegendLabel";
    };
    _proto6.getEffectivePlotArea = function getEffectivePlotArea(area) {
        var conf = this.conf, padding = conf.padding;
        area.height -= 2 * padding.v;
        area.width -= 2 * padding.h;
        area.x += padding.h;
        area.y += padding.v;
        return area;
    };
    _proto6.getLogicalSpace = function getLogicalSpace(bBox, options, recalculate) {
        var isLegendPosBottom = this.conf.legendPosition === "bottom", lSpace = this._lSpace, conf = this.conf, padding = conf.padding, cRange, smartLabel, crDataObj, index, length, labelHeights = [], leftBound, rightBound, plotArea, label, valueRatio, stop, zerothStop, lsTexts, maxHeight, effectivePlotArea, testSmartLabel, nextRefPoint, currPoint, leftStop, smartText, ni, copyOfStyle, chartConfig = options.gLegend.getFromEnv("chartConfig"), normalizedDataArr = [], effectivePlotAreaWH;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        cRange = options.colorRange;
        smartLabel = options.smartLabel;
        valueRatio = cRange.getCumulativeValueRatio();
        crDataObj = cRange.colorRange;
        lSpace = this._lSpace = {
            bound: {
                height: 0,
                width: 0
            },
            node: {
                logicArea: UNDEF,
                smartTexts: []
            }
        };
        lsTexts = lSpace.node.smartTexts;
        plotArea = merge(bBox, {});
        effectivePlotArea = this.getEffectivePlotArea(plotArea);
        effectivePlotAreaWH = isLegendPosBottom ? effectivePlotArea.width : effectivePlotArea.height;
        smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
        copyOfStyle = merge(conf.style, {});
        normalizeFontSizeAppend(this._metaStyle = copyOfStyle);
        smartLabel.setStyle(copyOfStyle);
        testSmartLabel = smartLabel.getSmartText("W");
        for(index = 0, length = crDataObj.length; index < length; index++){
            label = (0, _lib.parseUnsafeString)(crDataObj[index].label);
            if (!label) {
                lsTexts[index] = UNDEF;
                continue;
            }
            normalizedDataArr.push({
                oriIndex: index,
                label: label
            });
        }
        length = normalizedDataArr.length;
        if (length === 0) return {
            height: 0,
            width: 0
        };
        if (length > 1) stop = (valueRatio[normalizedDataArr[length - 1].oriIndex] - valueRatio[normalizedDataArr[0].oriIndex]) / 2 * effectivePlotAreaWH / 100;
        else stop = Math.max(valueRatio[normalizedDataArr[0].oriIndex], 100 - valueRatio[normalizedDataArr[0].oriIndex]) / 2 * effectivePlotAreaWH / 100;
        zerothStop = stop;
        if (isLegendPosBottom) {
            smartText = smartLabel.getSmartText(normalizedDataArr[0].label, zerothStop, effectivePlotArea.height);
            smartText.x = valueRatio[normalizedDataArr[0].oriIndex] * effectivePlotArea.width / 100;
            leftBound = smartText.x + smartText.width;
        } else {
            smartText = smartLabel.getSmartText(normalizedDataArr[0].label, zerothStop, effectivePlotArea.width);
            smartText.y = valueRatio[normalizedDataArr[0].oriIndex] * effectivePlotArea.height / 100;
            leftBound = smartText.y + smartText.width;
        }
        labelHeights.push(smartText.height);
        lsTexts[normalizedDataArr[0].oriIndex] = smartText;
        if (isLegendPosBottom) {
            smartText = smartLabel.getSmartText(normalizedDataArr[length - 1].label, zerothStop, effectivePlotArea.height);
            smartText.x = valueRatio[normalizedDataArr[length - 1].oriIndex] * effectivePlotArea.width / 100;
            rightBound = smartText.x - smartText.width;
        } else {
            smartText = smartLabel.getSmartText(normalizedDataArr[length - 1].label, zerothStop, effectivePlotArea.width);
            smartText.y = valueRatio[normalizedDataArr[length - 1].oriIndex] * effectivePlotArea.height / 100;
            rightBound = smartText.y - smartText.width;
        }
        labelHeights.push(smartText.height);
        lsTexts[normalizedDataArr[length - 1].oriIndex] = smartText;
        leftStop = leftBound;
        for(index = 1; index < length - 1; index++){
            label = normalizedDataArr[index].label;
            ni = normalizedDataArr[index].oriIndex;
            smartText = UNDEF;
            nextRefPoint = index + 1 === length - 1 ? rightBound : valueRatio[normalizedDataArr[index + 1].oriIndex] * effectivePlotAreaWH / 100;
            currPoint = valueRatio[normalizedDataArr[index].oriIndex] * effectivePlotAreaWH / 100;
            stop = Math.min(currPoint - leftStop, nextRefPoint - currPoint);
            if (stop > 2 * testSmartLabel.width) {
                if (isLegendPosBottom) {
                    smartText = smartLabel.getSmartText(label, stop, effectivePlotArea.height);
                    smartText.x = valueRatio[ni] * effectivePlotArea.width / 100;
                } else {
                    smartText = smartLabel.getSmartText(label, stop, effectivePlotArea.width);
                    smartText.y = valueRatio[ni] * effectivePlotArea.height / 100;
                }
                leftStop = stop;
                labelHeights.push(smartText.height);
            }
            lsTexts[normalizedDataArr[index].oriIndex] = smartText;
        }
        maxHeight = Math.max.apply(Math, labelHeights);
        if (isLegendPosBottom) {
            effectivePlotArea.height = maxHeight;
            bBox.height = maxHeight + 2 * padding.v;
        } else {
            effectivePlotArea.width = maxHeight;
            bBox.width = maxHeight + 2 * padding.v;
        }
        lSpace.node.logicArea = effectivePlotArea;
        lSpace.bound = bBox;
        return bBox;
    };
    _proto6.draw = function draw() {
        var isLegendPosBottom = this.conf.legendPosition === "bottom", layer, bound, conf = this.conf, boundStyle = conf.bound && conf.bound.style || {
            stroke: "none"
        }, legendLabelsGroup, bBox, smartText, lSpace, options, index, logicArea, lsTexts, length, pos = {}, animationManager;
        if (arguments.length >= 2 && arguments[1]) {
            bBox = arguments[0];
            options = arguments[1];
        } else if (arguments.length >= 1) options = arguments[0];
        animationManager = options.animationManager;
        layer = options.parentLayer;
        this.getLogicalSpace(bBox, options);
        lSpace = this._lSpace;
        logicArea = lSpace.node.logicArea;
        lsTexts = lSpace.node.smartTexts;
        this.group = legendLabelsGroup = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: "legend-labels"
            },
            container: layer,
            component: gLegendRef
        });
        this.bound = bound = animationManager.setAnimation({
            el: this.bound || "rect",
            attr: lSpace.bound,
            css: boundStyle,
            container: legendLabelsGroup,
            component: gLegendRef
        });
        for(var i = 0; i < this.node.length; i++)this.node[i].remove();
        this.node = [];
        for(index = 0, length = lsTexts.length; index < length; index++){
            smartText = lsTexts[index];
            if (!smartText) continue;
            if (isLegendPosBottom) {
                pos.y = logicArea.y + smartText.height / 2;
                if (index === length - 1) pos.x = logicArea.x + smartText.x - smartText.width / 2;
                else if (index) pos.x = logicArea.x + smartText.x;
                else pos.x = logicArea.x + smartText.x + smartText.width / 2;
            } else {
                pos.x = logicArea.x + smartText.height / 2;
                if (index === length - 1) pos.y = logicArea.y + smartText.y - smartText.width / 2;
                else if (index) pos.y = logicArea.y + smartText.y;
                else pos.y = logicArea.y + smartText.y + smartText.width / 2;
            }
            this.node.push(animationManager.setAnimation({
                el: "text",
                attr: {
                    text: smartText.text,
                    x: pos.x,
                    y: pos.y,
                    lineHeight: this._metaStyle.lineHeight,
                    fill: conf.style.fill,
                    transform: isLegendPosBottom ? "R0" : "R270," + pos.x + "," + pos.y
                },
                container: legendLabelsGroup,
                component: gLegendRef
            }));
        }
        return {
            group: legendLabelsGroup,
            bound: bound,
            node: this.node
        };
    };
    return LegendLabels;
}();
var LegendAxis = function() {
    function LegendAxis(conf) {
        this.conf = conf;
        this._id = FL_AXIS;
        this.node = UNDEF;
        this.group = UNDEF;
        this.shadow = UNDEF;
        this.markerLine = UNDEF;
        this.compositionsByCategory = {};
    }
    var _proto7 = LegendAxis.prototype;
    _proto7.configure = function configure(conf) {
        this.conf = conf;
    };
    _proto7.getName = function getName() {
        return "LegendAxis";
    };
    _proto7.getType = function getType() {
        return "axis";
    };
    _proto7.addCompositions = function addCompositions(instance, category) {
        this.compositionsByCategory[category] = instance;
    };
    _proto7.getLogicalSpace = function getLogicalSpace() {
        var isLegendPosBottom = this.conf.legendPosition === "bottom", bBox = arguments[0], recalculate = arguments[2], lSpace = this._lSpace, conf = this.conf, padding = conf.padding, spaceTakenLower, spaceTakenUpper, spaceTaken, axisThickness = conf.legendAxisHeight, compositionsByCategory = this.compositionsByCategory, sliderG, effectivePlotArea, slider, sliderSpace, sliderExtraDiam = 0;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        lSpace = this._lSpace = {
            bound: {
                height: 0,
                width: 0
            },
            node: {
                logicArea: UNDEF
            }
        };
        effectivePlotArea = merge(bBox, {});
        effectivePlotArea.height -= 2 * padding.v;
        effectivePlotArea.width -= 2 * padding.h;
        effectivePlotArea.x += padding.h;
        effectivePlotArea.y += padding.v;
        spaceTakenLower = axisThickness / 2 + conf.line.offset;
        spaceTakenUpper = axisThickness / 2;
        sliderG = compositionsByCategory[compositionKeys.RANGE];
        if (sliderG) {
            slider = sliderG.sliders["false"];
            sliderSpace = slider.conf.outerCircle.rFactor * axisThickness;
            spaceTakenUpper += sliderExtraDiam = Math.max(sliderSpace / 2 - axisThickness / 2, 0);
        }
        if (isLegendPosBottom) {
            effectivePlotArea.y += sliderExtraDiam;
            effectivePlotArea.height = spaceTaken = spaceTakenUpper + spaceTakenLower + sliderExtraDiam;
            bBox.height = spaceTaken + 2 * padding.v;
        } else {
            effectivePlotArea.x += sliderExtraDiam;
            effectivePlotArea.width = spaceTaken = spaceTakenUpper + spaceTakenLower + sliderExtraDiam;
            bBox.width = spaceTaken + 2 * padding.v;
        }
        lSpace.node.logicArea = effectivePlotArea;
        lSpace.bound = bBox;
        return bBox;
    };
    _proto7.getDrawableAxisArea = function getDrawableAxisArea(parentBoundingRect) {
        var conf = this.conf, isLegendPosBottom = this.conf.legendPosition === "bottom", x = parentBoundingRect.x, y = parentBoundingRect.y, width = isLegendPosBottom ? parentBoundingRect.width : conf.legendAxisHeight, height = isLegendPosBottom ? conf.legendAxisHeight : parentBoundingRect.height, r = conf.legendAxisHeight / 2;
        return {
            x: x,
            y: y,
            width: width,
            height: height,
            r: r
        };
    };
    _proto7.preDrawingRangeParamV = function preDrawingRangeParamV(drawableArea) {
        var x = drawableArea.x + drawableArea.width / 2, calculationBase = drawableArea.width;
        return {
            x: x,
            calculationBase: calculationBase,
            rangeStart: drawableArea.y,
            rangeEnd: drawableArea.y + drawableArea.height,
            prop: "x"
        };
    };
    _proto7.preDrawingRangeParamH = function preDrawingRangeParamH(drawableArea) {
        var y = drawableArea.y + drawableArea.height / 2, calculationBase = drawableArea.height;
        return {
            y: y,
            calculationBase: calculationBase,
            rangeStart: drawableArea.x,
            rangeEnd: drawableArea.x + drawableArea.width,
            prop: "y"
        };
    };
    _proto7.preDrawingRangeParam = function preDrawingRangeParam(drawableArea) {
        return this.conf.legendPosition === "bottom" ? this.preDrawingRangeParamH(drawableArea) : this.preDrawingRangeParamV(drawableArea);
    };
    _proto7.getScaleMarkerPathStrH = function getScaleMarkerPathStrH(oriAxisRect, valueRatio) {
        var axisRect = merge(oriAxisRect, {}), conf = this.conf, lineAttr = conf.line, index, length, ratio, covered, markerStartY, tickStr = _lib.BLANKSTRING, lineStr = _lib.BLANKSTRING;
        axisRect.x += axisRect.r;
        axisRect.width -= 2 * axisRect.r;
        markerStartY = axisRect.y + axisRect.height;
        for(index = 0, length = valueRatio.length; index < length; index++){
            ratio = valueRatio[index];
            covered = axisRect.x + ratio * axisRect.width / 100;
            tickStr += M + covered + COMMA_STR + (markerStartY - lineAttr.grooveLength) + L + covered + COMMA_STR + (markerStartY + lineAttr.offset);
        }
        lineStr += M + axisRect.x + COMMA_STR + (markerStartY + lineAttr.offset) + L + (axisRect.x + axisRect.width) + COMMA_STR + (markerStartY + lineAttr.offset);
        return tickStr + lineStr;
    };
    _proto7.getColorGradientH = function getColorGradientH(colorRange) {
        return {
            axis: colorRange.getBoxFill(),
            shadow: (0, _lib.toRaphaelColor)({
                FCcolor: {
                    alpha: "25,0,0",
                    angle: 90,
                    color: "000000,FFFFFF,FFFFFF",
                    ratio: "0,30,40"
                }
            })
        };
    };
    _proto7.draw = function draw() {
        var layer, conf = this.conf, boundAttr = conf.bound || {}, lineAttr = conf.line, boundStyle = boundAttr.style || {}, bBox, category, compositionsByCategory = this.compositionsByCategory, cRange, valueRatio, composition, legendAxisGroup, rangeParams, grad, oriAxisRect, lSpace, options, animationManager, scaleLine;
        if (arguments.length >= 2) {
            bBox = arguments[0];
            options = arguments[1];
        } else if (arguments.length >= 1) options = arguments[0];
        animationManager = options.animationManager;
        layer = options.parentLayer;
        cRange = options.colorRange;
        valueRatio = cRange.getCumulativeValueRatio();
        this.getLogicalSpace(bBox, options);
        lSpace = this._lSpace;
        this.group = legendAxisGroup = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: "legend-axis"
            },
            container: layer,
            component: gLegendRef
        });
        this.bound = animationManager.setAnimation({
            el: this.bound || "rect",
            attr: lSpace.bound,
            css: boundStyle,
            component: gLegendRef,
            container: legendAxisGroup
        });
        oriAxisRect = this.getDrawableAxisArea(lSpace.node.logicArea);
        grad = this.getColorGradient(cRange);
        conf.style.fill = grad.axis;
        conf.shadow.style.fill = grad.shadow;
        this.node = animationManager.setAnimation({
            el: this.node || "rect",
            attr: oriAxisRect,
            css: conf.style,
            container: legendAxisGroup,
            component: gLegendRef
        });
        this.shadow = animationManager.setAnimation({
            el: this.shadow || "rect",
            attr: oriAxisRect,
            css: conf.shadow.style,
            container: legendAxisGroup,
            component: gLegendRef
        });
        scaleLine = this.getScaleMarkerPathStr(oriAxisRect, valueRatio);
        this.path = animationManager.setAnimation({
            el: this.path || "path",
            attr: {
                path: scaleLine
            },
            css: lineAttr.style,
            container: legendAxisGroup,
            component: gLegendRef
        });
        for(category in compositionsByCategory){
            composition = compositionsByCategory[category];
            switch(category){
                case compositionKeys.RANGE:
                    rangeParams = this.preDrawingRangeParam(oriAxisRect);
                    options[rangeParams.prop] = rangeParams[rangeParams.prop];
                    options.key = rangeParams.prop;
                    options.rCalcBase = rangeParams.calculationBase;
                    options.parentLayer = legendAxisGroup;
                    composition.draw(rangeParams.rangeStart, rangeParams.rangeEnd, options);
            }
        }
    };
    _proto7.getScaleMarkerPathStr = function getScaleMarkerPathStr(oriAxisRect, valueRatio) {
        return this.conf.legendPosition === "bottom" ? this.getScaleMarkerPathStrH(oriAxisRect, valueRatio) : this.getScaleMarkerPathStrV(oriAxisRect, valueRatio);
    };
    _proto7.getColorGradient = function getColorGradient(colorRange) {
        return this.conf.legendPosition === "bottom" ? this.getColorGradientH(colorRange) : this.getColorGradientV(colorRange);
    };
    _proto7.getScaleMarkerPathStrV = function getScaleMarkerPathStrV(oriAxisRect, valueRatio) {
        var axisRect = merge(oriAxisRect, {}), conf = this.conf, lineAttr = conf.line, index, ratio, length, markerStartX, covered, tickStr = _lib.BLANKSTRING, lineStr = _lib.BLANKSTRING;
        axisRect.y += axisRect.r;
        axisRect.height -= 2 * axisRect.r;
        markerStartX = axisRect.x + axisRect.width;
        for(index = 0, length = valueRatio.length; index < length; index++){
            ratio = valueRatio[index];
            covered = axisRect.y + ratio * axisRect.height / 100;
            tickStr += M + (markerStartX - lineAttr.grooveLength) + COMMA_STR + covered + L + (markerStartX + lineAttr.offset) + COMMA_STR + covered;
        }
        lineStr += M + (markerStartX + lineAttr.offset) + COMMA_STR + axisRect.y + L + (markerStartX + lineAttr.offset) + COMMA_STR + (axisRect.y + axisRect.height);
        return tickStr + lineStr;
    };
    _proto7.getColorGradientV = function getColorGradientV(colorRange) {
        return {
            axis: colorRange.getBoxFill(true),
            shadow: (0, _lib.toRaphaelColor)({
                FCcolor: {
                    alpha: "25,0,0",
                    angle: 360,
                    color: "000000,FFFFFF,FFFFFF",
                    ratio: "0,30,40"
                }
            })
        };
    };
    return LegendAxis;
}();
var Slider = function() {
    function Slider(sliderIndex, options, id) {
        this.conf = options.conf;
        this.sliderIndex = sliderIndex;
        this.rangeGroup = options.sliderGroup;
        this._id = id;
        this.node = UNDEF;
        this.tracker = UNDEF;
        this.currPos = 0;
        this.swing = [];
    }
    var _proto8 = Slider.prototype;
    _proto8.configure = function configure(sliderIndex, options, id) {
        this.conf = options.conf;
        this.sliderIndex = sliderIndex;
        this.rangeGroup = options.sliderGroup;
        this._id = id;
        this.currPos = 0;
        this.swing = [];
    };
    _proto8.getType = function getType() {
        return "slider";
    };
    _proto8.getName = function getName() {
        return "Slider";
    };
    _proto8.updateSwingRange = function updateSwingRange(index, value) {
        this.swing[+index] = value;
    };
    _proto8.draw = function draw(rangeStart, scaleVal, position, options) {
        var layer = options.parentLayer, self = this, animationManager = options.animationManager, conf = this.conf, ocConf = conf.outerCircle, icConf = conf.innerCircle, tooltext, chartConfig = animationManager.getFromEnv("chart").config, ocRadius = Math.ceil(ocConf.rFactor * options.rCalcBase / 2), icRadius = Math.ceil(icConf.rFactor * options.rCalcBase / 2), icThickness = ocRadius - icRadius, group, toolTipController = options.gLegend.getFromEnv("toolTipController"), sliderIndex = this.sliderIndex, dragAPI, strokeWidthOffset, x, y, tracker;
        conf.outerRadius = ocRadius;
        conf.innerRadius = icRadius;
        this._scaleVal = scaleVal;
        icConf.style["stroke-width"] = icThickness;
        strokeWidthOffset = Math.ceil(ocConf.style["stroke-width"] / 2);
        icRadius += strokeWidthOffset;
        group = this.node = animationManager.setAnimation({
            el: this.node || "group",
            attr: {
                name: "fc-gl-slider",
                cursor: "pointer",
                transform: "t0,0"
            },
            container: layer,
            component: gLegendRef
        });
        if (options.key === "x") {
            x = position;
            y = rangeStart;
            y += sliderIndex ? -icRadius : +icRadius;
        } else {
            x = rangeStart;
            y = position;
            x += sliderIndex ? -icRadius : +icRadius;
        }
        this.oCircle = animationManager.setAnimation({
            el: this.oCircle || "circle",
            attr: {
                cx: x,
                cy: y,
                r: ocRadius
            },
            css: ocConf.style,
            container: group,
            component: gLegendRef
        });
        this.iCircle = animationManager.setAnimation({
            el: this.iCircle || "circle",
            attr: {
                cx: x,
                cy: y,
                r: icRadius
            },
            css: icConf.style,
            container: group,
            component: gLegendRef
        });
        tracker = this.tracker = animationManager.setAnimation({
            el: this.tracker || "circle",
            attr: {
                cx: x,
                cy: y,
                r: ocRadius + 5,
                fill: TRACKER_FILL,
                stroke: TRACKER_FILL,
                cursor: "pointer"
            },
            container: group,
            component: gLegendRef
        });
        group.attr({
            transform: options.key === "x" ? "t0," + self.currPos : "t" + self.currPos + "," + 0
        });
        tooltext = chartConfig.showToolTip ? scaleVal : "";
        toolTipController.enableToolTip(tracker, tooltext);
        this._dragAPI = dragAPI = this.getDragAPI(options.key === "x");
        tracker.undrag();
        tracker.drag(dragAPI.dragging, dragAPI.dragStart, dragAPI.dragEnd);
        return {
            translateAscending: ocRadius + strokeWidthOffset
        };
    };
    _proto8.getDragAPI = function getDragAPI(verticalDragging) {
        var self = this, node = self.node, index = self.sliderIndex, range = self.rangeGroup, swing, lastDisplacement, timeoutId, innerRadius = self.conf.innerRadius, spaceSaved = innerRadius, isDragged;
        return {
            dragging: function dragging(event) {
                var left, right, d, updatedText, posAfterDisplacement;
                event.stopPropagation();
                if (verticalDragging) d = event.data[1];
                else d = event.data[0];
                if (index) {
                    left = swing[0] - swing[1] + spaceSaved;
                    right = 0;
                } else {
                    left = 0;
                    right = swing[1] - swing[0] - spaceSaved;
                }
                posAfterDisplacement = self.currPos + d;
                if (posAfterDisplacement < left) d += left - posAfterDisplacement;
                else if (posAfterDisplacement > right) d -= posAfterDisplacement - right;
                node.attr({
                    transform: verticalDragging ? "t0," + (self.currPos + d) : "t" + (self.currPos + d) + "," + 0
                });
                lastDisplacement = d;
                timeoutId && clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    range.updateWhenInRest(self, self.currPos + d);
                }, 100);
                updatedText = range.updateWhenInMove(self, self.currPos + d);
                self.conf.showTooltip && self.tracker.data("__FC_tooltipText", updatedText);
                isDragged = true;
                return true;
            },
            dragStart: function dragStart(event) {
                event.stopPropagation();
                swing = self.swing;
                isDragged = false;
                range.dragStarted(self);
            },
            dragEnd: function dragEnd() {
                var newPos;
                range.dragCompleted(self, isDragged, self.currPos + lastDisplacement);
                if (!isDragged) return;
                timeoutId && clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    range.updateWhenInRest(self, self.currPos);
                }, 100);
                self.currPos += lastDisplacement;
                newPos = swing[+index] + self.currPos;
                range.updateRange(self, newPos);
            }
        };
    };
    _proto8.dispose = function dispose() {
        this.node.remove();
        this.oCircle.remove();
        this.iCircle.remove();
        this.tracker.remove();
        delete this;
    };
    return Slider;
}();
var SliderGroup = function() {
    function SliderGroup(conf) {
        var sliderConf = conf, options = {};
        this._id = GL_SG1;
        this.conf = conf;
        options.conf = sliderConf;
        this.extremes = [];
        this.sliders = {};
        this.min = UNDEF;
        this.max = UNDEF;
        options.sliderGroup = this;
        this.valueRange = [];
        this.callbacks = [];
        this.sliders[FORMER_SLIDER_INDEX] = new Slider(FORMER_SLIDER_INDEX, options, this._id + "_" + +FORMER_SLIDER_INDEX);
        this.sliders[LATER_SLIDER_INDEX] = new Slider(LATER_SLIDER_INDEX, options, this._id + "_" + +LATER_SLIDER_INDEX);
    }
    var _proto9 = SliderGroup.prototype;
    _proto9.configure = function configure(conf) {
        var sliderConf = conf, options = {};
        this.min = UNDEF;
        this.max = UNDEF;
        this.conf = conf;
        options.conf = sliderConf;
        options.sliderGroup = this;
        this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX, options, this._id + "_" + +FORMER_SLIDER_INDEX);
        this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX, options, this._id + "_" + +LATER_SLIDER_INDEX);
    };
    _proto9.getType = function getType() {
        return "slider";
    };
    _proto9.getName = function getName() {
        return "SliderGroup";
    };
    _proto9.initRange = function initRange(slider, updatedRange) {
        var sliderIndex = slider.sliderIndex;
        this.extremes[+sliderIndex] = updatedRange;
    };
    _proto9.updateRange = function updateRange(slider, updatedRange) {
        var sliderIndex = slider.sliderIndex, sliders = this.sliders, s = sliders[!sliderIndex];
        s.updateSwingRange(sliderIndex, updatedRange);
    };
    _proto9.reset = function reset() {
        var options = {};
        options.conf = this.conf;
        options.sliderGroup = this;
        this.min = UNDEF;
        this.max = UNDEF;
        this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX, options, this._id + "_" + +FORMER_SLIDER_INDEX);
        this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX, options, this._id + "_" + +LATER_SLIDER_INDEX);
        this.draw.apply(this, this._drawParams);
    };
    _proto9.draw = function draw(rangeStart, rangeEnd, options) {
        var sliders = this.sliders, lSlider = sliders[FORMER_SLIDER_INDEX], rSlider = sliders[LATER_SLIDER_INDEX], cRange = options.colorRange, colorRange = cRange.colorRange, oneSliderMes, icConf, ocConf, icRadius, extremesRange, mapbypercent = cRange.data.mapByPercent, numberFormatter = options.gLegend.getFromEnv("number-formatter"), totalRange;
        this._fcChart = options.gLegend.getFromEnv("chart");
        this.getValueFormPixel = function(valueStart, valueEnd, pixelStart, pixelEnd) {
            var unit = (valueEnd - valueStart) / (pixelEnd - pixelStart);
            this.getValueFormPixel = function(pixel) {
                return valueStart + unit * pixel;
            };
        };
        this.updateWhenInMove = function(numberformatter, mapbypercentage) {
            this.updateWhenInMove = function(slider, val) {
                var extremes = this.extremes, sliderIndex = slider.sliderIndex, nVal, value;
                if (sliderIndex) nVal = extremes[1] - extremes[0] + val;
                else nVal = val;
                value = this.getValueFormPixel(nVal);
                if (!mapbypercentage) value = numberformatter.legendValue(value);
                else value = parseFloat(value).toFixed(2) + PERCENT_STR;
                return value;
            };
        };
        this._drawParams = [
            rangeStart,
            rangeEnd,
            options
        ];
        this.updateWhenInMove(numberFormatter, mapbypercent);
        ocConf = lSlider.conf.outerCircle;
        icConf = lSlider.conf.innerCircle;
        icRadius = Math.ceil(icConf.rFactor * options.rCalcBase / 2);
        icRadius += Math.ceil(ocConf.style["stroke-width"] / 2);
        this.extremes[0] = rangeStart + icRadius;
        this.extremes[1] = rangeEnd - icRadius;
        extremesRange = this.extremes[1] - this.extremes[0];
        this.min = this.min ? this.min : colorRange[0].value;
        this.max = this.max ? this.max : colorRange[colorRange.length - 1].value;
        totalRange = colorRange[colorRange.length - 1].value - colorRange[0].value;
        lSlider.currPos = extremesRange * (this.min - colorRange[0].value) / totalRange;
        rSlider.currPos = extremesRange * (this.max - colorRange[0].value) / totalRange - extremesRange;
        oneSliderMes = lSlider.draw(rangeStart, mapbypercent ? numberFormatter.legendPercentValue(this.min) : numberFormatter.legendValue(this.min), options[options.key], options);
        oneSliderMes = rSlider.draw(rangeEnd, mapbypercent ? numberFormatter.legendPercentValue(this.max) : numberFormatter.legendValue(this.max), options[options.key], options);
        lSlider.swing = this.extremes.slice(0);
        rSlider.swing = this.extremes.slice(0);
        lSlider.swing[1] += rSlider.currPos;
        rSlider.swing[0] += lSlider.currPos;
        this.getValueFormPixel(colorRange[0].value, colorRange[colorRange.length - 1].value, this.extremes[0], this.extremes[1]);
        return oneSliderMes;
    };
    _proto9.updateWhenInRest = function updateWhenInRest(slider, val) {
        var sliders = this.sliders, extremes = this.extremes, sliderIndex = slider.sliderIndex, lValue, rValue;
        if (sliderIndex) {
            lValue = sliders[!sliderIndex].currPos;
            rValue = extremes[1] - extremes[0] + val;
        } else {
            lValue = val;
            rValue = extremes[1] - extremes[0] + sliders[!sliderIndex].currPos;
        }
        this.min = Number(this.getValueFormPixel(lValue).toFixed(2));
        this.max = Number(this.getValueFormPixel(rValue).toFixed(2));
        this.gLegend.fireEvent("rangeUpdated", [
            {
                min: this.min,
                max: this.max
            }
        ]);
    };
    _proto9.dragStarted = function dragStarted(self) {
        var sliders = this.sliders, extremes = this.extremes, conf = self.conf, chart = this._fcChart;
        chart.fireChartInstanceEvent("legendpointerdragstart", {
            pointerIndex: +self.sliderIndex,
            pointers: [
                {
                    value: this.getValueFormPixel(sliders["false"].currPos)
                },
                {
                    value: this.getValueFormPixel(extremes[1] - extremes[0] + sliders["true"].currPos)
                }
            ],
            legendPointerHeight: conf.outerRadius,
            legendPointerWidth: conf.innerRadius,
            outerRadius: conf.outerRadius,
            innerRadius: conf.innerRadius
        }, [
            chart.id
        ]);
    };
    _proto9.dragCompleted = function dragCompleted(self, isDragged, newVal) {
        var sliders = this.sliders, extremes = this.extremes, conf = self.conf, minValue = this.getValueFormPixel(sliders["false"].currPos), maxValue = this.getValueFormPixel(extremes[1] - extremes[0] + sliders["true"].currPos), chart = this._fcChart, newMinValue, newMaxValue;
        if (!self.sliderIndex) {
            newMinValue = this.getValueFormPixel(newVal);
            newMaxValue = maxValue;
        } else {
            newMinValue = minValue;
            newMaxValue = this.getValueFormPixel(extremes[1] - extremes[0] + newVal);
        }
        if (isDragged) chart.fireChartInstanceEvent("legendrangeupdated", {
            previousMinValue: minValue,
            previousMaxValue: maxValue,
            minValue: newMinValue,
            maxValue: newMaxValue
        }, [
            chart.id
        ]);
        chart.fireChartInstanceEvent("legendpointerdragstop", {
            pointerIndex: +self.sliderIndex,
            pointers: [
                {
                    value: newMinValue
                },
                {
                    value: newMaxValue
                }
            ],
            legendPointerHeight: conf.outerRadius,
            legendPointerWidth: conf.innerRadius,
            outerRadius: conf.outerRadius,
            innerRadius: conf.innerRadius
        }, [
            chart.id
        ]);
    };
    _proto9.dispose = function dispose() {
        this.sliders[FORMER_SLIDER_INDEX].dispose();
        this.sliders[LATER_SLIDER_INDEX].dispose();
    };
    return SliderGroup;
}();
var LegendValues = function(_LegendLabels) {
    (0, _inheritsLoose2.default)(LegendValues, _LegendLabels);
    function LegendValues() {
        var _this2;
        _this2 = _LegendLabels.call(this, arguments[0]) || this;
        _this2._id = GL_VALUES;
        _this2.node = [];
        return _this2;
    }
    var _proto10 = LegendValues.prototype;
    _proto10.configure = function configure(conf) {
        this.conf = conf;
    };
    _proto10.getName = function getName() {
        return "LegendValues";
    };
    _proto10.getType = function getType() {
        return "legend";
    };
    _proto10.getLogicalSpace = function getLogicalSpace(bBox, options, recalculate) {
        var isLegendPosBottom = this.conf.legendPosition === "bottom", lSpace = this._lSpace, conf = this.conf, padding = conf.padding, chartConfig = options.gLegend.getFromEnv("chartConfig"), cRange, smartLabel, crDataObj, smartText, index, length, valueRatio, stop, nextRefPoint, currPoint, zerothStop, labelHeights = [], leftBound, leftStop, rightBound, labelWidths = [], topBound, topStop, bottomBound, maxHeight, maxWidth, effectivePlotArea, val, dispValue, testSmartLabel, copyOfStyle, lsTexts;
        if (lSpace && !recalculate) {
            lSpace.isImpure = true;
            return lSpace;
        }
        cRange = options.colorRange;
        smartLabel = options.smartLabel;
        crDataObj = cRange.colorRange;
        valueRatio = cRange.getCumulativeValueRatio();
        lSpace = this._lSpace = {
            bound: {
                height: 0,
                width: 0
            },
            node: {
                logicArea: UNDEF,
                smartTexts: []
            }
        };
        lsTexts = lSpace.node.smartTexts;
        effectivePlotArea = merge(bBox, {});
        effectivePlotArea.height -= 2 * padding.v;
        effectivePlotArea.width -= 2 * padding.h;
        effectivePlotArea.x += padding.h;
        effectivePlotArea.y += padding.v;
        smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
        copyOfStyle = merge(conf.style, {});
        normalizeFontSizeAppend(this._metaStyle = copyOfStyle);
        smartLabel.setStyle(copyOfStyle);
        testSmartLabel = smartLabel.getSmartText("W");
        length = crDataObj.length;
        if (isLegendPosBottom) {
            zerothStop = stop = (valueRatio[length - 1] - valueRatio[0]) / 2 * effectivePlotArea.width / 100;
            dispValue = crDataObj[0].displayValue;
            smartText = smartLabel.getSmartText(typeof dispValue !== "string" && dispValue !== UNDEF && dispValue.toString() || dispValue, zerothStop, effectivePlotArea.height);
            smartText.x = valueRatio[0] * effectivePlotArea.width / 100;
            leftBound = smartText.x + smartText.width;
            labelHeights.push(smartText.height);
        } else {
            zerothStop = stop = (valueRatio[length - 1] - valueRatio[0]) / 2 * effectivePlotArea.height / 100;
            smartText = smartLabel.getSmartText(crDataObj[0].displayValue, effectivePlotArea.width, zerothStop);
            smartText.y = valueRatio[0] * effectivePlotArea.height / 100;
            topBound = smartText.y + smartText.width;
            labelWidths.push(smartText.width);
        }
        lsTexts[0] = smartText;
        if (isLegendPosBottom) {
            smartText = smartLabel.getSmartText(crDataObj[length - 1].displayValue, zerothStop, effectivePlotArea.height);
            smartText.x = valueRatio[length - 1] * effectivePlotArea.width / 100;
            rightBound = smartText.x - smartText.width;
            labelHeights.push(smartText.height);
            leftStop = leftBound;
        } else {
            smartText = smartLabel.getSmartText(crDataObj[length - 1].displayValue, effectivePlotArea.width, zerothStop);
            smartText.y = valueRatio[length - 1] * effectivePlotArea.height / 100;
            bottomBound = smartText.y - smartText.height;
            labelWidths.push(smartText.width);
            topStop = topBound;
        }
        lsTexts[length - 1] = smartText;
        for(index = 1; index < length - 1; index++){
            smartText = UNDEF;
            val = crDataObj[index].displayValue;
            if (isLegendPosBottom) {
                nextRefPoint = index + 1 === length - 1 ? rightBound : valueRatio[index + 1] * effectivePlotArea.width / 100;
                currPoint = valueRatio[index] * effectivePlotArea.width / 100;
                stop = Math.min(currPoint - leftStop, nextRefPoint - currPoint);
                if (stop > 1.5 * testSmartLabel.width) {
                    smartText = smartLabel.getSmartText(val, 2 * stop, effectivePlotArea.height);
                    smartText.x = valueRatio[index] * effectivePlotArea.width / 100;
                    leftStop = stop;
                    labelHeights.push(smartText.height);
                }
            } else {
                nextRefPoint = index + 1 === length - 1 ? bottomBound : valueRatio[index + 1] * effectivePlotArea.height / 100;
                currPoint = valueRatio[index] * effectivePlotArea.height / 100;
                stop = Math.min(currPoint - topStop, nextRefPoint - currPoint);
                if (stop > 2 * testSmartLabel.height) {
                    smartText = smartLabel.getSmartText(val, effectivePlotArea.width, 2 * stop);
                    smartText.y = valueRatio[index] * effectivePlotArea.height / 100;
                    topStop = stop;
                    labelWidths.push(smartText.width);
                }
            }
            lsTexts[index] = smartText;
        }
        if (isLegendPosBottom) {
            maxHeight = Math.max.apply(Math, labelHeights);
            effectivePlotArea.height = maxHeight;
            bBox.height = maxHeight + 2 * padding.v;
        } else {
            maxWidth = Math.max.apply(Math, labelWidths);
            effectivePlotArea.width = maxWidth;
            bBox.width = maxWidth + 2 * padding.h;
        }
        lSpace.node.logicArea = effectivePlotArea;
        lSpace.bound = bBox;
        return bBox;
    };
    _proto10.draw = function draw() {
        var conf = this.conf, isLegendPosBottom = conf.legendPosition === "bottom", boundStyle = conf.bound && conf.bound.style || {
            stroke: "none"
        }, pos = {}, layer, bound, legendValuesGroup, bBox, lSpace, logicArea, options, cRange, valueRatio, index, length, smartTexts, smartText, animationManager;
        if (arguments.length >= 2 && arguments[1]) {
            bBox = arguments[0];
            options = arguments[1];
        } else if (arguments.length >= 1) options = arguments[0];
        animationManager = options.animationManager;
        layer = options.parentLayer;
        cRange = options.colorRange;
        valueRatio = cRange.getCumulativeValueRatio();
        this.getLogicalSpace(bBox, options);
        lSpace = this._lSpace;
        logicArea = lSpace.node.logicArea;
        smartTexts = lSpace.node.smartTexts;
        this.group = legendValuesGroup = animationManager.setAnimation({
            el: this.group || "group",
            attr: {
                name: "legend-values"
            },
            container: layer,
            component: gLegendRef
        });
        this.bound = bound = animationManager.setAnimation({
            el: this.bound || "rect",
            attr: lSpace.bound,
            css: boundStyle,
            container: legendValuesGroup,
            component: gLegendRef
        });
        for(var i = 0; i < this.node.length; i++)this.node[i].remove();
        this.node = [];
        for(index = 0, length = valueRatio.length; index < length; index++){
            smartText = smartTexts[index];
            if (!smartText) continue;
            if (isLegendPosBottom) {
                pos.y = logicArea.y + smartText.height / 2;
                if (index === length - 1) pos.x = logicArea.x + smartText.x - smartText.width / 2;
                else if (index) pos.x = logicArea.x + smartText.x;
                else pos.x = logicArea.x + smartText.x + smartText.width / 2;
            } else {
                pos.x = logicArea.x + smartText.width / 2;
                if (index === length - 1) pos.y = logicArea.y + smartText.y - smartText.height / 2;
                else if (index) pos.y = logicArea.y + smartText.y;
                else pos.y = logicArea.y + smartText.y + smartText.height / 2;
            }
            this.node.push(animationManager.setAnimation({
                el: "text",
                attr: {
                    text: smartText.text,
                    x: pos.x,
                    y: pos.y,
                    lineHeight: this._metaStyle.lineHeight,
                    fill: conf.style.fill
                },
                container: legendValuesGroup,
                component: gLegendRef
            }));
        }
        return {
            group: legendValuesGroup,
            bound: bound
        };
    };
    return LegendValues;
}(LegendLabels);
var _default = GLegend;
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","@babel/runtime/helpers/assertThisInitialized":"1mVba","@babel/runtime/helpers/inheritsLoose":"bfCya","@fusioncharts/core/src/lib":"gGvaa","@fusioncharts/core/src/component-interface":"flMoh"}]},["iuSFH"], null, "parcelRequire40d9")

//# sourceMappingURL=maps.d88a3e47.js.map
