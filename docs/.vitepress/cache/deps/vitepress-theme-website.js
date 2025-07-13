import {
  Fragment,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isRef,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  resolveComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useTemplateRef,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  watchEffect,
  withDirectives
} from "./chunk-DDXJJ377.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/recaptcha-v3/dist/ReCaptchaInstance.js
var require_ReCaptchaInstance = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaInstance.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function(resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e2) {
            reject(e2);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _2 = { label: 0, sent: function() {
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      }, trys: [], ops: [] }, f2, y2, t2, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n2) {
        return function(v3) {
          return step([n2, v3]);
        };
      }
      function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_2 = 0)), _2) try {
          if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
          if (y2 = 0, t2) op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _2.label++;
              return { value: op[1], done: false };
            case 5:
              _2.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _2.ops.pop();
              _2.trys.pop();
              continue;
            default:
              if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _2 = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _2.label = op[1];
                break;
              }
              if (op[0] === 6 && _2.label < t2[1]) {
                _2.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _2.label < t2[2]) {
                _2.label = t2[2];
                _2.ops.push(op);
                break;
              }
              if (t2[2]) _2.ops.pop();
              _2.trys.pop();
              continue;
          }
          op = body.call(thisArg, _2);
        } catch (e2) {
          op = [6, e2];
          y2 = 0;
        } finally {
          f2 = t2 = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = void 0;
    var ReCaptchaInstance = function() {
      function ReCaptchaInstance2(siteKey, recaptchaID, recaptcha) {
        this.siteKey = siteKey;
        this.recaptchaID = recaptchaID;
        this.recaptcha = recaptcha;
        this.styleContainer = null;
      }
      ReCaptchaInstance2.prototype.execute = function(action) {
        return __awaiter(this, void 0, void 0, function() {
          var _a3;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                if (!this.recaptcha.enterprise) return [3, 2];
                return [4, this.recaptcha.enterprise.execute(this.recaptchaID, { action })];
              case 1:
                _a3 = _b.sent();
                return [3, 4];
              case 2:
                return [4, this.recaptcha.execute(this.recaptchaID, { action })];
              case 3:
                _a3 = _b.sent();
                _b.label = 4;
              case 4:
                return [2, _a3];
            }
          });
        });
      };
      ReCaptchaInstance2.prototype.getSiteKey = function() {
        return this.siteKey;
      };
      ReCaptchaInstance2.prototype.hideBadge = function() {
        if (this.styleContainer !== null) {
          return;
        }
        this.styleContainer = document.createElement("style");
        this.styleContainer.innerHTML = ".grecaptcha-badge{visibility:hidden !important;}";
        document.head.appendChild(this.styleContainer);
      };
      ReCaptchaInstance2.prototype.showBadge = function() {
        if (this.styleContainer === null) {
          return;
        }
        document.head.removeChild(this.styleContainer);
        this.styleContainer = null;
      };
      return ReCaptchaInstance2;
    }();
    exports.ReCaptchaInstance = ReCaptchaInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptchaLoader.js
var require_ReCaptchaLoader = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptchaLoader.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t2) {
        for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
          s2 = arguments[i];
          for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
        }
        return t2;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInstance = exports.load = void 0;
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    var ELoadingState;
    (function(ELoadingState2) {
      ELoadingState2[ELoadingState2["NOT_LOADED"] = 0] = "NOT_LOADED";
      ELoadingState2[ELoadingState2["LOADING"] = 1] = "LOADING";
      ELoadingState2[ELoadingState2["LOADED"] = 2] = "LOADED";
    })(ELoadingState || (ELoadingState = {}));
    var ReCaptchaLoader = function() {
      function ReCaptchaLoader2() {
      }
      ReCaptchaLoader2.load = function(siteKey, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof document === "undefined") {
          return Promise.reject(new Error("This is a library for the browser!"));
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADED) {
          if (ReCaptchaLoader2.instance.getSiteKey() === siteKey) {
            return Promise.resolve(ReCaptchaLoader2.instance);
          } else {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
        }
        if (ReCaptchaLoader2.getLoadingState() === ELoadingState.LOADING) {
          if (siteKey !== ReCaptchaLoader2.instanceSiteKey) {
            return Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));
          }
          return new Promise(function(resolve, reject) {
            ReCaptchaLoader2.successfulLoadingConsumers.push(function(instance) {
              return resolve(instance);
            });
            ReCaptchaLoader2.errorLoadingRunnable.push(function(reason) {
              return reject(reason);
            });
          });
        }
        ReCaptchaLoader2.instanceSiteKey = siteKey;
        ReCaptchaLoader2.setLoadingState(ELoadingState.LOADING);
        var loader = new ReCaptchaLoader2();
        return new Promise(function(resolve, reject) {
          loader.loadScript(siteKey, options.useRecaptchaNet || false, options.useEnterprise || false, options.renderParameters ? options.renderParameters : {}, options.customUrl).then(function() {
            ReCaptchaLoader2.setLoadingState(ELoadingState.LOADED);
            var widgetID = loader.doExplicitRender(grecaptcha, siteKey, options.explicitRenderParameters ? options.explicitRenderParameters : {}, options.useEnterprise || false);
            var instance = new ReCaptchaInstance_1.ReCaptchaInstance(siteKey, widgetID, grecaptcha);
            ReCaptchaLoader2.successfulLoadingConsumers.forEach(function(v3) {
              return v3(instance);
            });
            ReCaptchaLoader2.successfulLoadingConsumers = [];
            if (options.autoHideBadge) {
              instance.hideBadge();
            }
            ReCaptchaLoader2.instance = instance;
            resolve(instance);
          }).catch(function(error) {
            ReCaptchaLoader2.errorLoadingRunnable.forEach(function(v3) {
              return v3(error);
            });
            ReCaptchaLoader2.errorLoadingRunnable = [];
            reject(error);
          });
        });
      };
      ReCaptchaLoader2.getInstance = function() {
        return ReCaptchaLoader2.instance;
      };
      ReCaptchaLoader2.setLoadingState = function(state) {
        ReCaptchaLoader2.loadingState = state;
      };
      ReCaptchaLoader2.getLoadingState = function() {
        if (ReCaptchaLoader2.loadingState === null) {
          return ELoadingState.NOT_LOADED;
        } else {
          return ReCaptchaLoader2.loadingState;
        }
      };
      ReCaptchaLoader2.prototype.loadScript = function(siteKey, useRecaptchaNet, useEnterprise, renderParameters, customUrl) {
        var _this = this;
        if (useRecaptchaNet === void 0) {
          useRecaptchaNet = false;
        }
        if (useEnterprise === void 0) {
          useEnterprise = false;
        }
        if (renderParameters === void 0) {
          renderParameters = {};
        }
        if (customUrl === void 0) {
          customUrl = "";
        }
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("recaptcha-v3-script", "");
        scriptElement.setAttribute("async", "");
        scriptElement.setAttribute("defer", "");
        var scriptBase = "https://www.google.com/recaptcha/api.js";
        if (useRecaptchaNet) {
          if (useEnterprise) {
            scriptBase = "https://recaptcha.net/recaptcha/enterprise.js";
          } else {
            scriptBase = "https://recaptcha.net/recaptcha/api.js";
          }
        } else if (useEnterprise) {
          scriptBase = "https://www.google.com/recaptcha/enterprise.js";
        }
        if (customUrl) {
          scriptBase = customUrl;
        }
        if (renderParameters.render) {
          renderParameters.render = void 0;
        }
        var parametersQuery = this.buildQueryString(renderParameters);
        scriptElement.src = scriptBase + "?render=explicit" + parametersQuery;
        return new Promise(function(resolve, reject) {
          scriptElement.addEventListener("load", _this.waitForScriptToLoad(function() {
            resolve(scriptElement);
          }, useEnterprise), false);
          scriptElement.onerror = function(error) {
            ReCaptchaLoader2.setLoadingState(ELoadingState.NOT_LOADED);
            reject(error);
          };
          document.head.appendChild(scriptElement);
        });
      };
      ReCaptchaLoader2.prototype.buildQueryString = function(parameters) {
        var parameterKeys = Object.keys(parameters);
        if (parameterKeys.length < 1) {
          return "";
        }
        return "&" + Object.keys(parameters).filter(function(parameterKey) {
          return !!parameters[parameterKey];
        }).map(function(parameterKey) {
          return parameterKey + "=" + parameters[parameterKey];
        }).join("&");
      };
      ReCaptchaLoader2.prototype.waitForScriptToLoad = function(callback, useEnterprise) {
        var _this = this;
        return function() {
          if (window.grecaptcha === void 0) {
            setTimeout(function() {
              _this.waitForScriptToLoad(callback, useEnterprise);
            }, ReCaptchaLoader2.SCRIPT_LOAD_DELAY);
          } else {
            if (useEnterprise) {
              window.grecaptcha.enterprise.ready(function() {
                callback();
              });
            } else {
              window.grecaptcha.ready(function() {
                callback();
              });
            }
          }
        };
      };
      ReCaptchaLoader2.prototype.doExplicitRender = function(grecaptcha2, siteKey, parameters, isEnterprise) {
        var augmentedParameters = __assign({ sitekey: siteKey }, parameters);
        if (parameters.container) {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(parameters.container, augmentedParameters);
          } else {
            return grecaptcha2.render(parameters.container, augmentedParameters);
          }
        } else {
          if (isEnterprise) {
            return grecaptcha2.enterprise.render(augmentedParameters);
          } else {
            return grecaptcha2.render(augmentedParameters);
          }
        }
      };
      ReCaptchaLoader2.loadingState = null;
      ReCaptchaLoader2.instance = null;
      ReCaptchaLoader2.instanceSiteKey = null;
      ReCaptchaLoader2.successfulLoadingConsumers = [];
      ReCaptchaLoader2.errorLoadingRunnable = [];
      ReCaptchaLoader2.SCRIPT_LOAD_DELAY = 25;
      return ReCaptchaLoader2;
    }();
    exports.load = ReCaptchaLoader.load;
    exports.getInstance = ReCaptchaLoader.getInstance;
  }
});

// node_modules/recaptcha-v3/dist/ReCaptcha.js
var require_ReCaptcha = __commonJS({
  "node_modules/recaptcha-v3/dist/ReCaptcha.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReCaptchaInstance = exports.getInstance = exports.load = void 0;
    var ReCaptchaLoader_1 = require_ReCaptchaLoader();
    Object.defineProperty(exports, "load", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.load;
    } });
    Object.defineProperty(exports, "getInstance", { enumerable: true, get: function() {
      return ReCaptchaLoader_1.getInstance;
    } });
    var ReCaptchaInstance_1 = require_ReCaptchaInstance();
    Object.defineProperty(exports, "ReCaptchaInstance", { enumerable: true, get: function() {
      return ReCaptchaInstance_1.ReCaptchaInstance;
    } });
  }
});

// node_modules/vitepress-theme-website/dist/waline/index.mjs
import { useRoute } from "vitepress";

