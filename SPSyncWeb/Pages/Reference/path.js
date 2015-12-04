//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () { function n(n) { function t(t, r, e, u, i, o) { for (; i >= 0 && o > i; i += n) { var a = u ? u[i] : i; e = r(e, t[a], a, t) } return e } return function (r, e, u, i) { e = b(e, i, 4); var o = !k(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1; return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a) } } function t(n) { return function (t, r, e) { r = x(r, e); for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n) if (r(t[i], i, t)) return i; return -1 } } function r(n, t, r) { return function (e, u, i) { var o = 0, a = O(e); if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1; else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1; if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1; for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n) if (e[i] === u) return i; return -1 } } function e(n, t) { var r = I.length, e = n.constructor, u = m.isFunction(e) && e.prototype || a, i = "constructor"; for (m.has(n, i) && !m.contains(t, i) && t.push(i) ; r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i) } var u = this, i = u._, o = Array.prototype, a = Object.prototype, c = Function.prototype, f = o.push, l = o.slice, s = a.toString, p = a.hasOwnProperty, h = Array.isArray, v = Object.keys, g = c.bind, y = Object.create, d = function () { }, m = function (n) { return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3"; var b = function (n, t, r) { if (t === void 0) return n; switch (null == r ? 3 : r) { case 1: return function (r) { return n.call(t, r) }; case 2: return function (r, e) { return n.call(t, r, e) }; case 3: return function (r, e, u) { return n.call(t, r, e, u) }; case 4: return function (r, e, u, i) { return n.call(t, r, e, u, i) } } return function () { return n.apply(t, arguments) } }, x = function (n, t, r) { return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n) }; m.iteratee = function (n, t) { return x(n, t, 1 / 0) }; var _ = function (n, t) { return function (r) { var e = arguments.length; if (2 > e || null == r) return r; for (var u = 1; e > u; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) { var f = o[c]; t && r[f] !== void 0 || (r[f] = i[f]) } return r } }, j = function (n) { if (!m.isObject(n)) return {}; if (y) return y(n); d.prototype = n; var t = new d; return d.prototype = null, t }, w = function (n) { return function (t) { return null == t ? void 0 : t[n] } }, A = Math.pow(2, 53) - 1, O = w("length"), k = function (n) { var t = O(n); return "number" == typeof t && t >= 0 && A >= t }; m.each = m.forEach = function (n, t, r) { t = b(t, r); var e, u; if (k(n)) for (e = 0, u = n.length; u > e; e++) t(n[e], e, n); else { var i = m.keys(n); for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n) } return n }, m.map = m.collect = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) { var a = e ? e[o] : o; i[o] = t(n[a], a, n) } return i }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) { var e; return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0 }, m.filter = m.select = function (n, t, r) { var e = []; return t = x(t, r), m.each(n, function (n, r, u) { t(n, r, u) && e.push(n) }), e }, m.reject = function (n, t, r) { return m.filter(n, m.negate(x(t)), r) }, m.every = m.all = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (!t(n[o], o, n)) return !1 } return !0 }, m.some = m.any = function (n, t, r) { t = x(t, r); for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) { var o = e ? e[i] : i; if (t(n[o], o, n)) return !0 } return !1 }, m.contains = m.includes = m.include = function (n, t, r, e) { return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0 }, m.invoke = function (n, t) { var r = l.call(arguments, 2), e = m.isFunction(t); return m.map(n, function (n) { var u = e ? t : n[t]; return null == u ? u : u.apply(n, r) }) }, m.pluck = function (n, t) { return m.map(n, m.property(t)) }, m.where = function (n, t) { return m.filter(n, m.matcher(t)) }, m.findWhere = function (n, t) { return m.find(n, m.matcher(t)) }, m.max = function (n, t, r) { var e, u, i = -1 / 0, o = -1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u) }); return i }, m.min = function (n, t, r) { var e, u, i = 1 / 0, o = 1 / 0; if (null == t && null != n) { n = k(n) ? n : m.values(n); for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e) } else t = x(t, r), m.each(n, function (n, r, e) { u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u) }); return i }, m.shuffle = function (n) { for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i]; return u }, m.sample = function (n, t, r) { return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t)) }, m.sortBy = function (n, t, r) { return t = x(t, r), m.pluck(m.map(n, function (n, r, e) { return { value: n, index: r, criteria: t(n, r, e) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var F = function (n) { return function (t, r, e) { var u = {}; return r = x(r, e), m.each(t, function (e, i) { var o = r(e, i, t); n(u, e, o) }), u } }; m.groupBy = F(function (n, t, r) { m.has(n, r) ? n[r].push(t) : n[r] = [t] }), m.indexBy = F(function (n, t, r) { n[r] = t }), m.countBy = F(function (n, t, r) { m.has(n, r) ? n[r]++ : n[r] = 1 }), m.toArray = function (n) { return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : [] }, m.size = function (n) { return null == n ? 0 : k(n) ? n.length : m.keys(n).length }, m.partition = function (n, t, r) { t = x(t, r); var e = [], u = []; return m.each(n, function (n, r, i) { (t(n, r, i) ? e : u).push(n) }), [e, u] }, m.first = m.head = m.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t) }, m.initial = function (n, t, r) { return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t))) }, m.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t)) }, m.rest = m.tail = m.drop = function (n, t, r) { return l.call(n, null == t || r ? 1 : t) }, m.compact = function (n) { return m.filter(n, m.identity) }; var S = function (n, t, r, e) { for (var u = [], i = 0, o = e || 0, a = O(n) ; a > o; o++) { var c = n[o]; if (k(c) && (m.isArray(c) || m.isArguments(c))) { t || (c = S(c, t, r)); var f = 0, l = c.length; for (u.length += l; l > f;) u[i++] = c[f++] } else r || (u[i++] = c) } return u }; m.flatten = function (n, t) { return S(n, t, !1) }, m.without = function (n) { return m.difference(n, l.call(arguments, 1)) }, m.uniq = m.unique = function (n, t, r, e) { m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e)); for (var u = [], i = [], o = 0, a = O(n) ; a > o; o++) { var c = n[o], f = r ? r(c, o, n) : c; t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c) } return u }, m.union = function () { return m.uniq(S(arguments, !0, !0)) }, m.intersection = function (n) { for (var t = [], r = arguments.length, e = 0, u = O(n) ; u > e; e++) { var i = n[e]; if (!m.contains(t, i)) { for (var o = 1; r > o && m.contains(arguments[o], i) ; o++); o === r && t.push(i) } } return t }, m.difference = function (n) { var t = S(arguments, !0, !0, 1); return m.filter(n, function (n) { return !m.contains(t, n) }) }, m.zip = function () { return m.unzip(arguments) }, m.unzip = function (n) { for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e); return r }, m.object = function (n, t) { for (var r = {}, e = 0, u = O(n) ; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) { r = x(r, e, 1); for (var u = r(t), i = 0, o = O(n) ; o > i;) { var a = Math.floor((i + o) / 2); r(n[a]) < u ? i = a + 1 : o = a } return i }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) { null == t && (t = n || 0, n = 0), r = r || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n; return u }; var E = function (n, t, r, e, u) { if (!(e instanceof t)) return n.apply(r, u); var i = j(n.prototype), o = n.apply(i, u); return m.isObject(o) ? o : i }; m.bind = function (n, t) { if (g && n.bind === g) return g.apply(n, l.call(arguments, 1)); if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function"); var r = l.call(arguments, 2), e = function () { return E(n, e, t, this, r.concat(l.call(arguments))) }; return e }, m.partial = function (n) { var t = l.call(arguments, 1), r = function () { for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o]; for (; e < arguments.length;) i.push(arguments[e++]); return E(n, r, this, this, i) }; return r }, m.bindAll = function (n) { var t, r, e = arguments.length; if (1 >= e) throw new Error("bindAll must be passed function names"); for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n); return n }, m.memoize = function (n, t) { var r = function (e) { var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e); return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i] }; return r.cache = {}, r }, m.delay = function (n, t) { var r = l.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) { var e, u, i, o = null, a = 0; r || (r = {}); var c = function () { a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null) }; return function () { var f = m.now(); a || r.leading !== !1 || (a = f); var l = t - (f - a); return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i } }, m.debounce = function (n, t, r) { var e, u, i, o, a, c = function () { var f = m.now() - o; t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null))) }; return function () { i = this, u = arguments, o = m.now(); var f = r && !e; return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a } }, m.wrap = function (n, t) { return m.partial(t, n) }, m.negate = function (n) { return function () { return !n.apply(this, arguments) } }, m.compose = function () { var n = arguments, t = n.length - 1; return function () { for (var r = t, e = n[t].apply(this, arguments) ; r--;) e = n[r].call(this, e); return e } }, m.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, m.before = function (n, t) { var r; return function () { return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r } }, m.once = m.partial(m.before, 2); var M = !{ toString: null }.propertyIsEnumerable("toString"), I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]; m.keys = function (n) { if (!m.isObject(n)) return []; if (v) return v(n); var t = []; for (var r in n) m.has(n, r) && t.push(r); return M && e(n, t), t }, m.allKeys = function (n) { if (!m.isObject(n)) return []; var t = []; for (var r in n) t.push(r); return M && e(n, t), t }, m.values = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]]; return e }, m.mapObject = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n); return o }, m.pairs = function (n) { for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]]; return e }, m.invert = function (n) { for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e]; return t }, m.functions = m.methods = function (n) { var t = []; for (var r in n) m.isFunction(n[r]) && t.push(r); return t.sort() }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) { t = x(t, r); for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++) if (e = u[i], t(n[e], e, n)) return e }, m.pick = function (n, t, r) { var e, u, i = {}, o = n; if (null == o) return i; m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) { return t in r }, o = Object(o)); for (var a = 0, c = u.length; c > a; a++) { var f = u[a], l = o[f]; e(l, f, o) && (i[f] = l) } return i }, m.omit = function (n, t, r) { if (m.isFunction(t)) t = m.negate(t); else { var e = m.map(S(arguments, !1, !1, 1), String); t = function (n, t) { return !m.contains(e, t) } } return m.pick(n, t, r) }, m.defaults = _(m.allKeys, !0), m.create = function (n, t) { var r = j(n); return t && m.extendOwn(r, t), r }, m.clone = function (n) { return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n }, m.tap = function (n, t) { return t(n), n }, m.isMatch = function (n, t) { var r = m.keys(t), e = r.length; if (null == n) return !e; for (var u = Object(n), i = 0; e > i; i++) { var o = r[i]; if (t[o] !== u[o] || !(o in u)) return !1 } return !0 }; var N = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n === 1 / t; if (null == n || null == t) return n === t; n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped); var u = s.call(n); if (u !== s.call(t)) return !1; switch (u) { case "[object RegExp]": case "[object String]": return "" + n == "" + t; case "[object Number]": return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t; case "[object Date]": case "[object Boolean]": return +n === +t } var i = "[object Array]" === u; if (!i) { if ("object" != typeof n || "object" != typeof t) return !1; var o = n.constructor, a = t.constructor; if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1 } r = r || [], e = e || []; for (var c = r.length; c--;) if (r[c] === n) return e[c] === t; if (r.push(n), e.push(t), i) { if (c = n.length, c !== t.length) return !1; for (; c--;) if (!N(n[c], t[c], r, e)) return !1 } else { var f, l = m.keys(n); if (c = l.length, m.keys(t).length !== c) return !1; for (; c--;) if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1 } return r.pop(), e.pop(), !0 }; m.isEqual = function (n, t) { return N(n, t) }, m.isEmpty = function (n) { return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length }, m.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, m.isArray = h || function (n) { return "[object Array]" === s.call(n) }, m.isObject = function (n) { var t = typeof n; return "function" === t || "object" === t && !!n }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) { m["is" + n] = function (t) { return s.call(t) === "[object " + n + "]" } }), m.isArguments(arguments) || (m.isArguments = function (n) { return m.has(n, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function (n) { return "function" == typeof n || !1 }), m.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, m.isNaN = function (n) { return m.isNumber(n) && n !== +n }, m.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" === s.call(n) }, m.isNull = function (n) { return null === n }, m.isUndefined = function (n) { return n === void 0 }, m.has = function (n, t) { return null != n && p.call(n, t) }, m.noConflict = function () { return u._ = i, this }, m.identity = function (n) { return n }, m.constant = function (n) { return function () { return n } }, m.noop = function () { }, m.property = w, m.propertyOf = function (n) { return null == n ? function () { } : function (t) { return n[t] } }, m.matcher = m.matches = function (n) { return n = m.extendOwn({}, n), function (t) { return m.isMatch(t, n) } }, m.times = function (n, t, r) { var e = Array(Math.max(0, n)); t = b(t, r, 1); for (var u = 0; n > u; u++) e[u] = t(u); return e }, m.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, m.now = Date.now || function () { return (new Date).getTime() }; var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, T = m.invert(B), R = function (n) { var t = function (t) { return n[t] }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n } }; m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) { var e = null == n ? void 0 : n[t]; return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e }; var q = 0; m.uniqueId = function (n) { var t = ++q + ""; return n ? n + t : t }, m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var K = /(.)^/, z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) { return "\\" + z[n] }; m.template = function (n, t, r) { !t && r && (t = r), t = m.defaults({}, t, m.templateSettings); var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"), u = 0, i = "__p+='"; n.replace(e, function (t, r, e, o, a) { return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { var o = new Function(t.variable || "obj", "_", i) } catch (a) { throw a.source = i, a } var c = function (n) { return o.call(this, n, m) }, f = t.variable || "obj"; return c.source = "function(" + f + "){\n" + i + "}", c }, m.chain = function (n) { var t = m(n); return t._chain = !0, t }; var P = function (n, t) { return n._chain ? m(t).chain() : t }; m.mixin = function (n) { m.each(m.functions(n), function (t) { var r = m[t] = n[t]; m.prototype[t] = function () { var n = [this._wrapped]; return f.apply(n, arguments), P(this, r.apply(m, n)) } }) }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = o[n]; m.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r) } }), m.each(["concat", "join", "slice"], function (n) { var t = o[n]; m.prototype[n] = function () { return P(this, t.apply(this._wrapped, arguments)) } }), m.prototype.value = function () { return this._wrapped }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () { return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function () { return m }) }).call(this);
//# sourceMappingURL=underscore-min.map
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/

