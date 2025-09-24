function lf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sf = { exports: {} },
  Ni = {},
  af = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bl = Symbol.for("react.element"),
  yx = Symbol.for("react.portal"),
  wx = Symbol.for("react.fragment"),
  Nx = Symbol.for("react.strict_mode"),
  Cx = Symbol.for("react.profiler"),
  Sx = Symbol.for("react.provider"),
  Ex = Symbol.for("react.context"),
  bx = Symbol.for("react.forward_ref"),
  jx = Symbol.for("react.suspense"),
  kx = Symbol.for("react.memo"),
  Rx = Symbol.for("react.lazy"),
  dc = Symbol.iterator;
function Px(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dc && e[dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var uf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cf = Object.assign,
  df = {};
function Fr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = df),
    (this.updater = n || uf);
}
Fr.prototype.isReactComponent = {};
Fr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ff() {}
ff.prototype = Fr.prototype;
function Aa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = df),
    (this.updater = n || uf);
}
var Fa = (Aa.prototype = new ff());
Fa.constructor = Aa;
cf(Fa, Fr.prototype);
Fa.isPureReactComponent = !0;
var fc = Array.isArray,
  pf = Object.prototype.hasOwnProperty,
  Ua = { current: null },
  mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function hf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      pf.call(t, r) && !mf.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Bl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ua.current,
  };
}
function _x(e, t) {
  return {
    $$typeof: Bl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ba(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bl;
}
function Lx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pc = /\/+/g;
function Yi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lx("" + e.key)
    : t.toString(36);
}
function jo(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bl:
          case yx:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Yi(i, 0) : r),
      fc(l)
        ? ((n = ""),
          e != null && (n = e.replace(pc, "$&/") + "/"),
          jo(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ba(l) &&
            (l = _x(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(pc, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), fc(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Yi(o, s);
      i += jo(o, t, n, u, l);
    }
  else if (((u = Px(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Yi(o, s++)), (i += jo(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function to(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jo(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Tx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var We = { current: null },
  ko = { transition: null },
  Dx = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: ko,
    ReactCurrentOwner: Ua,
  };
function xf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: to,
  forEach: function (e, t, n) {
    to(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      to(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      to(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ba(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = Fr;
Y.Fragment = wx;
Y.Profiler = Cx;
Y.PureComponent = Aa;
Y.StrictMode = Nx;
Y.Suspense = jx;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dx;
Y.act = xf;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = cf({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ua.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      pf.call(t, u) &&
        !mf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Bl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ex,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sx, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = hf;
Y.createFactory = function (e) {
  var t = hf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: bx, render: e };
};
Y.isValidElement = Ba;
Y.lazy = function (e) {
  return { $$typeof: Rx, _payload: { _status: -1, _result: e }, _init: Tx };
};
Y.memo = function (e, t) {
  return { $$typeof: kx, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = ko.transition;
  ko.transition = {};
  try {
    e();
  } finally {
    ko.transition = t;
  }
};
Y.unstable_act = xf;
Y.useCallback = function (e, t) {
  return We.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return We.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return We.current.useEffect(e, t);
};
Y.useId = function () {
  return We.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return We.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return We.current.useRef(e);
};
Y.useState = function (e) {
  return We.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return We.current.useTransition();
};
Y.version = "18.3.1";
af.exports = Y;
var h = af.exports;
const Ee = of(h),
  vf = lf({ __proto__: null, default: Ee }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mx = h,
  zx = Symbol.for("react.element"),
  Ox = Symbol.for("react.fragment"),
  Ix = Object.prototype.hasOwnProperty,
  Ax = Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fx = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ix.call(t, r) && !Fx.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: zx,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ax.current,
  };
}
Ni.Fragment = Ox;
Ni.jsx = gf;
Ni.jsxs = gf;
sf.exports = Ni;
var a = sf.exports,
  yf = { exports: {} },
  ot = {},
  wf = { exports: {} },
  Nf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, $) {
    var W = M.length;
    M.push($);
    e: for (; 0 < W; ) {
      var Q = (W - 1) >>> 1,
        se = M[Q];
      if (0 < l(se, $)) (M[Q] = $), (M[W] = se), (W = Q);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var $ = M[0],
      W = M.pop();
    if (W !== $) {
      M[0] = W;
      e: for (var Q = 0, se = M.length, bt = se >>> 1; Q < bt; ) {
        var _e = 2 * (Q + 1) - 1,
          mt = M[_e],
          Ue = _e + 1,
          zt = M[Ue];
        if (0 > l(mt, W))
          Ue < se && 0 > l(zt, mt)
            ? ((M[Q] = zt), (M[Ue] = W), (Q = Ue))
            : ((M[Q] = mt), (M[_e] = W), (Q = _e));
        else if (Ue < se && 0 > l(zt, W)) (M[Q] = zt), (M[Ue] = W), (Q = Ue);
        else break e;
      }
    }
    return $;
  }
  function l(M, $) {
    var W = M.sortIndex - $.sortIndex;
    return W !== 0 ? W : M.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    m = 3,
    y = !1,
    C = !1,
    v = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= M)
        r(c), ($.sortIndex = $.expirationTime), t(u, $);
      else break;
      $ = n(c);
    }
  }
  function S(M) {
    if (((v = !1), g(M), !C))
      if (n(u) !== null) (C = !0), Je(k);
      else {
        var $ = n(c);
        $ !== null && de(S, $.startTime - M);
      }
  }
  function k(M, $) {
    (C = !1), v && ((v = !1), x(R), (R = -1)), (y = !0);
    var W = m;
    try {
      for (
        g($), f = n(u);
        f !== null && (!(f.expirationTime > $) || (M && !q()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var se = Q(f.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof se == "function" ? (f.callback = se) : f === n(u) && r(u),
            g($);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var bt = !0;
      else {
        var _e = n(c);
        _e !== null && de(S, _e.startTime - $), (bt = !1);
      }
      return bt;
    } finally {
      (f = null), (m = W), (y = !1);
    }
  }
  var N = !1,
    P = null,
    R = -1,
    D = 5,
    T = -1;
  function q() {
    return !(e.unstable_now() - T < D);
  }
  function V() {
    if (P !== null) {
      var M = e.unstable_now();
      T = M;
      var $ = !0;
      try {
        $ = P(!0, M);
      } finally {
        $ ? me() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var me;
  if (typeof p == "function")
    me = function () {
      p(V);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      pt = ie.port2;
    (ie.port1.onmessage = V),
      (me = function () {
        pt.postMessage(null);
      });
  } else
    me = function () {
      b(V, 0);
    };
  function Je(M) {
    (P = M), N || ((N = !0), me());
  }
  function de(M, $) {
    R = b(function () {
      M(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      C || y || ((C = !0), Je(k));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = m;
      }
      var W = m;
      m = $;
      try {
        return M();
      } finally {
        m = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, $) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var W = m;
      m = M;
      try {
        return $();
      } finally {
        m = W;
      }
    }),
    (e.unstable_scheduleCallback = function (M, $, W) {
      var Q = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? Q + W : Q))
          : (W = Q),
        M)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = W + se),
        (M = {
          id: d++,
          callback: $,
          priorityLevel: M,
          startTime: W,
          expirationTime: se,
          sortIndex: -1,
        }),
        W > Q
          ? ((M.sortIndex = W),
            t(c, M),
            n(u) === null &&
              M === n(c) &&
              (v ? (x(R), (R = -1)) : (v = !0), de(S, W - Q)))
          : ((M.sortIndex = se), t(u, M), C || y || ((C = !0), Je(k))),
        M
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (M) {
      var $ = m;
      return function () {
        var W = m;
        m = $;
        try {
          return M.apply(this, arguments);
        } finally {
          m = W;
        }
      };
    });
})(Nf);
wf.exports = Nf;
var Ux = wf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bx = h,
  lt = Ux;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cf = new Set(),
  Nl = {};
function qn(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (Nl[e] = t, e = 0; e < t.length; e++) Cf.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Os = Object.prototype.hasOwnProperty,
  $x =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mc = {},
  hc = {};
function Vx(e) {
  return Os.call(hc, e)
    ? !0
    : Os.call(mc, e)
      ? !1
      : $x.test(e)
        ? (hc[e] = !0)
        : ((mc[e] = !0), !1);
}
function Wx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hx(e, t, n, r) {
  if (t === null || typeof t > "u" || Wx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new He(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new He(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new He(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new He(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $a = /[\-:]([a-z])/g;
function Va(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($a, Va);
    Me[t] = new He(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($a, Va);
    Me[t] = new He(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($a, Va);
  Me[t] = new He(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new He(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wa(e, t, n, r) {
  var l = Me.hasOwnProperty(t) ? Me[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hx(t, n, l, r) && (n = null),
    r || l === null
      ? Vx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = Bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  no = Symbol.for("react.element"),
  ur = Symbol.for("react.portal"),
  cr = Symbol.for("react.fragment"),
  Ha = Symbol.for("react.strict_mode"),
  Is = Symbol.for("react.profiler"),
  Sf = Symbol.for("react.provider"),
  Ef = Symbol.for("react.context"),
  Qa = Symbol.for("react.forward_ref"),
  As = Symbol.for("react.suspense"),
  Fs = Symbol.for("react.suspense_list"),
  Ka = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  bf = Symbol.for("react.offscreen"),
  xc = Symbol.iterator;
function Kr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xc && e[xc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Xi;
function il(e) {
  if (Xi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xi = (t && t[1]) || "";
    }
  return (
    `
` +
    Xi +
    e
  );
}
var qi = !1;
function Zi(e, t) {
  if (!e || qi) return "";
  qi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (qi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? il(e) : "";
}
function Qx(e) {
  switch (e.tag) {
    case 5:
      return il(e.type);
    case 16:
      return il("Lazy");
    case 13:
      return il("Suspense");
    case 19:
      return il("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zi(e.type, !1)), e;
    case 11:
      return (e = Zi(e.type.render, !1)), e;
    case 1:
      return (e = Zi(e.type, !0)), e;
    default:
      return "";
  }
}
function Us(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cr:
      return "Fragment";
    case ur:
      return "Portal";
    case Is:
      return "Profiler";
    case Ha:
      return "StrictMode";
    case As:
      return "Suspense";
    case Fs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ef:
        return (e.displayName || "Context") + ".Consumer";
      case Sf:
        return (e._context.displayName || "Context") + ".Provider";
      case Qa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ka:
        return (
          (t = e.displayName || null), t !== null ? t : Us(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return Us(e(t));
        } catch {}
    }
  return null;
}
function Kx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Us(t);
    case 8:
      return t === Ha ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gx(e) {
  var t = jf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ro(e) {
  e._valueTracker || (e._valueTracker = Gx(e));
}
function kf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = jf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bs(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rf(e, t) {
  (t = t.checked), t != null && Wa(e, "checked", t, !1);
}
function $s(e, t) {
  Rf(e, t);
  var n = Cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vs(e, t.type, Cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function gc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vs(e, t, n) {
  (t !== "number" || Wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sl = Array.isArray;
function Nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Cn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (sl(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Cn(n) };
}
function Pf(e, t) {
  var n = Cn(t.value),
    r = Cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _f(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _f(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var lo,
  Lf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lo = lo || document.createElement("div"),
          lo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Cl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yx = ["Webkit", "ms", "Moz", "O"];
Object.keys(dl).forEach(function (e) {
  Yx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dl[t] = dl[e]);
  });
});
function Tf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (dl.hasOwnProperty(e) && dl[e])
      ? ("" + t).trim()
      : t + "px";
}
function Df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Tf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Xx = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qs(e, t) {
  if (t) {
    if (Xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Ks(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gs = null;
function Ga(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ys = null,
  Cr = null,
  Sr = null;
function Nc(e) {
  if ((e = Wl(e))) {
    if (typeof Ys != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = ji(t)), Ys(e.stateNode, e.type, t));
  }
}
function Mf(e) {
  Cr ? (Sr ? Sr.push(e) : (Sr = [e])) : (Cr = e);
}
function zf() {
  if (Cr) {
    var e = Cr,
      t = Sr;
    if (((Sr = Cr = null), Nc(e), t)) for (e = 0; e < t.length; e++) Nc(t[e]);
  }
}
function Of(e, t) {
  return e(t);
}
function If() {}
var Ji = !1;
function Af(e, t, n) {
  if (Ji) return e(t, n);
  Ji = !0;
  try {
    return Of(e, t, n);
  } finally {
    (Ji = !1), (Cr !== null || Sr !== null) && (If(), zf());
  }
}
function Sl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ji(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Xs = !1;
if (Ht)
  try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
      get: function () {
        Xs = !0;
      },
    }),
      window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    Xs = !1;
  }
function qx(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var fl = !1,
  Ho = null,
  Qo = !1,
  qs = null,
  Zx = {
    onError: function (e) {
      (fl = !0), (Ho = e);
    },
  };
function Jx(e, t, n, r, l, o, i, s, u) {
  (fl = !1), (Ho = null), qx.apply(Zx, arguments);
}
function ev(e, t, n, r, l, o, i, s, u) {
  if ((Jx.apply(this, arguments), fl)) {
    if (fl) {
      var c = Ho;
      (fl = !1), (Ho = null);
    } else throw Error(L(198));
    Qo || ((Qo = !0), (qs = c));
  }
}
function Zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ff(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cc(e) {
  if (Zn(e) !== e) throw Error(L(188));
}
function tv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Cc(l), e;
        if (o === r) return Cc(l), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Uf(e) {
  return (e = tv(e)), e !== null ? Bf(e) : null;
}
function Bf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $f = lt.unstable_scheduleCallback,
  Sc = lt.unstable_cancelCallback,
  nv = lt.unstable_shouldYield,
  rv = lt.unstable_requestPaint,
  Ne = lt.unstable_now,
  lv = lt.unstable_getCurrentPriorityLevel,
  Ya = lt.unstable_ImmediatePriority,
  Vf = lt.unstable_UserBlockingPriority,
  Ko = lt.unstable_NormalPriority,
  ov = lt.unstable_LowPriority,
  Wf = lt.unstable_IdlePriority,
  Ci = null,
  Lt = null;
function iv(e) {
  if (Lt && typeof Lt.onCommitFiberRoot == "function")
    try {
      Lt.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : uv,
  sv = Math.log,
  av = Math.LN2;
function uv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sv(e) / av) | 0)) | 0;
}
var oo = 64,
  io = 4194304;
function al(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = al(s)) : ((o &= i), o !== 0 && (r = al(o)));
  } else (i = n & ~l), i !== 0 ? (r = al(i)) : o !== 0 && (r = al(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function cv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - wt(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? (!(s & n) || s & r) && (l[i] = cv(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Zs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hf() {
  var e = oo;
  return (oo <<= 1), !(oo & 4194240) && (oo = 64), e;
}
function es(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $l(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function fv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - wt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Xa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function Qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kf,
  qa,
  Gf,
  Yf,
  Xf,
  Js = !1,
  so = [],
  mn = null,
  hn = null,
  xn = null,
  El = new Map(),
  bl = new Map(),
  un = [],
  pv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ec(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      El.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bl.delete(t.pointerId);
  }
}
function Yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Wl(t)), t !== null && qa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function mv(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (mn = Yr(mn, e, t, n, r, l)), !0;
    case "dragenter":
      return (hn = Yr(hn, e, t, n, r, l)), !0;
    case "mouseover":
      return (xn = Yr(xn, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return El.set(o, Yr(El.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), bl.set(o, Yr(bl.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function qf(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ff(n)), t !== null)) {
          (e.blockedOn = t),
            Xf(e.priority, function () {
              Gf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ro(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gs = r), n.target.dispatchEvent(r), (Gs = null);
    } else return (t = Wl(n)), t !== null && qa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bc(e, t, n) {
  Ro(e) && n.delete(t);
}
function hv() {
  (Js = !1),
    mn !== null && Ro(mn) && (mn = null),
    hn !== null && Ro(hn) && (hn = null),
    xn !== null && Ro(xn) && (xn = null),
    El.forEach(bc),
    bl.forEach(bc);
}
function Xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Js ||
      ((Js = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, hv)));
}
function jl(e) {
  function t(l) {
    return Xr(l, e);
  }
  if (0 < so.length) {
    Xr(so[0], e);
    for (var n = 1; n < so.length; n++) {
      var r = so[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mn !== null && Xr(mn, e),
      hn !== null && Xr(hn, e),
      xn !== null && Xr(xn, e),
      El.forEach(t),
      bl.forEach(t),
      n = 0;
    n < un.length;
    n++
  )
    (r = un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); )
    qf(n), n.blockedOn === null && un.shift();
}
var Er = Yt.ReactCurrentBatchConfig,
  Yo = !0;
function xv(e, t, n, r) {
  var l = ne,
    o = Er.transition;
  Er.transition = null;
  try {
    (ne = 1), Za(e, t, n, r);
  } finally {
    (ne = l), (Er.transition = o);
  }
}
function vv(e, t, n, r) {
  var l = ne,
    o = Er.transition;
  Er.transition = null;
  try {
    (ne = 4), Za(e, t, n, r);
  } finally {
    (ne = l), (Er.transition = o);
  }
}
function Za(e, t, n, r) {
  if (Yo) {
    var l = ea(e, t, n, r);
    if (l === null) cs(e, t, r, Xo, n), Ec(e, r);
    else if (mv(l, e, t, n, r)) r.stopPropagation();
    else if ((Ec(e, r), t & 4 && -1 < pv.indexOf(e))) {
      for (; l !== null; ) {
        var o = Wl(l);
        if (
          (o !== null && Kf(o),
          (o = ea(e, t, n, r)),
          o === null && cs(e, t, r, Xo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else cs(e, t, r, null, n);
  }
}
var Xo = null;
function ea(e, t, n, r) {
  if (((Xo = null), (e = Ga(r)), (e = On(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ff(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xo = e), null;
}
function Zf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (lv()) {
        case Ya:
          return 1;
        case Vf:
          return 4;
        case Ko:
        case ov:
          return 16;
        case Wf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  Ja = null,
  Po = null;
function Jf() {
  if (Po) return Po;
  var e,
    t = Ja,
    n = t.length,
    r,
    l = "value" in dn ? dn.value : dn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Po = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _o(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ao() {
  return !0;
}
function jc() {
  return !1;
}
function it(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ao
        : jc),
      (this.isPropagationStopped = jc),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ao));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ao));
      },
      persist: function () {},
      isPersistent: ao,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eu = it(Ur),
  Vl = ve({}, Ur, { view: 0, detail: 0 }),
  gv = it(Vl),
  ts,
  ns,
  qr,
  Si = ve({}, Vl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== qr &&
            (qr && e.type === "mousemove"
              ? ((ts = e.screenX - qr.screenX), (ns = e.screenY - qr.screenY))
              : (ns = ts = 0),
            (qr = e)),
          ts);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ns;
    },
  }),
  kc = it(Si),
  yv = ve({}, Si, { dataTransfer: 0 }),
  wv = it(yv),
  Nv = ve({}, Vl, { relatedTarget: 0 }),
  rs = it(Nv),
  Cv = ve({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sv = it(Cv),
  Ev = ve({}, Ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bv = it(Ev),
  jv = ve({}, Ur, { data: 0 }),
  Rc = it(jv),
  kv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Rv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _v(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pv[e]) ? !!t[e] : !1;
}
function tu() {
  return _v;
}
var Lv = ve({}, Vl, {
    key: function (e) {
      if (e.key) {
        var t = kv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Rv[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function (e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _o(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Tv = it(Lv),
  Dv = ve({}, Si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Pc = it(Dv),
  Mv = ve({}, Vl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu,
  }),
  zv = it(Mv),
  Ov = ve({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Iv = it(Ov),
  Av = ve({}, Si, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fv = it(Av),
  Uv = [9, 13, 27, 32],
  nu = Ht && "CompositionEvent" in window,
  pl = null;
Ht && "documentMode" in document && (pl = document.documentMode);
var Bv = Ht && "TextEvent" in window && !pl,
  ep = Ht && (!nu || (pl && 8 < pl && 11 >= pl)),
  _c = " ",
  Lc = !1;
function tp(e, t) {
  switch (e) {
    case "keyup":
      return Uv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function np(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var dr = !1;
function $v(e, t) {
  switch (e) {
    case "compositionend":
      return np(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lc = !0), _c);
    case "textInput":
      return (e = t.data), e === _c && Lc ? null : e;
    default:
      return null;
  }
}
function Vv(e, t) {
  if (dr)
    return e === "compositionend" || (!nu && tp(e, t))
      ? ((e = Jf()), (Po = Ja = dn = null), (dr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ep && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wv[e.type] : t === "textarea";
}
function rp(e, t, n, r) {
  Mf(r),
    (t = qo(t, "onChange")),
    0 < t.length &&
      ((n = new eu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ml = null,
  kl = null;
function Hv(e) {
  mp(e, 0);
}
function Ei(e) {
  var t = mr(e);
  if (kf(t)) return e;
}
function Qv(e, t) {
  if (e === "change") return t;
}
var lp = !1;
if (Ht) {
  var ls;
  if (Ht) {
    var os = "oninput" in document;
    if (!os) {
      var Dc = document.createElement("div");
      Dc.setAttribute("oninput", "return;"),
        (os = typeof Dc.oninput == "function");
    }
    ls = os;
  } else ls = !1;
  lp = ls && (!document.documentMode || 9 < document.documentMode);
}
function Mc() {
  ml && (ml.detachEvent("onpropertychange", op), (kl = ml = null));
}
function op(e) {
  if (e.propertyName === "value" && Ei(kl)) {
    var t = [];
    rp(t, kl, e, Ga(e)), Af(Hv, t);
  }
}
function Kv(e, t, n) {
  e === "focusin"
    ? (Mc(), (ml = t), (kl = n), ml.attachEvent("onpropertychange", op))
    : e === "focusout" && Mc();
}
function Gv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ei(kl);
}
function Yv(e, t) {
  if (e === "click") return Ei(t);
}
function Xv(e, t) {
  if (e === "input" || e === "change") return Ei(t);
}
function qv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == "function" ? Object.is : qv;
function Rl(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Os.call(t, l) || !Ct(e[l], t[l])) return !1;
  }
  return !0;
}
function zc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Oc(e, t) {
  var n = zc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zc(n);
  }
}
function ip(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ip(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sp() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wo(e.document);
  }
  return t;
}
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zv(e) {
  var t = sp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ip(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ru(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Oc(n, o));
        var i = Oc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jv = Ht && "documentMode" in document && 11 >= document.documentMode,
  fr = null,
  ta = null,
  hl = null,
  na = !1;
function Ic(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  na ||
    fr == null ||
    fr !== Wo(r) ||
    ((r = fr),
    "selectionStart" in r && ru(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (hl && Rl(hl, r)) ||
      ((hl = r),
      (r = qo(ta, "onSelect")),
      0 < r.length &&
        ((t = new eu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fr))));
}
function uo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pr = {
    animationend: uo("Animation", "AnimationEnd"),
    animationiteration: uo("Animation", "AnimationIteration"),
    animationstart: uo("Animation", "AnimationStart"),
    transitionend: uo("Transition", "TransitionEnd"),
  },
  is = {},
  ap = {};
Ht &&
  ((ap = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pr.animationend.animation,
    delete pr.animationiteration.animation,
    delete pr.animationstart.animation),
  "TransitionEvent" in window || delete pr.transitionend.transition);
function bi(e) {
  if (is[e]) return is[e];
  if (!pr[e]) return e;
  var t = pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ap) return (is[e] = t[n]);
  return e;
}
var up = bi("animationend"),
  cp = bi("animationiteration"),
  dp = bi("animationstart"),
  fp = bi("transitionend"),
  pp = new Map(),
  Ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function En(e, t) {
  pp.set(e, t), qn(t, [e]);
}
for (var ss = 0; ss < Ac.length; ss++) {
  var as = Ac[ss],
    eg = as.toLowerCase(),
    tg = as[0].toUpperCase() + as.slice(1);
  En(eg, "on" + tg);
}
En(up, "onAnimationEnd");
En(cp, "onAnimationIteration");
En(dp, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(fp, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ul =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ng = new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));
function Fc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ev(r, t, void 0, e), (e.currentTarget = null);
}
function mp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          Fc(l, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Fc(l, s, c), (o = u);
        }
    }
  }
  if (Qo) throw ((e = qs), (Qo = !1), (qs = null), e);
}
function ue(e, t) {
  var n = t[sa];
  n === void 0 && (n = t[sa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hp(t, e, 2, !1), n.add(r));
}
function us(e, t, n) {
  var r = 0;
  t && (r |= 4), hp(n, e, r, t);
}
var co = "_reactListening" + Math.random().toString(36).slice(2);
function Pl(e) {
  if (!e[co]) {
    (e[co] = !0),
      Cf.forEach(function (n) {
        n !== "selectionchange" && (ng.has(n) || us(n, !1, e), us(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[co] || ((t[co] = !0), us("selectionchange", !1, t));
  }
}
function hp(e, t, n, r) {
  switch (Zf(t)) {
    case 1:
      var l = xv;
      break;
    case 4:
      l = vv;
      break;
    default:
      l = Za;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Xs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function cs(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = On(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Af(function () {
    var c = o,
      d = Ga(n),
      f = [];
    e: {
      var m = pp.get(e);
      if (m !== void 0) {
        var y = eu,
          C = e;
        switch (e) {
          case "keypress":
            if (_o(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Tv;
            break;
          case "focusin":
            (C = "focus"), (y = rs);
            break;
          case "focusout":
            (C = "blur"), (y = rs);
            break;
          case "beforeblur":
          case "afterblur":
            y = rs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = wv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = zv;
            break;
          case up:
          case cp:
          case dp:
            y = Sv;
            break;
          case fp:
            y = Iv;
            break;
          case "scroll":
            y = gv;
            break;
          case "wheel":
            y = Fv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = bv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Pc;
        }
        var v = (t & 4) !== 0,
          b = !v && e === "scroll",
          x = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              x !== null && ((S = Sl(p, x)), S != null && v.push(_l(p, S, g)))),
            b)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((m = new y(m, C, null, n, d)), f.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Gs &&
            (C = n.relatedTarget || n.fromElement) &&
            (On(C) || C[Qt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          y
            ? ((C = n.relatedTarget || n.toElement),
              (y = c),
              (C = C ? On(C) : null),
              C !== null &&
                ((b = Zn(C)), C !== b || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((y = null), (C = c)),
          y !== C)
        ) {
          if (
            ((v = kc),
            (S = "onMouseLeave"),
            (x = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Pc),
              (S = "onPointerLeave"),
              (x = "onPointerEnter"),
              (p = "pointer")),
            (b = y == null ? m : mr(y)),
            (g = C == null ? m : mr(C)),
            (m = new v(S, p + "leave", y, n, d)),
            (m.target = b),
            (m.relatedTarget = g),
            (S = null),
            On(d) === c &&
              ((v = new v(x, p + "enter", C, n, d)),
              (v.target = g),
              (v.relatedTarget = b),
              (S = v)),
            (b = S),
            y && C)
          )
            t: {
              for (v = y, x = C, p = 0, g = v; g; g = lr(g)) p++;
              for (g = 0, S = x; S; S = lr(S)) g++;
              for (; 0 < p - g; ) (v = lr(v)), p--;
              for (; 0 < g - p; ) (x = lr(x)), g--;
              for (; p--; ) {
                if (v === x || (x !== null && v === x.alternate)) break t;
                (v = lr(v)), (x = lr(x));
              }
              v = null;
            }
          else v = null;
          y !== null && Uc(f, m, y, v, !1),
            C !== null && b !== null && Uc(f, b, C, v, !0);
        }
      }
      e: {
        if (
          ((m = c ? mr(c) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var k = Qv;
        else if (Tc(m))
          if (lp) k = Xv;
          else {
            k = Gv;
            var N = Kv;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Yv);
        if (k && (k = k(e, c))) {
          rp(f, k, n, d);
          break e;
        }
        N && N(e, m, c),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            Vs(m, "number", m.value);
      }
      switch (((N = c ? mr(c) : window), e)) {
        case "focusin":
          (Tc(N) || N.contentEditable === "true") &&
            ((fr = N), (ta = c), (hl = null));
          break;
        case "focusout":
          hl = ta = fr = null;
          break;
        case "mousedown":
          na = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (na = !1), Ic(f, n, d);
          break;
        case "selectionchange":
          if (Jv) break;
        case "keydown":
        case "keyup":
          Ic(f, n, d);
      }
      var P;
      if (nu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        dr
          ? tp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (ep &&
          n.locale !== "ko" &&
          (dr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && dr && (P = Jf())
            : ((dn = d),
              (Ja = "value" in dn ? dn.value : dn.textContent),
              (dr = !0))),
        (N = qo(c, R)),
        0 < N.length &&
          ((R = new Rc(R, e, null, n, d)),
          f.push({ event: R, listeners: N }),
          P ? (R.data = P) : ((P = np(n)), P !== null && (R.data = P)))),
        (P = Bv ? $v(e, n) : Vv(e, n)) &&
          ((c = qo(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Rc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = P)));
    }
    mp(f, t);
  });
}
function _l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Sl(e, n)),
      o != null && r.unshift(_l(e, o, l)),
      (o = Sl(e, t)),
      o != null && r.push(_l(e, o, l))),
      (e = e.return);
  }
  return r;
}
function lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uc(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Sl(n, o)), u != null && i.unshift(_l(n, u, s)))
        : l || ((u = Sl(n, o)), u != null && i.push(_l(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var rg = /\r\n?/g,
  lg = /\u0000|\uFFFD/g;
function Bc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rg,
      `
`
    )
    .replace(lg, "");
}
function fo(e, t, n) {
  if (((t = Bc(t)), Bc(e) !== t && n)) throw Error(L(425));
}
function Zo() {}
var ra = null,
  la = null;
function oa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ia = typeof setTimeout == "function" ? setTimeout : void 0,
  og = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $c = typeof Promise == "function" ? Promise : void 0,
  ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $c < "u"
        ? function (e) {
            return $c.resolve(null).then(e).catch(sg);
          }
        : ia;
function sg(e) {
  setTimeout(function () {
    throw e;
  });
}
function ds(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), jl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  jl(t);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Br,
  Ll = "__reactProps$" + Br,
  Qt = "__reactContainer$" + Br,
  sa = "__reactEvents$" + Br,
  ag = "__reactListeners$" + Br,
  ug = "__reactHandles$" + Br;
function On(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qt] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vc(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = Vc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Wl(e) {
  return (
    (e = e[Pt] || e[Qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function ji(e) {
  return e[Ll] || null;
}
var aa = [],
  hr = -1;
function bn(e) {
  return { current: e };
}
function ce(e) {
  0 > hr || ((e.current = aa[hr]), (aa[hr] = null), hr--);
}
function oe(e, t) {
  hr++, (aa[hr] = e.current), (e.current = t);
}
var Sn = {},
  Fe = bn(Sn),
  Ye = bn(!1),
  $n = Sn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Jo() {
  ce(Ye), ce(Fe);
}
function Wc(e, t, n) {
  if (Fe.current !== Sn) throw Error(L(168));
  oe(Fe, t), oe(Ye, n);
}
function xp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(L(108, Kx(e) || "Unknown", l));
  return ve({}, n, r);
}
function ei(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    ($n = Fe.current),
    oe(Fe, e),
    oe(Ye, Ye.current),
    !0
  );
}
function Hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = xp(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ye),
      ce(Fe),
      oe(Fe, e))
    : ce(Ye),
    oe(Ye, n);
}
var Ut = null,
  ki = !1,
  fs = !1;
function vp(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function cg(e) {
  (ki = !0), vp(e);
}
function jn() {
  if (!fs && Ut !== null) {
    fs = !0;
    var e = 0,
      t = ne;
    try {
      var n = Ut;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ut = null), (ki = !1);
    } catch (l) {
      throw (Ut !== null && (Ut = Ut.slice(e + 1)), $f(Ya, jn), l);
    } finally {
      (ne = t), (fs = !1);
    }
  }
  return null;
}
var xr = [],
  vr = 0,
  ti = null,
  ni = 0,
  st = [],
  at = 0,
  Vn = null,
  Bt = 1,
  $t = "";
function Tn(e, t) {
  (xr[vr++] = ni), (xr[vr++] = ti), (ti = e), (ni = t);
}
function gp(e, t, n) {
  (st[at++] = Bt), (st[at++] = $t), (st[at++] = Vn), (Vn = e);
  var r = Bt;
  e = $t;
  var l = 32 - wt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - wt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Bt = (1 << (32 - wt(t) + l)) | (n << l) | r),
      ($t = o + e);
  } else (Bt = (1 << o) | (n << l) | r), ($t = e);
}
function lu(e) {
  e.return !== null && (Tn(e, 1), gp(e, 1, 0));
}
function ou(e) {
  for (; e === ti; )
    (ti = xr[--vr]), (xr[vr] = null), (ni = xr[--vr]), (xr[vr] = null);
  for (; e === Vn; )
    (Vn = st[--at]),
      (st[at] = null),
      ($t = st[--at]),
      (st[at] = null),
      (Bt = st[--at]),
      (st[at] = null);
}
var rt = null,
  nt = null,
  pe = !1,
  yt = null;
function yp(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Vn !== null ? { id: Bt, overflow: $t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ca(e) {
  if (pe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Qc(e, t)) {
        if (ua(e)) throw Error(L(418));
        t = vn(n.nextSibling);
        var r = rt;
        t && Qc(e, t)
          ? yp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e));
      }
    } else {
      if (ua(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e);
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function po(e) {
  if (e !== rt) return !1;
  if (!pe) return Kc(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (ua(e)) throw (wp(), Error(L(418)));
    for (; t; ) yp(e, t), (t = vn(t.nextSibling));
  }
  if ((Kc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function wp() {
  for (var e = nt; e; ) e = vn(e.nextSibling);
}
function Lr() {
  (nt = rt = null), (pe = !1);
}
function iu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var dg = Yt.ReactCurrentBatchConfig;
function Zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function mo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gc(e) {
  var t = e._init;
  return t(e._payload);
}
function Np(e) {
  function t(x, p) {
    if (e) {
      var g = x.deletions;
      g === null ? ((x.deletions = [p]), (x.flags |= 16)) : g.push(p);
    }
  }
  function n(x, p) {
    if (!e) return null;
    for (; p !== null; ) t(x, p), (p = p.sibling);
    return null;
  }
  function r(x, p) {
    for (x = new Map(); p !== null; )
      p.key !== null ? x.set(p.key, p) : x.set(p.index, p), (p = p.sibling);
    return x;
  }
  function l(x, p) {
    return (x = Nn(x, p)), (x.index = 0), (x.sibling = null), x;
  }
  function o(x, p, g) {
    return (
      (x.index = g),
      e
        ? ((g = x.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((x.flags |= 2), p) : g)
            : ((x.flags |= 2), p))
        : ((x.flags |= 1048576), p)
    );
  }
  function i(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function s(x, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = ys(g, x.mode, S)), (p.return = x), p)
      : ((p = l(p, g)), (p.return = x), p);
  }
  function u(x, p, g, S) {
    var k = g.type;
    return k === cr
      ? d(x, p, g.props.children, S, g.key)
      : p !== null &&
          (p.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === sn &&
              Gc(k) === p.type))
        ? ((S = l(p, g.props)), (S.ref = Zr(x, p, g)), (S.return = x), S)
        : ((S = Io(g.type, g.key, g.props, null, x.mode, S)),
          (S.ref = Zr(x, p, g)),
          (S.return = x),
          S);
  }
  function c(x, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ws(g, x.mode, S)), (p.return = x), p)
      : ((p = l(p, g.children || [])), (p.return = x), p);
  }
  function d(x, p, g, S, k) {
    return p === null || p.tag !== 7
      ? ((p = Bn(g, x.mode, S, k)), (p.return = x), p)
      : ((p = l(p, g)), (p.return = x), p);
  }
  function f(x, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ys("" + p, x.mode, g)), (p.return = x), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case no:
          return (
            (g = Io(p.type, p.key, p.props, null, x.mode, g)),
            (g.ref = Zr(x, null, p)),
            (g.return = x),
            g
          );
        case ur:
          return (p = ws(p, x.mode, g)), (p.return = x), p;
        case sn:
          var S = p._init;
          return f(x, S(p._payload), g);
      }
      if (sl(p) || Kr(p))
        return (p = Bn(p, x.mode, g, null)), (p.return = x), p;
      mo(x, p);
    }
    return null;
  }
  function m(x, p, g, S) {
    var k = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : s(x, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case no:
          return g.key === k ? u(x, p, g, S) : null;
        case ur:
          return g.key === k ? c(x, p, g, S) : null;
        case sn:
          return (k = g._init), m(x, p, k(g._payload), S);
      }
      if (sl(g) || Kr(g)) return k !== null ? null : d(x, p, g, S, null);
      mo(x, g);
    }
    return null;
  }
  function y(x, p, g, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (x = x.get(g) || null), s(p, x, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case no:
          return (x = x.get(S.key === null ? g : S.key) || null), u(p, x, S, k);
        case ur:
          return (x = x.get(S.key === null ? g : S.key) || null), c(p, x, S, k);
        case sn:
          var N = S._init;
          return y(x, p, g, N(S._payload), k);
      }
      if (sl(S) || Kr(S)) return (x = x.get(g) || null), d(p, x, S, k, null);
      mo(p, S);
    }
    return null;
  }
  function C(x, p, g, S) {
    for (
      var k = null, N = null, P = p, R = (p = 0), D = null;
      P !== null && R < g.length;
      R++
    ) {
      P.index > R ? ((D = P), (P = null)) : (D = P.sibling);
      var T = m(x, P, g[R], S);
      if (T === null) {
        P === null && (P = D);
        break;
      }
      e && P && T.alternate === null && t(x, P),
        (p = o(T, p, R)),
        N === null ? (k = T) : (N.sibling = T),
        (N = T),
        (P = D);
    }
    if (R === g.length) return n(x, P), pe && Tn(x, R), k;
    if (P === null) {
      for (; R < g.length; R++)
        (P = f(x, g[R], S)),
          P !== null &&
            ((p = o(P, p, R)), N === null ? (k = P) : (N.sibling = P), (N = P));
      return pe && Tn(x, R), k;
    }
    for (P = r(x, P); R < g.length; R++)
      (D = y(P, x, R, g[R], S)),
        D !== null &&
          (e && D.alternate !== null && P.delete(D.key === null ? R : D.key),
          (p = o(D, p, R)),
          N === null ? (k = D) : (N.sibling = D),
          (N = D));
    return (
      e &&
        P.forEach(function (q) {
          return t(x, q);
        }),
      pe && Tn(x, R),
      k
    );
  }
  function v(x, p, g, S) {
    var k = Kr(g);
    if (typeof k != "function") throw Error(L(150));
    if (((g = k.call(g)), g == null)) throw Error(L(151));
    for (
      var N = (k = null), P = p, R = (p = 0), D = null, T = g.next();
      P !== null && !T.done;
      R++, T = g.next()
    ) {
      P.index > R ? ((D = P), (P = null)) : (D = P.sibling);
      var q = m(x, P, T.value, S);
      if (q === null) {
        P === null && (P = D);
        break;
      }
      e && P && q.alternate === null && t(x, P),
        (p = o(q, p, R)),
        N === null ? (k = q) : (N.sibling = q),
        (N = q),
        (P = D);
    }
    if (T.done) return n(x, P), pe && Tn(x, R), k;
    if (P === null) {
      for (; !T.done; R++, T = g.next())
        (T = f(x, T.value, S)),
          T !== null &&
            ((p = o(T, p, R)), N === null ? (k = T) : (N.sibling = T), (N = T));
      return pe && Tn(x, R), k;
    }
    for (P = r(x, P); !T.done; R++, T = g.next())
      (T = y(P, x, R, T.value, S)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? R : T.key),
          (p = o(T, p, R)),
          N === null ? (k = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        P.forEach(function (V) {
          return t(x, V);
        }),
      pe && Tn(x, R),
      k
    );
  }
  function b(x, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === cr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case no:
          e: {
            for (var k = g.key, N = p; N !== null; ) {
              if (N.key === k) {
                if (((k = g.type), k === cr)) {
                  if (N.tag === 7) {
                    n(x, N.sibling),
                      (p = l(N, g.props.children)),
                      (p.return = x),
                      (x = p);
                    break e;
                  }
                } else if (
                  N.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === sn &&
                    Gc(k) === N.type)
                ) {
                  n(x, N.sibling),
                    (p = l(N, g.props)),
                    (p.ref = Zr(x, N, g)),
                    (p.return = x),
                    (x = p);
                  break e;
                }
                n(x, N);
                break;
              } else t(x, N);
              N = N.sibling;
            }
            g.type === cr
              ? ((p = Bn(g.props.children, x.mode, S, g.key)),
                (p.return = x),
                (x = p))
              : ((S = Io(g.type, g.key, g.props, null, x.mode, S)),
                (S.ref = Zr(x, p, g)),
                (S.return = x),
                (x = S));
          }
          return i(x);
        case ur:
          e: {
            for (N = g.key; p !== null; ) {
              if (p.key === N)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(x, p.sibling),
                    (p = l(p, g.children || [])),
                    (p.return = x),
                    (x = p);
                  break e;
                } else {
                  n(x, p);
                  break;
                }
              else t(x, p);
              p = p.sibling;
            }
            (p = ws(g, x.mode, S)), (p.return = x), (x = p);
          }
          return i(x);
        case sn:
          return (N = g._init), b(x, p, N(g._payload), S);
      }
      if (sl(g)) return C(x, p, g, S);
      if (Kr(g)) return v(x, p, g, S);
      mo(x, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(x, p.sibling), (p = l(p, g)), (p.return = x), (x = p))
          : (n(x, p), (p = ys(g, x.mode, S)), (p.return = x), (x = p)),
        i(x))
      : n(x, p);
  }
  return b;
}
var Tr = Np(!0),
  Cp = Np(!1),
  ri = bn(null),
  li = null,
  gr = null,
  su = null;
function au() {
  su = gr = li = null;
}
function uu(e) {
  var t = ri.current;
  ce(ri), (e._currentValue = t);
}
function da(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function br(e, t) {
  (li = e),
    (su = gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
      if (li === null) throw Error(L(308));
      (gr = e), (li.dependencies = { lanes: 0, firstContext: e });
    } else gr = gr.next = e;
  return t;
}
var In = null;
function cu(e) {
  In === null ? (In = [e]) : In.push(e);
}
function Sp(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), cu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var an = !1;
function du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ep(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), cu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function Lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n);
  }
}
function Yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oi(e, t, n, r) {
  var l = e.updateQueue;
  an = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = l.baseState;
    (i = 0), (d = c = u = null), (s = o);
    do {
      var m = s.lane,
        y = s.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var C = e,
            v = s;
          switch (((m = t), (y = n), v.tag)) {
            case 1:
              if (((C = v.payload), typeof C == "function")) {
                f = C.call(y, f, m);
                break e;
              }
              f = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = v.payload),
                (m = typeof C == "function" ? C.call(y, f, m) : C),
                m == null)
              )
                break e;
              f = ve({}, f, m);
              break e;
            case 2:
              an = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (u = f)) : (d = d.next = y),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Hn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Xc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(L(191, l));
        l.call(r);
      }
    }
}
var Hl = {},
  Tt = bn(Hl),
  Tl = bn(Hl),
  Dl = bn(Hl);
function An(e) {
  if (e === Hl) throw Error(L(174));
  return e;
}
function fu(e, t) {
  switch ((oe(Dl, t), oe(Tl, e), oe(Tt, Hl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hs(t, e));
  }
  ce(Tt), oe(Tt, t);
}
function Dr() {
  ce(Tt), ce(Tl), ce(Dl);
}
function bp(e) {
  An(Dl.current);
  var t = An(Tt.current),
    n = Hs(t, e.type);
  t !== n && (oe(Tl, e), oe(Tt, n));
}
function pu(e) {
  Tl.current === e && (ce(Tt), ce(Tl));
}
var he = bn(0);
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ps = [];
function mu() {
  for (var e = 0; e < ps.length; e++)
    ps[e]._workInProgressVersionPrimary = null;
  ps.length = 0;
}
var To = Yt.ReactCurrentDispatcher,
  ms = Yt.ReactCurrentBatchConfig,
  Wn = 0,
  xe = null,
  je = null,
  Re = null,
  si = !1,
  xl = !1,
  Ml = 0,
  fg = 0;
function ze() {
  throw Error(L(321));
}
function hu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function xu(e, t, n, r, l, o) {
  if (
    ((Wn = o),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (To.current = e === null || e.memoizedState === null ? xg : vg),
    (e = n(r, l)),
    xl)
  ) {
    o = 0;
    do {
      if (((xl = !1), (Ml = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Re = je = null),
        (t.updateQueue = null),
        (To.current = gg),
        (e = n(r, l));
    } while (xl);
  }
  if (
    ((To.current = ai),
    (t = je !== null && je.next !== null),
    (Wn = 0),
    (Re = je = xe = null),
    (si = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function vu() {
  var e = Ml !== 0;
  return (Ml = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (xe.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function ft() {
  if (je === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = je.next;
  var t = Re === null ? xe.memoizedState : Re.next;
  if (t !== null) (Re = t), (je = e);
  else {
    if (e === null) throw Error(L(310));
    (je = e),
      (e = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null,
      }),
      Re === null ? (xe.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function zl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hs(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = je,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((Wn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (i = r)) : (u = u.next = f),
          (xe.lanes |= d),
          (Hn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      Ct(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (xe.lanes |= o), (Hn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xs(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ct(o, t.memoizedState) || (Ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function jp() {}
function kp(e, t) {
  var n = xe,
    r = ft(),
    l = t(),
    o = !Ct(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ge = !0)),
    (r = r.queue),
    gu(_p.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ol(9, Pp.bind(null, n, r, l, t), void 0, null),
      Pe === null)
    )
      throw Error(L(349));
    Wn & 30 || Rp(n, t, l);
  }
  return l;
}
function Rp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Lp(t) && Tp(e);
}
function _p(e, t, n) {
  return n(function () {
    Lp(t) && Tp(e);
  });
}
function Lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Tp(e) {
  var t = Kt(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function qc(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hg.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function Ol(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dp() {
  return ft().memoizedState;
}
function Do(e, t, n, r) {
  var l = Rt();
  (xe.flags |= e),
    (l.memoizedState = Ol(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ri(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (je !== null) {
    var i = je.memoizedState;
    if (((o = i.destroy), r !== null && hu(r, i.deps))) {
      l.memoizedState = Ol(t, n, o, r);
      return;
    }
  }
  (xe.flags |= e), (l.memoizedState = Ol(1 | t, n, o, r));
}
function Zc(e, t) {
  return Do(8390656, 8, e, t);
}
function gu(e, t) {
  return Ri(2048, 8, e, t);
}
function Mp(e, t) {
  return Ri(4, 2, e, t);
}
function zp(e, t) {
  return Ri(4, 4, e, t);
}
function Op(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ip(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ri(4, 4, Op.bind(null, t, e), n)
  );
}
function yu() {}
function Ap(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Fp(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Up(e, t, n) {
  return Wn & 21
    ? (Ct(n, t) || ((n = Hf()), (xe.lanes |= n), (Hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function pg(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ms.transition;
  ms.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (ms.transition = r);
  }
}
function Bp() {
  return ft().memoizedState;
}
function mg(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $p(e))
  )
    Vp(t, n);
  else if (((n = Sp(e, t, n, r)), n !== null)) {
    var l = Ve();
    Nt(n, e, r, l), Wp(n, t, r);
  }
}
function hg(e, t, n) {
  var r = wn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($p(e)) Vp(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ct(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), cu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Sp(e, t, l, r)),
      n !== null && ((l = Ve()), Nt(n, e, r, l), Wp(n, t, r));
  }
}
function $p(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Vp(e, t) {
  xl = si = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n);
  }
}
var ai = {
    readContext: dt,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  xg = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Zc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Do(4194308, 4, Op.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = mg.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qc,
    useDebugValue: yu,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = qc(!1),
        t = e[0];
      return (e = pg.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        l = Rt();
      if (pe) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(L(349));
        Wn & 30 || Rp(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Zc(_p.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ol(9, Pp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = Pe.identifierPrefix;
      if (pe) {
        var n = $t,
          r = Bt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ml++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vg = {
    readContext: dt,
    useCallback: Ap,
    useContext: dt,
    useEffect: gu,
    useImperativeHandle: Ip,
    useInsertionEffect: Mp,
    useLayoutEffect: zp,
    useMemo: Fp,
    useReducer: hs,
    useRef: Dp,
    useState: function () {
      return hs(zl);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = ft();
      return Up(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(zl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: kp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: dt,
    useCallback: Ap,
    useContext: dt,
    useEffect: gu,
    useImperativeHandle: Ip,
    useInsertionEffect: Mp,
    useLayoutEffect: zp,
    useMemo: Fp,
    useReducer: xs,
    useRef: Dp,
    useState: function () {
      return xs(zl);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = ft();
      return je === null ? (t.memoizedState = e) : Up(t, je.memoizedState, e);
    },
    useTransition: function () {
      var e = xs(zl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: kp,
    useId: Bp,
    unstable_isNewReconciler: !1,
  };
function xt(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      l = wn(e),
      o = Vt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, l)),
      t !== null && (Nt(t, e, l, r), Lo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      l = wn(e),
      o = Vt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = gn(e, o, l)),
      t !== null && (Nt(t, e, l, r), Lo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = wn(e),
      l = Vt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = gn(e, l, r)),
      t !== null && (Nt(t, e, r, n), Lo(t, e, r));
  },
};
function Jc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Rl(n, r) || !Rl(l, o)
        : !0
  );
}
function Hp(e, t, n) {
  var r = !1,
    l = Sn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dt(o))
      : ((l = Xe(t) ? $n : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _r(e, l) : Sn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ed(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
}
function pa(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), du(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = dt(o))
    : ((o = Xe(t) ? $n : Fe.current), (l.context = _r(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fa(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Pi.enqueueReplaceState(l, l.state, null),
      oi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qx(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function vs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yg = typeof WeakMap == "function" ? WeakMap : Map;
function Qp(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ci || ((ci = !0), (Ea = r)), ma(e, t);
    }),
    n
  );
}
function Kp(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ma(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ma(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function td(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yg();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Dg.bind(null, e, t, n)), t.then(e, e));
}
function nd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rd(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vt(-1, 1)), (t.tag = 2), gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wg = Yt.ReactCurrentOwner,
  Ge = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Cp(t, null, n, r) : Tr(t, e.child, n, r);
}
function ld(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    br(t, l),
    (r = xu(e, t, n, r, o, l)),
    (n = vu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Gt(e, t, l))
      : (pe && n && lu(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function od(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ku(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Gp(e, t, o, r, l))
      : ((e = Io(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rl), n(i, r) && e.ref === t.ref)
    )
      return Gt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Nn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gp(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Rl(o, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Gt(e, t, l);
  }
  return ha(e, t, n, r, l);
}
function Yp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(wr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(wr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(wr, et),
        (et |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(wr, et),
      (et |= r);
  return $e(e, t, l, n), t.child;
}
function Xp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ha(e, t, n, r, l) {
  var o = Xe(n) ? $n : Fe.current;
  return (
    (o = _r(t, o)),
    br(t, l),
    (n = xu(e, t, n, r, o, l)),
    (r = vu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Gt(e, t, l))
      : (pe && r && lu(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function id(e, t, n, r, l) {
  if (Xe(n)) {
    var o = !0;
    ei(t);
  } else o = !1;
  if ((br(t, l), t.stateNode === null))
    Mo(e, t), Hp(t, n, r), pa(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = dt(c))
      : ((c = Xe(n) ? $n : Fe.current), (c = _r(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && ed(t, i, r, c)),
      (an = !1);
    var m = t.memoizedState;
    (i.state = m),
      oi(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || Ye.current || an
        ? (typeof d == "function" && (fa(t, n, d, r), (u = t.memoizedState)),
          (s = an || Jc(t, n, s, r, m, u, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ep(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : xt(t.type, s)),
      (i.props = c),
      (f = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = dt(u))
        : ((u = Xe(n) ? $n : Fe.current), (u = _r(t, u)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== f || m !== u) && ed(t, i, r, u)),
      (an = !1),
      (m = t.memoizedState),
      (i.state = m),
      oi(t, r, i, l);
    var C = t.memoizedState;
    s !== f || m !== C || Ye.current || an
      ? (typeof y == "function" && (fa(t, n, y, r), (C = t.memoizedState)),
        (c = an || Jc(t, n, c, r, m, C, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, C, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, C, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (i.props = r),
        (i.state = C),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xa(e, t, n, r, o, l);
}
function xa(e, t, n, r, l, o) {
  Xp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Hc(t, n, !1), Gt(e, t, o);
  (r = t.stateNode), (wg.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Tr(t, e.child, null, o)), (t.child = Tr(t, null, s, o)))
      : $e(e, t, s, o),
    (t.memoizedState = r.state),
    l && Hc(t, n, !0),
    t.child
  );
}
function qp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wc(e, t.context, !1),
    fu(e, t.containerInfo);
}
function sd(e, t, n, r, l) {
  return Lr(), iu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var va = { dehydrated: null, treeContext: null, retryLane: 0 };
function ga(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zp(e, t, n) {
  var r = t.pendingProps,
    l = he.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    oe(he, l & 1),
    e === null)
  )
    return (
      ca(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ti(i, r, 0, null)),
              (e = Bn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ga(n)),
              (t.memoizedState = va),
              e)
            : wu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Ng(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Nn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Nn(s, o)) : ((o = Bn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ga(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = va),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Nn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wu(e, t) {
  return (
    (t = Ti({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ho(e, t, n, r) {
  return (
    r !== null && iu(r),
    Tr(t, e.child, null, n),
    (e = wu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ng(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vs(Error(L(422)))), ho(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Ti({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Bn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Tr(t, e.child, null, i),
          (t.child.memoizedState = ga(i)),
          (t.memoizedState = va),
          o);
  if (!(t.mode & 1)) return ho(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(L(419))), (r = vs(o, r, void 0)), ho(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Ge || s)) {
    if (((r = Pe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Kt(e, l), Nt(r, e, l, -1));
    }
    return ju(), (r = vs(Error(L(421)))), ho(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (nt = vn(l.nextSibling)),
      (rt = t),
      (pe = !0),
      (yt = null),
      e !== null &&
        ((st[at++] = Bt),
        (st[at++] = $t),
        (st[at++] = Vn),
        (Bt = e.id),
        ($t = e.overflow),
        (Vn = t)),
      (t = wu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), da(e.return, t, n);
}
function gs(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Jp(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ad(e, n, t);
        else if (e.tag === 19) ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          gs(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ii(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        gs(t, !0, n, null, o);
        break;
      case "together":
        gs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cg(e, t, n) {
  switch (t.tag) {
    case 3:
      qp(t), Lr();
      break;
    case 5:
      bp(t);
      break;
    case 1:
      Xe(t.type) && ei(t);
      break;
    case 4:
      fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      oe(ri, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Zp(e, t, n)
            : (oe(he, he.current & 1),
              (e = Gt(e, t, n)),
              e !== null ? e.sibling : null);
      oe(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        oe(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yp(e, t, n);
  }
  return Gt(e, t, n);
}
var em, ya, tm, nm;
em = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ya = function () {};
tm = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), An(Tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Bs(e, l)), (r = Bs(e, r)), (o = []);
        break;
      case "select":
        (l = ve({}, l, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ws(e, l)), (r = Ws(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zo);
    }
    Qs(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Nl.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Nl.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && ue("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
nm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Sg(e, t, n) {
  var r = t.pendingProps;
  switch ((ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Xe(t.type) && Jo(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dr(),
        ce(Ye),
        ce(Fe),
        mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (po(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (ka(yt), (yt = null)))),
        ya(e, t),
        Oe(t),
        null
      );
    case 5:
      pu(t);
      var l = An(Dl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tm(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Oe(t), null;
        }
        if (((e = An(Tt.current)), po(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Pt] = t), (r[Ll] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < ul.length; l++) ue(ul[l], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              vc(r, o), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              yc(r, o), ue("invalid", r);
          }
          Qs(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Nl.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              ro(r), gc(r, o, !0);
              break;
            case "textarea":
              ro(r), wc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _f(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Ll] = r),
            em(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ks(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ul.length; l++) ue(ul[l], e);
                l = r;
                break;
              case "source":
                ue("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (l = r);
                break;
              case "details":
                ue("toggle", e), (l = r);
                break;
              case "input":
                vc(e, r), (l = Bs(e, r)), ue("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ve({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                yc(e, r), (l = Ws(e, r)), ue("invalid", e);
                break;
              default:
                l = r;
            }
            Qs(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Df(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Lf(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Cl(e, u)
                        : typeof u == "number" && Cl(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Nl.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && ue("scroll", e)
                          : u != null && Wa(e, o, u, i));
              }
            switch (n) {
              case "input":
                ro(e), gc(e, r, !1);
                break;
              case "textarea":
                ro(e), wc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Nr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) nm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = An(Dl.current)), An(Tt.current), po(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (o = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ce(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && nt !== null && t.mode & 1 && !(t.flags & 128))
          wp(), Lr(), (t.flags |= 98560), (o = !1);
        else if (((o = po(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[Pt] = t;
          } else
            Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else yt !== null && (ka(yt), (yt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? ke === 0 && (ke = 3) : ju())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Dr(), ya(e, t), e === null && Pl(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return uu(t.type._context), Oe(t), null;
    case 17:
      return Xe(t.type) && Jo(), Oe(t), null;
    case 19:
      if ((ce(he), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Jr(o, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ii(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Jr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ne() > zr &&
            ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ii(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !pe)
            )
              return Oe(t), null;
          } else
            2 * Ne() - o.renderingStartTime > zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = he.current),
          oe(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        bu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Eg(e, t) {
  switch ((ou(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && Jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dr(),
        ce(Ye),
        ce(Fe),
        mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pu(t), null;
    case 13:
      if (
        (ce(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(he), null;
    case 4:
      return Dr(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xo = !1,
  Ae = !1,
  bg = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function yr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function wa(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var ud = !1;
function jg(e, t) {
  if (((ra = Yo), (e = sp()), ru(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (l !== 0 && f.nodeType !== 3) || (s = i + l),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (m = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++c === l && (s = i),
                m === o && ++d === r && (u = i),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (la = { focusedElem: e, selectionRange: n }, Yo = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var v = C.memoizedProps,
                    b = C.memoizedState,
                    x = t.stateNode,
                    p = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : xt(t.type, v),
                      b
                    );
                  x.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (S) {
          we(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (C = ud), (ud = !1), C;
}
function vl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && wa(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _i(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Na(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function rm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Ll], delete t[sa], delete t[ag], delete t[ug])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; ) Ca(e, t, n), (e = e.sibling);
}
function Sa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sa(e, t, n), e = e.sibling; e !== null; ) Sa(e, t, n), (e = e.sibling);
}
var Te = null,
  vt = !1;
function tn(e, t, n) {
  for (n = n.child; n !== null; ) om(e, t, n), (n = n.sibling);
}
function om(e, t, n) {
  if (Lt && typeof Lt.onCommitFiberUnmount == "function")
    try {
      Lt.onCommitFiberUnmount(Ci, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || yr(n, t);
    case 6:
      var r = Te,
        l = vt;
      (Te = null),
        tn(e, t, n),
        (Te = r),
        (vt = l),
        Te !== null &&
          (vt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (vt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? ds(e.parentNode, n)
              : e.nodeType === 1 && ds(e, n),
            jl(e))
          : ds(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (l = vt),
        (Te = n.stateNode.containerInfo),
        (vt = !0),
        tn(e, t, n),
        (Te = r),
        (vt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && wa(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      tn(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (yr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          we(n, t, s);
        }
      tn(e, t, n);
      break;
    case 21:
      tn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), tn(e, t, n), (Ae = r))
        : tn(e, t, n);
      break;
    default:
      tn(e, t, n);
  }
}
function dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()),
      t.forEach(function (r) {
        var l = zg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Te = s.stateNode), (vt = !1);
              break e;
            case 3:
              (Te = s.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Te = s.stateNode.containerInfo), (vt = !0);
              break e;
          }
          s = s.return;
        }
        if (Te === null) throw Error(L(160));
        om(o, i, l), (Te = null), (vt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        we(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) im(t, e), (t = t.sibling);
}
function im(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), kt(e), r & 4)) {
        try {
          vl(3, e, e.return), _i(3, e);
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          vl(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      ht(t, e), kt(e), r & 512 && n !== null && yr(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        kt(e),
        r & 512 && n !== null && yr(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Cl(l, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Rf(l, o),
              Ks(s, i);
            var c = Ks(s, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                f = u[i + 1];
              d === "style"
                ? Df(l, f)
                : d === "dangerouslySetInnerHTML"
                  ? Lf(l, f)
                  : d === "children"
                    ? Cl(l, f)
                    : Wa(l, d, f, c);
            }
            switch (s) {
              case "input":
                $s(l, o);
                break;
              case "textarea":
                Pf(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Nr(l, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Nr(l, !!o.multiple, o.defaultValue, !0)
                      : Nr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ll] = o;
          } catch (v) {
            we(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ht(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jl(t.containerInfo);
        } catch (v) {
          we(e, e.return, v);
        }
      break;
    case 4:
      ht(t, e), kt(e);
      break;
    case 13:
      ht(t, e),
        kt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Su = Ne())),
        r & 4 && dd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (c = Ae) || d), ht(t, e), (Ae = c)) : ht(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (f = z = d; z !== null; ) {
              switch (((m = z), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vl(4, m, m.return);
                  break;
                case 1:
                  yr(m, m.return);
                  var C = m.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (v) {
                      we(r, n, v);
                    }
                  }
                  break;
                case 5:
                  yr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    pd(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (z = y)) : pd(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (l = f.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Tf("display", i)));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                we(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), kt(e), r & 4 && dd(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Cl(l, ""), (r.flags &= -33));
          var o = cd(e);
          Sa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = cd(e);
          Ca(e, s, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (u) {
      we(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kg(e, t, n) {
  (z = e), sm(e);
}
function sm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xo;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Ae;
        s = xo;
        var c = Ae;
        if (((xo = i), (Ae = u) && !c))
          for (z = l; z !== null; )
            (i = z),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? md(l)
                : u !== null
                  ? ((u.return = i), (z = u))
                  : md(l);
        for (; o !== null; ) (z = o), sm(o), (o = o.sibling);
        (z = l), (xo = s), (Ae = c);
      }
      fd(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : fd(e);
  }
}
function fd(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || _i(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xc(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && jl(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Ae || (t.flags & 512 && Na(t));
      } catch (m) {
        we(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function pd(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function md(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _i(4, t);
          } catch (u) {
            we(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              we(t, l, u);
            }
          }
          var o = t.return;
          try {
            Na(t);
          } catch (u) {
            we(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Na(t);
          } catch (u) {
            we(t, i, u);
          }
      }
    } catch (u) {
      we(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (z = s);
      break;
    }
    z = t.return;
  }
}
var Rg = Math.ceil,
  ui = Yt.ReactCurrentDispatcher,
  Nu = Yt.ReactCurrentOwner,
  ct = Yt.ReactCurrentBatchConfig,
  J = 0,
  Pe = null,
  be = null,
  De = 0,
  et = 0,
  wr = bn(0),
  ke = 0,
  Il = null,
  Hn = 0,
  Li = 0,
  Cu = 0,
  gl = null,
  Ke = null,
  Su = 0,
  zr = 1 / 0,
  Ft = null,
  ci = !1,
  Ea = null,
  yn = null,
  vo = !1,
  fn = null,
  di = 0,
  yl = 0,
  ba = null,
  zo = -1,
  Oo = 0;
function Ve() {
  return J & 6 ? Ne() : zo !== -1 ? zo : (zo = Ne());
}
function wn(e) {
  return e.mode & 1
    ? J & 2 && De !== 0
      ? De & -De
      : dg.transition !== null
        ? (Oo === 0 && (Oo = Hf()), Oo)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zf(e.type))),
          e)
    : 1;
}
function Nt(e, t, n, r) {
  if (50 < yl) throw ((yl = 0), (ba = null), Error(L(185)));
  $l(e, n, r),
    (!(J & 2) || e !== Pe) &&
      (e === Pe && (!(J & 2) && (Li |= n), ke === 4 && cn(e, De)),
      qe(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((zr = Ne() + 500), ki && jn()));
}
function qe(e, t) {
  var n = e.callbackNode;
  dv(e, t);
  var r = Go(e, e === Pe ? De : 0);
  if (r === 0)
    n !== null && Sc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sc(n), t === 1))
      e.tag === 0 ? cg(hd.bind(null, e)) : vp(hd.bind(null, e)),
        ig(function () {
          !(J & 6) && jn();
        }),
        (n = null);
    else {
      switch (Qf(r)) {
        case 1:
          n = Ya;
          break;
        case 4:
          n = Vf;
          break;
        case 16:
          n = Ko;
          break;
        case 536870912:
          n = Wf;
          break;
        default:
          n = Ko;
      }
      n = hm(n, am.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function am(e, t) {
  if (((zo = -1), (Oo = 0), J & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (jr() && e.callbackNode !== n) return null;
  var r = Go(e, e === Pe ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fi(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var o = cm();
    (Pe !== e || De !== t) && ((Ft = null), (zr = Ne() + 500), Un(e, t));
    do
      try {
        Lg();
        break;
      } catch (s) {
        um(e, s);
      }
    while (!0);
    au(),
      (ui.current = o),
      (J = l),
      be !== null ? (t = 0) : ((Pe = null), (De = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Zs(e)), l !== 0 && ((r = l), (t = ja(e, l)))), t === 1)
    )
      throw ((n = Il), Un(e, 0), cn(e, r), qe(e, Ne()), n);
    if (t === 6) cn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Pg(l) &&
          ((t = fi(e, r)),
          t === 2 && ((o = Zs(e)), o !== 0 && ((r = o), (t = ja(e, o)))),
          t === 1))
      )
        throw ((n = Il), Un(e, 0), cn(e, r), qe(e, Ne()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Dn(e, Ke, Ft);
          break;
        case 3:
          if (
            (cn(e, r), (r & 130023424) === r && ((t = Su + 500 - Ne()), 10 < t))
          ) {
            if (Go(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ia(Dn.bind(null, e, Ke, Ft), t);
            break;
          }
          Dn(e, Ke, Ft);
          break;
        case 4:
          if ((cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - wt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Rg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ia(Dn.bind(null, e, Ke, Ft), r);
            break;
          }
          Dn(e, Ke, Ft);
          break;
        case 5:
          Dn(e, Ke, Ft);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return qe(e, Ne()), e.callbackNode === n ? am.bind(null, e) : null;
}
function ja(e, t) {
  var n = gl;
  return (
    e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
    (e = fi(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ka(t)),
    e
  );
}
function ka(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function Pg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ct(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function cn(e, t) {
  for (
    t &= ~Cu,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hd(e) {
  if (J & 6) throw Error(L(327));
  jr();
  var t = Go(e, 0);
  if (!(t & 1)) return qe(e, Ne()), null;
  var n = fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zs(e);
    r !== 0 && ((t = r), (n = ja(e, r)));
  }
  if (n === 1) throw ((n = Il), Un(e, 0), cn(e, t), qe(e, Ne()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, Ke, Ft),
    qe(e, Ne()),
    null
  );
}
function Eu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((zr = Ne() + 500), ki && jn());
  }
}
function Qn(e) {
  fn !== null && fn.tag === 0 && !(J & 6) && jr();
  var t = J;
  J |= 1;
  var n = ct.transition,
    r = ne;
  try {
    if (((ct.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ct.transition = n), (J = t), !(J & 6) && jn();
  }
}
function bu() {
  (et = wr.current), ce(wr);
}
function Un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), og(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jo();
          break;
        case 3:
          Dr(), ce(Ye), ce(Fe), mu();
          break;
        case 5:
          pu(r);
          break;
        case 4:
          Dr();
          break;
        case 13:
          ce(he);
          break;
        case 19:
          ce(he);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          bu();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (be = e = Nn(e.current, null)),
    (De = et = t),
    (ke = 0),
    (Il = null),
    (Cu = Li = Hn = 0),
    (Ke = gl = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    In = null;
  }
  return e;
}
function um(e, t) {
  do {
    var n = be;
    try {
      if ((au(), (To.current = ai), si)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        si = !1;
      }
      if (
        ((Wn = 0),
        (Re = je = xe = null),
        (xl = !1),
        (Ml = 0),
        (Nu.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (Il = t), (be = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = De),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = s,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = nd(i);
          if (y !== null) {
            (y.flags &= -257),
              rd(y, i, s, o, t),
              y.mode & 1 && td(o, c, t),
              (t = y),
              (u = c);
            var C = t.updateQueue;
            if (C === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else C.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              td(o, c, t), ju();
              break e;
            }
            u = Error(L(426));
          }
        } else if (pe && s.mode & 1) {
          var b = nd(i);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              rd(b, i, s, o, t),
              iu(Mr(u, s));
            break e;
          }
        }
        (o = u = Mr(u, s)),
          ke !== 4 && (ke = 2),
          gl === null ? (gl = [o]) : gl.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var x = Qp(o, u, t);
              Yc(o, x);
              break e;
            case 1:
              s = u;
              var p = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (yn === null || !yn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Kp(o, s, t);
                Yc(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      fm(n);
    } catch (k) {
      (t = k), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cm() {
  var e = ui.current;
  return (ui.current = ai), e === null ? ai : e;
}
function ju() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Pe === null || (!(Hn & 268435455) && !(Li & 268435455)) || cn(Pe, De);
}
function fi(e, t) {
  var n = J;
  J |= 2;
  var r = cm();
  (Pe !== e || De !== t) && ((Ft = null), Un(e, t));
  do
    try {
      _g();
      break;
    } catch (l) {
      um(e, l);
    }
  while (!0);
  if ((au(), (J = n), (ui.current = r), be !== null)) throw Error(L(261));
  return (Pe = null), (De = 0), ke;
}
function _g() {
  for (; be !== null; ) dm(be);
}
function Lg() {
  for (; be !== null && !nv(); ) dm(be);
}
function dm(e) {
  var t = mm(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? fm(e) : (be = t),
    (Nu.current = null);
}
function fm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Eg(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (be = null);
        return;
      }
    } else if (((n = Sg(n, t, et)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function Dn(e, t, n) {
  var r = ne,
    l = ct.transition;
  try {
    (ct.transition = null), (ne = 1), Tg(e, t, n, r);
  } finally {
    (ct.transition = l), (ne = r);
  }
  return null;
}
function Tg(e, t, n, r) {
  do jr();
  while (fn !== null);
  if (J & 6) throw Error(L(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (fv(e, o),
    e === Pe && ((be = Pe = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vo ||
      ((vo = !0),
      hm(Ko, function () {
        return jr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var i = ne;
    ne = 1;
    var s = J;
    (J |= 4),
      (Nu.current = null),
      jg(e, n),
      im(n, e),
      Zv(la),
      (Yo = !!ra),
      (la = ra = null),
      (e.current = n),
      kg(n),
      rv(),
      (J = s),
      (ne = i),
      (ct.transition = o);
  } else e.current = n;
  if (
    (vo && ((vo = !1), (fn = e), (di = l)),
    (o = e.pendingLanes),
    o === 0 && (yn = null),
    iv(n.stateNode),
    qe(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ci) throw ((ci = !1), (e = Ea), (Ea = null), e);
  return (
    di & 1 && e.tag !== 0 && jr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ba ? yl++ : ((yl = 0), (ba = e))) : (yl = 0),
    jn(),
    null
  );
}
function jr() {
  if (fn !== null) {
    var e = Qf(di),
      t = ct.transition,
      n = ne;
    try {
      if (((ct.transition = null), (ne = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (di = 0), J & 6)) throw Error(L(331));
        var l = J;
        for (J |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (z = c; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vl(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (z = f);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var m = d.sibling,
                        y = d.return;
                      if ((rm(d), d === c)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (z = m);
                        break;
                      }
                      z = y;
                    }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var v = C.child;
                if (v !== null) {
                  C.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vl(9, o, o.return);
                }
              var x = o.sibling;
              if (x !== null) {
                (x.return = o.return), (z = x);
                break e;
              }
              z = o.return;
            }
        }
        var p = e.current;
        for (z = p; z !== null; ) {
          i = z;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (z = g);
          else
            e: for (i = p; z !== null; ) {
              if (((s = z), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(9, s);
                  }
                } catch (k) {
                  we(s, s.return, k);
                }
              if (s === i) {
                z = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (z = S);
                break e;
              }
              z = s.return;
            }
        }
        if (
          ((J = l), jn(), Lt && typeof Lt.onPostCommitFiberRoot == "function")
        )
          try {
            Lt.onPostCommitFiberRoot(Ci, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ct.transition = t);
    }
  }
  return !1;
}
function xd(e, t, n) {
  (t = Mr(n, t)),
    (t = Qp(e, t, 1)),
    (e = gn(e, t, 1)),
    (t = Ve()),
    e !== null && ($l(e, 1, t), qe(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) xd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Mr(n, e)),
            (e = Kp(t, e, 1)),
            (t = gn(t, e, 1)),
            (e = Ve()),
            t !== null && ($l(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Dg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (De & n) === n &&
      (ke === 4 || (ke === 3 && (De & 130023424) === De && 500 > Ne() - Su)
        ? Un(e, 0)
        : (Cu |= n)),
    qe(e, t);
}
function pm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = io), (io <<= 1), !(io & 130023424) && (io = 4194304))
      : (t = 1));
  var n = Ve();
  (e = Kt(e, t)), e !== null && ($l(e, t, n), qe(e, n));
}
function Mg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), pm(e, n);
}
function zg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), pm(e, n);
}
var mm;
mm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), Cg(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), pe && t.flags & 1048576 && gp(t, ni, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Mo(e, t), (e = t.pendingProps);
      var l = _r(t, Fe.current);
      br(t, n), (l = xu(null, t, r, e, l, n));
      var o = vu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((o = !0), ei(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            du(t),
            (l.updater = Pi),
            (t.stateNode = l),
            (l._reactInternals = t),
            pa(t, r, e, n),
            (t = xa(null, t, r, !0, o, n)))
          : ((t.tag = 0), pe && o && lu(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Mo(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ig(r)),
          (e = xt(r, e)),
          l)
        ) {
          case 0:
            t = ha(null, t, r, e, n);
            break e;
          case 1:
            t = id(null, t, r, e, n);
            break e;
          case 11:
            t = ld(null, t, r, e, n);
            break e;
          case 14:
            t = od(null, t, r, xt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        ha(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        id(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((qp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ep(e, t),
          oi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Mr(Error(L(423)), t)), (t = sd(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Mr(Error(L(424)), t)), (t = sd(e, t, r, n, l));
            break e;
          } else
            for (
              nt = vn(t.stateNode.containerInfo.firstChild),
                rt = t,
                pe = !0,
                yt = null,
                n = Cp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Lr(), r === l)) {
            t = Gt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bp(t),
        e === null && ca(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        oa(r, l) ? (i = null) : o !== null && oa(r, o) && (t.flags |= 32),
        Xp(e, t),
        $e(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ca(t), null;
    case 13:
      return Zp(e, t, n);
    case 4:
      return (
        fu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        ld(e, t, r, l, n)
      );
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          oe(ri, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ct(o.value, i)) {
            if (o.children === l.children && !Ye.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Vt(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      da(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  da(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        br(t, n),
        (l = dt(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = xt(r, t.pendingProps)),
        (l = xt(r.type, l)),
        od(e, t, r, l, n)
      );
    case 15:
      return Gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        Mo(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), ei(t)) : (e = !1),
        br(t, n),
        Hp(t, r, l),
        pa(t, r, l, n),
        xa(null, t, r, !0, e, n)
      );
    case 19:
      return Jp(e, t, n);
    case 22:
      return Yp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function hm(e, t) {
  return $f(e, t);
}
function Og(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Og(e, t, n, r);
}
function ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ig(e) {
  if (typeof e == "function") return ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qa)) return 11;
    if (e === Ka) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Io(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ku(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case cr:
        return Bn(n.children, l, o, t);
      case Ha:
        (i = 8), (l |= 8);
        break;
      case Is:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = Is), (e.lanes = o), e
        );
      case As:
        return (e = ut(13, n, t, l)), (e.elementType = As), (e.lanes = o), e;
      case Fs:
        return (e = ut(19, n, t, l)), (e.elementType = Fs), (e.lanes = o), e;
      case bf:
        return Ti(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Sf:
              i = 10;
              break e;
            case Ef:
              i = 9;
              break e;
            case Qa:
              i = 11;
              break e;
            case Ka:
              i = 14;
              break e;
            case sn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Bn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Ti(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ys(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function ws(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ag(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = es(0)),
    (this.expirationTimes = es(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = es(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ru(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Ag(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    du(o),
    e
  );
}
function Fg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ur,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xm(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return xp(e, n, t);
  }
  return t;
}
function vm(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Ru(n, r, !0, e, l, o, i, s, u)),
    (e.context = xm(null)),
    (n = e.current),
    (r = Ve()),
    (l = wn(n)),
    (o = Vt(r, l)),
    (o.callback = t ?? null),
    gn(n, o, l),
    (e.current.lanes = l),
    $l(e, l, r),
    qe(e, r),
    e
  );
}
function Di(e, t, n, r) {
  var l = t.current,
    o = Ve(),
    i = wn(l);
  return (
    (n = xm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gn(l, t, i)),
    e !== null && (Nt(e, l, i, o), Lo(e, l, i)),
    i
  );
}
function pi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pu(e, t) {
  vd(e, t), (e = e.alternate) && vd(e, t);
}
function Ug() {
  return null;
}
var gm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _u(e) {
  this._internalRoot = e;
}
Mi.prototype.render = _u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Di(e, t, null, null);
};
Mi.prototype.unmount = _u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qn(function () {
      Di(null, e, null, null);
    }),
      (t[Qt] = null);
  }
};
function Mi(e) {
  this._internalRoot = e;
}
Mi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
    un.splice(n, 0, e), n === 0 && qf(e);
  }
};
function Lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gd() {}
function Bg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = pi(i);
        o.call(c);
      };
    }
    var i = vm(t, r, e, 0, null, !1, !1, "", gd);
    return (
      (e._reactRootContainer = i),
      (e[Qt] = i.current),
      Pl(e.nodeType === 8 ? e.parentNode : e),
      Qn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = pi(u);
      s.call(c);
    };
  }
  var u = Ru(e, 0, !1, null, null, !1, !1, "", gd);
  return (
    (e._reactRootContainer = u),
    (e[Qt] = u.current),
    Pl(e.nodeType === 8 ? e.parentNode : e),
    Qn(function () {
      Di(t, u, n, r);
    }),
    u
  );
}
function Oi(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = pi(i);
        s.call(u);
      };
    }
    Di(t, i, e, l);
  } else i = Bg(n, t, e, l, r);
  return pi(i);
}
Kf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = al(t.pendingLanes);
        n !== 0 &&
          (Xa(t, n | 1), qe(t, Ne()), !(J & 6) && ((zr = Ne() + 500), jn()));
      }
      break;
    case 13:
      Qn(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var l = Ve();
          Nt(r, e, 1, l);
        }
      }),
        Pu(e, 1);
  }
};
qa = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Ve();
      Nt(t, e, 134217728, n);
    }
    Pu(e, 134217728);
  }
};
Gf = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Ve();
      Nt(n, e, t, r);
    }
    Pu(e, t);
  }
};
Yf = function () {
  return ne;
};
Xf = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
Ys = function (e, t, n) {
  switch (t) {
    case "input":
      if (($s(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ji(r);
            if (!l) throw Error(L(90));
            kf(r), $s(r, l);
          }
        }
      }
      break;
    case "textarea":
      Pf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nr(e, !!n.multiple, t, !1);
  }
};
Of = Eu;
If = Qn;
var $g = { usingClientEntryPoint: !1, Events: [Wl, mr, ji, Mf, zf, Eu] },
  el = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Vg = {
    bundleType: el.bundleType,
    version: el.version,
    rendererPackageName: el.rendererPackageName,
    rendererConfig: el.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Uf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: el.findFiberByHostInstance || Ug,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!go.isDisabled && go.supportsFiber)
    try {
      (Ci = go.inject(Vg)), (Lt = go);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $g;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(t)) throw Error(L(200));
  return Fg(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!Lu(e)) throw Error(L(299));
  var n = !1,
    r = "",
    l = gm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[Qt] = t.current),
    Pl(e.nodeType === 8 ? e.parentNode : e),
    new _u(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Uf(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return Qn(e);
};
ot.hydrate = function (e, t, n) {
  if (!zi(t)) throw Error(L(200));
  return Oi(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!Lu(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = gm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = vm(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Qt] = t.current),
    Pl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Mi(t);
};
ot.render = function (e, t, n) {
  if (!zi(t)) throw Error(L(200));
  return Oi(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!zi(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Qn(function () {
        Oi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qt] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = Eu;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zi(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Oi(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function ym() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ym);
    } catch (e) {
      console.error(e);
    }
}
ym(), (yf.exports = ot);
var Ii = yf.exports;
const wm = of(Ii),
  Wg = lf({ __proto__: null, default: wm }, [Ii]);
var Nm,
  yd = Ii;
(Nm = yd.createRoot), yd.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var Se;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Se || (Se = {}));
const wd = "popstate";
function Hg(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location;
    return Al(
      "",
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Kn(l);
  }
  return Kg(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Or(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Qg() {
  return Math.random().toString(36).substr(2, 8);
}
function Nd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Al(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? kn(t) : t,
      { state: n, key: (t && t.key) || r || Qg() }
    )
  );
}
function Kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function kn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Kg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = Se.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), i.replaceState(fe({}, i.state, { idx: c }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    s = Se.Pop;
    let b = d(),
      x = b == null ? null : b - c;
    (c = b), u && u({ action: s, location: v.location, delta: x });
  }
  function m(b, x) {
    s = Se.Push;
    let p = Al(v.location, b, x);
    c = d() + 1;
    let g = Nd(p, c),
      S = v.createHref(p);
    try {
      i.pushState(g, "", S);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(S);
    }
    o && u && u({ action: s, location: v.location, delta: 1 });
  }
  function y(b, x) {
    s = Se.Replace;
    let p = Al(v.location, b, x);
    c = d();
    let g = Nd(p, c),
      S = v.createHref(p);
    i.replaceState(g, "", S),
      o && u && u({ action: s, location: v.location, delta: 0 });
  }
  function C(b) {
    let x = l.location.origin !== "null" ? l.location.origin : l.location.href,
      p = typeof b == "string" ? b : Kn(b);
    return (
      (p = p.replace(/ $/, "%20")),
      G(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, x)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(l, i);
    },
    listen(b) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(wd, f),
        (u = b),
        () => {
          l.removeEventListener(wd, f), (u = null);
        }
      );
    },
    createHref(b) {
      return t(l, b);
    },
    createURL: C,
    encodeLocation(b) {
      let x = C(b);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: m,
    replace: y,
    go(b) {
      return i.go(b);
    },
  };
  return v;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const Gg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Yg(e) {
  return e.index === !0;
}
function mi(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, String(o)],
        s = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (G(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        G(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Yg(l))
      ) {
        let u = fe({}, l, t(l), { id: s });
        return (r[s] = u), u;
      } else {
        let u = fe({}, l, t(l), { id: s, children: void 0 });
        return (
          (r[s] = u), l.children && (u.children = mi(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Mn(e, t, n) {
  return n === void 0 && (n = "/"), Ao(e, t, n, !1);
}
function Ao(e, t, n, r) {
  let l = typeof t == "string" ? kn(t) : t,
    o = Mt(l.pathname || "/", n);
  if (o == null) return null;
  let i = Sm(e);
  Xg(i);
  let s = null;
  for (let u = 0; s == null && u < i.length; ++u) {
    let c = s0(o);
    s = o0(i[u], c, r);
  }
  return s;
}
function Cm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Sm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, s) => {
    let u = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (G(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Wt([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Sm(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: r0(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, i) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) l(o, i);
      else for (let u of Em(o.path)) l(o, i, u);
    }),
    t
  );
}
function Em(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Em(r.join("/")),
    s = [];
  return (
    s.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && s.push(...i),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Xg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : l0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qg = /^:[\w-]+$/,
  Zg = 3,
  Jg = 2,
  e0 = 1,
  t0 = 10,
  n0 = -2,
  Cd = (e) => e === "*";
function r0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cd) && (r += n0),
    t && (r += Jg),
    n
      .filter((l) => !Cd(l))
      .reduce((l, o) => l + (qg.test(o) ? Zg : o === "" ? e0 : t0), r)
  );
}
function l0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function o0(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    o = "/",
    i = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      c = s === r.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      f = hi(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      m = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = hi(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(l, f.params),
      i.push({
        params: l,
        pathname: Wt([o, f.pathname]),
        pathnameBase: c0(Wt([o, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (o = Wt([o, f.pathnameBase]));
  }
  return i;
}
function hi(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = i0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: m, isOptional: y } = d;
      if (m === "*") {
        let v = s[f] || "";
        i = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const C = s[f];
      return (
        y && !C ? (c[m] = void 0) : (c[m] = (C || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function i0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Or(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function s0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Or(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function a0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? kn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : u0(n, t)) : t,
    search: d0(r),
    hash: f0(l),
  };
}
function u0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ns(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Tu(e, t) {
  let n = bm(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Du(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = kn(e))
    : ((l = fe({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        Ns("?", "pathname", "search", l)
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        Ns("#", "pathname", "hash", l)
      ),
      G(!l.search || !l.search.includes("#"), Ns("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    s;
  if (i == null) s = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (f -= 1);
      l.pathname = m.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let u = a0(l, s),
    c = i && i !== "/" && i.endsWith("/"),
    d = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"), u;
}
const Wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  c0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  d0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  f0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xi {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ai(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jm = ["post", "put", "patch", "delete"],
  p0 = new Set(jm),
  m0 = ["get", ...jm],
  h0 = new Set(m0),
  x0 = new Set([301, 302, 303, 307, 308]),
  v0 = new Set([307, 308]),
  Cs = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  g0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  tl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Mu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  y0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  km = "remix-router-transitions";
function w0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  G(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let w = e.detectErrorBoundary;
    l = (E) => ({ hasErrorBoundary: w(E) });
  } else l = y0;
  let o = {},
    i = mi(e.routes, l, void 0, o),
    s,
    u = e.basename || "/",
    c = e.dataStrategy || E0,
    d = e.patchRoutesOnNavigation,
    f = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    m = null,
    y = new Set(),
    C = null,
    v = null,
    b = null,
    x = e.hydrationData != null,
    p = Mn(i, e.history.location, u),
    g = null;
  if (p == null && !d) {
    let w = Qe(404, { pathname: e.history.location.pathname }),
      { matches: E, route: j } = Dd(i);
    (p = E), (g = { [j.id]: w });
  }
  p &&
    !e.hydrationData &&
    ql(p, i, e.history.location.pathname).active &&
    (p = null);
  let S;
  if (p)
    if (p.some((w) => w.route.lazy)) S = !1;
    else if (!p.some((w) => w.route.loader)) S = !0;
    else if (f.v7_partialHydration) {
      let w = e.hydrationData ? e.hydrationData.loaderData : null,
        E = e.hydrationData ? e.hydrationData.errors : null;
      if (E) {
        let j = p.findIndex((_) => E[_.route.id] !== void 0);
        S = p.slice(0, j + 1).every((_) => !Pa(_.route, w, E));
      } else S = p.every((j) => !Pa(j.route, w, E));
    } else S = e.hydrationData != null;
  else if (((S = !1), (p = []), f.v7_partialHydration)) {
    let w = ql(null, i, e.history.location.pathname);
    w.active && w.matches && (p = w.matches);
  }
  let k,
    N = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: S,
      navigation: Cs,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = Se.Pop,
    R = !1,
    D,
    T = !1,
    q = new Map(),
    V = null,
    me = !1,
    ie = !1,
    pt = [],
    Je = new Set(),
    de = new Map(),
    M = 0,
    $ = -1,
    W = new Map(),
    Q = new Set(),
    se = new Map(),
    bt = new Map(),
    _e = new Set(),
    mt = new Map(),
    Ue = new Map(),
    zt;
  function nx() {
    if (
      ((m = e.history.listen((w) => {
        let { action: E, location: j, delta: _ } = w;
        if (zt) {
          zt(), (zt = void 0);
          return;
        }
        Or(
          Ue.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let O = sc({
          currentLocation: N.location,
          nextLocation: j,
          historyAction: E,
        });
        if (O && _ != null) {
          let U = new Promise((H) => {
            zt = H;
          });
          e.history.go(_ * -1),
            Xl(O, {
              state: "blocked",
              location: j,
              proceed() {
                Xl(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: j,
                }),
                  U.then(() => e.history.go(_));
              },
              reset() {
                let H = new Map(N.blockers);
                H.set(O, tl), Be({ blockers: H });
              },
            });
          return;
        }
        return Pn(E, j);
      })),
      n)
    ) {
      A0(t, q);
      let w = () => F0(t, q);
      t.addEventListener("pagehide", w),
        (V = () => t.removeEventListener("pagehide", w));
    }
    return N.initialized || Pn(Se.Pop, N.location, { initialHydration: !0 }), k;
  }
  function rx() {
    m && m(),
      V && V(),
      y.clear(),
      D && D.abort(),
      N.fetchers.forEach((w, E) => Yl(E)),
      N.blockers.forEach((w, E) => ic(E));
  }
  function lx(w) {
    return y.add(w), () => y.delete(w);
  }
  function Be(w, E) {
    E === void 0 && (E = {}), (N = fe({}, N, w));
    let j = [],
      _ = [];
    f.v7_fetcherPersist &&
      N.fetchers.forEach((O, U) => {
        O.state === "idle" && (_e.has(U) ? _.push(U) : j.push(U));
      }),
      [...y].forEach((O) =>
        O(N, {
          deletedFetchers: _,
          viewTransitionOpts: E.viewTransitionOpts,
          flushSync: E.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (j.forEach((O) => N.fetchers.delete(O)), _.forEach((O) => Yl(O)));
  }
  function er(w, E, j) {
    var _, O;
    let { flushSync: U } = j === void 0 ? {} : j,
      H =
        N.actionData != null &&
        N.navigation.formMethod != null &&
        gt(N.navigation.formMethod) &&
        N.navigation.state === "loading" &&
        ((_ = w.state) == null ? void 0 : _._isRedirect) !== !0,
      A;
    E.actionData
      ? Object.keys(E.actionData).length > 0
        ? (A = E.actionData)
        : (A = null)
      : H
        ? (A = N.actionData)
        : (A = null);
    let F = E.loaderData
        ? Ld(N.loaderData, E.loaderData, E.matches || [], E.errors)
        : N.loaderData,
      I = N.blockers;
    I.size > 0 && ((I = new Map(I)), I.forEach((Z, Le) => I.set(Le, tl)));
    let B =
      R === !0 ||
      (N.navigation.formMethod != null &&
        gt(N.navigation.formMethod) &&
        ((O = w.state) == null ? void 0 : O._isRedirect) !== !0);
    s && ((i = s), (s = void 0)),
      me ||
        P === Se.Pop ||
        (P === Se.Push
          ? e.history.push(w, w.state)
          : P === Se.Replace && e.history.replace(w, w.state));
    let X;
    if (P === Se.Pop) {
      let Z = q.get(N.location.pathname);
      Z && Z.has(w.pathname)
        ? (X = { currentLocation: N.location, nextLocation: w })
        : q.has(w.pathname) &&
          (X = { currentLocation: w, nextLocation: N.location });
    } else if (T) {
      let Z = q.get(N.location.pathname);
      Z
        ? Z.add(w.pathname)
        : ((Z = new Set([w.pathname])), q.set(N.location.pathname, Z)),
        (X = { currentLocation: N.location, nextLocation: w });
    }
    Be(
      fe({}, E, {
        actionData: A,
        loaderData: F,
        historyAction: P,
        location: w,
        initialized: !0,
        navigation: Cs,
        revalidation: "idle",
        restoreScrollPosition: uc(w, E.matches || N.matches),
        preventScrollReset: B,
        blockers: I,
      }),
      { viewTransitionOpts: X, flushSync: U === !0 }
    ),
      (P = Se.Pop),
      (R = !1),
      (T = !1),
      (me = !1),
      (ie = !1),
      (pt = []);
  }
  async function Ju(w, E) {
    if (typeof w == "number") {
      e.history.go(w);
      return;
    }
    let j = Ra(
        N.location,
        N.matches,
        u,
        f.v7_prependBasename,
        w,
        f.v7_relativeSplatPath,
        E == null ? void 0 : E.fromRouteId,
        E == null ? void 0 : E.relative
      ),
      {
        path: _,
        submission: O,
        error: U,
      } = Sd(f.v7_normalizeFormMethod, !1, j, E),
      H = N.location,
      A = Al(N.location, _, E && E.state);
    A = fe({}, A, e.history.encodeLocation(A));
    let F = E && E.replace != null ? E.replace : void 0,
      I = Se.Push;
    F === !0
      ? (I = Se.Replace)
      : F === !1 ||
        (O != null &&
          gt(O.formMethod) &&
          O.formAction === N.location.pathname + N.location.search &&
          (I = Se.Replace));
    let B =
        E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0,
      X = (E && E.flushSync) === !0,
      Z = sc({ currentLocation: H, nextLocation: A, historyAction: I });
    if (Z) {
      Xl(Z, {
        state: "blocked",
        location: A,
        proceed() {
          Xl(Z, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            Ju(w, E);
        },
        reset() {
          let Le = new Map(N.blockers);
          Le.set(Z, tl), Be({ blockers: Le });
        },
      });
      return;
    }
    return await Pn(I, A, {
      submission: O,
      pendingError: U,
      preventScrollReset: B,
      replace: E && E.replace,
      enableViewTransition: E && E.viewTransition,
      flushSync: X,
    });
  }
  function ox() {
    if (
      (Hi(),
      Be({ revalidation: "loading" }),
      N.navigation.state !== "submitting")
    ) {
      if (N.navigation.state === "idle") {
        Pn(N.historyAction, N.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Pn(P || N.historyAction, N.navigation.location, {
        overrideNavigation: N.navigation,
        enableViewTransition: T === !0,
      });
    }
  }
  async function Pn(w, E, j) {
    D && D.abort(),
      (D = null),
      (P = w),
      (me = (j && j.startUninterruptedRevalidation) === !0),
      hx(N.location, N.matches),
      (R = (j && j.preventScrollReset) === !0),
      (T = (j && j.enableViewTransition) === !0);
    let _ = s || i,
      O = j && j.overrideNavigation,
      U = Mn(_, E, u),
      H = (j && j.flushSync) === !0,
      A = ql(U, _, E.pathname);
    if ((A.active && A.matches && (U = A.matches), !U)) {
      let { error: le, notFoundMatches: te, route: ge } = Qi(E.pathname);
      er(
        E,
        { matches: te, loaderData: {}, errors: { [ge.id]: le } },
        { flushSync: H }
      );
      return;
    }
    if (
      N.initialized &&
      !ie &&
      _0(N.location, E) &&
      !(j && j.submission && gt(j.submission.formMethod))
    ) {
      er(E, { matches: U }, { flushSync: H });
      return;
    }
    D = new AbortController();
    let F = or(e.history, E, D.signal, j && j.submission),
      I;
    if (j && j.pendingError)
      I = [zn(U).route.id, { type: re.error, error: j.pendingError }];
    else if (j && j.submission && gt(j.submission.formMethod)) {
      let le = await ix(F, E, j.submission, U, A.active, {
        replace: j.replace,
        flushSync: H,
      });
      if (le.shortCircuited) return;
      if (le.pendingActionResult) {
        let [te, ge] = le.pendingActionResult;
        if (tt(ge) && Ai(ge.error) && ge.error.status === 404) {
          (D = null),
            er(E, {
              matches: le.matches,
              loaderData: {},
              errors: { [te]: ge.error },
            });
          return;
        }
      }
      (U = le.matches || U),
        (I = le.pendingActionResult),
        (O = Ss(E, j.submission)),
        (H = !1),
        (A.active = !1),
        (F = or(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: B,
      matches: X,
      loaderData: Z,
      errors: Le,
    } = await sx(
      F,
      E,
      U,
      A.active,
      O,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      H,
      I
    );
    B ||
      ((D = null),
      er(E, fe({ matches: X || U }, Td(I), { loaderData: Z, errors: Le })));
  }
  async function ix(w, E, j, _, O, U) {
    U === void 0 && (U = {}), Hi();
    let H = O0(E, j);
    if ((Be({ navigation: H }, { flushSync: U.flushSync === !0 }), O)) {
      let I = await Zl(_, E.pathname, w.signal);
      if (I.type === "aborted") return { shortCircuited: !0 };
      if (I.type === "error") {
        let B = zn(I.partialMatches).route.id;
        return {
          matches: I.partialMatches,
          pendingActionResult: [B, { type: re.error, error: I.error }],
        };
      } else if (I.matches) _ = I.matches;
      else {
        let { notFoundMatches: B, error: X, route: Z } = Qi(E.pathname);
        return {
          matches: B,
          pendingActionResult: [Z.id, { type: re.error, error: X }],
        };
      }
    }
    let A,
      F = cl(_, E);
    if (!F.route.action && !F.route.lazy)
      A = {
        type: re.error,
        error: Qe(405, {
          method: w.method,
          pathname: E.pathname,
          routeId: F.route.id,
        }),
      };
    else if (
      ((A = (await Vr("action", N, w, [F], _, null))[F.route.id]),
      w.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Fn(A)) {
      let I;
      return (
        U && U.replace != null
          ? (I = U.replace)
          : (I =
              Rd(A.response.headers.get("Location"), new URL(w.url), u) ===
              N.location.pathname + N.location.search),
        await _n(w, A, !0, { submission: j, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (pn(A)) throw Qe(400, { type: "defer-action" });
    if (tt(A)) {
      let I = zn(_, F.route.id);
      return (
        (U && U.replace) !== !0 && (P = Se.Push),
        { matches: _, pendingActionResult: [I.route.id, A] }
      );
    }
    return { matches: _, pendingActionResult: [F.route.id, A] };
  }
  async function sx(w, E, j, _, O, U, H, A, F, I, B) {
    let X = O || Ss(E, U),
      Z = U || H || zd(X),
      Le = !me && (!f.v7_partialHydration || !F);
    if (_) {
      if (Le) {
        let ye = ec(B);
        Be(fe({ navigation: X }, ye !== void 0 ? { actionData: ye } : {}), {
          flushSync: I,
        });
      }
      let ee = await Zl(j, E.pathname, w.signal);
      if (ee.type === "aborted") return { shortCircuited: !0 };
      if (ee.type === "error") {
        let ye = zn(ee.partialMatches).route.id;
        return {
          matches: ee.partialMatches,
          loaderData: {},
          errors: { [ye]: ee.error },
        };
      } else if (ee.matches) j = ee.matches;
      else {
        let { error: ye, notFoundMatches: nr, route: Qr } = Qi(E.pathname);
        return { matches: nr, loaderData: {}, errors: { [Qr.id]: ye } };
      }
    }
    let le = s || i,
      [te, ge] = bd(
        e.history,
        N,
        j,
        Z,
        E,
        f.v7_partialHydration && F === !0,
        f.v7_skipActionErrorRevalidation,
        ie,
        pt,
        Je,
        _e,
        se,
        Q,
        le,
        u,
        B
      );
    if (
      (Ki(
        (ee) =>
          !(j && j.some((ye) => ye.route.id === ee)) ||
          (te && te.some((ye) => ye.route.id === ee))
      ),
      ($ = ++M),
      te.length === 0 && ge.length === 0)
    ) {
      let ee = lc();
      return (
        er(
          E,
          fe(
            {
              matches: j,
              loaderData: {},
              errors: B && tt(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            Td(B),
            ee ? { fetchers: new Map(N.fetchers) } : {}
          ),
          { flushSync: I }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Le) {
      let ee = {};
      if (!_) {
        ee.navigation = X;
        let ye = ec(B);
        ye !== void 0 && (ee.actionData = ye);
      }
      ge.length > 0 && (ee.fetchers = ax(ge)), Be(ee, { flushSync: I });
    }
    ge.forEach((ee) => {
      en(ee.key), ee.controller && de.set(ee.key, ee.controller);
    });
    let tr = () => ge.forEach((ee) => en(ee.key));
    D && D.signal.addEventListener("abort", tr);
    let { loaderResults: Wr, fetcherResults: It } = await tc(N, j, te, ge, w);
    if (w.signal.aborted) return { shortCircuited: !0 };
    D && D.signal.removeEventListener("abort", tr),
      ge.forEach((ee) => de.delete(ee.key));
    let jt = yo(Wr);
    if (jt)
      return await _n(w, jt.result, !0, { replace: A }), { shortCircuited: !0 };
    if (((jt = yo(It)), jt))
      return (
        Q.add(jt.key),
        await _n(w, jt.result, !0, { replace: A }),
        { shortCircuited: !0 }
      );
    let { loaderData: Gi, errors: Hr } = _d(N, j, Wr, B, ge, It, mt);
    mt.forEach((ee, ye) => {
      ee.subscribe((nr) => {
        (nr || ee.done) && mt.delete(ye);
      });
    }),
      f.v7_partialHydration && F && N.errors && (Hr = fe({}, N.errors, Hr));
    let Ln = lc(),
      Jl = oc($),
      eo = Ln || Jl || ge.length > 0;
    return fe(
      { matches: j, loaderData: Gi, errors: Hr },
      eo ? { fetchers: new Map(N.fetchers) } : {}
    );
  }
  function ec(w) {
    if (w && !tt(w[1])) return { [w[0]]: w[1].data };
    if (N.actionData)
      return Object.keys(N.actionData).length === 0 ? null : N.actionData;
  }
  function ax(w) {
    return (
      w.forEach((E) => {
        let j = N.fetchers.get(E.key),
          _ = nl(void 0, j ? j.data : void 0);
        N.fetchers.set(E.key, _);
      }),
      new Map(N.fetchers)
    );
  }
  function ux(w, E, j, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    en(w);
    let O = (_ && _.flushSync) === !0,
      U = s || i,
      H = Ra(
        N.location,
        N.matches,
        u,
        f.v7_prependBasename,
        j,
        f.v7_relativeSplatPath,
        E,
        _ == null ? void 0 : _.relative
      ),
      A = Mn(U, H, u),
      F = ql(A, U, H);
    if ((F.active && F.matches && (A = F.matches), !A)) {
      Ot(w, E, Qe(404, { pathname: H }), { flushSync: O });
      return;
    }
    let {
      path: I,
      submission: B,
      error: X,
    } = Sd(f.v7_normalizeFormMethod, !0, H, _);
    if (X) {
      Ot(w, E, X, { flushSync: O });
      return;
    }
    let Z = cl(A, I),
      Le = (_ && _.preventScrollReset) === !0;
    if (B && gt(B.formMethod)) {
      cx(w, E, I, Z, A, F.active, O, Le, B);
      return;
    }
    se.set(w, { routeId: E, path: I }), dx(w, E, I, Z, A, F.active, O, Le, B);
  }
  async function cx(w, E, j, _, O, U, H, A, F) {
    Hi(), se.delete(w);
    function I(Ce) {
      if (!Ce.route.action && !Ce.route.lazy) {
        let rr = Qe(405, { method: F.formMethod, pathname: j, routeId: E });
        return Ot(w, E, rr, { flushSync: H }), !0;
      }
      return !1;
    }
    if (!U && I(_)) return;
    let B = N.fetchers.get(w);
    Jt(w, I0(F, B), { flushSync: H });
    let X = new AbortController(),
      Z = or(e.history, j, X.signal, F);
    if (U) {
      let Ce = await Zl(O, j, Z.signal);
      if (Ce.type === "aborted") return;
      if (Ce.type === "error") {
        Ot(w, E, Ce.error, { flushSync: H });
        return;
      } else if (Ce.matches) {
        if (((O = Ce.matches), (_ = cl(O, j)), I(_))) return;
      } else {
        Ot(w, E, Qe(404, { pathname: j }), { flushSync: H });
        return;
      }
    }
    de.set(w, X);
    let Le = M,
      te = (await Vr("action", N, Z, [_], O, w))[_.route.id];
    if (Z.signal.aborted) {
      de.get(w) === X && de.delete(w);
      return;
    }
    if (f.v7_fetcherPersist && _e.has(w)) {
      if (Fn(te) || tt(te)) {
        Jt(w, ln(void 0));
        return;
      }
    } else {
      if (Fn(te))
        if ((de.delete(w), $ > Le)) {
          Jt(w, ln(void 0));
          return;
        } else
          return (
            Q.add(w),
            Jt(w, nl(F)),
            _n(Z, te, !1, { fetcherSubmission: F, preventScrollReset: A })
          );
      if (tt(te)) {
        Ot(w, E, te.error);
        return;
      }
    }
    if (pn(te)) throw Qe(400, { type: "defer-action" });
    let ge = N.navigation.location || N.location,
      tr = or(e.history, ge, X.signal),
      Wr = s || i,
      It =
        N.navigation.state !== "idle"
          ? Mn(Wr, N.navigation.location, u)
          : N.matches;
    G(It, "Didn't find any matches after fetcher action");
    let jt = ++M;
    W.set(w, jt);
    let Gi = nl(F, te.data);
    N.fetchers.set(w, Gi);
    let [Hr, Ln] = bd(
      e.history,
      N,
      It,
      F,
      ge,
      !1,
      f.v7_skipActionErrorRevalidation,
      ie,
      pt,
      Je,
      _e,
      se,
      Q,
      Wr,
      u,
      [_.route.id, te]
    );
    Ln.filter((Ce) => Ce.key !== w).forEach((Ce) => {
      let rr = Ce.key,
        cc = N.fetchers.get(rr),
        gx = nl(void 0, cc ? cc.data : void 0);
      N.fetchers.set(rr, gx),
        en(rr),
        Ce.controller && de.set(rr, Ce.controller);
    }),
      Be({ fetchers: new Map(N.fetchers) });
    let Jl = () => Ln.forEach((Ce) => en(Ce.key));
    X.signal.addEventListener("abort", Jl);
    let { loaderResults: eo, fetcherResults: ee } = await tc(N, It, Hr, Ln, tr);
    if (X.signal.aborted) return;
    X.signal.removeEventListener("abort", Jl),
      W.delete(w),
      de.delete(w),
      Ln.forEach((Ce) => de.delete(Ce.key));
    let ye = yo(eo);
    if (ye) return _n(tr, ye.result, !1, { preventScrollReset: A });
    if (((ye = yo(ee)), ye))
      return Q.add(ye.key), _n(tr, ye.result, !1, { preventScrollReset: A });
    let { loaderData: nr, errors: Qr } = _d(N, It, eo, void 0, Ln, ee, mt);
    if (N.fetchers.has(w)) {
      let Ce = ln(te.data);
      N.fetchers.set(w, Ce);
    }
    oc(jt),
      N.navigation.state === "loading" && jt > $
        ? (G(P, "Expected pending action"),
          D && D.abort(),
          er(N.navigation.location, {
            matches: It,
            loaderData: nr,
            errors: Qr,
            fetchers: new Map(N.fetchers),
          }))
        : (Be({
            errors: Qr,
            loaderData: Ld(N.loaderData, nr, It, Qr),
            fetchers: new Map(N.fetchers),
          }),
          (ie = !1));
  }
  async function dx(w, E, j, _, O, U, H, A, F) {
    let I = N.fetchers.get(w);
    Jt(w, nl(F, I ? I.data : void 0), { flushSync: H });
    let B = new AbortController(),
      X = or(e.history, j, B.signal);
    if (U) {
      let te = await Zl(O, j, X.signal);
      if (te.type === "aborted") return;
      if (te.type === "error") {
        Ot(w, E, te.error, { flushSync: H });
        return;
      } else if (te.matches) (O = te.matches), (_ = cl(O, j));
      else {
        Ot(w, E, Qe(404, { pathname: j }), { flushSync: H });
        return;
      }
    }
    de.set(w, B);
    let Z = M,
      le = (await Vr("loader", N, X, [_], O, w))[_.route.id];
    if (
      (pn(le) && (le = (await zu(le, X.signal, !0)) || le),
      de.get(w) === B && de.delete(w),
      !X.signal.aborted)
    ) {
      if (_e.has(w)) {
        Jt(w, ln(void 0));
        return;
      }
      if (Fn(le))
        if ($ > Z) {
          Jt(w, ln(void 0));
          return;
        } else {
          Q.add(w), await _n(X, le, !1, { preventScrollReset: A });
          return;
        }
      if (tt(le)) {
        Ot(w, E, le.error);
        return;
      }
      G(!pn(le), "Unhandled fetcher deferred data"), Jt(w, ln(le.data));
    }
  }
  async function _n(w, E, j, _) {
    let {
      submission: O,
      fetcherSubmission: U,
      preventScrollReset: H,
      replace: A,
    } = _ === void 0 ? {} : _;
    E.response.headers.has("X-Remix-Revalidate") && (ie = !0);
    let F = E.response.headers.get("Location");
    G(F, "Expected a Location header on the redirect Response"),
      (F = Rd(F, new URL(w.url), u));
    let I = Al(N.location, F, { _isRedirect: !0 });
    if (n) {
      let te = !1;
      if (E.response.headers.has("X-Remix-Reload-Document")) te = !0;
      else if (Mu.test(F)) {
        const ge = e.history.createURL(F);
        te = ge.origin !== t.location.origin || Mt(ge.pathname, u) == null;
      }
      if (te) {
        A ? t.location.replace(F) : t.location.assign(F);
        return;
      }
    }
    D = null;
    let B =
        A === !0 || E.response.headers.has("X-Remix-Replace")
          ? Se.Replace
          : Se.Push,
      { formMethod: X, formAction: Z, formEncType: Le } = N.navigation;
    !O && !U && X && Z && Le && (O = zd(N.navigation));
    let le = O || U;
    if (v0.has(E.response.status) && le && gt(le.formMethod))
      await Pn(B, I, {
        submission: fe({}, le, { formAction: F }),
        preventScrollReset: H || R,
        enableViewTransition: j ? T : void 0,
      });
    else {
      let te = Ss(I, O);
      await Pn(B, I, {
        overrideNavigation: te,
        fetcherSubmission: U,
        preventScrollReset: H || R,
        enableViewTransition: j ? T : void 0,
      });
    }
  }
  async function Vr(w, E, j, _, O, U) {
    let H,
      A = {};
    try {
      H = await b0(c, w, E, j, _, O, U, o, l);
    } catch (F) {
      return (
        _.forEach((I) => {
          A[I.route.id] = { type: re.error, error: F };
        }),
        A
      );
    }
    for (let [F, I] of Object.entries(H))
      if (L0(I)) {
        let B = I.result;
        A[F] = {
          type: re.redirect,
          response: R0(B, j, F, O, u, f.v7_relativeSplatPath),
        };
      } else A[F] = await k0(I);
    return A;
  }
  async function tc(w, E, j, _, O) {
    let U = w.matches,
      H = Vr("loader", w, O, j, E, null),
      A = Promise.all(
        _.map(async (B) => {
          if (B.matches && B.match && B.controller) {
            let Z = (
              await Vr(
                "loader",
                w,
                or(e.history, B.path, B.controller.signal),
                [B.match],
                B.matches,
                B.key
              )
            )[B.match.route.id];
            return { [B.key]: Z };
          } else
            return Promise.resolve({
              [B.key]: { type: re.error, error: Qe(404, { pathname: B.path }) },
            });
        })
      ),
      F = await H,
      I = (await A).reduce((B, X) => Object.assign(B, X), {});
    return (
      await Promise.all([M0(E, F, O.signal, U, w.loaderData), z0(E, I, _)]),
      { loaderResults: F, fetcherResults: I }
    );
  }
  function Hi() {
    (ie = !0),
      pt.push(...Ki()),
      se.forEach((w, E) => {
        de.has(E) && Je.add(E), en(E);
      });
  }
  function Jt(w, E, j) {
    j === void 0 && (j = {}),
      N.fetchers.set(w, E),
      Be(
        { fetchers: new Map(N.fetchers) },
        { flushSync: (j && j.flushSync) === !0 }
      );
  }
  function Ot(w, E, j, _) {
    _ === void 0 && (_ = {});
    let O = zn(N.matches, E);
    Yl(w),
      Be(
        { errors: { [O.route.id]: j }, fetchers: new Map(N.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function nc(w) {
    return (
      f.v7_fetcherPersist &&
        (bt.set(w, (bt.get(w) || 0) + 1), _e.has(w) && _e.delete(w)),
      N.fetchers.get(w) || g0
    );
  }
  function Yl(w) {
    let E = N.fetchers.get(w);
    de.has(w) && !(E && E.state === "loading" && W.has(w)) && en(w),
      se.delete(w),
      W.delete(w),
      Q.delete(w),
      _e.delete(w),
      Je.delete(w),
      N.fetchers.delete(w);
  }
  function fx(w) {
    if (f.v7_fetcherPersist) {
      let E = (bt.get(w) || 0) - 1;
      E <= 0 ? (bt.delete(w), _e.add(w)) : bt.set(w, E);
    } else Yl(w);
    Be({ fetchers: new Map(N.fetchers) });
  }
  function en(w) {
    let E = de.get(w);
    E && (E.abort(), de.delete(w));
  }
  function rc(w) {
    for (let E of w) {
      let j = nc(E),
        _ = ln(j.data);
      N.fetchers.set(E, _);
    }
  }
  function lc() {
    let w = [],
      E = !1;
    for (let j of Q) {
      let _ = N.fetchers.get(j);
      G(_, "Expected fetcher: " + j),
        _.state === "loading" && (Q.delete(j), w.push(j), (E = !0));
    }
    return rc(w), E;
  }
  function oc(w) {
    let E = [];
    for (let [j, _] of W)
      if (_ < w) {
        let O = N.fetchers.get(j);
        G(O, "Expected fetcher: " + j),
          O.state === "loading" && (en(j), W.delete(j), E.push(j));
      }
    return rc(E), E.length > 0;
  }
  function px(w, E) {
    let j = N.blockers.get(w) || tl;
    return Ue.get(w) !== E && Ue.set(w, E), j;
  }
  function ic(w) {
    N.blockers.delete(w), Ue.delete(w);
  }
  function Xl(w, E) {
    let j = N.blockers.get(w) || tl;
    G(
      (j.state === "unblocked" && E.state === "blocked") ||
        (j.state === "blocked" && E.state === "blocked") ||
        (j.state === "blocked" && E.state === "proceeding") ||
        (j.state === "blocked" && E.state === "unblocked") ||
        (j.state === "proceeding" && E.state === "unblocked"),
      "Invalid blocker state transition: " + j.state + " -> " + E.state
    );
    let _ = new Map(N.blockers);
    _.set(w, E), Be({ blockers: _ });
  }
  function sc(w) {
    let { currentLocation: E, nextLocation: j, historyAction: _ } = w;
    if (Ue.size === 0) return;
    Ue.size > 1 && Or(!1, "A router only supports one blocker at a time");
    let O = Array.from(Ue.entries()),
      [U, H] = O[O.length - 1],
      A = N.blockers.get(U);
    if (
      !(A && A.state === "proceeding") &&
      H({ currentLocation: E, nextLocation: j, historyAction: _ })
    )
      return U;
  }
  function Qi(w) {
    let E = Qe(404, { pathname: w }),
      j = s || i,
      { matches: _, route: O } = Dd(j);
    return Ki(), { notFoundMatches: _, route: O, error: E };
  }
  function Ki(w) {
    let E = [];
    return (
      mt.forEach((j, _) => {
        (!w || w(_)) && (j.cancel(), E.push(_), mt.delete(_));
      }),
      E
    );
  }
  function mx(w, E, j) {
    if (((C = w), (b = E), (v = j || null), !x && N.navigation === Cs)) {
      x = !0;
      let _ = uc(N.location, N.matches);
      _ != null && Be({ restoreScrollPosition: _ });
    }
    return () => {
      (C = null), (b = null), (v = null);
    };
  }
  function ac(w, E) {
    return (
      (v &&
        v(
          w,
          E.map((_) => Cm(_, N.loaderData))
        )) ||
      w.key
    );
  }
  function hx(w, E) {
    if (C && b) {
      let j = ac(w, E);
      C[j] = b();
    }
  }
  function uc(w, E) {
    if (C) {
      let j = ac(w, E),
        _ = C[j];
      if (typeof _ == "number") return _;
    }
    return null;
  }
  function ql(w, E, j) {
    if (d)
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: Ao(E, j, u, !0) };
      } else return { active: !0, matches: Ao(E, j, u, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Zl(w, E, j) {
    if (!d) return { type: "success", matches: w };
    let _ = w;
    for (;;) {
      let O = s == null,
        U = s || i,
        H = o;
      try {
        await d({
          path: E,
          matches: _,
          patch: (I, B) => {
            j.aborted || kd(I, B, U, H, l);
          },
        });
      } catch (I) {
        return { type: "error", error: I, partialMatches: _ };
      } finally {
        O && !j.aborted && (i = [...i]);
      }
      if (j.aborted) return { type: "aborted" };
      let A = Mn(U, E, u);
      if (A) return { type: "success", matches: A };
      let F = Ao(U, E, u, !0);
      if (
        !F ||
        (_.length === F.length &&
          _.every((I, B) => I.route.id === F[B].route.id))
      )
        return { type: "success", matches: null };
      _ = F;
    }
  }
  function xx(w) {
    (o = {}), (s = mi(w, l, void 0, o));
  }
  function vx(w, E) {
    let j = s == null;
    kd(w, E, s || i, o, l), j && ((i = [...i]), Be({}));
  }
  return (
    (k = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return N;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: nx,
      subscribe: lx,
      enableScrollRestoration: mx,
      navigate: Ju,
      fetch: ux,
      revalidate: ox,
      createHref: (w) => e.history.createHref(w),
      encodeLocation: (w) => e.history.encodeLocation(w),
      getFetcher: nc,
      deleteFetcher: fx,
      dispose: rx,
      getBlocker: px,
      deleteBlocker: ic,
      patchRoutes: vx,
      _internalFetchControllers: de,
      _internalActiveDeferreds: mt,
      _internalSetRoutes: xx,
    }),
    k
  );
}
function N0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ra(e, t, n, r, l, o, i, s) {
  let u, c;
  if (i) {
    u = [];
    for (let f of t)
      if ((u.push(f), f.route.id === i)) {
        c = f;
        break;
      }
  } else (u = t), (c = t[t.length - 1]);
  let d = Du(l || ".", Tu(u, o), Mt(e.pathname, n) || e.pathname, s === "path");
  if (
    (l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") && c)
  ) {
    let f = Ou(d.search);
    if (c.route.index && !f)
      d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
    else if (!c.route.index && f) {
      let m = new URLSearchParams(d.search),
        y = m.getAll("index");
      m.delete("index"),
        y.filter((v) => v).forEach((v) => m.append("index", v));
      let C = m.toString();
      d.search = C ? "?" + C : "";
    }
  }
  return (
    r &&
      n !== "/" &&
      (d.pathname = d.pathname === "/" ? n : Wt([n, d.pathname])),
    Kn(d)
  );
}
function Sd(e, t, n, r) {
  if (!r || !N0(r)) return { path: n };
  if (r.formMethod && !D0(r.formMethod))
    return { path: n, error: Qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    s = _m(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!gt(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((y, C) => {
                let [v, b] = C;
                return (
                  "" +
                  y +
                  v +
                  "=" +
                  b +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!gt(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  G(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, c;
  if (r.formData) (u = _a(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (u = _a(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (c = Pd(u));
  else if (r.body == null) (u = new URLSearchParams()), (c = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (c = Pd(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: i,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (gt(d.formMethod)) return { path: n, submission: d };
  let f = kn(n);
  return (
    t && f.search && Ou(f.search) && u.append("index", ""),
    (f.search = "?" + u),
    { path: Kn(f), submission: d }
  );
}
function Ed(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((l) => l.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function bd(e, t, n, r, l, o, i, s, u, c, d, f, m, y, C, v) {
  let b = v ? (tt(v[1]) ? v[1].error : v[1].data) : void 0,
    x = e.createURL(t.location),
    p = e.createURL(l),
    g = n;
  o && t.errors
    ? (g = Ed(n, Object.keys(t.errors)[0], !0))
    : v && tt(v[1]) && (g = Ed(n, v[0]));
  let S = v ? v[1].statusCode : void 0,
    k = i && S && S >= 400,
    N = g.filter((R, D) => {
      let { route: T } = R;
      if (T.lazy) return !0;
      if (T.loader == null) return !1;
      if (o) return Pa(T, t.loaderData, t.errors);
      if (
        C0(t.loaderData, t.matches[D], R) ||
        u.some((me) => me === R.route.id)
      )
        return !0;
      let q = t.matches[D],
        V = R;
      return jd(
        R,
        fe(
          {
            currentUrl: x,
            currentParams: q.params,
            nextUrl: p,
            nextParams: V.params,
          },
          r,
          {
            actionResult: b,
            actionStatus: S,
            defaultShouldRevalidate: k
              ? !1
              : s ||
                x.pathname + x.search === p.pathname + p.search ||
                x.search !== p.search ||
                Rm(q, V),
          }
        )
      );
    }),
    P = [];
  return (
    f.forEach((R, D) => {
      if (o || !n.some((ie) => ie.route.id === R.routeId) || d.has(D)) return;
      let T = Mn(y, R.path, C);
      if (!T) {
        P.push({
          key: D,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let q = t.fetchers.get(D),
        V = cl(T, R.path),
        me = !1;
      m.has(D)
        ? (me = !1)
        : c.has(D)
          ? (c.delete(D), (me = !0))
          : q && q.state !== "idle" && q.data === void 0
            ? (me = s)
            : (me = jd(
                V,
                fe(
                  {
                    currentUrl: x,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: p,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: b,
                    actionStatus: S,
                    defaultShouldRevalidate: k ? !1 : s,
                  }
                )
              )),
        me &&
          P.push({
            key: D,
            routeId: R.routeId,
            path: R.path,
            matches: T,
            match: V,
            controller: new AbortController(),
          });
    }),
    [N, P]
  );
}
function Pa(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    l = n != null && n[e.id] !== void 0;
  return !r && l
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !r && !l;
}
function C0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Rm(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function jd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
function kd(e, t, n, r, l) {
  var o;
  let i;
  if (e) {
    let c = r[e];
    G(c, "No route found to patch children into: routeId = " + e),
      c.children || (c.children = []),
      (i = c.children);
  } else i = n;
  let s = t.filter((c) => !i.some((d) => Pm(c, d))),
    u = mi(
      s,
      l,
      [e || "_", "patch", String(((o = i) == null ? void 0 : o.length) || "0")],
      r
    );
  i.push(...u);
}
function Pm(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var l;
            return (l = t.children) == null ? void 0 : l.some((o) => Pm(n, o));
          })
      : !1;
}
async function S0(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  G(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    Or(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Gg.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, fe({}, t(l), { lazy: void 0 }));
}
async function E0(e) {
  let { matches: t } = e,
    n = t.filter((l) => l.shouldLoad);
  return (await Promise.all(n.map((l) => l.resolve()))).reduce(
    (l, o, i) => Object.assign(l, { [n[i].route.id]: o }),
    {}
  );
}
async function b0(e, t, n, r, l, o, i, s, u, c) {
  let d = o.map((y) => (y.route.lazy ? S0(y.route, u, s) : void 0)),
    f = o.map((y, C) => {
      let v = d[C],
        b = l.some((p) => p.route.id === y.route.id);
      return fe({}, y, {
        shouldLoad: b,
        resolve: async (p) => (
          p &&
            r.method === "GET" &&
            (y.route.lazy || y.route.loader) &&
            (b = !0),
          b
            ? j0(t, r, y, v, p, c)
            : Promise.resolve({ type: re.data, result: void 0 })
        ),
      });
    }),
    m = await e({
      matches: f,
      request: r,
      params: o[0].params,
      fetcherKey: i,
      context: c,
    });
  try {
    await Promise.all(d);
  } catch {}
  return m;
}
async function j0(e, t, n, r, l, o) {
  let i,
    s,
    u = (c) => {
      let d,
        f = new Promise((C, v) => (d = v));
      (s = () => d()), t.signal.addEventListener("abort", s);
      let m = (C) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : c(
                { request: t, params: n.params, context: o },
                ...(C !== void 0 ? [C] : [])
              ),
        y = (async () => {
          try {
            return { type: "data", result: await (l ? l((v) => m(v)) : m()) };
          } catch (C) {
            return { type: "error", result: C };
          }
        })();
      return Promise.race([y, f]);
    };
  try {
    let c = n.route[e];
    if (r)
      if (c) {
        let d,
          [f] = await Promise.all([
            u(c).catch((m) => {
              d = m;
            }),
            r,
          ]);
        if (d !== void 0) throw d;
        i = f;
      } else if ((await r, (c = n.route[e]), c)) i = await u(c);
      else if (e === "action") {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw Qe(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (c) i = await u(c);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw Qe(404, { pathname: f });
    }
    G(
      i.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: re.error, result: c };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return i;
}
async function k0(e) {
  let { result: t, type: n } = e;
  if (Lm(t)) {
    let c;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (c = null)
          : (c = await t.json())
        : (c = await t.text());
    } catch (d) {
      return { type: re.error, error: d };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new xi(t.status, t.statusText, c),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: c, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error) {
    if (Md(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: re.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new xi(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: re.error, error: t, statusCode: Ai(t) ? t.status : void 0 };
  }
  if (T0(t)) {
    var o, i;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Md(t)) {
    var s, u;
    return {
      type: re.data,
      data: t.data,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: re.data, data: t };
}
function R0(e, t, n, r, l, o) {
  let i = e.headers.get("Location");
  if (
    (G(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Mu.test(i))
  ) {
    let s = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (i = Ra(new URL(t.url), s, l, !0, i, o)), e.headers.set("Location", i);
  }
  return e;
}
function Rd(e, t, n) {
  if (Mu.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Mt(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function or(e, t, n, r) {
  let l = e.createURL(_m(t)).toString(),
    o = { signal: n };
  if (r && gt(r.formMethod)) {
    let { formMethod: i, formEncType: s } = r;
    (o.method = i.toUpperCase()),
      s === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": s })),
          (o.body = JSON.stringify(r.json)))
        : s === "text/plain"
          ? (o.body = r.text)
          : s === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = _a(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function _a(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Pd(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function P0(e, t, n, r, l) {
  let o = {},
    i = null,
    s,
    u = !1,
    c = {},
    d = n && tt(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((f) => {
      if (!(f.route.id in t)) return;
      let m = f.route.id,
        y = t[m];
      if (
        (G(!Fn(y), "Cannot handle redirect results in processLoaderData"),
        tt(y))
      ) {
        let C = y.error;
        d !== void 0 && ((C = d), (d = void 0)), (i = i || {});
        {
          let v = zn(e, m);
          i[v.route.id] == null && (i[v.route.id] = C);
        }
        (o[m] = void 0),
          u || ((u = !0), (s = Ai(y.error) ? y.error.status : 500)),
          y.headers && (c[m] = y.headers);
      } else
        pn(y)
          ? (r.set(m, y.deferredData),
            (o[m] = y.deferredData.data),
            y.statusCode != null &&
              y.statusCode !== 200 &&
              !u &&
              (s = y.statusCode),
            y.headers && (c[m] = y.headers))
          : ((o[m] = y.data),
            y.statusCode && y.statusCode !== 200 && !u && (s = y.statusCode),
            y.headers && (c[m] = y.headers));
    }),
    d !== void 0 && n && ((i = { [n[0]]: d }), (o[n[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: c }
  );
}
function _d(e, t, n, r, l, o, i) {
  let { loaderData: s, errors: u } = P0(t, n, r, i);
  return (
    l.forEach((c) => {
      let { key: d, match: f, controller: m } = c,
        y = o[d];
      if (
        (G(y, "Did not find corresponding fetcher result"),
        !(m && m.signal.aborted))
      )
        if (tt(y)) {
          let C = zn(e.matches, f == null ? void 0 : f.route.id);
          (u && u[C.route.id]) || (u = fe({}, u, { [C.route.id]: y.error })),
            e.fetchers.delete(d);
        } else if (Fn(y)) G(!1, "Unhandled fetcher revalidation redirect");
        else if (pn(y)) G(!1, "Unhandled fetcher deferred data");
        else {
          let C = ln(y.data);
          e.fetchers.set(d, C);
        }
    }),
    { loaderData: s, errors: u }
  );
}
function Ld(e, t, n, r) {
  let l = fe({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Td(e) {
  return e
    ? tt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function zn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Dd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Qe(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: l,
      type: o,
      message: i,
    } = t === void 0 ? {} : t,
    s = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((s = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (u = "defer() is not supported in actions")
            : o === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
        ? ((s = "Forbidden"),
          (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((s = "Not Found"), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((s = "Method Not Allowed"),
            l && n && r
              ? (u =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new xi(e || 500, s, new Error(u), !0)
  );
}
function yo(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (Fn(l)) return { key: r, result: l };
  }
}
function _m(e) {
  let t = typeof e == "string" ? kn(e) : e;
  return Kn(fe({}, t, { hash: "" }));
}
function _0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function L0(e) {
  return Lm(e.result) && x0.has(e.result.status);
}
function pn(e) {
  return e.type === re.deferred;
}
function tt(e) {
  return e.type === re.error;
}
function Fn(e) {
  return (e && e.type) === re.redirect;
}
function Md(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function T0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Lm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function D0(e) {
  return h0.has(e.toLowerCase());
}
function gt(e) {
  return p0.has(e.toLowerCase());
}
async function M0(e, t, n, r, l) {
  let o = Object.entries(t);
  for (let i = 0; i < o.length; i++) {
    let [s, u] = o[i],
      c = e.find((m) => (m == null ? void 0 : m.route.id) === s);
    if (!c) continue;
    let d = r.find((m) => m.route.id === c.route.id),
      f = d != null && !Rm(d, c) && (l && l[c.route.id]) !== void 0;
    pn(u) &&
      f &&
      (await zu(u, n, !1).then((m) => {
        m && (t[s] = m);
      }));
  }
}
async function z0(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: o, controller: i } = n[r],
      s = t[l];
    e.find((c) => (c == null ? void 0 : c.route.id) === o) &&
      pn(s) &&
      (G(
        i,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await zu(s, i.signal, !0).then((c) => {
        c && (t[l] = c);
      }));
  }
}
async function zu(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function Ou(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function cl(e, t) {
  let n = typeof t == "string" ? kn(t).search : t.search;
  if (e[e.length - 1].route.index && Ou(n || "")) return e[e.length - 1];
  let r = bm(e);
  return r[r.length - 1];
}
function zd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Ss(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function O0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function nl(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function I0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function ln(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function A0(e, t) {
  try {
    let n = e.sessionStorage.getItem(km);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function F0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(km, JSON.stringify(n));
    } catch (r) {
      Or(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vi() {
  return (
    (vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vi.apply(this, arguments)
  );
}
const Ql = h.createContext(null),
  Fi = h.createContext(null),
  Xt = h.createContext(null),
  Iu = h.createContext(null),
  Rn = h.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Tm = h.createContext(null);
function U0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Kl() || G(!1);
  let { basename: r, navigator: l } = h.useContext(Xt),
    { hash: o, pathname: i, search: s } = Ui(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Wt([r, i])),
    l.createHref({ pathname: u, search: s, hash: o })
  );
}
function Kl() {
  return h.useContext(Iu) != null;
}
function Jn() {
  return Kl() || G(!1), h.useContext(Iu).location;
}
function Dm(e) {
  h.useContext(Xt).static || h.useLayoutEffect(e);
}
function Mm() {
  let { isDataRoute: e } = h.useContext(Rn);
  return e ? ey() : B0();
}
function B0() {
  Kl() || G(!1);
  let e = h.useContext(Ql),
    { basename: t, future: n, navigator: r } = h.useContext(Xt),
    { matches: l } = h.useContext(Rn),
    { pathname: o } = Jn(),
    i = JSON.stringify(Tu(l, n.v7_relativeSplatPath)),
    s = h.useRef(!1);
  return (
    Dm(() => {
      s.current = !0;
    }),
    h.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = Du(c, JSON.parse(i), o, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Wt([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, i, o, e]
    )
  );
}
const $0 = h.createContext(null);
function V0(e) {
  let t = h.useContext(Rn).outlet;
  return t && h.createElement($0.Provider, { value: e }, t);
}
function Ui(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = h.useContext(Xt),
    { matches: l } = h.useContext(Rn),
    { pathname: o } = Jn(),
    i = JSON.stringify(Tu(l, r.v7_relativeSplatPath));
  return h.useMemo(() => Du(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function W0(e, t, n, r) {
  Kl() || G(!1);
  let { navigator: l } = h.useContext(Xt),
    { matches: o } = h.useContext(Rn),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let c = Jn(),
    d;
  d = c;
  let f = d.pathname || "/",
    m = f;
  if (u !== "/") {
    let v = u.replace(/^\//, "").split("/");
    m = "/" + f.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let y = Mn(e, { pathname: m });
  return Y0(
    y &&
      y.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, s, v.params),
          pathname: Wt([
            u,
            l.encodeLocation
              ? l.encodeLocation(v.pathname).pathname
              : v.pathname,
          ]),
          pathnameBase:
            v.pathnameBase === "/"
              ? u
              : Wt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(v.pathnameBase).pathname
                    : v.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function H0() {
  let e = J0(),
    t = Ai(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return h.createElement(
    h.Fragment,
    null,
    h.createElement("h2", null, "Unexpected Application Error!"),
    h.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? h.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Q0 = h.createElement(H0, null);
class K0 extends h.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? h.createElement(
          Rn.Provider,
          { value: this.props.routeContext },
          h.createElement(Tm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function G0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = h.useContext(Ql);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    h.createElement(Rn.Provider, { value: t }, r)
  );
}
function Y0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    s = (l = n) == null ? void 0 : l.errors;
  if (s != null) {
    let d = i.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0
    );
    d >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: m, errors: y } = n,
          C =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || C) {
          (u = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, f, m) => {
    let y,
      C = !1,
      v = null,
      b = null;
    n &&
      ((y = s && f.route.id ? s[f.route.id] : void 0),
      (v = f.route.errorElement || Q0),
      u &&
        (c < 0 && m === 0
          ? ((C = !0), (b = null))
          : c === m &&
            ((C = !0), (b = f.route.hydrateFallbackElement || null))));
    let x = t.concat(i.slice(0, m + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = v)
            : C
              ? (g = b)
              : f.route.Component
                ? (g = h.createElement(f.route.Component, null))
                : f.route.element
                  ? (g = f.route.element)
                  : (g = d),
          h.createElement(G0, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? h.createElement(K0, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var zm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(zm || {}),
  Ir = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ir || {});
function X0(e) {
  let t = h.useContext(Ql);
  return t || G(!1), t;
}
function Au(e) {
  let t = h.useContext(Fi);
  return t || G(!1), t;
}
function q0(e) {
  let t = h.useContext(Rn);
  return t || G(!1), t;
}
function Om(e) {
  let t = q0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function Im() {
  return Au(Ir.UseNavigation).navigation;
}
function Z0() {
  let { matches: e, loaderData: t } = Au(Ir.UseMatches);
  return h.useMemo(() => e.map((n) => Cm(n, t)), [e, t]);
}
function J0() {
  var e;
  let t = h.useContext(Tm),
    n = Au(Ir.UseRouteError),
    r = Om(Ir.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ey() {
  let { router: e } = X0(zm.UseNavigateStable),
    t = Om(Ir.UseNavigateStable),
    n = h.useRef(!1);
  return (
    Dm(() => {
      n.current = !0;
    }),
    h.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, vi({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ty(e) {
  return V0(e.context);
}
function ny(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Se.Pop,
    navigator: o,
    static: i = !1,
    future: s,
  } = e;
  Kl() && G(!1);
  let u = t.replace(/^\/*/, "/"),
    c = h.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: vi({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, o, i]
    );
  typeof r == "string" && (r = kn(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: m = "",
      state: y = null,
      key: C = "default",
    } = r,
    v = h.useMemo(() => {
      let b = Mt(d, u);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: m, state: y, key: C },
            navigationType: l,
          };
    }, [u, d, f, m, y, C, l]);
  return v == null
    ? null
    : h.createElement(
        Xt.Provider,
        { value: c },
        h.createElement(Iu.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function ry(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: h.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: h.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: h.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gn() {
  return (
    (Gn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gn.apply(this, arguments)
  );
}
function Am(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ly(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function oy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ly(e);
}
const iy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  sy = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  ay = "6";
try {
  window.__reactRouterVersion = ay;
} catch {}
function uy(e, t) {
  return w0({
    basename: void 0,
    future: Gn({}, void 0, { v7_prependBasename: !0 }),
    history: Hg({ window: void 0 }),
    hydrationData: cy(),
    routes: e,
    mapRouteProperties: ry,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function cy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Gn({}, t, { errors: dy(t.errors) })), t;
}
function dy(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new xi(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Fm = h.createContext({ isTransitioning: !1 }),
  fy = h.createContext(new Map()),
  py = "startTransition",
  Od = vf[py],
  my = "flushSync",
  Id = Wg[my];
function hy(e) {
  Od ? Od(e) : e();
}
function rl(e) {
  Id ? Id(e) : e();
}
class xy {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function vy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = h.useState(n.state),
    [i, s] = h.useState(),
    [u, c] = h.useState({ isTransitioning: !1 }),
    [d, f] = h.useState(),
    [m, y] = h.useState(),
    [C, v] = h.useState(),
    b = h.useRef(new Map()),
    { v7_startTransition: x } = r || {},
    p = h.useCallback(
      (R) => {
        x ? hy(R) : R();
      },
      [x]
    ),
    g = h.useCallback(
      (R, D) => {
        let { deletedFetchers: T, flushSync: q, viewTransitionOpts: V } = D;
        T.forEach((ie) => b.current.delete(ie)),
          R.fetchers.forEach((ie, pt) => {
            ie.data !== void 0 && b.current.set(pt, ie.data);
          });
        let me =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!V || me) {
          q ? rl(() => o(R)) : p(() => o(R));
          return;
        }
        if (q) {
          rl(() => {
            m && (d && d.resolve(), m.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: V.currentLocation,
                nextLocation: V.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            rl(() => o(R));
          });
          ie.finished.finally(() => {
            rl(() => {
              f(void 0), y(void 0), s(void 0), c({ isTransitioning: !1 });
            });
          }),
            rl(() => y(ie));
          return;
        }
        m
          ? (d && d.resolve(),
            m.skipTransition(),
            v({
              state: R,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }))
          : (s(R),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: V.currentLocation,
              nextLocation: V.nextLocation,
            }));
      },
      [n.window, m, d, b, p]
    );
  h.useLayoutEffect(() => n.subscribe(g), [n, g]),
    h.useEffect(() => {
      u.isTransitioning && !u.flushSync && f(new xy());
    }, [u]),
    h.useEffect(() => {
      if (d && i && n.window) {
        let R = i,
          D = d.promise,
          T = n.window.document.startViewTransition(async () => {
            p(() => o(R)), await D;
          });
        T.finished.finally(() => {
          f(void 0), y(void 0), s(void 0), c({ isTransitioning: !1 });
        }),
          y(T);
      }
    }, [p, i, d, n.window]),
    h.useEffect(() => {
      d && i && l.location.key === i.location.key && d.resolve();
    }, [d, m, l.location, i]),
    h.useEffect(() => {
      !u.isTransitioning &&
        C &&
        (s(C.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: C.currentLocation,
          nextLocation: C.nextLocation,
        }),
        v(void 0));
    }, [u.isTransitioning, C]),
    h.useEffect(() => {}, []);
  let S = h.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, D, T) =>
          n.navigate(R, {
            state: D,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
        replace: (R, D, T) =>
          n.navigate(R, {
            replace: !0,
            state: D,
            preventScrollReset: T == null ? void 0 : T.preventScrollReset,
          }),
      }),
      [n]
    ),
    k = n.basename || "/",
    N = h.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: k }),
      [n, S, k]
    ),
    P = h.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return h.createElement(
    h.Fragment,
    null,
    h.createElement(
      Ql.Provider,
      { value: N },
      h.createElement(
        Fi.Provider,
        { value: l },
        h.createElement(
          fy.Provider,
          { value: b.current },
          h.createElement(
            Fm.Provider,
            { value: u },
            h.createElement(
              ny,
              {
                basename: k,
                location: l.location,
                navigationType: l.historyAction,
                navigator: S,
                future: P,
              },
              l.initialized || n.future.v7_partialHydration
                ? h.createElement(gy, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const gy = h.memo(yy);
function yy(e) {
  let { routes: t, future: n, state: r } = e;
  return W0(t, void 0, r, n);
}
const wy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ny = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cy = h.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: s,
        target: u,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      m = Am(t, iy),
      { basename: y } = h.useContext(Xt),
      C,
      v = !1;
    if (typeof c == "string" && Ny.test(c) && ((C = c), wy))
      try {
        let g = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          k = Mt(S.pathname, y);
        S.origin === g.origin && k != null
          ? (c = k + S.search + S.hash)
          : (v = !0);
      } catch {}
    let b = U0(c, { relative: l }),
      x = by(c, {
        replace: i,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: l,
        viewTransition: f,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || x(g);
    }
    return h.createElement(
      "a",
      Gn({}, m, { href: C || b, onClick: v || o ? r : p, ref: n, target: u })
    );
  }),
  Fl = h.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: s,
        to: u,
        viewTransition: c,
        children: d,
      } = t,
      f = Am(t, sy),
      m = Ui(u, { relative: f.relative }),
      y = Jn(),
      C = h.useContext(Fi),
      { navigator: v, basename: b } = h.useContext(Xt),
      x = C != null && Ry(m) && c === !0,
      p = v.encodeLocation ? v.encodeLocation(m).pathname : m.pathname,
      g = y.pathname,
      S =
        C && C.navigation && C.navigation.location
          ? C.navigation.location.pathname
          : null;
    l ||
      ((g = g.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (p = p.toLowerCase())),
      S && b && (S = Mt(S, b) || S);
    const k = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let N = g === p || (!i && g.startsWith(p) && g.charAt(k) === "/"),
      P =
        S != null &&
        (S === p || (!i && S.startsWith(p) && S.charAt(p.length) === "/")),
      R = { isActive: N, isPending: P, isTransitioning: x },
      D = N ? r : void 0,
      T;
    typeof o == "function"
      ? (T = o(R))
      : (T = [
          o,
          N ? "active" : null,
          P ? "pending" : null,
          x ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let q = typeof s == "function" ? s(R) : s;
    return h.createElement(
      Cy,
      Gn({}, f, {
        "aria-current": D,
        className: T,
        ref: n,
        style: q,
        to: u,
        viewTransition: c,
      }),
      typeof d == "function" ? d(R) : d
    );
  });
function Sy(e) {
  let { getKey: t, storageKey: n } = e;
  return jy({ getKey: t, storageKey: n }), null;
}
var gi;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(gi || (gi = {}));
var La;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(La || (La = {}));
function Um(e) {
  let t = h.useContext(Ql);
  return t || G(!1), t;
}
function Ey(e) {
  let t = h.useContext(Fi);
  return t || G(!1), t;
}
function by(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    u = Mm(),
    c = Jn(),
    d = Ui(e, { relative: i });
  return h.useCallback(
    (f) => {
      if (oy(f, n)) {
        f.preventDefault();
        let m = r !== void 0 ? r : Kn(c) === Kn(d);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          viewTransition: s,
        });
      }
    },
    [c, u, d, r, l, n, e, o, i, s]
  );
}
const Ad = "react-router-scroll-positions";
let wo = {};
function jy(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = Um(gi.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: o } = Ey(
      La.UseScrollRestoration
    ),
    { basename: i } = h.useContext(Xt),
    s = Jn(),
    u = Z0(),
    c = Im();
  h.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    []
  ),
    ky(
      h.useCallback(() => {
        if (c.state === "idle") {
          let d = (t ? t(s, u) : null) || s.key;
          wo[d] = window.scrollY;
        }
        try {
          sessionStorage.setItem(n || Ad, JSON.stringify(wo));
        } catch {}
        window.history.scrollRestoration = "auto";
      }, [n, t, c.state, s, u])
    ),
    typeof document < "u" &&
      (h.useLayoutEffect(() => {
        try {
          let d = sessionStorage.getItem(n || Ad);
          d && (wo = JSON.parse(d));
        } catch {}
      }, [n]),
      h.useLayoutEffect(() => {
        let d =
            t && i !== "/"
              ? (m, y) =>
                  t(Gn({}, m, { pathname: Mt(m.pathname, i) || m.pathname }), y)
              : t,
          f =
            r == null
              ? void 0
              : r.enableScrollRestoration(wo, () => window.scrollY, d);
        return () => f && f();
      }, [r, i, t]),
      h.useLayoutEffect(() => {
        if (l !== !1) {
          if (typeof l == "number") {
            window.scrollTo(0, l);
            return;
          }
          if (s.hash) {
            let d = document.getElementById(
              decodeURIComponent(s.hash.slice(1))
            );
            if (d) {
              d.scrollIntoView();
              return;
            }
          }
          o !== !0 && window.scrollTo(0, 0);
        }
      }, [s, l, o]));
}
function ky(e, t) {
  let { capture: n } = {};
  h.useEffect(() => {
    let r = n != null ? { capture: n } : void 0;
    return (
      window.addEventListener("pagehide", e, r),
      () => {
        window.removeEventListener("pagehide", e, r);
      }
    );
  }, [e, n]);
}
function Ry(e, t) {
  t === void 0 && (t = {});
  let n = h.useContext(Fm);
  n == null && G(!1);
  let { basename: r } = Um(gi.useViewTransitionState),
    l = Ui(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Mt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Mt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return hi(l.pathname, i) != null || hi(l.pathname, o) != null;
}
function Py() {
  return a.jsx("div", {
    className:
      "absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm",
    children: a.jsx("div", { className: "loader", children: "NICE" }),
  });
}
function Fd({ children: e, to: t, nopx: n }) {
  n = n ?? !0;
  const r = Mm(),
    l = `text-xs md:text-2xs md:font-light 3xl:text-lg ${n ? "3xl:px-10 md:px-5 2md:px-[1.3rem] xl:px-[1.7rem]" : "px-0"} 3xl:py-4 xl:py-3 md:py-[0.6rem] 2md:font-normal 2md:text-[0.65rem] 2md:leading-[0.6rem] text-white hover:text-nouris transition-all duration-200 rounded-full font-medium active:bg-#FFDD0E active:text-black xl:text-base lg:text-sm lg:font-light`;
  return t === "-1"
    ? a.jsx("button", { className: l, onClick: () => r(-1), children: e })
    : a.jsx(Fl, { to: t, className: l, children: e });
}
const _y = "_nav_vca4p_2",
  Ly = { nav: _y },
  Ta = "/assets/logo-DqA9lwXf.png",
  Ud = "/assets/logo-h-white-Da_Qnihx.png";
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Bm = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = h.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: o,
      iconNode: i,
      ...s
    },
    u
  ) =>
    h.createElement(
      "svg",
      {
        ref: u,
        ...Dy,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Bm("lucide", l),
        ...s,
      },
      [
        ...i.map(([c, d]) => h.createElement(c, d)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fu = (e, t) => {
  const n = h.forwardRef(({ className: r, ...l }, o) =>
    h.createElement(My, {
      ref: o,
      iconNode: t,
      className: Bm(`lucide-${Ty(e)}`, r),
      ...l,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = Fu("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oy = Fu("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = Fu("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Ay(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $m(...e) {
  return (t) => e.forEach((n) => Ay(n, t));
}
function St(...e) {
  return h.useCallback($m(...e), e);
}
var Ar = h.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = h.Children.toArray(n),
    o = l.find(Uy);
  if (o) {
    const i = o.props.children,
      s = l.map((u) =>
        u === o
          ? h.Children.count(i) > 1
            ? h.Children.only(null)
            : h.isValidElement(i)
              ? i.props.children
              : null
          : u
      );
    return a.jsx(Da, {
      ...r,
      ref: t,
      children: h.isValidElement(i) ? h.cloneElement(i, void 0, s) : null,
    });
  }
  return a.jsx(Da, { ...r, ref: t, children: n });
});
Ar.displayName = "Slot";
var Da = h.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (h.isValidElement(n)) {
    const l = $y(n);
    return h.cloneElement(n, { ...By(r, n.props), ref: t ? $m(t, l) : l });
  }
  return h.Children.count(n) > 1 ? h.Children.only(null) : null;
});
Da.displayName = "SlotClone";
var Fy = ({ children: e }) => a.jsx(a.Fragment, { children: e });
function Uy(e) {
  return h.isValidElement(e) && e.type === Fy;
}
function By(e, t) {
  const n = { ...t };
  for (const r in t) {
    const l = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? l && o
        ? (n[r] = (...s) => {
            o(...s), l(...s);
          })
        : l && (n[r] = l)
      : r === "style"
        ? (n[r] = { ...l, ...o })
        : r === "className" && (n[r] = [l, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $y(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Vm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Vm(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Vy() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Vm(e)) && (r && (r += " "), (r += t));
  return r;
}
const Bd = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  $d = Vy,
  Wm = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return $d(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: l, defaultVariants: o } = t,
      i = Object.keys(l).map((c) => {
        const d = n == null ? void 0 : n[c],
          f = o == null ? void 0 : o[c];
        if (d === null) return null;
        const m = Bd(d) || Bd(f);
        return l[c][m];
      }),
      s =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [f, m] = d;
          return m === void 0 || (c[f] = m), c;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, d) => {
              let { class: f, className: m, ...y } = d;
              return Object.entries(y).every((C) => {
                let [v, b] = C;
                return Array.isArray(b)
                  ? b.includes({ ...o, ...s }[v])
                  : { ...o, ...s }[v] === b;
              })
                ? [...c, f, m]
                : c;
            }, []);
    return $d(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Hm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = Hm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Wy() {
  for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = Hm(e)) && (r && (r += " "), (r += t));
  return r;
}
const Uu = "-",
  Hy = (e) => {
    const t = Ky(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Uu);
        return s[0] === "" && s.length !== 1 && s.shift(), Qm(s, t) || Qy(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  Qm = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      l = r ? Qm(e.slice(1), r) : void 0;
    if (l) return l;
    if (t.validators.length === 0) return;
    const o = e.join(Uu);
    return (i = t.validators.find(({ validator: s }) => s(o))) == null
      ? void 0
      : i.classGroupId;
  },
  Vd = /^\[(.+)\]$/,
  Qy = (e) => {
    if (Vd.test(e)) {
      const t = Vd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ky = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Yy(Object.entries(e.classGroups), n).forEach(([o, i]) => {
        Ma(i, r, o, t);
      }),
      r
    );
  },
  Ma = (e, t, n, r) => {
    e.forEach((l) => {
      if (typeof l == "string") {
        const o = l === "" ? t : Wd(t, l);
        o.classGroupId = n;
        return;
      }
      if (typeof l == "function") {
        if (Gy(l)) {
          Ma(l(r), t, n, r);
          return;
        }
        t.validators.push({ validator: l, classGroupId: n });
        return;
      }
      Object.entries(l).forEach(([o, i]) => {
        Ma(i, Wd(t, o), n, r);
      });
    });
  },
  Wd = (e, t) => {
    let n = e;
    return (
      t.split(Uu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Gy = (e) => e.isThemeGetter,
  Yy = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const l = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(([i, s]) => [t + i, s])
                  )
                : o
          );
          return [n, l];
        })
      : e,
  Xy = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const l = (o, i) => {
      n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let i = n.get(o);
        if (i !== void 0) return i;
        if ((i = r.get(o)) !== void 0) return l(o, i), i;
      },
      set(o, i) {
        n.has(o) ? n.set(o, i) : l(o, i);
      },
    };
  },
  Km = "!",
  qy = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      l = t[0],
      o = t.length,
      i = (s) => {
        const u = [];
        let c = 0,
          d = 0,
          f;
        for (let b = 0; b < s.length; b++) {
          let x = s[b];
          if (c === 0) {
            if (x === l && (r || s.slice(b, b + o) === t)) {
              u.push(s.slice(d, b)), (d = b + o);
              continue;
            }
            if (x === "/") {
              f = b;
              continue;
            }
          }
          x === "[" ? c++ : x === "]" && c--;
        }
        const m = u.length === 0 ? s : s.substring(d),
          y = m.startsWith(Km),
          C = y ? m.substring(1) : m,
          v = f && f > d ? f - d : void 0;
        return {
          modifiers: u,
          hasImportantModifier: y,
          baseClassName: C,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  Zy = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Jy = (e) => ({ cache: Xy(e.cacheSize), parseClassName: qy(e), ...Hy(e) }),
  e1 = /\s+/,
  t1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: l,
      } = t,
      o = [],
      i = e.trim().split(e1);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const c = i[u],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: y,
        } = n(c);
      let C = !!y,
        v = r(C ? m.substring(0, y) : m);
      if (!v) {
        if (!C) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((v = r(m)), !v)) {
          s = c + (s.length > 0 ? " " + s : s);
          continue;
        }
        C = !1;
      }
      const b = Zy(d).join(":"),
        x = f ? b + Km : b,
        p = x + v;
      if (o.includes(p)) continue;
      o.push(p);
      const g = l(v, C);
      for (let S = 0; S < g.length; ++S) {
        const k = g[S];
        o.push(x + k);
      }
      s = c + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function n1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Gm(t)) && (r && (r += " "), (r += n));
  return r;
}
const Gm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Gm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function r1(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(u) {
    const c = t.reduce((d, f) => f(d), e());
    return (n = Jy(c)), (r = n.cache.get), (l = n.cache.set), (o = s), s(u);
  }
  function s(u) {
    const c = r(u);
    if (c) return c;
    const d = t1(u, n);
    return l(u, d), d;
  }
  return function () {
    return o(n1.apply(null, arguments));
  };
}
const ae = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Ym = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  l1 = /^\d+\/\d+$/,
  o1 = new Set(["px", "full", "screen"]),
  i1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  s1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  a1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  u1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  c1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  At = (e) => kr(e) || o1.has(e) || l1.test(e),
  nn = (e) => $r(e, "length", g1),
  kr = (e) => !!e && !Number.isNaN(Number(e)),
  Es = (e) => $r(e, "number", kr),
  ll = (e) => !!e && Number.isInteger(Number(e)),
  d1 = (e) => e.endsWith("%") && kr(e.slice(0, -1)),
  K = (e) => Ym.test(e),
  rn = (e) => i1.test(e),
  f1 = new Set(["length", "size", "percentage"]),
  p1 = (e) => $r(e, f1, Xm),
  m1 = (e) => $r(e, "position", Xm),
  h1 = new Set(["image", "url"]),
  x1 = (e) => $r(e, h1, w1),
  v1 = (e) => $r(e, "", y1),
  ol = () => !0,
  $r = (e, t, n) => {
    const r = Ym.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  g1 = (e) => s1.test(e) && !a1.test(e),
  Xm = () => !1,
  y1 = (e) => u1.test(e),
  w1 = (e) => c1.test(e),
  N1 = () => {
    const e = ae("colors"),
      t = ae("spacing"),
      n = ae("blur"),
      r = ae("brightness"),
      l = ae("borderColor"),
      o = ae("borderRadius"),
      i = ae("borderSpacing"),
      s = ae("borderWidth"),
      u = ae("contrast"),
      c = ae("grayscale"),
      d = ae("hueRotate"),
      f = ae("invert"),
      m = ae("gap"),
      y = ae("gradientColorStops"),
      C = ae("gradientColorStopPositions"),
      v = ae("inset"),
      b = ae("margin"),
      x = ae("opacity"),
      p = ae("padding"),
      g = ae("saturate"),
      S = ae("scale"),
      k = ae("sepia"),
      N = ae("skew"),
      P = ae("space"),
      R = ae("translate"),
      D = () => ["auto", "contain", "none"],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      q = () => ["auto", K, t],
      V = () => [K, t],
      me = () => ["", At, nn],
      ie = () => ["auto", kr, K],
      pt = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Je = () => ["solid", "dashed", "dotted", "double", "none"],
      de = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      $ = () => ["", "0", K],
      W = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Q = () => [kr, K];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ol],
        spacing: [At, nn],
        blur: ["none", "", rn, K],
        brightness: Q(),
        borderColor: [e],
        borderRadius: ["none", "", "full", rn, K],
        borderSpacing: V(),
        borderWidth: me(),
        contrast: Q(),
        grayscale: $(),
        hueRotate: Q(),
        invert: $(),
        gap: V(),
        gradientColorStops: [e],
        gradientColorStopPositions: [d1, nn],
        inset: q(),
        margin: q(),
        opacity: Q(),
        padding: V(),
        saturate: Q(),
        scale: Q(),
        sepia: $(),
        skew: Q(),
        space: V(),
        translate: V(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", K] }],
        container: ["container"],
        columns: [{ columns: [rn] }],
        "break-after": [{ "break-after": W() }],
        "break-before": [{ "break-before": W() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...pt(), K] }],
        overflow: [{ overflow: T() }],
        "overflow-x": [{ "overflow-x": T() }],
        "overflow-y": [{ "overflow-y": T() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", ll, K] }],
        basis: [{ basis: q() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", K] }],
        grow: [{ grow: $() }],
        shrink: [{ shrink: $() }],
        order: [{ order: ["first", "last", "none", ll, K] }],
        "grid-cols": [{ "grid-cols": [ol] }],
        "col-start-end": [{ col: ["auto", { span: ["full", ll, K] }, K] }],
        "col-start": [{ "col-start": ie() }],
        "col-end": [{ "col-end": ie() }],
        "grid-rows": [{ "grid-rows": [ol] }],
        "row-start-end": [{ row: ["auto", { span: [ll, K] }, K] }],
        "row-start": [{ "row-start": ie() }],
        "row-end": [{ "row-end": ie() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }],
        "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              K,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [rn] },
              rn,
            ],
          },
        ],
        h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [K, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", rn, nn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Es,
            ],
          },
        ],
        "font-family": [{ font: [ol] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              K,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", kr, Es] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              At,
              K,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", K] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [x] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [x] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Je(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", At, nn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", At, K] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: V() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              K,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", K] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [x] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...pt(), m1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", p1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              x1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [C] }],
        "gradient-via-pos": [{ via: [C] }],
        "gradient-to-pos": [{ to: [C] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [x] }],
        "border-style": [{ border: [...Je(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [x] }],
        "divide-style": [{ divide: Je() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...Je()] }],
        "outline-offset": [{ "outline-offset": [At, K] }],
        "outline-w": [{ outline: [At, nn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: me() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [x] }],
        "ring-offset-w": [{ "ring-offset": [At, nn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", rn, v1] }],
        "shadow-color": [{ shadow: [ol] }],
        opacity: [{ opacity: [x] }],
        "mix-blend": [
          { "mix-blend": [...de(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": de() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", rn, K] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [x] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              K,
            ],
          },
        ],
        duration: [{ duration: Q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
        delay: [{ delay: Q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [ll, K] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              K,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              K,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": V() }],
        "scroll-mx": [{ "scroll-mx": V() }],
        "scroll-my": [{ "scroll-my": V() }],
        "scroll-ms": [{ "scroll-ms": V() }],
        "scroll-me": [{ "scroll-me": V() }],
        "scroll-mt": [{ "scroll-mt": V() }],
        "scroll-mr": [{ "scroll-mr": V() }],
        "scroll-mb": [{ "scroll-mb": V() }],
        "scroll-ml": [{ "scroll-ml": V() }],
        "scroll-p": [{ "scroll-p": V() }],
        "scroll-px": [{ "scroll-px": V() }],
        "scroll-py": [{ "scroll-py": V() }],
        "scroll-ps": [{ "scroll-ps": V() }],
        "scroll-pe": [{ "scroll-pe": V() }],
        "scroll-pt": [{ "scroll-pt": V() }],
        "scroll-pr": [{ "scroll-pr": V() }],
        "scroll-pb": [{ "scroll-pb": V() }],
        "scroll-pl": [{ "scroll-pl": V() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", K] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [At, nn, Es] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  C1 = r1(N1);
function qt(...e) {
  return C1(Wy(e));
}
const S1 = Wm(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Ie = h.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...l }, o) => {
      const i = r ? Ar : "button";
      return a.jsx(i, {
        className: qt(S1({ variant: t, size: n, className: e })),
        ref: o,
        ...l,
      });
    }
  );
Ie.displayName = "Button";
function Dt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (l) {
    if ((e == null || e(l), n === !1 || !l.defaultPrevented))
      return t == null ? void 0 : t(l);
  };
}
function E1(e, t) {
  const n = h.createContext(t),
    r = (o) => {
      const { children: i, ...s } = o,
        u = h.useMemo(() => s, Object.values(s));
      return a.jsx(n.Provider, { value: u, children: i });
    };
  r.displayName = e + "Provider";
  function l(o) {
    const i = h.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [r, l];
}
function Bu(e, t = []) {
  let n = [];
  function r(o, i) {
    const s = h.createContext(i),
      u = n.length;
    n = [...n, i];
    const c = (f) => {
      var x;
      const { scope: m, children: y, ...C } = f,
        v = ((x = m == null ? void 0 : m[e]) == null ? void 0 : x[u]) || s,
        b = h.useMemo(() => C, Object.values(C));
      return a.jsx(v.Provider, { value: b, children: y });
    };
    c.displayName = o + "Provider";
    function d(f, m) {
      var v;
      const y = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[u]) || s,
        C = h.useContext(y);
      if (C) return C;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return [c, d];
  }
  const l = () => {
    const o = n.map((i) => h.createContext(i));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || o;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (l.scopeName = e), [r, b1(l, ...t)];
}
function b1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (o) {
      const i = r.reduce((s, { useScope: u, scopeName: c }) => {
        const f = u(o)[`__scope${c}`];
        return { ...s, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Ul =
    globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
  j1 = vf.useId || (() => {}),
  k1 = 0;
function wl(e) {
  const [t, n] = h.useState(j1());
  return (
    Ul(() => {
      n((r) => r ?? String(k1++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
function Yn(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }),
    h.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Bi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, l] = R1({ defaultProp: t, onChange: n }),
    o = e !== void 0,
    i = o ? e : r,
    s = Yn(n),
    u = h.useCallback(
      (c) => {
        if (o) {
          const f = typeof c == "function" ? c(e) : c;
          f !== e && s(f);
        } else l(c);
      },
      [o, e, l, s]
    );
  return [i, u];
}
function R1({ defaultProp: e, onChange: t }) {
  const n = h.useState(e),
    [r] = n,
    l = h.useRef(r),
    o = Yn(t);
  return (
    h.useEffect(() => {
      l.current !== r && (o(r), (l.current = r));
    }, [r, l, o]),
    n
  );
}
var P1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ze = P1.reduce((e, t) => {
    const n = h.forwardRef((r, l) => {
      const { asChild: o, ...i } = r,
        s = o ? Ar : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        a.jsx(s, { ...i, ref: l })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function _1(e, t) {
  e && Ii.flushSync(() => e.dispatchEvent(t));
}
function L1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yn(e);
  h.useEffect(() => {
    const r = (l) => {
      l.key === "Escape" && n(l);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var T1 = "DismissableLayer",
  za = "dismissableLayer.update",
  D1 = "dismissableLayer.pointerDownOutside",
  M1 = "dismissableLayer.focusOutside",
  Hd,
  qm = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Zm = h.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: l,
        onFocusOutside: o,
        onInteractOutside: i,
        onDismiss: s,
        ...u
      } = e,
      c = h.useContext(qm),
      [d, f] = h.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = h.useState({}),
      C = St(t, (P) => f(P)),
      v = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      x = v.indexOf(b),
      p = d ? v.indexOf(d) : -1,
      g = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= x,
      k = I1((P) => {
        const R = P.target,
          D = [...c.branches].some((T) => T.contains(R));
        !S ||
          D ||
          (l == null || l(P),
          i == null || i(P),
          P.defaultPrevented || s == null || s());
      }, m),
      N = A1((P) => {
        const R = P.target;
        [...c.branches].some((T) => T.contains(R)) ||
          (o == null || o(P),
          i == null || i(P),
          P.defaultPrevented || s == null || s());
      }, m);
    return (
      L1((P) => {
        p === c.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && s && (P.preventDefault(), s()));
      }, m),
      h.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hd = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Qd(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Hd);
            }
          );
      }, [d, m, n, c]),
      h.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            Qd());
        },
        [d, c]
      ),
      h.useEffect(() => {
        const P = () => y({});
        return (
          document.addEventListener(za, P),
          () => document.removeEventListener(za, P)
        );
      }, []),
      a.jsx(Ze.div, {
        ...u,
        ref: C,
        style: {
          pointerEvents: g ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Dt(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: Dt(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: Dt(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        ),
      })
    );
  });
Zm.displayName = T1;
var z1 = "DismissableLayerBranch",
  O1 = h.forwardRef((e, t) => {
    const n = h.useContext(qm),
      r = h.useRef(null),
      l = St(t, r);
    return (
      h.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      a.jsx(Ze.div, { ...e, ref: l })
    );
  });
O1.displayName = z1;
function I1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yn(e),
    r = h.useRef(!1),
    l = h.useRef(() => {});
  return (
    h.useEffect(() => {
      const o = (s) => {
          if (s.target && !r.current) {
            let u = function () {
              Jm(D1, n, c, { discrete: !0 });
            };
            const c = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", l.current),
                (l.current = u),
                t.addEventListener("click", l.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", l.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", l.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function A1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Yn(e),
    r = h.useRef(!1);
  return (
    h.useEffect(() => {
      const l = (o) => {
        o.target &&
          !r.current &&
          Jm(M1, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", l),
        () => t.removeEventListener("focusin", l)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Qd() {
  const e = new CustomEvent(za);
  document.dispatchEvent(e);
}
function Jm(e, t, n, { discrete: r }) {
  const l = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && l.addEventListener(e, t, { once: !0 }),
    r ? _1(l, o) : l.dispatchEvent(o);
}
var bs = "focusScope.autoFocusOnMount",
  js = "focusScope.autoFocusOnUnmount",
  Kd = { bubbles: !1, cancelable: !0 },
  F1 = "FocusScope",
  eh = h.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: l,
        onUnmountAutoFocus: o,
        ...i
      } = e,
      [s, u] = h.useState(null),
      c = Yn(l),
      d = Yn(o),
      f = h.useRef(null),
      m = St(t, (v) => u(v)),
      y = h.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    h.useEffect(() => {
      if (r) {
        let v = function (g) {
            if (y.paused || !s) return;
            const S = g.target;
            s.contains(S) ? (f.current = S) : on(f.current, { select: !0 });
          },
          b = function (g) {
            if (y.paused || !s) return;
            const S = g.relatedTarget;
            S !== null && (s.contains(S) || on(f.current, { select: !0 }));
          },
          x = function (g) {
            if (document.activeElement === document.body)
              for (const k of g) k.removedNodes.length > 0 && on(s);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", b);
        const p = new MutationObserver(x);
        return (
          s && p.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", b),
              p.disconnect();
          }
        );
      }
    }, [r, s, y.paused]),
      h.useEffect(() => {
        if (s) {
          Yd.add(y);
          const v = document.activeElement;
          if (!s.contains(v)) {
            const x = new CustomEvent(bs, Kd);
            s.addEventListener(bs, c),
              s.dispatchEvent(x),
              x.defaultPrevented ||
                (U1(H1(th(s)), { select: !0 }),
                document.activeElement === v && on(s));
          }
          return () => {
            s.removeEventListener(bs, c),
              setTimeout(() => {
                const x = new CustomEvent(js, Kd);
                s.addEventListener(js, d),
                  s.dispatchEvent(x),
                  x.defaultPrevented || on(v ?? document.body, { select: !0 }),
                  s.removeEventListener(js, d),
                  Yd.remove(y);
              }, 0);
          };
        }
      }, [s, c, d, y]);
    const C = h.useCallback(
      (v) => {
        if ((!n && !r) || y.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          x = document.activeElement;
        if (b && x) {
          const p = v.currentTarget,
            [g, S] = B1(p);
          g && S
            ? !v.shiftKey && x === S
              ? (v.preventDefault(), n && on(g, { select: !0 }))
              : v.shiftKey &&
                x === g &&
                (v.preventDefault(), n && on(S, { select: !0 }))
            : x === p && v.preventDefault();
        }
      },
      [n, r, y.paused]
    );
    return a.jsx(Ze.div, { tabIndex: -1, ...i, ref: m, onKeyDown: C });
  });
eh.displayName = F1;
function U1(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((on(r, { select: t }), document.activeElement !== n)) return;
}
function B1(e) {
  const t = th(e),
    n = Gd(t, e),
    r = Gd(t.reverse(), e);
  return [n, r];
}
function th(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Gd(e, t) {
  for (const n of e) if (!$1(n, { upTo: t })) return n;
}
function $1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function V1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function on(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && V1(e) && t && e.select();
  }
}
var Yd = W1();
function W1() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Xd(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Xd(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Xd(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function H1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Q1 = "Portal",
  nh = h.forwardRef((e, t) => {
    var s;
    const { container: n, ...r } = e,
      [l, o] = h.useState(!1);
    Ul(() => o(!0), []);
    const i =
      n ||
      (l &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body));
    return i ? wm.createPortal(a.jsx(Ze.div, { ...r, ref: t }), i) : null;
  });
nh.displayName = Q1;
function K1(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Gl = (e) => {
  const { present: t, children: n } = e,
    r = G1(t),
    l =
      typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n),
    o = St(r.ref, Y1(l));
  return typeof n == "function" || r.isPresent
    ? h.cloneElement(l, { ref: o })
    : null;
};
Gl.displayName = "Presence";
function G1(e) {
  const [t, n] = h.useState(),
    r = h.useRef({}),
    l = h.useRef(e),
    o = h.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [s, u] = K1(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    h.useEffect(() => {
      const c = No(r.current);
      o.current = s === "mounted" ? c : "none";
    }, [s]),
    Ul(() => {
      const c = r.current,
        d = l.current;
      if (d !== e) {
        const m = o.current,
          y = No(c);
        e
          ? u("MOUNT")
          : y === "none" || (c == null ? void 0 : c.display) === "none"
            ? u("UNMOUNT")
            : u(d && m !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e);
      }
    }, [e, u]),
    Ul(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          f = (y) => {
            const v = No(r.current).includes(y.animationName);
            if (y.target === t && v && (u("ANIMATION_END"), !l.current)) {
              const b = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                }));
            }
          },
          m = (y) => {
            y.target === t && (o.current = No(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(c),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: h.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function No(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Y1(e) {
  var r, l;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var ks = 0;
function X1() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? qd()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? qd()),
      ks++,
      () => {
        ks === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ks--;
      }
    );
  }, []);
}
function qd() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var _t = function () {
  return (
    (_t =
      Object.assign ||
      function (t) {
        for (var n, r = 1, l = arguments.length; r < l; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    _t.apply(this, arguments)
  );
};
function rh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      t.indexOf(r[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
        (n[r[l]] = e[r[l]]);
  return n;
}
function q1(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, o; r < l; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var Fo = "right-scroll-bar-position",
  Uo = "width-before-scroll-bar",
  Z1 = "with-scroll-bars-hidden",
  J1 = "--removed-body-scroll-bar-size";
function Rs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ew(e, t) {
  var n = h.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var l = n.value;
          l !== r && ((n.value = r), n.callback(r, l));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var tw = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
  Zd = new WeakMap();
function nw(e, t) {
  var n = ew(null, function (r) {
    return e.forEach(function (l) {
      return Rs(l, r);
    });
  });
  return (
    tw(
      function () {
        var r = Zd.get(n);
        if (r) {
          var l = new Set(r),
            o = new Set(e),
            i = n.current;
          l.forEach(function (s) {
            o.has(s) || Rs(s, null);
          }),
            o.forEach(function (s) {
              l.has(s) || Rs(s, i);
            });
        }
        Zd.set(n, e);
      },
      [e]
    ),
    n
  );
}
function rw(e) {
  return e;
}
function lw(e, t) {
  t === void 0 && (t = rw);
  var n = [],
    r = !1,
    l = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (o) {
        var i = t(o, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(o);
        }
        n = {
          push: function (s) {
            return o(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (o) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(o), (i = n);
        }
        var u = function () {
            var d = i;
            (i = []), d.forEach(o);
          },
          c = function () {
            return Promise.resolve().then(u);
          };
        c(),
          (n = {
            push: function (d) {
              i.push(d), c();
            },
            filter: function (d) {
              return (i = i.filter(d)), n;
            },
          });
      },
    };
  return l;
}
function ow(e) {
  e === void 0 && (e = {});
  var t = lw(null);
  return (t.options = _t({ async: !0, ssr: !1 }, e)), t;
}
var lh = function (e) {
  var t = e.sideCar,
    n = rh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return h.createElement(r, _t({}, n));
};
lh.isSideCarExport = !0;
function iw(e, t) {
  return e.useMedium(t), lh;
}
var oh = ow(),
  Ps = function () {},
  $i = h.forwardRef(function (e, t) {
    var n = h.useRef(null),
      r = h.useState({
        onScrollCapture: Ps,
        onWheelCapture: Ps,
        onTouchMoveCapture: Ps,
      }),
      l = r[0],
      o = r[1],
      i = e.forwardProps,
      s = e.children,
      u = e.className,
      c = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      m = e.sideCar,
      y = e.noIsolation,
      C = e.inert,
      v = e.allowPinchZoom,
      b = e.as,
      x = b === void 0 ? "div" : b,
      p = e.gapMode,
      g = rh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = m,
      k = nw([n, t]),
      N = _t(_t({}, g), l);
    return h.createElement(
      h.Fragment,
      null,
      d &&
        h.createElement(S, {
          sideCar: oh,
          removeScrollBar: c,
          shards: f,
          noIsolation: y,
          inert: C,
          setCallbacks: o,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: p,
        }),
      i
        ? h.cloneElement(h.Children.only(s), _t(_t({}, N), { ref: k }))
        : h.createElement(x, _t({}, N, { className: u, ref: k }), s)
    );
  });
$i.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
$i.classNames = { fullWidth: Uo, zeroRight: Fo };
var sw = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function aw() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sw();
  return t && e.setAttribute("nonce", t), e;
}
function uw(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function cw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dw = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = aw()) && (uw(t, n), cw(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  fw = function () {
    var e = dw();
    return function (t, n) {
      h.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  ih = function () {
    var e = fw(),
      t = function (n) {
        var r = n.styles,
          l = n.dynamic;
        return e(r, l), null;
      };
    return t;
  },
  pw = { left: 0, top: 0, right: 0, gap: 0 },
  _s = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  mw = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      l = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [_s(n), _s(r), _s(l)];
  },
  hw = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return pw;
    var t = mw(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  xw = ih(),
  Rr = "data-scroll-locked",
  vw = function (e, t, n, r) {
    var l = e.left,
      o = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Z1,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Rr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  l,
                  `px;
    padding-top: `
                )
                .concat(
                  o,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Fo,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Uo,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Fo, " .")
        .concat(
          Fo,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Uo, " .")
        .concat(
          Uo,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Rr,
          `] {
    `
        )
        .concat(J1, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  Jd = function () {
    var e = parseInt(document.body.getAttribute(Rr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  gw = function () {
    h.useEffect(function () {
      return (
        document.body.setAttribute(Rr, (Jd() + 1).toString()),
        function () {
          var e = Jd() - 1;
          e <= 0
            ? document.body.removeAttribute(Rr)
            : document.body.setAttribute(Rr, e.toString());
        }
      );
    }, []);
  },
  yw = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      l = r === void 0 ? "margin" : r;
    gw();
    var o = h.useMemo(
      function () {
        return hw(l);
      },
      [l]
    );
    return h.createElement(xw, { styles: vw(o, !t, l, n ? "" : "!important") });
  },
  Oa = !1;
if (typeof window < "u")
  try {
    var Co = Object.defineProperty({}, "passive", {
      get: function () {
        return (Oa = !0), !0;
      },
    });
    window.addEventListener("test", Co, Co),
      window.removeEventListener("test", Co, Co);
  } catch {
    Oa = !1;
  }
var ir = Oa ? { passive: !1 } : !1,
  ww = function (e) {
    return e.tagName === "TEXTAREA";
  },
  sh = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !ww(e) && n[t] === "visible")
    );
  },
  Nw = function (e) {
    return sh(e, "overflowY");
  },
  Cw = function (e) {
    return sh(e, "overflowX");
  },
  ef = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var l = ah(e, r);
      if (l) {
        var o = uh(e, r),
          i = o[1],
          s = o[2];
        if (i > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Sw = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ew = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  ah = function (e, t) {
    return e === "v" ? Nw(t) : Cw(t);
  },
  uh = function (e, t) {
    return e === "v" ? Sw(t) : Ew(t);
  },
  bw = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  jw = function (e, t, n, r, l) {
    var o = bw(e, window.getComputedStyle(t).direction),
      i = o * r,
      s = n.target,
      u = t.contains(s),
      c = !1,
      d = i > 0,
      f = 0,
      m = 0;
    do {
      var y = uh(e, s),
        C = y[0],
        v = y[1],
        b = y[2],
        x = v - b - o * C;
      (C || x) && ah(e, s) && ((f += x), (m += C)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
    return (
      ((d && (Math.abs(f) < 1 || !l)) || (!d && (Math.abs(m) < 1 || !l))) &&
        (c = !0),
      c
    );
  },
  So = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  tf = function (e) {
    return [e.deltaX, e.deltaY];
  },
  nf = function (e) {
    return e && "current" in e ? e.current : e;
  },
  kw = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Rw = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Pw = 0,
  sr = [];
function _w(e) {
  var t = h.useRef([]),
    n = h.useRef([0, 0]),
    r = h.useRef(),
    l = h.useState(Pw++)[0],
    o = h.useState(ih)[0],
    i = h.useRef(e);
  h.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    h.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(l));
          var v = q1([e.lockRef.current], (e.shards || []).map(nf), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(l));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(l)),
                v.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(l));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = h.useCallback(function (v, b) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var x = So(v),
        p = n.current,
        g = "deltaX" in v ? v.deltaX : p[0] - x[0],
        S = "deltaY" in v ? v.deltaY : p[1] - x[1],
        k,
        N = v.target,
        P = Math.abs(g) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && P === "h" && N.type === "range") return !1;
      var R = ef(P, N);
      if (!R) return !0;
      if ((R ? (k = P) : ((k = P === "v" ? "h" : "v"), (R = ef(P, N))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (g || S) && (r.current = k), !k)
      )
        return !0;
      var D = r.current || k;
      return jw(D, b, v, D === "h" ? g : S, !0);
    }, []),
    u = h.useCallback(function (v) {
      var b = v;
      if (!(!sr.length || sr[sr.length - 1] !== o)) {
        var x = "deltaY" in b ? tf(b) : So(b),
          p = t.current.filter(function (k) {
            return (
              k.name === b.type &&
              (k.target === b.target || b.target === k.shadowParent) &&
              kw(k.delta, x)
            );
          })[0];
        if (p && p.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!p) {
          var g = (i.current.shards || [])
              .map(nf)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(b.target);
              }),
            S = g.length > 0 ? s(b, g[0]) : !i.current.noIsolation;
          S && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = h.useCallback(function (v, b, x, p) {
      var g = { name: v, delta: b, target: x, should: p, shadowParent: Lw(x) };
      t.current.push(g),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== g;
          });
        }, 1);
    }, []),
    d = h.useCallback(function (v) {
      (n.current = So(v)), (r.current = void 0);
    }, []),
    f = h.useCallback(function (v) {
      c(v.type, tf(v), v.target, s(v, e.lockRef.current));
    }, []),
    m = h.useCallback(function (v) {
      c(v.type, So(v), v.target, s(v, e.lockRef.current));
    }, []);
  h.useEffect(function () {
    return (
      sr.push(o),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", u, ir),
      document.addEventListener("touchmove", u, ir),
      document.addEventListener("touchstart", d, ir),
      function () {
        (sr = sr.filter(function (v) {
          return v !== o;
        })),
          document.removeEventListener("wheel", u, ir),
          document.removeEventListener("touchmove", u, ir),
          document.removeEventListener("touchstart", d, ir);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    C = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    C ? h.createElement(o, { styles: Rw(l) }) : null,
    y ? h.createElement(yw, { gapMode: e.gapMode }) : null
  );
}
function Lw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Tw = iw(oh, _w);
var ch = h.forwardRef(function (e, t) {
  return h.createElement($i, _t({}, e, { ref: t, sideCar: Tw }));
});
ch.classNames = $i.classNames;
var Dw = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ar = new WeakMap(),
  Eo = new WeakMap(),
  bo = {},
  Ls = 0,
  dh = function (e) {
    return e && (e.host || dh(e.parentNode));
  },
  Mw = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = dh(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  zw = function (e, t, n, r) {
    var l = Mw(t, Array.isArray(e) ? e : [e]);
    bo[n] || (bo[n] = new WeakMap());
    var o = bo[n],
      i = [],
      s = new Set(),
      u = new Set(l),
      c = function (f) {
        !f || s.has(f) || (s.add(f), c(f.parentNode));
      };
    l.forEach(c);
    var d = function (f) {
      !f ||
        u.has(f) ||
        Array.prototype.forEach.call(f.children, function (m) {
          if (s.has(m)) d(m);
          else
            try {
              var y = m.getAttribute(r),
                C = y !== null && y !== "false",
                v = (ar.get(m) || 0) + 1,
                b = (o.get(m) || 0) + 1;
              ar.set(m, v),
                o.set(m, b),
                i.push(m),
                v === 1 && C && Eo.set(m, !0),
                b === 1 && m.setAttribute(n, "true"),
                C || m.setAttribute(r, "true");
            } catch (x) {
              console.error("aria-hidden: cannot operate on ", m, x);
            }
        });
    };
    return (
      d(t),
      s.clear(),
      Ls++,
      function () {
        i.forEach(function (f) {
          var m = ar.get(f) - 1,
            y = o.get(f) - 1;
          ar.set(f, m),
            o.set(f, y),
            m || (Eo.has(f) || f.removeAttribute(r), Eo.delete(f)),
            y || f.removeAttribute(n);
        }),
          Ls--,
          Ls ||
            ((ar = new WeakMap()),
            (ar = new WeakMap()),
            (Eo = new WeakMap()),
            (bo = {}));
      }
    );
  },
  Ow = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      l = Dw(e);
    return l
      ? (r.push.apply(r, Array.from(l.querySelectorAll("[aria-live]"))),
        zw(r, l, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  $u = "Dialog",
  [fh, vN] = Bu($u),
  [Iw, Et] = fh($u),
  ph = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: l,
        onOpenChange: o,
        modal: i = !0,
      } = e,
      s = h.useRef(null),
      u = h.useRef(null),
      [c = !1, d] = Bi({ prop: r, defaultProp: l, onChange: o });
    return a.jsx(Iw, {
      scope: t,
      triggerRef: s,
      contentRef: u,
      contentId: wl(),
      titleId: wl(),
      descriptionId: wl(),
      open: c,
      onOpenChange: d,
      onOpenToggle: h.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n,
    });
  };
ph.displayName = $u;
var mh = "DialogTrigger",
  Aw = h.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      l = Et(mh, n),
      o = St(t, l.triggerRef);
    return a.jsx(Ze.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": l.open,
      "aria-controls": l.contentId,
      "data-state": Hu(l.open),
      ...r,
      ref: o,
      onClick: Dt(e.onClick, l.onOpenToggle),
    });
  });
Aw.displayName = mh;
var Vu = "DialogPortal",
  [Fw, hh] = fh(Vu, { forceMount: void 0 }),
  xh = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: l } = e,
      o = Et(Vu, t);
    return a.jsx(Fw, {
      scope: t,
      forceMount: n,
      children: h.Children.map(r, (i) =>
        a.jsx(Gl, {
          present: n || o.open,
          children: a.jsx(nh, { asChild: !0, container: l, children: i }),
        })
      ),
    });
  };
xh.displayName = Vu;
var yi = "DialogOverlay",
  vh = h.forwardRef((e, t) => {
    const n = hh(yi, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...l } = e,
      o = Et(yi, e.__scopeDialog);
    return o.modal
      ? a.jsx(Gl, {
          present: r || o.open,
          children: a.jsx(Uw, { ...l, ref: t }),
        })
      : null;
  });
vh.displayName = yi;
var Uw = h.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      l = Et(yi, n);
    return a.jsx(ch, {
      as: Ar,
      allowPinchZoom: !0,
      shards: [l.contentRef],
      children: a.jsx(Ze.div, {
        "data-state": Hu(l.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Xn = "DialogContent",
  gh = h.forwardRef((e, t) => {
    const n = hh(Xn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...l } = e,
      o = Et(Xn, e.__scopeDialog);
    return a.jsx(Gl, {
      present: r || o.open,
      children: o.modal
        ? a.jsx(Bw, { ...l, ref: t })
        : a.jsx($w, { ...l, ref: t }),
    });
  });
gh.displayName = Xn;
var Bw = h.forwardRef((e, t) => {
    const n = Et(Xn, e.__scopeDialog),
      r = h.useRef(null),
      l = St(t, n.contentRef, r);
    return (
      h.useEffect(() => {
        const o = r.current;
        if (o) return Ow(o);
      }, []),
      a.jsx(yh, {
        ...e,
        ref: l,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Dt(e.onCloseAutoFocus, (o) => {
          var i;
          o.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Dt(e.onPointerDownOutside, (o) => {
          const i = o.detail.originalEvent,
            s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && o.preventDefault();
        }),
        onFocusOutside: Dt(e.onFocusOutside, (o) => o.preventDefault()),
      })
    );
  }),
  $w = h.forwardRef((e, t) => {
    const n = Et(Xn, e.__scopeDialog),
      r = h.useRef(!1),
      l = h.useRef(!1);
    return a.jsx(yh, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (o) => {
        var i, s;
        (i = e.onCloseAutoFocus) == null || i.call(e, o),
          o.defaultPrevented ||
            (r.current || (s = n.triggerRef.current) == null || s.focus(),
            o.preventDefault()),
          (r.current = !1),
          (l.current = !1);
      },
      onInteractOutside: (o) => {
        var u, c;
        (u = e.onInteractOutside) == null || u.call(e, o),
          o.defaultPrevented ||
            ((r.current = !0),
            o.detail.originalEvent.type === "pointerdown" && (l.current = !0));
        const i = o.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) &&
          o.preventDefault(),
          o.detail.originalEvent.type === "focusin" &&
            l.current &&
            o.preventDefault();
      },
    });
  }),
  yh = h.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: l,
        onCloseAutoFocus: o,
        ...i
      } = e,
      s = Et(Xn, n),
      u = h.useRef(null),
      c = St(t, u);
    return (
      X1(),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(eh, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: l,
            onUnmountAutoFocus: o,
            children: a.jsx(Zm, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Hu(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          a.jsxs(a.Fragment, {
            children: [
              a.jsx(Ww, { titleId: s.titleId }),
              a.jsx(Qw, { contentRef: u, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Wu = "DialogTitle",
  wh = h.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      l = Et(Wu, n);
    return a.jsx(Ze.h2, { id: l.titleId, ...r, ref: t });
  });
wh.displayName = Wu;
var Nh = "DialogDescription",
  Ch = h.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      l = Et(Nh, n);
    return a.jsx(Ze.p, { id: l.descriptionId, ...r, ref: t });
  });
Ch.displayName = Nh;
var Sh = "DialogClose",
  Vw = h.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      l = Et(Sh, n);
    return a.jsx(Ze.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Dt(e.onClick, () => l.onOpenChange(!1)),
    });
  });
Vw.displayName = Sh;
function Hu(e) {
  return e ? "open" : "closed";
}
var Eh = "DialogTitleWarning",
  [gN, bh] = E1(Eh, { contentName: Xn, titleName: Wu, docsSlug: "dialog" }),
  Ww = ({ titleId: e }) => {
    const t = bh(Eh),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      h.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Hw = "DialogDescriptionWarning",
  Qw = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bh(Hw).contentName}}.`;
    return (
      h.useEffect(() => {
        var o;
        const l =
          (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
        t && l && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Kw = ph,
  Gw = xh,
  jh = vh,
  kh = gh,
  Rh = wh,
  Ph = Ch;
function Yw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
var Xw = ["color"],
  qw = h.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      l = Yw(e, Xw);
    return h.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        l,
        { ref: t }
      ),
      h.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  });
const Zw = Kw,
  Jw = Gw,
  _h = h.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(jh, {
      className: qt(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
_h.displayName = jh.displayName;
const e2 = Wm(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Lh = h.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, l) =>
      a.jsxs(Jw, {
        children: [
          a.jsx(_h, {}),
          a.jsx(kh, {
            ref: l,
            className: qt(e2({ side: e }), t),
            ...r,
            children: n,
          }),
        ],
      })
  );
Lh.displayName = kh.displayName;
const Th = ({ className: e, ...t }) =>
  a.jsx("div", {
    className: qt("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
Th.displayName = "SheetHeader";
const Dh = h.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Rh, {
    ref: n,
    className: qt("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
Dh.displayName = Rh.displayName;
const Mh = h.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(Ph, { ref: n, className: qt("text-sm text-muted-foreground", e), ...t })
);
Mh.displayName = Ph.displayName;
function t2({ open: e, onOpenChange: t, navItems: n }) {
  const [r, l] = h.useState(null),
    [o, i] = h.useState(!0),
    s = h.useCallback(() => {
      if (r) {
        const { scrollTop: d, scrollHeight: f } = r,
          m = window.innerHeight;
        i(d < f - (m - 80));
      }
    }, [r]),
    u = () => {
      r &&
        (r.scrollTo({ top: r.scrollHeight, behavior: "smooth" }),
        setTimeout(() => {
          s();
        }, 0));
    },
    c = h.useCallback(
      (d) => {
        d &&
          (l(d),
          d.addEventListener("scroll", s),
          d.addEventListener("resize", s),
          s());
      },
      [s]
    );
  return (
    h.useEffect(() => {
      const d = () => {
        s();
      };
      return (
        window.addEventListener("resize", d),
        () => {
          window.removeEventListener("resize", d);
        }
      );
    }, [r, s]),
    a.jsx(Zw, {
      open: e,
      onOpenChange: t,
      children: a.jsxs(Lh, {
        side: "left",
        className: "w-[300px] p-0 sm:w-[400px]",
        children: [
          a.jsxs(Th, {
            className: "relative border-b p-4",
            children: [
              a.jsx(Dh, {
                children: a.jsx(Fl, {
                  to: "/",
                  onClick: () => t(!1),
                  children: a.jsx("img", {
                    src: Ta,
                    className: "ml-2 h-[3.5rem] self-center pt-2",
                  }),
                }),
              }),
              a.jsx(Mh, { className: "hidden" }),
              a.jsxs(Ie, {
                variant: "outline",
                size: "icon",
                className: "absolute right-4 top-3 h-10 w-10",
                onClick: () => t(!1),
                children: [
                  a.jsx(Iy, { className: "h-6 w-6" }),
                  a.jsx("span", {
                    className: "sr-only",
                    children: "Close menu",
                  }),
                ],
              }),
            ],
          }),
          a.jsx("nav", {
            ref: c,
            className:
              "flex max-h-[calc(100dvh-80px)] flex-col space-y-5 overflow-scroll p-6",
            children: n.map((d, f) =>
              a.jsx(
                Fl,
                {
                  to: d.href,
                  className:
                    "text-xl font-medium text-nouris2 transition-colors",
                  onClick: () => t(!1),
                  children: d.secondaryName,
                },
                `${d.name}-${f}`
              )
            ),
          }),
          a.jsx(Ie, {
            variant: "outline",
            size: "icon",
            className: `absolute left-1/2 top-[calc(100dvh-2.5rem-0.75rem)] h-10 w-10 -translate-x-1/2 transform rounded-full bg-white transition-all duration-300 ${o ? "opacity-100" : "pointer-events-none opacity-0"}`,
            onClick: u,
            "aria-label": "Scroll to bottom",
            children: a.jsx(zy, {
              className: "h-7 w-7 stroke-black text-muted-foreground",
            }),
          }),
        ],
      }),
    })
  );
}
function n2() {
  const e = [
      { name: "Accueil", href: "/", secondaryName: "Page d'Accueil" },
      { name: "À Propos", href: "/about", secondaryName: "À  Propos de Nous" },
      { name: "Le Cracovia", href: "/cracovia", secondaryName: "Le Cracovia" },
      {
        name: "Réservations",
        href: "/bookings",
        secondaryName: "Réservations",
      },
      { name: "Contact", href: "/contact", secondaryName: "Nous Contacter" },
    ],
    [t, n] = h.useState(!1),
    r = Jn(),
    l = r.pathname;
  return (
    console.log(r, l, l === "/bookings"),
    a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "hidden 2md:block",
          children: [
            " ",
            a.jsx("header", {
              className:
                "fixed top-0 z-50 bg-gradient-to-b to-[#00000000] backdrop-blur-sm md:pb-5 3xl:pb-10",
              children: a.jsxs("div", {
                className:
                  "mt-8 flex w-screen items-center justify-center md:mt-5",
                children: [
                  a.jsx(Fd, {
                    to: "/",
                    nopx: !1,
                    children: a.jsx("img", {
                      src: l === "/bookings" ? Ud : Ta,
                      className:
                        "absolute left-[5vw] top-6 mt-0 inline-block h-[3.5rem] 2md:h-[2.75rem] lg:h-[3.15rem] xl:top-5 xl:h-[4rem] 3xl:h-[4.15rem]",
                    }),
                  }),
                  a.jsx("div", {
                    className: Ly.nav,
                    children: a.jsx("div", {
                      className:
                        "flex space-x-[-0.8rem] rounded-full border-[1px] bg-black bg-opacity-30 md:space-x-[-0.8rem] md:p-[0.2rem] 3xl:space-x-[-1rem] 3xl:p-1",
                      children: e.map((o) =>
                        a.jsx(Fd, { to: o.href, children: o.name }, o.name)
                      ),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "fixed z-50 h-[4rem] w-full bg-gradient-to-b to-[#00000000] backdrop-blur-sm 2md:hidden",
          children: [
            a.jsxs(Ie, {
              variant: "outline",
              size: "icon",
              className:
                "fixed left-4 top-4 z-50 h-10 w-10 bg-white text-nouris2 lg:hidden",
              onClick: () => n(!0),
              children: [
                a.jsx(Oy, { className: "h-6 w-6" }),
                a.jsx("span", { className: "sr-only", children: "Open menu" }),
              ],
            }),
            a.jsx("div", {
              className: "fixed top-0 w-full pt-0",
              children: a.jsx(Fl, {
                to: "/",
                children: a.jsx("img", {
                  src: l === "/bookings" ? Ud : Ta,
                  className:
                    "mx-auto my-0 mt-4 h-[2.7rem] self-center 2md:left-8 2md:top-4 2md:mx-10 2md:h-[3.6rem] lg:left-0 lg:top-6 lg:h-[3.4rem] xl:left-6 xl:top-5 xl:h-[4rem] 3xl:left-6 3xl:top-6 3xl:mx-24 3xl:h-[6rem]",
                }),
              }),
            }),
            a.jsx(t2, { open: t, onOpenChange: n, navItems: e }),
          ],
        }),
      ],
    })
  );
}
const r2 = "/assets/instagram-C-MMRpL9.svg",
  l2 = "/assets/linkedin-DsG3jRh3.svg",
  o2 =
    "data:image/svg+xml,%3csvg%20width='35'%20height='35'%20viewBox='0%200%2035%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5002%202.18457C9.05499%202.18457%202.18481%209.05502%202.18481%2017.4999C2.18481%2025.9451%209.05499%2032.8158%2017.5002%2032.8158C25.9448%2032.8158%2032.8155%2025.9451%2032.8155%2017.4999C32.8155%209.05502%2025.9448%202.18457%2017.5002%202.18457ZM21.8287%2011.8528C21.8287%2011.9254%2021.7999%2011.9949%2021.7486%2012.0462C21.6974%2012.0975%2021.6278%2012.1263%2021.5553%2012.1263L19.8143%2012.1274C18.6656%2012.1274%2018.4556%2012.5747%2018.4556%2013.4558V15.2834H21.4415C21.52%2015.2834%2021.5949%2015.3173%2021.6466%2015.3764C21.6983%2015.4355%2021.7224%2015.5139%2021.7128%2015.5919L21.2876%2018.8822C21.2791%2018.9481%2021.2468%2019.0086%2021.1969%2019.0525C21.147%2019.0964%2021.0828%2019.1206%2021.0163%2019.1206H18.4556V27.2907C18.4556%2027.3632%2018.4268%2027.4328%2018.3755%2027.4841C18.3242%2027.5353%2018.2547%2027.5641%2018.1821%2027.5641H14.7849C14.7124%2027.5641%2014.6428%2027.5353%2014.5916%2027.4841C14.5403%2027.4328%2014.5115%2027.3632%2014.5115%2027.2907V19.1206H11.9425C11.87%2019.1206%2011.8004%2019.0918%2011.7492%2019.0405C11.6979%2018.9892%2011.6691%2018.9197%2011.6691%2018.8472V15.5569C11.6691%2015.4843%2011.6979%2015.4148%2011.7492%2015.3635C11.8004%2015.3122%2011.87%2015.2834%2011.9425%2015.2834H14.5115V13.1301C14.5115%2010.2781%2016.2374%208.50677%2019.0164%208.50677C20.2111%208.50677%2021.2668%208.59564%2021.5911%208.63857C21.6568%208.64725%2021.7172%208.67952%2021.7609%208.72937C21.8046%208.77922%2021.8287%208.84325%2021.8287%208.90954V11.8528Z'%20fill='white'/%3e%3c/svg%3e",
  i2 = "/assets/icon-eha3lEAO.png";
function s2() {
  return a.jsxs("div", {
    className:
      "flex flex-col gap-16 bg-nouris2 px-5 py-8 text-sm font-light text-white sm:text-lg md:text-xl 2md:grid 2md:grid-cols-[3fr,2fr] 2md:px-16 2md:py-7 3xl:px-60 3xl:py-16",
    children: [
      a.jsxs("div", {
        className: "flex flex-col gap-2 3xl:gap-6",
        children: [
          a.jsx("div", {
            children: a.jsx("img", {
              src: i2,
              className:
                "h-16 grayscale invert 2md:block 2md:h-[3rem] 3xl:h-[5rem]",
            }),
          }),
          a.jsx("div", {
            className:
              "md:w-[70%] 2md:w-[85%] 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
            children:
              "Suivez-nous sur les réseaux sociaux pour rester informé de nos dernières nouvelles, offres exclusives, et plus encore",
          }),
          a.jsxs("div", {
            className: "flex gap-2 2md:gap-3 lg:gap-4 3xl:gap-5",
            children: [
              a.jsx(Ie, {
                variant: "primary",
                size: "icon",
                children: a.jsx("img", {
                  className: "md:h-10 2md:h-7 3xl:h-12",
                  src: r2,
                }),
              }),
              a.jsx(Ie, {
                variant: "primary",
                size: "icon",
                children: a.jsx("img", {
                  className: "md:h-10 2md:h-7 3xl:h-12",
                  src: l2,
                }),
              }),
              a.jsx(Ie, {
                variant: "primary",
                size: "icon",
                children: a.jsx("img", {
                  className: "md:h-10 2md:h-7 3xl:h-12",
                  src: o2,
                }),
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "grid grid-cols-3 2md:text-start 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
        children: [
          a.jsxs("div", {
            className: "flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5",
            children: [
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Company",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "About",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Blog",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Contact",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Career",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5",
            children: [
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Career",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "FAQs",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-start text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Support Center",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col items-start gap-2 lg:gap-4 3xl:gap-5",
            children: [
              a.jsx("button", {
                className:
                  "px-4 text-start font-medium text-white hover:underline 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Become a member",
              }),
              a.jsx(Ie, {
                variant: "link",
                className:
                  "text-white 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Events",
              }),
              a.jsx("button", {
                className:
                  "px-4 text-start font-medium text-white hover:underline 2md:text-xs 2md:leading-4 lg:text-sm 3xl:text-lg",
                children: "Terms and Conditions",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function a2() {
  const t = Im().state === "loading";
  return a.jsxs("div", {
    className: "h-screen",
    children: [
      t && a.jsx(Py, {}),
      a.jsx(n2, {}),
      a.jsx("div", {
        className: "",
        children: a.jsxs("main", {
          className: "relative",
          children: [a.jsx(Sy, {}), a.jsx(ty, {})],
        }),
      }),
      a.jsx(s2, {}),
    ],
  });
}
function u2() {
  return a.jsx("div", {});
}
const zh = "/assets/logo-v-Dz_0oH86.png";
function c2() {
  return a.jsxs("div", {
    className: "flex justify-between md:gap-10 3xl:gap-24",
    children: [
      a.jsxs("div", {
        className: "mb-[7rem] space-y-5 3xl:mb-[15rem]",
        children: [
          a.jsxs("h1", {
            className:
              "text-4xl font-bold capitalize text-nouris md:mb-4 2md:text-4xl lg:text-5xl xl:mb-3 xl:text-[3.5rem] xl:leading-[1.5] 3xl:mb-5 3xl:text-[4.5rem]",
            children: [
              a.jsx("span", { className: "text-black", children: "à propos " }),
              "de nous",
            ],
          }),
          a.jsx("p", {
            className:
              "text-lg text-[#414141] md:mb-4 2md:text-base lg:text-[1.1rem] xl:text-xl 3xl:mb-5 3xl:text-2xl",
            children:
              "Fondée en 2024, Nouris Elbahr Ferries s’est imposée comme un acteur clé du transport maritime en Algérie. En tant que première compagnie privée du pays, nous avons pour mission de rendre le transport maritime plus accessible et plus confortable pour tous les voyageurs. Nous nous engageons à offrir des services d’excellence, soutenus par une équipe de professionnels dévoués et expérimentés.",
          }),
          a.jsx("div", {
            className: "flex md:block md:w-full",
            children: a.jsx("button", {
              className:
                "mx-auto rounded-full bg-nouris px-6 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-nouris md:mx-0 md:my-0 md:px-6 md:text-lg 2md:px-5 2md:py-2 xl:px-7 xl:py-3 xl:text-lg 3xl:px-10 3xl:py-4",
              children: a.jsx(Fl, { to: "/about", children: "En Savoir Plus" }),
            }),
          }),
        ],
      }),
      a.jsx("img", {
        src: zh,
        className:
          "hidden md:block md:h-[11rem] xl:h-[14rem] 3xl:h-[20rem] 3xl:w-auto",
      }),
    ],
  });
}
function Oh({ onClick: e }) {
  return a.jsxs("div", {
    className:
      "flex w-full grid-cols-2 flex-col gap-5 ls:grid ls:gap-3 md:flex-row md:gap-5 3xl:gap-7",
    children: [
      a.jsxs("div", {
        className:
          "lg: relative flex aspect-square h-[80dvw] grow flex-col justify-end overflow-hidden rounded-3xl bg-[url('/public/static/images/Rectangle1.png')] bg-cover bg-center ls:h-auto md:rounded-xl lg:rounded-2xl xl:rounded-[1.5rem] 3xl:rounded-[2rem]",
        onClick: e,
        children: [
          a.jsx("div", {
            className:
              "absolute flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-t from-[#00000066] to-[#9FDAFF66] text-2xl font-extrabold text-white md:text-2xl 2md:text-4xl xl:text-5xl 3xl:text-7xl",
            children: "MARSEILLE",
          }),
          a.jsx("span", {
            className:
              "absolute left-0 w-[100%] p-5 text-sm text-white ls:text-xs md:bottom-2 md:p-2 md:text-xs 2md:p-5 2md:text-base lg:text-[1.1rem] xl:p-6 xl:text-xl 3xl:bottom-8 3xl:text-2xl",
            children:
              "Découvrez la ville portuaire emblématique du Sud de la France, avec ses sites historiques et sa riche culture méditerranéenne",
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "relative flex aspect-square h-[80dvw] grow flex-col justify-end overflow-hidden rounded-3xl bg-[url('/public/static/images/Rectangle2.png')] bg-cover bg-center ls:h-auto md:rounded-xl lg:rounded-2xl xl:rounded-[1.5rem] 3xl:rounded-[2rem]",
        onClick: e,
        children: [
          a.jsx("div", {
            className:
              "absolute flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-t from-[#00000066] to-[#FFDD0E66] text-2xl font-extrabold text-white md:text-2xl 2md:text-4xl xl:text-5xl 3xl:text-7xl",
            children: "ALICANTE",
          }),
          a.jsx("span", {
            className:
              "absolute left-0 w-[100%] p-5 text-sm text-white ls:text-xs md:bottom-2 md:p-2 md:text-xs 2md:p-5 2md:text-base lg:text-[1.1rem] xl:p-6 xl:text-xl 3xl:bottom-8 3xl:text-2xl",
            children:
              "Explorez cette charmante ville espagnole, connue pour ses plages magnifiques, sa gastronomie et son ambiance festive.",
          }),
        ],
      }),
    ],
  });
}
function d2({ onClick: e }) {
  return a.jsxs("div", {
    className: "flex flex-col justify-center space-y-5",
    children: [
      a.jsxs("h1", {
        className:
          "text-4xl font-bold 2md:text-4xl lg:text-5xl xl:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:text-[4.5rem] 3xl:leading-[7rem]",
        children: [
          a.jsxs("div", {
            className: "3xl:mb-[-2rem]",
            children: [
              a.jsx("span", { children: "Explorez " }),
              a.jsx("span", {
                className: "text-nouris",
                children: "Nos Destinations",
              }),
            ],
          }),
          a.jsx("span", { children: " Méditerranéennes" }),
        ],
      }),
      a.jsx("p", {
        className:
          "text-lg text-[#414141] md:mb-4 md:mt-1 md:text-lg 2md:mb-4 2md:mt-1 2md:text-[1rem] 2md:leading-[1.25rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:mb-[5rem] 3xl:text-2xl",
        children:
          "Nouris Elbahr Ferries vous propose des liaisons régulières depuis l’Algérie vers deux destinations phares en Europe",
      }),
      a.jsx(Oh, { onClick: e }),
    ],
  });
}
function f2() {
  return a.jsxs("div", {
    className: "space-y-5 md:space-y-0",
    children: [
      a.jsxs("div", {
        className:
          "flex flex-col space-y-5 md:mb-6 md:grid md:grid-cols-2 md:space-y-0 3xl:mb-28",
        children: [
          a.jsx("h1", {
            className:
              "text-4xl font-bold text-nouris 2md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:mb-32 3xl:text-7xl",
            children: "Le Cracovia",
          }),
          a.jsxs("span", {
            className:
              "text-lg md:text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[3rem]",
            children: [
              "Le Cracovia est le joyau de la flotte de Nouris Elbahr Ferries. ",
              a.jsx("br", {}),
              " ",
              "Conçu pour allier confort et sécurité, ce navire moderne est équipé de tout ce dont vous avez besoin pour une traversée agréable",
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className:
          "h-[25dvh] rounded-lg bg-[url('/public/static/images/Cracovia.jpeg')] bg-cover bg-center md:h-[15rem] md:rounded-xl 3xl:h-[40rem] 3xl:rounded-3xl",
      }),
      a.jsxs("div", {
        className:
          "flex flex-col md:mt-2 md:gap-2 md:text-lg 2md:mt-2 2md:gap-2 2md:text-sm 3xl:gap-8 3xl:text-3xl",
        children: [
          a.jsxs("div", {
            className: "hidden md:block",
            children: [
              a.jsxs("div", {
                className:
                  "flex flex-col divide-nouris md:divide-y-[1px] 3xl:divide-y-2",
                children: [
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-3 font-bold md:gap-3 md:py-1 3xl:gap-8 3xl:py-4",
                    children: [
                      a.jsx("span", { children: "01" }),
                      a.jsx("span", { children: "02" }),
                      a.jsx("span", { children: "03" }),
                    ],
                  }),
                  a.jsxs("div", {
                    className:
                      "grid grid-cols-3 font-medium md:gap-3 md:pt-1 2md:gap-3 2md:pt-2 2md:font-bold lg:pb-4 3xl:gap-8 3xl:pt-4",
                    children: [
                      a.jsx("span", { children: "Cabines Confortables" }),
                      a.jsx("span", { children: "Serivces à Bord" }),
                      a.jsx("span", { children: "Sécurité maximale" }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-3 text-[#484848] md:gap-3 3xl:gap-8",
                children: [
                  a.jsx("span", {
                    children:
                      "Des cabines spacieuses avec lits confortables et salles de bain privatives.",
                  }),
                  a.jsx("span", {
                    children:
                      "Profitez de restaurants offrant une cuisine variée, de cafés pour vous détendre, de boutiques détaxées pour vos achats, et de zones de divertissement pour tous les âges.",
                  }),
                  a.jsx("span", {
                    children:
                      "Le Cracovia est équipé des dernières technologies en matière de sécurité maritime pour assurer une navigation sereine.",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-5 md:hidden",
            children: [
              a.jsxs("div", {
                className: "",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex flex-col divide-y-2 divide-nouris text-xl font-bold",
                    children: [
                      a.jsx("span", { children: "01" }),
                      a.jsx("span", { children: "Cabines Confortables" }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "pt-5 text-lg",
                    children:
                      "Des cabines spacieuses avec lits confortables et salles de bain privatives.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex flex-col divide-y-2 divide-nouris text-xl font-bold",
                    children: [
                      a.jsx("span", { children: "02" }),
                      a.jsx("span", { children: "Serivces à Bord" }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "pt-5 text-lg",
                    children:
                      "Profitez de restaurants offrant une cuisine variée, de cafés pour vous détendre, de boutiques détaxées pour vos achats, et de zones de divertissement pour tous les âges.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex flex-col divide-y-2 divide-nouris text-xl font-bold",
                    children: [
                      a.jsx("span", { children: "03" }),
                      a.jsx("span", { children: "Sécurité maximale" }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "pt-5 text-lg",
                    children:
                      "Le Cracovia est équipé des dernières technologies en matière de sécurité maritime pour assurer une navigation sereine.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ih({ targetRef: e }) {
  return a.jsx("div", {
    className:
      "overflow-hidden rounded-2xl bg-[url('/public/static/images/sub.png')] bg-cover bg-center md:mb-20 md:h-[20rem] md:rounded-3xl 3xl:mb-40 3xl:h-[30rem]",
    ref: e,
    children: a.jsx("div", {
      className:
        "flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-r from-[#0000003D] to-[#66666699] p-10",
      children: a.jsxs("div", {
        className:
          "flex flex-col items-center justify-center gap-10 md:gap-5 2md:gap-7 xl:gap-8 3xl:gap-10",
        children: [
          a.jsx("span", {
            className:
              "text-center text-3xl font-medium text-white ls:text-xl sm:text-2xl md:w-[75%] md:text-2xl 2md:text-2xl xl:w-[65%] xl:text-[2.25rem] xl:leading-10 3xl:text-4xl",
            children:
              "Restez informés et soyez les premiers à réserver votre place à bord.",
          }),
          a.jsxs("div", {
            className:
              "flex w-full flex-col items-center gap-3 md:w-[85%] 2md:w-[70%] xl:w-[55%]",
            children: [
              a.jsxs("div", {
                className:
                  "flex w-full flex-col items-center rounded-full border-[1px] bg-[#0000004D] p-1 md:flex-row",
                children: [
                  a.jsx("input", {
                    className:
                      "h-12 w-full bg-transparent px-5 text-lg text-white placeholder:font-sans placeholder:text-lg placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:h-auto md:px-5 md:py-2 3xl:px-7 3xl:text-xl 3xl:placeholder:text-xl",
                    placeholder: "Entrez votre email ici... ",
                    type: "email",
                  }),
                  a.jsx("button", {
                    className:
                      "hidden rounded-full bg-white font-sans text-2xl font-medium transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black md:right-[3px] md:top-[3px] md:block md:px-8 md:py-3 md:text-sm md:font-bold 3xl:rounded-full 3xl:py-4 3xl:text-lg",
                    children: "S'Abonner",
                  }),
                ],
              }),
              a.jsx("button", {
                className:
                  "h-14 rounded-full bg-white px-8 py-3 font-sans text-2xl font-medium transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black md:hidden",
                children: "S'Abonner",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const p2 = "/static/images/reservez.svg";
function m2({ targetRef: e }) {
  return a.jsxs("div", {
    className: "space-y-5 md:space-y-0",
    children: [
      a.jsxs("div", {
        className: "space-y-5 text-center md:mb-5 md:space-y-0 3xl:mb-10",
        children: [
          a.jsxs("h1", {
            className:
              "text-4xl font-bold md:mb-4 2md:text-4xl lg:text-5xl xl:text-[3.5rem] xl:leading-[1.1] 3xl:mb-8 3xl:text-7xl",
            children: [
              a.jsx("span", {
                className: "text-nouris",
                children: "Réservez ",
              }),
              "Votre Traversée",
            ],
          }),
          a.jsx("p", {
            className:
              "text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[2rem]",
            children:
              "Les réservations pour nos traversées ouvriront très bientôt. Préparez-vous à explorer la Méditerranée avec Nouris Elbahr Ferries en toute simplicité. Restez connecté pour découvrir nos offres spéciales dès l’ouverture des réservations.",
          }),
        ],
      }),
      a.jsx("img", {
        src: p2,
        className: "hidden w-[100%] md:block md:pb-8 3xl:pb-16",
      }),
      a.jsx(Ih, { targetRef: e }),
    ],
  });
}
function h2() {
  return a.jsxs("div", {
    className: "space-y-10 md:space-y-0",
    children: [
      a.jsxs("div", {
        className: "space-y-5 md:mb-5 3xl:mb-10",
        children: [
          a.jsxs("h1", {
            className:
              "text-4xl font-bold md:mb-5 2md:mb-2 2md:text-5xl xl:text-[3.5rem] xl:leading-[1] 3xl:mb-8 3xl:text-7xl",
            children: [
              "Des Services Pensés",
              " ",
              a.jsx("span", {
                className: "hidden text-nouris ls:block",
                children: "pour vous",
              }),
              a.jsx("span", {
                className: "text-nouris ls:hidden",
                children: "pour vous",
              }),
            ],
          }),
          a.jsx("p", {
            className:
              "text-lg 2md:text-base lg:text-[1.1rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl 3xl:leading-[3rem]",
            children:
              "À bord de Nouris Elbahr Ferries, nous nous engageons à vous offrir des services de qualité pour rendre votre traversée aussi agréable que possible.",
          }),
        ],
      }),
      a.jsxs("div", {
        className: "hidden flex-col gap-2 ls:flex md:hidden",
        children: [
          a.jsxs("div", {
            className: "grid grid-cols-2 gap-2",
            children: [
              a.jsxs("div", {
                className: "grid grid-rows-[7fr,5fr] gap-2",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col items-stretch justify-between rounded-2xl bg-black p-5 text-white",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          a.jsx("span", {
                            className: "text-2xl text-[#838383]",
                            children: "01.",
                          }),
                          a.jsx("span", {
                            className: "text-2xl font-semibold",
                            children: "Restauration",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className: "text-sm text-[#838383]",
                        children:
                          "Savourez une cuisine délicieuse à bord, avec des options pour tous les goûts, y compris des menus spéciaux pour les enfants.",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "h-full rounded-2xl bg-[url('/public/static/images/restauration.png')] bg-cover bg-center",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-rows-[5fr,7fr] gap-2",
                children: [
                  a.jsx("div", {
                    className:
                      "h-full rounded-2xl bg-[url('/public/static/images/wifi.png')] bg-cover bg-center",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col items-stretch justify-between gap-3 rounded-2xl bg-[#EBEBEB] p-5 text-white",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          a.jsx("span", {
                            className: "text-2xl text-[#838383]",
                            children: "02.",
                          }),
                          a.jsx("span", {
                            className: "text-2xl font-semibold text-black",
                            children: "Divertissement",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className: "text-sm text-[#838383]",
                        children:
                          "Ne vous ennuyez jamais avec notre large choix de divertissements, incluant un cinéma, des spectacles en direct, et des zones de jeux pour enfants.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "grid grid-rows-[6fr,7fr] gap-2",
            children: [
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-4 rounded-2xl bg-[#CDCDCD] p-5 text-white",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className: "text-2xl text-black",
                        children: "03.",
                      }),
                      a.jsx("span", {
                        className: "text-2xl font-semibold text-[#797979]",
                        children: "Wifi et Connectivité",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "text-sm text-black",
                    children:
                      "Ne vous ennuyez jamais avec notre large choix de divertissements, incluant un cinéma, des spectacles en direct, et des zones de jeux pour enfants.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  a.jsx("div", {
                    className:
                      "h-full rounded-2xl bg-[url('/public/static/images/shopping.png')] bg-cover bg-center",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col items-stretch justify-between gap-7 rounded-2xl bg-[#6C6C6C] p-5 text-white",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          a.jsx("span", {
                            className: "text-2xl text-[#E3E3E3]",
                            children: "04.",
                          }),
                          a.jsx("span", {
                            className: "text-2xl font-semibold",
                            children: "Shopping à bord",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className: "text-sm text-[#E3E3E3]",
                        children:
                          "Profitez de notre boutique détaxée pour acheter des souvenirs, des articles de mode, et des produits de luxe.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-5 ls:hidden",
        children: [
          a.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              a.jsx("div", {
                className:
                  "h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/restauration.png')] bg-cover bg-center",
              }),
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-5 rounded-2xl bg-black p-5 text-white",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className: "text-2xl text-[#838383]",
                        children: "01.",
                      }),
                      a.jsx("span", {
                        className: "text-2xl font-semibold",
                        children: "Restauration",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "text-sm text-[#838383]",
                    children:
                      "Savourez une cuisine délicieuse à bord, avec des options pour tous les goûts, y compris des menus spéciaux pour les enfants.",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              a.jsx("div", {
                className:
                  "h-[35vw] w-full rounded-2xl bg-[url('/public/static/images/wifi.png')] bg-cover bg-center",
              }),
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-5 rounded-2xl bg-[#EBEBEB] p-5 text-white",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className: "text-2xl text-[#838383]",
                        children: "02.",
                      }),
                      a.jsx("span", {
                        className: "text-2xl font-semibold text-black",
                        children: "Divertissement",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "text-sm text-[#838383]",
                    children:
                      "Ne vous ennuyez jamais avec notre large choix de divertissements, incluant un cinéma, des spectacles en direct, et des zones de jeux pour enfants.",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "flex grow flex-col items-stretch justify-between gap-4 rounded-2xl bg-[#CDCDCD] p-5 text-white",
            children: [
              a.jsxs("div", {
                className: "flex flex-col",
                children: [
                  a.jsx("span", {
                    className: "text-2xl text-black",
                    children: "03.",
                  }),
                  a.jsx("span", {
                    className: "text-2xl font-semibold text-[#797979]",
                    children: "Wifi et Connectivité",
                  }),
                ],
              }),
              a.jsx("span", {
                className: "text-sm text-black",
                children:
                  "Ne vous ennuyez jamais avec notre large choix de divertissements, incluant un cinéma, des spectacles en direct, et des zones de jeux pour enfants.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-2",
            children: [
              a.jsx("div", {
                className:
                  "h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/shopping.png')] bg-cover bg-center",
              }),
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-7 rounded-2xl bg-[#6C6C6C] p-5 text-white",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className: "text-2xl text-[#E3E3E3]",
                        children: "04.",
                      }),
                      a.jsx("span", {
                        className: "text-2xl font-semibold",
                        children: "Shopping à bord",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "text-sm text-[#E3E3E3]",
                    children:
                      "Profitez de notre boutique détaxée pour acheter des souvenirs, des articles de mode, et des produits de luxe.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "hidden grid-cols-[1fr,3fr] md:grid md:gap-2 xl:gap-4 3xl:gap-5",
        children: [
          a.jsxs("div", {
            className:
              "flex flex-col md:h-[100%] md:gap-2 2md:h-[26rem] xl:h-[33rem] xl:gap-4 3xl:h-[48rem] 3xl:gap-5",
            children: [
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between bg-black text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col md:gap-2 3xl:gap-10",
                    children: [
                      a.jsx("span", {
                        className:
                          "text-[#838383] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl",
                        children: "01.",
                      }),
                      a.jsx("span", {
                        className:
                          "font-semibold 2md:text-xl xl:text-3xl 3xl:text-4xl",
                        children: "Restauration",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className:
                      "text-[#838383] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg",
                    children:
                      "Savourez une cuisine délicieuse à bord, avec des options pour tous les goûts, y compris des menus spéciaux pour les enfants.",
                  }),
                ],
              }),
              a.jsx("div", {
                className:
                  "bg-[url('/public/static/images/restauration.png')] bg-cover bg-center md:h-[9.5rem] md:rounded-xl 2md:h-[10rem] xl:h-[13rem] 3xl:h-[19rem] 3xl:rounded-3xl",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col md:gap-2 xl:gap-4 3xl:gap-5",
            children: [
              a.jsxs("div", {
                className: "grid grid-cols-2 md:gap-2 xl:gap-4 3xl:gap-5",
                children: [
                  a.jsx("div", {
                    className:
                      "bg-[url('/public/static/images/wifi.png')] bg-cover bg-center md:rounded-xl 2md:h-[12rem] xl:h-full 3xl:rounded-3xl",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col justify-between bg-[#CDCDCD] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:gap-6 3xl:rounded-3xl 3xl:px-6 3xl:py-10",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col md:gap-2 3xl:gap-10",
                        children: [
                          a.jsx("span", {
                            className:
                              "text-black md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl",
                            children: "03.",
                          }),
                          a.jsx("span", {
                            className:
                              "font-semibold text-[#797979] 2md:text-xl xl:text-3xl 3xl:text-3xl",
                            children: "Wifi et Connectivité",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className:
                          "text-black md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg",
                        children:
                          "Restez connecté tout au long de votre voyage grâce à notre service Wi-Fi disponible dans les espaces communs et certaines cabines.",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grow grid-cols-3 md:gap-2 xl:gap-4 3xl:gap-5",
                children: [
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col justify-between bg-[#EBEBEB] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col md:gap-2 3xl:gap-10",
                        children: [
                          a.jsx("span", {
                            className:
                              "text-[#838383] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl",
                            children: "02.",
                          }),
                          a.jsx("span", {
                            className:
                              "font-semibold text-black 2md:text-xl xl:text-3xl 3xl:text-3xl",
                            children: "Divertissement",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className:
                          "text-[#838383] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg",
                        children:
                          "Ne vous ennuyez jamais avec notre large choix de divertissements, incluant un cinéma, des spectacles en direct, et des zones de jeux pour enfants.",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "bg-[url('/public/static/images/shopping.png')] bg-cover bg-center md:rounded-xl 3xl:rounded-3xl",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex grow flex-col justify-between bg-[#6C6C6C] text-white md:rounded-xl md:px-3 md:py-5 xl:px-5 xl:py-9 3xl:rounded-3xl 3xl:px-6 3xl:py-10",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-col md:gap-2 3xl:gap-10",
                        children: [
                          a.jsx("span", {
                            className:
                              "text-[#E] md:text-xl 2md:text-3xl xl:text-4xl 3xl:text-5xl",
                            children: "04.",
                          }),
                          a.jsx("span", {
                            className:
                              "font-semibold 2md:text-xl xl:text-3xl 3xl:text-3xl",
                            children: "Shopping à bord",
                          }),
                        ],
                      }),
                      a.jsx("span", {
                        className:
                          "text-[#E3E3E3] md:text-2xs md:leading-3 2md:text-xs xl:text-sm 3xl:text-lg",
                        children:
                          "Profitez de notre boutique détaxée pour acheter des souvenirs, des articles de mode, et des produits de luxe.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function x2() {
  return a.jsxs("div", {
    className: "flex flex-col justify-center",
    children: [
      a.jsx("div", {
        className:
          "absolute left-0 top-[-5rem] z-[-1] w-full bg-[url('/public/static/images/home.png')] bg-cover bg-center md:top-0",
        children: a.jsx("div", {
          className:
            "h-[54dvh] w-full bg-gradient-to-b from-[#00000030] from-[55.4%] to-[#FFF] to-[85%] ls:h-screen md:bg-none",
        }),
      }),
      a.jsx("div", {
        className:
          "pb-16 pt-[calc(35dvh)] text-center ls:pt-[calc(60dvh)] md:h-[95dvh] md:py-0",
        children: a.jsxs("div", {
          className:
            "flex flex-col items-center justify-center gap-2 md:h-[60%] md:gap-0 2md:gap-2",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("h1", {
                  className:
                    "text-xl md:text-lg md:leading-4 2md:mb-2 2md:text-base lg:text-xl 3xl:text-2xl",
                  children: "Bienvenue à Bord de",
                }),
                a.jsx("h1", {
                  className:
                    "text-4xl font-[900] md:text-4xl md:leading-8 2md:text-3xl 2md:leading-[1.2rem] lg:text-[2.5rem] lg:leading-[2rem] xl:text-5xl",
                  children: "Nouris Elbahr Ferries",
                }),
              ],
            }),
            a.jsx("span", {
              className:
                "bg-black px-1 py-1.5 font-aoboshi text-lg font-[300] leading-5 tracking-wide text-nouris md:px-2 md:py-0 md:text-[0.85rem] md:leading-6 2md:px-2 2md:py-[0.05rem] 2md:text-[0.6rem] lg:text-xs lg:leading-5 xl:px-3 xl:text-base 3xl:py-1",
              children: "Voyagez en Méditerranée avec Confort et Sérénité",
            }),
          ],
        }),
      }),
      a.jsx("div", {
        className: "mx-auto text-center md:max-w-[75%]",
        children: a.jsx("p", {
          className:
            "text-lg font-medium text-[#000] md:text-sm md:leading-[1.25rem] 2md:text-[0.9rem] 2md:leading-[1.25rem] xl:text-[1.25rem] xl:leading-[1.6rem] 3xl:text-2xl",
          children:
            "Nouris Elbahr Ferries est la première compagnie de transport maritime privée en Algérie, dédiée à offrir des traversées inoubliables à travers la Méditerranée. Que vous voyagiez pour affaires ou pour le plaisir, notre objectif est de vous offrir une expérience de voyage exceptionnelle, alliant confort, sécurité, et service de qualité. Embarquez avec nous pour découvrir les plus belles destinations méditerranéennes à bord du Cracovia, notre navire moderne et parfaitement équipé.",
        }),
      }),
    ],
  });
}
function v2() {
  const e = h.useRef(null),
    t = () => {
      e.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  return a.jsxs("div", {
    className: "mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40",
    children: [
      a.jsx(x2, {}),
      a.jsx(d2, { onClick: t }),
      a.jsx(f2, {}),
      a.jsx(h2, {}),
      a.jsx(m2, { targetRef: e }),
      a.jsx(c2, {}),
    ],
  });
}
function g2() {
  return a.jsxs("div", {
    className:
      "flex flex-col items-center justify-center space-y-10 md:space-y-14",
    children: [
      a.jsx("img", { src: zh, className: "h-[8rem] md:h-[7rem] lg:h-[10rem]" }),
      a.jsxs("div", {
        className:
          "text-center text-4xl font-bold text-black md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[4rem]",
        children: [
          a.jsx("span", { className: "text-nouris", children: "Histroire " }),
          a.jsx("span", { children: "de l'Entreprise" }),
        ],
      }),
      a.jsx("div", {
        className: "mx-auto max-w-[80%] text-center font-medium",
        children: a.jsx("p", {
          className: "text-lg text-black xl:text-[1.25rem] 3xl:text-2xl",
          children:
            "Fondée en 2024, Nouris Elbahr Ferries s’est imposée comme un acteur clé du transport maritime en Algérie, offrant des liaisons sûres et confortables à destination de l’Europe. Nous nous engageons à offrir une qualité de service irréprochable à bord de notre navire, le Cracovia.",
        }),
      }),
    ],
  });
}
function y2() {
  return a.jsxs("div", {
    className: "flex flex-col justify-center",
    children: [
      a.jsx("div", {
        className:
          "absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/about.jpg')] bg-cover bg-center",
        children: a.jsx("div", {
          className:
            "h-screen w-full bg-gradient-to-b from-[#00000040] from-[60.4%] to-[#FFF] to-[85%]",
        }),
      }),
      a.jsxs("div", {
        className:
          "flex h-[95dvh] flex-col items-center justify-center text-center",
        children: [
          a.jsxs("div", {
            className:
              "text-4xl font-bold text-white md:text-[2.5rem] lg:text-[3rem] lg:leading-[2.75rem] xl:text-[3.5rem] 3xl:text-[5rem] 3xl:leading-[4.3rem]",
            children: [
              a.jsx("span", { className: "text-nouris", children: "Qui " }),
              a.jsx("span", { children: "sommes-nous ?" }),
            ],
          }),
          a.jsx("span", {
            className:
              "text-center text-lg font-light text-white md:text-sm lg:text-lg xl:text-xl xl:leading-10 3xl:text-[1.75rem]",
            children:
              "La Première Compagnie de Transport Maritime Privée en Algérie",
          }),
        ],
      }),
    ],
  });
}
function w2() {
  return a.jsxs("div", {
    className: "pb-48",
    children: [
      a.jsxs("div", {
        className:
          "pb-8 text-center text-4xl font-bold text-black md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[5rem]",
        children: [
          a.jsx("span", { children: "Nos " }),
          a.jsx("span", { className: "text-nouris", children: "Valeurs" }),
        ],
      }),
      a.jsxs("div", {
        className:
          "grid w-[100%] gap-2 md:grid-cols-[1fr,1fr,2fr] md:gap-2 3xl:gap-5",
        children: [
          a.jsxs("div", {
            className:
              "flex flex-col gap-3 md:gap-2 lg:h-[20rem] xl:h-[25rem] 3xl:h-[32rem] 3xl:gap-5",
            children: [
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:gap-2 md:p-3 xl:p-4 3xl:p-6",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold md:text-2xl lg:text-3xl xl:text-3xl",
                        children: "01",
                      }),
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg",
                        children: "Sécurité",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "md:text-xs xl:text-sm 3xl:text-lg",
                    children:
                      "Nous mettons un point d'honneur à garantir des voyages sûrs et tranquilles.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:gap-2 md:p-3 xl:p-4 3xl:p-6",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold md:text-2xl lg:text-3xl xl:text-3xl 3xl:text-4xl",
                        children: "02",
                      }),
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg",
                        children: "Confort",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "md:text-xs xl:text-sm 3xl:text-lg",
                    children:
                      "Offrir une expérience à bord agréable avec des installations modernes.",
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            className:
              "mb-3 h-[45dvw] w-[100%] rounded-2xl bg-[url('/public/static/images/valeurs1.png')] bg-cover bg-center ls:mb-0 ls:h-auto 3xl:h-[32rem]",
          }),
          a.jsxs("div", {
            className:
              "w-[100%] space-y-2 rounded-2xl bg-cover bg-center md:bg-[url('/public/static/images/valeurs2.png')] 3xl:h-[32rem]",
            children: [
              a.jsxs("div", {
                className:
                  "flex min-w-[47%] grow flex-col items-stretch justify-between gap-6 rounded-xl border-2 bg-[#FCFCFC] p-4 text-black md:h-[47%] md:w-[47%] md:gap-0 md:p-3 3xl:gap-6 3xl:p-6",
                children: [
                  a.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold md:text-2xl lg:text-3xl 3xl:text-4xl",
                        children: "03",
                      }),
                      a.jsx("span", {
                        className:
                          "text-2xl font-bold text-[#484848] md:text-xs xl:text-sm 3xl:text-lg",
                        children: "Engagement",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className:
                      "md:text-xs md:leading-[0.8rem] xl:text-sm 3xl:text-lg",
                    children:
                      "Assurer une qualité de service élevée pour nos passagers et partenaires.",
                  }),
                ],
              }),
              a.jsx("div", {
                className:
                  "h-[35dvw] w-full rounded-2xl bg-[url('/public/static/images/valeurs2.png')] bg-cover bg-center md:hidden 3xl:h-[32rem]",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const rf = "/assets/vision-BKC80fzL.png";
function N2() {
  return a.jsxs("div", {
    className: "flex w-full flex-col gap-5 md:flex-row 3xl:gap-24",
    children: [
      a.jsxs("div", {
        className: "flex grow flex-col justify-center space-y-5 md:w-[50%]",
        children: [
          a.jsxs("div", {
            className:
              "text-4xl font-bold md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 3xl:text-[5rem]",
            children: [
              a.jsx("span", { children: "Notre " }),
              a.jsx("span", { className: "text-nouris", children: "Vision" }),
            ],
          }),
          a.jsx("div", {
            className: "md:hidden md:w-[50%]",
            children: a.jsx("img", {
              src: rf,
              className: "rounded-xl md:rounded-md 3xl:rounded-2xl",
            }),
          }),
          a.jsx("span", {
            className:
              "font-medium md:text-base lg:mr-16 xl:text-xl 3xl:text-2xl",
            children:
              "Être le choix privilégié pour le transport maritime en Méditerranée, tout en garantissant la sécurité, le confort et la satisfaction de nos passagers.",
          }),
        ],
      }),
      a.jsx("div", {
        className: "hidden md:block md:w-[50%]",
        children: a.jsx("img", {
          src: rf,
          className: "md:rounded-md 3xl:rounded-2xl",
        }),
      }),
    ],
  });
}
function C2() {
  return a.jsxs("div", {
    className: "mx-auto max-w-[80%]",
    children: [
      a.jsx(y2, {}),
      a.jsxs("div", {
        className: "space-y-36 md:space-y-40 3xl:space-y-40",
        children: [a.jsx(g2, {}), a.jsx(N2, {}), a.jsx(w2, {})],
      }),
    ],
  });
}
function S2() {
  return a.jsxs("div", {
    className: "space-y-5",
    children: [
      a.jsxs("h1", {
        className:
          "text-center text-4xl font-bold md:mb-5 md:text-4xl lg:mb-7 lg:text-5xl xl:text-6xl 3xl:mb-8 3xl:text-7xl",
        children: [
          a.jsx("span", { className: "text-nouris", children: "Capacité " }),
          "et Confort à Bord",
        ],
      }),
      a.jsxs("div", {
        className:
          "flex flex-col gap-3 sm:grid sm:grid-cols-2 md:gap-3 lg:grid-cols-4 3xl:gap-5",
        children: [
          a.jsxs("div", {
            className:
              "flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:px-3 md:py-4 lg:p-5 xl:py-7 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-10",
            children: [
              a.jsxs("div", {
                className: "flex flex-col",
                children: [
                  a.jsx("span", {
                    className:
                      "text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl",
                    children: "650",
                  }),
                  a.jsx("span", {
                    className:
                      "text-2xl font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg",
                    children: "Capacité des Passagers",
                  }),
                ],
              }),
              a.jsx("span", {
                className:
                  "text-lg md:text-xs lg:text-sm lg:leading-4 xl:text-base xl:leading-5 3xl:text-lg",
                children:
                  "Le Cracovia peut accueillir jusqu'à 650 passagers, leur offrant un espace de voyage confortable avec des options variées de cabines adaptées à tous les besoins et budgets. Chaque cabine est équipée de lits confortables, de salles de bain privatives, et de toutes les commodités nécessaires pour un voyage agréable.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-3 3xl:gap-5",
            children: [
              a.jsx("div", {
                className:
                  "h-[25vh] w-[100%] rounded-2xl bg-[url('/public/static/images/cap-1.png')] bg-cover bg-center sm:h-[80%] md:rounded-lg 3xl:rounded-2xl",
              }),
              a.jsx("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-10 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:rounded-xl 3xl:border-2 3xl:p-6",
                children: a.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    a.jsx("span", {
                      className:
                        "text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl",
                      children: "64",
                    }),
                    a.jsx("span", {
                      className:
                        "text-2xl font-bold text-[#484848] lg:text-sm xl:text-base 3xl:text-lg",
                      children: "Voitures",
                    }),
                  ],
                }),
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:gap-2 md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:gap-6 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-10",
            children: [
              a.jsxs("div", {
                className: "flex flex-col",
                children: [
                  a.jsx("span", {
                    className:
                      "text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl",
                    children: "98",
                  }),
                  a.jsx("span", {
                    className:
                      "text-2xl font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg",
                    children: "Camions de longue distance",
                  }),
                ],
              }),
              a.jsx("span", {
                className:
                  "md:text-xs lg:text-sm lg:leading-4 xl:text-base xl:leading-5 3xl:text-lg",
                children:
                  "Grâce à sa capacité exceptionnelle, le Cracovia est idéal pour les voyageurs en voiture ainsi que pour le transport de marchandises, offrant une grande flexibilité pour les entreprises et les voyageurs individuels.",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex flex-col gap-3 3xl:gap-5",
            children: [
              a.jsx("div", {
                className:
                  "flex grow flex-col items-stretch justify-between gap-5 rounded-2xl border-[1px] bg-[#FCFCFC] p-6 text-black md:rounded-lg md:border-[1px] md:px-3 md:py-4 lg:px-5 xl:py-7 3xl:gap-6 3xl:rounded-xl 3xl:border-2 3xl:px-6 3xl:py-7",
                children: a.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    a.jsx("span", {
                      className:
                        "text-2xl font-bold md:text-xl lg:text-3xl xl:text-4xl 3xl:text-4xl",
                      children: "26",
                    }),
                    a.jsx("span", {
                      className:
                        "font-bold text-[#484848] md:text-xs lg:text-sm xl:text-base 3xl:text-lg",
                      children: "Camions de courte distance",
                    }),
                  ],
                }),
              }),
              a.jsx("div", {
                className:
                  "h-[25vh] w-[100%] rounded-2xl bg-[url('/public/static/images/cap-2.png')] bg-cover bg-center sm:h-[80%] md:rounded-lg 3xl:rounded-2xl",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function E2() {
  return a.jsxs("div", {
    className: "space-y-5 pb-20 lg:pb-32 3xl:pb-48",
    children: [
      a.jsxs("h1", {
        className:
          "text-center text-4xl font-bold md:mb-8 md:text-4xl lg:mb-10 lg:text-5xl xl:text-6xl 3xl:mb-20 3xl:text-7xl",
        children: [
          "Pourquoi choisir",
          a.jsx("span", {
            className: "text-nouris",
            children: " Le Cracovia?",
          }),
        ],
      }),
      a.jsx("div", {
        className:
          "m-auto w-[70%] text-center text-lg md:text-sm lg:text-base xl:text-xl 3xl:text-[1.45rem] 3xl:leading-[2rem]",
        children:
          "Le Cracovia représente le summum du confort et de la sécurité pour vos voyages en Méditerranée. Que vous voyagiez pour affaires, en famille, ou pour transporter des marchandises, le Cracovia vous offre une expérience maritime inégalée, avec un service à bord de qualité et une flexibilité maximale pour répondre à tous vos besoins.",
      }),
    ],
  });
}
function b2() {
  return a.jsxs("div", {
    className: "space-y-5",
    children: [
      a.jsxs("h1", {
        className:
          "text-4xl font-bold md:mb-7 md:text-4xl lg:text-5xl xl:text-6xl 3xl:mb-14 3xl:text-7xl",
        children: [
          a.jsx("span", { className: "text-nouris", children: "Sécurité " }),
          "et Confirmité",
        ],
      }),
      a.jsxs("div", {
        className:
          "flex flex-col gap-4 md:gap-4 2md:grid 2md:grid-cols-[5fr,6fr] 3xl:gap-5",
        children: [
          a.jsx("div", {
            className:
              "h-[30vh] w-[100%] rounded-2xl bg-[url('/public/static/images/securite.png')] bg-cover bg-center ls:h-[50vh] md:rounded-lg 2md:h-[100%] lg:rounded-xl 3xl:rounded-2xl",
          }),
          a.jsx("span", {
            className:
              "text-lg md:text-xs lg:text-base xl:text-lg xl:leading-7 3xl:text-[1.45rem] 3xl:leading-[2rem]",
            children:
              "La sécurité de nos passagers et de notre équipage est notre priorité absolue. Le Cracovia est conforme à toutes les exigences des Conventions internationales et aux recommandations de l'Organisation Maritime Internationale (OMI). Notre navire est équipé des dernières technologies en matière de sécurité maritime, garantissant une navigation stable et sécurisée même dans des conditions difficiles.",
          }),
        ],
      }),
    ],
  });
}
const j2 = "/assets/serv-1-DrtAdnpM.png",
  k2 = "/assets/serv-2-DnScyTWR.png",
  R2 = "/assets/serv-3-6LggBMbF.png",
  P2 =
    "data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.66666%200.396372L4.91136%203.21522L16.0373%206.19642L0.667201%2015.0704L2.12553%2017.5963L17.4957%208.72233L14.5145%2019.8483L17.3333%2020.6036L21.6036%204.66667L5.66666%200.396372Z'%20fill='%23484848'/%3e%3c/svg%3e";
function _2() {
  const e = [
      {
        code: "A",
        title: "Divertissement",
        link: j2,
        text: `Ne vous ennuyez jamais lors de votre traversée grâce aux
                nombreuses options de divertissement disponibles. Le Cracovia
                dispose d'un cinéma, de zones de jeux pour enfants, ainsi
                que d'espaces dédiés aux spectacles en direct et aux
                animations.`,
      },
      {
        code: "B",
        title: "Restaurants et Cafés",
        link: k2,
        text: `À bord du Cracovia, vous pouvez profiter d'une expérience
                culinaire variée avec plusieurs restaurants et cafés proposant
                des plats locaux et internationaux. Que vous recherchiez un
                repas complet ou une collation rapide, nos établissements
                répondent à toutes vos envies.`,
      },
      {
        code: "C",
        title: "Shopping à Bord",
        link: R2,
        text: "Faites du shopping en mer avec notre boutique détaxée, où vous trouverez une sélection de souvenirs, d'articles où vous trouverez avec notre boutique détaxée du shopping en mer avec notre en mer avec notre boutique détaxée où vous trouverez une sélection avec notre boutique détaxée.",
      },
    ],
    [t, n] = h.useState(e),
    r = t[0].code,
    l = t[1].code,
    o = t[2].code,
    i = (s) => {
      const u = t.findIndex((d) => d.code === s);
      if (u === -1) return;
      const c = [...t];
      ([c[0], c[u]] = [c[u], c[0]]), n(c);
    };
  return a.jsx(a.Fragment, {
    children: a.jsxs("div", {
      className: "space-y-5",
      children: [
        a.jsxs("div", {
          className:
            "text-4xl font-bold md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl 3xl:mb-5 3xl:text-[5rem] 3xl:leading-[5.5rem]",
          children: [
            a.jsx("span", { className: "text-nouris", children: "Services " }),
            a.jsxs("span", {
              children: ["et ", a.jsx("br", {}), " commodités à bord"],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "hidden w-[80vw] flex-col gap-3 2md:flex",
          children: [
            a.jsx("div", {
              className: "relative flex md:h-3 lg:h-5 xl:h-7 3xl:h-10",
              children: e.map((s) =>
                a.jsx(
                  "span",
                  {
                    className: `absolute transition-all duration-500 ease-in-out md:text-xs lg:text-base xl:text-xl 3xl:text-2xl ${l === `${s.code}` ? "translate-x-[calc(40vw+1.25rem)] text-[#00000066]" : o === `${s.code}` ? "translate-x-[calc(40vw+17vw+2.5rem)] text-[#00000066]" : "font-bold text-black"} `,
                    children: s.title,
                  },
                  `${s.code}`
                )
              ),
            }),
            a.jsxs("div", {
              className: "flex md:gap-4 3xl:gap-5",
              children: [
                a.jsx("div", {
                  className: "main relative",
                  children: e.map((s, u) =>
                    a.jsxs(
                      "div",
                      {
                        className: `flex w-[40vw] flex-col transition-opacity duration-500 ease-in-out md:gap-2 3xl:gap-3 ${r === `${s.code}` ? "opacity-100" : "pointer-events-none absolute left-0 top-0 opacity-0"} `,
                        children: [
                          a.jsx("div", {
                            className:
                              "w-full overflow-hidden md:h-[14rem] md:rounded-lg lg:h-[18rem] xl:h-[21rem] xl:rounded-xl 3xl:h-[25rem] 3xl:rounded-[1rem]",
                            children: a.jsx("img", {
                              src: s.link,
                              className: "h-full w-full object-cover",
                            }),
                          }),
                          a.jsx("span", {
                            className:
                              "text-[#484848] md:text-2xs md:leading-3 lg:text-sm 3xl:pb-20 3xl:text-xl",
                            children: s.text,
                          }),
                        ],
                      },
                      u
                    )
                  ),
                }),
                [l, o].map((s) =>
                  a.jsx(
                    "div",
                    {
                      className: "relative w-[17vw]",
                      children: e.map((u, c) =>
                        a.jsxs(
                          "div",
                          {
                            className: `flex flex-col transition-all duration-500 ease-in-out md:gap-2 3xl:gap-3 ${s === `${u.code}` ? "opacity-100" : "pointer-events-none absolute left-0 top-0 opacity-0"} w-full`,
                            children: [
                              a.jsxs("div", {
                                className:
                                  "relative w-full overflow-hidden md:h-[14rem] md:rounded-lg lg:h-[18rem] xl:h-[21rem] 3xl:h-[25rem] 3xl:rounded-[1rem]",
                                children: [
                                  a.jsx("img", {
                                    src: u.link,
                                    className: "h-full w-full object-cover",
                                  }),
                                  a.jsx("div", {
                                    className:
                                      "absolute inset-0 flex items-center justify-center rounded-lg bg-[#75757599]",
                                    children: a.jsx("img", {
                                      onClick: () => i(`${u.code}`),
                                      src: P2,
                                      className:
                                        "z-50 inline-block cursor-pointer rounded-full bg-nouris md:p-5 3xl:p-10",
                                    }),
                                  }),
                                ],
                              }),
                              a.jsx("span", {
                                className:
                                  "line-clamp-3 text-[#48484866] md:text-2xs md:leading-3 lg:text-sm 3xl:text-xl",
                                children: u.text,
                              }),
                            ],
                          },
                          c
                        )
                      ),
                    },
                    s
                  )
                ),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: "space-y-14 2md:hidden",
          children: e.map((s) =>
            a.jsxs(
              "div",
              {
                className:
                  "flex flex-col transition-opacity duration-500 ease-in-out opacity-100 grid-cols-2 gap-4 ls:grid",
                children: [
                  a.jsx("div", {
                    className: "w-full overflow-hidden",
                    children: a.jsx("img", {
                      src: s.link,
                      className:
                        "h-full w-full rounded-2xl object-cover ls:rounded-3xl",
                    }),
                  }),
                  a.jsx("span", {
                    className: "text-lg text-[#484848]",
                    children: s.text,
                  }),
                ],
              },
              s.code
            )
          ),
        }),
      ],
    }),
  });
}
const L2 = "/assets/specs-2dWbgIcL.png";
function T2() {
  return a.jsxs("div", {
    className: "flex ls:gap-7 md:gap-10 md:pt-[7rem] 3xl:gap-10",
    children: [
      a.jsxs("div", {
        className: "flex w-full flex-col space-y-5 md:w-[65%]",
        children: [
          a.jsxs("h1", {
            className:
              "text-4xl font-bold 2md:mb-4 lg:text-5xl xl:mb-8 xl:text-6xl 3xl:text-7xl",
            children: [
              a.jsx("span", {
                className: "text-nouris",
                children: "Caractéristiques ",
              }),
              "Techniques et Opérationnelles",
            ],
          }),
          a.jsx("span", {
            className:
              "md:leading[1.5rem] text-lg 2md:text-base xl:mb-10 xl:text-[1.4rem] xl:leading-[1.85rem]",
            children:
              "Le Cracovia est équipé pour naviguer en toute sécurité dans toutes les conditions maritimes, répondant aux exigences des Conventions internationales, des recommandations de l'Organisation Maritime Internationale (OMI), ainsi qu'aux autres restrictions de navigation en vigueur",
          }),
          a.jsxs("div", {
            className:
              "divide-y-[1px] divide-nouris text-xl font-medium leading-10 md:text-2xl 2md:text-[0.85rem] 2md:leading-3 lg:text-base xl:text-[1.4rem] 3xl:divide-y-2 3xl:pr-28",
            children: [
              a.jsxs("div", {
                className:
                  "flex items-center justify-between md:py-2 lg:py-4 xl:py-5",
                children: [
                  a.jsx("span", { children: "Longueur (mètres)" }),
                  a.jsx("span", {
                    className: "lg:text-xl xl:text-[1.65rem]",
                    children: "180",
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "flex items-center justify-between md:py-2 lg:py-4 xl:py-5",
                children: [
                  a.jsx("span", { children: "Largeur (mètres)" }),
                  a.jsx("span", {
                    className: "lg:text-xl xl:text-[1.65rem]",
                    children: "24.80",
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "flex items-center justify-between md:py-2 lg:py-4 xl:py-5",
                children: [
                  a.jsx("span", { children: "Tirant d'eau (mètres)" }),
                  a.jsx("span", {
                    className: "lg:text-xl xl:text-[1.65rem]",
                    children: "6.5",
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "flex items-center justify-between md:py-2 lg:py-4 xl:py-5",
                children: [
                  a.jsx("span", {
                    children: "Longueur de la ligne de charge (mètres)",
                  }),
                  a.jsx("span", {
                    className: "lg:text-xl xl:text-[1.65rem]",
                    children: "2196",
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "flex items-center justify-between md:pt-2 lg:py-4 xl:pt-5",
                children: [
                  a.jsx("span", {
                    children: "Largeur de la ligne de charge (mètres)",
                  }),
                  a.jsx("span", {
                    className: "lg:text-xl xl:text-[1.65rem]",
                    children: "16.7",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "hidden flex-grow overflow-hidden rounded-[1rem] sm:block",
        children: a.jsx("img", {
          src: L2,
          className: "h-full w-full object-cover",
        }),
      }),
    ],
  });
}
function D2() {
  return a.jsxs("div", {
    className: "mx-auto flex w-[93%] flex-col justify-center",
    children: [
      a.jsx("div", {
        className:
          "absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/cracovia.jpg')] bg-cover bg-center",
        children: a.jsx("div", {
          className:
            "h-[55vh] w-full bg-gradient-to-t from-[#FCFCFC] from-[2%] to-[#0000007a] to-[74%] ls:h-[100vh] 2md:h-screen",
        }),
      }),
      a.jsxs("div", {
        className:
          "mx-auto flex h-[65vh] w-[75%] flex-col items-center justify-center text-center text-4xl font-bold text-white ls:h-[85vh] 2md:h-[65vh] lg:text-5xl xl:text-6xl 3xl:text-7xl",
        children: [
          a.jsxs("h1", {
            children: [
              a.jsx("span", { children: "Découvrez " }),
              a.jsx("span", {
                className: "text-nouris",
                children: "Notre Navire ",
              }),
              a.jsx("span", { children: "Moderne et Performant" }),
            ],
          }),
          a.jsx("h1", {
            className:
              "font-cracovia font-thin text-nouris md:text-xl xl:text-2xl 3xl:text-3xl",
            children: "Le Cracovia",
          }),
        ],
      }),
      a.jsx("span", {
        className:
          "mx-auto w-[75%] text-center text-lg font-medium 2md:text-sm lg:text-base xl:text-2xl 3xl:text-3xl",
        children:
          "Le Cracovia est le navire phare de la flotte de Nouris Elbahr Ferries, offrant une combinaison parfaite de confort, de sécurité et de performance pour tous vos voyages en Méditerranée. Entièrement reconstruit en 2017 dans un chantier naval polonais pour répondre aux normes les plus strictes de l'industrie maritime. Le Cracovia est conçu pour accueillir jusqu'à 650 passagers, 64 voitures, ainsi que 98 camions de longue distance et 26 camions de courte distance en une seule traversée.",
      }),
    ],
  });
}
function M2() {
  return a.jsxs("div", {
    className: "mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40",
    children: [
      a.jsx(D2, {}),
      a.jsx(T2, {}),
      a.jsx(_2, {}),
      a.jsx(S2, {}),
      a.jsx(b2, {}),
      a.jsx(E2, {}),
    ],
  });
}
const z2 = "/assets/reservez-Tm5SDYXI.svg";
function O2() {
  const e = h.useRef(null),
    t = () => {
      e.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  return a.jsxs("div", {
    className: "space-y-7",
    children: [
      a.jsx("h1", {
        className:
          "text-center text-4xl text-[2.5rem] font-bold tracking-[-0.08em] text-[#3C3C3C] ls:text-4xl ls:text-[2.5rem] 2md:text-6xl lg:text-7xl xl:text-6xl xl:text-[4.25rem] 3xl:text-8xl",
        children: "DESTINATIONS",
      }),
      a.jsx(Oh, { onClick: t }),
      a.jsx("img", { src: z2, className: "w-[100%] pb-16" }),
      a.jsx(Ih, { targetRef: e }),
    ],
  });
}
function I2(e, t = []) {
  let n = [];
  function r(o, i) {
    const s = h.createContext(i),
      u = n.length;
    n = [...n, i];
    function c(f) {
      const { scope: m, children: y, ...C } = f,
        v = (m == null ? void 0 : m[e][u]) || s,
        b = h.useMemo(() => C, Object.values(C));
      return a.jsx(v.Provider, { value: b, children: y });
    }
    function d(f, m) {
      const y = (m == null ? void 0 : m[e][u]) || s,
        C = h.useContext(y);
      if (C) return C;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return (c.displayName = o + "Provider"), [c, d];
  }
  const l = () => {
    const o = n.map((i) => h.createContext(i));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || o;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (l.scopeName = e), [r, A2(l, ...t)];
}
function A2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (o) {
      const i = r.reduce((s, { useScope: u, scopeName: c }) => {
        const f = u(o)[`__scope${c}`];
        return { ...s, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function F2(e) {
  const t = e + "CollectionProvider",
    [n, r] = I2(t),
    [l, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: C, children: v } = y,
        b = Ee.useRef(null),
        x = Ee.useRef(new Map()).current;
      return a.jsx(l, { scope: C, itemMap: x, collectionRef: b, children: v });
    };
  i.displayName = t;
  const s = e + "CollectionSlot",
    u = Ee.forwardRef((y, C) => {
      const { scope: v, children: b } = y,
        x = o(s, v),
        p = St(C, x.collectionRef);
      return a.jsx(Ar, { ref: p, children: b });
    });
  u.displayName = s;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Ee.forwardRef((y, C) => {
      const { scope: v, children: b, ...x } = y,
        p = Ee.useRef(null),
        g = St(C, p),
        S = o(c, v);
      return (
        Ee.useEffect(
          () => (
            S.itemMap.set(p, { ref: p, ...x }), () => void S.itemMap.delete(p)
          )
        ),
        a.jsx(Ar, { [d]: "", ref: g, children: b })
      );
    });
  f.displayName = c;
  function m(y) {
    const C = o(e + "CollectionConsumer", y);
    return Ee.useCallback(() => {
      const b = C.collectionRef.current;
      if (!b) return [];
      const x = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(C.itemMap.values()).sort(
        (S, k) => x.indexOf(S.ref.current) - x.indexOf(k.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: f }, m, r];
}
var Qu = "Collapsible",
  [U2, Ah] = Bu(Qu),
  [B2, Ku] = U2(Qu),
  Fh = h.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: l,
        disabled: o,
        onOpenChange: i,
        ...s
      } = e,
      [u = !1, c] = Bi({ prop: r, defaultProp: l, onChange: i });
    return a.jsx(B2, {
      scope: n,
      disabled: o,
      contentId: wl(),
      open: u,
      onOpenToggle: h.useCallback(() => c((d) => !d), [c]),
      children: a.jsx(Ze.div, {
        "data-state": Yu(u),
        "data-disabled": o ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
Fh.displayName = Qu;
var Uh = "CollapsibleTrigger",
  Bh = h.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      l = Ku(Uh, n);
    return a.jsx(Ze.button, {
      type: "button",
      "aria-controls": l.contentId,
      "aria-expanded": l.open || !1,
      "data-state": Yu(l.open),
      "data-disabled": l.disabled ? "" : void 0,
      disabled: l.disabled,
      ...r,
      ref: t,
      onClick: Dt(e.onClick, l.onOpenToggle),
    });
  });
Bh.displayName = Uh;
var Gu = "CollapsibleContent",
  $h = h.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      l = Ku(Gu, e.__scopeCollapsible);
    return a.jsx(Gl, {
      present: n || l.open,
      children: ({ present: o }) => a.jsx($2, { ...r, ref: t, present: o }),
    });
  });
$h.displayName = Gu;
var $2 = h.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: l, ...o } = e,
    i = Ku(Gu, n),
    [s, u] = h.useState(r),
    c = h.useRef(null),
    d = St(t, c),
    f = h.useRef(0),
    m = f.current,
    y = h.useRef(0),
    C = y.current,
    v = i.open || s,
    b = h.useRef(v),
    x = h.useRef();
  return (
    h.useEffect(() => {
      const p = requestAnimationFrame(() => (b.current = !1));
      return () => cancelAnimationFrame(p);
    }, []),
    Ul(() => {
      const p = c.current;
      if (p) {
        (x.current = x.current || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName,
        }),
          (p.style.transitionDuration = "0s"),
          (p.style.animationName = "none");
        const g = p.getBoundingClientRect();
        (f.current = g.height),
          (y.current = g.width),
          b.current ||
            ((p.style.transitionDuration = x.current.transitionDuration),
            (p.style.animationName = x.current.animationName)),
          u(r);
      }
    }, [i.open, r]),
    a.jsx(Ze.div, {
      "data-state": Yu(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...o,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": C ? `${C}px` : void 0,
        ...e.style,
      },
      children: v && l,
    })
  );
});
function Yu(e) {
  return e ? "open" : "closed";
}
var V2 = Fh,
  W2 = Bh,
  H2 = $h,
  Q2 = h.createContext(void 0);
function K2(e) {
  const t = h.useContext(Q2);
  return e || t || "ltr";
}
var Zt = "Accordion",
  G2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Xu, Y2, X2] = F2(Zt),
  [Vi, yN] = Bu(Zt, [X2, Ah]),
  qu = Ah(),
  Vh = Ee.forwardRef((e, t) => {
    const { type: n, ...r } = e,
      l = r,
      o = r;
    return a.jsx(Xu.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? a.jsx(eN, { ...o, ref: t })
          : a.jsx(J2, { ...l, ref: t }),
    });
  });
Vh.displayName = Zt;
var [Wh, q2] = Vi(Zt),
  [Hh, Z2] = Vi(Zt, { collapsible: !1 }),
  J2 = Ee.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: l = () => {},
        collapsible: o = !1,
        ...i
      } = e,
      [s, u] = Bi({ prop: n, defaultProp: r, onChange: l });
    return a.jsx(Wh, {
      scope: e.__scopeAccordion,
      value: s ? [s] : [],
      onItemOpen: u,
      onItemClose: Ee.useCallback(() => o && u(""), [o, u]),
      children: a.jsx(Hh, {
        scope: e.__scopeAccordion,
        collapsible: o,
        children: a.jsx(Qh, { ...i, ref: t }),
      }),
    });
  }),
  eN = Ee.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: l = () => {}, ...o } = e,
      [i = [], s] = Bi({ prop: n, defaultProp: r, onChange: l }),
      u = Ee.useCallback((d) => s((f = []) => [...f, d]), [s]),
      c = Ee.useCallback((d) => s((f = []) => f.filter((m) => m !== d)), [s]);
    return a.jsx(Wh, {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: u,
      onItemClose: c,
      children: a.jsx(Hh, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: a.jsx(Qh, { ...o, ref: t }),
      }),
    });
  }),
  [tN, Wi] = Vi(Zt),
  Qh = Ee.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: l,
        orientation: o = "vertical",
        ...i
      } = e,
      s = Ee.useRef(null),
      u = St(s, t),
      c = Y2(n),
      f = K2(l) === "ltr",
      m = Dt(e.onKeyDown, (y) => {
        var R;
        if (!G2.includes(y.key)) return;
        const C = y.target,
          v = c().filter((D) => {
            var T;
            return !((T = D.ref.current) != null && T.disabled);
          }),
          b = v.findIndex((D) => D.ref.current === C),
          x = v.length;
        if (b === -1) return;
        y.preventDefault();
        let p = b;
        const g = 0,
          S = x - 1,
          k = () => {
            (p = b + 1), p > S && (p = g);
          },
          N = () => {
            (p = b - 1), p < g && (p = S);
          };
        switch (y.key) {
          case "Home":
            p = g;
            break;
          case "End":
            p = S;
            break;
          case "ArrowRight":
            o === "horizontal" && (f ? k() : N());
            break;
          case "ArrowDown":
            o === "vertical" && k();
            break;
          case "ArrowLeft":
            o === "horizontal" && (f ? N() : k());
            break;
          case "ArrowUp":
            o === "vertical" && N();
            break;
        }
        const P = p % x;
        (R = v[P].ref.current) == null || R.focus();
      });
    return a.jsx(tN, {
      scope: n,
      disabled: r,
      direction: l,
      orientation: o,
      children: a.jsx(Xu.Slot, {
        scope: n,
        children: a.jsx(Ze.div, {
          ...i,
          "data-orientation": o,
          ref: u,
          onKeyDown: r ? void 0 : m,
        }),
      }),
    });
  }),
  wi = "AccordionItem",
  [nN, Zu] = Vi(wi),
  Kh = Ee.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: r, ...l } = e,
      o = Wi(wi, n),
      i = q2(wi, n),
      s = qu(n),
      u = wl(),
      c = (r && i.value.includes(r)) || !1,
      d = o.disabled || e.disabled;
    return a.jsx(nN, {
      scope: n,
      open: c,
      disabled: d,
      triggerId: u,
      children: a.jsx(V2, {
        "data-orientation": o.orientation,
        "data-state": Jh(c),
        ...s,
        ...l,
        ref: t,
        disabled: d,
        open: c,
        onOpenChange: (f) => {
          f ? i.onItemOpen(r) : i.onItemClose(r);
        },
      }),
    });
  });
Kh.displayName = wi;
var Gh = "AccordionHeader",
  Yh = Ee.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      l = Wi(Zt, n),
      o = Zu(Gh, n);
    return a.jsx(Ze.h3, {
      "data-orientation": l.orientation,
      "data-state": Jh(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
Yh.displayName = Gh;
var Ia = "AccordionTrigger",
  Xh = Ee.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      l = Wi(Zt, n),
      o = Zu(Ia, n),
      i = Z2(Ia, n),
      s = qu(n);
    return a.jsx(Xu.ItemSlot, {
      scope: n,
      children: a.jsx(W2, {
        "aria-disabled": (o.open && !i.collapsible) || void 0,
        "data-orientation": l.orientation,
        id: o.triggerId,
        ...s,
        ...r,
        ref: t,
      }),
    });
  });
Xh.displayName = Ia;
var qh = "AccordionContent",
  Zh = Ee.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      l = Wi(Zt, n),
      o = Zu(qh, n),
      i = qu(n);
    return a.jsx(H2, {
      role: "region",
      "aria-labelledby": o.triggerId,
      "data-orientation": l.orientation,
      ...i,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
Zh.displayName = qh;
function Jh(e) {
  return e ? "open" : "closed";
}
var rN = Vh,
  lN = Kh,
  oN = Yh,
  ex = Xh,
  tx = Zh;
const iN = rN,
  Bo = h.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(lN, { ref: n, className: qt("border-b", e), ...t })
  );
Bo.displayName = "AccordionItem";
const $o = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.jsx(oN, {
    className: "flex",
    children: a.jsxs(ex, {
      ref: r,
      className: qt(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        a.jsx(qw, {
          className:
            "h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 ls:h-5 ls:w-5 md:h-6 md:w-6",
        }),
      ],
    }),
  })
);
$o.displayName = ex.displayName;
const Vo = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.jsx(tx, {
    ref: r,
    className:
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: a.jsx("div", { className: qt("pb-4 pt-0", e), children: t }),
  })
);
Vo.displayName = tx.displayName;
const Ts =
    "overflow-hidden rounded-xl md:rounded-2xl p-1 md:p-2 border border-[#ffdd0e] 3xl:gap-7 3xl:rounded-2xl 3xl:border-[1px] 3xl:px-5 3xl:py-5 3xl:text-lg",
  Ds =
    "text-xl pr-2 text-left ls:text-base ls:text-[1.075rem] md:text-xl md:text-[1.25rem] - 3xl:text-[1.4rem] 3xl:font-medium 3xl:leading-6 text-sm",
  Ms = "px-3 py-2 flex justify-between items-start hover:no-underline",
  zs = "text-base px-3 pb-2 text ls:text-base md:text-lg 3xl:text-lg";
function sN() {
  return a.jsxs(iN, {
    type: "single",
    collapsible: !0,
    className: "w-full space-y-2 md:text-xl",
    children: [
      a.jsxs(Bo, {
        value: "item-1",
        className: Ts,
        children: [
          a.jsx($o, {
            className: Ms,
            children: a.jsx("span", {
              className: Ds,
              children: "Quels sont les tarifs pour une traversée en ferry ?",
            }),
          }),
          a.jsx(Vo, {
            className: zs,
            children:
              'Les tarifs varient en fonction de la destination, de la saison et du type de billet. Visitez notre section "Réservations" pour obtenir un devis personnalisé et consulter nos offres spéciales.',
          }),
        ],
      }),
      a.jsxs(Bo, {
        value: "item-2",
        className: Ts,
        children: [
          a.jsx($o, {
            className: Ms,
            children: a.jsx("span", {
              className: Ds,
              children:
                "Quelles sont les destinations proposées par votre service de ferry ?",
            }),
          }),
          a.jsx(Vo, {
            className: zs,
            children:
              'Les tarifs varient en fonction de la destination, de la saison et du type de billet. Visitez notre section "Réservations" pour obtenir un devis personnalisé et consulter nos offres spéciales.',
          }),
        ],
      }),
      a.jsxs(Bo, {
        value: "item-3",
        className: Ts,
        children: [
          a.jsx($o, {
            className: Ms,
            children: a.jsx("span", {
              className: Ds,
              children: "Puis-je embarquer avec ma voiture ou mon vélo ?",
            }),
          }),
          a.jsx(Vo, {
            className: zs,
            children:
              'Les tarifs varient en fonction de la destination, de la saison et du type de billet. Visitez notre section "Réservations" pour obtenir un devis personnalisé et consulter nos offres spéciales.',
          }),
        ],
      }),
    ],
  });
}
function aN() {
  return a.jsxs("div", {
    className:
      "flex grid-cols-2 flex-col gap-5 space-y-5 pb-[7rem] ls:grid 3xl:pb-[15rem]",
    children: [
      a.jsxs("div", {
        className: "flex grow flex-col space-y-5",
        children: [
          a.jsxs("div", {
            className:
              "text-4xl font-bold md:mb-5 2md:mb-2 2md:text-5xl xl:text-[3.5rem] xl:leading-[1] 3xl:mb-8 3xl:text-7xl",
            children: [
              a.jsx("span", { children: "Frequently " }),
              a.jsx("span", {
                className: "text-nouris",
                children: "asked questions",
              }),
            ],
          }),
          a.jsx("span", {
            className:
              "text-lg font-medium text-[#414141] md:mb-4 2md:text-base lg:text-[1.1rem] xl:text-xl 3xl:mb-5 3xl:text-2xl",
            children:
              "Consultez notre section FAQ pour obtenir des réponses à vos questions sur les réservations, les bagages, et plus encore.",
          }),
        ],
      }),
      a.jsx(sN, {}),
    ],
  });
}
function uN() {
  return a.jsxs("div", {
    className: "flex flex-col justify-center pb-24",
    children: [
      a.jsx("div", {
        className:
          "absolute left-0 top-0 z-[-1] w-full bg-[url('/public/static/images/bookings.png')] bg-cover bg-center",
        children: a.jsx("div", {
          className:
            "h-screen w-full bg-gradient-to-b from-[#00000040] from-[10%] to-[#FFF] to-[82%]",
        }),
      }),
      a.jsxs("div", {
        className:
          "flex h-[95dvh] flex-col items-center justify-center text-center",
        children: [
          a.jsxs("div", {
            className:
              "mx-auto flex h-[95vh] w-[100%] flex-col items-center justify-center text-center text-4xl font-bold text-white ls:h-[85vh] 2md:h-[65vh] lg:text-5xl xl:text-6xl 3xl:text-7xl",
            children: [
              a.jsxs("h1", {
                children: [
                  " ",
                  a.jsx("span", {
                    className: "text-nouris",
                    children: "Réservez ",
                  }),
                  a.jsx("span", { children: "Votre Traversée" }),
                ],
              }),
              a.jsx("h1", {
                className:
                  "text-center text-lg font-light text-white md:text-sm lg:text-lg xl:text-xl xl:leading-10 3xl:text-[1.75rem]",
                children: "Les Réservations Ouvriront Bientôt",
              }),
            ],
          }),
          a.jsxs("div", {
            className:
              "mx-auto max-w-[74%] text-center font-semibold leading-5 ls:text-lg ls:leading-5 md:text-xl md:leading-5 2md:text-lg 2md:leading-5 lg:text-xl lg:leading-6 xl:text-2xl xl:leading-7 3xl:text-3xl",
            children: [
              "Les réservations pour nos traversées ouvriront",
              a.jsxs("span", {
                className: "font-extrabold text-nouris",
                children: [" ", "très bientôt."],
              }),
              " ",
              a.jsx("br", {}),
              " Préparez-vous à explorer la Méditerranée avec Nouris Elbahr Ferries en toute simplicité.",
            ],
          }),
        ],
      }),
    ],
  });
}
function cN() {
  const e = h.useRef(null),
    t = () => {
      e.current.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  return a.jsxs("div", {
    className: "mx-auto max-w-[80%] space-y-16 md:space-y-20 3xl:space-y-40",
    children: [
      a.jsx(uN, {}),
      a.jsx(O2, { onClick: t, targetRef: e }),
      a.jsx(aN, {}),
    ],
  });
}
function dN({ targetRef: e }) {
  return a.jsx("div", {
    className:
      "mb-[7rem] overflow-hidden rounded-2xl bg-[url('/public/static/images/sub.png')] bg-cover bg-center md:rounded-3xl 3xl:mb-40 3xl:h-[30rem]",
    ref: e,
    children: a.jsx("div", {
      className:
        "flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-r from-[#0000003D] to-[#66666699] p-10",
      children: a.jsxs("div", {
        className:
          "flex flex-col items-center justify-center gap-10 md:gap-5 2md:w-full 2md:gap-7 xl:gap-8 3xl:gap-10",
        children: [
          a.jsx("span", {
            className:
              "text-center text-3xl font-medium text-white ls:text-xl sm:text-2xl md:w-[75%] md:text-2xl 2md:text-2xl xl:w-[65%] xl:text-[2.25rem] xl:leading-10 3xl:text-4xl",
            children:
              "Restez informés et soyez les premiers à réserver votre place à bord.",
          }),
          a.jsxs("div", {
            className:
              "flex w-full flex-col items-center gap-3 md:w-[70%] 2md:grid 2md:w-[95%] 2md:grid-cols-[20fr,23fr,45fr,11fr] 2md:gap-1",
            children: [
              a.jsx("div", {
                className:
                  "flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2",
                children: a.jsx("input", {
                  className:
                    "h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl",
                  placeholder: "Nom et Prénom",
                }),
              }),
              a.jsx("div", {
                className:
                  "flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2",
                children: a.jsx("input", {
                  type: "email",
                  className:
                    "h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:h-auto md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl",
                  placeholder: "Email",
                }),
              }),
              a.jsx("div", {
                className:
                  "flex w-full flex-col items-center rounded-full border-[1px] bg-[rgba(0,0,0,0.3)] p-1 md:flex-row 2md:px-4 2md:py-2",
                children: a.jsx("input", {
                  className:
                    "h-9 w-full bg-transparent px-3 text-base text-white placeholder:font-sans placeholder:text-base placeholder:text-[#D1D1D1] focus:border-nouris focus:outline-none md:px-5 md:py-2 2md:h-auto 2md:px-0 2md:py-1 2md:text-xs 2md:placeholder:text-xs xl:text-sm xl:placeholder:text-sm 3xl:px-2 3xl:text-xl 3xl:placeholder:text-xl",
                  placeholder: "Ajouter quelque chose ... ",
                }),
              }),
              a.jsx("button", {
                className:
                  "h-11 rounded-full bg-white px-8 py-0 font-sans text-base font-bold transition-all duration-300 hover:bg-nouris hover:text-white active:bg-nouris active:text-black 2md:h-full 2md:px-5 2md:text-xs xl:text-base 3xl:text-xl",
                children: "Envoyer",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function fN() {
  return a.jsx(dN, {});
}
function pN() {
  return a.jsx("div", {
    children: a.jsxs("div", {
      className:
        "mx-auto flex h-[45vh] w-[100%] flex-col items-center justify-center pt-16 text-center text-4xl font-bold text-black lg:h-[45vh] lg:text-5xl xl:text-6xl 3xl:text-7xl",
      children: [
        a.jsxs("h1", {
          children: [
            a.jsx("span", { children: "Contactez" }),
            a.jsx("span", { className: "text-nouris", children: "-Nous" }),
          ],
        }),
        a.jsx("div", {
          className:
            "text-center text-lg text-[#484848] md:text-sm lg:text-lg xl:text-xl xl:leading-10 3xl:text-[1.75rem]",
          children: "Nous sommes à votre écoute",
        }),
      ],
    }),
  });
}
function mN() {
  return a.jsxs("div", {
    className: "mx-auto max-w-[80%]",
    children: [a.jsx(pN, {}), a.jsx(fN, {})],
  });
}
const hN = uy([
  {
    element: a.jsx(a2, {}),
    errorElement: a.jsx(u2, {}),
    children: [
      { path: "/", element: a.jsx(v2, {}) },
      { path: "/about", element: a.jsx(C2, {}) },
      { path: "/cracovia", element: a.jsx(M2, {}) },
      { path: "/bookings", element: a.jsx(cN, {}) },
      { path: "/contact", element: a.jsx(mN, {}) },
    ],
  },
]);
function xN() {
  return a.jsx(a.Fragment, { children: a.jsx(vy, { router: hN }) });
}
Nm(document.getElementById("root")).render(
  a.jsx(h.StrictMode, { children: a.jsx(xN, {}) })
);
