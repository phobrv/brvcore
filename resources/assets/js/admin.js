if (function(t, e) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, (function(t, e) { "use strict"; var n = [],
            i = t.document,
            r = Object.getPrototypeOf,
            o = n.slice,
            a = n.concat,
            s = n.push,
            l = n.indexOf,
            c = {},
            h = c.toString,
            u = c.hasOwnProperty,
            d = u.toString,
            p = d.call(Object),
            f = {},
            g = function(t) { return "function" == typeof t && "number" != typeof t.nodeType },
            v = function(t) { return null != t && t === t.window },
            m = { type: !0, src: !0, nonce: !0, noModule: !0 };

        function y(t, e, n) { var r, o, a = (n = n || i).createElement("script"); if (a.text = t, e)
                for (r in m)(o = e[r] || e.getAttribute && e.getAttribute(r)) && a.setAttribute(r, o);
            n.head.appendChild(a).parentNode.removeChild(a) }

        function b(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[h.call(t)] || "object" : typeof t } var x = "3.4.1",
            w = function(t, e) { return new w.fn.init(t, e) },
            _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function C(t) { var e = !!t && "length" in t && t.length,
                n = b(t); return !g(t) && !v(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t) } w.fn = w.prototype = { jquery: x, constructor: w, length: 0, toArray: function() { return o.call(this) }, get: function(t) { return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t] }, pushStack: function(t) { var e = w.merge(this.constructor(), t); return e.prevObject = this, e }, each: function(t) { return w.each(this, t) }, map: function(t) { return this.pushStack(w.map(this, (function(e, n) { return t.call(e, n, e) }))) }, slice: function() { return this.pushStack(o.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(t) { var e = this.length,
                    n = +t + (t < 0 ? e : 0); return this.pushStack(0 <= n && n < e ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function() { var t, e, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1; for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t) i = t[e], "__proto__" !== e && a !== i && (c && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[e], o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}, r = !1, a[e] = w.extend(c, o, i)) : void 0 !== i && (a[e] = i)); return a }, w.extend({ expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(t) { throw new Error(t) }, noop: function() {}, isPlainObject: function(t) { var e, n; return !(!t || "[object Object]" !== h.call(t) || (e = r(t)) && ("function" != typeof(n = u.call(e, "constructor") && e.constructor) || d.call(n) !== p)) }, isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 }, globalEval: function(t, e) { y(t, { nonce: e && e.nonce }) }, each: function(t, e) { var n, i = 0; if (C(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break; return t }, trim: function(t) { return null == t ? "" : (t + "").replace(_, "") }, makeArray: function(t, e) { var n = e || []; return null != t && (C(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n }, inArray: function(t, e, n) { return null == e ? -1 : l.call(e, t, n) }, merge: function(t, e) { for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i]; return t.length = r, t }, grep: function(t, e, n) { for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]); return i }, map: function(t, e, n) { var i, r, o = 0,
                    s = []; if (C(t))
                    for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, n)) && s.push(r); return a.apply([], s) }, guid: 1, support: f }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) { c["[object " + e + "]"] = e.toLowerCase() })); var S = function(t) { var e, n, i, r, o, a, s, l, c, h, u, d, p, f, g, v, m, y, b, x = "sizzle" + 1 * new Date,
                w = t.document,
                _ = 0,
                C = 0,
                S = lt(),
                D = lt(),
                T = lt(),
                k = lt(),
                A = function(t, e) { return t === e && (u = !0), 0 },
                E = {}.hasOwnProperty,
                L = [],
                $ = L.pop,
                I = L.push,
                M = L.push,
                F = L.slice,
                N = function(t, e) { for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n; return -1 },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                j = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                R = "\\[" + j + "*(" + P + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + j + "*\\]",
                B = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                H = new RegExp(j + "+", "g"),
                U = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                q = new RegExp("^" + j + "*," + j + "*"),
                W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                z = new RegExp(j + "|>"),
                V = new RegExp(B),
                Y = new RegExp("^" + P + "$"),
                G = { ID: new RegExp("^#(" + P + ")"), CLASS: new RegExp("^\\.(" + P + ")"), TAG: new RegExp("^(" + P + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i") },
                X = /HTML$/i,
                Q = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                nt = function(t, e, n) { var i = "0x" + e - 65536; return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                rt = function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                ot = function() { d() },
                at = xt((function(t) { return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase() }), { dir: "parentNode", next: "legend" }); try { M.apply(L = F.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType } catch (e) { M = { apply: L.length ? function(t, e) { I.apply(t, F.call(e)) } : function(t, e) { for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1 } } }

            function st(t, e, i, r) { var o, s, c, h, u, f, m, y = e && e.ownerDocument,
                    _ = e ? e.nodeType : 9; if (i = i || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return i; if (!r && ((e ? e.ownerDocument || e : w) !== p && d(e), e = e || p, g)) { if (11 !== _ && (u = Z.exec(t)))
                        if (o = u[1]) { if (9 === _) { if (!(c = e.getElementById(o))) return i; if (c.id === o) return i.push(c), i } else if (y && (c = y.getElementById(o)) && b(e, c) && c.id === o) return i.push(c), i } else { if (u[2]) return M.apply(i, e.getElementsByTagName(t)), i; if ((o = u[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(o)), i } if (n.qsa && !k[t + " "] && (!v || !v.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) { if (m = t, y = e, 1 === _ && z.test(t)) { for ((h = e.getAttribute("id")) ? h = h.replace(it, rt) : e.setAttribute("id", h = x), s = (f = a(t)).length; s--;) f[s] = "#" + h + " " + bt(f[s]);
                            m = f.join(","), y = tt.test(t) && mt(e.parentNode) || e } try { return M.apply(i, y.querySelectorAll(m)), i } catch (e) { k(t, !0) } finally { h === x && e.removeAttribute("id") } } } return l(t.replace(U, "$1"), e, i, r) }

            function lt() { var t = []; return function e(n, r) { return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r } }

            function ct(t) { return t[x] = !0, t }

            function ht(t) { var e = p.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function ut(t, e) { for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e }

            function dt(t, e) { var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex; if (i) return i; if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1; return t ? 1 : -1 }

            function pt(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

            function ft(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }

            function gt(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

            function vt(t) { return ct((function(e) { return e = +e, ct((function(n, i) { for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) })) })) }

            function mt(t) { return t && void 0 !== t.getElementsByTagName && t } for (e in n = st.support = {}, o = st.isXML = function(t) { var e = t.namespaceURI,
                        n = (t.ownerDocument || t).documentElement; return !X.test(e || n && n.nodeName || "HTML") }, d = st.setDocument = function(t) { var e, r, a = t ? t.ownerDocument || t : w; return a !== p && 9 === a.nodeType && a.documentElement && (f = (p = a).documentElement, g = !o(p), w !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.attributes = ht((function(t) { return t.className = "i", !t.getAttribute("className") })), n.getElementsByTagName = ht((function(t) { return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length })), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ht((function(t) { return f.appendChild(t).id = x, !p.getElementsByName || !p.getElementsByName(x).length })), n.getById ? (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { return t.getAttribute("id") === e } }, i.find.ID = function(t, e) { if (void 0 !== e.getElementById && g) { var n = e.getElementById(t); return n ? [n] : [] } }) : (i.filter.ID = function(t) { var e = t.replace(et, nt); return function(t) { var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }, i.find.ID = function(t, e) { if (void 0 !== e.getElementById && g) { var n, i, r, o = e.getElementById(t); if (o) { if ((n = o.getAttributeNode("id")) && n.value === t) return [o]; for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o] } return [] } }), i.find.TAG = n.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) { var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t); if ("*" === t) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i } return o }, i.find.CLASS = n.getElementsByClassName && function(t, e) { if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t) }, m = [], v = [], (n.qsa = K.test(p.querySelectorAll)) && (ht((function(t) { f.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]") })), ht((function(t) { t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:") }))), (n.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ht((function(t) { n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", B) })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = K.test(f.compareDocumentPosition), b = e || K.test(f.contains) ? function(t, e) { var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode; return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i))) } : function(t, e) { if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0; return !1 }, A = e ? function(t, e) { if (t === e) return u = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : h ? N(h, t) - N(h, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) { if (t === e) return u = !0, 0; var n, i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            s = [e]; if (!r || !o) return t === p ? -1 : e === p ? 1 : r ? -1 : o ? 1 : h ? N(h, t) - N(h, e) : 0; if (r === o) return dt(t, e); for (n = t; n = n.parentNode;) a.unshift(n); for (n = e; n = n.parentNode;) s.unshift(n); for (; a[i] === s[i];) i++; return i ? dt(a[i], s[i]) : a[i] === w ? -1 : s[i] === w ? 1 : 0 }), p }, st.matches = function(t, e) { return st(t, null, null, e) }, st.matchesSelector = function(t, e) { if ((t.ownerDocument || t) !== p && d(t), n.matchesSelector && g && !k[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try { var i = y.call(t, e); if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (t) { k(e, !0) }
                    return 0 < st(e, p, null, [t]).length }, st.contains = function(t, e) { return (t.ownerDocument || t) !== p && d(t), b(t, e) }, st.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && d(t); var r = i.attrHandle[e.toLowerCase()],
                        o = r && E.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0; return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null }, st.escape = function(t) { return (t + "").replace(it, rt) }, st.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, st.uniqueSort = function(t) { var e, i = [],
                        r = 0,
                        o = 0; if (u = !n.detectDuplicates, h = !n.sortStable && t.slice(0), t.sort(A), u) { for (; e = t[o++];) e === t[o] && (r = i.push(o)); for (; r--;) t.splice(i[r], 1) } return h = null, t }, r = st.getText = function(t) { var e, n = "",
                        i = 0,
                        o = t.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += r(t) } else if (3 === o || 4 === o) return t.nodeValue } else
                        for (; e = t[i++];) n += r(e); return n }, (i = st.selectors = { cacheLength: 50, createPseudo: ct, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(t) { return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } }, filter: { TAG: function(t) { var e = t.replace(et, nt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } }, CLASS: function(t) { var e = S[t + " "]; return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && S(t, (function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") })) }, ATTR: function(t, e, n) { return function(i) { var r = st.attr(i, t); return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(H, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-")) } }, CHILD: function(t, e, n, i, r) { var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                s = "of-type" === e; return 1 === i && 0 === r ? function(t) { return !!t.parentNode } : function(e, n, l) { var c, h, u, d, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                                    v = e.parentNode,
                                    m = s && e.nodeName.toLowerCase(),
                                    y = !l && !s,
                                    b = !1; if (v) { if (o) { for (; g;) { for (d = e; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling" } return !0 } if (f = [a ? v.firstChild : v.lastChild], a && y) { for (b = (p = (c = (h = (u = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++b && d === e) { h[t] = [_, p, b]; break } } else if (y && (b = p = (c = (h = (u = (d = e)[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === b)
                                        for (;
                                            (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((h = (u = d[x] || (d[x] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [_, b]), d !== e));); return (b -= r) === i || b % i == 0 && 0 <= b / i } } }, PSEUDO: function(t, e) { var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t); return r[x] ? r(e) : 1 < r.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) { for (var i, o = r(t, e), a = o.length; a--;) t[i = N(t, o[a])] = !(n[i] = o[a]) })) : function(t) { return r(t, 0, n) }) : r } }, pseudos: { not: ct((function(t) { var e = [],
                                n = [],
                                i = s(t.replace(U, "$1")); return i[x] ? ct((function(t, e, n, r) { for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o)) })) : function(t, r, o) { return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop() } })), has: ct((function(t) { return function(e) { return 0 < st(t, e).length } })), contains: ct((function(t) { return t = t.replace(et, nt),
                                function(e) { return -1 < (e.textContent || r(e)).indexOf(t) } })), lang: ct((function(t) { return Y.test(t || "") || st.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                function(e) { var n;
                                    do { if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } })), target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id }, root: function(t) { return t === f }, focus: function(t) { return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) }, enabled: gt(!1), disabled: gt(!0), checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected }, selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected }, empty: function(t) { for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1; return !0 }, parent: function(t) { return !i.pseudos.empty(t) }, header: function(t) { return J.test(t.nodeName) }, input: function(t) { return Q.test(t.nodeName) }, button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e }, text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) }, first: vt((function() { return [0] })), last: vt((function(t, e) { return [e - 1] })), eq: vt((function(t, e, n) { return [n < 0 ? n + e : n] })), even: vt((function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t })), odd: vt((function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t })), lt: vt((function(t, e, n) { for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i); return t })), gt: vt((function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t })) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[e] = pt(e); for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ft(e);

            function yt() {}

            function bt(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

            function xt(t, e, n) { var i = e.dir,
                    r = e.next,
                    o = r || i,
                    a = n && "parentNode" === o,
                    s = C++; return e.first ? function(e, n, r) { for (; e = e[i];)
                        if (1 === e.nodeType || a) return t(e, n, r); return !1 } : function(e, n, l) { var c, h, u, d = [_, s]; if (l) { for (; e = e[i];)
                            if ((1 === e.nodeType || a) && t(e, n, l)) return !0 } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || a)
                                if (h = (u = e[x] || (e[x] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else { if ((c = h[o]) && c[0] === _ && c[1] === s) return d[2] = c[2]; if ((h[o] = d)[2] = t(e, n, l)) return !0 } return !1 } }

            function wt(t) { return 1 < t.length ? function(e, n, i) { for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1; return !0 } : t[0] }

            function _t(t, e, n, i, r) { for (var o, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), c && e.push(s))); return a }

            function Ct(t, e, n, i, r, o) { return i && !i[x] && (i = Ct(i)), r && !r[x] && (r = Ct(r, o)), ct((function(o, a, s, l) { var c, h, u, d = [],
                        p = [],
                        f = a.length,
                        g = o || function(t, e, n) { for (var i = 0, r = e.length; i < r; i++) st(t, e[i], n); return n }(e || "*", s.nodeType ? [s] : s, []),
                        v = !t || !o && e ? g : _t(g, d, t, s, l),
                        m = n ? r || (o ? t : f || i) ? [] : a : v; if (n && n(v, m, s, l), i)
                        for (c = _t(m, p), i(c, [], s, l), h = c.length; h--;)(u = c[h]) && (m[p[h]] = !(v[p[h]] = u)); if (o) { if (r || t) { if (r) { for (c = [], h = m.length; h--;)(u = m[h]) && c.push(v[h] = u);
                                r(null, m = [], c, l) } for (h = m.length; h--;)(u = m[h]) && -1 < (c = r ? N(o, u) : d[h]) && (o[c] = !(a[c] = u)) } } else m = _t(m === a ? m.splice(f, m.length) : m), r ? r(null, a, m, l) : M.apply(a, m) })) }

            function St(t) { for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, h = xt((function(t) { return t === e }), s, !0), u = xt((function(t) { return -1 < N(e, t) }), s, !0), d = [function(t, n, i) { var r = !a && (i || n !== c) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i)); return e = null, r }]; l < o; l++)
                    if (n = i.relative[t[l].type]) d = [xt(wt(d), n)];
                    else { if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) { for (r = ++l; r < o && !i.relative[t[r].type]; r++); return Ct(1 < l && wt(d), 1 < l && bt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(U, "$1"), n, l < r && St(t.slice(l, r)), r < o && St(t = t.slice(r)), r < o && bt(t)) } d.push(n) } return wt(d) } return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, a = st.tokenize = function(t, e) { var n, r, o, a, s, l, c, h = D[t + " "]; if (h) return e ? 0 : h.slice(0); for (s = t, l = [], c = i.preFilter; s;) { for (a in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = W.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(U, " ") }), s = s.slice(n.length)), i.filter) !(r = G[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return e ? s.length : s ? st.error(t) : D(t, l).slice(0) }, s = st.compile = function(t, e) { var n, r, o, s, l, h, u = [],
                    f = [],
                    v = T[t + " "]; if (!v) { for (e || (e = a(t)), n = e.length; n--;)(v = St(e[n]))[x] ? u.push(v) : f.push(v);
                    (v = T(t, (r = f, s = 0 < (o = u).length, l = 0 < r.length, h = function(t, e, n, a, h) { var u, f, v, m = 0,
                            y = "0",
                            b = t && [],
                            x = [],
                            w = c,
                            C = t || l && i.find.TAG("*", h),
                            S = _ += null == w ? 1 : Math.random() || .1,
                            D = C.length; for (h && (c = e === p || e || h); y !== D && null != (u = C[y]); y++) { if (l && u) { for (f = 0, e || u.ownerDocument === p || (d(u), n = !g); v = r[f++];)
                                    if (v(u, e || p, n)) { a.push(u); break } h && (_ = S) } s && ((u = !v && u) && m--, t && b.push(u)) } if (m += y, s && y !== m) { for (f = 0; v = o[f++];) v(b, x, e, n); if (t) { if (0 < m)
                                    for (; y--;) b[y] || x[y] || (x[y] = $.call(a));
                                x = _t(x) } M.apply(a, x), h && !t && 0 < x.length && 1 < m + o.length && st.uniqueSort(a) } return h && (_ = S, c = w), b }, s ? ct(h) : h))).selector = t } return v }, l = st.select = function(t, e, n, r) { var o, l, c, h, u, d = "function" == typeof t && t,
                    p = !r && a(t = d.selector || t); if (n = n || [], 1 === p.length) { if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) { if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                        d && (e = e.parentNode), t = t.slice(l.shift().value.length) } for (o = G.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !i.relative[h = c.type]);)
                        if ((u = i.find[h]) && (r = u(c.matches[0].replace(et, nt), tt.test(l[0].type) && mt(e.parentNode) || e))) { if (l.splice(o, 1), !(t = r.length && bt(l))) return M.apply(n, r), n; break } } return (d || s(t, p))(r, e, !g, n, !e || tt.test(t) && mt(e.parentNode) || e), n }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!u, d(), n.sortDetached = ht((function(t) { return 1 & t.compareDocumentPosition(p.createElement("fieldset")) })), ht((function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") })) || ut("type|href|height|width", (function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) })), n.attributes && ht((function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") })) || ut("value", (function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue })), ht((function(t) { return null == t.getAttribute("disabled") })) || ut(O, (function(t, e, n) { var i; if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null })), st }(t);
        w.find = S, w.expr = S.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = S.uniqueSort, w.text = S.getText, w.isXMLDoc = S.isXML, w.contains = S.contains, w.escapeSelector = S.escape; var D = function(t, e, n) { for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) { if (r && w(t).is(n)) break;
                        i.push(t) } return i },
            T = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
            k = w.expr.match.needsContext;

        function A(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() } var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(t, e, n) { return g(e) ? w.grep(t, (function(t, i) { return !!e.call(t, i, t) !== n })) : e.nodeType ? w.grep(t, (function(t) { return t === e !== n })) : "string" != typeof e ? w.grep(t, (function(t) { return -1 < l.call(e, t) !== n })) : w.filter(e, t, n) } w.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, (function(t) { return 1 === t.nodeType }))) }, w.fn.extend({ find: function(t) { var e, n, i = this.length,
                    r = this; if ("string" != typeof t) return this.pushStack(w(t).filter((function() { for (e = 0; e < i; e++)
                        if (w.contains(r[e], this)) return !0 }))); for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n); return 1 < i ? w.uniqueSort(n) : n }, filter: function(t) { return this.pushStack(L(this, t || [], !1)) }, not: function(t) { return this.pushStack(L(this, t || [], !0)) }, is: function(t) { return !!L(this, "string" == typeof t && k.test(t) ? w(t) : t || [], !1).length } }); var $, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (w.fn.init = function(t, e, n) { var r, o; if (!t) return this; if (n = n || $, "string" == typeof t) { if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t); if (r[1]) { if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), E.test(r[1]) && w.isPlainObject(e))
                        for (r in e) g(this[r]) ? this[r](e[r]) : this.attr(r, e[r]); return this } return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this } return t.nodeType ? (this[0] = t, this.length = 1, this) : g(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this) }).prototype = w.fn, $ = w(i); var M = /^(?:parents|prev(?:Until|All))/,
            F = { children: !0, contents: !0, next: !0, prev: !0 };

        function N(t, e) { for (;
                (t = t[e]) && 1 !== t.nodeType;); return t } w.fn.extend({ has: function(t) { var e = w(t, this),
                    n = e.length; return this.filter((function() { for (var t = 0; t < n; t++)
                        if (w.contains(this, e[t])) return !0 })) }, closest: function(t, e) { var n, i = 0,
                    r = this.length,
                    o = [],
                    a = "string" != typeof t && w(t); if (!k.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) { o.push(n); break } return this.pushStack(1 < o.length ? w.uniqueSort(o) : o) }, index: function(t) { return t ? "string" == typeof t ? l.call(w(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(t, e) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e)))) }, addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) } }), w.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return D(t, "parentNode") }, parentsUntil: function(t, e, n) { return D(t, "parentNode", n) }, next: function(t) { return N(t, "nextSibling") }, prev: function(t) { return N(t, "previousSibling") }, nextAll: function(t) { return D(t, "nextSibling") }, prevAll: function(t) { return D(t, "previousSibling") }, nextUntil: function(t, e, n) { return D(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return D(t, "previousSibling", n) }, siblings: function(t) { return T((t.parentNode || {}).firstChild, t) }, children: function(t) { return T(t.firstChild) }, contents: function(t) { return void 0 !== t.contentDocument ? t.contentDocument : (A(t, "template") && (t = t.content || t), w.merge([], t.childNodes)) } }, (function(t, e) { w.fn[t] = function(n, i) { var r = w.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (F[t] || w.uniqueSort(r), M.test(t) && r.reverse()), this.pushStack(r) } })); var O = /[^\x20\t\r\n\f]+/g;

        function j(t) { return t }

        function P(t) { throw t }

        function R(t, e, n, i) { var r; try { t && g(r = t.promise) ? r.call(t).done(e).fail(n) : t && g(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i)) } catch (t) { n.apply(void 0, [t]) } } w.Callbacks = function(t) { var e, n;
            t = "string" == typeof t ? (e = t, n = {}, w.each(e.match(O) || [], (function(t, e) { n[e] = !0 })), n) : w.extend({}, t); var i, r, o, a, s = [],
                l = [],
                c = -1,
                h = function() { for (a = a || t.once, o = i = !0; l.length; c = -1)
                        for (r = l.shift(); ++c < s.length;) !1 === s[c].apply(r[0], r[1]) && t.stopOnFalse && (c = s.length, r = !1);
                    t.memory || (r = !1), i = !1, a && (s = r ? [] : "") },
                u = { add: function() { return s && (r && !i && (c = s.length - 1, l.push(r)), function e(n) { w.each(n, (function(n, i) { g(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== b(i) && e(i) })) }(arguments), r && !i && h()), this }, remove: function() { return w.each(arguments, (function(t, e) { for (var n; - 1 < (n = w.inArray(e, s, n));) s.splice(n, 1), n <= c && c-- })), this }, has: function(t) { return t ? -1 < w.inArray(t, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = l = [], s = r = "", this }, disabled: function() { return !s }, lock: function() { return a = l = [], r || i || (s = r = ""), this }, locked: function() { return !!a }, fireWith: function(t, e) { return a || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || h()), this }, fire: function() { return u.fireWith(this, arguments), this }, fired: function() { return !!o } }; return u }, w.extend({ Deferred: function(e) { var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = { state: function() { return i }, always: function() { return o.done(arguments).fail(arguments), this }, catch: function(t) { return r.then(null, t) }, pipe: function() { var t = arguments; return w.Deferred((function(e) { w.each(n, (function(n, i) { var r = g(t[i[4]]) && t[i[4]];
                                    o[i[1]]((function() { var t = r && r.apply(this, arguments);
                                        t && g(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments) })) })), t = null })).promise() }, then: function(e, i, r) { var o = 0;

                            function a(e, n, i, r) { return function() { var s = this,
                                        l = arguments,
                                        c = function() { var t, c; if (!(e < o)) { if ((t = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                c = t && ("object" == typeof t || "function" == typeof t) && t.then, g(c) ? r ? c.call(t, a(o, n, j, r), a(o, n, P, r)) : (o++, c.call(t, a(o, n, j, r), a(o, n, P, r), a(o, n, j, n.notifyWith))) : (i !== j && (s = void 0, l = [t]), (r || n.resolveWith)(s, l)) } },
                                        h = r ? c : function() { try { c() } catch (t) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, h.stackTrace), o <= e + 1 && (i !== P && (s = void 0, l = [t]), n.rejectWith(s, l)) } };
                                    e ? h() : (w.Deferred.getStackHook && (h.stackTrace = w.Deferred.getStackHook()), t.setTimeout(h)) } } return w.Deferred((function(t) { n[0][3].add(a(0, t, g(r) ? r : j, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : j)), n[2][3].add(a(0, t, g(i) ? i : P)) })).promise() }, promise: function(t) { return null != t ? w.extend(t, r) : r } },
                    o = {}; return w.each(n, (function(t, e) { var a = e[2],
                        s = e[5];
                    r[e[1]] = a.add, s && a.add((function() { i = s }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), a.add(e[3].fire), o[e[0]] = function() { return o[e[0] + "With"](this === o ? void 0 : this, arguments), this }, o[e[0] + "With"] = a.fireWith })), r.promise(o), e && e.call(o, o), o }, when: function(t) { var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = o.call(arguments),
                    a = w.Deferred(),
                    s = function(t) { return function(n) { i[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : n, --e || a.resolveWith(i, r) } }; if (e <= 1 && (R(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || g(r[n] && r[n].then))) return a.then(); for (; n--;) R(r[n], s(n), a.reject); return a.promise() } }); var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        w.Deferred.exceptionHook = function(e, n) { t.console && t.console.warn && e && B.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n) }, w.readyException = function(e) { t.setTimeout((function() { throw e })) }; var H = w.Deferred();

        function U() { i.removeEventListener("DOMContentLoaded", U), t.removeEventListener("load", U), w.ready() } w.fn.ready = function(t) { return H.then(t).catch((function(t) { w.readyException(t) })), this }, w.extend({ isReady: !1, readyWait: 1, ready: function(t) {
                (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || H.resolveWith(i, [w]) } }), w.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", U), t.addEventListener("load", U)); var q = function(t, e, n, i, r, o, a) { var s = 0,
                    l = t.length,
                    c = null == n; if ("object" === b(n))
                    for (s in r = !0, n) q(t, e, s, n[s], !0, o, a);
                else if (void 0 !== i && (r = !0, g(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) { return c.call(w(t), n) })), e))
                    for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n))); return r ? t : c ? e.call(t) : l ? e(t[0], n) : o },
            W = /^-ms-/,
            z = /-([a-z])/g;

        function V(t, e) { return e.toUpperCase() }

        function Y(t) { return t.replace(W, "ms-").replace(z, V) } var G = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };

        function X() { this.expando = w.expando + X.uid++ } X.uid = 1, X.prototype = { cache: function(t) { var e = t[this.expando]; return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e }, set: function(t, e, n) { var i, r = this.cache(t); if ("string" == typeof e) r[Y(e)] = n;
                else
                    for (i in e) r[Y(i)] = e[i]; return r }, get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)] }, access: function(t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) }, remove: function(t, e) { var n, i = t[this.expando]; if (void 0 !== i) { if (void 0 !== e) { n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(O) || []).length; for (; n--;) delete i[e[n]] }(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } }, hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !w.isEmptyObject(e) } }; var Q = new X,
            J = new X,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Z = /[A-Z]/g;

        function tt(t, e, n) { var i, r; if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) { try { n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r) } catch (t) {} J.set(t, e, n) } else n = void 0; return n } w.extend({ hasData: function(t) { return J.hasData(t) || Q.hasData(t) }, data: function(t, e, n) { return J.access(t, e, n) }, removeData: function(t, e) { J.remove(t, e) }, _data: function(t, e, n) { return Q.access(t, e, n) }, _removeData: function(t, e) { Q.remove(t, e) } }), w.fn.extend({ data: function(t, e) { var n, i, r, o = this[0],
                    a = o && o.attributes; if (void 0 === t) { if (this.length && (r = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) { for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && (i = Y(i.slice(5)), tt(o, i, r[i]));
                        Q.set(o, "hasDataAttrs", !0) } return r } return "object" == typeof t ? this.each((function() { J.set(this, t) })) : q(this, (function(e) { var n; if (o && void 0 === e) return void 0 !== (n = J.get(o, t)) || void 0 !== (n = tt(o, t)) ? n : void 0;
                    this.each((function() { J.set(this, t, e) })) }), null, e, 1 < arguments.length, null, !0) }, removeData: function(t) { return this.each((function() { J.remove(this, t) })) } }), w.extend({ queue: function(t, e, n) { var i; if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, w.makeArray(n)) : i.push(n)), i || [] }, dequeue: function(t, e) { e = e || "fx"; var n = w.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = w._queueHooks(t, e); "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function() { w.dequeue(t, e) }), o)), !i && o && o.empty.fire() }, _queueHooks: function(t, e) { var n = e + "queueHooks"; return Q.get(t, n) || Q.access(t, n, { empty: w.Callbacks("once memory").add((function() { Q.remove(t, [e + "queue", n]) })) }) } }), w.fn.extend({ queue: function(t, e) { var n = 2; return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? w.queue(this[0], t) : void 0 === e ? this : this.each((function() { var n = w.queue(this, t, e);
                    w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t) })) }, dequeue: function(t) { return this.each((function() { w.dequeue(this, t) })) }, clearQueue: function(t) { return this.queue(t || "fx", []) }, promise: function(t, e) { var n, i = 1,
                    r = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--i || r.resolveWith(o, [o]) }; for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Q.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s)); return s(), r.promise(e) } }); var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
            it = ["Top", "Right", "Bottom", "Left"],
            rt = i.documentElement,
            ot = function(t) { return w.contains(t.ownerDocument, t) },
            at = { composed: !0 };
        rt.getRootNode && (ot = function(t) { return w.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument }); var st = function(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === w.css(t, "display") },
            lt = function(t, e, n, i) { var r, o, a = {}; for (o in e) a[o] = t.style[o], t.style[o] = e[o]; for (o in r = n.apply(t, i || []), e) t.style[o] = a[o]; return r };

        function ct(t, e, n, i) { var r, o, a = 20,
                s = i ? function() { return i.cur() } : function() { return w.css(t, e, "") },
                l = s(),
                c = n && n[3] || (w.cssNumber[e] ? "" : "px"),
                h = t.nodeType && (w.cssNumber[e] || "px" !== c && +l) && nt.exec(w.css(t, e)); if (h && h[3] !== c) { for (l /= 2, c = c || h[3], h = +l || 1; a--;) w.style(t, e, h + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), h /= o;
                h *= 2, w.style(t, e, h + c), n = n || [] } return n && (h = +h || +l || 0, r = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = r)), r } var ht = {};

        function ut(t, e) { for (var n, i, r, o, a, s, l, c = [], h = 0, u = t.length; h < u; h++)(i = t[h]).style && (n = i.style.display, e ? ("none" === n && (c[h] = Q.get(i, "display") || null, c[h] || (i.style.display = "")), "" === i.style.display && st(i) && (c[h] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = ht[s]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ht[s] = l)))) : "none" !== n && (c[h] = "none", Q.set(i, "display", n))); for (h = 0; h < u; h++) null != c[h] && (t[h].style.display = c[h]); return t } w.fn.extend({ show: function() { return ut(this, !0) }, hide: function() { return ut(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() { st(this) ? w(this).show() : w(this).hide() })) } }); var dt = /^(?:checkbox|radio)$/i,
            pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ft = /^$|^module$|\/(?:java|ecma)script/i,
            gt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

        function vt(t, e) { var n; return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? w.merge([t], n) : n }

        function mt(t, e) { for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval")) } gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td; var yt, bt, xt = /<|&#?\w+;/;

        function wt(t, e, n, i, r) { for (var o, a, s, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                    else if (xt.test(o)) { for (a = a || u.appendChild(e.createElement("div")), s = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = gt[s] || gt._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], h = l[0]; h--;) a = a.lastChild;
                w.merge(d, a.childNodes), (a = u.firstChild).textContent = "" } else d.push(e.createTextNode(o)); for (u.textContent = "", p = 0; o = d[p++];)
                if (i && -1 < w.inArray(o, i)) r && r.push(o);
                else if (c = ot(o), a = vt(u.appendChild(o), "script"), c && mt(a), n)
                for (h = 0; o = a[h++];) ft.test(o.type || "") && n.push(o); return u } yt = i.createDocumentFragment().appendChild(i.createElement("div")), (bt = i.createElement("input")).setAttribute("type", "radio"), bt.setAttribute("checked", "checked"), bt.setAttribute("name", "t"), yt.appendChild(bt), f.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue; var _t = /^key/,
            Ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            St = /^([^.]*)(?:\.(.+)|)/;

        function Dt() { return !0 }

        function Tt() { return !1 }

        function kt(t, e) { return t === function() { try { return i.activeElement } catch (t) {} }() == ("focus" === e) }

        function At(t, e, n, i, r, o) { var a, s; if ("object" == typeof e) { for (s in "string" != typeof n && (i = i || n, n = void 0), e) At(t, s, n, i, e[s], o); return t } if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Tt;
            else if (!r) return t; return 1 === o && (a = r, (r = function(t) { return w().off(t), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), t.each((function() { w.event.add(this, e, r, i, n) })) }

        function Et(t, e, n) { n ? (Q.set(t, e, !1), w.event.add(t, e, { namespace: !1, handler: function(t) { var i, r, a = Q.get(this, e); if (1 & t.isTrigger && this[e]) { if (a.length)(w.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (a = o.call(arguments), Q.set(this, e, a), i = n(this, e), this[e](), a !== (r = Q.get(this, e)) || i ? Q.set(this, e, !1) : r = {}, a !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value } else a.length && (Q.set(this, e, { value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this) }), t.stopImmediatePropagation()) } })) : void 0 === Q.get(t, e) && w.event.add(t, e, Dt) } w.event = { global: {}, add: function(t, e, n, i, r) { var o, a, s, l, c, h, u, d, p, f, g, v = Q.get(t); if (v)
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(rt, r), n.guid || (n.guid = w.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0 }), c = (e = (e || "").match(O) || [""]).length; c--;) p = g = (s = St.exec(e[c]) || [])[1], f = (s[2] || "").split(".").sort(), p && (u = w.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = w.event.special[p] || {}, h = w.extend({ type: p, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: f.join(".") }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), w.event.global[p] = !0) }, remove: function(t, e, n, i, r) { var o, a, s, l, c, h, u, d, p, f, g, v = Q.hasData(t) && Q.get(t); if (v && (l = v.events)) { for (c = (e = (e || "").match(O) || [""]).length; c--;)
                        if (p = g = (s = St.exec(e[c]) || [])[1], f = (s[2] || "").split(".").sort(), p) { for (u = w.event.special[p] || {}, d = l[p = (i ? u.delegateType : u.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) h = d[o], !r && g !== h.origType || n && n.guid !== h.guid || s && !s.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                            a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, v.handle) || w.removeEvent(t, p, v.handle), delete l[p]) } else
                            for (p in l) w.event.remove(t, p + e[c], n, i, !0);
                    w.isEmptyObject(l) && Q.remove(t, "handle events") } }, dispatch: function(t) { var e, n, i, r, o, a, s = w.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Q.get(this, "events") || {})[s.type] || [],
                    h = w.event.special[s.type] || {}; for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e]; if (s.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, s)) { for (a = w.event.handlers.call(this, s, c), e = 0;
                        (r = a[e++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation())); return h.postDispatch && h.postDispatch.call(this, s), s.result } }, handlers: function(t, e) { var n, i, r, o, a, s = [],
                    l = e.delegateCount,
                    c = t.target; if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) { for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? -1 < w(r, this).index(c) : w.find(r, this, null, [c]).length), a[r] && o.push(i);
                            o.length && s.push({ elem: c, handlers: o }) } return c = this, l < e.length && s.push({ elem: c, handlers: e.slice(l) }), s }, addProp: function(t, e) { Object.defineProperty(w.Event.prototype, t, { enumerable: !0, configurable: !0, get: g(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(t) { return t[w.expando] ? t : new w.Event(t) }, special: { load: { noBubble: !0 }, click: { setup: function(t) { var e = this || t; return dt.test(e.type) && e.click && A(e, "input") && Et(e, "click", Dt), !1 }, trigger: function(t) { var e = this || t; return dt.test(e.type) && e.click && A(e, "input") && Et(e, "click"), !0 }, _default: function(t) { var e = t.target; return dt.test(e.type) && e.click && A(e, "input") && Q.get(e, "click") || A(e, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } } }, w.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, w.Event = function(t, e) { if (!(this instanceof w.Event)) return new w.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Dt : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0 }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Tt, isPropagationStopped: Tt, isImmediatePropagationStopped: Tt, isSimulated: !1, preventDefault: function() { var t = this.originalEvent;
                this.isDefaultPrevented = Dt, t && !this.isSimulated && t.preventDefault() }, stopPropagation: function() { var t = this.originalEvent;
                this.isPropagationStopped = Dt, t && !this.isSimulated && t.stopPropagation() }, stopImmediatePropagation: function() { var t = this.originalEvent;
                this.isImmediatePropagationStopped = Dt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation() } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Ct.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, w.event.addProp), w.each({ focus: "focusin", blur: "focusout" }, (function(t, e) { w.event.special[t] = { setup: function() { return Et(this, t, kt), !1 }, trigger: function() { return Et(this, t), !0 }, delegateType: e } })), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function(t, e) { w.event.special[t] = { delegateType: e, bindType: e, handle: function(t) { var n, i = t.relatedTarget,
                        r = t.handleObj; return i && (i === this || w.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n } } })), w.fn.extend({ on: function(t, e, n, i) { return At(this, t, e, n, i) }, one: function(t, e, n, i) { return At(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, r; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (r in t) this.off(r, e, t[r]); return this } return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Tt), this.each((function() { w.event.remove(this, t, n, e) })) } }); var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            $t = /<script|<style|<link/i,
            It = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ft(t, e) { return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t }

        function Nt(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function Ot(t) { return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t }

        function jt(t, e) { var n, i, r, o, a, s, l, c; if (1 === e.nodeType) { if (Q.hasData(t) && (o = Q.access(t), a = Q.set(e, o), c = o.events))
                    for (r in delete a.handle, a.events = {}, c)
                        for (n = 0, i = c[r].length; n < i; n++) w.event.add(e, r, c[r][n]);
                J.hasData(t) && (s = J.access(t), l = w.extend({}, s), J.set(e, l)) } }

        function Pt(t, e, n, i) { e = a.apply([], e); var r, o, s, l, c, h, u = 0,
                d = t.length,
                p = d - 1,
                v = e[0],
                m = g(v); if (m || 1 < d && "string" == typeof v && !f.checkClone && It.test(v)) return t.each((function(r) { var o = t.eq(r);
                m && (e[0] = v.call(this, r, o.html())), Pt(o, e, n, i) })); if (d && (o = (r = wt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) { for (l = (s = w.map(vt(r, "script"), Nt)).length; u < d; u++) c = r, u !== p && (c = w.clone(c, !0, !0), l && w.merge(s, vt(c, "script"))), n.call(t[u], c, u); if (l)
                    for (h = s[s.length - 1].ownerDocument, w.map(s, Ot), u = 0; u < l; u++) c = s[u], ft.test(c.type || "") && !Q.access(c, "globalEval") && w.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }) : y(c.textContent.replace(Mt, ""), c, h)) } return t }

        function Rt(t, e, n) { for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(vt(i)), i.parentNode && (n && ot(i) && mt(vt(i, "script")), i.parentNode.removeChild(i)); return t } w.extend({ htmlPrefilter: function(t) { return t.replace(Lt, "<$1></$2>") }, clone: function(t, e, n) { var i, r, o, a, s, l, c, h = t.cloneNode(!0),
                    u = ot(t); if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                    for (a = vt(h), i = 0, r = (o = vt(t)).length; i < r; i++) s = o[i], "input" === (c = (l = a[i]).nodeName.toLowerCase()) && dt.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue); if (e)
                    if (n)
                        for (o = o || vt(t), a = a || vt(h), i = 0, r = o.length; i < r; i++) jt(o[i], a[i]);
                    else jt(t, h); return 0 < (a = vt(h, "script")).length && mt(a, !u && vt(t, "script")), h }, cleanData: function(t) { for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (G(n)) { if (e = n[Q.expando]) { if (e.events)
                                for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                            n[Q.expando] = void 0 } n[J.expando] && (n[J.expando] = void 0) } } }), w.fn.extend({ detach: function(t) { return Rt(this, t, !0) }, remove: function(t) { return Rt(this, t) }, text: function(t) { return q(this, (function(t) { return void 0 === t ? w.text(this) : this.empty().each((function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) })) }), null, t, arguments.length) }, append: function() { return Pt(this, arguments, (function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ft(this, t).appendChild(t) })) }, prepend: function() { return Pt(this, arguments, (function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var e = Ft(this, t);
                        e.insertBefore(t, e.firstChild) } })) }, before: function() { return Pt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this) })) }, after: function() { return Pt(this, arguments, (function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) })) }, empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(vt(t, !1)), t.textContent = ""); return this }, clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map((function() { return w.clone(this, t, e) })) }, html: function(t) { return q(this, (function(t) { var e = this[0] || {},
                        n = 0,
                        i = this.length; if (void 0 === t && 1 === e.nodeType) return e.innerHTML; if ("string" == typeof t && !$t.test(t) && !gt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) { t = w.htmlPrefilter(t); try { for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(vt(e, !1)), e.innerHTML = t);
                            e = 0 } catch (t) {} } e && this.empty().append(t) }), null, t, arguments.length) }, replaceWith: function() { var t = []; return Pt(this, arguments, (function(e) { var n = this.parentNode;
                    w.inArray(this, t) < 0 && (w.cleanData(vt(this)), n && n.replaceChild(e, this)) }), t) } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function(t, e) { w.fn[t] = function(t) { for (var n, i = [], r = w(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(r[a])[e](n), s.apply(i, n.get()); return this.pushStack(i) } })); var Bt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
            Ht = function(e) { var n = e.ownerDocument.defaultView; return n && n.opener || (n = t), n.getComputedStyle(e) },
            Ut = new RegExp(it.join("|"), "i");

        function qt(t, e, n) { var i, r, o, a, s = t.style; return (n = n || Ht(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || ot(t) || (a = w.style(t, e)), !f.pixelBoxStyles() && Bt.test(a) && Ut.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a }

        function Wt(t, e) { return { get: function() { if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get } } }! function() {
            function e() { if (h) { c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(h); var e = t.getComputedStyle(h);
                    r = "1%" !== e.top, l = 12 === n(e.marginLeft), h.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), h.style.position = "absolute", a = 12 === n(h.offsetWidth / 3), rt.removeChild(c), h = null } }

            function n(t) { return Math.round(parseFloat(t)) } var r, o, a, s, l, c = i.createElement("div"),
                h = i.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === h.style.backgroundClip, w.extend(f, { boxSizingReliable: function() { return e(), o }, pixelBoxStyles: function() { return e(), s }, pixelPosition: function() { return e(), r }, reliableMarginLeft: function() { return e(), l }, scrollboxSize: function() { return e(), a } })) }(); var zt = ["Webkit", "Moz", "ms"],
            Vt = i.createElement("div").style,
            Yt = {};

        function Gt(t) { return w.cssProps[t] || Yt[t] || (t in Vt ? t : Yt[t] = function(t) { for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
                    if ((t = zt[n] + e) in Vt) return t }(t) || t) } var Xt = /^(none|table(?!-c[ea]).+)/,
            Qt = /^--/,
            Jt = { position: "absolute", visibility: "hidden", display: "block" },
            Kt = { letterSpacing: "0", fontWeight: "400" };

        function Zt(t, e, n) { var i = nt.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

        function te(t, e, n, i, r, o) { var a = "width" === e ? 1 : 0,
                s = 0,
                l = 0; if (n === (i ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (l += w.css(t, n + it[a], !0, r)), i ? ("content" === n && (l -= w.css(t, "padding" + it[a], !0, r)), "margin" !== n && (l -= w.css(t, "border" + it[a] + "Width", !0, r))) : (l += w.css(t, "padding" + it[a], !0, r), "padding" !== n ? l += w.css(t, "border" + it[a] + "Width", !0, r) : s += w.css(t, "border" + it[a] + "Width", !0, r)); return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5)) || 0), l }

        function ee(t, e, n) { var i = Ht(t),
                r = (!f.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
                o = r,
                a = qt(t, e, i),
                s = "offset" + e[0].toUpperCase() + e.slice(1); if (Bt.test(a)) { if (!n) return a;
                a = "auto" } return (!f.boxSizingReliable() && r || "auto" === a || !parseFloat(a) && "inline" === w.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === w.css(t, "boxSizing", !1, i), (o = s in t) && (a = t[s])), (a = parseFloat(a) || 0) + te(t, e, n || (r ? "border" : "content"), o, i, a) + "px" }

        function ne(t, e, n, i, r) { return new ne.prototype.init(t, e, n, i, r) } w.extend({ cssHooks: { opacity: { get: function(t, e) { if (e) { var n = qt(t, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(t, e, n, i) { if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) { var r, o, a, s = Y(e),
                        l = Qt.test(e),
                        c = t.style; if (l || (e = Gt(s)), a = w.cssHooks[e] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : c[e]; "string" == (o = typeof n) && (r = nt.exec(n)) && r[1] && (n = ct(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n)) } }, css: function(t, e, n, i) { var r, o, a, s = Y(e); return Qt.test(e) || (e = Gt(s)), (a = w.cssHooks[e] || w.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = qt(t, e, i)), "normal" === r && e in Kt && (r = Kt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r } }), w.each(["height", "width"], (function(t, e) { w.cssHooks[e] = { get: function(t, n, i) { if (n) return !Xt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, i) : lt(t, Jt, (function() { return ee(t, e, i) })) }, set: function(t, n, i) { var r, o = Ht(t),
                        a = !f.scrollboxSize() && "absolute" === o.position,
                        s = (a || i) && "border-box" === w.css(t, "boxSizing", !1, o),
                        l = i ? te(t, e, i, s, o) : 0; return s && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - te(t, e, "border", !1, o) - .5)), l && (r = nt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = w.css(t, e)), Zt(0, n, l) } } })), w.cssHooks.marginLeft = Wt(f.reliableMarginLeft, (function(t, e) { if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, { marginLeft: 0 }, (function() { return t.getBoundingClientRect().left }))) + "px" })), w.each({ margin: "", padding: "", border: "Width" }, (function(t, e) { w.cssHooks[t + e] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + it[i] + e] = o[i] || o[i - 2] || o[0]; return r } }, "margin" !== t && (w.cssHooks[t + e].set = Zt) })), w.fn.extend({ css: function(t, e) { return q(this, (function(t, e, n) { var i, r, o = {},
                        a = 0; if (Array.isArray(e)) { for (i = Ht(t), r = e.length; a < r; a++) o[e[a]] = w.css(t, e[a], !1, i); return o } return void 0 !== n ? w.style(t, e, n) : w.css(t, e) }), t, e, 1 < arguments.length) } }), ((w.Tween = ne).prototype = { constructor: ne, init: function(t, e, n, i, r, o) { this.elem = t, this.prop = n, this.easing = r || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function() { var t = ne.propHooks[this.prop]; return t && t.get ? t.get(this) : ne.propHooks._default.get(this) }, run: function(t) { var e, n = ne.propHooks[this.prop]; return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this } }).init.prototype = ne.prototype, (ne.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !w.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit) } } }).scrollTop = ne.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, w.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, w.fx = ne.prototype.init, w.fx.step = {}; var ie, re, oe, ae, se = /^(?:toggle|show|hide)$/,
            le = /queueHooks$/;

        function ce() { re && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ce) : t.setTimeout(ce, w.fx.interval), w.fx.tick()) }

        function he() { return t.setTimeout((function() { ie = void 0 })), ie = Date.now() }

        function ue(t, e) { var n, i = 0,
                r = { height: t }; for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = it[i])] = r["padding" + n] = t; return e && (r.opacity = r.width = t), r }

        function de(t, e, n) { for (var i, r = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, e, t)) return i }

        function pe(t, e, n) { var i, r, o = 0,
                a = pe.prefilters.length,
                s = w.Deferred().always((function() { delete l.elem })),
                l = function() { if (r) return !1; for (var e = ie || he(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i); return s.notifyWith(t, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1) },
                c = s.promise({ elem: t, props: w.extend({}, e), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: e, originalOptions: n, startTime: ie || he(), duration: n.duration, tweens: [], createTween: function(e, n) { var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(i), i }, stop: function(e) { var n = 0,
                            i = e ? c.tweens.length : 0; if (r) return this; for (r = !0; n < i; n++) c.tweens[n].run(1); return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this } }),
                h = c.props; for (function(t, e) { var n, i, r, o, a; for (n in t)
                        if (r = e[i = Y(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = w.cssHooks[i]) && "expand" in a)
                            for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                        else e[i] = r }(h, c.opts.specialEasing); o < a; o++)
                if (i = pe.prefilters[o].call(c, t, h, c.opts)) return g(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i; return w.map(h, de, c), g(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c } w.Animation = w.extend(pe, { tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return ct(n.elem, t, nt.exec(e), n), n }] }, tweener: function(t, e) { g(t) ? (e = t, t = ["*"]) : t = t.match(O); for (var n, i = 0, r = t.length; i < r; i++) n = t[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e) }, prefilters: [function(t, e, n) { var i, r, o, a, s, l, c, h, u = "width" in e || "height" in e,
                    d = this,
                    p = {},
                    f = t.style,
                    g = t.nodeType && st(t),
                    v = Q.get(t, "fxshow"); for (i in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, d.always((function() { d.always((function() { a.unqueued--, w.queue(t, "fx").length || a.empty.fire() })) }))), e)
                    if (r = e[i], se.test(r)) { if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) { if ("show" !== r || !v || void 0 === v[i]) continue;
                            g = !0 } p[i] = v && v[i] || w.style(t, i) } if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(p))
                    for (i in u && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Q.get(t, "display")), "none" === (h = w.css(t, "display")) && (c ? h = c : (ut([t], !0), c = t.style.display || c, h = w.css(t, "display"), ut([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === w.css(t, "float") && (l || (d.done((function() { f.display = c })), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always((function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] }))), l = !1, p) l || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(t, "fxshow", { display: c }), o && (v.hidden = !g), g && ut([t], !0), d.done((function() { for (i in g || ut([t]), Q.remove(t, "fxshow"), p) w.style(t, i, p[i]) }))), l = de(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0)) }], prefilter: function(t, e) { e ? pe.prefilters.unshift(t) : pe.prefilters.push(t) } }), w.speed = function(t, e, n) { var i = t && "object" == typeof t ? w.extend({}, t) : { complete: n || !n && e || g(t) && t, duration: t, easing: n && e || e && !g(e) && e }; return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { g(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue) }, i }, w.fn.extend({ fadeTo: function(t, e, n, i) { return this.filter(st).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) }, animate: function(t, e, n, i) { var r = w.isEmptyObject(t),
                    o = w.speed(e, n, i),
                    a = function() { var e = pe(this, w.extend({}, t), o);
                        (r || Q.get(this, "finish")) && e.stop(!0) }; return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(t, e, n) { var i = function(t) { var e = t.stop;
                    delete t.stop, e(n) }; return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() { var e = !0,
                        r = null != t && t + "queueHooks",
                        o = w.timers,
                        a = Q.get(this); if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && le.test(r) && i(a[r]); for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));!e && n || w.dequeue(this, t) })) }, finish: function(t) { return !1 !== t && (t = t || "fx"), this.each((function() { var e, n = Q.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = w.timers,
                        a = i ? i.length : 0; for (n.finish = !0, w.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1)); for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish })) } }), w.each(["toggle", "show", "hide"], (function(t, e) { var n = w.fn[e];
            w.fn[e] = function(t, i, r) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ue(e, !0), t, i, r) } })), w.each({ slideDown: ue("show"), slideUp: ue("hide"), slideToggle: ue("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function(t, e) { w.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } })), w.timers = [], w.fx.tick = function() { var t, e = 0,
                n = w.timers; for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || w.fx.stop(), ie = void 0 }, w.fx.timer = function(t) { w.timers.push(t), w.fx.start() }, w.fx.interval = 13, w.fx.start = function() { re || (re = !0, ce()) }, w.fx.stop = function() { re = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function(e, n) { return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, i) { var r = t.setTimeout(n, e);
                i.stop = function() { t.clearTimeout(r) } })) }, oe = i.createElement("input"), ae = i.createElement("select").appendChild(i.createElement("option")), oe.type = "checkbox", f.checkOn = "" !== oe.value, f.optSelected = ae.selected, (oe = i.createElement("input")).value = "t", oe.type = "radio", f.radioValue = "t" === oe.value; var fe, ge = w.expr.attrHandle;
        w.fn.extend({ attr: function(t, e) { return q(this, w.attr, t, e, 1 < arguments.length) }, removeAttr: function(t) { return this.each((function() { w.removeAttr(this, t) })) } }), w.extend({ attr: function(t, e, n) { var i, r, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i) }, attrHooks: { type: { set: function(t, e) { if (!f.radioValue && "radio" === e && A(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } }, removeAttr: function(t, e) { var n, i = 0,
                    r = e && e.match(O); if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n) } }), fe = { set: function(t, e, n) { return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), (function(t, e) { var n = ge[e] || w.find.attr;
            ge[e] = function(t, e, i) { var r, o, a = e.toLowerCase(); return i || (o = ge[a], ge[a] = r, r = null != n(t, e, i) ? a : null, ge[a] = o), r } })); var ve = /^(?:input|select|textarea|button)$/i,
            me = /^(?:a|area)$/i;

        function ye(t) { return (t.match(O) || []).join(" ") }

        function be(t) { return t.getAttribute && t.getAttribute("class") || "" }

        function xe(t) { return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || [] } w.fn.extend({ prop: function(t, e) { return q(this, w.prop, t, e, 1 < arguments.length) }, removeProp: function(t) { return this.each((function() { delete this[w.propFix[t] || t] })) } }), w.extend({ prop: function(t, e, n) { var i, r, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, r = w.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = w.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : ve.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), f.optSelected || (w.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null }, set: function(t) { var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex) } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() { w.propFix[this.toLowerCase()] = this })), w.fn.extend({ addClass: function(t) { var e, n, i, r, o, a, s, l = 0; if (g(t)) return this.each((function(e) { w(this).addClass(t.call(this, e, be(this))) })); if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") { for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = ye(i)) && n.setAttribute("class", s) } return this }, removeClass: function(t) { var e, n, i, r, o, a, s, l = 0; if (g(t)) return this.each((function(e) { w(this).removeClass(t.call(this, e, be(this))) })); if (!arguments.length) return this.attr("class", ""); if ((e = xe(t)).length)
                    for (; n = this[l++];)
                        if (r = be(n), i = 1 === n.nodeType && " " + ye(r) + " ") { for (a = 0; o = e[a++];)
                                for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                            r !== (s = ye(i)) && n.setAttribute("class", s) } return this }, toggleClass: function(t, e) { var n = typeof t,
                    i = "string" === n || Array.isArray(t); return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each((function(n) { w(this).toggleClass(t.call(this, n, be(this), e), e) })) : this.each((function() { var e, r, o, a; if (i)
                        for (r = 0, o = w(this), a = xe(t); e = a[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || ((e = be(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || "")) })) }, hasClass: function(t) { var e, n, i = 0; for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + ye(be(n)) + " ").indexOf(e)) return !0; return !1 } }); var we = /\r/g;
        w.fn.extend({ val: function(t) { var e, n, i, r = this[0]; return arguments.length ? (i = g(t), this.each((function(n) { var r;
                    1 === this.nodeType && (null == (r = i ? t.call(this, n, w(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = w.map(r, (function(t) { return null == t ? "" : t + "" }))), (e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r)) }))) : r ? (e = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(we, "") : null == n ? "" : n : void 0 } }), w.extend({ valHooks: { option: { get: function(t) { var e = w.find.attr(t, "value"); return null != e ? e : ye(w.text(t)) } }, select: { get: function(t) { var e, n, i, r = t.options,
                            o = t.selectedIndex,
                            a = "select-one" === t.type,
                            s = a ? null : [],
                            l = a ? o + 1 : r.length; for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (e = w(n).val(), a) return e;
                                s.push(e) } return s }, set: function(t, e) { for (var n, i, r = t.options, o = w.makeArray(e), a = r.length; a--;)((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0); return n || (t.selectedIndex = -1), o } } } }), w.each(["radio", "checkbox"], (function() { w.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e) } }, f.checkOn || (w.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) })), f.focusin = "onfocusin" in t; var _e = /^(?:focusinfocus|focusoutblur)$/,
            Ce = function(t) { t.stopPropagation() };
        w.extend(w.event, { trigger: function(e, n, r, o) { var a, s, l, c, h, d, p, f, m = [r || i],
                    y = u.call(e, "type") ? e.type : e,
                    b = u.call(e, "namespace") ? e.namespace.split(".") : []; if (s = f = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(y + w.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), h = y.indexOf(":") < 0 && "on" + y, (e = e[w.expando] ? e : new w.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = b.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, n))) { if (!o && !p.noBubble && !v(r)) { for (c = p.delegateType || y, _e.test(c + y) || (s = s.parentNode); s; s = s.parentNode) m.push(s), l = s;
                        l === (r.ownerDocument || i) && m.push(l.defaultView || l.parentWindow || t) } for (a = 0;
                        (s = m[a++]) && !e.isPropagationStopped();) f = s, e.type = 1 < a ? c : p.bindType || y, (d = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && d.apply(s, n), (d = h && s[h]) && d.apply && G(s) && (e.result = d.apply(s, n), !1 === e.result && e.preventDefault()); return e.type = y, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), n) || !G(r) || h && g(r[y]) && !v(r) && ((l = r[h]) && (r[h] = null), w.event.triggered = y, e.isPropagationStopped() && f.addEventListener(y, Ce), r[y](), e.isPropagationStopped() && f.removeEventListener(y, Ce), w.event.triggered = void 0, l && (r[h] = l)), e.result } }, simulate: function(t, e, n) { var i = w.extend(new w.Event, n, { type: t, isSimulated: !0 });
                w.event.trigger(i, null, e) } }), w.fn.extend({ trigger: function(t, e) { return this.each((function() { w.event.trigger(t, e, this) })) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return w.event.trigger(t, e, n, !0) } }), f.focusin || w.each({ focus: "focusin", blur: "focusout" }, (function(t, e) { var n = function(t) { w.event.simulate(e, t.target, w.event.fix(t)) };
            w.event.special[e] = { setup: function() { var i = this.ownerDocument || this,
                        r = Q.access(i, e);
                    r || i.addEventListener(t, n, !0), Q.access(i, e, (r || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                        r = Q.access(i, e) - 1;
                    r ? Q.access(i, e, r) : (i.removeEventListener(t, n, !0), Q.remove(i, e)) } } })); var Se = t.location,
            De = Date.now(),
            Te = /\?/;
        w.parseXML = function(e) { var n; if (!e || "string" != typeof e) return null; try { n = (new t.DOMParser).parseFromString(e, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n }; var ke = /\[\]$/,
            Ae = /\r?\n/g,
            Ee = /^(?:submit|button|image|reset|file)$/i,
            Le = /^(?:input|select|textarea|keygen)/i;

        function $e(t, e, n, i) { var r; if (Array.isArray(e)) w.each(e, (function(e, r) { n || ke.test(t) ? i(t, r) : $e(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i) }));
            else if (n || "object" !== b(e)) i(t, e);
            else
                for (r in e) $e(t + "[" + r + "]", e[r], n, i) } w.param = function(t, e) { var n, i = [],
                r = function(t, e) { var n = g(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == t) return ""; if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, (function() { r(this.name, this.value) }));
            else
                for (n in t) $e(n, t[n], e, r); return i.join("&") }, w.fn.extend({ serialize: function() { return w.param(this.serializeArray()) }, serializeArray: function() { return this.map((function() { var t = w.prop(this, "elements"); return t ? w.makeArray(t) : this })).filter((function() { var t = this.type; return this.name && !w(this).is(":disabled") && Le.test(this.nodeName) && !Ee.test(t) && (this.checked || !dt.test(t)) })).map((function(t, e) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, (function(t) { return { name: e.name, value: t.replace(Ae, "\r\n") } })) : { name: e.name, value: n.replace(Ae, "\r\n") } })).get() } }); var Ie = /%20/g,
            Me = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Oe = /^(?:GET|HEAD)$/,
            je = /^\/\//,
            Pe = {},
            Re = {},
            Be = "*/".concat("*"),
            He = i.createElement("a");

        function Ue(t) { return function(e, n) { "string" != typeof e && (n = e, e = "*"); var i, r = 0,
                    o = e.toLowerCase().match(O) || []; if (g(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n) } }

        function qe(t, e, n, i) { var r = {},
                o = t === Re;

            function a(s) { var l; return r[s] = !0, w.each(t[s] || [], (function(t, s) { var c = s(e, n, i); return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1) })), l } return a(e.dataTypes[0]) || !r["*"] && a("*") }

        function We(t, e) { var n, i, r = w.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]); return i && w.extend(!0, t, i), t } He.href = Se.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Se.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Be, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(t, e) { return e ? We(We(t, w.ajaxSettings), e) : We(w.ajaxSettings, t) }, ajaxPrefilter: Ue(Pe), ajaxTransport: Ue(Re), ajax: function(e, n) { "object" == typeof e && (n = e, e = void 0), n = n || {}; var r, o, a, s, l, c, h, u, d, p, f = w.ajaxSetup({}, n),
                    g = f.context || f,
                    v = f.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                    m = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    b = f.statusCode || {},
                    x = {},
                    _ = {},
                    C = "canceled",
                    S = { readyState: 0, getResponseHeader: function(t) { var e; if (h) { if (!s)
                                    for (s = {}; e = Ne.exec(a);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = s[t.toLowerCase() + " "] } return null == e ? null : e.join(", ") }, getAllResponseHeaders: function() { return h ? a : null }, setRequestHeader: function(t, e) { return null == h && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, x[t] = e), this }, overrideMimeType: function(t) { return null == h && (f.mimeType = t), this }, statusCode: function(t) { var e; if (t)
                                if (h) S.always(t[S.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]]; return this }, abort: function(t) { var e = t || C; return r && r.abort(e), D(0, e), this } }; if (m.promise(S), f.url = ((e || f.url || Se.href) + "").replace(je, Se.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) { c = i.createElement("a"); try { c.href = f.url, c.href = c.href, f.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host } catch (e) { f.crossDomain = !0 } } if (f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), qe(Pe, f, n, S), h) return S; for (d in (u = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Oe.test(f.type), o = f.url.replace(Me, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ie, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Te.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Fe, "$1"), p = (Te.test(o) ? "&" : "?") + "_=" + De++ + p), f.url = o + p), f.ifModified && (w.lastModified[o] && S.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && S.setRequestHeader("If-None-Match", w.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && S.setRequestHeader("Content-Type", f.contentType), S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : f.accepts["*"]), f.headers) S.setRequestHeader(d, f.headers[d]); if (f.beforeSend && (!1 === f.beforeSend.call(g, S, f) || h)) return S.abort(); if (C = "abort", y.add(f.complete), S.done(f.success), S.fail(f.error), r = qe(Re, f, n, S)) { if (S.readyState = 1, u && v.trigger("ajaxSend", [S, f]), h) return S;
                    f.async && 0 < f.timeout && (l = t.setTimeout((function() { S.abort("timeout") }), f.timeout)); try { h = !1, r.send(x, D) } catch (e) { if (h) throw e;
                        D(-1, e) } } else D(-1, "No Transport");

                function D(e, n, i, s) { var c, d, p, x, _, C = n;
                    h || (h = !0, l && t.clearTimeout(l), r = void 0, a = s || "", S.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, i && (x = function(t, e, n) { for (var i, r, o, a, s = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type")); if (i)
                            for (r in s)
                                if (s[r] && s[r].test(i)) { l.unshift(r); break } if (l[0] in n) o = l[0];
                        else { for (r in n) { if (!l[0] || t.converters[r + " " + l[0]]) { o = r; break } a || (a = r) } o = o || a } if (o) return o !== l[0] && l.unshift(o), n[o] }(f, S, i)), x = function(t, e, n, i) { var r, o, a, s, l, c = {},
                            h = t.dataTypes.slice(); if (h[1])
                            for (a in t.converters) c[a.toLowerCase()] = t.converters[a]; for (o = h.shift(); o;)
                            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) { if (!(a = c[l + " " + o] || c["* " + o]))
                                for (r in c)
                                    if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {!0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], h.unshift(s[1])); break } if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try { e = a(e) } catch (t) { return { state: "parsererror", error: a ? t : "No conversion from " + l + " to " + o } } } return { state: "success", data: e } }(f, x, S, c), c ? (f.ifModified && ((_ = S.getResponseHeader("Last-Modified")) && (w.lastModified[o] = _), (_ = S.getResponseHeader("etag")) && (w.etag[o] = _)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, d = x.data, c = !(p = x.error))) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (n || C) + "", c ? m.resolveWith(g, [d, C, S]) : m.rejectWith(g, [S, C, p]), S.statusCode(b), b = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? d : p]), y.fireWith(g, [S, C]), u && (v.trigger("ajaxComplete", [S, f]), --w.active || w.event.trigger("ajaxStop"))) } return S }, getJSON: function(t, e, n) { return w.get(t, e, n, "json") }, getScript: function(t, e) { return w.get(t, void 0, e, "script") } }), w.each(["get", "post"], (function(t, e) { w[e] = function(t, n, i, r) { return g(n) && (r = r || i, i = n, n = void 0), w.ajax(w.extend({ url: t, type: e, dataType: r, data: n, success: i }, w.isPlainObject(t) && t)) } })), w._evalUrl = function(t, e) { return w.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(t) { w.globalEval(t, e) } }) }, w.fn.extend({ wrapAll: function(t) { var e; return this[0] && (g(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t })).append(this)), this }, wrapInner: function(t) { return g(t) ? this.each((function(e) { w(this).wrapInner(t.call(this, e)) })) : this.each((function() { var e = w(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t) })) }, wrap: function(t) { var e = g(t); return this.each((function(n) { w(this).wrapAll(e ? t.call(this, n) : t) })) }, unwrap: function(t) { return this.parent(t).not("body").each((function() { w(this).replaceWith(this.childNodes) })), this } }), w.expr.pseudos.hidden = function(t) { return !w.expr.pseudos.visible(t) }, w.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, w.ajaxSettings.xhr = function() { try { return new t.XMLHttpRequest } catch (t) {} }; var ze = { 0: 200, 1223: 204 },
            Ve = w.ajaxSettings.xhr();
        f.cors = !!Ve && "withCredentials" in Ve, f.ajax = Ve = !!Ve, w.ajaxTransport((function(e) { var n, i; if (f.cors || Ve && !e.crossDomain) return { send: function(r, o) { var a, s = e.xhr(); if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a]; for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                    n = function(t) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && t.setTimeout((function() { n && i() })) }, n = n("abort"); try { s.send(e.hasContent && e.data || null) } catch (r) { if (n) throw r } }, abort: function() { n && n() } } })), w.ajaxPrefilter((function(t) { t.crossDomain && (t.contents.script = !1) })), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return w.globalEval(t), t } } }), w.ajaxPrefilter("script", (function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") })), w.ajaxTransport("script", (function(t) { var e, n; if (t.crossDomain || t.scriptAttrs) return { send: function(r, o) { e = w("<script>").attr(t.scriptAttrs || {}).prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type) }), i.head.appendChild(e[0]) }, abort: function() { n && n() } } })); var Ye, Ge = [],
            Xe = /(=)\?(?=&|$)|\?\?/;
        w.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ge.pop() || w.expando + "_" + De++; return this[t] = !0, t } }), w.ajaxPrefilter("json jsonp", (function(e, n, i) { var r, o, a, s = !1 !== e.jsonp && (Xe.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xe, "$1" + r) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return a || w.error(r + " was not called"), a[0] }, e.dataTypes[0] = "json", o = t[r], t[r] = function() { a = arguments }, i.always((function() { void 0 === o ? w(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ge.push(r)), a && g(o) && o(a[0]), a = o = void 0 })), "script" })), f.createHTMLDocument = ((Ye = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ye.childNodes.length), w.parseHTML = function(t, e, n) { return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(r)) : e = i), a = !n && [], (o = E.exec(t)) ? [e.createElement(o[1])] : (o = wt([t], e, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))); var r, o, a }, w.fn.load = function(t, e, n) { var i, r, o, a = this,
                s = t.indexOf(" "); return -1 < s && (i = ye(t.slice(s)), t = t.slice(0, s)), g(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < a.length && w.ajax({ url: t, type: r || "GET", dataType: "html", data: e }).done((function(t) { o = arguments, a.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t) })).always(n && function(t, e) { a.each((function() { n.apply(this, o || [t.responseText, e, t]) })) }), this }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) { w.fn[e] = function(t) { return this.on(e, t) } })), w.expr.pseudos.animated = function(t) { return w.grep(w.timers, (function(e) { return t === e.elem })).length }, w.offset = { setOffset: function(t, e, n) { var i, r, o, a, s, l, c = w.css(t, "position"),
                    h = w(t),
                    u = {}; "static" === c && (t.style.position = "relative"), s = h.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = h.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g(e) && (e = e.call(t, n, w.extend({}, s))), null != e.top && (u.top = e.top - s.top + a), null != e.left && (u.left = e.left - s.left + r), "using" in e ? e.using.call(t, u) : h.css(u) } }, w.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each((function(e) { w.offset.setOffset(this, t, e) })); var e, n, i = this[0]; return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var t, e, n, i = this[0],
                        r = { top: 0, left: 0 }; if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                    else { for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0), r.left += w.css(t, "borderLeftWidth", !0)) } return { top: e.top - r.top - w.css(i, "marginTop", !0), left: e.left - r.left - w.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map((function() { for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent; return t || rt })) } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function(t, e) { var n = "pageYOffset" === e;
            w.fn[t] = function(i) { return q(this, (function(t, i, r) { var o; if (v(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r }), t, i, arguments.length) } })), w.each(["top", "left"], (function(t, e) { w.cssHooks[e] = Wt(f.pixelPosition, (function(t, n) { if (n) return n = qt(t, e), Bt.test(n) ? w(t).position()[e] + "px" : n })) })), w.each({ Height: "height", Width: "width" }, (function(t, e) { w.each({ padding: "inner" + t, content: e, "": "outer" + t }, (function(n, i) { w.fn[i] = function(r, o) { var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border"); return q(this, (function(e, n, r) { var o; return v(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? w.css(e, n, s) : w.style(e, n, r, s) }), e, a ? r : void 0, a) } })) })), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) { w.fn[e] = function(t, n) { return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e) } })), w.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), w.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) } }), w.proxy = function(t, e) { var n, i, r; if ("string" == typeof e && (n = t[e], e = t, t = n), g(t)) return i = o.call(arguments, 2), (r = function() { return t.apply(e || this, i.concat(o.call(arguments))) }).guid = t.guid = t.guid || w.guid++, r }, w.holdReady = function(t) { t ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = v, w.camelCase = Y, w.type = b, w.now = Date.now, w.isNumeric = function(t) { var e = w.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) }, "function" == typeof define && define.amd && define("jquery", [], (function() { return w })); var Qe = t.jQuery,
            Je = t.$; return w.noConflict = function(e) { return t.$ === w && (t.$ = Je), e && t.jQuery === w && (t.jQuery = Qe), w }, e || (t.jQuery = t.$ = w), w })), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(t) { "use strict"; var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(), function(t) { "use strict";
        t.fn.emulateTransitionEnd = function(e) { var n = !1,
                i = this; return t(this).one("bsTransitionEnd", (function() { n = !0 })), setTimeout((function() { n || t(i).trigger(t.support.transition.end) }), e), this }, t((function() { t.support.transition = function() { var t = document.createElement("bootstrap"),
                    e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var n in e)
                    if (void 0 !== t.style[n]) return { end: e[n] }; return !1 }(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) })) }(jQuery), function(t) { "use strict"; var e = '[data-dismiss="alert"]',
            n = function(n) { t(n).on("click", e, this.close) };
        n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) { var i = t(this),
                r = i.attr("data-target");
            r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), r = "#" === r ? [] : r; var o = t(document).find(r);

            function a() { o.detach().trigger("closed.bs.alert").remove() } e && e.preventDefault(), o.length || (o = i.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a()) }; var i = t.fn.alert;
        t.fn.alert = function(e) { return this.each((function() { var i = t(this),
                    r = i.data("bs.alert");
                r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i) })) }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() { return t.fn.alert = i, this }, t(document).on("click.bs.alert.data-api", e, n.prototype.close) }(jQuery), function(t) { "use strict"; var e = function(n, i) { this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1 };

        function n(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.button"),
                    o = "object" == typeof n && n;
                r || i.data("bs.button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n) })) } e.VERSION = "3.4.1", e.DEFAULTS = { loadingText: "loading..." }, e.prototype.setState = function(e) { var n = "disabled",
                i = this.$element,
                r = i.is("input") ? "val" : "html",
                o = i.data();
            e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy((function() { i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1)) }), this), 0) }, e.prototype.toggle = function() { var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]'); if (e.length) { var n = this.$element.find("input"); "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var i = t.fn.button;
        t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function() { return t.fn.button = i, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) { var i = t(e.target).closest(".btn");
            n.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus")) })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })) }(jQuery), function(t) { "use strict"; var e = function(e, n) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };

        function n(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.carousel"),
                    o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                    a = "string" == typeof n ? n : o.slide;
                r || i.data("bs.carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : a ? r[a]() : o.interval && r.pause().cycle() })) } e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, e.prototype.keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) { switch (t.which) {
                    case 37:
                        this.prev(); break;
                    case 39:
                        this.next(); break;
                    default:
                        return } t.preventDefault() } }, e.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, e.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, e.prototype.getItemForDirection = function(t, e) { var n = this.getItemIndex(e); if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e; var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length; return this.$items.eq(i) }, e.prototype.to = function(t) { var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() { e.to(t) })) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t)) }, e.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, e.prototype.next = function() { if (!this.sliding) return this.slide("next") }, e.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, e.prototype.slide = function(n, i) { var r = this.$element.find(".item.active"),
                o = i || this.getItemForDirection(n, r),
                a = this.interval,
                s = "next" == n ? "left" : "right",
                l = this; if (o.hasClass("active")) return this.sliding = !1; var c = o[0],
                h = t.Event("slide.bs.carousel", { relatedTarget: c, direction: s }); if (this.$element.trigger(h), !h.isDefaultPrevented()) { if (this.sliding = !0, a && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                    u && u.addClass("active") } var d = t.Event("slid.bs.carousel", { relatedTarget: c, direction: s }); return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(n), "object" == typeof o && o.length && o[0].offsetWidth, r.addClass(s), o.addClass(s), r.one("bsTransitionEnd", (function() { o.removeClass([n, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout((function() { l.$element.trigger(d) }), 0) })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), a && this.cycle(), this } }; var i = t.fn.carousel;
        t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() { return t.fn.carousel = i, this }; var r = function(e) { var i = t(this),
                r = i.attr("href");
            r && (r = r.replace(/.*(?=#[^\s]+$)/, "")); var o = i.attr("data-target") || r,
                a = t(document).find(o); if (a.hasClass("carousel")) { var s = t.extend({}, a.data(), i.data()),
                    l = i.attr("data-slide-to");
                l && (s.interval = !1), n.call(a, s), l && a.data("bs.carousel").to(l), e.preventDefault() } };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", (function() { t('[data-ride="carousel"]').each((function() { var e = t(this);
                n.call(e, e.data()) })) })) }(jQuery), function(t) { "use strict"; var e = function(n, i) { this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };

        function n(e) { var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(document).find(i) }

        function i(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.collapse"),
                    o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || i.data("bs.collapse", r = new e(this, o)), "string" == typeof n && r[n]() })) } e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = { toggle: !0 }, e.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, e.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var n, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(r && r.length && (n = r.data("bs.collapse")) && n.transitioning)) { var o = t.Event("show.bs.collapse"); if (this.$element.trigger(o), !o.isDefaultPrevented()) { r && r.length && (i.call(r, "hide"), n || r.data("bs.collapse", null)); var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var s = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return s.call(this); var l = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l]) } } } }, e.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var n = t.Event("hide.bs.collapse"); if (this.$element.trigger(n), !n.isDefaultPrevented()) { var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var r = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; if (!t.support.transition) return r.call(this);
                    this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(e.TRANSITION_DURATION) } } }, e.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, e.prototype.getParent = function() { return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, i) { var r = t(i);
                this.addAriaAndCollapsedClass(n(r), r) }), this)).end() }, e.prototype.addAriaAndCollapsedClass = function(t, e) { var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var r = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() { return t.fn.collapse = r, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) { var r = t(this);
            r.attr("data-target") || e.preventDefault(); var o = n(r),
                a = o.data("bs.collapse") ? "toggle" : r.data();
            i.call(o, a) })) }(jQuery), function(t) { "use strict"; var e = '[data-toggle="dropdown"]',
            n = function(e) { t(e).on("click.bs.dropdown", this.toggle) };

        function i(e) { var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")); var i = "#" !== n ? t(document).find(n) : null; return i && i.length ? i : e.parent() }

        function r(n) { n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each((function() { var e = t(this),
                    r = i(e),
                    o = { relatedTarget: this };
                r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o))))) }))) } n.VERSION = "3.4.1", n.prototype.toggle = function(e) { var n = t(this); if (!n.is(".disabled, :disabled")) { var o = i(n),
                    a = o.hasClass("open"); if (r(), !a) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", r); var s = { relatedTarget: this }; if (o.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                    n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s)) } return !1 } }, n.prototype.keydown = function(n) { if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) { var r = t(this); if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) { var o = i(r),
                        a = o.hasClass("open"); if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(e).trigger("focus"), r.trigger("click"); var s = o.find(".dropdown-menu li:not(.disabled):visible a"); if (s.length) { var l = s.index(n.target);
                        38 == n.which && 0 < l && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus") } } } }; var o = t.fn.dropdown;
        t.fn.dropdown = function(e) { return this.each((function() { var i = t(this),
                    r = i.data("bs.dropdown");
                r || i.data("bs.dropdown", r = new n(this)), "string" == typeof e && r[e].call(i) })) }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = o, this }, t(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) { t.stopPropagation() })).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown) }(jQuery), function(t) { "use strict"; var e = function(e, n) { this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() { this.$element.trigger("loaded.bs.modal") }), this)) };

        function n(n, i) { return this.each((function() { var r = t(this),
                    o = r.data("bs.modal"),
                    a = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
                o || r.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](i) : a.show && o.show(i) })) } e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, e.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, e.prototype.show = function(n) { var i = this,
                r = t.Event("show.bs.modal", { relatedTarget: n });
            this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() { i.$element.one("mouseup.dismiss.bs.modal", (function(e) { t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0) })) })), this.backdrop((function() { var r = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus(); var o = t.Event("shown.bs.modal", { relatedTarget: n });
                r ? i.$dialog.one("bsTransitionEnd", (function() { i.$element.trigger("focus").trigger(o) })).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o) }))) }, e.prototype.hide = function(n) { n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal()) }, e.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }), this)) }, e.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) { 27 == t.which && this.hide() }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, e.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, e.prototype.hideModal = function() { var t = this;
            this.$element.hide(), this.backdrop((function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })) }, e.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, e.prototype.backdrop = function(n) { var i = this,
                r = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var o = t.support.transition && r; if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) { this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()) }), this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
                o ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var a = function() { i.removeBackdrop(), n && n() };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a() } else n && n() }, e.prototype.handleUpdate = function() { this.adjustDialog() }, e.prototype.adjustDialog = function() { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, e.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, e.prototype.checkScrollbar = function() { var t = window.innerWidth; if (!t) { var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left) } this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, e.prototype.setScrollbar = function() { var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || ""; var n = this.scrollbarWidth;
            this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each((function(e, i) { var r = i.style.paddingRight,
                    o = t(i).css("padding-right");
                t(i).data("padding-right", r).css("padding-right", parseFloat(o) + n + "px") }))) }, e.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, n) { var i = t(n).data("padding-right");
                t(n).removeData("padding-right"), n.style.paddingRight = i || "" })) }, e.prototype.measureScrollbar = function() { var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var i = t.fn.modal;
        t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() { return t.fn.modal = i, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) { var i = t(this),
                r = i.attr("href"),
                o = i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""),
                a = t(document).find(o),
                s = a.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(r) && r }, a.data(), i.data());
            i.is("a") && e.preventDefault(), a.one("show.bs.modal", (function(t) { t.isDefaultPrevented() || a.one("hidden.bs.modal", (function() { i.is(":visible") && i.trigger("focus") })) })), n.call(a, s, this) })) }(jQuery), function(t) { "use strict"; var e = ["sanitize", "whiteList", "sanitizeFn"],
            n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            r = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function o(e, o) { var a = e.nodeName.toLowerCase(); if (-1 !== t.inArray(a, o)) return -1 === t.inArray(a, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(r)); for (var s = t(o).filter((function(t, e) { return e instanceof RegExp })), l = 0, c = s.length; l < c; l++)
                if (a.match(s[l])) return !0; return !1 }

        function a(e, n, i) { if (0 === e.length) return e; if (i && "function" == typeof i) return i(e); if (!document.implementation || !document.implementation.createHTMLDocument) return e; var r = document.implementation.createHTMLDocument("sanitization");
            r.body.innerHTML = e; for (var a = t.map(n, (function(t, e) { return e })), s = t(r.body).find("*"), l = 0, c = s.length; l < c; l++) { var h = s[l],
                    u = h.nodeName.toLowerCase(); if (-1 !== t.inArray(u, a))
                    for (var d = t.map(h.attributes, (function(t) { return t })), p = [].concat(n["*"] || [], n[u] || []), f = 0, g = d.length; f < g; f++) o(d[f], p) || h.removeAttribute(d[f].nodeName);
                else h.parentNode.removeChild(h) } return r.body.innerHTML } var s = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
        s.VERSION = "3.4.1", s.TRANSITION_DURATION = 150, s.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 }, sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } }, s.prototype.init = function(e, n, i) { if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var r = this.options.trigger.split(" "), o = r.length; o--;) { var a = r[o]; if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != a) { var s = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } } this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, s.prototype.getDefaults = function() { return s.DEFAULTS }, s.prototype.getOptions = function(n) { var i = this.$element.data(); for (var r in i) i.hasOwnProperty(r) && -1 !== t.inArray(r, e) && delete i[r]; return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = { show: n.delay, hide: n.delay }), n.sanitize && (n.template = a(n.template, n.whiteList, n.sanitizeFn)), n }, s.prototype.getDelegateOptions = function() { var e = {},
                n = this.getDefaults(); return this._options && t.each(this._options, (function(t, i) { n[t] != i && (e[t] = i) })), e }, s.prototype.enter = function(e) { var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
            else { if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout((function() { "in" == n.hoverState && n.show() }), n.options.delay.show) } }, s.prototype.isInStateTrue = function() { for (var t in this.inState)
                if (this.inState[t]) return !0; return !1 }, s.prototype.leave = function(e) { var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) { if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout((function() { "out" == n.hoverState && n.hide() }), n.options.delay.hide) } }, s.prototype.show = function() { var e = t.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(e); var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (e.isDefaultPrevented() || !n) return; var i = this,
                    r = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade"); var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(a);
                c && (a = a.replace(l, "") || "top"), r.detach().css({ top: 0, left: 0, display: "block" }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(t(document).find(this.options.container)) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var h = this.getPosition(),
                    u = r[0].offsetWidth,
                    d = r[0].offsetHeight; if (c) { var p = a,
                        f = this.getPosition(this.$viewport);
                    a = "bottom" == a && h.bottom + d > f.bottom ? "top" : "top" == a && h.top - d < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, r.removeClass(p).addClass(a) } var g = this.getCalculatedOffset(a, h, u, d);
                this.applyPlacement(g, a); var v = function() { var t = i.hoverState;
                    i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i) };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(s.TRANSITION_DURATION) : v() } }, s.prototype.applyPlacement = function(e, n) { var i = this.tip(),
                r = i[0].offsetWidth,
                o = i[0].offsetHeight,
                a = parseInt(i.css("margin-top"), 10),
                s = parseInt(i.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), i.addClass("in"); var l = i[0].offsetWidth,
                c = i[0].offsetHeight; "top" == n && c != o && (e.top = e.top + o - c); var h = this.getViewportAdjustedDelta(n, e, l, c);
            h.left ? e.left += h.left : e.top += h.top; var u = /top|bottom/.test(n),
                d = u ? 2 * h.left - r + l : 2 * h.top - o + c,
                p = u ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(d, i[0][p], u) }, s.prototype.replaceArrow = function(t, e, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "") }, s.prototype.setContent = function() { var t = this.tip(),
                e = this.getTitle();
            this.options.html ? (this.options.sanitize && (e = a(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right") }, s.prototype.hide = function(e) { var n = this,
                i = t(this.$tip),
                r = t.Event("hide.bs." + this.type);

            function o() { "in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e() } if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", o).emulateTransitionEnd(s.TRANSITION_DURATION) : o(), this.hoverState = null, this }, s.prototype.fixTitle = function() { var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, s.prototype.hasContent = function() { return this.getTitle() }, s.prototype.getPosition = function(e) { var n = (e = e || this.$element)[0],
                i = "BODY" == n.tagName,
                r = n.getBoundingClientRect();
            null == r.width && (r = t.extend({}, r, { width: r.right - r.left, height: r.bottom - r.top })); var o = window.SVGElement && n instanceof window.SVGElement,
                a = i ? { top: 0, left: 0 } : o ? null : e.offset(),
                s = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                l = i ? { width: t(window).width(), height: t(window).height() } : null; return t.extend({}, r, s, l, a) }, s.prototype.getCalculatedOffset = function(t, e, n, i) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 } : "top" == t ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 } : "left" == t ? { top: e.top + e.height / 2 - i / 2, left: e.left - n } : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width } }, s.prototype.getViewportAdjustedDelta = function(t, e, n, i) { var r = { top: 0, left: 0 }; if (!this.$viewport) return r; var o = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport); if (/right|left/.test(t)) { var s = e.top - o - a.scroll,
                    l = e.top + o - a.scroll + i;
                s < a.top ? r.top = a.top - s : l > a.top + a.height && (r.top = a.top + a.height - l) } else { var c = e.left - o,
                    h = e.left + o + n;
                c < a.left ? r.left = a.left - c : h > a.right && (r.left = a.left + a.width - h) } return r }, s.prototype.getTitle = function() { var t = this.$element,
                e = this.options; return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title) }, s.prototype.getUID = function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, s.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, s.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, s.prototype.enable = function() { this.enabled = !0 }, s.prototype.disable = function() { this.enabled = !1 }, s.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, s.prototype.toggle = function(e) { var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n) }, s.prototype.destroy = function() { var t = this;
            clearTimeout(this.timeout), this.hide((function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null })) }, s.prototype.sanitizeHtml = function(t) { return a(t, this.options.whiteList, this.options.sanitizeFn) }; var l = t.fn.tooltip;
        t.fn.tooltip = function(e) { return this.each((function() { var n = t(this),
                    i = n.data("bs.tooltip"),
                    r = "object" == typeof e && e;!i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new s(this, r)), "string" == typeof e && i[e]()) })) }, t.fn.tooltip.Constructor = s, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = l, this } }(jQuery), function(t) { "use strict"; var e = function(t, e) { this.init("popover", t, e) }; if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() { return e.DEFAULTS }, e.prototype.setContent = function() { var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent(); if (this.options.html) { var i = typeof n;
                this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n) } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
            t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, e.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, e.prototype.getContent = function() { var t = this.$element,
                e = this.options; return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, e.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var n = t.fn.popover;
        t.fn.popover = function(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.popover"),
                    o = "object" == typeof n && n;!r && /destroy|hide/.test(n) || (r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]()) })) }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() { return t.fn.popover = n, this } }(jQuery), function(t) { "use strict";

        function e(n, i) { this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

        function n(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.scrollspy"),
                    o = "object" == typeof n && n;
                r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]() })) } e.VERSION = "3.4.1", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() { var e = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() { var e = t(this),
                    r = e.data("target") || e.attr("href"),
                    o = /^#./.test(r) && t(r); return o && o.length && o.is(":visible") && [
                    [o[n]().top + i, r]
                ] || null })).sort((function(t, e) { return t[0] - e[0] })).each((function() { e.offsets.push(this[0]), e.targets.push(this[1]) })) }, e.prototype.process = function() { var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                r = this.offsets,
                o = this.targets,
                a = this.activeTarget; if (this.scrollHeight != n && this.refresh(), i <= e) return a != (t = o[o.length - 1]) && this.activate(t); if (a && e < r[0]) return this.activeTarget = null, this.clear(); for (t = r.length; t--;) a != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, this.clear(); var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy") }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var i = t.fn.scrollspy;
        t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = i, this }, t(window).on("load.bs.scrollspy.data-api", (function() { t('[data-spy="scroll"]').each((function() { var e = t(this);
                n.call(e, e.data()) })) })) }(jQuery), function(t) { "use strict"; var e = function(e) { this.element = t(e) };

        function n(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.tab");
                r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]() })) } e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() { var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target"); if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) { var r = n.find(".active:last a"),
                    o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                    a = t.Event("show.bs.tab", { relatedTarget: r[0] }); if (r.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) { var s = t(document).find(i);
                    this.activate(e.closest("li"), n), this.activate(s, s.parent(), (function() { r.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: r[0] }) })) } } }, e.prototype.activate = function(n, i, r) { var o = i.find("> .active"),
                a = r && t.support.transition && (o.length && o.hasClass("fade") || !!i.find("> .fade").length);

            function s() { o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r() } o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), o.removeClass("in") }; var i = t.fn.tab;
        t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() { return t.fn.tab = i, this }; var r = function(e) { e.preventDefault(), n.call(t(this), "show") };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r) }(jQuery), function(t) { "use strict"; var e = function(n, i) { this.options = t.extend({}, e.DEFAULTS, i); var r = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
            this.$target = r.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };

        function n(n) { return this.each((function() { var i = t(this),
                    r = i.data("bs.affix"),
                    o = "object" == typeof n && n;
                r || i.data("bs.affix", r = new e(this, o)), "string" == typeof n && r[n]() })) } e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0, target: window }, e.prototype.getState = function(t, e, n, i) { var r = this.$target.scrollTop(),
                o = this.$element.offset(),
                a = this.$target.height(); if (null != n && "top" == this.affixed) return r < n && "top"; if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + a <= t - i) && "bottom"; var s = null == this.affixed,
                l = s ? r : o.top; return null != n && r <= n ? "top" : null != i && t - i <= l + (s ? a : e) && "bottom" }, e.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix"); var t = this.$target.scrollTop(),
                n = this.$element.offset(); return this.pinnedOffset = n.top - t }, e.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, e.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var n = this.$element.height(),
                    i = this.options.offset,
                    r = i.top,
                    o = i.bottom,
                    a = Math.max(t(document).height(), t(document.body).height()); "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element)); var s = this.getState(a, n, r, o); if (this.affixed != s) { null != this.unpin && this.$element.css("top", ""); var l = "affix" + (s ? "-" + s : ""),
                        c = t.Event(l + ".bs.affix"); if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == s && this.$element.offset({ top: a - n - o }) } }; var i = t.fn.affix;
        t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() { return t.fn.affix = i, this }, t(window).on("load", (function() { t('[data-spy="affix"]').each((function() { var e = t(this),
                    i = e.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i) })) })) }(jQuery), function(t) { "function" == typeof define && define.amd ? define(["jquery"], (function(e) { return t(e, window, document) })) : "object" == typeof exports ? module.exports = function(e, n) { return e || (e = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n, e, e.document) } : t(jQuery, window, document) }((function(t, e, n, i) {
        function r(e) { var n, i, o = {};
            t.each(e, (function(t) {
                (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (i = t.replace(n[0], n[2].toLowerCase()), o[i] = t, "o" === n[1] && r(e[t])) })), e._hungarianMap = o }

        function o(e, n, a) { var s;
            e._hungarianMap || r(e), t.each(n, (function(r) {
                (s = e._hungarianMap[r]) === i || !a && n[s] !== i || ("o" === s.charAt(0) ? (n[s] || (n[s] = {}), t.extend(!0, n[s], n[r]), o(e[s], n[s], a)) : n[s] = n[r]) })) }

        function a(t) { var e = Vt.defaults.oLanguage,
                n = e.sDecimal; if (n && Bt(n), t) { var i = t.sZeroRecords;!t.sEmptyTable && i && "No data available in table" === e.sEmptyTable && $t(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && i && "Loading..." === e.sLoadingRecords && $t(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands), (t = t.sDecimal) && n !== t && Bt(t) } }

        function s(t) { if (ce(t, "ordering", "bSort"), ce(t, "orderMulti", "bSortMulti"), ce(t, "orderClasses", "bSortClasses"), ce(t, "orderCellsTop", "bSortCellsTop"), ce(t, "order", "aaSorting"), ce(t, "orderFixed", "aaSortingFixed"), ce(t, "paging", "bPaginate"), ce(t, "pagingType", "sPaginationType"), ce(t, "pageLength", "iDisplayLength"), ce(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : ""), t = t.aoSearchCols)
                for (var e = 0, n = t.length; e < n; e++) t[e] && o(Vt.models.oSearch, t[e]) }

        function l(e) { ce(e, "orderable", "bSortable"), ce(e, "orderData", "aDataSort"), ce(e, "orderSequence", "asSorting"), ce(e, "orderDataType", "sortDataType"); var n = e.aDataSort; "number" == typeof n && !t.isArray(n) && (e.aDataSort = [n]) }

        function c(n) { if (!Vt.__browser) { var i = {};
                Vt.__browser = i; var r = t("<div/>").css({ position: "fixed", top: 0, left: -1 * t(e).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(t("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(t("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                    o = r.children(),
                    a = o.children();
                i.barWidth = o[0].offsetWidth - o[0].clientWidth, i.bScrollOversize = 100 === a[0].offsetWidth && 100 !== o[0].clientWidth, i.bScrollbarLeft = 1 !== Math.round(a.offset().left), i.bBounding = !!r[0].getBoundingClientRect().width, r.remove() } t.extend(n.oBrowser, Vt.__browser), n.oScroll.iBarWidth = Vt.__browser.barWidth }

        function h(t, e, n, r, o, a) { var s, l = !1; for (n !== i && (s = n, l = !0); r !== o;) t.hasOwnProperty(r) && (s = l ? e(s, t[r], r, t) : t[r], l = !0, r += a); return s }

        function u(e, i) { var r = Vt.defaults.column,
                o = e.aoColumns.length;
            r = t.extend({}, Vt.models.oColumn, r, { nTh: i || n.createElement("th"), sTitle: r.sTitle ? r.sTitle : i ? i.innerHTML : "", aDataSort: r.aDataSort ? r.aDataSort : [o], mData: r.mData ? r.mData : o, idx: o });
            e.aoColumns.push(r), (r = e.aoPreSearchCols)[o] = t.extend({}, Vt.models.oSearch, r[o]), d(e, o, t(i).data()) }

        function d(e, n, r) { n = e.aoColumns[n]; var a = e.oClasses,
                s = t(n.nTh); if (!n.sWidthOrig) { n.sWidthOrig = s.attr("width") || null; var c = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                c && (n.sWidthOrig = c[1]) } r !== i && null !== r && (l(r), o(Vt.defaults.column, r), r.mDataProp !== i && !r.mData && (r.mData = r.mDataProp), r.sType && (n._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), r.sClass && s.addClass(r.sClass), t.extend(n, r), $t(n, r, "sWidth", "sWidthOrig"), r.iDataSort !== i && (n.aDataSort = [r.iDataSort]), $t(n, r, "aDataSort")); var h = n.mData,
                u = D(h),
                d = n.mRender ? D(n.mRender) : null;
            r = function(t) { return "string" == typeof t && -1 !== t.indexOf("@") };
            n._bAttrSrc = t.isPlainObject(h) && (r(h.sort) || r(h.type) || r(h.filter)), n._setter = null, n.fnGetData = function(t, e, n) { var r = u(t, e, i, n); return d && e ? d(r, e, t, n) : r }, n.fnSetData = function(t, e, n) { return T(h)(t, e, n) }, "number" != typeof h && (e._rowReadObject = !0), e.oFeatures.bSort || (n.bSortable = !1, s.addClass(a.sSortableNone)), e = -1 !== t.inArray("asc", n.asSorting), r = -1 !== t.inArray("desc", n.asSorting), n.bSortable && (e || r) ? e && !r ? (n.sSortingClass = a.sSortableAsc, n.sSortingClassJUI = a.sSortJUIAscAllowed) : !e && r ? (n.sSortingClass = a.sSortableDesc, n.sSortingClassJUI = a.sSortJUIDescAllowed) : (n.sSortingClass = a.sSortable, n.sSortingClassJUI = a.sSortJUI) : (n.sSortingClass = a.sSortableNone, n.sSortingClassJUI = "") }

        function p(t) { if (!1 !== t.oFeatures.bAutoWidth) { var e = t.aoColumns;
                gt(t); for (var n = 0, i = e.length; n < i; n++) e[n].nTh.style.width = e[n].sWidth }("" !== (e = t.oScroll).sY || "" !== e.sX) && pt(t), Nt(t, null, "column-sizing", [t]) }

        function f(t, e) { var n = m(t, "bVisible"); return "number" == typeof n[e] ? n[e] : null }

        function g(e, n) { var i = m(e, "bVisible"); return -1 !== (i = t.inArray(n, i)) ? i : null }

        function v(e) { var n = 0; return t.each(e.aoColumns, (function(e, i) { i.bVisible && "none" !== t(i.nTh).css("display") && n++ })), n }

        function m(e, n) { var i = []; return t.map(e.aoColumns, (function(t, e) { t[n] && i.push(e) })), i }

        function y(t) { var e, n, r, o, a, s, l, c, h, u = t.aoColumns,
                d = t.aoData,
                p = Vt.ext.type.detect; for (e = 0, n = u.length; e < n; e++)
                if (h = [], !(l = u[e]).sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) { for (r = 0, o = p.length; r < o; r++) { for (a = 0, s = d.length; a < s && (h[a] === i && (h[a] = _(t, a, e, "type")), (c = p[r](h[a], t)) || r === p.length - 1) && "html" !== c; a++); if (c) { l.sType = c; break } } l.sType || (l.sType = "string") } }

        function b(e, n, r, o) { var a, s, l, c, h, d, p = e.aoColumns; if (n)
                for (a = n.length - 1; 0 <= a; a--) { var f = (d = n[a]).targets !== i ? d.targets : d.aTargets; for (t.isArray(f) || (f = [f]), s = 0, l = f.length; s < l; s++)
                        if ("number" == typeof f[s] && 0 <= f[s]) { for (; p.length <= f[s];) u(e);
                            o(f[s], d) } else if ("number" == typeof f[s] && 0 > f[s]) o(p.length + f[s], d);
                    else if ("string" == typeof f[s])
                        for (c = 0, h = p.length; c < h; c++)("_all" == f[s] || t(p[c].nTh).hasClass(f[s])) && o(c, d) }
            if (r)
                for (a = 0, e = r.length; a < e; a++) o(a, r[a]) }

        function x(e, n, r, o) { var a = e.aoData.length,
                s = t.extend(!0, {}, Vt.models.oRow, { src: r ? "dom" : "data", idx: a });
            s._aData = n, e.aoData.push(s); for (var l = e.aoColumns, c = 0, h = l.length; c < h; c++) l[c].sType = null; return e.aiDisplayMaster.push(a), (n = e.rowIdFn(n)) !== i && (e.aIds[n] = s), (r || !e.oFeatures.bDeferRender) && I(e, a, r, o), a }

        function w(e, n) { var i; return n instanceof t || (n = t(n)), n.map((function(t, n) { return i = $(e, n), x(e, i.data, n, i.cells) })) }

        function _(t, e, n, r) { var o = t.iDraw,
                a = t.aoColumns[n],
                s = t.aoData[e]._aData,
                l = a.sDefaultContent,
                c = a.fnGetData(s, r, { settings: t, row: e, col: n }); if (c === i) return t.iDrawError != o && null === l && (Lt(t, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), l; if (c !== s && null !== c || null === l || r === i) { if ("function" == typeof c) return c.call(s) } else c = l; return null === c && "display" == r ? "" : c }

        function C(t, e, n, i) { t.aoColumns[n].fnSetData(t.aoData[e]._aData, i, { settings: t, row: e, col: n }) }

        function S(e) { return t.map(e.match(/(\\.|[^\.])+/g) || [""], (function(t) { return t.replace(/\\\./g, ".") })) }

        function D(e) { if (t.isPlainObject(e)) { var n = {}; return t.each(e, (function(t, e) { e && (n[t] = D(e)) })),
                    function(t, e, r, o) { var a = n[e] || n._; return a !== i ? a(t, e, r, o) : t } } if (null === e) return function(t) { return t }; if ("function" == typeof e) return function(t, n, i, r) { return e(t, n, i, r) }; if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) { var r = function(e, n, o) { var a, s; if ("" !== o)
                        for (var l = 0, c = (s = S(o)).length; l < c; l++) { if (o = s[l].match(he), a = s[l].match(ue), o) { if (s[l] = s[l].replace(he, ""), "" !== s[l] && (e = e[s[l]]), a = [], s.splice(0, l + 1), s = s.join("."), t.isArray(e))
                                    for (l = 0, c = e.length; l < c; l++) a.push(r(e[l], n, s));
                                e = "" === (e = o[0].substring(1, o[0].length - 1)) ? a : a.join(e); break } if (a) s[l] = s[l].replace(ue, ""), e = e[s[l]]();
                            else { if (null === e || e[s[l]] === i) return i;
                                e = e[s[l]] } }
                    return e }; return function(t, n) { return r(t, n, e) } } return function(t) { return t[e] } }

        function T(e) { if (t.isPlainObject(e)) return T(e._); if (null === e) return function() {}; if ("function" == typeof e) return function(t, n, i) { e(t, "set", n, i) }; if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) { var n = function(e, r, o) { var a;
                    a = (o = S(o))[o.length - 1]; for (var s, l, c = 0, h = o.length - 1; c < h; c++) { if (s = o[c].match(he), l = o[c].match(ue), s) { if (o[c] = o[c].replace(he, ""), e[o[c]] = [], (a = o.slice()).splice(0, c + 1), s = a.join("."), t.isArray(r))
                                for (l = 0, h = r.length; l < h; l++) n(a = {}, r[l], s), e[o[c]].push(a);
                            else e[o[c]] = r; return } l && (o[c] = o[c].replace(ue, ""), e = e[o[c]](r)), null !== e[o[c]] && e[o[c]] !== i || (e[o[c]] = {}), e = e[o[c]] } a.match(ue) ? e[a.replace(ue, "")](r) : e[a.replace(he, "")] = r }; return function(t, i) { return n(t, i, e) } } return function(t, n) { t[e] = n } }

        function k(t) { return re(t.aoData, "_aData") }

        function A(t) { t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {} }

        function E(t, e, n) { for (var r = -1, o = 0, a = t.length; o < a; o++) t[o] == e ? r = o : t[o] > e && t[o]--; - 1 != r && n === i && t.splice(r, 1) }

        function L(t, e, n, r) { var o, a = t.aoData[e],
                s = function(n, i) { for (; n.childNodes.length;) n.removeChild(n.firstChild);
                    n.innerHTML = _(t, e, i, "display") }; if ("dom" !== n && (n && "auto" !== n || "dom" !== a.src)) { var l = a.anCells; if (l)
                    if (r !== i) s(l[r], r);
                    else
                        for (n = 0, o = l.length; n < o; n++) s(l[n], n) } else a._aData = $(t, a, r, r === i ? i : a._aData).data; if (a._aSortData = null, a._aFilterData = null, s = t.aoColumns, r !== i) s[r].sType = null;
            else { for (n = 0, o = s.length; n < o; n++) s[n].sType = null;
                M(t, a) } }

        function $(e, n, r, o) { var a, s, l, c = [],
                h = n.firstChild,
                u = 0,
                d = e.aoColumns,
                p = e._rowReadObject,
                f = (o = o !== i ? o : p ? {} : [], function(t, e) { if ("string" == typeof t) { var n = t.indexOf("@"); - 1 !== n && (n = t.substring(n + 1), T(t)(o, e.getAttribute(n))) } }),
                g = function(e) { r !== i && r !== u || (s = d[u], l = t.trim(e.innerHTML), s && s._bAttrSrc ? (T(s.mData._)(o, l), f(s.mData.sort, e), f(s.mData.type, e), f(s.mData.filter, e)) : p ? (s._setter || (s._setter = T(s.mData)), s._setter(o, l)) : o[u] = l), u++ }; if (h)
                for (; h;) "TD" != (a = h.nodeName.toUpperCase()) && "TH" != a || (g(h), c.push(h)), h = h.nextSibling;
            else
                for (h = 0, a = (c = n.anCells).length; h < a; h++) g(c[h]); return (n = n.firstChild ? n : n.nTr) && (n = n.getAttribute("id")) && T(e.rowId)(o, n), { data: o, cells: c } }

        function I(e, i, r, o) { var a, s, l, c, h, u = e.aoData[i],
                d = u._aData,
                p = []; if (null === u.nTr) { for (a = r || n.createElement("tr"), u.nTr = a, u.anCells = p, a._DT_RowIndex = i, M(e, u), c = 0, h = e.aoColumns.length; c < h; c++) l = e.aoColumns[c], (s = r ? o[c] : n.createElement(l.sCellType))._DT_CellIndex = { row: i, column: c }, p.push(s), r && !l.mRender && l.mData === c || t.isPlainObject(l.mData) && l.mData._ === c + ".display" || (s.innerHTML = _(e, i, c, "display")), l.sClass && (s.className += " " + l.sClass), l.bVisible && !r ? a.appendChild(s) : !l.bVisible && r && s.parentNode.removeChild(s), l.fnCreatedCell && l.fnCreatedCell.call(e.oInstance, s, _(e, i, c), d, i, c);
                Nt(e, "aoRowCreatedCallback", null, [a, d, i, p]) } u.nTr.setAttribute("role", "row") }

        function M(e, n) { var i = n.nTr,
                r = n._aData; if (i) { var o = e.rowIdFn(r);
                o && (i.id = o), r.DT_RowClass && (o = r.DT_RowClass.split(" "), n.__rowc = n.__rowc ? le(n.__rowc.concat(o)) : o, t(i).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)), r.DT_RowAttr && t(i).attr(r.DT_RowAttr), r.DT_RowData && t(i).data(r.DT_RowData) } }

        function F(e) { var n, i, r, o, a, s = e.nTHead,
                l = e.nTFoot,
                c = 0 === t("th, td", s).length,
                h = e.oClasses,
                u = e.aoColumns; for (c && (o = t("<tr/>").appendTo(s)), n = 0, i = u.length; n < i; n++) a = u[n], r = t(a.nTh).addClass(a.sClass), c && r.appendTo(o), e.oFeatures.bSort && (r.addClass(a.sSortingClass), !1 !== a.bSortable && (r.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), St(e, a.nTh, n))), a.sTitle != r[0].innerHTML && r.html(a.sTitle), jt(e, "header")(e, r, a, h); if (c && R(e.aoHeader, s), t(s).find(">tr").attr("role", "row"), t(s).find(">tr>th, >tr>td").addClass(h.sHeaderTH), t(l).find(">tr>th, >tr>td").addClass(h.sFooterTH), null !== l)
                for (n = 0, i = (e = e.aoFooter[0]).length; n < i; n++)(a = u[n]).nTf = e[n].cell, a.sClass && t(a.nTf).addClass(a.sClass) }

        function N(e, n, r) { var o, a, s, l, c = [],
                h = [],
                u = e.aoColumns.length; if (n) { for (r === i && (r = !1), o = 0, a = n.length; o < a; o++) { for (c[o] = n[o].slice(), c[o].nTr = n[o].nTr, s = u - 1; 0 <= s; s--) !e.aoColumns[s].bVisible && !r && c[o].splice(s, 1);
                    h.push([]) } for (o = 0, a = c.length; o < a; o++) { if (e = c[o].nTr)
                        for (; s = e.firstChild;) e.removeChild(s); for (s = 0, n = c[o].length; s < n; s++)
                        if (l = u = 1, h[o][s] === i) { for (e.appendChild(c[o][s].cell), h[o][s] = 1; c[o + u] !== i && c[o][s].cell == c[o + u][s].cell;) h[o + u][s] = 1, u++; for (; c[o][s + l] !== i && c[o][s].cell == c[o][s + l].cell;) { for (r = 0; r < u; r++) h[o + r][s + l] = 1;
                                l++ } t(c[o][s].cell).attr("rowspan", u).attr("colspan", l) } } } }

        function O(e) { var n = Nt(e, "aoPreDrawCallback", "preDraw", [e]); if (-1 !== t.inArray(!1, n)) ut(e, !1);
            else { n = []; var r = 0,
                    o = e.asStripeClasses,
                    a = o.length,
                    s = e.oLanguage,
                    l = e.iInitDisplayStart,
                    c = "ssp" == Pt(e),
                    h = e.aiDisplay;
                e.bDrawing = !0, l !== i && -1 !== l && (e._iDisplayStart = c ? l : l >= e.fnRecordsDisplay() ? 0 : l, e.iInitDisplayStart = -1);
                l = e._iDisplayStart; var u = e.fnDisplayEnd(); if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, ut(e, !1);
                else if (c) { if (!e.bDestroying && !U(e)) return } else e.iDraw++; if (0 !== h.length)
                    for (s = c ? e.aoData.length : u, c = c ? 0 : l; c < s; c++) { var d = h[c],
                            p = e.aoData[d];
                        null === p.nTr && I(e, d); var f = p.nTr; if (0 !== a) { var g = o[r % a];
                            p._sRowStripe != g && (t(f).removeClass(p._sRowStripe).addClass(g), p._sRowStripe = g) } Nt(e, "aoRowCallback", null, [f, p._aData, r, c, d]), n.push(f), r++ } else r = s.sZeroRecords, 1 == e.iDraw && "ajax" == Pt(e) ? r = s.sLoadingRecords : s.sEmptyTable && 0 === e.fnRecordsTotal() && (r = s.sEmptyTable), n[0] = t("<tr/>", { class: a ? o[0] : "" }).append(t("<td />", { valign: "top", colSpan: v(e), class: e.oClasses.sRowEmpty }).html(r))[0];
                Nt(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], k(e), l, u, h]), Nt(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], k(e), l, u, h]), (o = t(e.nTBody)).children().detach(), o.append(t(n)), Nt(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1 } }

        function j(t, e) { var n = t.oFeatures,
                i = n.bFilter;
            n.bSort && wt(t), i ? Y(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, O(t), t._drawHold = !1 }

        function P(e) { var n = e.oClasses,
                i = t(e.nTable),
                r = (i = t("<div/>").insertBefore(i), e.oFeatures),
                o = t("<div/>", { id: e.sTableId + "_wrapper", class: n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter) });
            e.nHolding = i[0], e.nTableWrapper = o[0], e.nTableReinsertBefore = e.nTable.nextSibling; for (var a, s, l, c, h, u, d = e.sDom.split(""), p = 0; p < d.length; p++) { if (a = null, "<" == (s = d[p])) { if (l = t("<div/>")[0], "'" == (c = d[p + 1]) || '"' == c) { for (h = "", u = 2; d[p + u] != c;) h += d[p + u], u++; "H" == h ? h = n.sJUIHeader : "F" == h && (h = n.sJUIFooter), -1 != h.indexOf(".") ? (c = h.split("."), l.id = c[0].substr(1, c[0].length - 1), l.className = c[1]) : "#" == h.charAt(0) ? l.id = h.substr(1, h.length - 1) : l.className = h, p += u } o.append(l), o = t(l) } else if (">" == s) o = o.parent();
                else if ("l" == s && r.bPaginate && r.bLengthChange) a = st(e);
                else if ("f" == s && r.bFilter) a = V(e);
                else if ("r" == s && r.bProcessing) a = ht(e);
                else if ("t" == s) a = dt(e);
                else if ("i" == s && r.bInfo) a = et(e);
                else if ("p" == s && r.bPaginate) a = lt(e);
                else if (0 !== Vt.ext.feature.length)
                    for (u = 0, c = (l = Vt.ext.feature).length; u < c; u++)
                        if (s == l[u].cFeature) { a = l[u].fnInit(e); break } a && ((l = e.aanFeatures)[s] || (l[s] = []), l[s].push(a), o.append(a)) } i.replaceWith(o), e.nHolding = null }

        function R(e, n) { var i, r, o, a, s, l, c, h, u, d, p = t(n).children("tr"); for (e.splice(0, e.length), o = 0, l = p.length; o < l; o++) e.push([]); for (o = 0, l = p.length; o < l; o++)
                for (r = (i = p[o]).firstChild; r;) { if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase()) { for (h = (h = 1 * r.getAttribute("colspan")) && 0 !== h && 1 !== h ? h : 1, u = (u = 1 * r.getAttribute("rowspan")) && 0 !== u && 1 !== u ? u : 1, a = 0, s = e[o]; s[a];) a++; for (c = a, d = 1 === h, s = 0; s < h; s++)
                            for (a = 0; a < u; a++) e[o + a][c + s] = { cell: r, unique: d }, e[o + a].nTr = i } r = r.nextSibling } }

        function B(t, e, n) { var i = [];
            n || (n = t.aoHeader, e && R(n = [], e));
            e = 0; for (var r = n.length; e < r; e++)
                for (var o = 0, a = n[e].length; o < a; o++) !n[e][o].unique || i[o] && t.bSortCellsTop || (i[o] = n[e][o].cell); return i }

        function H(e, n, i) { if (Nt(e, "aoServerParams", "serverParams", [n]), n && t.isArray(n)) { var r = {},
                    o = /(.*?)\[\]$/;
                t.each(n, (function(t, e) { var n = e.name.match(o);
                    n ? (n = n[0], r[n] || (r[n] = []), r[n].push(e.value)) : r[e.name] = e.value })), n = r } var a, s = e.ajax,
                l = e.oInstance,
                c = function(t) { Nt(e, null, "xhr", [e, t, e.jqXHR]), i(t) }; if (t.isPlainObject(s) && s.data) { var h = "function" == typeof(a = s.data) ? a(n, e) : a;
                n = "function" == typeof a && h ? h : t.extend(!0, n, h);
                delete s.data } h = { data: n, success: function(t) { var n = t.error || t.sError;
                    n && Lt(e, 0, n), e.json = t, c(t) }, dataType: "json", cache: !1, type: e.sServerMethod, error: function(n, i) { var r = Nt(e, null, "xhr", [e, null, e.jqXHR]); - 1 === t.inArray(!0, r) && ("parsererror" == i ? Lt(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && Lt(e, 0, "Ajax error", 7)), ut(e, !1) } }, e.oAjaxData = n, Nt(e, null, "preXhr", [e, n]), e.fnServerData ? e.fnServerData.call(l, e.sAjaxSource, t.map(n, (function(t, e) { return { name: e, value: t } })), c, e) : e.sAjaxSource || "string" == typeof s ? e.jqXHR = t.ajax(t.extend(h, { url: s || e.sAjaxSource })) : "function" == typeof s ? e.jqXHR = s.call(l, n, c, e) : (e.jqXHR = t.ajax(t.extend(h, s)), s.data = a) }

        function U(t) { return !t.bAjaxDataGet || (t.iDraw++, ut(t, !0), H(t, q(t), (function(e) { W(t, e) })), !1) }

        function q(e) { var n, i, r, o, a = e.aoColumns,
                s = a.length,
                l = e.oFeatures,
                c = e.oPreviousSearch,
                h = e.aoPreSearchCols,
                u = [],
                d = xt(e);
            n = e._iDisplayStart, i = !1 !== l.bPaginate ? e._iDisplayLength : -1; var p = function(t, e) { u.push({ name: t, value: e }) };
            p("sEcho", e.iDraw), p("iColumns", s), p("sColumns", re(a, "sName").join(",")), p("iDisplayStart", n), p("iDisplayLength", i); var f = { draw: e.iDraw, columns: [], order: [], start: n, length: i, search: { value: c.sSearch, regex: c.bRegex } }; for (n = 0; n < s; n++) r = a[n], o = h[n], i = "function" == typeof r.mData ? "function" : r.mData, f.columns.push({ data: i, name: r.sName, searchable: r.bSearchable, orderable: r.bSortable, search: { value: o.sSearch, regex: o.bRegex } }), p("mDataProp_" + n, i), l.bFilter && (p("sSearch_" + n, o.sSearch), p("bRegex_" + n, o.bRegex), p("bSearchable_" + n, r.bSearchable)), l.bSort && p("bSortable_" + n, r.bSortable); return l.bFilter && (p("sSearch", c.sSearch), p("bRegex", c.bRegex)), l.bSort && (t.each(d, (function(t, e) { f.order.push({ column: e.col, dir: e.dir }), p("iSortCol_" + t, e.col), p("sSortDir_" + t, e.dir) })), p("iSortingCols", d.length)), null === (a = Vt.ext.legacy.ajax) ? e.sAjaxSource ? u : f : a ? u : f }

        function W(t, e) { var n = z(t, e),
                r = e.sEcho !== i ? e.sEcho : e.draw,
                o = e.iTotalRecords !== i ? e.iTotalRecords : e.recordsTotal,
                a = e.iTotalDisplayRecords !== i ? e.iTotalDisplayRecords : e.recordsFiltered; if (r) { if (1 * r < t.iDraw) return;
                t.iDraw = 1 * r } for (A(t), t._iRecordsTotal = parseInt(o, 10), t._iRecordsDisplay = parseInt(a, 10), r = 0, o = n.length; r < o; r++) x(t, n[r]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, O(t), t._bInitComplete || ot(t, e), t.bAjaxDataGet = !0, ut(t, !1) }

        function z(e, n) { var r = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== i ? e.ajax.dataSrc : e.sAjaxDataProp; return "data" === r ? n.aaData || n[r] : "" !== r ? D(r)(n) : n }

        function V(e) { var i = e.oClasses,
                r = e.sTableId,
                o = e.oLanguage,
                a = e.oPreviousSearch,
                s = e.aanFeatures,
                l = '<input type="search" class="' + i.sFilterInput + '"/>',
                c = (c = o.sSearch).match(/_INPUT_/) ? c.replace("_INPUT_", l) : c + l,
                h = (i = t("<div/>", { id: s.f ? null : r + "_filter", class: i.sFilter }).append(t("<label/>").append(c)), s = function() { var t = this.value ? this.value : "";
                    t != a.sSearch && (Y(e, { sSearch: t, bRegex: a.bRegex, bSmart: a.bSmart, bCaseInsensitive: a.bCaseInsensitive }), e._iDisplayStart = 0, O(e)) }, l = null !== e.searchDelay ? e.searchDelay : "ssp" === Pt(e) ? 400 : 0, t("input", i).val(a.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", l ? ve(s, l) : s).on("keypress.DT", (function(t) { if (13 == t.keyCode) return !1 })).attr("aria-controls", r)); return t(e.nTable).on("search.dt.DT", (function(t, i) { if (e === i) try { h[0] !== n.activeElement && h.val(a.sSearch) } catch (t) {} })), i[0] }

        function Y(t, e, n) { var r = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                a = function(t) { r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive }; if (y(t), "ssp" != Pt(t)) { for (Q(t, e.sSearch, n, e.bEscapeRegex !== i ? !e.bEscapeRegex : e.bRegex, e.bSmart, e.bCaseInsensitive), a(e), e = 0; e < o.length; e++) X(t, o[e].sSearch, e, o[e].bEscapeRegex !== i ? !o[e].bEscapeRegex : o[e].bRegex, o[e].bSmart, o[e].bCaseInsensitive);
                G(t) } else a(e);
            t.bFiltered = !0, Nt(t, null, "search", [t]) }

        function G(e) { for (var n, i, r = Vt.ext.search, o = e.aiDisplay, a = 0, s = r.length; a < s; a++) { for (var l = [], c = 0, h = o.length; c < h; c++) i = o[c], n = e.aoData[i], r[a](e, n._aFilterData, i, n._aData, c) && l.push(i);
                o.length = 0, t.merge(o, l) } }

        function X(t, e, n, i, r, o) { if ("" !== e) { var a = [],
                    s = t.aiDisplay; for (i = J(e, i, r, o), r = 0; r < s.length; r++) e = t.aoData[s[r]]._aFilterData[n], i.test(e) && a.push(s[r]);
                t.aiDisplay = a } }

        function Q(t, e, n, i, r, o) { i = J(e, i, r, o), o = t.oPreviousSearch.sSearch; var a, s = t.aiDisplayMaster;
            r = []; if (0 !== Vt.ext.search.length && (n = !0), a = K(t), 0 >= e.length) t.aiDisplay = s.slice();
            else { for ((a || n || o.length > e.length || 0 !== e.indexOf(o) || t.bSorted) && (t.aiDisplay = s.slice()), e = t.aiDisplay, n = 0; n < e.length; n++) i.test(t.aoData[e[n]]._sFilterRow) && r.push(e[n]);
                t.aiDisplay = r } }

        function J(e, n, i, r) { return e = n ? e : de(e), i && (e = "^(?=.*?" + t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], (function(t) { if ('"' === t.charAt(0)) { var e = t.match(/^"(.*)"$/);
                    t = e ? e[1] : t } return t.replace('"', "") })).join(")(?=.*?") + ").*$"), RegExp(e, r ? "i" : "") }

        function K(t) { var e, n, i, r, o, a, s, l, c = t.aoColumns,
                h = Vt.ext.type.search; for (e = !1, n = 0, r = t.aoData.length; n < r; n++)
                if (!(l = t.aoData[n])._aFilterData) { for (a = [], i = 0, o = c.length; i < o; i++)(e = c[i]).bSearchable ? (s = _(t, n, i, "filter"), h[e.sType] && (s = h[e.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (pe.innerHTML = s, s = fe ? pe.textContent : pe.innerText), s.replace && (s = s.replace(/[\r\n]/g, "")), a.push(s);
                    l._aFilterData = a, l._sFilterRow = a.join("  "), e = !0 } return e }

        function Z(t) { return { search: t.sSearch, smart: t.bSmart, regex: t.bRegex, caseInsensitive: t.bCaseInsensitive } }

        function tt(t) { return { sSearch: t.search, bSmart: t.smart, bRegex: t.regex, bCaseInsensitive: t.caseInsensitive } }

        function et(e) { var n = e.sTableId,
                i = e.aanFeatures.i,
                r = t("<div/>", { class: e.oClasses.sInfo, id: i ? null : n + "_info" }); return i || (e.aoDrawCallback.push({ fn: nt, sName: "information" }), r.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), r[0] }

        function nt(e) { var n = e.aanFeatures.i; if (0 !== n.length) { var i = e.oLanguage,
                    r = e._iDisplayStart + 1,
                    o = e.fnDisplayEnd(),
                    a = e.fnRecordsTotal(),
                    s = e.fnRecordsDisplay(),
                    l = s ? i.sInfo : i.sInfoEmpty;
                s !== a && (l += " " + i.sInfoFiltered), l = it(e, l += i.sInfoPostFix), null !== (i = i.fnInfoCallback) && (l = i.call(e.oInstance, e, r, o, a, s, l)), t(n).html(l) } }

        function it(t, e) { var n = t.fnFormatNumber,
                i = t._iDisplayStart + 1,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay(),
                a = -1 === r; return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, a ? 1 : Math.ceil(i / r))).replace(/_PAGES_/g, n.call(t, a ? 1 : Math.ceil(o / r))) }

        function rt(t) { var e, n, i, r = t.iInitDisplayStart,
                o = t.aoColumns;
            n = t.oFeatures; var a = t.bDeferLoading; if (t.bInitialised) { for (P(t), F(t), N(t, t.aoHeader), N(t, t.aoFooter), ut(t, !0), n.bAutoWidth && gt(t), e = 0, n = o.length; e < n; e++)(i = o[e]).sWidth && (i.nTh.style.width = bt(i.sWidth));
                Nt(t, null, "preInit", [t]), j(t), ("ssp" != (o = Pt(t)) || a) && ("ajax" == o ? H(t, [], (function(n) { var i = z(t, n); for (e = 0; e < i.length; e++) x(t, i[e]);
                    t.iInitDisplayStart = r, j(t), ut(t, !1), ot(t, n) })) : (ut(t, !1), ot(t))) } else setTimeout((function() { rt(t) }), 200) }

        function ot(t, e) { t._bInitComplete = !0, (e || t.oInit.aaData) && p(t), Nt(t, null, "plugin-init", [t, e]), Nt(t, "aoInitComplete", "init", [t, e]) }

        function at(t, e) { var n = parseInt(e, 10);
            t._iDisplayLength = n, Ot(t), Nt(t, null, "length", [t, n]) }

        function st(e) { for (var n = e.oClasses, i = e.sTableId, r = e.aLengthMenu, o = (a = t.isArray(r[0])) ? r[0] : r, a = (r = a ? r[1] : r, t("<select/>", { name: i + "_length", "aria-controls": i, class: n.sLengthSelect })), s = 0, l = o.length; s < l; s++) a[0][s] = new Option("number" == typeof r[s] ? e.fnFormatNumber(r[s]) : r[s], o[s]); var c = t("<div><label/></div>").addClass(n.sLength); return e.aanFeatures.l || (c[0].id = i + "_length"), c.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", a[0].outerHTML)), t("select", c).val(e._iDisplayLength).on("change.DT", (function() { at(e, t(this).val()), O(e) })), t(e.nTable).on("length.dt.DT", (function(n, i, r) { e === i && t("select", c).val(r) })), c[0] }

        function lt(e) { var n = e.sPaginationType,
                i = Vt.ext.pager[n],
                r = "function" == typeof i,
                o = function(t) { O(t) },
                a = (n = t("<div/>").addClass(e.oClasses.sPaging + n)[0], e.aanFeatures); return r || i.fnInit(e, n, o), a.p || (n.id = e.sTableId + "_paginate", e.aoDrawCallback.push({ fn: function(t) { if (r) { var e, n = t._iDisplayStart,
                            s = t._iDisplayLength,
                            l = t.fnRecordsDisplay(),
                            c = (n = (c = -1 === s) ? 0 : Math.ceil(n / s), s = c ? 1 : Math.ceil(l / s), l = i(n, s), 0); for (e = a.p.length; c < e; c++) jt(t, "pageButton")(t, a.p[c], c, l, n, s) } else i.fnUpdate(t, o) }, sName: "pagination" })), n }

        function ct(t, e, n) { var i = t._iDisplayStart,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay(); return 0 === o || -1 === r ? i = 0 : "number" == typeof e ? (i = e * r) > o && (i = 0) : "first" == e ? i = 0 : "previous" == e ? 0 > (i = 0 <= r ? i - r : 0) && (i = 0) : "next" == e ? i + r < o && (i += r) : "last" == e ? i = Math.floor((o - 1) / r) * r : Lt(t, 0, "Unknown paging action: " + e, 5), e = t._iDisplayStart !== i, t._iDisplayStart = i, e && (Nt(t, null, "page", [t]), n && O(t)), e }

        function ht(e) { return t("<div/>", { id: e.aanFeatures.r ? null : e.sTableId + "_processing", class: e.oClasses.sProcessing }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0] }

        function ut(e, n) { e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), Nt(e, null, "processing", [e, n]) }

        function dt(e) {
            (u = t(e.nTable)).attr("role", "grid"); var n = e.oScroll; if ("" === n.sX && "" === n.sY) return e.nTable; var i = n.sX,
                r = n.sY,
                o = e.oClasses,
                a = u.children("caption"),
                s = a.length ? a[0]._captionSide : null,
                l = t(u[0].cloneNode(!1)),
                c = t(u[0].cloneNode(!1)),
                h = u.children("tfoot");
            h.length || (h = null), l = t("<div/>", { class: o.sScrollWrapper }).append(t("<div/>", { class: o.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: i ? i ? bt(i) : null : "100%" }).append(t("<div/>", { class: o.sScrollHeadInner }).css({ "box-sizing": "content-box", width: n.sXInner || "100%" }).append(l.removeAttr("id").css("margin-left", 0).append("top" === s ? a : null).append(u.children("thead"))))).append(t("<div/>", { class: o.sScrollBody }).css({ position: "relative", overflow: "auto", width: i ? bt(i) : null }).append(u)), h && l.append(t("<div/>", { class: o.sScrollFoot }).css({ overflow: "hidden", border: 0, width: i ? i ? bt(i) : null : "100%" }).append(t("<div/>", { class: o.sScrollFootInner }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === s ? a : null).append(u.children("tfoot"))))); var u, d = (u = l.children())[0],
                p = (o = u[1], h ? u[2] : null); return i && t(o).on("scroll.DT", (function() { var t = this.scrollLeft;
                d.scrollLeft = t, h && (p.scrollLeft = t) })), t(o).css(r && n.bCollapse ? "max-height" : "height", r), e.nScrollHead = d, e.nScrollBody = o, e.nScrollFoot = p, e.aoDrawCallback.push({ fn: pt, sName: "scrolling" }), l[0] }

        function pt(e) { var n, r, o, a, s, l = (u = e.oScroll).sX,
                c = u.sXInner,
                h = u.sY,
                u = u.iBarWidth,
                d = t(e.nScrollHead),
                g = d[0].style,
                v = (y = d.children("div"))[0].style,
                m = y.children("table"),
                y = e.nScrollBody,
                b = t(y),
                x = y.style,
                w = t(e.nScrollFoot).children("div"),
                _ = w.children("table"),
                C = t(e.nTHead),
                S = t(e.nTable),
                D = S[0],
                T = D.style,
                k = e.nTFoot ? t(e.nTFoot) : null,
                A = e.oBrowser,
                E = A.bScrollOversize,
                L = re(e.aoColumns, "nTh"),
                $ = [],
                I = [],
                M = [],
                F = [],
                N = function(t) {
                    (t = t.style).paddingTop = "0", t.paddingBottom = "0", t.borderTopWidth = "0", t.borderBottomWidth = "0", t.height = 0 };
            r = y.scrollHeight > y.clientHeight, e.scrollBarVis !== r && e.scrollBarVis !== i ? (e.scrollBarVis = r, p(e)) : (e.scrollBarVis = r, S.children("thead, tfoot").remove(), k && (o = k.clone().prependTo(S), n = k.find("tr"), o = o.find("tr")), a = C.clone().prependTo(S), C = C.find("tr"), r = a.find("tr"), a.find("th, td").removeAttr("tabindex"), l || (x.width = "100%", d[0].style.width = "100%"), t.each(B(e, a), (function(t, n) { s = f(e, t), n.style.width = e.aoColumns[s].sWidth })), k && ft((function(t) { t.style.width = "" }), o), d = S.outerWidth(), "" === l ? (T.width = "100%", E && (S.find("tbody").height() > y.offsetHeight || "scroll" == b.css("overflow-y")) && (T.width = bt(S.outerWidth() - u)), d = S.outerWidth()) : "" !== c && (T.width = bt(c), d = S.outerWidth()), ft(N, r), ft((function(e) { M.push(e.innerHTML), $.push(bt(t(e).css("width"))) }), r), ft((function(e, n) {-1 !== t.inArray(e, L) && (e.style.width = $[n]) }), C), t(r).height(0), k && (ft(N, o), ft((function(e) { F.push(e.innerHTML), I.push(bt(t(e).css("width"))) }), o), ft((function(t, e) { t.style.width = I[e] }), n), t(o).height(0)), ft((function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + M[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = $[e] }), r), k && ft((function(t, e) { t.innerHTML = '<div class="dataTables_sizing">' + F[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = I[e] }), o), S.outerWidth() < d ? (n = y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y") ? d + u : d, E && (y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y")) && (T.width = bt(n - u)), ("" === l || "" !== c) && Lt(e, 1, "Possible column misalignment", 6)) : n = "100%", x.width = bt(n), g.width = bt(n), k && (e.nScrollFoot.style.width = bt(n)), !h && E && (x.height = bt(D.offsetHeight + u)), l = S.outerWidth(), m[0].style.width = bt(l), v.width = bt(l), c = S.height() > y.clientHeight || "scroll" == b.css("overflow-y"), v[h = "padding" + (A.bScrollbarLeft ? "Left" : "Right")] = c ? u + "px" : "0px", k && (_[0].style.width = bt(l), w[0].style.width = bt(l), w[0].style[h] = c ? u + "px" : "0px"), S.children("colgroup").insertBefore(S.children("thead")), b.scroll(), !e.bSorted && !e.bFiltered || e._drawHold || (y.scrollTop = 0)) }

        function ft(t, e, n) { for (var i, r, o = 0, a = 0, s = e.length; a < s;) { for (i = e[a].firstChild, r = n ? n[a].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, r, o) : t(i, o), o++), i = i.nextSibling, r = n ? r.nextSibling : null;
                a++ } }

        function gt(n) { var i, r, o = n.nTable,
                a = n.aoColumns,
                s = (w = n.oScroll).sY,
                l = w.sX,
                c = w.sXInner,
                h = a.length,
                u = m(n, "bVisible"),
                d = t("th", n.nTHead),
                g = o.getAttribute("width"),
                y = o.parentNode,
                b = !1,
                x = n.oBrowser,
                w = x.bScrollOversize; for ((i = o.style.width) && -1 !== i.indexOf("%") && (g = i), i = 0; i < u.length; i++) null !== (r = a[u[i]]).sWidth && (r.sWidth = vt(r.sWidthOrig, y), b = !0); if (w || !b && !l && !s && h == v(n) && h == d.length)
                for (i = 0; i < h; i++) null !== (u = f(n, i)) && (a[u].sWidth = bt(d.eq(i).width()));
            else {
                (h = t(o).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove(); var _ = t("<tr/>").appendTo(h.find("tbody")); for (h.find("thead, tfoot").remove(), h.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), h.find("tfoot th, tfoot td").css("width", ""), d = B(n, h.find("thead")[0]), i = 0; i < u.length; i++) r = a[u[i]], d[i].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? bt(r.sWidthOrig) : "", r.sWidthOrig && l && t(d[i]).append(t("<div/>").css({ width: r.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (n.aoData.length)
                    for (i = 0; i < u.length; i++) r = a[b = u[i]], t(mt(n, b)).clone(!1).append(r.sContentPadding).appendTo(_); for (t("[name]", h).removeAttr("name"), r = t("<div/>").css(l || s ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(h).appendTo(y), l && c ? h.width(c) : l ? (h.css("width", "auto"), h.removeAttr("width"), h.width() < y.clientWidth && g && h.width(y.clientWidth)) : s ? h.width(y.clientWidth) : g && h.width(g), i = s = 0; i < u.length; i++) c = (y = t(d[i])).outerWidth() - y.width(), s += y = x.bBounding ? Math.ceil(d[i].getBoundingClientRect().width) : y.outerWidth(), a[u[i]].sWidth = bt(y - c);
                o.style.width = bt(s), r.remove() } g && (o.style.width = bt(g)), !g && !l || n._reszEvt || (o = function() { t(e).on("resize.DT-" + n.sInstance, ve((function() { p(n) }))) }, w ? setTimeout(o, 1e3) : o(), n._reszEvt = !0) }

        function vt(e, i) { if (!e) return 0; var r = t("<div/>").css("width", bt(e)).appendTo(i || n.body),
                o = r[0].offsetWidth; return r.remove(), o }

        function mt(e, n) { var i = yt(e, n); if (0 > i) return null; var r = e.aoData[i]; return r.nTr ? r.anCells[n] : t("<td/>").html(_(e, i, n, "display"))[0] }

        function yt(t, e) { for (var n, i = -1, r = -1, o = 0, a = t.aoData.length; o < a; o++)(n = (n = (n = _(t, o, e, "display") + "").replace(ge, "")).replace(/&nbsp;/g, " ")).length > i && (i = n.length, r = o); return r }

        function bt(t) { return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t }

        function xt(e) { var n, r, o, a, s, l, c = [],
                h = e.aoColumns;
            n = e.aaSortingFixed, r = t.isPlainObject(n); var u = []; for (o = function(e) { e.length && !t.isArray(e[0]) ? u.push(e) : t.merge(u, e) }, t.isArray(n) && o(n), r && n.pre && o(n.pre), o(e.aaSorting), r && n.post && o(n.post), e = 0; e < u.length; e++)
                for (n = 0, r = (o = h[l = u[e][0]].aDataSort).length; n < r; n++) s = h[a = o[n]].sType || "string", u[e]._idx === i && (u[e]._idx = t.inArray(u[e][1], h[a].asSorting)), c.push({ src: l, col: a, dir: u[e][1], index: u[e]._idx, type: s, formatter: Vt.ext.type.order[s + "-pre"] }); return c }

        function wt(t) { var e, n, i, r, o = [],
                a = Vt.ext.type.order,
                s = t.aoData,
                l = 0,
                c = t.aiDisplayMaster; for (y(t), e = 0, n = (r = xt(t)).length; e < n; e++)(i = r[e]).formatter && l++, Tt(t, i.col); if ("ssp" != Pt(t) && 0 !== r.length) { for (e = 0, n = c.length; e < n; e++) o[c[e]] = e;
                l === r.length ? c.sort((function(t, e) { var n, i, a, l, c = r.length,
                        h = s[t]._aSortData,
                        u = s[e]._aSortData; for (a = 0; a < c; a++)
                        if (0 !== (n = (n = h[(l = r[a]).col]) < (i = u[l.col]) ? -1 : n > i ? 1 : 0)) return "asc" === l.dir ? n : -n; return (n = o[t]) < (i = o[e]) ? -1 : n > i ? 1 : 0 })) : c.sort((function(t, e) { var n, i, l, c, h = r.length,
                        u = s[t]._aSortData,
                        d = s[e]._aSortData; for (l = 0; l < h; l++)
                        if (n = u[(c = r[l]).col], i = d[c.col], 0 !== (n = (c = a[c.type + "-" + c.dir] || a["string-" + c.dir])(n, i))) return n; return (n = o[t]) < (i = o[e]) ? -1 : n > i ? 1 : 0 })) } t.bSorted = !0 }

        function _t(t) { for (var e, n, i = t.aoColumns, r = xt(t), o = (t = t.oLanguage.oAria, 0), a = i.length; o < a; o++) { var s = (n = i[o]).asSorting;
                e = n.sTitle.replace(/<.*?>/g, ""); var l = n.nTh;
                l.removeAttribute("aria-sort"), n.bSortable && (0 < r.length && r[0].col == o ? (l.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = s[r[0].index + 1] || s[0]) : n = s[0], e += "asc" === n ? t.sSortAscending : t.sSortDescending), l.setAttribute("aria-label", e) } }

        function Ct(e, n, r, o) { var a = e.aaSorting,
                s = e.aoColumns[n].asSorting,
                l = function(e, n) { var r = e._idx; return r === i && (r = t.inArray(e[1], s)), r + 1 < s.length ? r + 1 : n ? null : 0 }; "number" == typeof a[0] && (a = e.aaSorting = [a]), r && e.oFeatures.bSortMulti ? -1 !== (r = t.inArray(n, re(a, "0"))) ? (null === (n = l(a[r], !0)) && 1 === a.length && (n = 0), null === n ? a.splice(r, 1) : (a[r][1] = s[n], a[r]._idx = n)) : (a.push([n, s[0], 0]), a[a.length - 1]._idx = 0) : a.length && a[0][0] == n ? (n = l(a[0]), a.length = 1, a[0][1] = s[n], a[0]._idx = n) : (a.length = 0, a.push([n, s[0]]), a[0]._idx = 0), j(e), "function" == typeof o && o(e) }

        function St(t, e, n, i) { var r = t.aoColumns[n];
            Mt(e, {}, (function(e) {!1 !== r.bSortable && (t.oFeatures.bProcessing ? (ut(t, !0), setTimeout((function() { Ct(t, n, e.shiftKey, i), "ssp" !== Pt(t) && ut(t, !1) }), 0)) : Ct(t, n, e.shiftKey, i)) })) }

        function Dt(e) { var n, i, r = e.aLastSort,
                o = e.oClasses.sSortColumn,
                a = xt(e),
                s = e.oFeatures; if (s.bSort && s.bSortClasses) { for (s = 0, n = r.length; s < n; s++) i = r[s].src, t(re(e.aoData, "anCells", i)).removeClass(o + (2 > s ? s + 1 : 3)); for (s = 0, n = a.length; s < n; s++) i = a[s].src, t(re(e.aoData, "anCells", i)).addClass(o + (2 > s ? s + 1 : 3)) } e.aLastSort = a }

        function Tt(t, e) { var n, i = t.aoColumns[e],
                r = Vt.ext.order[i.sSortDataType];
            r && (n = r.call(t.oInstance, t, e, g(t, e))); for (var o, a = Vt.ext.type.order[i.sType + "-pre"], s = 0, l = t.aoData.length; s < l; s++)(i = t.aoData[s])._aSortData || (i._aSortData = []), (!i._aSortData[e] || r) && (o = r ? n[s] : _(t, s, e, "sort"), i._aSortData[e] = a ? a(o) : o) }

        function kt(e) { if (e.oFeatures.bStateSave && !e.bDestroying) { var n = { time: +new Date, start: e._iDisplayStart, length: e._iDisplayLength, order: t.extend(!0, [], e.aaSorting), search: Z(e.oPreviousSearch), columns: t.map(e.aoColumns, (function(t, n) { return { visible: t.bVisible, search: Z(e.aoPreSearchCols[n]) } })) };
                Nt(e, "aoStateSaveParams", "stateSaveParams", [e, n]), e.oSavedState = n, e.fnStateSaveCallback.call(e.oInstance, e, n) } }

        function At(e, n, r) { var o, a, s = e.aoColumns;
            n = function(n) { if (n && n.time) { var l = Nt(e, "aoStateLoadParams", "stateLoadParams", [e, n]); if (-1 === t.inArray(!1, l) && !(0 < (l = e.iStateDuration) && n.time < +new Date - 1e3 * l || n.columns && s.length !== n.columns.length)) { if (e.oLoadedState = t.extend(!0, {}, n), n.start !== i && (e._iDisplayStart = n.start, e.iInitDisplayStart = n.start), n.length !== i && (e._iDisplayLength = n.length), n.order !== i && (e.aaSorting = [], t.each(n.order, (function(t, n) { e.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n) }))), n.search !== i && t.extend(e.oPreviousSearch, tt(n.search)), n.columns)
                            for (o = 0, a = n.columns.length; o < a; o++)(l = n.columns[o]).visible !== i && (s[o].bVisible = l.visible), l.search !== i && t.extend(e.aoPreSearchCols[o], tt(l.search));
                        Nt(e, "aoStateLoaded", "stateLoaded", [e, n]) } } r() }; if (e.oFeatures.bStateSave) { var l = e.fnStateLoadCallback.call(e.oInstance, e, n);
                l !== i && n(l) } else r() }

        function Et(e) { var n = Vt.settings; return -1 !== (e = t.inArray(e, re(n, "nTable"))) ? n[e] : null }

        function Lt(t, n, i, r) { if (i = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + i, r && (i += ". For more information about this error, please see http://datatables.net/tn/" + r), n) e.console && console.log && console.log(i);
            else if (n = (n = Vt.ext).sErrMode || n.errMode, t && Nt(t, null, "error", [t, r, i]), "alert" == n) alert(i);
            else { if ("throw" == n) throw Error(i); "function" == typeof n && n(t, r, i) } }

        function $t(e, n, r, o) { t.isArray(r) ? t.each(r, (function(i, r) { t.isArray(r) ? $t(e, n, r[0], r[1]) : $t(e, n, r) })) : (o === i && (o = r), n[r] !== i && (e[o] = n[r])) }

        function It(e, n, i) { var r, o; for (o in n) n.hasOwnProperty(o) && (r = n[o], t.isPlainObject(r) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], r)) : e[o] = i && "data" !== o && "aaData" !== o && t.isArray(r) ? r.slice() : r); return e }

        function Mt(e, n, i) { t(e).on("click.DT", n, (function(n) { t(e).blur(), i(n) })).on("keypress.DT", n, (function(t) { 13 === t.which && (t.preventDefault(), i(t)) })).on("selectstart.DT", (function() { return !1 })) }

        function Ft(t, e, n, i) { n && t[e].push({ fn: n, sName: i }) }

        function Nt(e, n, i, r) { var o = []; return n && (o = t.map(e[n].slice().reverse(), (function(t) { return t.fn.apply(e.oInstance, r) }))), null !== i && (n = t.Event(i + ".dt"), t(e.nTable).trigger(n, r), o.push(n.result)), o }

        function Ot(t) { var e = t._iDisplayStart,
                n = t.fnDisplayEnd(),
                i = t._iDisplayLength;
            e >= n && (e = n - i), e -= e % i, (-1 === i || 0 > e) && (e = 0), t._iDisplayStart = e }

        function jt(e, n) { var i = e.renderer,
                r = Vt.ext.renderer[n]; return t.isPlainObject(i) && i[n] ? r[i[n]] || r._ : "string" == typeof i && r[i] || r._ }

        function Pt(t) { return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom" }

        function Rt(t, e) { var n = [],
                i = (n = Ae.numbers_length, Math.floor(n / 2)); return e <= n ? n = ae(0, e) : t <= i ? ((n = ae(0, n - 2)).push("ellipsis"), n.push(e - 1)) : (t >= e - 1 - i ? n = ae(e - (n - 2), e) : ((n = ae(t - i + 2, t + i - 1)).push("ellipsis"), n.push(e - 1)), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n }

        function Bt(e) { t.each({ num: function(t) { return Ee(t, e) }, "num-fmt": function(t) { return Ee(t, e, Kt) }, "html-num": function(t) { return Ee(t, e, Xt) }, "html-num-fmt": function(t) { return Ee(t, e, Xt, Kt) } }, (function(t, n) { Ut.type.order[t + e + "-pre"] = n, t.match(/^html\-/) && (Ut.type.search[t + e] = Ut.type.search.html) })) }

        function Ht(t) { return function() { var e = [Et(this[Vt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return Vt.ext.internal[t].apply(this, e) } } var Ut, qt, Wt, zt, Vt = function(e) { this.$ = function(t, e) { return this.api(!0).$(t, e) }, this._ = function(t, e) { return this.api(!0).rows(t, e).data() }, this.api = function(t) { return new qt(t ? Et(this[Ut.iApiIndex]) : this) }, this.fnAddData = function(e, n) { var r = this.api(!0),
                        o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? r.rows.add(e) : r.row.add(e); return (n === i || n) && r.draw(), o.flatten().toArray() }, this.fnAdjustColumnSizing = function(t) { var e = this.api(!0).columns.adjust(),
                        n = e.settings()[0],
                        r = n.oScroll;
                    t === i || t ? e.draw(!1) : ("" !== r.sX || "" !== r.sY) && pt(n) }, this.fnClearTable = function(t) { var e = this.api(!0).clear();
                    (t === i || t) && e.draw() }, this.fnClose = function(t) { this.api(!0).row(t).child.hide() }, this.fnDeleteRow = function(t, e, n) { var r = this.api(!0),
                        o = (t = r.rows(t)).settings()[0],
                        a = o.aoData[t[0][0]]; return t.remove(), e && e.call(this, o, a), (n === i || n) && r.draw(), a }, this.fnDestroy = function(t) { this.api(!0).destroy(t) }, this.fnDraw = function(t) { this.api(!0).draw(t) }, this.fnFilter = function(t, e, n, r, o, a) { o = this.api(!0), null === e || e === i ? o.search(t, n, r, a) : o.column(e).search(t, n, r, a), o.draw() }, this.fnGetData = function(t, e) { var n = this.api(!0); if (t !== i) { var r = t.nodeName ? t.nodeName.toLowerCase() : ""; return e !== i || "td" == r || "th" == r ? n.cell(t, e).data() : n.row(t).data() || null } return n.data().toArray() }, this.fnGetNodes = function(t) { var e = this.api(!0); return t !== i ? e.row(t).node() : e.rows().nodes().flatten().toArray() }, this.fnGetPosition = function(t) { var e = this.api(!0),
                        n = t.nodeName.toUpperCase(); return "TR" == n ? e.row(t).index() : "TD" == n || "TH" == n ? [(t = e.cell(t).index()).row, t.columnVisible, t.column] : null }, this.fnIsOpen = function(t) { return this.api(!0).row(t).child.isShown() }, this.fnOpen = function(t, e, n) { return this.api(!0).row(t).child(e, n).show().child()[0] }, this.fnPageChange = function(t, e) { var n = this.api(!0).page(t);
                    (e === i || e) && n.draw(!1) }, this.fnSetColumnVis = function(t, e, n) { t = this.api(!0).column(t).visible(e), (n === i || n) && t.columns.adjust().draw() }, this.fnSettings = function() { return Et(this[Ut.iApiIndex]) }, this.fnSort = function(t) { this.api(!0).order(t).draw() }, this.fnSortListener = function(t, e, n) { this.api(!0).order.listener(t, e, n) }, this.fnUpdate = function(t, e, n, r, o) { var a = this.api(!0); return n === i || null === n ? a.row(e).data(t) : a.cell(e, n).data(t), (o === i || o) && a.columns.adjust(), (r === i || r) && a.draw(), 0 }, this.fnVersionCheck = Ut.fnVersionCheck; var n = this,
                    r = e === i,
                    h = this.length; for (var p in r && (e = {}), this.oApi = this.internal = Ut.internal, Vt.ext.internal) p && (this[p] = Ht(p)); return this.each((function() { var p, f = {},
                        g = 1 < h ? It(f, e, !0) : e,
                        v = 0,
                        m = (f = this.getAttribute("id"), !1),
                        y = Vt.defaults,
                        _ = t(this); if ("table" != this.nodeName.toLowerCase()) Lt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                    else { s(y), l(y.column), o(y, y, !0), o(y.column, y.column, !0), o(y, t.extend(g, _.data())); var C = Vt.settings;
                        v = 0; for (p = C.length; v < p; v++) { var S = C[v]; if (S.nTable == this || S.nTHead && S.nTHead.parentNode == this || S.nTFoot && S.nTFoot.parentNode == this) { var T = g.bRetrieve !== i ? g.bRetrieve : y.bRetrieve; if (r || T) return S.oInstance; if (g.bDestroy !== i ? g.bDestroy : y.bDestroy) { S.oInstance.fnDestroy(); break } return void Lt(S, 0, "Cannot reinitialise DataTable", 3) } if (S.sTableId == this.id) { C.splice(v, 1); break } } null !== f && "" !== f || (this.id = f = "DataTables_Table_" + Vt.ext._unique++); var k = t.extend(!0, {}, Vt.models.oSettings, { sDestroyWidth: _[0].style.width, sInstance: f, sTableId: f });
                        k.nTable = this, k.oApi = n.internal, k.oInit = g, C.push(k), k.oInstance = 1 === n.length ? n : _.dataTable(), s(g), a(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = t.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = It(t.extend(!0, {}, y), g), $t(k.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), $t(k, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                            ["oSearch", "oPreviousSearch"],
                            ["aoSearchCols", "aoPreSearchCols"],
                            ["iDisplayLength", "_iDisplayLength"]
                        ]), $t(k.oScroll, g, [
                            ["sScrollX", "sX"],
                            ["sScrollXInner", "sXInner"],
                            ["sScrollY", "sY"],
                            ["bScrollCollapse", "bCollapse"]
                        ]), $t(k.oLanguage, g, "fnInfoCallback"), Ft(k, "aoDrawCallback", g.fnDrawCallback, "user"), Ft(k, "aoServerParams", g.fnServerParams, "user"), Ft(k, "aoStateSaveParams", g.fnStateSaveParams, "user"), Ft(k, "aoStateLoadParams", g.fnStateLoadParams, "user"), Ft(k, "aoStateLoaded", g.fnStateLoaded, "user"), Ft(k, "aoRowCallback", g.fnRowCallback, "user"), Ft(k, "aoRowCreatedCallback", g.fnCreatedRow, "user"), Ft(k, "aoHeaderCallback", g.fnHeaderCallback, "user"), Ft(k, "aoFooterCallback", g.fnFooterCallback, "user"), Ft(k, "aoInitComplete", g.fnInitComplete, "user"), Ft(k, "aoPreDrawCallback", g.fnPreDrawCallback, "user"), k.rowIdFn = D(g.rowId), c(k); var A = k.oClasses;
                        t.extend(A, Vt.ext.classes, g.oClasses), _.addClass(A.sTable), k.iInitDisplayStart === i && (k.iInitDisplayStart = g.iDisplayStart, k._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading && (k.bDeferLoading = !0, f = t.isArray(g.iDeferLoading), k._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading, k._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading); var E = k.oLanguage;
                        t.extend(!0, E, g.oLanguage), E.sUrl && (t.ajax({ dataType: "json", url: E.sUrl, success: function(e) { a(e), o(y.oLanguage, e), t.extend(!0, E, e), rt(k) }, error: function() { rt(k) } }), m = !0), null === g.asStripeClasses && (k.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
                        f = k.asStripeClasses; var L = _.children("tbody").find("tr").eq(0); if (-1 !== t.inArray(!0, t.map(f, (function(t) { return L.hasClass(t) }))) && (t("tbody tr", this).removeClass(f.join(" ")), k.asDestroyStripes = f.slice()), f = [], 0 !== (C = this.getElementsByTagName("thead")).length && (R(k.aoHeader, C[0]), f = B(k)), null === g.aoColumns)
                            for (C = [], v = 0, p = f.length; v < p; v++) C.push(null);
                        else C = g.aoColumns; for (v = 0, p = C.length; v < p; v++) u(k, f ? f[v] : null); if (b(k, g.aoColumnDefs, C, (function(t, e) { d(k, t, e) })), L.length) { var $ = function(t, e) { return null !== t.getAttribute("data-" + e) ? e : null };
                            t(L[0]).children("th, td").each((function(t, e) { var n = k.aoColumns[t]; if (n.mData === t) { var r = $(e, "sort") || $(e, "order"),
                                        o = $(e, "filter") || $(e, "search");
                                    null === r && null === o || (n.mData = { _: t + ".display", sort: null !== r ? t + ".@data-" + r : i, type: null !== r ? t + ".@data-" + r : i, filter: null !== o ? t + ".@data-" + o : i }, d(k, t)) } })) } var I = k.oFeatures;
                        f = function() { if (g.aaSorting === i) { var e = k.aaSorting; for (v = 0, p = e.length; v < p; v++) e[v][1] = k.aoColumns[v].asSorting[0] } Dt(k), I.bSort && Ft(k, "aoDrawCallback", (function() { if (k.bSorted) { var e = xt(k),
                                        n = {};
                                    t.each(e, (function(t, e) { n[e.src] = e.dir })), Nt(k, null, "order", [k, e, n]), _t(k) } })), Ft(k, "aoDrawCallback", (function() {
                                (k.bSorted || "ssp" === Pt(k) || I.bDeferRender) && Dt(k) }), "sc");
                            e = _.children("caption").each((function() { this._captionSide = t(this).css("caption-side") })); var n = _.children("thead"); if (0 === n.length && (n = t("<thead/>").appendTo(_)), k.nTHead = n[0], 0 === (n = _.children("tbody")).length && (n = t("<tbody/>").appendTo(_)), k.nTBody = n[0], 0 === (n = _.children("tfoot")).length && e.length > 0 && ("" !== k.oScroll.sX || "" !== k.oScroll.sY) && (n = t("<tfoot/>").appendTo(_)), 0 === n.length || 0 === n.children().length ? _.addClass(A.sNoFooter) : n.length > 0 && (k.nTFoot = n[0], R(k.aoFooter, k.nTFoot)), g.aaData)
                                for (v = 0; v < g.aaData.length; v++) x(k, g.aaData[v]);
                            else(k.bDeferLoading || "dom" == Pt(k)) && w(k, t(k.nTBody).children("tr"));
                            k.aiDisplay = k.aiDisplayMaster.slice(), k.bInitialised = !0, !1 === m && rt(k) };
                        g.bStateSave ? (I.bStateSave = !0, Ft(k, "aoDrawCallback", kt, "state_save"), At(k, g, f)) : f() } })), n = null, this },
            Yt = {},
            Gt = /[\r\n]/g,
            Xt = /<.*?>/g,
            Qt = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
            Jt = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Kt = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
            Zt = function(t) { return !t || !0 === t || "-" === t },
            te = function(t) { var e = parseInt(t, 10); return !isNaN(e) && isFinite(t) ? e : null },
            ee = function(t, e) { return Yt[e] || (Yt[e] = RegExp(de(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Yt[e], ".") : t },
            ne = function(t, e, n) { var i = "string" == typeof t; return !!Zt(t) || (e && i && (t = ee(t, e)), n && i && (t = t.replace(Kt, "")), !isNaN(parseFloat(t)) && isFinite(t)) },
            ie = function(t, e, n) { return !!Zt(t) || ((Zt(t) || "string" == typeof t) && !!ne(t.replace(Xt, ""), e, n) || null) },
            re = function(t, e, n) { var r = [],
                    o = 0,
                    a = t.length; if (n !== i)
                    for (; o < a; o++) t[o] && t[o][e] && r.push(t[o][e][n]);
                else
                    for (; o < a; o++) t[o] && r.push(t[o][e]); return r },
            oe = function(t, e, n, r) { var o = [],
                    a = 0,
                    s = e.length; if (r !== i)
                    for (; a < s; a++) t[e[a]][n] && o.push(t[e[a]][n][r]);
                else
                    for (; a < s; a++) o.push(t[e[a]][n]); return o },
            ae = function(t, e) { var n, r = [];
                e === i ? (e = 0, n = t) : (n = e, e = t); for (var o = e; o < n; o++) r.push(o); return r },
            se = function(t) { for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && e.push(t[n]); return e },
            le = function(t) { var e;
                t: { if (!(2 > t.length))
                        for (var n = (e = t.slice().sort())[0], i = 1, r = e.length; i < r; i++) { if (e[i] === n) { e = !1; break t } n = e[i] } e = !0 }
                if (e) return t.slice();
                e = [];
                r = t.length; var o, a = 0;
                i = 0;
                t: for (; i < r; i++) { for (n = t[i], o = 0; o < a; o++)
                        if (e[o] === n) continue t;
                    e.push(n), a++ }
                return e };
        Vt.util = { throttle: function(t, e) { var n, r, o = e !== i ? e : 200; return function() { var e = this,
                        a = +new Date,
                        s = arguments;
                    n && a < n + o ? (clearTimeout(r), r = setTimeout((function() { n = i, t.apply(e, s) }), o)) : (n = a, t.apply(e, s)) } }, escapeRegex: function(t) { return t.replace(Jt, "\\$1") } }; var ce = function(t, e, n) { t[e] !== i && (t[n] = t[e]) },
            he = /\[.*?\]$/,
            ue = /\(\)$/,
            de = Vt.util.escapeRegex,
            pe = t("<div>")[0],
            fe = pe.textContent !== i,
            ge = /<.*?>/g,
            ve = Vt.util.throttle,
            me = [],
            ye = Array.prototype;
        qt = function(e, n) { if (!(this instanceof qt)) return new qt(e, n); var i = [],
                r = function(e) {
                    (e = function(e) { var n, i, r = Vt.settings,
                            o = t.map(r, (function(t) { return t.nTable })); return e ? e.nTable && e.oApi ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? -1 !== (n = t.inArray(e, o)) ? [r[n]] : null : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? i = t(e) : e instanceof t && (i = e), i ? i.map((function() { return -1 !== (n = t.inArray(this, o)) ? r[n] : null })).toArray() : void 0) : [] }(e)) && (i = i.concat(e)) }; if (t.isArray(e))
                for (var o = 0, a = e.length; o < a; o++) r(e[o]);
            else r(e);
            this.context = le(i), n && t.merge(this, n), this.selector = { rows: null, cols: null, opts: null }, qt.extend(this, this, me) }, Vt.Api = qt, t.extend(qt.prototype, { any: function() { return 0 !== this.count() }, concat: ye.concat, context: [], count: function() { return this.flatten().length }, each: function(t) { for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this); return this }, eq: function(t) { var e = this.context; return e.length > t ? new qt(e[t], this[t]) : null }, filter: function(t) { var e = []; if (ye.filter) e = ye.filter.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) t.call(this, this[n], n, this) && e.push(this[n]); return new qt(this.context, e) }, flatten: function() { var t = []; return new qt(this.context, t.concat.apply(t, this.toArray())) }, join: ye.join, indexOf: ye.indexOf || function(t, e) { for (var n = e || 0, i = this.length; n < i; n++)
                    if (this[n] === t) return n; return -1 }, iterator: function(t, e, n, r) { var o, a, s, l, c, h, u, d = [],
                    p = this.context,
                    f = this.selector; for ("string" == typeof t && (r = n, n = e, e = t, t = !1), a = 0, s = p.length; a < s; a++) { var g = new qt(p[a]); if ("table" === e)(o = n.call(g, p[a], a)) !== i && d.push(o);
                    else if ("columns" === e || "rows" === e)(o = n.call(g, p[a], this[a], a)) !== i && d.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (u = this[a], "column-rows" === e && (h = Ce(p[a], f.opts)), l = 0, c = u.length; l < c; l++) o = u[l], (o = "cell" === e ? n.call(g, p[a], o.row, o.column, a, l) : n.call(g, p[a], o, a, l, h)) !== i && d.push(o) } return d.length || r ? ((e = (t = new qt(p, t ? d.concat.apply([], d) : d)).selector).rows = f.rows, e.cols = f.cols, e.opts = f.opts, t) : this }, lastIndexOf: ye.lastIndexOf || function(t, e) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function(t) { var e = []; if (ye.map) e = ye.map.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) e.push(t.call(this, this[n], n)); return new qt(this.context, e) }, pluck: function(t) { return this.map((function(e) { return e[t] })) }, pop: ye.pop, push: ye.push, reduce: ye.reduce || function(t, e) { return h(this, t, e, 0, this.length, 1) }, reduceRight: ye.reduceRight || function(t, e) { return h(this, t, e, this.length - 1, -1, -1) }, reverse: ye.reverse, selector: null, shift: ye.shift, slice: function() { return new qt(this.context, this) }, sort: ye.sort, splice: ye.splice, toArray: function() { return ye.slice.call(this) }, to$: function() { return t(this) }, toJQuery: function() { return t(this) }, unique: function() { return new qt(this.context, le(this)) }, unshift: ye.unshift }), qt.extend = function(e, n, i) { if (i.length && n && (n instanceof qt || n.__dt_wrapper)) { var r, o, a, s = function(t, e, n) { return function() { var i = e.apply(t, arguments); return qt.extend(i, i, n.methodExt), i } }; for (r = 0, o = i.length; r < o; r++) n[(a = i[r]).name] = "function" == typeof a.val ? s(e, a.val, a) : t.isPlainObject(a.val) ? {} : a.val, n[a.name].__dt_wrapper = !0, qt.extend(e, n[a.name], a.propExt) } }, qt.register = Wt = function(e, n) { if (t.isArray(e))
                for (var i = 0, r = e.length; i < r; i++) qt.register(e[i], n);
            else { var o, a, s = e.split("."),
                    l = me; for (i = 0, r = s.length; i < r; i++) { var c;
                    o = (a = -1 !== s[i].indexOf("()")) ? s[i].replace("()", "") : s[i];
                    t: { c = 0; for (var h = l.length; c < h; c++)
                            if (l[c].name === o) { c = l[c]; break t } c = null } c || (c = { name: o, val: {}, methodExt: [], propExt: [] }, l.push(c)), i === r - 1 ? c.val = n : l = a ? c.methodExt : c.propExt } } }, qt.registerPlural = zt = function(e, n, r) { qt.register(e, r), qt.register(n, (function() { var e = r.apply(this, arguments); return e === this ? this : e instanceof qt ? e.length ? t.isArray(e[0]) ? new qt(e.context, e[0]) : e[0] : i : e })) }, Wt("tables()", (function(e) { var n; if (e) { n = qt; var i = this.context; if ("number" == typeof e) e = [i[e]];
                else { var r = t.map(i, (function(t) { return t.nTable }));
                    e = t(r).filter(e).map((function() { var e = t.inArray(this, r); return i[e] })).toArray() } n = new n(e) } else n = this; return n })), Wt("table()", (function(t) { var e = (t = this.tables(t)).context; return e.length ? new qt(e[0]) : t })), zt("tables().nodes()", "table().node()", (function() { return this.iterator("table", (function(t) { return t.nTable }), 1) })), zt("tables().body()", "table().body()", (function() { return this.iterator("table", (function(t) { return t.nTBody }), 1) })), zt("tables().header()", "table().header()", (function() { return this.iterator("table", (function(t) { return t.nTHead }), 1) })), zt("tables().footer()", "table().footer()", (function() { return this.iterator("table", (function(t) { return t.nTFoot }), 1) })), zt("tables().containers()", "table().container()", (function() { return this.iterator("table", (function(t) { return t.nTableWrapper }), 1) })), Wt("draw()", (function(t) { return this.iterator("table", (function(e) { "page" === t ? O(e) : ("string" == typeof t && (t = "full-hold" !== t), j(e, !1 === t)) })) })), Wt("page()", (function(t) { return t === i ? this.page.info().page : this.iterator("table", (function(e) { ct(e, t) })) })), Wt("page.info()", (function() { if (0 === this.context.length) return i; var t = this.context[0],
                e = t._iDisplayStart,
                n = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
                r = t.fnRecordsDisplay(),
                o = -1 === n; return { page: o ? 0 : Math.floor(e / n), pages: o ? 1 : Math.ceil(r / n), start: e, end: t.fnDisplayEnd(), length: n, recordsTotal: t.fnRecordsTotal(), recordsDisplay: r, serverSide: "ssp" === Pt(t) } })), Wt("page.len()", (function(t) { return t === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", (function(e) { at(e, t) })) })); var be = function(t, e, n) { if (n) { var i = new qt(t);
                i.one("draw", (function() { n(i.ajax.json()) })) } if ("ssp" == Pt(t)) j(t, e);
            else { ut(t, !0); var r = t.jqXHR;
                r && 4 !== r.readyState && r.abort(), H(t, [], (function(n) { A(t); for (var i = 0, r = (n = z(t, n)).length; i < r; i++) x(t, n[i]);
                    j(t, e), ut(t, !1) })) } };
        Wt("ajax.json()", (function() { var t = this.context; if (0 < t.length) return t[0].json })), Wt("ajax.params()", (function() { var t = this.context; if (0 < t.length) return t[0].oAjaxData })), Wt("ajax.reload()", (function(t, e) { return this.iterator("table", (function(n) { be(n, !1 === e, t) })) })), Wt("ajax.url()", (function(e) { var n = this.context; return e === i ? 0 === n.length ? i : (n = n[0]).ajax ? t.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", (function(n) { t.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e })) })), Wt("ajax.url().load()", (function(t, e) { return this.iterator("table", (function(n) { be(n, !1 === e, t) })) })); var xe = function(e, n, r, o, a) { var s, l, c, h, u, d, p = []; for (c = typeof n, n && "string" !== c && "function" !== c && n.length !== i || (n = [n]), c = 0, h = n.length; c < h; c++)
                    for (u = 0, d = (l = n[c] && n[c].split && !n[c].match(/[\[\(:]/) ? n[c].split(",") : [n[c]]).length; u < d; u++)(s = r("string" == typeof l[u] ? t.trim(l[u]) : l[u])) && s.length && (p = p.concat(s)); if ((e = Ut.selector[e]).length)
                    for (c = 0, h = e.length; c < h; c++) p = e[c](o, a, p); return le(p) },
            we = function(e) { return e || (e = {}), e.filter && e.search === i && (e.search = e.filter), t.extend({ search: "none", order: "current", page: "all" }, e) },
            _e = function(t) { for (var e = 0, n = t.length; e < n; e++)
                    if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t; return t.length = 0, t },
            Ce = function(e, n) { var i, r, o, a = [],
                    s = e.aiDisplay;
                o = e.aiDisplayMaster; var l = n.search; if (i = n.order, r = n.page, "ssp" == Pt(e)) return "removed" === l ? [] : ae(0, o.length); if ("current" == r)
                    for (i = e._iDisplayStart, r = e.fnDisplayEnd(); i < r; i++) a.push(s[i]);
                else if ("current" == i || "applied" == i) { if ("none" == l) a = o.slice();
                    else if ("applied" == l) a = s.slice();
                    else if ("removed" == l) { var c = {}; for (i = 0, r = s.length; i < r; i++) c[s[i]] = null;
                        a = t.map(o, (function(t) { return c.hasOwnProperty(t) ? null : t })) } } else if ("index" == i || "original" == i)
                    for (i = 0, r = e.aoData.length; i < r; i++) "none" == l ? a.push(i) : (-1 === (o = t.inArray(i, s)) && "removed" == l || 0 <= o && "applied" == l) && a.push(i); return a };
        Wt("rows()", (function(e, n) { e === i ? e = "" : t.isPlainObject(e) && (n = e, e = "");
            n = we(n); var r = this.iterator("table", (function(r) { var o, a = n; return xe("row", e, (function(e) { var n = te(e),
                        s = r.aoData; if (null !== n && !a) return [n]; if (o || (o = Ce(r, a)), null !== n && -1 !== t.inArray(n, o)) return [n]; if (null === e || e === i || "" === e) return o; if ("function" == typeof e) return t.map(o, (function(t) { var n = s[t]; return e(t, n._aData, n.nTr) ? t : null })); if (e.nodeName) { n = e._DT_RowIndex; var l = e._DT_CellIndex; return n !== i ? s[n] && s[n].nTr === e ? [n] : [] : l ? s[l.row] && s[l.row].nTr === e ? [l.row] : [] : (n = t(e).closest("*[data-dt-row]")).length ? [n.data("dt-row")] : [] } return "string" == typeof e && "#" === e.charAt(0) && (n = r.aIds[e.replace(/^#/, "")]) !== i ? [n.idx] : (n = se(oe(r.aoData, o, "nTr")), t(n).filter(e).map((function() { return this._DT_RowIndex })).toArray()) }), r, a) }), 1); return r.selector.rows = e, r.selector.opts = n, r })), Wt("rows().nodes()", (function() { return this.iterator("row", (function(t, e) { return t.aoData[e].nTr || i }), 1) })), Wt("rows().data()", (function() { return this.iterator(!0, "rows", (function(t, e) { return oe(t.aoData, e, "_aData") }), 1) })), zt("rows().cache()", "row().cache()", (function(t) { return this.iterator("row", (function(e, n) { var i = e.aoData[n]; return "search" === t ? i._aFilterData : i._aSortData }), 1) })), zt("rows().invalidate()", "row().invalidate()", (function(t) { return this.iterator("row", (function(e, n) { L(e, n, t) })) })), zt("rows().indexes()", "row().index()", (function() { return this.iterator("row", (function(t, e) { return e }), 1) })), zt("rows().ids()", "row().id()", (function(t) { for (var e = [], n = this.context, i = 0, r = n.length; i < r; i++)
                for (var o = 0, a = this[i].length; o < a; o++) { var s = n[i].rowIdFn(n[i].aoData[this[i][o]]._aData);
                    e.push((!0 === t ? "#" : "") + s) }
            return new qt(n, e) })), zt("rows().remove()", "row().remove()", (function() { var t = this; return this.iterator("row", (function(e, n, r) { var o, a, s, l, c, h = e.aoData,
                    u = h[n]; for (h.splice(n, 1), o = 0, a = h.length; o < a; o++)
                    if (c = (s = h[o]).anCells, null !== s.nTr && (s.nTr._DT_RowIndex = o), null !== c)
                        for (s = 0, l = c.length; s < l; s++) c[s]._DT_CellIndex.row = o;
                E(e.aiDisplayMaster, n), E(e.aiDisplay, n), E(t[r], n, !1), 0 < e._iRecordsDisplay && e._iRecordsDisplay--, Ot(e), (n = e.rowIdFn(u._aData)) !== i && delete e.aIds[n] })), this.iterator("table", (function(t) { for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e })), this })), Wt("rows.add()", (function(e) { var n = this.iterator("table", (function(t) { var n, i, r, o = []; for (i = 0, r = e.length; i < r; i++)(n = e[i]).nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(w(t, n)[0]) : o.push(x(t, n)); return o }), 1),
                i = this.rows(-1); return i.pop(), t.merge(i, n), i })), Wt("row()", (function(t, e) { return _e(this.rows(t, e)) })), Wt("row().data()", (function(e) { var n = this.context; if (e === i) return n.length && this.length ? n[0].aoData[this[0]]._aData : i; var r = n[0].aoData[this[0]]; return r._aData = e, t.isArray(e) && r.nTr.id && T(n[0].rowId)(e, r.nTr.id), L(n[0], this[0], "data"), this })), Wt("row().node()", (function() { var t = this.context; return t.length && this.length && t[0].aoData[this[0]].nTr || null })), Wt("row.add()", (function(e) { e instanceof t && e.length && (e = e[0]); var n = this.iterator("table", (function(t) { return e.nodeName && "TR" === e.nodeName.toUpperCase() ? w(t, e)[0] : x(t, e) })); return this.row(n[0]) })); var Se = function(t, e) { var n = t.context;
                n.length && (n = n[0].aoData[e !== i ? e : t[0]]) && n._details && (n._details.remove(), n._detailsShow = i, n._details = i) },
            De = function(t, e) { var n = t.context; if (n.length && t.length) { var i = n[0].aoData[t[0]]; if (i._details) {
                        (i._detailsShow = e) ? i._details.insertAfter(i.nTr): i._details.detach(); var r = n[0],
                            o = new qt(r),
                            a = r.aoData;
                        o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < re(a, "_details").length && (o.on("draw.dt.DT_details", (function(t, e) { r === e && o.rows({ page: "current" }).eq(0).each((function(t) {
                                (t = a[t])._detailsShow && t._details.insertAfter(t.nTr) })) })), o.on("column-visibility.dt.DT_details", (function(t, e) { if (r === e)
                                for (var n, i = v(e), o = 0, s = a.length; o < s; o++)(n = a[o])._details && n._details.children("td[colspan]").attr("colspan", i) })), o.on("destroy.dt.DT_details", (function(t, e) { if (r === e)
                                for (var n = 0, i = a.length; n < i; n++) a[n]._details && Se(o, n) }))) } } };
        Wt("row().child()", (function(e, n) { var r = this.context; if (e === i) return r.length && this.length ? r[0].aoData[this[0]]._details : i; if (!0 === e) this.child.show();
            else if (!1 === e) Se(this);
            else if (r.length && this.length) { var o = r[0],
                    a = (r = r[0].aoData[this[0]], []),
                    s = function(e, n) { if (t.isArray(e) || e instanceof t)
                            for (var i = 0, r = e.length; i < r; i++) s(e[i], n);
                        else e.nodeName && "tr" === e.nodeName.toLowerCase() ? a.push(e) : (i = t("<tr><td/></tr>").addClass(n), t("td", i).addClass(n).html(e)[0].colSpan = v(o), a.push(i[0])) };
                s(e, n), r._details && r._details.detach(), r._details = t(a), r._detailsShow && r._details.insertAfter(r.nTr) } return this })), Wt(["row().child.show()", "row().child().show()"], (function() { return De(this, !0), this })), Wt(["row().child.hide()", "row().child().hide()"], (function() { return De(this, !1), this })), Wt(["row().child.remove()", "row().child().remove()"], (function() { return Se(this), this })), Wt("row().child.isShown()", (function() { var t = this.context; return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1 })); var Te = /^([^:]+):(name|visIdx|visible)$/,
            ke = function(t, e, n, i, r) { n = [], i = 0; for (var o = r.length; i < o; i++) n.push(_(t, r[i], e)); return n };
        Wt("columns()", (function(e, n) { e === i ? e = "" : t.isPlainObject(e) && (n = e, e = "");
            n = we(n); var r = this.iterator("table", (function(i) { var r = e,
                    o = n,
                    a = i.aoColumns,
                    s = re(a, "sName"),
                    l = re(a, "nTh"); return xe("column", r, (function(e) { var n = te(e); if ("" === e) return ae(a.length); if (null !== n) return [n >= 0 ? n : a.length + n]; if ("function" == typeof e) { var r = Ce(i, o); return t.map(a, (function(t, n) { return e(n, ke(i, n, 0, 0, r), l[n]) ? n : null })) } var c = "string" == typeof e ? e.match(Te) : ""; if (c) switch (c[2]) {
                        case "visIdx":
                        case "visible":
                            if ((n = parseInt(c[1], 10)) < 0) { var h = t.map(a, (function(t, e) { return t.bVisible ? e : null })); return [h[h.length + n]] } return [f(i, n)];
                        case "name":
                            return t.map(s, (function(t, e) { return t === c[1] ? e : null }));
                        default:
                            return [] }
                    return e.nodeName && e._DT_CellIndex ? [e._DT_CellIndex.column] : (n = t(l).filter(e).map((function() { return t.inArray(this, l) })).toArray()).length || !e.nodeName ? n : (n = t(e).closest("*[data-dt-column]")).length ? [n.data("dt-column")] : [] }), i, o) }), 1); return r.selector.cols = e, r.selector.opts = n, r })), zt("columns().header()", "column().header()", (function() { return this.iterator("column", (function(t, e) { return t.aoColumns[e].nTh }), 1) })), zt("columns().footer()", "column().footer()", (function() { return this.iterator("column", (function(t, e) { return t.aoColumns[e].nTf }), 1) })), zt("columns().data()", "column().data()", (function() { return this.iterator("column-rows", ke, 1) })), zt("columns().dataSrc()", "column().dataSrc()", (function() { return this.iterator("column", (function(t, e) { return t.aoColumns[e].mData }), 1) })), zt("columns().cache()", "column().cache()", (function(t) { return this.iterator("column-rows", (function(e, n, i, r, o) { return oe(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n) }), 1) })), zt("columns().nodes()", "column().nodes()", (function() { return this.iterator("column-rows", (function(t, e, n, i, r) { return oe(t.aoData, r, "anCells", e) }), 1) })), zt("columns().visible()", "column().visible()", (function(e, n) { var r = this.iterator("column", (function(n, r) { if (e === i) return n.aoColumns[r].bVisible; var o, a, s, l = n.aoColumns,
                    c = l[r],
                    h = n.aoData; if (e !== i && c.bVisible !== e) { if (e) { var u = t.inArray(!0, re(l, "bVisible"), r + 1); for (o = 0, a = h.length; o < a; o++) s = h[o].nTr, l = h[o].anCells, s && s.insertBefore(l[r], l[u] || null) } else t(re(n.aoData, "anCells", r)).detach();
                    c.bVisible = e, N(n, n.aoHeader), N(n, n.aoFooter), n.aiDisplay.length || t(n.nTBody).find("td[colspan]").attr("colspan", v(n)), kt(n) } })); return e !== i && (this.iterator("column", (function(t, i) { Nt(t, null, "column-visibility", [t, i, e, n]) })), (n === i || n) && this.columns.adjust()), r })), zt("columns().indexes()", "column().index()", (function(t) { return this.iterator("column", (function(e, n) { return "visible" === t ? g(e, n) : n }), 1) })), Wt("columns.adjust()", (function() { return this.iterator("table", (function(t) { p(t) }), 1) })), Wt("column.index()", (function(t, e) { if (0 !== this.context.length) { var n = this.context[0]; if ("fromVisible" === t || "toData" === t) return f(n, e); if ("fromData" === t || "toVisible" === t) return g(n, e) } })), Wt("column()", (function(t, e) { return _e(this.columns(t, e)) })), Wt("cells()", (function(e, n, r) { if (t.isPlainObject(e) && (e.row === i ? (r = e, e = null) : (r = n, n = null)), t.isPlainObject(n) && (r = n, n = null), null === n || n === i) return this.iterator("table", (function(n) { var o, a, s, l, c, h, u, d = e,
                    p = we(r),
                    f = n.aoData,
                    g = Ce(n, p),
                    v = se(oe(f, g, "anCells")),
                    m = t([].concat.apply([], v)),
                    y = n.aoColumns.length; return xe("cell", d, (function(e) { var r = "function" == typeof e; if (null === e || e === i || r) { for (a = [], s = 0, l = g.length; s < l; s++)
                            for (o = g[s], c = 0; c < y; c++) h = { row: o, column: c }, r ? (u = f[o], e(h, _(n, o, c), u.anCells ? u.anCells[c] : null) && a.push(h)) : a.push(h); return a } return t.isPlainObject(e) ? e.column !== i && e.row !== i && -1 !== t.inArray(e.row, g) ? [e] : [] : (r = m.filter(e).map((function(t, e) { return { row: e._DT_CellIndex.row, column: e._DT_CellIndex.column } })).toArray()).length || !e.nodeName ? r : (u = t(e).closest("*[data-dt-row]")).length ? [{ row: u.data("dt-row"), column: u.data("dt-column") }] : [] }), n, p) })); var o, a, s, l, c, h = this.columns(n),
                u = this.rows(e);
            this.iterator("table", (function(t, e) { for (o = [], a = 0, s = u[e].length; a < s; a++)
                    for (l = 0, c = h[e].length; l < c; l++) o.push({ row: u[e][a], column: h[e][l] }) }), 1); var d = this.cells(o, r); return t.extend(d.selector, { cols: n, rows: e, opts: r }), d })), zt("cells().nodes()", "cell().node()", (function() { return this.iterator("cell", (function(t, e, n) { return (t = t.aoData[e]) && t.anCells ? t.anCells[n] : i }), 1) })), Wt("cells().data()", (function() { return this.iterator("cell", (function(t, e, n) { return _(t, e, n) }), 1) })), zt("cells().cache()", "cell().cache()", (function(t) { return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", (function(e, n, i) { return e.aoData[n][t][i] }), 1) })), zt("cells().render()", "cell().render()", (function(t) { return this.iterator("cell", (function(e, n, i) { return _(e, n, i, t) }), 1) })), zt("cells().indexes()", "cell().index()", (function() { return this.iterator("cell", (function(t, e, n) { return { row: e, column: n, columnVisible: g(t, n) } }), 1) })), zt("cells().invalidate()", "cell().invalidate()", (function(t) { return this.iterator("cell", (function(e, n, i) { L(e, n, t, i) })) })), Wt("cell()", (function(t, e, n) { return _e(this.cells(t, e, n)) })), Wt("cell().data()", (function(t) { var e = this.context,
                n = this[0]; return t === i ? e.length && n.length ? _(e[0], n[0].row, n[0].column) : i : (C(e[0], n[0].row, n[0].column, t), L(e[0], n[0].row, "data", n[0].column), this) })), Wt("order()", (function(e, n) { var r = this.context; return e === i ? 0 !== r.length ? r[0].aaSorting : i : ("number" == typeof e ? e = [
                [e, n]
            ] : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", (function(t) { t.aaSorting = e.slice() }))) })), Wt("order.listener()", (function(t, e, n) { return this.iterator("table", (function(i) { St(i, t, e, n) })) })), Wt("order.fixed()", (function(e) { if (!e) { var n = (n = this.context).length ? n[0].aaSortingFixed : i; return t.isArray(n) ? { pre: n } : n } return this.iterator("table", (function(n) { n.aaSortingFixed = t.extend(!0, {}, e) })) })), Wt(["columns().order()", "column().order()"], (function(e) { var n = this; return this.iterator("table", (function(i, r) { var o = [];
                t.each(n[r], (function(t, n) { o.push([n, e]) })), i.aaSorting = o })) })), Wt("search()", (function(e, n, r, o) { var a = this.context; return e === i ? 0 !== a.length ? a[0].oPreviousSearch.sSearch : i : this.iterator("table", (function(i) { i.oFeatures.bFilter && Y(i, t.extend({}, i.oPreviousSearch, { sSearch: e + "", bRegex: null !== n && n, bSmart: null === r || r, bCaseInsensitive: null === o || o }), 1) })) })), zt("columns().search()", "column().search()", (function(e, n, r, o) { return this.iterator("column", (function(a, s) { var l = a.aoPreSearchCols; if (e === i) return l[s].sSearch;
                a.oFeatures.bFilter && (t.extend(l[s], { sSearch: e + "", bRegex: null !== n && n, bSmart: null === r || r, bCaseInsensitive: null === o || o }), Y(a, a.oPreviousSearch, 1)) })) })), Wt("state()", (function() { return this.context.length ? this.context[0].oSavedState : null })), Wt("state.clear()", (function() { return this.iterator("table", (function(t) { t.fnStateSaveCallback.call(t.oInstance, t, {}) })) })), Wt("state.loaded()", (function() { return this.context.length ? this.context[0].oLoadedState : null })), Wt("state.save()", (function() { return this.iterator("table", (function(t) { kt(t) })) })), Vt.versionCheck = Vt.fnVersionCheck = function(t) { for (var e, n, i = Vt.version.split("."), r = 0, o = (t = t.split(".")).length; r < o; r++)
                if ((e = parseInt(i[r], 10) || 0) !== (n = parseInt(t[r], 10) || 0)) return e > n; return !0 }, Vt.isDataTable = Vt.fnIsDataTable = function(e) { var n = t(e).get(0),
                i = !1; return e instanceof Vt.Api || (t.each(Vt.settings, (function(e, r) { var o = r.nScrollHead ? t("table", r.nScrollHead)[0] : null,
                    a = r.nScrollFoot ? t("table", r.nScrollFoot)[0] : null;
                r.nTable !== n && o !== n && a !== n || (i = !0) })), i) }, Vt.tables = Vt.fnTables = function(e) { var n = !1;
            t.isPlainObject(e) && (n = e.api, e = e.visible); var i = t.map(Vt.settings, (function(n) { if (!e || e && t(n.nTable).is(":visible")) return n.nTable })); return n ? new qt(i) : i }, Vt.camelToHungarian = o, Wt("$()", (function(e, n) { var i = this.rows(n).nodes();
            i = t(i); return t([].concat(i.filter(e).toArray(), i.find(e).toArray())) })), t.each(["on", "one", "off"], (function(e, n) { Wt(n + "()", (function() { var e = Array.prototype.slice.call(arguments);
                e[0] = t.map(e[0].split(/\s/), (function(t) { return t.match(/\.dt\b/) ? t : t + ".dt" })).join(" "); var i = t(this.tables().nodes()); return i[n].apply(i, e), this })) })), Wt("clear()", (function() { return this.iterator("table", (function(t) { A(t) })) })), Wt("settings()", (function() { return new qt(this.context, this.context) })), Wt("init()", (function() { var t = this.context; return t.length ? t[0].oInit : null })), Wt("data()", (function() { return this.iterator("table", (function(t) { return re(t.aoData, "_aData") })).flatten() })), Wt("destroy()", (function(n) { return n = n || !1, this.iterator("table", (function(i) { var r, o = i.nTableWrapper.parentNode,
                    a = i.oClasses,
                    s = i.nTable,
                    l = i.nTBody,
                    c = i.nTHead,
                    h = i.nTFoot,
                    u = t(s),
                    d = (l = t(l), t(i.nTableWrapper)),
                    p = t.map(i.aoData, (function(t) { return t.nTr }));
                i.bDestroying = !0, Nt(i, "aoDestroyCallback", "destroy", [i]), n || new qt(i).columns().visible(!0), d.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + i.sInstance), s != c.parentNode && (u.children("thead").detach(), u.append(c)), h && s != h.parentNode && (u.children("tfoot").detach(), u.append(h)), i.aaSorting = [], i.aaSortingFixed = [], Dt(i), t(p).removeClass(i.asStripeClasses.join(" ")), t("th, td", c).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), l.children().detach(), l.append(p), u[c = n ? "remove" : "detach"](), d[c](), !n && o && (o.insertBefore(s, i.nTableReinsertBefore), u.css("width", i.sDestroyWidth).removeClass(a.sTable), (r = i.asDestroyStripes.length) && l.children().each((function(e) { t(this).addClass(i.asDestroyStripes[e % r]) }))), -1 !== (o = t.inArray(i, Vt.settings)) && Vt.settings.splice(o, 1) })) })), t.each(["column", "row", "cell"], (function(t, e) { Wt(e + "s().every()", (function(t) { var n = this.selector.opts,
                    r = this; return this.iterator(e, (function(o, a, s, l, c) { t.call(r[e](a, "cell" === e ? s : n, "cell" === e ? n : i), a, s, l, c) })) })) })), Wt("i18n()", (function(e, n, r) { var o = this.context[0]; return (e = D(e)(o.oLanguage)) === i && (e = n), r !== i && t.isPlainObject(e) && (e = e[r] !== i ? e[r] : e._), e.replace("%d", r) })), Vt.version = "1.10.19", Vt.settings = [], Vt.models = {}, Vt.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }, Vt.models.oRow = { nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1 }, Vt.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }, Vt.defaults = { aaData: null, aaSorting: [
                [0, "asc"]
            ], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function(t) { return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function(t) { try { return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname)) } catch (t) {} }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function(t, e) { try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e)) } catch (t) {} }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: { oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries", sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found" }, oSearch: t.extend({}, Vt.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId" }, r(Vt.defaults), Vt.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }, r(Vt.defaults.column), Vt.models.oSettings = { oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [], aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: i, oAjaxData: i, fnServerData: null, aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function() { return "ssp" == Pt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function() { return "ssp" == Pt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function() { var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    i = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate; return r.bServerSide ? !1 === o || -1 === t ? e + i : Math.min(e + t, this._iRecordsDisplay) : !o || n > i || -1 === t ? i : n }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null }, Vt.ext = Ut = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: Vt.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: Vt.version }, t.extend(Ut, { afnFiltering: Ut.search, aTypes: Ut.type.detect, ofnSearch: Ut.type.search, oSort: Ut.type.order, afnSortData: Ut.order, aoFeatures: Ut.feature, oApi: Ut.internal, oStdClasses: Ut.classes, oPagination: Ut.pager }), t.extend(Vt.ext.classes, { sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd", sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead", sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: "" }); var Ae = Vt.ext.pager;
        t.extend(Ae, { simple: function() { return ["previous", "next"] }, full: function() { return ["first", "previous", "next", "last"] }, numbers: function(t, e) { return [Rt(t, e)] }, simple_numbers: function(t, e) { return ["previous", Rt(t, e), "next"] }, full_numbers: function(t, e) { return ["first", "previous", Rt(t, e), "next", "last"] }, first_last_numbers: function(t, e) { return ["first", Rt(t, e), "last"] }, _numbers: Rt, numbers_length: 7 }), t.extend(!0, Vt.ext.renderer, { pageButton: { _: function(e, r, o, a, s, l) { var c, h, u, d = e.oClasses,
                        p = e.oLanguage.oPaginate,
                        f = e.oLanguage.oAria.paginate || {},
                        g = 0,
                        v = function(n, i) { var r, a, u, m, y = function(t) { ct(e, t.data.action, !0) }; for (r = 0, a = i.length; r < a; r++)
                                if (m = i[r], t.isArray(m)) u = t("<" + (m.DT_el || "div") + "/>").appendTo(n), v(u, m);
                                else { switch (c = null, h = "", m) {
                                        case "ellipsis":
                                            n.append('<span class="ellipsis">&#x2026;</span>'); break;
                                        case "first":
                                            c = p.sFirst, h = m + (s > 0 ? "" : " " + d.sPageButtonDisabled); break;
                                        case "previous":
                                            c = p.sPrevious, h = m + (s > 0 ? "" : " " + d.sPageButtonDisabled); break;
                                        case "next":
                                            c = p.sNext, h = m + (s < l - 1 ? "" : " " + d.sPageButtonDisabled); break;
                                        case "last":
                                            c = p.sLast, h = m + (s < l - 1 ? "" : " " + d.sPageButtonDisabled); break;
                                        default:
                                            c = m + 1, h = s === m ? d.sPageButtonActive : "" } null !== c && (Mt(u = t("<a>", { class: d.sPageButton + " " + h, "aria-controls": e.sTableId, "aria-label": f[m], "data-dt-idx": g, tabindex: e.iTabIndex, id: 0 === o && "string" == typeof m ? e.sTableId + "_" + m : null }).html(c).appendTo(n), { action: m }, y), g++) } }; try { u = t(r).find(n.activeElement).data("dt-idx") } catch (t) {} v(t(r).empty(), a), u !== i && t(r).find("[data-dt-idx=" + u + "]").focus() } } }), t.extend(Vt.ext.type.detect, [function(t, e) { var n = e.oLanguage.sDecimal; return ne(t, n) ? "num" + n : null }, function(t) { if (t && !(t instanceof Date) && !Qt.test(t)) return null; var e = Date.parse(t); return null !== e && !isNaN(e) || Zt(t) ? "date" : null }, function(t, e) { var n = e.oLanguage.sDecimal; return ne(t, n, !0) ? "num-fmt" + n : null }, function(t, e) { var n = e.oLanguage.sDecimal; return ie(t, n) ? "html-num" + n : null }, function(t, e) { var n = e.oLanguage.sDecimal; return ie(t, n, !0) ? "html-num-fmt" + n : null }, function(t) { return Zt(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null }]), t.extend(Vt.ext.type.search, { html: function(t) { return Zt(t) ? t : "string" == typeof t ? t.replace(Gt, " ").replace(Xt, "") : "" }, string: function(t) { return Zt(t) ? t : "string" == typeof t ? t.replace(Gt, " ") : t } }); var Ee = function(t, e, n, i) { return 0 === t || t && "-" !== t ? (e && (t = ee(t, e)), t.replace && (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))), 1 * t) : -1 / 0 };
        t.extend(Ut.type.order, { "date-pre": function(t) { return t = Date.parse(t), isNaN(t) ? -1 / 0 : t }, "html-pre": function(t) { return Zt(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + "" }, "string-pre": function(t) { return Zt(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : "" }, "string-asc": function(t, e) { return t < e ? -1 : t > e ? 1 : 0 }, "string-desc": function(t, e) { return t < e ? 1 : t > e ? -1 : 0 } }), Bt(""), t.extend(!0, Vt.ext.renderer, { header: { _: function(e, n, i, r) { t(e.nTable).on("order.dt.DT", (function(t, o, a, s) { e === o && (t = i.idx, n.removeClass(i.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[t] ? r.sSortAsc : "desc" == s[t] ? r.sSortDesc : i.sSortingClass)) })) }, jqueryui: function(e, n, i, r) { t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon + " " + i.sSortingClassJUI)).appendTo(n), t(e.nTable).on("order.dt.DT", (function(t, o, a, s) { e === o && (t = i.idx, n.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == s[t] ? r.sSortAsc : "desc" == s[t] ? r.sSortDesc : i.sSortingClass), n.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == s[t] ? r.sSortJUIAsc : "desc" == s[t] ? r.sSortJUIDesc : i.sSortingClassJUI)) })) } } }); var Le = function(t) { return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t }; return Vt.render = { number: function(t, e, n, i, r) { return { display: function(o) { if ("number" != typeof o && "string" != typeof o) return o; var a = 0 > o ? "-" : "",
                            s = parseFloat(o); return isNaN(s) ? Le(o) : (s = s.toFixed(n), o = Math.abs(s), s = parseInt(o, 10), o = n ? e + (o - s).toFixed(n).substring(2) : "", a + (i || "") + s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + o + (r || "")) } } }, text: function() { return { display: Le, filter: Le } } }, t.extend(Vt.ext.internal, { _fnExternApiFunc: Ht, _fnBuildAjax: H, _fnAjaxUpdate: U, _fnAjaxParameters: q, _fnAjaxUpdateDraw: W, _fnAjaxDataSrc: z, _fnAddColumn: u, _fnColumnOptions: d, _fnAdjustColumnSizing: p, _fnVisibleToColumnIndex: f, _fnColumnIndexToVisible: g, _fnVisbleColumns: v, _fnGetColumns: m, _fnColumnTypes: y, _fnApplyColumnDefs: b, _fnHungarianMap: r, _fnCamelToHungarian: o, _fnLanguageCompat: a, _fnBrowserDetect: c, _fnAddData: x, _fnAddTr: w, _fnNodeToDataIndex: function(t, e) { return e._DT_RowIndex !== i ? e._DT_RowIndex : null }, _fnNodeToColumnIndex: function(e, n, i) { return t.inArray(i, e.aoData[n].anCells) }, _fnGetCellData: _, _fnSetCellData: C, _fnSplitObjNotation: S, _fnGetObjectDataFn: D, _fnSetObjectDataFn: T, _fnGetDataMaster: k, _fnClearTable: A, _fnDeleteIndex: E, _fnInvalidate: L, _fnGetRowElements: $, _fnCreateTr: I, _fnBuildHead: F, _fnDrawHead: N, _fnDraw: O, _fnReDraw: j, _fnAddOptionsHtml: P, _fnDetectHeader: R, _fnGetUniqueThs: B, _fnFeatureHtmlFilter: V, _fnFilterComplete: Y, _fnFilterCustom: G, _fnFilterColumn: X, _fnFilter: Q, _fnFilterCreateSearch: J, _fnEscapeRegex: de, _fnFilterData: K, _fnFeatureHtmlInfo: et, _fnUpdateInfo: nt, _fnInfoMacros: it, _fnInitialise: rt, _fnInitComplete: ot, _fnLengthChange: at, _fnFeatureHtmlLength: st, _fnFeatureHtmlPaginate: lt, _fnPageChange: ct, _fnFeatureHtmlProcessing: ht, _fnProcessingDisplay: ut, _fnFeatureHtmlTable: dt, _fnScrollDraw: pt, _fnApplyToChildren: ft, _fnCalculateColumnWidths: gt, _fnThrottle: ve, _fnConvertToWidth: vt, _fnGetWidestNode: mt, _fnGetMaxLenString: yt, _fnStringToCss: bt, _fnSortFlatten: xt, _fnSort: wt, _fnSortAria: _t, _fnSortListener: Ct, _fnSortAttachListener: St, _fnSortingClasses: Dt, _fnSortData: Tt, _fnSaveState: kt, _fnLoadState: At, _fnSettingsFromNode: Et, _fnLog: Lt, _fnMap: $t, _fnBindAction: Mt, _fnCallbackReg: Ft, _fnCallbackFire: Nt, _fnLengthOverflow: Ot, _fnRenderer: jt, _fnDataSource: Pt, _fnRowAttributes: M, _fnExtend: It, _fnCalculateEnd: function() {} }), t.fn.dataTable = Vt, Vt.$ = t, t.fn.dataTableSettings = Vt.settings, t.fn.dataTableExt = Vt.ext, t.fn.DataTable = function(e) { return t(this).dataTable(e).api() }, t.each(Vt, (function(e, n) { t.fn.DataTable[e] = n })), t.fn.dataTable })), function(t) { "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], (function(e) { return t(e, window, document) })) : "object" == typeof exports ? module.exports = function(e, n) { return e || (e = window), n && n.fn.dataTable || (n = require("datatables.net")(e, n).$), t(n, e, e.document) } : t(jQuery, window, document) }((function(t, e, n, i) { var r = t.fn.dataTable; return t.extend(!0, r.defaults, { dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>", renderer: "bootstrap" }), t.extend(r.ext.classes, { sWrapper: "dataTables_wrapper form-inline dt-bootstrap", sFilterInput: "form-control input-sm", sLengthSelect: "form-control input-sm", sProcessing: "dataTables_processing panel panel-default" }), r.ext.renderer.pageButton.bootstrap = function(e, o, a, s, l, c) { var h, u, d, p = new r.Api(e),
                f = e.oClasses,
                g = e.oLanguage.oPaginate,
                v = e.oLanguage.oAria.paginate || {},
                m = 0,
                y = function(n, i) { var r, o, s, d, b = function(e) { e.preventDefault(), !t(e.currentTarget).hasClass("disabled") && p.page() != e.data.action && p.page(e.data.action).draw("page") }; for (r = 0, o = i.length; r < o; r++)
                        if (d = i[r], t.isArray(d)) y(n, d);
                        else { switch (u = h = "", d) {
                                case "ellipsis":
                                    h = "&#x2026;", u = "disabled"; break;
                                case "first":
                                    h = g.sFirst, u = d + (0 < l ? "" : " disabled"); break;
                                case "previous":
                                    h = g.sPrevious, u = d + (0 < l ? "" : " disabled"); break;
                                case "next":
                                    h = g.sNext, u = d + (l < c - 1 ? "" : " disabled"); break;
                                case "last":
                                    h = g.sLast, u = d + (l < c - 1 ? "" : " disabled"); break;
                                default:
                                    h = d + 1, u = l === d ? "active" : "" } h && (s = t("<li>", { class: f.sPageButton + " " + u, id: 0 === a && "string" == typeof d ? e.sTableId + "_" + d : null }).append(t("<a>", { href: "#", "aria-controls": e.sTableId, "aria-label": v[d], "data-dt-idx": m, tabindex: e.iTabIndex }).html(h)).appendTo(n), e.oApi._fnBindAction(s, { action: d }, b), m++) } }; try { d = t(o).find(n.activeElement).data("dt-idx") } catch (t) {} y(t(o).empty().html('<ul class="pagination"/>').children("ul"), s), d !== i && t(o).find("[data-dt-idx=" + d + "]").focus() }, r })), function(e) { e.fn.extend({ slimScroll: function(n) { var i = e.extend({ width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, n); return this.each((function() {
                    function r(t) { if (c) { var n = 0;
                            (t = t || window.event).wheelDelta && (n = -t.wheelDelta / 120), t.detail && (n = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + i.wrapperClass).is(y.parent()) && o(n, !0), t.preventDefault && !m && t.preventDefault(), m || (t.returnValue = !1) } }

                    function o(t, e, n) { m = !1; var r = y.outerHeight() - x.outerHeight();
                        e && (e = parseInt(x.css("top")) + t * parseInt(i.wheelStep) / 100 * x.outerHeight(), e = Math.min(Math.max(e, 0), r), e = 0 < t ? Math.ceil(e) : Math.floor(e), x.css({ top: e + "px" })), e = (g = parseInt(x.css("top")) / (y.outerHeight() - x.outerHeight())) * (y[0].scrollHeight - y.outerHeight()), n && (t = (e = t) / y[0].scrollHeight * y.outerHeight(), t = Math.min(Math.max(t, 0), r), x.css({ top: t + "px" })), y.scrollTop(e), y.trigger("slimscrolling", ~~e), s(), l() }

                    function a() { f = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), 30), x.css({ height: f + "px" }); var t = f == y.outerHeight() ? "none" : "block";
                        x.css({ display: t }) }

                    function s() { a(), clearTimeout(d), g == ~~g ? (m = i.allowPageScroll, v != g && y.trigger("slimscroll", 0 == ~~g ? "top" : "bottom")) : m = !1, v = g, f >= y.outerHeight() ? m = !0 : (x.stop(!0, !0).fadeIn("fast"), i.railVisible && w.stop(!0, !0).fadeIn("fast")) }

                    function l() { i.alwaysVisible || (d = setTimeout((function() { i.disableFadeOut && c || h || u || (x.fadeOut("slow"), w.fadeOut("slow")) }), 1e3)) } var c, h, u, d, p, f, g, v, m = !1,
                        y = e(this); if (y.parent().hasClass(i.wrapperClass)) { var b = y.scrollTop(),
                            x = y.siblings("." + i.barClass),
                            w = y.siblings("." + i.railClass); if (a(), e.isPlainObject(n)) { if ("height" in n && "auto" == n.height) { y.parent().css("height", "auto"), y.css("height", "auto"); var _ = y.parent().parent().height();
                                y.parent().css("height", _), y.css("height", _) } else "height" in n && (_ = n.height, y.parent().css("height", _), y.css("height", _)); if ("scrollTo" in n) b = parseInt(i.scrollTo);
                            else if ("scrollBy" in n) b += parseInt(i.scrollBy);
                            else if ("destroy" in n) return x.remove(), w.remove(), void y.unwrap();
                            o(b, !1, !0) } } else if (!e.isPlainObject(n) || !("destroy" in n)) { i.height = "auto" == i.height ? y.parent().height() : i.height, b = e("<div></div>").addClass(i.wrapperClass).css({ position: "relative", overflow: "hidden", width: i.width, height: i.height }), y.css({ overflow: "hidden", width: i.width, height: i.height });
                        w = e("<div></div>").addClass(i.railClass).css({ width: i.size, height: "100%", position: "absolute", top: 0, display: i.alwaysVisible && i.railVisible ? "block" : "none", "border-radius": i.railBorderRadius, background: i.railColor, opacity: i.railOpacity, zIndex: 90 }), x = e("<div></div>").addClass(i.barClass).css({ background: i.color, width: i.size, position: "absolute", top: 0, opacity: i.opacity, display: i.alwaysVisible ? "block" : "none", "border-radius": i.borderRadius, BorderRadius: i.borderRadius, MozBorderRadius: i.borderRadius, WebkitBorderRadius: i.borderRadius, zIndex: 99 }), _ = "right" == i.position ? { right: i.distance } : { left: i.distance };
                        w.css(_), x.css(_), y.wrap(b), y.parent().append(x), y.parent().append(w), i.railDraggable && x.bind("mousedown", (function(n) { var i = e(document); return u = !0, t = parseFloat(x.css("top")), pageY = n.pageY, i.bind("mousemove.slimscroll", (function(e) { currTop = t + e.pageY - pageY, x.css("top", currTop), o(0, x.position().top, !1) })), i.bind("mouseup.slimscroll", (function(t) { u = !1, l(), i.unbind(".slimscroll") })), !1 })).bind("selectstart.slimscroll", (function(t) { return t.stopPropagation(), t.preventDefault(), !1 })), w.hover((function() { s() }), (function() { l() })), x.hover((function() { h = !0 }), (function() { h = !1 })), y.hover((function() { c = !0, s(), l() }), (function() { c = !1, l() })), y.bind("touchstart", (function(t, e) { t.originalEvent.touches.length && (p = t.originalEvent.touches[0].pageY) })), y.bind("touchmove", (function(t) { m || t.originalEvent.preventDefault(), t.originalEvent.touches.length && (o((p - t.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), p = t.originalEvent.touches[0].pageY) })), a(), "bottom" === i.start ? (x.css({ top: y.outerHeight() - x.outerHeight() }), o(0, !0)) : "top" !== i.start && (o(e(i.start).position().top, null, !0), i.alwaysVisible || x.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r) } })), this } }), e.fn.extend({ slimscroll: e.fn.slimScroll }) }(jQuery), function() { "use strict";

        function t(e, i) { var r; if (i = i || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = e, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !t.notNeeded(e)) { for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, s = 0, l = o.length; s < l; s++) a[o[s]] = c(a[o[s]], a);
                n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, i) { var r = Node.prototype.removeEventListener; "click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i) }, e.addEventListener = function(t, n, i) { var r = Node.prototype.addEventListener; "click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function(t) { t.propagationStopped || n(t) }), i) : r.call(e, t, n, i) }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", (function(t) { r(t) }), !1), e.onclick = null) }

            function c(t, e) { return function() { return t.apply(e, arguments) } } } var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
            n = navigator.userAgent.indexOf("Android") > 0 && !e,
            i = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
            r = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            o = i && /OS [6-7]_\d/.test(navigator.userAgent),
            a = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function(t) { switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0; break;
                case "input":
                    if (i && "file" === t.type || t.disabled) return !0; break;
                case "label":
                case "iframe":
                case "video":
                    return !0 } return /\bneedsclick\b/.test(t.className) }, t.prototype.needsFocus = function(t) { switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !n;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1 } return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className) } }, t.prototype.sendClick = function(t, e) { var n, i;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n) }, t.prototype.determineEventType = function(t) { return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click" }, t.prototype.focus = function(t) { var e;
            i && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus() }, t.prototype.updateScrollParent = function(t) { var e, n; if (!(e = t.fastClickScrollParent) || !e.contains(t)) { n = t;
                do { if (n.scrollHeight > n.offsetHeight) { e = n, t.fastClickScrollParent = n; break } n = n.parentElement } while (n) } e && (e.fastClickLastScrollTop = e.scrollTop) }, t.prototype.getTargetElementFromEventTarget = function(t) { return t.nodeType === Node.TEXT_NODE ? t.parentNode : t }, t.prototype.onTouchStart = function(t) { var e, n, o; if (t.targetTouches.length > 1) return !0; if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], i) { if ((o = window.getSelection()).rangeCount && !o.isCollapsed) return !0; if (!r) { if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e) } } return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0 }, t.prototype.touchHasMoved = function(t) { var e = t.changedTouches[0],
                n = this.touchBoundary; return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n }, t.prototype.onTouchMove = function(t) { return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) }, t.prototype.findControl = function(t) { return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, t.prototype.onTouchEnd = function(t) { var e, a, s, l, c, h = this.targetElement; if (!this.trackingClick) return !0; if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0; if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0; if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (c = t.changedTouches[0], (h = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || h).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (s = h.tagName.toLowerCase())) { if (e = this.findControl(h)) { if (this.focus(h), n) return !1;
                    h = e } } else if (this.needsFocus(h)) return t.timeStamp - a > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(h), this.sendClick(h, t), i && "select" === s || (this.targetElement = null, t.preventDefault()), !1); return !(!i || r || !(l = h.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(h) || (t.preventDefault(), this.sendClick(h, t)), !1) }, t.prototype.onTouchCancel = function() { this.trackingClick = !1, this.targetElement = null }, t.prototype.onMouse = function(t) { return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1)))) }, t.prototype.onClick = function(t) { var e; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e) }, t.prototype.destroy = function() { var t = this.layer;
            n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1) }, t.notNeeded = function(t) { var e, i, r; if (void 0 === window.ontouchstart) return !0; if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!n) return !0; if (e = document.querySelector("meta[name=viewport]")) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0 } } if (a && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) { if (-1 !== e.content.indexOf("user-scalable=no")) return !0; if (document.documentElement.scrollWidth <= window.outerWidth) return !0 } return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction)) }, t.attach = function(e, n) { return new t(e, n) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define((function() { return t })) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t }(), "undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");
! function(t) { "use strict";

    function e(e, n) { if (this.element = e, this.options = n, this.$overlay = t(n.overlayTemplate), "" === n.source) throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");
        this._setUpListeners(), this.load() } var n = "lte.boxrefresh",
        i = { source: "", params: {}, trigger: ".refresh-btn", content: ".card-body", loadInContent: !0, responseType: "", overlayTemplate: '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>', onLoadStart: function() {}, onLoadDone: function(t) { return t } };

    function r(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(o, s)) } if ("string" == typeof a) { if (void 0 === a[r]) throw new Error("No method named " + r);
                a[r]() } })) } e.prototype.load = function() { this._addOverlay(), this.options.onLoadStart.call(t(this)), t.get(this.options.source, this.options.params, function(e) { this.options.loadInContent && t(this.element).find(this.options.content).html(e), this.options.onLoadDone.call(t(this), e), this._removeOverlay() }.bind(this), "" !== this.options.responseType && this.options.responseType) }, e.prototype._setUpListeners = function() { t(this.element).on("click", this.options.trigger, function(t) { t && t.preventDefault(), this.load() }.bind(this)) }, e.prototype._addOverlay = function() { t(this.element).append(this.$overlay) }, e.prototype._removeOverlay = function() { t(this.$overlay).remove() }; var o = t.fn.boxRefresh;
    t.fn.boxRefresh = r, t.fn.boxRefresh.Constructor = e, t.fn.boxRefresh.noConflict = function() { return t.fn.boxRefresh = o, this }, t(window).on("load", (function() { t('[data-widget="box-refresh"]').each((function() { r.call(t(this)) })) })) }(jQuery),
function(t) { "use strict";

    function e(t, e) { this.element = t, this.options = e, this._setUpListeners() } var n = "lte.boxwidget",
        i = { animationSpeed: 500, collapseTrigger: '[data-widget="collapse"]', removeTrigger: '[data-widget="remove"]', collapseIcon: "fa-minus", expandIcon: "fa-plus", removeIcon: "fa-times" },
        r = ".box-header",
        o = ".card-body",
        a = ".card-footer",
        s = ".box-tools",
        l = "collapsed-box";

    function c(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(o, s)) } if ("string" == typeof r) { if (void 0 === a[r]) throw new Error("No method named " + r);
                a[r]() } })) } e.prototype.toggle = function() { t(this.element).is(".collapsed-box") ? this.expand() : this.collapse() }, e.prototype.expand = function() { var e = t.Event("expanded.boxwidget"),
            n = t.Event("expanding.boxwidget"),
            i = this.options.collapseIcon,
            c = this.options.expandIcon;
        t(this.element).removeClass(l), t(this.element).children(r + ", " + o + ", " + a).children(s).find("." + c).removeClass(c).addClass(i), t(this.element).children(o + ", " + a).slideDown(this.options.animationSpeed, function() { t(this.element).trigger(e) }.bind(this)).trigger(n) }, e.prototype.collapse = function() { var e = t.Event("collapsed.boxwidget"),
            n = t.Event("collapsing.boxwidget"),
            i = this.options.collapseIcon,
            c = this.options.expandIcon;
        t(this.element).children(r + ", " + o + ", " + a).children(s).find("." + i).removeClass(i).addClass(c), t(this.element).children(o + ", " + a).slideUp(this.options.animationSpeed, function() { t(this.element).addClass(l), t(this.element).trigger(e) }.bind(this)).trigger(n) }, e.prototype.remove = function() { var e = t.Event("removed.boxwidget"),
            n = t.Event("removing.boxwidget");
        t(this.element).slideUp(this.options.animationSpeed, function() { t(this.element).trigger(e), t(this.element).remove() }.bind(this)).trigger(n) }, e.prototype._setUpListeners = function() { var e = this;
        t(this.element).on("click", this.options.collapseTrigger, (function(n) { return n && n.preventDefault(), e.toggle(t(this)), !1 })), t(this.element).on("click", this.options.removeTrigger, (function(n) { return n && n.preventDefault(), e.remove(t(this)), !1 })) }; var h = t.fn.boxWidget;
    t.fn.boxWidget = c, t.fn.boxWidget.Constructor = e, t.fn.boxWidget.noConflict = function() { return t.fn.boxWidget = h, this }, t(window).on("load", (function() { t(".box").each((function() { c.call(t(this)) })) })) }(jQuery),
function(t) { "use strict";

    function e(t, e) { this.element = t, this.options = e, this.hasBindedResize = !1, this.init() } var n = "lte.controlsidebar",
        i = { controlsidebarSlide: !0 },
        r = ".control-sidebar",
        o = '[data-toggle="control-sidebar"]',
        a = ".control-sidebar-open",
        s = "control-sidebar-open",
        l = "control-sidebar-hold-transition";

    function c(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(o, s)) } "string" == typeof r && a.toggle() })) } e.prototype.init = function() { t(this.element).is(o) || t(this).on("click", this.toggle), this.fix(), t(window).resize(function() { this.fix() }.bind(this)) }, e.prototype.toggle = function(e) { e && e.preventDefault(), this.fix(), t(r).is(a) || t("body").is(a) ? this.collapse() : this.expand() }, e.prototype.expand = function() { t(r).show(), this.options.controlsidebarSlide ? t(r).addClass(s) : t("body").addClass(l).addClass(s).delay(50).queue((function() { t("body").removeClass(l), t(this).dequeue() })), t(this.element).trigger(t.Event("expanded.controlsidebar")) }, e.prototype.collapse = function() { this.options.controlsidebarSlide ? t(r).removeClass(s) : t("body").addClass(l).removeClass(s).delay(50).queue((function() { t("body").removeClass(l), t(this).dequeue() })), t(r).fadeOut(), t(this.element).trigger(t.Event("collapsed.controlsidebar")) }, e.prototype.fix = function() { t("body").is(".layout-boxed") && this._fixForBoxed(t(".control-sidebar-bg")) }, e.prototype._fixForBoxed = function(e) { e.css({ position: "absolute", height: t(".wrapper").height() }) }; var h = t.fn.controlSidebar;
    t.fn.controlSidebar = c, t.fn.controlSidebar.Constructor = e, t.fn.controlSidebar.noConflict = function() { return t.fn.controlSidebar = h, this }, t(document).on("click", o, (function(e) { e && e.preventDefault(), c.call(t(this), "toggle") })) }(jQuery),
function(t) { "use strict";

    function e(t) { this.element = t } var n = "lte.directchat";

    function i(i) { return this.each((function() { var r = t(this),
                o = r.data(n);
            o || r.data(n, o = new e(r)), "string" == typeof i && o.toggle(r) })) } e.prototype.toggle = function(t) { t.parents(".direct-chat").first().toggleClass("direct-chat-contacts-open") }; var r = t.fn.directChat;
    t.fn.directChat = i, t.fn.directChat.Constructor = e, t.fn.directChat.noConflict = function() { return t.fn.directChat = r, this }, t(document).on("click", '[data-widget="chat-pane-toggle"]', (function(e) { e && e.preventDefault(), i.call(t(this), "toggle") })) }(jQuery),
function(t) { "use strict";

    function e(t) { this.options = t, this.init() } var n = "lte.pushmenu",
        i = { collapseScreenSize: 767, expandOnHover: !1, expandTransitionDelay: 200 },
        r = '[data-toggle="push-menu"]',
        o = ".sidebar-mini",
        a = "sidebar-collapse",
        s = "sidebar-open",
        l = "sidebar-expanded-on-hover",
        c = "expanded.pushMenu",
        h = "collapsed.pushMenu";

    function u(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(s)) } "toggle" === r && a.toggle() })) } e.prototype.init = function() {
        (this.options.expandOnHover || t("body").is(o + ".fixed")) && (this.expandOnHover(), t("body").addClass("sidebar-mini-expand-feature")), t(".content-wrapper").click(function() { t(window).width() <= this.options.collapseScreenSize && t("body").hasClass(s) && this.close() }.bind(this)), t(".sidebar-form .form-control").click((function(t) { t.stopPropagation() })) }, e.prototype.toggle = function() { var e = t(window).width(),
            n = !t("body").hasClass(a);
        e <= this.options.collapseScreenSize && (n = t("body").hasClass(s)), n ? this.close() : this.open() }, e.prototype.open = function() { t(window).width() > this.options.collapseScreenSize ? t("body").removeClass(a).trigger(t.Event(c)) : t("body").addClass(s).trigger(t.Event(c)) }, e.prototype.close = function() { t(window).width() > this.options.collapseScreenSize ? t("body").addClass(a).trigger(t.Event(h)) : t("body").removeClass(s + " " + a).trigger(t.Event(h)) }, e.prototype.expandOnHover = function() { t(".main-sidebar").hover(function() { t("body").is(o + ".sidebar-collapse") && t(window).width() > this.options.collapseScreenSize && this.expand() }.bind(this), function() { t("body").is(".sidebar-expanded-on-hover") && this.collapse() }.bind(this)) }, e.prototype.expand = function() { setTimeout((function() { t("body").removeClass(a).addClass(l) }), this.options.expandTransitionDelay) }, e.prototype.collapse = function() { setTimeout((function() { t("body").removeClass(l).addClass(a) }), this.options.expandTransitionDelay) }; var d = t.fn.pushMenu;
    t.fn.pushMenu = u, t.fn.pushMenu.Constructor = e, t.fn.pushMenu.noConflict = function() { return t.fn.pushMenu = d, this }, t(document).on("click", r, (function(e) { e.preventDefault(), u.call(t(this), "toggle") })), t(window).on("load", (function() { u.call(t(r)) })) }(jQuery),
function(t) { "use strict";

    function e(t, e) { this.element = t, this.options = e, this._setUpListeners() } var n = "lte.todolist",
        i = { onCheck: function(t) { return t }, onUnCheck: function(t) { return t } },
        r = { data: '[data-widget="todo-list"]' };

    function o(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(o, s)) } if ("string" == typeof a) { if (void 0 === a[r]) throw new Error("No method named " + r);
                a[r]() } })) } e.prototype.toggle = function(t) { t.parents(r.li).first().toggleClass("done"), t.prop("checked") ? this.check(t) : this.unCheck(t) }, e.prototype.check = function(t) { this.options.onCheck.call(t) }, e.prototype.unCheck = function(t) { this.options.onUnCheck.call(t) }, e.prototype._setUpListeners = function() { var e = this;
        t(this.element).on("change ifChanged", "input:checkbox", (function() { e.toggle(t(this)) })) }; var a = t.fn.todoList;
    t.fn.todoList = o, t.fn.todoList.Constructor = e, t.fn.todoList.noConflict = function() { return t.fn.todoList = a, this }, t(window).on("load", (function() { t(r.data).each((function() { o.call(t(this)) })) })) }(jQuery),
function(t) { "use strict";

    function e(e, n) { this.element = e, this.options = n, t(this.element).addClass(l), t(r + a, this.element).addClass(s), this._setUpListeners() } var n = "lte.tree",
        i = { animationSpeed: 500, accordion: !0, followLink: !1, trigger: ".treeview a" },
        r = ".treeview",
        o = ".treeview-menu",
        a = ".active",
        s = "menu-open",
        l = "tree";

    function c(r) { return this.each((function() { var o = t(this); if (!o.data(n)) { var a = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, new e(o, a)) } })) } e.prototype.toggle = function(t, e) { var n = t.next(o),
            i = t.parent(),
            a = i.hasClass(s);
        i.is(r) && (this.options.followLink && "#" !== t.attr("href") || e.preventDefault(), a ? this.collapse(n, i) : this.expand(n, i)) }, e.prototype.expand = function(e, n) { var i = t.Event("expanded.tree"); if (this.options.accordion) { var r = n.siblings(".menu-open, .active"),
                a = r.children(o);
            this.collapse(a, r) } n.addClass(s), e.stop().slideDown(this.options.animationSpeed, function() { t(this.element).trigger(i), n.height("auto") }.bind(this)) }, e.prototype.collapse = function(e, n) { var i = t.Event("collapsed.tree");
        n.removeClass(s), e.stop().slideUp(this.options.animationSpeed, function() { t(this.element).trigger(i), n.find(r).removeClass(s).find(o).hide() }.bind(this)) }, e.prototype._setUpListeners = function() { var e = this;
        t(this.element).on("click", this.options.trigger, (function(n) { e.toggle(t(this), n) })) }; var h = t.fn.tree;
    t.fn.tree = c, t.fn.tree.Constructor = e, t.fn.tree.noConflict = function() { return t.fn.tree = h, this }, t(window).on("load", (function() { t('[data-widget="tree"]').each((function() { c.call(t(this)) })) })) }(jQuery),
function(t) { "use strict";

    function e(t) { this.options = t, this.bindedResize = !1, this.activate() } var n = "lte.layout",
        i = { slimscroll: !0, resetHeight: !0 },
        r = ".wrapper",
        o = ".content-wrapper",
        a = ".main-header",
        s = ".sidebar",
        l = ".sidebar-menu",
        c = "fixed";

    function h(r) { return this.each((function() { var o = t(this),
                a = o.data(n); if (!a) { var s = t.extend({}, i, o.data(), "object" == typeof r && r);
                o.data(n, a = new e(s)) } if ("string" == typeof r) { if (void 0 === a[r]) throw new Error("No method named " + r);
                a[r]() } })) } e.prototype.activate = function() { this.fix(), this.fixSidebar(), t("body").removeClass("hold-transition"), this.options.resetHeight && t("body, html, " + r).css({ height: "auto", "min-height": "100%" }), this.bindedResize || (t(window).resize(function() { this.fix(), this.fixSidebar(), t(".main-header .logo, " + s).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() { this.fix(), this.fixSidebar() }.bind(this)) }.bind(this)), this.bindedResize = !0), t(l).on("expanded.tree", function() { this.fix(), this.fixSidebar() }.bind(this)), t(l).on("collapsed.tree", function() { this.fix(), this.fixSidebar() }.bind(this)) }, e.prototype.fix = function() { t(".layout-boxed > " + r).css("overflow", "hidden"); var e = t(".main-footer").outerHeight() || 0,
            n = t(a).outerHeight() || 0,
            i = n + e,
            l = t(window).height(),
            h = t(s).outerHeight() || 0; if (t("body").hasClass(c)) t(o).css("min-height", l - e);
        else { var u;
            u = h + n <= l ? (t(o).css("min-height", l - i), l - i) : (t(o).css("min-height", h), h); var d = t(".control-sidebar");
            void 0 !== d && d.height() > u && t(o).css("min-height", d.height()) } }, e.prototype.fixSidebar = function() { t("body").hasClass(c) ? this.options.slimscroll && void 0 !== t.fn.slimScroll && 0 === t(".main-sidebar").find("slimScrollDiv").length && t(s).slimScroll({ height: t(window).height() - t(a).height() + "px" }) : void 0 !== t.fn.slimScroll && t(s).slimScroll({ destroy: !0 }).height("auto") }; var u = t.fn.layout;
    t.fn.layout = h, t.fn.layout.Constuctor = e, t.fn.layout.noConflict = function() { return t.fn.layout = u, this }, t(window).on("load", (function() { h.call(t("body")) })) }(jQuery), $((function() { "use strict"; var t = $('[data-toggle="push-menu"]').data("lte.pushmenu"),
            e = $('[data-toggle="control-sidebar"]').data("lte.controlsidebar"),
            n = $("body").data("lte.layout");
        $(window).on("load", (function() { t = $('[data-toggle="push-menu"]').data("lte.pushmenu"), e = $('[data-toggle="control-sidebar"]').data("lte.controlsidebar"), n = $("body").data("lte.layout") })); var i = ["skin-blue", "skin-black", "skin-red", "skin-yellow", "skin-purple", "skin-green", "skin-blue-light", "skin-black-light", "skin-red-light", "skin-yellow-light", "skin-purple-light", "skin-green-light"];

        function r(i) { $("body").toggleClass(i), n.fixSidebar(), $("body").hasClass("fixed") && "fixed" == i && (t.expandOnHover(), n.activate()), e.fix() }

        function o(t) { var e, n; return $.each(i, (function(t) { $("body").removeClass(i[t]) })), $("body").addClass(t), e = "skin", n = t, "undefined" != typeof Storage ? localStorage.setItem(e, n) : window.alert("Please use a modern browser to properly view this template!"), !1 } var a = $("<div />", { id: "control-sidebar-theme-demo-options-tab", class: "tab-pane active" }),
            s = $("<li />", { class: "active" }).html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'><i class=\"fa fa-wrench\"></i></a>");
        $('[href="#control-sidebar-home-tab"]').parent().before(s); var l = $("<div />");
        l.append('<h4 class="control-sidebar-heading">Layout Options</h4><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="fixed"class="pull-right"/> Fixed layout</label><p>Activate the fixed layout. You can\'t use fixed and boxed layouts together</p></div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="layout-boxed" class="pull-right"/> Boxed Layout</label><p>Activate the boxed layout</p></div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-layout="sidebar-collapse"class="pull-right"/> Toggle Sidebar</label><p>Toggle the left sidebar\'s state (open or collapse)</p></div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-enable="expandOnHover"class="pull-right"/> Sidebar Expand on Hover</label><p>Let the sidebar mini expand on hover</p></div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-controlsidebar="control-sidebar-open"class="pull-right"/> Toggle Right Sidebar Slide</label><p>Toggle between slide over content and push content effects</p></div><div class="form-group"><label class="control-sidebar-subheading"><input type="checkbox"data-sidebarskin="toggle"class="pull-right"/> Toggle Right Sidebar Skin</label><p>Toggle between dark and light skins for the right sidebar</p></div>'); var c = $("<ul />", { class: "list-unstyled clearfix" }),
            h = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Blue</p>');
        c.append(h); var u = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Black</p>');
        c.append(u); var d = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Purple</p>');
        c.append(d); var p = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Green</p>');
        c.append(p); var f = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Red</p>');
        c.append(f); var g = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin">Yellow</p>');
        c.append(g); var v = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9"></span><span class="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Blue Light</p>');
        c.append(v); var m = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" class="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe"></span><span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Black Light</p>');
        c.append(m); var y = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-purple-active"></span><span class="bg-purple" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Purple Light</p>');
        c.append(y); var b = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-green-active"></span><span class="bg-green" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Green Light</p>');
        c.append(b); var x = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-red-active"></span><span class="bg-red" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Red Light</p>');
        c.append(x); var w, _ = $("<li />", { style: "float:left; width: 33.33333%; padding: 5px;" }).append('<a href="javascript:void(0)" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)" class="clearfix full-opacity-hover"><div><span style="display:block; width: 20%; float: left; height: 7px;" class="bg-yellow-active"></span><span class="bg-yellow" style="display:block; width: 80%; float: left; height: 7px;"></span></div><div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc"></span><span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7"></span></div></a><p class="text-center no-margin" style="font-size: 12px">Yellow Light</p>');
        c.append(_), l.append('<h4 class="control-sidebar-heading">Skins</h4>'), l.append(c), a.append(l), $("#control-sidebar-home-tab").after(a), (w = function(t) { if ("undefined" != typeof Storage) return localStorage.getItem(t);
            window.alert("Please use a modern browser to properly view this template!") }("skin")) && $.inArray(w, i) && o(w), $("[data-skin]").on("click", (function(t) { $(this).hasClass("knob") || (t.preventDefault(), o($(this).data("skin"))) })), $("[data-layout]").on("click", (function() { r($(this).data("layout")) })), $("[data-controlsidebar]").on("click", (function() { r($(this).data("controlsidebar")); var t = !e.options.slide;
            e.options.slide = t, t || $(".control-sidebar").removeClass("control-sidebar-open") })), $('[data-sidebarskin="toggle"]').on("click", (function() { var t = $(".control-sidebar");
            t.hasClass("control-sidebar-dark") ? (t.removeClass("control-sidebar-dark"), t.addClass("control-sidebar-light")) : (t.removeClass("control-sidebar-light"), t.addClass("control-sidebar-dark")) })), $('[data-enable="expandOnHover"]').on("click", (function() { $(this).attr("disabled", !0), t.expandOnHover(), $("body").hasClass("sidebar-collapse") || $('[data-layout="sidebar-collapse"]').click() })), $("body").hasClass("fixed") && $('[data-layout="fixed"]').attr("checked", "checked"), $("body").hasClass("layout-boxed") && $('[data-layout="layout-boxed"]').attr("checked", "checked"), $("body").hasClass("sidebar-collapse") && $('[data-layout="sidebar-collapse"]').attr("checked", "checked") })),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }((function(t, e) {
        function n() { return new Date(Date.UTC.apply(Date, arguments)) }

        function i() { var t = new Date; return n(t.getFullYear(), t.getMonth(), t.getDate()) }

        function r(t, e) { return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate() }

        function o(n, i) { return function() { return i !== e && t.fn.datepicker.deprecated(i), this[n].apply(this, arguments) } }

        function a(e, n) {
            function i(t, e) { return e.toLowerCase() } var r = t(e).data(),
                o = {},
                a = new RegExp("^" + n.toLowerCase() + "([A-Z])"); for (var s in n = new RegExp("^" + n.toLowerCase()), r) n.test(s) && (o[s.replace(a, i)] = r[s]); return o }

        function s(e) { var n = {}; if (g[e] || (e = e.split("-")[0], g[e])) { var i = g[e]; return t.each(f, (function(t, e) { e in i && (n[e] = i[e]) })), n } } var l = function() { var e = { get: function(t) { return this.slice(t)[0] }, contains: function(t) { for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++)
                            if (0 <= this[n].valueOf() - e && this[n].valueOf() - e < 864e5) return n; return -1 }, remove: function(t) { this.splice(t, 1) }, replace: function(e) { e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e)) }, clear: function() { this.length = 0 }, copy: function() { var t = new l; return t.replace(this), t } }; return function() { var n = []; return n.push.apply(n, arguments), t.extend(n, e), n } }(),
            c = function(e, n) { t.data(e, "datepicker", this), this._events = [], this._secondaryEvents = [], this._process_options(n), this.dates = new l, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(v.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", (function(t, e) { return Number(e) + 1 })), this._process_options({ startDate: this._o.startDate, endDate: this._o.endDate, daysOfWeekDisabled: this.o.daysOfWeekDisabled, daysOfWeekHighlighted: this.o.daysOfWeekHighlighted, datesDisabled: this.o.datesDisabled }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show() };
        c.prototype = { constructor: c, _resolveViewName: function(e) { return t.each(v.viewModes, (function(n, i) { if (e === n || -1 !== t.inArray(e, i.names)) return e = n, !1 })), e }, _resolveDaysOfWeek: function(e) { return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number) }, _check_template: function(n) { try { return n !== e && "" !== n && ((n.match(/[<>]/g) || []).length <= 0 || t(n).length > 0) } catch (t) { return !1 } }, _process_options: function(e) { this._o = t.extend({}, this._o, e); var r = this.o = t.extend({}, this._o),
                    o = r.language;
                g[o] || (o = o.split("-")[0], g[o] || (o = p.language)), r.language = o, r.startView = this._resolveViewName(r.startView), r.minViewMode = this._resolveViewName(r.minViewMode), r.maxViewMode = this._resolveViewName(r.maxViewMode), r.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, r.startView)), !0 !== r.multidate && (r.multidate = Number(r.multidate) || !1, !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7; var a = v.parseFormat(r.format);
                r.startDate !== -1 / 0 && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = v.parseDate(r.startDate, a, r.language, r.assumeNearbyYear) : r.startDate = -1 / 0), r.endDate !== 1 / 0 && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = v.parseDate(r.endDate, a, r.language, r.assumeNearbyYear) : r.endDate = 1 / 0), r.daysOfWeekDisabled = this._resolveDaysOfWeek(r.daysOfWeekDisabled || []), r.daysOfWeekHighlighted = this._resolveDaysOfWeek(r.daysOfWeekHighlighted || []), r.datesDisabled = r.datesDisabled || [], t.isArray(r.datesDisabled) || (r.datesDisabled = r.datesDisabled.split(",")), r.datesDisabled = t.map(r.datesDisabled, (function(t) { return v.parseDate(t, a, r.language, r.assumeNearbyYear) })); var s = String(r.orientation).toLowerCase().split(/\s+/g),
                    l = r.orientation.toLowerCase(); if (s = t.grep(s, (function(t) { return /^auto|left|right|top|bottom$/.test(t) })), r.orientation = { x: "auto", y: "auto" }, l && "auto" !== l)
                    if (1 === s.length) switch (s[0]) {
                        case "top":
                        case "bottom":
                            r.orientation.y = s[0]; break;
                        case "left":
                        case "right":
                            r.orientation.x = s[0] } else l = t.grep(s, (function(t) { return /^left|right$/.test(t) })), r.orientation.x = l[0] || "auto", l = t.grep(s, (function(t) { return /^top|bottom$/.test(t) })), r.orientation.y = l[0] || "auto"; if (r.defaultViewDate instanceof Date || "string" == typeof r.defaultViewDate) r.defaultViewDate = v.parseDate(r.defaultViewDate, a, r.language, r.assumeNearbyYear);
                else if (r.defaultViewDate) { var c = r.defaultViewDate.year || (new Date).getFullYear(),
                        h = r.defaultViewDate.month || 0,
                        u = r.defaultViewDate.day || 1;
                    r.defaultViewDate = n(c, h, u) } else r.defaultViewDate = i() }, _applyEvents: function(t) { for (var n, i, r, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (i = e, r = t[o][1]) : 3 === t[o].length && (i = t[o][1], r = t[o][2]), n.on(r, i) }, _unapplyEvents: function(t) { for (var n, i, r, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (r = e, i = t[o][1]) : 3 === t[o].length && (r = t[o][1], i = t[o][2]), n.off(i, r) }, _buildEvents: function() { var e = { keyup: t.proxy((function(e) {-1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }), this), keydown: t.proxy(this.keydown, this), paste: t.proxy(this.paste, this) };!0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, e],
                    [this.component, { click: t.proxy(this.show, this) }]
                ] : this._events = [
                    [this.element, { click: t.proxy(this.show, this), keydown: t.proxy(this.keydown, this) }]
                ], this._events.push([this.element, "*", { blur: t.proxy((function(t) { this._focused_from = t.target }), this) }], [this.element, { blur: t.proxy((function(t) { this._focused_from = t.target }), this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": t.proxy((function(t) { this.update(t.date) }), this) }]), this._secondaryEvents = [
                    [this.picker, { click: t.proxy(this.click, this) }],
                    [this.picker, ".prev, .next", { click: t.proxy(this.navArrowsClick, this) }],
                    [this.picker, ".day:not(.disabled)", { click: t.proxy(this.dayCellClick, this) }],
                    [t(window), { resize: t.proxy(this.place, this) }],
                    [t(document), { "mousedown touchstart": t.proxy((function(t) { this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide() }), this) }]
                ] }, _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function() { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) }, _trigger: function(e, n) { var i = n || this.dates.get(-1),
                    r = this._utc_to_local(i);
                this.element.trigger({ type: e, date: r, viewMode: this.viewMode, dates: t.map(this.dates, this._utc_to_local), format: t.proxy((function(t, e) { 0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format; var n = this.dates.get(t); return v.formatDate(n, e, this.o.language) }), this) }) }, show: function() { if (!(this.inputField.is(":disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this }, hide: function() { return this.isInline || !this.picker.is(":visible") || (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide")), this }, destroy: function() { return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this }, paste: function(e) { var n; if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) n = e.originalEvent.clipboardData.getData("text/plain");
                else { if (!window.clipboardData) return;
                    n = window.clipboardData.getData("Text") } this.setDate(n), this.update(), e.preventDefault() }, _utc_to_local: function(t) { if (!t) return t; var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset()); return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e }, _local_to_utc: function(t) { return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset()) }, _zero_time: function(t) { return t && new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, _zero_utc_time: function(t) { return t && n(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) }, getDates: function() { return t.map(this.dates, this._utc_to_local) }, getUTCDates: function() { return t.map(this.dates, (function(t) { return new Date(t) })) }, getDate: function() { return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function() { var t = this.dates.get(-1); return t !== e ? new Date(t) : null }, clearDates: function() { this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }, setDates: function() { var e = t.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this }, setUTCDates: function() { var e = t.isArray(arguments[0]) ? arguments[0] : arguments; return this.setDates.apply(this, t.map(e, this._utc_to_local)), this }, setDate: o("setDates"), setUTCDate: o("setUTCDates"), remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"), setValue: function() { var t = this.getFormattedDate(); return this.inputField.val(t), this }, getFormattedDate: function(n) { n === e && (n = this.o.format); var i = this.o.language; return t.map(this.dates, (function(t) { return v.formatDate(t, n, i) })).join(this.o.multidateSeparator) }, getStartDate: function() { return this.o.startDate }, setStartDate: function(t) { return this._process_options({ startDate: t }), this.update(), this.updateNavArrows(), this }, getEndDate: function() { return this.o.endDate }, setEndDate: function(t) { return this._process_options({ endDate: t }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekDisabled: function(t) { return this._process_options({ daysOfWeekDisabled: t }), this.update(), this }, setDaysOfWeekHighlighted: function(t) { return this._process_options({ daysOfWeekHighlighted: t }), this.update(), this }, setDatesDisabled: function(t) { return this._process_options({ datesDisabled: t }), this.update(), this }, place: function() { if (this.isInline) return this; var e = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = t(this.o.container),
                    r = i.width(),
                    o = "body" === this.o.container ? t(document).scrollTop() : i.scrollTop(),
                    a = i.offset(),
                    s = [0];
                this.element.parents().each((function() { var e = t(this).css("z-index"); "auto" !== e && 0 !== Number(e) && s.push(Number(e)) })); var l = Math.max.apply(Math, s) + this.o.zIndexOffset,
                    c = this.component ? this.component.parent().offset() : this.element.offset(),
                    h = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    d = c.left - a.left,
                    p = c.top - a.top; "body" !== this.o.container && (p += o), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - u)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= c.left - 10) : d + e > r ? (this.picker.addClass("datepicker-orient-right"), d += u - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left"); var f = this.o.orientation.y; if ("auto" === f && (f = -o + p - n < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + f), "top" === f ? p -= n + parseInt(this.picker.css("padding-top")) : p += h, this.o.rtl) { var g = r - (d + u);
                    this.picker.css({ top: p, right: g, zIndex: l }) } else this.picker.css({ top: p, left: d, zIndex: l }); return this }, _allow_update: !0, update: function() { if (!this._allow_update) return this; var e = this.dates.copy(),
                    n = [],
                    i = !1; return arguments.length ? (t.each(arguments, t.proxy((function(t, e) { e instanceof Date && (e = this._local_to_utc(e)), n.push(e) }), this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy((function(t) { return v.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear) }), this)), n = t.grep(n, t.proxy((function(t) { return !this.dateWithinRange(t) || !t }), this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), i ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && i && (this._trigger("changeDate"), this.element.change()), !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this }, fillDow: function() { if (this.o.showWeekDays) { var e = this.o.weekStart,
                        n = "<tr>"; for (this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) n += '<th class="dow', -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (n += " disabled"), n += '">' + g[this.o.language].daysMin[e++ % 7] + "</th>";
                    n += "</tr>", this.picker.find(".datepicker-days thead").append(n) } }, fillMonths: function() { for (var t = this._utc_to_local(this.viewDate), e = "", n = 0; n < 12; n++) e += '<span class="month' + (t && t.getMonth() === n ? " focused" : "") + '">' + g[this.o.language].monthsShort[n] + "</span>";
                this.picker.find(".datepicker-months td").html(e) }, setRange: function(e) { e && e.length ? this.range = t.map(e, (function(t) { return t.valueOf() })) : delete this.range, this.fill() }, getClassNames: function(e) { var n = [],
                    o = this.viewDate.getUTCFullYear(),
                    a = this.viewDate.getUTCMonth(),
                    s = i(); return e.getUTCFullYear() < o || e.getUTCFullYear() === o && e.getUTCMonth() < a ? n.push("old") : (e.getUTCFullYear() > o || e.getUTCFullYear() === o && e.getUTCMonth() > a) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && r(e, s) && n.push("today"), -1 !== this.dates.contains(e) && n.push("active"), this.dateWithinRange(e) || n.push("disabled"), this.dateIsDisabled(e) && n.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && n.push("selected"), e.valueOf() === this.range[0] && n.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n }, _fill_yearsView: function(n, i, r, o, a, s, l) { for (var c, h, u, d = "", p = r / 10, f = this.picker.find(n), g = Math.floor(o / r) * r, v = g + 9 * p, m = Math.floor(this.viewDate.getFullYear() / p) * p, y = t.map(this.dates, (function(t) { return Math.floor(t.getUTCFullYear() / p) * p })), b = g - p; b <= v + p; b += p) c = [i], h = null, b === g - p ? c.push("old") : b === v + p && c.push("new"), -1 !== t.inArray(b, y) && c.push("active"), (b < a || b > s) && c.push("disabled"), b === m && c.push("focused"), l !== t.noop && ((u = l(new Date(b, 0, 1))) === e ? u = {} : "boolean" == typeof u ? u = { enabled: u } : "string" == typeof u && (u = { classes: u }), !1 === u.enabled && c.push("disabled"), u.classes && (c = c.concat(u.classes.split(/\s+/))), u.tooltip && (h = u.tooltip)), d += '<span class="' + c.join(" ") + '"' + (h ? ' title="' + h + '"' : "") + ">" + b + "</span>";
                f.find(".datepicker-switch").text(g + "-" + v), f.find("td").html(d) }, fill: function() { var r, o, a = new Date(this.viewDate),
                    s = a.getUTCFullYear(),
                    l = a.getUTCMonth(),
                    c = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    p = g[this.o.language].today || g.en.today || "",
                    f = g[this.o.language].clear || g.en.clear || "",
                    m = g[this.o.language].titleFormat || g.en.titleFormat,
                    y = i(),
                    b = (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) && y >= this.o.startDate && y <= this.o.endDate && !this.weekOfDateIsDisabled(y); if (!isNaN(s) && !isNaN(l)) { this.picker.find(".datepicker-days .datepicker-switch").text(v.formatDate(a, m, this.o.language)), this.picker.find("tfoot .today").text(p).css("display", b ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(f).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths(); var x = n(s, l, 0),
                        w = x.getUTCDate();
                    x.setUTCDate(w - (x.getUTCDay() - this.o.weekStart + 7) % 7); var _ = new Date(x);
                    x.getUTCFullYear() < 100 && _.setUTCFullYear(x.getUTCFullYear()), _.setUTCDate(_.getUTCDate() + 42), _ = _.valueOf(); for (var C, S, D = []; x.valueOf() < _;) { if ((C = x.getUTCDay()) === this.o.weekStart && (D.push("<tr>"), this.o.calendarWeeks)) { var T = new Date(+x + (this.o.weekStart - C - 7) % 7 * 864e5),
                                k = new Date(Number(T) + (11 - T.getUTCDay()) % 7 * 864e5),
                                A = new Date(Number(A = n(k.getUTCFullYear(), 0, 1)) + (11 - A.getUTCDay()) % 7 * 864e5),
                                E = (k - A) / 864e5 / 7 + 1;
                            D.push('<td class="cw">' + E + "</td>") }(S = this.getClassNames(x)).push("day"); var L = x.getUTCDate();
                        this.o.beforeShowDay !== t.noop && ((o = this.o.beforeShowDay(this._utc_to_local(x))) === e ? o = {} : "boolean" == typeof o ? o = { enabled: o } : "string" == typeof o && (o = { classes: o }), !1 === o.enabled && S.push("disabled"), o.classes && (S = S.concat(o.classes.split(/\s+/))), o.tooltip && (r = o.tooltip), o.content && (L = o.content)), S = t.isFunction(t.uniqueSort) ? t.uniqueSort(S) : t.unique(S), D.push('<td class="' + S.join(" ") + '"' + (r ? ' title="' + r + '"' : "") + ' data-date="' + x.getTime().toString() + '">' + L + "</td>"), r = null, C === this.o.weekEnd && D.push("</tr>"), x.setUTCDate(x.getUTCDate() + 1) } this.picker.find(".datepicker-days tbody").html(D.join("")); var $ = g[this.o.language].monthsTitle || g.en.monthsTitle || "Months",
                        I = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? $ : s).end().find("tbody span").removeClass("active"); if (t.each(this.dates, (function(t, e) { e.getUTCFullYear() === s && I.eq(e.getUTCMonth()).addClass("active") })), (s < c || s > u) && I.addClass("disabled"), s === c && I.slice(0, h).addClass("disabled"), s === u && I.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) { var M = this;
                        t.each(I, (function(n, i) { var r = new Date(s, n, 1),
                                o = M.o.beforeShowMonth(r);
                            o === e ? o = {} : "boolean" == typeof o ? o = { enabled: o } : "string" == typeof o && (o = { classes: o }), !1 !== o.enabled || t(i).hasClass("disabled") || t(i).addClass("disabled"), o.classes && t(i).addClass(o.classes), o.tooltip && t(i).prop("title", o.tooltip) })) } this._fill_yearsView(".datepicker-years", "year", 10, s, c, u, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, s, c, u, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, s, c, u, this.o.beforeShowCentury) } }, updateNavArrows: function() { if (this._allow_update) { var t, e, n = new Date(this.viewDate),
                        i = n.getUTCFullYear(),
                        r = n.getUTCMonth(),
                        o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                        a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                        s = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                        c = 1; switch (this.viewMode) {
                        case 4:
                            c *= 10;
                        case 3:
                            c *= 10;
                        case 2:
                            c *= 10;
                        case 1:
                            t = Math.floor(i / c) * c <= o, e = Math.floor(i / c) * c + c > s; break;
                        case 0:
                            t = i <= o && r <= a, e = i >= s && r >= l } this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e) } }, click: function(e) { var r, o, a;
                e.preventDefault(), e.stopPropagation(), (r = t(e.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), r.hasClass("today") && !r.hasClass("day") && (this.setViewMode(0), this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")), r.hasClass("clear") && this.clearDates(), r.hasClass("disabled") || (r.hasClass("month") || r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), 1, 1 === this.viewMode ? (a = r.parent().find("span").index(r), o = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a)) : (a = 0, o = Number(r.text()), this.viewDate.setUTCFullYear(o)), this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(n(o, a, 1)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from }, dayCellClick: function(e) { var n = t(e.currentTarget).data("date"),
                    i = new Date(n);
                this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(i) }, navArrowsClick: function(e) { var n = t(e.currentTarget).hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (n *= 12 * v.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, n), this._trigger(v.viewModes[this.viewMode].e, this.viewDate), this.fill() }, _toggle_multidate: function(t) { var e = this.dates.contains(t); if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0) }, _setDate: function(t, e) { e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide() }, moveDay: function(t, e) { var n = new Date(t); return n.setUTCDate(t.getUTCDate() + e), n }, moveWeek: function(t, e) { return this.moveDay(t, 7 * e) }, moveMonth: function(t, e) { if (! function(t) { return t && !isNaN(t.getTime()) }(t)) return this.o.defaultViewDate; if (!e) return t; var n, i, r = new Date(t.valueOf()),
                    o = r.getUTCDate(),
                    a = r.getUTCMonth(),
                    s = Math.abs(e); if (e = e > 0 ? 1 : -1, 1 === s) i = -1 === e ? function() { return r.getUTCMonth() === a } : function() { return r.getUTCMonth() !== n }, n = a + e, r.setUTCMonth(n), n = (n + 12) % 12;
                else { for (var l = 0; l < s; l++) r = this.moveMonth(r, e);
                    n = r.getUTCMonth(), r.setUTCDate(o), i = function() { return n !== r.getUTCMonth() } } for (; i();) r.setUTCDate(--o), r.setUTCMonth(n); return r }, moveYear: function(t, e) { return this.moveMonth(t, 12 * e) }, moveAvailableDate: function(t, e, n) { do { if (t = this[n](t, e), !this.dateWithinRange(t)) return !1;
                    n = "moveDay" } while (this.dateIsDisabled(t)); return t }, weekOfDateIsDisabled: function(e) { return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) }, dateIsDisabled: function(e) { return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, (function(t) { return r(e, t) })).length > 0 }, dateWithinRange: function(t) { return t >= this.o.startDate && t <= this.o.endDate }, keydown: function(t) { if (this.picker.is(":visible")) { var e, n, i = !1,
                        r = this.focusDate || this.viewDate; switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation(); break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (n = this.moveAvailableDate(r, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (n = this.moveAvailableDate(r, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? n = this.moveAvailableDate(r, e, "moveDay") : this.weekOfDateIsDisabled(r) || (n = this.moveAvailableDate(r, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(r, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), n = this.moveAvailableDate(r, e, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), t.preventDefault()); break;
                        case 13:
                            if (!this.o.forceParse) break;
                            r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide()); break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() } i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change")) } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation()) }, setViewMode: function(t) { this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + v.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate)) } }; var h = function(e, n) { t.data(e, "datepicker", this), this.element = t(e), this.inputs = t.map(n.inputs, (function(t) { return t.jquery ? t[0] : t })), delete n.inputs, this.keepEmptyValues = n.keepEmptyValues, delete n.keepEmptyValues, d.call(t(this.inputs), n).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, (function(e) { return t.data(e, "datepicker") })), this.updateDates() };
        h.prototype = { updateDates: function() { this.dates = t.map(this.pickers, (function(t) { return t.getUTCDate() })), this.updateRanges() }, updateRanges: function() { var e = t.map(this.dates, (function(t) { return t.valueOf() }));
                t.each(this.pickers, (function(t, n) { n.setRange(e) })) }, clearDates: function() { t.each(this.pickers, (function(t, e) { e.clearDates() })) }, dateUpdated: function(n) { if (!this.updating) { this.updating = !0; var i = t.data(n.target, "datepicker"); if (i !== e) { var r = i.getUTCDate(),
                            o = this.keepEmptyValues,
                            a = t.inArray(n.target, this.inputs),
                            s = a - 1,
                            l = a + 1,
                            c = this.inputs.length; if (-1 !== a) { if (t.each(this.pickers, (function(t, e) { e.getUTCDate() || e !== i && o || e.setUTCDate(r) })), r < this.dates[s])
                                for (; s >= 0 && r < this.dates[s];) this.pickers[s--].setUTCDate(r);
                            else if (r > this.dates[l])
                                for (; l < c && r > this.dates[l];) this.pickers[l++].setUTCDate(r);
                            this.updateDates(), delete this.updating } } } }, destroy: function() { t.map(this.pickers, (function(t) { t.destroy() })), t(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker }, remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead") }; var u = t.fn.datepicker,
            d = function(n) { var i, r = Array.apply(null, arguments); if (r.shift(), this.each((function() { var e = t(this),
                            o = e.data("datepicker"),
                            l = "object" == typeof n && n; if (!o) { var u = a(this, "date"),
                                d = s(t.extend({}, p, u, l).language),
                                f = t.extend({}, p, d, u, l);
                            e.hasClass("input-daterange") || f.inputs ? (t.extend(f, { inputs: f.inputs || e.find("input").toArray() }), o = new h(this, f)) : o = new c(this, f), e.data("datepicker", o) } "string" == typeof n && "function" == typeof o[n] && (i = o[n].apply(o, r)) })), i === e || i instanceof c || i instanceof h) return this; if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)"); return i };
        t.fn.datepicker = d; var p = t.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: t.noop, beforeShowMonth: t.noop, beforeShowYear: t.noop, beforeShowDecade: t.noop, beforeShowCentury: t.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keepEmptyValues: !1, keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -1 / 0, startView: 0, todayBtn: !1, todayHighlight: !1, updateViewDate: !0, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, title: "", templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" }, showWeekDays: !0 },
            f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = c; var g = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
            v = { viewModes: [{ names: ["days", "month"], clsName: "days", e: "changeMonth" }, { names: ["months", "year"], clsName: "months", e: "changeYear", navStep: 1 }, { names: ["years", "decade"], clsName: "years", e: "changeDecade", navStep: 10 }, { names: ["decades", "century"], clsName: "decades", e: "changeCentury", navStep: 100 }, { names: ["centuries", "millennium"], clsName: "centuries", e: "changeMillennium", navStep: 1e3 }], validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g, parseFormat: function(t) { if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t; var e = t.replace(this.validParts, "\0").split("\0"),
                        n = t.match(this.validParts); if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format."); return { separators: e, parts: n } }, parseDate: function(n, r, o, a) {
                    function s() { var t = this.slice(0, l[d].length),
                            e = l[d].slice(0, t.length); return t.toLowerCase() === e.toLowerCase() } if (!n) return e; if (n instanceof Date) return n; if ("string" == typeof r && (r = v.parseFormat(r)), r.toValue) return r.toValue(n, r, o); var l, h, u, d, p, f = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                        m = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" }; if (n in m && (n = m[n]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)) { for (l = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date, d = 0; d < l.length; d++) h = l[d].match(/([\-+]\d+)([dmwy])/i), u = Number(h[1]), p = f[h[2].toLowerCase()], n = c.prototype[p](n, u); return c.prototype._zero_utc_time(n) } l = n && n.match(this.nonpunctuation) || []; var y, b, x = {},
                        w = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        _ = { yyyy: function(t, e) { return t.setUTCFullYear(a ? function(t, e) { return !0 === e && (e = 10), t < 100 && (t += 2e3) > (new Date).getFullYear() + e && (t -= 100), t }(e, a) : e) }, m: function(t, e) { if (isNaN(t)) return t; for (e -= 1; e < 0;) e += 12; for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1); return t }, d: function(t, e) { return t.setUTCDate(e) } };
                    _.yy = _.yyyy, _.M = _.MM = _.mm = _.m, _.dd = _.d, n = i(); var C = r.parts.slice(); if (l.length !== C.length && (C = t(C).filter((function(e, n) { return -1 !== t.inArray(n, w) })).toArray()), l.length === C.length) { var S, D, T; for (d = 0, S = C.length; d < S; d++) { if (y = parseInt(l[d], 10), h = C[d], isNaN(y)) switch (h) {
                                case "MM":
                                    b = t(g[o].months).filter(s), y = t.inArray(b[0], g[o].months) + 1; break;
                                case "M":
                                    b = t(g[o].monthsShort).filter(s), y = t.inArray(b[0], g[o].monthsShort) + 1 } x[h] = y } for (d = 0; d < w.length; d++)(T = w[d]) in x && !isNaN(x[T]) && (D = new Date(n), _[T](D, x[T]), isNaN(D) || (n = D)) } return n }, formatDate: function(e, n, i) { if (!e) return ""; if ("string" == typeof n && (n = v.parseFormat(n)), n.toDisplay) return n.toDisplay(e, n, i); var r = { d: e.getUTCDate(), D: g[i].daysShort[e.getUTCDay()], DD: g[i].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: g[i].monthsShort[e.getUTCMonth()], MM: g[i].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, e = []; for (var o = t.extend([], n.separators), a = 0, s = n.parts.length; a <= s; a++) o.length && e.push(o.shift()), e.push(r[n.parts[a]]); return e.join("") }, headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + p.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + p.templates.rightArrow + "</th></tr></thead>", contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };
        v.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function() { return t.fn.datepicker = u, this }, t.fn.datepicker.version = "1.9.0", t.fn.datepicker.deprecated = function(t) { var e = window.console;
            e && e.warn && e.warn("DEPRECATED: " + t) }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', (function(e) { var n = t(this);
            n.data("datepicker") || (e.preventDefault(), d.call(n, "show")) })), t((function() { d.call(t('[data-provide="datepicker-inline"]')) })) })),
    function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) { return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n), n } : t(jQuery) }((function(t) { var e = function() { if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd; return function() { var t, n, i;
                    e && e.requirejs || (e ? n = e : e = {}, function(e) { var r, o, a, s, l = {},
                            c = {},
                            h = {},
                            u = {},
                            d = Object.prototype.hasOwnProperty,
                            p = [].slice,
                            f = /\.js$/;

                        function g(t, e) { return d.call(t, e) }

                        function v(t, e) { var n, i, r, o, a, s, l, c, u, d, p, g = e && e.split("/"),
                                v = h.map,
                                m = v && v["*"] || {}; if (t) { for (a = (t = t.split("/")).length - 1, h.nodeIdCompat && f.test(t[a]) && (t[a] = t[a].replace(f, "")), "." === t[0].charAt(0) && g && (t = g.slice(0, g.length - 1).concat(t)), u = 0; u < t.length; u++)
                                    if ("." === (p = t[u])) t.splice(u, 1), u -= 1;
                                    else if (".." === p) { if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1]) continue;
                                    u > 0 && (t.splice(u - 1, 2), u -= 2) } t = t.join("/") } if ((g || m) && v) { for (u = (n = t.split("/")).length; u > 0; u -= 1) { if (i = n.slice(0, u).join("/"), g)
                                        for (d = g.length; d > 0; d -= 1)
                                            if ((r = v[g.slice(0, d).join("/")]) && (r = r[i])) { o = r, s = u; break } if (o) break;!l && m && m[i] && (l = m[i], c = u) }!o && l && (o = l, s = c), o && (n.splice(0, s, o), t = n.join("/")) } return t }

                        function m(t, n) { return function() { var i = p.call(arguments, 0); return "string" != typeof i[0] && 1 === i.length && i.push(null), o.apply(e, i.concat([t, n])) } }

                        function y(t) { return function(e) { l[t] = e } }

                        function b(t) { if (g(c, t)) { var n = c[t];
                                delete c[t], u[t] = !0, r.apply(e, n) } if (!g(l, t) && !g(u, t)) throw new Error("No " + t); return l[t] }

                        function x(t) { var e, n = t ? t.indexOf("!") : -1; return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t] }

                        function w(t) { return t ? x(t) : [] }

                        function _(t) { return function() { return h && h.config && h.config[t] || {} } } a = function(t, e) { var n, i, r = x(t),
                                o = r[0],
                                a = e[1]; return t = r[1], o && (n = b(o = v(o, a))), o ? t = n && n.normalize ? n.normalize(t, (i = a, function(t) { return v(t, i) })) : v(t, a) : (o = (r = x(t = v(t, a)))[0], t = r[1], o && (n = b(o))), { f: o ? o + "!" + t : t, n: t, pr: o, p: n } }, s = { require: function(t) { return m(t) }, exports: function(t) { var e = l[t]; return void 0 !== e ? e : l[t] = {} }, module: function(t) { return { id: t, uri: "", exports: l[t], config: _(t) } } }, r = function(t, n, i, r) { var o, h, d, p, f, v, x, _ = [],
                                C = typeof i; if (v = w(r = r || t), "undefined" === C || "function" === C) { for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                    if ("require" === (h = (p = a(n[f], v)).f)) _[f] = s.require(t);
                                    else if ("exports" === h) _[f] = s.exports(t), x = !0;
                                else if ("module" === h) o = _[f] = s.module(t);
                                else if (g(l, h) || g(c, h) || g(u, h)) _[f] = b(h);
                                else { if (!p.p) throw new Error(t + " missing " + h);
                                    p.p.load(p.n, m(r, !0), y(h), {}), _[f] = l[h] } d = i ? i.apply(l[t], _) : void 0, t && (o && o.exports !== e && o.exports !== l[t] ? l[t] = o.exports : d === e && x || (l[t] = d)) } else t && (l[t] = i) }, t = n = o = function(t, n, i, l, c) { if ("string" == typeof t) return s[t] ? s[t](n) : b(a(t, w(n)).f); if (!t.splice) { if ((h = t).deps && o(h.deps, h.callback), !n) return;
                                n.splice ? (t = n, n = i, i = null) : t = e } return n = n || function() {}, "function" == typeof i && (i = l, l = c), l ? r(e, t, n, i) : setTimeout((function() { r(e, t, n, i) }), 4), o }, o.config = function(t) { return o(t) }, t._defined = l, (i = function(t, e, n) { if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                            e.splice || (n = e, e = []), g(l, t) || g(c, t) || (c[t] = [t, e, n]) }).amd = { jQuery: !0 } }(), e.requirejs = t, e.require = n, e.define = i) }(), e.define("almond", (function() {})), e.define("jquery", [], (function() { var e = t || $; return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e })), e.define("select2/utils", ["jquery"], (function(t) { var e = {};

                    function n(t) { var e = t.prototype,
                            n = []; for (var i in e) { "function" == typeof e[i] && ("constructor" !== i && n.push(i)) } return n } e.Extend = function(t, e) { var n = {}.hasOwnProperty;

                        function i() { this.constructor = t } for (var r in e) n.call(e, r) && (t[r] = e[r]); return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t }, e.Decorate = function(t, e) { var i = n(e),
                            r = n(t);

                        function o() { var n = Array.prototype.unshift,
                                i = e.prototype.constructor.length,
                                r = t.prototype.constructor;
                            i > 0 && (n.call(arguments, t.prototype.constructor), r = e.prototype.constructor), r.apply(this, arguments) } e.displayName = t.displayName, o.prototype = new function() { this.constructor = o }; for (var a = 0; a < r.length; a++) { var s = r[a];
                            o.prototype[s] = t.prototype[s] } for (var l = function(t) { var n = function() {};
                                t in o.prototype && (n = o.prototype[t]); var i = e.prototype[t]; return function() { var t = Array.prototype.unshift; return t.call(arguments, n), i.apply(this, arguments) } }, c = 0; c < i.length; c++) { var h = i[c];
                            o.prototype[h] = l(h) } return o }; var i = function() { this.listeners = {} };
                    i.prototype.on = function(t, e) { this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e] }, i.prototype.trigger = function(t) { var e = Array.prototype.slice,
                            n = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, i.prototype.invoke = function(t, e) { for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e) }, e.Observable = i, e.generateChars = function(t) { for (var e = "", n = 0; n < t; n++) { e += Math.floor(36 * Math.random()).toString(36) } return e }, e.bind = function(t, e) { return function() { t.apply(e, arguments) } }, e._convertData = function(t) { for (var e in t) { var n = e.split("-"),
                                i = t; if (1 !== n.length) { for (var r = 0; r < n.length; r++) { var o = n[r];
                                    (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o] } delete t[e] } } return t }, e.hasScroll = function(e, n) { var i = t(n),
                            r = n.style.overflowX,
                            o = n.style.overflowY; return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)) }, e.escapeMarkup = function(t) { var e = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, (function(t) { return e[t] })) }, e.appendMany = function(e, n) { if ("1.7" === t.fn.jquery.substr(0, 3)) { var i = t();
                            t.map(n, (function(t) { i = i.add(t) })), n = i } e.append(n) }, e.__cache = {}; var r = 0; return e.GetUniqueElementId = function(t) { var e = t.getAttribute("data-select2-id"); return null == e && (t.id ? (e = t.id, t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++r), e = r.toString())), e }, e.StoreData = function(t, n, i) { var r = e.GetUniqueElementId(t);
                        e.__cache[r] || (e.__cache[r] = {}), e.__cache[r][n] = i }, e.GetData = function(n, i) { var r = e.GetUniqueElementId(n); return i ? e.__cache[r] && null != e.__cache[r][i] ? e.__cache[r][i] : t(n).data(i) : e.__cache[r] }, e.RemoveData = function(t) { var n = e.GetUniqueElementId(t);
                        null != e.__cache[n] && delete e.__cache[n] }, e })), e.define("select2/results", ["jquery", "./utils"], (function(t, e) {
                    function n(t, e, i) { this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function() { var e = t('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e }, n.prototype.clear = function() { this.$results.empty() }, n.prototype.displayMessage = function(e) { var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading(); var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            r = this.options.get("translations").get(e.message);
                        i.append(n(r(e.args))), i[0].className += " select2-results__message", this.$results.append(i) }, n.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, n.prototype.append = function(t) { this.hideLoading(); var e = []; if (null != t.results && 0 !== t.results.length) { t.results = this.sort(t.results); for (var n = 0; n < t.results.length; n++) { var i = t.results[n],
                                    r = this.option(i);
                                e.push(r) } this.$results.append(e) } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }) }, n.prototype.position = function(t, e) { e.find(".select2-results").append(t) }, n.prototype.sort = function(t) { return this.options.get("sorter")(t) }, n.prototype.highlightFirstItem = function() { var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible() }, n.prototype.setClasses = function() { var n = this;
                        this.data.current((function(i) { var r = t.map(i, (function(t) { return t.id.toString() }));
                            n.$results.find(".select2-results__option[aria-selected]").each((function() { var n = t(this),
                                    i = e.GetData(this, "data"),
                                    o = "" + i.id;
                                null != i.element && i.element.selected || null == i.element && t.inArray(o, r) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false") })) })) }, n.prototype.showLoading = function(t) { this.hideLoading(); var e = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(t) },
                            n = this.option(e);
                        n.className += " loading-results", this.$results.prepend(n) }, n.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, n.prototype.option = function(n) { var i = document.createElement("li");
                        i.className = "select2-results__option"; var r = { role: "treeitem", "aria-selected": "false" },
                            o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector; for (var a in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r) { var s = r[a];
                            i.setAttribute(a, s) } if (n.children) { var l = t(i),
                                c = document.createElement("strong");
                            c.className = "select2-results__group";
                            t(c);
                            this.template(n, c); for (var h = [], u = 0; u < n.children.length; u++) { var d = n.children[u],
                                    p = this.option(d);
                                h.push(p) } var f = t("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                            f.append(h), l.append(c), l.append(f) } else this.template(n, i); return e.StoreData(i, "data", n), i }, n.prototype.bind = function(n, i) { var r = this,
                            o = n.id + "-results";
                        this.$results.attr("id", o), n.on("results:all", (function(t) { r.clear(), r.append(t.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem()) })), n.on("results:append", (function(t) { r.append(t.data), n.isOpen() && r.setClasses() })), n.on("query", (function(t) { r.hideMessages(), r.showLoading(t) })), n.on("select", (function() { n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem()) })), n.on("unselect", (function() { n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem()) })), n.on("open", (function() { r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible() })), n.on("close", (function() { r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant") })), n.on("results:toggle", (function() { var t = r.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup") })), n.on("results:select", (function() { var t = r.getHighlightedResults(); if (0 !== t.length) { var n = e.GetData(t[0], "data"); "true" == t.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", { data: n }) } })), n.on("results:previous", (function() { var t = r.getHighlightedResults(),
                                e = r.$results.find("[aria-selected]"),
                                n = e.index(t); if (!(n <= 0)) { var i = n - 1;
                                0 === t.length && (i = 0); var o = e.eq(i);
                                o.trigger("mouseenter"); var a = r.$results.offset().top,
                                    s = o.offset().top,
                                    l = r.$results.scrollTop() + (s - a);
                                0 === i ? r.$results.scrollTop(0) : s - a < 0 && r.$results.scrollTop(l) } })), n.on("results:next", (function() { var t = r.getHighlightedResults(),
                                e = r.$results.find("[aria-selected]"),
                                n = e.index(t) + 1; if (!(n >= e.length)) { var i = e.eq(n);
                                i.trigger("mouseenter"); var o = r.$results.offset().top + r.$results.outerHeight(!1),
                                    a = i.offset().top + i.outerHeight(!1),
                                    s = r.$results.scrollTop() + a - o;
                                0 === n ? r.$results.scrollTop(0) : a > o && r.$results.scrollTop(s) } })), n.on("results:focus", (function(t) { t.element.addClass("select2-results__option--highlighted") })), n.on("results:message", (function(t) { r.displayMessage(t) })), t.fn.mousewheel && this.$results.on("mousewheel", (function(t) { var e = r.$results.scrollTop(),
                                n = r.$results.get(0).scrollHeight - e + t.deltaY,
                                i = t.deltaY > 0 && e - t.deltaY <= 0,
                                o = t.deltaY < 0 && n <= r.$results.height();
                            i ? (r.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), t.preventDefault(), t.stopPropagation()) })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) { var i = t(this),
                                o = e.GetData(this, "data"); "true" !== i.attr("aria-selected") ? r.trigger("select", { originalEvent: n, data: o }) : r.options.get("multiple") ? r.trigger("unselect", { originalEvent: n, data: o }) : r.trigger("close", {}) })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) { var i = e.GetData(this, "data");
                            r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", { data: i, element: t(this) }) })) }, n.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, n.prototype.destroy = function() { this.$results.remove() }, n.prototype.ensureHighlightVisible = function() { var t = this.getHighlightedResults(); if (0 !== t.length) { var e = this.$results.find("[aria-selected]").index(t),
                                n = this.$results.offset().top,
                                i = t.offset().top,
                                r = this.$results.scrollTop() + (i - n),
                                o = i - n;
                            r -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r) } }, n.prototype.template = function(e, n) { var i = this.options.get("templateResult"),
                            r = this.options.get("escapeMarkup"),
                            o = i(e, n);
                        null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : t(n).append(o) }, n })), e.define("select2/keys", [], (function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } })), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(t, e, n) {
                    function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) } return e.Extend(i, e.Observable), i.prototype.render = function() { var n = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != e.GetData(this.$element[0], "old-tabindex") ? this._tabindex = e.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n, n }, i.prototype.bind = function(t, e) { var i = this,
                            r = (t.id, t.id + "-results");
                        this.container = t, this.$selection.on("focus", (function(t) { i.trigger("focus", t) })), this.$selection.on("blur", (function(t) { i._handleBlur(t) })), this.$selection.on("keydown", (function(t) { i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault() })), t.on("results:focus", (function(t) { i.$selection.attr("aria-activedescendant", t.data._resultId) })), t.on("selection:update", (function(t) { i.update(t.data) })), t.on("open", (function() { i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(t) })), t.on("close", (function() { i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(t) })), t.on("enable", (function() { i.$selection.attr("tabindex", i._tabindex) })), t.on("disable", (function() { i.$selection.attr("tabindex", "-1") })) }, i.prototype._handleBlur = function(e) { var n = this;
                        window.setTimeout((function() { document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e) }), 1) }, i.prototype._attachCloseHandler = function(n) { t(document.body).on("mousedown.select2." + n.id, (function(n) { var i = t(n.target).closest(".select2");
                            t(".select2.select2-container--open").each((function() { t(this);
                                this != i[0] && e.GetData(this, "element").select2("close") })) })) }, i.prototype._detachCloseHandler = function(e) { t(document.body).off("mousedown.select2." + e.id) }, i.prototype.position = function(t, e) { e.find(".selection").append(t) }, i.prototype.destroy = function() { this._detachCloseHandler(this.container) }, i.prototype.update = function(t) { throw new Error("The `update` method must be defined in child classes.") }, i })), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(t, e, n, i) {
                    function r() { r.__super__.constructor.apply(this, arguments) } return n.Extend(r, e), r.prototype.render = function() { var t = r.__super__.render.call(this); return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t }, r.prototype.bind = function(t, e) { var n = this;
                        r.__super__.bind.apply(this, arguments); var i = t.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", (function(t) { 1 === t.which && n.trigger("toggle", { originalEvent: t }) })), this.$selection.on("focus", (function(t) {})), this.$selection.on("blur", (function(t) {})), t.on("focus", (function(e) { t.isOpen() || n.$selection.trigger("focus") })) }, r.prototype.clear = function() { var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title") }, r.prototype.display = function(t, e) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(t, e)) }, r.prototype.selectionContainer = function() { return t("<span></span>") }, r.prototype.update = function(t) { if (0 !== t.length) { var e = t[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(e, n);
                            n.empty().append(i), n.attr("title", e.title || e.text) } else this.clear() }, r })), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(t, e, n) {
                    function i(t, e) { i.__super__.constructor.apply(this, arguments) } return n.Extend(i, e), i.prototype.render = function() { var t = i.__super__.render.call(this); return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t }, i.prototype.bind = function(e, r) { var o = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(t) { o.trigger("toggle", { originalEvent: t }) })), this.$selection.on("click", ".select2-selection__choice__remove", (function(e) { if (!o.options.get("disabled")) { var i = t(this).parent(),
                                    r = n.GetData(i[0], "data");
                                o.trigger("unselect", { originalEvent: e, data: r }) } })) }, i.prototype.clear = function() { var t = this.$selection.find(".select2-selection__rendered");
                        t.empty(), t.removeAttr("title") }, i.prototype.display = function(t, e) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(t, e)) }, i.prototype.selectionContainer = function() { return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, i.prototype.update = function(t) { if (this.clear(), 0 !== t.length) { for (var e = [], i = 0; i < t.length; i++) { var r = t[i],
                                    o = this.selectionContainer(),
                                    a = this.display(r, o);
                                o.append(a), o.attr("title", r.title || r.text), n.StoreData(o[0], "data", r), e.push(o) } var s = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(s, e) } }, i })), e.define("select2/selection/placeholder", ["../utils"], (function(t) {
                    function e(t, e, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n) } return e.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, e.prototype.createPlaceholder = function(t, e) { var n = this.selectionContainer(); return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n }, e.prototype.update = function(t, e) { var n = 1 == e.length && e[0].id != this.placeholder.id; if (e.length > 1 || n) return t.call(this, e);
                        this.clear(); var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i) }, e })), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(t, e, n) {
                    function i() {} return i.prototype.bind = function(t, e, n) { var i = this;
                        t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(t) { i._handleClear(t) })), e.on("keypress", (function(t) { i._handleKeyboardClear(t, e) })) }, i.prototype._handleClear = function(t, e) { if (!this.options.get("disabled")) { var i = this.$selection.find(".select2-selection__clear"); if (0 !== i.length) { e.stopPropagation(); var r = n.GetData(i[0], "data"),
                                    o = this.$element.val();
                                this.$element.val(this.placeholder.id); var a = { data: r }; if (this.trigger("clear", a), a.prevented) this.$element.val(o);
                                else { for (var s = 0; s < r.length; s++)
                                        if (a = { data: r[s] }, this.trigger("unselect", a), a.prevented) return void this.$element.val(o);
                                    this.$element.trigger("change"), this.trigger("toggle", {}) } } } }, i.prototype._handleKeyboardClear = function(t, n, i) { i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n) }, i.prototype.update = function(e, i) { if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) { var r = this.options.get("translations").get("removeAllItems"),
                                o = t('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                            n.StoreData(o[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(o) } }, i })), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(t, e, n) {
                    function i(t, e, n) { t.call(this, e, n) } return i.prototype.render = function(e) { var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input"); var i = e.call(this); return this._transferTabIndex(), i }, i.prototype.bind = function(t, i, r) { var o = this;
                        t.call(this, i, r), i.on("open", (function() { o.$search.trigger("focus") })), i.on("close", (function() { o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus") })), i.on("enable", (function() { o.$search.prop("disabled", !1), o._transferTabIndex() })), i.on("disable", (function() { o.$search.prop("disabled", !0) })), i.on("focus", (function(t) { o.$search.trigger("focus") })), i.on("results:focus", (function(t) { o.$search.attr("aria-activedescendant", t.id) })), this.$selection.on("focusin", ".select2-search--inline", (function(t) { o.trigger("focus", t) })), this.$selection.on("focusout", ".select2-search--inline", (function(t) { o._handleBlur(t) })), this.$selection.on("keydown", ".select2-search--inline", (function(t) { if (t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented(), t.which === n.BACKSPACE && "" === o.$search.val()) { var i = o.$searchContainer.prev(".select2-selection__choice"); if (i.length > 0) { var r = e.GetData(i[0], "data");
                                    o.searchRemoveChoice(r), t.preventDefault() } } })); var a = document.documentMode,
                            s = a && a <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", (function(t) { s ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search") })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(t) { if (s && "input" === t.type) o.$selection.off("input.search input.searchcheck");
                            else { var e = t.which;
                                e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && o.handleSearch(t) } })) }, i.prototype._transferTabIndex = function(t) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, i.prototype.createPlaceholder = function(t, e) { this.$search.attr("placeholder", e.text) }, i.prototype.update = function(t, e) { var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus") }, i.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var t = this.$search.val();
                            this.trigger("query", { term: t }) } this._keyUpPrevented = !1 }, i.prototype.searchRemoveChoice = function(t, e) { this.trigger("unselect", { data: e }), this.$search.val(e.text), this.handleSearch() }, i.prototype.resizeSearch = function() { this.$search.css("width", "25px"); var t = ""; "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").innerWidth() : t = .75 * (this.$search.val().length + 1) + "em";
                        this.$search.css("width", t) }, i })), e.define("select2/selection/eventRelay", ["jquery"], (function(t) {
                    function e() {} return e.prototype.bind = function(e, n, i) { var r = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                            a = ["opening", "closing", "selecting", "unselecting", "clearing"];
                        e.call(this, n, i), n.on("*", (function(e, n) { if (-1 !== t.inArray(e, o)) { n = n || {}; var i = t.Event("select2:" + e, { params: n });
                                r.$element.trigger(i), -1 !== t.inArray(e, a) && (n.prevented = i.isDefaultPrevented()) } })) }, e })), e.define("select2/translation", ["jquery", "require"], (function(t, e) {
                    function n(t) { this.dict = t || {} } return n.prototype.all = function() { return this.dict }, n.prototype.get = function(t) { return this.dict[t] }, n.prototype.extend = function(e) { this.dict = t.extend({}, e.all(), this.dict) }, n._cache = {}, n.loadPath = function(t) { if (!(t in n._cache)) { var i = e(t);
                            n._cache[t] = i } return new n(n._cache[t]) }, n })), e.define("select2/diacritics", [], (function() { return { "Ⓐ": "A", Ａ: "A", À: "A", Á: "A", Â: "A", Ầ: "A", Ấ: "A", Ẫ: "A", Ẩ: "A", Ã: "A", Ā: "A", Ă: "A", Ằ: "A", Ắ: "A", Ẵ: "A", Ẳ: "A", Ȧ: "A", Ǡ: "A", Ä: "A", Ǟ: "A", Ả: "A", Å: "A", Ǻ: "A", Ǎ: "A", Ȁ: "A", Ȃ: "A", Ạ: "A", Ậ: "A", Ặ: "A", Ḁ: "A", Ą: "A", Ⱥ: "A", Ɐ: "A", Ꜳ: "AA", Æ: "AE", Ǽ: "AE", Ǣ: "AE", Ꜵ: "AO", Ꜷ: "AU", Ꜹ: "AV", Ꜻ: "AV", Ꜽ: "AY", "Ⓑ": "B", Ｂ: "B", Ḃ: "B", Ḅ: "B", Ḇ: "B", Ƀ: "B", Ƃ: "B", Ɓ: "B", "Ⓒ": "C", Ｃ: "C", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", Ç: "C", Ḉ: "C", Ƈ: "C", Ȼ: "C", Ꜿ: "C", "Ⓓ": "D", Ｄ: "D", Ḋ: "D", Ď: "D", Ḍ: "D", Ḑ: "D", Ḓ: "D", Ḏ: "D", Đ: "D", Ƌ: "D", Ɗ: "D", Ɖ: "D", Ꝺ: "D", Ǳ: "DZ", Ǆ: "DZ", ǲ: "Dz", ǅ: "Dz", "Ⓔ": "E", Ｅ: "E", È: "E", É: "E", Ê: "E", Ề: "E", Ế: "E", Ễ: "E", Ể: "E", Ẽ: "E", Ē: "E", Ḕ: "E", Ḗ: "E", Ĕ: "E", Ė: "E", Ë: "E", Ẻ: "E", Ě: "E", Ȅ: "E", Ȇ: "E", Ẹ: "E", Ệ: "E", Ȩ: "E", Ḝ: "E", Ę: "E", Ḙ: "E", Ḛ: "E", Ɛ: "E", Ǝ: "E", "Ⓕ": "F", Ｆ: "F", Ḟ: "F", Ƒ: "F", Ꝼ: "F", "Ⓖ": "G", Ｇ: "G", Ǵ: "G", Ĝ: "G", Ḡ: "G", Ğ: "G", Ġ: "G", Ǧ: "G", Ģ: "G", Ǥ: "G", Ɠ: "G", Ꞡ: "G", Ᵹ: "G", Ꝿ: "G", "Ⓗ": "H", Ｈ: "H", Ĥ: "H", Ḣ: "H", Ḧ: "H", Ȟ: "H", Ḥ: "H", Ḩ: "H", Ḫ: "H", Ħ: "H", Ⱨ: "H", Ⱶ: "H", Ɥ: "H", "Ⓘ": "I", Ｉ: "I", Ì: "I", Í: "I", Î: "I", Ĩ: "I", Ī: "I", Ĭ: "I", İ: "I", Ï: "I", Ḯ: "I", Ỉ: "I", Ǐ: "I", Ȉ: "I", Ȋ: "I", Ị: "I", Į: "I", Ḭ: "I", Ɨ: "I", "Ⓙ": "J", Ｊ: "J", Ĵ: "J", Ɉ: "J", "Ⓚ": "K", Ｋ: "K", Ḱ: "K", Ǩ: "K", Ḳ: "K", Ķ: "K", Ḵ: "K", Ƙ: "K", Ⱪ: "K", Ꝁ: "K", Ꝃ: "K", Ꝅ: "K", Ꞣ: "K", "Ⓛ": "L", Ｌ: "L", Ŀ: "L", Ĺ: "L", Ľ: "L", Ḷ: "L", Ḹ: "L", Ļ: "L", Ḽ: "L", Ḻ: "L", Ł: "L", Ƚ: "L", Ɫ: "L", Ⱡ: "L", Ꝉ: "L", Ꝇ: "L", Ꞁ: "L", Ǉ: "LJ", ǈ: "Lj", "Ⓜ": "M", Ｍ: "M", Ḿ: "M", Ṁ: "M", Ṃ: "M", Ɱ: "M", Ɯ: "M", "Ⓝ": "N", Ｎ: "N", Ǹ: "N", Ń: "N", Ñ: "N", Ṅ: "N", Ň: "N", Ṇ: "N", Ņ: "N", Ṋ: "N", Ṉ: "N", Ƞ: "N", Ɲ: "N", Ꞑ: "N", Ꞥ: "N", Ǌ: "NJ", ǋ: "Nj", "Ⓞ": "O", Ｏ: "O", Ò: "O", Ó: "O", Ô: "O", Ồ: "O", Ố: "O", Ỗ: "O", Ổ: "O", Õ: "O", Ṍ: "O", Ȭ: "O", Ṏ: "O", Ō: "O", Ṑ: "O", Ṓ: "O", Ŏ: "O", Ȯ: "O", Ȱ: "O", Ö: "O", Ȫ: "O", Ỏ: "O", Ő: "O", Ǒ: "O", Ȍ: "O", Ȏ: "O", Ơ: "O", Ờ: "O", Ớ: "O", Ỡ: "O", Ở: "O", Ợ: "O", Ọ: "O", Ộ: "O", Ǫ: "O", Ǭ: "O", Ø: "O", Ǿ: "O", Ɔ: "O", Ɵ: "O", Ꝋ: "O", Ꝍ: "O", Œ: "OE", Ƣ: "OI", Ꝏ: "OO", Ȣ: "OU", "Ⓟ": "P", Ｐ: "P", Ṕ: "P", Ṗ: "P", Ƥ: "P", Ᵽ: "P", Ꝑ: "P", Ꝓ: "P", Ꝕ: "P", "Ⓠ": "Q", Ｑ: "Q", Ꝗ: "Q", Ꝙ: "Q", Ɋ: "Q", "Ⓡ": "R", Ｒ: "R", Ŕ: "R", Ṙ: "R", Ř: "R", Ȑ: "R", Ȓ: "R", Ṛ: "R", Ṝ: "R", Ŗ: "R", Ṟ: "R", Ɍ: "R", Ɽ: "R", Ꝛ: "R", Ꞧ: "R", Ꞃ: "R", "Ⓢ": "S", Ｓ: "S", ẞ: "S", Ś: "S", Ṥ: "S", Ŝ: "S", Ṡ: "S", Š: "S", Ṧ: "S", Ṣ: "S", Ṩ: "S", Ș: "S", Ş: "S", Ȿ: "S", Ꞩ: "S", Ꞅ: "S", "Ⓣ": "T", Ｔ: "T", Ṫ: "T", Ť: "T", Ṭ: "T", Ț: "T", Ţ: "T", Ṱ: "T", Ṯ: "T", Ŧ: "T", Ƭ: "T", Ʈ: "T", Ⱦ: "T", Ꞇ: "T", Ꜩ: "TZ", "Ⓤ": "U", Ｕ: "U", Ù: "U", Ú: "U", Û: "U", Ũ: "U", Ṹ: "U", Ū: "U", Ṻ: "U", Ŭ: "U", Ü: "U", Ǜ: "U", Ǘ: "U", Ǖ: "U", Ǚ: "U", Ủ: "U", Ů: "U", Ű: "U", Ǔ: "U", Ȕ: "U", Ȗ: "U", Ư: "U", Ừ: "U", Ứ: "U", Ữ: "U", Ử: "U", Ự: "U", Ụ: "U", Ṳ: "U", Ų: "U", Ṷ: "U", Ṵ: "U", Ʉ: "U", "Ⓥ": "V", Ｖ: "V", Ṽ: "V", Ṿ: "V", Ʋ: "V", Ꝟ: "V", Ʌ: "V", Ꝡ: "VY", "Ⓦ": "W", Ｗ: "W", Ẁ: "W", Ẃ: "W", Ŵ: "W", Ẇ: "W", Ẅ: "W", Ẉ: "W", Ⱳ: "W", "Ⓧ": "X", Ｘ: "X", Ẋ: "X", Ẍ: "X", "Ⓨ": "Y", Ｙ: "Y", Ỳ: "Y", Ý: "Y", Ŷ: "Y", Ỹ: "Y", Ȳ: "Y", Ẏ: "Y", Ÿ: "Y", Ỷ: "Y", Ỵ: "Y", Ƴ: "Y", Ɏ: "Y", Ỿ: "Y", "Ⓩ": "Z", Ｚ: "Z", Ź: "Z", Ẑ: "Z", Ż: "Z", Ž: "Z", Ẓ: "Z", Ẕ: "Z", Ƶ: "Z", Ȥ: "Z", Ɀ: "Z", Ⱬ: "Z", Ꝣ: "Z", "ⓐ": "a", ａ: "a", ẚ: "a", à: "a", á: "a", â: "a", ầ: "a", ấ: "a", ẫ: "a", ẩ: "a", ã: "a", ā: "a", ă: "a", ằ: "a", ắ: "a", ẵ: "a", ẳ: "a", ȧ: "a", ǡ: "a", ä: "a", ǟ: "a", ả: "a", å: "a", ǻ: "a", ǎ: "a", ȁ: "a", ȃ: "a", ạ: "a", ậ: "a", ặ: "a", ḁ: "a", ą: "a", ⱥ: "a", ɐ: "a", ꜳ: "aa", æ: "ae", ǽ: "ae", ǣ: "ae", ꜵ: "ao", ꜷ: "au", ꜹ: "av", ꜻ: "av", ꜽ: "ay", "ⓑ": "b", ｂ: "b", ḃ: "b", ḅ: "b", ḇ: "b", ƀ: "b", ƃ: "b", ɓ: "b", "ⓒ": "c", ｃ: "c", ć: "c", ĉ: "c", ċ: "c", č: "c", ç: "c", ḉ: "c", ƈ: "c", ȼ: "c", ꜿ: "c", ↄ: "c", "ⓓ": "d", ｄ: "d", ḋ: "d", ď: "d", ḍ: "d", ḑ: "d", ḓ: "d", ḏ: "d", đ: "d", ƌ: "d", ɖ: "d", ɗ: "d", ꝺ: "d", ǳ: "dz", ǆ: "dz", "ⓔ": "e", ｅ: "e", è: "e", é: "e", ê: "e", ề: "e", ế: "e", ễ: "e", ể: "e", ẽ: "e", ē: "e", ḕ: "e", ḗ: "e", ĕ: "e", ė: "e", ë: "e", ẻ: "e", ě: "e", ȅ: "e", ȇ: "e", ẹ: "e", ệ: "e", ȩ: "e", ḝ: "e", ę: "e", ḙ: "e", ḛ: "e", ɇ: "e", ɛ: "e", ǝ: "e", "ⓕ": "f", ｆ: "f", ḟ: "f", ƒ: "f", ꝼ: "f", "ⓖ": "g", ｇ: "g", ǵ: "g", ĝ: "g", ḡ: "g", ğ: "g", ġ: "g", ǧ: "g", ģ: "g", ǥ: "g", ɠ: "g", ꞡ: "g", ᵹ: "g", ꝿ: "g", "ⓗ": "h", ｈ: "h", ĥ: "h", ḣ: "h", ḧ: "h", ȟ: "h", ḥ: "h", ḩ: "h", ḫ: "h", ẖ: "h", ħ: "h", ⱨ: "h", ⱶ: "h", ɥ: "h", ƕ: "hv", "ⓘ": "i", ｉ: "i", ì: "i", í: "i", î: "i", ĩ: "i", ī: "i", ĭ: "i", ï: "i", ḯ: "i", ỉ: "i", ǐ: "i", ȉ: "i", ȋ: "i", ị: "i", į: "i", ḭ: "i", ɨ: "i", ı: "i", "ⓙ": "j", ｊ: "j", ĵ: "j", ǰ: "j", ɉ: "j", "ⓚ": "k", ｋ: "k", ḱ: "k", ǩ: "k", ḳ: "k", ķ: "k", ḵ: "k", ƙ: "k", ⱪ: "k", ꝁ: "k", ꝃ: "k", ꝅ: "k", ꞣ: "k", "ⓛ": "l", ｌ: "l", ŀ: "l", ĺ: "l", ľ: "l", ḷ: "l", ḹ: "l", ļ: "l", ḽ: "l", ḻ: "l", ſ: "l", ł: "l", ƚ: "l", ɫ: "l", ⱡ: "l", ꝉ: "l", ꞁ: "l", ꝇ: "l", ǉ: "lj", "ⓜ": "m", ｍ: "m", ḿ: "m", ṁ: "m", ṃ: "m", ɱ: "m", ɯ: "m", "ⓝ": "n", ｎ: "n", ǹ: "n", ń: "n", ñ: "n", ṅ: "n", ň: "n", ṇ: "n", ņ: "n", ṋ: "n", ṉ: "n", ƞ: "n", ɲ: "n", ŉ: "n", ꞑ: "n", ꞥ: "n", ǌ: "nj", "ⓞ": "o", ｏ: "o", ò: "o", ó: "o", ô: "o", ồ: "o", ố: "o", ỗ: "o", ổ: "o", õ: "o", ṍ: "o", ȭ: "o", ṏ: "o", ō: "o", ṑ: "o", ṓ: "o", ŏ: "o", ȯ: "o", ȱ: "o", ö: "o", ȫ: "o", ỏ: "o", ő: "o", ǒ: "o", ȍ: "o", ȏ: "o", ơ: "o", ờ: "o", ớ: "o", ỡ: "o", ở: "o", ợ: "o", ọ: "o", ộ: "o", ǫ: "o", ǭ: "o", ø: "o", ǿ: "o", ɔ: "o", ꝋ: "o", ꝍ: "o", ɵ: "o", œ: "oe", ƣ: "oi", ȣ: "ou", ꝏ: "oo", "ⓟ": "p", ｐ: "p", ṕ: "p", ṗ: "p", ƥ: "p", ᵽ: "p", ꝑ: "p", ꝓ: "p", ꝕ: "p", "ⓠ": "q", ｑ: "q", ɋ: "q", ꝗ: "q", ꝙ: "q", "ⓡ": "r", ｒ: "r", ŕ: "r", ṙ: "r", ř: "r", ȑ: "r", ȓ: "r", ṛ: "r", ṝ: "r", ŗ: "r", ṟ: "r", ɍ: "r", ɽ: "r", ꝛ: "r", ꞧ: "r", ꞃ: "r", "ⓢ": "s", ｓ: "s", ß: "s", ś: "s", ṥ: "s", ŝ: "s", ṡ: "s", š: "s", ṧ: "s", ṣ: "s", ṩ: "s", ș: "s", ş: "s", ȿ: "s", ꞩ: "s", ꞅ: "s", ẛ: "s", "ⓣ": "t", ｔ: "t", ṫ: "t", ẗ: "t", ť: "t", ṭ: "t", ț: "t", ţ: "t", ṱ: "t", ṯ: "t", ŧ: "t", ƭ: "t", ʈ: "t", ⱦ: "t", ꞇ: "t", ꜩ: "tz", "ⓤ": "u", ｕ: "u", ù: "u", ú: "u", û: "u", ũ: "u", ṹ: "u", ū: "u", ṻ: "u", ŭ: "u", ü: "u", ǜ: "u", ǘ: "u", ǖ: "u", ǚ: "u", ủ: "u", ů: "u", ű: "u", ǔ: "u", ȕ: "u", ȗ: "u", ư: "u", ừ: "u", ứ: "u", ữ: "u", ử: "u", ự: "u", ụ: "u", ṳ: "u", ų: "u", ṷ: "u", ṵ: "u", ʉ: "u", "ⓥ": "v", ｖ: "v", ṽ: "v", ṿ: "v", ʋ: "v", ꝟ: "v", ʌ: "v", ꝡ: "vy", "ⓦ": "w", ｗ: "w", ẁ: "w", ẃ: "w", ŵ: "w", ẇ: "w", ẅ: "w", ẘ: "w", ẉ: "w", ⱳ: "w", "ⓧ": "x", ｘ: "x", ẋ: "x", ẍ: "x", "ⓨ": "y", ｙ: "y", ỳ: "y", ý: "y", ŷ: "y", ỹ: "y", ȳ: "y", ẏ: "y", ÿ: "y", ỷ: "y", ẙ: "y", ỵ: "y", ƴ: "y", ɏ: "y", ỿ: "y", "ⓩ": "z", ｚ: "z", ź: "z", ẑ: "z", ż: "z", ž: "z", ẓ: "z", ẕ: "z", ƶ: "z", ȥ: "z", ɀ: "z", ⱬ: "z", ꝣ: "z", Ά: "Α", Έ: "Ε", Ή: "Η", Ί: "Ι", Ϊ: "Ι", Ό: "Ο", Ύ: "Υ", Ϋ: "Υ", Ώ: "Ω", ά: "α", έ: "ε", ή: "η", ί: "ι", ϊ: "ι", ΐ: "ι", ό: "ο", ύ: "υ", ϋ: "υ", ΰ: "υ", ώ: "ω", ς: "σ", "’": "'" } })), e.define("select2/data/base", ["../utils"], (function(t) {
                    function e(t, n) { e.__super__.constructor.call(this) } return t.Extend(e, t.Observable), e.prototype.current = function(t) { throw new Error("The `current` method must be defined in child classes.") }, e.prototype.query = function(t, e) { throw new Error("The `query` method must be defined in child classes.") }, e.prototype.bind = function(t, e) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, n) { var i = e.id + "-result-"; return i += t.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + t.generateChars(4), i }, e })), e.define("select2/data/select", ["./base", "../utils", "jquery"], (function(t, e, n) {
                    function i(t, e) { this.$element = t, this.options = e, i.__super__.constructor.call(this) } return e.Extend(i, t), i.prototype.current = function(t) { var e = [],
                            i = this;
                        this.$element.find(":selected").each((function() { var t = n(this),
                                r = i.item(t);
                            e.push(r) })), t(e) }, i.prototype.select = function(t) { var e = this; if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change"); if (this.$element.prop("multiple")) this.current((function(i) { var r = [];
                            (t = [t]).push.apply(t, i); for (var o = 0; o < t.length; o++) { var a = t[o].id; - 1 === n.inArray(a, r) && r.push(a) } e.$element.val(r), e.$element.trigger("change") }));
                        else { var i = t.id;
                            this.$element.val(i), this.$element.trigger("change") } }, i.prototype.unselect = function(t) { var e = this; if (this.$element.prop("multiple")) { if (t.selected = !1, n(t.element).is("option")) return t.element.selected = !1, void this.$element.trigger("change");
                            this.current((function(i) { for (var r = [], o = 0; o < i.length; o++) { var a = i[o].id;
                                    a !== t.id && -1 === n.inArray(a, r) && r.push(a) } e.$element.val(r), e.$element.trigger("change") })) } }, i.prototype.bind = function(t, e) { var n = this;
                        this.container = t, t.on("select", (function(t) { n.select(t.data) })), t.on("unselect", (function(t) { n.unselect(t.data) })) }, i.prototype.destroy = function() { this.$element.find("*").each((function() { e.RemoveData(this) })) }, i.prototype.query = function(t, e) { var i = [],
                            r = this;
                        this.$element.children().each((function() { var e = n(this); if (e.is("option") || e.is("optgroup")) { var o = r.item(e),
                                    a = r.matches(t, o);
                                null !== a && i.push(a) } })), e({ results: i }) }, i.prototype.addOptions = function(t) { e.appendMany(this.$element, t) }, i.prototype.option = function(t) { var i;
                        t.children ? (i = document.createElement("optgroup")).label = t.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = t.text : i.innerText = t.text, void 0 !== t.id && (i.value = t.id), t.disabled && (i.disabled = !0), t.selected && (i.selected = !0), t.title && (i.title = t.title); var r = n(i),
                            o = this._normalizeItem(t); return o.element = i, e.StoreData(i, "data", o), r }, i.prototype.item = function(t) { var i = {}; if (null != (i = e.GetData(t[0], "data"))) return i; if (t.is("option")) i = { id: t.val(), text: t.text(), disabled: t.prop("disabled"), selected: t.prop("selected"), title: t.prop("title") };
                        else if (t.is("optgroup")) { i = { text: t.prop("label"), children: [], title: t.prop("title") }; for (var r = t.children("option"), o = [], a = 0; a < r.length; a++) { var s = n(r[a]),
                                    l = this.item(s);
                                o.push(l) } i.children = o } return (i = this._normalizeItem(i)).element = t[0], e.StoreData(t[0], "data", i), i }, i.prototype._normalizeItem = function(t) { t !== Object(t) && (t = { id: t, text: t }); return null != (t = n.extend({}, { text: "" }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, { selected: !1, disabled: !1 }, t) }, i.prototype.matches = function(t, e) { return this.options.get("matcher")(t, e) }, i })), e.define("select2/data/array", ["./select", "../utils", "jquery"], (function(t, e, n) {
                    function i(t, e) { var n = e.get("data") || [];
                        i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n)) } return e.Extend(i, t), i.prototype.select = function(t) { var e = this.$element.find("option").filter((function(e, n) { return n.value == t.id.toString() }));
                        0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t) }, i.prototype.convertToOptions = function(t) { var i = this,
                            r = this.$element.find("option"),
                            o = r.map((function() { return i.item(n(this)).id })).get(),
                            a = [];

                        function s(t) { return function() { return n(this).val() == t.id } } for (var l = 0; l < t.length; l++) { var c = this._normalizeItem(t[l]); if (n.inArray(c.id, o) >= 0) { var h = r.filter(s(c)),
                                    u = this.item(h),
                                    d = n.extend(!0, {}, c, u),
                                    p = this.option(d);
                                h.replaceWith(p) } else { var f = this.option(c); if (c.children) { var g = this.convertToOptions(c.children);
                                    e.appendMany(f, g) } a.push(f) } } return a }, i })), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(t, e, n) {
                    function i(t, e) { this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e) } return e.Extend(i, t), i.prototype._applyDefaults = function(t) { var e = { data: function(t) { return n.extend({}, t, { q: t.term }) }, transport: function(t, e, i) { var r = n.ajax(t); return r.then(e), r.fail(i), r } }; return n.extend({}, e, t, !0) }, i.prototype.processResults = function(t) { return t }, i.prototype.query = function(t, e) { var i = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null); var r = n.extend({ type: "GET" }, this.ajaxOptions);

                        function o() { var o = r.transport(r, (function(r) { var o = i.processResults(r, t);
                                i.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(o) }), (function() {
                                (!("status" in o) || 0 !== o.status && "0" !== o.status) && i.trigger("results:message", { message: "errorLoading" }) }));
                            i._request = o } "function" == typeof r.url && (r.url = r.url.call(this.$element, t)), "function" == typeof r.data && (r.data = r.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(o, this.ajaxOptions.delay)) : o() }, i })), e.define("select2/data/tags", ["jquery"], (function(t) {
                    function e(e, n, i) { var r = i.get("tags"),
                            o = i.get("createTag");
                        void 0 !== o && (this.createTag = o); var a = i.get("insertTag"); if (void 0 !== a && (this.insertTag = a), e.call(this, n, i), t.isArray(r))
                            for (var s = 0; s < r.length; s++) { var l = r[s],
                                    c = this._normalizeItem(l),
                                    h = this.option(c);
                                this.$element.append(h) } } return e.prototype.query = function(t, e, n) { var i = this;
                        this._removeOldTags(), null != e.term && null == e.page ? t.call(this, e, (function t(r, o) { for (var a = r.results, s = 0; s < a.length; s++) { var l = a[s],
                                    c = null != l.children && !t({ results: l.children }, !0); if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || c) return !o && (r.data = a, void n(r)) } if (o) return !0; var h = i.createTag(e); if (null != h) { var u = i.option(h);
                                u.attr("data-select2-tag", !0), i.addOptions([u]), i.insertTag(a, h) } r.results = a, n(r) })) : t.call(this, e, n) }, e.prototype.createTag = function(e, n) { var i = t.trim(n.term); return "" === i ? null : { id: i, text: i } }, e.prototype.insertTag = function(t, e, n) { e.unshift(n) }, e.prototype._removeOldTags = function(e) { this._lastTag;
                        this.$element.find("option[data-select2-tag]").each((function() { this.selected || t(this).remove() })) }, e })), e.define("select2/data/tokenizer", ["jquery"], (function(t) {
                    function e(t, e, n) { var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), t.call(this, e, n) } return e.prototype.bind = function(t, e, n) { t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field") }, e.prototype.query = function(e, n, i) { var r = this;
                        n.term = n.term || ""; var o = this.tokenizer(n, this.options, (function(e) { var n = r._normalizeItem(e); if (!r.$element.find("option").filter((function() { return t(this).val() === n.id })).length) { var i = r.option(n);
                                i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i]) }! function(t) { r.trigger("select", { data: t }) }(n) }));
                        o.term !== n.term && (this.$search.length && (this.$search.val(o.term), this.$search.trigger("focus")), n.term = o.term), e.call(this, n, i) }, e.prototype.tokenizer = function(e, n, i, r) { for (var o = i.get("tokenSeparators") || [], a = n.term, s = 0, l = this.createTag || function(t) { return { id: t.term, text: t.term } }; s < a.length;) { var c = a[s]; if (-1 !== t.inArray(c, o)) { var h = a.substr(0, s),
                                    u = l(t.extend({}, n, { term: h }));
                                null != u ? (r(u), a = a.substr(s + 1) || "", s = 0) : s++ } else s++ } return { term: a } }, e })), e.define("select2/data/minimumInputLength", [], (function() {
                    function t(t, e, n) { this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: e.term, params: e } }) : t.call(this, e, n) }, t })), e.define("select2/data/maximumInputLength", [], (function() {
                    function t(t, e, n) { this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: e.term, params: e } }) : t.call(this, e, n) }, t })), e.define("select2/data/maximumSelectionLength", [], (function() {
                    function t(t, e, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n) } return t.prototype.query = function(t, e, n) { var i = this;
                        this.current((function(r) { var o = null != r ? r.length : 0;
                            i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? i.trigger("results:message", { message: "maximumSelected", args: { maximum: i.maximumSelectionLength } }) : t.call(i, e, n) })) }, t })), e.define("select2/dropdown", ["jquery", "./utils"], (function(t, e) {
                    function n(t, e) { this.$element = t, this.options = e, n.__super__.constructor.call(this) } return e.Extend(n, e.Observable), n.prototype.render = function() { var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e }, n.prototype.bind = function() {}, n.prototype.position = function(t, e) {}, n.prototype.destroy = function() { this.$dropdown.remove() }, n })), e.define("select2/dropdown/search", ["jquery", "../utils"], (function(t, e) {
                    function n() {} return n.prototype.render = function(e) { var n = e.call(this),
                            i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n }, n.prototype.bind = function(e, n, i) { var r = this;
                        e.call(this, n, i), this.$search.on("keydown", (function(t) { r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented() })), this.$search.on("input", (function(e) { t(this).off("keyup") })), this.$search.on("keyup input", (function(t) { r.handleSearch(t) })), n.on("open", (function() { r.$search.attr("tabindex", 0), r.$search.trigger("focus"), window.setTimeout((function() { r.$search.trigger("focus") }), 0) })), n.on("close", (function() { r.$search.attr("tabindex", -1), r.$search.val(""), r.$search.trigger("blur") })), n.on("focus", (function() { n.isOpen() || r.$search.trigger("focus") })), n.on("results:all", (function(t) { null != t.query.term && "" !== t.query.term || (r.showSearch(t) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")) })) }, n.prototype.handleSearch = function(t) { if (!this._keyUpPrevented) { var e = this.$search.val();
                            this.trigger("query", { term: e }) } this._keyUpPrevented = !1 }, n.prototype.showSearch = function(t, e) { return !0 }, n })), e.define("select2/dropdown/hidePlaceholder", [], (function() {
                    function t(t, e, n, i) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i) } return t.prototype.append = function(t, e) { e.results = this.removePlaceholder(e.results), t.call(this, e) }, t.prototype.normalizePlaceholder = function(t, e) { return "string" == typeof e && (e = { id: "", text: e }), e }, t.prototype.removePlaceholder = function(t, e) { for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) { var r = e[i];
                            this.placeholder.id === r.id && n.splice(i, 1) } return n }, t })), e.define("select2/dropdown/infiniteScroll", ["jquery"], (function(t) {
                    function e(t, e, n, i) { this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return e.prototype.append = function(t, e) { this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded()) }, e.prototype.bind = function(t, e, n) { var i = this;
                        t.call(this, e, n), e.on("query", (function(t) { i.lastParams = t, i.loading = !0 })), e.on("query:append", (function(t) { i.lastParams = t, i.loading = !0 })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this)) }, e.prototype.loadMoreIfNeeded = function() { var e = t.contains(document.documentElement, this.$loadingMore[0]);!this.loading && e && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()) }, e.prototype.loadMore = function() { this.loading = !0; var e = t.extend({}, { page: 1 }, this.lastParams);
                        e.page++, this.trigger("query:append", e) }, e.prototype.showLoadingMore = function(t, e) { return e.pagination && e.pagination.more }, e.prototype.createLoadingMore = function() { var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore"); return e.html(n(this.lastParams)), e }, e })), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(t, e) {
                    function n(e, n, i) { this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i) } return n.prototype.bind = function(t, e, n) { var i = this,
                            r = !1;
                        t.call(this, e, n), e.on("open", (function() { i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", (function() { i._positionDropdown(), i._resizeDropdown() })), e.on("results:append", (function() { i._positionDropdown(), i._resizeDropdown() }))) })), e.on("close", (function() { i._hideDropdown(), i._detachPositioningHandler(e) })), this.$dropdownContainer.on("mousedown", (function(t) { t.stopPropagation() })) }, n.prototype.destroy = function(t) { t.call(this), this.$dropdownContainer.remove() }, n.prototype.position = function(t, e, n) { e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({ position: "absolute", top: -999999 }), this.$container = n }, n.prototype.render = function(e) { var n = t("<span></span>"),
                            i = e.call(this); return n.append(i), this.$dropdownContainer = n, n }, n.prototype._hideDropdown = function(t) { this.$dropdownContainer.detach() }, n.prototype._attachPositioningHandler = function(n, i) { var r = this,
                            o = "scroll.select2." + i.id,
                            a = "resize.select2." + i.id,
                            s = "orientationchange.select2." + i.id,
                            l = this.$container.parents().filter(e.hasScroll);
                        l.each((function() { e.StoreData(this, "select2-scroll-position", { x: t(this).scrollLeft(), y: t(this).scrollTop() }) })), l.on(o, (function(n) { var i = e.GetData(this, "select2-scroll-position");
                            t(this).scrollTop(i.y) })), t(window).on(o + " " + a + " " + s, (function(t) { r._positionDropdown(), r._resizeDropdown() })) }, n.prototype._detachPositioningHandler = function(n, i) { var r = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id;
                        this.$container.parents().filter(e.hasScroll).off(r), t(window).off(r + " " + o + " " + a) }, n.prototype._positionDropdown = function() { var e = t(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            r = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1); var a = { height: this.$container.outerHeight(!1) };
                        a.top = o.top, a.bottom = o.top + a.height; var s = this.$dropdown.outerHeight(!1),
                            l = e.scrollTop(),
                            c = e.scrollTop() + e.height(),
                            h = l < o.top - s,
                            u = c > o.bottom + s,
                            d = { left: o.left, top: a.bottom },
                            p = this.$dropdownParent; "static" === p.css("position") && (p = p.offsetParent()); var f = p.offset();
                        d.top -= f.top, d.left -= f.left, n || i || (r = "below"), u || !h || n ? !h && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = a.top - f.top - s), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d) }, n.prototype._resizeDropdown = function() { var t = { width: this.$container.outerWidth(!1) + "px" };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t) }, n.prototype._showDropdown = function(t) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, n })), e.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                    function t(e) { for (var n = 0, i = 0; i < e.length; i++) { var r = e[i];
                            r.children ? n += t(r.children) : n++ } return n }

                    function e(t, e, n, i) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i) } return e.prototype.showSearch = function(e, n) { return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n) }, e })), e.define("select2/dropdown/selectOnClose", ["../utils"], (function(t) {
                    function e() {} return e.prototype.bind = function(t, e, n) { var i = this;
                        t.call(this, e, n), e.on("close", (function(t) { i._handleSelectOnClose(t) })) }, e.prototype._handleSelectOnClose = function(e, n) { if (n && null != n.originalSelect2Event) { var i = n.originalSelect2Event; if ("select" === i._type || "unselect" === i._type) return } var r = this.getHighlightedResults(); if (!(r.length < 1)) { var o = t.GetData(r[0], "data");
                            null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", { data: o }) } }, e })), e.define("select2/dropdown/closeOnSelect", [], (function() {
                    function t() {} return t.prototype.bind = function(t, e, n) { var i = this;
                        t.call(this, e, n), e.on("select", (function(t) { i._selectTriggered(t) })), e.on("unselect", (function(t) { i._selectTriggered(t) })) }, t.prototype._selectTriggered = function(t, e) { var n = e.originalEvent;
                        n && (n.ctrlKey || n.metaKey) || this.trigger("close", { originalEvent: n, originalSelect2Event: e }) }, t })), e.define("select2/i18n/en", [], (function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(t) { var e = t.input.length - t.maximum,
                                n = "Please delete " + e + " character"; return 1 != e && (n += "s"), n }, inputTooShort: function(t) { return "Please enter " + (t.minimum - t.input.length) + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(t) { var e = "You can only select " + t.maximum + " item"; return 1 != t.maximum && (e += "s"), e }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" }, removeAllItems: function() { return "Remove all items" } } })), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(t, e, n, i, r, o, a, s, l, c, h, u, d, p, f, g, v, m, y, b, x, w, _, C, S, D, T, k, A) {
                    function E() { this.reset() } return E.prototype.apply = function(u) { if (null == (u = t.extend(!0, {}, this.defaults, u)).dataAdapter) { if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = d, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, v)), null != u.query) { var A = e(u.amdBase + "compat/query");
                                u.dataAdapter = c.Decorate(u.dataAdapter, A) } if (null != u.initSelection) { var E = e(u.amdBase + "compat/initSelection");
                                u.dataAdapter = c.Decorate(u.dataAdapter, E) } } if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, _)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, T))), null == u.dropdownAdapter) { if (u.multiple) u.dropdownAdapter = x;
                            else { var L = c.Decorate(x, w);
                                u.dropdownAdapter = L } if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, D)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) { var $ = e(u.amdBase + "compat/dropdownCss");
                                u.dropdownAdapter = c.Decorate(u.dropdownAdapter, $) } u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S) } if (null == u.selectionAdapter) { if (u.multiple ? u.selectionAdapter = r : u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) { var I = e(u.amdBase + "compat/containerCss");
                                u.selectionAdapter = c.Decorate(u.selectionAdapter, I) } u.selectionAdapter = c.Decorate(u.selectionAdapter, l) } if ("string" == typeof u.language)
                            if (u.language.indexOf("-") > 0) { var M = u.language.split("-")[0];
                                u.language = [u.language, M] } else u.language = [u.language]; if (t.isArray(u.language)) { var F = new h;
                            u.language.push("en"); for (var N = u.language, O = 0; O < N.length; O++) { var j = N[O],
                                    P = {}; try { P = h.loadPath(j) } catch (t) { try { j = this.defaults.amdLanguageBase + j, P = h.loadPath(j) } catch (t) { u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + j + '" could not be automatically loaded. A fallback will be used instead.'); continue } } F.extend(P) } u.translations = F } else { var R = h.loadPath(this.defaults.amdLanguageBase + "en"),
                                B = new h(u.language);
                            B.extend(R), u.translations = B } return u }, E.prototype.reset = function() {
                        function e(t) { return t.replace(/[^\u0000-\u007E]/g, (function(t) { return u[t] || t })) } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: c.escapeMarkup, language: A, matcher: function n(i, r) { if ("" === t.trim(i.term)) return r; if (r.children && r.children.length > 0) { for (var o = t.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--) { null == n(i, r.children[a]) && o.children.splice(a, 1) } return o.children.length > 0 ? o : n(i, o) } var s = e(r.text).toUpperCase(),
                                    l = e(i.term).toUpperCase(); return s.indexOf(l) > -1 ? r : null }, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, scrollAfterSelect: !1, sorter: function(t) { return t }, templateResult: function(t) { return t.text }, templateSelection: function(t) { return t.text }, theme: "default", width: "resolve" } }, E.prototype.set = function(e, n) { var i = {};
                        i[t.camelCase(e)] = n; var r = c._convertData(i);
                        t.extend(!0, this.defaults, r) }, new E })), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(t, e, n, i) {
                    function r(e, r) { if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) { var o = t(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o) } } return r.prototype.fromElement = function(t) { var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), i.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")), i.StoreData(t[0], "tags", !0)), i.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")), i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl"))); var r = {};

                        function o(t, e) { return e.toUpperCase() } for (var a = 0; a < t[0].attributes.length; a++) { var s = t[0].attributes[a].name,
                                l = "data-"; if (s.substr(0, l.length) == l) { var c = s.substring(l.length),
                                    h = i.GetData(t[0], c);
                                r[c.replace(/-([a-z])/g, o)] = h } } e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (r = e.extend(!0, {}, t[0].dataset, r)); var u = e.extend(!0, {}, i.GetData(t[0]), r); for (var d in u = i._convertData(u)) e.inArray(d, n) > -1 || (e.isPlainObject(this.options[d]) ? e.extend(this.options[d], u[d]) : this.options[d] = u[d]); return this }, r.prototype.get = function(t) { return this.options[t] }, r.prototype.set = function(t, e) { this.options[t] = e }, r })), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(t, e, n, i) { var r = function(t, i) { null != n.GetData(t[0], "select2") && n.GetData(t[0], "select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), r.__super__.constructor.call(this); var o = t.attr("tabindex") || 0;
                        n.StoreData(t[0], "old-tabindex", o), t.attr("tabindex", "-1"); var a = this.options.get("dataAdapter");
                        this.dataAdapter = new a(t, this.options); var s = this.render();
                        this._placeContainer(s); var l = this.options.get("selectionAdapter");
                        this.selection = new l(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s); var c = this.options.get("dropdownAdapter");
                        this.dropdown = new c(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s); var h = this.options.get("resultsAdapter");
                        this.results = new h(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(t) { u.trigger("selection:update", { data: t }) })), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(t[0], "select2", this), t.data("select2", this) }; return n.Extend(r, n.Observable), r.prototype._generateId = function(t) { return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, r.prototype._placeContainer = function(t) { t.insertAfter(this.$element); var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e) }, r.prototype._resolveWidth = function(t, e) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == e) { var i = this._resolveWidth(t, "style"); return null != i ? i : this._resolveWidth(t, "element") } if ("element" == e) { var r = t.outerWidth(!1); return r <= 0 ? "auto" : r + "px" } if ("style" == e) { var o = t.attr("style"); if ("string" != typeof o) return null; for (var a = o.split(";"), s = 0, l = a.length; s < l; s += 1) { var c = a[s].replace(/\s/g, "").match(n); if (null !== c && c.length >= 1) return c[1] } return null } return "computedstyle" == e ? window.getComputedStyle(t[0]).width : e }, r.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, r.prototype._registerDomEvents = function() { var e = this;
                        this.$element.on("change.select2", (function() { e.dataAdapter.current((function(t) { e.trigger("selection:update", { data: t }) })) })), this.$element.on("focus.select2", (function(t) { e.trigger("focus", t) })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i((function(n) { t.each(n, e._syncA), t.each(n, e._syncS) })), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1)) }, r.prototype._registerDataEvents = function() { var t = this;
                        this.dataAdapter.on("*", (function(e, n) { t.trigger(e, n) })) }, r.prototype._registerSelectionEvents = function() { var e = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", (function() { e.toggleDropdown() })), this.selection.on("focus", (function(t) { e.focus(t) })), this.selection.on("*", (function(i, r) {-1 === t.inArray(i, n) && e.trigger(i, r) })) }, r.prototype._registerDropdownEvents = function() { var t = this;
                        this.dropdown.on("*", (function(e, n) { t.trigger(e, n) })) }, r.prototype._registerResultsEvents = function() { var t = this;
                        this.results.on("*", (function(e, n) { t.trigger(e, n) })) }, r.prototype._registerEvents = function() { var t = this;
                        this.on("open", (function() { t.$container.addClass("select2-container--open") })), this.on("close", (function() { t.$container.removeClass("select2-container--open") })), this.on("enable", (function() { t.$container.removeClass("select2-container--disabled") })), this.on("disable", (function() { t.$container.addClass("select2-container--disabled") })), this.on("blur", (function() { t.$container.removeClass("select2-container--focus") })), this.on("query", (function(e) { t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, (function(n) { t.trigger("results:all", { data: n, query: e }) })) })), this.on("query:append", (function(e) { this.dataAdapter.query(e, (function(n) { t.trigger("results:append", { data: n, query: e }) })) })), this.on("keypress", (function(e) { var n = e.which;
                            t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault()) })) }, r.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, r.prototype._syncSubtree = function(t, e) { var n = !1,
                            i = this; if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) { if (e)
                                if (e.addedNodes && e.addedNodes.length > 0)
                                    for (var r = 0; r < e.addedNodes.length; r++) { e.addedNodes[r].selected && (n = !0) } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current((function(t) { i.trigger("selection:update", { data: t }) })) } }, r.prototype.trigger = function(t, e) { var n = r.__super__.trigger,
                            i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" }; if (void 0 === e && (e = {}), t in i) { var o = i[t],
                                a = { prevented: !1, name: t, args: e }; if (n.call(this, o, a), a.prevented) return void(e.prevented = !0) } n.call(this, t, e) }, r.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, r.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, r.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, r.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, r.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, r.prototype.focus = function(t) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, r.prototype.enable = function(t) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]); var e = !t[0];
                        this.$element.prop("disabled", e) }, r.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var t = []; return this.dataAdapter.current((function(e) { t = e })), t }, r.prototype.val = function(e) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val(); var n = e[0];
                        t.isArray(n) && (n = t.map(n, (function(t) { return t.toString() }))), this.$element.val(n).trigger("change") }, r.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, r.prototype.render = function() { var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(e[0], "element", this.$element), e }, r })), e.define("jquery-mousewheel", ["jquery"], (function(t) { return t })), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(t, e, n, i, r) { if (null == t.fn.select2) { var o = ["open", "close", "destroy"];
                        t.fn.select2 = function(e) { if ("object" == typeof(e = e || {})) return this.each((function() { var i = t.extend(!0, {}, e);
                                new n(t(this), i) })), this; if ("string" == typeof e) { var i, a = Array.prototype.slice.call(arguments, 1); return this.each((function() { var t = r.GetData(this, "select2");
                                    null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = t[e].apply(t, a) })), t.inArray(e, o) > -1 ? this : i } throw new Error("Invalid arguments for Select2: " + e) } } return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n })), { define: e.define, require: e.require } }(),
            n = e.require("jquery.select2"); return t.fn.select2.amd = e, n })),
    function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Raphael = e() : t.Raphael = e() }(window, (function() { return function(t) { var e = {};

            function n(i) { if (e[i]) return e[i].exports; var r = e[i] = { i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = t, n.c = e, n.d = function(t, e, i) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i }) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function(t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var i = Object.create(null); if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(i, r, function(e) { return t[e] }.bind(null, r)); return i }, n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, "a", e), e }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 1) }([function(t, e, n) { var i, r;
            i = [n(2)], void 0 === (r = function(t) {
                function e(i) { if (e.is(i, "function")) return n ? i() : t.on("raphael.DOMload", i); if (e.is(i, L)) return e._engine.create[p](e, i.splice(0, 3 + e.is(i[0], E))).add(i); var r = Array.prototype.slice.call(arguments, 0); if (e.is(r[r.length - 1], "function")) { var o = r.pop(); return n ? o.call(e._engine.create[p](e, r)) : t.on("raphael.DOMload", (function() { o.call(e._engine.create[p](e, r)) })) } return e._engine.create[p](e, arguments) } e.version = "2.3.0", e.eve = t; var n, i, r, o, a = /[, ]+/,
                    s = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
                    l = /\{(\d+)\}/g,
                    c = "hasOwnProperty",
                    h = { doc: document, win: window },
                    u = { was: Object.prototype[c].call(h.win, "Raphael"), is: h.win.Raphael },
                    d = function() { this.ca = this.customAttributes = {} },
                    p = "apply",
                    f = "concat",
                    g = "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                    v = "",
                    m = " ",
                    y = String,
                    b = "split",
                    x = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [b](m),
                    w = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
                    _ = y.prototype.toLowerCase,
                    C = Math,
                    S = C.max,
                    D = C.min,
                    T = C.abs,
                    k = C.pow,
                    A = C.PI,
                    E = "number",
                    L = "array",
                    $ = Object.prototype.toString,
                    I = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                    M = { NaN: 1, Infinity: 1, "-Infinity": 1 },
                    F = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                    N = C.round,
                    O = parseFloat,
                    j = parseInt,
                    P = y.prototype.toUpperCase,
                    R = e._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, class: "" },
                    B = e._availableAnimAttrs = { blur: E, "clip-rect": "csv", cx: E, cy: E, fill: "colour", "fill-opacity": E, "font-size": E, height: E, opacity: E, path: "path", r: E, rx: E, ry: E, stroke: "colour", "stroke-opacity": E, "stroke-width": E, transform: "transform", width: E, x: E, y: E },
                    H = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                    U = { hs: 1, rg: 1 },
                    q = /,?([achlmqrstvxz]),?/gi,
                    W = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                    z = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                    V = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                    Y = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
                    G = function(t, e) { return O(t) - O(e) },
                    X = function(t) { return t },
                    Q = e._rectPath = function(t, e, n, i, r) { return r ? [
                            ["M", t + r, e],
                            ["l", n - 2 * r, 0],
                            ["a", r, r, 0, 0, 1, r, r],
                            ["l", 0, i - 2 * r],
                            ["a", r, r, 0, 0, 1, -r, r],
                            ["l", 2 * r - n, 0],
                            ["a", r, r, 0, 0, 1, -r, -r],
                            ["l", 0, 2 * r - i],
                            ["a", r, r, 0, 0, 1, r, -r],
                            ["z"]
                        ] : [
                            ["M", t, e],
                            ["l", n, 0],
                            ["l", 0, i],
                            ["l", -n, 0],
                            ["z"]
                        ] },
                    J = function(t, e, n, i) { return null == i && (i = n), [
                            ["M", t, e],
                            ["m", 0, -i],
                            ["a", n, i, 0, 1, 1, 0, 2 * i],
                            ["a", n, i, 0, 1, 1, 0, -2 * i],
                            ["z"]
                        ] },
                    K = e._getPath = { path: function(t) { return t.attr("path") }, circle: function(t) { var e = t.attrs; return J(e.cx, e.cy, e.r) }, ellipse: function(t) { var e = t.attrs; return J(e.cx, e.cy, e.rx, e.ry) }, rect: function(t) { var e = t.attrs; return Q(e.x, e.y, e.width, e.height, e.r) }, image: function(t) { var e = t.attrs; return Q(e.x, e.y, e.width, e.height) }, text: function(t) { var e = t._getBBox(); return Q(e.x, e.y, e.width, e.height) }, set: function(t) { var e = t._getBBox(); return Q(e.x, e.y, e.width, e.height) } },
                    Z = e.mapPath = function(t, e) { if (!e) return t; var n, i, r, o, a, s, l; for (r = 0, a = (t = kt(t)).length; r < a; r++)
                            for (o = 1, s = (l = t[r]).length; o < s; o += 2) n = e.x(l[o], l[o + 1]), i = e.y(l[o], l[o + 1]), l[o] = n, l[o + 1] = i; return t }; if (e._g = h, e.type = h.win.SVGAngle || h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) { var tt, et = h.doc.createElement("div"); if (et.innerHTML = '<v:shape adj="1"/>', (tt = et.firstChild).style.behavior = "url(#default#VML)", !tt || "object" != typeof tt.adj) return e.type = v;
                    et = null }

                function nt(t) { if ("function" == typeof t || Object(t) !== t) return t; var e = new t.constructor; for (var n in t) t[c](n) && (e[n] = nt(t[n])); return e } e.svg = !(e.vml = "VML" == e.type), e._Paper = d, e.fn = i = d.prototype = e.prototype, e._id = 0, e.is = function(t, e) { return "finite" == (e = _.call(e)) ? !M[c](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || $.call(t).slice(8, -1).toLowerCase() == e }, e.angle = function(t, n, i, r, o, a) { if (null == o) { var s = t - i,
                            l = n - r; return s || l ? (180 + 180 * C.atan2(-l, -s) / A + 360) % 360 : 0 } return e.angle(t, n, o, a) - e.angle(i, r, o, a) }, e.rad = function(t) { return t % 360 * A / 180 }, e.deg = function(t) { return Math.round(180 * t / A % 360 * 1e3) / 1e3 }, e.snapTo = function(t, n, i) { if (i = e.is(i, "finite") ? i : 10, e.is(t, L)) { for (var r = t.length; r--;)
                            if (T(t[r] - n) <= i) return t[r] } else { var o = n % (t = +t); if (o < i) return n - o; if (o > t - i) return n - o + t } return n }, e.createUUID = (r = /[xy]/g, o = function(t) { var e = 16 * C.random() | 0; return ("x" == t ? e : 3 & e | 8).toString(16) }, function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(r, o).toUpperCase() }), e.setWindow = function(n) { t("raphael.setWindow", e, h.win, n), h.win = n, h.doc = h.win.document, e._engine.initWin && e._engine.initWin(h.win) }; var it = function(t) { if (e.vml) { var n, i = /^\s+|\s+$/g; try { var r = new ActiveXObject("htmlfile");
                                r.write("<body>"), r.close(), n = r.body } catch (t) { n = createPopup().document.body } var o = n.createTextRange();
                            it = ct((function(t) { try { n.style.color = y(t).replace(i, v); var e = o.queryCommandValue("ForeColor"); return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6) } catch (t) { return "none" } })) } else { var a = h.doc.createElement("i");
                            a.title = "Raphaël Colour Picker", a.style.display = "none", h.doc.body.appendChild(a), it = ct((function(t) { return a.style.color = t, h.doc.defaultView.getComputedStyle(a, v).getPropertyValue("color") })) } return it(t) },
                    rt = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
                    ot = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
                    at = function() { return this.hex },
                    st = function(t, n, i) { if (null == n && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, n = t.g, t = t.r), null == n && e.is(t, "string")) { var r = e.getRGB(t);
                            t = r.r, n = r.g, i = r.b } return (t > 1 || n > 1 || i > 1) && (t /= 255, n /= 255, i /= 255), [t, n, i] },
                    lt = function(t, n, i, r) { var o = { r: t *= 255, g: n *= 255, b: i *= 255, hex: e.rgb(t, n, i), toString: at }; return e.is(r, "finite") && (o.opacity = r), o };

                function ct(t, e, n) { return function i() { var r = Array.prototype.slice.call(arguments, 0),
                            o = r.join("␀"),
                            a = i.cache = i.cache || {},
                            s = i.count = i.count || []; return a[c](o) ? (function(t, e) { for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return t.push(t.splice(n, 1)[0]) }(s, o), n ? n(a[o]) : a[o]) : (s.length >= 1e3 && delete a[s.shift()], s.push(o), a[o] = t[p](e, r), n ? n(a[o]) : a[o]) } }

                function ht() { return this.hex }

                function ut(t, e) { for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) { var o = [{ x: +t[i - 2], y: +t[i - 1] }, { x: +t[i], y: +t[i + 1] }, { x: +t[i + 2], y: +t[i + 3] }, { x: +t[i + 4], y: +t[i + 5] }];
                        e ? i ? r - 4 == i ? o[3] = { x: +t[0], y: +t[1] } : r - 2 == i && (o[2] = { x: +t[0], y: +t[1] }, o[3] = { x: +t[2], y: +t[3] }) : o[0] = { x: +t[r - 2], y: +t[r - 1] } : r - 4 == i ? o[3] = o[2] : i || (o[0] = { x: +t[i], y: +t[i + 1] }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y]) } return n } e.color = function(t) { var n; return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (n = e.hsb2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (n = e.hsl2rgb(t), t.r = n.r, t.g = n.g, t.b = n.b, t.hex = n.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (n = e.rgb2hsl(t), t.h = n.h, t.s = n.s, t.l = n.l, n = e.rgb2hsb(t), t.v = n.b) : (t = { hex: "none" }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = at, t }, e.hsb2rgb = function(t, e, n, i) { var r, o, a, s, l; return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, i = t.o, t = t.h), s = (l = n * e) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), r = o = a = n - l, lt(r += [l, s, 0, 0, s, l][t = ~~t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], i) }, e.hsl2rgb = function(t, e, n, i) { var r, o, a, s, l; return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), s = (l = 2 * e * (n < .5 ? n : 1 - n)) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), r = o = a = n - l / 2, lt(r += [l, s, 0, 0, s, l][t = ~~t], o += [s, l, l, s, 0, 0][t], a += [0, 0, s, l, l, s][t], i) }, e.rgb2hsb = function(t, e, n) { var i, r; return t = (n = st(t, e, n))[0], e = n[1], n = n[2], { h: ((0 == (r = (i = S(t, e, n)) - D(t, e, n)) ? null : i == t ? (e - n) / r : i == e ? (n - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360, s: 0 == r ? 0 : r / i, b: i, toString: rt } }, e.rgb2hsl = function(t, e, n) { var i, r, o, a; return t = (n = st(t, e, n))[0], e = n[1], n = n[2], i = ((r = S(t, e, n)) + (o = D(t, e, n))) / 2, { h: ((0 == (a = r - o) ? null : r == t ? (e - n) / a : r == e ? (n - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360, s: 0 == a ? 0 : i < .5 ? a / (2 * i) : a / (2 - 2 * i), l: i, toString: ot } }, e._path2string = function() { return this.join(",").replace(q, "$1") }, e._preload = function(t, e) { var n = h.doc.createElement("img");
                    n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function() { e.call(this), this.onload = null, h.doc.body.removeChild(this) }, n.onerror = function() { h.doc.body.removeChild(this) }, h.doc.body.appendChild(n), n.src = t }, e.getRGB = ct((function(t) { if (!t || (t = y(t)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ht }; if ("none" == t) return { r: -1, g: -1, b: -1, hex: "none", toString: ht };!U[c](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = it(t)); var n, i, r, o, a, s, l = t.match(I); return l ? (l[2] && (r = j(l[2].substring(5), 16), i = j(l[2].substring(3, 5), 16), n = j(l[2].substring(1, 3), 16)), l[3] && (r = j((a = l[3].charAt(3)) + a, 16), i = j((a = l[3].charAt(2)) + a, 16), n = j((a = l[3].charAt(1)) + a, 16)), l[4] && (s = l[4][b](H), n = O(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), i = O(s[1]), "%" == s[1].slice(-1) && (i *= 2.55), r = O(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (o = O(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100)), l[5] ? (s = l[5][b](H), n = O(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), i = O(s[1]), "%" == s[1].slice(-1) && (i *= 2.55), r = O(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (n /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (o = O(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100), e.hsb2rgb(n, i, r, o)) : l[6] ? (s = l[6][b](H), n = O(s[0]), "%" == s[0].slice(-1) && (n *= 2.55), i = O(s[1]), "%" == s[1].slice(-1) && (i *= 2.55), r = O(s[2]), "%" == s[2].slice(-1) && (r *= 2.55), ("deg" == s[0].slice(-3) || "°" == s[0].slice(-1)) && (n /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (o = O(s[3])), s[3] && "%" == s[3].slice(-1) && (o /= 100), e.hsl2rgb(n, i, r, o)) : ((l = { r: n, g: i, b: r, toString: ht }).hex = "#" + (16777216 | r | i << 8 | n << 16).toString(16).slice(1), e.is(o, "finite") && (l.opacity = o), l)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ht } }), e), e.hsb = ct((function(t, n, i) { return e.hsb2rgb(t, n, i).hex })), e.hsl = ct((function(t, n, i) { return e.hsl2rgb(t, n, i).hex })), e.rgb = ct((function(t, e, n) {
                    function i(t) { return t + .5 | 0 } return "#" + (16777216 | i(n) | i(e) << 8 | i(t) << 16).toString(16).slice(1) })), e.getColor = function(t) { var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || .75 },
                        n = this.hsb2rgb(e.h, e.s, e.b); return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), n.hex }, e.getColor.reset = function() { delete this.start }, e.parsePathString = function(t) { if (!t) return null; var n = dt(t); if (n.arr) return bt(n.arr); var i = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
                        r = []; return e.is(t, L) && e.is(t[0], L) && (r = bt(t)), r.length || y(t).replace(W, (function(t, e, n) { var o = [],
                            a = e.toLowerCase(); if (n.replace(V, (function(t, e) { e && o.push(+e) })), "m" == a && o.length > 2 && (r.push([e][f](o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "r" == a) r.push([e][f](o));
                        else
                            for (; o.length >= i[a] && (r.push([e][f](o.splice(0, i[a]))), i[a]);); })), r.toString = e._path2string, n.arr = bt(r), r }, e.parseTransformString = ct((function(t) { if (!t) return null; var n = []; return e.is(t, L) && e.is(t[0], L) && (n = bt(t)), n.length || y(t).replace(z, (function(t, e, i) { var r = [];
                        _.call(e), i.replace(V, (function(t, e) { e && r.push(+e) })), n.push([e][f](r)) })), n.toString = e._path2string, n }), this, (function(t) { if (!t) return t; for (var e = [], n = 0; n < t.length; n++) { for (var i = [], r = 0; r < t[n].length; r++) i.push(t[n][r]);
                        e.push(i) } return e })); var dt = function(t) { var e = dt.ps = dt.ps || {}; return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout((function() { for (var n in e) e[c](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n]) })), e[t] };

                function pt(t, e, n, i, r) { return t * (t * (-3 * e + 9 * n - 9 * i + 3 * r) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n }

                function ft(t, e, n, i, r, o, a, s, l) { null == l && (l = 1); for (var c = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], u = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, p = 0; p < 12; p++) { var f = c * h[p] + c,
                            g = pt(f, t, n, r, a),
                            v = pt(f, e, i, o, s),
                            m = g * g + v * v;
                        d += u[p] * C.sqrt(m) } return c * d }

                function gt(t, e, n, i, r, o, a, s) { if (!(S(t, n) < D(r, a) || D(t, n) > S(r, a) || S(e, i) < D(o, s) || D(e, i) > S(o, s))) { var l = (t - n) * (o - s) - (e - i) * (r - a); if (l) { var c = ((t * i - e * n) * (r - a) - (t - n) * (r * s - o * a)) / l,
                                h = ((t * i - e * n) * (o - s) - (e - i) * (r * s - o * a)) / l,
                                u = +c.toFixed(2),
                                d = +h.toFixed(2); if (!(u < +D(t, n).toFixed(2) || u > +S(t, n).toFixed(2) || u < +D(r, a).toFixed(2) || u > +S(r, a).toFixed(2) || d < +D(e, i).toFixed(2) || d > +S(e, i).toFixed(2) || d < +D(o, s).toFixed(2) || d > +S(o, s).toFixed(2))) return { x: c, y: h } } } }

                function vt(t, n, i) { var r = e.bezierBBox(t),
                        o = e.bezierBBox(n); if (!e.isBBoxIntersect(r, o)) return i ? 0 : []; for (var a = ft.apply(0, t), s = ft.apply(0, n), l = S(~~(a / 5), 1), c = S(~~(s / 5), 1), h = [], u = [], d = {}, p = i ? 0 : [], f = 0; f < l + 1; f++) { var g = e.findDotsAtSegment.apply(e, t.concat(f / l));
                        h.push({ x: g.x, y: g.y, t: f / l }) } for (f = 0; f < c + 1; f++) g = e.findDotsAtSegment.apply(e, n.concat(f / c)), u.push({ x: g.x, y: g.y, t: f / c }); for (f = 0; f < l; f++)
                        for (var v = 0; v < c; v++) { var m = h[f],
                                y = h[f + 1],
                                b = u[v],
                                x = u[v + 1],
                                w = T(y.x - m.x) < .001 ? "y" : "x",
                                _ = T(x.x - b.x) < .001 ? "y" : "x",
                                C = gt(m.x, m.y, y.x, y.y, b.x, b.y, x.x, x.y); if (C) { if (d[C.x.toFixed(4)] == C.y.toFixed(4)) continue;
                                d[C.x.toFixed(4)] = C.y.toFixed(4); var k = m.t + T((C[w] - m[w]) / (y[w] - m[w])) * (y.t - m.t),
                                    A = b.t + T((C[_] - b[_]) / (x[_] - b[_])) * (x.t - b.t);
                                k >= 0 && k <= 1.001 && A >= 0 && A <= 1.001 && (i ? p++ : p.push({ x: C.x, y: C.y, t1: D(k, 1), t2: D(A, 1) })) } }
                    return p }

                function mt(t, n, i) { t = e._path2curve(t), n = e._path2curve(n); for (var r, o, a, s, l, c, h, u, d, p, f = i ? 0 : [], g = 0, v = t.length; g < v; g++) { var m = t[g]; if ("M" == m[0]) r = l = m[1], o = c = m[2];
                        else { "C" == m[0] ? (d = [r, o].concat(m.slice(1)), r = d[6], o = d[7]) : (d = [r, o, r, o, l, c, l, c], r = l, o = c); for (var y = 0, b = n.length; y < b; y++) { var x = n[y]; if ("M" == x[0]) a = h = x[1], s = u = x[2];
                                else { "C" == x[0] ? (p = [a, s].concat(x.slice(1)), a = p[6], s = p[7]) : (p = [a, s, a, s, h, u, h, u], a = h, s = u); var w = vt(d, p, i); if (i) f += w;
                                    else { for (var _ = 0, C = w.length; _ < C; _++) w[_].segment1 = g, w[_].segment2 = y, w[_].bez1 = d, w[_].bez2 = p;
                                        f = f.concat(w) } } } } } return f } e.findDotsAtSegment = function(t, e, n, i, r, o, a, s, l) { var c = 1 - l,
                        h = k(c, 3),
                        u = k(c, 2),
                        d = l * l,
                        p = d * l,
                        f = h * t + 3 * u * l * n + 3 * c * l * l * r + p * a,
                        g = h * e + 3 * u * l * i + 3 * c * l * l * o + p * s,
                        v = t + 2 * l * (n - t) + d * (r - 2 * n + t),
                        m = e + 2 * l * (i - e) + d * (o - 2 * i + e),
                        y = n + 2 * l * (r - n) + d * (a - 2 * r + n),
                        b = i + 2 * l * (o - i) + d * (s - 2 * o + i),
                        x = c * t + l * n,
                        w = c * e + l * i,
                        _ = c * r + l * a,
                        S = c * o + l * s,
                        D = 90 - 180 * C.atan2(v - y, m - b) / A; return (v > y || m < b) && (D += 180), { x: f, y: g, m: { x: v, y: m }, n: { x: y, y: b }, start: { x, y: w }, end: { x: _, y: S }, alpha: D } }, e.bezierBBox = function(t, n, i, r, o, a, s, l) { e.is(t, "array") || (t = [t, n, i, r, o, a, s, l]); var c = Tt.apply(null, t); return { x: c.min.x, y: c.min.y, x2: c.max.x, y2: c.max.y, width: c.max.x - c.min.x, height: c.max.y - c.min.y } }, e.isPointInsideBBox = function(t, e, n) { return e >= t.x && e <= t.x2 && n >= t.y && n <= t.y2 }, e.isBBoxIntersect = function(t, n) { var i = e.isPointInsideBBox; return i(n, t.x, t.y) || i(n, t.x2, t.y) || i(n, t.x, t.y2) || i(n, t.x2, t.y2) || i(t, n.x, n.y) || i(t, n.x2, n.y) || i(t, n.x, n.y2) || i(t, n.x2, n.y2) || (t.x < n.x2 && t.x > n.x || n.x < t.x2 && n.x > t.x) && (t.y < n.y2 && t.y > n.y || n.y < t.y2 && n.y > t.y) }, e.pathIntersection = function(t, e) { return mt(t, e) }, e.pathIntersectionNumber = function(t, e) { return mt(t, e, 1) }, e.isPointInsidePath = function(t, n, i) { var r = e.pathBBox(t); return e.isPointInsideBBox(r, n, i) && mt(t, [
                        ["M", n, i],
                        ["H", r.x2 + 10]
                    ], 1) % 2 == 1 }, e._removedFactory = function(e) { return function() { t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e) } }; var yt = e.pathBBox = function(t) { var e = dt(t); if (e.bbox) return nt(e.bbox); if (!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 }; for (var n, i = 0, r = 0, o = [], a = [], s = 0, l = (t = kt(t)).length; s < l; s++)
                            if ("M" == (n = t[s])[0]) i = n[1], r = n[2], o.push(i), a.push(r);
                            else { var c = Tt(i, r, n[1], n[2], n[3], n[4], n[5], n[6]);
                                o = o[f](c.min.x, c.max.x), a = a[f](c.min.y, c.max.y), i = n[5], r = n[6] } var h = D[p](0, o),
                            u = D[p](0, a),
                            d = S[p](0, o),
                            g = S[p](0, a),
                            v = d - h,
                            m = g - u,
                            y = { x: h, y: u, x2: d, y2: g, width: v, height: m, cx: h + v / 2, cy: u + m / 2 }; return e.bbox = nt(y), y },
                    bt = function(t) { var n = nt(t); return n.toString = e._path2string, n },
                    xt = e._pathToRelative = function(t) { var n = dt(t); if (n.rel) return bt(n.rel);
                        e.is(t, L) && e.is(t && t[0], L) || (t = e.parsePathString(t)); var i = [],
                            r = 0,
                            o = 0,
                            a = 0,
                            s = 0,
                            l = 0; "M" == t[0][0] && (a = r = t[0][1], s = o = t[0][2], l++, i.push(["M", r, o])); for (var c = l, h = t.length; c < h; c++) { var u = i[c] = [],
                                d = t[c]; if (d[0] != _.call(d[0])) switch (u[0] = _.call(d[0]), u[0]) {
                                case "a":
                                    u[1] = d[1], u[2] = d[2], u[3] = d[3], u[4] = d[4], u[5] = d[5], u[6] = +(d[6] - r).toFixed(3), u[7] = +(d[7] - o).toFixed(3); break;
                                case "v":
                                    u[1] = +(d[1] - o).toFixed(3); break;
                                case "m":
                                    a = d[1], s = d[2];
                                default:
                                    for (var p = 1, f = d.length; p < f; p++) u[p] = +(d[p] - (p % 2 ? r : o)).toFixed(3) } else { u = i[c] = [], "m" == d[0] && (a = d[1] + r, s = d[2] + o); for (var g = 0, v = d.length; g < v; g++) i[c][g] = d[g] }
                            var m = i[c].length; switch (i[c][0]) {
                                case "z":
                                    r = a, o = s; break;
                                case "h":
                                    r += +i[c][m - 1]; break;
                                case "v":
                                    o += +i[c][m - 1]; break;
                                default:
                                    r += +i[c][m - 2], o += +i[c][m - 1] } } return i.toString = e._path2string, n.rel = bt(i), i },
                    wt = e._pathToAbsolute = function(t) { var n = dt(t); if (n.abs) return bt(n.abs); if (e.is(t, L) && e.is(t && t[0], L) || (t = e.parsePathString(t)), !t || !t.length) return [
                            ["M", 0, 0]
                        ]; var i = [],
                            r = 0,
                            o = 0,
                            a = 0,
                            s = 0,
                            l = 0; "M" == t[0][0] && (a = r = +t[0][1], s = o = +t[0][2], l++, i[0] = ["M", r, o]); for (var c, h, u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), d = l, p = t.length; d < p; d++) { if (i.push(c = []), (h = t[d])[0] != P.call(h[0])) switch (c[0] = P.call(h[0]), c[0]) {
                                    case "A":
                                        c[1] = h[1], c[2] = h[2], c[3] = h[3], c[4] = h[4], c[5] = h[5], c[6] = +(h[6] + r), c[7] = +(h[7] + o); break;
                                    case "V":
                                        c[1] = +h[1] + o; break;
                                    case "H":
                                        c[1] = +h[1] + r; break;
                                    case "R":
                                        for (var g = [r, o][f](h.slice(1)), v = 2, m = g.length; v < m; v++) g[v] = +g[v] + r, g[++v] = +g[v] + o;
                                        i.pop(), i = i[f](ut(g, u)); break;
                                    case "M":
                                        a = +h[1] + r, s = +h[2] + o;
                                    default:
                                        for (v = 1, m = h.length; v < m; v++) c[v] = +h[v] + (v % 2 ? r : o) } else if ("R" == h[0]) g = [r, o][f](h.slice(1)), i.pop(), i = i[f](ut(g, u)), c = ["R"][f](h.slice(-2));
                                else
                                    for (var y = 0, b = h.length; y < b; y++) c[y] = h[y]; switch (c[0]) {
                                case "Z":
                                    r = a, o = s; break;
                                case "H":
                                    r = c[1]; break;
                                case "V":
                                    o = c[1]; break;
                                case "M":
                                    a = c[c.length - 2], s = c[c.length - 1];
                                default:
                                    r = c[c.length - 2], o = c[c.length - 1] } } return i.toString = e._path2string, n.abs = bt(i), i },
                    _t = function(t, e, n, i) { return [t, e, n, i, n, i] },
                    Ct = function(t, e, n, i, r, o) { return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * o + 2 / 3 * i, r, o] },
                    St = function(t, e, n, i, r, o, a, s, l, c) { var h, u = 120 * A / 180,
                            d = A / 180 * (+r || 0),
                            p = [],
                            g = ct((function(t, e, n) { return { x: t * C.cos(n) - e * C.sin(n), y: t * C.sin(n) + e * C.cos(n) } })); if (c) k = c[0], E = c[1], S = c[2], D = c[3];
                        else { t = (h = g(t, e, -d)).x, e = h.y, s = (h = g(s, l, -d)).x, l = h.y, C.cos(A / 180 * r), C.sin(A / 180 * r); var v = (t - s) / 2,
                                m = (e - l) / 2,
                                y = v * v / (n * n) + m * m / (i * i);
                            y > 1 && (n *= y = C.sqrt(y), i *= y); var x = n * n,
                                w = i * i,
                                _ = (o == a ? -1 : 1) * C.sqrt(T((x * w - x * m * m - w * v * v) / (x * m * m + w * v * v))),
                                S = _ * n * m / i + (t + s) / 2,
                                D = _ * -i * v / n + (e + l) / 2,
                                k = C.asin(((e - D) / i).toFixed(9)),
                                E = C.asin(((l - D) / i).toFixed(9));
                            (k = t < S ? A - k : k) < 0 && (k = 2 * A + k), (E = s < S ? A - E : E) < 0 && (E = 2 * A + E), a && k > E && (k -= 2 * A), !a && E > k && (E -= 2 * A) } var L = E - k; if (T(L) > u) { var $ = E,
                                I = s,
                                M = l;
                            E = k + u * (a && E > k ? 1 : -1), s = S + n * C.cos(E), l = D + i * C.sin(E), p = St(s, l, n, i, r, 0, a, I, M, [E, $, S, D]) } L = E - k; var F = C.cos(k),
                            N = C.sin(k),
                            O = C.cos(E),
                            j = C.sin(E),
                            P = C.tan(L / 4),
                            R = 4 / 3 * n * P,
                            B = 4 / 3 * i * P,
                            H = [t, e],
                            U = [t + R * N, e - B * F],
                            q = [s + R * j, l - B * O],
                            W = [s, l]; if (U[0] = 2 * H[0] - U[0], U[1] = 2 * H[1] - U[1], c) return [U, q, W][f](p); for (var z = [], V = 0, Y = (p = [U, q, W][f](p).join()[b](",")).length; V < Y; V++) z[V] = V % 2 ? g(p[V - 1], p[V], d).y : g(p[V], p[V + 1], d).x; return z },
                    Dt = function(t, e, n, i, r, o, a, s, l) { var c = 1 - l; return { x: k(c, 3) * t + 3 * k(c, 2) * l * n + 3 * c * l * l * r + k(l, 3) * a, y: k(c, 3) * e + 3 * k(c, 2) * l * i + 3 * c * l * l * o + k(l, 3) * s } },
                    Tt = ct((function(t, e, n, i, r, o, a, s) { var l, c = r - 2 * n + t - (a - 2 * r + n),
                            h = 2 * (n - t) - 2 * (r - n),
                            u = t - n,
                            d = (-h + C.sqrt(h * h - 4 * c * u)) / 2 / c,
                            f = (-h - C.sqrt(h * h - 4 * c * u)) / 2 / c,
                            g = [e, s],
                            v = [t, a]; return T(d) > "1e12" && (d = .5), T(f) > "1e12" && (f = .5), d > 0 && d < 1 && (l = Dt(t, e, n, i, r, o, a, s, d), v.push(l.x), g.push(l.y)), f > 0 && f < 1 && (l = Dt(t, e, n, i, r, o, a, s, f), v.push(l.x), g.push(l.y)), c = o - 2 * i + e - (s - 2 * o + i), u = e - i, d = (-(h = 2 * (i - e) - 2 * (o - i)) + C.sqrt(h * h - 4 * c * u)) / 2 / c, f = (-h - C.sqrt(h * h - 4 * c * u)) / 2 / c, T(d) > "1e12" && (d = .5), T(f) > "1e12" && (f = .5), d > 0 && d < 1 && (l = Dt(t, e, n, i, r, o, a, s, d), v.push(l.x), g.push(l.y)), f > 0 && f < 1 && (l = Dt(t, e, n, i, r, o, a, s, f), v.push(l.x), g.push(l.y)), { min: { x: D[p](0, v), y: D[p](0, g) }, max: { x: S[p](0, v), y: S[p](0, g) } } })),
                    kt = e._path2curve = ct((function(t, e) { var n = !e && dt(t); if (!e && n.curve) return bt(n.curve); for (var i = wt(t), r = e && wt(e), o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, a = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = function(t, e, n) { var i, r; if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch (!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0]) {
                                    case "M":
                                        e.X = t[1], e.Y = t[2]; break;
                                    case "A":
                                        t = ["C"][f](St[p](0, [e.x, e.y][f](t.slice(1)))); break;
                                    case "S":
                                        "C" == n || "S" == n ? (i = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (i = e.x, r = e.y), t = ["C", i, r][f](t.slice(1)); break;
                                    case "T":
                                        "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][f](Ct(e.x, e.y, e.qx, e.qy, t[1], t[2])); break;
                                    case "Q":
                                        e.qx = t[1], e.qy = t[2], t = ["C"][f](Ct(e.x, e.y, t[1], t[2], t[3], t[4])); break;
                                    case "L":
                                        t = ["C"][f](_t(e.x, e.y, t[1], t[2])); break;
                                    case "H":
                                        t = ["C"][f](_t(e.x, e.y, t[1], e.y)); break;
                                    case "V":
                                        t = ["C"][f](_t(e.x, e.y, e.x, t[1])); break;
                                    case "Z":
                                        t = ["C"][f](_t(e.x, e.y, e.X, e.Y)) } return t }, l = function(t, e) { if (t[e].length > 7) { t[e].shift(); for (var n = t[e]; n.length;) h[e] = "A", r && (u[e] = "A"), t.splice(e++, 0, ["C"][f](n.splice(0, 6)));
                                    t.splice(e, 1), m = S(i.length, r && r.length || 0) } }, c = function(t, e, n, o, a) { t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", o.x, o.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], m = S(i.length, r && r.length || 0)) }, h = [], u = [], d = "", g = "", v = 0, m = S(i.length, r && r.length || 0); v < m; v++) { i[v] && (d = i[v][0]), "C" != d && (h[v] = d, v && (g = h[v - 1])), i[v] = s(i[v], o, g), "A" != h[v] && "C" == d && (h[v] = "C"), l(i, v), r && (r[v] && (d = r[v][0]), "C" != d && (u[v] = d, v && (g = u[v - 1])), r[v] = s(r[v], a, g), "A" != u[v] && "C" == d && (u[v] = "C"), l(r, v)), c(i, r, o, a, v), c(r, i, a, o, v); var y = i[v],
                                b = r && r[v],
                                x = y.length,
                                w = r && b.length;
                            o.x = y[x - 2], o.y = y[x - 1], o.bx = O(y[x - 4]) || o.x, o.by = O(y[x - 3]) || o.y, a.bx = r && (O(b[w - 4]) || a.x), a.by = r && (O(b[w - 3]) || a.y), a.x = r && b[w - 2], a.y = r && b[w - 1] } return r || (n.curve = bt(i)), r ? [i, r] : i }), null, bt),
                    At = (e._parseDots = ct((function(t) { for (var n = [], i = 0, r = t.length; i < r; i++) { var o = {},
                                a = t[i].match(/^([^:]*):?([\d\.]*)/); if (o.color = e.getRGB(a[1]), o.color.error) return null;
                            o.opacity = o.color.opacity, o.color = o.color.hex, a[2] && (o.offset = a[2] + "%"), n.push(o) } for (i = 1, r = n.length - 1; i < r; i++)
                            if (!n[i].offset) { for (var s = O(n[i - 1].offset || 0), l = 0, c = i + 1; c < r; c++)
                                    if (n[c].offset) { l = n[c].offset; break } l || (l = 100, c = r); for (var h = ((l = O(l)) - s) / (c - i + 1); i < c; i++) s += h, n[i].offset = s + "%" } return n })), e._tear = function(t, e) { t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next) }),
                    Et = (e._tofront = function(t, e) { e.top !== t && (At(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t) }, e._toback = function(t, e) { e.bottom !== t && (At(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t) }, e._insertafter = function(t, e, n) { At(t, n), e == n.top && (n.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t }, e._insertbefore = function(t, e, n) { At(t, n), e == n.bottom && (n.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e }, e.toMatrix = function(t, e) { var n = yt(t),
                            i = { _: { transform: v }, getBBox: function() { return n } }; return Lt(i, e), i.matrix }),
                    Lt = (e.transformPath = function(t, e) { return Z(t, Et(t, e)) }, e._extractTransform = function(t, n) { if (null == n) return t._.transform;
                        n = y(n).replace(/\.{3}|\u2026/g, t._.transform || v); var i, r, o = e.parseTransformString(n),
                            a = 0,
                            s = 1,
                            l = 1,
                            c = t._,
                            h = new Mt; if (c.transform = o || [], o)
                            for (var u = 0, d = o.length; u < d; u++) { var p, f, g, m, b, x = o[u],
                                    w = x.length,
                                    _ = y(x[0]).toLowerCase(),
                                    C = x[0] != _,
                                    S = C ? h.invert() : 0; "t" == _ && 3 == w ? C ? (p = S.x(0, 0), f = S.y(0, 0), g = S.x(x[1], x[2]), m = S.y(x[1], x[2]), h.translate(g - p, m - f)) : h.translate(x[1], x[2]) : "r" == _ ? 2 == w ? (b = b || t.getBBox(1), h.rotate(x[1], b.x + b.width / 2, b.y + b.height / 2), a += x[1]) : 4 == w && (C ? (g = S.x(x[2], x[3]), m = S.y(x[2], x[3]), h.rotate(x[1], g, m)) : h.rotate(x[1], x[2], x[3]), a += x[1]) : "s" == _ ? 2 == w || 3 == w ? (b = b || t.getBBox(1), h.scale(x[1], x[w - 1], b.x + b.width / 2, b.y + b.height / 2), s *= x[1], l *= x[w - 1]) : 5 == w && (C ? (g = S.x(x[3], x[4]), m = S.y(x[3], x[4]), h.scale(x[1], x[2], g, m)) : h.scale(x[1], x[2], x[3], x[4]), s *= x[1], l *= x[2]) : "m" == _ && 7 == w && h.add(x[1], x[2], x[3], x[4], x[5], x[6]), c.dirtyT = 1, t.matrix = h } t.matrix = h, c.sx = s, c.sy = l, c.deg = a, c.dx = i = h.e, c.dy = r = h.f, 1 == s && 1 == l && !a && c.bbox ? (c.bbox.x += +i, c.bbox.y += +r) : c.dirtyT = 1 }),
                    $t = function(t) { var e = t[0]; switch (e.toLowerCase()) {
                            case "t":
                                return [e, 0, 0];
                            case "m":
                                return [e, 1, 0, 0, 1, 0, 0];
                            case "r":
                                return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                            case "s":
                                return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1] } },
                    It = e._equaliseTransform = function(t, n) { n = y(n).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || []; for (var i, r, o, a, s = S(t.length, n.length), l = [], c = [], h = 0; h < s; h++) { if (o = t[h] || $t(n[h]), a = n[h] || $t(o), o[0] != a[0] || "r" == o[0].toLowerCase() && (o[2] != a[2] || o[3] != a[3]) || "s" == o[0].toLowerCase() && (o[3] != a[3] || o[4] != a[4])) return; for (l[h] = [], c[h] = [], i = 0, r = S(o.length, a.length); i < r; i++) i in o && (l[h][i] = o[i]), i in a && (c[h][i] = a[i]) } return { from: l, to: c } };

                function Mt(t, e, n, i, r, o) { null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +i, this.e = +r, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) } e._getContainer = function(t, n, i, r) { var o; if (null != (o = null != r || e.is(t, "object") ? t : h.doc.getElementById(t))) return o.tagName ? null == n ? { container: o, width: o.style.pixelWidth || o.offsetWidth, height: o.style.pixelHeight || o.offsetHeight } : { container: o, width: n, height: i } : { container: 1, x: t, y: n, width: i, height: r } }, e.pathToRelative = xt, e._engine = {}, e.path2curve = kt, e.matrix = function(t, e, n, i, r, o) { return new Mt(t, e, n, i, r, o) },
                    function(t) {
                        function n(t) { return t[0] * t[0] + t[1] * t[1] }

                        function i(t) { var e = C.sqrt(n(t));
                            t[0] && (t[0] /= e), t[1] && (t[1] /= e) } t.add = function(t, e, n, i, r, o) { var a, s, l, c, h = [
                                    [],
                                    [],
                                    []
                                ],
                                u = [
                                    [this.a, this.c, this.e],
                                    [this.b, this.d, this.f],
                                    [0, 0, 1]
                                ],
                                d = [
                                    [t, n, r],
                                    [e, i, o],
                                    [0, 0, 1]
                                ]; for (t && t instanceof Mt && (d = [
                                    [t.a, t.c, t.e],
                                    [t.b, t.d, t.f],
                                    [0, 0, 1]
                                ]), a = 0; a < 3; a++)
                                for (s = 0; s < 3; s++) { for (c = 0, l = 0; l < 3; l++) c += u[a][l] * d[l][s];
                                    h[a][s] = c } this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2], this.f = h[1][2] }, t.invert = function() { var t = this,
                                e = t.a * t.d - t.b * t.c; return new Mt(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e) }, t.clone = function() { return new Mt(this.a, this.b, this.c, this.d, this.e, this.f) }, t.translate = function(t, e) { this.add(1, 0, 0, 1, t, e) }, t.scale = function(t, e, n, i) { null == e && (e = t), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(t, 0, 0, e, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i) }, t.rotate = function(t, n, i) { t = e.rad(t), n = n || 0, i = i || 0; var r = +C.cos(t).toFixed(9),
                                o = +C.sin(t).toFixed(9);
                            this.add(r, o, -o, r, n, i), this.add(1, 0, 0, 1, -n, -i) }, t.x = function(t, e) { return t * this.a + e * this.c + this.e }, t.y = function(t, e) { return t * this.b + e * this.d + this.f }, t.get = function(t) { return +this[y.fromCharCode(97 + t)].toFixed(4) }, t.toString = function() { return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, t.toFilter = function() { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, t.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, t.split = function() { var t = {};
                            t.dx = this.e, t.dy = this.f; var r = [
                                [this.a, this.c],
                                [this.b, this.d]
                            ];
                            t.scalex = C.sqrt(n(r[0])), i(r[0]), t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear], t.scaley = C.sqrt(n(r[1])), i(r[1]), t.shear /= t.scaley; var o = -r[0][1],
                                a = r[1][1]; return a < 0 ? (t.rotate = e.deg(C.acos(a)), o < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(C.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t }, t.toTransformString = function(t) { var e = t || this[b](); return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : v) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : v) + (e.rotate ? "r" + [e.rotate, 0, 0] : v)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] } }(Mt.prototype); for (var Ft = function() { this.returnValue = !1 }, Nt = function() { return this.originalEvent.preventDefault() }, Ot = function() { this.cancelBubble = !0 }, jt = function() { return this.originalEvent.stopPropagation() }, Pt = function(t) { var e = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                            n = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft; return { x: t.clientX + n, y: t.clientY + e } }, Rt = h.doc.addEventListener ? function(t, e, n, i) { var r = function(t) { var e = Pt(t); return n.call(i, t, e.x, e.y) }; if (t.addEventListener(e, r, !1), g && w[e]) { var o = function(e) { for (var r = Pt(e), o = e, a = 0, s = e.targetTouches && e.targetTouches.length; a < s; a++)
                                    if (e.targetTouches[a].target == t) {
                                        (e = e.targetTouches[a]).originalEvent = o, e.preventDefault = Nt, e.stopPropagation = jt; break } return n.call(i, e, r.x, r.y) };
                            t.addEventListener(w[e], o, !1) } return function() { return t.removeEventListener(e, r, !1), g && w[e] && t.removeEventListener(w[e], o, !1), !0 } } : h.doc.attachEvent ? function(t, e, n, i) { var r = function(t) { t = t || h.win.event; var e = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                                r = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                                o = t.clientX + r,
                                a = t.clientY + e; return t.preventDefault = t.preventDefault || Ft, t.stopPropagation = t.stopPropagation || Ot, n.call(i, t, o, a) }; return t.attachEvent("on" + e, r),
                            function() { return t.detachEvent("on" + e, r), !0 } } : void 0, Bt = [], Ht = function(e) { for (var n, i = e.clientX, r = e.clientY, o = h.doc.documentElement.scrollTop || h.doc.body.scrollTop, a = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft, s = Bt.length; s--;) { if (n = Bt[s], g && e.touches) { for (var l, c = e.touches.length; c--;)
                                    if ((l = e.touches[c]).identifier == n.el._drag.id) { i = l.clientX, r = l.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault(); break } } else e.preventDefault(); var u, d = n.el.node,
                                p = d.nextSibling,
                                f = d.parentNode,
                                v = d.style.display;
                            h.win.opera && f.removeChild(d), d.style.display = "none", u = n.el.paper.getElementByPoint(i, r), d.style.display = v, h.win.opera && (p ? f.insertBefore(d, p) : f.appendChild(d)), u && t("raphael.drag.over." + n.el.id, n.el, u), i += a, r += o, t("raphael.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, r - n.el._drag.y, i, r, e) } }, Ut = function(n) { e.unmousemove(Ht).unmouseup(Ut); for (var i, r = Bt.length; r--;)(i = Bt[r]).el._drag = {}, t("raphael.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n);
                        Bt = [] }, qt = e.el = {}, Wt = x.length; Wt--;) ! function(t) { e[t] = qt[t] = function(n, i) { return e.is(n, "function") && (this.events = this.events || [], this.events.push({ name: t, f: n, unbind: Rt(this.shape || this.node || h.doc, t, n, i || this) })), this }, e["un" + t] = qt["un" + t] = function(n) { for (var i = this.events || [], r = i.length; r--;) i[r].name != t || !e.is(n, "undefined") && i[r].f != n || (i[r].unbind(), i.splice(r, 1), !i.length && delete this.events); return this } }(x[Wt]);
                qt.data = function(n, i) { var r = Y[this.id] = Y[this.id] || {}; if (0 == arguments.length) return r; if (1 == arguments.length) { if (e.is(n, "object")) { for (var o in n) n[c](o) && this.data(o, n[o]); return this } return t("raphael.data.get." + this.id, this, r[n], n), r[n] } return r[n] = i, t("raphael.data.set." + this.id, this, i, n), this }, qt.removeData = function(t) { return null == t ? delete Y[this.id] : Y[this.id] && delete Y[this.id][t], this }, qt.getData = function() { return nt(Y[this.id] || {}) }, qt.hover = function(t, e, n, i) { return this.mouseover(t, n).mouseout(e, i || n) }, qt.unhover = function(t, e) { return this.unmouseover(t).unmouseout(e) }; var zt = [];

                function Vt() { return this.x + m + this.y + m + this.width + " × " + this.height } qt.drag = function(n, i, r, o, a, s) {
                    function l(l) {
                        (l.originalEvent || l).preventDefault(); var c = l.clientX,
                            u = l.clientY,
                            d = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                            p = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft; if (this._drag.id = l.identifier, g && l.touches)
                            for (var f, v = l.touches.length; v--;)
                                if (f = l.touches[v], this._drag.id = f.identifier, f.identifier == this._drag.id) { c = f.clientX, u = f.clientY; break } this._drag.x = c + p, this._drag.y = u + d, !Bt.length && e.mousemove(Ht).mouseup(Ut), Bt.push({ el: this, move_scope: o, start_scope: a, end_scope: s }), i && t.on("raphael.drag.start." + this.id, i), n && t.on("raphael.drag.move." + this.id, n), r && t.on("raphael.drag.end." + this.id, r), t("raphael.drag.start." + this.id, a || o || this, this._drag.x, this._drag.y, l) } return this._drag = {}, zt.push({ el: this, start: l }), this.mousedown(l), this }, qt.onDragOver = function(e) { e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id) }, qt.undrag = function() { for (var n = zt.length; n--;) zt[n].el == this && (this.unmousedown(zt[n].start), zt.splice(n, 1), t.unbind("raphael.drag.*." + this.id));!zt.length && e.unmousemove(Ht).unmouseup(Ut), Bt = [] }, i.circle = function(t, n, i) { var r = e._engine.circle(this, t || 0, n || 0, i || 0); return this.__set__ && this.__set__.push(r), r }, i.rect = function(t, n, i, r, o) { var a = e._engine.rect(this, t || 0, n || 0, i || 0, r || 0, o || 0); return this.__set__ && this.__set__.push(a), a }, i.ellipse = function(t, n, i, r) { var o = e._engine.ellipse(this, t || 0, n || 0, i || 0, r || 0); return this.__set__ && this.__set__.push(o), o }, i.path = function(t) { t && !e.is(t, "string") && !e.is(t[0], L) && (t += v); var n = e._engine.path(e.format[p](e, arguments), this); return this.__set__ && this.__set__.push(n), n }, i.image = function(t, n, i, r, o) { var a = e._engine.image(this, t || "about:blank", n || 0, i || 0, r || 0, o || 0); return this.__set__ && this.__set__.push(a), a }, i.text = function(t, n, i) { var r = e._engine.text(this, t || 0, n || 0, y(i)); return this.__set__ && this.__set__.push(r), r }, i.set = function(t) {!e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length)); var n = new ue(t); return this.__set__ && this.__set__.push(n), n.paper = this, n.type = "set", n }, i.setStart = function(t) { this.__set__ = t || this.set() }, i.setFinish = function(t) { var e = this.__set__; return delete this.__set__, e }, i.getSize = function() { var t = this.canvas.parentNode; return { width: t.offsetWidth, height: t.offsetHeight } }, i.setSize = function(t, n) { return e._engine.setSize.call(this, t, n) }, i.setViewBox = function(t, n, i, r, o) { return e._engine.setViewBox.call(this, t, n, i, r, o) }, i.top = i.bottom = null, i.raphael = e, i.getElementByPoint = function(t, e) { var n, i, r, o, a, s, l, c = this.canvas,
                        u = h.doc.elementFromPoint(t, e); if (h.win.opera && "svg" == u.tagName) { var d = (i = (n = c).getBoundingClientRect(), o = (r = n.ownerDocument).body, s = (a = r.documentElement).clientTop || o.clientTop || 0, l = a.clientLeft || o.clientLeft || 0, { y: i.top + (h.win.pageYOffset || a.scrollTop || o.scrollTop) - s, x: i.left + (h.win.pageXOffset || a.scrollLeft || o.scrollLeft) - l }),
                            p = c.createSVGRect();
                        p.x = t - d.x, p.y = e - d.y, p.width = p.height = 1; var f = c.getIntersectionList(p, null);
                        f.length && (u = f[f.length - 1]) } if (!u) return null; for (; u.parentNode && u != c.parentNode && !u.raphael;) u = u.parentNode; return u == this.canvas.parentNode && (u = c), u && u.raphael ? this.getById(u.raphaelid) : null }, i.getElementsByBBox = function(t) { var n = this.set(); return this.forEach((function(i) { e.isBBoxIntersect(i.getBBox(), t) && n.push(i) })), n }, i.getById = function(t) { for (var e = this.bottom; e;) { if (e.id == t) return e;
                        e = e.next } return null }, i.forEach = function(t, e) { for (var n = this.bottom; n;) { if (!1 === t.call(e, n)) return this;
                        n = n.next } return this }, i.getElementsByPoint = function(t, e) { var n = this.set(); return this.forEach((function(i) { i.isPointInside(t, e) && n.push(i) })), n }, qt.isPointInside = function(t, n) { var i = this.realPath = K[this.type](this); return this.attr("transform") && this.attr("transform").length && (i = e.transformPath(i, this.attr("transform"))), e.isPointInsidePath(i, t, n) }, qt.getBBox = function(t) { if (this.removed) return {}; var e = this._; return t ? (!e.dirty && e.bboxwt || (this.realPath = K[this.type](this), e.bboxwt = yt(this.realPath), e.bboxwt.toString = Vt, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = K[this.type](this)), e.bbox = yt(Z(this.realPath, this.matrix)), e.bbox.toString = Vt, e.dirty = e.dirtyT = 0), e.bbox) }, qt.clone = function() { if (this.removed) return null; var t = this.paper[this.type]().attr(this.attr()); return this.__set__ && this.__set__.push(t), t }, qt.glow = function(t) { if ("text" == this.type) return null; var e = { width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || !1, opacity: null == t.opacity ? .5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" },
                        n = e.width / 2,
                        i = this.paper,
                        r = i.set(),
                        o = this.realPath || K[this.type](this);
                    o = this.matrix ? Z(o, this.matrix) : o; for (var a = 1; a < n + 1; a++) r.push(i.path(o).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / n * a).toFixed(3), opacity: +(e.opacity / n).toFixed(3) })); return r.insertBefore(this).translate(e.offsetx, e.offsety) }; var Yt = function(t, n, i, r, o, a, s, l, c) { return null == c ? ft(t, n, i, r, o, a, s, l) : e.findDotsAtSegment(t, n, i, r, o, a, s, l, function(t, e, n, i, r, o, a, s, l) { if (!(l < 0 || ft(t, e, n, i, r, o, a, s) < l)) { var c, h = .5,
                                    u = 1 - h; for (c = ft(t, e, n, i, r, o, a, s, u); T(c - l) > .01;) c = ft(t, e, n, i, r, o, a, s, u += (c < l ? 1 : -1) * (h /= 2)); return u } }(t, n, i, r, o, a, s, l, c)) },
                    Gt = function(t, n) { return function(i, r, o) { for (var a, s, l, c, h, u = "", d = {}, p = 0, f = 0, g = (i = kt(i)).length; f < g; f++) { if ("M" == (l = i[f])[0]) a = +l[1], s = +l[2];
                                else { if (p + (c = Yt(a, s, l[1], l[2], l[3], l[4], l[5], l[6])) > r) { if (n && !d.start) { if (u += ["C" + (h = Yt(a, s, l[1], l[2], l[3], l[4], l[5], l[6], r - p)).start.x, h.start.y, h.m.x, h.m.y, h.x, h.y], o) return u;
                                            d.start = u, u = ["M" + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, l[5], l[6]].join(), p += c, a = +l[5], s = +l[6]; continue } if (!t && !n) return { x: (h = Yt(a, s, l[1], l[2], l[3], l[4], l[5], l[6], r - p)).x, y: h.y, alpha: h.alpha } } p += c, a = +l[5], s = +l[6] } u += l.shift() + l } return d.end = u, (h = t ? p : n ? d : e.findDotsAtSegment(a, s, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h } },
                    Xt = Gt(1),
                    Qt = Gt(),
                    Jt = Gt(0, 1);
                e.getTotalLength = Xt, e.getPointAtLength = Qt, e.getSubpath = function(t, e, n) { if (this.getTotalLength(t) - n < 1e-6) return Jt(t, e).end; var i = Jt(t, n, 1); return e ? Jt(i, e).end : i }, qt.getTotalLength = function() { var t = this.getPath(); if (t) return this.node.getTotalLength ? this.node.getTotalLength() : Xt(t) }, qt.getPointAtLength = function(t) { var e = this.getPath(); if (e) return Qt(e, t) }, qt.getPath = function() { var t, n = e._getPath[this.type]; if ("text" != this.type && "set" != this.type) return n && (t = n(this)), t }, qt.getSubpath = function(t, n) { var i = this.getPath(); if (i) return e.getSubpath(i, t, n) }; var Kt = e.easing_formulas = { linear: function(t) { return t }, "<": function(t) { return k(t, 1.7) }, ">": function(t) { return k(t, .48) }, "<>": function(t) { var e = .48 - t / 1.04,
                            n = C.sqrt(.1734 + e * e),
                            i = n - e,
                            r = -n - e,
                            o = k(T(i), 1 / 3) * (i < 0 ? -1 : 1) + k(T(r), 1 / 3) * (r < 0 ? -1 : 1) + .5; return 3 * (1 - o) * o * o + o * o * o }, backIn: function(t) { var e = 1.70158; return t * t * ((e + 1) * t - e) }, backOut: function(t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, elastic: function(t) { return t == !!t ? t : k(2, -10 * t) * C.sin(2 * A * (t - .075) / .3) + 1 }, bounce: function(t) { var e = 7.5625,
                            n = 2.75; return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375 } };
                Kt.easeIn = Kt["ease-in"] = Kt["<"], Kt.easeOut = Kt["ease-out"] = Kt[">"], Kt.easeInOut = Kt["ease-in-out"] = Kt["<>"], Kt["back-in"] = Kt.backIn, Kt["back-out"] = Kt.backOut; var Zt = [],
                    te = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { setTimeout(t, 16) },
                    ee = function() { for (var n = +new Date, i = 0; i < Zt.length; i++) { var r = Zt[i]; if (!r.el.removed && !r.paused) { var o, a, s = n - r.start,
                                    l = r.ms,
                                    h = r.easing,
                                    u = r.from,
                                    d = r.diff,
                                    p = r.to,
                                    g = (r.t, r.el),
                                    v = {},
                                    y = {}; if (r.initstatus ? (s = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * l, r.status = r.initstatus, delete r.initstatus, r.stop && Zt.splice(i--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (s / l)) / r.anim.top, !(s < 0))
                                    if (s < l) { var b = h(s / l); for (var x in u)
                                            if (u[c](x)) { switch (B[x]) {
                                                    case E:
                                                        o = +u[x] + b * l * d[x]; break;
                                                    case "colour":
                                                        o = "rgb(" + [ne(N(u[x].r + b * l * d[x].r)), ne(N(u[x].g + b * l * d[x].g)), ne(N(u[x].b + b * l * d[x].b))].join(",") + ")"; break;
                                                    case "path":
                                                        o = []; for (var w = 0, _ = u[x].length; w < _; w++) { o[w] = [u[x][w][0]]; for (var C = 1, S = u[x][w].length; C < S; C++) o[w][C] = +u[x][w][C] + b * l * d[x][w][C];
                                                            o[w] = o[w].join(m) } o = o.join(m); break;
                                                    case "transform":
                                                        if (d[x].real)
                                                            for (o = [], w = 0, _ = u[x].length; w < _; w++)
                                                                for (o[w] = [u[x][w][0]], C = 1, S = u[x][w].length; C < S; C++) o[w][C] = u[x][w][C] + b * l * d[x][w][C];
                                                        else { var D = function(t) { return +u[x][t] + b * l * d[x][t] };
                                                            o = [
                                                                ["m", D(0), D(1), D(2), D(3), D(4), D(5)]
                                                            ] } break;
                                                    case "csv":
                                                        if ("clip-rect" == x)
                                                            for (o = [], w = 4; w--;) o[w] = +u[x][w] + b * l * d[x][w]; break;
                                                    default:
                                                        var T = [][f](u[x]); for (o = [], w = g.paper.customAttributes[x].length; w--;) o[w] = +T[w] + b * l * d[x][w] } v[x] = o } g.attr(v),
                                            function(e, n, i) { setTimeout((function() { t("raphael.anim.frame." + e, n, i) })) }(g.id, g, r.anim) } else { if (function(n, i, r) { setTimeout((function() { t("raphael.anim.frame." + i.id, i, r), t("raphael.anim.finish." + i.id, i, r), e.is(n, "function") && n.call(i) })) }(r.callback, g, r.anim), g.attr(p), Zt.splice(i--, 1), r.repeat > 1 && !r.next) { for (a in p) p[c](a) && (y[a] = r.totalOrigin[a]);
                                            r.el.attr(y), oe(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1) } r.next && !r.stop && oe(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat) } } } Zt.length && te(ee) },
                    ne = function(t) { return t > 255 ? 255 : t < 0 ? 0 : t };

                function ie(t, e, n, i, r, o) { var a = 3 * e,
                        s = 3 * (i - e) - a,
                        l = 1 - a - s,
                        c = 3 * n,
                        h = 3 * (r - n) - c,
                        u = 1 - c - h;

                    function d(t) { return ((l * t + s) * t + a) * t } return function(t, e) { var n = function(t, e) { var n, i, r, o, c, h; for (r = t, h = 0; h < 8; h++) { if (o = d(r) - t, T(o) < e) return r; if (T(c = (3 * l * r + 2 * s) * r + a) < 1e-6) break;
                                r -= o / c } if ((r = t) < (n = 0)) return n; if (r > (i = 1)) return i; for (; n < i;) { if (o = d(r), T(o - t) < e) return r;
                                t > o ? n = r : i = r, r = (i - n) / 2 + n } return r }(t, e); return ((u * n + h) * n + c) * n }(t, 1 / (200 * o)) }

                function re(t, e) { var n = [],
                        i = {}; if (this.ms = e, this.times = 1, t) { for (var r in t) t[c](r) && (i[O(r)] = t[r], n.push(O(r)));
                        n.sort(G) } this.anim = i, this.top = n[n.length - 1], this.percents = n }

                function oe(n, i, r, o, s, l) { r = O(r); var h, u, d, p, g, v, m = n.ms,
                        x = {},
                        w = {},
                        _ = {}; if (o)
                        for (S = 0, D = Zt.length; S < D; S++) { var C = Zt[S]; if (C.el.id == i.id && C.anim == n) { C.percent != r ? (Zt.splice(S, 1), d = 1) : u = C, i.attr(C.totalOrigin); break } } else o = +w; for (var S = 0, D = n.percents.length; S < D; S++) { if (n.percents[S] == r || n.percents[S] > o * n.top) { r = n.percents[S], g = n.percents[S - 1] || 0, m = m / n.top * (r - g), p = n.percents[S + 1], h = n.anim[r]; break } o && i.attr(n.anim[n.percents[S]]) } if (h) { if (u) u.initstatus = o, u.start = new Date - u.ms * o;
                        else { for (var T in h)
                                if (h[c](T) && (B[c](T) || i.paper.customAttributes[c](T))) switch (x[T] = i.attr(T), null == x[T] && (x[T] = R[T]), w[T] = h[T], B[T]) {
                                    case E:
                                        _[T] = (w[T] - x[T]) / m; break;
                                    case "colour":
                                        x[T] = e.getRGB(x[T]); var k = e.getRGB(w[T]);
                                        _[T] = { r: (k.r - x[T].r) / m, g: (k.g - x[T].g) / m, b: (k.b - x[T].b) / m }; break;
                                    case "path":
                                        var A = kt(x[T], w[T]),
                                            L = A[1]; for (x[T] = A[0], _[T] = [], S = 0, D = x[T].length; S < D; S++) { _[T][S] = [0]; for (var $ = 1, I = x[T][S].length; $ < I; $++) _[T][S][$] = (L[S][$] - x[T][S][$]) / m } break;
                                    case "transform":
                                        var M = i._,
                                            N = It(M[T], w[T]); if (N)
                                            for (x[T] = N.from, w[T] = N.to, _[T] = [], _[T].real = !0, S = 0, D = x[T].length; S < D; S++)
                                                for (_[T][S] = [x[T][S][0]], $ = 1, I = x[T][S].length; $ < I; $++) _[T][S][$] = (w[T][S][$] - x[T][S][$]) / m;
                                        else { var j = i.matrix || new Mt,
                                                P = { _: { transform: M.transform }, getBBox: function() { return i.getBBox(1) } };
                                            x[T] = [j.a, j.b, j.c, j.d, j.e, j.f], Lt(P, w[T]), w[T] = P._.transform, _[T] = [(P.matrix.a - j.a) / m, (P.matrix.b - j.b) / m, (P.matrix.c - j.c) / m, (P.matrix.d - j.d) / m, (P.matrix.e - j.e) / m, (P.matrix.f - j.f) / m] } break;
                                    case "csv":
                                        var H = y(h[T])[b](a),
                                            U = y(x[T])[b](a); if ("clip-rect" == T)
                                            for (x[T] = U, _[T] = [], S = U.length; S--;) _[T][S] = (H[S] - x[T][S]) / m;
                                        w[T] = H; break;
                                    default:
                                        for (H = [][f](h[T]), U = [][f](x[T]), _[T] = [], S = i.paper.customAttributes[T].length; S--;) _[T][S] = ((H[S] || 0) - (U[S] || 0)) / m }
                            var q = h.easing,
                                W = e.easing_formulas[q]; if (!W)
                                if ((W = y(q).match(F)) && 5 == W.length) { var z = W;
                                    W = function(t) { return ie(t, +z[1], +z[2], +z[3], +z[4], m) } } else W = X; if (C = { anim: n, percent: r, timestamp: v = h.start || n.start || +new Date, start: v + (n.del || 0), status: 0, initstatus: o || 0, stop: !1, ms: m, easing: W, from: x, diff: _, to: w, el: i, callback: h.callback, prev: g, next: p, repeat: l || n.times, origin: i.attr(), totalOrigin: s }, Zt.push(C), o && !u && !d && (C.stop = !0, C.start = new Date - m * o, 1 == Zt.length)) return ee();
                            d && (C.start = new Date - C.ms * o), 1 == Zt.length && te(ee) } t("raphael.anim.start." + i.id, i, n) } }

                function ae(t) { for (var e = 0; e < Zt.length; e++) Zt[e].el.paper == t && Zt.splice(e--, 1) } qt.animateWith = function(t, n, i, r, o, a) { if (this.removed) return a && a.call(this), this; var s = i instanceof re ? i : e.animation(i, r, o, a);
                    oe(s, this, s.percents[0], null, this.attr()); for (var l = 0, c = Zt.length; l < c; l++)
                        if (Zt[l].anim == n && Zt[l].el == t) { Zt[c - 1].start = Zt[l].start; break } return this }, qt.onAnimation = function(e) { return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this }, re.prototype.delay = function(t) { var e = new re(this.anim, this.ms); return e.times = this.times, e.del = +t || 0, e }, re.prototype.repeat = function(t) { var e = new re(this.anim, this.ms); return e.del = this.del, e.times = C.floor(S(t, 0)) || 1, e }, e.animation = function(t, n, i, r) { if (t instanceof re) return t;!e.is(i, "function") && i || (r = r || i || null, i = null), t = Object(t), n = +n || 0; var o, a, s = {}; for (a in t) t[c](a) && O(a) != a && O(a) + "%" != a && (o = !0, s[a] = t[a]); if (o) return i && (s.easing = i), r && (s.callback = r), new re({ 100: s }, n); if (r) { var l = 0; for (var h in t) { var u = j(h);
                            t[c](h) && u > l && (l = u) }!t[l += "%"].callback && (t[l].callback = r) } return new re(t, n) }, qt.animate = function(t, n, i, r) { if (this.removed) return r && r.call(this), this; var o = t instanceof re ? t : e.animation(t, n, i, r); return oe(o, this, o.percents[0], null, this.attr()), this }, qt.setTime = function(t, e) { return t && null != e && this.status(t, D(e, t.ms) / t.ms), this }, qt.status = function(t, e) { var n, i, r = [],
                        o = 0; if (null != e) return oe(t, this, -1, D(e, 1)), this; for (n = Zt.length; o < n; o++)
                        if ((i = Zt[o]).el.id == this.id && (!t || i.anim == t)) { if (t) return i.status;
                            r.push({ anim: i.anim, status: i.status }) } return t ? 0 : r }, qt.pause = function(e) { for (var n = 0; n < Zt.length; n++) Zt[n].el.id != this.id || e && Zt[n].anim != e || !1 !== t("raphael.anim.pause." + this.id, this, Zt[n].anim) && (Zt[n].paused = !0); return this }, qt.resume = function(e) { for (var n = 0; n < Zt.length; n++)
                        if (Zt[n].el.id == this.id && (!e || Zt[n].anim == e)) { var i = Zt[n];!1 !== t("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status)) } return this }, qt.stop = function(e) { for (var n = 0; n < Zt.length; n++) Zt[n].el.id != this.id || e && Zt[n].anim != e || !1 !== t("raphael.anim.stop." + this.id, this, Zt[n].anim) && Zt.splice(n--, 1); return this }, t.on("raphael.remove", ae), t.on("raphael.clear", ae), qt.toString = function() { return "Raphaël’s object" }; var se, le, ce, he, ue = function(t) { if (this.items = [], this.length = 0, this.type = "set", t)
                            for (var e = 0, n = t.length; e < n; e++) !t[e] || t[e].constructor != qt.constructor && t[e].constructor != ue || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++) },
                    de = ue.prototype; for (var pe in de.push = function() { for (var t, e, n = 0, i = arguments.length; n < i; n++) !(t = arguments[n]) || t.constructor != qt.constructor && t.constructor != ue || (this[e = this.items.length] = this.items[e] = t, this.length++); return this }, de.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, de.forEach = function(t, e) { for (var n = 0, i = this.items.length; n < i; n++)
                            if (!1 === t.call(e, this.items[n], n)) return this; return this }, qt) qt[c](pe) && (de[pe] = function(t) { return function() { var e = arguments; return this.forEach((function(n) { n[t][p](n, e) })) } }(pe)); return de.attr = function(t, n) { if (t && e.is(t, L) && e.is(t[0], "object"))
                            for (var i = 0, r = t.length; i < r; i++) this.items[i].attr(t[i]);
                        else
                            for (var o = 0, a = this.items.length; o < a; o++) this.items[o].attr(t, n); return this }, de.clear = function() { for (; this.length;) this.pop() }, de.splice = function(t, e, n) { t = t < 0 ? S(this.length + t, 0) : t, e = S(0, D(this.length - t, e)); var i, r = [],
                            o = [],
                            a = []; for (i = 2; i < arguments.length; i++) a.push(arguments[i]); for (i = 0; i < e; i++) o.push(this[t + i]); for (; i < this.length - t; i++) r.push(this[t + i]); var s = a.length; for (i = 0; i < s + r.length; i++) this.items[t + i] = this[t + i] = i < s ? a[i] : r[i - s]; for (i = this.items.length = this.length -= e - s; this[i];) delete this[i++]; return new ue(o) }, de.exclude = function(t) { for (var e = 0, n = this.length; e < n; e++)
                            if (this[e] == t) return this.splice(e, 1), !0 }, de.animate = function(t, n, i, r) {
                        (e.is(i, "function") || !i) && (r = i || null); var o, a, s = this.items.length,
                            l = s,
                            c = this; if (!s) return this;
                        r && (a = function() {!--s && r.call(c) }), i = e.is(i, "string") ? i : a; var h = e.animation(t, n, i, a); for (o = this.items[--l].animate(h); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(o, h, h), this.items[l] && !this.items[l].removed || s--; return this }, de.insertAfter = function(t) { for (var e = this.items.length; e--;) this.items[e].insertAfter(t); return this }, de.getBBox = function() { for (var t = [], e = [], n = [], i = [], r = this.items.length; r--;)
                            if (!this.items[r].removed) { var o = this.items[r].getBBox();
                                t.push(o.x), e.push(o.y), n.push(o.x + o.width), i.push(o.y + o.height) } return { x: t = D[p](0, t), y: e = D[p](0, e), x2: n = S[p](0, n), y2: i = S[p](0, i), width: n - t, height: i - e } }, de.clone = function(t) { t = this.paper.set(); for (var e = 0, n = this.items.length; e < n; e++) t.push(this.items[e].clone()); return t }, de.toString = function() { return "Raphaël‘s set" }, de.glow = function(t) { var e = this.paper.set(); return this.forEach((function(n, i) { var r = n.glow(t);
                            null != r && r.forEach((function(t, n) { e.push(t) })) })), e }, de.isPointInside = function(t, e) { var n = !1; return this.forEach((function(i) { if (i.isPointInside(t, e)) return n = !0, !1 })), n }, e.registerFont = function(t) { if (!t.face) return t;
                        this.fonts = this.fonts || {}; var e = { w: t.w, face: {}, glyphs: {} },
                            n = t.face["font-family"]; for (var i in t.face) t.face[c](i) && (e.face[i] = t.face[i]); if (this.fonts[n] ? this.fonts[n].push(e) : this.fonts[n] = [e], !t.svg)
                            for (var r in e.face["units-per-em"] = j(t.face["units-per-em"], 10), t.glyphs)
                                if (t.glyphs[c](r)) { var o = t.glyphs[r]; if (e.glyphs[r] = { w: o.w, k: {}, d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, (function(t) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" } [t] || "M" })) + "z" }, o.k)
                                        for (var a in o.k) o[c](a) && (e.glyphs[r].k[a] = o.k[a]) } return t }, i.getFont = function(t, n, i, r) { if (r = r || "normal", i = i || "normal", n = +n || { normal: 400, bold: 700, lighter: 300, bolder: 800 } [n] || 400, e.fonts) { var o, a = e.fonts[t]; if (!a) { var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, v) + "(\\s|$)", "i"); for (var l in e.fonts)
                                    if (e.fonts[c](l) && s.test(l)) { a = e.fonts[l]; break } } if (a)
                                for (var h = 0, u = a.length; h < u && ((o = a[h]).face["font-weight"] != n || o.face["font-style"] != i && o.face["font-style"] || o.face["font-stretch"] != r); h++); return o } }, i.print = function(t, n, i, r, o, s, l, c) { s = s || "middle", l = S(D(l || 0, 1), -1), c = S(D(c || 1, 3), 1); var h, u = y(i)[b](v),
                            d = 0,
                            p = 0,
                            f = v; if (e.is(r, "string") && (r = this.getFont(r)), r) { h = (o || 16) / r.face["units-per-em"]; for (var g = r.face.bbox[b](a), m = +g[0], x = g[3] - g[1], w = 0, _ = +g[1] + ("baseline" == s ? x + +r.face.descent : x / 2), C = 0, T = u.length; C < T; C++) { if ("\n" == u[C]) d = 0, A = 0, p = 0, w += x * c;
                                else { var k = p && r.glyphs[u[C - 1]] || {},
                                        A = r.glyphs[u[C]];
                                    d += p ? (k.w || r.w) + (k.k && k.k[u[C]] || 0) + r.w * l : 0, p = 1 } A && A.d && (f += e.transformPath(A.d, ["t", d * h, w * h, "s", h, h, m, _, "t", (t - m) / h, (n - _) / h])) } } return this.path(f).attr({ fill: "#000", stroke: "none" }) }, i.add = function(t) { if (e.is(t, "array"))
                            for (var n, i = this.set(), r = 0, o = t.length; r < o; r++) n = t[r] || {}, s[c](n.type) && i.push(this[n.type]().attr(n)); return i }, e.format = function(t, n) { var i = e.is(n, L) ? [0][f](n) : arguments; return t && e.is(t, "string") && i.length - 1 && (t = t.replace(l, (function(t, e) { return null == i[++e] ? v : i[e] }))), t || v }, e.fullfill = (se = /\{([^\}]+)\}/g, le = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, e) { return String(t).replace(se, (function(t, n) { return function(t, e, n) { var i = n; return e.replace(le, (function(t, e, n, r, o) { e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i())) })), i = (null == i || i == n ? t : i) + "" }(t, n, e) })) }), e.ninja = function() { if (u.was) h.win.Raphael = u.is;
                        else { window.Raphael = void 0; try { delete window.Raphael } catch (t) {} } return e }, e.st = de, t.on("raphael.DOMload", (function() { n = !0 })), null == (ce = document).readyState && ce.addEventListener && (ce.addEventListener("DOMContentLoaded", he = function() { ce.removeEventListener("DOMContentLoaded", he, !1), ce.readyState = "complete" }, !1), ce.readyState = "loading"),
                    function t() { /in/.test(ce.readyState) ? setTimeout(t, 9) : e.eve("raphael.DOMload") }(), e }.apply(e, i)) || (t.exports = r) }, function(t, e, n) { var i, r;
            i = [n(0), n(3), n(4)], void 0 === (r = function(t) { return t }.apply(e, i)) || (t.exports = r) }, function(t, e, n) { var i, r, o, a, s, l, c, h, u, d, p, f, g, v;
            a = "hasOwnProperty", s = /[\.\/]/, l = /\s*,\s*/, c = function(t, e) { return t - e }, h = { n: {} }, u = function() { for (var t = 0, e = this.length; t < e; t++)
                    if (void 0 !== this[t]) return this[t] }, d = function() { for (var t = this.length; --t;)
                    if (void 0 !== this[t]) return this[t] }, p = Object.prototype.toString, f = String, g = Array.isArray || function(t) { return t instanceof Array || "[object Array]" == p.call(t) }, (v = function(t, e) { var n, i = o,
                    a = Array.prototype.slice.call(arguments, 2),
                    s = v.listeners(t),
                    l = 0,
                    h = [],
                    p = {},
                    f = [],
                    g = r;
                f.firstDefined = u, f.lastDefined = d, r = t, o = 0; for (var m = 0, y = s.length; m < y; m++) "zIndex" in s[m] && (h.push(s[m].zIndex), s[m].zIndex < 0 && (p[s[m].zIndex] = s[m])); for (h.sort(c); h[l] < 0;)
                    if (n = p[h[l++]], f.push(n.apply(e, a)), o) return o = i, f; for (m = 0; m < y; m++)
                    if ("zIndex" in (n = s[m]))
                        if (n.zIndex == h[l]) { if (f.push(n.apply(e, a)), o) break;
                            do { if ((n = p[h[++l]]) && f.push(n.apply(e, a)), o) break } while (n) } else p[n.zIndex] = n;
                else if (f.push(n.apply(e, a)), o) break; return o = i, r = g, f })._events = h, v.listeners = function(t) { var e, n, i, r, o, a, l, c, u = g(t) ? t : t.split(s),
                    d = h,
                    p = [d],
                    f = []; for (r = 0, o = u.length; r < o; r++) { for (c = [], a = 0, l = p.length; a < l; a++)
                        for (n = [(d = p[a].n)[u[r]], d["*"]], i = 2; i--;)(e = n[i]) && (c.push(e), f = f.concat(e.f || []));
                    p = c } return f }, v.separator = function(t) { t ? (t = "[" + (t = f(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", s = new RegExp(t)) : s = /[\.\/]/ }, v.on = function(t, e) { if ("function" != typeof e) return function() {}; for (var n = g(t) ? g(t[0]) ? t : [t] : f(t).split(l), i = 0, r = n.length; i < r; i++) ! function(t) { for (var n, i = g(t) ? t : f(t).split(s), r = h, o = 0, a = i.length; o < a; o++) r = (r = r.n).hasOwnProperty(i[o]) && r[i[o]] || (r[i[o]] = { n: {} }); for (r.f = r.f || [], o = 0, a = r.f.length; o < a; o++)
                        if (r.f[o] == e) { n = !0; break }! n && r.f.push(e) }(n[i]); return function(t) {+t == +t && (e.zIndex = +t) } }, v.f = function(t) { var e = [].slice.call(arguments, 1); return function() { v.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0))) } }, v.stop = function() { o = 1 }, v.nt = function(t) { var e = g(r) ? r.join(".") : r; return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e }, v.nts = function() { return g(r) ? r : r.split(s) }, v.off = v.unbind = function(t, e) { if (t) { var n = g(t) ? g(t[0]) ? t : [t] : f(t).split(l); if (n.length > 1)
                        for (var i = 0, r = n.length; i < r; i++) v.off(n[i], e);
                    else { n = g(t) ? t : f(t).split(s); var o, c, u, d, p, m = [h]; for (i = 0, r = n.length; i < r; i++)
                            for (d = 0; d < m.length; d += u.length - 2) { if (u = [d, 1], o = m[d].n, "*" != n[i]) o[n[i]] && u.push(o[n[i]]);
                                else
                                    for (c in o) o[a](c) && u.push(o[c]);
                                m.splice.apply(m, u) }
                        for (i = 0, r = m.length; i < r; i++)
                            for (o = m[i]; o.n;) { if (e) { if (o.f) { for (d = 0, p = o.f.length; d < p; d++)
                                            if (o.f[d] == e) { o.f.splice(d, 1); break }! o.f.length && delete o.f } for (c in o.n)
                                        if (o.n[a](c) && o.n[c].f) { var y = o.n[c].f; for (d = 0, p = y.length; d < p; d++)
                                                if (y[d] == e) { y.splice(d, 1); break }! y.length && delete o.n[c].f } } else
                                    for (c in delete o.f, o.n) o.n[a](c) && o.n[c].f && delete o.n[c].f;
                                o = o.n } } } else v._events = h = { n: {} } }, v.once = function(t, e) { var n = function() { return v.off(t, n), e.apply(this, arguments) }; return v.on(t, n) }, v.version = "0.5.0", v.toString = function() { return "You are running Eve 0.5.0" }, t.exports ? t.exports = v : void 0 === (i = function() { return v }.apply(e, [])) || (t.exports = i) }, function(t, e, n) { var i, r;
            i = [n(0)], void 0 === (r = function(t) { if (!t || t.svg) { var e = "hasOwnProperty",
                        n = String,
                        i = parseFloat,
                        r = parseInt,
                        o = Math,
                        a = o.max,
                        s = o.abs,
                        l = o.pow,
                        c = /[, ]+/,
                        h = t.eve,
                        u = "",
                        d = " ",
                        p = "http://www.w3.org/1999/xlink",
                        f = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
                        g = {};
                    t.toString = function() { return "Your browser supports SVG.\nYou are running Raphaël " + this.version }; var v = function(i, r) { if (r)
                                for (var o in "string" == typeof i && (i = v(i)), r) r[e](o) && ("xlink:" == o.substring(0, 6) ? i.setAttributeNS(p, o.substring(6), n(r[o])) : i.setAttribute(o, n(r[o])));
                            else(i = t._g.doc.createElementNS("http://www.w3.org/2000/svg", i)).style && (i.style.webkitTapHighlightColor = "rgba(0,0,0,0)"); return i },
                        m = function(e, r) { var c = "linear",
                                h = e.id + r,
                                d = .5,
                                p = .5,
                                f = e.node,
                                g = e.paper,
                                m = f.style,
                                b = t._g.doc.getElementById(h); if (!b) { if (r = (r = n(r).replace(t._radial_gradient, (function(t, e, n) { if (c = "radial", e && n) { d = i(e); var r = 2 * ((p = i(n)) > .5) - 1;
                                            l(d - .5, 2) + l(p - .5, 2) > .25 && (p = o.sqrt(.25 - l(d - .5, 2)) * r + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * r) } return u }))).split(/\s*\-\s*/), "linear" == c) { var x = r.shift(); if (x = -i(x), isNaN(x)) return null; var w = [0, 0, o.cos(t.rad(x)), o.sin(t.rad(x))],
                                        _ = 1 / (a(s(w[2]), s(w[3])) || 1);
                                    w[2] *= _, w[3] *= _, w[2] < 0 && (w[0] = -w[2], w[2] = 0), w[3] < 0 && (w[1] = -w[3], w[3] = 0) } var C = t._parseDots(r); if (!C) return null; if (h = h.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && h != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) { b = v(c + "Gradient", { id: h }), e.gradient = b, v(b, "radial" == c ? { fx: d, fy: p } : { x1: w[0], y1: w[1], x2: w[2], y2: w[3], gradientTransform: e.matrix.invert() }), g.defs.appendChild(b); for (var S = 0, D = C.length; S < D; S++) b.appendChild(v("stop", { offset: C[S].offset ? C[S].offset : S ? "100%" : "0%", "stop-color": C[S].color || "#fff", "stop-opacity": isFinite(C[S].opacity) ? C[S].opacity : 1 })) } } return v(f, { fill: y(h), opacity: 1, "fill-opacity": 1 }), m.fill = u, m.opacity = 1, m.fillOpacity = 1, 1 },
                        y = function(t) { if ((e = document.documentMode) && (9 === e || 10 === e)) return "url('#" + t + "')"; var e, n = document.location; return "url('" + n.protocol + "//" + n.host + n.pathname + n.search + "#" + t + "')" },
                        b = function(t) { var e = t.getBBox(1);
                            v(t.pattern, { patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")" }) },
                        x = function(i, r, o) { if ("path" == i.type) { for (var a, s, l, c, h, d = n(r).toLowerCase().split("-"), p = i.paper, m = o ? "end" : "start", y = i.node, b = i.attrs, x = b["stroke-width"], w = d.length, _ = "classic", C = 3, S = 3, D = 5; w--;) switch (d[w]) {
                                    case "block":
                                    case "classic":
                                    case "oval":
                                    case "diamond":
                                    case "open":
                                    case "none":
                                        _ = d[w]; break;
                                    case "wide":
                                        S = 5; break;
                                    case "narrow":
                                        S = 2; break;
                                    case "long":
                                        C = 5; break;
                                    case "short":
                                        C = 2 }
                                if ("open" == _ ? (C += 2, S += 2, D += 2, l = 1, c = o ? 4 : 1, h = { fill: "none", stroke: b.stroke }) : (c = l = C / 2, h = { fill: b.stroke, stroke: "none" }), i._.arrows ? o ? (i._.arrows.endPath && g[i._.arrows.endPath]--, i._.arrows.endMarker && g[i._.arrows.endMarker]--) : (i._.arrows.startPath && g[i._.arrows.startPath]--, i._.arrows.startMarker && g[i._.arrows.startMarker]--) : i._.arrows = {}, "none" != _) { var T = "raphael-marker-" + _,
                                        k = "raphael-marker-" + m + _ + C + S + "-obj" + i.id;
                                    t._g.doc.getElementById(T) ? g[T]++ : (p.defs.appendChild(v(v("path"), { "stroke-linecap": "round", d: f[_], id: T })), g[T] = 1); var A, E = t._g.doc.getElementById(k);
                                    E ? (g[k]++, A = E.getElementsByTagName("use")[0]) : (E = v(v("marker"), { id: k, markerHeight: S, markerWidth: C, orient: "auto", refX: c, refY: S / 2 }), A = v(v("use"), { "xlink:href": "#" + T, transform: (o ? "rotate(180 " + C / 2 + " " + S / 2 + ") " : u) + "scale(" + C / D + "," + S / D + ")", "stroke-width": (1 / ((C / D + S / D) / 2)).toFixed(4) }), E.appendChild(A), p.defs.appendChild(E), g[k] = 1), v(A, h); var L = l * ("diamond" != _ && "oval" != _);
                                    o ? (a = i._.arrows.startdx * x || 0, s = t.getTotalLength(b.path) - L * x) : (a = L * x, s = t.getTotalLength(b.path) - (i._.arrows.enddx * x || 0)), (h = {})["marker-" + m] = "url(#" + k + ")", (s || a) && (h.d = t.getSubpath(b.path, a, s)), v(y, h), i._.arrows[m + "Path"] = T, i._.arrows[m + "Marker"] = k, i._.arrows[m + "dx"] = L, i._.arrows[m + "Type"] = _, i._.arrows[m + "String"] = r } else o ? (a = i._.arrows.startdx * x || 0, s = t.getTotalLength(b.path) - a) : (a = 0, s = t.getTotalLength(b.path) - (i._.arrows.enddx * x || 0)), i._.arrows[m + "Path"] && v(y, { d: t.getSubpath(b.path, a, s) }), delete i._.arrows[m + "Path"], delete i._.arrows[m + "Marker"], delete i._.arrows[m + "dx"], delete i._.arrows[m + "Type"], delete i._.arrows[m + "String"]; for (h in g)
                                    if (g[e](h) && !g[h]) { var $ = t._g.doc.getElementById(h);
                                        $ && $.parentNode.removeChild($) } } },
                        w = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
                        _ = function(t, e, i) { if (e = w[n(e).toLowerCase()]) { for (var r = t.attrs["stroke-width"] || "1", o = { round: r, square: r, butt: 0 } [t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, a = [], s = e.length; s--;) a[s] = e[s] * r + (s % 2 ? 1 : -1) * o;
                                v(t.node, { "stroke-dasharray": a.join(",") }) } else v(t.node, { "stroke-dasharray": "none" }) },
                        C = function(i, o) { var l = i.node,
                                h = i.attrs,
                                d = l.style.visibility; for (var f in l.style.visibility = "hidden", o)
                                if (o[e](f)) { if (!t._availableAttrs[e](f)) continue; var g = o[f]; switch (h[f] = g, f) {
                                        case "blur":
                                            i.blur(g); break;
                                        case "title":
                                            var y = l.getElementsByTagName("title"); if (y.length && (y = y[0])) y.firstChild.nodeValue = g;
                                            else { y = v("title"); var w = t._g.doc.createTextNode(g);
                                                y.appendChild(w), l.appendChild(y) } break;
                                        case "href":
                                        case "target":
                                            var C = l.parentNode; if ("a" != C.tagName.toLowerCase()) { var D = v("a");
                                                C.insertBefore(D, l), D.appendChild(l), C = D } "target" == f ? C.setAttributeNS(p, "show", "blank" == g ? "new" : g) : C.setAttributeNS(p, f, g); break;
                                        case "cursor":
                                            l.style.cursor = g; break;
                                        case "transform":
                                            i.transform(g); break;
                                        case "arrow-start":
                                            x(i, g); break;
                                        case "arrow-end":
                                            x(i, g, 1); break;
                                        case "clip-rect":
                                            var T = n(g).split(c); if (4 == T.length) { i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode); var k = v("clipPath"),
                                                    A = v("rect");
                                                k.id = t.createUUID(), v(A, { x: T[0], y: T[1], width: T[2], height: T[3] }), k.appendChild(A), i.paper.defs.appendChild(k), v(l, { "clip-path": "url(#" + k.id + ")" }), i.clip = A } if (!g) { var E = l.getAttribute("clip-path"); if (E) { var L = t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, u));
                                                    L && L.parentNode.removeChild(L), v(l, { "clip-path": u }), delete i.clip } } break;
                                        case "path":
                                            "path" == i.type && (v(l, { d: g ? h.path = t._pathToAbsolute(g) : "M0,0" }), i._.dirty = 1, i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1))); break;
                                        case "width":
                                            if (l.setAttribute(f, g), i._.dirty = 1, !h.fx) break;
                                            f = "x", g = h.x;
                                        case "x":
                                            h.fx && (g = -h.x - (h.width || 0));
                                        case "rx":
                                            if ("rx" == f && "rect" == i.type) break;
                                        case "cx":
                                            l.setAttribute(f, g), i.pattern && b(i), i._.dirty = 1; break;
                                        case "height":
                                            if (l.setAttribute(f, g), i._.dirty = 1, !h.fy) break;
                                            f = "y", g = h.y;
                                        case "y":
                                            h.fy && (g = -h.y - (h.height || 0));
                                        case "ry":
                                            if ("ry" == f && "rect" == i.type) break;
                                        case "cy":
                                            l.setAttribute(f, g), i.pattern && b(i), i._.dirty = 1; break;
                                        case "r":
                                            "rect" == i.type ? v(l, { rx: g, ry: g }) : l.setAttribute(f, g), i._.dirty = 1; break;
                                        case "src":
                                            "image" == i.type && l.setAttributeNS(p, "href", g); break;
                                        case "stroke-width":
                                            1 == i._.sx && 1 == i._.sy || (g /= a(s(i._.sx), s(i._.sy)) || 1), l.setAttribute(f, g), h["stroke-dasharray"] && _(i, h["stroke-dasharray"], o), i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1)); break;
                                        case "stroke-dasharray":
                                            _(i, g, o); break;
                                        case "fill":
                                            var $ = n(g).match(t._ISURL); if ($) { k = v("pattern"); var I = v("image");
                                                k.id = t.createUUID(), v(k, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), v(I, { x: 0, y: 0, "xlink:href": $[1] }), k.appendChild(I),
                                                    function(e) { t._preload($[1], (function() { var t = this.offsetWidth,
                                                                n = this.offsetHeight;
                                                            v(e, { width: t, height: n }), v(I, { width: t, height: n }) })) }(k), i.paper.defs.appendChild(k), v(l, { fill: "url(#" + k.id + ")" }), i.pattern = k, i.pattern && b(i); break } var M = t.getRGB(g); if (M.error) { if (("circle" == i.type || "ellipse" == i.type || "r" != n(g).charAt()) && m(i, g)) { if ("opacity" in h || "fill-opacity" in h) { var F = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u)); if (F) { var N = F.getElementsByTagName("stop");
                                                            v(N[N.length - 1], { "stop-opacity": ("opacity" in h ? h.opacity : 1) * ("fill-opacity" in h ? h["fill-opacity"] : 1) }) } } h.gradient = g, h.fill = "none"; break } } else delete o.gradient, delete h.gradient, !t.is(h.opacity, "undefined") && t.is(o.opacity, "undefined") && v(l, { opacity: h.opacity }), !t.is(h["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && v(l, { "fill-opacity": h["fill-opacity"] });
                                            M[e]("opacity") && v(l, { "fill-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity });
                                        case "stroke":
                                            M = t.getRGB(g), l.setAttribute(f, M.hex), "stroke" == f && M[e]("opacity") && v(l, { "stroke-opacity": M.opacity > 1 ? M.opacity / 100 : M.opacity }), "stroke" == f && i._.arrows && ("startString" in i._.arrows && x(i, i._.arrows.startString), "endString" in i._.arrows && x(i, i._.arrows.endString, 1)); break;
                                        case "gradient":
                                            ("circle" == i.type || "ellipse" == i.type || "r" != n(g).charAt()) && m(i, g); break;
                                        case "opacity":
                                            h.gradient && !h[e]("stroke-opacity") && v(l, { "stroke-opacity": g > 1 ? g / 100 : g });
                                        case "fill-opacity":
                                            if (h.gradient) {
                                                (F = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u))) && (N = F.getElementsByTagName("stop"), v(N[N.length - 1], { "stop-opacity": g })); break }
                                        default:
                                            "font-size" == f && (g = r(g, 10) + "px"); var O = f.replace(/(\-.)/g, (function(t) { return t.substring(1).toUpperCase() }));
                                            l.style[O] = g, i._.dirty = 1, l.setAttribute(f, g) } } S(i, o), l.style.visibility = d },
                        S = function(i, o) { if ("text" == i.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) { var a = i.attrs,
                                    s = i.node,
                                    l = s.firstChild ? r(t._g.doc.defaultView.getComputedStyle(s.firstChild, u).getPropertyValue("font-size"), 10) : 10; if (o[e]("text")) { for (a.text = o.text; s.firstChild;) s.removeChild(s.firstChild); for (var c, h = n(o.text).split("\n"), d = [], p = 0, f = h.length; p < f; p++) c = v("tspan"), p && v(c, { dy: 1.2 * l, x: a.x }), c.appendChild(t._g.doc.createTextNode(h[p])), s.appendChild(c), d[p] = c } else
                                    for (p = 0, f = (d = s.getElementsByTagName("tspan")).length; p < f; p++) p ? v(d[p], { dy: 1.2 * l, x: a.x }) : v(d[0], { dy: 0 });
                                v(s, { x: a.x, y: a.y }), i._.dirty = 1; var g = i._getBBox(),
                                    m = a.y - (g.y + g.height / 2);
                                m && t.is(m, "finite") && v(d[0], { dy: m }) } },
                        D = function(t) { return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t },
                        T = function(e, n) { this[0] = this.node = e, e.raphael = !0, this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = n, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null },
                        k = t.el;
                    T.prototype = k, k.constructor = T, t._engine.path = function(t, e) { var n = v("path");
                        e.canvas && e.canvas.appendChild(n); var i = new T(n, e); return i.type = "path", C(i, { fill: "none", stroke: "#000", path: t }), i }, k.rotate = function(t, e, r) { if (this.removed) return this; if ((t = n(t).split(c)).length - 1 && (e = i(t[1]), r = i(t[2])), t = i(t[0]), null == r && (e = r), null == e || null == r) { var o = this.getBBox(1);
                            e = o.x + o.width / 2, r = o.y + o.height / 2 } return this.transform(this._.transform.concat([
                            ["r", t, e, r]
                        ])), this }, k.scale = function(t, e, r, o) { if (this.removed) return this; if ((t = n(t).split(c)).length - 1 && (e = i(t[1]), r = i(t[2]), o = i(t[3])), t = i(t[0]), null == e && (e = t), null == o && (r = o), null == r || null == o) var a = this.getBBox(1); return r = null == r ? a.x + a.width / 2 : r, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
                            ["s", t, e, r, o]
                        ])), this }, k.translate = function(t, e) { return this.removed || ((t = n(t).split(c)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                            ["t", t, e]
                        ]))), this }, k.transform = function(n) { var i = this._; if (null == n) return i.transform; if (t._extractTransform(this, n), this.clip && v(this.clip, { transform: this.matrix.invert() }), this.pattern && b(this), this.node && v(this.node, { transform: this.matrix }), 1 != i.sx || 1 != i.sy) { var r = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                            this.attr({ "stroke-width": r }) } return this }, k.hide = function() { return this.removed || (this.node.style.display = "none"), this }, k.show = function() { return this.removed || (this.node.style.display = ""), this }, k.remove = function() { var e = D(this.node); if (!this.removed && e.parentNode) { var n = this.paper; for (var i in n.__set__ && n.__set__.exclude(this), h.unbind("raphael.*.*." + this.id), this.gradient && n.defs.removeChild(this.gradient), t._tear(this, n), e.parentNode.removeChild(e), this.removeData(), this) this[i] = "function" == typeof this[i] ? t._removedFactory(i) : null;
                            this.removed = !0 } }, k._getBBox = function() { if ("none" == this.node.style.display) { this.show(); var t = !0 } var e, n = !1;
                        this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (n = !0, e.display = ""); var i = {}; try { i = this.node.getBBox() } catch (t) { i = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight } } finally { i = i || {}, n && (e.display = "none") } return t && this.hide(), i }, k.attr = function(n, i) { if (this.removed) return this; if (null == n) { var r = {}; for (var o in this.attrs) this.attrs[e](o) && (r[o] = this.attrs[o]); return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r } if (null == i && t.is(n, "string")) { if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; if ("transform" == n) return this._.transform; for (var a = n.split(c), s = {}, l = 0, u = a.length; l < u; l++)(n = a[l]) in this.attrs ? s[n] = this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = t._availableAttrs[n]; return u - 1 ? s : s[a[0]] } if (null == i && t.is(n, "array")) { for (s = {}, l = 0, u = n.length; l < u; l++) s[n[l]] = this.attr(n[l]); return s } if (null != i) { var d = {};
                            d[n] = i } else null != n && t.is(n, "object") && (d = n); for (var p in d) h("raphael.attr." + p + "." + this.id, this, d[p]); for (p in this.paper.customAttributes)
                            if (this.paper.customAttributes[e](p) && d[e](p) && t.is(this.paper.customAttributes[p], "function")) { var f = this.paper.customAttributes[p].apply(this, [].concat(d[p])); for (var g in this.attrs[p] = d[p], f) f[e](g) && (d[g] = f[g]) } return C(this, d), this }, k.toFront = function() { if (this.removed) return this; var e = D(this.node);
                        e.parentNode.appendChild(e); var n = this.paper; return n.top != this && t._tofront(this, n), this }, k.toBack = function() { if (this.removed) return this; var e = D(this.node),
                            n = e.parentNode; return n.insertBefore(e, n.firstChild), t._toback(this, this.paper), this.paper, this }, k.insertAfter = function(e) { if (this.removed || !e) return this; var n = D(this.node),
                            i = D(e.node || e[e.length - 1].node); return i.nextSibling ? i.parentNode.insertBefore(n, i.nextSibling) : i.parentNode.appendChild(n), t._insertafter(this, e, this.paper), this }, k.insertBefore = function(e) { if (this.removed || !e) return this; var n = D(this.node),
                            i = D(e.node || e[0].node); return i.parentNode.insertBefore(n, i), t._insertbefore(this, e, this.paper), this }, k.blur = function(e) { var n = this; if (0 != +e) { var i = v("filter"),
                                r = v("feGaussianBlur");
                            n.attrs.blur = e, i.id = t.createUUID(), v(r, { stdDeviation: +e || 1.5 }), i.appendChild(r), n.paper.defs.appendChild(i), n._blur = i, v(n.node, { filter: "url(#" + i.id + ")" }) } else n._blur && (n._blur.parentNode.removeChild(n._blur), delete n._blur, delete n.attrs.blur), n.node.removeAttribute("filter"); return n }, t._engine.circle = function(t, e, n, i) { var r = v("circle");
                        t.canvas && t.canvas.appendChild(r); var o = new T(r, t); return o.attrs = { cx: e, cy: n, r: i, fill: "none", stroke: "#000" }, o.type = "circle", v(r, o.attrs), o }, t._engine.rect = function(t, e, n, i, r, o) { var a = v("rect");
                        t.canvas && t.canvas.appendChild(a); var s = new T(a, t); return s.attrs = { x: e, y: n, width: i, height: r, rx: o || 0, ry: o || 0, fill: "none", stroke: "#000" }, s.type = "rect", v(a, s.attrs), s }, t._engine.ellipse = function(t, e, n, i, r) { var o = v("ellipse");
                        t.canvas && t.canvas.appendChild(o); var a = new T(o, t); return a.attrs = { cx: e, cy: n, rx: i, ry: r, fill: "none", stroke: "#000" }, a.type = "ellipse", v(o, a.attrs), a }, t._engine.image = function(t, e, n, i, r, o) { var a = v("image");
                        v(a, { x: n, y: i, width: r, height: o, preserveAspectRatio: "none" }), a.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(a); var s = new T(a, t); return s.attrs = { x: n, y: i, width: r, height: o, src: e }, s.type = "image", s }, t._engine.text = function(e, n, i, r) { var o = v("text");
                        e.canvas && e.canvas.appendChild(o); var a = new T(o, e); return a.attrs = { x: n, y: i, "text-anchor": "middle", text: r, "font-family": t._availableAttrs["font-family"], "font-size": t._availableAttrs["font-size"], stroke: "none", fill: "#000" }, a.type = "text", C(a, a.attrs), a }, t._engine.setSize = function(t, e) { return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this }, t._engine.create = function() { var e = t._getContainer.apply(0, arguments),
                            n = e && e.container; if (!n) throw new Error("SVG container not found."); var i, r = e.x,
                            o = e.y,
                            a = e.width,
                            s = e.height,
                            l = v("svg"),
                            c = "overflow:hidden;"; return r = r || 0, o = o || 0, v(l, { height: s = s || 342, version: 1.1, width: a = a || 512, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), 1 == n ? (l.style.cssText = c + "position:absolute;left:" + r + "px;top:" + o + "px", t._g.doc.body.appendChild(l), i = 1) : (l.style.cssText = c + "position:relative", n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l)), (n = new t._Paper).width = a, n.height = s, n.canvas = l, n.clear(), n._left = n._top = 0, i && (n.renderfix = function() {}), n.renderfix(), n }, t._engine.setViewBox = function(t, e, n, i, r) { h("raphael.setViewBox", this, this._viewBox, [t, e, n, i, r]); var o, s, l = this.getSize(),
                            c = a(n / l.width, i / l.height),
                            u = this.top,
                            p = r ? "xMidYMid meet" : "xMinYMin"; for (null == t ? (this._vbSize && (c = 1), delete this._vbSize, o = "0 0 " + this.width + d + this.height) : (this._vbSize = c, o = t + d + e + d + n + d + i), v(this.canvas, { viewBox: o, preserveAspectRatio: p }); c && u;) s = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({ "stroke-width": s }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev; return this._viewBox = [t, e, n, i, !!r], this }, t.prototype.renderfix = function() { var t, e = this.canvas,
                            n = e.style; try { t = e.getScreenCTM() || e.createSVGMatrix() } catch (n) { t = e.createSVGMatrix() } var i = -t.e % 1,
                            r = -t.f % 1;
                        (i || r) && (i && (this._left = (this._left + i) % 1, n.left = this._left + "px"), r && (this._top = (this._top + r) % 1, n.top = this._top + "px")) }, t.prototype.clear = function() { t.eve("raphael.clear", this); for (var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
                        this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs")) }, t.prototype.remove = function() { for (var e in h("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null }; var A = t.st; for (var E in k) k[e](E) && !A[e](E) && (A[E] = function(t) { return function() { var e = arguments; return this.forEach((function(n) { n[t].apply(n, e) })) } }(E)) } }.apply(e, i)) || (t.exports = r) }, function(t, e, n) { var i, r;
            i = [n(0)], void 0 === (r = function(t) { if (!t || t.vml) { var e = "hasOwnProperty",
                        n = String,
                        i = parseFloat,
                        r = Math,
                        o = r.round,
                        a = r.max,
                        s = r.min,
                        l = r.abs,
                        c = /[, ]+/,
                        h = t.eve,
                        u = " ",
                        d = "",
                        p = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
                        f = /([clmz]),?([^clmz]*)/gi,
                        g = / progid:\S+Blur\([^\)]+\)/g,
                        v = /-?[^,\s-]+/g,
                        m = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                        y = 21600,
                        b = { path: 1, rect: 1, image: 1 },
                        x = { circle: 1, ellipse: 1 },
                        w = function(e, n, i) { var r = t.matrix(); return r.rotate(-e, .5, .5), { dx: r.x(n, i), dy: r.y(n, i) } },
                        _ = function(t, e, n, i, r, o) { var a = t._,
                                s = t.matrix,
                                c = a.fillpos,
                                h = t.node,
                                d = h.style,
                                p = 1,
                                f = "",
                                g = y / e,
                                v = y / n; if (d.visibility = "hidden", e && n) { if (h.coordsize = l(g) + u + l(v), d.rotation = o * (e * n < 0 ? -1 : 1), o) { var m = w(o, i, r);
                                    i = m.dx, r = m.dy } if (e < 0 && (f += "x"), n < 0 && (f += " y") && (p = -1), d.flip = f, h.coordorigin = i * -g + u + r * -v, c || a.fillsize) { var b = h.getElementsByTagName("fill");
                                    b = b && b[0], h.removeChild(b), c && (m = w(o, s.x(c[0], c[1]), s.y(c[0], c[1])), b.position = m.dx * p + u + m.dy * p), a.fillsize && (b.size = a.fillsize[0] * l(e) + u + a.fillsize[1] * l(n)), h.appendChild(b) } d.visibility = "visible" } };
                    t.toString = function() { return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version }; var C, S = function(t, e, i) { for (var r = n(e).toLowerCase().split("-"), o = i ? "end" : "start", a = r.length, s = "classic", l = "medium", c = "medium"; a--;) switch (r[a]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    s = r[a]; break;
                                case "wide":
                                case "narrow":
                                    c = r[a]; break;
                                case "long":
                                case "short":
                                    l = r[a] }
                            var h = t.node.getElementsByTagName("stroke")[0];
                            h[o + "arrow"] = s, h[o + "arrowlength"] = l, h[o + "arrowwidth"] = c },
                        D = function(r, l) { r.attrs = r.attrs || {}; var h = r.node,
                                g = r.attrs,
                                m = h.style,
                                w = b[r.type] && (l.x != g.x || l.y != g.y || l.width != g.width || l.height != g.height || l.cx != g.cx || l.cy != g.cy || l.rx != g.rx || l.ry != g.ry || l.r != g.r),
                                D = x[r.type] && (g.cx != l.cx || g.cy != l.cy || g.r != l.r || g.rx != l.rx || g.ry != l.ry),
                                k = r; for (var A in l) l[e](A) && (g[A] = l[A]); if (w && (g.path = t._getPath[r.type](r), r._.dirty = 1), l.href && (h.href = l.href), l.title && (h.title = l.title), l.target && (h.target = l.target), l.cursor && (m.cursor = l.cursor), "blur" in l && r.blur(l.blur), (l.path && "path" == r.type || w) && (h.path = function(e) { var i = /[ahqstv]/gi,
                                        r = t._pathToAbsolute; if (n(e).match(i) && (r = t._path2curve), i = /[clmz]/g, r == t._pathToAbsolute && !n(e).match(i)) { var a = n(e).replace(f, (function(t, e, n) { var i = [],
                                                r = "m" == e.toLowerCase(),
                                                a = p[e]; return n.replace(v, (function(t) { r && 2 == i.length && (a += i + p["m" == e ? "l" : "L"], i = []), i.push(o(t * y)) })), a + i })); return a } var s, l, c = r(e);
                                    a = []; for (var h = 0, g = c.length; h < g; h++) { s = c[h], "z" == (l = c[h][0].toLowerCase()) && (l = "x"); for (var m = 1, b = s.length; m < b; m++) l += o(s[m] * y) + (m != b - 1 ? "," : d);
                                        a.push(l) } return a.join(u) }(~n(g.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(g.path) : g.path), r._.dirty = 1, "image" == r.type && (r._.fillpos = [g.x, g.y], r._.fillsize = [g.width, g.height], _(r, 1, 1, 0, 0, 0))), "transform" in l && r.transform(l.transform), D) { var E = +g.cx,
                                    L = +g.cy,
                                    $ = +g.rx || +g.r || 0,
                                    I = +g.ry || +g.r || 0;
                                h.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((E - $) * y), o((L - I) * y), o((E + $) * y), o((L + I) * y), o(E * y)), r._.dirty = 1 } if ("clip-rect" in l) { var M = n(l["clip-rect"]).split(c); if (4 == M.length) { M[2] = +M[2] + +M[0], M[3] = +M[3] + +M[1]; var F = h.clipRect || t._g.doc.createElement("div"),
                                        N = F.style;
                                    N.clip = t.format("rect({1}px {2}px {3}px {0}px)", M), h.clipRect || (N.position = "absolute", N.top = 0, N.left = 0, N.width = r.paper.width + "px", N.height = r.paper.height + "px", h.parentNode.insertBefore(F, h), F.appendChild(h), h.clipRect = F) } l["clip-rect"] || h.clipRect && (h.clipRect.style.clip = "auto") } if (r.textpath) { var O = r.textpath.style;
                                l.font && (O.font = l.font), l["font-family"] && (O.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, d) + '"'), l["font-size"] && (O.fontSize = l["font-size"]), l["font-weight"] && (O.fontWeight = l["font-weight"]), l["font-style"] && (O.fontStyle = l["font-style"]) } if ("arrow-start" in l && S(k, l["arrow-start"]), "arrow-end" in l && S(k, l["arrow-end"], 1), null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) { var j = h.getElementsByTagName("fill"); if (!(j = j && j[0]) && (j = C("fill")), "image" == r.type && l.src && (j.src = l.src), l.fill && (j.on = !0), null != j.on && "none" != l.fill && null !== l.fill || (j.on = !1), j.on && l.fill) { var P = n(l.fill).match(t._ISURL); if (P) { j.parentNode == h && h.removeChild(j), j.rotate = !0, j.src = P[1], j.type = "tile"; var R = r.getBBox(1);
                                        j.position = R.x + u + R.y, r._.fillpos = [R.x, R.y], t._preload(P[1], (function() { r._.fillsize = [this.offsetWidth, this.offsetHeight] })) } else j.color = t.getRGB(l.fill).hex, j.src = d, j.type = "solid", t.getRGB(l.fill).error && (k.type in { circle: 1, ellipse: 1 } || "r" != n(l.fill).charAt()) && T(k, l.fill, j) && (g.fill = "none", g.gradient = l.fill, j.rotate = !1) } if ("fill-opacity" in l || "opacity" in l) { var B = ((+g["fill-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                                    B = s(a(B, 0), 1), j.opacity = B, j.src && (j.color = "none") } h.appendChild(j); var H = h.getElementsByTagName("stroke") && h.getElementsByTagName("stroke")[0],
                                    U = !1;!H && (U = H = C("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (H.on = !0), ("none" == l.stroke || null === l.stroke || null == H.on || 0 == l.stroke || 0 == l["stroke-width"]) && (H.on = !1); var q = t.getRGB(l.stroke);
                                H.on && l.stroke && (H.color = q.hex), B = ((+g["stroke-opacity"] + 1 || 2) - 1) * ((+g.opacity + 1 || 2) - 1) * ((+q.o + 1 || 2) - 1); var W = .75 * (i(l["stroke-width"]) || 1); if (B = s(a(B, 0), 1), null == l["stroke-width"] && (W = g["stroke-width"]), l["stroke-width"] && (H.weight = W), W && W < 1 && (B *= W) && (H.weight = 1), H.opacity = B, l["stroke-linejoin"] && (H.joinstyle = l["stroke-linejoin"] || "miter"), H.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (H.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) { var z = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
                                    H.dashstyle = z[e](l["stroke-dasharray"]) ? z[l["stroke-dasharray"]] : d } U && h.appendChild(H) } if ("text" == k.type) { k.paper.canvas.style.display = d; var V = k.paper.span,
                                    Y = g.font && g.font.match(/\d+(?:\.\d*)?(?=px)/);
                                m = V.style, g.font && (m.font = g.font), g["font-family"] && (m.fontFamily = g["font-family"]), g["font-weight"] && (m.fontWeight = g["font-weight"]), g["font-style"] && (m.fontStyle = g["font-style"]), Y = i(g["font-size"] || Y && Y[0]) || 10, m.fontSize = 100 * Y + "px", k.textpath.string && (V.innerHTML = n(k.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>")); var G = V.getBoundingClientRect();
                                k.W = g.w = (G.right - G.left) / 100, k.H = g.h = (G.bottom - G.top) / 100, k.X = g.x, k.Y = g.y + k.H / 2, ("x" in l || "y" in l) && (k.path.v = t.format("m{0},{1}l{2},{1}", o(g.x * y), o(g.y * y), o(g.x * y) + 1)); for (var X = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Q = 0, J = X.length; Q < J; Q++)
                                    if (X[Q] in l) { k._.dirty = 1; break } switch (g["text-anchor"]) {
                                    case "start":
                                        k.textpath.style["v-text-align"] = "left", k.bbx = k.W / 2; break;
                                    case "end":
                                        k.textpath.style["v-text-align"] = "right", k.bbx = -k.W / 2; break;
                                    default:
                                        k.textpath.style["v-text-align"] = "center", k.bbx = 0 } k.textpath.style["v-text-kern"] = !0 } },
                        T = function(e, o, a) { e.attrs = e.attrs || {}, e.attrs; var s = Math.pow,
                                l = "linear",
                                c = ".5 .5"; if (e.attrs.gradient = o, o = (o = n(o).replace(t._radial_gradient, (function(t, e, n) { return l = "radial", e && n && (e = i(e), n = i(n), s(e - .5, 2) + s(n - .5, 2) > .25 && (n = r.sqrt(.25 - s(e - .5, 2)) * (2 * (n > .5) - 1) + .5), c = e + u + n), d }))).split(/\s*\-\s*/), "linear" == l) { var h = o.shift(); if (h = -i(h), isNaN(h)) return null } var p = t._parseDots(o); if (!p) return null; if (e = e.shape || e.node, p.length) { e.removeChild(a), a.on = !0, a.method = "none", a.color = p[0].color, a.color2 = p[p.length - 1].color; for (var f = [], g = 0, v = p.length; g < v; g++) p[g].offset && f.push(p[g].offset + u + p[g].color);
                                a.colors = f.length ? f.join() : "0% " + a.color, "radial" == l ? (a.type = "gradientTitle", a.focus = "100%", a.focussize = "0 0", a.focusposition = c, a.angle = 0) : (a.type = "gradient", a.angle = (270 - h) % 360), e.appendChild(a) } return 1 },
                        k = function(e, n) { this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = n, this.matrix = t.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !n.bottom && (n.bottom = this), this.prev = n.top, n.top && (n.top.next = this), n.top = this, this.next = null },
                        A = t.el;
                    k.prototype = A, A.constructor = k, A.transform = function(e) { if (null == e) return this._.transform; var i, r = this.paper._viewBoxShift,
                            o = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : d;
                        r && (i = e = n(e).replace(/\.{3}|\u2026/g, this._.transform || d)), t._extractTransform(this, o + e); var a, s = this.matrix.clone(),
                            l = this.skew,
                            c = this.node,
                            h = ~n(this.attrs.fill).indexOf("-"),
                            p = !n(this.attrs.fill).indexOf("url("); if (s.translate(1, 1), p || h || "image" == this.type)
                            if (l.matrix = "1 0 0 1", l.offset = "0 0", a = s.split(), h && a.noRotation || !a.isSimple) { c.style.filter = s.toFilter(); var f = this.getBBox(),
                                    g = this.getBBox(1),
                                    v = f.x - g.x,
                                    m = f.y - g.y;
                                c.coordorigin = v * -y + u + m * -y, _(this, 1, 1, v, m, 0) } else c.style.filter = d, _(this, a.scalex, a.scaley, a.dx, a.dy, a.rotate);
                        else c.style.filter = d, l.matrix = n(s), l.offset = s.offset(); return null !== i && (this._.transform = i, t._extractTransform(this, i)), this }, A.rotate = function(t, e, r) { if (this.removed) return this; if (null != t) { if ((t = n(t).split(c)).length - 1 && (e = i(t[1]), r = i(t[2])), t = i(t[0]), null == r && (e = r), null == e || null == r) { var o = this.getBBox(1);
                                e = o.x + o.width / 2, r = o.y + o.height / 2 } return this._.dirtyT = 1, this.transform(this._.transform.concat([
                                ["r", t, e, r]
                            ])), this } }, A.translate = function(t, e) { return this.removed || ((t = n(t).split(c)).length - 1 && (e = i(t[1])), t = i(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                            ["t", t, e]
                        ]))), this }, A.scale = function(t, e, r, o) { if (this.removed) return this; if ((t = n(t).split(c)).length - 1 && (e = i(t[1]), r = i(t[2]), o = i(t[3]), isNaN(r) && (r = null), isNaN(o) && (o = null)), t = i(t[0]), null == e && (e = t), null == o && (r = o), null == r || null == o) var a = this.getBBox(1); return r = null == r ? a.x + a.width / 2 : r, o = null == o ? a.y + a.height / 2 : o, this.transform(this._.transform.concat([
                            ["s", t, e, r, o]
                        ])), this._.dirtyT = 1, this }, A.hide = function() { return !this.removed && (this.node.style.display = "none"), this }, A.show = function() { return !this.removed && (this.node.style.display = d), this }, A.auxGetBBox = t.el.getBBox, A.getBBox = function() { var t = this.auxGetBBox(); if (this.paper && this.paper._viewBoxShift) { var e = {},
                                n = 1 / this.paper._viewBoxShift.scale; return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= n, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= n, e.width = t.width * n, e.height = t.height * n, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e } return t }, A._getBBox = function() { return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, A.remove = function() { if (!this.removed && this.node.parentNode) { for (var e in this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                            this.removed = !0 } }, A.attr = function(n, i) { if (this.removed) return this; if (null == n) { var r = {}; for (var o in this.attrs) this.attrs[e](o) && (r[o] = this.attrs[o]); return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient, r.transform = this._.transform, r } if (null == i && t.is(n, "string")) { if ("fill" == n && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; for (var a = n.split(c), s = {}, l = 0, u = a.length; l < u; l++)(n = a[l]) in this.attrs ? s[n] = this.attrs[n] : t.is(this.paper.customAttributes[n], "function") ? s[n] = this.paper.customAttributes[n].def : s[n] = t._availableAttrs[n]; return u - 1 ? s : s[a[0]] } if (this.attrs && null == i && t.is(n, "array")) { for (s = {}, l = 0, u = n.length; l < u; l++) s[n[l]] = this.attr(n[l]); return s } var d; for (var p in null != i && ((d = {})[n] = i), null == i && t.is(n, "object") && (d = n), d) h("raphael.attr." + p + "." + this.id, this, d[p]); if (d) { for (p in this.paper.customAttributes)
                                if (this.paper.customAttributes[e](p) && d[e](p) && t.is(this.paper.customAttributes[p], "function")) { var f = this.paper.customAttributes[p].apply(this, [].concat(d[p])); for (var g in this.attrs[p] = d[p], f) f[e](g) && (d[g] = f[g]) } d.text && "text" == this.type && (this.textpath.string = d.text), D(this, d) } return this }, A.toFront = function() { return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this }, A.toBack = function() { return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this }, A.insertAfter = function(e) { return this.removed || (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper)), this }, A.insertBefore = function(e) { return this.removed || (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper)), this }, A.blur = function(e) { var n = this.node.runtimeStyle,
                            i = n.filter; return i = i.replace(g, d), 0 != +e ? (this.attrs.blur = e, n.filter = i + u + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")", n.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (n.filter = i, n.margin = 0, delete this.attrs.blur), this }, t._engine.path = function(t, e) { var n = C("shape");
                        n.style.cssText = m, n.coordsize = y + u + y, n.coordorigin = e.coordorigin; var i = new k(n, e),
                            r = { fill: "none", stroke: "#000" };
                        t && (r.path = t), i.type = "path", i.path = [], i.Path = d, D(i, r), e.canvas && e.canvas.appendChild(n); var o = C("skew"); return o.on = !0, n.appendChild(o), i.skew = o, i.transform(d), i }, t._engine.rect = function(e, n, i, r, o, a) { var s = t._rectPath(n, i, r, o, a),
                            l = e.path(s),
                            c = l.attrs; return l.X = c.x = n, l.Y = c.y = i, l.W = c.width = r, l.H = c.height = o, c.r = a, c.path = s, l.type = "rect", l }, t._engine.ellipse = function(t, e, n, i, r) { var o = t.path(); return o.attrs, o.X = e - i, o.Y = n - r, o.W = 2 * i, o.H = 2 * r, o.type = "ellipse", D(o, { cx: e, cy: n, rx: i, ry: r }), o }, t._engine.circle = function(t, e, n, i) { var r = t.path(); return r.attrs, r.X = e - i, r.Y = n - i, r.W = r.H = 2 * i, r.type = "circle", D(r, { cx: e, cy: n, r: i }), r }, t._engine.image = function(e, n, i, r, o, a) { var s = t._rectPath(i, r, o, a),
                            l = e.path(s).attr({ stroke: "none" }),
                            c = l.attrs,
                            h = l.node,
                            u = h.getElementsByTagName("fill")[0]; return c.src = n, l.X = c.x = i, l.Y = c.y = r, l.W = c.width = o, l.H = c.height = a, c.path = s, l.type = "image", u.parentNode == h && h.removeChild(u), u.rotate = !0, u.src = n, u.type = "tile", l._.fillpos = [i, r], l._.fillsize = [o, a], h.appendChild(u), _(l, 1, 1, 0, 0, 0), l }, t._engine.text = function(e, i, r, a) { var s = C("shape"),
                            l = C("path"),
                            c = C("textpath");
                        i = i || 0, r = r || 0, a = a || "", l.v = t.format("m{0},{1}l{2},{1}", o(i * y), o(r * y), o(i * y) + 1), l.textpathok = !0, c.string = n(a), c.on = !0, s.style.cssText = m, s.coordsize = y + u + y, s.coordorigin = "0 0"; var h = new k(s, e),
                            p = { fill: "#000", stroke: "none", font: t._availableAttrs.font, text: a };
                        h.shape = s, h.path = l, h.textpath = c, h.type = "text", h.attrs.text = n(a), h.attrs.x = i, h.attrs.y = r, h.attrs.w = 1, h.attrs.h = 1, D(h, p), s.appendChild(c), s.appendChild(l), e.canvas.appendChild(s); var f = C("skew"); return f.on = !0, s.appendChild(f), h.skew = f, h.transform(d), h }, t._engine.setSize = function(e, n) { var i = this.canvas.style; return this.width = e, this.height = n, e == +e && (e += "px"), n == +n && (n += "px"), i.width = e, i.height = n, i.clip = "rect(0 " + e + " " + n + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this }, t._engine.setViewBox = function(e, n, i, r, o) { t.eve("raphael.setViewBox", this, this._viewBox, [e, n, i, r, o]); var a, s, l = this.getSize(),
                            c = l.width,
                            h = l.height; return o && (i * (a = h / r) < c && (e -= (c - i * a) / 2 / a), r * (s = c / i) < h && (n -= (h - r * s) / 2 / s)), this._viewBox = [e, n, i, r, !!o], this._viewBoxShift = { dx: -e, dy: -n, scale: l }, this.forEach((function(t) { t.transform("...") })), this }, t._engine.initWin = function(t) { var e = t.document;
                        e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)"); try {!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), C = function(t) { return e.createElement("<rvml:" + t + ' class="rvml">') } } catch (t) { C = function(t) { return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, t._engine.initWin(t._g.win), t._engine.create = function() { var e = t._getContainer.apply(0, arguments),
                            n = e.container,
                            i = e.height,
                            r = e.width,
                            o = e.x,
                            a = e.y; if (!n) throw new Error("VML container not found."); var s = new t._Paper,
                            l = s.canvas = t._g.doc.createElement("div"),
                            c = l.style; return o = o || 0, a = a || 0, r = r || 512, i = i || 342, s.width = r, s.height = i, r == +r && (r += "px"), i == +i && (i += "px"), s.coordsize = "21600000 21600000", s.coordorigin = "0 0", s.span = t._g.doc.createElement("span"), s.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(s.span), c.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, i), 1 == n ? (t._g.doc.body.appendChild(l), c.left = o + "px", c.top = a + "px", c.position = "absolute") : n.firstChild ? n.insertBefore(l, n.firstChild) : n.appendChild(l), s.renderfix = function() {}, s }, t.prototype.clear = function() { t.eve("raphael.clear", this), this.canvas.innerHTML = d, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, t.prototype.remove = function() { for (var e in t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null; return !0 }; var E = t.st; for (var L in A) A[e](L) && !E[e](L) && (E[L] = function(t) { return function() { var e = arguments; return this.forEach((function(n) { n[t].apply(n, e) })) } }(L)) } }.apply(e, i)) || (t.exports = r) }]) })),
    function() { var t, e, n, i, r = [].slice,
            o = function(t, e) { return function() { return t.apply(e, arguments) } },
            a = {}.hasOwnProperty,
            s = function(t, e) {
                function n() { this.constructor = t } for (var i in e) a.call(e, i) && (t[i] = e[i]); return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t },
            l = [].indexOf || function(t) { for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t) return e; return -1 };
        e = window.Morris = {}, t = jQuery, e.EventEmitter = function() {
            function t() {} return t.prototype.on = function(t, e) { return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this }, t.prototype.fire = function() { var t, e, n, i, o, a, s; if (n = arguments[0], t = 2 <= arguments.length ? r.call(arguments, 1) : [], null != this.handlers && null != this.handlers[n]) { for (s = [], i = 0, o = (a = this.handlers[n]).length; o > i; i++) e = a[i], s.push(e.apply(null, t)); return s } }, t }(), e.commas = function(t) { var e, n, i, r; return null != t ? (i = 0 > t ? "-" : "", e = Math.abs(t), i += (n = Math.floor(e).toFixed(0)).replace(/(?=(?:\d{3})+$)(?!^)/g, ","), (r = e.toString()).length > n.length && (i += r.slice(n.length)), i) : "-" }, e.pad2 = function(t) { return (10 > t ? "0" : "") + t }, e.Grid = function(n) {
            function i(e) { this.resizeHandler = o(this.resizeHandler, this); var n = this; if (this.el = "string" == typeof e.element ? t(document.getElementById(e.element)) : t(e.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found"); "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = t.extend({}, this.gridDefaults, this.defaults || {}, e), "string" == typeof this.options.units && (this.options.postUnits = e.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", (function(t) { var e, i, r, o; return i = n.el.offset(), o = t.pageX - i.left, n.selectFrom ? (e = n.data[n.hitTest(Math.min(o, n.selectFrom))]._x, r = n.data[n.hitTest(Math.max(o, n.selectFrom))]._x - e, n.selectionRect.attr({ x: e, width: r })) : n.fire("hovermove", o, t.pageY - i.top) })), this.el.bind("mouseleave", (function() { return n.selectFrom && (n.selectionRect.hide(), n.selectFrom = null), n.fire("hoverout") })), this.el.bind("touchstart touchmove touchend", (function(t) { var e, i; return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = n.el.offset(), n.fire("hovermove", i.pageX - e.left, i.pageY - e.top) })), this.el.bind("click", (function(t) { var e; return e = n.el.offset(), n.fire("gridclick", t.pageX - e.left, t.pageY - e.top) })), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({ fill: this.options.rangeSelectColor, stroke: !1 }).toBack().hide(), this.el.bind("mousedown", (function(t) { var e; return e = n.el.offset(), n.startRange(t.pageX - e.left) })), this.el.bind("mouseup", (function(t) { var e; return e = n.el.offset(), n.endRange(t.pageX - e.left), n.fire("hovermove", t.pageX - e.left, t.pageY - e.top) }))), this.options.resize && t(window).bind("resize", (function() { return null != n.timeoutId && window.clearTimeout(n.timeoutId), n.timeoutId = window.setTimeout(n.resizeHandler, 100) })), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit() } return s(i, n), i.prototype.gridDefaults = { dateFormat: null, axes: !0, grid: !0, gridLineColor: "#aaa", gridStrokeWidth: .5, gridTextColor: "#888", gridTextSize: 12, gridTextFamily: "sans-serif", gridTextWeight: "normal", hideHover: !1, yLabelFormat: null, xLabelAngle: 0, numLines: 5, padding: 25, parseTime: !0, postUnits: "", preUnits: "", ymax: "auto", ymin: "auto 0", goals: [], goalStrokeWidth: 1, goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"], events: [], eventStrokeWidth: 1, eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"], rangeSelect: null, rangeSelectColor: "#eef", resize: !1 }, i.prototype.setData = function(t, n) { var i, r, o, a, s, l, c, h, u, d, p, f, g, v, m; return null == n && (n = !0), this.options.data = t, null == t || 0 === t.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (f = this.cumulative ? 0 : null, g = this.cumulative ? 0 : null, this.options.goals.length > 0 && (s = Math.min.apply(Math, this.options.goals), a = Math.max.apply(Math, this.options.goals), g = null != g ? Math.min(g, s) : s, f = null != f ? Math.max(f, a) : a), this.data = function() { var n, i, a; for (a = [], o = n = 0, i = t.length; i > n; o = ++n) c = t[o], (l = { src: c }).label = c[this.options.xkey], this.options.parseTime ? (l.x = e.parseDate(l.label), this.options.dateFormat ? l.label = this.options.dateFormat(l.x) : "number" == typeof l.label && (l.label = new Date(l.label).toString())) : (l.x = o, this.options.xLabelFormat && (l.label = this.options.xLabelFormat(l))), u = 0, l.y = function() { var t, e, n, i; for (n = this.options.ykeys, i = [], r = t = 0, e = n.length; e > t; r = ++t) p = n[r], "string" == typeof(v = c[p]) && (v = parseFloat(v)), null != v && "number" != typeof v && (v = null), null != v && (this.cumulative ? u += v : null != f ? (f = Math.max(v, f), g = Math.min(v, g)) : f = g = v), this.cumulative && null != u && (f = Math.max(u, f), g = Math.min(u, g)), i.push(v); return i }.call(this), a.push(l); return a }.call(this), this.options.parseTime && (this.data = this.data.sort((function(t, e) { return (t.x > e.x) - (e.x > t.x) }))), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], this.options.events.length > 0 && (this.events = this.options.parseTime ? function() { var t, n, r, o; for (o = [], t = 0, n = (r = this.options.events).length; n > t; t++) i = r[t], o.push(e.parseDate(i)); return o }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", g), this.ymax = this.yboundary("max", f), this.ymin === this.ymax && (g && (this.ymin -= 1), this.ymax += 1), (!0 === (m = this.options.axes) || "both" === m || "y" === m || !0 === this.options.grid) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (h = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function() { var t, e, n; for (n = [], d = t = this.ymin, e = this.ymax; h > 0 ? e >= t : t >= e; d = t += h) n.push(d); return n }.call(this))), this.dirty = !0, n ? this.redraw() : void 0) }, i.prototype.yboundary = function(t, e) { var n, i; return "string" == typeof(n = this.options["y" + t]) ? "auto" === n.slice(0, 4) ? n.length > 5 ? (i = parseInt(n.slice(5), 10), null == e ? i : Math[t](e, i)) : null != e ? e : 0 : parseInt(n, 10) : n }, i.prototype.autoGridLines = function(t, e, n) { var i, r, o, a, s, l, c, h, u; return s = e - t, u = Math.floor(Math.log(s) / Math.log(10)), c = Math.pow(10, u), r = Math.floor(t / c) * c, i = Math.ceil(e / c) * c, l = (i - r) / (n - 1), 1 === c && l > 1 && Math.ceil(l) !== l && (l = Math.ceil(l), i = r + l * (n - 1)), 0 > r && i > 0 && (r = Math.floor(t / l) * l, i = Math.ceil(e / l) * l), 1 > l ? (a = Math.floor(Math.log(l) / Math.log(10)), o = function() { var t, e; for (e = [], h = t = r; l > 0 ? i >= t : t >= i; h = t += l) e.push(parseFloat(h.toFixed(1 - a))); return e }()) : o = function() { var t, e; for (e = [], h = t = r; l > 0 ? i >= t : t >= i; h = t += l) e.push(h); return e }(), o }, i.prototype._calc = function() { var t, e, n, i, r, o, a, s; return r = this.el.width(), n = this.el.height(), (this.elementWidth !== r || this.elementHeight !== n || this.dirty) && (this.elementWidth = r, this.elementHeight = n, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, (!0 === (a = this.options.axes) || "both" === a || "y" === a) && (o = function() { var t, n, i, r; for (r = [], t = 0, n = (i = this.grid).length; n > t; t++) e = i[t], r.push(this.measureText(this.yAxisFormat(e)).width); return r }.call(this), this.left += Math.max.apply(Math, o)), (!0 === (s = this.options.axes) || "both" === s || "x" === s) && (t = function() { var t, e, n; for (n = [], i = t = 0, e = this.data.length; e >= 0 ? e > t : t > e; i = e >= 0 ? ++t : --t) n.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height); return n }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0 }, i.prototype.transY = function(t) { return this.bottom - (t - this.ymin) * this.dy }, i.prototype.transX = function(t) { return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx }, i.prototype.redraw = function() { return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0 }, i.prototype.measureText = function(t, e) { var n, i; return null == e && (e = 0), n = (i = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e)).getBBox(), i.remove(), n }, i.prototype.yAxisFormat = function(t) { return this.yLabelFormat(t) }, i.prototype.yLabelFormat = function(t) { return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + e.commas(t) + this.options.postUnits }, i.prototype.drawGrid = function() { var t, e, n, i, r, o, a, s; if (!1 !== this.options.grid || !0 === (r = this.options.axes) || "both" === r || "y" === r) { for (s = [], n = 0, i = (o = this.grid).length; i > n; n++) t = o[n], e = this.transY(t), (!0 === (a = this.options.axes) || "both" === a || "y" === a) && this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), this.options.grid ? s.push(this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width))) : s.push(void 0); return s } }, i.prototype.drawGoals = function() { var t, e, n, i, r, o, a; for (a = [], n = i = 0, r = (o = this.options.goals).length; r > i; n = ++i) e = o[n], t = this.options.goalLineColors[n % this.options.goalLineColors.length], a.push(this.drawGoal(e, t)); return a }, i.prototype.drawEvents = function() { var t, e, n, i, r, o, a; for (a = [], n = i = 0, r = (o = this.events).length; r > i; n = ++i) e = o[n], t = this.options.eventLineColors[n % this.options.eventLineColors.length], a.push(this.drawEvent(e, t)); return a }, i.prototype.drawGoal = function(t, e) { return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth) }, i.prototype.drawEvent = function(t, e) { return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth) }, i.prototype.drawYAxisLabel = function(t, e, n) { return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end") }, i.prototype.drawGridLine = function(t) { return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth) }, i.prototype.startRange = function(t) { return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({ x: t, width: 0 }).show() }, i.prototype.endRange = function(t) { var e, n; return this.selectFrom ? (n = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, { start: this.data[this.hitTest(n)].x, end: this.data[this.hitTest(e)].x }), this.selectFrom = null) : void 0 }, i.prototype.resizeHandler = function() { return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw() }, i }(e.EventEmitter), e.parseDate = function(t) { var e, n, i, r, o, a, s, l, c, h, u; return "number" == typeof t ? t : (n = t.match(/^(\d+) Q(\d)$/), r = t.match(/^(\d+)-(\d+)$/), o = t.match(/^(\d+)-(\d+)-(\d+)$/), s = t.match(/^(\d+) W(\d+)$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), c = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), n ? new Date(parseInt(n[1], 10), 3 * parseInt(n[2], 10) - 1, 1).getTime() : r ? new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, 1).getTime() : o ? new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime() : s ? (4 !== (h = new Date(parseInt(s[1], 10), 0, 1)).getDay() && h.setMonth(0, 1 + (4 - h.getDay() + 7) % 7), h.getTime() + 6048e5 * parseInt(s[2], 10)) : l ? l[6] ? (a = 0, "Z" !== l[6] && (a = 60 * parseInt(l[8], 10) + parseInt(l[9], 10), "+" === l[7] && (a = 0 - a)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + a)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10)).getTime() : c ? (u = parseFloat(c[6]), e = Math.floor(u), i = Math.round(1e3 * (u - e)), c[8] ? (a = 0, "Z" !== c[8] && (a = 60 * parseInt(c[10], 10) + parseInt(c[11], 10), "+" === c[9] && (a = 0 - a)), Date.UTC(parseInt(c[1], 10), parseInt(c[2], 10) - 1, parseInt(c[3], 10), parseInt(c[4], 10), parseInt(c[5], 10) + a, e, i)) : new Date(parseInt(c[1], 10), parseInt(c[2], 10) - 1, parseInt(c[3], 10), parseInt(c[4], 10), parseInt(c[5], 10), e, i).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime()) }, e.Hover = function() {
            function n(n) { null == n && (n = {}), this.options = t.extend({}, e.Hover.defaults, n), this.el = t("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el) } return n.defaults = { class: "morris-hover morris-default-style" }, n.prototype.update = function(t, e, n) { return t ? (this.html(t), this.show(), this.moveTo(e, n)) : this.hide() }, n.prototype.html = function(t) { return this.el.html(t) }, n.prototype.moveTo = function(t, e) { var n, i, r, o, a, s; return a = this.options.parent.innerWidth(), o = this.options.parent.innerHeight(), i = this.el.outerWidth(), n = this.el.outerHeight(), r = Math.min(Math.max(0, t - i / 2), a - i), null != e ? 0 > (s = e - n - 10) && ((s = e + 10) + n > o && (s = o / 2 - n / 2)) : s = o / 2 - n / 2, this.el.css({ left: r + "px", top: parseInt(s) + "px" }) }, n.prototype.show = function() { return this.el.show() }, n.prototype.hide = function() { return this.el.hide() }, n }(), e.Line = function(t) {
            function n(t) { return this.hilight = o(this.hilight, this), this.onHoverOut = o(this.onHoverOut, this), this.onHoverMove = o(this.onHoverMove, this), this.onGridClick = o(this.onGridClick, this), this instanceof e.Line ? void n.__super__.constructor.call(this, t) : new e.Line(t) } return s(n, t), n.prototype.init = function() { return "always" !== this.options.hideHover ? (this.hover = new e.Hover({ parent: this.el }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0 }, n.prototype.defaults = { lineWidth: 3, pointSize: 4, lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"], pointStrokeWidths: [1], pointStrokeColors: ["#ffffff"], pointFillColors: [], smooth: !0, xLabels: "auto", xLabelFormat: null, xLabelMargin: 24, hideHover: !1 }, n.prototype.calc = function() { return this.calcPoints(), this.generatePaths() }, n.prototype.calcPoints = function() { var t, e, n, i, r, o; for (o = [], n = 0, i = (r = this.data).length; i > n; n++)(t = r[n])._x = this.transX(t.x), t._y = function() { var n, i, r, o; for (o = [], n = 0, i = (r = t.y).length; i > n; n++) null != (e = r[n]) ? o.push(this.transY(e)) : o.push(e); return o }.call(this), o.push(t._ymax = Math.min.apply(Math, [this.bottom].concat(function() { var n, i, r, o; for (o = [], n = 0, i = (r = t._y).length; i > n; n++) null != (e = r[n]) && o.push(e); return o }()))); return o }, n.prototype.hitTest = function(t) { var e, n, i, r; if (0 === this.data.length) return null; for (e = n = 0, i = (r = this.data.slice(1)).length; i > n && !(t < (r[e]._x + this.data[e]._x) / 2); e = ++n); return e }, n.prototype.onGridClick = function(t, e) { var n; return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e) }, n.prototype.onHoverMove = function(t) { var e; return e = this.hitTest(t), this.displayHoverForRow(e) }, n.prototype.onHoverOut = function() { return !1 !== this.options.hideHover ? this.displayHoverForRow(null) : void 0 }, n.prototype.displayHoverForRow = function(t) { var e; return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight()) }, n.prototype.hoverContentForRow = function(t) { var e, n, i, r, o, a, s; for (e = "<div class='morris-hover-row-label'>" + (i = this.data[t]).label + "</div>", n = o = 0, a = (s = i.y).length; a > o; n = ++o) r = s[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(r) + "\n</div>"; return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, i.src)), [e, i._x, i._ymax] }, n.prototype.generatePaths = function() { var t, n, i, r; return this.paths = function() { var o, a, s, c; for (c = [], n = o = 0, a = this.options.ykeys.length; a >= 0 ? a > o : o > a; n = a >= 0 ? ++o : --o) r = "boolean" == typeof this.options.smooth ? this.options.smooth : (s = this.options.ykeys[n], l.call(this.options.smooth, s) >= 0), (t = function() { var t, e, r, o; for (o = [], t = 0, e = (r = this.data).length; e > t; t++) void 0 !== (i = r[t])._y[n] && o.push({ x: i._x, y: i._y[n] }); return o }.call(this)).length > 1 ? c.push(e.Line.createPath(t, r, this.bottom)) : c.push(null); return c }.call(this) }, n.prototype.draw = function() { var t; return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries(), !1 === this.options.hideHover ? this.displayHoverForRow(this.data.length - 1) : void 0 }, n.prototype.drawXAxis = function() { var t, n, i, r, o, a, s, l, c, h, u = this; for (s = this.bottom + this.options.padding / 2, o = null, r = null, t = function(t, e) { var n, i, a, l, c; return c = (n = u.drawXAxisLabel(u.transX(e), s, t)).getBBox(), n.transform("r" + -u.options.xLabelAngle), i = n.getBBox(), n.transform("t0," + i.height / 2 + "..."), 0 !== u.options.xLabelAngle && (l = -.5 * c.width * Math.cos(u.options.xLabelAngle * Math.PI / 180), n.transform("t" + l + ",0...")), i = n.getBBox(), (null == o || o >= i.x + i.width || null != r && r >= i.x) && i.x >= 0 && i.x + i.width < u.el.width() ? (0 !== u.options.xLabelAngle && (a = 1.25 * u.options.gridTextSize / Math.sin(u.options.xLabelAngle * Math.PI / 180), r = i.x - a), o = i.x - u.options.xLabelMargin) : n.remove() }, (i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                        [this.data[0].label, this.data[0].x]
                    ] : e.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function() { var t, e, n, i; for (i = [], t = 0, e = (n = this.data).length; e > t; t++) a = n[t], i.push([a.label, a.x]); return i }.call(this)).reverse(), h = [], l = 0, c = i.length; c > l; l++) n = i[l], h.push(t(n[0], n[1])); return h }, n.prototype.drawSeries = function() { var t, e, n, i, r, o; for (this.seriesPoints = [], t = e = i = this.options.ykeys.length - 1; 0 >= i ? 0 >= e : e >= 0; t = 0 >= i ? ++e : --e) this._drawLineFor(t); for (o = [], t = n = r = this.options.ykeys.length - 1; 0 >= r ? 0 >= n : n >= 0; t = 0 >= r ? ++n : --n) o.push(this._drawPointFor(t)); return o }, n.prototype._drawPointFor = function(t) { var e, n, i, r, o, a; for (this.seriesPoints[t] = [], a = [], i = 0, r = (o = this.data).length; r > i; i++) e = null, null != (n = o[i])._y[t] && (e = this.drawLinePoint(n._x, n._y[t], this.colorFor(n, t, "point"), t)), a.push(this.seriesPoints[t].push(e)); return a }, n.prototype._drawLineFor = function(t) { var e; return null !== (e = this.paths[t]) ? this.drawLinePath(e, this.colorFor(null, t, "line"), t) : void 0 }, n.createPath = function(t, n, i) { var r, o, a, s, l, c, h, u, d, p; for (h = "", n && (a = e.Line.gradients(t)), u = { y: null }, s = d = 0, p = t.length; p > d; s = ++d) null != (r = t[s]).y && (null != u.y ? n ? (o = a[s], c = a[s - 1], l = (r.x - u.x) / 4, h += "C" + (u.x + l) + "," + Math.min(i, u.y + l * c) + "," + (r.x - l) + "," + Math.min(i, r.y - l * o) + "," + r.x + "," + r.y) : h += "L" + r.x + "," + r.y : n && null == a[s] || (h += "M" + r.x + "," + r.y)), u = r; return h }, n.gradients = function(t) { var e, n, i, r, o, a, s, l; for (n = function(t, e) { return (t.y - e.y) / (t.x - e.x) }, l = [], i = a = 0, s = t.length; s > a; i = ++a) null != (e = t[i]).y ? (r = t[i + 1] || { y: null }, null != (o = t[i - 1] || { y: null }).y && null != r.y ? l.push(n(o, r)) : null != o.y ? l.push(n(o, e)) : null != r.y ? l.push(n(e, r)) : l.push(null)) : l.push(null); return l }, n.prototype.hilight = function(t) { var e, n, i, r, o; if (null !== this.prevHilight && this.prevHilight !== t)
                    for (e = n = 0, r = this.seriesPoints.length - 1; r >= 0 ? r >= n : n >= r; e = r >= 0 ? ++n : --n) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e)); if (null !== t && this.prevHilight !== t)
                    for (e = i = 0, o = this.seriesPoints.length - 1; o >= 0 ? o >= i : i >= o; e = o >= 0 ? ++i : --i) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e)); return this.prevHilight = t }, n.prototype.colorFor = function(t, e, n) { return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, n) : "point" === n && this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length] }, n.prototype.drawXAxisLabel = function(t, e, n) { return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor) }, n.prototype.drawLinePath = function(t, e, n) { return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(n)) }, n.prototype.drawLinePoint = function(t, e, n, i) { return this.raphael.circle(t, e, this.pointSizeForSeries(i)).attr("fill", n).attr("stroke-width", this.pointStrokeWidthForSeries(i)).attr("stroke", this.pointStrokeColorForSeries(i)) }, n.prototype.pointStrokeWidthForSeries = function(t) { return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length] }, n.prototype.pointStrokeColorForSeries = function(t) { return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length] }, n.prototype.lineWidthForSeries = function(t) { return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth }, n.prototype.pointSizeForSeries = function(t) { return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize }, n.prototype.pointGrowSeries = function(t) { return Raphael.animation({ r: this.pointSizeForSeries(t) + 3 }, 25, "linear") }, n.prototype.pointShrinkSeries = function(t) { return Raphael.animation({ r: this.pointSizeForSeries(t) }, 25, "linear") }, n }(e.Grid), e.labelSeries = function(n, i, r, o, a) { var s, l, c, h, u, d, p, f, g, v, m; if (c = 200 * (i - n) / r, l = new Date(n), void 0 === (p = e.LABEL_SPECS[o]))
                for (g = 0, v = (m = e.AUTO_LABEL_ORDER).length; v > g; g++)
                    if (h = m[g], c >= (d = e.LABEL_SPECS[h]).span) { p = d; break } for (void 0 === p && (p = e.LABEL_SPECS.second), a && (p = t.extend({}, p, { fmt: a })), s = p.start(l), u = [];
                (f = s.getTime()) <= i;) f >= n && u.push([p.fmt(s), f]), p.incr(s); return u }, n = function(t) { return { span: 60 * t * 1e3, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours()) }, fmt: function(t) { return e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) }, incr: function(e) { return e.setUTCMinutes(e.getUTCMinutes() + t) } } }, i = function(t) { return { span: 1e3 * t, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes()) }, fmt: function(t) { return e.pad2(t.getHours()) + ":" + e.pad2(t.getMinutes()) + ":" + e.pad2(t.getSeconds()) }, incr: function(e) { return e.setUTCSeconds(e.getUTCSeconds() + t) } } }, e.LABEL_SPECS = { decade: { span: 1728e8, start: function(t) { return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1) }, fmt: function(t) { return "" + t.getFullYear() }, incr: function(t) { return t.setFullYear(t.getFullYear() + 10) } }, year: { span: 1728e7, start: function(t) { return new Date(t.getFullYear(), 0, 1) }, fmt: function(t) { return "" + t.getFullYear() }, incr: function(t) { return t.setFullYear(t.getFullYear() + 1) } }, month: { span: 24192e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), 1) }, fmt: function(t) { return t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) }, incr: function(t) { return t.setMonth(t.getMonth() + 1) } }, week: { span: 6048e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, fmt: function(t) { return t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate()) }, incr: function(t) { return t.setDate(t.getDate() + 7) } }, day: { span: 864e5, start: function(t) { return new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, fmt: function(t) { return t.getFullYear() + "-" + e.pad2(t.getMonth() + 1) + "-" + e.pad2(t.getDate()) }, incr: function(t) { return t.setDate(t.getDate() + 1) } }, hour: n(60), "30min": n(30), "15min": n(15), "10min": n(10), "5min": n(5), minute: n(1), "30sec": i(30), "15sec": i(15), "10sec": i(10), "5sec": i(5), second: i(1) }, e.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], e.Area = function(n) {
            function i(n) { var o; return this instanceof e.Area ? (o = t.extend({}, r, n), this.cumulative = !o.behaveLikeLine, "auto" === o.fillOpacity && (o.fillOpacity = o.behaveLikeLine ? .8 : 1), void i.__super__.constructor.call(this, o)) : new e.Area(n) } var r; return s(i, n), r = { fillOpacity: "auto", behaveLikeLine: !1 }, i.prototype.calcPoints = function() { var t, e, n, i, r, o, a; for (a = [], i = 0, r = (o = this.data).length; r > i; i++)(t = o[i])._x = this.transX(t.x), e = 0, t._y = function() { var i, r, o, a; for (a = [], i = 0, r = (o = t.y).length; r > i; i++) n = o[i], this.options.behaveLikeLine ? a.push(this.transY(n)) : (e += n || 0, a.push(this.transY(e))); return a }.call(this), a.push(t._ymax = Math.max.apply(Math, t._y)); return a }, i.prototype.drawSeries = function() { var t, e, n, i, r, o, a, s; for (this.seriesPoints = [], s = [], n = 0, i = (e = this.options.behaveLikeLine ? function() { o = []; for (var t = 0, e = this.options.ykeys.length - 1; e >= 0 ? e >= t : t >= e; e >= 0 ? t++ : t--) o.push(t); return o }.apply(this) : function() { a = []; for (var t = r = this.options.ykeys.length - 1; 0 >= r ? 0 >= t : t >= 0; 0 >= r ? t++ : t--) a.push(t); return a }.apply(this)).length; i > n; n++) t = e[n], this._drawFillFor(t), this._drawLineFor(t), s.push(this._drawPointFor(t)); return s }, i.prototype._drawFillFor = function(t) { var e; return null !== (e = this.paths[t]) ? (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))) : void 0 }, i.prototype.fillForSeries = function(t) { var e; return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l)) }, i.prototype.drawFilledPath = function(t, e) { return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none") }, i }(e.Line), e.Bar = function(n) {
            function i(n) { return this.onHoverOut = o(this.onHoverOut, this), this.onHoverMove = o(this.onHoverMove, this), this.onGridClick = o(this.onGridClick, this), this instanceof e.Bar ? void i.__super__.constructor.call(this, t.extend({}, n, { parseTime: !1 })) : new e.Bar(n) } return s(i, n), i.prototype.init = function() { return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new e.Hover({ parent: this.el }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0 }, i.prototype.defaults = { barSizeRatio: .75, barGap: 3, barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"], barOpacity: 1, barRadius: [0, 0, 0, 0], xLabelMargin: 50 }, i.prototype.calc = function() { var t; return this.calcBars(), !1 === this.options.hideHover ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0 }, i.prototype.calcBars = function() { var t, e, n, i, r, o, a; for (a = [], t = i = 0, r = (o = this.data).length; r > i; t = ++i)(e = o[t])._x = this.left + this.width * (t + .5) / this.data.length, a.push(e._y = function() { var t, i, r, o; for (o = [], t = 0, i = (r = e.y).length; i > t; t++) null != (n = r[t]) ? o.push(this.transY(n)) : o.push(null); return o }.call(this)); return a }, i.prototype.draw = function() { var t; return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries() }, i.prototype.drawXAxis = function() { var t, e, n, i, r, o, a, s, l, c, h, u, d; for (c = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), a = null, o = null, d = [], t = h = 0, u = this.data.length; u >= 0 ? u > h : h > u; t = u >= 0 ? ++h : --h) s = this.data[this.data.length - 1 - t], l = (e = this.drawXAxisLabel(s._x, c, s.label)).getBBox(), e.transform("r" + -this.options.xLabelAngle), n = e.getBBox(), e.transform("t0," + n.height / 2 + "..."), 0 !== this.options.xLabelAngle && (r = -.5 * l.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + r + ",0...")), (null == a || a >= n.x + n.width || null != o && o >= n.x) && n.x >= 0 && n.x + n.width < this.el.width() ? (0 !== this.options.xLabelAngle && (i = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), o = n.x - i), d.push(a = n.x - this.options.xLabelMargin)) : d.push(e.remove()); return d }, i.prototype.drawSeries = function() { var t, e, n, i, r, o, a, s, l, c, h, u, d, p, f; return n = this.width / this.options.data.length, s = this.options.stacked ? 1 : this.options.ykeys.length, t = (n * this.options.barSizeRatio - this.options.barGap * (s - 1)) / s, this.options.barSize && (t = Math.min(t, this.options.barSize)), u = n - t * s - this.options.barGap * (s - 1), a = u / 2, f = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null, this.bars = function() { var s, u, g, v; for (g = this.data, v = [], i = s = 0, u = g.length; u > s; i = ++s) l = g[i], r = 0, v.push(function() { var s, u, g, v; for (g = l._y, v = [], c = s = 0, u = g.length; u > s; c = ++s) null !== (p = g[c]) ? (f ? (d = Math.min(p, f), e = Math.max(p, f)) : (d = p, e = this.bottom), o = this.left + i * n + a, this.options.stacked || (o += c * (t + this.options.barGap)), h = e - d, this.options.verticalGridCondition && this.options.verticalGridCondition(l.x) && this.drawBar(this.left + i * n, this.top, n, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (d -= r), this.drawBar(o, d, t, h, this.colorFor(l, c, "bar"), this.options.barOpacity, this.options.barRadius), v.push(r += h)) : v.push(null); return v }.call(this)); return v }.call(this) }, i.prototype.colorFor = function(t, e, n) { var i, r; return "function" == typeof this.options.barColors ? (i = { x: t.x, y: t.y[e], label: t.label }, r = { index: e, key: this.options.ykeys[e], label: this.options.labels[e] }, this.options.barColors.call(this, i, r, n)) : this.options.barColors[e % this.options.barColors.length] }, i.prototype.hitTest = function(t) { return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length)))) }, i.prototype.onGridClick = function(t, e) { var n; return n = this.hitTest(t), this.fire("click", n, this.data[n].src, t, e) }, i.prototype.onHoverMove = function(t) { var e, n; return e = this.hitTest(t), (n = this.hover).update.apply(n, this.hoverContentForRow(e)) }, i.prototype.onHoverOut = function() { return !1 !== this.options.hideHover ? this.hover.hide() : void 0 }, i.prototype.hoverContentForRow = function(t) { var e, n, i, r, o, a, s; for (e = "<div class='morris-hover-row-label'>" + (i = this.data[t]).label + "</div>", n = o = 0, a = (s = i.y).length; a > o; n = ++o) r = s[n], e += "<div class='morris-hover-point' style='color: " + this.colorFor(i, n, "label") + "'>\n  " + this.options.labels[n] + ":\n  " + this.yLabelFormat(r) + "\n</div>"; return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, i.src)), [e, this.left + (t + .5) * this.width / this.data.length] }, i.prototype.drawXAxisLabel = function(t, e, n) { return this.raphael.text(t, e, n).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor) }, i.prototype.drawBar = function(t, e, n, i, r, o, a) { var s; return (0 === (s = Math.max.apply(Math, a)) || s > i ? this.raphael.rect(t, e, n, i) : this.raphael.path(this.roundedRect(t, e, n, i, a))).attr("fill", r).attr("fill-opacity", o).attr("stroke", "none") }, i.prototype.roundedRect = function(t, e, n, i, r) { return null == r && (r = [0, 0, 0, 0]), ["M", t, r[0] + e, "Q", t, e, t + r[0], e, "L", t + n - r[1], e, "Q", t + n, e, t + n, e + r[1], "L", t + n, e + i - r[2], "Q", t + n, e + i, t + n - r[2], e + i, "L", t + r[3], e + i, "Q", t, e + i, t, e + i - r[3], "Z"] }, i }(e.Grid), e.Donut = function(n) {
            function i(n) { this.resizeHandler = o(this.resizeHandler, this), this.select = o(this.select, this), this.click = o(this.click, this); var i = this; if (!(this instanceof e.Donut)) return new e.Donut(n); if (this.options = t.extend({}, this.defaults, n), this.el = "string" == typeof n.element ? t(document.getElementById(n.element)) : t(n.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
                void 0 !== n.data && 0 !== n.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && t(window).bind("resize", (function() { return null != i.timeoutId && window.clearTimeout(i.timeoutId), i.timeoutId = window.setTimeout(i.resizeHandler, 100) })), this.setData(n.data)) } return s(i, n), i.prototype.defaults = { colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"], backgroundColor: "#FFFFFF", labelColor: "#000000", formatter: e.commas, resize: !1 }, i.prototype.redraw = function() { var t, n, i, r, o, a, s, l, c, h, u, d, p, f, g, v, m, y, b, x, w, _; for (this.raphael.clear(), n = this.el.width() / 2, i = this.el.height() / 2, d = (Math.min(n, i) - 10) / 3, u = 0, p = 0, v = (b = this.values).length; v > p; p++) u += b[p]; for (l = 5 / (2 * d), t = 1.9999 * Math.PI - l * this.data.length, a = 0, o = 0, this.segments = [], r = f = 0, m = (x = this.values).length; m > f; r = ++f) c = a + l + t * (x[r] / u), (h = new e.DonutSegment(n, i, 2 * d, d, a, c, this.data[r].color || this.options.colors[o % this.options.colors.length], this.options.backgroundColor, o, this.raphael)).render(), this.segments.push(h), h.on("hover", this.select), h.on("click", this.click), a = c, o += 1; for (this.text1 = this.drawEmptyDonutLabel(n, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(n, i + 10, this.options.labelColor, 14), s = Math.max.apply(Math, this.values), o = 0, _ = [], g = 0, y = (w = this.values).length; y > g; g++) { if (w[g] === s) { this.select(o); break } _.push(o += 1) } return _ }, i.prototype.setData = function(t) { var e; return this.data = t, this.values = function() { var t, n, i, r; for (r = [], t = 0, n = (i = this.data).length; n > t; t++) e = i[t], r.push(parseFloat(e.value)); return r }.call(this), this.redraw() }, i.prototype.click = function(t) { return this.fire("click", t, this.data[t]) }, i.prototype.select = function(t) { var e, n, i, r; for (n = 0, i = (r = this.segments).length; i > n; n++) r[n].deselect(); return this.segments[t].select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e)) }, i.prototype.setLabels = function(t, e) { var n, i, r, o, a, s, l, c; return o = 1.8 * (n = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3), r = n / 2, i = n / 3, this.text1.attr({ text: t, transform: "" }), a = this.text1.getBBox(), s = Math.min(o / a.width, r / a.height), this.text1.attr({ transform: "S" + s + "," + s + "," + (a.x + a.width / 2) + "," + (a.y + a.height) }), this.text2.attr({ text: e, transform: "" }), l = this.text2.getBBox(), c = Math.min(o / l.width, i / l.height), this.text2.attr({ transform: "S" + c + "," + c + "," + (l.x + l.width / 2) + "," + l.y }) }, i.prototype.drawEmptyDonutLabel = function(t, e, n, i, r) { var o; return o = this.raphael.text(t, e, "").attr("font-size", i).attr("fill", n), null != r && o.attr("font-weight", r), o }, i.prototype.resizeHandler = function() { return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw() }, i }(e.EventEmitter), e.DonutSegment = function(t) {
            function e(t, e, n, i, r, a, s, l, c, h) { this.cx = t, this.cy = e, this.inner = n, this.outer = i, this.color = s, this.backgroundColor = l, this.index = c, this.raphael = h, this.deselect = o(this.deselect, this), this.select = o(this.select, this), this.sin_p0 = Math.sin(r), this.cos_p0 = Math.cos(r), this.sin_p1 = Math.sin(a), this.cos_p1 = Math.cos(a), this.is_long = a - r > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner) } return s(e, t), e.prototype.calcArcPoints = function(t) { return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1] }, e.prototype.calcSegment = function(t, e) { var n, i, r, o, a, s, l, c, h, u; return n = (h = this.calcArcPoints(t))[0], r = h[1], i = h[2], o = h[3], a = (u = this.calcArcPoints(e))[0], l = u[1], s = u[2], c = u[3], "M" + n + "," + r + "A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + o + "L" + s + "," + c + "A" + e + "," + e + ",0," + this.is_long + ",1," + a + "," + l + "Z" }, e.prototype.calcArc = function(t) { var e, n, i, r, o; return e = (o = this.calcArcPoints(t))[0], i = o[1], n = o[2], r = o[3], "M" + e + "," + i + "A" + t + "," + t + ",0," + this.is_long + ",0," + n + "," + r }, e.prototype.render = function() { var t = this; return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, (function() { return t.fire("hover", t.index) }), (function() { return t.fire("click", t.index) })) }, e.prototype.drawDonutArc = function(t, e) { return this.raphael.path(t).attr({ stroke: e, "stroke-width": 2, opacity: 0 }) }, e.prototype.drawDonutSegment = function(t, e, n, i, r) { return this.raphael.path(t).attr({ fill: e, stroke: n, "stroke-width": 3 }).hover(i).click(r) }, e.prototype.select = function() { return this.selected ? void 0 : (this.seg.animate({ path: this.selectedPath }, 150, "<>"), this.arc.animate({ opacity: 1 }, 150, "<>"), this.selected = !0) }, e.prototype.deselect = function() { return this.selected ? (this.seg.animate({ path: this.path }, 150, "<>"), this.arc.animate({ opacity: 0 }, 150, "<>"), this.selected = !1) : void 0 }, e }(e.EventEmitter) }.call(this),
    function(t) { t.fn.filemanager = function(e, n) { e = e || "file", this.on("click", (function(i) { var r = n && n.prefix ? n.prefix : "/filemanager",
                    o = t("#" + t(this).data("input")),
                    a = t("#" + t(this).data("preview")); return window.open(r + "?type=" + e, "FileManager", "width=900,height=600"), window.SetUrl = function(e) { var n = e.map((function(t) { return t.url })).join(",");
                    o.val("").val(n).trigger("change"), a.html(""), e.forEach((function(e) { a.append(t("<img>").css("height", "5rem").attr("src", e.thumb_url)) })), a.trigger("change") }, !1 })) } }(jQuery);