this["BOSTemplates"] = this["BOSTemplates"] || {};

this["BOSTemplates"]["templates/connector.html"] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="connector connector-' + ((__t = (type)) == null ? '' : __t) + '-' + ((__t = (version)) == null ? '' : __t) + '" id="path-element-' + ((__t = (id)) == null ? '' : __t) + '"  style="' + ((__t = (style)) == null ? '' : __t) + '"></div>'; } return __p };

this["BOSTemplates"]["templates/layout.html"] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div id="panels">\n</div><div id="path" class="path">\n</div><div class="path path-example">\n<div class="connector connector-2x1-horizontal"></div>\n<div class="connector connector-2x1-vertical-down"></div>\n<div class="connector connector-2x1-vertical-up"></div><div class="connector connector-3x1-horizontal-down"></div>\n<div class="connector connector-3x1-horizontal-up"></div>\n<div class="connector connector-3x1-vertical-down-right"></div>\n<div class="connector connector-3x1-vertical-up-right"></div><div class="connector connector-3x2-horizontal-down"></div>\n<div class="connector connector-3x2-horizontal-mirror-right"></div>\n<div class="connector connector-3x2-horizontal-mirror-up"></div>\n<div class="connector connector-3x2-horizontal-up"></div>\n<div class="connector connector-3x2-vertical-down-bottom"></div>\n<div class="connector connector-3x2-vertical-mirror-right"></div>\n<div class="connector connector-3x2-vertical-up-right"></div>\n<div class="connector connector-3x2-vertical-up-top"></div><div class="connector connector-3x3-down-right"></div>\n<div class="connector connector-3x3-horizontal-down"></div><div class="connector connector-3x3-horizontal-up"></div>\n<div class="connector connector-3x3-up-right"></div>\n</div>'; } return __p };

