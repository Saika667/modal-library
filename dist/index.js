import re from "react";
var T = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  if (F) return b;
  F = 1;
  var c = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function f(d, a, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), a.key !== void 0 && (E = "" + a.key), "key" in a) {
      s = {};
      for (var R in a)
        R !== "key" && (s[R] = a[R]);
    } else s = a;
    return a = s.ref, {
      $$typeof: c,
      type: d,
      key: E,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return b.Fragment = i, b.jsx = f, b.jsxs = f, b;
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
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
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
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case g:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
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
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === g)
        return "<...>";
      try {
        var r = c(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function R(e, r) {
      function t() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = c(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, u, l, j, x) {
      return t = l.ref, e = {
        $$typeof: h,
        type: e,
        key: r,
        props: l,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
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
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, u, l, j, x) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (K(o)) {
            for (n = 0; n < o.length; n++)
              w(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(o);
      if (N.call(r, "key")) {
        o = c(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (f(t), o = "" + t), E(r) && (f(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var P in r)
          P !== "key" && (t[P] = r[P]);
      } else t = r;
      return o && R(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        l,
        u,
        a(),
        t,
        j,
        x
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === h && e._store && (e._store.validated = 1);
    }
    var _ = re, h = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), V = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), O = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, K = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var y, C = {}, Y = _["react-stack-bottom-frame"].bind(
      _,
      s
    )(), I = A(d(s)), $ = {};
    v.Fragment = k, v.jsx = function(e, r, t, n, u) {
      var l = 1e4 > O.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n,
        u,
        l ? Error("react-stack-top-frame") : Y,
        l ? A(d(e)) : I
      );
    }, v.jsxs = function(e, r, t, n, u) {
      var l = 1e4 > O.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n,
        u,
        l ? Error("react-stack-top-frame") : Y,
        l ? A(d(e)) : I
      );
    };
  }()), v;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = te() : T.exports = ne()), T.exports;
}
var p = oe();
const se = ({ open: c, onClose: i, children: f, backgroundColor: d = "white" }) => c ? /* @__PURE__ */ p.jsx("div", { className: "modal-overlay", onClick: i, style: { "--background-color": d }, children: /* @__PURE__ */ p.jsxs("div", { className: "modal", onClick: (a) => a.stopPropagation(), children: [
  /* @__PURE__ */ p.jsx("button", { className: "modal-close", onClick: i, children: "×" }),
  /* @__PURE__ */ p.jsx("div", { className: "modal-content", children: f })
] }) }) : null;
export {
  se as Modal
};
