/*2015-10-15 23:09:56*/ ! function() {
	function t(t) {
		var e, n;
		try {
			return e = [].slice.call(t)
		} catch (r) {
			e = [], n = t.length;
			for (var a = 0; n > a; a++) e.push(t[a]);
			return e
		}
	}

	function e(t, e) {
		return t && t.getAttribute ? t.getAttribute(e) || "" : ""
	}

	function n(t, e, n) {
		if (t && t.setAttribute) try {
			t.setAttribute(e, n)
		} catch (r) {}
	}

	function r(t, e) {
		if (t && t.removeAttribute) try {
			t.removeAttribute(e)
		} catch (r) {
			n(t, e, "")
		}
	}

	function a(t, e) {
		return 0 == t.indexOf(e)
	}

	function o(t) {
		for (var e = ["javascript:", "tel:", "sms:", "mailto:", "tmall://"], n = 0, r = e.length; r > n; n++)
			if (a(t, e[n])) return !0
	}

	function i(t) {
		return "string" == typeof t
	}

	function c(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}

	function u(t, e) {
		return t.indexOf(e) >= 0
	}

	function f(t, e) {
		return t.indexOf(e) > -1
	}

	function l(t, e) {
		for (var n = 0, r = e.length; r > n; n++)
			if (f(t, e[n])) return he;
		return ve
	}

	function s(t) {
		return i(t) ? t.replace(/^\s+|\s+$/g, "") : ""
	}

	function m(t) {
		return "undefined" == typeof t
	}

	function p(t, e) {
		var n = e || "";
		if (t) try {
			n = decodeURIComponent(t)
		} catch (r) {}
		return n
	}

	function d() {
		return fe = fe || de.getElementsByTagName("head")[0], le || (fe ? le = fe.getElementsByTagName("meta") : [])
	}

	function g(t, e) {
		var n, r, a = t.split(";"),
			o = a.length;
		for (n = 0; o > n; n++) r = a[n].split("="), e[s(r[0]) || Ee] = p(s(r.slice(1).join("=")))
	}

	function h() {
		var t, n, r, a, o = d();
		for (t = 0, n = o.length; n > t; t++) r = o[t], a = e(r, "name"), a == Ue && (se = e(r, De))
	}

	function v(t) {
		var n, r, o, i, c, u, f = d();
		if (f)
			for (n = 0, r = f.length; r > n; n++)
				if (i = f[n], c = e(i, "name"), c == t) return ie = e(i, "content"), ie.indexOf(":") >= 0 && (o = ie.split(":"), se = "i" == o[0] ? "i" : "u", ie = o[1]), u = e(i, De), u && (se = "i" == u ? "i" : "u"), ce = a(ie, "110"), oe = ce ? Oe : ie, he;
		return ve
	}

	function b() {
		var t, n, r, a = d(),
			o = a.length;
		for (t = 0; o > t; t++)
			if (n = a[t], "aplus-offline" == e(n, "name")) {
				r = e(n, "content");
				break
			}
		return r
	}

	function y() {
		var t, n, r, a = d(),
			o = a.length;
		for (t = 0; o > t; t++)
			if (n = a[t], "aplus-touch" == e(n, "name")) {
				r = e(n, "content");
				break
			}
		return r
	}

	function w() {
		return Math.floor(268435456 * Math.random()).toString(16)
	}

	function N(t) {
		var e, n, r = [];
		for (e in t) t.hasOwnProperty(e) && (n = "" + t[e], r.push(a(e, Ee) ? n : e + "=" + encodeURIComponent(n)));
		return r.join("&")
	}

	function A(t) {
		var e, n, r, o = [],
			i = t.length;
		for (r = 0; i > r; r++) e = t[r][0], n = t[r][1], o.push(a(e, Ee) ? n : e + "=" + encodeURIComponent(n));
		return o.join("&")
	}

	function k(t) {
		var e;
		try {
			e = s(t.getAttribute("href", 2))
		} catch (n) {}
		return e || ""
	}

	function x(t, e, n) {
		return "tap" == e ? (j(t, n), void 0) : (t[Pe]((Be ? "on" : "") + e, function(t) {
			t = t || pe.event;
			var e = t.target || t.srcElement;
			n(e)
		}, ve), void 0)
	}

	function j(t, e) {
		var n = "ontouchend" in document.createElement("div"),
			r = n ? "touchstart" : "mousedown",
			a = pe.KISSY;
		a && a.__touchModAdded && a.one && n ? a.one(t).on("tap", function(t) {
			e && e(t.target)
		}) : x(t, r, function(t) {
			e && e(t)
		})
	}

	function _(t) {
		var e = pe.KISSY;
		e ? e.ready(t) : pe.jQuery ? jQuery(de).ready(t) : "complete" === de.readyState ? t() : x(pe, "load", t)
	}

	function O(t, e) {
		var n, r = new Image,
			a = "_img_" + Math.random(),
			o = -1 == t.indexOf("?") ? "?" : "&",
			i = e ? c(e) ? A(e) : N(e) : "";
		return pe[a] = r, r.onload = r.onerror = function() {
			pe[a] = null
		}, r.src = n = i ? t + o + i : t, r = null, n
	}

	function T() {
		var t;
		if (je && !He && (t = be.match(/^[^?]+\?[^?]*spm=([^&#?]+)/), t && (He = t[1] + "_")), !m(oe)) return oe;
		if (pe._SPM_a && pe._SPM_b) return re = pe._SPM_a.replace(/^{(\w+)}$/g, "$1"), ae = pe._SPM_b.replace(/^{(\w+)}$/g, "$1"), Ie = he, oe = re + "." + ae, h(), oe;
		if (v(Ue) || v("spm-id"), !oe) return Te = !0, oe = Oe, Oe;
		var n, r, a = de.getElementsByTagName("body");
		return a = a && a.length ? a[0] : null, a && (n = e(a, Ue), n && (r = oe.split("."), oe = r[0] + "." + n)), f(oe, ".") || (Te = !0, oe = Oe), oe
	}

	function E(t) {
		var e, n, r, a, o, i, c = de.getElementsByTagName("*");
		for (e = []; t && 1 == t.nodeType; t = t.parentNode)
			if (i = t.id) {
				for (a = 0, n = 0; n < c.length; n++)
					if (o = c[n], o.id == i) {
						a++;
						break
					}
				if (e.unshift(t.tagName.toLowerCase() + '[@id="' + i + '"]'), 1 == a) return e.unshift("/"), e.join("/")
			} else {
				for (n = 1, r = t.previousSibling; r; r = r.previousSibling) r.tagName == t.tagName && n++;
				e.unshift(t.tagName.toLowerCase() + "[" + n + "]")
			}
		return e.length ? "/" + e.join("/") : null
	}

	function S(t) {
		var e = Le[E(t)];
		return e ? e.spmc : ""
	}

	function M(n) {
		var r, a, o, i, c, u, f, l, s = [];
		for (r = t(n.getElementsByTagName("a")), a = t(n.getElementsByTagName("area")), i = r.concat(a), f = 0, l = i.length; l > f; f++) {
			for (u = !1, c = o = i[f];
				(c = c.parentNode) && c != n;)
				if (e(c, Ue)) {
					u = !0;
					break
				}
			u || s.push(o)
		}
		return s
	}

	function B(t, n, r) {
		var o, c, f, l, s, m, p, d, g, h, v, b, y, w;
		if (e(t, "data-spm-delay")) return t.setAttribute("data-spm-delay", ""), void 0;
		if (n = n || t.getAttribute(Ue) || "") {
			if (o = M(t), f = n.split("."), b = a(n, "110") && 3 == f.length, b && (y = f[2], f[2] = "w" + (y || "0"), n = f.join(".")), i(d = T()) && d.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/))
				if (u(n, ".")) {
					if (!a(n, d)) {
						for (l = d.split("."), f = n.split("."), h = 0, g = l.length; g > h; h++) f[h] = l[h];
						n = f.join(".")
					}
				} else u(d, ".") || (d += ".0"), n = d + "." + n;
			if (n.match && n.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)) {
				for (w = parseInt(e(t, "data-spm-max-idx")) || 0, v = 0, s = w, g = o.length; g > v; v++) c = o[v], m = k(c), m && (b && c.setAttribute(Ke, y), (p = c.getAttribute(Qe)) ? U(c, p, r) : (s++, p = n + "." + (z(c) || s), U(c, p, r)));
				t.setAttribute("data-spm-max-idx", s)
			}
		}
	}

	function $(t) {
		var e, n = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"],
			r = n.length;
		for (e = 0; r > e; e++)
			if (-1 != t.indexOf(n[e])) return !0;
		return !1
	}

	function C(t) {
		return t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i) : ve
	}

	function P(t) {
		return t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i) : ve
	}

	function I(t) {
		for (var n;
			(t = t.parentNode) && t.tagName != Me;)
			if (n = e(t, De)) return n;
		return ""
	}

	function L(t, e) {
		if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
		var n, r, a, o, i, c, u, l = "&";
		if (-1 != t.indexOf("#") && (a = t.split("#"), t = a.shift(), r = a.join("#")), o = t.split("?"), i = o.length - 1, a = o[0].split("//"), a = a[a.length - 1].split("/"), c = a.length > 1 ? a.pop() : "", i > 0 && (n = o.pop(), t = o.join("?")), n && i > 1 && -1 == n.indexOf("&") && -1 != n.indexOf("%") && (l = "%26"), t = t + "?spm=" + He + e + (n ? l + n : "") + (r ? "#" + r : ""), u = f(c, ".") ? c.split(".").pop().toLowerCase() : "") {
			if ({
					png: 1,
					jpg: 1,
					jpeg: 1,
					gif: 1,
					bmp: 1,
					swf: 1
				}.hasOwnProperty(u)) return 0;
			!n && 1 >= i && (r || {
				htm: 1,
				html: 1,
				php: 1
			}.hasOwnProperty(u) || (t += "&file=" + c))
		}
		return t
	}

	function R(t) {
		return t && be.split("#")[0] == t.split("#")[0]
	}

	function U(t, n, r) {
		if (t.setAttribute(Qe, n), !r && !e(t, Ye)) {
			var i = k(t),
				c = "i" == (e(t, De) || I(t) || se),
				u = ke + "tbspm.1.1?logtype=2&spm=";
			i && !$(i) && (c || !(a(i, "#") || R(i) || o(i.toLowerCase()) || C(i) || P(i))) && (c ? (u += n + "&url=" + encodeURIComponent(i) + "&cache=" + w(), me == t && O(u)) : r || (i = L(i, n)) && D(t, i))
		}
	}

	function D(t, e) {
		var n, r = t.innerHTML;
		r && -1 == r.indexOf("<") && (n = de.createElement("b"), n.style.display = "none", t.appendChild(n)), t.href = e, n && t.removeChild(n)
	}

	function z(t) {
		var n, r, a;
		return Te ? n = "0" : Ie ? (r = E(t), a = Le[r], a && (n = a.spmd)) : (n = e(t, Ue), n && n.match(/^d\w+$/) || (n = "")), n
	}

	function Y(t) {
		for (var e, n, r = t; t && t.tagName != Se && t.tagName != Me && t.getAttribute;) {
			if (n = Ie ? S(t) : t.getAttribute(Ue)) {
				e = n, r = t;
				break
			}
			if (!(t = t.parentNode)) break
		}
		return e && !/^[\w\-\.]+$/.test(e) && (e = "0"), {
			spm_c: e,
			el: r
		}
	}

	function H(t) {
		var e;
		return t && (e = t.match(/&?\bspm=([^&#]*)/)) ? e[1] : ""
	}

	function K(t, e) {
		var n = k(t),
			r = H(n),
			a = null,
			o = oe && 2 == oe.split(".").length;
		return o ? (a = [oe, 0, z(t) || 0], U(t, a.join("."), e), void 0) : (n && r && (n = n.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"), D(t, n)), void 0)
	}

	function Q(t, n) {
		me = t;
		var r, a, o = e(t, Qe);
		if (o) U(t, o, n);
		else {
			if (r = Y(t.parentNode), a = r.spm_c, !a) return K(t, n), void 0;
			Te && (a = "0"), B(r.el, a, n)
		}
	}

	function V(e) {
		if (e && 1 == e.nodeType) {
			r(e, "data-spm-max-idx");
			var n, a = t(e.getElementsByTagName("a")),
				o = t(e.getElementsByTagName("area")),
				i = a.concat(o),
				c = i.length;
			for (n = 0; c > n; n++) r(i[n], Qe)
		}
	}

	function J(t) {
		var e = t.parentNode;
		if (!e) return "";
		var n = t.getAttribute(Ue),
			r = Y(e),
			a = r.spm_c || 0;
		a && -1 != a.indexOf(".") && (a = a.split("."), a = a[a.length - 1]);
		var o = oe + "." + a,
			i = _e[o] || 0;
		return i++, _e[o] = i, n = n || i, o + ".i" + n
	}

	function W(t) {
		var n, r = t.tagName;
		return ue = pe.g_aplus_pv_id, "A" != r && "AREA" != r ? n = J(t) : (Q(t, he), n = e(t, Qe)), n = (n || "0.0.0.0").split("."), {
			a: n[0],
			b: n[1],
			c: n[2],
			d: n[3]
		}
	}

	function q(t) {
		var e = W(t);
		return e.a + "." + e.b + "." + e.c + "." + e.d
	}

	function F() {
		if (!Re) {
			if (!pe.spmData) return xe || setTimeout(arguments.callee, 100), void 0;
			Re = he;
			var t, e, n, r, a = pe.spmData.data;
			if (a && c(a))
				for (t = 0, e = a.length; e > t; t++) n = a[t], r = n.xpath, Le[r] = {
					spmc: n.spmc,
					spmd: n.spmd
				}
		}
	}

	function G() {
		var t, n, r, a, o = de.getElementsByTagName("iframe"),
			i = o.length;
		for (n = 0; i > n; n++) t = o[n], !t.src && (r = e(t, ze)) && (a = W(t), a ? (a = [a.a, a.b, a.c, a.d, a.e].join("."), t.src = L(r, a)) : t.src = r)
	}

	function X() {
		function t() {
			e++, e > 10 && (n = 3e3), G(), setTimeout(t, n)
		}
		var e = 0,
			n = 500;
		t()
	}

	function Z(t, e) {
		var n, r, o = "gostr",
			i = "locaid",
			c = {};
		if (g(e, c), n = c[o], r = c[i], n && r) {
			a(n, "/") && (n = n.substr(1));
			var u, f = W(t),
				l = [f.a, f.b, f.c, r].join("."),
				s = n + "." + l,
				m = ["logtype=2", "cache=" + Math.random(), "autosend=1"];
			for (u in c) c.hasOwnProperty(u) && u != o && u != i && m.push(u + "=" + c[u]);
			m.length > 0 && (s += "?" + m.join("&"));
			var p, d = {
				gmkey: "",
				gokey: m.length > 0 ? m.join("&") : ""
			};
			if (window.goldlog && window.goldlog.call && (p = window.goldlog.windVaneData)) {
				try {
					d = JSON.stringify(d), "{}" == d && (d = "")
				} catch (h) {
					d = ""
				}
				p.functype = "2101", p.logkey = "/" + n + "." + l, p.logkeyargs = d, p.extendargs = "", delete p.spmcnt, delete p.spmpre, delete p.lzsid, window.goldlog.call("WVTBUserTrack", "toUT", p)
			}
			O(ke + s), t.setAttribute(Qe, l)
		}
	}

	function te(t) {
		for (var n; t && t.tagName != Se;) {
			n = e(t, Ye); {
				if (n) {
					Z(t, n);
					break
				}
				t = t.parentNode
			}
		}
	}

	function ee() {
		Ne ? x(de, "tap", te) : x(de, "mousedown", te)
	}

	function ne(t) {
		for (var e; t && (e = t.tagName);) {
			if ("A" == e || "AREA" == e) {
				Q(t, ve);
				break
			}
			if (e == Me || e == Se) break;
			t = t.parentNode
		}
	}
	var re, ae, oe, ie, ce, ue, fe, le, se, me, pe = window,
		de = document,
		ge = location,
		he = !0,
		ve = !1,
		be = ge.href,
		ye = ge.protocol,
		we = "https:" == ye,
		Ne = (b(), y()),
		Ae = we ? "https:" : "http:",
		ke = Ae + "//wgo.mmstat.com/",
		xe = ve,
		je = parent !== self,
		_e = {},
		Oe = "0.0",
		Te = !1,
		Ee = "::-plain-::",
		Se = "HTML",
		Me = "BODY",
		Be = !!de.attachEvent,
		$e = "attachEvent",
		Ce = "addEventListener",
		Pe = Be ? $e : Ce,
		Ie = ve,
		Le = {},
		Re = ve,
		Ue = "data-spm",
		De = "data-spm-protocol",
		ze = "data-spm-src",
		Ye = "data-spm-click",
		He = "",
		Ke = "data-spm-wangpu-module-id",
		Qe = "data-spm-anchor-id";
	l(be, ["xiaobai.com", "admin.taobao.org"]) || (_(function() {
		xe = he
	}), T(), F(), X(), ee(), Ne ? x(de, "tap", ne) : (x(de, "mousedown", ne), x(de, "keydown", ne)), pe.g_SPM = {
		resetModule: V,
		anchorBeacon: Q,
		getParam: W,
		spm: q
	})
}();