//this["BOSTemplates"]["templates/panel.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="panel ' +((__t = ( css_class )) == null ? '' : __t) +'" style="' +((__t = ( style )) == null ? '' : __t) +'"><div class="inset-section inset-left"></div><div class="content">\n<h2>' +((__t = ( title )) == null ? '' : __t) +'</h2><div class="subtitle">Top Tips</div>\n<ul>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n<li>tellus rhoncus ut eleifend nibh porttitor.</li>\n<li>Ut in nulla enim. Phasellus molestie</li>\n<li>magna non est bibendum non venenatis</li>\n</ul>\n</div><div class="inset-section inset-right"></div></div>';}return __p};
this["BOSTemplates"]["templates/panel.html"] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="panel ' + ((__t = (css_class)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '"><div class="inset-section inset-left"></div><div class="content">\n<h2>' + ((__t = (title)) == null ? '' : __t) + '</h2><div class="subtitle">' + ((__t = (subtitle)) == null ? '' : __t) + '</div>\n<ul>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n<li>tellus rhoncus ut eleifend nibh porttitor.</li>\n<li>Ut in nulla enim. Phasellus molestie</li>\n<li>magna non est bibendum non venenatis</li>\n</ul>\n</div><div class="inset-section inset-right"></div></div>'; } return __p };
this["BOSTemplates"]["templates/step.html"] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape, __j = Array.prototype.join; function print() { __p += __j.call(arguments, '') } with (obj) { __p += '<div class="step ' + ((__t = (status)) == null ? '' : __t) + ' ' + ((__t = (isCurrentStep() ? 'current' : '')) == null ? '' : __t) + ' ' + ((__t = (name)) == null ? '' : __t) + '" data-step-id="' + ((__t = (id)) == null ? '' : __t) + '" id="path-element-' + ((__t = (id)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '">\n<div><span class="ms-noWrap ms-imnSpan">\n<span href="#" onclick="showContactCard(event);"  style="margin-left:' + (isCurrentStep() ? '192px; z-index:100;' : '99px;') + '" class="ms-spimn-presenceWrapper ms-imnImg ms-spimn-imgSize-8x72" tabindex="-1">\n<img name="imnmark" title="" showofflinepawn="1" class="ms-spimn-img ms-spimn-presence-offline-8x72x32" src="/_layouts/15/images/spimn.png" alt="Available" sip="' + personEmail + '"id="imn_' + Math.floor((1 + Math.random()) * 0x10000) + ',type=sip"/>\n</span>\n</span></div>\n<div class="overlay"></div>\n<div class="bg" style="background: url(\'/sites/mktdemodev/SitePages/Invoice/app/images/' + ((__t = (personImageClass)) == null ? '' : __t) + '.png\') no-repeat;"></div>\n'; if (isCurrentStep()) {; __p += '\n<div class="icon-wrapper">\n<div class="icon ' + ((__t = (iconName())) == null ? '' : __t) + '"></div>\n</div>\n<div class="time-left">' + ((__t = (pendingDays)) == null ? '' : __t) + ' days</div>\n'; }; __p += '\n'; if (hasSubflow()) {; __p += '\n<div class="ellipses">...</div>\n'; } else {; __p += '\n'; if (status === 'Complete') {; __p += '\n<div class="status">' + ((__t = (status)) == null ? '' : __t) + '</div>\n'; }; __p += '\n<div class="name">' + ((__t = (name)) == null ? '' : __t) + '</div>\n'; }; __p += '\n</div>'; } return __p };

this["BOSTemplates"]["panel"] = this["BOSTemplates"]["panel"] || [];
this["BOSTemplates"]["panel"][0] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="panel ' + ((__t = (css_class)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '"><div class="inset-section inset-left"></div><div class="content">\n<div class="mock"><img src="/sites/mktdemodev/SitePages/Invoice/app/images/' + ((__t = (stepmock)) == null ? '' : __t) + '.png" alt=""></img></div>\n<h2 style="display:none">' + ((__t = (title)) == null ? '' : __t) + '</h2><div class="subtitle" style="display:none">' + ((__t = (subtitle)) == null ? '' : __t) + '</div>\n<ul style="display:none>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n<li>tellus rhoncus ut eleifend nibh porttitor.</li>\n<li>Ut in nulla enim. Phasellus molestie</li>\n<li>magna non est bibendum non venenatis</li>\n</ul>\n</div><div class="inset-section inset-right"></div></div>'; } return __p };

//this["BOSTemplates"]["panel"][1] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="panel ' +((__t = ( css_class )) == null ? '' : __t) +'" style="' +((__t = ( style )) == null ? '' : __t) +'"><div class="inset-section inset-left"></div><div class="content">\n<h2>' +((__t = ( title )) == null ? '' : __t) +'</h2><div class="subtitle">' +((__t = ( subtitle )) == null ? '' : __t) +'</div>\n<ul>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n<li>tellus rhoncus ut eleifend nibh porttitor.</li>\n<li>Ut in nulla enim. Phasellus molestie</li>\n<li>magna non est bibendum non venenatis</li>\n</ul>\n</div><div class="inset-section inset-right"></div></div>';}return __p};
this["BOSTemplates"]["panel"][1] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="panel ' + ((__t = (css_class)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '"><div class="inset-section inset-left"></div><div class="content">\n<h2>' + ((__t = (title)) == null ? '' : __t) + '</h2><div class="subtitle">' + ((__t = (subtitle)) == null ? '' : __t) + '</div>\n<div id="workflowConversation">\n<div data-bind="foreach: allCommentArray" class="conversationWrapper" >\n<div class="ellipsisContainer">\n<div class="person_image">\n<img data-bind="attr: {title: AuthorName,src:ImgSrc }">\n</div>\n<p data-bind="text:Comments" class="comment2 ellipsisElement"></p>\n</div></div>\n<div style="margin: 5px;padding-right: 80px; position: relative;">\n<input id="addCommentsInput" class="swiper-no-swiping" style="width: 95%;height: 24px;" type="text" placeholder="Add your comment here">\n<div id="addCommentsButton" class="swiper-no-swiping" >SEND</div>\n</div>\n</div></div><div class="inset-section inset-right"></div></div>'; } return __p };
this["BOSTemplates"]["panel"][2] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="panel ' + ((__t = (css_class)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '"><div class="inset-section inset-left"></div><div class="content">\n<h2>' + ((__t = (title)) == null ? '' : __t) + '</h2>\n<div class="mockinsight ' + ((__t = (mockinsight)) == null ? '' : __t) + '"><img src="/sites/mktdemodev/SitePages/Invoice/app/images/' + ((__t = (mockinsight)) == null ? '' : __t) + '.png" alt=""></img></div>\n<ul>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n</ul><div class="action advance">' + ((__t = (actionname[0])) == null ? '' : __t) + '</div>\n<div class="action">' + ((__t = (actionname[1])) == null ? '' : __t) + '</div>\n<div class="action">' + ((__t = (actionname[2])) == null ? '' : __t) + '</div>\n<div class="action">' + ((__t = (actionname[3])) == null ? '' : __t) + '</div>\n<div class="action">' + ((__t = (actionname[4])) == null ? '' : __t) + '</div>\n</div></div>'; } return __p };
this["BOSTemplates"]["panel"][3] = function (obj) { obj || (obj = {}); var __t, __p = '', __e = _.escape; with (obj) { __p += '<div class="panel ' + ((__t = (css_class)) == null ? '' : __t) + '" style="' + ((__t = (style)) == null ? '' : __t) + '"><div class="inset-section inset-left"></div><div class="content">\n<h2>' + ((__t = (title)) == null ? '' : __t) + '</h2>\n<div class="mockinsight ' + ((__t = (mockinsight)) == null ? '' : __t) + '"><img src="/sites/mktdemodev/SitePages/Invoice/app/images/' + ((__t = (mockinsight)) == null ? '' : __t) + '.png" alt=""></img></div>\n<ul>\n<li>Vivamus hendrerit arcu sed erat mo</li>\n<li>lestie vehicula. Sed auctor neque eu</li>\n</ul>\n<div class="action">Payment Sent</div>\n<div class="action">Dispute</div>\n<div class="action">Promise to Pay</div>\n<div class="action PTP">Payment Plan</div>\n<div class="action advance">Unreachable</div>\n</div><div class="inset-section inset-right"></div></div>'; } return __p };

//for skype contact card click
var showContactCard = function (event) {
    IMNImageOnClick(event);
    event.stopPropagation();
    return false;
}


// Sample workflow data

var WF_STEP_NAME = {
    APPROVAL: 'Approval',
    CREATEMAIL: 'Create Letter',
    MAIL: 'Send Letter',
    CALL: 'Call Customer',
    COMPLETE: 'Apply Cash',
    EXCEPTION: 'Exception'
};

var WF_STEP_STATUS = {
    NOTSTARTED: 'Not Started',
    IN_PROGRESS: 'In Progress',
    COMPLETE: 'Complete'
};

var workflow60days = {
    steps: [
      { name: WF_STEP_NAME.APPROVAL, status: WF_STEP_STATUS.COMPLETE },
      { name: WF_STEP_NAME.CREATEMAIL, status: WF_STEP_STATUS.COMPLETE },
      { name: WF_STEP_NAME.MAIL, status: WF_STEP_STATUS.COMPLETE },
      {
          name: WF_STEP_NAME.CALL,
          status: WF_STEP_STATUS.COMPLETE,
          subflow: [
            { name: WF_STEP_NAME.APPROVAL, status: WF_STEP_STATUS.COMPLETE },
            { name: WF_STEP_NAME.MAIL, status: WF_STEP_STATUS.IN_PROGRESS },
            // { name: WF_STEP_NAME.MAIL, status:WF_STEP_STATUS.COMPLETE },
            { name: WF_STEP_NAME.CALL, status: WF_STEP_STATUS.NOTSTARTED }
          ]
      },
      // { name: WF_STEP_NAME.APPROVAL, status:WF_STEP_STATUS.NOTSTARTED },
      { name: WF_STEP_NAME.COMPLETE, status: WF_STEP_STATUS.NOTSTARTED }
    ]
};

var pregenerated60DayPath = [
  { port: 'R', connector: '3x2-horizontal-down' },
  { port: 'R', connector: '3x2-vertical-up-top' },
  {
      port: 'T', connector: '3x2-horizontal-mirror-right',
      subflow: [
        { port: 'R', connector: '3x2-horizontal-down' },
        { port: 'R', connector: '3x2-horizontal-down' },
        { port: 'R', connector: '2x1-horizontal' }
      ]
  },
  { port: 'B', connector: '3x2-vertical-mirror-right' },
  { port: 'B', connector: '3x1-vertical-down-right' }
];

var workflow30days = {
    steps: [
      { name: WF_STEP_NAME.APPROVAL, status: WF_STEP_STATUS.COMPLETE },
      { name: WF_STEP_NAME.CREATEMAIL, status: WF_STEP_STATUS.COMPLETE },
      { name: WF_STEP_NAME.MAIL, status: WF_STEP_STATUS.IN_PROGRESS },
      { name: WF_STEP_NAME.COMPLETE, status: WF_STEP_STATUS.NOTSTARTED }
    ]
};

var pregenerated30DayPath = [
  { port: 'T', connector: '3x2-horizontal-mirror-right' },
  { port: 'B', connector: '3x2-vertical-mirror-right' },
  { port: 'T', connector: '3x2-horizontal-mirror-right' }
];


/*
// Returns a random integer between min (inclusive) and max (inclusive)
// Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
// Given an array of keys and array of probabilities, this function will return a chosen key
// Higher positive weight == higher probabilty of being picked
// 0 or negative weight == never chosen
*/
function chooseFromWeightedKeys(objectArray, weightArray) {
    // Pick random number between 0 and 1
    var randomNum,
        totalSum = 0,
        weightSum = 0,
        chosenObject;

    // First figure out total weight sum
    _.each(weightArray, function (weight) {
        if (weight > 0)
            totalSum += weight;
    });

    // Pick random num between 0 and total weight
    randomNum = Math.random() * totalSum;

    // Iterate through each possible outcome, adding its probably to the weightSum
    // If our random number is <= weightSum, we've arrived at the right option
    //
    for (var i = 0; i < weightArray.length; i++) {
        if (weightArray[i] > 0) {
            weightSum += weightArray[i];
            if (randomNum <= weightSum) {
                chosenObject = objectArray[i];
                break;
            }
        }
    }
    return chosenObject;
}

// Hack for not having unique object ids
gid = 0;
function idCounter() {
    return gid++;
}

function oppositePortLocation(portIndex) {
    if (portIndex === 'L') {
        return 'R';
    } else if (portIndex === 'T') {
        return 'B';
    } else if (portIndex === 'R') {
        return 'L';
    } else if (portIndex === 'B') {
        return 'T';
    } else {
        return null;
    }
}

var Step = function Step(stepData) {
    this.id = idCounter();
    this.name = stepData.name;
    this.status = stepData.status;
    this.personImageClass = stepData.personImageClass;
    this.personID = stepData.stepOwner != undefined ? stepData.stepOwner.id : '';
    this.personEmail = stepData.stepOwner != undefined ? stepData.stepOwner.email : '';
    this.inSubflow = false;
    this.actionId = stepData.actionId;
    this.pendingDays = stepData.recentActDate;

    // Each step has four possible connection points, which are labeled below
    //   1
    // 0   2
    //   3
    // Each one can have one connector (although most steps just have one incoming and one outgoing)
    this.connections = { 'L': null, 'T': null, 'R': null, 'B': null };

    // Step types
    // 1. Approval - WF_STEP_NAME.APPROVAL
    // 2. Create email - WF_STEP_NAME.CREATEMAIL
    // 3. Send email -  WF_STEP_NAME.MAIL
    // 4. Call customer - WF_STEP_NAME.COMPLETE
    // 5. Complete - WF_STEP_NAME.COMPLETE -- huh?? isn't this a state?
    // 6. Subflow

    // This doesn't instantiate subflow if there is one - that is handled by _instantiateSteps method
    //this.subflow = stepData.subflow ? stepData.subflow : {};
    this.subflow = { steps: [] };

    this.calculateDimensions();

    if (this.isCurrentStep()) {
        this.portLocations = { 'L': [0, 0.5], 'T': [0.5, 0], 'R': [2, 0.5], 'B': [0.5, 1] };
        setTimeout(ProcessImn, 2000);

    } else {
        this.portLocations = { 'L': [0, 0.5], 'T': [0.5, 0], 'R': [1, 0.5], 'B': [0.5, 1] };
    }

    return this;
};

Step.prototype.hasSubflow = function () {
    return this.name === WF_STEP_NAME.EXCEPTION;
};

Step.prototype.isCurrentStep = function () {
    return this.status === WF_STEP_STATUS.IN_PROGRESS;
};

// Dimensions - [w,h]
Step.prototype.calculateDimensions = function () {
    if (this.isCurrentStep()) {
        this.dimensions = [2, 1];
    } else {
        this.dimensions = [1, 1];
    }
};

// Iterates all direct connections and returns array of connector types used
Step.prototype.connectorTypesUsed = function () {
    return _.map(this.connections, function (connector, key) {
        return connector.type;
    });
};

Step.prototype.iconName = function () {
    return this.name.replace(/\s+/, '-').toLowerCase();
};

Step.prototype.calculateYOffset = function (fromPort, toPort) {
    var start = this.portLocations[fromPort];
    var end = this.portLocations[toPort];
    return end[1] - start[1];
};

// There are four connector types (2x1, 3x1, 3x2, 3x3)
// They can be rotated in (most) directions - any rotations that would turn the path backward have been ignored.
//
// In the future I could see a more advanced version simply being able to rotate or mirror and decide which variation to use, and 
//    calculate dimensions and input/output points after that rotation and/or mirroring.
// 
// Each connector has a 1x2 matrix of where it has connection points (using the same coordinates as steps).
// Conection points use same indexing as steps to refer to their connection points:
//   T
// L   R
//   B
//
// You also need to calculate, using an internal coordinate system, where point each in/out point lies.
//   The coordinate system starts top, left at 0,0. Positive Y direction moves down from top.
//   For a 3x2 connector that looks like this: ===
//                                               =
//   You'd have a in-port of L and an out-port of B
//   Those coordinates would be: L --> [0,0.5]  B --> [2.5,2]
//
// This is a pre-generated set of valid rotations:
//
var ConnectorTypes = {
    '2x1': {                                  // Connector type - one image asset per connector type
        'horizontal': [                         // Version of this type
          [2, 1], ['L', 'R'], [[0, 0.5], [2, 0.5]]  // [width,height], [in-port-index, exit-port-index], [in-port-x-y-multipliers, exit-port-x-y-multipliers]
        ],
        'vertical-down': [
          [1, 2], ['T', 'B'], [[0.5, 0], [0.5, 2]]
        ],
        'vertical-up': [
          [1, 2], ['B', 'T'], [[0.5, 2], [0.5, 0]]
        ]
    },
    '3x1': {
        'horizontal-down': [
          [3, 1], ['L', 'B'], [[0, 0.5], [2.5, 1]]
        ],
        'horizontal-up': [
          [3, 1], ['L', 'T'], [[0, 0.5], [2.5, 0]]
        ],
        'vertical-down-right': [
          [1, 3], ['T', 'R'], [[0.5, 0], [1, 2.5]]
        ],
        'vertical-up-right': [
          [1, 3], ['B', 'R'], [[0.5, 3], [1, 0.5]]
        ]
    },
    '3x2': {
        'horizontal-down': [
          [3, 2], ['L', 'B'], [[0, 0.5], [2.5, 2]]
        ],
        'horizontal-up': [
          [3, 2], ['L', 'T'], [[0, 1.5], [2.5, 0]]
        ],
        'horizontal-mirror-right': [
          [3, 2], ['B', 'R'], [[0.5, 2], [3, 0.5]]
        ],
        'horizontal-mirror-up': [
          [3, 2], ['T', 'R'], [[0.5, 0], [3, 1.5]]
        ],
        'vertical-up-right': [
          [2, 3], ['B', 'R'], [[0.5, 3], [2, 0.5]]
        ],
        'vertical-up-top': [
          [2, 3], ['L', 'T'], [[0, 2.5], [1.5, 0]]
        ],
        'vertical-mirror-right': [
          [2, 3], ['T', 'R'], [[0.5, 0], [2, 2.5]]
        ],
        'vertical-down-bottom': [
          [2, 3], ['L', 'B'], [[0, 0.5], [1.5, 3]]
        ]
    },
    '3x3': {
        'horizontal-down': [
          [3, 3], ['L', 'B'], [[0, 0.5], [2.5, 3]]
        ],
        'horizontal-up': [
          [3, 3], ['L', 'T'], [[0, 2.5], [2.5, 0]]
        ],
        'up-right': [
          [3, 3], ['B', 'R'], [[0.5, 3], [3, 0.5]]
        ],
        'down-right': [
          [3, 3], ['T', 'R'], [[0.5, 0], [3, 2.5]]
        ]
    }
};

var Connector = function Connector(type, version) {
    // Initialize with result from ConnectorDecider.decide()

    data = ConnectorTypes[type][version];

    if (!data) {
        throw 'Invalid connector type (' + type + ') or version (' + version + ')';
    } else {

        this.id = idCounter();
        this.type = type;
        this.version = version;
        this.dimensions = data[0];

        this._validConnectionPorts = data[1];
        // I had previously used integers as keys... but that just doesn't work in javascript objects
        this.connections = { 'L': null, 'T': null, 'R': null, 'B': null };

        this.portLocations = { 'L': null, 'T': null, 'R': null, 'B': null };
        this.portLocations[data[1][0]] = data[2][0];
        this.portLocations[data[1][1]] = data[2][1];

        this.yOffset = this.calculateYOffset();
    }
};

// Integer - index of input connector location
Connector.prototype.inputPortIndex = function () {
    return this._validConnectionPorts[0];
};

// Integer - index of output connector location
Connector.prototype.outputPortIndex = function () {
    return this._validConnectionPorts[1];
};

Connector.prototype.calculateYOffset = function () {
    var start = this.portLocations[this._validConnectionPorts[0]];
    var end = this.portLocations[this._validConnectionPorts[1]];
    return end[1] - start[1];
};


// ConnectorDecider - a singleton class that is used to decide what connector type to use next
var ConnectorDecider = {
    // decide: function that decides what connector to display next, and returns Connector object
    //
    // outputProbabilities: (array) - current step output port probabilities
    //                      e.g. [0, 0.25, 0.5, 0.25] -- no probability of port 0, 25% port 1, etc.
    // previousConnectorTypes: (array) ['2x1'] -- ideally don't use same connector twice in a row
    //
    decide: function (inputPort, previousYOffset, previousConnectorTypes) {
        if (!previousConnectorTypes)
            previousConnectorTypes = [];

        // Cache connectors by inputs
        this._mapConnectorsByInputPoint();

        // HACK - need instantiated connectors, so having to instantiate them every time to calc yoffset
        var possibleConnectors = [];

        var offsetsSum = 0;

        _.each(this._connectorsByInputIndex[inputPort], function (connectorData) {
            var connector = new Connector(connectorData.type, connectorData.version);
            offsetsSum += Math.abs(connector.yOffset);
            possibleConnectors.push(connector);
        });

        var avgOffset = Math.floor(offsetsSum / possibleConnectors.length);

        var connectorWeights = [];

        // Weight connectors by their y offset
        // Don't include any connectors that go in same direction as previous y offset
        // Increment any offset by 1 for those that aren't same connector type

        // Connectors that go in opposite direction as previous y offset should have higher probability.
        // Connectors that are neutral should be low probability.
        // Connectors that go in same direction as previous y offset should have no probability.

        _.each(possibleConnectors, function (connector) {
            // Start weight with the yOffset
            var weight = Math.abs(connector.yOffset);

            if (previousYOffset !== 0) {

                if (previousYOffset > 0 && connector.yOffset > 0 || previousYOffset < 0 && connector.yOffset < 0) {
                    weight = weight * (1 / Math.abs(previousYOffset));
                } else {
                    weight *= Math.abs(previousYOffset);
                }
            }

            // Subtract weight for previous connector type(s)
            if (previousConnectorTypes.indexOf(connector.type) !== -1) {
                weight *= 0.65;
            }

            connectorWeights.push(weight);
        });

        //console.log(_.map(possibleConnectors, function(c){ return c.type + '-' + c.version;  }));
        //console.log(connectorWeights);

        // Now choose randomly from these available connectors
        var connectorObj = chooseFromWeightedKeys(possibleConnectors, connectorWeights);

        // Return as Connector object
        return connectorObj;
    },

    _mapConnectorsByInputPoint: function () {
        if (!this._connectorsByInputIndex) {
            this._connectorsByInputIndex = {};
            _.each(ConnectorTypes, function (versions, type) {
                _.each(versions, function (data, version) {
                    if (this._connectorsByInputIndex[data[1][0]] === undefined)
                        this._connectorsByInputIndex[data[1][0]] = [];
                    this._connectorsByInputIndex[data[1][0]].push({ type: type, version: version, data: data });
                }.bind(this));
            }.bind(this));
        }
    }
};

// PATH
// A path is a linked-list-esque data structure, where each step has four connection points, 
//  and from each of those connection points there could be a connector leading to another step.
//
// You can generate a path by passing in a workflow, and it will automatically generate a path.
// Optionally you can pass a pregenerated path to generate that.
//
// Params:
// workflow -- see workflow JSON data at top of this file.
// pregeneratedPath - an array of port and connector choices. See pregenerated30DayPath above.
//
var Path = function Path(workflow, pregeneratedPath) {
    this._workflow = workflow;
    this._pregeneratedPath = pregeneratedPath;
    this._pathWeight = 0;
    this.stepsById = {}; // indexed by id as string
    this._subflowStart = -1;// subflow start point.
    if (this._workflow) {
        var steps = this._instantiateStepsFromData(this._workflow.steps);
        this.firstStep = this._generatePathForSteps(steps, this._pregeneratedPath, false);
    } else {
        console.log('Path: a workflow was not loaded, so no path will be generated');
    }
};

Path.prototype._instantiateStepsFromData = function (stepsData, inSubflow) {
    var steps = [];
    _.each(stepsData, function (stepData) {
        var step = new Step(stepData);
        step.inSubflow = inSubflow === true;
        // Have to store by string (can't use integers as object keys)
        this.stepsById[step.id.toString()] = step;

        // Instantiate subflow
        if (stepData.subflow && stepData.subflow.steps.length > 0 && stepData.subflow.steps[0].status != WF_STEP_STATUS.NOTSTARTED) {
            if (this._subflowStart == -1) this._subflowStart = step.id;
            step.subflow.steps = this._instantiateStepsFromData(stepData.subflow.steps, true);
        }
        steps.push(step);
    }.bind(this));
    return steps;
};

// Uses ruleset and probabilistic heuristics to generate a graphically-pleasing matrix
// Modifies steps objects in-place (connections are added to them)
// Returns first step of this path -- this function can be called recursively to generate subflows
//
Path.prototype._generatePathForSteps = function (steps, pregeneratedPath, isSubflow) {
    var currentY = 0,
        firstStep,
        prevStep,
        currentStep,
        nextStep,
        predefinedDecision;

    for (i = 0; i < steps.length; i++) {
        currentStep = steps[i];

        if (i === 0) {
            firstStep = currentStep;
        }

        // If this step has a subflow, we do need to generate the path/connections for that
        // The subflow turns into the current flow, and the current flow stops at a [...] step.

        if (!isSubflow && currentStep.subflow.steps && currentStep.subflow.steps.length > 0 && currentStep.subflow.steps[0].status != WF_STEP_STATUS.NOTSTARTED) {
            // Add step to visually show subflow
            debugger;
            var nextPredefinedDecision = pregeneratedPath && pregeneratedPath[i + 1] ? pregeneratedPath[i + 1] : null;
            var subflowStep = new Step({ name: WF_STEP_NAME.EXCEPTION, status: WF_STEP_STATUS.NOTSTARTED });
            this._generateConnection(null, currentStep, subflowStep, true, nextPredefinedDecision);

            // Add current step to beginning of subflow
            var subflowSteps = [currentStep].concat(currentStep.subflow.steps);
            predefinedDecision = pregeneratedPath ? pregeneratedPath[i - 1] : null;
            this._generatePathForSteps(subflowSteps, (predefinedDecision && predefinedDecision ? predefinedDecision.subflow : null), true);

            // For now: don't generate actual steps for subflow. Too hard to deal with layout complexities and overlap with main path
            // Set i to the end to stop rendering current path flow
            //
            i = steps.length;

        } else if (steps[i + 1]) {
            // Only generate connections on this step if there is a next step
            //
            nextStep = steps[i + 1];
            predefinedDecision = pregeneratedPath ? pregeneratedPath[i] : null;

            //console.log('generate connection between ' + currentStep.id + ' and ' + nextStep.id);
            // Will recursively generate necessary connections between current and next step
            // Previous step is provided for context
            this._generateConnection(prevStep, currentStep, nextStep, isSubflow, predefinedDecision);
        }

        prevStep = currentStep;
    }

    return firstStep;
};

// Generate connections between two steps
// Rules:
/*

1) Always start at y = 0.
2) Probability of using connecting position for step #1: 2 = 0.5, 1 = .25, 3 = .25
3) Probability of connector types - any one that starts with connector on 0, and ends with a connector on 1, 2 or 3.
4) Weight towards baseline STRONGER for shorter path (so if we deviate then return back almost immediately and go higher up)

Decisions:
1) What type? steps[current_index] (recursively do path on subflow)
2) Choose y position. First step always 0. Next step 33% probability 1, 0, -1. Step after - uses weight. Step 1 (0) + Step 1 (1) = 1. So next should be 0.
3) Choose outgoing connector location. First step probability: 2 = 60%, 1 & 3 = 20%. Second step - predicated on previous direction.
4) Choose connector type starting with connector location from previous step. Can't use same connector type as previous step. Connector defines connection point on other side.
*/

Path.prototype._generateConnection = function (prevStep, currentStep, nextStep, isSubflow, predefinedDecision) {
    // Probabilities DON'T have to add to 1, it's more like a weighting system
    // outputProbabilities are for outgoing port, between the current step and it's next connector
    // #0 (backwards) should always be 0% probability
    var ports = ['L', 'T', 'R', 'B'],
        outputProbabilities = [0, 0.333, 0.333, 0.333],
        previousConnectorTypes = ['3x1'], // reduce use of 3x1
        numConnectorTypes = _.keys(ConnectorTypes).length,
        previousYOffset = 0,
        previousPort,
        outputPort,
        inputPort;

    // As a reminder, index for connector locations:
    //   T
    // L   R
    //   B

    if (!predefinedDecision) {
        if (isSubflow && !currentStep.connections.B) {
            // Hardcode port usage if bottom is open
            // Update yOffset to trigger ideal scenario of subflow going directly down
            outputPort = 'B';
            previousYOffset = -5;
        } else {
            if (!prevStep) {
                // Higher probability of going directly right, can't go backwards
                outputProbabilities = [0, 0.5, 4, 0.5];
            } else {
                // Check to see connections on previous step so we don't use those same types again
                _.each(currentStep.connections, function (connector, port) {
                    if (connector) {
                        // reduce prob of this connector type - unless 3x2
                        if (connector.type !== '3x2') {
                            previousConnectorTypes.push(connector.type);
                        }

                        // find connector to prevStep and get previous yOffset to go in opposite direction
                        _.each(connector.connections, function (step, index) {
                            if (step && step.id === prevStep.id) {
                                previousYOffset = connector.yOffset;
                            }
                        });

                        // Reduce probability of same port to 0
                        outputProbabilities[ports.indexOf(port)] = 0;
                        previousPort = port;
                    }
                });
            }

            // Weight ports based on previous direction - if we have an offset
            if (previousPort) {
                if (previousPort === 'T' || previousPort === 'B') {
                    outputProbabilities[ports.indexOf(oppositePortLocation(previousPort))] = 0;
                }
            }
            outputPort = chooseFromWeightedKeys(ports, outputProbabilities);
        }

        inputPort = oppositePortLocation(outputPort);

        //console.log('output: ' + outputPort + ' input: ' + inputPort + ' prevYOffset: ' + previousYOffset);

        connector = ConnectorDecider.decide(inputPort, previousYOffset, previousConnectorTypes);
    } else {
        outputPort = predefinedDecision.port;
        inputPort = oppositePortLocation(outputPort);

        // Connector string is: 3x2-mirror-right -- needs to be split into type and version
        var connectorType = predefinedDecision.connector.match(/(\w+)\-/)[1];
        var connectorVersion = predefinedDecision.connector.replace(connectorType + '-', '');
        connector = new Connector(connectorType, connectorVersion);
    }
    // Assign connections in both directions from current to next step
    this._connectStepsWithConnector(currentStep, outputPort, connector, nextStep);
};

// I kept getting connectors that were attaching on points they weren't supposed to
// So I've reduced this to add connections only going in one direction

Path.prototype._connectStepsWithConnector = function (firstStep, outgoingPort, connector, secondStep) {
    firstStep.connections[outgoingPort] = connector;
    secondStep.connections[oppositePortLocation(connector.outputPortIndex())] = connector;

    connector.connections[oppositePortLocation(outgoingPort)] = firstStep;
    connector.connections[connector.outputPortIndex()] = secondStep;
};





//
// PATH MATRIX - deprecated, no longer actively using.
//
// The path generation will also create a path matrix, which is used when rendering the path
// Each value in the matrix is either a 0 (no element present), or a pointer to the object that is located in that spot
// A single object, like a connector, may span multiple values, and will therefore be referenced more than once
//
/*
  0 0 0 0 0 0 0 0 0 0
  2 2 2 1 0 0 0 0 0 0
  2 0 0 2 0 2 2 2 1 0 
  1 0 0 2 0 2 0 0 0 0
  0 0 0 2 2 1 1 0 0 0
  0 0 0 0 0 0 0 0 0 0
*/

// Generates 2d array, zero-filled
// size is # of rows and columns
Path.prototype.generateMatrix = function (size) {
    if (!size)
        size = 50;
    this.pathMatrix = [];
    for (i = 0; i < size; i++) {
        this.pathMatrix.push(Array.apply(null, new Array(size)).map(Number.prototype.valueOf, 0));
    }
};

Path.prototype.generatePathMatrix = function () {
    this.generateMatrix(50);

    // Start at 10,10 so you don't run out of space - it will be trimmed later
    var pos = [10, 10];

    // Both steps and connections have a globally-unique id
    var seenObjIds = [];

    var self = this;

    var connectorMultiplier = function (portIndex) {
        if (portIndex === 'L') {
            return [-1, 1];
        } else if (portIndex === 'T') {
            return [0, 1];
        } else if (portIndex === 'R') {
            return [1, 1];
        } else if (portIndex === 'B') {
            return [0, -1];
        }
    };

    var addObjectToMatrix = function (obj, x, y) {
        if (!self.pathMatrix[x][y])
            self.pathMatrix[x][y] = obj;
    };

    var walkPath = function (obj) {
        if (seenObjIds.indexOf(obj.id) == -1) {
            seenObjIds.push(obj.id);
            _.each(obj.connections, function (connObj, outgoingportIndex) {
                if (connObj && connObj.id != obj.id) {
                    // We figure out which direction to go by multiplying by the location of the connector we're headed towards
                    var connMultiplier = connectorMultiplier(outgoingportIndex);
                    var beginX = pos[0];
                    var beginY = pos[1];
                    var endX = pos[0] + (obj.dimensions[0] * connMultiplier[0]);
                    var endY = pos[1] + (obj.dimensions[1] * connMultiplier[1]);

                    // Walk in the y direction until we complete the right delta 
                    // WARNING: this won't work if no change whatsoever

                    // Mark current position
                    addObjectToMatrix(obj, pos[0], pos[1]);

                    // Loop through and increment/decrement x and y to reach our end position,
                    // which is the out-point from the current object to this new connected object
                    while (pos[1] != endY) {
                        if (endY > pos[1]) {
                            pos[1] += 1;
                        } else {
                            pos[1] -= 1;
                        }

                        // Add object to matrix at this position
                        addObjectToMatrix(obj, pos[0], pos[1]);

                        // Walk in the x direction until we complete the delta
                        while (pos[0] != endX) {
                            if (endX > pos[0]) {
                                pos[0] += 1;
                            } else {
                                pos[0] -= 1;
                            }

                            // Add object to matrix at this position
                            addObjectToMatrix(obj, pos[0], pos[1]);

                        }

                        // Make sure to capture final position - it's ok if we overwrite position already captured
                        addObjectToMatrix(obj, pos[0], pos[1]);

                        // Re-set X loop so it iterates again on next y-row
                        pos[0] = beginX;

                    }
                    walkPath(connObj);
                }
            });
        }
    };

    walkPath(this.firstStep);

    // Trim matrix in-place, to not have any empty rows/cols
    this.trimMatrix();
};

// Outputs path matrix as a string with newlines
Path.prototype.pathMatrixToString = function () {
    var s = '    ';
    for (i = 0; i < this.pathMatrix[0].length; i++) {
        s += i;
        if (i < 10)
            s += '  ';
        else
            s += ' ';
    }
    s += "\n";
    _.each(this.pathMatrix, function (row, i) {
        if (i < 10)
            s += ' ';
        s += i + ' ';
        _.each(row, function (el) {
            if (el === 0) {
                s += ' 0 ';
            } else if (el instanceof Step) {
                s += ' S' + el.id;
            } else if (el instanceof Connector) {
                s += ' C' + el.id;
            }
        }.bind(this));
        s += "\n";
    }.bind(this));
    return s;
};

Path.prototype.trimMatrix = function () {
    var firstX = this.pathMatrix[0].length,
        firstY = this.pathMatrix.length,
        lastX = 0,
        lastY = 0;

    // Gather coords of first seen object and last seen object
    _.each(this.pathMatrix, function (row, y) {
        _.each(row, function (col, x) {
            if (col !== 0) {
                if (y < firstY)
                    firstY = y;
                if (y > lastY)
                    lastY = y;
                if (x < firstX)
                    firstX = x;
                if (x > lastX)
                    lastX = x;
            }
        });
    });

    //console.log('firstX: ' + firstX + ' lastX: ' + lastX + ' firstY: ' + firstY + ' lastY: ' + lastY);

    // Slice out rows that have objects
    this.pathMatrix = this.pathMatrix.slice(firstY, lastY);

    // Column slicing more complicated
    _.each(this.pathMatrix, function (row, y) {
        _.each(row, function (col, x) {
            this.pathMatrix[y] = row.slice(firstX, lastX);
        }.bind(this));
    }.bind(this));
};

_renderedObjects = {};

// Panel renderer:
// variable height, baseline-aligned
// resize after rendering offscreen to the left
// priority is panel 1, panel 3, panel 2. fine for panel 2 to have scrollbars.
// need to define min/max height

////
////   Path UI - handles path rendering, walks path, instantiates ObjectRenderer objects
////

//_panelRenderBinded=false;//hack for event delegate..

var PathUI = function PathUI(el, params) {
    gid = 0; // clear id counter
    _renderedObjects = {};//clear rendered obj

    this._el = el;
    this._renderLayout();
    //if(params.path === 'none'){
    // no-op, allows you to manually attach path in the console
    //}else{
    var workflow,
        pregeneratedPath;
    debugger;

    if (params.workflow60days) {
        workflow = params.workflow60days;//?params.workflow60days:workflow60days;
        if (params.pregenerated)
            pregeneratedPath = pregenerated60DayPath;
    }
    else if (params.workflow30days) {//else{
        workflow = params.workflow30days;//?params.workflow30days:workflow30days; 
        if (params.pregenerated)
            pregeneratedPath = pregenerated30DayPath;
    }

    this.path = new Path(workflow, pregeneratedPath);

    this._renderPath();
    this.showingPanels = false;
    //}
    //if(!_panelRenderBinded){
    $(document).off("click", "**");
    this._bindUIEvents();
    //_panelRenderBinded = true;
    //}

};

PathUI.prototype._bindUIEvents = function () {
    var self = this;
    //self.showingPanels = true;

    //click to show contact card
    $(document).on('click', '.path .step.Not.Started', function () {
        $(this).children(":first").children(".ms-imnSpan").children(":first").trigger("click");
        //console.log($(this)[0].className);
    });
    // Show panels if you click on a step
    $(document).on('click', '.path .step.current', function () {
        if (!self.showingPanels) {
            self.showingPanels = true;
            var numPanels = 3;
            var templates = BOSTemplates["panel"];//BOSTemplates["templates/panel.html"];
            var stepindex = parseInt($(this).data('step-id'), 10);
            var step = self.path.stepsById[stepindex];
            if (step.name === WF_STEP_NAME.COMPLETE) return; //don't show popup on last step.
            var i = 0;
            var imgName = step.name.split(' ').join('_') + (step.inSubflow ? "_Sub" : "");// mock left panel for now.TODO make it dynamic
            var mockInsightImg = imgName + "_insight";
            var opts = [
                      { title: step.name, css_class: '', style: 'z-index:100', subtitle: 'Top Tips', stepmock: imgName },
                      { title: 'Discuss...', css_class: ' inset', style: 'z-index:99', subtitle: '' },
                      { title: 'Take action...', css_class: step.name, style: 'z-index:98', mockinsight: mockInsightImg }
            ];

            var renderPanel = function () {
                // Alternate between outset and inset panels

                console.log(stepindex + '!!!!');

                $("#panels").appendTo($(".leftPanel").parent());
                if (i == 2) {
                    switch (step.name) {
                        case WF_STEP_NAME.APPROVAL:
                            if (step.inSubflow) opts[2].actionname = ["Approve, Send Memo", "Request an edit", "Start a discussion", "Log customer contact", "Other..."];
                            else opts[2].actionname = ["Approve", "Start a discussion", "Log customer content", "Refer to collections", "Other..."];
                            break;
                        case WF_STEP_NAME.CREATEMAIL:
                            opts[2].actionname = ["Create Letter", "Re-Assign", "Discuss", "Log customer contact", "Other..."];
                            break;
                        case WF_STEP_NAME.MAIL:
                            opts[2].actionname = ["Approve, Send Letter", "Request an edit", "Start a discussion", "Log customer contact", "Other..."];
                            break;
                        case WF_STEP_NAME.CALL:
                            opts[2].actionname = ["Promise to pay", "Payment plan required", "Payment sent", "Dispute", "Unreachable"];
                            break;
                        default:
                            opts[2].actionname = ["", "", "", "", ""];
                            break;
                    }
                    if (step.name == WF_STEP_NAME.CALL) {
                        $('#panels').append(templates[3](opts[i]));
                    } else {
                        $('#panels').append(templates[i](opts[i]));
                    }
                } else {
                    $('#panels').append(templates[i](opts[i]));
                }
                i++;
                if (i < numPanels)
                    setTimeout(renderPanel, 100);
                else { //the last panel rendered.
                    setTimeout(function () {
                        // set inset panels on top after rendering everything
                        $('#panels .panel.inset').css('z-index', '101');

                        retrieveStepComment(step.actionId, true);
                        $("#addCommentsButton").unbind("click").click(function () {
                            var newComment = $("#addCommentsInput").val();

                            debugger;

                            if ((newComment && newComment.length) > 0) {
                                addComment(newComment, invoiceInfoVM.invoiceNo(), step.actionId, true, step);
                                $("#addCommentsInput").val("");
                            }
                        });
                        $("#panels .panel .action.advance").eq(0).unbind("click").click(function () {
                            if (!step.inSubflow) {
                                //debugger;                                
                                //alert(LoginUserVM.ID());
                                // alert(wfObject.steps[stepindex].stepOwner.id);
                                //if (LoginUserVM.ID() == wfObject.steps[stepindex].stepOwner.id) {
                                AdvanceWorkflow(wfObject.steps[stepindex]);
                                //}
                                //else {
                                //    alert("You do not have the access right for current step !");
                                //    return false;
                                //}
                            } else {
                                //if (LoginUserVM.ID() == wfObject.steps[self.path._subflowStart].subflow.steps[stepindex - self.path._subflowStart - 1].stepOwner.id) {
                                AdvanceWorkflow(wfObject.steps[self.path._subflowStart].subflow.steps[stepindex - self.path._subflowStart - 1]);
                                //}
                                //else {
                                //    alert("You do not have the access right for current step !");
                                //    return false;
                                //}
                            }
                            $("#path").trigger("click");
                        });
                        $("#panels .panel .action.PTP").eq(0).unbind("click").click(function () {
                            $("#path").trigger("click");
                            $("#paymentPlanDialog").dialog({
                                resizable: false,
                                modal: true,
                                show: { effect: "blind", duration: 300 },
                                hide: { effect: "blind", duration: 300, direction: "down" },
                                width: 350,
                                height: 500,
                                buttons: {
                                    "Confirm": function () {
                                        var ptpArray = [], sum = 0;
                                        $(".inputbox input.payamount").each(function (index) {
                                            if ($(this).val()) {
                                                ptpArray.push([parseInt($(this).val()), new Date($(".inputbox input.paydate").eq(index).val())]);
                                                sum += parseInt($(this).val());
                                            }
                                        });
                                        if (sum != 100) {
                                            alert("Total should be 100%.");
                                        } else {
                                            addPTPdata(ptpArray);
                                            var comment = $(".paymentplan_comment textarea").val();
                                            if (step.name = WF_STEP_NAME.CALL || (comment && comment.length > 0)) {
                                                addComment(comment, invoiceInfoVM.invoiceNo(), step.actionId, false, step);

                                            }
                                            if (!step.inSubflow) {
                                                //if (LoginUserVM.ID() == wfObject.steps[stepindex].stepOwner.id) {
                                                AdvanceWorkflow(wfObject.steps[stepindex]);
                                                //}
                                                //else {
                                                //    alert("You do not have the access right for current step !");
                                                //    return false;
                                                //}
                                            } else {
                                                //if (LoginUserVM.ID() == wfObject.steps[self.path._subflowStart].subflow.steps[stepindex - self.path._subflowStart - 1].stepOwner.id) {
                                                AdvanceWorkflow(wfObject.steps[self.path._subflowStart].subflow.steps[stepindex - self.path._subflowStart - 1]);
                                                //}
                                                //else {
                                                //    alert("You do not have the access right for current step !");
                                                //    return false;
                                                //}
                                            }
                                            $(this).dialog("close");
                                        }
                                    },
                                    Cancel: function () {
                                        $(this).dialog("close");
                                    }
                                },
                                open: function (event, ui) {
                                    $(".amount_sum").html("$" + invoiceInfoVM.amount());
                                    $("#paymentPlanDialog").on("click", ".arrow", function () {
                                        if ($(this).parents(".paymentplan_input_wrapper").hasClass("open")) {
                                            $(this).parents(".paymentplan_input_wrapper").removeClass("open");
                                        } else {
                                            $(".paymentplan_input_wrapper").removeClass("open");
                                            $(this).parents(".paymentplan_input_wrapper").addClass("open");
                                        }
                                    });
                                    $(".paymentplan_add").unbind("click").click(function () {
                                        if ($(".paymentplan_input_wrapper").eq(2).hasClass("hide")) $(".paymentplan_input_wrapper").eq(2).removeClass("hide");
                                        else if ($(".paymentplan_input_wrapper").eq(3).hasClass("hide")) $(".paymentplan_input_wrapper").eq(3).removeClass("hide");
                                    });
                                    $(".inputbox input.paydate").datepicker({
                                        minDate: 0,
                                        onSelect: function (dateText, instance) {
                                            console.log($(this).parents(".paymentplan_input_wrapper").children(".payment_date"));
                                            $(this).parents(".paymentplan_input_wrapper").children(".paymentplan_input_title").children(".payment_date").html(dateText);
                                        },
                                        dateFormat: "mm/dd/yy",
                                        constrainInput: true
                                    });
                                    $(".inputbox input.payamount").blur(function () {
                                        $(this).parents(".paymentplan_input_wrapper").children(".paymentplan_input_title").children(".payment_percent").html($(this).val() + "%");
                                        var sum = 0;
                                        $(".inputbox input.payamount").each(function () {
                                            if ($(this).val())
                                                sum += parseInt($(this).val());
                                        });
                                        $(".outstanding_sum").html("$" + Math.floor(invoiceInfoVM.amount() * (100 - sum) / 100));
                                    });
                                },
                                close: function (event, ui) {
                                    $("#paymentPlanDialog").off("click", "**");
                                }
                            });
                        });
                    }, 200);
                }
            };
            renderPanel();


            // Hide panels if you click outside of one
            $(document).on('click.panelHandler', function (e) {
                // If this click was outside the panel, remove
                var $target = $(e.target);
                if (!$target.hasClass('panel') && $target.parents('.panel').length === 0) {
                    self.showingPanels = false;

                    var i = 2;
                    var closePanel = function () {
                        if (i < 2) $("#panels .panel").eq(i + 1).html('');
                        $("#panels .panel").eq(i).addClass("close");
                        i--;
                        if (i >= 0) {
                            setTimeout(closePanel, 100);
                        } else {
                            $('#panels').html('');
                        }

                    }
                    closePanel();

                    e.stopPropagation();
                    // Remove handler after dismissing panel
                    $(document).off('click.panelHandler');
                } else {
                    return;
                }
            });
        }
    });
};

PathUI.prototype._renderLayout = function () {
    var template = BOSTemplates["templates/layout.html"];
    $(this._el).html(template({}));
};

PathUI.prototype._renderPath = function () {
    var baselineY = Math.floor($(this).parent().height() / 2);
    if (baselineY < 260)
        baselineY = 260;

    var startCoords = [100, baselineY];

    var walkAndRenderPath = function (obj, outgoingPortCoords, incomingPortIndex) {
        debugger;
        if (!_renderedObjects[obj.id]) {
            if (obj instanceof Step && !obj.personImageClass)
                obj.personImageClass = this._nextPersonImageClass();

            objRenderer = new ObjectRenderer(obj);
            objRenderer.render(outgoingPortCoords, incomingPortIndex);

            // Walk each connection to attach objects
            _.each(obj.connections, function (connObj, outgoingPortIndex) {
                if (connObj && !_renderedObjects[connObj.id] && connObj.id != obj.id) {
                    // Get what the coords are of this outgoing port
                    var outCoords = objRenderer.portCoordinates(outgoingPortIndex);
                    // Render this obj
                    setTimeout(function () {
                        walkAndRenderPath(connObj, outCoords, oppositePortLocation(outgoingPortIndex));
                    }, 100);
                }
            });
        }
    }.bind(this);

    // Start with first step, entering on left port
    walkAndRenderPath(this.path.firstStep, startCoords, 'L');
};

PathUI.prototype._nextPersonImageClass = function () {
    var people = ['person-1', 'person-2', 'person-3', 'person-4', 'person-5'];

    if (!this.personIndex || !people[this.personIndex]) {
        this.personIndex = 0;
    }

    var person = people[this.personIndex];
    this.personIndex += 1;

    return person;
};


////
////   Object Renderer (renders connectors and steps on the path)
////

var ObjectRenderer = function ObjectRenderer(obj) {
    this.obj = obj;
    this.type = null;

    this.$path = $('#path');

    // For display and size calculation
    if (this.obj instanceof Step) {
        this.unitScale = 100;
        this.template = BOSTemplates["templates/step.html"];
        this.type = 'step';
    } else if (this.obj instanceof Connector) {
        this.unitScale = 64;
        this.template = BOSTemplates["templates/connector.html"];
        this.type = 'connector';
    } else {
        console.log(obj);
        throw "ObjectRendered: Object type not supported";
    }

    this.$el = null;
    this.topLeftX = 0;
    this.topLeftY = 0;

    return this;
};

ObjectRenderer.prototype.actualDimensions = function () {
    return [this.obj.dimensions[0] * this.unitScale, this.obj.dimensions[1] * this.unitScale];
};

// Returns the x,y coordinates for the given port index - for calculating where to connect neighboring object
ObjectRenderer.prototype.portCoordinates = function (portIndex) {
    var portX = this.topLeftX,
        portY = this.topLeftY;

    if (!this.obj.portLocations[portIndex]) {
        console.log('Port ' + portIndex + ' not indexed for ' + this.type + ' ID: ' + this.obj.id);
    } else {
        var portMultiplier = this.obj.portLocations[portIndex];
        portX = this.topLeftX + (portMultiplier[0] * this.unitScale);
        portY = this.topLeftY + (portMultiplier[1] * this.unitScale);
    }
    return [portX, portY];
};

ObjectRenderer.prototype.render = function (attachToCoords, inputPortLocation) {
    // Find the absolute position of our port we're using
    var myPortOffsetCoords = this.portCoordinates(inputPortLocation);

    // Subtract the difference to find the x,y location to place in the document space
    var coords = [attachToCoords[0] - myPortOffsetCoords[0], attachToCoords[1] - myPortOffsetCoords[1]];

    var dims = this.actualDimensions();
    this.obj.style = 'left: ' + coords[0] + 'px; top: ' + coords[1] + 'px; width: ' + dims[0] + 'px; height: ' + dims[1] + 'px;';

    // Append to path
    this.$path.append(this.template(this.obj));
    this.$el = $('#path-element-' + this.obj.id);

    // Write x/y coords
    var offset = $(this.$el).position();//$(this.$el).offset();
    this.topLeftX = offset.left;
    this.topLeftY = offset.top;

    // Store to access later
    _renderedObjects[this.obj.id] = this;
};