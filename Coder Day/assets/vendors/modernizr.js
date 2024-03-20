/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-backgroundblendmode-backgroundcliptext-cssfilters-cssmask-csspositionsticky-objectfit-prefixed-setclasses !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function s() {
    var e, t, n, s, o, i, a;
    for (var l in x)
      if (x.hasOwnProperty(l)) {
        if (
          ((e = []),
          (t = x[l]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (s = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (a = i.split(".")),
            1 === a.length
              ? (Modernizr[a[0]] = s)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = s)),
            C.push((s ? "" : "no-") + a.join("-"));
      }
  }
  function o(e) {
    var t = b.className,
      n = Modernizr._config.classPrefix || "";
    if ((_ && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      _ ? (b.className.baseVal = t) : (b.className = t));
  }
  function i(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function a() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : _
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function l(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function u(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function f(e, t, n) {
    var s;
    for (var o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((s = t[e[o]]), r(s, "function") ? u(s, n || t) : s);
    return !1;
  }
  function d(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function c(t, n, r) {
    var s;
    if ("getComputedStyle" in e) {
      s = getComputedStyle.call(e, t, n);
      var o = e.console;
      if (null !== s) r && (s = s.getPropertyValue(r));
      else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(
          o,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else s = !n && t.currentStyle && t.currentStyle[r];
    return s;
  }
  function p() {
    var e = t.body;
    return e || ((e = a(_ ? "svg" : "body")), (e.fake = !0)), e;
  }
  function m(e, n, r, s) {
    var o,
      i,
      l,
      u,
      f = "modernizr",
      d = a("div"),
      c = p();
    if (parseInt(r, 10))
      for (; r--; )
        (l = a("div")), (l.id = s ? s[r] : f + (r + 1)), d.appendChild(l);
    return (
      (o = a("style")),
      (o.type = "text/css"),
      (o.id = "s" + f),
      (c.fake ? c : d).appendChild(o),
      c.appendChild(d),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (d.id = f),
      c.fake &&
        ((c.style.background = ""),
        (c.style.overflow = "hidden"),
        (u = b.style.overflow),
        (b.style.overflow = "hidden"),
        b.appendChild(c)),
      (i = n(d, e)),
      c.fake
        ? (c.parentNode.removeChild(c), (b.style.overflow = u), b.offsetHeight)
        : d.parentNode.removeChild(d),
      !!i
    );
  }
  function v(t, r) {
    var s = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--; ) if (e.CSS.supports(d(t[s]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; s--; ) o.push("(" + d(t[s]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        m(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == c(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function g(e, t, s, o) {
    function u() {
      d && (delete L.style, delete L.modElem);
    }
    if (((o = r(o, "undefined") ? !1 : o), !r(s, "undefined"))) {
      var f = v(e, s);
      if (!r(f, "undefined")) return f;
    }
    for (
      var d, c, p, m, g, y = ["modernizr", "tspan", "samp"];
      !L.style && y.length;

    )
      (d = !0), (L.modElem = a(y.shift())), (L.style = L.modElem.style);
    for (p = e.length, c = 0; p > c; c++)
      if (
        ((m = e[c]),
        (g = L.style[m]),
        l(m, "-") && (m = i(m)),
        L.style[m] !== n)
      ) {
        if (o || r(s, "undefined")) return u(), "pfx" == t ? m : !0;
        try {
          L.style[m] = s;
        } catch (h) {}
        if (L.style[m] != g) return u(), "pfx" == t ? m : !0;
      }
    return u(), !1;
  }
  function y(e, t, n, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + P.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? g(a, t, s, o)
      : ((a = (e + " " + E.join(i + " ") + i).split(" ")), f(a, t, n));
  }
  function h(e, t, r) {
    return y(e, n, n, t, r);
  }
  var C = [],
    x = [],
    S = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        x.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        x.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = S), (Modernizr = new Modernizr());
  var b = t.documentElement,
    _ = "svg" === b.nodeName.toLowerCase(),
    w = S._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
  (S._prefixes = w),
    Modernizr.addTest("csspositionsticky", function () {
      var e = "position:",
        t = "sticky",
        n = a("a"),
        r = n.style;
      return (
        (r.cssText = e + w.join(t + ";" + e).slice(0, -e.length)),
        -1 !== r.position.indexOf(t)
      );
    });
  var k = "CSS" in e && "supports" in e.CSS,
    T = "supportsCSS" in e;
  Modernizr.addTest("supports", k || T);
  var j = "Moz O ms Webkit",
    P = S._config.usePrefixes ? j.split(" ") : [];
  S._cssomPrefixes = P;
  var z = function (t) {
    var r,
      s = w.length,
      o = e.CSSRule;
    if ("undefined" == typeof o) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in o)
    )
      return "@" + t;
    for (var i = 0; s > i; i++) {
      var a = w[i],
        l = a.toUpperCase() + "_" + r;
      if (l in o) return "@-" + a.toLowerCase() + "-" + t;
    }
    return !1;
  };
  S.atRule = z;
  var E = S._config.usePrefixes ? j.toLowerCase().split(" ") : [];
  S._domPrefixes = E;
  var N = { elem: a("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var L = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete L.style;
  }),
    (S.testAllProps = y);
  var O = (S.prefixed = function (e, t, n) {
    return 0 === e.indexOf("@")
      ? z(e)
      : (-1 != e.indexOf("-") && (e = i(e)), t ? y(e, t, n) : y(e, "pfx"));
  });
  Modernizr.addTest("backgroundblendmode", O("backgroundBlendMode", "text")),
    Modernizr.addTest("objectfit", !!O("objectFit"), {
      aliases: ["object-fit"],
    }),
    (S.testAllProps = h),
    Modernizr.addTest("backgroundcliptext", function () {
      return h("backgroundClip", "text");
    }),
    Modernizr.addTest("cssfilters", function () {
      if (Modernizr.supports) return h("filter", "blur(2px)");
      var e = a("a");
      return (
        (e.style.cssText = w.join("filter:blur(2px); ")),
        !!e.style.length && (t.documentMode === n || t.documentMode > 9)
      );
    }),
    Modernizr.addTest("cssmask", h("maskRepeat", "repeat-x", !0)),
    Modernizr.addTest("backdropfilter", h("backdropFilter")),
    s(),
    o(C),
    delete S.addTest,
    delete S.addAsyncTest;
  for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
  e.Modernizr = Modernizr;
})(window, document);
