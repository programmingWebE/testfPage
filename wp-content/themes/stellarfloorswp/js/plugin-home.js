
/* --------------------------------
Modernizr 2.8.3
-------------------------------- */
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function D(a) { j.cssText = a }

        function E(a, b) { return D(n.join(a + ";") + (b || "")) }

        function F(a, b) { return typeof a === b }

        function G(a, b) { return !!~("" + a).indexOf(b) }

        function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 }

        function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 }

        function J(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + p.join(d + " ") + d).split(" ");
            return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
        }

        function K() { e.input = function(c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k = b.createElement("input"),
            l = ":)",
            m = {}.toString,
            n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms",
            p = o.split(" "),
            q = o.toLowerCase().split(" "),
            r = { svg: "http://www.w3.org/2000/svg" },
            s = {},
            t = {},
            u = {},
            v = [],
            w = v.slice,
            x, y = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            z = function(b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b) && c(b).matches || !1; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d },
            A = function() {
                function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f }
                var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return d
            }(),
            B = {}.hasOwnProperty,
            C;
        !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) { return B.call(a, b) } : C = function(a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = w.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(w.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(w.call(arguments)))
                };
            return e
        }), s.flexbox = function() { return J("flexWrap") }, s.canvas = function() { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function() { return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function() { return !!a.WebGLRenderingContext }, s.touch = function() { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) { c = a.offsetTop === 9 }), c }, s.geolocation = function() { return "geolocation" in navigator }, s.postmessage = function() { return !!a.postMessage }, s.websqldatabase = function() { return !!a.openDatabase }, s.indexedDB = function() { return !!J("indexedDB", a) }, s.hashchange = function() { return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function() { return !!a.history && !!history.pushState }, s.draganddrop = function() { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function() { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function() { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.hsla = function() { return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla") }, s.multiplebgs = function() { return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function() { return J("backgroundSize") }, s.borderimage = function() { return J("borderImage") }, s.borderradius = function() { return J("borderRadius") }, s.boxshadow = function() { return J("boxShadow") }, s.textshadow = function() { return b.createElement("div").style.textShadow === "" }, s.opacity = function() { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function() { return J("animationName") }, s.csscolumns = function() { return J("columnCount") }, s.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
        }, s.cssreflections = function() { return J("boxReflect") }, s.csstransforms = function() { return !!J("transform") }, s.csstransforms3d = function() { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function() { return J("transition") }, s.fontface = function() {
            var a;
            return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
            }), a
        }, s.generatedcontent = function() { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) { a = b.offsetHeight >= 3 }), a }, s.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) {}
            return c
        }, s.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) {}
            return c
        }, s.localstorage = function() { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function() { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function() { return !!a.Worker }, s.applicationcache = function() { return !!a.applicationCache }, s.svg = function() { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function() { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function() { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function() { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) };
        for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
        return e.input || K(), e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) C(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, D(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a }

                function n(a) { var b = j[a[h]]; return b || (b = {}, i++, a[h] = i, j[i] = b), b }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) }

                function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }()
                    } catch (c) { g = !0, k = !0 }
                })();
                var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) { return b ? J(a, b, c) : J(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == o.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function() { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = B; return a.loader = { load: j, i: 0 }, a }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            x = [],
            y = {},
            z = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) { z[a] = b }, B.addFilter = function(a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function() { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };
/* --------------------------------
countdown v2.6.0
-------------------------------- */
/*
countdown.js v2.6.0 http://countdownjs.org
Copyright (c)2006-2014 Stephen M. McKamey.
Licensed under The MIT License.
*/
var module, countdown = function(v) {
    function A(a, b) {
        var c = a.getTime();
        a.setMonth(a.getMonth() + b);
        return Math.round((a.getTime() - c) / 864E5)
    }

    function w(a) {
        var b = a.getTime(),
            c = new Date(b);
        c.setMonth(a.getMonth() + 1);
        return Math.round((c.getTime() - b) / 864E5)
    }

    function x(a, b) {
        b = b instanceof Date || null !== b && isFinite(b) ? new Date(+b) : new Date;
        if (!a) return b;
        var c = +a.value || 0;
        if (c) return b.setTime(b.getTime() + c), b;
        (c = +a.milliseconds || 0) && b.setMilliseconds(b.getMilliseconds() + c);
        (c = +a.seconds || 0) && b.setSeconds(b.getSeconds() + c);
        (c = +a.minutes || 0) && b.setMinutes(b.getMinutes() + c);
        (c = +a.hours || 0) && b.setHours(b.getHours() + c);
        (c = +a.weeks || 0) && (c *= 7);
        (c += +a.days || 0) && b.setDate(b.getDate() + c);
        (c = +a.months || 0) && b.setMonth(b.getMonth() + c);
        (c = +a.millennia || 0) && (c *= 10);
        (c += +a.centuries || 0) && (c *= 10);
        (c += +a.decades || 0) && (c *= 10);
        (c += +a.years || 0) && b.setFullYear(b.getFullYear() + c);
        return b
    }

    function D(a, b) { return y(a) + (1 === a ? p[b] : q[b]) }

    function n() {}

    function k(a, b, c, e, l, d) {
        0 <= a[c] && (b += a[c], delete a[c]);
        b /= l;
        if (1 >= b + 1) return 0;
        if (0 <= a[e]) {
            a[e] = +(a[e] + b).toFixed(d);
            switch (e) {
                case "seconds":
                    if (60 !== a.seconds || isNaN(a.minutes)) break;
                    a.minutes++;
                    a.seconds = 0;
                case "minutes":
                    if (60 !== a.minutes || isNaN(a.hours)) break;
                    a.hours++;
                    a.minutes = 0;
                case "hours":
                    if (24 !== a.hours || isNaN(a.days)) break;
                    a.days++;
                    a.hours = 0;
                case "days":
                    if (7 !== a.days || isNaN(a.weeks)) break;
                    a.weeks++;
                    a.days = 0;
                case "weeks":
                    if (a.weeks !== w(a.refMonth) / 7 || isNaN(a.months)) break;
                    a.months++;
                    a.weeks = 0;
                case "months":
                    if (12 !== a.months || isNaN(a.years)) break;
                    a.years++;
                    a.months = 0;
                case "years":
                    if (10 !== a.years || isNaN(a.decades)) break;
                    a.decades++;
                    a.years = 0;
                case "decades":
                    if (10 !== a.decades || isNaN(a.centuries)) break;
                    a.centuries++;
                    a.decades = 0;
                case "centuries":
                    if (10 !== a.centuries || isNaN(a.millennia)) break;
                    a.millennia++;
                    a.centuries = 0
            }
            return 0
        }
        return b
    }

    function B(a, b, c, e, l, d) {
        var f = new Date;
        a.start = b = b || f;
        a.end = c = c || f;
        a.units = e;
        a.value = c.getTime() - b.getTime();
        0 > a.value && (f = c, c = b, b = f);
        a.refMonth = new Date(b.getFullYear(), b.getMonth(), 15, 12, 0, 0);
        try {
            a.millennia = 0;
            a.centuries = 0;
            a.decades = 0;
            a.years = c.getFullYear() - b.getFullYear();
            a.months = c.getMonth() - b.getMonth();
            a.weeks = 0;
            a.days = c.getDate() - b.getDate();
            a.hours = c.getHours() - b.getHours();
            a.minutes = c.getMinutes() - b.getMinutes();
            a.seconds = c.getSeconds() - b.getSeconds();
            a.milliseconds = c.getMilliseconds() - b.getMilliseconds();
            var g;
            0 > a.milliseconds ? (g = s(-a.milliseconds / 1E3), a.seconds -= g, a.milliseconds += 1E3 * g) : 1E3 <= a.milliseconds && (a.seconds += m(a.milliseconds / 1E3), a.milliseconds %= 1E3);
            0 > a.seconds ? (g = s(-a.seconds / 60), a.minutes -= g, a.seconds += 60 * g) : 60 <= a.seconds && (a.minutes += m(a.seconds / 60), a.seconds %= 60);
            0 > a.minutes ? (g = s(-a.minutes / 60), a.hours -= g, a.minutes += 60 * g) : 60 <= a.minutes && (a.hours += m(a.minutes / 60), a.minutes %= 60);
            0 > a.hours ? (g = s(-a.hours / 24), a.days -= g, a.hours += 24 * g) : 24 <= a.hours && (a.days += m(a.hours / 24), a.hours %= 24);
            for (; 0 > a.days;) a.months--, a.days += A(a.refMonth, 1);
            7 <= a.days && (a.weeks += m(a.days / 7), a.days %= 7);
            0 > a.months ? (g = s(-a.months / 12), a.years -= g, a.months += 12 * g) : 12 <= a.months && (a.years += m(a.months / 12), a.months %= 12);
            10 <= a.years && (a.decades += m(a.years / 10), a.years %= 10, 10 <= a.decades && (a.centuries += m(a.decades / 10), a.decades %= 10, 10 <= a.centuries && (a.millennia += m(a.centuries / 10), a.centuries %= 10)));
            b = 0;
            !(e & 1024) || b >= l ? (a.centuries += 10 * a.millennia, delete a.millennia) : a.millennia && b++;
            !(e & 512) || b >= l ? (a.decades += 10 * a.centuries, delete a.centuries) : a.centuries && b++;
            !(e & 256) || b >= l ? (a.years += 10 * a.decades, delete a.decades) : a.decades && b++;
            !(e & 128) || b >= l ? (a.months += 12 * a.years, delete a.years) : a.years && b++;
            !(e & 64) || b >= l ? (a.months && (a.days += A(a.refMonth, a.months)), delete a.months, 7 <= a.days && (a.weeks += m(a.days / 7), a.days %= 7)) : a.months && b++;
            !(e & 32) || b >= l ? (a.days += 7 * a.weeks, delete a.weeks) : a.weeks && b++;
            !(e & 16) || b >= l ? (a.hours += 24 * a.days, delete a.days) : a.days && b++;
            !(e & 8) || b >= l ? (a.minutes += 60 * a.hours, delete a.hours) : a.hours && b++;
            !(e & 4) || b >= l ? (a.seconds += 60 * a.minutes, delete a.minutes) : a.minutes && b++;
            !(e & 2) || b >= l ? (a.milliseconds += 1E3 * a.seconds, delete a.seconds) : a.seconds && b++;
            if (!(e & 1) || b >= l) {
                var h = k(a, 0, "milliseconds", "seconds", 1E3, d);
                if (h && (h = k(a, h, "seconds", "minutes", 60, d)) && (h = k(a, h, "minutes", "hours", 60, d)) && (h = k(a, h, "hours", "days", 24, d)) && (h = k(a, h, "days", "weeks", 7, d)) && (h = k(a, h, "weeks", "months", w(a.refMonth) / 7, d))) {
                    e = h;
                    var n, p = a.refMonth,
                        q = p.getTime(),
                        r = new Date(q);
                    r.setFullYear(p.getFullYear() + 1);
                    n = Math.round((r.getTime() - q) / 864E5);
                    if (h = k(a, e, "months", "years", n / w(a.refMonth), d))
                        if (h = k(a, h, "years", "decades", 10, d))
                            if (h = k(a, h, "decades", "centuries", 10, d))
                                if (h = k(a, h, "centuries", "millennia", 10, d)) throw Error("Fractional unit overflow");
                }
            }
        } finally { delete a.refMonth }
        return a
    }

    function d(a, b, c, e, d) {
        var f;
        c = +c || 222;
        e = 0 < e ? e : NaN;
        d = 0 < d ? 20 > d ? Math.round(d) : 20 : 0;
        var k = null;
        "function" === typeof a ? (f = a, a = null) : a instanceof Date || (null !== a && isFinite(a) ? a = new Date(+a) : ("object" === typeof k && (k = a), a = null));
        var g = null;
        "function" === typeof b ? (f = b, b = null) : b instanceof Date || (null !== b && isFinite(b) ? b = new Date(+b) : ("object" === typeof b && (g = b), b = null));
        k && (a = x(k, b));
        g && (b = x(g, a));
        if (!a && !b) return new n;
        if (!f) return B(new n, a, b, c, e, d);
        var k = c & 1 ? 1E3 / 30 : c & 2 ? 1E3 : c & 4 ? 6E4 : c & 8 ? 36E5 : c & 16 ? 864E5 : 6048E5,
            h, g = function() { f(B(new n, a, b, c, e, d), h) };
        g();
        return h = setInterval(g, k)
    }
    var s = Math.ceil,
        m = Math.floor,
        p, q, r, t, u, f, y, z;
    n.prototype.toString = function(a) {
        var b = z(this),
            c = b.length;
        if (!c) return a ? "" + a : u;
        if (1 === c) return b[0];
        a = r + b.pop();
        return b.join(t) + a
    };
    n.prototype.toHTML = function(a, b) {
        a = a || "span";
        var c = z(this),
            e = c.length;
        if (!e) return (b = b || u) ? "\x3c" + a + "\x3e" + b + "\x3c/" + a + "\x3e" : b;
        for (var d = 0; d < e; d++) c[d] = "\x3c" + a + "\x3e" + c[d] + "\x3c/" + a + "\x3e";
        if (1 === e) return c[0];
        e = r + c.pop();
        return c.join(t) + e
    };
    n.prototype.addTo = function(a) { return x(this, a) };
    z = function(a) {
        var b = [],
            c = a.millennia;
        c && b.push(f(c, 10));
        (c = a.centuries) && b.push(f(c, 9));
        (c = a.decades) && b.push(f(c, 8));
        (c = a.years) && b.push(f(c, 7));
        (c = a.months) && b.push(f(c, 6));
        (c = a.weeks) && b.push(f(c, 5));
        (c = a.days) && b.push(f(c, 4));
        (c = a.hours) && b.push(f(c, 3));
        (c = a.minutes) && b.push(f(c, 2));
        (c = a.seconds) && b.push(f(c, 1));
        (c = a.milliseconds) && b.push(f(c, 0));
        return b
    };
    d.MILLISECONDS = 1;
    d.SECONDS = 2;
    d.MINUTES = 4;
    d.HOURS = 8;
    d.DAYS = 16;
    d.WEEKS = 32;
    d.MONTHS = 64;
    d.YEARS = 128;
    d.DECADES = 256;
    d.CENTURIES = 512;
    d.MILLENNIA = 1024;
    d.DEFAULTS = 222;
    d.ALL = 2047;
    var E = d.setFormat = function(a) {
            if (a) {
                if ("singular" in a || "plural" in a) {
                    var b = a.singular || [];
                    b.split && (b = b.split("|"));
                    var c = a.plural || [];
                    c.split && (c = c.split("|"));
                    for (var d = 0; 10 >= d; d++) p[d] = b[d] || p[d], q[d] = c[d] || q[d]
                }
                "string" === typeof a.last && (r = a.last);
                "string" === typeof a.delim && (t = a.delim);
                "string" === typeof a.empty && (u = a.empty);
                "function" === typeof a.formatNumber && (y = a.formatNumber);
                "function" === typeof a.formatter && (f = a.formatter)
            }
        },
        C = d.resetFormat = function() {
            p = " millisecond; second; minute; hour; day; week; month; year; decade; century; millennium".split(";");
            q = " milliseconds; seconds; minutes; hours; days; weeks; months; years; decades; centuries; millennia".split(";");
            r = " and ";
            t = ", ";
            u = "";
            y = function(a) { return a };
            f = D
        };
    d.setLabels = function(a, b, c, d, f, k, m) { E({ singular: a, plural: b, last: c, delim: d, empty: f, formatNumber: k, formatter: m }) };
    d.resetLabels = C;
    C();
    v && v.exports ? v.exports = d : "function" === typeof window.define && "undefined" !== typeof window.define.amd && window.define("countdown", [], function() { return d });
    return d
}(module);
/* --------------------------------
iScroll.js 0.0.1
-------------------------------- */
/*!
 * Customized version of iScroll.js 0.0.1
 * It fixes bugs affecting its integration with fullpage.js
 */
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function(g, q, f) {
    function p(a, b) {
        this.wrapper = "string" == typeof a ? q.querySelector(a) : a;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !d.hasPointer,
            disableTouch: d.hasPointer || !d.hasTouch,
            disableMouse: d.hasPointer || d.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" === typeof g.onmousedown
        };
        for (var c in b) this.options[c] = b[c];
        this.translateZ = this.options.HWCompositing && d.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = d.hasTransition && this.options.useTransition;
        this.options.useTransform = d.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY;
        this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? d.ease[this.options.bounceEasing] || d.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;
        !0 === this.options.tap && (this.options.tap = "tap");
        this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative");
        "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1);
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.directionY = this.directionX = this.y = this.x = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }

    function u(a, b, c) {
        var e = q.createElement("div"),
            d = q.createElement("div");
        !0 === c && (e.style.cssText = "position:absolute;z-index:9999", d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px");
        d.className = "iScrollIndicator";
        "h" == a ? (!0 === c && (e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", d.style.height = "100%"), e.className = "iScrollHorizontalScrollbar") : (!0 === c && (e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", d.style.width = "100%"), e.className = "iScrollVerticalScrollbar");
        e.style.cssText += ";overflow:hidden";
        b || (e.style.pointerEvents = "none");
        e.appendChild(d);
        return e
    }

    function v(a, b) {
        this.wrapper = "string" == typeof b.el ? q.querySelector(b.el) : b.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = a;
        this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 };
        for (var c in b) this.options[c] = b[c];
        this.sizeRatioY = this.sizeRatioX = 1;
        this.maxPosY = this.maxPosX = 0;
        this.options.interactive && (this.options.disableTouch || (d.addEvent(this.indicator, "touchstart", this), d.addEvent(g, "touchend", this)), this.options.disablePointer || (d.addEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.addEvent(g, d.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (d.addEvent(this.indicator, "mousedown", this), d.addEvent(g, "mouseup", this)));
        if (this.options.fade) {
            this.wrapperStyle[d.style.transform] = this.scroller.translateZ;
            var e = d.style.transitionDuration;
            if (e) {
                this.wrapperStyle[e] = d.isBadAndroid ? "0.0001ms" : "0ms";
                var f = this;
                d.isBadAndroid && t(function() { "0.0001ms" === f.wrapperStyle[e] && (f.wrapperStyle[e] = "0s") });
                this.wrapperStyle.opacity = "0"
            }
        }
    }
    var t = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || function(a) { g.setTimeout(a, 1E3 / 60) },
        d = function() {
            function a(a) { return !1 === e ? !1 : "" === e ? a : e + a.charAt(0).toUpperCase() + a.substr(1) }
            var b = {},
                c = q.createElement("div").style,
                e = function() {
                    for (var a = ["t", "webkitT", "MozT", "msT", "OT"], b, e = 0, d = a.length; e < d; e++)
                        if (b = a[e] + "ransform", b in c) return a[e].substr(0, a[e].length - 1);
                    return !1
                }();
            b.getTime = Date.now || function() { return (new Date).getTime() };
            b.extend = function(a, b) {
                for (var c in b) a[c] = b[c]
            };
            b.addEvent = function(a, b, c, e) { a.addEventListener(b, c, !!e) };
            b.removeEvent = function(a, b, c, e) { a.removeEventListener(b, c, !!e) };
            b.prefixPointerEvent = function(a) { return g.MSPointerEvent ? "MSPointer" + a.charAt(7).toUpperCase() + a.substr(8) : a };
            b.momentum = function(a, b, c, e, d, k) {
                b = a - b;
                c = f.abs(b) / c;
                var g;
                k = void 0 === k ? 6E-4 : k;
                g = a + c * c / (2 * k) * (0 > b ? -1 : 1);
                k = c / k;
                g < e ? (g = d ? e - d / 2.5 * (c / 8) : e, b = f.abs(g - a), k = b / c) : 0 < g && (g = d ? d / 2.5 * (c / 8) : 0, b = f.abs(a) + g, k = b / c);
                return { destination: f.round(g), duration: k }
            };
            var d = a("transform");
            b.extend(b, { hasTransform: !1 !== d, hasPerspective: a("perspective") in c, hasTouch: "ontouchstart" in g, hasPointer: !(!g.PointerEvent && !g.MSPointerEvent), hasTransition: a("transition") in c });
            b.isBadAndroid = function() { var a = g.navigator.appVersion; return /Android/.test(a) && !/Chrome\/\d/.test(a) ? (a = a.match(/Safari\/(\d+.\d)/)) && "object" === typeof a && 2 <= a.length ? 535.19 > parseFloat(a[1]) : !0 : !1 }();
            b.extend(b.style = {}, {
                transform: d,
                transitionTimingFunction: a("transitionTimingFunction"),
                transitionDuration: a("transitionDuration"),
                transitionDelay: a("transitionDelay"),
                transformOrigin: a("transformOrigin")
            });
            b.hasClass = function(a, b) { return (new RegExp("(^|\\s)" + b + "(\\s|$)")).test(a.className) };
            b.addClass = function(a, c) {
                if (!b.hasClass(a, c)) {
                    var e = a.className.split(" ");
                    e.push(c);
                    a.className = e.join(" ")
                }
            };
            b.removeClass = function(a, c) { b.hasClass(a, c) && (a.className = a.className.replace(new RegExp("(^|\\s)" + c + "(\\s|$)", "g"), " ")) };
            b.offset = function(a) {
                for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
                return { left: b, top: c }
            };
            b.preventDefaultException = function(a, b) {
                for (var c in b)
                    if (b[c].test(a[c])) return !0;
                return !1
            };
            b.extend(b.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 });
            b.extend(b.ease = {}, {
                quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(a) { return a * (2 - a) } },
                circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(a) { return f.sqrt(1 - --a * a) } },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(a) { return --a * a * (5 * a + 4) + 1 }
                },
                bounce: { style: "", fn: function(a) { return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 } },
                elastic: { style: "", fn: function(a) { return 0 === a ? 0 : 1 == a ? 1 : .4 * f.pow(2, -10 * a) * f.sin(2 * (a - .055) * f.PI / .22) + 1 } }
            });
            b.tap = function(a, b) {
                var c = q.createEvent("Event");
                c.initEvent(b, !0, !0);
                c.pageX = a.pageX;
                c.pageY = a.pageY;
                a.target.dispatchEvent(c)
            };
            b.click = function(a) {
                var b = a.target,
                    c;
                /(SELECT|INPUT|TEXTAREA)/i.test(b.tagName) || (c = q.createEvent(g.MouseEvent ? "MouseEvents" : "Event"), c.initEvent("click", !0, !0), c.view = a.view || g, c.detail = 1, c.screenX = b.screenX || 0, c.screenY = b.screenY || 0, c.clientX = b.clientX || 0, c.clientY = b.clientY || 0, c.ctrlKey = !!a.ctrlKey, c.altKey = !!a.altKey, c.shiftKey = !!a.shiftKey, c.metaKey = !!a.metaKey, c.button = 0, c.relatedTarget = null, c._constructed = !0, b.dispatchEvent(c))
            };
            return b
        }();
    p.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents();
            (this.options.scrollbars || this.options.indicators) && this._initIndicators();
            this.options.mouseWheel && this._initWheel();
            this.options.snap && this._initSnap();
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0);
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
            this._execEvent("destroy")
        },
        _transitionEnd: function(a) { a.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))) },
        _start: function(a) {
            if (!(1 != d.eventType[a.type] && 0 !== (a.which ? a.button : 2 > a.button ? 0 : 4 == a.button ? 1 : 2) || !this.enabled || this.initiated && d.eventType[a.type] !== this.initiated)) {
                !this.options.preventDefault || d.isBadAndroid || d.preventDefaultException(a.target, this.options.preventDefaultException) || a.preventDefault();
                var b = a.touches ? a.touches[0] : a;
                this.initiated = d.eventType[a.type];
                this.moved = !1;
                this.directionLocked = this.directionY = this.directionX = this.distY = this.distX = 0;
                this.startTime = d.getTime();
                this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, a = this.getComputedPosition(), this._translate(f.round(a.x), f.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd"));
                this.startX = this.x;
                this.startY = this.y;
                this.absStartX = this.x;
                this.absStartY = this.y;
                this.pointX = b.pageX;
                this.pointY = b.pageY;
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(a) {
            if (this.enabled && d.eventType[a.type] === this.initiated) {
                this.options.preventDefault && a.preventDefault();
                var b = a.touches ? a.touches[0] : a,
                    c = b.pageX - this.pointX,
                    e = b.pageY - this.pointY,
                    k = d.getTime(),
                    h;
                this.pointX = b.pageX;
                this.pointY = b.pageY;
                this.distX += c;
                this.distY += e;
                b = f.abs(this.distX);
                h = f.abs(this.distY);
                if (!(300 < k - this.endTime && 10 > b && 10 > h)) {
                    this.directionLocked || this.options.freeScroll || (this.directionLocked = b > h + this.options.directionLockThreshold ? "h" : h >= b + this.options.directionLockThreshold ? "v" : "n");
                    if ("h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) a.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) { this.initiated = !1; return }
                        e = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) a.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) { this.initiated = !1; return }
                        c = 0
                    }
                    c = this.hasHorizontalScroll ? c : 0;
                    e = this.hasVerticalScroll ? e : 0;
                    a = this.x + c;
                    b = this.y + e;
                    if (0 < a || a < this.maxScrollX) a = this.options.bounce ? this.x + c / 3 : 0 < a ? 0 : this.maxScrollX;
                    if (0 < b || b < this.maxScrollY) b = this.options.bounce ? this.y + e / 3 : 0 < b ? 0 : this.maxScrollY;
                    this.directionX = 0 < c ? -1 : 0 > c ? 1 : 0;
                    this.directionY = 0 < e ? -1 : 0 > e ? 1 : 0;
                    this.moved || this._execEvent("scrollStart");
                    this.moved = !0;
                    this._translate(a, b);
                    300 < k - this.startTime && (this.startTime = k, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(a) {
            if (this.enabled && d.eventType[a.type] === this.initiated) {
                this.options.preventDefault && !d.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
                var b, c;
                c = d.getTime() - this.startTime;
                var e = f.round(this.x),
                    k = f.round(this.y),
                    h = f.abs(e - this.startX),
                    g = f.abs(k - this.startY);
                b = 0;
                var l = "";
                this.initiated = this.isInTransition = 0;
                this.endTime = d.getTime();
                if (!this.resetPosition(this.options.bounceTime))
                    if (this.scrollTo(e, k), this.moved)
                        if (this._events.flick && 200 > c && 100 > h && 100 > g) this._execEvent("flick");
                        else if (this.options.momentum && 300 > c && (b = this.hasHorizontalScroll ? d.momentum(this.x, this.startX, c, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: e, duration: 0 }, c = this.hasVerticalScroll ? d.momentum(this.y, this.startY, c, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: k, duration: 0 }, e = b.destination, k = c.destination, b = f.max(b.duration, c.duration), this.isInTransition = 1), this.options.snap && (this.currentPage = l = this._nearestSnap(e, k), b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(e - l.x), 1E3), f.min(f.abs(k - l.y), 1E3)), 300), e = l.x, k = l.y, this.directionY = this.directionX = 0, l = this.options.bounceEasing), e != this.x || k != this.y) {
                    if (0 < e || e < this.maxScrollX || 0 < k || k < this.maxScrollY) l = d.ease.quadratic;
                    this.scrollTo(e, k, b, l)
                } else this._execEvent("scrollEnd");
                else this.options.tap && d.tap(a, this.options.tap), this.options.click && d.click(a), this._execEvent("scrollCancel")
            }
        },
        _resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() { a.refresh() }, this.options.resizePolling)
        },
        resetPosition: function(a) {
            var b = this.x,
                c = this.y;
            !this.hasHorizontalScroll || 0 < this.x ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX);
            !this.hasVerticalScroll || 0 < this.y ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY);
            if (b == this.x && c == this.y) return !1;
            this.scrollTo(b, c, a || 0, this.options.bounceEasing);
            return !0
        },
        disable: function() { this.enabled = !1 },
        enable: function() { this.enabled = !0 },
        refresh: function() {
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && 0 > this.maxScrollX;
            this.hasVerticalScroll = this.options.scrollY && 0 > this.maxScrollY;
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth);
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight);
            this.directionY = this.directionX = this.endTime = 0;
            this.wrapperOffset = d.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        },
        on: function(a, b) {
            this._events[a] || (this._events[a] = []);
            this._events[a].push(b)
        },
        off: function(a, b) { if (this._events[a]) { var c = this._events[a].indexOf(b); - 1 < c && this._events[a].splice(c, 1) } },
        _execEvent: function(a) {
            if (this._events[a]) {
                var b = 0,
                    c = this._events[a].length;
                if (c)
                    for (; b < c; b++) this._events[a][b].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(a, b, c, e) {
            a = this.x + a;
            b = this.y + b;
            this.scrollTo(a, b, c || 0, e)
        },
        scrollTo: function(a, b, c, e) {
            e = e || d.ease.circular;
            this.isInTransition = this.options.useTransition && 0 < c;
            var f = this.options.useTransition && e.style;
            !c || f ? (f && (this._transitionTimingFunction(e.style), this._transitionTime(c)), this._translate(a, b)) : this._animate(a, b, c, e.fn)
        },
        scrollToElement: function(a, b, c, e, k) {
            if (a = a.nodeType ? a : this.scroller.querySelector(a)) {
                var h = d.offset(a);
                h.left -= this.wrapperOffset.left;
                h.top -= this.wrapperOffset.top;
                !0 === c && (c = f.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2));
                !0 === e && (e = f.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2));
                h.left -= c || 0;
                h.top -= e || 0;
                h.left = 0 < h.left ? 0 : h.left < this.maxScrollX ? this.maxScrollX : h.left;
                h.top = 0 < h.top ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top;
                b = void 0 === b || null === b || "auto" === b ? f.max(f.abs(this.x - h.left), f.abs(this.y - h.top)) : b;
                this.scrollTo(h.left, h.top, b, k)
            }
        },
        _transitionTime: function(a) {
            if (this.options.useTransition) {
                a = a || 0;
                var b = d.style.transitionDuration;
                if (b) {
                    this.scrollerStyle[b] = a + "ms";
                    if (!a && d.isBadAndroid) {
                        this.scrollerStyle[b] = "0.0001ms";
                        var c = this;
                        t(function() { "0.0001ms" === c.scrollerStyle[b] && (c.scrollerStyle[b] = "0s") })
                    }
                    if (this.indicators)
                        for (var e = this.indicators.length; e--;) this.indicators[e].transitionTime(a)
                }
            }
        },
        _transitionTimingFunction: function(a) {
            this.scrollerStyle[d.style.transitionTimingFunction] = a;
            if (this.indicators)
                for (var b = this.indicators.length; b--;) this.indicators[b].transitionTimingFunction(a)
        },
        _translate: function(a, b) {
            this.options.useTransform ? this.scrollerStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ : (a = f.round(a), b = f.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px");
            this.x = a;
            this.y = b;
            if (this.indicators)
                for (var c = this.indicators.length; c--;) this.indicators[c].updatePosition()
        },
        _initEvents: function(a) {
            a = a ? d.removeEvent : d.addEvent;
            var b = this.options.bindToWrapper ? this.wrapper : g;
            a(g, "orientationchange", this);
            a(g, "resize", this);
            this.options.click && a(this.wrapper, "click", this, !0);
            this.options.disableMouse || (a(this.wrapper, "mousedown", this), a(b, "mousemove", this), a(b, "mousecancel", this), a(b, "mouseup", this));
            d.hasPointer && !this.options.disablePointer && (a(this.wrapper, d.prefixPointerEvent("pointerdown"), this), a(b, d.prefixPointerEvent("pointermove"), this), a(b, d.prefixPointerEvent("pointercancel"), this), a(b, d.prefixPointerEvent("pointerup"), this));
            d.hasTouch && !this.options.disableTouch && (a(this.wrapper, "touchstart", this), a(b, "touchmove", this), a(b, "touchcancel", this), a(b, "touchend", this));
            a(this.scroller, "transitionend", this);
            a(this.scroller, "webkitTransitionEnd", this);
            a(this.scroller, "oTransitionEnd", this);
            a(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var a = g.getComputedStyle(this.scroller, null),
                b;
            this.options.useTransform ? (a = a[d.style.transform].split(")")[0].split(", "), b = +(a[12] || a[4]), a = +(a[13] || a[5])) : (b = +a.left.replace(/[^-\d.]/g, ""), a = +a.top.replace(/[^-\d.]/g, ""));
            return { x: b, y: a }
        },
        _initIndicators: function() {
            function a(a) {
                if (f.indicators)
                    for (var b = f.indicators.length; b--;) a.call(f.indicators[b])
            }
            var b = this.options.interactiveScrollbars,
                c = "string" != typeof this.options.scrollbars,
                e = [],
                d, f = this;
            this.indicators = [];
            this.options.scrollbars && (this.options.scrollY && (d = {
                el: u("v", b, this.options.scrollbars),
                interactive: b,
                defaultScrollbars: !0,
                customStyle: c,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(d.el), e.push(d)), this.options.scrollX && (d = { el: u("h", b, this.options.scrollbars), interactive: b, defaultScrollbars: !0, customStyle: c, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: !1 }, this.wrapper.appendChild(d.el), e.push(d)));
            this.options.indicators && (e = e.concat(this.options.indicators));
            for (b = e.length; b--;) this.indicators.push(new v(this, e[b]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() { a(function() { this.fade() }) }), this.on("scrollCancel", function() { a(function() { this.fade() }) }), this.on("scrollStart", function() { a(function() { this.fade(1) }) }), this.on("beforeScrollStart", function() { a(function() { this.fade(1, !0) }) }));
            this.on("refresh", function() { a(function() { this.refresh() }) });
            this.on("destroy", function() {
                a(function() { this.destroy() });
                delete this.indicators
            })
        },
        _initWheel: function() {
            d.addEvent(this.wrapper, "wheel", this);
            d.addEvent(this.wrapper, "mousewheel", this);
            d.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy", function() {
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = null;
                d.removeEvent(this.wrapper, "wheel", this);
                d.removeEvent(this.wrapper, "mousewheel", this);
                d.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(a) {
            if (this.enabled) {
                var b, c, e, d = this;
                void 0 === this.wheelTimeout && d._execEvent("scrollStart");
                clearTimeout(this.wheelTimeout);
                this.wheelTimeout = setTimeout(function() {
                    d.options.snap || d._execEvent("scrollEnd");
                    d.wheelTimeout = void 0
                }, 400);
                if ("deltaX" in a) 1 === a.deltaMode ? (b = -a.deltaX * this.options.mouseWheelSpeed, a = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, a = -a.deltaY);
                else if ("wheelDeltaX" in a) b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed, a = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in a) b = a = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else if ("detail" in a) b = a = -a.detail / 3 * this.options.mouseWheelSpeed;
                else return;
                b *= this.options.invertWheelDirection;
                a *= this.options.invertWheelDirection;
                this.hasVerticalScroll || (b = a, a = 0);
                this.options.snap ? (c = this.currentPage.pageX, e = this.currentPage.pageY, 0 < b ? c-- : 0 > b && c++, 0 < a ? e-- : 0 > a && e++, this.goToPage(c, e)) : (c = this.x + f.round(this.hasHorizontalScroll ? b : 0), e = this.y + f.round(this.hasVerticalScroll ? a : 0), this.directionX = 0 < b ? -1 : 0 > b ? 1 : 0, this.directionY = 0 < a ? -1 : 0 > a ? 1 : 0, 0 < c ? c = 0 : c < this.maxScrollX && (c = this.maxScrollX), 0 < e ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY), this.scrollTo(c, e, 0))
            }
        },
        _initSnap: function() {
            this.currentPage = {};
            "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap));
            this.on("refresh", function() {
                var a = 0,
                    b, c = 0,
                    e, d, g, n = 0,
                    l;
                e = this.options.snapStepX || this.wrapperWidth;
                var m = this.options.snapStepY || this.wrapperHeight;
                this.pages = [];
                if (this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap)
                        for (d = f.round(e / 2), g = f.round(m / 2); n > -this.scrollerWidth;) {
                            this.pages[a] = [];
                            for (l = b = 0; l > -this.scrollerHeight;) this.pages[a][b] = {
                                x: f.max(n, this.maxScrollX),
                                y: f.max(l, this.maxScrollY),
                                width: e,
                                height: m,
                                cx: n - d,
                                cy: l - g
                            }, l -= m, b++;
                            n -= e;
                            a++
                        } else
                            for (m = this.options.snap, b = m.length, e = -1; a < b; a++) {
                                if (0 === a || m[a].offsetLeft <= m[a - 1].offsetLeft) c = 0, e++;
                                this.pages[c] || (this.pages[c] = []);
                                n = f.max(-m[a].offsetLeft, this.maxScrollX);
                                l = f.max(-m[a].offsetTop, this.maxScrollY);
                                d = n - f.round(m[a].offsetWidth / 2);
                                g = l - f.round(m[a].offsetHeight / 2);
                                this.pages[c][e] = { x: n, y: l, width: m[a].offsetWidth, height: m[a].offsetHeight, cx: d, cy: g };
                                n > this.maxScrollX && c++
                            }
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                    0 === this.options.snapThreshold % 1 ? this.snapThresholdY = this.snapThresholdX = this.options.snapThreshold : (this.snapThresholdX = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = f.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            });
            this.on("flick", function() {
                var a = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.x - this.startX), 1E3), f.min(f.abs(this.y - this.startY), 1E3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },
        _nearestSnap: function(a, b) {
            if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
            var c = 0,
                e = this.pages.length,
                d = 0;
            if (f.abs(a - this.absStartX) < this.snapThresholdX && f.abs(b - this.absStartY) < this.snapThresholdY) return this.currentPage;
            0 < a ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX);
            0 < b ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY);
            for (; c < e; c++)
                if (a >= this.pages[c][0].cx) {
                    a = this.pages[c][0].x;
                    break
                }
            for (e = this.pages[c].length; d < e; d++)
                if (b >= this.pages[0][d].cy) { b = this.pages[0][d].y; break }
            c == this.currentPage.pageX && (c += this.directionX, 0 > c ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1), a = this.pages[c][0].x);
            d == this.currentPage.pageY && (d += this.directionY, 0 > d ? d = 0 : d >= this.pages[0].length && (d = this.pages[0].length - 1), b = this.pages[0][d].y);
            return { x: a, y: b, pageX: c, pageY: d }
        },
        goToPage: function(a, b, c, d) {
            d = d || this.options.bounceEasing;
            a >= this.pages.length ? a = this.pages.length - 1 : 0 > a && (a = 0);
            b >= this.pages[a].length ? b = this.pages[a].length - 1 : 0 > b && (b = 0);
            var g = this.pages[a][b].x,
                h = this.pages[a][b].y;
            c = void 0 === c ? this.options.snapSpeed || f.max(f.max(f.min(f.abs(g - this.x), 1E3), f.min(f.abs(h - this.y), 1E3)), 300) : c;
            this.currentPage = { x: g, y: h, pageX: a, pageY: b };
            this.scrollTo(g, h, c, d)
        },
        next: function(a, b) {
            var c = this.currentPage.pageX,
                d = this.currentPage.pageY;
            c++;
            c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++);
            this.goToPage(c, d, a, b)
        },
        prev: function(a, b) {
            var c = this.currentPage.pageX,
                d = this.currentPage.pageY;
            c--;
            0 > c && this.hasVerticalScroll && (c = 0, d--);
            this.goToPage(c, d, a, b)
        },
        _initKeys: function(a) {
            a = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
            var b;
            if ("object" == typeof this.options.keyBindings)
                for (b in this.options.keyBindings) "string" == typeof this.options.keyBindings[b] && (this.options.keyBindings[b] = this.options.keyBindings[b].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (b in a) this.options.keyBindings[b] = this.options.keyBindings[b] || a[b];
            d.addEvent(g, "keydown", this);
            this.on("destroy", function() {
                d.removeEvent(g, "keydown", this)
            })
        },
        _key: function(a) {
            if (this.enabled) {
                var b = this.options.snap,
                    c = b ? this.currentPage.pageX : this.x,
                    e = b ? this.currentPage.pageY : this.y,
                    g = d.getTime(),
                    h = this.keyTime || 0,
                    n;
                this.options.useTransition && this.isInTransition && (n = this.getComputedPosition(), this._translate(f.round(n.x), f.round(n.y)), this.isInTransition = !1);
                this.keyAcceleration = 200 > g - h ? f.min(this.keyAcceleration + .25, 50) : 0;
                switch (a.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? c += b ? 1 : this.wrapperWidth : e += b ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? c -= b ? 1 : this.wrapperWidth : e -= b ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        c = b ? this.pages.length - 1 : this.maxScrollX;
                        e = b ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        e = c = 0;
                        break;
                    case this.options.keyBindings.left:
                        c += b ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        e += b ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        c -= b ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        e -= b ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                b ? this.goToPage(c, e) : (0 < c ? this.keyAcceleration = c = 0 : c < this.maxScrollX && (c = this.maxScrollX, this.keyAcceleration = 0), 0 < e ? this.keyAcceleration = e = 0 : e < this.maxScrollY && (e = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(c, e, 0), this.keyTime = g)
            }
        },
        _animate: function(a, b, c, e) {
            function f() {
                var r = d.getTime(),
                    p;
                r >= q ? (g.isAnimating = !1, g._translate(a, b), g.resetPosition(g.options.bounceTime) || g._execEvent("scrollEnd")) : (r = (r - m) / c, p = e(r), r = (a - n) * p + n, p = (b - l) * p + l, g._translate(r, p), g.isAnimating && t(f))
            }
            var g = this,
                n = this.x,
                l = this.y,
                m = d.getTime(),
                q = m + c;
            this.isAnimating = !0;
            f()
        },
        handleEvent: function(a) {
            switch (a.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(a);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(a);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(a);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(a);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(a);
                    break;
                case "keydown":
                    this._key(a);
                    break;
                case "click":
                    this.enabled && !a._constructed && (a.preventDefault(), a.stopPropagation())
            }
        }
    };
    v.prototype = {
        handleEvent: function(a) {
            switch (a.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(a);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(a);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(a)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null);
            this.options.interactive && (d.removeEvent(this.indicator, "touchstart", this), d.removeEvent(this.indicator, d.prefixPointerEvent("pointerdown"), this), d.removeEvent(this.indicator, "mousedown", this), d.removeEvent(g, "touchmove", this), d.removeEvent(g, d.prefixPointerEvent("pointermove"), this), d.removeEvent(g, "mousemove", this), d.removeEvent(g, "touchend", this), d.removeEvent(g, d.prefixPointerEvent("pointerup"), this), d.removeEvent(g, "mouseup", this));
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(a) {
            var b = a.touches ? a.touches[0] : a;
            a.preventDefault();
            a.stopPropagation();
            this.transitionTime();
            this.initiated = !0;
            this.moved = !1;
            this.lastPointX = b.pageX;
            this.lastPointY = b.pageY;
            this.startTime = d.getTime();
            this.options.disableTouch || d.addEvent(g, "touchmove", this);
            this.options.disablePointer || d.addEvent(g, d.prefixPointerEvent("pointermove"), this);
            this.options.disableMouse || d.addEvent(g, "mousemove", this);
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(a) {
            var b = a.touches ? a.touches[0] : a,
                c, e;
            d.getTime();
            this.moved || this.scroller._execEvent("scrollStart");
            this.moved = !0;
            c = b.pageX - this.lastPointX;
            this.lastPointX = b.pageX;
            e = b.pageY - this.lastPointY;
            this.lastPointY = b.pageY;
            this._pos(this.x + c, this.y + e);
            a.preventDefault();
            a.stopPropagation()
        },
        _end: function(a) {
            if (this.initiated) {
                this.initiated = !1;
                a.preventDefault();
                a.stopPropagation();
                d.removeEvent(g, "touchmove", this);
                d.removeEvent(g, d.prefixPointerEvent("pointermove"), this);
                d.removeEvent(g, "mousemove", this);
                if (this.scroller.options.snap) {
                    a = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                    var b = this.options.snapSpeed || f.max(f.max(f.min(f.abs(this.scroller.x - a.x), 1E3), f.min(f.abs(this.scroller.y - a.y), 1E3)), 300);
                    if (this.scroller.x != a.x || this.scroller.y != a.y) this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = a, this.scroller.scrollTo(a.x, a.y, b, this.scroller.options.bounceEasing)
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(a) {
            a = a || 0;
            var b = d.style.transitionDuration;
            if (b && (this.indicatorStyle[b] = a + "ms", !a && d.isBadAndroid)) {
                this.indicatorStyle[b] = "0.0001ms";
                var c = this;
                t(function() {
                    "0.0001ms" === c.indicatorStyle[b] && (c.indicatorStyle[b] = "0s")
                })
            }
        },
        transitionTimingFunction: function(a) { this.indicatorStyle[d.style.transitionTimingFunction] = a },
        refresh: function() {
            this.transitionTime();
            this.indicatorStyle.display = this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (d.addClass(this.wrapper, "iScrollBothScrollbars"), d.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (d.removeClass(this.wrapper, "iScrollBothScrollbars"), d.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = f.max(f.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX);
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = f.max(f.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY);
            this.updatePosition()
        },
        updatePosition: function() {
            var a = this.options.listenX && f.round(this.sizeRatioX * this.scroller.x) || 0,
                b = this.options.listenY && f.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = f.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = f.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = f.max(this.indicatorHeight + 3 * b, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = f.max(this.indicatorHeight - 3 * (b - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px"));
            this.x = a;
            this.y = b;
            this.scroller.options.useTransform ? this.indicatorStyle[d.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px")
        },
        _pos: function(a, b) {
            0 > a ? a = 0 : a > this.maxPosX && (a = this.maxPosX);
            0 > b ? b = 0 : b > this.maxPosY && (b = this.maxPosY);
            a = this.options.listenX ? f.round(a / this.sizeRatioX) : this.scroller.x;
            b = this.options.listenY ? f.round(b / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(a, b)
        },
        fade: function(a, b) {
            if (!b || this.visible) {
                clearTimeout(this.fadeTimeout);
                this.fadeTimeout = null;
                var c = a ? 0 : 300;
                this.wrapperStyle[d.style.transitionDuration] = (a ? 250 : 500) + "ms";
                this.fadeTimeout = setTimeout(function(a) {
                    this.wrapperStyle.opacity = a;
                    this.visible = +a
                }.bind(this, a ? "1" : "0"), c)
            }
        }
    };
    p.utils = d;
    "undefined" != typeof module && module.exports ? module.exports = p : "function" == typeof define && define.amd ? define(function() { return p }) : g.IScroll = p
})(window, document, Math);
/* --------------------------------
fullPage 2.9.4
-------------------------------- */
/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], function(t) { return n(t, e, e.document, e.Math) }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math) }("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        l = "fp-scrollable",
        s = "." + l,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        g = "fp-completely",
        m = "." + g,
        w = ".section",
        S = "fp-section",
        y = "." + S,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        k = "." + T,
        I = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        M = "#" + E,
        O = "fp-tooltip",
        A = "." + O,
        R = "fp-show-active",
        H = ".slide",
        B = "fp-slide",
        z = "." + B,
        D = z + v,
        P = "fp-slides",
        q = "." + P,
        F = "fp-slidesContainer",
        V = "." + F,
        W = "fp-table",
        U = "fp-slidesNav",
        Y = "." + U,
        j = Y + " a",
        N = "fp-controlArrow",
        X = "." + N,
        K = "fp-prev",
        Q = "." + K,
        G = N + " " + K,
        J = X + Q,
        Z = "fp-next",
        $ = "." + Z,
        _ = N + " " + Z,
        ee = X + $,
        ne = e(n),
        te = e(t),
        oe = { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 };
    e.fn.fullpage = function(l) {
        function s(n, t) {
            n || nt(0), rt("autoScrolling", n, t);
            var o = e(b);
            l.autoScrolling && !l.scrollBar ? (ct.css({ overflow: "hidden", height: "100%" }), N(Bt.recordHistory, "internal"), St.css({ "-ms-touch-action": "none", "touch-action": "none" }), o.length && nt(o.position().top)) : (ct.css({ overflow: "visible", height: "initial" }), N(!1, "internal"), St.css({ "-ms-touch-action": "", "touch-action": "" }), o.length && ct.scrollTop(o.position().top))
        }

        function N(e, n) { rt("recordHistory", e, n) }

        function Q(e, n) { rt("scrollingSpeed", e, n) }

        function Z(e, n) { rt("fitToSection", e, n) }

        function $(e) { l.lockAnchors = e }

        function ae(e) { e ? (Kn(), Qn()) : (Xn(), Gn()) }

        function re(n, t) { "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) { ot(n, t, "m") })) : n ? (ae(!0), Jn()) : (ae(!1), Zn()) }

        function le(n, t) { "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) { ot(n, t, "k") })) : l.keyboardScrolling = n }

        function se() {
            var n = e(b).prev(y);
            n.length || !l.loopTop && !l.continuousVertical || (n = e(y).last()), n.length && Ke(n, null, !0)
        }

        function ce() {
            var n = e(b).next(y);
            n.length || !l.loopBottom && !l.continuousVertical || (n = e(y).first()), n.length && Ke(n, null, !1)
        }

        function de(e, n) { Q(0, "internal"), fe(e, n), Q(Bt.scrollingSpeed, "internal") }

        function fe(e, n) { var t = Dn(e); "undefined" != typeof n ? qn(e, n) : t.length > 0 && Ke(t) }

        function ue(e) { je("right", e) }

        function he(e) { je("left", e) }

        function pe(n) {
            if (!St.hasClass(f)) {
                bt = !0, yt = ne.height(), e(y).each(function() {
                    var n = e(this).find(q),
                        t = e(this).find(z);
                    l.verticalCentered && e(this).find(k).css("height", Bn(e(this)) + "px"), e(this).css("height", yt + "px"), l.scrollOverflow && (t.length ? t.each(function() { Rn(e(this)) }) : Rn(e(this))), t.length > 1 && Sn(n, n.find(D))
                });
                var t = e(b),
                    o = t.index(y);
                o && de(o + 1), bt = !1, e.isFunction(l.afterResize) && n && l.afterResize.call(St), e.isFunction(l.afterReBuild) && !n && l.afterReBuild.call(St)
            }
        }

        function ve(n) {
            var t = dt.hasClass(c);
            n ? t || (s(!1, "internal"), Z(!1, "internal"), e(M).hide(), dt.addClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n)) : t && (s(Bt.autoScrolling, "internal"), Z(Bt.autoScrolling, "internal"), e(M).show(), dt.removeClass(c), e.isFunction(l.afterResponsive) && l.afterResponsive.call(St, n))
        }

        function ge() { l.css3 && (l.css3 = Nn()), l.scrollBar = l.scrollBar || l.hybrid, we(), Se(), re(!0), s(l.autoScrolling, "internal"), Tn(), jn(), "complete" === t.readyState && rn(), ne.on("load", rn) }

        function me() { ne.on("scroll", Re).on("hashchange", ln).blur(pn).resize(Cn), te.keydown(sn).keyup(dn).on("click touchstart", M + " a", vn).on("click touchstart", j, gn).on("click", A, cn), e(y).on("click touchstart", X, hn), l.normalScrollElements && (te.on("mouseenter", l.normalScrollElements, function() { ae(!1) }), te.on("mouseleave", l.normalScrollElements, function() { ae(!0) })) }

        function we() {
            var n = St.find(l.sectionSelector);
            l.anchors.length || (l.anchors = n.filter("[data-anchor]").map(function() { return e(this).data("anchor").toString() }).get()), l.navigationTooltips.length || (l.navigationTooltips = n.filter("[data-tooltip]").map(function() { return e(this).data("tooltip").toString() }).get())
        }

        function Se() {
            St.css({ height: "100%", position: "relative" }), St.addClass(a), e("html").addClass(u), yt = ne.height(), St.removeClass(f), Ce(), e(y).each(function(n) {
                var t = e(this),
                    o = t.find(z),
                    i = o.length;
                be(t, n), xe(t, n), i > 0 ? ye(t, o, i) : l.verticalCentered && Hn(t)
            }), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(dt), l.navigation && ke(), Le(), l.scrollOverflow ? ("complete" === t.readyState && Ie(), ne.on("load", Ie)) : Oe()
        }

        function ye(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + F + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(V).css("width", i + "%"), o > 1 && (l.controlArrows && Te(n), l.slidesNavigation && Vn(n, o)), t.each(function(n) { e(this).css("width", a + "%"), l.verticalCentered && Hn(e(this)) });
            var r = n.find(D);
            r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? et(r, "internal") : t.eq(0).addClass(p)
        }

        function be(n, t) { t || 0 !== e(b).length || n.addClass(p), vt = e(b), n.css("height", yt + "px"), l.paddingTop && n.css("padding-top", l.paddingTop), l.paddingBottom && n.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[t] && n.css("background-color", l.sectionsColor[t]), "undefined" != typeof l.anchors[t] && n.attr("data-anchor", l.anchors[t]) }

        function xe(n, t) { "undefined" != typeof l.anchors[t] && n.hasClass(p) && Mn(l.anchors[t], t), l.menu && l.css3 && e(l.menu).closest(r).length && e(l.menu).appendTo(dt) }

        function Ce() { St.find(l.sectionSelector).addClass(S), St.find(l.slideSelector).addClass(B) }

        function Te(e) { e.find(q).after('<div class="' + G + '"></div><div class="' + _ + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(J).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(J).hide() }

        function ke() {
            dt.append('<div id="' + E + '"><ul></ul></div>');
            var n = e(M);
            n.addClass(function() { return l.showActiveTooltip ? R + " " + l.navigationPosition : l.navigationPosition });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                l.anchors.length && (o = l.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = l.navigationTooltips[t];
                "undefined" != typeof a && "" !== a && (i += '<div class="' + O + " " + l.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(M).css("margin-top", "-" + e(M).height() / 2 + "px"), e(M).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }

        function Ie() {
            e(y).each(function() {
                var n = e(this).find(z);
                n.length ? n.each(function() { Rn(e(this)) }) : Rn(e(this))
            }), Oe()
        }

        function Le() { St.find('iframe[src*="youtube.com/embed/"]').each(function() { Ee(e(this), "enablejsapi=1") }) }

        function Ee(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Me(t) + n)
        }

        function Me(e) { return /\?/.test(e) ? "&" : "?" }

        function Oe() {
            var n = e(b);
            n.addClass(g), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(n), en(n), nn(n), l.scrollOverflowHandler.afterLoad(), Ae() && e.isFunction(l.afterLoad) && l.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(l.afterRender) && l.afterRender.call(St)
        }

        function Ae() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = Dn(decodeURIComponent(e[0]));
            return !t.length || t.length && t.index() === vt.index()
        }

        function Re() {
            var n;
            if (!l.autoScrolling || l.scrollBar) {
                var o = ne.scrollTop(),
                    i = ze(o),
                    a = 0,
                    r = o + ne.height() / 2,
                    s = dt.height() - ne.height() === o,
                    c = t.querySelectorAll(y);
                if (s) a = c.length - 1;
                else if (o)
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= r && (a = d)
                    } else a = 0;
                if (Be(i) && (e(b).hasClass(g) || e(b).addClass(g).siblings().removeClass(g)), n = e(c).eq(a), !n.hasClass(p)) {
                    zt = !0;
                    var u, h, v = e(b),
                        m = v.index(y) + 1,
                        w = On(n),
                        S = n.data("anchor"),
                        x = n.index(y) + 1,
                        C = n.find(D);
                    C.length && (h = C.data("anchor"), u = C.index()), Ct && (n.addClass(p).siblings().removeClass(p), e.isFunction(l.onLeave) && l.onLeave.call(v, m, x, w), e.isFunction(l.afterLoad) && l.afterLoad.call(n, S, x), on(v), en(n), nn(n), Mn(S, x - 1), l.anchors.length && (ut = S), Wn(u, h, S, x)), clearTimeout(Mt), Mt = setTimeout(function() { zt = !1 }, 100)
                }
                l.fitToSection && (clearTimeout(Ot), Ot = setTimeout(function() { l.fitToSection && He() }, l.fitToSectionDelay))
            }
        }

        function He() { Ct && (bt = !0, Ke(e(b)), bt = !1) }

        function Be(n) {
            var t = e(b).position().top,
                o = t + ne.height();
            return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop()
        }

        function ze(e) { var n = e > Dt ? "down" : "up"; return Dt = e, Ut = e, n }

        function De(e, n) {
            if (kt.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : se;
                if (n.length > 0) {
                    if (!l.scrollOverflowHandler.isScrolled(t, n)) return !0;
                    o()
                } else o()
            }
        }

        function Pe(e) { var n = e.originalEvent;!Fe(e.target) && l.autoScrolling && Ve(n) && e.preventDefault() }

        function qe(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);
            if (!Fe(n.target) && Ve(t)) {
                l.autoScrolling && n.preventDefault();
                var a = l.scrollOverflowHandler.scrollable(i),
                    r = _n(t);
                Ft = r.y, Vt = r.x, i.find(q).length && o.abs(qt - Vt) > o.abs(Pt - Ft) ? !gt && o.abs(qt - Vt) > ne.outerWidth() / 100 * l.touchSensitivity && (qt > Vt ? kt.m.right && ue(i) : kt.m.left && he(i)) : l.autoScrolling && Ct && o.abs(Pt - Ft) > ne.height() / 100 * l.touchSensitivity && (Pt > Ft ? De("down", a) : Ft > Pt && De("up", a))
            }
        }

        function Fe(n, t) { t = t || 0; var o = e(n).parent(); return t < l.normalScrollElementTouchThreshold && o.is(l.normalScrollElements) ? !0 : t == l.normalScrollElementTouchThreshold ? !1 : Fe(o, ++t) }

        function Ve(e) { return "undefined" == typeof e.pointerType || "mouse" != e.pointerType }

        function We(e) {
            var n = e.originalEvent;
            if (l.fitToSection && ct.stop(), Ve(n)) {
                var t = _n(n);
                Pt = t.y, qt = t.x
            }
        }

        function Ue(e, n) { for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a]; return o.ceil(t / n) }

        function Ye(t) {
            var i = (new Date).getTime(),
                a = e(m).hasClass(L);
            if (l.autoScrolling && !pt && !a) {
                t = t || n.event;
                var r = t.wheelDelta || -t.deltaY || -t.detail,
                    s = o.max(-1, o.min(1, r)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                Tt.length > 149 && Tt.shift(), Tt.push(o.abs(r)), l.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b),
                    u = l.scrollOverflowHandler.scrollable(f),
                    h = i - Wt;
                if (Wt = i, h > 200 && (Tt = []), Ct) {
                    var p = Ue(Tt, 10),
                        v = Ue(Tt, 70),
                        g = p >= v;
                    g && d && (0 > s ? De("down", u) : De("up", u))
                }
                return !1
            }
            l.fitToSection && ct.stop()
        }

        function je(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(q),
                a = i.find(z).length;
            if (!(!i.length || gt || 2 > a)) {
                var r = i.find(D),
                    s = null;
                if (s = "left" === n ? r.prev(z) : r.next(z), !s.length) {
                    if (!l.loopHorizontal) return;
                    s = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                gt = !0, Sn(i, s, n)
            }
        }

        function Ne() { e(D).each(function() { et(e(this), "internal") }) }

        function Xe(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Ut,
                i = t - yt + e.outerHeight(),
                a = l.bigSectionsDestination;
            return e.outerHeight() > yt ? (!o && !a || "bottom" === a) && (t = i) : (o || bt && e.is(":last-child")) && (t = i), Ut = t, t
        }

        function Ke(n, t, o) {
            if ("undefined" != typeof n) {
                var i, a, r = Xe(n),
                    s = { element: n, callback: t, isMovementUp: o, dtop: r, yMovement: On(n), anchorLink: n.data("anchor"), sectionIndex: n.index(y), activeSlide: n.find(D), activeSection: e(b), leavingSection: e(b).index(y) + 1, localIsResizing: bt };
                s.activeSection.is(n) && !bt || l.scrollBar && ne.scrollTop() === s.dtop && !n.hasClass(I) || (s.activeSlide.length && (i = s.activeSlide.data("anchor"), a = s.activeSlide.index()), l.autoScrolling && l.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Je(s)), (!e.isFunction(l.onLeave) || s.localIsResizing || l.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) !== !1) && (s.localIsResizing || on(s.activeSection), l.scrollOverflowHandler.beforeLeave(), n.addClass(p).siblings().removeClass(p), en(n), l.scrollOverflowHandler.onLeave(), Ct = !1, Wn(a, i, s.anchorLink, s.sectionIndex), Qe(s), ut = s.anchorLink, Mn(s.anchorLink, s.sectionIndex)))
            }
        }

        function Qe(n) {
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                zn(t, !0), l.scrollingSpeed ? (clearTimeout(Lt), Lt = setTimeout(function() { $e(n) }, l.scrollingSpeed)) : $e(n)
            } else {
                var i = Ge(n);
                e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function() { l.scrollBar ? setTimeout(function() { $e(n) }, 30) : $e(n) })
            }
        }

        function Ge(e) { var n = {}; return l.autoScrolling && !l.scrollBar ? (n.options = { top: -e.dtop }, n.element = r) : (n.options = { scrollTop: e.dtop }, n.element = "html, body"), n }

        function Je(n) { return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), nt(e(b).position().top), Ne(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = On(n.element), n }

        function Ze(n) { n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), nt(e(b).position().top), Ne()) }

        function $e(n) { Ze(n), e.isFunction(l.afterLoad) && !n.localIsResizing && l.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), l.scrollOverflowHandler.afterLoad(), n.localIsResizing || nn(n.element), n.element.addClass(g).siblings().removeClass(g), Ct = !0, e.isFunction(n.callback) && n.callback.call(this) }

        function _e(e, n) { e.attr(n, e.data(n)).removeAttr("data-" + n) }

        function en(n) {
            if (l.lazyLoading) {
                var t, o = an(n);
                o.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function() { t = e(this), e.each(["src", "srcset"], function(e, n) { var o = t.attr("data-" + n); "undefined" != typeof o && o && _e(t, n) }), t.is("source") && t.closest("video").get(0).load() })
            }
        }

        function nn(n) {
            var t = an(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && tn(n), n.onload = function() { n.hasAttribute("data-autoplay") && tn(n) }
            })
        }

        function tn(e) { e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") }

        function on(n) {
            var t = an(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), t.find('iframe[src*="youtube.com/embed/"]').each(function() { var n = e(this).get(0); /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") })
        }

        function an(n) { var t = n.find(D); return t.length && (n = e(t)), n }

        function rn() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            t && (l.animateAnchor ? qn(t, o) : de(t, o))
        }

        function ln() {
            if (!zt && !l.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof ut,
                    a = "undefined" == typeof ut && "undefined" == typeof o && !gt;
                t.length && (t && t !== ut && !i || a || !gt && ht != o) && qn(t, o)
            }
        }

        function sn(n) {
            clearTimeout(At);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), pt = n.ctrlKey, At = setTimeout(function() { mn(n) }, 150)
            }
        }

        function cn() { e(this).prev().trigger("click") }

        function dn(e) { xt && (pt = e.ctrlKey) }

        function fn(e) { 2 == e.which && (Yt = e.pageY, St.on("mousemove", wn)) }

        function un(e) { 2 == e.which && St.off("mousemove") }

        function hn() {
            var n = e(this).closest(y);
            e(this).hasClass(K) ? kt.m.left && he(n) : kt.m.right && ue(n)
        }

        function pn() { xt = !1, pt = !1 }

        function vn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ke(e(y).eq(t))
        }

        function gn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(q),
                o = t.find(z).eq(e(this).closest("li").index());
            Sn(t, o)
        }

        function mn(n) {
            var t = n.shiftKey;
            if (Ct || !([37, 39].indexOf(n.which) < 0)) switch (n.which) {
                case 38:
                case 33:
                    kt.k.up && se();
                    break;
                case 32:
                    if (t && kt.k.up) { se(); break }
                case 40:
                case 34:
                    kt.k.down && ce();
                    break;
                case 36:
                    kt.k.up && fe(1);
                    break;
                case 35:
                    kt.k.down && fe(e(y).length);
                    break;
                case 37:
                    kt.k.left && he();
                    break;
                case 39:
                    kt.k.right && ue();
                    break;
                default:
                    return
            }
        }

        function wn(e) { Ct && (e.pageY < Yt && kt.m.up ? se() : e.pageY > Yt && kt.m.down && ce()), Yt = e.pageY }

        function Sn(n, t, o) {
            var i = n.closest(y),
                a = { slides: n, destiny: t, direction: o, destinyPos: t.position(), slideIndex: t.index(), section: i, sectionIndex: i.index(y), anchorLink: i.data("anchor"), slidesNav: i.find(Y), slideAnchor: Yn(t), prevSlide: i.find(D), prevSlideIndex: i.find(D).index(), localIsResizing: bt };
            return a.xMovement = An(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (Ct = !1), l.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void(gt = !1) : (t.addClass(p).siblings().removeClass(p), a.localIsResizing || (on(a.prevSlide), en(t)), !l.loopHorizontal && l.controlArrows && (i.find(J).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && !a.localIsResizing && Wn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), void bn(n, a, !0))
        }

        function yn(n) { xn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), Ct = !0, nn(n.destiny)), gt = !1 }

        function bn(e, n, t) {
            var i = n.destinyPos;
            if (l.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                kn(e.find(V)).css(tt(a)), Et = setTimeout(function() { t && yn(n) }, l.scrollingSpeed, l.easing)
            } else e.animate({ scrollLeft: o.round(i.left) }, l.scrollingSpeed, l.easing, function() { t && yn(n) })
        }

        function xn(e, n) { e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p) }

        function Cn() {
            if (Tn(), mt) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - jt) > 20 * o.max(jt, i) / 100 && (pe(!0), jt = i)
                }
            } else clearTimeout(It), It = setTimeout(function() { pe(!0) }, 350)
        }

        function Tn() {
            var e = l.responsive || l.responsiveWidth,
                n = l.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }

        function kn(e) { var n = "all " + l.scrollingSpeed + "ms " + l.easingcss3; return e.removeClass(d), e.css({ "-webkit-transition": n, transition: n }) }

        function In(e) { return e.addClass(d) }

        function Ln(n, t) { l.navigation && (e(M).find(v).removeClass(p), n ? e(M).find('a[href="#' + n + '"]').addClass(p) : e(M).find("li").eq(t).find("a").addClass(p)) }

        function En(n) { l.menu && (e(l.menu).find(v).removeClass(p), e(l.menu).find('[data-menuanchor="' + n + '"]').addClass(p)) }

        function Mn(e, n) { En(e), Ln(e, n) }

        function On(n) {
            var t = e(b).index(y),
                o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function An(e, n) { return e == n ? "none" : e > n ? "left" : "right" }

        function Rn(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = l.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    a = t.scrollable(e);
                a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, l.verticalCentered && (n = e.find(k).get(0).scrollHeight));
                var r = yt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                n > r ? a.length ? t.update(e, r) : (l.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "")
            }
        }

        function Hn(e) { e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + T + '" style="height:' + Bn(e) + 'px;" />') }

        function Bn(e) {
            var n = yt;
            if (l.paddingTop || l.paddingBottom) {
                var t = e;
                t.hasClass(S) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = yt - o
            }
            return n
        }

        function zn(e, n) { n ? kn(St) : In(St), St.css(tt(e)), setTimeout(function() { St.removeClass(d) }, 10) }

        function Dn(n) { if (!n) return []; var t = St.find(y + '[data-anchor="' + n + '"]'); return t.length || (t = e(y).eq(n - 1)), t }

        function Pn(e, n) {
            var t = n.find(q),
                o = t.find(z + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(z).eq(e)), o
        }

        function qn(e, n) {
            var t = Dn(e);
            t.length && ("undefined" == typeof n && (n = 0), e === ut || t.hasClass(p) ? Fn(t, n) : Ke(t, function() { Fn(t, n) }))
        }

        function Fn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(q),
                    o = Pn(n, e);
                o.length && Sn(t, o)
            }
        }

        function Vn(e, n) {
            e.append('<div class="' + U + '"><ul></ul></div>');
            var t = e.find(Y);
            t.addClass(l.slidesNavPosition);
            for (var o = 0; n > o; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p)
        }

        function Wn(e, n, t, o) {
            var i = "";
            l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), ht = n, Un(i + "/" + n)) : "undefined" != typeof e ? (ht = n, Un(t)) : Un(t)), jn()
        }

        function Un(e) {
            if (l.recordHistory) location.hash = e;
            else if (mt || wt) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Yn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function jn() {
            var n = e(b),
                t = n.find(D),
                o = Yn(n),
                i = Yn(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            dt[0].className = dt[0].className.replace(r, ""), dt.addClass(h + "-" + a)
        }

        function Nn() {
            var e, o = t.createElement("p"),
                a = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
            t.body.insertBefore(o, null);
            for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Xn() { t.addEventListener ? (t.removeEventListener("mousewheel", Ye, !1), t.removeEventListener("wheel", Ye, !1), t.removeEventListener("MozMousePixelScroll", Ye, !1)) : t.detachEvent("onmousewheel", Ye) }

        function Kn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Ye, !1) : t[e](o + a, Ye, !1)
        }

        function Qn() { St.on("mousedown", fn).on("mouseup", un) }

        function Gn() { St.off("mousedown", fn).off("mouseup", un) }

        function Jn() {
            (mt || wt) && (l.autoScrolling && dt.off(Ht.touchmove).on(Ht.touchmove, Pe), e(r).off(Ht.touchstart).on(Ht.touchstart, We).off(Ht.touchmove).on(Ht.touchmove, qe))
        }

        function Zn() {
            (mt || wt) && e(r).off(Ht.touchstart).off(Ht.touchmove)
        }

        function $n() { var e; return e = n.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" } }

        function _n(e) { var n = []; return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, wt && Ve(e) && l.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n }

        function et(e, n) { Q(0, "internal"), "undefined" != typeof n && (bt = !0), Sn(e.closest(q), e), "undefined" != typeof n && (bt = !1), Q(Bt.scrollingSpeed, "internal") }

        function nt(e) {
            var n = o.round(e);
            if (l.css3 && l.autoScrolling && !l.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                zn(t, !1)
            } else l.autoScrolling && !l.scrollBar ? St.css("top", -n) : ct.scrollTop(n)
        }

        function tt(e) { return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

        function ot(e, n, t) {
            switch (n) {
                case "up":
                    kt[t].up = e;
                    break;
                case "down":
                    kt[t].down = e;
                    break;
                case "left":
                    kt[t].left = e;
                    break;
                case "right":
                    kt[t].right = e;
                    break;
                case "all":
                    "m" == t ? re(e) : le(e)
            }
        }

        function it(n) { s(!1, "internal"), re(!1), le(!1), St.addClass(f), clearTimeout(Et), clearTimeout(Lt), clearTimeout(It), clearTimeout(Mt), clearTimeout(Ot), ne.off("scroll", Re).off("hashchange", ln).off("resize", Cn), te.off("click touchstart", M + " a").off("mouseenter", M + " li").off("mouseleave", M + " li").off("click touchstart", j).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(y).off("click touchstart", X), clearTimeout(Et), clearTimeout(Lt), n && at() }

        function at() {
            nt(0), St.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() { _e(e(this), "src") }), St.find("img[data-srcset]").each(function() { _e(e(this), "srcset") }), e(M + ", " + Y + ", " + X).remove(), e(y).css({ height: "", "background-color": "", padding: "" }), e(z).css({ width: "" }), St.css({ height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), ct.css({ overflow: "", height: "" }), e("html").removeClass(u), dt.removeClass(c), e.each(dt.get(0).className.split(/\s+/), function(e, n) { 0 === n.indexOf(h) && dt.removeClass(n) }), e(y + ", " + z).each(function() { l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + p) }), In(St), St.find(k + ", " + V + ", " + q).each(function() { e(this).replaceWith(this.childNodes) }), St.css({ "-webkit-transition": "none", transition: "none" }), ct.scrollTop(0);
            var n = [S, B, F];
            e.each(n, function(n, t) { e("." + t).removeClass(t) })
        }

        function rt(e, n, t) { l[e] = n, "internal" !== t && (Bt[e] = n) }

        function lt() {
            var n = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(u) ? void st("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, st("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && st("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !l.continuousVertical || !l.scrollBar && l.autoScrolling || (l.continuousVertical = !1, st("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(n, function(e, n) { l[n] && st("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + n) }), void e.each(l.anchors, function(n, t) {
                var o = te.find("[name]").filter(function() { return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase() }),
                    i = te.find("[id]").filter(function() { return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase() });
                (i.length || o.length) && (st("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && st("error", '"' + t + '" is is being used by another element `id` property'), o.length && st("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function st(e, n) { console && console[e] && console[e]("fullPage: " + n) }
        if (e("html").hasClass(u)) return void lt();
        var ct = e("html, body"),
            dt = e("body"),
            ft = e.fn.fullpage;
        l = e.extend({ menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !1, scrollOverflowReset: !1, scrollOverflowHandler: ie, scrollOverflowOptions: null, touchSensitivity: 5, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, controlArrows: !0, controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, sectionSelector: w, slideSelector: H, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: !0 }, l);
        var ut, ht, pt, vt, gt = !1,
            mt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            wt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            St = e(this),
            yt = ne.height(),
            bt = !1,
            xt = !0,
            Ct = !0,
            Tt = [],
            kt = {};
        kt.m = { up: !0, down: !0, left: !0, right: !0 }, kt.k = e.extend(!0, {}, kt.m);
        var It, Lt, Et, Mt, Ot, At, Rt = $n(),
            Ht = { touchmove: "ontouchmove" in n ? "touchmove" : Rt.move, touchstart: "ontouchstart" in n ? "touchstart" : Rt.down },
            Bt = e.extend(!0, {}, l);
        lt(), oe.click = wt, oe = e.extend(oe, l.scrollOverflowOptions), e.extend(e.easing, { easeInOutCubic: function(e, n, t, o, i) { return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t } }), e(this).length && (ft.setAutoScrolling = s, ft.setRecordHistory = N, ft.setScrollingSpeed = Q, ft.setFitToSection = Z, ft.setLockAnchors = $, ft.setMouseWheelScrolling = ae, ft.setAllowScrolling = re, ft.setKeyboardScrolling = le, ft.moveSectionUp = se, ft.moveSectionDown = ce, ft.silentMoveTo = de, ft.moveTo = fe, ft.moveSlideRight = ue, ft.moveSlideLeft = he, ft.fitToSection = He, ft.reBuild = pe, ft.setResponsive = ve, ft.destroy = it, ge(), me());
        var zt = !1,
            Dt = 0,
            Pt = 0,
            qt = 0,
            Ft = 0,
            Vt = 0,
            Wt = (new Date).getTime(),
            Ut = 0,
            Yt = 0,
            jt = yt
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() { this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this) }, IScroll.prototype.wheelOff = function() { this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this) });
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        toggleWheel: function(n) {
            var t = e(b).find(s);
            t.each(function() { var t = e(this).data("iscrollInstance"); "undefined" != typeof t && t && (n ? t.wheelOn() : t.wheelOff()) })
        },
        onLeave: function() { ie.toggleWheel(!1) },
        beforeLeave: function() { ie.onLeave() },
        afterLoad: function() { ie.toggleWheel(!0) },
        create: function(n, t) {
            var o = n.find(s);
            o.height(t), o.each(function() {
                var n = e(this),
                    t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function() { e(this).destroy() }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), t.wheelOff(), n.data("iscrollInstance", t)
            })
        },
        isScrolled: function(e, n) { var t = n.data("iscrollInstance"); return t ? "top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 : !0 },
        scrollable: function(e) { return e.find(q).length ? e.find(D).find(s) : e.find(s) },
        scrollHeight: function(e) { return e.find(s).children().first().get(0).scrollHeight },
        remove: function(e) {
            var n = e.find(s);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t.destroy(), n.data("iscrollInstance", null)
            }
            e.find(s).children().first().children().first().unwrap().unwrap()
        },
        update: function(n, t) { clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function() { e.each(ie.iScrollInstances, function() { e(this).get(0).refresh() }) }, 150), n.find(s).css("height", t + "px").parent().css("height", t + "px") },
        wrapContent: function() { return '<div class="' + l + '"><div class="fp-scroller"></div></div>' }
    }
});

/* --------------------------------
Morphext
-------------------------------- */
/*! Morphext - v2.4.4 - 2015-05-21 */
! function(a) {
    "use strict";

    function b(b, c) { this.element = a(b), this.settings = a.extend({}, d, c), this._defaults = d, this._init() }
    var c = "Morphext",
        d = { animation: "flipInX", separator: ",", speed: 2e3, complete: a.noop };
    b.prototype = {
        _init: function() {
            var b = this;
            this.phrases = [], this.element.addClass("morphext"), a.each(this.element.text().split(this.settings.separator), function(c, d) { b.phrases.push(a.trim(d)) }), this.index = -1, this.animate(), this.start()
        },
        animate: function() { this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", a.isFunction(this.settings.complete) && this.settings.complete.call(this) },
        start: function() {
            var a = this;
            this._interval = setInterval(function() { a.animate() }, this.settings.speed)
        },
        stop: function() { this._interval = clearInterval(this._interval) }
    }, a.fn[c] = function(d) { return this.each(function() { a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d)) }) }
}(jQuery);
/* --------------------------------
Owl Carousel v2.2.1
-------------------------------- */
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }
    e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { a <= b && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1 }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" })
    }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 };
        return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null })
    }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() { var d; return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c })
    }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this)))
    }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
            "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this),
            "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this),
            "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this))
    };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) {
        var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } })
    }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) }
    }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { if (g[b] !== d) return e = !c || b, !1 }), e
    }

    function f(a) { return e(a, !0) }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/* --------------------------------
Validator v0.8.1
-------------------------------- */
/*!
 * Validator v0.8.1 for Bootstrap 3, by @1000hz
 * Copyright 2015 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */
+ function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b),
                f = c.data("bs.validator");
            (f || "destroy" != b) && (f || c.data("bs.validator", f = new d(this, e)), "string" == typeof b && f[b]())
        })
    }
    var c = ':input:not([type="submit"], button):enabled:visible',
        d = function(b, c) {
            this.$element = a(b), this.options = c, c.errors = a.extend({}, d.DEFAULTS.errors, c.errors);
            for (var e in c.custom)
                if (!c.errors[e]) throw new Error("Missing default error message for custom validator: " + e);
            a.extend(d.VALIDATORS, c.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", a.proxy(this.validateInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function() {
                var b = a(this),
                    c = b.data("match");
                a(c).on("input.bs.validator", function() { b.val() && b.trigger("input.bs.validator") })
            })
        };
    d.DEFAULTS = { delay: 500, html: !1, disable: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-warning-sign" } }, d.VALIDATORS = { "native": function(a) { var b = a[0]; return b.checkValidity ? b.checkValidity() : !0 }, match: function(b) { var c = b.data("match"); return !b.val() || b.val() === a(c).val() }, minlength: function(a) { var b = a.data("minlength"); return !a.val() || a.val().length >= b } }, d.prototype.validateInput = function(b) {
        var c = a(b.target),
            d = c.data("bs.validator.errors");
        if (c.is('[type="radio"]') && (c = this.$element.find('input[name="' + c.attr("name") + '"]')), this.$element.trigger(b = a.Event("validate.bs.validator", { relatedTarget: c[0] })), !b.isDefaultPrevented()) {
            var e = this;
            this.runValidators(c).done(function(f) { c.data("bs.validator.errors", f), f.length ? e.showErrors(c) : e.clearErrors(c), d && f.toString() === d.toString() || (b = f.length ? a.Event("invalid.bs.validator", { relatedTarget: c[0], detail: f }) : a.Event("valid.bs.validator", { relatedTarget: c[0], detail: d }), e.$element.trigger(b)), e.toggleSubmit(), e.$element.trigger(a.Event("validated.bs.validator", { relatedTarget: c[0] })) })
        }
    }, d.prototype.runValidators = function(b) {
        function c(a) { return b.data(a + "-error") || b.data("error") || "native" == a && b[0].validationMessage || g.errors[a] }
        var e = [],
            f = a.Deferred(),
            g = this.options;
        return b.data("bs.validator.deferred") && b.data("bs.validator.deferred").reject(), b.data("bs.validator.deferred", f), a.each(d.VALIDATORS, a.proxy(function(a, d) { if ((b.data(a) || "native" == a) && !d.call(this, b)) { var f = c(a);!~e.indexOf(f) && e.push(f) } }, this)), !e.length && b.val() && b.data("remote") ? this.defer(b, function() {
            var d = {};
            d[b.attr("name")] = b.val(), a.get(b.data("remote"), d).fail(function(a, b, d) { e.push(c("remote") || d) }).always(function() { f.resolve(e) })
        }) : f.resolve(e), f.promise()
    }, d.prototype.validate = function() { var a = this.options.delay; return this.options.delay = 0, this.$element.find(c).trigger("input.bs.validator"), this.options.delay = a, this }, d.prototype.showErrors = function(b) {
        var c = this.options.html ? "html" : "text";
        this.defer(b, function() {
            var d = b.closest(".form-group"),
                e = d.find(".help-block.with-errors"),
                f = d.find(".form-control-feedback"),
                g = b.data("bs.validator.errors");
            g.length && (g = a("<ul/>").addClass("list-unstyled").append(a.map(g, function(b) { return a("<li/>")[c](b) })), void 0 === e.data("bs.validator.originalContent") && e.data("bs.validator.originalContent", e.html()), e.empty().append(g), d.addClass("has-error"), f.length && f.removeClass(this.options.feedback.success) && f.addClass(this.options.feedback.error) && d.removeClass("has-success"))
        })
    }, d.prototype.clearErrors = function(a) {
        var b = a.closest(".form-group"),
            c = b.find(".help-block.with-errors"),
            d = b.find(".form-control-feedback");
        c.html(c.data("bs.validator.originalContent")), b.removeClass("has-error"), d.length && d.removeClass(this.options.feedback.error) && d.addClass(this.options.feedback.success) && b.addClass("has-success")
    }, d.prototype.hasErrors = function() {
        function b() { return !!(a(this).data("bs.validator.errors") || []).length }
        return !!this.$element.find(c).filter(b).length
    }, d.prototype.isIncomplete = function() {
        function b() { return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !a('[name="' + this.name + '"]:checked').length : "" === a.trim(this.value) }
        return !!this.$element.find(c).filter("[required]").filter(b).length
    }, d.prototype.onSubmit = function(a) { this.validate(), (this.isIncomplete() || this.hasErrors()) && a.preventDefault() }, d.prototype.toggleSubmit = function() {
        if (this.options.disable) {
            var b = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
            b.toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({ "pointer-events": "all", cursor: "pointer" })
        }
    }, d.prototype.defer = function(b, c) { return c = a.proxy(c, this), this.options.delay ? (window.clearTimeout(b.data("bs.validator.timeout")), void b.data("bs.validator.timeout", window.setTimeout(c, this.options.delay))) : c() }, d.prototype.destroy = function() {
        return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$element.find(c).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
            var b = a(this),
                c = b.data("bs.validator.timeout");
            window.clearTimeout(c) && b.removeData("bs.validator.timeout")
        }), this.$element.find(".help-block.with-errors").each(function() {
            var b = a(this),
                c = b.data("bs.validator.originalContent");
            b.removeData("bs.validator.originalContent").html(c)
        }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error").removeClass("has-error"), this
    };
    var e = a.fn.validator;
    a.fn.validator = b, a.fn.validator.Constructor = d, a.fn.validator.noConflict = function() { return a.fn.validator = e, this }, a(window).on("load", function() {
        a('form[data-toggle="validator"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery);
/* --------------------------------
Waterwheel Carousel
-------------------------------- */
/*!
 * Waterwheel Carousel
 * Version 2.3.0
 * http://www.bkosborne.com
 *
 * Copyright 2011-2013 Brian Osborne
 * Dual licensed under GPLv3 or MIT
 * Copies of the licenses have been distributed
 * with this plugin.
 *
 * Plugin written by Brian Osborne
 * for use with the jQuery JavaScript Framework
 * http://www.jquery.com
 */
(function(a) {
    a.fn.waterwheelCarousel = function(r) {
        if (this.length > 1) { this.each(function() { a(this).waterwheelCarousel(r) }); return this }
        var m = this;
        var c = {};
        var t = {};

        function j() {
            t = { itemsContainer: a(m), totalItems: a(m).find("img").length, containerWidth: a(m).width(), containerHeight: a(m).height(), currentCenterItem: null, previousCenterItem: null, items: [], calculations: [], carouselRotationsLeft: 0, currentlyMoving: false, itemsAnimating: 0, currentSpeed: c.speed, intervalTimer: null, currentDirection: "forward", leftItemsCount: 0, rightItemsCount: 0, performingSetup: true };
            t.itemsContainer.find("img").removeClass(c.activeClassName)
        }

        function l(u) { clearTimeout(t.autoPlayTimer); if (!u && c.autoPlay !== 0) { t.autoPlayTimer = setTimeout(function() { if (c.autoPlay > 0) { n("forward") } else { n("backward") } }, Math.abs(c.autoPlay)) } }

        function h(x) {
            if (c.preloadImages === false) { x(); return }
            var v = t.itemsContainer.find("img"),
                u = 0,
                w = v.length;
            v.each(function() {
                a(this).bind("load", function() { u += 1; if (u === w) { x(); return } });
                a(this).attr("src", a(this).attr("src"));
                if (this.complete) { a(this).trigger("load") }
            })
        }

        function d() { t.itemsContainer.find("img").each(function() { if (a(this).data("original_width") == undefined || c.forcedImageWidth > 0) { a(this).data("original_width", a(this).width()) } if (a(this).data("original_height") == undefined || c.forcedImageHeight > 0) { a(this).data("original_height", a(this).height()) } }) }

        function e() {
            if (c.forcedImageWidth && c.forcedImageHeight) {
                t.itemsContainer.find("img").each(function() {
                    a(this).width(c.forcedImageWidth);
                    a(this).height(c.forcedImageHeight)
                })
            }
        }

        function s() {
            var v = t.itemsContainer.find("img:first");
            t.calculations[0] = { distance: 0, offset: 0, opacity: 1 };
            var u = c.horizonOffset;
            var x = c.separation;
            for (var w = 1; w <= c.flankingItems + 2; w++) {
                if (w > 1) {
                    u *= c.horizonOffsetMultiplier;
                    x *= c.separationMultiplier
                }
                t.calculations[w] = { distance: t.calculations[w - 1].distance + x, offset: t.calculations[w - 1].offset + u, opacity: t.calculations[w - 1].opacity * c.opacityMultiplier }
            }
            if (c.edgeFadeEnabled) { t.calculations[c.flankingItems + 1].opacity = 0 } else { t.calculations[c.flankingItems + 1] = { distance: 0, offset: 0, opacity: 0 } }
        }

        function b() {
            t.items = t.itemsContainer.find("img");
            for (var u = 0; u < t.totalItems; u++) { t.items[u] = a(t.items[u]) }
            if (c.horizon === 0) { if (c.orientation === "horizontal") { c.horizon = t.containerHeight / 2 } else { c.horizon = t.containerWidth / 2 } }
            t.itemsContainer.css("position", "relative").find("img").each(function() {
                var w, v;
                if (c.orientation === "horizontal") {
                    w = (t.containerWidth / 2) - (a(this).data("original_width") / 2);
                    v = c.horizon - (a(this).data("original_height") / 2)
                } else {
                    w = c.horizon - (a(this).data("original_width") / 2);
                    v = (t.containerHeight / 2) - (a(this).data("original_height") / 2)
                }
                a(this).css({ left: w, top: v, visibility: "visible", position: "absolute", "z-index": 0, opacity: 0 }).data({ top: v, left: w, oldPosition: 0, currentPosition: 0, depth: 0, opacity: 0 }).show()
            })
        }

        function q() {
            c.startingItem = (c.startingItem === 0) ? Math.round(t.totalItems / 2) : c.startingItem;
            t.rightItemsCount = Math.ceil((t.totalItems - 1) / 2);
            t.leftItemsCount = Math.floor((t.totalItems - 1) / 2);
            t.carouselRotationsLeft = 1;
            k(t.items[c.startingItem - 1], 0);
            t.items[c.startingItem - 1].css("opacity", 1);
            var u = c.startingItem - 1;
            for (var v = 1; v <= t.rightItemsCount; v++) {
                (u < t.totalItems - 1) ? u += 1: u = 0;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
            var u = c.startingItem - 1;
            for (var v = -1; v >= t.leftItemsCount * -1; v--) {
                (u > 0) ? u -= 1: u = t.totalItems - 1;
                t.items[u].css("opacity", 1);
                k(t.items[u], v)
            }
        }

        function f(I, y) {
            var z = Math.abs(y);
            if (z < c.flankingItems + 1) { var x = t.calculations[z] } else { var x = t.calculations[c.flankingItems + 1] }
            var A = Math.pow(c.sizeMultiplier, z);
            var C = A * I.data("original_width");
            var w = A * I.data("original_height");
            var v = Math.abs(I.width() - C);
            var B = Math.abs(I.height() - w);
            var D = x.offset;
            var J = x.distance;
            if (y < 0) { J *= -1 }
            if (c.orientation == "horizontal") { var u = t.containerWidth / 2; var H = u + J - (C / 2); var F = c.horizon - D - (w / 2) } else { var u = t.containerHeight / 2; var H = c.horizon - D - (C / 2); var F = u + J - (w / 2) }
            var E;
            if (y === 0) { E = 1 } else { E = x.opacity }
            var G = c.flankingItems + 2 - z;
            I.data("width", C);
            I.data("height", w);
            I.data("top", F);
            I.data("left", H);
            I.data("oldPosition", I.data("currentPosition"));
            I.data("depth", G);
            I.data("opacity", E)
        }

        function k(u, v) {
            if (Math.abs(v) <= c.flankingItems + 1) {
                f(u, v);
                t.itemsAnimating++;
                u.css("z-index", u.data().depth).animate({ left: u.data().left, width: u.data().width, height: u.data().height, top: u.data().top, opacity: u.data().opacity }, t.currentSpeed, c.animationEasing, function() { g(u, v) })
            } else { u.data("currentPosition", v); if (u.data("oldPosition") === 0) { u.css({ left: u.data().left, width: u.data().width, height: u.data().height, top: u.data().top, opacity: u.data().opacity, "z-index": u.data().depth }) } }
        }

        function g(u, v) {
            t.itemsAnimating--;
            u.data("currentPosition", v);
            if (v === 0) { t.currentCenterItem = u }
            if (t.itemsAnimating === 0) {
                t.carouselRotationsLeft -= 1;
                t.currentlyMoving = false;
                if (t.carouselRotationsLeft > 0) { p(0) } else {
                    t.currentSpeed = c.speed;
                    t.currentCenterItem.addClass(c.activeClassName);
                    if (t.performingSetup === false) {
                        c.movedToCenter(t.currentCenterItem);
                        c.movedFromCenter(t.previousCenterItem)
                    }
                    t.performingSetup = false;
                    l()
                }
            }
        }

        function p(v) {
            if (t.currentlyMoving === false) {
                t.currentCenterItem.removeClass(c.activeClassName);
                t.currentlyMoving = true;
                t.itemsAnimating = 0;
                t.carouselRotationsLeft += v;
                if (c.quickerForFurther === true) {
                    if (v > 1) { t.currentSpeed = c.speed / v }
                    t.currentSpeed = (t.currentSpeed < 100) ? 100 : t.currentSpeed
                }
                for (var y = 0; y < t.totalItems; y++) {
                    var w = a(t.items[y]);
                    var z = w.data("currentPosition");
                    var x;
                    if (t.currentDirection == "forward") { x = z - 1 } else { x = z + 1 }
                    var u = (x > 0) ? t.rightItemsCount : t.leftItemsCount;
                    if (Math.abs(x) > u) { x = z * -1; if (t.totalItems % 2 == 0) { x += 1 } }
                    k(w, x)
                }
            }
        }
        a(this).find("img").bind("click", function() {
            var v = a(this).data().currentPosition;
            if (c.imageNav == false) { return }
            if (Math.abs(v) >= c.flankingItems + 1) { return }
            if (t.currentlyMoving) { return }
            t.previousCenterItem = t.currentCenterItem;
            l(true);
            c.autoPlay = 0;
            var u = Math.abs(v);
            if (v == 0) { c.clickedCenter(a(this)) } else {
                c.movingFromCenter(t.currentCenterItem);
                c.movingToCenter(a(this));
                if (v < 0) {
                    t.currentDirection = "backward";
                    p(u)
                } else {
                    if (v > 0) {
                        t.currentDirection = "forward";
                        p(u)
                    }
                }
            }
        });
        a(this).find("a").bind("click", function(u) { var v = a(this).find("img").data("currentPosition") == 0; if (c.linkHandling === 1 || (c.linkHandling === 2 && !v)) { u.preventDefault(); return false } });

        function o() { var u = t.currentCenterItem.next(); if (u.length <= 0) { u = t.currentCenterItem.parent().children().first() } return u }

        function i() { var u = t.currentCenterItem.prev(); if (u.length <= 0) { u = t.currentCenterItem.parent().children().last() } return u }

        function n(u) {
            if (t.currentlyMoving === false) {
                t.previousCenterItem = t.currentCenterItem;
                c.movingFromCenter(t.currentCenterItem);
                if (u == "backward") {
                    c.movingToCenter(i());
                    t.currentDirection = "backward"
                } else {
                    if (u == "forward") {
                        c.movingToCenter(o());
                        t.currentDirection = "forward"
                    }
                }
            }
            p(1)
        }
        a(document).keydown(function(u) {
            if (c.keyboardNav) {
                if ((u.which === 37 && c.orientation == "horizontal") || (u.which === 38 && c.orientation == "vertical")) {
                    l(true);
                    c.autoPlay = 0;
                    n("backward")
                } else {
                    if ((u.which === 39 && c.orientation == "horizontal") || (u.which === 40 && c.orientation == "vertical")) {
                        l(true);
                        c.autoPlay = 0;
                        n("forward")
                    }
                }
                if (c.keyboardNavOverride && ((c.orientation == "horizontal" && (u.which === 37 || u.which === 39)) || (c.orientation == "vertical" && (u.which === 38 || u.which === 40)))) { u.preventDefault(); return false }
            }
        });
        this.reload = function(v) {
            if (typeof v === "object") { var u = v } else { var u = {} }
            c = a.extend({}, a.fn.waterwheelCarousel.defaults, v);
            j();
            t.itemsContainer.find("img").hide();
            e();
            h(function() {
                d();
                s();
                b();
                q()
            })
        };
        this.next = function() {
            l(true);
            c.autoPlay = 0;
            n("forward")
        };
        this.prev = function() {
            l(true);
            c.autoPlay = 0;
            n("backward")
        };
        this.reload(r);
        return this
    };
    a.fn.waterwheelCarousel.defaults = { startingItem: 1, separation: 175, separationMultiplier: 0.6, horizonOffset: 0, horizonOffsetMultiplier: 1, sizeMultiplier: 0.7, opacityMultiplier: 0.8, horizon: 0, flankingItems: 3, speed: 300, animationEasing: "linear", quickerForFurther: true, edgeFadeEnabled: false, linkHandling: 2, autoPlay: 0, orientation: "horizontal", activeClassName: "carousel-center", keyboardNav: false, keyboardNavOverride: true, imageNav: true, preloadImages: true, forcedImageWidth: 0, forcedImageHeight: 0, movingToCenter: a.noop, movedToCenter: a.noop, clickedCenter: a.noop, movingFromCenter: a.noop, movedFromCenter: a.noop }
})(jQuery);
/* --------------------------------
PhotoSwipe
-------------------------------- */
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b() }(this, function() {
    "use strict";
    var a = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(a, b) { return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() { return a.currItem.src || "" }, getPageURLForShare: function() { return window.location.href }, getTextForShare: function() { return a.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
            A = function(a) {
                if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                if (d) {
                    a.stopPropagation && a.stopPropagation(), r = !0;
                    var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() { r = !1 }, h)
                }
            },
            B = function() { return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth },
            C = function(a, c, d) { b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c) },
            D = function() {
                var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a)
            },
            E = function() { C(i, "share-modal--hidden", y) },
            F = function() { return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() { y && E() }, 300)) : (E(), setTimeout(function() { y || b.addClass(i, "pswp__share-modal--fade-in") }, 30)), y || H(), !1 },
            G = function(b) { b = b || window.event; var c = b.target || b.srcElement; return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1)) },
            H = function() {
                for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G
            },
            I = function(a) {
                for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
            },
            J = 0,
            K = function() { clearTimeout(u), J = 0, k && v.setIdle(!1) },
            L = function(a) {
                a = a ? a : window.event;
                var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() { v.setIdle(!0) }, q.timeToIdleOutside))
            },
            M = function() { q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs")) },
            N = function() { q.preloaderEl && (O(!0), l("beforeChange", function() { clearTimeout(o), o = setTimeout(function() { a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0) }, q.loadingIndicatorDelay) }), l("imageLoadComplete", function(b, c) { a.currItem === c && O(!0) })) },
            O = function(a) { n !== a && (C(m, "preloader--active", !a), n = a) },
            P = function(a) {
                var c = a.vGap;
                if (B()) {
                    var g = q.barsSize;
                    if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44
                        } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top
                } else c.top = c.bottom = 0
            },
            Q = function() { q.timeToIdle && l("mouseUsed", function() { b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() { J++, 2 === J && v.setIdle(!0) }, q.timeToIdle / 2) }) },
            R = function() {
                l("onVerticalDrag", function(a) { x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls() });
                var a;
                l("onPinchClose", function(b) { x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls() }), l("zoomGestureEnded", function() { a = !1, a && !x && v.showControls() })
            },
            S = [{ name: "caption", option: "captionEl", onInit: function(a) { e = a } }, { name: "share-modal", option: "shareEl", onInit: function(a) { i = a }, onTap: function() { F() } }, { name: "button--share", option: "shareEl", onInit: function(a) { h = a }, onTap: function() { F() } }, { name: "button--zoom", option: "zoomEl", onTap: a.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(a) { g = a } }, { name: "button--close", option: "closeEl", onTap: a.close }, { name: "button--arrow--left", option: "arrowEl", onTap: a.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: a.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { c.isFullscreen() ? c.exit() : c.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(a) { m = a } }],
            T = function() {
                var a, c, e, f = function(d) {
                    if (d)
                        for (var f = d.length, g = 0; g < f; g++) { a = d[g], c = a.className; for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled")) }
                };
                f(d.children);
                var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children)
            };
        v.init = function() {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function(a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function() { b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver) }), l("unbindEvents", function() { y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null) }), l("destroy", function() { q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1) }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() { q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden") }), l("initialZoomOut", function() { b.addClass(d, "pswp__ui--hidden") }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function(a) { k = a, C(d, "ui--idle", a) }, v.update = function() { x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D() }, v.updateFullscreen = function(d) { d && setTimeout(function() { a.setScrollOffset(0, b.getScrollY()) }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs") }, v.updateIndexIndicator = function() { q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn()) }, v.onGlobalTap = function(c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
        }, v.onMouseOver = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function() { b.addClass(d, "pswp__ui--hidden"), x = !1 }, v.showControls = function() { x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden") }, v.supportsFullscreen = function() { var a = document; return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen) }, v.getFullscreenAPI = function() {
            var b, c = document.documentElement,
                d = "fullscreenchange";
            return c.requestFullscreen ? b = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: d } : c.mozRequestFullScreen ? b = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + d } : c.webkitRequestFullscreen ? b = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + d } : c.msRequestFullscreen && (b = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), b && (b.enter = function() { return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, b.exit = function() { return q.closeOnScroll = j, document[this.exitK]() }, b.isFullscreen = function() { return document[this.elementK] }), b
        }
    };
    return a
});
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
! function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b() }(this, function() {
    "use strict";
    var a = function(a, b, c, d) {
        var e = {
            features: null,
            bind: function(a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
            },
            isArray: function(a) { return a instanceof Array },
            createEl: function(a, b) { var c = document.createElement(b || "div"); return a && (c.className = a), c },
            getScrollY: function() { var a = window.pageYOffset; return void 0 !== a ? a : document.documentElement.scrollTop },
            unbind: function(a, b, c) { e.bind(a, b, c, !0) },
            removeClass: function(a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(a, b) { e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b) },
            hasClass: function(a, b) { return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className) },
            getChildByClass: function(a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b)) return c;
                    c = c.nextSibling
                }
            },
            arraySearch: function(a, b, c) {
                for (var d = a.length; d--;)
                    if (a[d][c] === b) return d;
                return -1
            },
            extend: function(a, b, c) {
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        if (c && a.hasOwnProperty(d)) continue;
                        a[d] = b[d]
                    }
            },
            easing: { sine: { out: function(a) { return Math.sin(a * (Math.PI / 2)) }, inOut: function(a) { return -(Math.cos(Math.PI * a) - 1) / 2 } }, cubic: { out: function(a) { return --a * a * a + 1 } } },
            detectFeatures: function() {
                if (e.features) return e.features;
                var a = e.createEl(),
                    b = a.style,
                    c = "",
                    d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/),
                        i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
                    c = m[n];
                    for (var o = 0; o < 3; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function(a) {
                        var b = (new Date).getTime(),
                            c = Math.max(0, 16 - (b - p)),
                            d = window.setTimeout(function() { a(b + c) }, c);
                        return p = b + c, d
                    }, d.caf = function(a) { clearTimeout(a) }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function() { c.handleEvent.call(c) }, h = 0; h < b.length; h++)
                if (e = b[h])
                    if ("object" == typeof c && c.handleEvent) {
                        if (d) { if (!c["oldIE" + e]) return !1 } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e])
                    } else a[f]("on" + e, c)
        });
        var f = this,
            g = 25,
            h = 3,
            i = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(a) { return "A" === a.tagName }, getDoubleTapZoom: function(a, b) { return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma = function() { return { x: 0, y: 0 } },
            na = ma(),
            oa = ma(),
            pa = ma(),
            qa = {},
            ra = 0,
            sa = {},
            ta = ma(),
            ua = 0,
            va = !0,
            wa = [],
            xa = {},
            ya = !1,
            za = function(a, b) { e.extend(f, b.publicMethods), wa.push(a) },
            Aa = function(a) { var b = ac(); return a > b - 1 ? a - b : a < 0 ? b + a : a },
            Ba = {},
            Ca = function(a, b) { return Ba[a] || (Ba[a] = []), Ba[a].push(b) },
            Da = function(a) {
                var b = Ba[a];
                if (b) {
                    var c = Array.prototype.slice.call(arguments);
                    c.shift();
                    for (var d = 0; d < b.length; d++) b[d].apply(f, c)
                }
            },
            Ea = function() { return (new Date).getTime() },
            Fa = function(a) { ja = a, f.bg.style.opacity = a * i.bgOpacity },
            Ga = function(a, b, c, d, e) {
                (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
            },
            Ha = function(a) { ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), ya = !1)), Ga(ea, pa.x, pa.y, s)) },
            Ia = function(a) { a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a) },
            Ja = function(a, b) { b[E] = u + a + "px, 0px" + v },
            Ka = function(a, b) {
                if (!i.loop && b) {
                    var c = m + (ta.x * ra - a) / ta.x,
                        d = Math.round(a - tb.x);
                    (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction)
                }
                tb.x = a, Ja(a, n)
            },
            La = function(a, b) { var c = ub[a] - sa[a]; return oa[a] + na[a] + c - c * (b / t) },
            Ma = function(a, b) { a.x = b.x, a.y = b.y, b.id && (a.id = b.id) },
            Na = function(a) { a.x = Math.round(a.x), a.y = Math.round(a.y) },
            Oa = null,
            Pa = function() { Oa && (e.unbind(document, "mousemove", Pa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Da("mouseUsed")), Oa = setTimeout(function() { Oa = null }, 100) },
            Qa = function() { e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), Da("bindEvents") },
            Ra = function() { e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents") },
            Sa = function(a, b) { var c = ic(f.currItem, qa, a); return b && (da = c), c },
            Ta = function(a) { return a || (a = f.currItem), a.initialZoomLevel },
            Ua = function(a) { return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1 },
            Va = function(a, b, c, d) { return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0)) },
            Wa = function() {
                if (E) { var b = N.perspective && !G; return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")") }
                E = "left", e.addClass(a, "pswp--ie"), Ja = function(a, b) { b.left = a + "px" }, Ia = function(a) {
                    var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                        c = a.container.style,
                        d = b * a.w,
                        e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
                }, Ha = function() {
                    if (ea) {
                        var a = ea,
                            b = f.currItem,
                            c = b.fitRatio > 1 ? 1 : b.fitRatio,
                            d = c * b.w,
                            e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px"
                    }
                }
            },
            Xa = function(a) {
                var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
            },
            Ya = function(a) { a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation()) },
            Za = function() { f.setScrollOffset(0, e.getScrollY()) },
            $a = {},
            _a = 0,
            ab = function(a) { $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]) },
            bb = function(a) { $a[a] && ab(a), $a[a] || (_a++, $a[a] = {}) },
            cb = function() { for (var a in $a) $a.hasOwnProperty(a) && ab(a) },
            db = function(a, b, c, d, e, f, g) {
                var h, i = Ea();
                bb(a);
                var j = function() {
                    if ($a[a]) {
                        if (h = Ea() - i, h >= d) return ab(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), $a[a].raf = H(j)
                    }
                };
                j()
            },
            eb = {
                shout: Da,
                listen: Ca,
                viewportSize: qa,
                options: i,
                isMainScrollAnimating: function() { return fa },
                getZoomLevel: function() { return s },
                getCurrentIndex: function() { return m },
                isDragging: function() { return V },
                isZooming: function() { return aa },
                setScrollOffset: function(a, b) { sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa) },
                applyZoomPan: function(a, b, c, d) { pa.x = b, pa.y = c, s = a, Ha(d) },
                init: function() {
                    if (!j && !k) {
                        var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{ el: f.container.children[0], wrap: 0, index: -1 }, { el: f.container.children[1], wrap: 0, index: -1 }, { el: f.container.children[2], wrap: 0, index: -1 }], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = { resize: f.updateSize, orientationchange: function() { clearTimeout(O), O = setTimeout(function() { qa.x !== f.scrollWrap.clientWidth && f.updateSize() }, 500) }, scroll: Za, keydown: Xa, click: Ya };
                        var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < wa.length; c++) f["init" + wa[c]]();
                        if (b) {
                            var g = f.ui = new b(f, e);
                            g.init()
                        }
                        Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), a.setAttribute("aria-hidden", "false"), i.modal && (va ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
                        var l = "pswp--open ";
                        for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ua = null, c = 0; c < h; c++) Ja((c + o) * ta.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", function() { f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Qa() }), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval(function() { _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize() }, 1e3)), e.addClass(a, "pswp--visible")
                    }
                },
                close: function() { j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy)) },
                destroy: function() { Da("destroy"), Xb && clearTimeout(Xb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), zb(), cb(), Ba = null },
                panTo: function(a, b, c) { c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), pa.x = a, pa.y = b, Ha() },
                handleEvent: function(a) { a = a || window.event, r[a.type] && r[a.type](a) },
                goTo: function(a) {
                    a = Aa(a);
                    var b = a - m;
                    ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem()
                },
                next: function() { f.goTo(m + 1) },
                prev: function() { f.goTo(m - 1) },
                updateCurrZoomItem: function(a) {
                    if (a && Da("beforeChange", 0), y[1].el.children.length) {
                        var b = y[1].el.children[0];
                        ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                    } else ea = null;
                    da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, pa.y = da.center.y, a && Da("afterChange")
                },
                invalidateCurrItems: function() { x = !0; for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0) },
                updateCurrItem: function(a) {
                    if (0 !== ua) {
                        var b, c = Math.abs(ua);
                        if (!(a && c < 2)) {
                            f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), c = h);
                            for (var d = 0; d < c; d++) ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                            if (ea && 1 === Math.abs(ua)) {
                                var e = _b(z);
                                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e))
                            }
                            ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange")
                        }
                    }
                },
                updateSize: function(b) {
                    if (!va && i.modal) {
                        var c = e.getScrollY();
                        if (M !== c && (a.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
                        xa.x = window.innerWidth, xa.y = window.innerHeight, a.style.height = xa.y + "px"
                    }
                    if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
                        for (var d, g, j, k = 0; k < h; k++) d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : d.index === -1 && j >= 0 && f.setContent(d, j), g && g.container && (ic(g, qa), mc(g), Ia(g));
                        x = !1
                    }
                    t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, pa.y = da.center.y, Ha(!0)), Da("resize")
                },
                zoomTo: function(a, b, c, d, f) {
                    b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
                    var g = Sa(a, !1),
                        h = {};
                    Va("x", g, h, a), Va("y", g, h, a);
                    var i = s,
                        j = { x: pa.x, y: pa.y };
                    Na(h);
                    var k = function(b) { 1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b) };
                    c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
                }
            },
            fb = 30,
            gb = 10,
            hb = {},
            ib = {},
            jb = {},
            kb = {},
            lb = {},
            mb = [],
            nb = {},
            ob = [],
            pb = {},
            qb = 0,
            rb = ma(),
            sb = 0,
            tb = ma(),
            ub = ma(),
            vb = ma(),
            wb = function(a, b) { return a.x === b.x && a.y === b.y },
            xb = function(a, b) { return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g },
            yb = function(a, b) { return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y) },
            zb = function() { Z && (I(Z), Z = null) },
            Ab = function() { V && (Z = H(Ab), Qb()) },
            Bb = function() { return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel) },
            Cb = function(a, b) { return !(!a || a === document) && (!(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b))) },
            Db = {},
            Eb = function(a, b) { return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), Db.prevent },
            Fb = function(a, b) { return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b },
            Gb = function(a, b, c) { c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y) },
            Hb = function(a, b, c) {
                if (a - Q > 50) {
                    var d = ob.length > 2 ? ob.shift() : {};
                    d.x = b, d.y = c, ob.push(d), Q = a
                }
            },
            Ib = function() { var a = pa.y - f.currItem.initialPosition.y; return 1 - Math.abs(a / (qa.y / 2)) },
            Jb = {},
            Kb = {},
            Lb = [],
            Mb = function(a) { for (; Lb.length > 0;) Lb.pop(); return F ? (la = 0, mb.forEach(function(a) { 0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++ })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, Jb.id = "", Lb[0] = Jb), Lb },
            Nb = function(a, b) {
                var c, d, e, g, h = 0,
                    j = pa[a] + b[a],
                    k = b[a] > 0,
                    l = tb.x + b.x,
                    m = tb.x - nb.x;
                return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, h = da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, h = j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, "x" !== a) ? void(fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), void 0 !== g)
            },
            Ob = function(a) {
                if (!("mousedown" === a.type && a.button > 0)) {
                    if ($b) return void a.preventDefault();
                    if (!U || "mousedown" !== a.type) {
                        if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
                            var b = e.arraySearch(mb, a.pointerId, "id");
                            b < 0 && (b = mb.length), mb[b] = { x: a.pageX, y: a.pageY, id: a.pointerId }
                        }
                        var c = Mb(a),
                            d = c.length;
                        _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), Ma(lb, kb), nb.x = ta.x * ra, ob = [{ x: kb.x, y: kb.y }], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ba = ca = yb(hb, ib))
                    }
                }
            },
            Pb = function(a) {
                if (a.preventDefault(), F) {
                    var b = e.arraySearch(mb, a.pointerId, "id");
                    if (b > -1) {
                        var c = mb[b];
                        c.x = a.pageX, c.y = a.pageY
                    }
                }
                if (V) {
                    var d = Mb(a);
                    if (ga || Y || aa) _ = d;
                    else if (tb.x !== ta.x * ra) ga = "h";
                    else {
                        var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
                        Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d)
                    }
                }
            },
            Qb = function() {
                if (_) {
                    var a = _.length;
                    if (0 !== a)
                        if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
                            if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
                            Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
                            var b = yb(hb, ib),
                                c = Vb(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
                            var d = 1,
                                e = Ta(),
                                g = Ua();
                            if (c < e)
                                if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                                    var h = e - c,
                                        j = 1 - h / (e / 1.2);
                                    Fa(j), Da("onPinchClose", j), ia = !0
                                } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                            else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                            d < 0 && (d = 0), ba = b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha()
                        } else {
                            if (!ga) return;
                            if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;
                            if ("v" === ga && i.closeOnVerticalDrag && !Bb()) { na.y += jb.y, pa.y += jb.y; var k = Ib(); return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha() }
                            Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
                            var l = Nb("x", jb);
                            l || (Nb("y", jb), Na(pa), Ha())
                        }
                }
            },
            Rb = function(a) {
                if (N.isOldAndroid) {
                    if (U && "mouseup" === a.type) return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function() { U = 0 }, 600))
                }
                Da("pointerUp"), Eb(a, !1) && a.preventDefault();
                var b;
                if (F) {
                    var c = e.arraySearch(mb, a.pointerId, "id");
                    if (c > -1)
                        if (b = mb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                        else {
                            var d = { 4: "mouse", 2: "touch", 3: "pen" };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                        }
                }
                var g, h = Mb(a),
                    j = h.length;
                if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
                1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = { x: a.pageX, y: a.pageY, type: "mouse" } : a.changedTouches && a.changedTouches[0] && (b = { x: a.changedTouches[0].pageX, y: a.changedTouches[0].pageY, type: "touch" })), Da("touchRelease", a, b));
                var k = -1;
                if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : sb !== -1 && (k = Ea() - sb)), sb = 1 === j ? Ea() : -1, g = k !== -1 && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T)
                    if (cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
                        var l = Ib();
                        if (l < i.verticalDragRange) f.close();
                        else {
                            var m = pa.y,
                                n = ja;
                            db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) { pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha() }), Da("onVerticalDrag", 1)
                        }
                    } else {
                        if (($ || fa) && 0 === j) {
                            var o = Ub(g, R);
                            if (o) return;
                            g = "zoomPointerUp"
                        }
                        if (!fa) return "swipe" !== g ? void Wb() : void(!$ && s > f.currItem.fitRatio && Tb(R))
                    }
            },
            Sb = function() { var a, b, c = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(d) { ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1 }, calculateOverBoundsAnimOffset: function(a, b) { c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) { pa[a] = b, Ha() })))) }, calculateAnimOffset: function(a) { c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pa[a] += c.distanceOffset[a]) }, panAnimLoop: function() { if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), pa.y = Math.round(pa.y), Ha(), void ab("zoomPan") } }; return c },
            Tb = function(a) { return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), a.lastNow = Ea(), void a.panAnimLoop()) },
            Ub = function(a, b) {
                var c;
                fa || (qb = m);
                var d;
                if ("swipe" === a) {
                    var g = kb.x - lb.x,
                        h = b.lastFlickDist.x < 10;
                    g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1)
                }
                var j;
                d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
                var k, l = ta.x * ra,
                    n = Math.abs(l - tb.x);
                return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function() { cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete") }), c && f.updateCurrItem(!0), c
            },
            Vb = function(a) { return 1 / ca * a * t },
            Wb = function() {
                var a = s,
                    b = Ta(),
                    c = Ua();
                s < b ? a = b : s > c && (a = c);
                var d, g = 1,
                    h = ja;
                return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function(a) { Fa((g - h) * a + h) }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
            };
        za("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var a = function(a, b, c, d, e) { A = a + b, B = a + c, C = a + d, D = e ? a + e : "" };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Xb, Yb, Zb, $b, _b, ac, bc, cc = function(b, c, d, g) {
                Xb && clearTimeout(Xb), $b = !0, Zb = !0;
                var h;
                b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                    k = function() { ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), $b = !1 };
                if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), a.style.opacity = d ? 0 : 1, Fa(1), void(j ? setTimeout(function() { k() }, j) : k());
                var n = function() {
                    var c = l,
                        g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                    b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), bb("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() { e.addClass(a, "pswp--animate_opacity") }, 30)), Xb = setTimeout(function() {
                        if (Da("initialZoom" + (d ? "Out" : "In")), d) {
                            var f = h.w / b.w,
                                i = { x: pa.x, y: pa.y },
                                l = s,
                                m = ja,
                                n = function(b) { 1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? a.style.opacity = 1 - b : Fa(m - b * m) };
                            c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20))
                        } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? a.style.opacity = 1 : Fa(1), Xb = setTimeout(k, j + 20)
                    }, d ? 25 : 90)
                };
                n()
            },
            dc = {},
            ec = [],
            fc = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() { return Yb.length } },
            gc = function() { return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
            hc = function(a, b, c) {
                var d = a.bounds;
                d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y
            },
            ic = function(a, b, c) {
                if (a.src && !a.loadError) {
                    var d = !c;
                    if (d && (a.vGap || (a.vGap = { top: 0, bottom: 0 }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                        var e = dc.x / a.w,
                            f = dc.y / a.h;
                        a.fitRatio = e < f ? e : f;
                        var g = i.scaleMode;
                        "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = gc())
                    }
                    if (!c) return;
                    return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
                }
                return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, a.bounds
            },
            jc = function(a, b, c, d, e, g) { b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), g && setTimeout(function() { b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null) }, 500)) },
            kc = function(a) {
                a.loading = !0, a.loaded = !1;
                var b = a.img = e.createEl("pswp__img", "img"),
                    c = function() { a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null };
                return b.onload = c, b.onerror = function() { a.loadError = !0, c() }, b.src = a.src, b
            },
            lc = function(a, b) { if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0 },
            mc = function(a, b, c) {
                if (a.src) {
                    b || (b = a.container.lastChild);
                    var d = c ? a.w : Math.round(a.w * a.fitRatio),
                        e = c ? a.h : Math.round(a.h * a.fitRatio);
                    a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
                }
            },
            nc = function() {
                if (ec.length) {
                    for (var a, b = 0; b < ec.length; b++) a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                    ec = []
                }
            };
        za("Controller", {
            publicMethods: {
                lazyLoadItem: function(a) {
                    a = Aa(a);
                    var b = _b(a);
                    b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b))
                },
                initController: function() {
                    e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, bc = i.loop, ac() < 3 && (i.loop = !1), Ca("beforeChange", function(a) {
                        var b, c = i.preload,
                            d = null === a || a >= 0,
                            e = Math.min(c[0], ac()),
                            g = Math.min(c[1], ac());
                        for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
                        for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b)
                    }), Ca("initialLayout", function() { f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m) }), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", function() {
                        for (var a, b = 0; b < Yb.length; b++) a = Yb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        ec = null
                    })
                },
                getItemAt: function(a) { return a >= 0 && (void 0 !== Yb[a] && Yb[a]) },
                allowProgressiveImg: function() { return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200 },
                setContent: function(a, b) {
                    i.loop && (b = Aa(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g) return void(a.el.innerHTML = "");
                    Da("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0));
                    else {
                        if (g.loadComplete = function(c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (fa || $b) ? ec.push({ item: c, baseDiv: h, img: c.img, index: b, holder: a, clearPlaceholder: !0 }) : jc(b, c, h, c.img, fa || $b, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({ item: g, baseDiv: h, img: g.img, index: b, holder: a }) : jc(b, g, h, g.img, !0, !0))
                    }
                    Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                },
                cleanSlide: function(a) { a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1 }
            }
        });
        var oc, pc = {},
            qc = function(a, b, c) {
                var d = document.createEvent("CustomEvent"),
                    e = { origEvent: a, target: a.target, releasePoint: b, pointerType: c || "touch" };
                d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
            };
        za("Tap", {
            publicMethods: {
                initTap: function() { Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", function() { pc = {}, oc = null }) },
                onTapStart: function(a) { a.length > 1 && (clearTimeout(oc), oc = null) },
                onTapRelease: function(a, b) {
                    if (b && !Y && !W && !_a) {
                        var c = b;
                        if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
                        if ("mouse" === b.type) return void qc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
                        Ma(pc, c), oc = setTimeout(function() { qc(a, b), oc = null }, 300)
                    }
                }
            }
        });
        var rc;
        za("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() { L || (G ? Ca("mouseUsed", function() { f.setupDesktopZoom() }) : f.setupDesktopZoom(!0)) },
                setupDesktopZoom: function(b) {
                    rc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ca("bindEvents", function() { e.bind(a, c, f.handleMouseWheel) }), Ca("unbindEvents", function() { rc && e.unbind(a, c, f.handleMouseWheel) }), f.mouseZoomedIn = !1;
                    var d, g = function() { f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), s < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h() },
                        h = function() { d && (e.removeClass(a, "pswp--dragging"), d = !1) };
                    Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", function() { f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging")) }), Ca("pointerUp", h), b || g()
                },
                handleMouseWheel: function(a) {
                    if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY);
                    else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta;
                    else {
                        if (!("detail" in a)) return;
                        rc.y = a.detail
                    }
                    Sa(s, !0);
                    var b = pa.x - rc.x,
                        c = pa.y - rc.y;
                    (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), f.panTo(b, c)
                },
                toggleDesktopZoom: function(b) {
                    b = b || { x: qa.x / 2 + sa.x, y: qa.y / 2 + sa.y };
                    var c = i.getDoubleTapZoom(!0, f.currItem),
                        d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc, Ec = { history: !0, galleryUID: 1 },
            Fc = function() { return Cc.hash.substring(1) },
            Gc = function() { sc && clearTimeout(sc), uc && clearTimeout(uc) },
            Hc = function() {
                var a = Fc(),
                    b = {};
                if (a.length < 5) return b;
                var c, d = a.split("&");
                for (c = 0; c < d.length; c++)
                    if (d[c]) {
                        var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1])
                    }
                if (i.galleryPIDs) {
                    var f = b.pid;
                    for (b.pid = 0, c = 0; c < Yb.length; c++)
                        if (Yb[c].pid === f) { b.pid = c; break }
                } else b.pid = parseInt(b.pid, 10) - 1;
                return b.pid < 0 && (b.pid = 0), b
            },
            Ic = function() {
                if (uc && clearTimeout(uc), _a || V) return void(uc = setTimeout(Ic, 500));
                vc ? clearTimeout(tc) : vc = !0;
                var a = m + 1,
                    b = _b(m);
                b.hasOwnProperty("pid") && (a = b.pid);
                var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
                zc || Cc.hash.indexOf(c) === -1 && (Bc = !0);
                var d = Cc.href.split("#")[0] + "#" + c;
                Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, zc = !0, tc = setTimeout(function() { vc = !1 }, 60)
            };
        za("History", {
            publicMethods: {
                initHistory: function() {
                    if (e.extend(i, Ec, !0), i.history) {
                        Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), Ca("afterChange", f.updateURL), Ca("unbindEvents", function() { e.unbind(window, "hashchange", f.onHashChange) });
                        var a = function() { xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), Gc() };
                        Ca("unbindEvents", function() { l && a() }), Ca("destroy", function() { xc || a() }), Ca("firstUpdate", function() { m = Hc().pid });
                        var b = yc.indexOf("pid=");
                        b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), setTimeout(function() { j && e.bind(window, "hashchange", f.onHashChange) }, 40)
                    }
                },
                onHashChange: function() { return Fc() === yc ? (Ac = !0, void f.close()) : void(vc || (wc = !0, f.goTo(Hc().pid), wc = !1)) },
                updateURL: function() { Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic()) }
            }
        }), e.extend(f, eb)
    };
    return a
});

