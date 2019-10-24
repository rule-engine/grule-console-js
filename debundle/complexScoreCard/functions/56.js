var func56 = function (t, e, n) {
    var r = n(0), i = n(20).Reporter, o = n(2).Buffer;

    function a(t, e) {
        i.call(this, e), o.isBuffer(t) ? (this.base = t, this.offset = 0, this.length = t.length) : this.error("Input not Buffer")
    }

    function s(t, e) {
        if (Array.isArray(t)) this.length = 0, this.value = t.map(function (t) {
            return t instanceof s || (t = new s(t, e)), this.length += t.length, t
        }, this); else if ("number" == typeof t) {
            if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
            this.value = t, this.length = 1
        } else if ("string" == typeof t) this.value = t, this.length = o.byteLength(t); else {
            if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
            this.value = t, this.length = t.length
        }
    }

    r(a, i), e.DecoderBuffer = a, a.prototype.save = function () {
        return {offset: this.offset, reporter: i.prototype.save.call(this)}
    }, a.prototype.restore = function (t) {
        var e = new a(this.base);
        return e.offset = t.offset, e.length = this.offset, this.offset = t.offset, i.prototype.restore.call(this, t.reporter), e
    }, a.prototype.isEmpty = function () {
        return this.offset === this.length
    }, a.prototype.readUInt8 = function (t) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
    }, a.prototype.skip = function (t, e) {
        if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
        var n = new a(this.base);
        return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + t, this.offset += t, n
    }, a.prototype.raw = function (t) {
        return this.base.slice(t ? t.offset : this.offset, this.length)
    }, e.EncoderBuffer = s, s.prototype.join = function (t, e) {
        return t || (t = new o(this.length)), e || (e = 0), 0 === this.length ? t : (Array.isArray(this.value) ? this.value.forEach(function (n) {
            n.join(t, e), e += n.length
        }) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : o.isBuffer(this.value) && this.value.copy(t, e), e += this.length), t)
    }
}