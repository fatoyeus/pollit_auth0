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
})({"aMSMw":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7b202c87bd4be293";
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

},{}],"7cTeu":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _raphael = _interopRequireDefault(require("../vendors/redraphael/source/raphael.vml"));
var _redraphaelExport = _interopRequireDefault(require("./redraphael.export.vml"));
var _default = {
    extension: function extension(FusionCharts) {
        var R = FusionCharts.getDep("redraphael", "plugin");
        (0, _raphael.default)(R);
        (0, _redraphaelExport.default)(R);
    },
    name: "redraphaelVml",
    type: "plugin",
    requiresFusionCharts: true
};
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"7XM86","../vendors/redraphael/source/raphael.vml":"k8oUF","./redraphael.export.vml":"6JjPF"}],"k8oUF":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = _default;
var _raphael = require("./raphael.lib");
function _default(R) {
    if (R.vml) {
        var LoadRefImage = function LoadRefImage(element, attrs) {
            var src = attrs.src, parent = element._.group, node1 = element.node;
            if (!element._.RefImg) element._.RefImg = new Image;
            if (attrs.src === undefined) return;
            element._.RefImg.src = src;
        };
        var has = "hasOwnProperty", Str = String, toFloat = parseFloat, math = Math, round = math.round, mmax = math.max, mmin = math.min, sqrt = math.sqrt, abs = math.abs, fillString = "fill", separator = /[, ]+/, eve = R.eve, ms = " progid:DXImageTransform.Microsoft", arrayShift = Array.prototype.shift, doc = R._g.doc, f = doc.createElement("div"), b, S = " ", E = "", map = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        }, bites = /([clmz]),?([^clmz]*)/gi, blurregexp = / progid:\S+Blur\([^\)]+\)/g, val = /-?[^,\s-]+/g, cssDot = "position:absolute;left:0;top:0;width:1px;height:1px", zoom = 21600, pathTypes = {
            path: 1,
            rect: 1,
            image: 1
        }, ovalTypes = {
            circle: 1,
            ellipse: 1
        }, path2vml = function path2vml(path) {
            var total = /[ahqstv]/gi, command = R._pathToAbsolute;
            Str(path).match(total) && (command = R._path2curve);
            total = /[clmz]/g;
            if (command == R._pathToAbsolute && !Str(path).match(total)) {
                var res = Str(path).replace(bites, function(all, command, args) {
                    var vals = [], isMove = command.toLowerCase() == "m", res = map[command];
                    args.replace(val, function(value) {
                        if (isMove && vals.length == 2) {
                            res += vals + map[command == "m" ? "l" : "L"];
                            vals = [];
                        }
                        vals.push(round(value * zoom));
                    });
                    return res + vals;
                });
                return res || "m0,0";
            }
            var pa = command(path), p, r;
            res = [];
            for(var i = 0, ii = pa.length; i < ii; i++){
                p = pa[i];
                r = pa[i][0].toLowerCase();
                r == "z" && (r = "x");
                for(var j = 1, jj = p.length; j < jj; j++)r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
                res.push(r);
            }
            return res.length ? res.join(S) : "m0,0";
        }, compensation = function compensation(deg, dx, dy) {
            var m = R.matrix();
            m.rotate(-deg, .5, .5);
            return {
                dx: m.x(dx, dy),
                dy: m.y(dx, dy)
            };
        }, setCoords = function setCoords(p, sx, sy, dx, dy, deg) {
            var _ = p._, m = p.matrix, fillpos = _.fillpos, o = p.node, s = o.style, y1 = 1, flip = "", dxdy, kx = zoom / sx, ky = zoom / sy;
            s.visibility = "hidden";
            if (!sx || !sy) return;
            o.coordsize = abs(kx) + S + abs(ky);
            s.rotation = deg * (sx * sy < 0 ? -1 : 1);
            if (deg) {
                var c = compensation(deg, dx, dy);
                dx = c.dx;
                dy = c.dy;
            }
            sx < 0 && (flip += "x");
            sy < 0 && (flip += " y") && (y1 = -1);
            s.flip = flip;
            o.coordorigin = dx * -kx + S + dy * -ky;
            if (fillpos || _.fillsize) {
                var fill = o.getElementsByTagName(fillString);
                fill = fill && fill[0];
                if (fill) {
                    o.removeChild(fill);
                    if (fillpos) {
                        c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                        fill.position = c.dx * y1 + S + c.dy * y1;
                    }
                    if (_.fillsize) fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
                    o.appendChild(fill);
                }
            }
            s.visibility = "visible";
        };
        f.innerHTML = '<v:shape adj="1"/>';
        b = f.firstChild;
        b.style.behavior = "url(#default#VML)";
        if (!(b && typeof b.adj == "object")) R.type = E;
        f = null;
        R._url = E;
        R.toString = function() {
            return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
        };
        var addArrow = function addArrow(o, value, isEnd) {
            var values = Str(value).toLowerCase().split("-"), se = isEnd ? "end" : "start", i = values.length, type = "classic", w = "medium", h = "medium";
            while(i--)switch(values[i]){
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    type = values[i];
                    break;
                case "wide":
                case "narrow":
                    h = values[i];
                    break;
                case "long":
                case "short":
                    w = values[i];
                    break;
            }
            var stroke = o.node.getElementsByTagName("stroke")[0];
            stroke[se + "arrow"] = type;
            stroke[se + "arrowlength"] = w;
            stroke[se + "arrowwidth"] = h;
        }, applyCustomAttributes = function applyCustomAttributes(o, attrs) {
            for(var key in attrs){
                eve("raphael.attr." + key + "." + o.id, o, attrs[key], key);
                o.ca[key] && o.attr(key, attrs[key]);
            }
        }, styles = [
            "font",
            "line-height",
            "font-family",
            "font-weight",
            "font-style",
            "font-size"
        ], getComputedFontStyle = function getComputedFontStyle(o) {
            var style = {}, _break, i, len = styles.length, attrs;
            while(o.paper && o.paper.canvas){
                attrs = o.attrs;
                _break = true;
                for(i = 0; i < len; i++)if (!style[styles[i]]) {
                    style[styles[i]] = attrs[styles[i]];
                    _break = false;
                }
                if (_break) break;
                o = o.parent;
            }
            return style;
        }, setFillAndStroke = R._setFillAndStroke = function(o, params) {
            if (!o.paper.canvas) return;
            o.attrs = o.attrs || {};
            var node1 = o.node, a = o.attrs, s = node1.style, xy, oriOp, newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r), isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry), isGroup = o.type === "group", res = o;
            oriOp = res.oriOp || (res.oriOp = {});
            for(var par in params){
                if (params[par] === "") {
                    node1.removeAttribute(par);
                    delete a[par];
                    delete params[par];
                    continue;
                } else if (params[has](par)) a[par] = params[par];
            }
            if (newpath) {
                a.path = R._getPath[o.type](o);
                o._.dirty = 1;
            }
            params.href && (node1.href = params.href);
            params.title && (node1.title = params.title);
            params.target && (node1.target = params.target);
            params.cursor && (s.cursor = params.cursor);
            "blur" in params && o.blur(params.blur);
            if (params.path && o.type == "path" || newpath) {
                node1.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
                if (o.type == "image") {
                    o._.fillpos = [
                        a.x,
                        a.y
                    ];
                    o._.fillsize = [
                        a.width,
                        a.height
                    ];
                    setCoords(o, 1, 1, 0, 0, 0);
                }
            }
            "transform" in params && o.transform(params.transform);
            if ("rotation" in params) {
                var rotation = params.rotation;
                if (R.is(rotation, "array")) o.rotate.apply(o, rotation);
                else o.rotate(rotation);
            }
            if ("visibility" in params) params.visibility === "hidden" ? o.hide() : o.show();
            if (isOval) {
                var cx = +a.cx, cy = +a.cy, rx = +a.rx || +a.r || 0, ry = +a.ry || +a.r || 0;
                node1.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
            }
            if ("clip-rect" in params) {
                var rect = Str(params["clip-rect"]).split(separator);
                if (rect.length == 4) {
                    rect[0] = +rect[0];
                    rect[1] = +rect[1];
                    rect[2] = +rect[2] + rect[0];
                    rect[3] = +rect[3] + rect[1];
                    var div = isGroup ? node1 : node1.clipRect || R._g.doc.createElement("div"), offset, dstyle = div.style;
                    if (isGroup) {
                        o.clip = rect.slice();
                        offset = o.matrix.offset();
                        offset = [
                            toFloat(offset[0]),
                            toFloat(offset[1])
                        ];
                        rect[0] -= offset[0];
                        rect[1] -= offset[1];
                        rect[2] -= offset[0];
                        rect[3] -= offset[1];
                        dstyle.width = "1px";
                        dstyle.height = "1px";
                    } else if (!node1.clipRect) {
                        dstyle.top = "0";
                        dstyle.left = "0";
                        dstyle.width = o.paper.width + "px";
                        dstyle.height = o.paper.height + "px";
                        node1.parentNode.insertBefore(div, node1);
                        div.appendChild(node1);
                        div.raphael = true;
                        div.raphaelid = node1.raphaelid;
                        node1.clipRect = div;
                    }
                    dstyle.position = "absolute";
                    dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
                }
                if (!params["clip-rect"]) {
                    if (isGroup && o.clip) {
                        node1.style.clip = "rect(0px 10800px 10800px 0px)";
                        delete o.clip;
                    } else if (node1.clipRect) node1.clipRect.style.clip = "rect(0px 10800px 10800px 0px)";
                }
            }
            if ("shape-rendering" in params) node1.style.antialias = params["shape-rendering"] !== "crisp";
            if (o.textpath || isGroup) {
                var textpathStyle = isGroup ? node1.style : o.textpath.style;
                params.font && (textpathStyle.font = params.font);
                params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
                params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
                params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
                params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
            }
            if ("arrow-start" in params) R.addArrow && R.addArrow(res, params["arrow-start"]);
            if ("arrow-end" in params) R.addArrow && R.addArrow(res, params["arrow-end"], 1);
            if (params.opacity != null || params["stroke-width"] != null || params.fill != null || params.src != null || params.stroke != null || params["stroke-width"] != null || params["stroke-opacity"] != null || params["fill-opacity"] != null || params["stroke-dasharray"] != null || params["stroke-miterlimit"] != null || params["stroke-linejoin"] != null || params["stroke-linecap"] != null) {
                var fill = node1.getElementsByTagName(fillString), newfill = false, fillOpacity = -1;
                fill = fill && fill[0];
                !fill && (newfill = fill = createNode(fillString));
                if (o.type == "image" && params.src) {
                    LoadRefImage(o, params);
                    fill.src = params.src;
                }
                params.fill && (fill.on = true);
                if (fill.on == null || params.fill == "none" || params.fill === null) fill.on = false;
                if (fill.on && params.fill) {
                    var isURL = Str(params.fill).match(R._ISURL), urlArr;
                    if (isURL) {
                        urlArr = params.fill.split(R._ISURL);
                        fill.parentNode == node1 && node1.removeChild(fill);
                        fill.rotate = true;
                        fill.src = urlArr[1];
                        fill.type = "tile";
                        var bbox = o.getBBox(1);
                        fill.position = bbox.x + S + bbox.y;
                        o._.fillpos = [
                            bbox.x,
                            bbox.y
                        ];
                        R._preload(urlArr[1], function() {
                            o._.fillsize = [
                                this.offsetWidth,
                                this.offsetHeight
                            ];
                        });
                    } else {
                        var color = R.getRGB(params.fill);
                        fill.color = color.hex;
                        fill.src = E;
                        fill.type = "solid";
                        if (color.error && (res.type in {
                            circle: 1,
                            ellipse: 1
                        } || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                            a.fill = "none";
                            a.gradient = params.fill;
                            fill.rotate = false;
                        } else if ("opacity" in color && !("fill-opacity" in params)) oriOp.nonGradOpacity = fillOpacity = color.opacity;
                    }
                }
                if (fillOpacity !== -1 || "fill-opacity" in params || "opacity" in params) {
                    var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1);
                    opacity = mmin(mmax(opacity, 0), 1);
                    oriOp.opacity = opacity;
                    if (oriOp.opacity1 !== undefined) {
                        fill.opacity = oriOp.opacity1 * opacity;
                        fill["o:opacity2"] = oriOp.opacity2 * opacity;
                    } else fill.opacity = opacity * (oriOp.nonGradOpacity === undefined ? 1 : oriOp.nonGradOpacity);
                    if (fill.src) fill.color = "none";
                }
                oriOp.opacity = undefined;
                node1.appendChild(fill);
                var stroke = node1.getElementsByTagName("stroke") && node1.getElementsByTagName("stroke")[0], newstroke = false;
                !stroke && (newstroke = stroke = createNode("stroke"));
                if (params.stroke && params.stroke != "none" || params["stroke-width"] || params["stroke-opacity"] != null || params["stroke-dasharray"] || params["stroke-miterlimit"] || params["stroke-linejoin"] || params["stroke-linecap"]) stroke.on = true;
                (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
                var strokeColor = R.getRGB("stroke" in params ? params.stroke : a.stroke);
                stroke.on && params.stroke && (stroke.color = strokeColor.hex);
                opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.opacity + 1 || 2) - 1);
                var width = (toFloat(params["stroke-width"]) || 1) * .75;
                opacity = mmin(mmax(opacity, 0), 1);
                params["stroke-width"] == null && (width = a["stroke-width"]);
                params["stroke-width"] && (stroke.weight = width);
                width && width < 1 && (opacity *= width) && (stroke.weight = 1);
                stroke.opacity = a.stroke !== "none" ? opacity : 0;
                params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"]) || newstroke && (newstroke.joinstyle = "miter");
                stroke.miterlimit = params["stroke-miterlimit"] || 8;
                params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
                if (params["stroke-dasharray"]) {
                    var dasharray = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : params["stroke-dasharray"].join && params["stroke-dasharray"].join(" ") || E;
                }
                newstroke && node1.appendChild(stroke);
            }
            if (res.type == "text") {
                res.paper.canvas.style.display = E;
                var span = res.paper.span, m = 100, _style = getComputedFontStyle(res), fontSize = _style.font && _style.font.match(/\d+(?:\.\d*)?(?=px)/), lineHeight = _style["line-height"] && (_style["line-height"] + E).match(/\d+(?:\.\d*)?(?=px)/);
                s = span.style;
                _style.font && (s.font = _style.font);
                _style["font-family"] && (s.fontFamily = _style["font-family"]);
                _style["font-weight"] && (s.fontWeight = _style["font-weight"]);
                _style["font-style"] && (s.fontStyle = _style["font-style"]);
                fontSize = toFloat(_style["font-size"] || fontSize && fontSize[0]) || 10;
                s.fontSize = fontSize * m + "px";
                lineHeight = toFloat(_style["line-height"] || lineHeight && lineHeight[0] || fontSize * 1.2) || 12;
                s.lineHeight = lineHeight * m + "px";
                R.is(params.text, "array") && (params.text = res.textpath.string = params.text.join("\n").replace(/<br\s*?\/?>/gi, "\n"));
                res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var brect = span.getBoundingClientRect();
                res.W = a.w = (brect.right - brect.left) / m;
                res.H = a.h = (brect.bottom - brect.top) / m;
                res.X = a.x;
                res.Y = a.y;
                var leading = lineHeight - fontSize;
                switch(a["vertical-align"]){
                    case "top":
                        res.bby = res.H / 2;
                        break;
                    case "bottom":
                        res.bby = -res.H / 2;
                        break;
                    default:
                        res.bby = 0;
                }
                ("x" in params || "y" in params || res.bby !== undefined) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round((a.y + (res.bby || 0)) * zoom), round(a.x * zoom) + 1));
                var dirtyattrs = [
                    "x",
                    "y",
                    "text",
                    "font",
                    "font-family",
                    "font-weight",
                    "font-style",
                    "font-size",
                    "line-height"
                ];
                for(var d = 0, dd = dirtyattrs.length; d < dd; d++)if (dirtyattrs[d] in params) {
                    res._.dirty = 1;
                    break;
                }
                switch(a["text-anchor"]){
                    case "start":
                        res.textpath.style["v-text-align"] = "left";
                        res.bbx = res.W / 2;
                        break;
                    case "end":
                        res.textpath.style["v-text-align"] = "right";
                        res.bbx = -res.W / 2;
                        break;
                    default:
                        res.textpath.style["v-text-align"] = "center";
                        res.bbx = 0;
                        break;
                }
                res.textpath.style["v-text-kern"] = true;
            }
        }, updateFollowers = R._updateFollowers = function() {
            var i, ii, followerElem, args = (0, _raphael.getArrayCopy)(arguments), o = arrayShift.call(args), fnName = arrayShift.call(args);
            for(i = 0, ii = o.followers.length; i < ii; i++){
                followerElem = o.followers[i].el;
                followerElem[fnName].apply(followerElem, args);
            }
        }, addGradientFill = function addGradientFill(o, gradient, fill) {
            o.attrs = o.attrs || {};
            var attrs = o.attrs, pow = Math.pow, oriFOpacity, oriOp = o.oriOp, opacity, oindex, type = "linear", fxfy = ".5 .5";
            o.attrs.gradient = gradient;
            gradient = Str(gradient).replace(R._radial_gradient, function(all, opts) {
                type = "radial";
                opts = opts && opts.split(",") || [];
                var cx = opts[0], cy = opts[1], r = opts[2], fx = opts[3], fy = opts[4], units = opts[5];
                if (fx && fy) {
                    fx = toFloat(fx);
                    fy = toFloat(fy);
                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
                    fxfy = fx + S + fy;
                }
                return E;
            });
            gradient = gradient.split(/\s*\-\s*/);
            if (type == "linear") {
                var angle = gradient.shift();
                angle = -toFloat(angle);
                if (isNaN(angle)) return null;
            }
            var dots = R._parseDots(gradient);
            if (!dots) return null;
            o = o.shape || o.node;
            if (dots.length) {
                fill.parentNode == o && o.removeChild(fill);
                fill.on = true;
                fill.method = "none";
                fill.color = dots[0].color;
                fill.color2 = dots[dots.length - 1].color;
                var clrs = [], opacity1 = 1, opacity2 = dots[0].opacity === undefined ? 1 : dots[0].opacity;
                for(var i = 0, ii = dots.length; i < ii; i++){
                    dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
                    if (dots[i].opacity !== undefined) opacity1 = dots[i].opacity;
                }
                fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
                oriOp.opacity1 = opacity1;
                oriOp.opacity2 = opacity2;
                oriFOpacity = oriOp.opacity === undefined ? 1 : oriOp.opacity;
                fill.opacity = opacity1 * oriFOpacity;
                fill["o:opacity2"] = opacity2 * oriFOpacity;
                if (type == "radial") {
                    fill.type = "gradientTitle";
                    fill.focus = "100%";
                    fill.focussize = "0 0";
                    fill.focusposition = fxfy;
                    fill.angle = 0;
                } else {
                    fill.type = "gradient";
                    fill.angle = (270 - angle) % 360;
                }
                o.appendChild(fill);
            }
            return 1;
        }, Element = function Element(node1, vml, group) {
            var o = this, parent = group || vml, skew;
            parent.canvas && parent.canvas.appendChild(node1);
            skew = createNode("skew");
            skew.on = true;
            node1.appendChild(skew);
            o.skew = skew;
            o.node = o[0] = node1;
            node1.raphael = true;
            node1.raphaelid = o.id = R._oid++;
            o.X = 0;
            o.Y = 0;
            o.attrs = o.attrs || {};
            o.followers = o.followers || [];
            o.paper = vml;
            o.ca = o.customAttributes = o.customAttributes || new vml._CustomAttributes;
            o.matrix = R.matrix();
            o._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0,
                dirty: 1,
                dirtyT: 1
            };
            o.parent = parent;
            !parent.bottom && (parent.bottom = o);
            o.prev = parent.top;
            parent.top && (parent.top.next = o);
            parent.top = o;
            o.next = null;
        };
        var elproto = R.el;
        Element.prototype = elproto;
        elproto.constructor = Element;
        elproto.transform = function(tstr) {
            if (tstr == null) return this._.transform;
            var vbs = this.paper._viewBoxShift, vbt = vbs ? "s" + [
                vbs.scale,
                vbs.scale
            ] + "-1-1t" + [
                vbs.dx,
                vbs.dy
            ] : E, oldt;
            if (vbs) oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
            R._extractTransform(this, vbt + tstr);
            var matrix = this.matrix.clone(), skew = this.skew, o = this.node, split, isGrad = ~Str(this.attrs.fill).indexOf("-"), isPatt = !Str(this.attrs.fill).indexOf("url(");
            matrix.translate(-0.5, -0.5);
            if (isPatt || isGrad || this.type == "image") {
                skew.matrix = "1 0 0 1";
                skew.offset = "0 0";
                split = matrix.split();
                if (isGrad && split.noRotation || !split.isSimple) {
                    o.style.filter = matrix.toFilter();
                    var bb = this.getBBox(), bbt = this.getBBox(1), xget = bb.x2 && bbt.x2 && "x2" || "x", yget = bb.y2 && bbt.y2 && "y2" || "y", dx = bb[xget] - bbt[xget], dy = bb[yget] - bbt[yget];
                    o.coordorigin = dx * -zoom + S + dy * -zoom;
                    setCoords(this, 1, 1, dx, dy, 0);
                } else {
                    o.style.filter = E;
                    setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
                }
            } else {
                o.style.filter = E;
                skew.matrix = Str(matrix);
                skew.offset = matrix.offset();
            }
            oldt && (this._.transform = oldt);
            return this;
        };
        elproto.rotate = function(deg, cx, cy) {
            var o = this;
            if (o.removed) return o;
            updateFollowers(o, "rotate", deg, cx, cy);
            if (deg == null) return;
            deg = Str(deg).split(separator);
            if (deg.length - 1) {
                cx = toFloat(deg[1]);
                cy = toFloat(deg[2]);
            }
            deg = toFloat(deg[0]);
            cy == null && (cx = cy);
            if (cx == null || cy == null) {
                var bbox = o.getBBox(1);
                cx = bbox.x + bbox.width / 2;
                cy = bbox.y + bbox.height / 2;
            }
            o._.dirtyT = 1;
            o.transform(o._.transform.concat([
                [
                    "r",
                    deg,
                    cx,
                    cy
                ]
            ]));
            return o;
        };
        elproto.translate = function(dx, dy) {
            var o = this;
            if (o.removed) return o;
            updateFollowers(o, "translate", dx, dy);
            dx = Str(dx).split(separator);
            if (dx.length - 1) dy = toFloat(dx[1]);
            dx = toFloat(dx[0]) || 0;
            dy = +dy || 0;
            if (o._.bbox) {
                o._.bbox.x += dx;
                o._.bbox.y += dy;
            }
            o.transform(o._.transform.concat([
                [
                    "t",
                    dx,
                    dy
                ]
            ]));
            return o;
        };
        elproto.scale = function(sx, sy, cx, cy) {
            var o = this;
            if (o.removed) return o;
            updateFollowers(o, "scale", sx, sy, cx, cy);
            sx = Str(sx).split(separator);
            if (sx.length - 1) {
                sy = toFloat(sx[1]);
                cx = toFloat(sx[2]);
                cy = toFloat(sx[3]);
                isNaN(cx) && (cx = null);
                isNaN(cy) && (cy = null);
            }
            sx = toFloat(sx[0]);
            sy == null && (sy = sx);
            cy == null && (cx = cy);
            if (cx == null || cy == null) var bbox = o.getBBox(1);
            cx = cx == null ? bbox.x + bbox.width / 2 : cx;
            cy = cy == null ? bbox.y + bbox.height / 2 : cy;
            o.transform(o._.transform.concat([
                [
                    "s",
                    sx,
                    sy,
                    cx,
                    cy
                ]
            ]));
            o._.dirtyT = 1;
            return o;
        };
        elproto.hide = function(soft) {
            var o = this;
            updateFollowers(o, "hide", soft);
            !o.removed && (o.node.style.display = "none");
            return o;
        };
        elproto.show = function(soft) {
            var o = this;
            updateFollowers(o, "show", soft);
            !o.removed && (o.node.style.display = E);
            return o;
        };
        elproto._getBBox = function() {
            var o = this;
            if (o.removed) return {};
            return {
                x: o.X + (o.bbx || 0) - o.W / 2,
                y: o.Y + (o.bby || 0) - o.H / 2,
                width: o.W,
                height: o.H
            };
        };
        elproto.remove = function() {
            if (this.removed || !this.parent.canvas) return;
            var o = this, node1 = R._engine.getNode(o), paper = o.paper, shape = o.shape, i;
            paper.__set__ && paper.__set__.exclude(o);
            eve.unbind("raphael.*.*." + o.id);
            shape && shape.parentNode.removeChild(shape);
            node1.parentNode && node1.parentNode.removeChild(node1);
            while(i = o.followers.pop())i.el.remove();
            while(i = o.bottom)i.remove();
            if (o._drag) o.undrag();
            if (o.events) while(i = o.events.pop())i.unbind();
            o.removeData();
            delete paper._elementsById[o.id];
            R._tear(o, o.parent);
            for(var i in o)o[i] = typeof o[i] === "function" ? R._removedFactory(i) : null;
            o.removed = true;
        };
        elproto.attr = function(name, value) {
            if (this.removed) return this;
            if (name == null) {
                var res = {};
                for(var a in this.attrs)if (this.attrs[has](a)) res[a] = this.attrs[a];
                res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
                res.transform = this._.transform;
                res.visibility = this.node.style.display === "none" ? "hidden" : "visible";
                return res;
            }
            if (value == null && R.is(name, "string")) {
                if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) return this.attrs.gradient;
                if (name == "visibility") return this.node.style.display === "none" ? "hidden" : "visible";
                var names = name.split(separator), out = {};
                for(var i = 0, ii = names.length; i < ii; i++){
                    name = names[i];
                    if (name in this.attrs) out[name] = this.attrs[name];
                    else if (R.is(this.ca[name], "function")) out[name] = this.ca[name].def;
                    else out[name] = R._availableAttrs[name];
                }
                return ii - 1 ? out : out[names[0]];
            }
            if (this.attrs && value == null && R.is(name, "array")) {
                out = {};
                for(i = 0, ii = name.length; i < ii; i++)out[name[i]] = this.attr(name[i]);
                return out;
            }
            var params;
            if (value != null) {
                params = {};
                params[name] = value;
            }
            value == null && R.is(name, "object") && (params = name);
            if (!R.stopPartialEventPropagation) for(var key in params)eve("raphael.attr." + key + "." + this.id, this, params[key], key);
            if (params) {
                var todel = {};
                for(key in this.ca)if (this.ca[key] && params[has](key) && R.is(this.ca[key], "function") && !this.ca["_invoked" + key]) {
                    this.ca["_invoked" + key] = true;
                    var par = this.ca[key].apply(this, [].concat(params[key]));
                    delete this.ca["_invoked" + key];
                    for(var subkey in par)if (par[has](subkey)) params[subkey] = par[subkey];
                    this.attrs[key] = params[key];
                    if (par === false) {
                        todel[key] = params[key];
                        delete params[key];
                    }
                }
                if ("text" in params && this.type == "text") {
                    R.is(params.text, "array") && (params.text = params.text.join("\n"));
                    this.textpath.string = params.text.replace(/<br\s*?\/?>/gi, "\n");
                }
                setFillAndStroke(this, params);
                var follower;
                for(i = 0, ii = this.followers.length; i < ii; i++){
                    follower = this.followers[i];
                    follower.cb && !follower.cb.call(follower.el, params, this) || follower.el.attr(params);
                }
                for(var subkey in todel)params[subkey] = todel[subkey];
            }
            return this;
        };
        elproto.on = function(eventType, handler, context) {
            var elem = this, dummyEve, fn = handler;
            if (elem.removed) return elem;
            elem._actualListners || (elem._actualListners = []);
            elem._derivedListeners || (elem._derivedListeners = []);
            switch(eventType){
                case "fc-dragstart":
                    elem.drag(null, handler);
                    return elem;
                case "fc-dragmove":
                    elem.drag(handler);
                    return elem;
                case "fc-dragend":
                    elem.drag(null, null, handler);
                    return elem;
                case "fc-dbclick":
                    elem.dbclick(handler, context);
                    return elem;
                case "fc-click":
                    elem.fcclick(handler, context);
                    return elem;
            }
            eventType = eventType.replace(/fc-/, "");
            if (elem._ && elem._.RefImg && (eventType === "load" || eventType === "error")) {
                node = elem._.RefImg;
                fn = function(el, handler) {
                    return function(e) {
                        dummyEve = {};
                        R.makeSelectiveCopy(dummyEve, e);
                        dummyEve.target = elem._.RefImg;
                        !el.removed && handler.call(el, dummyEve);
                    };
                }(elem, handler);
            } else node = elem.node;
            if (!node.attachEvent) fn = function fn() {
                var evt = R._g.win.event;
                evt.target = evt.srcElement;
                handler(evt);
            };
            else if (fn === handler) fn = function fn(e) {
                handler.call(context || elem, e);
            };
            elem._actualListners.push(handler);
            elem._derivedListeners.push(fn);
            if (node.attachEvent) node.attachEvent("on" + eventType, fn);
            else node["on" + eventType] = fn;
            return elem;
        };
        elproto.off = function(eventType, handler) {
            var elem = this, index;
            if (elem.removed) return elem;
            switch(eventType){
                case "fc-dragstart":
                    elem.undragstart(handler);
                    return elem;
                case "fc-dragmove":
                    elem.undragmove(handler);
                    return elem;
                case "fc-dragend":
                    elem.undragend(handler);
                    return elem;
                case "fc-dbclick":
                    elem.undbclick(handler);
                    return elem;
                case "fc-click":
                    elem.fcunclick(handler);
                    return elem;
            }
            eventType = eventType.replace(/fc-/, "");
            index = elem._actualListners.indexOf(handler);
            if (index !== -1) {
                handler = elem._derivedListeners[index];
                elem._actualListners.splice(index, 1);
                elem._derivedListeners.splice(index, 1);
            }
            if (elem.node.attachEvent) elem.node.detachEvent("on" + eventType, handler);
            else elem.node["on" + eventType] = null;
            return elem;
        };
        R._engine.getNode = function(el) {
            var node1 = el.node || el[0].node;
            return node1.clipRect || node1;
        };
        R._engine.getLastNode = function(el) {
            var node1 = el.node || el[el.length - 1].node;
            return node1.clipRect || node1;
        };
        R._engine.group = function(vml, id, group, overrideId) {
            var el = R._g.doc.createElement("div"), className, universalClassName = vml._HTMLClassName, p = new Element(el, vml, group);
            el.style.cssText = cssDot;
            p._id = id || E;
            if (id) {
                if (overrideId) className = el.className = "raphael-group-" + id;
                else className = el.className = "raphael-group-" + p.id + "-" + id;
            }
            if (universalClassName) el.className = className ? className + " " + universalClassName : universalClassName;
            (group || vml).canvas.appendChild(el);
            p.type = "group";
            p.canvas = p.node;
            p.transform = R._engine.group.transform;
            p.top = null;
            p.bottom = null;
            return p;
        };
        R._engine.group.transform = function(tstr) {
            if (tstr == null) return this._.transform;
            var o = this, s = o.node.style, c = o.clip, vbs = o.paper._viewBoxShift, vbt = vbs ? "s" + [
                vbs.scale,
                vbs.scale
            ] + "-1-1t" + [
                vbs.dx,
                vbs.dy
            ] : E, oldt, matrix, offset, tx, ty;
            if (vbs) oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, o._.transform || E);
            R._extractTransform(o, vbt + tstr);
            matrix = o.matrix;
            offset = matrix.offset();
            tx = toFloat(offset[0]) || 0;
            ty = toFloat(offset[1]) || 0;
            s.left = tx + "px";
            s.top = ty + "px";
            s.zoom = (o._.tzoom = matrix.get(0)) + E;
            c && (s.clip = R.format("rect({1}px {2}px {3}px {0}px)", [
                c[0] - tx,
                c[1] - ty,
                c[2] - tx,
                c[3] - ty
            ]));
            return o;
        };
        R._engine.path = function(vml, attrs, group) {
            var el = createNode("shape");
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = vml.coordorigin;
            var p = new Element(el, vml, group);
            p.type = attrs.type || "path";
            p.path = [];
            p.Path = E;
            attrs.type && delete attrs.type;
            setFillAndStroke(p, attrs);
            applyCustomAttributes(p, attrs);
            return p;
        };
        R._engine.rect = function(vml, attrs, group) {
            var path = R._rectPath(attrs.x, attrs.y, attrs.w, attrs.h, attrs.r);
            attrs.path = path;
            attrs.type = "rect";
            var res = vml.path(attrs, group), a = res.attrs;
            res.X = a.x;
            res.Y = a.y;
            res.W = a.width;
            res.H = a.height;
            a.path = path;
            return res;
        };
        R._engine.ellipse = function(vml, attrs, group) {
            attrs.type = "ellipse";
            var res = vml.path(attrs, group), a = res.attrs;
            res.X = a.x - a.rx;
            res.Y = a.y - a.ry;
            res.W = a.rx * 2;
            res.H = a.ry * 2;
            return res;
        };
        R._engine.circle = function(vml, attrs, group) {
            attrs.type = "circle";
            var res = vml.path(attrs, group), a = res.attrs;
            res.X = a.x - a.r;
            res.Y = a.y - a.r;
            res.W = res.H = a.r * 2;
            return res;
        };
        R._engine.image = function(vml, attrs, group) {
            attrs.w || (attrs.w = attrs.width);
            attrs.h || (attrs.h = attrs.height);
            var path = R._rectPath(attrs.x, attrs.y, attrs.w, attrs.h);
            attrs.path = path;
            attrs.type = "image";
            attrs.stroke = "none";
            var res = vml.path(attrs, group), a = res.attrs, node1 = res.node, fill = node1.getElementsByTagName(fillString)[0];
            !res._.RefImg && (res._.RefImg = new Image);
            a.src = attrs.src;
            res.X = a.x = attrs.x;
            res.Y = a.y = attrs.y;
            res.W = a.width = attrs.w;
            res.H = a.height = attrs.h;
            fill.parentNode == node1 && node1.removeChild(fill);
            fill.rotate = true;
            fill.src = a.src;
            fill.type = "tile";
            res._.fillpos = [
                a.x,
                a.y
            ];
            res._.fillsize = [
                a.w,
                a.h
            ];
            node1.appendChild(fill);
            setCoords(res, 1, 1, 0, 0, 0);
            return res;
        };
        R._engine.text = function(vml, attrs, group, css) {
            var el = createNode("shape"), path = createNode("path"), o = createNode("textpath");
            x = attrs.x || 0;
            y = attrs.y || 0;
            text = attrs.text;
            path.v = R.format("m{0},{1}l{2},{1}", round(attrs.x * zoom), round(attrs.y * zoom), round(attrs.x * zoom) + 1);
            path.textpathok = true;
            o.string = Str(attrs.text).replace(/<br\s*?\/?>/gi, "\n");
            o.on = true;
            el.style.cssText = cssDot;
            el.coordsize = zoom + S + zoom;
            el.coordorigin = "0 0";
            var p = new Element(el, vml, group);
            p.shape = el;
            p.path = path;
            p.textpath = o;
            p.type = "text";
            p.attrs.text = Str(attrs.text || E);
            p.attrs.x = attrs.x;
            p.attrs.y = attrs.y;
            p.attrs.w = 1;
            p.attrs.h = 1;
            css && p.css && p.css(css, undefined, true);
            setFillAndStroke(p, attrs);
            applyCustomAttributes(p, attrs);
            el.appendChild(o);
            el.appendChild(path);
            return p;
        };
        R._engine.setSize = function(width, height) {
            var cs = this.canvas.style;
            this.width = width;
            this.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            width && (cs.width = width);
            height && (cs.height = height);
            cs.clip = "rect(0 " + cs.width + " " + cs.height + " 0)";
            if (this._viewBox) R._engine.setViewBox.apply(this, this._viewBox);
            return this;
        };
        R._engine.setViewBox = function(x1, y1, w, h, fit) {
            eve("raphael.setViewBox", this, this._viewBox, [
                x1,
                y1,
                w,
                h,
                fit
            ]);
            var width = this.width, height = this.height, size = 1 / mmax(w / width, h / height), H, W;
            if (fit) {
                H = height / h;
                W = width / w;
                if (w * H < width) x1 -= (width - w * H) / 2 / H;
                if (h * W < height) y1 -= (height - h * W) / 2 / W;
            }
            this._viewBox = [
                x1,
                y1,
                w,
                h,
                !!fit
            ];
            this._viewBoxShift = {
                dx: -x1,
                dy: -y1,
                scale: size
            };
            this.forEach(function(el) {
                el.transform("...");
            });
            return this;
        };
        var createNode;
        R._engine.initWin = function(win) {
            var doc = win.document;
            doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
                createNode = R._createNode = function(tagName, attrs) {
                    var el = doc.createElement("<rvml:" + tagName + ' class="rvml">'), prop;
                    for(prop in attrs)el[prop] = Str(attrs[prop]);
                    return el;
                };
            } catch (e) {
                createNode = R._createNode = function(tagName, attrs) {
                    var el = doc.createElement("<" + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'), prop;
                    for(prop in attrs)el[prop] = Str(attrs[prop]);
                    return el;
                };
            }
        };
        R._engine.initWin(R._g.win);
        R._engine.create = function() {
            var con = R._getContainer.apply(0, arguments), container = con.container, height = con.height, s, width = con.width, x1 = con.x, y1 = con.y;
            if (!container) throw new Error("VML container not found.");
            var res = new R._Paper, c = res.canvas = R._g.doc.createElement("div"), cs = c.style;
            x1 = x1 || 0;
            y1 = y1 || 0;
            width = width || 512;
            height = height || 342;
            res.width = width;
            res.height = height;
            width == +width && (width += "px");
            height == +height && (height += "px");
            res.coordsize = zoom * 1e3 + S + zoom * 1e3;
            res.coordorigin = "0 0";
            c.id = "raphael-paper-" + res.id;
            res.span = R._g.doc.createElement("span");
            res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
            c.appendChild(res.span);
            cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;cursor:default;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
            if (container == 1) {
                R._g.doc.body.appendChild(c);
                cs.left = x1 + "px";
                cs.top = y1 + "px";
                cs.position = "absolute";
            } else if (container.firstChild) container.insertBefore(c, container.firstChild);
            else container.appendChild(c);
            res.renderfix = function() {};
            return res;
        };
        R.prototype.clear = function() {
            var c;
            eve("raphael.clear", this);
            while(c = this.bottom)c.remove();
            this.canvas.innerHTML = E;
            this.span = R._g.doc.createElement("span");
            this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
            this.canvas.appendChild(this.span);
            this.bottom = this.top = null;
        };
        R.prototype.remove = function() {
            var i;
            eve("raphael.remove", this);
            while(i = this.bottom)i.remove();
            this.canvas.parentNode.removeChild(this.canvas);
            for(i in this)this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
            return true;
        };
        R.prototype.setHTMLClassName = function(className) {
            this._HTMLClassName = className;
        };
    }
}

},{"./raphael.lib":"7a7mn"}],"6JjPF":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.default = _default;
var _lib = require("../../lib");
function _default(R) {
    var UNDEF, availableAttrs = R._availableAttrs, NONE = "none", BLANK = "", SPACE = " ", UNDERSCORE = "_", COLON = ":", SCOLONSPACE = "; ", EQUALQUOT = '="', QUOT = '"', QUOTSPACE = QUOT + SPACE, LT = "<", GT = ">", NODESTRPART5 = "</", XLINK = ' xlink:href="', IMGNODE = "image", TXTNODE = "text", GRADIENT = "gradient", RECT = "rect", ASPRATIO = ' preserveAspectRatio="none"', NODESTRPART2 = ' transform="matrix(', NODESTRPART3 = ')" style="', VALIGNSTR = "vertical-align", TEXTANCHOR = "text-anchor", MIDDLE = "middle", TOP = "top", BOTTOM = "bottom", FONTSIZE = "font-size", FONT = "font", LINEHEIGHT = "line-height", FONTFAMILY = "font-family", FONTWEIGHT = "font-weight", CURSOR = "cursor:", TSPANSTR1 = "<tspan ", TSPANSTR2 = 'dy="', TSPANSTR3 = '" x="', TSPANSTR4 = 'dy="', RX = "rx", RY = "ry", TSPANSTR6 = "</tspan>", PXSPACE = "px; ", CLIPRECT = "clip-rect", CLIPSTR1 = '<clipPath id="', CLIPSTR2 = '"><rect x="', CLIPSTR3 = '" y="', CLIPSTR4 = '" width="', CLIPSTR5 = '" height="', CLIPSTR6 = '"/></clipPath>', CLIPSTR7 = ' clip-path="url(#', CLIPSTR8 = QUOT + NODESTRPART2, URLCLOSE = "')\"", BRACKETCLOSE = ")", DTAG = ' d="', FILLSTR1 = "fill:", FILLSTR2 = ' fill="', FILLSTR3 = " fill=\"url('#", FILLSTR4 = ' fill-opacity="', STROKE1 = ' stroke="', STROKE2 = ' stroke-opacity="', STROKEOPAC = "stroke-opacity", LINEAR = "linear", RADIAL = "radial", RGRADIENTSTR1 = '<radialGradient fx = "', RGRADIENTSTR3 = "</radialGradient>", RGRADIENTSTR2 = '" fy = "', RGRADIENTSTR6 = '" cy = "', RGRADIENTSTR5 = '" cx = "', RGRADIENTSTR7 = '" r = "', RGRADIENTSTR8 = '" gradientUnits = "', ID = '" id = "', RGRADIENTSTR4 = '">', LGRADIENTSTR6 = "</linearGradient>", LGRADIENTSTR5 = '" gradientTransform ="matrix(', LGRADIENTSTR1 = '<linearGradient x1 = "', LGRADIENTSTR2 = '" y1 = "', LGRADIENTSTR3 = '" x2 = "', LGRADIENTSTR4 = '" y2 = "', STOPSTR1 = "<stop", STOPSTR2 = ' offset="', STOPSTR3 = '" stop-color="', STOPSTR4 = '" stop-opacity="', STOPSTR5 = '" />', COLORWHITE = "#fff", PERCENT100 = "100%", PERCENT0 = "0%", matrixSanitizerReg = /^matrix\(|\)$/g, commaSanitizerReg = /\,/g, textNewLineReg = /\n|<br\s*?\/?>/gi, retriveNumReg = /[^\d\.]/gi, idSanitizerReg = /[\%\(\)\s,\xb0#]/g, grouptagtestReg = /group/gi, ampregex = /&/g, quot1regex = /"/g, quot2regex = /'/g, ltregex = /</g, gtregex = />/g, ampSTR = "&amp;", quot1STR = "&quot;", quot2STR = "&#39;", ltSTR = "&lt;", gtSTR = "&gt;", IdCounter = 0, gradientUnitNames = {
        userSpaceOnUse: "userSpaceOnUse",
        objectBoundingBox: "objectBoundingBox"
    }, math = Math, toFloat = parseFloat, mmax = math.max, abs = math.abs, pow = math.pow, Str = String, separator = /[, ]+/, attributeParser = {
        blur: function blur() {},
        transform: function transform() {},
        src: function src() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj.src;
            conf.attrSTR += XLINK + value + QUOT;
        },
        path: function path() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj.path;
            value = R._pathToAbsolute(value || BLANK);
            conf.attrSTR += DTAG + (value.toString && value.toString() || BLANK).replace(commaSanitizerReg, SPACE) + QUOT;
        },
        gradient: function gradient(node, conf, defs) {
            var attrsObj = node.attrs, value = attrsObj.gradient, type = LINEAR, id = value, angle, vector, max, dots, fx = .5, fy = .5, gStr = BLANK, gCloseStr = BLANK, stopStr = BLANK, i, ln, cx, cy, r, units;
            id = id.replace(idSanitizerReg, UNDERSCORE);
            if (!defs[id]) {
                value = Str(value).replace(R._radial_gradient, function(all, _opts) {
                    var _fx, _fy, dir, _r, _cx, _cy, sqx, opts = _opts, shifted;
                    opts = opts && opts.split(",") || [];
                    type = RADIAL;
                    _fx = opts[0];
                    _fy = opts[1];
                    _r = opts[2];
                    _cx = opts[3];
                    _cy = opts[4];
                    units = opts[5];
                    shifted = _fx && _fy;
                    if (_r) r = /\%/.test(_r) ? _r : toFloat(_r);
                    if (units === gradientUnitNames.userSpaceOnUse) {
                        if (shifted) {
                            fx = _fx;
                            fy = _fy;
                        }
                        if (_cx && _cy) {
                            cx = _cx;
                            cy = _cy;
                            if (!shifted) {
                                fx = cx;
                                fy = cy;
                            }
                        }
                        return BLANK;
                    }
                    if (shifted) {
                        fx = toFloat(_fx);
                        fy = toFloat(_fy);
                        dir = (fy > .5) * 2 - 1;
                        (sqx = pow(fx - .5, 2)) + pow(fy - .5, 2) > .25 && sqx < .25 && (fy = math.sqrt(.25 - sqx) * dir + .5) && fy !== .5 && (fy = fy.toFixed(5) - 1e-5 * dir);
                    }
                    if (_cx && _cy) {
                        cx = toFloat(_cx);
                        cy = toFloat(_cy);
                        dir = (cy > .5) * 2 - 1;
                        (sqx = pow(cx - .5, 2)) + pow(cy - .5, 2) > .25 && sqx < .25 && (cy = math.sqrt(.25 - sqx) * dir + .5) && cy !== .5 && (cy = cy.toFixed(5) - 1e-5 * dir);
                        if (!shifted) {
                            fx = cx;
                            fy = cy;
                        }
                    }
                    return BLANK;
                });
                value = value.split(/\s*\-\s*/);
                if (type === LINEAR) {
                    angle = value.shift();
                    angle = -toFloat(angle);
                    if (isNaN(angle)) return null;
                    vector = [
                        0,
                        0,
                        math.cos(R.rad(angle)),
                        math.sin(R.rad(angle))
                    ];
                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
                    vector[2] *= max;
                    vector[3] *= max;
                    if (vector[2] < 0) {
                        vector[0] = -vector[2];
                        vector[2] = 0;
                    }
                    if (vector[3] < 0) {
                        vector[1] = -vector[3];
                        vector[3] = 0;
                    }
                }
                dots = R._parseDots(value);
                if (!dots) return null;
                if (type === RADIAL) {
                    gStr = RGRADIENTSTR1 + fx + RGRADIENTSTR2 + fy + RGRADIENTSTR6 + cy + RGRADIENTSTR5 + cx + RGRADIENTSTR7 + r + RGRADIENTSTR8 + units + ID + id + RGRADIENTSTR4;
                    gCloseStr = RGRADIENTSTR3;
                } else {
                    gStr = LGRADIENTSTR1 + vector[0] + LGRADIENTSTR2 + vector[1] + LGRADIENTSTR3 + vector[2] + LGRADIENTSTR4 + vector[3] + LGRADIENTSTR5 + node.matrix.invert() + BRACKETCLOSE + ID + id + RGRADIENTSTR4;
                    gCloseStr = LGRADIENTSTR6;
                }
                for(i = 0, ln = dots.length; i < ln; i++)stopStr += STOPSTR1 + STOPSTR2 + (dots[i].offset ? dots[i].offset : i ? PERCENT100 : PERCENT0) + STOPSTR3 + (dots[i].color || COLORWHITE) + STOPSTR4 + (dots[i].opacity === UNDEF ? 1 : dots[i].opacity) + STOPSTR5;
                defs[id] = true;
                defs.str += gStr + stopStr + gCloseStr;
            }
            conf.attrSTR += FILLSTR3 + id + URLCLOSE;
        },
        fill: function fill(node, conf) {
            var attrsObj = conf.attrs, value = attrsObj.fill, color, opacity;
            if (!node.attrs.gradient) {
                color = R.color(value);
                opacity = color.opacity;
                if (node.type === TXTNODE) conf.styleSTR += FILLSTR1 + color + SCOLONSPACE + STROKEOPAC + COLON + 0 + SCOLONSPACE;
                else {
                    conf.attrSTR += FILLSTR2 + color + QUOT;
                    if (!attrsObj["fill-opacity"] && (opacity || opacity === 0)) conf.attrSTR += FILLSTR4 + opacity + QUOT;
                }
            }
        },
        stroke: function stroke(node, conf) {
            var attrsObj = conf.attrs, value = attrsObj.stroke, color, opacity;
            color = R.color(value);
            opacity = color.opacity;
            if (node.type !== TXTNODE) {
                conf.attrSTR += STROKE1 + color + QUOT;
                if (!attrsObj[STROKEOPAC] && (opacity || opacity === 0)) conf.attrSTR += STROKE2 + opacity + QUOT;
            }
        },
        "clip-rect": function clipRect(node, conf, defs) {
            var attrsObj = conf.attrs, value = Str(attrsObj[CLIPRECT]), rect = value.split(separator), id = value.replace(idSanitizerReg, UNDERSCORE) + UNDERSCORE + UNDERSCORE + IdCounter++;
            if (rect.length === 4) {
                if (!defs[id]) {
                    defs[id] = true;
                    defs.str += CLIPSTR1 + id + CLIPSTR2 + rect[0] + CLIPSTR3 + rect[1] + CLIPSTR4 + rect[2] + CLIPSTR5 + rect[3] + CLIPSTR8 + node.matrix.invert().toMatrixString().replace(matrixSanitizerReg, BLANK) + BRACKETCLOSE + CLIPSTR6;
                }
                conf.attrSTR += CLIPSTR7 + id + BRACKETCLOSE + QUOT;
            }
        },
        cursor: function cursor() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj.cursor;
            if (value) conf.styleSTR += CURSOR + value + SCOLONSPACE;
        },
        font: function font() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj.font;
            conf.styleSTR += FONT + COLON + value.replace(/\"/gi, SPACE) + SCOLONSPACE;
        },
        "font-size": function fontSize() {
            var conf = arguments[1], attrsObj = conf.attrs, value = (0, _lib.pluck)(attrsObj[FONTSIZE], "10");
            if (value && value.replace) value = value.replace(retriveNumReg, BLANK);
            conf.styleSTR += FONTSIZE + COLON + value + PXSPACE;
        },
        "font-weight": function fontWeight() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj[FONTWEIGHT];
            conf.styleSTR += FONTWEIGHT + COLON + value + SCOLONSPACE;
        },
        "font-family": function fontFamily() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj[FONTFAMILY];
            conf.styleSTR += FONTFAMILY + COLON + value + SCOLONSPACE;
        },
        "line-height": _lib.stubFN,
        "clip-path": _lib.stubFN,
        visibility: _lib.stubFN,
        "vertical-align": _lib.stubFN,
        "text-anchor": function textAnchor(node, conf) {
            var attrsObj = conf.attrs, value = attrsObj[TEXTANCHOR] || MIDDLE;
            if (node.type === TXTNODE) conf.attrSTR += SPACE + TEXTANCHOR + EQUALQUOT + value + QUOT;
        },
        title: _lib.stubFN,
        text: function text() {
            var conf = arguments[1], attrsObj = conf.attrs, value = attrsObj.text, fontSize = (0, _lib.pluck)(attrsObj[FONTSIZE], attrsObj[FONT], "10"), lineHeight = (0, _lib.pluck)(attrsObj[LINEHEIGHT]), baseHeight, x, valign, texts, i, ii, baseAdjust, text;
            if (fontSize && fontSize.replace) fontSize = fontSize.replace(retriveNumReg, BLANK);
            fontSize = (0, _lib.pluckNumber)(fontSize);
            if (lineHeight && lineHeight.replace) lineHeight = lineHeight.replace(retriveNumReg, BLANK);
            lineHeight = (0, _lib.pluckNumber)(lineHeight, fontSize && fontSize * 1.2);
            baseHeight = fontSize ? fontSize * .85 : lineHeight * .75;
            x = attrsObj.x;
            valign = (0, _lib.pluck)(attrsObj[VALIGNSTR], MIDDLE).toLowerCase();
            texts = Str(value).split(textNewLineReg);
            ii = texts.length;
            i = 0;
            baseAdjust = valign === TOP ? baseHeight : valign === BOTTOM ? baseHeight - lineHeight * ii : baseHeight - lineHeight * ii * .5;
            for(; i < ii; i++){
                conf.textSTR += TSPANSTR1;
                text = (texts[i] || BLANK).replace(ampregex, ampSTR).replace(quot1regex, quot1STR).replace(quot2regex, quot2STR).replace(ltregex, ltSTR).replace(gtregex, gtSTR);
                if (i) conf.textSTR += TSPANSTR2 + lineHeight + TSPANSTR3 + x + QUOTSPACE;
                else conf.textSTR += TSPANSTR4 + baseAdjust + QUOT;
                conf.textSTR += GT + text + TSPANSTR6;
            }
        }
    }, parseNode = function parseNode(node, defs) {
        var xmlSTR = BLANK, conf = {
            attrSTR: BLANK,
            styleSTR: BLANK,
            textSTR: BLANK,
            attrs: node.attr()
        }, isShadow = node.isShadow, childXMLSTR = BLANK, nextXMLSTR = BLANK, attrName, styleName, nodeType, attrs = conf.attrs;
        if (node.node.style.display !== NONE && !isShadow) {
            for(attrName in attrs)if (attrName !== GRADIENT && (availableAttrs[attrName] !== UNDEF || attributeParser[attrName]) && attrs[attrName] !== UNDEF) {
                if (attributeParser[attrName]) attributeParser[attrName](node, conf, defs);
                else conf.attrSTR += SPACE + attrName + EQUALQUOT + attrs[attrName] + QUOT;
            }
            if (node.attrs.gradient) attributeParser.gradient(node, conf, defs);
            if (node.type === RECT && attrs.r) conf.attrSTR += SPACE + RX + EQUALQUOT + attrs.r + QUOT + SPACE + RY + EQUALQUOT + attrs.r + QUOT;
            for(styleName in node.styles)conf.styleSTR += styleName + COLON + node.styles[styleName] + SCOLONSPACE;
            if (node.type === IMGNODE) conf.attrSTR += ASPRATIO;
            if (node.type === TXTNODE && !attrs[TEXTANCHOR]) attributeParser[TEXTANCHOR](node, conf);
            if (node.bottom) childXMLSTR = parseNode(node.bottom, defs);
            if (node.next) nextXMLSTR = parseNode(node.next, defs);
            nodeType = node.type;
            if (nodeType.match(grouptagtestReg)) nodeType = "g";
            xmlSTR += LT + nodeType + NODESTRPART2 + node.matrix.toMatrixString().replace(matrixSanitizerReg, BLANK) + NODESTRPART3 + conf.styleSTR + QUOT + conf.attrSTR + GT + conf.textSTR + childXMLSTR + NODESTRPART5 + nodeType + GT + nextXMLSTR;
        } else if (node.next) xmlSTR += parseNode(node.next, defs);
        return xmlSTR;
    };
    if (R.vml) R.fn.toSVG = function(keepImages) {
        var paper = this, svg = BLANK, defs = {
            str: BLANK
        }, childXMLSTR = BLANK;
        svg = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + paper.width + '" version="1.1" height="' + paper.height + '">';
        if (paper.bottom) childXMLSTR = parseNode(paper.bottom, defs);
        svg += "<defs>" + defs.str + "</defs>" + childXMLSTR + "</svg>";
        if (!keepImages) svg = svg.replace(/<image[^\>]*\>[^\>]*\>/gi, function(str) {
            if (str.match(/href=\"data\:image/i)) return str;
            return BLANK;
        });
        return svg;
    };
}

},{"../../lib":"gGvaa"}]},["aMSMw"], null, "parcelRequire40d9")

//# sourceMappingURL=redraphael.vml.bd4be293.js.map
