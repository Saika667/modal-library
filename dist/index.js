import re from "react";
var p = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function te() {
  if (M) return R;
  M = 1;
  var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function f(d, a, s) {
    var m = null;
    if (s !== void 0 && (m = "" + s), a.key !== void 0 && (m = "" + a.key), "key" in a) {
      s = {};
      for (var E in a)
        E !== "key" && (s[E] = a[E]);
    } else s = a;
    return a = s.ref, {
      $$typeof: u,
      type: d,
      key: m,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return R.Fragment = i, R.jsx = f, R.jsxs = f, R;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function f(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), i(e);
      }
    }
    function d(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function x() {
      var e = u(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function O(e, r, t, n, c, l, S, w) {
      return t = l.ref, e = {
        $$typeof: y,
        type: e,
        key: r,
        props: l,
        _owner: c
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, t, n, c, l, S, w) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              g(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(o);
      if (C.call(r, "key")) {
        o = u(e);
        var b = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", D[o + n] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          b,
          o
        ), D[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), m(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var h in r)
          h !== "key" && (t[h] = r[h]);
      } else t = r;
      return o && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(
        e,
        o,
        l,
        c,
        a(),
        t,
        S,
        w
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === y && e._store && (e._store.validated = 1);
    }
    var T = re, y = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), j = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, K = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, $ = {}, I = T["react-stack-bottom-frame"].bind(
      T,
      s
    )(), F = P(d(s)), D = {};
    v.Fragment = A, v.jsx = function(e, r, t, n, c) {
      var l = 1e4 > j.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        t,
        !1,
        n,
        c,
        l ? Error("react-stack-top-frame") : I,
        l ? P(d(e)) : F
      );
    }, v.jsxs = function(e, r, t, n, c) {
      var l = 1e4 > j.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        t,
        !0,
        n,
        c,
        l ? Error("react-stack-top-frame") : I,
        l ? P(d(e)) : F
      );
    };
  }()), v;
}
var W;
function oe() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? p.exports = te() : p.exports = ne()), p.exports;
}
var k = oe();
const se = ({ open: u, onClose: i, children: f, backgroundColor: d = "white", borderRadius: a = "10px", maxWidth: s = "500px", buttonColor: m = "black", classButton: E = "", classOverlay: x = "", classModal: O = "" }) => u ? /* @__PURE__ */ k.jsx("div", { className: `modal-overlay ${x}`, onClick: () => i, style: { "--background-color": d, "--border-radius": a, "--max-width": s }, children: /* @__PURE__ */ k.jsxs("div", { className: `modal ${O}`, onClick: (_) => _.stopPropagation(), children: [
  /* @__PURE__ */ k.jsx("button", { className: `modal-close ${E}`, onClick: () => i, style: { "--button-color": m }, children: "×" }),
  /* @__PURE__ */ k.jsx("div", { children: f })
] }) }) : null;
export {
  se as Modal
};
