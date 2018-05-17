/*
 Cache: jquery-lazy, thickbox, dt-main, dt-language, dt-main-op-jquery, dt-plugins, jquery-blockui, waypoints, vc_carousel_js, vc_transition_bootstrap_js, qfe_composer_front_js, jquery-migrate, jquery-core
 */
/* jquery-core: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-includes/js/jquery/jquery.js) */
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if(!e) return this;
            if("string" == typeof e) {
                if(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if(i[1]) {
                    if(n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for(i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if(o = a.getElementById(i[2]), o && o.parentNode) {
                    if(o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if(null != (o = arguments[l]))
                for(i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if(e === !0 ? !--x.readyWait : !x.isReady) {
                if(!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if(!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if(e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch(r) {
                return !1
            }
            if(x.support.ownLast)
                for(n in e) return v.call(e, n);
            for(n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for(t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if(!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if(!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch(o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if(n) {
                if(a) {
                    for(; o > i; i++)
                        if(r = t.apply(e[i], n), r === !1) break
                } else
                    for(i in e)
                        if(r = t.apply(e[i], n), r === !1) break
            } else if(a) {
                for(; o > i; i++)
                    if(r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for(i in e)
                    if(r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if(t) {
                if(m) return m.call(t, e, n);
                for(r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if(n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if("number" == typeof r)
                for(; r > o; o++) e[i++] = n[o];
            else
                while(n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for(n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if(a)
                for(; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for(i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if("object" === x.type(r)) {
                o = !0;
                for(l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if(i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                    return c.call(x(e), n)
                })), n))
                for(; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return(new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for(o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for(o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if(!n)
            if(n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if(a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
            else {
                a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
                var r = !1;
                try {
                    r = null == e.frameElement && a.documentElement
                } catch(i) {}
                r && r.doScroll && function o() {
                    if(!x.isReady) {
                        try {
                            r.doScroll("left")
                        } catch(e) {
                            return setTimeout(o, 50)
                        }
                        _(), x.ready()
                    }
                }()
            }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                        var t = 0,
                            n = this.length;
                        for(; n > t; t++)
                            if(this[t] === e) return t;
                        return -1
                    },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch(ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while(e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if(1 !== (l = t.nodeType) && 9 !== l) return [];
                if(h && !i) {
                    if(o = Z.exec(e))
                        if(s = o[1]) {
                            if(9 === l) {
                                if(a = t.getElementById(s), !a || !a.parentNode) return n;
                                if(a.id === s) return n.push(a), n
                            } else if(t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if(o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                        }
                    if(r.qsa && (!g || !g.test(e))) {
                        if(m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while(u--) c[u] = m + yt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if(x) try {
                            return M.apply(n, y.querySelectorAll(x)), n
                        } catch(T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function lt(e) {
                return e[b] = !0, e
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch(n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while(r--) o.attrHandle[n[r]] = t
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if(r) return r;
                if(n)
                    while(n = n.nextSibling)
                        if(n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function dt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return("input" === n || "button" === n) && t.type === e
                }
            }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while(a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ut(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ut(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ut(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ut(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if(typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if("*" === e) {
                        while(n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                        return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                    }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if(t)
                        while(t = t.parentNode)
                            if(t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if(e === t) return S = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if(e === t) return S = !0, 0;
                    if(!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if(o === a) return pt(e, t);
                    r = e;
                    while(r = r.parentNode) s.unshift(r);
                    r = t;
                    while(r = r.parentNode) l.unshift(r);
                    while(s[i] === l[i]) i++;
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                    var n = y.call(e, t);
                    if(n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch(i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return(e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if(S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while(t = e[o++]) t === e[o] && (i = n.push(o));
                    while(i--) e.splice(n[i], 1)
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if(i) {
                    if(1 === i || 9 === i || 11 === i) {
                        if("string" == typeof e.textContent) return e.textContent;
                        for(e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if(3 === i || 4 === i) return e.nodeValue
                } else
                    for(; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if(m) {
                                if(o) {
                                    while(g) {
                                        p = t;
                                        while(p = p[g])
                                            if(s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if(h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while(p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if(1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if(v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while(p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while(a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while(s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: lt(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: lt(function(e) {
                        return function(t) {
                            return(t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if(n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for(e = e.firstChild; e; e = e.nextSibling)
                            if(e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ht(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ht(function(e, t) {
                        var n = 0;
                        for(; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: ht(function(e, t) {
                        var n = 1;
                        for(; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for(; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for(; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for(n in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[n] = ft(n);
            for(n in {
                submit: !0,
                reset: !0
            }) o.pseudos[n] = dt(n);

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if(c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while(s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for(a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if(!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for(; n > t; t++) r += e[t].value;
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while(t = t[r])
                        if(1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if(s) {
                        while(t = t[r])
                            if((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while(t = t[r])
                            if(1 === t.nodeType || o)
                                if(c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if((l = u[1]) === !0 || l === i) return l === !0
                                } else if(u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while(i--)
                        if(!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for(; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if(n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while(c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if(o) {
                        if(i || e) {
                            if(i) {
                                u = [], c = y.length;
                                while(c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while(c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) {
                        return e === t
                    }, s, !0),
                    p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for(; i > l; l++)
                    if(n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                    else {
                        if(n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for(r = ++l; i > r; r++)
                                if(o.relative[e[r].type]) break;
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for(w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if(a && h) {
                                g = 0;
                                while(m = e[g++])
                                    if(m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if(v += b, r && b !== v) {
                            g = 0;
                            while(m = t[g++]) m(x, y, l, c);
                            if(s) {
                                if(v > 0)
                                    while(b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if(!o) {
                    t || (t = mt(e)), n = t.length;
                    while(n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for(; i > r; r++) at(e, t[r], n);
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if(!i && 1 === f.length) {
                    if(s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if(t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while(a--) {
                        if(u = s[a], o.relative[c = u.type]) break;
                        if((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if(s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ut(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ut(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ct("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ut(function(e) {
                return null == e.getAttribute("disabled")
            }) || ct(B, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for(r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if(l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if(l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if(r > 1)
                for(s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if(d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch(h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for(f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for(f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if(x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if(c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if(x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if(a[s]) {
                if(t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while(i--) delete r[t[i]];
                    if(n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if(e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if(e === t) {
                if(this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for(r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if(r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if(r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch(o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for(t in e)
            if(("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                    empty: x.Callbacks("once memory").add(function() {
                        x._removeData(e, t + "queue"), x._removeData(e, n)
                    })
                })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while(s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if(x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if(l)
                for(t = (e || "").match(T) || []; s > a; a++)
                    if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while(i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if(x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if(l)
                for(t = (e || "").match(T) || []; s > a; a++)
                    if(n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while(i = t[o++])
                            while(r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while(t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for(; r > n; n++)
                if(1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if(arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if(o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for(; s > l; l++)
                        if(n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if(t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while(a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if(e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if(o && 1 === e.nodeType)
                while(n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if(!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if(e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch(e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if(v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while(u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if(m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while(u--)
                    if(s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while(o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for(d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if(u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if(!o && !p.noBubble && !x.isWindow(i)) {
                    for(c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if(n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch(y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if(l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if(l && u.nodeType && (!e.button || "click" !== e.type))
                for(; u != this; u = u.parentNode || this)
                    if(1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for(o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if(e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while(t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if(this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for(a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if(null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if(!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if(e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if("object" == typeof e) {
                for(o in e) this.off(o, n, e[o]);
                return this
            }
            return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for(t = 0; i > t; t++)
                    if(x.contains(r[t], this)) return !0
            }));
            for(t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for(t = 0; r > t; t++)
                    if(x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for(; i > r; r++)
                for(n = this[r]; n && n !== t; n = n.parentNode)
                    if(11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while(o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for(; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if(x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if(t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if("string" == typeof t) {
            if(st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if(n.createElement)
            while(t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for(; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for(; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while(e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if(e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if(!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for(; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if(g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if(c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for(a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if(o)
                    for(s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for(; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if(1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if(s) {
                delete a.handle, a.events = {};
                for(n in s)
                    for(r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if(1 === t.nodeType) {
            if(n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for(r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for(; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if(!s)
            for(s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if(x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for(r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if(t)
                if(n)
                    for(s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for(; p > h; h++)
                if(o = e[h], o || 0 === o)
                    if("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if(wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                        while(i--) s = s.lastChild;
                        if(!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                            while(i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                        }
                        x.merge(d, s.childNodes), s.textContent = "";
                        while(s.firstChild) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while(o = d[h++])
                if((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while(o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for(; null != (n = e[s]); s++)
                if((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if(a.events)
                        for(r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if(x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if(this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while(e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if(t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while(i--)
            if(t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for(; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for(a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if(x.isArray(n)) {
                    for(o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if(t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if(n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if(a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch(c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for(; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if(0 >= i || null == i) {
            if(i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for(; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if(n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for(r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if(x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if(n || "object" !== x.type(t)) r(e, t);
        else
            for(i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch(Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if(x.isFunction(n))
                while(r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for(i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
                s.each(r, o || [e.responseText, t, e])
            }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if(2 === b) {
                            if(!c) {
                                c = {};
                                while(t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if(e)
                            if(2 > b)
                                for(t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if(h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for(i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if(p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for(i in {
                success: 1,
                error: 1,
                complete: 1
            }) C[i](p[i]);
            if(u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch(N) {
                    if(!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if(o)
            for(s in l)
                if(l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if(u[0] in r) a = u[0];
        else {
            for(s in r) {
                if(!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if(c[1])
            for(a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while(o)
            if(e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if("*" === o) o = l;
                else if("*" !== l && l !== o) {
                    if(a = u[l + " " + o] || u["* " + o], !a)
                        for(i in u)
                            if(s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if(a !== !0)
                        if(a && e["throws"]) t = a(t);
                        else try {
                            t = a(t)
                        } catch(p) {
                            return {
                                state: "parsererror",
                                error: a ? p : "No conversion from " + l + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if(e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
                var e;
                for(e in Pn) Pn[e](t, !0)
            };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if(!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if(n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for(s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for(s in i) l.setRequestHeader(s, i[s])
                    } catch(u) {}
                    /*l.send(n.hasContent && n.data || null), r = function(e, i) {
                     var s, u, c, p;
                     try {
                     if(r && (i || 4 === l.readyState))
                     if(r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                     else {
                     p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                     try {
                     c = l.statusText
                     } catch(f) {
                     c = ""
                     }
                     s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                     }
                     } catch(d) {
                     i || o(-1, d)
                     }
                     p && o(s, c, p, u)
                     }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()*/
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if(a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for(; a > o; o++)
            if(r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if(i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for(; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if(i) return this;
                    for(i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for(tr(c, u.opts.specialEasing); a > o; o++)
            if(r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for(n in e)
            if(r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for(n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for(; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for(r in t)
            if(i = t[r], Vn.exec(i)) {
                if(delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if(!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for(t in c) x.style(e, t, c[t])
            });
            for(r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if(n) a[n] && a[n].stop && i(a[n]);
                else
                    for(n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for(n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for(n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for(t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for(t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for(Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if(arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if(s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if(this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while(e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);

jQuery.noConflict();
jQuery.fn.changeTag = function(tag) {
    var replacement = jQuery('<' + tag + '>');
    var attributes = {};
    jQuery.each(this.get(0).attributes, function(index, attribute) {
        attributes[attribute.name] = attribute.value;
    });
    replacement.attr(attributes);
    replacement.data(this.data());
    var contents = this.children().clone(true);
    replacement.append(contents);
    this.replaceWith(replacement);
    return replacement;
};

/* jquery-migrate: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-includes/js/jquery/jquery-migrate.min.js) */
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if(Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch(s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                    size: 1
                }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                    return null
                },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                    return n
                },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if(e.merge(d, e.buildFragment(t, a).childNodes), i)
                for(c = function(e) {
                    return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if(!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for(s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);

var dtGlobals = {};
dtGlobals.isMobile = (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent));
dtGlobals.isAndroid = (/(Android)/.test(navigator.userAgent));
dtGlobals.isiOS = (/(iPhone|iPod|iPad)/.test(navigator.userAgent));
dtGlobals.isiPhone = (/(iPhone|iPod)/.test(navigator.userAgent));
dtGlobals.isiPad = (/(iPad)/.test(navigator.userAgent));
dtGlobals.isBuggy = (navigator.userAgent.match(/AppleWebKit/) && typeof window.ontouchstart === 'undefined' && !navigator.userAgent.match(/Chrome/));
dtGlobals.isWindowsPhone = navigator.userAgent.match(/IEMobile/i);
dtGlobals.customColor = 'red';
if(dtGlobals.isMobile) {
    document.documentElement.className += " mobile-true";
} else {
    document.documentElement.className += " mobile-false";
}
dtGlobals.logoURL = false;
dtGlobals.logoH = false;
dtGlobals.logoW = false;

jQuery(document).ready(function($) {
    if(dtGlobals.isWindowsPhone) {
        $("body").addClass("ie-mobile");
    }
    if(!$("html").hasClass("old-ie")) {
        dtGlobals.isPhone = false;
        dtGlobals.isTablet = false;
        dtGlobals.isDesktop = false;

        var size = top.window.getComputedStyle(top.document.body, ":after").getPropertyValue("content");

        if(size.indexOf("phone") != -1 && dtGlobals.isMobile) {
            dtGlobals.isPhone = true;
        } else if(size.indexOf("tablet") != -1 && dtGlobals.isMobile) {
            dtGlobals.isTablet = true;
        } else {
            dtGlobals.isDesktop = true;
        };

    }
});;

/* qfe_composer_front_js: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/js/qfy_editor_front.js) */
document.documentElement.className += ' js_active ';
document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';
(function() {
    var prefix = ['-webkit-', '-o-', '-moz-', '-ms-', ""];
    for(var i in prefix) {
        if(prefix[i] + 'transform' in document.documentElement.style) document.documentElement.className += " vc_transform ";
    }
})();

function swiper_event() {
    jQuery(".swiper-container:not(.loaded)").each(function() {
        var pagination = jQuery(this).attr("data-swiper-pagination");
        var spaceBetween = jQuery(this).attr("data-swiper-space") == "0" ? false : jQuery(this).attr("data-swiper-space");
        var loop = jQuery(this).attr("data-swiper-loop") == "1" ? true : false;
        var autoheight = jQuery(this).attr("data-swiper-autoheight") == "1" ? true : false;
        var autoplay = jQuery(this).attr("data-swiper-autoplay") > 0 ? {
            delay: jQuery(this).attr("data-swiper-autoplay") * 1
        } : false;
        var freemodel = jQuery(this).attr("data-swiper-freemodel") == "1" ? true : false;
        var centeredSlides = jQuery(this).attr("data-swiper-center") == "1" ? true : false;
        var width = jQuery(this).attr("data-swiper-width");
        if(width) {
            var slidesPerView = "auto";
        } else {
            var slidesPerView = "1";
        }
        var lazy = jQuery(this).attr("data-swiper-lazy") == "1" ? true : false;

        jQuery(this).addClass("loaded");
        var swiper = new Swiper(jQuery(this), {
            slidesPerView: slidesPerView,
            autoplay: autoplay,
            spaceBetween: spaceBetween * 1,
            freeMode: freemodel,
            autoHeight: autoheight,
            centeredSlides: centeredSlides,
            grabCursor: true,
            loop: loop,
            lazy: lazy,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: pagination,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
        });
    })

}
/*===不能删除  影响手机端==*/
function vc_js_init() {
    // BEGIN
    if(jQuery(".swiper-container:not(.loaded)").length > 0) {
        if(typeof jQuery.fn.Swiper == "undefined") {
            jQuery.getScript("/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.js").done(function() {
                jQuery('head').append('<link href="/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.css" rel="stylesheet" type="text/css" />');
                swiper_event();
            })
        } else {
            swiper_event();
        }
    }

    jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");

    jQuery(".srollupdown:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var all = jQuery(this).attr("data-scroll-all");
        var num = jQuery(this).attr("data-scroll-num");
        var speed = jQuery(this).attr("data-scroll-speed");
        var delay = jQuery(this).attr("data-scroll-delay");
        var slideBox = jQuery(this).find("ul:first");

        var allheight = slideBox.css("height").replace("px", "") * 1;

        var delay = delay || 1000,
            speed = speed || 20;
        var tid = null,
            pause = false;
        var s = function() {
            slideBox.attr("style", "overflow:hidden !important;height:" + allheight + "px;");
            slideBox.find("li").removeClass("displaynone");
            tid = setInterval(slide_scroll, speed);
        }
        var slide_scroll = function() {
            if(pause) return;
            slideBox.scrollTop(slideBox.scrollTop() + 2);
            var scrolltop = slideBox.scrollTop();
            if(num > 1) {
                var first_height = 0;
                var marginbottom = 0;
                slideBox.find("li").each(function(i) {
                    if(i < num) {
                        first_height = first_height * 1 + jQuery(this).css("height").replace("px", "") * 1;
                        marginbottom = marginbottom * 1 + jQuery(this).css("margin-bottom").replace("px", "") * 1;
                    }
                })
            } else {
                var first_height = slideBox.find("li:eq(0)").css("height").replace("px", "");
                var marginbottom = slideBox.find("li:eq(0)").css("margin-bottom").replace("px", "");
            }
            if(scrolltop >= first_height * 1 + marginbottom * 1) {
                clearInterval(tid);
                if(num > 1) {
                    slideBox.find("li").each(function(i) {
                        if(i < num) {
                            slideBox.append(slideBox.find("li")[0]);
                        }
                    })
                } else {
                    slideBox.append(slideBox.find("li")[0]);
                }
                slideBox.scrollTop(0);
                setTimeout(s, delay);
            }
        }
        slideBox[0].onmouseover = function() {
            pause = true;
        }
        slideBox[0].onmouseout = function() {
            pause = false;
        }
        setTimeout(s, delay);
    });

    jQuery(".opentip:not(.played)").each(function() {
        var $this = jQuery(this);
        var imageurl = jQuery(this).attr("op-image");
        var title = jQuery(this).attr("op-title");
        var data_pop = jQuery(this).attr("op-style");
        var titlealign = jQuery(this).attr("op-titlealign");
        var stylealign = jQuery(this).attr("op-stylealign");
        var tiptitle = "";
        var download = false;
        if(imageurl) {

            tiptitle += "<img style='max-width:100%;' src='" + imageurl + "'  />";
        }
        if(title) {
            tiptitle += "<div style='margin-top:5px;text-align:" + titlealign + "'>" + title + "</div>";
        }
        if(stylealign) {
            var data = {
                tipJoint: stylealign,
                fixed: true,
                style: data_pop
            };
        } else {
            var data = {
                style: data_pop
            };
        }
        if(imageurl) {
            jQuery("<img />").attr("src", imageurl).load(function() {
                setTimeout(function() {
                    new Opentip($this, tiptitle, data);
                }, 1500);
            })
            $this.addClass("played");

        } else {
            new Opentip($this, tiptitle, data);
            $this.addClass("played");
        }
    })

    jQuery('.qfy-jiathis:not(".loaded")').each(function() {

        var title = jQuery(this).find(".jiathis_style").attr("data-config-title");
        var url = jQuery(this).find(".jiathis_style").attr("data-config-url");
        var imageurl = jQuery(this).find(".jiathis_style").attr("data-config-pic");
        var str = "";
        if(title && url) {
            str = '<script type="text/javascript" >var jiathis_config={url:"' + url + '",summary:"",title:"' + title + '",pic:"' + imageurl + '"}</script>';
        }
        jQuery(this).append(str + '<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>').addClass("loaded");
    })
    jQuery('.video.preload:not(.played)').each(function() {
        jQuery(this).waypoint({
            handler: function(direction) {
                jQuery(this).addClass("played").attr("src", jQuery(this).attr("data-src"));
            },
            triggerOnce: true,
            offset: "95%",
        })
    })

    if(top == self) {
       
    }
    jQuery('.qfy-accordioncontent .a_content .panel-title').each(function() {
        var curr = jQuery(this);
        var pcontent = curr.closest(".a_content");
        curr.unbind();
        if(pcontent.hasClass("mo")) {
            curr.unbind().bind("mouseenter", function(e) {
                e.stopPropagation();
                var n = curr.next();
                var p = curr.closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc = p.attr("hc");
                var display = n.css("display");
                if(hc == "true" && !curr.hasClass("active")) {
                    p.find(".a_content>section,.a_content>div").slideUp(animation, function() {
                        var now = jQuery(this);

                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if(p.attr("data-normalicon-scale") != "1") {
                            now.prev().find("i").css("transform", "scale('" + p.attr("data-normalicon-scale") + "','" + p.attr("data-normalicon-scale") + "')");
                        }
                    });
                }
                if(display == "none") {
                    n.next().css("visibility", "hidden");
                    curr.addClass("active");
                    n.slideDown(animation, function() {
                        n.next().css("visibility", "visible");
                        if(jQuery("body").width() < 760 && !curr.hasClass("defaultclick")) {
                            jQuery("html, body").animate({
                                scrollTop: curr.offset().top - 30
                            });
                        }
                        curr.removeClass("defaultclick");
                        if(n.find(".qfe_map_wraper iframe").length > 0) {
                            n.find(".qfe_map_wraper iframe").attr("src", n.find(".qfe_map_wraper iframe").attr("src"));
                        }
                    });
                    curr.find("i").attr("class", activeicon).css("font-size", p.attr("data-activeicon-size") + "px").css("left", p.attr("data-activeicon-position") + "px").css("top", p.attr("data-activeicon-pt") + "px");
                    if(p.attr("data-activeicon-scale") != "1") {
                        curr.find("i").css("transform", "scale('" + p.attr("data-activeicon-scale") + "','" + p.attr("data-activeicon-scale") + "')");
                    }
                    n.find(".qfe_start_animation").each(function(i) {
                        var $this = this;
                        jQuery($this).removeClass("qfe_start_animation");
                        setTimeout(function() {
                            qfe_animate_fun($this);
                        }, 50);

                    })
                }
            })
        } else {
            curr.unbind().click(function(e) {
                e.stopPropagation();
                var n = jQuery(this).next();
                var p = jQuery(this).closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc = p.attr("hc");
                var display = n.css("display");
                if(hc == "true") {

                    p.find(".a_content>section,.a_content>div").slideUp(animation, function() {
                        var now = jQuery(this);
                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if(p.attr("data-normalicon-scale") != "1") {
                            now.prev().find("i").css("transform", "scale(" + p.attr("data-normalicon-scale") + "," + p.attr("data-normalicon-scale") + ")");
                        }
                    });
                }

                if(display == "none") {
                    n.next().css("visibility", "hidden");
                    curr.addClass("active");
                    curr.find("i").attr("class", activeicon).css("font-size", p.attr("data-activeicon-size") + "px").css("left", p.attr("data-activeicon-position") + "px").css("top", p.attr("data-activeicon-pt") + "px");

                    if(p.attr("data-activeicon-scale") != "1") {
                        curr.find("i").find("i").css("transform", "scale(" + p.attr("data-activeicon-scale") + "," + p.attr("data-activeicon-scale") + ")");
                    }
                    n.slideDown(animation, function() {
                        n.next().css("visibility", "visible");
                        if(jQuery("body").width() < 760 && !curr.hasClass("defaultclick")) {
                            jQuery("html, body").animate({
                                scrollTop: curr.offset().top - 30
                            });
                        }
                        curr.removeClass("defaultclick");
                        if(n.find(".qfe_map_wraper iframe").length > 0) {
                            n.find(".qfe_map_wraper iframe").attr("src", n.find(".qfe_map_wraper iframe").attr("src"));
                        }
                    });

                    n.find(".qfe_start_animation").each(function(i) {
                        var $this = this;
                        jQuery($this).removeClass("qfe_start_animation");
                        setTimeout(function() {
                            qfe_animate_fun($this);
                        }, 50);

                    })
                } else {

                    n.slideUp(animation, function() {
                        curr.removeClass("active");
                        curr.find("i").attr("class", normalicon).css("font-size", p.attr("data-normalicon-size") + "px").css("left", p.attr("data-normalicon-position") + "px").css("top", p.attr("data-normalicon-pt") + "px");
                        if(p.attr("data-normalicon-scale") != "1") {
                            curr.find("i").find("i").css("transform", "scale(" + p.attr("data-normalicon-scale") + "," + p.attr("data-normalicon-scale") + ")");
                        }
                    });
                }
            });
        }
    })

    jQuery('.qfy-accordioncontent:not(.loaded)').each(function() {
        jQuery(this).addClass("loaded");
        var accordion_default = jQuery(this).attr("default");

        if(accordion_default > 0) {
            var defaultobj = jQuery(this).find(".a_content .panel-title:eq(" + (accordion_default - 1) + ")");
            var display = defaultobj.next().css("display");
            if(top != self && jQuery("body").hasClass("compose-mode")) {
                // 编辑情况
                if(display == "block") {
                    defaultobj.next().hide();
                    display = defaultobj.next().css("display");
                }
            }
            if(display == "none") {
                defaultobj.addClass("defaultclick");
                if(defaultobj.closest(".a_content").hasClass("mo")) {
                    defaultobj.mouseenter();
                } else {
                    defaultobj.click();
                }
            }

        }

    })

    jQuery(".dl-qfymobile-menu:not(.loaded)").each(function() {
        var backCap = jQuery(this).find(".menu-back").html();
        jQuery(this).find(".children.dl-submenu").prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");
        jQuery(this).addClass("loaded").dlmenu();
    })
    if(typeof qfy_canvas_animale_run == "function") {
        qfy_canvas_animale_run();
    }

    if(top == self) {
        jQuery(".background-media.mediagallery:not(.loaded)").each(function() {
            var $this = jQuery(this);
            jQuery(this).addClass("loaded On");
            var imagebgs = jQuery(this).attr("data-imagebgs");

            var imagebgs_arr = imagebgs.split("|^|");
            var imagebgs_count = imagebgs_arr.length;
            var imagebgs_current = 0;
            var time = jQuery(this).attr("data-time") ? jQuery(this).attr("data-time") : 3;
            var thishtml = $this.prop("outerHTML");
            var tmp = "";
            for(var i = 0; i < imagebgs_count - 1; i++) {
                $this.before(thishtml);
                $this.prev().css({
                    'opacity': '0',
                    'background-image': 'url(' + imagebgs_arr[i] + ')'
                }).removeAttr("data-imagebgs").removeClass("On");
            }
            var p = jQuery(this).parent();
            setInterval(function() {
                if(p.attr("id")) {
                    imagebgs_current = p.find(".background-media.On").index('#' + p.attr("id") + '>.background-media');
                } else {
                    imagebgs_current = p.find(".background-media.On").index('.background-media');
                }
                p.find(".background-media.On").removeClass("On").css({
                    'opacity': '0'
                })
                if(imagebgs_current == imagebgs_count - 1) {
                    p.find(".background-media:eq(0)").addClass("On").css({
                        'opacity': '1'
                    });
                } else {
                    p.find(".background-media:eq(" + (imagebgs_current + 1) + ")").addClass("On").css({
                        'opacity': '1'
                    });
                }
            }, time * 1000);

        })

        if(jQuery(".qfy-comments .commentlist:hidden").length > 0) {
            jQuery(".qfy-comments").each(function() {

                var p = jQuery(this);
                if(p.find(".commentlist:visible").length > 0) return;
                var loadhtml = "<div class='commentlist_loading' style='text-align:center;height:30px;margin:15px auto;' ><img src='/qfy-content/plugins/qfbook/templates/default/images/loader.gif' /></div>";
                p.find(".commentlist").after(loadhtml);

                var form = p.find("form#commentform");
                var comment_post_ID = form.find("#comment_post_ID").val();
                var url = form.attr("action");

                jQuery.post(url, {
                    action: "search",
                    comment_post_ID: comment_post_ID,
                    short_atts: p.attr("data-atts")
                }, function(data) {
                    if(data.indexOf("success") > -1) {

                        var tmp = data.split('|<result>|');
                        var commentlist = $(tmp).find(".commentlist");
                        p.find(".commentlist").html(commentlist.html());
                    }
                    p.find(".commentlist").show();
                    p.find(".commentlist_loading").remove();
                })

            })
        }
    }

    var objs = jQuery(".qfy-icons_list .qfy-icon");
    objs.each(function() {
        var obj = jQuery(this);
        var name = obj.attr("data-desc");
        var image = obj.attr("data-image");
        var tj = obj.attr("data-tj") == "0" ? "top" : "bottom";
        var ta = obj.attr("data-ta");
        var width = obj.attr("data-width");
        var align = "left";
        if(ta == "1") align = "right";
        else if(ta == "2") align = "center";
        obj.attr("title", '');
        var text = "";
        if(name) {
            text = "<div style='text-align:" + align + ";'>" + base64_decode(name) + "</div>";
        }
        if(image) {
            if(width) {
                var title = "<div style='width:" + width + "px;text-align:center;'><img src='" + image + "' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            } else {
                var title = "<div style='text-align:center;  '><img src='" + image + "' width='160' style='max-width:100%;' /><div style='word-break: break-all;'>" + text + "</div></div>";
            }
            var img = new Image();
            img.onload = img.onerror = function() {
                var data = {
                    tipJoint: tj,
                    style: "dark"
                };
                new Opentip(obj, title, data);
            };
            img.src = image;
        } else if(text) {
            if(width) {
                var last = "<div style='width:" + width + "px;word-break: break-all;'>" + text + "</div>";
            } else {
                var last = "<div style='word-break: break-all;'>" + text + "</div>";
            }

            var data = {
                tipJoint: tj,
                style: "dark"
            };
            new Opentip(obj, last, data);
        }
    })
    jQuery(".qfyvideo").unbind().mouseenter(function() {
        if(!jQuery(this).parent().hasClass("qfy_popup")) {
            jQuery(this).get(0).play();
        }
    }).mouseleave(function() {
        if(!jQuery(this).parent().hasClass("qfy_popup")) {
            if(jQuery(this).get(0).currentTime > 0) {
                jQuery(this).get(0).load();
            }
        }
    })

    jQuery('[data-ride="vc-carousel"]').each(function() {
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
    });
    jQuery("a[href^='qfy_notice']").unbind().click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var id = jQuery(this).attr("href");
        if(jQuery("#" + id).length > 0) {
            notice_pre_event("#" + id + " .notice_warp", "preview");
        }
    })

    jQuery(".qfyanimate:not(.qfyanimated)").each(function() {
        var animaleinbegin = jQuery(this).attr("data-animaleinbegin");
        if(!animaleinbegin) animaleinbegin = "bottom-in-view";
        jQuery(this).waypoint({
            handler: function(direction) {
                var delay = jQuery(this).attr("data-delay");
                var duration = jQuery(this).attr("data-duration");
                if(delay === "") {
                    // 专栏使用
                    if(jQuery(this).hasClass("qfy-column-inner")) {
                        delay = jQuery(this).index() * 0.1 / 2;
                    }
                }
                var animalename = jQuery(this).attr("data-animalename");
                if(duration) {
                    jQuery(this).css("animation-duration", duration + "s");
                }
                jQuery(this).css("animation-delay", delay + "s").css("animation-name", animalename).css("visibility", "visible");
                jQuery(this).addClass("qfyanimated");
            },
            triggerOnce: true,
            offset: animaleinbegin,
        })
    })
}
/*===不能删除  影响手机端==*/
function vc_js_init2() {
    // console.trace();
    vc_slidersBehaviour();
    vc_waypoints();
    vc_carouselBehaviour();
    bit_newgallery();
    setTimeout(function() {
      
    }, 1000);

}


jQuery(document).ready(function($) {
    if(top == self) {
        vc_js_init();
        vc_js_init2();
    }
    jQuery(document).click(function(e) {
        if(jQuery("body.clicktoaddmodel").length > 0) {
            var target = jQuery(e.target);
            if(target.closest(".vc-element.vc-vc_row").length == 0) {
                alert("亲，您点在了不能插入区块的地方。请选择内容区域的一个区块。");
                return false;
            }
        }
    });

}); 



//跨浏览器resize
jQuery(window).on("debouncedresize", function() {
    jQuery(".ts-circliful-counter").each(function() {
        if("true" == jQuery(this).attr("data-responsive")) {
            var t = jQuery(this),
                e = parseInt(jQuery(this).parent().width()),
                a = parseInt(jQuery(this).attr("data-size"));
            e != a && (t.empty(), t.circliful())
        }
    })
});

//选择我们的理由模块图片显示
function bit_newgallery(obj) {

    if("undefined" != typeof obj) {
        obj = obj.find(".royalSlider_gallery");
        if(obj.length == 0) return false;
    } else {
        obj = jQuery(".royalSlider_gallery");
    }
    if(obj.length == 0) return;
    if(typeof jQuery.fn.royalSlider == "undefined") {
        jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
            _bit_newgallery(obj);
        })
    } else {
        _bit_newgallery(obj);
    }

}

function _bit_newgallery(obj) {
    obj.each(function() {
        var imageScaleMode = jQuery(this).attr("imageScaleMode") ? jQuery(this).attr("imageScaleMode") : "fit-if-smaller";
        var slidesOrientation = jQuery(this).attr("slidesOrientation") ? jQuery(this).attr("slidesOrientation") : "horizontal";
        var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide") == "true" ? true : false;
        var g_width = jQuery(this).attr("g_width") ? jQuery(this).attr("g_width") : "";
        var g_height = jQuery(this).attr("g_height") ? jQuery(this).attr("g_height") : "";
        var transitionSpeed = jQuery(this).attr("transitionSpeed");
        var loop = jQuery(this).attr("g_loop") == "true" ? true : false;
        var visiblenearby = jQuery(this).attr("visiblenearby") == "true" ? true : false;
        var autoPlay = jQuery(this).attr("auto_Play") == "true" ? true : false;
        var arrowsNav = jQuery(this).attr("arrowsNav") == "true" ? true : false;

        var controlNavigation = jQuery(this).attr("controlNavigation");
        if(controlNavigation == "thumbnails") controlNavigation = "thumbnails";
        else if(controlNavigation == "none") controlNavigation = "none";
        else controlNavigation = "bullets";
        var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation") ? jQuery(this).attr("thumbnails_orientation") : "horizontal";
        var disabledclick = jQuery(this).attr("disabledclick") == "true" ? false : true;
        jQuery(this).royalSlider({
            fullscreen: {
                enabled: true,
                nativeFS: true
            },
            controlNavigation: controlNavigation,
            slidesOrientation: slidesOrientation,
            autoScaleSlider: false,
            autoScaleSliderWidth: g_width,
            autoScaleSliderHeight: g_height,
            loop: loop,
            imageScaleMode: imageScaleMode,
            navigateByClick: disabledclick,
            numImagesToPreload: 2,
            arrowsNav: arrowsNav,
            arrowsNavAutoHide: arrowsNavAutoHide,
            arrowsNavHideOnTouch: true,
            keyboardNavEnabled: true,
            fadeinLoadedSlide: true,
            globalCaption: false,
            globalCaptionInside: false,
            addActiveClass: true,
            thumbs: {
                orientation: thumbnails_orientation,
                appendSpan: true,
                firstMargin: true,
                paddingBottom: 4
            },
            visibleNearby: {
                enabled: visiblenearby,
                centerArea: 0.7,
                center: true,
                breakpoint: 650,
                breakpointCenterArea: 0.64,
                navigateByCenterClick: true
            },
            autoPlay: {
                enabled: autoPlay,
                pauseOnHover: true
            }
        });
    })

}


//新闻资讯标题的显示
if(typeof window['vc_waypoints'] !== 'function') {
    function qfe_animate_fun($this) {

        var p = jQuery($this).closest(".qfy-element");
        var delay = p.attr("css_animation_delay");
        var anitime = p.attr("data-anitime");
        var anilength = p.attr("data-anilength");
        if(anitime && anitime > 0) {
            jQuery($this).css("animation-duration", anitime + "s");
            jQuery($this).css("-webkit-animation-duration", anitime + "s");
        }
        jQuery($this).removeClass("anlength1 anlength2");
        if(anilength && anilength != 0) {
            jQuery($this).addClass(anilength);
        }
        if(delay) {
            setTimeout(function() {
                jQuery($this).addClass('qfe_start_animation');
            }, delay * 1000);
        } else {
            if(jQuery($this).hasClass("delay1")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 1000);
            } else if(jQuery($this).hasClass("delay0.5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 500);
            } else if(jQuery($this).hasClass("delay1.5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 1500);
            } else if(jQuery($this).hasClass("delay2")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 2000);
            } else if(jQuery($this).hasClass("delay3")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 3000);
            } else if(jQuery($this).hasClass("delay4")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 4000);
            } else if(jQuery($this).hasClass("delay5")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 5000);
            } else if(jQuery($this).hasClass("delay6")) {
                setTimeout(function() {
                    jQuery($this).addClass('qfe_start_animation');
                }, 6000);
            } else {
                jQuery($this).addClass('qfe_start_animation');
            }
        }

    }

    function vc_waypoints() {
        if(typeof resetSectionHeight !== 'undefined') resetSectionHeight();
        if(typeof jQuery.fn.waypoint !== 'undefined') {
            jQuery('.qfe_animate_when_almost_visible:not(.qfe_start_animation)').waypoint(function() {
                qfe_animate_fun(this);

            }, {
                offset: '85%'
            });
        }
    }
}



function vc_isotope_init_load(obj) {

    if(obj.find('.post-thumb img,.item_img img').length == 0) {
        obj.isotope({
            filter: '*',
            itemSelector: '.isotope-item',
            layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'
        });
        return;
    }
    var all_load = true;
    obj.find('.post-thumb img,.post-thumb video,.item_img img').each(function() {
        if(!jQuery(this).prop('complete')) {
            all_load = false;
        }
    });

    if(!all_load) {
        window.setTimeout(function() {
            vc_isotope_init_load(obj);
        }, 500);
        return;
    }
    obj.isotope({
        filter: '*',
        itemSelector: '.isotope-item',
        layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'
    });
}
if(typeof window['vc_carouselBehaviour'] !== 'function') {
    function vc_carouselBehaviour() {
        jQuery(".qfe_carousel").each(function() {
            var $this = jQuery(this);
            if($this.data('carousel_enabled') !== true && $this.is(':visible')) {
                $this.data('carousel_enabled', true);
                var carousel_width = jQuery(this).width(),
                    visible_count = getColumnsCount(jQuery(this)),
                    carousel_speed = 500;
                if(jQuery(this).hasClass('columns_count_1')) {
                    carousel_speed = 900;
                }
                var carousele_li = jQuery(this).find('.qfe_thumbnails-fluid li');
                carousele_li.css({
                    "margin-right": carousele_li.css("margin-left"),
                    "margin-left": 0
                });

                jQuery(this).find('.qfe_wrapper:eq(0)').jCarouselLite({
                        btnNext: jQuery(this).find('.next'),
                        btnPrev: jQuery(this).find('.prev'),
                        visible: visible_count,
                        speed: carousel_speed
                    })
                    .width('100%'); // carousel_width

                var fluid_ul = jQuery(this).find('ul.qfe_thumbnails-fluid');
                fluid_ul.width(fluid_ul.width() + 300);

                jQuery(window).resize(function() {
                    var before_resize = screen_size;
                    screen_size = getSizeName();
                    if(before_resize != screen_size) {
                        window.setTimeout('location.reload()', 20);
                    }
                });
            }

        });
    }
}

if(typeof window['vc_slidersBehaviour'] !== 'function') {
    function vc_slidersBehaviour() {
        // var sliders_count = 0;
        jQuery('.qfe_gallery_slides').each(function(index) {
            var this_element = jQuery(this);
            var ss_count = 0;
            if(this_element.hasClass('qfe_slider_nivo')) {
                var sliderSpeed = 800,
                    sliderTimeout = this_element.attr('data-interval') * 1000;

                if(sliderTimeout == 0) sliderTimeout = 9999999999;
                this_element.find('.nivoSlider').nivoSlider({
                    effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify
                    slices: 15, // For slice animations
                    boxCols: 8, // For box animations
                    boxRows: 4, // For box animations
                    animSpeed: sliderSpeed, // Slide transition speed
                    pauseTime: sliderTimeout, // How long each slide will show
                    startSlide: 0, // Set starting Slide (0 index)
                    directionNav: true, // Next & Prev navigation
                    directionNavHide: true, // Only show on hover
                    controlNav: true, // 1,2,3... navigation
                    keyboardNav: false, // Use left & right arrows
                    pauseOnHover: true, // Stop animation while hovering
                    manualAdvance: false, // Force manual transitions
                    prevText: 'Prev', // Prev directionNav text
                    nextText: 'Next' // Next directionNav text
                });
            } else if(this_element.hasClass('qfe_image_grid')) {
                var isotope = this_element.find('.qfe_image_grid_ul');
                isotope.isotope({
                    // options
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows'
                });
                jQuery(window).load(function() {
                    isotope.isotope("reLayout");
                });
            }
        });
    }
}

if(typeof window['vc_prettyPhoto'] !== 'function') {
    function vc_prettyPhoto() {
        try {
            jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: 'normal',
                padding: 15,
                opacity: 0.7,
                showTitle: true,
                allowresize: true,
                counter_separator_label: '/',
                hideflash: false,
                deeplinking: false,
                modal: false,
                callback: function() {
                    var url = location.href;
                    var hashtag = (url.indexOf('#!prettyPhoto')) ? true : false;
                    if(hashtag) location.hash = "!";
                } ,
                social_tools: ''
            });
        } catch(err) {}
    }
}

function getColumnsCount(el) {
    var find = false,
        i = 1;

    while(find == false) {
        if(el.hasClass('columns_count_' + i)) {
            find = true;
            return i;
        }
        i++;
    }
}

var screen_size = getSizeName();

function getSizeName() {
    var screen_size = '',
        screen_w = jQuery(window).width();

    if(screen_w > 1170) {
        screen_size = "desktop_wide";
    } else if(screen_w > 960 && screen_w < 1169) {
        screen_size = "desktop";
    } else if(screen_w > 768 && screen_w < 959) {
        screen_size = "tablet";
    } else if(screen_w > 300 && screen_w < 767) {
        screen_size = "mobile";
    } else if(screen_w < 300) {
        screen_size = "mobile_portrait";
    }
    return screen_size;
}



jQuery(window).resize(function() {
    bitResizeImageTextInit();
});
jQuery(window).ready(function() {
    setTimeout(function() {
        bitResizeImageTextInit();
    }, 300);
});

function bitResizeImageTextInit() {

    jQuery(".bitImageControlDiv .bit-tp-caption.wf-mobile-hidden").each(function() {

        var dataorgipara = jQuery(this).attr("dataorgipara");
        if(dataorgipara) {
            var $this = this;
            var p = jQuery(this).parent().parent();
            var img = p.find(".bitImageParentDiv img");
            if(img.length > 0) {
                var imgW = img.width();
                var imgH = img.height();
            } else {
                var imgW = p.find(".bitImageParentDiv .banner-img").width();
                var imgH = p.find(".bitImageParentDiv .banner-img").height();
            }
            var download = new Image();
            download.src = img.attr("src");
            if(imgW > 760) {
                initTextposition(dataorgipara, imgW, imgH, this);
            } else {
            }
        }
    })
}

function initTextposition(dataorgipara, imgW, imgH, obj) {
    dataorgipara = dataorgipara.split("\|");
    var textOrgLeft = dataorgipara[0];
    var textOrgTop = dataorgipara[1];
    var width = dataorgipara[2];
    var s = dataorgipara[3];
    var textOrgRight = dataorgipara[4];
    var textOrgBottom = dataorgipara[5];
    if(imgW != width && imgW > 0) {

        var n = (width / imgW).toFixed(4);

        // if(s/n<10){n=s/10;}
        jQuery(obj).css("font-size", s / n).css("line-height", "auto").css("min-height", "0").css("min-width", "0");
        jQuery(obj).find("slideText").css("line-height", "auto");
        var textW = jQuery(obj).width();
        var textH = jQuery(obj).height();
        var paddingLeft = jQuery(obj).css("padding-left");
        if(paddingLeft && paddingLeft.indexOf("px")) {
            paddingLeft = paddingLeft.replace("px", "")
        };
        var paddingTop = jQuery(obj).css("padding-top");
        if(paddingTop && paddingTop.indexOf("px")) {
            paddingTop = paddingTop.replace("px", "")
        };
        var s = jQuery(obj).css("left");
        if(textOrgLeft != 0) {
            if(s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("left", textOrgLeft * imgW - textW / 2 - paddingLeft);
            }
        }
        if(textOrgRight == 1) {
            jQuery(obj).css("right", "0").css("left", "auto");
        }
        var s = jQuery(obj).css("top");

        if(textOrgTop != 0) {
            if(s.indexOf("px") > -1) {
                s = s.replace("px", "");
                jQuery(obj).css("top", textOrgTop * imgH - textH / 2 - paddingTop);
            }
        }
        if(textOrgBottom == 1) {
            jQuery(obj).css("bottom", "0").css("top", "auto");
        }

    } else {

        var css = jQuery(obj).attr("style");
        if(css) {
            css = css.replace(/font-size[^p]*px;/, "");
            css = css.replace(/right: 0px/, "");
            css = css.replace(/bottom: 0px/, "");
            css = css.replace(/line-height[^;]*;/, "");
            jQuery(obj).attr("style", css);
            var left = jQuery(obj).attr("dataleft");
            jQuery(obj).css("left", left + "px");
            var top = jQuery(obj).attr("datatop");
            jQuery(obj).css("top", top + "px");
        }
    }
    jQuery(obj).addClass("on").show();

}
if(top != self) {
    jQuery("html").bind('paste', function(e) {
        if(!e.clipboardData) {
            var clipboardData = e.originalEvent.clipboardData;
        } else {
            var clipboardData = e.clipboardData;
        }

        if(clipboardData) {
            var text = clipboardData.getData('text/plain');
            if(text && parent) {
                var tmp = parent.base64_decode(text);
                if(tmp.indexOf("|^^|") > -1) {
                    var tmparr = tmp.split('|^^|');
                    if(tmparr.length == 2) {
                        parent.jQuery("#vc-add-element-dialog .bit-insert-html").click();
                        setTimeout(function() {
                            top.jQuery(".boxy-wrapper:visible #copyText").val(text);
                            top.jQuery(".boxy-wrapper:visible .copytitle").html("点击确认，将复制该组件到当前页面");
                        }, 300);
                    }
                }
            }
        }
    });
};

/* vc_transition_bootstrap_js: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/transition.js) */
+

    function($) {
        "use strict";

        // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
        // ============================================================

        function transitionEnd() {
            var el = document.createElement('bootstrap')

            var transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd otransitionend',
                'transition': 'transitionend'
            }

            for(var name in transEndEventNames) {
                if(el.style[name] !== undefined) {
                    return {
                        end: transEndEventNames[name]
                    }
                }
            }
        }

        // http://blog.alexmaccaw.com/css-transitions
        $.fn.emulateTransitionEnd = function(duration) {
            var called = false,
                $el = this
            $(this).one($.support.transition.end, function() {
                called = true
            })
            var callback = function() {
                if(!called) $($el).trigger($.support.transition.end)
            }
            setTimeout(callback, duration)
            return this
        }

        $(function() {
            $.support.transition = transitionEnd()
        })

    }(window.jQuery);;

/*轮播插件*/
(function($) {
    "use strict";

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function(element, options) {
        if($(window).width() < 768 && $(element).hasClass("vc-carousel vc-slide")) {
            options.interval = 0;

        }
        if(!options.viewnum) options.viewnum = 0;
        this.$element = $(element)
        this.$indicators = this.$element.find('.vc-carousel-indicators')
        this.options = options
        this.paused =
            this.sliding =
                this.interval =
                    this.$active =
                        this.$items = null
        this.options.pause == 'hover' && this.$element
            .on('mouseenter', $.proxy(this.pause, this))
            .on('mouseleave', $.proxy(this.cycle, this))
        this._build() // new
    }

    Carousel.DEFAULTS = {
        mode: 'horizontal',
        partial: false,
        interval: 5000,
        pause: 'hover',
        wrap: false,
        autoHeight: true,
        perView: 1,
        hideOnEnd: false
    }
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)

        this.interval && clearInterval(this.interval)

        this.options && this.options.interval &&
        !this.paused &&
        (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        this.touch_start_position = 0;
        return this
    }
    Carousel.prototype.getActiveIndex = function() {
        this.$active = this.$element.find('.vc-item.vc-active')
        if(!this.$active.length) this.$active = this.$element.find('.vc-item:first').addClass('vc-active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
    }
    Carousel.prototype.showHideControl = function(index) {
        if(typeof index === 'undefined') var index = this.getActiveIndex()
    }
    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getActiveIndex()

        if(pos > (this.$items.length - 1) || pos < 0) return

        if(this.sliding) return this.$element.one('slid', function() {
            that.to(pos)
        })
        if(activeIndex == pos) return this.pause().cycle()

        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)

        if(this.$element && this.$element.find('.vc-next, .vc-prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)

        return this
    }

    Carousel.prototype.next = function() {
        if(this.sliding) return
        return this.slide('next')
    }

    Carousel.prototype.prev = function() {
        if(this.sliding) return
        return this.slide('prev')
    }

    Carousel.prototype.slide = function(type, next) {

        var $active = this.$element.find('.vc-item.vc-active')
        var $next = next || $active[type]();

        if(type == "prev" && $next.index() == -1 && this.options.viewnum > 0) {
            $next = this.$element.find('.vc-item:eq("' + (this.items_count - this.options.viewnum * 1) + '")');
        }
        var isCycling = this.interval
        var direction = type == 'next' ? 'vc-left' : 'vc-right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        if(!$next.length) {
            if(!this.options.wrap) {
                this.returnSwipedSlide()
                return
            }
            $next = this.$element.find('.vc-item')[fallback]()
        }

        this.sliding = true
        //mobile don't move
        if($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
            return;
        }

        isCycling && this.pause()

        var e = $.Event('slide.vc.carousel', {
            relatedTarget: $next[0],
            direction: direction
        })

        if($next.hasClass('vc-active')) return

        if(this.$indicators.length) {
            this.$indicators.find('.vc-active').removeClass('vc-active')
            this.$indicators.find('.vc-partial').removeClass('vc-partial')
            this.$element.one('slid', function() {
                var index = that.getActiveIndex(),
                    $nextIndicator = $(that.$indicators.children().slice(index, that.getActiveIndex() + that.options.perView))
                $nextIndicator && $nextIndicator.addClass('vc-active')
                that.options.partial && $nextIndicator && (index + 1 < that.items_count ? $nextIndicator.last().next().addClass('vc-partial') : $nextIndicator.first().prev().addClass('vc-partial'))
                if(that.options.hideOnEnd) that.showHideControl(index)
            })
        }
        this.current_index = $next.index()
        if(this.current_index > this.items_count - this.options.viewnum * 1) {
            this.current_index = 0;

        } else if(this.current_index < 0) {
            this.current_index = this.items_count - 1
        }
        if(this.options.autoHeight) {
            this.current_pos_value = -1 * this._step * this.current_index
        } else {
            this.current_pos_value = -1 * $next.position()[this.animation_position]
        }
        if(this.options.partial && this.current_index >= this.items_count - 1) {
            this.current_pos_value += this._step * (1 - this.partial_part)
        }
        if($.support.transition && this.$element.hasClass('vc-slide')) {
            this.$element.trigger(e)
            if(e.isDefaultPrevented()) return

            this.$slideline_inner
                .addClass('vc-transition')
                .css(this.animation_position, this.current_pos_value + that.pos_units)
            if(!this.options.autoHeight) this.recalculateSlidelineHeight($next.height(), true)
            this.$slideline_inner.one($.support.transition.end, function() {
                $next.addClass('vc-active')
                $active.removeClass('vc-active')
                that.$slideline_inner.removeClass([type, 'vc-transition'].join(' '))
                that.sliding = false
                that.removeSwipeAnimationSpeed()
                setTimeout(function() {
                    that.$element.trigger('slid')
                }, 0)
            }).emulateTransitionEnd(this.transition_speed)
        } else {
            this.$element.trigger(e)
            if(e.isDefaultPrevented()) return
            $active.removeClass('vc-active')
            $next.addClass('vc-active')
            this.sliding = false
            this.$slideline_inner.css(this.animation_position, this.current_pos_value + that.pos_units)
        }
        isCycling && this.cycle()
        if(this.current_index == 0 && this.options.viewnum > 0) {
            $next.removeClass('vc-active');
            if(type == "next") {
                this.$element.find('.vc-item:first').addClass("vc-active");
            }
        }
        return this
    }
    Carousel.prototype.setSwipeAnimationSpeed = function() {
        this.$slideline_inner.addClass('vc-swipe-transition')
    }
    Carousel.prototype.removeSwipeAnimationSpeed = function() {
        this.$slideline_inner.removeClass('vc-swipe-transition')

    }
    Carousel.prototype.velocity = function(time, x) {
        return {
            x: Math.abs(x / time) || 0
        }
    }
    Carousel.prototype.recalculateSlidelineHeight = function(height, animate) {
        if(animate === true) {
            this.$slideline.animate({
                height: height
            })
        } else {
            this.$slideline.height(height)
        }
    }
    Carousel.prototype.resizeAction = function() {
        var max_height = 0,
            new_slideline_height = 0
        if(this.options.mode === 'horizontal') {
            this.el_effect_size = this.$element.width() * (this.options.partial ? this.partial_part : 1)
            this.$slideline.width(this.items_count * this.el_effect_size)

        }

        if(this.options.autoHeight) {
            this.$items.height('auto')
            this.$items.each(function() {
                var item_height = $(this).height()
                if(item_height > max_height) max_height = item_height
            })
            this.$items.height(max_height)
        } else {
            this.recalculateSlidelineHeight(this.$active.height())
        }
        if(this.options.mode === 'vertical') {
            this._step = this.$active.height()
            new_slideline_height = this.$active.height() * this.options.perView * (this.options.partial ? (1 + 1 - this.partial_part) : 1)
            this.recalculateSlidelineHeight(new_slideline_height, false)
            this.$slideline_inner.css({
                top: -1 * this.$active.position().top
            })
            this.el_effect_size = this._step
        }
    }
    Carousel.prototype.returnSwipedSlide = function() {
        var params = {}
        params[this.animation_position] = this.current_pos_value + this.pos_units
        this.$slideline_inner.animate(params)
    }
    Carousel.prototype._build = function() {
        //mobile don't build
        if($(window).width() < 768 && this.$element.hasClass("vc-carousel vc-slide")) {
            return;
        }
        var el = this.$element.get(0),
            _touch_start_position = false,
            _touch_start_time = 0,
            _pos_before_touch = 0,
            _diff = 0,
            _moved = false,
            that = this,
            mode = this.options.mode
        this.getActiveIndex()

        this.el_width = 0
        this.items_count = this.$items.length

        this.$slideline = this.$element.find('.vc-carousel-slideline')
        this.slideline = this.$slideline.get(0)
        this.$slideline_inner = this.$slideline.find('> div')
        this.slideline_inner = this.$slideline_inner.get(0)

        this.partial_part = 0.8
        this._slide_width = 0
        this.swipe_velocity = 0.7
        this.current_pos_value = 0
        this.current_index = 0 // TODO: default start position by options
        this.el_effect_size = 0
        this.transition_speed = 600

        this.$left_control = this.$element.find('.vc-left.vc-carousel-control')
        this.$right_control = this.$element.find('.vc-right.vc-carousel-control')

        // Enable autoHeight if partial
        if(this.options.partial) this.options.autoHeight = true
        // Add Css classes for perView > 1
        if(this.options.perView > 1) this.$element.addClass('vc-per-view-more vc-per-view-' + this.options.perView)

        if(mode === 'horizontal') {
            this.pos_units = '%'
            this._step = 100.00 / this.items_count / this.options.perView
            this.animation_position = 'left'
            this.$items.width(this._step + this.pos_units)
            this.touch_direction = 'pageX'
        } else {
            this.pos_units = 'px'
            this.animation_position = 'top'
            this.touch_direction = 'pageY'
        }
        // Hide first control if this.current_index === 0
        if(this.options.hideOnEnd) this.showHideControl()
        // Add partial css class if partial
        if(this.options.partial) this.$element.addClass('vc_partial')
        // Set indicator
        if(this.$indicators.length) {
            var $active_indecators = that.$indicators.children()
                .slice(this.current_index, this.current_index + this.options.perView)
                .addClass('vc-active')
            this.options.partial && $active_indecators.last().next().addClass('vc_partial')
        }
        $(window).resize(this.resizeAction.bind(this));
        this.resizeAction()
        if(el.addEventListener) {

            el.addEventListener("touchstart", function(e) {
                _touch_start_position = parseFloat(e[that.touch_direction])
                _touch_start_time = e.timeStamp
                _pos_before_touch = that.$slideline_inner.position()[that.animation_position]
            }.bind(this), false)
            el.addEventListener('touchmove', function(e) {
                _diff = parseFloat(e[that.touch_direction]) - _touch_start_position
                _moved = Math.abs(_diff) > 0
                if(!_moved) return true
                e.preventDefault()
                that.slideline_inner.style[that.animation_position] = (_pos_before_touch + _diff) + 'px'
            }, false)
            el.addEventListener('touchend', function(e) {
                var time, part, velocity
                if(_moved) {
                    time = (e.timeStamp - _touch_start_time) / 1000
                    part = _diff / that.el_effect_size
                    velocity = that.velocity(time, part)
                    if((velocity.x > that.swipe_velocity && part < 0) || part <= -0.7) {
                        that.setSwipeAnimationSpeed()
                        that.next()
                    } else if(velocity.x > that.swipe_velocity || part >= 0.7) {
                        that.setSwipeAnimationSpeed()
                        that.prev()
                    } else {
                        that.returnSwipedSlide()
                    }
                    _moved = false
                }
            }, false)
        }
        this.$element.addClass('vc-build')

        return this
    }

    var old = $.fn.carousel

    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('vc.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide

            if(!data) $this.data('vc.carousel', (data = new Carousel(this, options)))
            if(typeof option == 'number') data.to(option)
            else if(action) data[action]()
            else if(options.interval) data.pause().cycle()
        })
    }

    $.fn.carousel.Constructor = Carousel

    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }


    $(document).off('click.vc.carousel.data-api').on('click.vc.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
        var $this = $(this),
            href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if(slideIndex) options.interval = false
        $target.carousel(options)

        if(slideIndex = $this.attr('data-slide-to')) {
            $target.data('vc.carousel').to(slideIndex)
        }

        e.preventDefault()
    });

    $(window).on('load', function() {
        $('[data-ride="vc-carousel"]').each(function() {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })

})(window.jQuery);;

/*滚动监听*/
(function() {
    var t = [].indexOf || function(t) {
                for(var e = 0, n = this.length; e < n; e++) {
                    if(e in this && this[e] === t) return e
                }
                return -1
            },
        e = [].slice;
    (function(t, e) {
        if(typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if(!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if(!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if(c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if(r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if(r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if(!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if(e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if(n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if(typeof i === "string") {
                            i = parseFloat(i);
                            if(r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if(r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if(l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if(l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if(l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if(n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if(r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if(!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if(!this.enabled) {
                    return
                }
                if(this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if(this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if(!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if(e == null) {
                    e = {}
                }
                if((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if(!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if(!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if(e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if(e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if(t == null) {
                    t = "vertical"
                }
                if(e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if(d[r]) {
                return d[r].apply(this, t)
            } else if(n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if(n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if(!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return(t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if(t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if(!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if(t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if(t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if(t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if(t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if(!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if(r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if(h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);;

/*遮罩层 */
(function() {
    "use strict";

    function e(e) {
        function a(i, a) {
            var l, h, m = i == window,
                g = a && a.message !== undefined ? a.message : undefined;
            a = e.extend({}, e.blockUI.defaults, a || {});
            if(a.ignoreIfBlocked && e(i).data("blockUI.isBlocked")) return;
            a.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, a.overlayCSS || {});
            l = e.extend({}, e.blockUI.defaults.css, a.css || {});
            a.onOverlayClick && (a.overlayCSS.cursor = "pointer");
            h = e.extend({}, e.blockUI.defaults.themedCSS, a.themedCSS || {});
            g = g === undefined ? a.message : g;
            m && o && f(window, {
                fadeOut: 0
            });
            if(g && typeof g != "string" && (g.parentNode || g.jquery)) {
                var y = g.jquery ? g[0] : g,
                    b = {};
                e(i).data("blockUI.history", b);
                b.el = y;
                b.parent = y.parentNode;
                b.display = y.style.display;
                b.position = y.style.position;
                b.parent && b.parent.removeChild(y)
            }
            e(i).data("blockUI.onUnblock", a.onUnblock);
            var w = a.baseZ,
                E, S, x, T;
            n || a.forceIframe ? E = e('<iframe class="blockUI" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + a.iframeSrc + '"></iframe>') : E = e('<div class="blockUI" style="display:none"></div>');
            a.theme ? S = e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + w++ + ';display:none"></div>') : S = e('<div class="blockUI blockOverlay" style="z-index:' + w++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
            if(a.theme && m) {
                T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:fixed">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>"
            } else if(a.theme) {
                T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (w + 10) + ';display:none;position:absolute">';
                a.title && (T += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (a.title || "&nbsp;") + "</div>");
                T += '<div class="ui-widget-content ui-dialog-content"></div>';
                T += "</div>"
            } else m ? T = '<div class="blockUI ' + a.blockMsgClass + ' blockPage" style="z-index:' + (w + 10) + ';display:none;position:fixed"></div>' : T = '<div class="blockUI ' + a.blockMsgClass + ' blockElement" style="z-index:' + (w + 10) + ';display:none;position:absolute"></div>';
            x = e(T);
            if(g)
                if(a.theme) {
                    x.css(h);
                    x.addClass("ui-widget-content")
                } else x.css(l);
            a.theme || S.css(a.overlayCSS);
            S.css("position", m ? "fixed" : "absolute");
            (n || a.forceIframe) && E.css("opacity", 0);
            var N = [E, S, x],
                C = m ? e("body") : e(i);
            e.each(N, function() {
                this.appendTo(C)
            });
            a.theme && a.draggable && e.fn.draggable && x.draggable({
                handle: ".ui-dialog-titlebar",
                cancel: "li"
            });
            var k = s && (!e.support.boxModel || e("object,embed", m ? null : i).length > 0);
            if(r || k) {
                m && a.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%");
                if((r || !e.support.boxModel) && !m) var L = v(i, "borderTopWidth"),
                    A = v(i, "borderLeftWidth"),
                    O = L ? "(0 - " + L + ")" : 0,
                    M = A ? "(0 - " + A + ")" : 0;
                e.each(N, function(e, t) {
                    var n = t[0].style;
                    n.position = "absolute";
                    if(e < 2) {
                        m ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + a.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"');
                        m ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"');
                        M && n.setExpression("left", M);
                        O && n.setExpression("top", O)
                    } else if(a.centerY) {
                        m && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                        n.marginTop = 0
                    } else if(!a.centerY && m) {
                        var r = a.css && a.css.top ? parseInt(a.css.top, 10) : 0,
                            i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + r + ') + "px"';
                        n.setExpression("top", i)
                    }
                })
            }
            if(g) {
                a.theme ? x.find(".ui-widget-content").append(g) : x.append(g);
                (g.jquery || g.nodeType) && e(g).show()
            }(n || a.forceIframe) && a.showOverlay && E.show();
            if(a.fadeIn) {
                var _ = a.onBlock ? a.onBlock : t,
                    D = a.showOverlay && !g ? _ : t,
                    P = g ? _ : t;
                a.showOverlay && S._fadeIn(a.fadeIn, D);
                g && x._fadeIn(a.fadeIn, P)
            } else {
                a.showOverlay && S.show();
                g && x.show();
                a.onBlock && a.onBlock()
            }
            c(1, i, a);
            if(m) {
                o = x[0];
                u = e(a.focusableElements, o);
                a.focusInput && setTimeout(p, 20)
            } else d(x[0], a.centerX, a.centerY);
            if(a.timeout) {
                var H = setTimeout(function() {
                    m ? e.unblockUI(a) : e(i).unblock(a)
                }, a.timeout);
                e(i).data("blockUI.timeout", H)
            }
        }

        function f(t, n) {
            var r, i = t == window,
                s = e(t),
                a = s.data("blockUI.history"),
                f = s.data("blockUI.timeout");
            if(f) {
                clearTimeout(f);
                s.removeData("blockUI.timeout")
            }
            n = e.extend({}, e.blockUI.defaults, n || {});
            c(0, t, n);
            if(n.onUnblock === null) {
                n.onUnblock = s.data("blockUI.onUnblock");
                s.removeData("blockUI.onUnblock")
            }
            var h;
            i ? h = e("body").children().filter(".blockUI").add("body > .blockUI") : h = s.find(">.blockUI");
            if(n.cursorReset) {
                h.length > 1 && (h[1].style.cursor = n.cursorReset);
                h.length > 2 && (h[2].style.cursor = n.cursorReset)
            }
            i && (o = u = null);
            if(n.fadeOut) {
                r = h.length;
                h.stop().fadeOut(n.fadeOut, function() {
                    --r === 0 && l(h, a, n, t)
                })
            } else l(h, a, n, t)
        }

        function l(t, n, r, i) {
            var s = e(i);
            if(s.data("blockUI.isBlocked")) return;
            t.each(function(e, t) {
                this.parentNode && this.parentNode.removeChild(this)
            });
            if(n && n.el) {
                n.el.style.display = n.display;
                n.el.style.position = n.position;
                n.parent && n.parent.appendChild(n.el);
                s.removeData("blockUI.history")
            }
            s.data("blockUI.static") && s.css("position", "static");
            typeof r.onUnblock == "function" && r.onUnblock(i, r);
            var o = e(document.body),
                u = o.width(),
                a = o[0].style.width;
            o.width(u - 1).width(u);
            o[0].style.width = a
        }

        function c(t, n, r) {
            var i = n == window,
                s = e(n);
            if(!t && (i && !o || !i && !s.data("blockUI.isBlocked"))) return;
            s.data("blockUI.isBlocked", t);
            if(!i || !r.bindEvents || t && !r.showOverlay) return;
            var u = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
            t ? e(document).bind(u, r, h) : e(document).unbind(u, h)
        }

        function h(t) {
            if(t.type === "keydown" && t.keyCode && t.keyCode == 9 && o && t.data.constrainTabKey) {
                var n = u,
                    r = !t.shiftKey && t.target === n[n.length - 1],
                    i = t.shiftKey && t.target === n[0];
                if(r || i) {
                    setTimeout(function() {
                        p(i)
                    }, 10);
                    return !1
                }
            }
            var s = t.data,
                a = e(t.target);
            a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t);
            return a.parents("div." + s.blockMsgClass).length > 0 ? !0 : a.parents().children().filter("div.blockUI").length === 0
        }

        function p(e) {
            if(!u) return;
            var t = u[e === !0 ? u.length - 1 : 0];
            t && t.focus()
        }

        function d(e, t, n) {
            var r = e.parentNode,
                i = e.style,
                s = (r.offsetWidth - e.offsetWidth) / 2 - v(r, "borderLeftWidth"),
                o = (r.offsetHeight - e.offsetHeight) / 2 - v(r, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0");
            n && (i.top = o > 0 ? o + "px" : "0")
        }

        function v(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var t = e.noop || function() {},
            n = /MSIE/.test(navigator.userAgent),
            r = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            i = document.documentMode || 0,
            s = e.isFunction(document.createElement("div").style.setExpression);
        e.blockUI = function(e) {
            a(window, e)
        };
        e.unblockUI = function(e) {
            f(window, e)
        };
        e.growlUI = function(t, n, r, i) {
            var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>");
            n && s.append("<h2>" + n + "</h2>");
            r === undefined && (r = 3e3);
            var o = function(t) {
                t = t || {};
                e.blockUI({
                    message: s,
                    fadeIn: typeof t.fadeIn != "undefined" ? t.fadeIn : 700,
                    fadeOut: typeof t.fadeOut != "undefined" ? t.fadeOut : 1e3,
                    timeout: typeof t.timeout != "undefined" ? t.timeout : r,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            o();
            var u = s.css("opacity");
            s.mouseover(function() {
                o({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop();
                t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        };
        e.fn.block = function(t) {
            if(this[0] === window) {
                e.blockUI(t);
                return this
            }
            var n = e.extend({}, e.blockUI.defaults, t || {});
            this.each(function() {
                var t = e(this);
                if(n.ignoreIfBlocked && t.data("blockUI.isBlocked")) return;
                t.unblock({
                    fadeOut: 0
                })
            });
            return this.each(function() {
                if(e.css(this, "position") == "static") {
                    this.style.position = "relative";
                    e(this).data("blockUI.static", !0)
                }
                this.style.zoom = 1;
                a(this, t)
            })
        };
        e.fn.unblock = function(t) {
            if(this[0] === window) {
                e.unblockUI(t);
                return this
            }
            return this.each(function() {
                f(this, t)
            })
        };
        e.blockUI.version = 2.66;
        e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var o = null,
            u = []
    }
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
})();;

/* dt-plugins: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-content/themes/qfy-01/js/plugins.js) */
/*jquery-parallax*/
/*scroll 用到*/
if(typeof jQuery.easing["jswing"] == "undefined") {
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        },
        easeInQuad: function(e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function(e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, i) {
            if((t /= i / 2) < 1) return r / 2 * t * t + n;
            return -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, i) {
            if((t /= i / 2) < 1) return r / 2 * t * t * t + n;
            return r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, i) {
            if((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
            return -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, i) {
            if((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
            return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function(e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function(e, t, n, r, i) {
            if(t == 0) return n;
            if(t == i) return n + r;
            if((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
            return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, i) {
            if((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
            return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if(t == 0) return n;
            if((t /= i) == 1) return n + r;
            if(!o) o = i * .3;
            if(u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
        },
        easeOutElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if(t == 0) return n;
            if((t /= i) == 1) return n + r;
            if(!o) o = i * .3;
            if(u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
        },
        easeInOutElastic: function(e, t, n, r, i) {
            var s = 1.70158;
            var o = 0;
            var u = r;
            if(t == 0) return n;
            if((t /= i / 2) == 2) return n + r;
            if(!o) o = i * .3 * 1.5;
            if(u < Math.abs(r)) {
                u = r;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(r / u);
            if(t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
            return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
        },
        easeInBack: function(e, t, n, r, i, s) {
            if(s == undefined) s = 1.70158;
            return r * (t /= i) * t * ((s + 1) * t - s) + n
        },
        easeOutBack: function(e, t, n, r, i, s) {
            if(s == undefined) s = 1.70158;
            return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
        },
        easeInOutBack: function(e, t, n, r, i, s) {
            if(s == undefined) s = 1.70158;
            if((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
            return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
        },
        easeInBounce: function(e, t, n, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
        },
        easeOutBounce: function(e, t, n, r, i) {
            if((t /= i) < 1 / 2.75) {
                return r * 7.5625 * t * t + n
            } else if(t < 2 / 2.75) {
                return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
            } else if(t < 2.5 / 2.75) {
                return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
            } else {
                return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
            }
        },
        easeInOutBounce: function(e, t, n, r, i) {
            if(t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
            return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
        }
    })
}

/**菜单*/

(function($, window, undefined) {

    // global
    var Modernizr = window.Modernizr,
        $body = $('body');

    $.DLMenu = function(options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.DLMenu.defaults = {
        // classes for the animation effects
        animationClasses: {
            animIn: 'dl-animate-in-2',
            animOut: 'dl-animate-out-2'
        }
    };

    $.DLMenu.prototype = {
        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            // cache some elements and initialize some variables
            this._config();

            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            // animation end event name
            this.animEndEventName = animEndEventNames['animation'] + '.dlmenu';
            // transition end event name
            this.transEndEventName = transEndEventNames['transition'] + '.dlmenu',
                // support for css animations and css transitions
                this.supportAnimations = true,
                this.supportTransitions = true;

            this._initEvents();

        },
        _config: function() {
            this.open = false;
            this.$trigger = this.$el.find('#mobile-menu');
            /* ! !changed */
            this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">' + this.$el.find('.menu-open').html() + "</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";
            this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">' + this.$el.find('.menu-close').html() + "</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";
            /* !changed: end */

            if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                this.$menu = jQuery('.floatwarpper ul.dl-menu');
            } else {
                this.$menu = this.$el.find('ul.dl-menu');
            }
            this.$menuitems = this.$menu.find('li:not(.dl-back)');

            this.$back = this.$menu.find('li.dl-back');
            this.$menuitems.each(function() {
                var $item_new = $(this),
                    $submenu_new = $item_new.children('ul.dl-submenu');
                $item_new.siblings(".new-column").find("> a").remove();
                var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();
                new_col_sub.find("> a, > .dl-back").remove();
                new_col_sub.children().unwrap().appendTo($submenu_new);
                $item_new.siblings(".new-column").remove();
                if($item_new.find("> a").attr("href") == "#") {
                    $item_new.find("> a").removeAttr("href");
                }
            });
        },
        _initEvents: function() {

            var self = this;

            this.$trigger.unbind().on('click.dlmenu', function() {

                if(self.open) {
                    self._closeMenu();
                } else {
                    self._openMenu();
                    // clicking somewhere else makes the menu close

                    if(self.$trigger.hasClass("leftbtnmenu")) {
                        if(jQuery("body >.dl-menu-film").length == 0) {
                            jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
                        }
                        jQuery("body >.dl-menu-film").off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    } else {
                        $body.off('click').on('click.dlmenu', function() {
                            self._closeMenu();
                        });
                    }

                }
                return false;

            });

            this.$menuitems.on('click.dlmenu', function(event) {
                if($(this).closest(".dl-menuwrapper").css("visibility") == "hidden") {
                    return;
                }
                event.stopPropagation();

                var $item = $(this),
                    $submenu = $item.children('ul.dl-submenu');

                if($submenu.length > 0) {

                    var xx = event.pageX;
                    var width = $submenu.width();

                    var isclick = width - xx > 35;

                    if($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")) {
                        var textw = $item.find(">a>span").width() * 1 + $item.find(">a>span").offset().left * 1;
                        isclick = xx < textw;
                    }
                    if(!$item.find(">a").attr("href")) {
                        //无链接
                        isclick = false;
                    }
                    if(isclick) {
                        if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1) {
                            //self._closeMenu();
                        }
                    } else {
                        //...
                        if($(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu")) {
                            if($submenu.css("display") != "block") {
                                var h = $submenu.height();
                                $submenu.show().css("height", 0).animate({
                                    height: h
                                }, 150, function() {
                                    $submenu.attr("style", "display:block;");
                                });
                                $item.addClass('dl-subviewopen');
                            } else {
                                $submenu.animate({
                                    height: 0
                                }, 150, function() {
                                    $submenu.hide();
                                });

                                $item.removeClass('dl-subviewopen')
                            }
                        } else {
                            $("html, body").animate({
                                scrollTop: self.$el.offset().top - 20
                            }, 150);

                            var $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animIn),
                                onAnimationEndFn = function() {
                                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animOut).addClass('dl-subview');
                                    $item.addClass('dl-subviewopen').parents('.dl-subviewopen:first').removeClass('dl-subviewopen').addClass('dl-subview');
                                    $item.addClass('qfy-subviewopen');
                                    $flyin.remove();
                                };

                            self.$menu.addClass(self.options.animationClasses.animOut);

                            if(self.supportAnimations) {
                                self.$menu.on(self.animEndEventName, onAnimationEndFn);
                            } else {
                                onAnimationEndFn.call();
                            }

                        }

                        return false;
                    }

                } else {

                    if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#") > -1) {
                        self._closeMenu();
                    }

                }
            });

            this.$back.on('click.dlmenu', function(event) {

                $("html, body").animate({
                    scrollTop: self.$el.offset().top - 20
                }, 150);

                var $this = $(this),
                    $submenu = $this.parents('ul.dl-submenu:first'),
                    $item = $submenu.parent(),

                    $flyin = $submenu.clone().insertAfter(self.$menu).addClass(self.options.animationClasses.animOut);

                var onAnimationEndFn = function() {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.animIn);
                    $flyin.remove();
                };

                self.$menu.addClass(self.options.animationClasses.animIn);

                if(self.supportAnimations) {
                    self.$menu.on(self.animEndEventName, onAnimationEndFn);
                } else {
                    onAnimationEndFn.call();
                }

                $item.removeClass('dl-subviewopen').removeClass("qfy-subviewopen");

                var $subview = $this.parents('.dl-subview:first');
                if($subview.is('li')) {
                    $subview.addClass('dl-subviewopen').addClass("qfy-subviewopen");
                }
                $subview.removeClass('dl-subview');

                return false;

            });

        },
        _closeMenu: function() {
            var self = this,
                onTransitionEndFn = function() {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };

            this.$menu.removeClass('dl-menuopen');
            this.$menu.parent().removeClass("dl-menuopen-parent");
            if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$trigger.closest(".qfy-listcatecontrols").length == 0) {
                $(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");
                $(".dl-menu-open .floatwarpper").removeAttr("style");
                $(".floatwarpper .dl-container").removeAttr("style");
                $("#page #dl-menu").removeAttr("style");
                $("body > #dl-menu").remove();
                var element_right = $("#mobile-menu").attr("data-right");
                if(element_right) {
                    $("#dl-menu").css("right", element_right + "px");
                }
                var element_top = $("#mobile-menu").attr("data-top");
                if(element_top) {
                    $("#dl-menu").css("top", element_top + "px");
                }
            }
            $("body").removeClass("dl-menu-open");
            this.$menu.addClass('dl-menu-toggle');
            if(this.$menu.closest("section.section").length > 0) {
                var style = this.$menu.closest("section.section").attr("style");
                style = style.replace(/min-height:\s*\d+px;*/g, "");
                this.$menu.closest("section.section").attr("style", style);
            }
            this.$trigger.removeClass('dl-active').html(this.openCap);

            if(this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            } else {
                onTransitionEndFn.call();
            }

            this.open = false;
        },
        _openMenu: function() {
            this.$menu.parent().addClass("dl-menuopen-parent");
            this.$menu.addClass('dl-menuopen dl-menu-toggle').on(this.transEndEventName, function() {
                $(this).removeClass('dl-menu-toggle');
            });
            if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length > 0 && this.$menu.closest(".qfy-listcatecontrols").length == 0) {

                var $this = this;
                $("body").addClass("dl-menu-open");
                var width = $('html').width();
                if($("#mobile-menu").hasClass("fullfloatmenu")) {
                    var w = width;
                } else {
                    var w = width - 60;
                }

                if(!$(".floatwarpper").hasClass("leftbtnmenu")) {
                    $(".mobilefloatmenu.dl-menu-open #page").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".dl-menu-open .floatwarpper").css('transform', 'translate3d(-' + w + 'px, 0px, 0px)').css('-webkit-transform', 'translate3d(-' + w + 'px,0,0)');
                    $(".floatwarpper").width(w).css("right", "-" + w + "px");
                }
                $(".floatwarpper .dl-container").css("max-width", "100%");
                var element_top = $("#mobile-menu").attr("data-top");
                var element_right = $("#mobile-menu").attr("data-right");
                if(element_top) {
                    $("#page #dl-menu").css("top", element_top + "px");
                    $("body > #dl-menu").css("top", element_top + "px");
                }
                setTimeout(function() {
                    if(!$(".floatwarpper").hasClass("leftbtnmenu")) {
                        $("#page #dl-menu").removeClass("dl-menu-hidden");
                        var menu_html = $("#page #dl-menu").prop("outerHTML");
                        $("body").prepend(menu_html);
                        if(element_top) {
                            $("body > #dl-menu").css("top", element_top + "px");
                        }
                        $("#page #dl-menu").addClass("dl-menu-hidden");

                        if($("#mobile-menu").hasClass("fullfloatmenu")) {
                            $("body > #dl-menu").css("right", element_right + "px");
                        } else {
                            $("body > #dl-menu").css("right", (1 * w + 8) + "px");
                        }
                    }
                    $("body > #dl-menu").unbind().bind("click", function(e) {
                        e.stopPropagation();
                        $this.$trigger.click();
                        return false;
                    });

                }, 200)

            }
            this.$trigger.addClass('dl-active').html(this.closeCap);
            this.open = true;
            if(this.$menu.closest("section.section").length > 0) {
                var minheight = this.$menu.height();
                this.$menu.closest("section.section").css("min-height", minheight + "px");
            }
            if(!$(".floatwarpper").hasClass("leftbtnmenu")) {
                $("html, body").animate({
                    scrollTop: this.$el.offset().top - 20
                }, 150);
            }
        },
        // resets the menu to its original state (first level of options)
        _resetMenu: function() {
            if(!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu")) {
                this.$menu.removeClass('dl-subview');
                this.$menuitems.removeClass('dl-subview dl-subviewopen');
            }
        }
    };

    var logError = function(message) {
        if(window.console) {
            window.console.error(message);
        }
    };

    $.fn.dlmenu = function(options) {
        if(typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if(!instance) {
                    logError("cannot call methods on dlmenu prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }
                if(!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for dlmenu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                var instance = $.data(this, 'dlmenu');
                if(instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };

})(jQuery, window);

(function($, window, undefined) {

    'use strict';

    $.HoverDir = function(options, element) {

        this.$el = $(element);
        this._init(options);

    };

    // the options
    $.HoverDir.defaults = {
        speed: 300,
        easing: 'ease',
        hoverDelay: 0,
        inverse: false
    };

    $.HoverDir.prototype = {

        _init: function(options) {

            // options
            this.options = $.extend(true, {}, $.HoverDir.defaults, options);
            // transition properties
            this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
            // support for CSS transitions
            this.support = Modernizr.csstransitions;
            // load the events
            this._loadEvents();

        },
        _loadEvents: function() {

            var self = this;

            this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function(event) {

                var $el = $(this),
                    $hoverElem = $el.find('div.rollover-content, div.fs-entry-content'),
                    direction = self._getDir($el, {
                        x: event.pageX,
                        y: event.pageY
                    }),
                    styleCSS = self._getStyle(direction);

                if(event.type === 'mouseenter') {

                    $hoverElem.hide().css(styleCSS.from);
                    clearTimeout(self.tmhover);

                    self.tmhover = setTimeout(function() {

                        $hoverElem.show(0, function() {

                            var $el = $(this);
                            if(self.support) {
                                $el.css('transition', self.transitionProp);
                            }
                            self._applyAnimation($el, styleCSS.to, self.options.speed);

                        });

                    }, self.options.hoverDelay);

                } else {

                    if(self.support) {
                        $hoverElem.css('transition', self.transitionProp);
                    }
                    clearTimeout(self.tmhover);
                    self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);

                }

            });

        },
        _getDir: function($el, coordinates) {
            var w = $el.width(),
                h = $el.height(),
                x = (coordinates.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
                y = (coordinates.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
                direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

            return direction;

        },
        _getStyle: function(direction) {

            var fromStyle, toStyle,
                slideFromTop = {
                    left: '0px',
                    top: '-100%'
                },
                slideFromBottom = {
                    left: '0px',
                    top: '100%'
                },
                slideFromLeft = {
                    left: '-100%',
                    top: '0px'
                },
                slideFromRight = {
                    left: '100%',
                    top: '0px'
                },
                slideTop = {
                    top: '0px'
                },
                slideLeft = {
                    left: '0px'
                };

            switch(direction) {
                case 0:
                    // from top
                    fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
                    toStyle = slideTop;
                    break;
                case 1:
                    // from right
                    fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
                    toStyle = slideLeft;
                    break;
                case 2:
                    // from bottom
                    fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
                    toStyle = slideTop;
                    break;
                case 3:
                    // from left
                    fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
                    toStyle = slideLeft;
                    break;
            };

            return {
                from: fromStyle,
                to: toStyle
            };

        },
        // apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
        _applyAnimation: function(el, styleCSS, speed) {

            $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
            el.stop().applyStyle(styleCSS, $.extend(true, [], {
                duration: speed + 'ms'
            }));

        },

    };

    var logError = function(message) {

        if(window.console) {

            window.console.error(message);

        }

    };

    $.fn.hoverdir = function(options) {

        var instance = $.data(this, 'hoverdir');
        if(typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                if(!instance) {
                    logError("cannot call methods on hoverdir prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }
                if(!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for hoverdir instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function() {
                if(instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));
                }
            });
        }
        return instance;
    };
})(jQuery, window);



/* Sandbox: end */
/* dt-main-op-jquery: (http://5a4ed3e611bcf.t73.qifeiye.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip, firstAdapter, i, mouseMoved, mousePosition, mousePositionObservers, position, vendors, _i, _len, _ref, __slice = [].slice,
    __indexOf = [].indexOf || function(t) {
            for(var e = 0, i = this.length; i > e; e++)
                if(e in this && this[e] === t) return e;
            return -1
        },
    __hasProp = {}.hasOwnProperty;
for(Opentip = function() {
    function t(e, i, o, s) {
        var n, r, a, h, p, d, l, u, c, g, f, m, v, b, w = this;
        if(this.id = ++t.lastId, this.debug("Creating Opentip."), t.tips.push(this), this.adapter = t.adapter, n = this.adapter.data(e, "opentips") || [], n.push(this), this.adapter.data(e, "opentips", n), this.triggerElement = this.adapter.wrap(e), this.triggerElement.length > 1) throw Error("You can't call Opentip on multiple elements.");
        if(1 > this.triggerElement.length) throw Error("Invalid element.");
        this.loaded = !1, this.loading = !1, this.visible = !1, this.waitingToShow = !1, this.waitingToHide = !1, this.currentPosition = {
            left: 0,
            top: 0
        }, this.dimensions = {
            width: 100,
            height: 50
        }, this.content = "", this.redraw = !0, this.currentObservers = {
            showing: !1,
            visible: !1,
            hiding: !1,
            hidden: !1
        }, s = this.adapter.clone(s), typeof i == "object" ? (s = i, i = o = void 0) : typeof o == "object" && (s = o, o = void 0), o != null && (s.title = o), i != null && this.setContent(i), s["extends"] == null && (s["extends"] = s.style != null ? s.style : t.defaultStyle), h = [s], b = s;
        while(b["extends"]) {
            if(d = b["extends"], b = t.styles[d], b == null) throw Error("Invalid style: " + d);
            h.unshift(b), b["extends"] == null && d !== "standard" && (b["extends"] = "standard")
        }
        for(s = (f = this.adapter).extend.apply(f, [{}].concat(__slice.call(h))), s.hideTriggers = function() {
            var t, e, i, o;
            for(i = s.hideTriggers, o = [], t = 0, e = i.length; e > t; t++) r = i[t], o.push(r);
            return o
        }(), s.hideTrigger && s.hideTriggers.length === 0 && s.hideTriggers.push(s.hideTrigger), m = ["tipJoint", "targetJoint", "stem"], l = 0, c = m.length; c > l; l++) p = m[l], s[p] && typeof s[p] == "string" && (s[p] = new t.Joint(s[p]));
        for(!s.ajax || s.ajax !== !0 && s.ajax || (s.ajax = this.adapter.tagName(this.triggerElement) === "A" ? this.adapter.attr(this.triggerElement, "href") : !1), s.showOn === "click" && this.adapter.tagName(this.triggerElement) === "A" && this.adapter.observe(this.triggerElement, "click", function(t) {
            return t.preventDefault(), t.stopPropagation(), t.stopped = !0
        }), s.target && (s.fixed = !0), s.stem === !0 && (s.stem = new t.Joint(s.tipJoint)), s.target === !0 ? s.target = this.triggerElement : s.target && (s.target = this.adapter.wrap(s.target)), this.currentStem = s.stem, s.delay == null && (s.delay = s.showOn === "mouseover" ? .2 : 0), s.targetJoint == null && (s.targetJoint = new t.Joint(s.tipJoint).flip()), this.showTriggers = [], this.showTriggersWhenVisible = [], this.hideTriggers = [], s.showOn && s.showOn !== "creation" && this.showTriggers.push({
            element: this.triggerElement,
            event: s.showOn
        }), s.ajaxCache != null && (s.cache = s.ajaxCache, delete s.ajaxCache), this.options = s, this.bound = {}, v = ["prepareToShow", "prepareToHide", "show", "hide", "reposition"], u = 0, g = v.length; g > u; u++) a = v[u], this.bound[a] = function(t) {
            return function() {
                return w[t].apply(w, arguments)
            }
        }(a);
        this.adapter.domReady(function() {
            return w.activate(), w.options.showOn === "creation" ? w.prepareToShow() : void 0
        })
    }
    return t.prototype.STICKS_OUT_TOP = 1, t.prototype.STICKS_OUT_BOTTOM = 2, t.prototype.STICKS_OUT_LEFT = 1, t.prototype.STICKS_OUT_RIGHT = 2, t.prototype["class"] = {
        container: "opentip-container",
        opentip: "opentip",
        header: "ot-header",
        content: "ot-content",
        loadingIndicator: "ot-loading-indicator",
        close: "ot-close",
        goingToHide: "ot-going-to-hide",
        hidden: "ot-hidden",
        hiding: "ot-hiding",
        goingToShow: "ot-going-to-show",
        showing: "ot-showing",
        visible: "ot-visible",
        loading: "ot-loading",
        ajaxError: "ot-ajax-error",
        fixed: "ot-fixed",
        showEffectPrefix: "ot-show-effect-",
        hideEffectPrefix: "ot-hide-effect-",
        stylePrefix: "style-"
    }, t.prototype._setup = function() {
        var t, e, i, o, s, n, r, a, h, p, d;
        for(this.debug("Setting up the tooltip."), this._buildContainer(), this.hideTriggers = [], h = this.options.hideTriggers, o = s = 0, r = h.length; r > s; o = ++s) {
            if(e = h[o], i = null, t = this.options.hideOn instanceof Array ? this.options.hideOn[o] : this.options.hideOn, typeof e == "string") switch(e) {
                case "trigger":
                    t = t || "mouseout", i = this.triggerElement;
                    break;
                case "tip":
                    t = t || "mouseover", i = this.container;
                    break;
                case "target":
                    t = t || "mouseover", i = this.options.target;
                    break;
                case "closeButton":
                    break;
                default:
                    throw Error("Unknown hide trigger: " + e + ".")
            } else t = t || "mouseover", i = this.adapter.wrap(e);
            i && this.hideTriggers.push({
                element: i,
                event: t,
                original: e
            })
        }
        for(p = this.hideTriggers, d = [], n = 0, a = p.length; a > n; n++) e = p[n], d.push(this.showTriggersWhenVisible.push({
            element: e.element,
            event: "mouseover"
        }));
        return d
    }, t.prototype._buildContainer = function() {
        return this.container = this.adapter.create('<div id="opentip-' + this.id + '" class="' + this["class"].container + " " + this["class"].hidden + " " + this["class"].stylePrefix + this.options.className + '"></div>'), this.adapter.css(this.container, {
            position: "absolute"
        }), this.options.ajax && this.adapter.addClass(this.container, this["class"].loading), this.options.fixed && this.adapter.addClass(this.container, this["class"].fixed), this.options.showEffect && this.adapter.addClass(this.container, "" + this["class"].showEffectPrefix + this.options.showEffect), this.options.hideEffect ? this.adapter.addClass(this.container, "" + this["class"].hideEffectPrefix + this.options.hideEffect) : void 0
    }, t.prototype._buildElements = function() {
        var t, e;
        return this.tooltipElement = this.adapter.create('<div class="' + this["class"].opentip + '"><div class="' + this["class"].header + '"></div><div class="' + this["class"].content + '"></div></div>'), this.backgroundCanvas = this.adapter.wrap(document.createElement("canvas")), this.adapter.css(this.backgroundCanvas, {
            position: "absolute"
        }), typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager !== null && G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)), t = this.adapter.find(this.tooltipElement, "." + this["class"].header), this.options.title && (e = this.adapter.create("<h1></h1>"), this.adapter.update(e, this.options.title, this.options.escapeTitle), this.adapter.append(t, e)), this.options.ajax && !this.loaded && this.adapter.append(this.tooltipElement, this.adapter.create('<div class="' + this["class"].loadingIndicator + '"><span>↻</span></div>')), __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (this.closeButtonElement = this.adapter.create('<a href="javascript:undefined;" class="' + this["class"].close + '"><span>Close</span></a>'), this.adapter.append(t, this.closeButtonElement)), this.adapter.append(this.container, this.backgroundCanvas), this.adapter.append(this.container, this.tooltipElement), this.adapter.append(document.body, this.container), this._newContent = !0, this.redraw = !0
    }, t.prototype.setContent = function(t) {
        return this.content = t, this._newContent = !0, typeof this.content == "function" ? (this._contentFunction = this.content, this.content = "") : this._contentFunction = null, this.visible ? this._updateElementContent() : void 0
    }, t.prototype._updateElementContent = function() {
        var t;
        return(this._newContent || !this.options.cache && this._contentFunction) && (t = this.adapter.find(this.container, "." + this["class"].content), t != null && (this._contentFunction && (this.debug("Executing content function."), this.content = this._contentFunction(this)), this.adapter.update(t, this.content, this.options.escapeContent)), this._newContent = !1), this._storeAndLockDimensions(), this.reposition()
    }, t.prototype._storeAndLockDimensions = function() {
        var t;
        if(this.container) return t = this.dimensions, this.adapter.css(this.container, {
            width: "auto",
            left: "0px",
            top: "0px"
        }), this.dimensions = this.adapter.dimensions(this.container), this.dimensions.width += 1, this.adapter.css(this.container, {
            width: "" + this.dimensions.width + "px",
            top: "" + this.currentPosition.top + "px",
            left: "" + this.currentPosition.left + "px"
        }), this._dimensionsEqual(this.dimensions, t) ? void 0 : (this.redraw = !0, this._draw())
    }, t.prototype.activate = function() {
        return this._setupObservers("hidden", "hiding")
    }, t.prototype.deactivate = function() {
        return this.debug("Deactivating tooltip."), this.hide(), this._setupObservers("-showing", "-visible", "-hidden", "-hiding")
    }, t.prototype._setupObservers = function() {
        var t, e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m = this;
        for(o = arguments.length >= 1 ? __slice.call(arguments, 0) : [], n = 0, p = o.length; p > n; n++)
            if(i = o[n], e = !1, i.charAt(0) === "-" && (e = !0, i = i.substr(1)), this.currentObservers[i] !== !e) switch(this.currentObservers[i] = !e, t = function() {
                var t, i, o;
                return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], e ? (i = m.adapter).stopObserving.apply(i, t) : (o = m.adapter).observe.apply(o, t)
            }, i) {
                case "showing":
                    for(c = this.hideTriggers, r = 0, d = c.length; d > r; r++) s = c[r], t(s.element, s.event, this.bound.prepareToHide);
                    t(document.onresize != null ? document : window, "resize", this.bound.reposition), t(window, "scroll", this.bound.reposition);
                    break;
                case "visible":
                    for(g = this.showTriggersWhenVisible, a = 0, l = g.length; l > a; a++) s = g[a], t(s.element, s.event, this.bound.prepareToShow);
                    break;
                case "hiding":
                    for(f = this.showTriggers, h = 0, u = f.length; u > h; h++) s = f[h], t(s.element, s.event, this.bound.prepareToShow);
                    break;
                case "hidden":
                    break;
                default:
                    throw Error("Unknown state: " + i)
            }
        return null
    }, t.prototype.prepareToShow = function() {
        return this._abortHiding(), this._abortShowing(), this.visible ? void 0 : (this.debug("Showing in " + this.options.delay + "s."), this.container == null && this._setup(), this.options.group && t._abortShowingGroup(this.options.group, this), this.preparingToShow = !0, this._setupObservers("-hidden", "-hiding", "showing"), this._followMousePosition(), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this._showTimeoutId = this.setTimeout(this.bound.show, this.options.delay || 0))
    }, t.prototype.show = function() {
        var e = this;
        return this._abortHiding(), this.visible ? void 0 : (this._clearTimeouts(), this._triggerElementExists() ? (this.debug("Showing now."), this.container == null && this._setup(), this.options.group && t._hideGroup(this.options.group, this), this.visible = !0, this.preparingToShow = !1, this.tooltipElement == null && this._buildElements(), this._updateElementContent(), !this.options.ajax || this.loaded && this.options.cache || this._loadAjax(), this._searchAndActivateCloseButtons(), this._startEnsureTriggerElement(), this.adapter.css(this.container, {
            zIndex: t.lastZIndex++
        }), this._setupObservers("-hidden", "-hiding", "-showing", "-visible", "showing", "visible"), this.options.fixed && !this.options.target && (this.initialMousePosition = mousePosition), this.reposition(), this.adapter.removeClass(this.container, this["class"].hiding), this.adapter.removeClass(this.container, this["class"].hidden), this.adapter.addClass(this.container, this["class"].goingToShow), this.setCss3Style(this.container, {
            transitionDuration: "0s"
        }), this.defer(function() {
            var t;
            if(e.visible && !e.preparingToHide) return e.adapter.removeClass(e.container, e["class"].goingToShow), e.adapter.addClass(e.container, e["class"].showing), t = 0, e.options.showEffect && e.options.showEffectDuration && (t = e.options.showEffectDuration), e.setCss3Style(e.container, {
                transitionDuration: "" + t + "s"
            }), e._visibilityStateTimeoutId = e.setTimeout(function() {
                return e.adapter.removeClass(e.container, e["class"].showing), e.adapter.addClass(e.container, e["class"].visible)
            }, t), e._activateFirstInput()
        }), this._draw()) : this.deactivate())
    }, t.prototype._abortShowing = function() {
        return this.preparingToShow ? (this.debug("Aborting showing."), this._clearTimeouts(), this._stopFollowingMousePosition(), this.preparingToShow = !1, this._setupObservers("-showing", "-visible", "hiding", "hidden")) : void 0
    }, t.prototype.prepareToHide = function() {
        return this._abortShowing(), this._abortHiding(), this.visible ? (this.debug("Hiding in " + this.options.hideDelay + "s"), this.preparingToHide = !0, this._setupObservers("-showing", "visible", "-hidden", "hiding"), this._hideTimeoutId = this.setTimeout(this.bound.hide, this.options.hideDelay)) : void 0
    }, t.prototype.hide = function() {
        var t = this;
        return this._abortShowing(), this.visible && (this._clearTimeouts(), this.debug("Hiding!"), this.visible = !1, this.preparingToHide = !1, this._stopEnsureTriggerElement(), this._setupObservers("-showing", "-visible", "-hiding", "-hidden", "hiding", "hidden"), this.options.fixed || this._stopFollowingMousePosition(), this.container) ? (this.adapter.removeClass(this.container, this["class"].visible), this.adapter.removeClass(this.container, this["class"].showing), this.adapter.addClass(this.container, this["class"].goingToHide), this.setCss3Style(this.container, {
            transitionDuration: "0s"
        }), this.defer(function() {
            var e;
            return t.adapter.removeClass(t.container, t["class"].goingToHide), t.adapter.addClass(t.container, t["class"].hiding), e = 0, t.options.hideEffect && t.options.hideEffectDuration && (e = t.options.hideEffectDuration), t.setCss3Style(t.container, {
                transitionDuration: "" + e + "s"
            }), t._visibilityStateTimeoutId = t.setTimeout(function() {
                return t.adapter.removeClass(t.container, t["class"].hiding), t.adapter.addClass(t.container, t["class"].hidden), t.setCss3Style(t.container, {
                    transitionDuration: "0s"
                }), t.options.removeElementsOnHide ? (t.debug("Removing HTML elements."), t.adapter.remove(t.container), delete t.container, delete t.tooltipElement) : void 0
            }, e)
        })) : void 0
    }, t.prototype._abortHiding = function() {
        return this.preparingToHide ? (this.debug("Aborting hiding."), this._clearTimeouts(), this.preparingToHide = !1, this._setupObservers("-hiding", "showing", "visible")) : void 0
    }, t.prototype.reposition = function() {
        var t, e, i, o = this;
        return t = this.getPosition(), t == null || (e = this.options.stem, this.options.containInViewport && (i = this._ensureViewportContainment(t), t = i.position, e = i.stem), this._positionsEqual(t, this.currentPosition)) ? void 0 : (this.options.stem && !e.eql(this.currentStem) && (this.redraw = !0), this.currentPosition = t, this.currentStem = e, this._draw(), this.adapter.css(this.container, {
            left: "" + t.left + "px",
            top: "" + t.top + "px"
        }), this.defer(function() {
            var t, e;
            return t = o.adapter.unwrap(o.container), t.style.visibility = "hidden", e = t.offsetHeight, t.style.visibility = "visible"
        }))
    }, t.prototype.getPosition = function(t, e, i) {
        var o, s, n, r, a, h, p, d, l;
        if(this.container) return t == null && (t = this.options.tipJoint), e == null && (e = this.options.targetJoint), r = {}, this.options.target ? (p = this.adapter.offset(this.options.target), h = this.adapter.dimensions(this.options.target), r = p, e.right ? (d = this.adapter.unwrap(this.options.target), d.getBoundingClientRect != null ? r.left = d.getBoundingClientRect().right + ((l = window.pageXOffset) != null ? l : document.body.scrollLeft) : r.left += h.width) : e.center && (r.left += Math.round(h.width / 2)), e.bottom ? r.top += h.height : e.middle && (r.top += Math.round(h.height / 2)), this.options.borderWidth && (this.options.tipJoint.left && (r.left += this.options.borderWidth), this.options.tipJoint.right && (r.left -= this.options.borderWidth), this.options.tipJoint.top ? r.top += this.options.borderWidth : this.options.tipJoint.bottom && (r.top -= this.options.borderWidth))) : r = this.initialMousePosition ? {
            top: this.initialMousePosition.y,
            left: this.initialMousePosition.x
        } : {
            top: mousePosition.y,
            left: mousePosition.x
        }, this.options.autoOffset && (a = this.options.stem ? this.options.stemLength : 0, n = a && this.options.fixed ? 2 : 10, o = t.middle && !this.options.fixed ? 15 : 0, s = t.center && !this.options.fixed ? 15 : 0, t.right ? r.left -= n + o : t.left && (r.left += n + o), t.bottom ? r.top -= n + s : t.top && (r.top += n + s), a && (i == null && (i = this.options.stem), i.right ? r.left -= a : i.left && (r.left += a), i.bottom ? r.top -= a : i.top && (r.top += a))), r.left += this.options.offset[0], r.top += this.options.offset[1], t.right ? r.left -= this.dimensions.width : t.center && (r.left -= Math.round(this.dimensions.width / 2)), t.bottom ? r.top -= this.dimensions.height : t.middle && (r.top -= Math.round(this.dimensions.height / 2)), r
    }, t.prototype._ensureViewportContainment = function(e) {
        var i, o, s, n, r, a, h, p, d, l, u, c;
        if(h = this.options.stem, s = {
                position: e,
                stem: h
            }, !this.visible || !e) return s;
        if(p = this._sticksOut(e), !p[0] && !p[1]) return s;
        if(l = new t.Joint(this.options.tipJoint), this.options.targetJoint && (d = new t.Joint(this.options.targetJoint)), a = this.adapter.scrollOffset(), u = this.adapter.viewportDimensions(), c = [e.left - a[0], e.top - a[1]], i = !1, u.width >= this.dimensions.width && p[0]) switch(i = !0, p[0]) {
            case this.STICKS_OUT_LEFT:
                l.setHorizontal("left"), this.options.targetJoint && d.setHorizontal("right");
                break;
            case this.STICKS_OUT_RIGHT:
                l.setHorizontal("right"), this.options.targetJoint && d.setHorizontal("left")
        }
        if(u.height >= this.dimensions.height && p[1]) switch(i = !0, p[1]) {
            case this.STICKS_OUT_TOP:
                l.setVertical("top"), this.options.targetJoint && d.setVertical("bottom");
                break;
            case this.STICKS_OUT_BOTTOM:
                l.setVertical("bottom"), this.options.targetJoint && d.setVertical("top")
        }
        return i ? (this.options.stem && (h = l), e = this.getPosition(l, d, h), o = this._sticksOut(e), n = !1, r = !1, o[0] && o[0] !== p[0] && (n = !0, l.setHorizontal(this.options.tipJoint.horizontal), this.options.targetJoint && d.setHorizontal(this.options.targetJoint.horizontal)), o[1] && o[1] !== p[1] && (r = !0, l.setVertical(this.options.tipJoint.vertical), this.options.targetJoint && d.setVertical(this.options.targetJoint.vertical)), n && r ? s : ((n || r) && (this.options.stem && (h = l), e = this.getPosition(l, d, h)), {
            position: e,
            stem: h
        })) : s
    }, t.prototype._sticksOut = function(t) {
        var e, i, o, s;
        return i = this.adapter.scrollOffset(), s = this.adapter.viewportDimensions(), e = [t.left - i[0], t.top - i[1]], o = [!1, !1], 0 > e[0] ? o[0] = this.STICKS_OUT_LEFT : e[0] + this.dimensions.width > s.width && (o[0] = this.STICKS_OUT_RIGHT), 0 > e[1] ? o[1] = this.STICKS_OUT_TOP : e[1] + this.dimensions.height > s.height && (o[1] = this.STICKS_OUT_BOTTOM), o
    }, t.prototype._draw = function() {
        var e, i, o, s, n, r, a, h, p, d, l, u, c, g, f, m, v, b, w, _ = this;
        if(this.backgroundCanvas && this.redraw) {
            if(this.debug("Drawing background."), this.redraw = !1, this.currentStem) {
                for(v = ["top", "right", "bottom", "left"], f = 0, m = v.length; m > f; f++) u = v[f], this.adapter.removeClass(this.container, "stem-" + u);
                this.adapter.addClass(this.container, "stem-" + this.currentStem.horizontal), this.adapter.addClass(this.container, "stem-" + this.currentStem.vertical)
            }
            return r = [0, 0], a = [0, 0], __indexOf.call(this.options.hideTriggers, "closeButton") >= 0 && (n = new t.Joint(((b = this.currentStem) != null ? b + "" : void 0) === "top right" ? "top left" : "top right"), r = [this.options.closeButtonRadius + this.options.closeButtonOffset[0], this.options.closeButtonRadius + this.options.closeButtonOffset[1]], a = [this.options.closeButtonRadius - this.options.closeButtonOffset[0], this.options.closeButtonRadius - this.options.closeButtonOffset[1]]), o = this.adapter.clone(this.dimensions), s = [0, 0], this.options.borderWidth && (o.width += this.options.borderWidth * 2, o.height += this.options.borderWidth * 2, s[0] -= this.options.borderWidth, s[1] -= this.options.borderWidth), this.options.shadow && (o.width += this.options.shadowBlur * 2, o.width += Math.max(0, this.options.shadowOffset[0] - this.options.shadowBlur * 2), o.height += this.options.shadowBlur * 2, o.height += Math.max(0, this.options.shadowOffset[1] - this.options.shadowBlur * 2), s[0] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[0]), s[1] -= Math.max(0, this.options.shadowBlur - this.options.shadowOffset[1])), i = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.currentStem && (this.currentStem.left ? i.left = this.options.stemLength : this.currentStem.right && (i.right = this.options.stemLength), this.currentStem.top ? i.top = this.options.stemLength : this.currentStem.bottom && (i.bottom = this.options.stemLength)), n && (n.left ? i.left = Math.max(i.left, a[0]) : n.right && (i.right = Math.max(i.right, a[0])), n.top ? i.top = Math.max(i.top, a[1]) : n.bottom && (i.bottom = Math.max(i.bottom, a[1]))), o.width += i.left + i.right, o.height += i.top + i.bottom, s[0] -= i.left, s[1] -= i.top, this.currentStem && this.options.borderWidth && (w = this._getPathStemMeasures(this.options.stemBase, this.options.stemLength, this.options.borderWidth), g = w.stemLength, c = w.stemBase), e = this.adapter.unwrap(this.backgroundCanvas), e.width = o.width, e.height = o.height, this.adapter.css(this.backgroundCanvas, {
                width: "" + e.width + "px",
                height: "" + e.height + "px",
                left: "" + s[0] + "px",
                top: "" + s[1] + "px"
            }), h = e.getContext("2d"), h.setTransform(1, 0, 0, 1, 0, 0), h.clearRect(0, 0, e.width, e.height), h.beginPath(), h.fillStyle = this._getColor(h, this.dimensions, this.options.background, this.options.backgroundGradientHorizontal), h.lineJoin = "miter", h.miterLimit = 500, l = this.options.borderWidth / 2, this.options.borderWidth ? (h.strokeStyle = this.options.borderColor, h.lineWidth = this.options.borderWidth) : (g = this.options.stemLength, c = this.options.stemBase), c == null && (c = 0), d = function(t, e, i) {
                return i && h.moveTo(Math.max(c, _.options.borderRadius, r[0]) + 1 - l, -l), e ? (h.lineTo(t / 2 - c / 2, -l), h.lineTo(t / 2, -g - l), h.lineTo(t / 2 + c / 2, -l)) : void 0
            }, p = function(t, e, i) {
                var o, s, n, a;
                return t ? (h.lineTo(-c + l, 0 - l), h.lineTo(g + l, -g - l), h.lineTo(l, c - l)) : e ? (a = _.options.closeButtonOffset, n = r[0], i % 2 !== 0 && (a = [a[1], a[0]], n = r[1]), o = Math.acos(a[1] / _.options.closeButtonRadius), s = Math.acos(a[0] / _.options.closeButtonRadius), h.lineTo(-n + l, -l), h.arc(l - a[0], -l + a[1], _.options.closeButtonRadius, -(Math.PI / 2 + o), s, !1)) : (h.lineTo(-_.options.borderRadius + l, -l), h.quadraticCurveTo(l, -l, l, _.options.borderRadius - l))
            }, h.translate(-s[0], -s[1]), h.save(),
                function() {
                    var e, i, o, s, r, a, l, u, c, g, f;
                    for(f = [], i = c = 0, g = t.positions.length / 2; g >= 0 ? g > c : c > g; i = g >= 0 ? ++c : --c) r = i * 2, a = i === 0 || i === 3 ? 0 : _.dimensions.width, l = 2 > i ? 0 : _.dimensions.height, u = Math.PI / 2 * i, o = i % 2 === 0 ? _.dimensions.width : _.dimensions.height, s = new t.Joint(t.positions[r]), e = new t.Joint(t.positions[r + 1]), h.save(), h.translate(a, l), h.rotate(u), d(o, s.eql(_.currentStem), i === 0), h.translate(o, 0), p(e.eql(_.currentStem), e.eql(n), i), f.push(h.restore());
                    return f
                }(), h.closePath(), h.save(), this.options.shadow && (h.shadowColor = this.options.shadowColor, h.shadowBlur = this.options.shadowBlur, h.shadowOffsetX = this.options.shadowOffset[0], h.shadowOffsetY = this.options.shadowOffset[1]), h.fill(), h.restore(), this.options.borderWidth && h.stroke(), h.restore(), n ? function() {
                var t, e, i, o, s;
                return i = e = _.options.closeButtonRadius * 2, n + "" == "top right" ? (s = [_.dimensions.width - _.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] + l, s[1] - l]) : (s = [_.options.closeButtonOffset[0], _.options.closeButtonOffset[1]], t = [s[0] - l, s[1] - l]), h.translate(t[0], t[1]), o = _.options.closeButtonCrossSize / 2, h.save(), h.beginPath(), h.strokeStyle = _.options.closeButtonCrossColor, h.lineWidth = _.options.closeButtonCrossLineWidth, h.lineCap = "round", h.moveTo(-o, -o), h.lineTo(o, o), h.stroke(), h.beginPath(), h.moveTo(o, -o), h.lineTo(-o, o), h.stroke(), h.restore(), _.adapter.css(_.closeButtonElement, {
                    left: "" + (s[0] - o - _.options.closeButtonLinkOverscan) + "px",
                    top: "" + (s[1] - o - _.options.closeButtonLinkOverscan) + "px",
                    width: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px",
                    height: "" + (_.options.closeButtonCrossSize + _.options.closeButtonLinkOverscan * 2) + "px"
                })
            }() : void 0
        }
    }, t.prototype._getPathStemMeasures = function(t, e, i) {
        var o, s, n, r, a, h, p;
        if(r = i / 2, n = Math.atan(t / 2 / e), o = n * 2, a = r / Math.sin(o), s = 2 * a * Math.cos(n), p = r + e - s, 0 > p) throw Error("Sorry but your stemLength / stemBase ratio is strange.");
        return h = Math.tan(n) * p * 2, {
            stemLength: p,
            stemBase: h
        }
    }, t.prototype._getColor = function(t, e, i, o) {
        var s, n, r, a, h;
        if(o == null && (o = !1), typeof i == "string") return i;
        for(n = o ? t.createLinearGradient(0, 0, e.width, 0) : t.createLinearGradient(0, 0, 0, e.height), r = a = 0, h = i.length; h > a; r = ++a) s = i[r], n.addColorStop(s[0], s[1]);
        return n
    }, t.prototype._searchAndActivateCloseButtons = function() {
        var t, e, i, o;
        for(o = this.adapter.findAll(this.container, "." + this["class"].close), e = 0, i = o.length; i > e; e++) t = o[e], this.hideTriggers.push({
            element: this.adapter.wrap(t),
            event: "click"
        });
        return this.currentObservers.showing && this._setupObservers("-showing", "showing"), this.currentObservers.visible ? this._setupObservers("-visible", "visible") : void 0
    }, t.prototype._activateFirstInput = function() {
        var t;
        return t = this.adapter.unwrap(this.adapter.find(this.container, "input, textarea")), t != null ? typeof t.focus == "function" ? t.focus() : void 0 : void 0
    }, t.prototype._followMousePosition = function() {
        return this.options.fixed ? void 0 : t._observeMousePosition(this.bound.reposition)
    }, t.prototype._stopFollowingMousePosition = function() {
        return this.options.fixed ? void 0 : t._stopObservingMousePosition(this.bound.reposition)
    }, t.prototype._clearShowTimeout = function() {
        return clearTimeout(this._showTimeoutId)
    }, t.prototype._clearHideTimeout = function() {
        return clearTimeout(this._hideTimeoutId)
    }, t.prototype._clearTimeouts = function() {
        return clearTimeout(this._visibilityStateTimeoutId), this._clearShowTimeout(), this._clearHideTimeout()
    }, t.prototype._triggerElementExists = function() {
        var t;
        t = this.adapter.unwrap(this.triggerElement);
        while(t.parentNode) {
            if(t.parentNode.tagName === "BODY") return !0;
            t = t.parentNode
        }
        return !1
    }, t.prototype._loadAjax = function() {
        var t = this;
        if(!this.loading) return this.loaded = !1, this.loading = !0, this.adapter.addClass(this.container, this["class"].loading), this.setContent(""), this.debug("Loading content from " + this.options.ajax), this.adapter.ajax({
            url: this.options.ajax,
            method: this.options.ajaxMethod,
            onSuccess: function(e) {
                return t.debug("Loading successful."), t.adapter.removeClass(t.container, t["class"].loading), t.setContent(e)
            },
            onError: function(e) {
                var i;
                return i = t.options.ajaxErrorMessage, t.debug(i, e), t.setContent(i), t.adapter.addClass(t.container, t["class"].ajaxError)
            },
            onComplete: function() {
                return t.adapter.removeClass(t.container, t["class"].loading), t.loading = !1, t.loaded = !0, t._searchAndActivateCloseButtons(), t._activateFirstInput(), t.reposition()
            }
        })
    }, t.prototype._ensureTriggerElement = function() {
        return this._triggerElementExists() ? void 0 : (this.deactivate(), this._stopEnsureTriggerElement())
    }, t.prototype._ensureTriggerElementInterval = 1e3, t.prototype._startEnsureTriggerElement = function() {
        var t = this;
        return this._ensureTriggerElementTimeoutId = setInterval(function() {
            return t._ensureTriggerElement()
        }, this._ensureTriggerElementInterval)
    }, t.prototype._stopEnsureTriggerElement = function() {
        return clearInterval(this._ensureTriggerElementTimeoutId)
    }, t
}(), vendors = ["khtml", "ms", "o", "moz", "webkit"], Opentip.prototype.setCss3Style = function(t, e) {
    var i, o, s, n, r;
    t = this.adapter.unwrap(t), r = [];
    for(i in e) __hasProp.call(e, i) && (o = e[i], t.style[i] != null ? r.push(t.style[i] = o) : r.push(function() {
        var e, r, a;
        for(a = [], e = 0, r = vendors.length; r > e; e++) s = vendors[e], n = "" + this.ucfirst(s) + this.ucfirst(i), t.style[n] != null ? a.push(t.style[n] = o) : a.push(void 0);
        return a
    }.call(this)));
    return r
}, Opentip.prototype.defer = function(t) {
    return setTimeout(t, 0)
}, Opentip.prototype.setTimeout = function(t, e) {
    return setTimeout(t, e ? e * 1e3 : 0)
}, Opentip.prototype.ucfirst = function(t) {
    return t == null ? "" : t.charAt(0).toUpperCase() + t.slice(1)
}, Opentip.prototype.dasherize = function(t) {
    return t.replace(/([A-Z])/g, function(t, e) {
        return "-" + e.toLowerCase()
    })
}, mousePositionObservers = [], mousePosition = {
    x: 0,
    y: 0
}, mouseMoved = function(t) {
    var e, i, o, s;
    for(mousePosition = Opentip.adapter.mousePosition(t), s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], s.push(e());
    return s
}, Opentip.followMousePosition = function() {
    return Opentip.adapter.observe(document.body, "mousemove", mouseMoved)
}, Opentip._observeMousePosition = function(t) {
    return mousePositionObservers.push(t)
}, Opentip._stopObservingMousePosition = function(t) {
    var e;
    return mousePositionObservers = function() {
        var i, o, s;
        for(s = [], i = 0, o = mousePositionObservers.length; o > i; i++) e = mousePositionObservers[i], e !== t && s.push(e);
        return s
    }()
}, Opentip.Joint = function() {
    function t(t) {
        t != null && (t instanceof Opentip.Joint && (t += ""), this.set(t))
    }
    return t.prototype.set = function(t) {
        return t = t.toLowerCase(), this.setHorizontal(t), this.setVertical(t), this
    }, t.prototype.setHorizontal = function(t) {
        var e, i, o, s, n, r, a;
        for(i = ["left", "center", "right"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.horizontal = e.toLowerCase());
        for(this.horizontal == null && (this.horizontal = "center"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.horizontal === e ? e : void 0);
        return a
    }, t.prototype.setVertical = function(t) {
        var e, i, o, s, n, r, a;
        for(i = ["top", "middle", "bottom"], o = 0, n = i.length; n > o; o++) e = i[o], ~t.indexOf(e) && (this.vertical = e.toLowerCase());
        for(this.vertical == null && (this.vertical = "middle"), a = [], s = 0, r = i.length; r > s; s++) e = i[s], a.push(this[e] = this.vertical === e ? e : void 0);
        return a
    }, t.prototype.eql = function(t) {
        return t != null && this.horizontal === t.horizontal && this.vertical === t.vertical
    }, t.prototype.flip = function() {
        var t, e;
        return e = Opentip.position[this.toString(!0)], t = (e + 4) % 8, this.set(Opentip.positions[t]), this
    }, t.prototype.toString = function(t) {
        var e, i;
        return t == null && (t = !1), i = this.vertical === "middle" ? "" : this.vertical, e = this.horizontal === "center" ? "" : this.horizontal, i && e && (e = t ? Opentip.prototype.ucfirst(e) : " " + e), "" + i + e
    }, t
}(), Opentip.prototype._positionsEqual = function(t, e) {
    return t != null && e != null && t.left === e.left && t.top === e.top
}, Opentip.prototype._dimensionsEqual = function(t, e) {
    return t != null && e != null && t.width === e.width && t.height === e.height
}, Opentip.prototype.debug = function() {
    var t;
    return t = arguments.length >= 1 ? __slice.call(arguments, 0) : [], Opentip.debug && (typeof console != "undefined" && console !== null ? console.debug : void 0) != null ? (t.unshift("#" + this.id + " |"), console.debug.apply(console, t)) : void 0
}, Opentip.findElements = function() {
    var t, e, i, o, s, n, r, a, h, p;
    for(t = Opentip.adapter, h = t.findAll(document.body, "[data-ot]"), p = [], r = 0, a = h.length; a > r; r++) {
        i = h[r], n = {}, e = t.data(i, "ot"), (e === "" || e === "true" || e === "yes") && (e = t.attr(i, "title"), t.attr(i, "title", "")), e = e || "";
        for(o in Opentip.styles.standard) s = t.data(i, "ot" + Opentip.prototype.ucfirst(o)), s != null && (s === "yes" || s === "true" || s === "on" ? s = !0 : (s === "no" || s === "false" || s === "off") && (s = !1), n[o] = s);
        p.push(new Opentip(i, e, n))
    }
    return p
}, Opentip.version = "2.4.6", Opentip.debug = !1, Opentip.lastId = 0, Opentip.lastZIndex = 100, Opentip.tips = [], Opentip._abortShowingGroup = function(t, e) {
    var i, o, s, n, r;
    for(n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i._abortShowing()) : r.push(void 0);
    return r
}, Opentip._hideGroup = function(t, e) {
    var i, o, s, n, r;
    for(n = Opentip.tips, r = [], o = 0, s = n.length; s > o; o++) i = n[o], i !== e && i.options.group === t ? r.push(i.hide()) : r.push(void 0);
    return r
}, Opentip.adapters = {}, Opentip.adapter = null, firstAdapter = !0, Opentip.addAdapter = function(t) {
    return Opentip.adapters[t.name] = t, firstAdapter ? (Opentip.adapter = t, t.domReady(Opentip.findElements), t.domReady(Opentip.followMousePosition), firstAdapter = !1) : void 0
}, Opentip.positions = ["top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"], Opentip.position = {}, _ref = Opentip.positions, i = _i = 0, _len = _ref.length; _len > _i; i = ++_i) position = _ref[i], Opentip.position[position] = i;
Opentip.styles = {
    standard: {
        "extends": null,
        title: void 0,
        escapeTitle: !0,
        escapeContent: !1,
        className: "standard",
        stem: !0,
        delay: null,
        hideDelay: .1,
        fixed: !1,
        showOn: "mouseover",
        hideTrigger: "trigger",
        hideTriggers: [],
        hideOn: null,
        removeElementsOnHide: !1,
        offset: [0, 0],
        containInViewport: !0,
        autoOffset: !0,
        showEffect: "appear",
        hideEffect: "fade",
        showEffectDuration: .3,
        hideEffectDuration: .2,
        stemLength: 5,
        stemBase: 8,
        tipJoint: "top left",
        target: null,
        targetJoint: null,
        cache: !0,
        ajax: !1,
        ajaxMethod: "GET",
        ajaxErrorMessage: "There was a problem downloading the content.",
        group: null,
        style: null,
        background: "#fff18f",
        backgroundGradientHorizontal: !1,
        closeButtonOffset: [5, 5],
        closeButtonRadius: 7,
        closeButtonCrossSize: 4,
        closeButtonCrossColor: "#d2c35b",
        closeButtonCrossLineWidth: 1.5,
        closeButtonLinkOverscan: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#f2e37b",
        shadow: !0,
        shadowBlur: 10,
        shadowOffset: [3, 3],
        shadowColor: "rgba(0, 0, 0, 0.1)"
    },
    glass: {
        "extends": "standard",
        className: "glass",
        background: [
            [0, "rgba(252, 252, 252, 0.8)"],
            [.5, "rgba(255, 255, 255, 0.8)"],
            [.5, "rgba(250, 250, 250, 0.9)"],
            [1, "rgba(245, 245, 245, 0.9)"]
        ],
        borderColor: "#eee",
        closeButtonCrossColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 15,
        closeButtonRadius: 10,
        closeButtonOffset: [8, 8]
    },
    dark: {
        "extends": "standard",
        className: "dark",
        borderRadius: 13,
        borderColor: "#444",
        closeButtonCrossColor: "rgba(240, 240, 240, 1)",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: [2, 2],
        background: [
            [0, "rgba(30, 30, 30, 0.7)"],
            [.5, "rgba(30, 30, 30, 0.8)"],
            [.5, "rgba(10, 10, 10, 0.8)"],
            [1, "rgba(10, 10, 10, 0.9)"]
        ]
    },
    alert: {
        "extends": "standard",
        className: "alert",
        borderRadius: 1,
        borderColor: "#AE0D11",
        closeButtonCrossColor: "rgba(255, 255, 255, 1)",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: [2, 2],
        background: [
            [0, "rgba(203, 15, 19, 0.7)"],
            [.5, "rgba(203, 15, 19, 0.8)"],
            [.5, "rgba(189, 14, 18, 0.8)"],
            [1, "rgba(179, 14, 17, 0.9)"]
        ]
    }
}, Opentip.defaultStyle = "standard", typeof module != "undefined" && module !== null ? module.exports = Opentip : window.Opentip = Opentip;
var __slice = [].slice;
(function(t) {
    var e;
    return t.fn.opentip = function(t, e, i) {
        return new Opentip(this, t, e, i)
    }, e = function() {
        function e() {}
        return e.prototype.name = "jquery", e.prototype.domReady = function(e) {
            return t(e)
        }, e.prototype.create = function(e) {
            return t(e)
        }, e.prototype.wrap = function(e) {
            if(e = t(e), e.length > 1) throw Error("Multiple elements provided.");
            return e
        }, e.prototype.unwrap = function(e) {
            return t(e)[0]
        }, e.prototype.tagName = function(t) {
            return this.unwrap(t).tagName
        }, e.prototype.attr = function() {
            var e, i, o;
            return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).attr.apply(o, e)
        }, e.prototype.data = function() {
            var e, i, o;
            return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], (o = t(i)).data.apply(o, e)
        }, e.prototype.find = function(e, i) {
            return t(e).find(i).get(0)
        }, e.prototype.findAll = function(e, i) {
            return t(e).find(i)
        }, e.prototype.update = function(e, i, o) {
            return e = t(e), o ? e.text(i) : e.html(i)
        }, e.prototype.append = function(e, i) {
            return t(e).append(i)
        }, e.prototype.remove = function(e) {
            return t(e).remove()
        }, e.prototype.addClass = function(e, i) {
            return t(e).addClass(i)
        }, e.prototype.removeClass = function(e, i) {
            return t(e).removeClass(i)
        }, e.prototype.css = function(e, i) {
            return t(e).css(i)
        }, e.prototype.dimensions = function(e) {
            return {
                width: t(e).outerWidth(),
                height: t(e).outerHeight()
            }
        }, e.prototype.scrollOffset = function() {
            return [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop]
        }, e.prototype.viewportDimensions = function() {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }, e.prototype.mousePosition = function(t) {
            return t == null ? null : {
                x: t.pageX,
                y: t.pageY
            }
        }, e.prototype.offset = function(e) {
            var i;
            return i = t(e).offset(), {
                left: i.left,
                top: i.top
            }
        }, e.prototype.observe = function(e, i, o) {
            return t(e).bind(i, o)
        }, e.prototype.stopObserving = function(e, i, o) {
            return t(e).unbind(i, o)
        }, e.prototype.ajax = function(e) {
            var i, o;
            if(e.url == null) throw Error("No url provided");
            return t.ajax({
                url: e.url,
                type: (i = (o = e.method) != null ? o.toUpperCase() : void 0) != null ? i : "GET"
            }).done(function(t) {
                return typeof e.onSuccess == "function" ? e.onSuccess(t) : void 0
            }).fail(function(t) {
                return typeof e.onError == "function" ? e.onError("Server responded with status " + t.status) : void 0
            }).always(function() {
                return typeof e.onComplete == "function" ? e.onComplete() : void 0
            })
        }, e.prototype.clone = function(e) {
            return t.extend({}, e)
        }, e.prototype.extend = function() {
            var e, i;
            return i = arguments[0], e = arguments.length >= 2 ? __slice.call(arguments, 1) : [], t.extend.apply(t, [i].concat(__slice.call(e)))
        }, e
    }(), Opentip.addAdapter(new e)
})(jQuery);

/* dt-main: (http://5a4ed3e611bcf.t73.qifeiye.com/qfy-content/themes/qfy-01/js/main.js) */
//悬浮效果
(function($) {
    $.fn.floatAd = function(l) {
        var m = {
            customhtml: "",
            close: 1,
            closeHTML: "",
            speed: 30,
            id_class: "",
            x: "0",
            y: "0"
        };
        var n = false;
        var l = $.extend(m, l);
        var o = "<div id='qfy_float_ad' class='" + l.id_class + "' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";
        o += l.customhtml;
        if(l.close == "1") {
            if(l.closeHTML == "") {
                o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>关闭</div></div>"
            } else {
                o += "<div id='qfy_close_f_ad' class='" + l.id_class + "' >" + l.closeHTML + "</div></div>"
            }
        }
        $('body').append(o);

        function qfy_ad_init() {
            var x = l.x,
                y = l.y + $(window).scrollTop();
            var g = true,
                yin = true;
            var h = 1;
            var i = 10;
            var j = $("#qfy_float_ad." + l.id_class);
            var k = function() {
                var L = 0,
                    T = $(window).scrollTop();
                var a = j.width();
                var b = j.height();
                var c = $(window).width();
                var d = $(window).height() + $(window).scrollTop();
                x = x + h * (g ? 1 : -1);
                if(x < L) {
                    g = true;
                    x = L
                }
                if(x > c - a - 1) {
                    g = false;
                    x = c - a - 1
                }
                y = y + h * (yin ? 1 : -1);
                if(y > d - b - 10) {
                    yin = false;
                    y = d - b - 10
                }
                if(y < T) {
                    yin = true;
                    y = T
                }
                var e = x;
                var f = y;
                j.css({
                    'top': f,
                    'left': e
                })
            };
            n = setInterval(k, l.speed);
            $('#qfy_float_ad.' + l.id_class).mouseover(function() {
                if(n) {
                    clearInterval(n)
                }
            });
            $('#qfy_float_ad.' + l.id_class).mouseout(function() {
                n = setInterval(k, l.speed)
            })
        }
        qfy_ad_init();
        $('#qfy_close_f_ad.' + l.id_class).click(function() {
            $('#qfy_float_ad.' + l.id_class + ',#QFY_overlay.' + l.id_class).remove();
            clearInterval(n)
        })
    }
})(jQuery);

//背景图片自适应
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($) {
    function coverFillSwitch(container, img, invert) {
        if(!container || !img) {
            return false
        }
        var imgHeight = img.naturalHeight || img.videoHeight;
        var imgWidth = img.naturalWidth || img.videoWidth;
        var containerRatio = container.offsetWidth / container.offsetHeight;
        var imgRatio = imgWidth / imgHeight;
        var ratioComparison = false;
        if(imgRatio >= containerRatio) {
            ratioComparison = true
        }
        if(invert) {
            ratioComparison = !ratioComparison
        }
        if(ratioComparison) {
            img.style.height = "100%";
            img.style.width = "auto"
        } else {
            img.style.height = "auto";
            img.style.width = "100%"
        }
    }

    function objectFitResize() {
        var i, img, container;
        var imgsCover = document.getElementsByClassName("section-background-video");
        for(i = 0; i < imgsCover.length; i++) {
            img = imgsCover[i];
            container = img.parentElement;
            if(container.classList.contains("background-media")) {
                coverFillSwitch(container, img)
            }
        }
    }

    function applyStandardProperties(container, img) {
        var containerStyle = window.getComputedStyle(container);
        if(containerStyle.overflow !== "hidden") {
            container.style.overflow = "hidden"
        }
        if(containerStyle.position !== "relative" && containerStyle.position !== "absolute" && containerStyle.position !== "fixed") {
            container.style.position = "relative"
        }
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%,-50%)"
    }

    function objectFitInt() {
        var imgs = document.getElementsByClassName("section-background-video");
        for(var i = 0; i < imgs.length; i++) {
            var type = "cover";
            var img = imgs[i];
            var container = img.parentElement;
            switch(type) {
                case "container":
                    break;
                case "cover":
                    coverFillSwitch(container, img);
                    applyStandardProperties(container, img);
                    break;
                case "contain":
                    coverFillSwitch(container, img, true);
                    applyStandardProperties(container, img);
                    break;
                case "fill":
                    img.style.height = "100%";
                    img.style.width = "100%";
                    applyStandardProperties(container, img);
                    break;
                case "none":
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img);
                    break;
                case "scale-down":
                    img.style.maxHeight = "100%";
                    img.style.maxWidth = "100%";
                    img.style.height = "auto";
                    img.style.width = "auto";
                    applyStandardProperties(container, img);
                    break;
                default:
                    break
            }
        }
    }
    var resizeTimeout;

    function resizeThrottler() {
        if(!resizeTimeout) {
            resizeTimeout = setTimeout(function() {
                resizeTimeout = null;
                objectFitResize()
            }, 66)
        }
    }
    if("objectFit" in document.documentElement.style === false && top == self) {
        window.addEventListener("load", objectFitInt, false);
        window.addEventListener("resize", resizeThrottler, false)
    }
})(jQuery);


var last_size_mobile = false;
var size_mobile = false;

/*=============判断是手机还是pc===*/
function resizeDefaultObjSize() {
    if(dtGlobals.isMobile == false) {
        if(jQuery("body").width() < 768) {
            size_mobile = "mobile";
            if(!last_size_mobile) last_size_mobile = "mobile";
        } else {
            size_mobile = "pc";
            if(!last_size_mobile) last_size_mobile = "pc";
        }
        if(size_mobile != last_size_mobile) {
            last_size_mobile = size_mobile;
            jQuery(".qfy-element").each(function() {
                var m_padding = jQuery(this).attr("m-padding");
                var p_padding = jQuery(this).attr("p-padding");
                if(size_mobile == "mobile") {
                    if(m_padding) {
                        jQuery(this).css("padding", m_padding);
                    }
                } else {
                    if(p_padding) {
                        jQuery(this).css("padding", p_padding);
                    }
                }

            });

        }
    }

    if(jQuery(".qfe_map_wraper iframe").length > 0) {
        jQuery(".qfe_map_wraper iframe").each(function() {
            var oh = jQuery(this).parent().attr("style");
            if(typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if(width > 0) {
                    jQuery(this).parent().height((width * 2 / 4) + "px");
                }
            }
        })
    }
    if(jQuery(".vc_bit_raw_video").length > 0) {
        jQuery(".vc_bit_raw_video").each(function() {
            var oh = jQuery(this).attr("style");
            if(typeof(oh) == "undefined") {
                var width = jQuery(this).width();
                if(width > 0) {
                    jQuery(this).height((width * 2 / 4) + "px");
                }
            }
        })
    }
    column_init_align();
}



function mobile_menu_fix() {
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if(top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery("#dl-menu").addClass("positionFixed");
        } else if(top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery("#dl-menu").removeClass("positionFixed");
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function mobile_menu_fix_2() {
    var top_scrTop = 0,
        top_scrDir = 0,
        top_scrUp = false,
        top_scrDown = false,
        top_isMoved = false;
    var top_threshold = jQuery(".dl-menu-fixedheader").height();

    jQuery(window).on("scroll", function() {
        var top_tempCSS = {},
            top_tempScrTop = jQuery(window).scrollTop();

        top_scrDir = top_tempScrTop - top_scrTop;

        if(top_tempScrTop > top_threshold && top_isMoved === false) {
            top_isMoved = true;
            jQuery(".dl-menu-fixedheader").css("position", "fixed");
            jQuery(".dl-menu-fixedheader").css("background", "#ddd");
            jQuery("body").addClass("fixedheadering");
        } else if(top_tempScrTop <= top_threshold && top_isMoved === true) {
            top_isMoved = false;
            jQuery(".dl-menu-fixedheader").css("position", "relative");
            jQuery("body").removeClass("fixedheadering");
        };
        top_scrTop = jQuery(window).scrollTop();

    });
}

function _image_popup_flexslider(startAt) {
    jQuery(".image_popup .qfe_flexslider").flexslider({
        animation: "slide",
        slideshow: false,
        slideshowSpeed: 10000,
        sliderSpeed: 800,
        controlNav: 1,
        directionNav: 1,
        smoothHeight: true,
        startAt: startAt,
        start: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if(localvideo.length > 0) {
                if(localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if(videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
        before: function() {

        },
        after: function() {
            var localvideo = jQuery(".image_popup .flex-active-slide video.localvideo");
            if(localvideo.length > 0) {
                if(localvideo.get(0).currentTime == 0) {
                    jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
                }
            }
            var videoiframe = jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
            if(videoiframe.length > 0 && !videoiframe.attr("src")) {
                videoiframe.attr("src", videoiframe.attr("data-src"));
            }
        },
    });
}

//*==============定义鼠标滑过时间*/
function initmouseover() {

    jQuery(".mouseHover").live({
        mouseenter: function() {
            jQuery(this).addClass("hover");

        },
        mouseleave: function() {
            jQuery(this).removeClass("hover");
        }
    });
    jQuery("a.bitButton").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if(delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if(texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if(iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if(backgroundhovercolor) {
                jQuery(this).css("background", backgroundhovercolor);
                jQuery(this).css("transition", str);
                jQuery(this).removeAttr('onmouseover');
                jQuery(this).removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if(borderhovercolor) {
                jQuery(this).css("border", "1px solid " + borderhovercolor);
                jQuery(this).css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if(textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if(iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if(backgroundcolor) {
                jQuery(this).css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if(bordercolor) {
                jQuery(this).css("border-color", bordercolor);
            }
        }
    });

    jQuery("a.bitIcon").live({
        mouseenter: function() {
            var delay = jQuery(this).attr("delay");
            var str = "";
            if(delay && delay != "0") {
                str = "all " + delay + " linear";
            }
            var texthovercolor = jQuery(this).attr("texthovercolor");
            if(texthovercolor) {
                jQuery(this).find(".iconText").css("color", texthovercolor);
                jQuery(this).find(".iconText").css("transition", str);
            }
            var iconhovercolor = jQuery(this).attr("iconhovercolor");
            if(iconhovercolor) {
                jQuery(this).find("i.glyphicon").css("color", iconhovercolor);
                jQuery(this).find("i.glyphicon").css("transition", str);
            }
            var backgroundhovercolor = jQuery(this).attr("backgroundhovercolor");
            if(backgroundhovercolor) {
                jQuery(this).find("b").css("background", backgroundhovercolor);
                jQuery(this).find("b").css("transition", str);
                jQuery(this).find("b").removeAttr('onmouseover');
                jQuery(this).find("b").removeAttr('onmouseout');
            }
            var borderhovercolor = jQuery(this).attr("borderhovercolor");
            if(borderhovercolor) {
                jQuery(this).find("b").css("border", "1px solid " + borderhovercolor);
                jQuery(this).find("b").css("transition", str);
            }
        },
        mouseleave: function() {
            jQuery(this).css("transition", "");
            var textcolor = jQuery(this).attr("textcolor");
            if(textcolor) {
                jQuery(this).find(".iconText").css("color", textcolor);
            }
            var iconcolor = jQuery(this).attr("iconcolor");
            if(iconcolor) {
                jQuery(this).find("i.glyphicon").css("color", iconcolor);
            }
            var backgroundcolor = jQuery(this).attr("backgroundcolor");
            if(backgroundcolor) {
                jQuery(this).find("b").css("background", backgroundcolor);
            }
            var bordercolor = jQuery(this).attr("bordercolor");
            if(bordercolor) {
                jQuery(this).find("b").css("border-color", bordercolor);
            }
        }
    });
    jQuery("a.qfy_popup").live({
        click: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var popupmodel = jQuery(this).attr("data-popup-model");
            var popupstyle = jQuery(this).attr("data-popup-style");
            var popupsize = jQuery(this).attr("data-popup-size");
            var bodywidth = jQuery("body").width();
            var bodyheight = jQuery(window).height();

            if(popupstyle == "0" || popupstyle == "1") {
                if(popupsize == "0.8") {
                    var width = bodywidth * 0.8;
                    var height = bodyheight * 0.8;
                    var toppx = bodyheight * 0.1;
                    var leftpx = bodywidth * 0.1;
                } else if(popupsize == "0.6") {
                    var width = bodywidth * 0.6;
                    var height = bodyheight * 0.6;
                    var toppx = bodyheight * 0.2;
                    var leftpx = bodywidth * 0.2;
                } else if(popupsize == "0.4") {
                    var width = bodywidth * 0.4;
                    var height = bodyheight * 0.4;
                    var toppx = bodyheight * 0.3;
                    var leftpx = bodywidth * 0.3;
                }
            } else if(popupstyle == "2") {
                if(popupsize == "0.8") {
                    var width = bodywidth * 0.5;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.25;
                } else if(popupsize == "0.6") {
                    var width = bodywidth * 0.3;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.35;
                } else if(popupsize == "0.4") {
                    var width = bodywidth * 0.2;
                    var height = bodyheight * 0.5;
                    var toppx = bodyheight * 0.25;
                    var leftpx = bodywidth * 0.4;
                }
            }
            var defaultpadding = "padding:40px;";
            if(width < 480) {
                width = 320;
                leftpx = (bodywidth - 320) * 0.5;
                if(popupstyle == "1") popupstyle = "2";
                if(popupstyle != "2") {
                    height = 250;
                    toppx = (bodyheight - 250) * 0.5;
                }
                defaultpadding = "padding:10px;";
            }
            var allmessage = "";
            var startAt = 0;
            if(popupmodel == "0") {
                var default_img = jQuery(this).attr("data-href");
                var title = jQuery(this).attr("data-ptitle");
                var subtitle = jQuery(this).attr("data-subtitle");
                var desc = jQuery(this).attr("data-desc");
                var isvideo = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").length;
                var isyunvideo = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
                var video_html = "";
                var videoclass = "";
                if(isvideo) {
                    videoclass = "video";
                    var video_html = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").prop("outerHTML");
                    video_html = jQuery(video_html).attr("controls", "controls").attr("class", "localvideo simple").attr("style", "width:100%;height:100%;background:#000;").prop("outerHTML");

                } else if(isyunvideo) {
                    videoclass = "video";
                    var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
                    var videoheight = height;
                    if(popupstyle == "2") {
                        videoheight = 0.6 * height;
                    }
                    video_html = jQuery(video_html).attr("data-height", videoheight).attr("data-autoplay", "true").attr("src", jQuery(video_html).attr("data-src")).prop("outerHTML");
                }
                if(default_img || video_html) {
                    var message = "";
                    if(popupstyle == "0") {
                        message = '<div class="pop_image pop_image1 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;">' + video_html + '<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="content" style="color:#ccc;font-size:14px;">' + desc + '</div></div></div>';
                    } else if(popupstyle == "1") {
                        message = '<div class="pop_image pop_image2 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">' + video_html + '</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div> </div>';
                    } else if(popupstyle == "2") {
                        message = '<div class="pop_image pop_image3 ' + videoclass + '" style="width:' + width + 'px;word-wrap: break-word;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">' + video_html + '</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;' + defaultpadding + 'text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div>  </div>';
                    }
                    allmessage = '<div class="image_popup" style="position:relative;">' + message + '<div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
                }

            } else {
                var p = jQuery(this).closest(".qfy-element");
                var $thispost = jQuery(this).closest(".qfy_item_post");

                var message = "";
                p.find(".qfy_item_post:visible").each(function(i) {
                    if(jQuery(this)[0] === $thispost[0]) {
                        startAt = i;
                    }
                    $this = jQuery(this).find("a.qfy_popup:first");
                    var default_img = $this.attr("data-href");
                    var title = $this.attr("data-ptitle");
                    var subtitle = $this.attr("data-subtitle");
                    var desc = $this.attr("data-desc");
                    var video_html = "";
                    var isvideo = jQuery(this).find("video.qfyvideo").length;
                    var isyunvideo = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
                    var videoclass = "";
                    if(isvideo) {
                        var video_html = jQuery(this).find("video.qfyvideo").prop("outerHTML");
                        video_html = jQuery(video_html).attr("controls", "controls").attr("class", "localvideo").attr("style", "width:100%;height:100%;background:#000;").prop("outerHTML");
                        videoclass = "video";
                    } else if(isyunvideo) {
                        var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
                        videoclass = "video";
                        var videoheight = height;
                        if(popupstyle == "2") {
                            videoheight = 0.6 * height;
                        }
                        video_html = jQuery(video_html).attr("data-height", videoheight).attr("data-autoplay", "true").prop("outerHTML");

                    }
                    if(default_img || video_html) {
                        if(popupstyle == "0") {
                            message += '<li><div class="pop_image pop_image1 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;">' + video_html + '<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="content" style="color:#ccc;font-size:14px;">' + desc + '</div></div></div></li>';
                        } else if(popupstyle == "1") {
                            message += '<li><div class="pop_image pop_image2 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">' + video_html + '</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div> </div></li>';
                        } else if(popupstyle == "2") {
                            message += '<li><div class="pop_image pop_image3 ' + videoclass + '" style="position:relative;word-wrap: break-word;width:' + width + 'px;height:' + height + 'px;"><div style="background-image:url(' + default_img + ');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">' + video_html + '</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;padding:40px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">' + title + '</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">' + subtitle + '</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">' + desc + '</div></div>  </div></li>';
                        }
                    }
                });
                allmessage = '<div class="image_popup" style="position:relative;"><div  class="qfe_flexslider flexslider_slide flexslider" data-interval="30" data-flex_fx="slide" data-bottom_nav="1" data-direction="1"><ul class="slides">' + message + '</ul> </div><div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
            }
            if(allmessage) {
                jQuery.blockUI({
                    onOverlayClick: jQuery.unblockUI,
                    overlayCSS: {
                        backgroundColor: '#000',
                        opacity: 0.8,
                        cursor: 'pointer',
                        "z-index": "9400",
                    },
                    css: {
                        "top": toppx + "px",
                        "left": leftpx,
                        width: width + "px",
                        height: height + "px",
                        cursor: 'pointer',
                        "border": "0",
                        "z-index": "9401"
                    },
                    message: allmessage
                });
                jQuery(".localvideo.simple").attr("autoplay", "autoplay");
                jQuery('.block-close').css('cursor', 'pointer').unbind().click(function() {
                    jQuery.unblockUI();
                });
                if(jQuery(".pop_image2 .content.overflowy").length > 0) {
                    var h = jQuery(".pop_image2").height();
                    var head = jQuery(".pop_image2 .head").height() + jQuery(".pop_image2 .subhead").height();
                    jQuery(".pop_image2 .content.overflowy").height(h - head - 60);
                } else if(jQuery(".pop_image3 .content.overflowy").length > 0) {
                    var h = jQuery(".content_inner").height();
                    var head = jQuery(".pop_image3 .head").height() + jQuery(".pop_image3 .subhead").height();
                    jQuery(".pop_image3 .content.overflowy").height(h - head);
                }

                if(jQuery(".image_popup .qfe_flexslider").length > 0) {
                    if(typeof jQuery.fn.flexslider == "undefined") {
                        jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
                            jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
                            _image_popup_flexslider(startAt);
                        })
                    } else {
                        _image_popup_flexslider(startAt);
                    }
                }
            }
        }
    });

    jQuery("a.qfy_thickbox").live({
        click: function(e) {
            e.preventDefault();
            if(top.jQuery(".qfy_gallerys").length > 0) {
                return false;
            }
            var default_img = jQuery(this).attr("href");
            var thumbPath = jQuery(this).attr("thumbPath");
            if(!thumbPath) thumbPath = default_img;
            var i = 0;
            var qfy_imglists = Array();
            jQuery("a.qfy_thickbox").each(function() {
                var href = jQuery(this).attr("href");
                var thumbPath = jQuery(this).attr("thumbPath");
                if(!thumbPath) thumbPath = href;

                if(href != default_img && href != undefined) {
                    qfy_imglists[i] = href + "|^|" + thumbPath;
                    i++;
                }
            })

            top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor=' + encodeURIComponent(dtGlobals.gallery_bgcolor) + '&tfamily=' + encodeURIComponent(dtGlobals.gallery_tfamily) + '&dfamily=' + encodeURIComponent(dtGlobals.gallery_dfamily) + '&blankclose=' + encodeURIComponent(dtGlobals.gallery_blankclose) + '&showthumbs=' + dtGlobals.gallery_showthumbs + '&style=' + dtGlobals.gallery_style + '&autoplay=' + dtGlobals.gallery_autoplay + '&playspeed=' + dtGlobals.gallery_playspeed + '&imagesize=' + dtGlobals.gallery_imagesize + '&stopbutton=' + dtGlobals.gallery_stopbutton + '&thumbsposition=' + dtGlobals.gallery_thumbsposition + '&tsize=' + dtGlobals.gallery_tsize + '&tcolor=' + encodeURIComponent(dtGlobals.gallery_tcolor) + '&dsize=' + dtGlobals.gallery_dsize + '&dcolor=' + encodeURIComponent(dtGlobals.gallery_dcolor) + '&default_img=' + default_img + '&thumbPath=' + thumbPath + '&time=' + Math.random() + '" width="100%" height="100%" border=0 style="border:0;" /></div>')
            top.jQuery(".qfy_gallerys").animate({
                height: "100%"
            });
            return false;
        }
    });

    var body_width = window.screen.width;
    var body_height = window.screen.height;

    if(!jQuery("body").hasClass("compose-mode") && top == self) {
        jQuery("a").each(function() {
            var href = jQuery(this).attr("href");
            if(href) href = href.toLowerCase();
            if(href && href.indexOf("/api/video-server/play.php") > -1) {
                var turl = href.split("?");
                var media_id = 0;
                var se = 0;
                var nonce = 0;
                var width = "800";
                var height = "600";
                var turl2 = turl[1].split("&");
                for(i = 0; i < turl2.length; i++) {
                    var t3 = turl2[i].split("=");
                    if(t3[0] == "media_id") {
                        media_id = t3[1];
                    } else if(t3[0] == "se") {
                        se = t3[1];
                    } else if(t3[0] == "width" && t3[1] != "") {
                        width = t3[1];
                    } else if(t3[0] == "height" && t3[1] != "") {
                        height = t3[1];
                    }
                }
                if(typeof jQuery.blockUI == "undefined") {
                    jQuery.getScript("/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js");
                }

                if(media_id) {
                    jQuery(this).unbind().bind("click", function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        //获取播放权限
                        var url = "/api/video-server/play.php?se=" + se + "&media_id=" + media_id;
                        var bodywidth = jQuery("body").width();
                        var bodyheight = jQuery(window).height();
                        if(bodywidth > width) {
                            top.jQuery.blockUI({
                                css: {
                                    "top": "15%",
                                    "left": "50%",
                                    "margin-left": "-" + (width / 2) + "px",
                                    width: width,
                                    height: height
                                },
                                message: "<iframe class='videoframe' style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='" + height + "' data-controlBarVisibility='hover' data-autoplay='true' src='" + url + "' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"
                            });
                        } else {
                            var h = Math.round(bodywidth * 3 / 4);
                            var toppx = (bodyheight - h) / 2;
                            top.jQuery.blockUI({
                                css: {
                                    "top": toppx + "px",
                                    "left": "0",
                                    width: bodywidth + "px",
                                    height: h + "px"
                                },
                                message: "<iframe class='videoframe'  style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='" + h + "' data-controlBarVisibility='hover' data-autoplay='true' src='" + url + "' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:7px;color:#fff;'>✕</div>"
                            });
                        }
                        top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function() {
                            top.jQuery.unblockUI();
                        });
                        top.jQuery('.blockUI.blockMsg').unbind().draggable({
                            handle: ".block-move"
                        });
                        top.jQuery('body,.blockOverlay').css('cursor', 'auto');

                        return false;
                    });
                }
            } else if(href && href.indexOf("iframe.php?video_mp4_local=") > -1 && href.indexOf("size=") > -1 && href.indexOf("&auto=") > -1) {
                jQuery(this).addClass("thickbox");
                var auto = true;
                var full = true;
                var width = body_width;
                var height = body_height;
                var color = "#000";
                var opacity = "";
                var id = 0;
                var t1 = href.split("&");
                for(i = 0; i < t1.length; i++) {
                    var t2 = t1[i].split("=");
                    if(t2[0] == "size") {
                        if(t2[1] == "big") {
                            width = width * 0.8;
                            height = height * 0.6;
                            full = false;
                        } else if(t2[1] == "middle") {
                            width = width * 0.6;
                            height = height * 0.4;
                            full = false;
                        } else if(t2[1] == "small") {
                            width = width * 0.4;
                            height = width * 0.8;
                            full = false;
                        } else if(t2[1] == "less") {
                            width = width * 0.3;
                            height = height * 0.2;
                            full = false;
                        } else if(t2[1] == "full") {
                            width = width;
                            height = height * 0.7;
                            full = true;
                        }
                    } else if(t2[0] == "auto") {
                        if(t2[1] == "1") {
                            auto = true;
                        } else {
                            auto = false;
                        }
                    } else if(t2[0] == "color") {
                        color = decodeURIComponent(t2[1]);
                    } else if(t2[0] == "opacity") {
                        opacity = t2[1];
                    }
                }
                var newhref = href + "&video_volume=50&video_fullscreen=" + full + "&video_auto=" + auto + "&ispopup=1&video_theme=maccaco&video_bgcolor=%23000&KeepThis=true&TB_iframe=true&height=" + height + "&width=" + width;

                jQuery(this).attr("href", newhref).unbind().bind("click", function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if(full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 100);
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if(full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 400);
                    setTimeout(function() {
                        jQuery("#TB_overlay:visible").css("background-color", color).css("opacity", opacity);
                        jQuery("#TB_window:visible iframe").css("background-color", color);
                        if(full) {
                            jQuery("#TB_window:visible").addClass("full");
                        }
                    }, 800);

                })
            }

        })
    }

}

/*==手机端===*/
function vc_element_init() {
    if(dtGlobals.isMobile == false && jQuery("body").width() < 768) {
        jQuery(".qfy-element").each(function() {
            var m_padding = jQuery(this).attr("m-padding");
            if(m_padding) {
                jQuery(this).css("padding", m_padding);
            }
        });
    }
}


/*====手机端==*/
function column_init_align() {
    var w = jQuery("body").width();
    jQuery('.qfy-column-inner.column_middle').each(function() {
        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var section = jQuery(this).closest("section.section");
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");
        var pheight = section.height();
        var padding = 0;
        if(pheight < heigth) pheight = heigth;
        if(t1 > 0 || t2 > 0) {
            if((pheight * 1 - heigth) < (t1 - t2)) {
                if(pheight * 1 == heigth) {
                    padding = (t2 * 1 - t1 * 1) / 2;
                } else {
                    padding = (t2 * 1 - t1 * 1 - heigth) / 2;
                }
            } else if((pheight * 1 - heigth) < (t2 - t1)) {
                padding = t2 * 1 - t1 * 1 + (heigth - pheight) / 2;
            } else {
                padding = (t2 * 1 - t1 * 1) / 2;
            }
        }

        if(jQuery(this).siblings(".qfy-column-inner").length > 0) {
            if(w > 760) {
                jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
            }
        } else {
            jQuery(this).css("margin-top", ((pheight - heigth) / 2 + padding) + "px");
        }

    })
    jQuery('.qfy-column-inner.column_bottom').each(function() {
        var section = jQuery(this).closest("section.section");
        jQuery(this).css("margin-top", 0).css("margin-bottom", 0);
        var heigth = jQuery(this).height();
        var t1 = section.css("padding-top").replace("px", "");
        var t2 = section.css("padding-bottom").replace("px", "");
        var pheight = section.height();
        if(pheight < heigth) pheight = heigth;

        if(section.find(".qfy-column-inner").length > 1) {
            if(w > 760) {
                jQuery(this).css("margin-top", (pheight - heigth) + "px");
            }
        } else {
            jQuery(this).css("margin-top", (pheight - heigth) + "px");
        }
    })
}

jQuery(window).load(function() {
    if(top == self) {
        resizeDefaultObjSize();
    }
});

//第二导航的出现
jQuery(document).ready(function($) {
    //滚动...
    if($("#phantom").css("display") == "block") {
        var floatMenuH = $("#phantom").height();
    } else {
        var floatMenuH = 0;
    }
    var urlHash = "#" + window.location.href.split("#")[1];
    if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
        if(urlHash != "#undefined") {
            $("html, body").animate({
                scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
            }, 600, function() {
                $("body").removeClass("is-scroll");
            });
        }
    } else {
        if($(urlHash).length > 0) {
            $("body").addClass("is-scroll");
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: $(urlHash).offset().top
                }, 600, function() {
                    jQuery("#parallax-nav a[href='" + urlHash + "']").closest("li").addClass("active");
                    $("body").removeClass("is-scroll");
                    
                });
            }, 500);

        } else {
           
        }
    }
    //滚动...end
    //...check body
    vc_element_init();
    //图片加载完再执行一下resize
    if(jQuery(".preloadimg:not('.loaded')").length > 0) {
        setTimeout(function() {
            jQuery(".preloadimg:not('.loaded')").each(function() {
                var newurl = jQuery(this).attr("org-src");
                jQuery(this).attr("src", newurl).addClass("loaded").load(function() {
                    resizeDefaultObjSize();
                });
            });
        }, 300);
    }



    if(top == self) {
        $(".qfy-text a[url-flagtarget='_blank']").attr("target", "_blank");
        $(".qfy-text a[url-flagtarget='']").removeAttr("target");
    }
    if(top != self) {
        function closeOpenPanel() {
            if(top.jQuery(".boxy-wrapper:visible").length > 0) {
                top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
            }
            if(parent.jQuery("#qfbody-content>.panel:visible").length > 0) {
                parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
            }
            if(top.jQuery(".bitPopIframe:visible").length > 0) {
                top.jQuery(".bitPopIframe:visible .btn-default").click();
            }
        }
        var ctrlDown = false;
        var escDown = false;
        var ctrlKey = 17,
            vKey = 86,
            cKey = 67,
            escKey = 27,
            zkey = 90,
            ykey = 89;
        $(document).keydown(function(e) {
            if(e.keyCode == escKey) {
                closeOpenPanel();
                top.jQuery.unblockUI();
            }
            if(e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                top.restorePage();
            }
        })
        $(top.document).keydown(function(e) {
            if(e.keyCode == escKey) {
                closeOpenPanel();
            }
            if(e.ctrlKey && (e.keyCode == zkey || e.keyCode == ykey)) {
                top.restorePage();
            }
        })
        $(parent.document).keydown(function(e) {
            if(e.keyCode == escKey) {
                closeOpenPanel();
            }
        })
    } else {
        $(document).keydown(function(e) {
            if(e.keyCode == "27") {
                jQuery.unblockUI();
            }
        })

    }
    $(".dropdown-toggle").unbind("click").bind("click", function() {
        var obj = jQuery(this).parent().find(".dropdown-menu");
        if(obj.css("display") == "none") {
            obj.show();
        } else {
            obj.hide();
        }
    })
    initmouseover();
    resizeDefaultObjSize();

    if(dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;


    if(dtGlobals.isiPhone) {
        $("body").addClass("is-iphone");
    };

    if(top == self) {
        if($(".bitMainTopSider .vc-no-content-helper").length == 0 && $(".bitMainTopSider").length > 0 && $(".bitMainTopSider").height() == 0) {
            $(".bitMainTopSider").parent().parent().remove();
            //$(".bitMainTopSider-wrapper").css("padding-top",0);
        }
    }

    /* !-overlap for webkit*/
    if(!$.browser.webkit || dtGlobals.isMobile) {
        $("body").addClass("not-webkit").removeClass("is-webkit");
    } else {
        $("body").removeClass("not-webkit").addClass("is-webkit");
        //$(".overlap #main").prepend("<div class='main-gradient'></div>");
    };


    $.fn.exists = function() {
        if($(this).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    /* !- Check if element is loaded */
    $.fn.loaded = function(callback, jointCallback, ensureCallback) {
        var len = this.length;
        if(len > 0) {
            return this.each(function() {
                var el = this,
                    $el = $(el),
                    blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

                $el.on("load.dt", function(event) {
                    $(this).off("load.dt");
                    if(typeof callback == "function") {
                        callback.call(this);
                    }
                    if(--len <= 0 && (typeof jointCallback == "function")) {
                        jointCallback.call(this);
                    }
                });

                if(!el.complete || el.complete === undefined) {
                    el.src = el.src;
                } else {
                    $el.trigger("load.dt")
                }
            });
        } else if(ensureCallback) {
            if(typeof jointCallback == "function") {
                jointCallback.call(this);
            }
            return this;
        }
    };

    if(dtGlobals.isWindowsPhone) {
        $("body").addClass("windows-phone");
    }

    $(".mini-nav select").change(function() {
        window.location.href = $(this).val();
    });

    dtGlobals.isHovering = false;

    mainmenu_event();

    /* !-Navigation widget */
    var customTimeoutShow
    $(".custom-nav > li > a").click(function(e) {
        $menuItem = $(this).parent();
        if($menuItem.hasClass("has-children")) e.preventDefault();

        if($(this).attr("class") != "active") {
            $(".custom-nav > li > ul").stop(true, true).slideUp(400);
            $(this).next().stop(true, true).slideDown(500);
            $(".custom-nav > li > a").removeClass("active");
            $(this).addClass('active');
        } else {
            $(this).next().stop(true, true).slideUp(500);
            $(this).removeClass("active");
        }

        $menuItem.siblings().removeClass("act");
        $menuItem.addClass("act");
    });
    $(".custom-nav > li > ul").each(function() {
        clearTimeout(customTimeoutShow);
        $this = $(this);
        $thisChildren = $this.find("li");
        if($thisChildren.hasClass("act")) {
            $this.prev().addClass("active");
            $this.parent().siblings().removeClass("act");
            $this.parent().addClass("act");
            $(this).slideDown(500);
        }
    });
    var mtResizeTimeout;

    $(window).on("resize", function() {
        resizeDefaultObjSize();

        clearTimeout(mtResizeTimeout);
        mtResizeTimeout = setTimeout(function() {
            $(window).trigger("metroresize");
        }, 200);
        try {
            if(parent.jQuery("#mobile_iframe_preivew").length == 1) {
                parent.setMobileDocumentInit();
            }

        } catch(e) {

        }
        if(jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
            var v1 = jQuery("#header #branding").width();
            var v2 = jQuery("#header .assistive-info").width();
            jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");

        }
    });
    try {
        if(parent.jQuery("#mobile_iframe_preivew").length == 1) {
            setTimeout(function() {
                parent.setMobileDocumentInit();
            }, 1000);

        }
    } catch(e) {
        //跨域异常下，document.referrer

        var lang = getQueryString("lang");
        var BodyIsFt = getCookie(JF_cn)
        if(lang == "zh-cn") {
            BodyIsFt = 0;
            setCookie(JF_cn, "", -1);
        }
        if(lang == "zh" || BodyIsFt == "1") {
            setTimeout("StranBody()", 100);
        }

    }

    if(jQuery(".zh_tw_lang").length > 0) {
        StranBody(jQuery(".zh_tw_lang")[0]);
        var href = jQuery(".selected_template_a").attr("href");
        var nhref = Traditionalized(href);
        jQuery(".selected_template_a").attr("href", nhref);
    }

    /*!Scroll to Top*/
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) {
            $('.scroll-top').removeClass('off').addClass('on');
        } else {
            $('.scroll-top').removeClass('on').addClass('off');
        }
    });
    $(".scroll-top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    /*Scroll to Top:end*/

    /*Shopping cart top bar:end*/

    /* !- Skills */
    $.fn.animateSkills = function() {
        $(".skill-value", this).each(function() {
            var $this = $(this),
                $this_data = $this.data("width");

            $this.css({
                width: $this_data + '%'
            });
        });
    };

    // !- Animation "onScroll" loop
    function doAnimation() {

        if(dtGlobals.isMobile) {
            $(".skills").animateSkills();
        }
        if($("html").hasClass("old-ie")) {
            $(".skills").animateSkills();
        };
    };
    // !- Fire animation
    doAnimation();
    /* Skills:end */
    // Create the dropdown base 12.02.14
    $("<select />").prependTo(".mini-nav .menu-select");

    // Create default option "Select"
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "———"
    }).appendTo(".mini-nav .menu-select select");

    // Populate dropdown with menu items
    $(".mini-nav").each(function() {
        var elPar = $(this),
            thisSelect = elPar.find("select");
        $("a", elPar).each(function() {
            var el = $(this);
            $("<option />", {
                "value": el.attr("href"),
                "text": el.text(),
                "data-level": el.attr("data-level")
            }).appendTo(thisSelect);
        });
    });

    $(".mini-nav select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
    $(".mini-nav select option").each(function() {
        var $this = $(this),
            winHref = window.location.href;
        if($this.attr('value') == winHref) {
            $this.attr('selected', 'selected');
        };
    })
    /*!-Appearance for custom select*/
    $('.bitcommerce-ordering-div select').each(function() {
        $(this).customSelect();
    });
    $(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible");

    $(".mini-nav option").each(function() {
        var $this = $(this),
            text = $this.text(),
            prefix = "";

        switch(parseInt($this.attr("data-level"))) {
            case 1:
                prefix = "";
                break;
            case 2:
                prefix = "— ";
                break;
            case 3:
                prefix = "—— ";
                break;
            case 4:
                prefix = "——— ";
                break;
            case 5:
                prefix = "———— ";
                break;
        }
        $this.text(prefix + text);
    });

    /* !Onepage template */
    $(".anchor-link").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");
        var this_offset, that_offset, offset_diff;
        var base_speed = 600,
            speed = base_speed;
        if($(selector).length > 0) {
            var this_offset = $_this.offset(),
                that_offset = $(selector).offset(),
                offset_diff = Math.abs(that_offset.top - this_offset.top),
                speed = (offset_diff * base_speed) / 1000;
        }
        $(this).on('click', function(e) {
            $("body").addClass("is-scroll");
            if($("#phantom").css("display") == "block") {
                var floatMenuH = $("#phantom").height();
            } else {
                var floatMenuH = 0;
            }
            var $_this = $(this),
                selector = $_this.attr("href");
            if(selector == "#") {
                $("html, body").animate({
                    scrollTop: 0
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                    $("html, body").animate({
                        scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                } else {
                    if($(selector).length > 0) {
                        $("html, body").animate({
                            scrollTop: $(selector).offset().top - floatMenuH + 1
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                        });
                    }
                }
            }
            return false;

        });
    });
    jQuery(window).load(function() {
        if(jQuery('#load').length) {
            jQuery('#load').fadeOut().remove();
        }
    });

    if($(".one-page-row").length) {

        function onePageAct() {
            var active_row = $(".one-page-row div:in-viewport[data-anchor^='#']").attr("data-anchor");
            if($('.one-page-row .menu-item a[href=' + active_row + ']').length) {
                $('.one-page-row .menu-item a').parent("li").removeClass('act');
                $('.one-page-row .menu-item a[href=' + active_row + ']').parent("li").addClass('act');
            }
            if(active_row == undefined && $('.one-page-row .menu-item a[href="#"]').length) {
                $('.one-page-row .menu-item a[href="#"]').parent("li").addClass('act');
            }
        };
        onePageAct();
    }

    $("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");

        if(selector && selector.indexOf("#") > -1 && selector != "#") {
            //if(selector.indexOf("#")!=0){
            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            //}

            if(selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    var $_this = $(this),
                        selector = $_this.attr("href");

                    //手机下菜单是#，子菜单无法点击
                    var mobilemenu = $_this.closest("#dl-menu").find("#mobile-menu").length;
                    if(mobilemenu > 0 && $_this.parent().hasClass("has-children")) {
                        var $submenu = $_this.parent().find('ul.dl-submenu:first');
                        if($submenu.length > 0) {
                            var xx = event.pageX;
                            var width = $submenu.width();
                            var isclick = width - xx > 35;
                            if(!isclick) return;
                        }
                    }

                    if($("body >.dl-menuwrapper.floatmenu").length > 0) {
                        $("#dl-menu #mobile-menu .phone-text").click();
                    }

                    $("body").addClass("is-scroll");

                    if($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }

                    //if(selector.indexOf("#")!=0){
                    var tmpselecter = selector.split("#");
                    selector = "#" + tmpselecter[tmpselecter.length - 1];
                    //}
                    $_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
                    var base_speed = 600,
                        speed = base_speed;
                    if(selector.indexOf("=") < 0 && $(selector).length > 0) {
                        var this_offset = $_this.offset(),
                            that_offset = $(selector).offset(),
                            offset_diff = Math.abs(that_offset.top - this_offset.top),
                            speed = (offset_diff * base_speed) / 1000;
                    }

                    $(".one-page-row .menu-item a").parent("li").removeClass("act");
                    if($(".one-page-row").length > 0) {
                        $_this.parent("li").addClass("act");
                    }
                    if(selector == "#" && ($(".one-page-row").length > 0)) {
                        $("html, body").animate({
                            scrollTop: 0
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                            $_this.parent().siblings(".onepage").removeClass("act onepage");
                        });
                    } else {
                        if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                            $("html, body").animate({
                                scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                            }, speed, function() {
                                $("body").removeClass("is-scroll");
                            });
                        } else {
                            if(selector.indexOf("=") < 0 && $(selector).length > 0) {
                                $("html, body").animate({
                                    scrollTop: $(selector).offset().top - floatMenuH + 1
                                }, speed, function() {
                                    $("body").removeClass("is-scroll");

                                    $_this.parent().siblings(".onepage").removeClass("act onepage");
                                    $_this.parent().addClass("act onepage");
                                    _menu_link_event(selector);

                                });
                            }
                        }
                    }
                    return false;
                });

            }

        }

    });
    $("ul.menu a,.tabcontent-inner>ul a").each(function() {
        var $_this = $(this),
            selector = $_this.attr("href");
        if(selector && selector.indexOf("#") > -1 && selector != "#") {

            selector = jQuery.trim(selector);
            var tmpselecter = selector.split("#");
            selector = "#" + tmpselecter[tmpselecter.length - 1];
            if(selector != "#" && selector.indexOf("=") < 0 && $(selector).length > 0) {
                $(this).on('click', function(e) {
                    $("body").addClass("is-scroll");
                    if($("#phantom").css("display") == "block") {
                        var floatMenuH = $("#phantom").height();
                    } else {
                        var floatMenuH = 0;
                    }
                    var base_speed = 600,
                        speed = base_speed;
                    var this_offset = $_this.offset(),
                        that_offset = $(selector).offset(),
                        offset_diff = Math.abs(that_offset.top - this_offset.top),
                        speed = (offset_diff * base_speed) / 1000;

                    $("html, body").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                        _menu_link_event(selector);
                    });

                });
            }
        }
    });
    $(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click', function(e) {
        $("body").addClass("is-scroll");
        if($("#phantom").css("display") == "block") {
            var floatMenuH = $("#phantom").height();
        } else {
            var floatMenuH = 0;
        }
        var $_this = $(this),
            selector = $_this.attr("href");

        var base_speed = 600,
            speed = base_speed;
        if($(selector).length > 0) {
            var this_offset = $_this.offset(),
                that_offset = $(selector).offset(),
                offset_diff = Math.abs(that_offset.top - this_offset.top),
                speed = (offset_diff * base_speed) / 1000;
        }
        if(selector == "#") {
            $("html, body").animate({
                scrollTop: 0
            }, speed, function() {
                $("body").removeClass("is-scroll");
            });
        } else {
            if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                $("html, body").animate({
                    scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if($(selector).length > 0) {
                    $("html, body").animate({
                        scrollTop: $(selector).offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                }
            }
        }
        return false;
    });
    if($(".one-page-row").length) {
        $(window).scroll(function() {
            var currentNode = null;
            if(!$("body").hasClass("is-scroll")) {
                $('.one-page-row div[data-anchor^="#"]').each(function() {
                    var activeSection = $(this),
                        currentId = $(this).attr('data-anchor');
                    if($(window).scrollTop() >= ($(".one-page-row div[data-anchor='" + currentId + "']").offset().top - 100)) {
                        currentNode = currentId;
                    }
                });
                $('.menu-item a').parent("li").removeClass('act');
                $('.menu-item a[href="' + currentNode + '"]').parent("li").addClass('act');
                if($('.menu-item a[href="#"]').length && currentNode == null) {
                    $('.menu-item a[href="#"]').parent("li").addClass('act');
                }
            }
        });
    }
    /* Onepage template:end */
    floatmenu_create();
    var waypoint_menu_hash = {}
    jQuery(".mainmenu >.menu-item > a").each(function() {

        var $this = this;
        var href = jQuery(this).attr("href");
        if(href.indexOf("#") > -1 && href != "#") {
            var href_id = href.split("#");
            if(href_id.length > 1) {
                href_id = jQuery.trim(href_id[1]);
            }
            if(href_id && href_id.indexOf("=") < 0 && jQuery("section#" + href_id).length > 0) {
                waypoint_menu_hash[href_id] = $this;
            }
        }
    })
    $.each(waypoint_menu_hash, function(hash, obj) {
        jQuery("section#" + hash).waypoint({
            handler: function(direction) {
                jQuery(".mainmenu .act").removeClass("act onepage");
                jQuery(".mainmenu  a").each(function() {
                    var href = jQuery(this).attr("href");
                    if(href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        currli = jQuery(this).parent();
                        currli.addClass("act onepage");
                    }
                })
                jQuery(".widget_nav_menu ul.menu .current-menu-item,.qfy-listmenuvertical ul.menu .current-menu-item,.widget_nav_menuhorizontal ul.menu .current-menu-item").removeClass("current-menu-item current-menu-ancestor");
                jQuery(".widget_nav_menu ul.menu a,.qfy-listmenuvertical ul.menu a,.widget_nav_menuhorizontal ul.menu a,.tabcontent-inner>ul a").each(function() {
                    var href = jQuery(this).attr("href");
                    if(href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        currli = jQuery(this).parent();
                        currli.addClass("current-menu-item");
                    }

                })
                jQuery(".tabcontent-inner>ul .active").removeClass("active");
                jQuery(".tabcontent-inner>ul  a").each(function() {
                    var href = jQuery(this).attr("href");
                    if(href && href.indexOf("#") > -1 && href.indexOf(hash) > -1) {
                        jQuery(this).addClass("active");
                    }
                })
                _menu_link_event(hash);

            },
            offset: "20px",
        })
    });
});
/*============不能删除==========*/
function floatmenu_create() {
    if(jQuery("#header.logo-left-right #navigation ul.ab-center").length > 0) {
        var v1 = jQuery("#header #branding").width();
        var v2 = jQuery("#header .assistive-info .top-bar-right").width();
        jQuery("#header #navigation #main-nav").css("text-align", "center").css("left", (v2 - v1) / 2 + "px");
    }
    var $ = jQuery;
    if($("#header.newrightmenu,#header.newleftmenu").length > 0) {
        if($("#page.bodyheader40,#page.bodyheader0").length > 0) {
            $("#header").css("position", "fixed").css("top", "0");
            return;
        }
    }
    if(smartMenu && $("#header").length > 0) {
        var controlDiv = "";
        var mouseHtml = "";
        try {
            if(self != top && !top.jQuery("body").hasClass("caterole")) {
                var pcontroldiv = '<div class="controls-column bitPcontrols wf-mobile-hidden" style="top:50%;margin-top:-8px;"><div class="controls-out-tl"><div class="parent parent-vc_row active "><a class="control-btn"><span class="vc-btn-content vo-btn-nomove" style="padding:0 5px 0 10px !important;  line-height: 18px !important;font-size:12px !important;color:#fff;" onclick="top.qfFloatMenuSetting()">设置浮动头部和LOGO</span></a></div></div></div>';

                mouseHtml = 'onmouseover="document.getElementById(\'phantomFloatMenu\').style.display = \'block\';floatmenucontrols_mouseenter();" onmouseout="document.getElementById(\'phantomFloatMenu\').style.display = \'none\';floatmenucontrols_mouseout();"  ';
                controlDiv = '<div id="phantomFloatMenu"  style="line-height: 0px; opacity: 1; visibility: visible; transition: auto 0s ease 0s; display: none;" class="controls-element vc-controls bit-controls-element">' + pcontroldiv + '<div class="controls-cc"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">浮动菜单和LOGO</span></a><a class="control-btn control-btn-edit " onclick="top.qfFloatMenuSetting()" title="设置 浮动菜单样式"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>';
            }
        } catch(e) {

        }
        var scrTop = 0,
            scrDir = 0,
            scrUp = false,
            scrDown = false,
            $header = $("#main-nav"),
            $headerSlide = $("#main-nav-slide .main-nav-slide-inner"),
            f_logoheight = $("#main-nav").attr("data-lh"),
            f_maxwidth = $("#main-nav").attr("data-mw"),
            f_fh = $("#main-nav").attr("data-fh"),
            logoURL = $("#branding a").attr("href"),
            desc = $("#bit-floatlogoText").html(),
            $parent = $header.parent(),
            $headerSlideParent = $headerSlide.parent(),
            $phantom = $('<div id="phantom" ' + mouseHtml + ' >' + controlDiv + '<div class="ph-wrap"><div class="ph-wrap-content"><div class="ph-wrap-inner"><div class="logo-box" ></div><div class="menu-box" ></div><div class="menu-info-box"  ></div></div></div></div></div>').appendTo("body"),
            $menuBox = $phantom.find(".menu-box"),
            $headerH = $header.height(),
            isMoved = false,
            breakPoint = 0,
            threshold = $("#header").offset().top + $("#header").height(),
            doScroll = false;
        var headerobj = $("#header>*");
        var header_height = jQuery("#header").height();
        if($("#page").hasClass("boxed")) {
            $phantom.find(".ph-wrap").addClass("boxed");
            $phantom.addClass("boxed");
        }
        $phantom.find(".ph-wrap").addClass("with-logo");
        if(dtGlobals.logoURL && dtGlobals.logoEnabled) {
            if(dtGlobals.logoURL) {
                var valign = jQuery(".floatlogoText").css("vertical-align");
                if(!valign) valign = "middle";
                var img_str = "";
                if(logoURL) {
                    img_str = '<a href="' + logoURL + '"><img src="' + dtGlobals.logoURL + '" height="' + dtGlobals.logoH + '" width="' + dtGlobals.logoW + '"></a>';
                } else {
                    img_str = '<img src="' + dtGlobals.logoURL + '" height="' + dtGlobals.logoH + '" width="' + dtGlobals.logoW + '">';
                }
                $phantom.find(".logo-box").html('<div style="height:48px;vertical-align: ' + valign + ';display: table-cell;" >' + img_str + '</div>');
            }
        } else {
            $phantom.find(".ph-wrap").addClass("with-logo-no");
        }
        if(desc) {
            $phantom.find(".logo-box").append(desc);
            $phantom.find(".with-logo-no .logo-box").css("display", "table-cell");
        }
        if(f_logoheight >= 10 && f_logoheight <= 50) {
            $("#phantom .logo-box img").css("max-height", f_logoheight + "px");
        }
        if(f_fh == 1) {
            $("#phantom").addClass("min");
        }
        if(f_maxwidth > 0) {
            $("#phantom .ph-wrap .ph-wrap-content").css("max-width", f_maxwidth + "px");
        }
        var info_w = $("#phantom .menu-info-box").width();
        if(jQuery("#header.bit-logo-menu").length > 0 && !$("#phantom").hasClass("bit-logo-menu")) {
            var old_img_str = $header.find("#branding .logo img:first").attr("src");
            $header.find("#branding .logo img:first").css("width", "auto");
            $("#phantom").addClass("bit-logo-menu").find(".logo-box").remove();
            $("#phantom .menu-box").css("padding-left", info_w + "px");
        }

        $(".one-page-row .logo-box a").on('click', function(e) {
            $("body").addClass("is-scroll");
            if($("#phantom").css("display") == "block") {
                var floatMenuH = $("#phantom").height();
            } else {
                var floatMenuH = 0;
            }
            var $_this = $(this),
                selector = $_this.attr("href");

            var base_speed = 600,
                speed = base_speed;
            if($(selector).length > 0) {
                var this_offset = $_this.offset(),
                    that_offset = $(selector).offset(),
                    offset_diff = Math.abs(that_offset.top - this_offset.top),
                    speed = (offset_diff * base_speed) / 1000;
            }
            if(selector == "#") {
                $("html, body").animate({
                    scrollTop: 0
                }, speed, function() {
                    $("body").removeClass("is-scroll");
                });
            } else {
                if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length) {
                    $("html, body").animate({
                        scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
                    }, speed, function() {
                        $("body").removeClass("is-scroll");
                    });
                } else {
                    if($(selector).length > 0) {
                        $("html, body").animate({
                            scrollTop: $(selector).offset().top - floatMenuH + 1
                        }, speed, function() {
                            $("body").removeClass("is-scroll");
                        });
                    }
                }
            }
            return false;
        });

        $(window).on("debouncedresize", function() {
            $headerH = $header.height();
        });
        var top_threshold = $("#dl-menu").offset().top + $("#dl-menu").height();

        $(window).on("scroll", function() {

            var tempCSS = {},
                tempScrTop = $(window).scrollTop();
            scrDir = tempScrTop - scrTop;
            if(tempScrTop > threshold && isMoved === false) {
                if(!dtGlobals.isHovering) {
                    var s = "0.5s";
                    if($header.attr("data-sp") == 0) s = "0.4s";
                    else if($header.attr("data-sp") == 1) s = "1s";
                    else if($header.attr("data-sp") == 2) s = "2s";
                    if($header.attr("data-st") == "1") {
                        $phantom.css("animation-duration", s).addClass("showed_tb");
                    } else {
                        $phantom.css({
                            "transition": "opacity " + s,
                            "opacity": 1,
                            "visibility": "visible"
                        });
                    }
                    if($("#phantom").hasClass("bit-logo-menu")) {
                        if(dtGlobals.logoURL && dtGlobals.logoEnabled) {
                            $header.find("#branding .logo img:first").attr("src", dtGlobals.logoURL);
                        }
                    }

                    if(jQuery("#header.newrightmenu,#header.newleftmenu").length > 0) {
                        if(jQuery("#dl-menu:visible").length == 0 && (jQuery("body").height() - threshold - tempScrTop > jQuery(window).height())) {
                            jQuery("#header").addClass("position-ab-fixed");
                        }
                        $phantom.find(".ph-wrap").remove();
                    } else {
                        $parent.css("min-height", $header.height() + "px");
                        $header.appendTo($menuBox);
                        $headerSlide.prependTo($phantom.find(".menu-info-box"));
                        $header.removeClass($header.data('bit-menu')).addClass($header.data('bit-float-menu')).removeClass("bit-menu-default").addClass("bit-menu-float");
                    }
                    var infoclass = $headerSlide.attr("data-class");
                    $phantom.find(".menu-info-box").addClass(infoclass);
                    isMoved = true;
                    if($phantom.find("#main-nav").hasClass("position-ab-center")) {
                        var div1 = $phantom.find(".logo-box").width() + $phantom.find(".logo-box").css("padding-left").replace("px", "") * 1 + $phantom.find(".logo-box").css("padding-right").replace("px", "") * 1;
                        var div2 = $phantom.find(".menu-info-box").width();
                        $phantom.find(".menu-box").css("position", "relative").css("left", (div2 - div1) / 2 + "px");
                    }
                }
            } else if(tempScrTop <= threshold && isMoved === true) {
                jQuery("#phantom .mainmenu >.menu-item.onepage").removeClass("onepage");
                if($("#phantom").hasClass("bit-logo-menu")) {
                    if(old_img_str)
                        $header.find("#branding .logo img:first").attr("src", old_img_str);
                }
                if(jQuery("#header.newrightmenu,#header.newleftmenu").length > 0) {
                    jQuery("#header").removeClass("position-ab-fixed");
                } else {
                    $header.appendTo($parent);
                    $parent.css("min-height", "auto");
                    $header.removeClass($header.data('bit-float-menu')).addClass($header.data('bit-menu')).addClass("bit-menu-default").removeClass("bit-menu-float");
                }
                if($(".logo-classic-centered, .logo-center").length) {
                    if($(".mini-search").length) {
                        $header.insertBefore(".mini-search");
                    }
                }
                if($header.attr("data-st") == "1") {
                    $phantom.removeClass("showed_tb");
                } else {
                    $phantom.css({
                        "opacity": 0,
                        "visibility": "hidden"
                    });
                }
                isMoved = false;
            };
            scrTop = $(window).scrollTop();
        });
    }
}


/*======手机导航=======*/
function mainmenu_event() {
    $ = jQuery;
    //custom menu

    $("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
    if($("#mobile-menu").hasClass("dropTopStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }

        var padding = $("#mobile-menu").attr("data-padding");
        if(padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else if($("#mobile-menu").hasClass("dropCenterStyle")) {
        $("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >" + menu_html + "</div>");
        menu_html = null;
        if($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
        } else if($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if(padding) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        if($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else if($("#header").hasClass("wf-mobile-hidden")) {
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
        $("#dl-menu:not(.dl-qfymobile-menu)").remove();
        $("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >" + menu_html + "</div>");
        if($("#mobile-menu").hasClass("positionFixed")) {
            mobile_menu_fix();
        }

    } else {
        //default
        if($("#mobile-menu").hasClass("positionFixed")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
            mobile_menu_fix();
        }

    }

    $(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
    $("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

    var $mainNav = $("#main-nav,.mini-nav");

    var $mobileNav = $mainNav.clone();
    var $mobileTopNav = $(".mini-nav").clone();
    var backCap = $("#mobile-menu > .menu-back").html();

    $mobileNav
        .attr("id", "")
        .attr("class", "dl-menu")
        .find(".sub-nav")
        .addClass("dl-submenu")
        .removeClass("sub-nav")
        .prepend("<li class='menu-item dl-back'><a href='#'><span>" + backCap + "</a></li>");

    $mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");

    $("body").removeClass("mobilefloatmenu");
    $("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
    if($("#mobile-menu").hasClass("floatmenu") || $("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")) {
        $("body").addClass("mobilefloatmenu");
        var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
        $("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >" + menu_content + "</div>");
        var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
        $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
        $("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >" + menu_html + "</div>");

        if($("#mobile-menu").hasClass("fullfloatmenu")) {
            $(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
        } else if($("#mobile-menu").hasClass("leftbtnmenu")) {
            $("body").addClass("mobileleftbtnmenu");
            $(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend(jQuery(".menu_displaynone").html()).append(jQuery(".menu_displaynone_footer").html());
            if($("body >.dl-menu-film").length == 0) {
                $("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
            }
            if($("body >.dl-menu-fixedheader").length == 0 && $(".leftbtnmenu #mobile-menu.displaynone").length == 0) {
                $("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>" + jQuery(".menu_displaynone_header").html() + "</div>");
            }
            if(top != self && jQuery("body").hasClass("compose-mode")) {
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
                    function() {
                        parent.widgetHover(this, jQuery("body"));
                    })
                jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
                    parent.widgetFixEvent(this);
                })
            }
            jQuery("body").addClass("moble_menufixed");
            mobile_menu_fix_2();
            if(jQuery(window).scrollTop() > jQuery(".dl-menu-fixedheader").height()) {
                jQuery(".dl-menu-fixedheader").css("position", "fixed");
                jQuery("body").addClass("fixedheadering");
            } else {
                jQuery(".dl-menu-fixedheader").css("position", "relative");
                jQuery("body").removeClass("fixedheadering");
            }
        }
        if($("#mobile-menu").hasClass("left")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
            $(".floatwarpper").addClass("left");
        } else if($("#mobile-menu").hasClass("right")) {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
            $(".floatwarpper").addClass("right");
        } else {
            $("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
            $(".floatwarpper").addClass("center");
        }
        var padding = $("#mobile-menu").attr("data-padding");
        if(padding) {
            $(".floatwarpper").css("padding-left", padding + "px").css("padding-right", padding + "px");
        }
        var element_right = $("#mobile-menu").attr("data-right");
        if(element_right) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("right", element_right + "px");
        }
        var element_top = $("#mobile-menu").attr("data-top");
        if(element_top) {
            $("#dl-menu:not(.dl-qfymobile-menu)").css("top", element_top + "px");
        }
    }
    if(!$("html").hasClass("old-ie")) $("#dl-menu:not(.dl-qfymobile-menu)").dlmenu();
    var timeouthidden = new Array();
    $(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
        var $this = jQuery(this);
        jQuery(this).on("mouseenter", function(e) {
            var obj = jQuery(this).find(".qfy-sub-div:first");
            if(timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            var h = obj.children().height();
            var t = obj.attr("data-time");
            if(!obj.hasClass("ing") && !obj.hasClass("ed")) {
                obj.stop().addClass("ing").removeClass("ending").css({
                    "visibility": "visible",
                    "height": 0
                }).animate({
                    "height": h
                }, t * 1000, function() {
                    jQuery(this).removeClass("ing").addClass("ed").css({
                        "visibility": "visible"
                    });
                });
            }
        }).on("mouseleave", function(e) {

            var obj = jQuery(this).find(".qfy-sub-div:first");
            if(timeouthidden[i]) {
                clearTimeout(timeouthidden[i]);
            }
            timeouthidden[i] = setTimeout(function() {
                if(obj.hasClass("ending") || obj.hasClass("ing")) return;
                obj.addClass("ending").removeClass("ed").animate({
                    "height": 0
                }, 500, function() {
                    jQuery(this).removeClass("ending ed").css({
                        "visibility": "hidden",
                        "height": 0
                    });
                });
            }, 300);
        });
    });
    $(".sub-nav", $mainNav).parent().each(function() {
        var $this = $(this);
        if(dtGlobals.isMobile || dtGlobals.isWindowsPhone) {
            $this.find("> a").on("click tap", function(e) {
                if(!$(this).hasClass("dt-clicked")) {
                    e.preventDefault();
                    $mainNav.find(".dt-clicked").removeClass("dt-clicked");
                    $(this).addClass("dt-clicked");
                } else {
                    e.stopPropagation();
                }
            });
        };
        var menuTimeoutShow,
            menuTimeoutHide;
        if($this.hasClass("dt-mega-menu")) {
            $this.on("mouseenter tap", function(e) {
                if(e.type == "tap") e.stopPropagation();
                var $this = jQuery(this);
                $this.addClass("dt-hovered");
                dtGlobals.isHovering = true;
                var $_this = jQuery(this),
                    $_this_h = $this.height();
                var $_this_ofs_top = $this.position().top;
                $this.find("> .sub-nav").css({
                    top: $_this_ofs_top + $_this_h
                });
                if($this.hasClass("mega-auto-width")) {
                    var $_this = $(this),
                        $_this_sub = $_this.find(" > .sub-nav > li"),
                        coll_width = $("#main .wf-wrap").width() / 5,
                        $_this_par_width = $_this.parent().width(),
                        $_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;
                    $_this.find(" > .sub-nav").css({
                        left: $_this_parents_ofs,
                        "marginLeft": -($_this.find(" > .sub-nav").width() / 2 - $_this.width() / 2)
                    });
                }
                if($this.is(':first-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
                        "marginLeft": 0
                    });
                } else if($this.is(':last-child') && $this.hasClass("mega-auto-width")) {
                    $this.find(" > .sub-nav").css({
                        left: "auto",
                        right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ($this.position().left + $this.width()),
                        "marginLeft": 0
                    });
                };
                if($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    $this.children("ul").addClass("right-overflow");
                };
                if($this.position().left < ($this.children("ul").width() / 2)) {
                    $this.children("ul").addClass("left-overflow");
                }
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                menuTimeoutShow = setTimeout(function() {
                    if($this.hasClass("dt-hovered")) {
                        $this.find("ul").stop().css("visibility", "visible").animate({
                            "opacity": 1
                        }, 150);
                    }
                }, 100);
            });
            $this.on("mouseleave", function(e) {
                var $this = $(this);
                $this.removeClass("dt-hovered");
                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                menuTimeoutHide = setTimeout(function() {
                    if(!$this.hasClass("dt-hovered")) {
                        $this.children("ul").stop().animate({
                            "opacity": 0
                        }, 150, function() {
                            $(this).css("visibility", "hidden");
                            $(this).find("ul").stop().css("visibility", "hidden").animate({
                                "opacity": 0
                            }, 10);
                        });
                        setTimeout(function() {
                            if(!$this.hasClass("dt-hovered")) {
                                $this.children("ul").removeClass("right-overflow");
                                $this.children("ul").removeClass("left-overflow");
                            }
                        }, 400);
                    }
                }, 150);
                $this.find("> a").removeClass("dt-clicked");
            });
        } else {
            $this.on("mouseenter tap", function(e) {
                if(e.type == "tap") e.stopPropagation();
                var $this = jQuery(this);
                $this.addClass("dt-hovered");
                if($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
                    $this.children("ul").addClass("right-overflow");
                }
                dtGlobals.isHovering = true;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                if($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutShow = setTimeout(function() {
                        if($this.hasClass("dt-hovered")) {
                            if($this.closest("#main-nav").attr("data-sliderdown")) {
                                var h = $this.children('ul').height();
                                $this.children('ul').stop().css({
                                    "visibility": "visible",
                                    "opacity": "1",
                                    "overflow": "hidden",
                                    "max-height": "0"
                                }).animate({
                                    "max-height": h
                                }, 300, function() {
                                    jQuery(this).css({
                                        "overflow": "inherit"
                                    })
                                });
                            } else if($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
                            } else {
                                $this.children('ul').stop().css("visibility", "visible").animate({
                                    "opacity": 1
                                }, 150);
                            }

                        }
                    }, 100);
                }
            });
            $this.on("mouseleave", function(e) {
                var $this = jQuery(this);
                $this.removeClass("dt-hovered");
                dtGlobals.isHovering = false;
                clearTimeout(menuTimeoutShow);
                clearTimeout(menuTimeoutHide);
                if($this.find(".qfy-sub-div").length == 0 && $this.closest(".qfyheaderul").length == 0) {
                    menuTimeoutHide = setTimeout(function() {
                        if(!$this.hasClass("dt-hovered")) {

                            if($this.closest("#main-nav").attr("data-sliderdown")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else if($this.closest("#main-nav").hasClass("sub-sliderup")) {
                                $this.children("ul").stop().removeAttr("style");
                            } else {
                                $this.children("ul").stop().animate({
                                    "opacity": 0
                                }, 150, function() {
                                    $(this).css("visibility", "hidden");
                                });

                            }
                            setTimeout(function() {
                                if(!$this.hasClass("dt-hovered")) {
                                    $this.children("ul").removeClass("right-overflow");
                                }
                            }, 400);
                        }
                    }, 150);
                }
                $this.find("> a").removeClass("dt-clicked");
            });
        };
    });
}
function vc_gallery_relat() {
    jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function() {
        var img = jQuery(this);
        var src = img.attr("src");
        img.css("cursor", "pointer");
        src = src.replace(/-[\d]*x[\d]*/g, "");
        img.unbind("click").bind("click", function() {
            jQuery(".qfe_gallery.rela_other .slides").each(function() {
                var obj = jQuery(this);
                var index = 0;
                obj.find("img").each(function() {
                    var toimg = jQuery(this);
                    var tosrc = toimg.attr("src");
                    tosrc = tosrc.replace(/-[\d]*x[\d]*/g, "");
                    var p = toimg.closest("li");

                    if(!p.hasClass("clone")) {
                        index++;
                    }

                    if(!p.hasClass("clone") && src == tosrc) {
                        p.siblings().removeClass("flex-active-slide");

                        p.addClass("flex-active-slide");
                        var width = p.width();

                        p.parent().css("-webkit-transition-duration", "0.6s");
                        p.parent().css("transition-duration", "0.6s");
                        p.parent().css("-webkit-transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');
                        p.parent().css("transform", 'translate3d(-' + (index * width) + 'px, 0px, 0px)');

                        return;
                    }
                })
            })

        })
    });
}

jQuery(document).ready(function($) {
    jQuery(".mobile_variation_warp").closest("section").css("z-index", "100");
    jQuery("#dl-menu .qfy-sub-div").remove();
    jQuery(".qfy-sub-div").each(function() {
        if(jQuery(this).attr("data-full") == "1") {
            var bodywidth = jQuery("body").width();
            var offsetleft = jQuery(this).closest("li").offset().left;
            jQuery(this).css("width", "100vw").css("margin-left", "-" + offsetleft + "px");
        }

    })
    if(jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length > 0) {
        jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function() {
            var cur = jQuery(this).find(".list-content .current-cat");
            jQuery(this).find(".list-content .children").hide();
            cur.parents("li,ul").show();
            if(cur.hasClass("cat-parent") && cur.closest(".list-content").length > 0) cur.find(">.children").show();
        })

    }
    if(jQuery(".qfy_template_lib .viewmoretemplate").length > 0) {
        jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
            handler: function(direction) {
                if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length > 0) {
                    jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
                }

            },
            triggerOnce: true,
            offset: "bottom-in-view",
        })

    }

    if(top == self) {
        jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function() {
            var $this = jQuery(this);
        })
    }

    if(jQuery("body.free_public").length > 0) {
        setTimeout("checkAdvertising()", 3000);
        setTimeout("checkAdvertising()", 6000);
        setTimeout("checkAdvertising()", 10000);
        setTimeout("checkAdvertising()", 20000);
        setTimeout("checkAdvertising()", 30000);
        setTimeout("checkAdvertising()", 100000);
    }

    jQuery(".qfytemplateslist .qfypreloadimg").each(function() {
        var newurl = jQuery(this).attr("data-src");
        var $this = jQuery(this);
        jQuery('<img src="' + newurl + '">').load(function() {
            $this.attr("src", newurl);
        })
    })
    jQuery(".qfy_scroll_box:not(.load)").each(function() {
        jQuery(this).addClass("load");
        var box = jQuery(this).attr("id");
        var delay = jQuery(this).attr("data-delay");
        var speed = jQuery(this).attr("data-speed");
        var h = jQuery(this).attr("data-h");
    });

    vc_gallery_relat();
    //特殊处理一些网站
    if(jQuery(".re_second_user_class").length > 0 && jQuery.trim(jQuery(".re_second_user_span").text()) == "") {
        jQuery(".re_second_user_class").hide();
    }


    if(jQuery(".addon-custom-datetimepicker").length > 0) {
        jQuery(".addon-custom-datetimepicker").datetimepicker({
            dateFormat: "yy-mm-dd",
            numberOfMonths: 1,
            showTime: true,
            constrainInput: false
        });
    }
    if(jQuery(".qfytemplateslist").length > 0) {
        if(jQuery(".qfytemplateslist .citem > a.active").length > 0) {
            jQuery(".qfytemplateslist .citem > a.active").closest(".citem").show();
        }
        jQuery(".qfytemplateslist  .info").click(function() {
            var url = jQuery(this).attr("data-url");
            if(top == self) {
                window.open(url);
            }
        })
        jQuery(".qfytemplateslist  .use").click(function() {
            var url = jQuery(this).attr("data-url");
            if(top == self) {
                location.href = url;
            }
        })

        jQuery(".qfytemplateslist .mypages a").removeAttr("href").click(function() {
            var tag = "all-0";
            if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")) {
                tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
            }
            var paged = jQuery(this).attr("paged");
        })

        jQuery(".qfytemplateslist .itemli").click(function() {
            jQuery(".qfytemplateslist .itemli").removeClass("active");
            jQuery(".qfytemplateslist .citem").hide();
            if(jQuery(this).parent().hasClass("citem")) {
                jQuery(this).parent().show();
            } else {
                jQuery(this).parent().find(".citem").show();
            }
            jQuery(this).addClass("active");

            var tag = "all-0";
            if(jQuery(this).attr("data-tag")) {
                tag = jQuery(this).attr("data-tag");
            }
        })
        jQuery(".qfytemplateslist .viewmoretemplate_inner").click(function() {
            var tag = "all-0";
            if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")) {
                tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
            }
            var paged = jQuery(this).attr("data-page");
        });
    }

    var current_page_id = jQuery('body').attr('data-pid');
    var current_page_key = jQuery('body').attr('data-pkey');
})