/* --------------------------------
COUNTER
-------------------------------- */
! function(n) {
    "use strict";
    n.fn.counter = function(e) {
        var d = n.extend({ endTime: new Date }, e),
            i = n(this),
            o = i.find(".days"),
            s = i.find(".hours"),
            a = i.find(".minutes"),
            t = i.find(".seconds"),
            u = 0,
            r = 0,
            c = 0,
            m = 0,
            f = function(e, d) {
                for (var i = d + ""; i.length < 2;) i = "0" + i;
                if (Modernizr.cssanimations) {
                    var o = e.find(".value").addClass("fadeOutRight").addClass("animated"),
                        s = n("<div class='value'>" + i + "</div>");
                    e.prepend(s), s.addClass("fadeInRight").addClass("animated");
                    var a = setTimeout(function() { o.remove() }, 200);
                    o.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() { o.remove(), clearTimeout(a) })
                } else {
                    var o = e.find(".value").remove(),
                        s = n("<div class='value'>" + i + "</div>");
                    e.prepend(s)
                }
            };
        countdown(d.endTime, function(n) { m != n.seconds && (f(t, n.seconds), m = n.seconds), c != n.minutes && (f(a, n.minutes), c = n.minutes), r != n.hours && (f(s, n.hours), r = n.hours), u != n.days && (f(o, n.days), u = n.days) }, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
        return this
    }
}(jQuery);