// node_modules/@waline/api/dist/api.js
var m = { "Content-Type": "application/json" };
var s = (e2) => `${e2.replace(/\/?$/, "/")}api/`;
var c = (e2, n2 = "") => {
  if (typeof e2 == "object" && e2.errno) throw new TypeError(`${n2} failed with ${e2.errno}: ${e2.errmsg}`);
  return e2;
};
var p = ({ serverURL: e2, lang: n2, paths: o2, type: a3, signal: t2 }) => fetch(`${s(e2)}article?path=${encodeURIComponent(o2.join(","))}&type=${encodeURIComponent(a3.join(","))}&lang=${n2}`, { signal: t2 }).then((r2) => r2.json()).then((r2) => c(r2, "Get counter").data);
var d = ({ serverURL: e2, lang: n2, path: o2, type: a3, action: t2 }) => fetch(`${s(e2)}article?lang=${n2}`, { method: "POST", headers: m, body: JSON.stringify({ path: o2, type: a3, action: t2 }) }).then((r2) => r2.json()).then((r2) => c(r2, "Update counter").data);
var $ = ({ serverURL: e2, lang: n2, path: o2, page: a3, pageSize: t2, sortBy: r2, signal: h3, token: i }) => {
  const l = {};
  return i && (l.Authorization = `Bearer ${i}`), fetch(`${s(e2)}comment?path=${encodeURIComponent(o2)}&pageSize=${t2}&page=${a3}&lang=${n2}&sortBy=${r2}`, { signal: h3, headers: l }).then((g) => g.json()).then((g) => c(g, "Get comment data").data);
};
var u = ({ serverURL: e2, lang: n2, token: o2, comment: a3 }) => {
  const t2 = { "Content-Type": "application/json" };
  return o2 && (t2.Authorization = `Bearer ${o2}`), fetch(`${s(e2)}comment?lang=${n2}`, { method: "POST", headers: t2, body: JSON.stringify(a3) }).then((r2) => r2.json());
};
var y = ({ serverURL: e2, lang: n2, token: o2, objectId: a3 }) => fetch(`${s(e2)}comment/${a3}?lang=${n2}`, { method: "DELETE", headers: { Authorization: `Bearer ${o2}` } }).then((t2) => t2.json()).then((t2) => c(t2, "Delete comment"));
var U = ({ serverURL: e2, lang: n2, token: o2, objectId: a3, comment: t2 }) => fetch(`${s(e2)}comment/${a3}?lang=${n2}`, { method: "PUT", headers: { ...m, Authorization: `Bearer ${o2}` }, body: JSON.stringify(t2) }).then((r2) => r2.json()).then((r2) => c(r2, "Update comment"));
var f = ({ serverURL: e2, lang: n2, paths: o2, signal: a3 }) => fetch(`${s(e2)}comment?type=count&url=${encodeURIComponent(o2.join(","))}&lang=${n2}`, { signal: a3 }).then((t2) => t2.json()).then((t2) => c(t2, "Get comment count").data);
var R = ({ lang: e2, serverURL: n2 }) => {
  const o2 = (window.innerWidth - 450) / 2, a3 = (window.innerHeight - 450) / 2, t2 = window.open(`${n2.replace(/\/$/, "")}/ui/login?lng=${encodeURIComponent(e2)}`, "_blank", `width=450,height=450,left=${o2},top=${a3},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
  return t2 == null ? void 0 : t2.postMessage({ type: "TOKEN", data: null }, "*"), new Promise((r2) => {
    const h3 = ({ data: i }) => {
      !i || typeof i != "object" || i.type !== "userInfo" || i.data.token && (t2 == null ? void 0 : t2.close(), window.removeEventListener("message", h3), r2(i.data));
    };
    window.addEventListener("message", h3);
  });
};
var j = ({ serverURL: e2, lang: n2, paths: o2, signal: a3 }) => p({ serverURL: e2, lang: n2, paths: o2, type: ["time"], signal: a3 });
var v = (e2) => d({ ...e2, type: "time", action: "inc" });

// node_modules/@waline/client/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {
};
var isIOS = getIsIOS();
function getIsIOS() {
  var _a3, _b;
  return isClient && ((_a3 = window == null ? void 0 : window.navigator) == null ? void 0 : _a3.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function toRef2(...args) {
  if (args.length !== 1)
    return toRef(...args);
  const r2 = args[0];
  return typeof r2 === "function" ? readonly(customRef(() => ({ get: r2, set: noop }))) : ref(r2);
}
function createFilterWrapper(filter, fn2) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn2.apply(this, args), { fn: fn2, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
var bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = void 0;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter, options = {}) {
  const {
    initialState = "active"
  } = options;
  const isActive = toRef2(initialState === "active");
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function identity(arg) {
  return arg;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function cacheStringFunction(fn2) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function useDebounceFn(fn2, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn2
  );
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source, cb, options = {}) {
  const {
    eventFilter: filter,
    initialState = "active",
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter, { initialState });
  const stop = watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn2, sync = true, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onMounted(fn2, target);
  else if (sync)
    fn2();
  else
    nextTick(fn2);
}
function tryOnUnmounted(fn2, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
    onUnmounted(fn2, target);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = shallowRef(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly(isActive),
    pause,
    resume
  };
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

// node_modules/@waline/client/node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _a3;
  const plain = toValue(elRef);
  return (_a3 = plain == null ? void 0 : plain.$el) != null ? _a3 : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn2) => fn2());
    cleanups.length = 0;
  };
  const register = (el2, event, listener, options) => {
    el2.addEventListener(event, listener, options);
    return () => el2.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e2) => e2 != null);
    return test.every((e2) => typeof e2 !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a3, _b;
      return [
        (_b = (_a3 = firstParamTargets.value) == null ? void 0 : _a3.map((e2) => unrefElement(e2))) != null ? _b : [defaultWindow].filter((e2) => e2 != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el2) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el2, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
function useRafFn(fn2, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow,
    once = false
  } = options;
  const isActive = shallowRef(false);
  const intervalLimit = computed(() => {
    return fpsLimit ? 1e3 / toValue(fpsLimit) : null;
  });
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn2({ delta, timestamp: timestamp2 });
    if (once) {
      isActive.value = false;
      rafId = null;
      return;
    }
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var StorageSerializers = {
  boolean: {
    read: (v3) => v3 === "true",
    write: (v3) => String(v3)
  },
  object: {
    read: (v3) => JSON.parse(v3),
    write: (v3) => JSON.stringify(v3)
  },
  number: {
    read: (v3) => Number.parseFloat(v3),
    write: (v3) => String(v3)
  },
  any: {
    read: (v3) => v3,
    write: (v3) => String(v3)
  },
  string: {
    read: (v3) => v3,
    write: (v3) => String(v3)
  },
  map: {
    read: (v3) => new Map(JSON.parse(v3)),
    write: (v3) => JSON.stringify(Array.from(v3.entries()))
  },
  set: {
    read: (v3) => new Set(JSON.parse(v3)),
    write: (v3) => JSON.stringify(Array.from(v3))
  },
  date: {
    read: (v3) => new Date(v3),
    write: (v3) => v3.toISOString()
  }
};
var customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a3;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  const keyComputed = computed(() => toValue(key));
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a22;
        return (_a22 = defaultWindow) == null ? void 0 : _a22.localStorage;
      })();
    } catch (e2) {
      onError(e2);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a3 = options.serializer) != null ? _a3 : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  watch(keyComputed, () => update(), { flush });
  let firstMounted = false;
  const onStorageEvent = (ev) => {
    if (initOnMounted && !firstMounted) {
      return;
    }
    update(ev);
  };
  const onStorageCustomEvent = (ev) => {
    if (initOnMounted && !firstMounted) {
      return;
    }
    updateFromCustomEvent(ev);
  };
  if (window2 && listenToStorageChanges) {
    if (storage instanceof Storage)
      useEventListener(window2, "storage", onStorageEvent, { passive: true });
    else
      useEventListener(window2, customStorageEventName, onStorageCustomEvent);
  }
  if (initOnMounted) {
    tryOnMounted(() => {
      firstMounted = true;
      update();
    });
  } else {
    update();
  }
  function dispatchWriteEvent(oldValue, newValue) {
    if (window2) {
      const payload = {
        key: keyComputed.value,
        oldValue,
        newValue,
        storageArea: storage
      };
      window2.dispatchEvent(storage instanceof Storage ? new StorageEvent("storage", payload) : new CustomEvent(customStorageEventName, {
        detail: payload
      }));
    }
  }
  function write(v3) {
    try {
      const oldValue = storage.getItem(keyComputed.value);
      if (v3 == null) {
        dispatchWriteEvent(oldValue, null);
        storage.removeItem(keyComputed.value);
      } else {
        const serialized = serializer.write(v3);
        if (oldValue !== serialized) {
          storage.setItem(keyComputed.value, serialized);
          dispatchWriteEvent(oldValue, serialized);
        }
      }
    } catch (e2) {
      onError(e2);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null)
        storage.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read(event);
    } catch (e2) {
      onError(e2);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  return data;
}
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame",
    immediate = true
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document: document2 = defaultDocument,
    attrs = {},
    nonce = void 0
  } = options;
  const scriptTag = shallowRef(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el22) => {
      scriptTag.value = el22;
      resolve(el22);
      return el22;
    };
    if (!document2) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (!el2) {
      el2 = document2.createElement("script");
      el2.type = type;
      el2.async = async;
      el2.src = toValue(src);
      if (defer)
        el2.defer = defer;
      if (crossOrigin)
        el2.crossOrigin = crossOrigin;
      if (noModule)
        el2.noModule = noModule;
      if (referrerPolicy)
        el2.referrerPolicy = referrerPolicy;
      if (nonce) {
        el2.nonce = nonce;
      }
      Object.entries(attrs).forEach(([name, value]) => el2 == null ? void 0 : el2.setAttribute(name, value));
      shouldAppend = true;
    } else if (el2.hasAttribute("data-loaded")) {
      resolveWithElement(el2);
    }
    const listenerOptions = {
      passive: true
    };
    useEventListener(el2, "error", (event) => reject(event), listenerOptions);
    useEventListener(el2, "abort", (event) => reject(event), listenerOptions);
    useEventListener(el2, "load", () => {
      el2.setAttribute("data-loaded", "true");
      onLoaded(el2);
      resolveWithElement(el2);
    }, listenerOptions);
    if (shouldAppend)
      el2 = document2.head.appendChild(el2);
    if (!waitForScriptLoad)
      resolveWithElement(el2);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document2)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el2 = document2.querySelector(`script[src="${toValue(src)}"]`);
    if (el2)
      document2.head.removeChild(el2);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}
var _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = shallowRef(false);
  const {
    document: document2 = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = shallowRef(css);
  let stop = () => {
  };
  const load = () => {
    if (!document2)
      return;
    const el2 = document2.getElementById(id) || document2.createElement("style");
    if (!el2.isConnected) {
      el2.id = id;
      if (options.nonce)
        el2.nonce = options.nonce;
      if (options.media)
        el2.media = options.media;
      document2.head.appendChild(el2);
    }
    if (isLoaded.value)
      return;
    stop = watch(
      cssRef,
      (value) => {
        el2.textContent = value;
      },
      { immediate: true }
    );
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document2 || !isLoaded.value)
      return;
    stop();
    document2.head.removeChild(document2.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);

// node_modules/autosize/dist/autosize.esm.js
var e = /* @__PURE__ */ new Map();
function t(t2) {
  var o2 = e.get(t2);
  o2 && o2.destroy();
}
function o(t2) {
  var o2 = e.get(t2);
  o2 && o2.update();
}
var r = null;
"undefined" == typeof window ? ((r = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, r.update = function(e2) {
  return e2;
}) : ((r = function(t2, o2) {
  return t2 && Array.prototype.forEach.call(t2.length ? t2 : [t2], function(t3) {
    return function(t4) {
      if (t4 && t4.nodeName && "TEXTAREA" === t4.nodeName && !e.has(t4)) {
        var o3, r2 = null, n2 = window.getComputedStyle(t4), i = (o3 = t4.value, function() {
          a3({ testForHeightReduction: "" === o3 || !t4.value.startsWith(o3), restoreTextAlign: null }), o3 = t4.value;
        }), l = (function(o4) {
          t4.removeEventListener("autosize:destroy", l), t4.removeEventListener("autosize:update", s2), t4.removeEventListener("input", i), window.removeEventListener("resize", s2), Object.keys(o4).forEach(function(e2) {
            return t4.style[e2] = o4[e2];
          }), e.delete(t4);
        }).bind(t4, { height: t4.style.height, resize: t4.style.resize, textAlign: t4.style.textAlign, overflowY: t4.style.overflowY, overflowX: t4.style.overflowX, wordWrap: t4.style.wordWrap });
        t4.addEventListener("autosize:destroy", l), t4.addEventListener("autosize:update", s2), t4.addEventListener("input", i), window.addEventListener("resize", s2), t4.style.overflowX = "hidden", t4.style.wordWrap = "break-word", e.set(t4, { destroy: l, update: s2 }), s2();
      }
      function a3(e2) {
        var o4, i2, l2 = e2.restoreTextAlign, s3 = void 0 === l2 ? null : l2, d2 = e2.testForHeightReduction, u2 = void 0 === d2 || d2, c2 = n2.overflowY;
        if (0 !== t4.scrollHeight && ("vertical" === n2.resize ? t4.style.resize = "none" : "both" === n2.resize && (t4.style.resize = "horizontal"), u2 && (o4 = function(e3) {
          for (var t5 = []; e3 && e3.parentNode && e3.parentNode instanceof Element; ) e3.parentNode.scrollTop && t5.push([e3.parentNode, e3.parentNode.scrollTop]), e3 = e3.parentNode;
          return function() {
            return t5.forEach(function(e4) {
              var t6 = e4[0], o5 = e4[1];
              t6.style.scrollBehavior = "auto", t6.scrollTop = o5, t6.style.scrollBehavior = null;
            });
          };
        }(t4), t4.style.height = ""), i2 = "content-box" === n2.boxSizing ? t4.scrollHeight - (parseFloat(n2.paddingTop) + parseFloat(n2.paddingBottom)) : t4.scrollHeight + parseFloat(n2.borderTopWidth) + parseFloat(n2.borderBottomWidth), "none" !== n2.maxHeight && i2 > parseFloat(n2.maxHeight) ? ("hidden" === n2.overflowY && (t4.style.overflow = "scroll"), i2 = parseFloat(n2.maxHeight)) : "hidden" !== n2.overflowY && (t4.style.overflow = "hidden"), t4.style.height = i2 + "px", s3 && (t4.style.textAlign = s3), o4 && o4(), r2 !== i2 && (t4.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r2 = i2), c2 !== n2.overflow && !s3)) {
          var v3 = n2.textAlign;
          "hidden" === n2.overflow && (t4.style.textAlign = "start" === v3 ? "end" : "start"), a3({ restoreTextAlign: v3, testForHeightReduction: true });
        }
      }
      function s2() {
        a3({ testForHeightReduction: true, restoreTextAlign: null });
      }
    }(t3);
  }), t2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], t), e2;
}, r.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], o), e2;
});
var n = r;
var autosize_esm_default = n;

// node_modules/marked/lib/marked.esm.js
function M() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var w = M();
function H(a3) {
  w = a3;
}
var C = { exec: () => null };
function h2(a3, e2 = "") {
  let t2 = typeof a3 == "string" ? a3 : a3.source, n2 = { replace: (s2, i) => {
    let r2 = typeof i == "string" ? i : i.source;
    return r2 = r2.replace(m2.caret, "$1"), t2 = t2.replace(s2, r2), n2;
  }, getRegex: () => new RegExp(t2, e2) };
  return n2;
}
var m2 = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (a3) => new RegExp(`^( {0,3}${a3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (a3) => new RegExp(`^ {0,${Math.min(3, a3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (a3) => new RegExp(`^ {0,${Math.min(3, a3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (a3) => new RegExp(`^ {0,${Math.min(3, a3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (a3) => new RegExp(`^ {0,${Math.min(3, a3 - 1)}}#`), htmlBeginRegex: (a3) => new RegExp(`^ {0,${Math.min(3, a3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var xe = /^(?:[ \t]*(?:\n|$))+/;
var be = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var j2 = /(?:[*+-]|\d{1,9}[.)])/;
var re = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ie = h2(re).replace(/bull/g, j2).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var ye = h2(re).replace(/bull/g, j2).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var F = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var Re = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var Se = h2(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var $e = h2(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, j2).getRegex();
var v2 = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U2 = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var _e = h2("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U2).replace("tag", v2).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var oe = h2(F).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex();
var Le = h2(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex();
var K = { blockquote: Le, code: be, def: Se, fences: Te, heading: we, hr: I, html: _e, lheading: ie, list: $e, newline: xe, paragraph: oe, table: C, text: Re };
var se = h2("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex();
var ze = { ...K, lheading: ye, table: se, paragraph: h2(F).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", se).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v2).getRegex() };
var Me = { ...K, html: h2(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U2).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: C, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h2(F).replace("hr", I).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Pe = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ae = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var le = /^( {2,}|\\)\n(?!\s*$)/;
var Ee = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var X = /[\s\p{P}\p{S}]/u;
var ae = /[^\s\p{P}\p{S}]/u;
var Ce = h2(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, X).getRegex();
var ce = /(?!~)[\p{P}\p{S}]/u;
var Ie = /(?!~)[\s\p{P}\p{S}]/u;
var Oe = /(?:[^\s\p{P}\p{S}]|~)/u;
var Be = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var pe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var qe = h2(pe, "u").replace(/punct/g, D).getRegex();
var ve = h2(pe, "u").replace(/punct/g, ce).getRegex();
var ue = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var De = h2(ue, "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, X).replace(/punct/g, D).getRegex();
var Ze = h2(ue, "gu").replace(/notPunctSpace/g, Oe).replace(/punctSpace/g, Ie).replace(/punct/g, ce).getRegex();
var Ge = h2("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ae).replace(/punctSpace/g, X).replace(/punct/g, D).getRegex();
var He = h2(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Ne = h2(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var je = h2(U2).replace("(?:-->|$)", "-->").getRegex();
var Fe = h2("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var Qe = h2(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var he = h2(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var ke = h2(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var Ue = h2("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", ke).getRegex();
var W = { _backpedal: C, anyPunctuation: He, autolink: Ne, blockSkip: Be, br: le, code: Ae, del: C, emStrongLDelim: qe, emStrongRDelimAst: De, emStrongRDelimUnd: Ge, escape: Pe, link: Qe, nolink: ke, punctuation: Ce, reflink: he, reflinkSearch: Ue, tag: Fe, text: Ee, url: C };
var Ke = { ...W, link: h2(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: h2(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...W, emStrongRDelimAst: Ze, emStrongLDelim: ve, url: h2(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
var Xe = { ...N, br: h2(le).replace("{2,}", "*").getRegex(), text: h2(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var O = { normal: K, gfm: ze, pedantic: Me };
var P = { normal: W, gfm: N, breaks: Xe, pedantic: Ke };
var We = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (a3) => We[a3];
function R2(a3, e2) {
  if (e2) {
    if (m2.escapeTest.test(a3)) return a3.replace(m2.escapeReplace, ge);
  } else if (m2.escapeTestNoEncode.test(a3)) return a3.replace(m2.escapeReplaceNoEncode, ge);
  return a3;
}
function J(a3) {
  try {
    a3 = encodeURI(a3).replace(m2.percentDecode, "%");
  } catch {
    return null;
  }
  return a3;
}
function V(a3, e2) {
  var _a3;
  let t2 = a3.replace(m2.findPipe, (i, r2, o2) => {
    let l = false, c2 = r2;
    for (; --c2 >= 0 && o2[c2] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), n2 = t2.split(m2.splitPipe), s2 = 0;
  if (n2[0].trim() || n2.shift(), n2.length > 0 && !((_a3 = n2.at(-1)) == null ? void 0 : _a3.trim()) && n2.pop(), e2) if (n2.length > e2) n2.splice(e2);
  else for (; n2.length < e2; ) n2.push("");
  for (; s2 < n2.length; s2++) n2[s2] = n2[s2].trim().replace(m2.slashPipe, "|");
  return n2;
}
function A(a3, e2, t2) {
  let n2 = a3.length;
  if (n2 === 0) return "";
  let s2 = 0;
  for (; s2 < n2; ) {
    let i = a3.charAt(n2 - s2 - 1);
    if (i === e2 && !t2) s2++;
    else if (i !== e2 && t2) s2++;
    else break;
  }
  return a3.slice(0, n2 - s2);
}
function fe(a3, e2) {
  if (a3.indexOf(e2[1]) === -1) return -1;
  let t2 = 0;
  for (let n2 = 0; n2 < a3.length; n2++) if (a3[n2] === "\\") n2++;
  else if (a3[n2] === e2[0]) t2++;
  else if (a3[n2] === e2[1] && (t2--, t2 < 0)) return n2;
  return t2 > 0 ? -2 : -1;
}
function de(a3, e2, t2, n2, s2) {
  let i = e2.href, r2 = e2.title || null, o2 = a3[1].replace(s2.other.outputLinkReplace, "$1");
  n2.state.inLink = true;
  let l = { type: a3[0].charAt(0) === "!" ? "image" : "link", raw: t2, href: i, title: r2, text: o2, tokens: n2.inlineTokens(o2) };
  return n2.state.inLink = false, l;
}
function Je(a3, e2, t2) {
  let n2 = a3.match(t2.other.indentCodeCompensation);
  if (n2 === null) return e2;
  let s2 = n2[1];
  return e2.split(`
`).map((i) => {
    let r2 = i.match(t2.other.beginningSpace);
    if (r2 === null) return i;
    let [o2] = r2;
    return o2.length >= s2.length ? i.slice(s2.length) : i;
  }).join(`
`);
}
var S = class {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "rules");
    __publicField(this, "lexer");
    this.options = e2 || w;
  }
  space(e2) {
    let t2 = this.rules.block.newline.exec(e2);
    if (t2 && t2[0].length > 0) return { type: "space", raw: t2[0] };
  }
  code(e2) {
    let t2 = this.rules.block.code.exec(e2);
    if (t2) {
      let n2 = t2[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t2[0], codeBlockStyle: "indented", text: this.options.pedantic ? n2 : A(n2, `
`) };
    }
  }
  fences(e2) {
    let t2 = this.rules.block.fences.exec(e2);
    if (t2) {
      let n2 = t2[0], s2 = Je(n2, t2[3] || "", this.rules);
      return { type: "code", raw: n2, lang: t2[2] ? t2[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t2[2], text: s2 };
    }
  }
  heading(e2) {
    let t2 = this.rules.block.heading.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (this.rules.other.endingHash.test(n2)) {
        let s2 = A(n2, "#");
        (this.options.pedantic || !s2 || this.rules.other.endingSpaceChar.test(s2)) && (n2 = s2.trim());
      }
      return { type: "heading", raw: t2[0], depth: t2[1].length, text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  hr(e2) {
    let t2 = this.rules.block.hr.exec(e2);
    if (t2) return { type: "hr", raw: A(t2[0], `
`) };
  }
  blockquote(e2) {
    let t2 = this.rules.block.blockquote.exec(e2);
    if (t2) {
      let n2 = A(t2[0], `
`).split(`
`), s2 = "", i = "", r2 = [];
      for (; n2.length > 0; ) {
        let o2 = false, l = [], c2;
        for (c2 = 0; c2 < n2.length; c2++) if (this.rules.other.blockquoteStart.test(n2[c2])) l.push(n2[c2]), o2 = true;
        else if (!o2) l.push(n2[c2]);
        else break;
        n2 = n2.slice(c2);
        let p2 = l.join(`
`), u2 = p2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s2 = s2 ? `${s2}
${p2}` : p2, i = i ? `${i}
${u2}` : u2;
        let d2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(u2, r2, true), this.lexer.state.top = d2, n2.length === 0) break;
        let g = r2.at(-1);
        if ((g == null ? void 0 : g.type) === "code") break;
        if ((g == null ? void 0 : g.type) === "blockquote") {
          let x = g, f2 = x.raw + `
` + n2.join(`
`), y2 = this.blockquote(f2);
          r2[r2.length - 1] = y2, s2 = s2.substring(0, s2.length - x.raw.length) + y2.raw, i = i.substring(0, i.length - x.text.length) + y2.text;
          break;
        } else if ((g == null ? void 0 : g.type) === "list") {
          let x = g, f2 = x.raw + `
` + n2.join(`
`), y2 = this.list(f2);
          r2[r2.length - 1] = y2, s2 = s2.substring(0, s2.length - g.raw.length) + y2.raw, i = i.substring(0, i.length - x.raw.length) + y2.raw, n2 = f2.substring(r2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s2, tokens: r2, text: i };
    }
  }
  list(e2) {
    let t2 = this.rules.block.list.exec(e2);
    if (t2) {
      let n2 = t2[1].trim(), s2 = n2.length > 1, i = { type: "list", raw: "", ordered: s2, start: s2 ? +n2.slice(0, -1) : "", loose: false, items: [] };
      n2 = s2 ? `\\d{1,9}\\${n2.slice(-1)}` : `\\${n2}`, this.options.pedantic && (n2 = s2 ? n2 : "[*+-]");
      let r2 = this.rules.other.listItemRegex(n2), o2 = false;
      for (; e2; ) {
        let c2 = false, p2 = "", u2 = "";
        if (!(t2 = r2.exec(e2)) || this.rules.block.hr.test(e2)) break;
        p2 = t2[0], e2 = e2.substring(p2.length);
        let d2 = t2[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (Z) => " ".repeat(3 * Z.length)), g = e2.split(`
`, 1)[0], x = !d2.trim(), f2 = 0;
        if (this.options.pedantic ? (f2 = 2, u2 = d2.trimStart()) : x ? f2 = t2[1].length + 1 : (f2 = t2[2].search(this.rules.other.nonSpaceChar), f2 = f2 > 4 ? 1 : f2, u2 = d2.slice(f2), f2 += t2[1].length), x && this.rules.other.blankLine.test(g) && (p2 += g + `
`, e2 = e2.substring(g.length + 1), c2 = true), !c2) {
          let Z = this.rules.other.nextBulletRegex(f2), ee = this.rules.other.hrRegex(f2), te = this.rules.other.fencesBeginRegex(f2), ne = this.rules.other.headingBeginRegex(f2), me = this.rules.other.htmlBeginRegex(f2);
          for (; e2; ) {
            let G = e2.split(`
`, 1)[0], E;
            if (g = G, this.options.pedantic ? (g = g.replace(this.rules.other.listReplaceNesting, "  "), E = g) : E = g.replace(this.rules.other.tabCharGlobal, "    "), te.test(g) || ne.test(g) || me.test(g) || Z.test(g) || ee.test(g)) break;
            if (E.search(this.rules.other.nonSpaceChar) >= f2 || !g.trim()) u2 += `
` + E.slice(f2);
            else {
              if (x || d2.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(d2) || ne.test(d2) || ee.test(d2)) break;
              u2 += `
` + g;
            }
            !x && !g.trim() && (x = true), p2 += G + `
`, e2 = e2.substring(G.length + 1), d2 = E.slice(f2);
          }
        }
        i.loose || (o2 ? i.loose = true : this.rules.other.doubleBlankLine.test(p2) && (o2 = true));
        let y2 = null, Y;
        this.options.gfm && (y2 = this.rules.other.listIsTask.exec(u2), y2 && (Y = y2[0] !== "[ ] ", u2 = u2.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: p2, task: !!y2, checked: Y, loose: false, text: u2, tokens: [] }), i.raw += p2;
      }
      let l = i.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let c2 = 0; c2 < i.items.length; c2++) if (this.lexer.state.top = false, i.items[c2].tokens = this.lexer.blockTokens(i.items[c2].text, []), !i.loose) {
        let p2 = i.items[c2].tokens.filter((d2) => d2.type === "space"), u2 = p2.length > 0 && p2.some((d2) => this.rules.other.anyLine.test(d2.raw));
        i.loose = u2;
      }
      if (i.loose) for (let c2 = 0; c2 < i.items.length; c2++) i.items[c2].loose = true;
      return i;
    }
  }
  html(e2) {
    let t2 = this.rules.block.html.exec(e2);
    if (t2) return { type: "html", block: true, raw: t2[0], pre: t2[1] === "pre" || t2[1] === "script" || t2[1] === "style", text: t2[0] };
  }
  def(e2) {
    let t2 = this.rules.block.def.exec(e2);
    if (t2) {
      let n2 = t2[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s2 = t2[2] ? t2[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t2[3] ? t2[3].substring(1, t2[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t2[3];
      return { type: "def", tag: n2, raw: t2[0], href: s2, title: i };
    }
  }
  table(e2) {
    var _a3;
    let t2 = this.rules.block.table.exec(e2);
    if (!t2 || !this.rules.other.tableDelimiter.test(t2[2])) return;
    let n2 = V(t2[1]), s2 = t2[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = ((_a3 = t2[3]) == null ? void 0 : _a3.trim()) ? t2[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r2 = { type: "table", raw: t2[0], header: [], align: [], rows: [] };
    if (n2.length === s2.length) {
      for (let o2 of s2) this.rules.other.tableAlignRight.test(o2) ? r2.align.push("right") : this.rules.other.tableAlignCenter.test(o2) ? r2.align.push("center") : this.rules.other.tableAlignLeft.test(o2) ? r2.align.push("left") : r2.align.push(null);
      for (let o2 = 0; o2 < n2.length; o2++) r2.header.push({ text: n2[o2], tokens: this.lexer.inline(n2[o2]), header: true, align: r2.align[o2] });
      for (let o2 of i) r2.rows.push(V(o2, r2.header.length).map((l, c2) => ({ text: l, tokens: this.lexer.inline(l), header: false, align: r2.align[c2] })));
      return r2;
    }
  }
  lheading(e2) {
    let t2 = this.rules.block.lheading.exec(e2);
    if (t2) return { type: "heading", raw: t2[0], depth: t2[2].charAt(0) === "=" ? 1 : 2, text: t2[1], tokens: this.lexer.inline(t2[1]) };
  }
  paragraph(e2) {
    let t2 = this.rules.block.paragraph.exec(e2);
    if (t2) {
      let n2 = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: "paragraph", raw: t2[0], text: n2, tokens: this.lexer.inline(n2) };
    }
  }
  text(e2) {
    let t2 = this.rules.block.text.exec(e2);
    if (t2) return { type: "text", raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  escape(e2) {
    let t2 = this.rules.inline.escape.exec(e2);
    if (t2) return { type: "escape", raw: t2[0], text: t2[1] };
  }
  tag(e2) {
    let t2 = this.rules.inline.tag.exec(e2);
    if (t2) return !this.lexer.state.inLink && this.rules.other.startATag.test(t2[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t2[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t2[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t2[0] };
  }
  link(e2) {
    let t2 = this.rules.inline.link.exec(e2);
    if (t2) {
      let n2 = t2[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n2)) {
        if (!this.rules.other.endAngleBracket.test(n2)) return;
        let r2 = A(n2.slice(0, -1), "\\");
        if ((n2.length - r2.length) % 2 === 0) return;
      } else {
        let r2 = fe(t2[2], "()");
        if (r2 === -2) return;
        if (r2 > -1) {
          let l = (t2[0].indexOf("!") === 0 ? 5 : 4) + t2[1].length + r2;
          t2[2] = t2[2].substring(0, r2), t2[0] = t2[0].substring(0, l).trim(), t2[3] = "";
        }
      }
      let s2 = t2[2], i = "";
      if (this.options.pedantic) {
        let r2 = this.rules.other.pedanticHrefTitle.exec(s2);
        r2 && (s2 = r2[1], i = r2[3]);
      } else i = t2[3] ? t2[3].slice(1, -1) : "";
      return s2 = s2.trim(), this.rules.other.startAngleBracket.test(s2) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n2) ? s2 = s2.slice(1) : s2 = s2.slice(1, -1)), de(t2, { href: s2 && s2.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t2[0], this.lexer, this.rules);
    }
  }
  reflink(e2, t2) {
    let n2;
    if ((n2 = this.rules.inline.reflink.exec(e2)) || (n2 = this.rules.inline.nolink.exec(e2))) {
      let s2 = (n2[2] || n2[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t2[s2.toLowerCase()];
      if (!i) {
        let r2 = n2[0].charAt(0);
        return { type: "text", raw: r2, text: r2 };
      }
      return de(n2, i, n2[0], this.lexer, this.rules);
    }
  }
  emStrong(e2, t2, n2 = "") {
    let s2 = this.rules.inline.emStrongLDelim.exec(e2);
    if (!s2 || s2[3] && n2.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s2[1] || s2[2] || "") || !n2 || this.rules.inline.punctuation.exec(n2)) {
      let r2 = [...s2[0]].length - 1, o2, l, c2 = r2, p2 = 0, u2 = s2[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u2.lastIndex = 0, t2 = t2.slice(-1 * e2.length + r2); (s2 = u2.exec(t2)) != null; ) {
        if (o2 = s2[1] || s2[2] || s2[3] || s2[4] || s2[5] || s2[6], !o2) continue;
        if (l = [...o2].length, s2[3] || s2[4]) {
          c2 += l;
          continue;
        } else if ((s2[5] || s2[6]) && r2 % 3 && !((r2 + l) % 3)) {
          p2 += l;
          continue;
        }
        if (c2 -= l, c2 > 0) continue;
        l = Math.min(l, l + c2 + p2);
        let d2 = [...s2[0]][0].length, g = e2.slice(0, r2 + s2.index + d2 + l);
        if (Math.min(r2, l) % 2) {
          let f2 = g.slice(1, -1);
          return { type: "em", raw: g, text: f2, tokens: this.lexer.inlineTokens(f2) };
        }
        let x = g.slice(2, -2);
        return { type: "strong", raw: g, text: x, tokens: this.lexer.inlineTokens(x) };
      }
    }
  }
  codespan(e2) {
    let t2 = this.rules.inline.code.exec(e2);
    if (t2) {
      let n2 = t2[2].replace(this.rules.other.newLineCharGlobal, " "), s2 = this.rules.other.nonSpaceChar.test(n2), i = this.rules.other.startingSpaceChar.test(n2) && this.rules.other.endingSpaceChar.test(n2);
      return s2 && i && (n2 = n2.substring(1, n2.length - 1)), { type: "codespan", raw: t2[0], text: n2 };
    }
  }
  br(e2) {
    let t2 = this.rules.inline.br.exec(e2);
    if (t2) return { type: "br", raw: t2[0] };
  }
  del(e2) {
    let t2 = this.rules.inline.del.exec(e2);
    if (t2) return { type: "del", raw: t2[0], text: t2[2], tokens: this.lexer.inlineTokens(t2[2]) };
  }
  autolink(e2) {
    let t2 = this.rules.inline.autolink.exec(e2);
    if (t2) {
      let n2, s2;
      return t2[2] === "@" ? (n2 = t2[1], s2 = "mailto:" + n2) : (n2 = t2[1], s2 = n2), { type: "link", raw: t2[0], text: n2, href: s2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  url(e2) {
    var _a3;
    let t2;
    if (t2 = this.rules.inline.url.exec(e2)) {
      let n2, s2;
      if (t2[2] === "@") n2 = t2[0], s2 = "mailto:" + n2;
      else {
        let i;
        do
          i = t2[0], t2[0] = ((_a3 = this.rules.inline._backpedal.exec(t2[0])) == null ? void 0 : _a3[0]) ?? "";
        while (i !== t2[0]);
        n2 = t2[0], t2[1] === "www." ? s2 = "http://" + t2[0] : s2 = t2[0];
      }
      return { type: "link", raw: t2[0], text: n2, href: s2, tokens: [{ type: "text", raw: n2, text: n2 }] };
    }
  }
  inlineText(e2) {
    let t2 = this.rules.inline.text.exec(e2);
    if (t2) {
      let n2 = this.lexer.state.inRawBlock;
      return { type: "text", raw: t2[0], text: t2[0], escaped: n2 };
    }
  }
};
var b = class a {
  constructor(e2) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e2 || w, this.options.tokenizer = this.options.tokenizer || new S(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t2 = { other: m2, block: O.normal, inline: P.normal };
    this.options.pedantic ? (t2.block = O.pedantic, t2.inline = P.pedantic) : this.options.gfm && (t2.block = O.gfm, this.options.breaks ? t2.inline = P.breaks : t2.inline = P.gfm), this.tokenizer.rules = t2;
  }
  static get rules() {
    return { block: O, inline: P };
  }
  static lex(e2, t2) {
    return new a(t2).lex(e2);
  }
  static lexInline(e2, t2) {
    return new a(t2).inlineTokens(e2);
  }
  lex(e2) {
    e2 = e2.replace(m2.carriageReturn, `
`), this.blockTokens(e2, this.tokens);
    for (let t2 = 0; t2 < this.inlineQueue.length; t2++) {
      let n2 = this.inlineQueue[t2];
      this.inlineTokens(n2.src, n2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e2, t2 = [], n2 = false) {
    var _a3, _b, _c;
    for (this.options.pedantic && (e2 = e2.replace(m2.tabCharGlobal, "    ").replace(m2.spaceLine, "")); e2; ) {
      let s2;
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.block) == null ? void 0 : _b.some((r2) => (s2 = r2.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(s2.raw.length), t2.push(s2), true) : false)) continue;
      if (s2 = this.tokenizer.space(e2)) {
        e2 = e2.substring(s2.raw.length);
        let r2 = t2.at(-1);
        s2.raw.length === 1 && r2 !== void 0 ? r2.raw += `
` : t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.code(e2)) {
        e2 = e2.substring(s2.raw.length);
        let r2 = t2.at(-1);
        (r2 == null ? void 0 : r2.type) === "paragraph" || (r2 == null ? void 0 : r2.type) === "text" ? (r2.raw += `
` + s2.raw, r2.text += `
` + s2.text, this.inlineQueue.at(-1).src = r2.text) : t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.fences(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.heading(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.hr(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.blockquote(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.list(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.html(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.def(e2)) {
        e2 = e2.substring(s2.raw.length);
        let r2 = t2.at(-1);
        (r2 == null ? void 0 : r2.type) === "paragraph" || (r2 == null ? void 0 : r2.type) === "text" ? (r2.raw += `
` + s2.raw, r2.text += `
` + s2.raw, this.inlineQueue.at(-1).src = r2.text) : this.tokens.links[s2.tag] || (this.tokens.links[s2.tag] = { href: s2.href, title: s2.title });
        continue;
      }
      if (s2 = this.tokenizer.table(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.lheading(e2)) {
        e2 = e2.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      let i = e2;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startBlock) {
        let r2 = 1 / 0, o2 = e2.slice(1), l;
        this.options.extensions.startBlock.forEach((c2) => {
          l = c2.call({ lexer: this }, o2), typeof l == "number" && l >= 0 && (r2 = Math.min(r2, l));
        }), r2 < 1 / 0 && r2 >= 0 && (i = e2.substring(0, r2 + 1));
      }
      if (this.state.top && (s2 = this.tokenizer.paragraph(i))) {
        let r2 = t2.at(-1);
        n2 && (r2 == null ? void 0 : r2.type) === "paragraph" ? (r2.raw += `
` + s2.raw, r2.text += `
` + s2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r2.text) : t2.push(s2), n2 = i.length !== e2.length, e2 = e2.substring(s2.raw.length);
        continue;
      }
      if (s2 = this.tokenizer.text(e2)) {
        e2 = e2.substring(s2.raw.length);
        let r2 = t2.at(-1);
        (r2 == null ? void 0 : r2.type) === "text" ? (r2.raw += `
` + s2.raw, r2.text += `
` + s2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = r2.text) : t2.push(s2);
        continue;
      }
      if (e2) {
        let r2 = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(r2);
          break;
        } else throw new Error(r2);
      }
    }
    return this.state.top = true, t2;
  }
  inline(e2, t2 = []) {
    return this.inlineQueue.push({ src: e2, tokens: t2 }), t2;
  }
  inlineTokens(e2, t2 = []) {
    var _a3, _b, _c;
    let n2 = e2, s2 = null;
    if (this.tokens.links) {
      let o2 = Object.keys(this.tokens.links);
      if (o2.length > 0) for (; (s2 = this.tokenizer.rules.inline.reflinkSearch.exec(n2)) != null; ) o2.includes(s2[0].slice(s2[0].lastIndexOf("[") + 1, -1)) && (n2 = n2.slice(0, s2.index) + "[" + "a".repeat(s2[0].length - 2) + "]" + n2.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s2 = this.tokenizer.rules.inline.anyPunctuation.exec(n2)) != null; ) n2 = n2.slice(0, s2.index) + "++" + n2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (s2 = this.tokenizer.rules.inline.blockSkip.exec(n2)) != null; ) n2 = n2.slice(0, s2.index) + "[" + "a".repeat(s2[0].length - 2) + "]" + n2.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let i = false, r2 = "";
    for (; e2; ) {
      i || (r2 = ""), i = false;
      let o2;
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.inline) == null ? void 0 : _b.some((c2) => (o2 = c2.call({ lexer: this }, e2, t2)) ? (e2 = e2.substring(o2.raw.length), t2.push(o2), true) : false)) continue;
      if (o2 = this.tokenizer.escape(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.tag(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.link(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.reflink(e2, this.tokens.links)) {
        e2 = e2.substring(o2.raw.length);
        let c2 = t2.at(-1);
        o2.type === "text" && (c2 == null ? void 0 : c2.type) === "text" ? (c2.raw += o2.raw, c2.text += o2.text) : t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.emStrong(e2, n2, r2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.codespan(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.br(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.del(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.autolink(e2)) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (!this.state.inLink && (o2 = this.tokenizer.url(e2))) {
        e2 = e2.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      let l = e2;
      if ((_c = this.options.extensions) == null ? void 0 : _c.startInline) {
        let c2 = 1 / 0, p2 = e2.slice(1), u2;
        this.options.extensions.startInline.forEach((d2) => {
          u2 = d2.call({ lexer: this }, p2), typeof u2 == "number" && u2 >= 0 && (c2 = Math.min(c2, u2));
        }), c2 < 1 / 0 && c2 >= 0 && (l = e2.substring(0, c2 + 1));
      }
      if (o2 = this.tokenizer.inlineText(l)) {
        e2 = e2.substring(o2.raw.length), o2.raw.slice(-1) !== "_" && (r2 = o2.raw.slice(-1)), i = true;
        let c2 = t2.at(-1);
        (c2 == null ? void 0 : c2.type) === "text" ? (c2.raw += o2.raw, c2.text += o2.text) : t2.push(o2);
        continue;
      }
      if (e2) {
        let c2 = "Infinite loop on byte: " + e2.charCodeAt(0);
        if (this.options.silent) {
          console.error(c2);
          break;
        } else throw new Error(c2);
      }
    }
    return t2;
  }
};
var $2 = class {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = e2 || w;
  }
  space(e2) {
    return "";
  }
  code({ text: e2, lang: t2, escaped: n2 }) {
    var _a3;
    let s2 = (_a3 = (t2 || "").match(m2.notSpaceStart)) == null ? void 0 : _a3[0], i = e2.replace(m2.endingNewline, "") + `
`;
    return s2 ? '<pre><code class="language-' + R2(s2) + '">' + (n2 ? i : R2(i, true)) + `</code></pre>
` : "<pre><code>" + (n2 ? i : R2(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e2 }) {
    return `<blockquote>
${this.parser.parse(e2)}</blockquote>
`;
  }
  html({ text: e2 }) {
    return e2;
  }
  heading({ tokens: e2, depth: t2 }) {
    return `<h${t2}>${this.parser.parseInline(e2)}</h${t2}>
`;
  }
  hr(e2) {
    return `<hr>
`;
  }
  list(e2) {
    let t2 = e2.ordered, n2 = e2.start, s2 = "";
    for (let o2 = 0; o2 < e2.items.length; o2++) {
      let l = e2.items[o2];
      s2 += this.listitem(l);
    }
    let i = t2 ? "ol" : "ul", r2 = t2 && n2 !== 1 ? ' start="' + n2 + '"' : "";
    return "<" + i + r2 + `>
` + s2 + "</" + i + `>
`;
  }
  listitem(e2) {
    var _a3;
    let t2 = "";
    if (e2.task) {
      let n2 = this.checkbox({ checked: !!e2.checked });
      e2.loose ? ((_a3 = e2.tokens[0]) == null ? void 0 : _a3.type) === "paragraph" ? (e2.tokens[0].text = n2 + " " + e2.tokens[0].text, e2.tokens[0].tokens && e2.tokens[0].tokens.length > 0 && e2.tokens[0].tokens[0].type === "text" && (e2.tokens[0].tokens[0].text = n2 + " " + R2(e2.tokens[0].tokens[0].text), e2.tokens[0].tokens[0].escaped = true)) : e2.tokens.unshift({ type: "text", raw: n2 + " ", text: n2 + " ", escaped: true }) : t2 += n2 + " ";
    }
    return t2 += this.parser.parse(e2.tokens, !!e2.loose), `<li>${t2}</li>
`;
  }
  checkbox({ checked: e2 }) {
    return "<input " + (e2 ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e2 }) {
    return `<p>${this.parser.parseInline(e2)}</p>
`;
  }
  table(e2) {
    let t2 = "", n2 = "";
    for (let i = 0; i < e2.header.length; i++) n2 += this.tablecell(e2.header[i]);
    t2 += this.tablerow({ text: n2 });
    let s2 = "";
    for (let i = 0; i < e2.rows.length; i++) {
      let r2 = e2.rows[i];
      n2 = "";
      for (let o2 = 0; o2 < r2.length; o2++) n2 += this.tablecell(r2[o2]);
      s2 += this.tablerow({ text: n2 });
    }
    return s2 && (s2 = `<tbody>${s2}</tbody>`), `<table>
<thead>
` + t2 + `</thead>
` + s2 + `</table>
`;
  }
  tablerow({ text: e2 }) {
    return `<tr>
${e2}</tr>
`;
  }
  tablecell(e2) {
    let t2 = this.parser.parseInline(e2.tokens), n2 = e2.header ? "th" : "td";
    return (e2.align ? `<${n2} align="${e2.align}">` : `<${n2}>`) + t2 + `</${n2}>
`;
  }
  strong({ tokens: e2 }) {
    return `<strong>${this.parser.parseInline(e2)}</strong>`;
  }
  em({ tokens: e2 }) {
    return `<em>${this.parser.parseInline(e2)}</em>`;
  }
  codespan({ text: e2 }) {
    return `<code>${R2(e2, true)}</code>`;
  }
  br(e2) {
    return "<br>";
  }
  del({ tokens: e2 }) {
    return `<del>${this.parser.parseInline(e2)}</del>`;
  }
  link({ href: e2, title: t2, tokens: n2 }) {
    let s2 = this.parser.parseInline(n2), i = J(e2);
    if (i === null) return s2;
    e2 = i;
    let r2 = '<a href="' + e2 + '"';
    return t2 && (r2 += ' title="' + R2(t2) + '"'), r2 += ">" + s2 + "</a>", r2;
  }
  image({ href: e2, title: t2, text: n2, tokens: s2 }) {
    s2 && (n2 = this.parser.parseInline(s2, this.parser.textRenderer));
    let i = J(e2);
    if (i === null) return R2(n2);
    e2 = i;
    let r2 = `<img src="${e2}" alt="${n2}"`;
    return t2 && (r2 += ` title="${R2(t2)}"`), r2 += ">", r2;
  }
  text(e2) {
    return "tokens" in e2 && e2.tokens ? this.parser.parseInline(e2.tokens) : "escaped" in e2 && e2.escaped ? e2.text : R2(e2.text);
  }
};
var _ = class {
  strong({ text: e2 }) {
    return e2;
  }
  em({ text: e2 }) {
    return e2;
  }
  codespan({ text: e2 }) {
    return e2;
  }
  del({ text: e2 }) {
    return e2;
  }
  html({ text: e2 }) {
    return e2;
  }
  text({ text: e2 }) {
    return e2;
  }
  link({ text: e2 }) {
    return "" + e2;
  }
  image({ text: e2 }) {
    return "" + e2;
  }
  br() {
    return "";
  }
};
var T = class a2 {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = e2 || w, this.options.renderer = this.options.renderer || new $2(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new _();
  }
  static parse(e2, t2) {
    return new a2(t2).parse(e2);
  }
  static parseInline(e2, t2) {
    return new a2(t2).parseInline(e2);
  }
  parse(e2, t2 = true) {
    var _a3, _b;
    let n2 = "";
    for (let s2 = 0; s2 < e2.length; s2++) {
      let i = e2[s2];
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b[i.type]) {
        let o2 = i, l = this.options.extensions.renderers[o2.type].call({ parser: this }, o2);
        if (l !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o2.type)) {
          n2 += l || "";
          continue;
        }
      }
      let r2 = i;
      switch (r2.type) {
        case "space": {
          n2 += this.renderer.space(r2);
          continue;
        }
        case "hr": {
          n2 += this.renderer.hr(r2);
          continue;
        }
        case "heading": {
          n2 += this.renderer.heading(r2);
          continue;
        }
        case "code": {
          n2 += this.renderer.code(r2);
          continue;
        }
        case "table": {
          n2 += this.renderer.table(r2);
          continue;
        }
        case "blockquote": {
          n2 += this.renderer.blockquote(r2);
          continue;
        }
        case "list": {
          n2 += this.renderer.list(r2);
          continue;
        }
        case "html": {
          n2 += this.renderer.html(r2);
          continue;
        }
        case "paragraph": {
          n2 += this.renderer.paragraph(r2);
          continue;
        }
        case "text": {
          let o2 = r2, l = this.renderer.text(o2);
          for (; s2 + 1 < e2.length && e2[s2 + 1].type === "text"; ) o2 = e2[++s2], l += `
` + this.renderer.text(o2);
          t2 ? n2 += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: true }] }) : n2 += l;
          continue;
        }
        default: {
          let o2 = 'Token with "' + r2.type + '" type was not found.';
          if (this.options.silent) return console.error(o2), "";
          throw new Error(o2);
        }
      }
    }
    return n2;
  }
  parseInline(e2, t2 = this.renderer) {
    var _a3, _b;
    let n2 = "";
    for (let s2 = 0; s2 < e2.length; s2++) {
      let i = e2[s2];
      if ((_b = (_a3 = this.options.extensions) == null ? void 0 : _a3.renderers) == null ? void 0 : _b[i.type]) {
        let o2 = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o2 !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n2 += o2 || "";
          continue;
        }
      }
      let r2 = i;
      switch (r2.type) {
        case "escape": {
          n2 += t2.text(r2);
          break;
        }
        case "html": {
          n2 += t2.html(r2);
          break;
        }
        case "link": {
          n2 += t2.link(r2);
          break;
        }
        case "image": {
          n2 += t2.image(r2);
          break;
        }
        case "strong": {
          n2 += t2.strong(r2);
          break;
        }
        case "em": {
          n2 += t2.em(r2);
          break;
        }
        case "codespan": {
          n2 += t2.codespan(r2);
          break;
        }
        case "br": {
          n2 += t2.br(r2);
          break;
        }
        case "del": {
          n2 += t2.del(r2);
          break;
        }
        case "text": {
          n2 += t2.text(r2);
          break;
        }
        default: {
          let o2 = 'Token with "' + r2.type + '" type was not found.';
          if (this.options.silent) return console.error(o2), "";
          throw new Error(o2);
        }
      }
    }
    return n2;
  }
};
var _a;
var L = (_a = class {
  constructor(e2) {
    __publicField(this, "options");
    __publicField(this, "block");
    this.options = e2 || w;
  }
  preprocess(e2) {
    return e2;
  }
  postprocess(e2) {
    return e2;
  }
  processAllTokens(e2) {
    return e2;
  }
  provideLexer() {
    return this.block ? b.lex : b.lexInline;
  }
  provideParser() {
    return this.block ? T.parse : T.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var B = class {
  constructor(...e2) {
    __publicField(this, "defaults", M());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", this.parseMarkdown(true));
    __publicField(this, "parseInline", this.parseMarkdown(false));
    __publicField(this, "Parser", T);
    __publicField(this, "Renderer", $2);
    __publicField(this, "TextRenderer", _);
    __publicField(this, "Lexer", b);
    __publicField(this, "Tokenizer", S);
    __publicField(this, "Hooks", L);
    this.use(...e2);
  }
  walkTokens(e2, t2) {
    var _a3, _b;
    let n2 = [];
    for (let s2 of e2) switch (n2 = n2.concat(t2.call(this, s2)), s2.type) {
      case "table": {
        let i = s2;
        for (let r2 of i.header) n2 = n2.concat(this.walkTokens(r2.tokens, t2));
        for (let r2 of i.rows) for (let o2 of r2) n2 = n2.concat(this.walkTokens(o2.tokens, t2));
        break;
      }
      case "list": {
        let i = s2;
        n2 = n2.concat(this.walkTokens(i.items, t2));
        break;
      }
      default: {
        let i = s2;
        ((_b = (_a3 = this.defaults.extensions) == null ? void 0 : _a3.childTokens) == null ? void 0 : _b[i.type]) ? this.defaults.extensions.childTokens[i.type].forEach((r2) => {
          let o2 = i[r2].flat(1 / 0);
          n2 = n2.concat(this.walkTokens(o2, t2));
        }) : i.tokens && (n2 = n2.concat(this.walkTokens(i.tokens, t2)));
      }
    }
    return n2;
  }
  use(...e2) {
    let t2 = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e2.forEach((n2) => {
      let s2 = { ...n2 };
      if (s2.async = this.defaults.async || s2.async || false, n2.extensions && (n2.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let r2 = t2.renderers[i.name];
          r2 ? t2.renderers[i.name] = function(...o2) {
            let l = i.renderer.apply(this, o2);
            return l === false && (l = r2.apply(this, o2)), l;
          } : t2.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let r2 = t2[i.level];
          r2 ? r2.unshift(i.tokenizer) : t2[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t2.startBlock ? t2.startBlock.push(i.start) : t2.startBlock = [i.start] : i.level === "inline" && (t2.startInline ? t2.startInline.push(i.start) : t2.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t2.childTokens[i.name] = i.childTokens);
      }), s2.extensions = t2), n2.renderer) {
        let i = this.defaults.renderer || new $2(this.defaults);
        for (let r2 in n2.renderer) {
          if (!(r2 in i)) throw new Error(`renderer '${r2}' does not exist`);
          if (["options", "parser"].includes(r2)) continue;
          let o2 = r2, l = n2.renderer[o2], c2 = i[o2];
          i[o2] = (...p2) => {
            let u2 = l.apply(i, p2);
            return u2 === false && (u2 = c2.apply(i, p2)), u2 || "";
          };
        }
        s2.renderer = i;
      }
      if (n2.tokenizer) {
        let i = this.defaults.tokenizer || new S(this.defaults);
        for (let r2 in n2.tokenizer) {
          if (!(r2 in i)) throw new Error(`tokenizer '${r2}' does not exist`);
          if (["options", "rules", "lexer"].includes(r2)) continue;
          let o2 = r2, l = n2.tokenizer[o2], c2 = i[o2];
          i[o2] = (...p2) => {
            let u2 = l.apply(i, p2);
            return u2 === false && (u2 = c2.apply(i, p2)), u2;
          };
        }
        s2.tokenizer = i;
      }
      if (n2.hooks) {
        let i = this.defaults.hooks || new L();
        for (let r2 in n2.hooks) {
          if (!(r2 in i)) throw new Error(`hook '${r2}' does not exist`);
          if (["options", "block"].includes(r2)) continue;
          let o2 = r2, l = n2.hooks[o2], c2 = i[o2];
          L.passThroughHooks.has(r2) ? i[o2] = (p2) => {
            if (this.defaults.async) return Promise.resolve(l.call(i, p2)).then((d2) => c2.call(i, d2));
            let u2 = l.call(i, p2);
            return c2.call(i, u2);
          } : i[o2] = (...p2) => {
            let u2 = l.apply(i, p2);
            return u2 === false && (u2 = c2.apply(i, p2)), u2;
          };
        }
        s2.hooks = i;
      }
      if (n2.walkTokens) {
        let i = this.defaults.walkTokens, r2 = n2.walkTokens;
        s2.walkTokens = function(o2) {
          let l = [];
          return l.push(r2.call(this, o2)), i && (l = l.concat(i.call(this, o2))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s2 };
    }), this;
  }
  setOptions(e2) {
    return this.defaults = { ...this.defaults, ...e2 }, this;
  }
  lexer(e2, t2) {
    return b.lex(e2, t2 ?? this.defaults);
  }
  parser(e2, t2) {
    return T.parse(e2, t2 ?? this.defaults);
  }
  parseMarkdown(e2) {
    return (n2, s2) => {
      let i = { ...s2 }, r2 = { ...this.defaults, ...i }, o2 = this.onError(!!r2.silent, !!r2.async);
      if (this.defaults.async === true && i.async === false) return o2(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n2 > "u" || n2 === null) return o2(new Error("marked(): input parameter is undefined or null"));
      if (typeof n2 != "string") return o2(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n2) + ", string expected"));
      r2.hooks && (r2.hooks.options = r2, r2.hooks.block = e2);
      let l = r2.hooks ? r2.hooks.provideLexer() : e2 ? b.lex : b.lexInline, c2 = r2.hooks ? r2.hooks.provideParser() : e2 ? T.parse : T.parseInline;
      if (r2.async) return Promise.resolve(r2.hooks ? r2.hooks.preprocess(n2) : n2).then((p2) => l(p2, r2)).then((p2) => r2.hooks ? r2.hooks.processAllTokens(p2) : p2).then((p2) => r2.walkTokens ? Promise.all(this.walkTokens(p2, r2.walkTokens)).then(() => p2) : p2).then((p2) => c2(p2, r2)).then((p2) => r2.hooks ? r2.hooks.postprocess(p2) : p2).catch(o2);
      try {
        r2.hooks && (n2 = r2.hooks.preprocess(n2));
        let p2 = l(n2, r2);
        r2.hooks && (p2 = r2.hooks.processAllTokens(p2)), r2.walkTokens && this.walkTokens(p2, r2.walkTokens);
        let u2 = c2(p2, r2);
        return r2.hooks && (u2 = r2.hooks.postprocess(u2)), u2;
      } catch (p2) {
        return o2(p2);
      }
    };
  }
  onError(e2, t2) {
    return (n2) => {
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e2) {
        let s2 = "<p>An error occurred:</p><pre>" + R2(n2.message + "", true) + "</pre>";
        return t2 ? Promise.resolve(s2) : s2;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  }
};
var z = new B();
function k(a3, e2) {
  return z.parse(a3, e2);
}
k.options = k.setOptions = function(a3) {
  return z.setOptions(a3), k.defaults = z.defaults, H(k.defaults), k;
};
k.getDefaults = M;
k.defaults = w;
k.use = function(...a3) {
  return z.use(...a3), k.defaults = z.defaults, H(k.defaults), k;
};
k.walkTokens = function(a3, e2) {
  return z.walkTokens(a3, e2);
};
k.parseInline = z.parseInline;
k.Parser = T;
k.parser = T.parse;
k.Renderer = $2;
k.TextRenderer = _;
k.Lexer = b;
k.lexer = b.lex;
k.Tokenizer = S;
k.Hooks = L;
k.parse = k;
var Dt = k.options;
var Zt = k.setOptions;
var Gt = k.use;
var Ht = k.walkTokens;
var Nt = k.parseInline;
var Ft = T.parse;
var Qt = b.lex;

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  if (typeof options.emptyLangClass !== "string") {
    options.emptyLangClass = "";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        const classAttr = classValue ? ` class="${classValue}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return (code) => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}

// node_modules/@waline/client/dist/slim.js
var import_recaptcha_v3 = __toESM(require_ReCaptcha());
var Kt = ["nick", "mail", "link"];
var De2 = (e2) => e2.filter((l) => Kt.includes(l));
var Pe2 = ["//unpkg.com/@waline/emojis@1.1.0/weibo"];
var Zt2 = ["//unpkg.com/@waline/emojis/tieba/tieba_agree.png", "//unpkg.com/@waline/emojis/tieba/tieba_look_down.png", "//unpkg.com/@waline/emojis/tieba/tieba_sunglasses.png", "//unpkg.com/@waline/emojis/tieba/tieba_pick_nose.png", "//unpkg.com/@waline/emojis/tieba/tieba_awkward.png", "//unpkg.com/@waline/emojis/tieba/tieba_sleep.png"];
var Xt = (e2) => new Promise((l, t2) => {
  if (e2.size > 128e3) return t2(new Error("File too large! File size limit 128KB"));
  const a3 = new FileReader();
  a3.readAsDataURL(e2), a3.onload = () => l(a3.result), a3.onerror = t2;
});
var Yt = (e2) => e2 ? '<p class="wl-tex">TeX is not available in preview</p>' : '<span class="wl-tex">TeX is not available in preview</span>';
var Jt = (e2) => {
  const l = async (t2, a3 = {}) => fetch(`https://api.giphy.com/v1/gifs/${t2}?${new URLSearchParams({ lang: e2, limit: "20", rating: "g", api_key: "6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp", ...a3 }).toString()}`).then((n2) => n2.json()).then(({ data: n2 }) => n2.map((s2) => ({ title: s2.title, src: s2.images.downsized_medium.url })));
  return { search: (t2) => l("search", { q: t2, offset: "0" }), default: () => l("trending", {}), more: (t2, a3 = 0) => l("search", { q: t2, offset: a3.toString() }) };
};
var Qt2 = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/;
var ea = /</;
var ta = /(?:^|\s)\/\/(.+?)$/gm;
var aa = /\/\*([\S\s]*?)\*\//gm;
var la = new RegExp(`(${Qt2.source}|${ea.source})|((?:${ta.source})|(?:${aa.source}))`, "gmi");
var qe2 = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
var Ie2 = {};
var na = (e2) => {
  let l = 0;
  return e2.replace(la, (t2, a3, n2) => {
    if (n2) return `<span style="color: slategray">${n2}</span>`;
    if (a3 === "<") return "&lt;";
    let s2;
    Ie2[a3] ? s2 = Ie2[a3] : (s2 = qe2[l], Ie2[a3] = s2);
    const h3 = `<span style="color: #${s2}">${a3}</span>`;
    return l = ++l % qe2.length, h3;
  });
};
var ra = ["nick", "nickError", "mail", "mailError", "link", "optional", "placeholder", "sofa", "submit", "like", "cancelLike", "reply", "cancelReply", "comment", "refresh", "more", "preview", "emoji", "uploadImage", "seconds", "minutes", "hours", "days", "now", "uploading", "login", "logout", "admin", "sticky", "word", "wordHint", "anonymous", "level0", "level1", "level2", "level3", "level4", "level5", "gif", "gifSearchPlaceholder", "profile", "approved", "waiting", "spam", "unsticky", "oldest", "latest", "hottest", "reactionTitle"];
var J2 = (e2) => Object.fromEntries(e2.map((l, t2) => [ra[t2], l]));
var oa = J2(["Benutzername", "Der Benutzername darf nicht weniger als 3 Bytes umfassen.", "E-Mail", "Bitte bestätigen Sie Ihre E-Mail-Adresse.", "Webseite", "Optional", "Kommentieren Sie hier...", "Noch keine Kommentare.", "Senden", "Gefällt mir", "Gefällt mir nicht mehr", "Antworten", "Antwort abbrechen", "Kommentare", "Aktualisieren", "Mehr laden...", "Vorschau", "Emoji", "Ein Bild hochladen", "Vor einigen Sekunden", "Vor einigen Minuten", "Vor einigen Stunden", "Vor einigen Tagen", "Gerade eben", "Hochladen läuft", "Anmelden", "Abmelden", "Admin", "Angeheftet", "Wörter", "Bitte geben Sie Kommentare zwischen $0 und $1 Wörtern ein! Aktuelle Anzahl der Wörter: $2", "Anonym", "Zwerge", "Hobbits", "Ents", "Magier", "Elfen", "Maïar", "GIF", "Nach einem GIF suchen", "Profil", "Genehmigt", "Ausstehend", "Spam", "Lösen", "Älteste", "Neueste", "Am beliebtesten", "Was denken Sie?"]);
var Oe2 = J2(["NickName", "NickName cannot be less than 3 bytes.", "E-Mail", "Please confirm your email address.", "Website", "Optional", "Comment here...", "No comment yet.", "Submit", "Like", "Cancel like", "Reply", "Cancel reply", "Comments", "Refresh", "Load More...", "Preview", "Emoji", "Upload Image", "seconds ago", "minutes ago", "hours ago", "days ago", "just now", "Uploading", "Login", "logout", "Admin", "Sticky", "Words", `Please input comments between $0 and $1 words!
 Current word number: $2`, "Anonymous", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Search GIF", "Profile", "Approved", "Waiting", "Spam", "Unsticky", "Oldest", "Latest", "Hottest", "What do you think?"]);
var Ge2 = J2(["Nombre de usuario", "El nombre de usuario no puede tener menos de 3 bytes.", "Correo electrónico", "Por favor confirma tu dirección de correo electrónico.", "Sitio web", "Opcional", "Comenta aquí...", "Sin comentarios todavía.", "Enviar", "Like", "Anular like", "Responder", "Anular respuesta", "Comentarios", "Recargar", "Cargar Más...", "Previsualizar", "Emoji", "Subir Imagen", "segundos atrás", "minutos atrás", "horas atrás", "días atrás", "justo ahora", "Subiendo", "Iniciar sesión", "cerrar sesión", "Admin", "Fijado", "Palabras", `Por favor escriba entre $0 y $1 palabras!
 El número actual de palabras: $2`, "Anónimo", "Enanos", "Hobbits", "Ents", "Magos", "Elfos", "Maiar", "GIF", "Buscar GIF", "Perfil", "Aprobado", "Esperando", "Spam", "Desfijar", "Más antiguos", "Más recientes", "Más vistos", "¿Qué piensas?"]);
var Ke2 = J2(["Pseudo", "Le pseudo ne peut pas faire moins de 3 octets.", "E-mail", "Veuillez confirmer votre adresse e-mail.", "Site Web", "Optionnel", "Commentez ici...", "Aucun commentaire pour l'instant.", "Envoyer", "J'aime", "Annuler le j'aime", "Répondre", "Annuler la réponse", "Commentaires", "Actualiser", "Charger plus...", "Aperçu", "Emoji", "Télécharger une image", "Il y a quelques secondes", "Il y a quelques minutes", "Il y a quelques heures", "Il y a quelques jours", "À l'instant", "Téléchargement en cours", "Connexion", "Déconnexion", "Admin", "Épinglé", "Mots", `Veuillez saisir des commentaires entre $0 et $1 mots !
 Nombre actuel de mots : $2`, "Anonyme", "Nains", "Hobbits", "Ents", "Mages", "Elfes", "Maïar", "GIF", "Rechercher un GIF", "Profil", "Approuvé", "En attente", "Indésirable", "Détacher", "Le plus ancien", "Dernier", "Le plus populaire", "Qu'en pensez-vous ?"]);
var Ze2 = J2(["ニックネーム", "3バイト以上のニックネームをご入力ください.", "メールアドレス", "メールアドレスをご確認ください.", "サイト", "オプション", "ここにコメント", "コメントしましょう~", "提出する", "Like", "Cancel like", "返信する", "キャンセル", "コメント", "更新", "さらに読み込む", "プレビュー", "絵文字", "画像をアップロード", "秒前", "分前", "時間前", "日前", "たっだ今", "アップロード", "ログインする", "ログアウト", "管理者", "トップに置く", "ワード", `コメントは $0 から $1 ワードの間でなければなりません!
 現在の単語番号: $2`, "匿名", "うえにん", "なかにん", "しもおし", "特にしもおし", "かげ", "なぬし", "GIF", "探す GIF", "個人情報", "承認済み", "待っている", "スパム", "べたつかない", "逆順", "正順", "人気順", "どう思いますか？"]);
var ia = J2(["Apelido", "Apelido não pode ser menor que 3 bytes.", "E-Mail", "Por favor, confirme seu endereço de e-mail.", "Website", "Opcional", "Comente aqui...", "Nenhum comentário, ainda.", "Enviar", "Like", "Cancel like", "Responder", "Cancelar resposta", "Comentários", "Refrescar", "Carregar Mais...", "Visualizar", "Emoji", "Enviar Imagem", "segundos atrás", "minutos atrás", "horas atrás", "dias atrás", "agora mesmo", "Enviando", "Entrar", "Sair", "Admin", "Sticky", "Palavras", `Favor enviar comentário com $0 a $1 palavras!
 Número de palavras atuais: $2`, "Anônimo", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Pesquisar GIF", "informação pessoal", "Aprovado", "Espera", "Spam", "Unsticky", "Mais velho", "Mais recentes", "Mais quente", "O que você acha?"]);
var Xe2 = J2(["Псевдоним", "Никнейм не может быть меньше 3 байт.", "Эл. адрес", "Пожалуйста, подтвердите адрес вашей электронной почты.", "Веб-сайт", "Необязательный", "Комментарий здесь...", "Пока нет комментариев.", "Отправить", "Like", "Cancel like", "Отвечать", "Отменить ответ", "Комментарии", "Обновить", "Загрузи больше...", "Превью", "эмодзи", "Загрузить изображение", "секунд назад", "несколько минут назад", "несколько часов назад", "дней назад", "прямо сейчас", "Загрузка", "Авторизоваться", "Выход из системы", "Админ", "Липкий", "Слова", `Пожалуйста, введите комментарии от $0 до $1 слов!
Номер текущего слова: $2`, "Анонимный", "Dwarves", "Hobbits", "Ents", "Wizards", "Elves", "Maiar", "GIF", "Поиск GIF", "Персональные данные", "Одобренный", "Ожидающий", "Спам", "Нелипкий", "самый старый", "последний", "самый горячий", "Что вы думаете?"]);
var Ye = J2(["Tên", "Tên không được nhỏ hơn 3 ký tự.", "E-Mail", "Vui lòng xác nhập địa chỉ email của bạn.", "Website", "Tùy chọn", "Hãy bình luận có văn hoá!", "Chưa có bình luận", "Gửi", "Thích", "Bỏ thích", "Trả lời", "Hủy bỏ", "bình luận", "Làm mới", "Tải thêm...", "Xem trước", "Emoji", "Tải lên hình ảnh", "giây trước", "phút trước", "giờ trước", "ngày trước", "Vừa xong", "Đang tải lên", "Đăng nhập", "đăng xuất", "Quản trị viên", "Dính", "từ", `Bình luận phải có độ dài giữa $0 và $1 từ!
 Số từ hiện tại: $2`, "Vô danh", "Người lùn", "Người tí hon", "Thần rừng", "Pháp sư", "Tiên tộc", "Maiar", "Ảnh GIF", "Tìm kiếm ảnh GIF", "thông tin cá nhân", "Đã được phê duyệt", "Đang chờ đợi", "Thư rác", "Không dính", "lâu đời nhất", "muộn nhất", "nóng nhất", "What do you think?"]);
var Je2 = J2(["昵称", "昵称不能少于3个字符", "邮箱", "请填写正确的邮件地址", "网址", "可选", "欢迎评论", "来发评论吧~", "提交", "喜欢", "取消喜欢", "回复", "取消回复", "评论", "刷新", "加载更多...", "预览", "表情", "上传图片", "秒前", "分钟前", "小时前", "天前", "刚刚", "正在上传", "登录", "退出", "博主", "置顶", "字", `评论字数应在 $0 到 $1 字之间！
当前字数：$2`, "匿名", "潜水", "冒泡", "吐槽", "活跃", "话痨", "传说", "表情包", "搜索表情包", "个人资料", "通过", "待审核", "垃圾", "取消置顶", "按倒序", "按正序", "按热度", "你认为这篇文章怎么样？"]);
var sa = J2(["暱稱", "暱稱不能少於3個字元", "郵箱", "請填寫正確的郵件地址", "網址", "可選", "歡迎留言", "來發留言吧~", "送出", "喜歡", "取消喜歡", "回覆", "取消回覆", "留言", "重整", "載入更多...", "預覽", "表情", "上傳圖片", "秒前", "分鐘前", "小時前", "天前", "剛剛", "正在上傳", "登入", "登出", "管理者", "置頂", "字", `留言字數應在 $0 到 $1 字之間！
目前字數：$2`, "匿名", "潛水", "冒泡", "吐槽", "活躍", "多話", "傳說", "表情包", "搜尋表情包", "個人資料", "通過", "待審核", "垃圾", "取消置頂", "最早", "最新", "熱門", "你認為這篇文章怎麼樣？"]);
var Qe2 = "en-US";
var fe2 = { zh: Je2, "zh-cn": Je2, "zh-tw": sa, en: Oe2, "en-us": Oe2, fr: Ke2, "fr-fr": Ke2, jp: Ze2, "jp-jp": Ze2, "pt-br": ia, ru: Xe2, "ru-ru": Xe2, vi: Ye, "vi-vn": Ye, de: oa, es: Ge2, "es-mx": Ge2 };
var et = (e2) => fe2[e2.toLowerCase()] || fe2[Qe2.toLowerCase()];
var tt = (e2) => Object.keys(fe2).includes(e2.toLowerCase()) ? e2 : Qe2;
var at = { latest: "insertedAt_desc", oldest: "insertedAt_asc", hottest: "like_desc" };
var ca = Object.keys(at);
var we2 = Symbol("waline-config");
var lt = (e2) => {
  try {
    e2 = decodeURI(e2);
  } catch {
  }
  return e2;
};
var nt = (e2 = "") => e2.replace(/\/$/u, "");
var rt = (e2) => /^(https?:)?\/\//.test(e2);
var ye2 = (e2) => {
  const l = nt(e2);
  return rt(l) ? l : `https://${l}`;
};
var ua = (e2) => Array.isArray(e2) ? e2 : e2 ? [0, e2] : false;
var ce2 = (e2, l) => e2 == null || e2 === true ? l : e2 === false ? null : e2;
var ma = ({ serverURL: e2, path: l = location.pathname, lang: t2 = typeof navigator > "u" ? "en-US" : navigator.language, locale: a3, meta: n2 = ["nick", "mail", "link"], requiredMeta: s2 = [], dark: h3 = false, pageSize: c2 = 10, wordLimit: f2, noCopyright: v3 = false, login: y2 = "enable", recaptchaV3Key: m3 = "", turnstileKey: R3 = "", commentSorting: j3 = "latest", emoji: E = Pe2, imageUploader: $3, highlighter: S2, texRenderer: i, search: g, reaction: K2, ...X2 }) => ({ serverURL: ye2(e2), path: lt(l), lang: tt(t2), locale: { ...et(tt(t2)), ...typeof a3 == "object" ? a3 : {} }, wordLimit: ua(f2), meta: De2(n2), requiredMeta: De2(s2), dark: h3, pageSize: c2, commentSorting: j3, login: y2, noCopyright: v3, recaptchaV3Key: m3, turnstileKey: R3, ...X2, reaction: K2 === true ? Zt2 : K2 || null, imageUploader: ce2($3, Xt), highlighter: ce2(S2, na), texRenderer: ce2(i, Yt), emoji: ce2(E, Pe2), search: ce2(g, Jt(t2)) });
var re2 = (e2) => typeof e2 == "string";
var Ae2 = "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bg-color:#1e1e1e;--waline-bg-color-light:#272727;--waline-bg-color-hover: #444;--waline-border-color:#333;--waline-disable-bg-color:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bg-color:#272727;--waline-info-color:#666}";
var va = (e2) => re2(e2) ? e2 === "auto" ? `@media(prefers-color-scheme:dark){body${Ae2}}` : `${e2}${Ae2}` : e2 === true ? `:root${Ae2}` : "";
var Me2 = (e2, l) => {
  let t2 = e2.toString();
  for (; t2.length < l; ) t2 = "0" + t2;
  return t2;
};
var da = (e2) => {
  const l = Me2(e2.getDate(), 2), t2 = Me2(e2.getMonth() + 1, 2);
  return `${Me2(e2.getFullYear(), 2)}-${t2}-${l}`;
};
var pa = (e2, l, t2) => {
  if (!e2) return "";
  const a3 = re2(e2) ? new Date(e2.includes(" ") ? e2.replace(/-/g, "/") : e2) : e2, n2 = l.getTime() - a3.getTime(), s2 = Math.floor(n2 / (24 * 3600 * 1e3));
  if (s2 === 0) {
    const h3 = n2 % 864e5, c2 = Math.floor(h3 / (3600 * 1e3));
    if (c2 === 0) {
      const f2 = h3 % 36e5, v3 = Math.floor(f2 / (60 * 1e3));
      if (v3 === 0) {
        const y2 = f2 % 6e4;
        return `${Math.round(y2 / 1e3)} ${t2.seconds}`;
      }
      return `${v3} ${t2.minutes}`;
    }
    return `${c2} ${t2.hours}`;
  }
  return s2 < 0 ? t2.now : s2 < 8 ? `${s2} ${t2.days}` : da(a3);
};
var ga = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var ha = (e2) => ga.test(e2);
var fa = "WALINE_EMOJI";
var ot = useStorage(fa, {});
var wa = (e2) => !!/@[0-9]+\.[0-9]+\.[0-9]+/.test(e2);
var ya = (e2) => {
  const l = wa(e2);
  if (l) {
    const t2 = ot.value[e2];
    if (t2) return Promise.resolve(t2);
  }
  return fetch(`${e2}/info.json`).then((t2) => t2.json()).then((t2) => {
    const a3 = { folder: e2, ...t2 };
    return l && (ot.value[e2] = a3), a3;
  });
};
var it = (e2, l = "", t2 = "", a3 = "") => `${l ? `${l}/` : ""}${t2}${e2}${a3 ? `.${a3}` : ""}`;
var ba = (e2) => Promise.all(e2 ? e2.map((l) => re2(l) ? ya(nt(l)) : Promise.resolve(l)) : []).then((l) => {
  const t2 = { tabs: [], map: {} };
  return l.forEach((a3) => {
    const { name: n2, folder: s2, icon: h3, prefix: c2 = "", type: f2, items: v3 } = a3;
    t2.tabs.push({ name: n2, icon: it(h3, s2, c2, f2), items: v3.map((y2) => {
      const m3 = `${c2}${y2}`;
      return t2.map[m3] = it(y2, s2, c2, f2), m3;
    }) });
  }), t2;
});
var st = (e2) => {
  e2.name !== "AbortError" && console.error(e2.message);
};
var xe2 = (e2) => e2 instanceof HTMLElement ? e2 : re2(e2) ? document.querySelector(e2) : null;
var ka = (e2) => e2.type.includes("image");
var ct = (e2) => {
  const l = Array.from(e2).find(ka);
  return l ? l.getAsFile() : null;
};
var Ca = /\$.*?\$/;
var $a = /^\$(.*?)\$/;
var La = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/;
var Ea = (e2) => [{ name: "blockMath", level: "block", tokenizer(l) {
  const t2 = La.exec(l);
  if (t2 !== null) return { type: "html", raw: t2[0], text: e2(true, t2[1]) };
} }, { name: "inlineMath", level: "inline", start(l) {
  const t2 = l.search(Ca);
  return t2 !== -1 ? t2 : l.length;
}, tokenizer(l) {
  const t2 = $a.exec(l);
  if (t2 !== null) return { type: "html", raw: t2[0], text: e2(false, t2[1]) };
} }];
var ut = (e2 = "", l = {}) => e2.replace(/:(.+?):/g, (t2, a3) => l[a3] ? `<img class="wl-emoji" src="${l[a3]}" alt="${a3}">` : t2);
var Ia = (e2, { emojiMap: l, highlighter: t2, texRenderer: a3 }) => {
  const n2 = new B();
  if (n2.setOptions({ breaks: true }), t2 && n2.use(markedHighlight({ highlight: t2 })), a3) {
    const s2 = Ea(a3);
    n2.use({ extensions: s2 });
  }
  return n2.parse(ut(e2, l));
};
var Re2 = (e2) => {
  const { path: l } = e2.dataset;
  return l != null && l.length ? l : null;
};
var Aa = (e2) => e2.match(/[\w\d\s,.\u00C0-\u024F\u0400-\u04FF]+/giu);
var Ma = (e2) => e2.match(/[\u4E00-\u9FD5]/gu);
var xa = (e2) => {
  var l, t2;
  return (((l = Aa(e2)) == null ? void 0 : l.reduce((a3, n2) => a3 + (["", ",", "."].includes(n2.trim()) ? 0 : n2.trim().split(/\s+/u).length), 0)) ?? 0) + (((t2 = Ma(e2)) == null ? void 0 : t2.length) ?? 0);
};
var Ra = async () => {
  const { userAgentData: e2 } = navigator;
  let l = navigator.userAgent;
  if (!e2 || e2.platform !== "Windows") return l;
  const { platformVersion: t2 } = await e2.getHighEntropyValues(["platformVersion"]);
  return t2 && parseInt(t2.split(".")[0]) >= 13 && (l = l.replace("Windows NT 10.0", "Windows NT 11.0")), l;
};
var mt = ({ serverURL: e2, path: l = window.location.pathname, selector: t2 = ".waline-comment-count", lang: a3 = navigator.language }) => {
  const n2 = new AbortController(), s2 = document.querySelectorAll(t2);
  return s2.length && f({ serverURL: ye2(e2), paths: Array.from(s2).map((h3) => lt(Re2(h3) ?? l)), lang: a3, signal: n2.signal }).then((h3) => {
    s2.forEach((c2, f2) => {
      c2.innerText = h3[f2].toString();
    });
  }).catch(st), n2.abort.bind(n2);
};
var vt = ({ size: e2 }) => h("svg", { class: "wl-close-icon", viewBox: "0 0 1024 1024", width: e2, height: e2 }, [h("path", { d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z", fill: "currentColor" }), h("path", { d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z", fill: "#888" })]);
var Sa = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z", fill: "red" }));
var ja = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z", fill: "currentColor" }));
var Ua = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z", fill: "currentColor" }), h("path", { d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z", fill: "currentColor" })]);
var za = ({ active: e2 = false }) => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: `M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z${e2 ? "" : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"}`, fill: e2 ? "red" : "currentColor" })]);
var Va = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [h("path", { d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0", fill: "currentColor" }), h("path", { d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0", fill: "currentColor" })]);
var _a2 = () => h("svg", { width: "16", height: "16", ariaHidden: "true" }, h("path", { d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z", fill: "currentColor" }));
var Ha = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z", fill: "currentColor" }));
var Ta = () => h("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, h("path", { d: "M813.039 318.772L480.53 651.278H360.718V531.463L693.227 198.961C697.904 194.284 704.027 192 710.157 192C716.302 192 722.436 194.284 727.114 198.961L813.039 284.88C817.72 289.561 820 295.684 820 301.825C820 307.95 817.72 314.093 813.039 318.772ZM710.172 261.888L420.624 551.431V591.376H460.561L750.109 301.825L710.172 261.888ZM490.517 291.845H240.906V771.09H720.156V521.479C720.156 504.947 733.559 491.529 750.109 491.529C766.653 491.529 780.063 504.947 780.063 521.479V791.059C780.063 813.118 762.18 831 740.125 831H220.937C198.882 831 181 813.118 181 791.059V271.872C181 249.817 198.882 231.935 220.937 231.935H490.517C507.06 231.935 520.47 245.352 520.47 261.888C520.47 278.424 507.06 291.845 490.517 291.845Z", fill: "currentColor" }));
var Fa = () => h("svg", { class: "verified-icon", viewBox: "0 0 1024 1024", width: "14", height: "14" }, h("path", { d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z", fill: "#27ae60" }));
var ue2 = ({ size: e2 = 100 }) => h("svg", { width: e2, height: e2, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, h("circle", { cx: 50, cy: 50, fill: "none", stroke: "currentColor", strokeWidth: "4", r: "40", "stroke-dasharray": "85 30" }, h("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 50 50;360 50 50", keyTimes: "0;1" })));
var Na = () => h("svg", { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" }, [h("path", { style: "transform: translateY(0.5px)", d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z" }), h("path", { d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z" })]);
var Wa = () => useStorage("WALINE_USER_META", { nick: "", mail: "", link: "" });
var Ba = () => useStorage("WALINE_COMMENT_BOX_EDITOR", "");
var Da = "WALINE_LIKE";
var Pa = useStorage(Da, []);
var dt = () => Pa;
var qa = "WALINE_REACTION";
var Oa = useStorage(qa, {});
var Ga = () => Oa;
var pt = {};
var Ka = (e2) => {
  const l = pt[e2] ?? (pt[e2] = (0, import_recaptcha_v3.load)(e2, { useRecaptchaNet: true, autoHideBadge: true }));
  return { execute: (t2) => l.then((a3) => a3.execute(t2)) };
};
var Za = (e2) => ({ execute: async (l) => {
  const { load: t2 } = useScriptTag("https://challenges.cloudflare.com/turnstile/v0/api.js", void 0, { async: false });
  await t2();
  const a3 = window.turnstile;
  return new Promise((n2) => {
    a3 == null || a3.ready(() => {
      a3.render(".wl-captcha-container", { sitekey: e2, action: l, size: "compact", callback: n2 });
    });
  });
} });
var Xa = "WALINE_USER";
var Ya = useStorage(Xa, {});
var be2 = () => Ya;
var Ja = { key: 0, class: "wl-reaction" };
var Qa = ["textContent"];
var el = { class: "wl-reaction-list" };
var tl = ["onClick"];
var al = { class: "wl-reaction-img" };
var ll = ["src", "alt"];
var nl = ["textContent"];
var rl = ["textContent"];
var ol = defineComponent({ __name: "ArticleReaction", setup(e2) {
  const l = Ga(), t2 = inject(we2), a3 = ref(-1), n2 = ref([]), s2 = computed(() => t2.value.locale), h3 = computed(() => {
    const { reaction: m3 } = t2.value;
    return m3 != null && m3.length ? m3 : null;
  }), c2 = computed(() => {
    var m3;
    const { path: R3 } = t2.value;
    return ((m3 = h3.value) == null ? void 0 : m3.map((j3, E) => ({ icon: j3, desc: s2.value[`reaction${E}`], active: l.value[R3] === E }))) ?? null;
  });
  let f2;
  const v3 = async () => {
    const { serverURL: m3, lang: R3, path: j3 } = t2.value;
    if (!h3.value) return;
    const E = new AbortController();
    f2 = E.abort.bind(E);
    const [$3] = await p({ serverURL: m3, lang: R3, paths: [j3], type: h3.value.map((S2, i) => `reaction${i}`), signal: E.signal });
    n2.value = h3.value.map((S2, i) => $3[`reaction${i}`]);
  }, y2 = async (m3) => {
    if (a3.value !== -1) return;
    const { serverURL: R3, lang: j3, path: E } = t2.value, $3 = l.value[E];
    a3.value = m3, $3 !== void 0 && (await d({ serverURL: R3, lang: j3, path: E, type: `reaction${$3}`, action: "desc" }), n2.value[$3] = Math.max(n2.value[$3] - 1, 0)), $3 !== m3 && (await d({ serverURL: R3, lang: j3, path: E, type: `reaction${m3}` }), n2.value[m3] = (n2.value[m3] || 0) + 1), $3 === m3 ? delete l.value[E] : l.value[E] = m3, a3.value = -1;
  };
  return onMounted(() => {
    watchImmediate(() => [t2.value.serverURL, t2.value.path], () => v3());
  }), onUnmounted(() => {
    f2 == null || f2();
  }), (m3, R3) => c2.value ? (openBlock(), createElementBlock("div", Ja, [createBaseVNode("div", { class: "wl-reaction-title", textContent: toDisplayString(s2.value.reactionTitle) }, null, 8, Qa), createBaseVNode("ul", el, [(openBlock(true), createElementBlock(Fragment, null, renderList(c2.value, ({ active: j3, icon: E, desc: $3 }, S2) => (openBlock(), createElementBlock("li", { key: S2, class: normalizeClass(["wl-reaction-item", { active: j3 }]), onClick: (i) => y2(S2) }, [createBaseVNode("div", al, [createBaseVNode("img", { src: E, alt: $3 }, null, 8, ll), a3.value === S2 ? (openBlock(), createBlock(unref(ue2), { key: 0, class: "wl-reaction-loading" })) : (openBlock(), createElementBlock("div", { key: 1, class: "wl-reaction-votes", textContent: toDisplayString(n2.value[S2] || 0) }, null, 8, nl))]), createBaseVNode("div", { class: "wl-reaction-text", textContent: toDisplayString($3) }, null, 8, rl)], 10, tl))), 128))])])) : createCommentVNode("v-if", true);
} });
var il = ["data-index"];
var sl = ["src", "title", "onClick"];
var cl = defineComponent({ __name: "ImageWall", props: { items: { default: () => [] }, columnWidth: { default: 300 }, gap: { default: 0 } }, emits: ["insert"], setup(e2) {
  const l = e2;
  let t2 = null;
  const a3 = useTemplateRef("wall"), n2 = ref({}), s2 = ref([]), h3 = () => {
    const m3 = Math.floor((a3.value.getBoundingClientRect().width + l.gap) / (l.columnWidth + l.gap));
    return m3 > 0 ? m3 : 1;
  }, c2 = (m3) => new Array(m3).fill(null).map(() => []), f2 = async (m3) => {
    var R3;
    if (m3 >= l.items.length) return;
    await nextTick();
    const j3 = Array.from(((R3 = a3.value) == null ? void 0 : R3.children) ?? []).reduce((E, $3) => $3.getBoundingClientRect().height < E.getBoundingClientRect().height ? $3 : E);
    s2.value[Number(j3.dataset.index)].push(m3), await f2(m3 + 1);
  }, v3 = async (m3 = false) => {
    if (s2.value.length === h3() && !m3) return;
    s2.value = c2(h3());
    const R3 = window.scrollY;
    await f2(0), window.scrollTo({ top: R3 });
  }, y2 = (m3) => {
    n2.value[m3.target.src] = true;
  };
  return onMounted(() => {
    v3(true), t2 = new ResizeObserver(() => {
      v3();
    }), t2.observe(a3.value), watch(() => [l.items], () => {
      n2.value = {}, v3(true);
    }), watch(() => [l.columnWidth, l.gap], () => {
      v3();
    });
  }), onBeforeUnmount(() => {
    t2.unobserve(a3.value);
  }), (m3, R3) => (openBlock(), createElementBlock("div", { ref_key: "wall", ref: a3, class: "wl-gallery", style: normalizeStyle({ gap: `${m3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(s2.value, (j3, E) => (openBlock(), createElementBlock("div", { key: E, class: "wl-gallery-column", "data-index": E, style: normalizeStyle({ gap: `${m3.gap}px` }) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(j3, ($3) => (openBlock(), createElementBlock(Fragment, { key: $3 }, [n2.value[m3.items[$3].src] ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(ue2), { key: 0, size: 36, style: { margin: "20px auto" } })), createBaseVNode("img", { class: "wl-gallery-item", src: m3.items[$3].src, title: m3.items[$3].title, loading: "lazy", onLoad: y2, onClick: (S2) => m3.$emit("insert", `![](${m3.items[$3].src})`) }, null, 40, sl)], 64))), 128))], 12, il))), 128))], 4));
} });
var ul = { key: 0, class: "wl-login-info" };
var ml = { class: "wl-avatar" };
var vl = ["title"];
var dl = ["title"];
var pl = ["src"];
var gl = ["title", "textContent"];
var hl = { class: "wl-panel" };
var fl = ["for", "textContent"];
var wl = ["id", "onUpdate:modelValue", "name", "type"];
var yl = ["placeholder"];
var bl = { class: "wl-preview" };
var kl = ["innerHTML"];
var Cl = { class: "wl-footer" };
var $l = { class: "wl-actions" };
var Ll = { href: "https://guides.github.com/features/mastering-markdown/", title: "Markdown Guide", "aria-label": "Markdown is supported", class: "wl-action", target: "_blank", rel: "noopener noreferrer" };
var El = ["title"];
var Il = ["title"];
var Al = ["title", "aria-label"];
var Ml = ["title"];
var xl = { class: "wl-info" };
var Rl = { class: "wl-text-number" };
var Sl = { key: 0 };
var jl = ["textContent"];
var Ul = ["textContent"];
var zl = ["disabled"];
var Vl = ["placeholder"];
var _l = { key: 1, class: "wl-loading" };
var Hl = { key: 0, class: "wl-tab-wrapper" };
var Tl = ["title", "onClick"];
var Fl = ["src", "alt"];
var Nl = { key: 0, class: "wl-tabs" };
var Wl = ["onClick"];
var Bl = ["src", "alt", "title"];
var Dl = ["title"];
var gt = defineComponent({ __name: "CommentBox", props: { edit: {}, rootId: {}, replyId: {}, replyUser: {} }, emits: ["log", "cancelEdit", "cancelReply", "submit"], setup(e2, { emit: l }) {
  const t2 = e2, a3 = l, n2 = inject(we2), s2 = Ba(), h3 = Wa(), c2 = be2(), f2 = ref({}), v3 = useTemplateRef("textarea"), y2 = useTemplateRef("image-uploader"), m3 = useTemplateRef("emoji-button"), R3 = useTemplateRef("emoji-popup"), j3 = useTemplateRef("gif-button"), E = useTemplateRef("gif-popup"), $3 = useTemplateRef("gif-search"), S2 = ref({ tabs: [], map: {} }), i = ref(0), g = ref(false), K2 = ref(false), X2 = ref(false), A2 = ref(""), V2 = ref(0), T2 = reactive({ loading: true, list: [] }), le2 = ref(0), Q2 = ref(false), me = ref(""), w3 = ref(false), U3 = ref(false), b2 = computed(() => n2.value.locale), F2 = computed(() => !!c2.value.token), q2 = computed(() => n2.value.imageUploader !== null), O2 = (d2) => {
    const r2 = v3.value, C3 = r2.selectionStart, H2 = r2.selectionEnd || 0, k2 = r2.scrollTop;
    s2.value = r2.value.substring(0, C3) + d2 + r2.value.substring(H2, r2.value.length), r2.focus(), r2.selectionStart = C3 + d2.length, r2.selectionEnd = C3 + d2.length, r2.scrollTop = k2;
  }, oe2 = ({ key: d2, ctrlKey: r2, metaKey: C3 }) => {
    w3.value || (r2 || C3) && d2 === "Enter" && Se2();
  }, ve2 = async (d2) => {
    const r2 = `![${n2.value.locale.uploading} ${d2.name}]()`;
    O2(r2), w3.value = true;
    try {
      const C3 = await n2.value.imageUploader(d2);
      s2.value = s2.value.replace(r2, `\r
![${d2.name}](${C3})`);
    } catch (C3) {
      alert(C3.message), s2.value = s2.value.replace(r2, "");
    } finally {
      w3.value = false;
    }
  }, ke2 = (d2) => {
    var r2;
    if ((r2 = d2.dataTransfer) != null && r2.items) {
      const C3 = ct(d2.dataTransfer.items);
      C3 && q2.value && (ve2(C3), d2.preventDefault());
    }
  }, yt = (d2) => {
    if (d2.clipboardData) {
      const r2 = ct(d2.clipboardData.items);
      r2 && q2.value && ve2(r2);
    }
  }, bt = () => {
    const d2 = y2.value;
    d2.files && q2.value && ve2(d2.files[0]).then(() => {
      d2.value = "";
    });
  }, Se2 = async () => {
    var d2;
    const { serverURL: r2, lang: C3, login: H2, wordLimit: k2, requiredMeta: D2, recaptchaV3Key: N2, turnstileKey: Y } = n2.value, _2 = { comment: me.value, nick: h3.value.nick, mail: h3.value.mail, link: h3.value.link, url: n2.value.path, ua: await Ra() };
    if (!t2.edit) if (c2.value.token) _2.nick = c2.value.display_name, _2.mail = c2.value.email, _2.link = c2.value.url;
    else {
      if (H2 === "force") return;
      if (D2.includes("nick") && !_2.nick) {
        f2.value.nick.focus(), alert(b2.value.nickError);
        return;
      }
      if (D2.includes("mail") && !_2.mail || _2.mail && !ha(_2.mail)) {
        f2.value.mail.focus(), alert(b2.value.mailError);
        return;
      }
      _2.nick || (_2.nick = b2.value.anonymous);
    }
    if (!_2.comment) {
      v3.value.focus();
      return;
    }
    if (!Q2.value) {
      alert(b2.value.wordHint.replace("$0", k2[0].toString()).replace("$1", k2[1].toString()).replace("$2", V2.value.toString()));
      return;
    }
    _2.comment = ut(_2.comment, S2.value.map), t2.replyId && t2.rootId && (_2.pid = t2.replyId, _2.rid = t2.rootId, _2.at = t2.replyUser), w3.value = true;
    try {
      N2 && (_2.recaptchaV3 = await Ka(N2).execute("social")), Y && (_2.turnstile = await Za(Y).execute("social"));
      const de2 = { serverURL: r2, lang: C3, token: c2.value.token, comment: _2 }, Ce2 = await (t2.edit ? U({ objectId: t2.edit.objectId, ...de2 }) : u(de2));
      if (w3.value = false, Ce2.errmsg) {
        alert(Ce2.errmsg);
        return;
      }
      a3("submit", Ce2.data), s2.value = "", A2.value = "", await nextTick(), t2.replyId && a3("cancelReply"), (d2 = t2.edit) != null && d2.objectId && a3("cancelEdit");
    } catch (de2) {
      w3.value = false, alert(de2.message);
    }
  }, kt = (d2) => {
    d2.preventDefault();
    const { lang: r2, serverURL: C3 } = n2.value;
    R({ serverURL: C3, lang: r2 }).then((H2) => {
      c2.value = H2, (H2.remember ? localStorage : sessionStorage).setItem("WALINE_USER", JSON.stringify(H2)), a3("log");
    });
  }, Ct = () => {
    c2.value = {}, localStorage.setItem("WALINE_USER", "null"), sessionStorage.setItem("WALINE_USER", "null"), a3("log");
  }, je2 = (d2) => {
    d2.preventDefault();
    const { lang: r2, serverURL: C3 } = n2.value, H2 = 800, k2 = 800, D2 = (window.innerWidth - H2) / 2, N2 = (window.innerHeight - k2) / 2, Y = new URLSearchParams({ lng: r2, token: c2.value.token }), _2 = window.open(`${C3}/ui/profile?${Y.toString()}`, "_blank", `width=${H2},height=${k2},left=${D2},top=${N2},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);
    _2 == null || _2.postMessage({ type: "TOKEN", data: c2.value.token }, "*");
  }, $t = (d2) => {
    var r2, C3, H2, k2;
    !((r2 = m3.value) != null && r2.contains(d2.target)) && !((C3 = R3.value) != null && C3.contains(d2.target)) && (g.value = false), !((H2 = j3.value) != null && H2.contains(d2.target)) && !((k2 = E.value) != null && k2.contains(d2.target)) && (K2.value = false);
  }, Ue2 = async (d2) => {
    var r2;
    const { scrollTop: C3, clientHeight: H2, scrollHeight: k2 } = d2.target, D2 = (H2 + C3) / k2, N2 = n2.value.search, Y = ((r2 = $3.value) == null ? void 0 : r2.value) ?? "";
    D2 < 0.9 || T2.loading || U3.value || (T2.loading = true, (N2.more && T2.list.length ? await N2.more(Y, T2.list.length) : await N2.search(Y)).length ? T2.list = [...T2.list, ...N2.more && T2.list.length ? await N2.more(Y, T2.list.length) : await N2.search(Y)] : U3.value = true, T2.loading = false, setTimeout(() => {
      d2.target.scrollTop = C3;
    }, 50));
  }, ze2 = useDebounceFn((d2) => {
    T2.list = [], U3.value = false, Ue2(d2);
  }, 300);
  return useEventListener("click", $t), useEventListener("message", ({ data: d2 }) => {
    !d2 || d2.type !== "profile" || (c2.value = { ...c2.value, ...d2.data }, [localStorage, sessionStorage].filter((r2) => r2.getItem("WALINE_USER")).forEach((r2) => {
      r2.setItem("WALINE_USER", JSON.stringify(c2));
    }));
  }), watchImmediate([n2, V2], ([d2, r2]) => {
    const { wordLimit: C3 } = d2;
    C3 ? r2 < C3[0] && C3[0] !== 0 ? (le2.value = C3[0], Q2.value = false) : r2 > C3[1] ? (le2.value = C3[1], Q2.value = false) : (le2.value = C3[1], Q2.value = true) : (le2.value = 0, Q2.value = true);
  }), watch(K2, async (d2) => {
    var r2;
    if (!d2) return;
    const C3 = n2.value.search;
    $3.value && ($3.value.value = ""), T2.loading = true, T2.list = await (((r2 = C3.default) == null ? void 0 : r2.call(C3)) ?? C3.search("")), T2.loading = false;
  }), onMounted(() => {
    var d2;
    (d2 = t2.edit) != null && d2.objectId && (s2.value = t2.edit.orig), watchImmediate(() => s2.value, (r2) => {
      const { highlighter: C3, texRenderer: H2 } = n2.value;
      me.value = r2, A2.value = Ia(r2, { emojiMap: S2.value.map, highlighter: C3, texRenderer: H2 }), V2.value = xa(r2), r2 ? autosize_esm_default(v3.value) : autosize_esm_default.destroy(v3.value);
    }), watchImmediate(() => n2.value.emoji, async (r2) => {
      S2.value = await ba(r2);
    });
  }), (d2, r2) => {
    var C3, H2;
    return openBlock(), createElementBlock("div", { key: unref(c2).token, class: "wl-comment" }, [unref(n2).login !== "disable" && F2.value && !((C3 = d2.edit) != null && C3.objectId) ? (openBlock(), createElementBlock("div", ul, [createBaseVNode("div", ml, [createBaseVNode("button", { type: "submit", class: "wl-logout-btn", title: b2.value.logout, onClick: Ct }, [createVNode(unref(vt), { size: 14 })], 8, vl), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: b2.value.profile, onClick: je2 }, [createBaseVNode("img", { src: unref(c2).avatar, alt: "avatar" }, null, 8, pl)], 8, dl)]), createBaseVNode("a", { href: "#", class: "wl-login-nick", "aria-label": "Profile", title: b2.value.profile, onClick: je2, textContent: toDisplayString(unref(c2).display_name) }, null, 8, gl)])) : createCommentVNode("v-if", true), createBaseVNode("div", hl, [unref(n2).login !== "force" && unref(n2).meta.length && !F2.value ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(["wl-header", `item${unref(n2).meta.length}`]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(n2).meta, (k2) => (openBlock(), createElementBlock("div", { key: k2, class: "wl-header-item" }, [createBaseVNode("label", { for: `wl-${k2}`, textContent: toDisplayString(b2.value[k2] + (unref(n2).requiredMeta.includes(k2) || !unref(n2).requiredMeta.length ? "" : `(${b2.value.optional})`)) }, null, 8, fl), withDirectives(createBaseVNode("input", { id: `wl-${k2}`, ref_for: true, ref: (D2) => {
      D2 && (f2.value[k2] = D2);
    }, "onUpdate:modelValue": (D2) => unref(h3)[k2] = D2, class: normalizeClass(["wl-input", `wl-${k2}`]), name: k2, type: k2 === "mail" ? "email" : "text" }, null, 10, wl), [[vModelDynamic, unref(h3)[k2]]])]))), 128))], 2)) : createCommentVNode("v-if", true), withDirectives(createBaseVNode("textarea", { id: "wl-edit", ref: "textarea", "onUpdate:modelValue": r2[0] || (r2[0] = (k2) => isRef(s2) ? s2.value = k2 : null), class: "wl-editor", placeholder: d2.replyUser ? `@${d2.replyUser}` : b2.value.placeholder, onKeydown: oe2, onDrop: ke2, onPaste: yt }, null, 40, yl), [[vModelText, unref(s2)]]), withDirectives(createBaseVNode("div", bl, [r2[7] || (r2[7] = createBaseVNode("hr", null, null, -1)), createBaseVNode("h4", null, toDisplayString(b2.value.preview) + ":", 1), createBaseVNode("div", { class: "wl-content", innerHTML: A2.value }, null, 8, kl)], 512), [[vShow, X2.value]]), createBaseVNode("div", Cl, [createBaseVNode("div", $l, [createBaseVNode("a", Ll, [createVNode(unref(_a2))]), withDirectives(createBaseVNode("button", { ref: "emoji-button", type: "button", class: normalizeClass(["wl-action", { active: g.value }]), title: b2.value.emoji, onClick: r2[1] || (r2[1] = (k2) => g.value = !g.value) }, [createVNode(unref(ja))], 10, El), [[vShow, S2.value.tabs.length]]), unref(n2).search ? (openBlock(), createElementBlock("button", { key: 0, ref: "gif-button", type: "button", class: normalizeClass(["wl-action", { active: K2.value }]), title: b2.value.gif, onClick: r2[2] || (r2[2] = (k2) => K2.value = !K2.value) }, [createVNode(unref(Na))], 10, Il)) : createCommentVNode("v-if", true), createBaseVNode("input", { id: "wl-image-upload", ref: "image-uploader", class: "upload", "aria-hidden": "true", type: "file", accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif", onChange: bt }, null, 544), q2.value ? (openBlock(), createElementBlock("label", { key: 1, for: "wl-image-upload", class: "wl-action", title: b2.value.uploadImage, "aria-label": b2.value.uploadImage }, [createVNode(unref(Ua))], 8, Al)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-action", { active: X2.value }]), title: b2.value.preview, onClick: r2[3] || (r2[3] = (k2) => X2.value = !X2.value) }, [createVNode(unref(Va))], 10, Ml)]), createBaseVNode("div", xl, [r2[9] || (r2[9] = createBaseVNode("div", { class: "wl-captcha-container" }, null, -1)), createBaseVNode("div", Rl, [createTextVNode(toDisplayString(V2.value) + " ", 1), unref(n2).wordLimit ? (openBlock(), createElementBlock("span", Sl, [r2[8] || (r2[8] = createTextVNode("  /  ")), createBaseVNode("span", { class: normalizeClass({ illegal: !Q2.value }), textContent: toDisplayString(le2.value) }, null, 10, jl)])) : createCommentVNode("v-if", true), createTextVNode("  " + toDisplayString(b2.value.word), 1)]), unref(n2).login !== "disable" && !F2.value ? (openBlock(), createElementBlock("button", { key: 0, type: "button", class: "wl-btn", onClick: kt, textContent: toDisplayString(b2.value.login) }, null, 8, Ul)) : createCommentVNode("v-if", true), unref(n2).login !== "force" || F2.value ? (openBlock(), createElementBlock("button", { key: 1, type: "submit", class: "primary wl-btn", title: "Cmd|Ctrl + Enter", disabled: w3.value, onClick: Se2 }, [w3.value ? (openBlock(), createBlock(unref(ue2), { key: 0, size: 16 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(b2.value.submit), 1)], 64))], 8, zl)) : createCommentVNode("v-if", true)]), createBaseVNode("div", { ref: "gif-popup", class: normalizeClass(["wl-gif-popup", { display: K2.value }]) }, [createBaseVNode("input", { ref: "gif-search", type: "text", placeholder: b2.value.gifSearchPlaceholder, onInput: r2[4] || (r2[4] = (...k2) => unref(ze2) && unref(ze2)(...k2)) }, null, 40, Vl), T2.list.length ? (openBlock(), createBlock(cl, { key: 0, items: T2.list, "column-width": 200, gap: 6, onInsert: r2[5] || (r2[5] = (k2) => O2(k2)), onScroll: Ue2 }, null, 8, ["items"])) : createCommentVNode("v-if", true), T2.loading ? (openBlock(), createElementBlock("div", _l, [createVNode(unref(ue2), { size: 30 })])) : createCommentVNode("v-if", true)], 2), createBaseVNode("div", { ref: "emoji-popup", class: normalizeClass(["wl-emoji-popup", { display: g.value }]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(S2.value.tabs, (k2, D2) => (openBlock(), createElementBlock(Fragment, { key: k2.name }, [D2 === i.value ? (openBlock(), createElementBlock("div", Hl, [(openBlock(true), createElementBlock(Fragment, null, renderList(k2.items, (N2) => (openBlock(), createElementBlock("button", { key: N2, type: "button", title: N2, onClick: (Y) => O2(`:${N2}:`) }, [g.value ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-emoji", src: S2.value.map[N2], alt: N2, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Fl)) : createCommentVNode("v-if", true)], 8, Tl))), 128))])) : createCommentVNode("v-if", true)], 64))), 128)), S2.value.tabs.length > 1 ? (openBlock(), createElementBlock("div", Nl, [(openBlock(true), createElementBlock(Fragment, null, renderList(S2.value.tabs, (k2, D2) => (openBlock(), createElementBlock("button", { key: k2.name, type: "button", class: normalizeClass(["wl-tab", { active: i.value === D2 }]), onClick: (N2) => i.value = D2 }, [createBaseVNode("img", { class: "wl-emoji", src: k2.icon, alt: k2.name, title: k2.name, loading: "lazy", referrerPolicy: "no-referrer" }, null, 8, Bl)], 10, Wl))), 128))])) : createCommentVNode("v-if", true)], 2)])]), d2.replyId || (H2 = d2.edit) != null && H2.objectId ? (openBlock(), createElementBlock("button", { key: 1, type: "button", class: "wl-close", title: b2.value.cancelReply, onClick: r2[6] || (r2[6] = (k2) => d2.replyId ? a3("cancelReply") : a3("cancelEdit")) }, [createVNode(unref(vt), { size: 24 })], 8, Dl)) : createCommentVNode("v-if", true)]);
  };
} });
var Pl = ["id"];
var ql = { class: "wl-user", "aria-hidden": "true" };
var Ol = ["src"];
var Gl = { class: "wl-card" };
var Kl = { class: "wl-head" };
var Zl = ["href"];
var Xl = { key: 1, class: "wl-nick" };
var Yl = ["textContent"];
var Jl = ["textContent"];
var Ql = ["textContent"];
var en = ["textContent"];
var tn = ["textContent"];
var an = { class: "wl-comment-actions" };
var ln = ["title"];
var nn = ["title"];
var rn = { class: "wl-meta", "aria-hidden": "true" };
var on = ["data-value", "textContent"];
var sn = { key: 0, class: "wl-content" };
var cn = { key: 0 };
var un = ["href"];
var mn = ["innerHTML"];
var vn = { key: 1, class: "wl-admin-actions" };
var dn = { class: "wl-comment-status" };
var pn = ["disabled", "onClick", "textContent"];
var gn = { key: 3, class: "wl-quote" };
var hn = defineComponent({ __name: "CommentCard", props: { comment: {}, edit: {}, rootId: {}, reply: {} }, emits: ["log", "submit", "delete", "like", "sticky", "edit", "reply", "status"], setup(e2, { emit: l }) {
  const t2 = e2, a3 = l, n2 = ["approved", "waiting", "spam"], s2 = inject(we2), h3 = dt(), c2 = useNow(), f2 = be2(), v3 = computed(() => s2.value.locale), y2 = computed(() => {
    const { link: i } = t2.comment;
    return i ? rt(i) ? i : `https://${i}` : "";
  }), m3 = computed(() => h3.value.includes(t2.comment.objectId)), R3 = computed(() => pa(new Date(t2.comment.time), c2.value, v3.value)), j3 = computed(() => f2.value.type === "administrator"), E = computed(() => t2.comment.user_id && f2.value.objectId === t2.comment.user_id), $3 = computed(() => {
    var i;
    return t2.comment.objectId === ((i = t2.reply) == null ? void 0 : i.objectId);
  }), S2 = computed(() => {
    var i;
    return t2.comment.objectId === ((i = t2.edit) == null ? void 0 : i.objectId);
  });
  return (i, g) => {
    var K2;
    const X2 = resolveComponent("CommentCard", true);
    return openBlock(), createElementBlock("div", { id: i.comment.objectId.toString(), class: "wl-card-item" }, [createBaseVNode("div", ql, [i.comment.avatar ? (openBlock(), createElementBlock("img", { key: 0, class: "wl-user-avatar", src: i.comment.avatar, alt: "" }, null, 8, Ol)) : createCommentVNode("v-if", true), i.comment.type ? (openBlock(), createBlock(unref(Fa), { key: 1 })) : createCommentVNode("v-if", true)]), createBaseVNode("div", Gl, [createBaseVNode("div", Kl, [y2.value ? (openBlock(), createElementBlock("a", { key: 0, class: "wl-nick", href: y2.value, target: "_blank", rel: "nofollow noopener noreferrer" }, toDisplayString(i.comment.nick), 9, Zl)) : (openBlock(), createElementBlock("span", Xl, toDisplayString(i.comment.nick), 1)), i.comment.type === "administrator" ? (openBlock(), createElementBlock("span", { key: 2, class: "wl-badge", textContent: toDisplayString(v3.value.admin) }, null, 8, Yl)) : createCommentVNode("v-if", true), i.comment.label ? (openBlock(), createElementBlock("span", { key: 3, class: "wl-badge", textContent: toDisplayString(i.comment.label) }, null, 8, Jl)) : createCommentVNode("v-if", true), i.comment.sticky ? (openBlock(), createElementBlock("span", { key: 4, class: "wl-badge", textContent: toDisplayString(v3.value.sticky) }, null, 8, Ql)) : createCommentVNode("v-if", true), typeof i.comment.level == "number" ? (openBlock(), createElementBlock("span", { key: 5, class: normalizeClass(`wl-badge level${i.comment.level}`), textContent: toDisplayString(v3.value[`level${i.comment.level}`] || `Level ${i.comment.level}`) }, null, 10, en)) : createCommentVNode("v-if", true), createBaseVNode("span", { class: "wl-time", textContent: toDisplayString(R3.value) }, null, 8, tn), createBaseVNode("div", an, [j3.value || E.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("button", { type: "button", class: "wl-edit", onClick: g[0] || (g[0] = (A2) => a3("edit", i.comment)) }, [createVNode(unref(Ta))]), createBaseVNode("button", { type: "button", class: "wl-delete", onClick: g[1] || (g[1] = (A2) => a3("delete", i.comment)) }, [createVNode(unref(Sa))])], 64)) : createCommentVNode("v-if", true), createBaseVNode("button", { type: "button", class: "wl-like", title: m3.value ? v3.value.cancelLike : v3.value.like, onClick: g[2] || (g[2] = (A2) => a3("like", i.comment)) }, [createVNode(unref(za), { active: m3.value }, null, 8, ["active"]), createTextVNode(" " + toDisplayString("like" in i.comment ? i.comment.like : ""), 1)], 8, ln), createBaseVNode("button", { type: "button", class: normalizeClass(["wl-reply", { active: $3.value }]), title: $3.value ? v3.value.cancelReply : v3.value.reply, onClick: g[3] || (g[3] = (A2) => a3("reply", $3.value ? null : i.comment)) }, [createVNode(unref(Ha))], 10, nn)])]), createBaseVNode("div", rn, [(openBlock(), createElementBlock(Fragment, null, renderList(["addr", "browser", "os"], (A2) => (openBlock(), createElementBlock(Fragment, null, [i.comment[A2] ? (openBlock(), createElementBlock("span", { key: A2, class: normalizeClass(`wl-${A2}`), "data-value": i.comment[A2], textContent: toDisplayString(i.comment[A2]) }, null, 10, on)) : createCommentVNode("v-if", true)], 64))), 64))]), S2.value ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", sn, ["reply_user" in i.comment && i.comment.reply_user ? (openBlock(), createElementBlock("p", cn, [createBaseVNode("a", { href: "#" + i.comment.pid }, "@" + toDisplayString(i.comment.reply_user.nick), 9, un), g[17] || (g[17] = createBaseVNode("span", null, ": ", -1))])) : createCommentVNode("v-if", true), createBaseVNode("div", { innerHTML: i.comment.comment }, null, 8, mn)])), j3.value && !S2.value ? (openBlock(), createElementBlock("div", vn, [createBaseVNode("span", dn, [(openBlock(), createElementBlock(Fragment, null, renderList(n2, (A2) => createBaseVNode("button", { key: A2, type: "submit", class: normalizeClass(`wl-btn wl-${A2}`), disabled: i.comment.status === A2, onClick: (V2) => a3("status", { status: A2, comment: i.comment }), textContent: toDisplayString(v3.value[A2]) }, null, 10, pn)), 64))]), j3.value && !("rid" in i.comment) ? (openBlock(), createElementBlock("button", { key: 0, type: "submit", class: "wl-btn wl-sticky", onClick: g[4] || (g[4] = (A2) => a3("sticky", i.comment)) }, toDisplayString(i.comment.sticky ? v3.value.unsticky : v3.value.sticky), 1)) : createCommentVNode("v-if", true)])) : createCommentVNode("v-if", true), $3.value || S2.value ? (openBlock(), createElementBlock("div", { key: 2, class: normalizeClass({ "wl-reply-wrapper": $3.value, "wl-edit-wrapper": S2.value }) }, [createVNode(gt, { edit: i.edit, "reply-id": (K2 = i.reply) == null ? void 0 : K2.objectId, "reply-user": i.comment.nick, "root-id": i.rootId, onLog: g[5] || (g[5] = (A2) => a3("log")), onCancelReply: g[6] || (g[6] = (A2) => a3("reply", null)), onCancelEdit: g[7] || (g[7] = (A2) => a3("edit", null)), onSubmit: g[8] || (g[8] = (A2) => a3("submit", A2)) }, null, 8, ["edit", "reply-id", "reply-user", "root-id"])], 2)) : createCommentVNode("v-if", true), "children" in i.comment ? (openBlock(), createElementBlock("div", gn, [(openBlock(true), createElementBlock(Fragment, null, renderList(i.comment.children, (A2) => (openBlock(), createBlock(X2, { key: A2.objectId, comment: A2, reply: i.reply, edit: i.edit, "root-id": i.rootId, onLog: g[9] || (g[9] = (V2) => a3("log")), onDelete: g[10] || (g[10] = (V2) => a3("delete", V2)), onEdit: g[11] || (g[11] = (V2) => a3("edit", V2)), onLike: g[12] || (g[12] = (V2) => a3("like", V2)), onReply: g[13] || (g[13] = (V2) => a3("reply", V2)), onStatus: g[14] || (g[14] = (V2) => a3("status", V2)), onSticky: g[15] || (g[15] = (V2) => a3("sticky", V2)), onSubmit: g[16] || (g[16] = (V2) => a3("submit", V2)) }, null, 8, ["comment", "reply", "edit", "root-id"]))), 128))])) : createCommentVNode("v-if", true)])], 8, Pl);
  };
} });
var ht = "3.6.0";
var fn = { "data-waline": "" };
var wn = { class: "wl-meta-head" };
var yn = { class: "wl-count" };
var bn = ["textContent"];
var kn = { class: "wl-sort" };
var Cn = ["onClick"];
var $n = { class: "wl-cards" };
var Ln = { key: 1, class: "wl-operation" };
var En = ["textContent"];
var In = { key: 2, class: "wl-loading" };
var An = ["textContent"];
var Mn = { key: 4, class: "wl-operation" };
var xn = ["textContent"];
var Rn = { key: 5, class: "wl-power" };
var Sn = defineComponent({ __name: "WalineComment", props: { serverURL: {}, path: {}, meta: {}, requiredMeta: {}, wordLimit: {}, pageSize: {}, lang: {}, locale: {}, commentSorting: {}, dark: { type: [String, Boolean] }, login: {}, noCopyright: { type: Boolean }, recaptchaV3Key: {}, turnstileKey: {}, reaction: { type: [Array, Boolean] }, emoji: {}, search: {}, highlighter: { type: Function }, imageUploader: { type: Function }, texRenderer: { type: Function } }, setup(e2) {
  const l = e2, t2 = be2(), a3 = dt(), n2 = ref("loading"), s2 = ref(0), h3 = ref(1), c2 = ref(0), f2 = computed(() => ma(l)), v3 = ref(f2.value.commentSorting), y2 = ref([]), m3 = ref(null), R3 = ref(null), j3 = computed(() => va(f2.value.dark)), E = computed(() => f2.value.locale);
  useStyleTag(j3, { id: "waline-darkmode" });
  let $3 = null;
  const S2 = (w3) => {
    const { serverURL: U3, path: b2, pageSize: F2 } = f2.value, q2 = new AbortController();
    n2.value = "loading", $3 == null || $3(), $({ serverURL: U3, lang: f2.value.lang, path: b2, pageSize: F2, sortBy: at[v3.value], page: w3, signal: q2.signal, token: t2.value.token }).then((O2) => {
      n2.value = "success", s2.value = O2.count, y2.value.push(...O2.data), h3.value = w3, c2.value = O2.totalPages;
    }).catch((O2) => {
      O2.name !== "AbortError" && (console.error(O2.message), n2.value = "error");
    }), $3 = q2.abort.bind(q2);
  }, i = () => {
    S2(h3.value + 1);
  }, g = () => {
    s2.value = 0, y2.value = [], S2(1);
  }, K2 = (w3) => {
    v3.value !== w3 && (v3.value = w3, g());
  }, X2 = (w3) => {
    m3.value = w3;
  }, A2 = (w3) => {
    R3.value = w3;
  }, V2 = (w3) => {
    if (R3.value) R3.value.comment = w3.comment, R3.value.orig = w3.orig;
    else if ("rid" in w3) {
      const U3 = y2.value.find(({ objectId: b2 }) => b2 === w3.rid);
      if (!U3) return;
      Array.isArray(U3.children) || (U3.children = []), U3.children.push(w3);
    } else y2.value.unshift(w3), s2.value += 1;
  }, T2 = async ({ comment: w3, status: U3 }) => {
    if (w3.status === U3) return;
    const { serverURL: b2, lang: F2 } = f2.value;
    await U({ serverURL: b2, lang: F2, token: t2.value.token, objectId: w3.objectId, comment: { status: U3 } }), w3.status = U3;
  }, le2 = async (w3) => {
    if ("rid" in w3) return;
    const { serverURL: U3, lang: b2 } = f2.value;
    await U({ serverURL: U3, lang: b2, token: t2.value.token, objectId: w3.objectId, comment: { sticky: w3.sticky ? 0 : 1 } }), w3.sticky = !w3.sticky;
  }, Q2 = async ({ objectId: w3 }) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    const { serverURL: U3, lang: b2 } = f2.value;
    await y({ serverURL: U3, lang: b2, token: t2.value.token, objectId: w3 }), y2.value.some((F2, q2) => F2.objectId === w3 ? (y2.value = y2.value.filter((O2, oe2) => oe2 !== q2), true) : F2.children.some((O2, oe2) => O2.objectId === w3 ? (y2.value[q2].children = F2.children.filter((ve2, ke2) => ke2 !== oe2), true) : false));
  }, me = async (w3) => {
    const { serverURL: U3, lang: b2 } = f2.value, { objectId: F2 } = w3, q2 = a3.value.includes(F2);
    await U({ serverURL: U3, lang: b2, objectId: F2, token: t2.value.token, comment: { like: !q2 } }), q2 ? a3.value = a3.value.filter((O2) => O2 !== F2) : (a3.value = [...a3.value, F2], a3.value.length > 50 && (a3.value = a3.value.slice(-50))), w3.like = Math.max(0, (w3.like || 0) + (q2 ? -1 : 1));
  };
  return provide(we2, f2), onMounted(() => {
    watchImmediate(() => [l.serverURL, l.path], () => {
      g();
    });
  }), onUnmounted(() => {
    $3 == null || $3();
  }), (w3, U3) => (openBlock(), createElementBlock("div", fn, [createVNode(ol), !m3.value && !R3.value ? (openBlock(), createBlock(gt, { key: 0, onLog: g, onSubmit: V2 })) : createCommentVNode("v-if", true), createBaseVNode("div", wn, [createBaseVNode("div", yn, [s2.value ? (openBlock(), createElementBlock("span", { key: 0, class: "wl-num", textContent: toDisplayString(s2.value) }, null, 8, bn)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(E.value.comment), 1)]), createBaseVNode("ul", kn, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(ca), (b2) => (openBlock(), createElementBlock("li", { key: b2, class: normalizeClass([b2 === v3.value ? "active" : ""]), onClick: (F2) => K2(b2) }, toDisplayString(E.value[b2]), 11, Cn))), 128))])]), createBaseVNode("div", $n, [(openBlock(true), createElementBlock(Fragment, null, renderList(y2.value, (b2) => (openBlock(), createBlock(hn, { key: b2.objectId, "root-id": b2.objectId, comment: b2, reply: m3.value, edit: R3.value, onLog: g, onReply: X2, onEdit: A2, onSubmit: V2, onStatus: T2, onDelete: Q2, onSticky: le2, onLike: me }, null, 8, ["root-id", "comment", "reply", "edit"]))), 128))]), n2.value === "error" ? (openBlock(), createElementBlock("div", Ln, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: g, textContent: toDisplayString(E.value.refresh) }, null, 8, En)])) : n2.value === "loading" ? (openBlock(), createElementBlock("div", In, [createVNode(unref(ue2), { size: 30 })])) : y2.value.length ? h3.value < c2.value ? (openBlock(), createElementBlock("div", Mn, [createBaseVNode("button", { type: "button", class: "wl-btn", onClick: i, textContent: toDisplayString(E.value.more) }, null, 8, xn)])) : createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", { key: 3, class: "wl-empty", textContent: toDisplayString(E.value.sofa) }, null, 8, An)), f2.value.noCopyright ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("div", Rn, [U3[0] || (U3[0] = createTextVNode(" Powered by ")), U3[1] || (U3[1] = createBaseVNode("a", { href: "https://github.com/walinejs/waline", target: "_blank", rel: "noopener noreferrer" }, " Waline ", -1)), createTextVNode(" v" + toDisplayString(unref(ht)), 1)]))]));
} });
var ft = (e2, l) => {
  l.forEach((t2, a3) => {
    const n2 = e2[a3].time;
    typeof n2 == "number" && (t2.innerText = n2.toString());
  });
};
var wt = ({ serverURL: e2, path: l = window.location.pathname, selector: t2 = ".waline-pageview-count", update: a3 = true, lang: n2 = navigator.language }) => {
  const s2 = new AbortController(), h3 = Array.from(document.querySelectorAll(t2)), c2 = (v3) => {
    const y2 = Re2(v3);
    return y2 !== null && l !== y2;
  }, f2 = (v3) => j({ serverURL: ye2(e2), paths: v3.map((y2) => Re2(y2) ?? l), lang: n2, signal: s2.signal }).then((y2) => ft(y2, v3)).catch(st);
  if (a3) {
    const v3 = h3.filter((m3) => !c2(m3)), y2 = h3.filter(c2);
    v({ serverURL: ye2(e2), path: l, lang: n2 }).then((m3) => ft(m3, v3)), y2.length && f2(y2);
  } else f2(h3);
  return s2.abort.bind(s2);
};
var jn = ({ el: e2 = "#waline", path: l = window.location.pathname, comment: t2 = false, pageview: a3 = false, ...n2 }) => {
  const s2 = e2 ? xe2(e2) : null;
  if (e2 && !s2) throw new Error("Option 'el' do not match any domElement!");
  if (!n2.serverURL) throw new Error("Option 'serverURL' is missing!");
  const h3 = reactive({ ...n2 }), c2 = reactive({ comment: t2, pageview: a3, path: l }), f2 = () => {
    c2.comment && mt({ serverURL: h3.serverURL, path: c2.path, ...re2(c2.comment) ? { selector: c2.comment } : {} });
  }, v3 = () => {
    c2.pageview && wt({ serverURL: h3.serverURL, path: c2.path, ...re2(c2.pageview) ? { selector: c2.pageview } : {} });
  };
  let y2 = null;
  s2 && (y2 = createApp(() => h(Sn, { path: c2.path, ...h3 })), y2.mount(s2));
  const m3 = watchEffect(f2), R3 = watchEffect(v3);
  return { el: s2, update: ({ comment: j3, pageview: E, path: $3 = window.location.pathname, ...S2 } = {}) => {
    Object.entries(S2).forEach(([i, g]) => {
      h3[i] = g;
    }), c2.path = $3, j3 !== void 0 && (c2.comment = j3), E !== void 0 && (c2.pageview = E);
  }, destroy: () => {
    y2 == null || y2.unmount(), m3(), R3();
  } };
};

// node_modules/vitepress-theme-website/dist/waline/components/Waline.mjs
import "/Library/MySpace/MyProject/Doc/vite-coding-doc/node_modules/@waline/client/dist/waline.css";
var WalineComponent = defineComponent({
  name: "WalineComment",
  props: {
    walineOptions: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const walineRef = ref();
    onMounted(() => {
      jn({
        el: "#waline",
        serverURL: props.walineOptions.serverURL,
        login: props.walineOptions.login || "force"
      });
    });
    return () => h("div", { id: "waline", ref: (el2) => walineRef.value = el2 });
  }
});
WalineComponent.newInstance = (props) => {
  const { selector = ".VPDoc .content-container" } = props.walineOptions;
  const container = document.createElement("div");
  container.classList.add("waline-wrap");
  container.style.paddingTop = "48px";
  const parent = document.querySelector(selector);
  if (!parent)
    return;
  parent.appendChild(container);
  const app = createApp({
    render() {
      return h(WalineComponent, {
        ...props
      });
    }
  });
  app.mount(container);
  return {
    destroy() {
      app.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  };
};
var Waline_default = WalineComponent;

// node_modules/vitepress-theme-website/dist/waline/index.mjs
var useWaline = (walineOptions) => {
  let waline;
  const route = useRoute();
  onMounted(() => {
    updateWaline();
  });
  onBeforeUnmount(() => waline == null ? void 0 : waline.destroy());
  function updateWaline() {
    if (waline) {
      waline == null ? void 0 : waline.destroy();
    }
    setTimeout(() => {
      if (!document)
        return;
      waline = Waline_default.newInstance({ walineOptions });
    }, 500);
  }
  watch(() => route.path, updateWaline);
};

// node_modules/vitepress-theme-website/dist/live2d/components/live2d.mjs
import Live2d from "/Library/MySpace/MyProject/Doc/vite-coding-doc/node_modules/vitepress-theme-website/dist/live2d/components/Live2dComponent.vue";
Live2d.init = (props) => {
  const container = document.createElement("div");
  container.classList.add("live2d-wrap");
  const parent = document.querySelector("#app");
  if (!parent)
    return;
  parent.appendChild(container);
  const app = createApp({
    render() {
      return h(Live2d, {
        ...props
      });
    }
  });
  app.mount(container);
  return {
    destroy() {
      app.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  };
};
var live2d_default = Live2d;

// node_modules/vitepress-theme-website/dist/live2d/index.mjs
import { useRoute as useRoute2 } from "vitepress";
var defaultLive2dOptions = {
  enable: true,
  model: {
    url: "https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json"
  },
  display: {
    position: "right",
    width: "135px",
    height: "300px",
    xOffset: "35px",
    yOffset: "5px"
  },
  mobile: {
    show: true
  },
  react: {
    opacity: 0.8
  }
};
var useLive2d = (live2dOptions = {}) => {
  let live2d;
  const route = useRoute2();
  onMounted(() => {
    init();
  });
  onBeforeUnmount(() => live2d == null ? void 0 : live2d.destroy());
  function init() {
    if (live2d)
      return;
    setTimeout(() => {
      if (!document)
        return;
      live2d = live2d_default.init({ live2dOptions: { ...defaultLive2dOptions, ...live2dOptions } });
    }, 500);
  }
  watch(() => route.path, init);
};
export {
  useLive2d,
  useWaline
};
//# sourceMappingURL=vitepress-theme-website.js.map
