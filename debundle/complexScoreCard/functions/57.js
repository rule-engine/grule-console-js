var func57 = function (t, e, n) {
    "use strict";
    var r = n(9), i = n(22), o = n(6), a = r.rotr64_hi, s = r.rotr64_lo, c = r.shr64_hi, f = r.shr64_lo, u = r.sum64,
        l = r.sum64_hi, h = r.sum64_lo, d = r.sum64_4_hi, p = r.sum64_4_lo, b = r.sum64_5_hi, g = r.sum64_5_lo,
        y = i.BlockHash,
        m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function v() {
        if (!(this instanceof v)) return new v;
        y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = m, this.W = new Array(160)
    }

    function A(t, e, n, r, i) {
        var o = t & n ^ ~t & i;
        return o < 0 && (o += 4294967296), o
    }

    function w(t, e, n, r, i, o) {
        var a = e & r ^ ~e & o;
        return a < 0 && (a += 4294967296), a
    }

    function _(t, e, n, r, i) {
        var o = t & n ^ t & i ^ n & i;
        return o < 0 && (o += 4294967296), o
    }

    function E(t, e, n, r, i, o) {
        var a = e & r ^ e & o ^ r & o;
        return a < 0 && (a += 4294967296), a
    }

    function x(t, e) {
        var n = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return n < 0 && (n += 4294967296), n
    }

    function C(t, e) {
        var n = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return n < 0 && (n += 4294967296), n
    }

    function B(t, e) {
        var n = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return n < 0 && (n += 4294967296), n
    }

    function S(t, e) {
        var n = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return n < 0 && (n += 4294967296), n
    }

    function k(t, e) {
        var n = a(t, e, 1) ^ a(t, e, 8) ^ c(t, e, 7);
        return n < 0 && (n += 4294967296), n
    }

    function I(t, e) {
        var n = s(t, e, 1) ^ s(t, e, 8) ^ f(t, e, 7);
        return n < 0 && (n += 4294967296), n
    }

    function M(t, e) {
        var n = a(t, e, 19) ^ a(e, t, 29) ^ c(t, e, 6);
        return n < 0 && (n += 4294967296), n
    }

    function T(t, e) {
        var n = s(t, e, 19) ^ s(e, t, 29) ^ f(t, e, 6);
        return n < 0 && (n += 4294967296), n
    }

    r.inherits(v, y), t.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function (t, e) {
        for (var n = this.W, r = 0; r < 32; r++) n[r] = t[e + r];
        for (; r < n.length; r += 2) {
            var i = M(n[r - 4], n[r - 3]), o = T(n[r - 4], n[r - 3]), a = n[r - 14], s = n[r - 13],
                c = k(n[r - 30], n[r - 29]), f = I(n[r - 30], n[r - 29]), u = n[r - 32], l = n[r - 31];
            n[r] = d(i, o, a, s, c, f, u, l), n[r + 1] = p(i, o, a, s, c, f, u, l)
        }
    }, v.prototype._update = function (t, e) {
        this._prepareBlock(t, e);
        var n = this.W, r = this.h[0], i = this.h[1], a = this.h[2], s = this.h[3], c = this.h[4], f = this.h[5],
            d = this.h[6], p = this.h[7], y = this.h[8], m = this.h[9], v = this.h[10], k = this.h[11], I = this.h[12],
            M = this.h[13], T = this.h[14], R = this.h[15];
        o(this.k.length === n.length);
        for (var D = 0; D < n.length; D += 2) {
            var O = T, P = R, N = B(y, m), j = S(y, m), L = A(y, 0, v, 0, I), Q = w(0, m, 0, k, 0, M), U = this.k[D],
                F = this.k[D + 1], Y = n[D], H = n[D + 1], z = b(O, P, N, j, L, Q, U, F, Y, H),
                V = g(O, P, N, j, L, Q, U, F, Y, H);
            O = x(r, i), P = C(r, i), N = _(r, 0, a, 0, c), j = E(0, i, 0, s, 0, f);
            var $ = l(O, P, N, j), G = h(O, P, N, j);
            T = I, R = M, I = v, M = k, v = y, k = m, y = l(d, p, z, V), m = h(p, p, z, V), d = c, p = f, c = a, f = s, a = r, s = i, r = l(z, V, $, G), i = h(z, V, $, G)
        }
        u(this.h, 0, r, i), u(this.h, 2, a, s), u(this.h, 4, c, f), u(this.h, 6, d, p), u(this.h, 8, y, m), u(this.h, 10, v, k), u(this.h, 12, I, M), u(this.h, 14, T, R)
    }, v.prototype._digest = function (t) {
        return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}