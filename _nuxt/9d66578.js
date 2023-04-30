(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function(e, t, n) {
        "use strict";
        n.d(t, "i", (function() {
            return s
        }
        )),
        n.d(t, "c", (function() {
            return u.a
        }
        )),
        n.d(t, "b", (function() {
            return c.a
        }
        )),
        n.d(t, "k", (function() {
            return l.a
        }
        )),
        n.d(t, "f", (function() {
            return h.a
        }
        )),
        n.d(t, "g", (function() {
            return d.a
        }
        )),
        n.d(t, "h", (function() {
            return m
        }
        )),
        n.d(t, "m", (function() {
            return y
        }
        )),
        n.d(t, "d", (function() {
            return _.a
        }
        )),
        n.d(t, "e", (function() {
            return D
        }
        )),
        n.d(t, "l", (function() {
            return b.a
        }
        )),
        n.d(t, "a", (function() {
            return w
        }
        )),
        n.d(t, "n", (function() {
            return x
        }
        )),
        n.d(t, "j", (function() {
            return K
        }
        ));
        var i = n(3)
          , r = n(4)
          , a = n(99)
          , o = n.n(a)
          , s = new (function() {
            function e() {
                Object(i.a)(this, e),
                this._listeners = [],
                this._binded = !1,
                this._raf = null
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    if (!0 === this._binded)
                        return console.warn("Raf instance is already binded");
                    this._binded = !0,
                    this._update = this._update.bind(this),
                    this._baseTime = Date.now(),
                    this._raf = o()(this._update)
                }
            }, {
                key: "unbind",
                value: function() {
                    this._binded = !1,
                    null !== this._raf && (o.a.cancel(this._raf),
                    this._raf = null),
                    this._listeners = []
                }
            }, {
                key: "add",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if ("function" != typeof e)
                        return console.warn("add() : Callback argument must be a function");
                    var r = new Date
                      , a = {
                        id: this._listeners.length,
                        callback: e,
                        fps: t,
                        delay: n,
                        once: i,
                        deltaTargeted: 1e3 / t,
                        lastTime: r.getTime()
                    };
                    return this._listeners.push(a),
                    this._binded || this.bind(),
                    a
                }
            }, {
                key: "addOnce",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this.add(e, t, n, !0)
                }
            }, {
                key: "remove",
                value: function(e) {
                    if ("function" != typeof e)
                        return console.warn("remove() : Callback argument must be a function");
                    for (var t = 0, n = this._listeners.length; t < n; t++)
                        if (this._listeners[t].callback === e) {
                            this._listeners.splice(t, 1);
                            break
                        }
                }
            }, {
                key: "_update",
                value: function() {
                    for (var e = Date.now(), t = e - this._baseTime, n = 0; n < this._listeners.length; n++) {
                        var i = this._listeners[n]
                          , r = e - i.lastTime;
                        r < i.deltaTargeted && i.fps < 60 || (60 === i.fps && r < i.deltaTargeted - 4 || (i.lastTime = e,
                        i.delay > 0 && t < i.delay || (i.callback(r, t, e),
                        i.once && this.remove(i.callback))))
                    }
                    this._binded && o()(this._update)
                }
            }]),
            e
        }())
          , u = n(14)
          , c = n(66)
          , l = n(23)
          , h = n(49)
          , d = n(57)
          , f = n(6)
          , v = function() {
            function e() {
                Object(i.a)(this, e),
                Object(f.a)(this),
                this._binded = !1,
                this._isTouchDevice = "ontouchstart"in window || navigator.maxTouchPoints,
                this.client = new p,
                this.delta = new p,
                this.movement = new p,
                this.velocity = {
                    x: 0,
                    y: 0
                },
                this.mouseDownPos = new p,
                this.mouseUpPos = new p,
                this.lastPos = new p,
                this.isDown = !1,
                this.mouseIn = !0,
                this.downNow = 0,
                this.pressDuration = 0,
                this.lastModifier = null,
                this.downNow = 0,
                this._domEl = document.body,
                this._cursors = ["grab", "grabbing", "pointer", "move", "not-allowed"],
                this.bind()
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this._binded || (this._domEl.addEventListener("touchstart", this._handleMouseDown, !1),
                    this._domEl.addEventListener("touchstart", this._onTouchStart, !1),
                    this._domEl.addEventListener("touchend", this._handleMouseUp, !1),
                    this._domEl.addEventListener("touchmove", this._handleMouseMove, !1),
                    this._domEl.addEventListener("mousedown", this._handleMouseDown, !1),
                    this._domEl.addEventListener("mouseup", this._handleMouseUp, !1),
                    this._domEl.addEventListener("mousemove", this._handleMouseMove, !1),
                    this._domEl.addEventListener("mouseenter", this._handleMouseEnter, !1),
                    this._domEl.addEventListener("mouseleave", this._handleMouseLeave, !1),
                    this._binded = !0)
                }
            }, {
                key: "unbind",
                value: function() {
                    this._binded && (this._domEl.removeEventListener("touchstart", this._handleMouseDown, !1),
                    this._domEl.removeEventListener("touchend", this._handleMouseUp, !1),
                    this._domEl.removeEventListener("touchmove", this._handleMouseMove, !1),
                    this._domEl.removeEventListener("mousedown", this._handleMouseDown, !1),
                    this._domEl.removeEventListener("mouseup", this._handleMouseUp, !1),
                    this._domEl.removeEventListener("mousemove", this._handleMouseMove, !1),
                    this._domEl.removeEventListener("mouseenter", this._handleMouseEnter, !1),
                    this._domEl.removeEventListener("mouseleave", this._handleMouseLeave, !1),
                    this._binded = !1)
                }
            }, {
                key: "addCursor",
                value: function(e) {
                    if (e !== this.lastModifier) {
                        for (var t = 0, n = this._cursors.length; t < n; t++) {
                            var i = this._cursors[t];
                            i === e ? this._domEl.classList.add("cursor-".concat(i)) : this._domEl.classList.remove("cursor-".concat(i))
                        }
                        this.lastModifier = e
                    }
                }
            }, {
                key: "removeCursor",
                value: function(e) {
                    this.lastModifier = null,
                    this._domEl.classList.remove("cursor-".concat(e))
                }
            }, {
                key: "addUp",
                value: function(t) {
                    u.a.on(e.UPPED, t)
                }
            }, {
                key: "removeUp",
                value: function(t) {
                    u.a.off(e.UPPED, t)
                }
            }, {
                key: "addDown",
                value: function(t) {
                    u.a.on(e.DOWNED, t)
                }
            }, {
                key: "removeDown",
                value: function(t) {
                    u.a.off(e.DOWNED, t)
                }
            }, {
                key: "addMove",
                value: function(t) {
                    u.a.on(e.MOVED, t)
                }
            }, {
                key: "removeMove",
                value: function(t) {
                    u.a.off(e.MOVED, t)
                }
            }, {
                key: "addLeave",
                value: function(t) {
                    u.a.on(e.LEFT, t)
                }
            }, {
                key: "removeLeave",
                value: function(t) {
                    u.a.off(e.LEFT, t)
                }
            }, {
                key: "_onTouchStart",
                value: function() {}
            }, {
                key: "_setPointerMovement",
                value: function(e, t) {
                    this.movement.x = e - this.mouseDownPos.x,
                    this.movement.y = t - this.mouseDownPos.y
                }
            }, {
                key: "_setPointerDelta",
                value: function(e, t) {
                    var n = this;
                    this.delta.x = e - this.lastPos.x,
                    this.delta.y = t - this.lastPos.y,
                    this.delta.x > 1e3 && this.delta.y > 1e3 && (this.delta.x = 0,
                    this.delta.y = 0),
                    this.velocity.x = this.delta.x,
                    this.velocity.y = this.delta.y,
                    clearTimeout(this._deltaTo),
                    this._deltaTo = setTimeout((function() {
                        n.velocity.x = 0,
                        n.velocity.y = 0
                    }
                    ), 50)
                }
            }, {
                key: "_getClientValues",
                value: function(e) {
                    var t, n;
                    return this._isTouchDevice ? e.touches && e.touches[0] ? (t = e.touches[0].clientX,
                    n = e.touches[0].clientY) : e.changedTouches && e.changedTouches[0] ? (t = e.changedTouches[0].clientX,
                    n = e.changedTouches[0].clientY) : (t = e.clientX,
                    n = e.clientY) : (t = e.clientX,
                    n = e.clientY),
                    isNaN(t) && (t = 0),
                    isNaN(n) && (n = 0),
                    {
                        clientX: t,
                        clientY: n
                    }
                }
            }, {
                key: "_handleMouseDown",
                value: function(t) {
                    var n = this._getClientValues(t)
                      , i = n.clientX
                      , r = n.clientY;
                    this.client.set(i, r),
                    this.lastPos.set(i, r),
                    this.mouseDownPos.set(i, r),
                    this.downNow = (new Date).getTime(),
                    this.isDown = !0,
                    u.a.emit(e.DOWNED, t)
                }
            }, {
                key: "_handleMouseUp",
                value: function(t) {
                    var n = this._getClientValues(t)
                      , i = n.clientX
                      , r = n.clientY;
                    t.touches && 0 === t.touches.length && (i = -1e3,
                    r = -1e3),
                    this.client.set(i, r),
                    this.lastPos.set(i, r),
                    this.mouseUpPos.set(i, r),
                    this._setPointerMovement(i, r),
                    this._setPointerDelta(i, r);
                    var a = (new Date).getTime();
                    this.pressDuration = a - this.downNow,
                    this.isDown = !1,
                    u.a.emit(e.UPPED, t)
                }
            }, {
                key: "_handleMouseMove",
                value: function(t) {
                    var n = this._getClientValues(t)
                      , i = n.clientX
                      , r = n.clientY;
                    this.client.set(i, r),
                    this._setPointerDelta(i, r),
                    u.a.emit(e.MOVED, t),
                    this.lastPos.set(i, r),
                    this.mouseIn = !0
                }
            }, {
                key: "_handleMouseLeave",
                value: function(t) {
                    var n = this._getClientValues(t)
                      , i = n.clientX
                      , r = n.clientY;
                    this.lastPos.set(i, r),
                    u.a.emit(e.LEFT, t),
                    this.isDown = !1,
                    this.mouseIn = !1,
                    this.velocity.x = 0,
                    this.velocity.y = 0
                }
            }, {
                key: "_handleMouseEnter",
                value: function(e) {
                    var t = this._getClientValues(e)
                      , n = t.clientX
                      , i = t.clientY;
                    this.lastPos.set(n, i),
                    this.velocity.x = 0,
                    this.velocity.y = 0,
                    this.mouseIn = !0
                }
            }, {
                key: "domEl",
                get: function() {
                    return this._domEl
                }
            }]),
            e
        }();
        v.UPPED = "Mouse_upped",
        v.DOWNED = "Mouse_downed",
        v.MOVED = "Mouse_moved",
        v.LEFT = "Mouse_left";
        var p = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                Object(i.a)(this, e),
                this.norm = {
                    x: t / l.a.width,
                    y: n / l.a.height
                },
                this.tilt = {
                    x: t / l.a.width * 2 - 1,
                    y: n / l.a.height * 2 - 1
                },
                this.x = t,
                this.y = n
            }
            return Object(r.a)(e, [{
                key: "set",
                value: function(e, t) {
                    this.x = e,
                    this.y = t
                }
            }, {
                key: "x",
                get: function() {
                    return this._x
                },
                set: function(e) {
                    this._x = e,
                    this.norm.x = e / l.a.width,
                    this.tilt.x = 2 * this.norm.x - 1
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                },
                set: function(e) {
                    this._y = e,
                    this.norm.y = e / l.a.height,
                    this.tilt.y = 2 * this.norm.y - 1
                }
            }, {
                key: "length",
                get: function() {
                    return (Math.abs(this._x) + Math.abs(this._y)) / 2
                }
            }]),
            e
        }()
          , m = new v
          , y = new (function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "DPR",
                get: function() {
                    var e = Object(f.c)("dpr");
                    return e ? (e = parseFloat(e, 10),
                    Math.min(window.devicePixelRatio, e)) : Math.min(window.devicePixelRatio || 1, 1.5)
                }
            }, {
                key: "useRetinaScene",
                get: function() {
                    return !1
                }
            }]),
            e
        }())
          , _ = n(46)
          , g = n(17)
          , D = new (function() {
            function e() {
                Object(i.a)(this, e),
                this.totalHeight = 0,
                this.components = [],
                this.sizes = [],
                this.lerp = c.a.isMobile ? 1 : .09,
                this.velocity = {
                    value: 0
                },
                this.lerpedVelocity = {
                    value: 0
                },
                this.lastIdle = Date.now(),
                this.idle = !0
            }
            return Object(r.a)(e, [{
                key: "reset",
                value: function() {
                    this.idle = !0,
                    this.lastIdle = Date.now(),
                    this.velocity.value = 0,
                    this.lerpedVelocity.value = 0,
                    this.components = [],
                    this.sizes = []
                }
            }, {
                key: "exit",
                value: function() {
                    this.velocity.value = 0,
                    this.lerpedVelocity.value = 0
                }
            }, {
                key: "goToIntro",
                value: function() {
                    if (this.sizes[0]) {
                        var e = this.totalHeight
                          , t = b.a.homeScrollY + 200 * e
                          , n = t % e
                          , i = 0;
                        i = t / e % 1 > .5 ? this.sizes[0].top + e - n : this.sizes[0].top - n,
                        b.a.homeScrollYTarget += i
                    }
                }
            }, {
                key: "compute",
                value: function() {
                    var e = this
                      , t = -1
                      , n = 0;
                    if (this.totalHeight && this.sizes.length) {
                        var i = b.a.homeScrollY % this.totalHeight;
                        t = 0;
                        var r = 1e4;
                        this.sizes.forEach((function(e, a) {
                            var o = Math.abs(i - e.top);
                            o < r && (t = a,
                            n = i - e.top,
                            r = o)
                        }
                        ))
                    }
                    this.totalHeight = 0;
                    var a = this.components.length
                      , o = l.a.width <= 760
                      , s = o ? 50 : 75
                      , c = o ? 50 : 100
                      , h = o ? 100 : 200;
                    if (this.components.forEach((function(t, n) {
                        var i = 0 === n
                          , r = n === a - 1
                          , u = t.getSize()
                          , l = u.bbox
                          , d = u.visualBbox
                          , f = l.height
                          , v = i ? 0 : s
                          , p = i ? 0 : s;
                        1 !== n || o || (e.totalHeight += c);
                        var m = i ? 0 : e.totalHeight + v
                          , y = m + f + p;
                        e.sizes[n] || (e.sizes[n] = {});
                        var _ = e.sizes[n];
                        _.component = t,
                        _.bbox = l,
                        _.visualBbox = d,
                        _.top = m,
                        _.bottom = y,
                        _.height = f,
                        _.index = n,
                        _.bottom = y,
                        _.marginTop = v,
                        _.marginBottom = p,
                        _.paddingBottom = h,
                        e.totalHeight += f + v + p,
                        r && (e.totalHeight += h),
                        t.setScrollData(e.sizes[n])
                    }
                    )),
                    this.sizes.forEach((function(t, n) {
                        t.topNorm = t.top / e.totalHeight,
                        t.bottomNorm = t.bottom / e.totalHeight,
                        t.heightNorm = t.height / e.totalHeight
                    }
                    )),
                    t > -1) {
                        var d = this.sizes[t].top + n;
                        b.a.homeScrollY = d,
                        b.a.homeScrollYTarget = d
                    }
                    u.a.emit("homescroll:resized")
                }
            }, {
                key: "scrollHeadPart",
                value: function() {
                    var e = this.totalHeight
                      , t = b.a.homeScrollY + 200 * e
                      , n = t % e
                      , i = 0;
                    i = t / e % 1 > .5 ? this.sizes[0].height + e - n : this.sizes[0].height - n,
                    b.a.homeScrollYTarget += i
                }
            }, {
                key: "idleChange",
                value: function(e) {
                    u.a.emit("homescroll:idleChanged", this.idle, e)
                }
            }, {
                key: "update",
                value: function() {
                    var e = Date.now()
                      , t = this.totalHeight;
                    b.a.homeScrollY += (b.a.homeScrollYTarget - b.a.homeScrollY) * this.lerp;
                    var n = b.a.homeScrollY + 200 * t
                      , i = n / t % 1
                      , r = n % t;
                    this.velocity.value = b.a.homeScrollYTarget - b.a.homeScrollY,
                    this.lerpedVelocity.value += .2 * (this.velocity.value - this.lerpedVelocity.value),
                    this.components.forEach((function(e, a) {
                        e.tick(n, i, r, t)
                    }
                    ));
                    var a = this.idle;
                    if (!this.idle && Math.abs(this.velocity.value) < 5 ? (this.lastIdle = e,
                    this.idle = !0) : this.idle && Math.abs(this.velocity.value) > 5 && (this.idle = !1),
                    a !== this.idle) {
                        for (var o = 0, s = 10, u = 0, c = this.sizes.length; u < c; u++) {
                            var l = this.sizes[u]
                              , h = l.height
                              , d = l.top
                              , f = l.bottom
                              , v = Object(g.c)(r + h, d, f + h, -1, 1)
                              , p = Math.abs(v + .2);
                            p < s && v > -.9 && (o = u,
                            s = p)
                        }
                        this.idleChange(o)
                    }
                }
            }]),
            e
        }())
          , b = n(127)
          , k = (new (function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = (t.direction,
                t.damping);
                Object(i.a)(this, e),
                this.scrollTop = 0,
                this.scrollLeft = 0,
                this.scrollTopTarget = 0,
                this.scrollLeftTarget = 0,
                this.direction = "x",
                this.damping = n || 0,
                this.infiniteScroll = !1,
                this.locked = !1,
                this.lastDelta = 0,
                this.limit = {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                },
                this.dir = 1,
                this.bind()
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this._handleWheel = this._handleWheel.bind(this),
                    this._onPointerMove = this._onPointerMove.bind(this),
                    this.update = this.update.bind(this),
                    window.addEventListener("wheel", this._handleWheel, !1)
                }
            }, {
                key: "unbind",
                value: function() {
                    window.removeEventListener("wheel", this._handleWheel, !1)
                }
            }, {
                key: "infinite",
                value: function() {
                    this.infiniteScroll = !0
                }
            }, {
                key: "_handleWheel",
                value: function(e) {
                    if (!this.locked) {
                        var t = 1.1 * e.deltaY;
                        e.deltaX && Math.abs(e.deltaX) > Math.abs(e.deltaY) && (t = 1.1 * e.deltaX),
                        "windows" === c.a.os && (t *= 1.05),
                        "firefox" === c.a.browserName && (1 === e.deltaMode ? t *= 30 : t *= 1.11),
                        this.lastDelta = t,
                        "x" === this.direction ? (this.scrollLeftTarget += t,
                        this.infiniteScroll || (this.scrollLeftTarget = Object(g.a)(this.scrollLeftTarget, this.limit.min.x, this.limit.max.x))) : (this.scrollTopTarget += t,
                        this.infiniteScroll || (this.scrollTopTarget = Object(g.a)(this.scrollTopTarget, this.limit.min.y, this.limit.max.y)))
                    }
                }
            }, {
                key: "_onPointerMove",
                value: function() {
                    !this.locked && m.isDown && ("x" === this.direction ? this.lastDelta -= 1.8 * m.velocity.x : this.lastDelta -= 1.8 * m.velocity.y)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.desotroyed = !0,
                    this.locked = !0,
                    this.unbind()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.locked || (this.infiniteScroll || (this.scrollLeftTarget = Object(g.a)(this.scrollLeftTarget, this.limit.min.x, this.limit.max.x),
                    this.scrollTopTarget = Object(g.a)(this.scrollTopTarget, this.limit.min.y, this.limit.max.y)),
                    this.lastDelta ? (this.dir = this.lastDelta < 0 ? -1 : 1,
                    this.delta = this.lastDelta,
                    this.lastDelta = 0) : this.delta = 0,
                    this.scrollTop += (this.scrollTopTarget - this.scrollTop) * this.damping,
                    this.scrollLeft += (this.scrollLeftTarget - this.scrollLeft) * this.damping)
                }
            }]),
            e
        }()),
        n(7))
          , w = new (function() {
            function e() {
                Object(i.a)(this, e),
                this.colors = {}
            }
            return Object(r.a)(e, [{
                key: "loopText",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = arguments.length > 2 ? arguments[2] : void 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    e.forEach((function(r, a) {
                        k.a.killTweensOf(r, {
                            opacity: !0
                        });
                        var o = t ? .3 : 0
                          , s = Object(g.c)(e.length, 5, 20, 1, 1.3, !0) * i;
                        k.a.to(r, {
                            opacity: .6,
                            ease: "cubic.out",
                            duration: .2 * s,
                            delay: .04 * a + o,
                            onComplete: function() {
                                k.a.to(r, {
                                    opacity: 1,
                                    ease: "cubic.out",
                                    duration: .2 * s,
                                    delay: .02,
                                    onComplete: function() {
                                        a === e.length - 1 && n && n()
                                    }
                                })
                            }
                        })
                    }
                    ))
                }
            }, {
                key: "resetLoopText",
                value: function(e) {
                    e.forEach((function(e, t) {
                        k.a.killTweensOf(e, {
                            opacity: !0
                        }),
                        k.a.to(e, {
                            opacity: 1,
                            ease: "cubic.out",
                            duration: .2
                        })
                    }
                    ))
                }
            }]),
            e
        }())
          , x = function() {
            function e(t) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object(i.a)(this, e),
                Object(f.a)(this),
                t && (this.el = t,
                this.opts = r,
                this.onViewportIn = r.onViewportIn,
                this.onViewportOut = r.onViewportOut,
                this.onViewportDownIn = r.onViewportDownIn,
                this.onViewportDownOut = r.onViewportDownOut,
                this._limitY = r._limitY,
                this._onlyOnce = !0,
                !1 === r.onlyOnce && (this._onlyOnce = !1),
                this._offset = r.offset || 0,
                this._isAnimated = !1,
                this.isVisible = !1,
                this.progress = 0,
                this.scrollTopEl = r.scrollTopEl || document.body,
                this.scrollTopGetter = r.scrollTopGetter,
                this.resize(),
                this._rzTo = setTimeout((function() {
                    n.resize(),
                    n._rzTo = setTimeout((function() {
                        n.resize()
                    }
                    ), 1500)
                }
                ), 400),
                this.bind())
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this.rafData = s.add(this.update),
                    l.a.addResize(this.resize)
                }
            }, {
                key: "destroy",
                value: function() {
                    clearTimeout(this._rzTo),
                    s.remove(this.update),
                    l.a.removeResize(this.resize)
                }
            }, {
                key: "resize",
                value: function() {
                    if (!(this._isAnimated && this._onlyOnce || !this.el)) {
                        var e = this.getScrollTop();
                        this.bbox = this.el.getBoundingClientRect(),
                        this.offsetY = e,
                        this.top = this.bbox.y + e - l.a.height,
                        this.bottom = this.bbox.y + e - l.a.height + this.bbox.height,
                        this.height = this.bbox.height
                    }
                }
            }, {
                key: "getScrollTop",
                value: function() {
                    return this.scrollTopGetter ? this.scrollTopGetter() : this.scrollTopEl.scrollTop
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this.getScrollTop()
                      , i = this.top - this._offset
                      , r = this.bottom + this._offset + l.a.height;
                    this.progress = Object(g.c)(n, i, r, 0, 1),
                    this.progress > 0 && this.progress < 1 ? (this.onViewportIn && !this.isVisible && this.onViewportIn(this.el),
                    this.onViewportDownIn && !this.isDownIn && (this.onViewportDownIn(this.el),
                    this.isDownIn = !0),
                    this.isVisible = !0,
                    this._onlyOnce && (s.remove(this.update),
                    l.a.removeResize(this.resize))) : (this.onViewportOut && this.isVisible && (this.onViewportOut(this.el),
                    this.isVisible = !1),
                    this.onViewportDownOut && this.isDownIn && this.progress < 0 && (this.onViewportDownOut(this.el),
                    this.isDownIn = !1))
                }
            }]),
            e
        }()
          , O = n(39)
          , C = (n(65),
        n(125),
        n(44),
        /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/);
        function E(e) {
            var t = e.nodeType
              , n = "";
            if (1 === t || 9 === t || 11 === t) {
                if ("string" == typeof e.textContent)
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    n += E(e)
            } else if (3 === t || 4 === t)
                return e.nodeValue;
            return n
        }
        var j, S, F, P = /(?:\r|\n|\t\t)/g, R = /(?:\s\s+)/g, T = function(e) {
            return S.getComputedStyle(e)
        }, M = Array.isArray, L = [].slice, B = function(e, t) {
            var n;
            return M(e) ? e : "string" === (n = Object(O.a)(e)) && !t && e ? L.call(j.querySelectorAll(e), 0) : e && "object" === n && "length"in e ? L.call(e, 0) : e ? [e] : []
        }, U = function(e) {
            return "absolute" === e.position || !0 === e.absolute
        }, A = function(e, t) {
            for (var n, i = t.length; --i > -1; )
                if (n = t[i],
                e.substr(0, n.length) === n)
                    return n.length
        }, z = function(e, t) {
            void 0 === e && (e = "");
            var n = ~e.indexOf("++")
              , i = 1;
            return n && (e = e.split("++").join("")),
            function() {
                return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
            }
        }, I = function e(t, n, i) {
            var r = t.nodeType;
            if (1 === r || 9 === r || 11 === r)
                for (t = t.firstChild; t; t = t.nextSibling)
                    e(t, n, i);
            else
                3 !== r && 4 !== r || (t.nodeValue = t.nodeValue.split(n).join(i))
        }, V = function(e, t) {
            for (var n = t.length; --n > -1; )
                e.push(t[n])
        }, N = function(e, t, n) {
            for (var i; e && e !== t; ) {
                if (i = e._next || e.nextSibling)
                    return i.textContent.charAt(0) === n;
                e = e.parentNode || e._parent
            }
        }, G = function e(t) {
            var n, i, r = B(t.childNodes), a = r.length;
            for (n = 0; n < a; n++)
                (i = r[n])._isSplit ? e(i) : (n && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
                t.removeChild(i))
        }, H = function(e, t) {
            return parseFloat(t[e]) || 0
        }, Y = function(e, t, n, i, r, a, o) {
            var s, u, c, l, h, d, f, v, p, m, y, _, g = T(e), D = H("paddingLeft", g), b = -999, k = H("borderBottomWidth", g) + H("borderTopWidth", g), w = H("borderLeftWidth", g) + H("borderRightWidth", g), x = H("paddingTop", g) + H("paddingBottom", g), O = H("paddingLeft", g) + H("paddingRight", g), C = .2 * H("fontSize", g), E = g.textAlign, S = [], F = [], P = [], R = t.wordDelimiter || " ", M = t.tag ? t.tag : t.span ? "span" : "div", L = t.type || t.split || "chars,words,lines", B = r && ~L.indexOf("lines") ? [] : null, A = ~L.indexOf("words"), z = ~L.indexOf("chars"), Y = U(t), W = t.linesClass, X = ~(W || "").indexOf("++"), K = [];
            for (X && (W = W.split("++").join("")),
            c = (u = e.getElementsByTagName("*")).length,
            h = [],
            s = 0; s < c; s++)
                h[s] = u[s];
            if (B || Y)
                for (s = 0; s < c; s++)
                    ((d = (l = h[s]).parentNode === e) || Y || z && !A) && (_ = l.offsetTop,
                    B && d && Math.abs(_ - b) > C && ("BR" !== l.nodeName || 0 === s) && (f = [],
                    B.push(f),
                    b = _),
                    Y && (l._x = l.offsetLeft,
                    l._y = _,
                    l._w = l.offsetWidth,
                    l._h = l.offsetHeight),
                    B && ((l._isSplit && d || !z && d || A && d || !A && l.parentNode.parentNode === e && !l.parentNode._isSplit) && (f.push(l),
                    l._x -= D,
                    N(l, e, R) && (l._wordEnd = !0)),
                    "BR" === l.nodeName && (l.nextSibling && "BR" === l.nextSibling.nodeName || 0 === s) && B.push([])));
            for (s = 0; s < c; s++)
                d = (l = h[s]).parentNode === e,
                "BR" !== l.nodeName ? (Y && (p = l.style,
                A || d || (l._x += l.parentNode._x,
                l._y += l.parentNode._y),
                p.left = l._x + "px",
                p.top = l._y + "px",
                p.position = "absolute",
                p.display = "block",
                p.width = l._w + 1 + "px",
                p.height = l._h + "px"),
                !A && z ? l._isSplit ? (l._next = l.nextSibling,
                l.parentNode.appendChild(l)) : l.parentNode._isSplit ? (l._parent = l.parentNode,
                !l.previousSibling && l.firstChild && (l.firstChild._isFirst = !0),
                l.nextSibling && " " === l.nextSibling.textContent && !l.nextSibling.nextSibling && K.push(l.nextSibling),
                l._next = l.nextSibling && l.nextSibling._isFirst ? null : l.nextSibling,
                l.parentNode.removeChild(l),
                h.splice(s--, 1),
                c--) : d || (_ = !l.nextSibling && N(l.parentNode, e, R),
                l.parentNode._parent && l.parentNode._parent.appendChild(l),
                _ && l.parentNode.appendChild(j.createTextNode(" ")),
                "span" === M && (l.style.display = "inline"),
                S.push(l)) : l.parentNode._isSplit && !l._isSplit && "" !== l.innerHTML ? F.push(l) : z && !l._isSplit && ("span" === M && (l.style.display = "inline"),
                S.push(l))) : B || Y ? (l.parentNode && l.parentNode.removeChild(l),
                h.splice(s--, 1),
                c--) : A || e.appendChild(l);
            for (s = K.length; --s > -1; )
                K[s].parentNode.removeChild(K[s]);
            if (B) {
                for (Y && (m = j.createElement(M),
                e.appendChild(m),
                y = m.offsetWidth + "px",
                _ = m.offsetParent === e ? 0 : e.offsetLeft,
                e.removeChild(m)),
                p = e.style.cssText,
                e.style.cssText = "display:none;"; e.firstChild; )
                    e.removeChild(e.firstChild);
                for (v = " " === R && (!Y || !A && !z),
                s = 0; s < B.length; s++) {
                    for (f = B[s],
                    (m = j.createElement(M)).style.cssText = "display:block;text-align:" + E + ";position:" + (Y ? "absolute;" : "relative;"),
                    W && (m.className = W + (X ? s + 1 : "")),
                    P.push(m),
                    c = f.length,
                    u = 0; u < c; u++)
                        "BR" !== f[u].nodeName && (l = f[u],
                        m.appendChild(l),
                        v && l._wordEnd && m.appendChild(j.createTextNode(" ")),
                        Y && (0 === u && (m.style.top = l._y + "px",
                        m.style.left = D + _ + "px"),
                        l.style.top = "0px",
                        _ && (l.style.left = l._x - _ + "px")));
                    0 === c ? m.innerHTML = "&nbsp;" : A || z || (G(m),
                    I(m, String.fromCharCode(160), " ")),
                    Y && (m.style.width = y,
                    m.style.height = l._h + "px"),
                    e.appendChild(m)
                }
                e.style.cssText = p
            }
            Y && (o > e.clientHeight && (e.style.height = o - x + "px",
            e.clientHeight < o && (e.style.height = o + k + "px")),
            a > e.clientWidth && (e.style.width = a - O + "px",
            e.clientWidth < a && (e.style.width = a + w + "px"))),
            V(n, S),
            A && V(i, F),
            V(r, P)
        }, W = function(e, t, n, i) {
            var r, a, o, s, u, c, l, h, d = t.tag ? t.tag : t.span ? "span" : "div", f = ~(t.type || t.split || "chars,words,lines").indexOf("chars"), v = U(t), p = t.wordDelimiter || " ", m = " " !== p ? "" : v ? "&#173; " : " ", y = "</" + d + ">", _ = 1, g = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : A : null, D = j.createElement("div"), b = e.parentNode;
            for (b.insertBefore(D, e),
            D.textContent = e.nodeValue,
            b.removeChild(e),
            l = -1 !== (r = E(e = D)).indexOf("<"),
            !1 !== t.reduceWhiteSpace && (r = r.replace(R, " ").replace(P, "")),
            l && (r = r.split("<").join("{{LT}}")),
            u = r.length,
            a = (" " === r.charAt(0) ? m : "") + n(),
            o = 0; o < u; o++)
                if (c = r.charAt(o),
                g && (h = g(r.substr(o), t.specialChars)))
                    c = r.substr(o, h || 1),
                    a += f && " " !== c ? i() + c + "</" + d + ">" : c,
                    o += h - 1;
                else if (c === p && r.charAt(o - 1) !== p && o) {
                    for (a += _ ? y : "",
                    _ = 0; r.charAt(o + 1) === p; )
                        a += m,
                        o++;
                    o === u - 1 ? a += m : ")" !== r.charAt(o + 1) && (a += m + n(),
                    _ = 1)
                } else
                    "{" === c && "{{LT}}" === r.substr(o, 6) ? (a += f ? i() + "{{LT}}</" + d + ">" : "{{LT}}",
                    o += 5) : c.charCodeAt(0) >= 55296 && c.charCodeAt(0) <= 56319 || r.charCodeAt(o + 1) >= 65024 && r.charCodeAt(o + 1) <= 65039 ? (s = ((r.substr(o, 12).split(C) || [])[1] || "").length || 2,
                    a += f && " " !== c ? i() + r.substr(o, s) + "</" + d + ">" : r.substr(o, s),
                    o += s - 1) : a += f && " " !== c ? i() + c + "</" + d + ">" : c;
            e.outerHTML = a + (_ ? y : ""),
            l && I(b, "{{LT}}", "<")
        }, X = function e(t, n, i, r) {
            var a, o, s = B(t.childNodes), u = s.length, c = U(n);
            if (3 !== t.nodeType || u > 1) {
                for (n.absolute = !1,
                a = 0; a < u; a++)
                    (3 !== (o = s[a]).nodeType || /\S+/.test(o.nodeValue)) && (c && 3 !== o.nodeType && "inline" === T(o).display && (o.style.display = "inline-block",
                    o.style.position = "relative"),
                    o._isSplit = !0,
                    e(o, n, i, r));
                return n.absolute = c,
                void (t._isSplit = !0)
            }
            W(t, n, i, r)
        }, K = function() {
            function e(e, t) {
                F || (j = document,
                S = window,
                F = 1),
                this.elements = B(e),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = t || {},
                this.split(t)
            }
            var t = e.prototype;
            return t.split = function(e) {
                this.isSplit && this.revert(),
                this.vars = e = e || this.vars,
                this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var t, n, i, r = this.elements.length, a = e.tag ? e.tag : e.span ? "span" : "div", o = z(e.wordsClass, a), s = z(e.charsClass, a); --r > -1; )
                    i = this.elements[r],
                    this._originals[r] = i.innerHTML,
                    t = i.clientHeight,
                    n = i.clientWidth,
                    X(i, e, o, s),
                    Y(i, e, this.chars, this.words, this.lines, n, t);
                return this.chars.reverse(),
                this.words.reverse(),
                this.lines.reverse(),
                this.isSplit = !0,
                this
            }
            ,
            t.revert = function() {
                var e = this._originals;
                if (!e)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(t, n) {
                    return t.innerHTML = e[n]
                }
                )),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this.isSplit = !1,
                this
            }
            ,
            e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e
        }();
        K.version = "3.2.6"
    },
    127: function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(4)
          , a = (n(21),
        n(1))
          , o = n(0)
          , s = n(7)
          , u = function() {
            function e() {
                if (Object(i.a)(this, e),
                window.store = this,
                this.routeCount = 0,
                this.fontLoaded = !1,
                this.fontPromise = Promise.create(),
                this.dataFetching = Promise.create(),
                this.homeScroll = null,
                this.caseScroll = null,
                this.aboutScroll = null,
                this.archiveScroll = null,
                this.projectSrollHeight = 0,
                this.nbProject = 0,
                this.lastProjectIndex = 0,
                this.scroll = {
                    home: 0
                },
                this.homeScrollY = 0,
                this.homeScrollYTarget = 0,
                this.isDarkMode = !1,
                window)
                    if (window.localStorage && "true" === window.localStorage.getItem("darkMode"))
                        this.isDarkMode = !0;
                    else if (window.localStorage && "false" === window.localStorage.getItem("darkMode"))
                        this.isDarkMode = !1;
                    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
                        this.isDarkMode = !0;
                    else {
                        var t = (new Date).getHours();
                        (t < 7 || t > 19) && (this.isDarkMode = !0)
                    }
                this.color1 = new a.f(this.isDarkMode ? 1118481 : 16775921),
                this.color2 = new a.f(this.isDarkMode ? 1842204 : 16774885),
                this.color3 = new a.f(this.isDarkMode ? 16775921 : 1118481),
                this.colors = {
                    dark1: new a.f(1118481),
                    dark2: new a.f(1842204),
                    light1: new a.f(16775921),
                    light2: new a.f(16774885)
                }
            }
            return Object(r.a)(e, [{
                key: "toggleDarkMode",
                value: function(e) {
                    this.isDarkMode = e,
                    s.a.killTweensOf([this.color1, this.color2]);
                    var t = e ? "dark" : "light"
                      , n = e ? "light" : "dark"
                      , i = this.colors[t + "1"]
                      , r = this.colors[t + "2"]
                      , a = this.colors[n + "1"];
                    s.a.to(this.color1, {
                        r: i.r,
                        g: i.g,
                        b: i.b,
                        duration: .6
                    }),
                    s.a.to(this.color2, {
                        r: r.r,
                        g: r.g,
                        b: r.b,
                        duration: .6
                    }),
                    s.a.to(this.color3, {
                        r: a.r,
                        g: a.g,
                        b: a.b,
                        duration: .6
                    }),
                    o.c.emit("darkmode:changed", e)
                }
            }, {
                key: "archiveScrollY",
                get: function() {
                    return this.archiveScroll ? this.archiveScroll.scrollTop : 0
                }
            }, {
                key: "caseScrollY",
                get: function() {
                    return this.caseScroll ? this.caseScroll.scrollTop : 0
                }
            }, {
                key: "aboutScrollY",
                get: function() {
                    return this.aboutScroll ? this.aboutScroll.scrollTop : 0
                }
            }]),
            e
        }();
        t.a = new u
    },
    128: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(45)
          , r = n(0)
          , a = n(6)
          , o = n(7)
          , s = {
            components: {},
            data: function() {
                return {
                    percent: 0,
                    toggle: !0
                }
            },
            computed: {},
            watch: {},
            created: function() {
                this.started = Date.now(),
                this.completed = !1,
                this.images = {
                    value: 0
                },
                this.packages = {
                    value: 0
                }
            },
            mounted: function() {
                var e = this
                  , t = document.body.querySelectorAll("img.preload")
                  , n = t.length;
                this.imgCount = n;
                var i = 0;
                t.forEach((function(t, r) {
                    t.complete ? (i++,
                    e.onImageProgress({
                        imageProgress: i / n
                    })) : t.onload = function() {
                        i++,
                        e.onImageProgress({
                            imageProgress: i / n
                        })
                    }
                }
                )),
                this.letters = new r.j(this.$refs.text,{
                    type: "lines, chars"
                }),
                o.a.set(this.letters.chars, {
                    opacity: .5
                }),
                o.a.to(this.letters.lines, {
                    y: 0,
                    duration: 1,
                    ease: "expo.out"
                }),
                this.loadingTl = o.a.timeline({
                    paused: !0
                }),
                this.loadingTl.to(this.letters.chars, {
                    opacity: 1,
                    duration: 1,
                    ease: "linear",
                    stagger: .06
                }),
                this.bind();
                var s = Object(a.c)("load") || null;
                r.g.preload(s)
            },
            beforeDestroy: function() {},
            methods: {
                bind: function() {
                    this.$sub(r.g.PROGRESSED, this.onLoaderProgress),
                    this.$sub(r.g.COMPLETED, this.onLoaderComplete)
                },
                getVal: function() {
                    var e = this.packages.value / 100;
                    return this.imgCount && (e = (.1 * this.packages.value + .9 * this.images.value) / 100),
                    e
                },
                updateProgress: function() {
                    var e = this.getVal();
                    r.c.emit("preloader:progress", e),
                    this.loadingTl.progress(e),
                    e >= 1 && this.onComplete()
                },
                onImageProgress: function(e) {
                    var t = this
                      , n = e.imageProgress;
                    o.a.to(this.images, {
                        value: 100 * n,
                        duration: 2,
                        ease: "cubic.out",
                        onUpdate: function() {
                            t.updateProgress()
                        }
                    })
                },
                onLoaderProgress: function(e) {
                    var t = this;
                    if (!this.completed) {
                        var n = e.progress;
                        o.a.to(this.packages, {
                            value: n,
                            overwrite: !0,
                            duration: 2,
                            ease: "cubic.out",
                            onUpdate: function() {
                                t.updateProgress()
                            }
                        })
                    }
                },
                onLoaderComplete: function(e) {
                    var t = this;
                    o.a.to(this.packages, {
                        value: 100,
                        overwrite: !0,
                        duration: 1,
                        ease: "cubic.out",
                        onUpdate: function() {
                            t.updateProgress()
                        }
                    })
                },
                onComplete: function(e) {
                    var t = this;
                    if (!this.completed) {
                        var n = Math.max(0, 1e3 - (Date.now() - this.started)) / 1e3;
                        o.a.to(this.$el, {
                            autoAlpha: 0,
                            duration: .2,
                            ease: "linear",
                            delay: n + .5,
                            onComplete: function() {
                                t.toggle = !1
                            }
                        }),
                        this.$delayedCall((function() {
                            o.a.to(t.letters.lines, {
                                y: "-100%",
                                opacity: .3,
                                duration: .6,
                                ease: "expo.out"
                            }),
                            i.a.loading = !1,
                            document.body.classList.add("is-loaded"),
                            r.g.hiddenPromise.resolve(),
                            r.g.glHiddenPromise.resolve(),
                            t.completed = !0,
                            Object(a.c)("loading") || i.a.scenes.change(i.a.scenes.pending),
                            setTimeout((function() {
                                r.g.hiddenPromiseDone = !0
                            }
                            ), 300),
                            t.$unsub(r.g.PROGRESSED, t.onLoaderProgress),
                            t.$unsub(r.g.COMPLETED, t.onLoaderComplete)
                        }
                        ), 2)
                    }
                }
            }
        }
          , u = (n(224),
        n(38))
          , c = Object(u.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.toggle,
                    expression: "toggle"
                }],
                staticClass: "preloader"
            }, [n("div", {
                staticClass: "preloader__wrapper preloader__wrapper"
            }, [n("div", {
                staticClass: "preloader__content"
            }, [n("div", {
                ref: "text",
                staticClass: "preloader__text"
            }, [e._v("\n       Nils Schlegel\n      ")])])])])
        }
        ), [], !1, null, null, null);
        t.default = c.exports
    },
    129: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(45)
          , r = {
            components: {},
            data: function() {
                return {}
            },
            computed: {
                data: function() {
                    return {}
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                i.a.$store = this.$store,
                i.a.init(this.$refs.wrapper),
                i.a.initialized.then((function() {
                    i.a.scenes.change("loader")
                }
                ))
            },
            beforeDestroy: function() {
                i.a.destroy()
            },
            methods: {}
        }
          , a = (n(225),
        n(38))
          , o = Object(a.a)(r, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "webgl"
            }, [t("div", {
                ref: "wrapper",
                staticClass: "webgl__physics gl-physics"
            })])
        }
        ), [], !1, null, null, null);
        t.default = o.exports
    },
    130: function(e, t, n) {
        "use strict";
        n.r(t);
        n(15);
        var i = n(0)
          , r = n(7)
          , a = {
            components: {},
            data: function() {
                return {
                    caseHeader: !1
                }
            },
            watch: {
                "$store.state.navState": function(e, t) {},
                "$route.name": function(e, t) {
                    this.checkRoute(e)
                }
            },
            created: function() {
                this.lastNow = Date.now()
            },
            mounted: function() {
                var e = this;
                this.prepareIn(),
                this.setInitialState(),
                this.checkRoute(this.$route.name),
                this.lastClick = Date.now(),
                i.g.hiddenPromise.then((function() {
                    e.animateIn()
                }
                ))
            },
            beforeDestroy: function() {},
            methods: {
                prepareIn: function() {
                    var e = this
                      , t = this.$refs
                      , n = t.logo
                      , a = t.logoLink
                      , o = t.archiveBtn
                      , s = t.archiveLink
                      , u = t.aboutLink
                      , c = t.aboutBtn
                      , l = t.switchBtn;
                    this._els = [n, o, c, l],
                    this._links = [a.$el, s.$el, u.$el],
                    r.a.set(this._els, {
                        autoAlpha: 0
                    }),
                    r.a.set(this._links, {
                        y: "120%"
                    }),
                    r.a.set(l, {
                        y: "5%",
                        opacity: 0
                    }),
                    this.logoW = new i.j(this.$refs.logoText,{
                        type: "chars"
                    }).chars,
                    this.archiveW = new i.j(this.$refs.archiveText,{
                        type: "chars"
                    }).chars,
                    this.aboutW = new i.j(this.$refs.aboutText,{
                        type: "chars"
                    }).chars;
                    var h = function(t, n) {
                        for (var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a = r.a.timeline({
                            paused: !0,
                            loop: !0,
                            onComplete: function() {
                                e.tlState[n] && a.restart()
                            }
                        }), o = 0, s = t.length; o < s; o++) {
                            var u = t[o];
                            a.to(u, {
                                opacity: .6,
                                duration: .4 * i
                            }, .05 * o * i),
                            a.to(u, {
                                opacity: 1,
                                duration: .4 * i
                            }, (.05 * o + .4) * i)
                        }
                        return a
                    };
                    this.tlState = {
                        logo: !1,
                        archive: !1,
                        about: !1
                    },
                    this.logoTl = h(this.logoW, "logo", .7),
                    this.archiveTl = h(this.archiveW, "archive"),
                    this.aboutTl = h(this.aboutW, "about")
                },
                animateIn: function() {
                    r.a.to(this._els, {
                        autoAlpha: 1,
                        duration: .6,
                        stagger: .1
                    }),
                    r.a.to(this._links, {
                        y: "0%",
                        duration: 1.2,
                        stagger: .05,
                        ease: "expo.out"
                    }),
                    r.a.to(this.$refs.switchBtn, {
                        autoAlpha: 1,
                        duration: .6,
                        delay: .4,
                        ease: "linear"
                    }),
                    r.a.to(this.$refs.switchBtn, {
                        y: "0%",
                        duration: 1.2,
                        delay: .4,
                        ease: "expo.out"
                    })
                },
                setInitialState: function() {
                    var e = this.$store.state.darkMode
                      , t = e ? 0 : 22.5
                      , n = e ? 1 : 1.01;
                    r.a.set(this.$refs.round, {
                        scaleX: n
                    }),
                    r.a.set(this.$refs.round, {
                        x: t
                    })
                },
                checkRoute: function(e) {
                    i.i.remove(this.checkHeader, 30),
                    "case-id" === e ? (this.caseHeader = !0,
                    i.i.add(this.checkHeader, 30)) : this.caseHeader = !1;
                    var t = this.$refs
                      , n = t.aboutUnderline
                      , a = t.archiveUnderline;
                    r.a.killTweensOf([n, a]),
                    "about" === e ? (r.a.set(a, {
                        transformOrigin: "right"
                    }),
                    r.a.to(a, {
                        scaleX: 0,
                        duration: .3,
                        ease: "cubic.out"
                    }),
                    r.a.set(n, {
                        transformOrigin: "left"
                    }),
                    r.a.to(n, {
                        scaleX: 1,
                        duration: .3,
                        ease: "cubic.out"
                    })) : "archive" === e ? (r.a.set(n, {
                        transformOrigin: "right"
                    }),
                    r.a.to(n, {
                        scaleX: 0,
                        duration: .3,
                        ease: "cubic.out"
                    }),
                    r.a.set(a, {
                        transformOrigin: "left"
                    }),
                    r.a.to(a, {
                        scaleX: 1,
                        duration: .3,
                        ease: "cubic.out"
                    })) : (r.a.set([n, a], {
                        transformOrigin: "right"
                    }),
                    r.a.to([n, a], {
                        scaleX: 0,
                        duration: .3,
                        ease: "cubic.out"
                    }))
                },
                checkHeader: function() {
                    var e = i.k.width <= 600 ? 300 : 400;
                    this.caseHeader = i.l.caseScrollY < e
                },
                onClick: function() {
                    var e = Date.now();
                    if (!(e - this.lastNow < 500)) {
                        this.lastNow = e;
                        var t = this.$store.state.darkMode;
                        this.$store.dispatch("setDarkMode", !t),
                        i.l.toggleDarkMode(!t);
                        var n = this.$store.state.darkMode
                          , a = n ? 0 : 22.5
                          , o = n ? 1 : 1.01;
                        r.a.to(this.$refs.round, {
                            scaleX: o,
                            duration: .3,
                            ease: "elastic.out(400, .7, .01)",
                            delay: .05
                        }),
                        r.a.to(this.$refs.round, {
                            x: a,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        window.localStorage && window.localStorage.setItem("darkMode", n ? "true" : "false")
                    }
                },
                onLogoIn: function() {
                    i.b.isMobile || (this.tlState.logo = !0,
                    this.logoTl.play(0))
                },
                onLogoOut: function() {
                    i.b.isMobile || (this.tlState.logo = !1)
                },
                onArchiveIn: function() {
                    i.b.isMobile || (this.tlState.archive = !0,
                    this.archiveTl.play(0))
                },
                onArchiveOut: function() {
                    i.b.isMobile || (this.tlState.archive = !1)
                },
                onAboutIn: function() {
                    i.b.isMobile || (this.tlState.about = !0,
                    this.aboutTl.play(0))
                },
                onAboutOut: function() {
                    this.tlState.about = !1
                },
                logoClick: function() {
                    var e = Date.now();
                    "index" === this.$route.name && e - this.lastClick > 1e3 && (this.lastClick = e,
                    i.e.goToIntro())
                }
            }
        }
          , o = (n(226),
        n(38))
          , s = Object(o.a)(a, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("header", {
                class: ["app-header", {
                    "app-header--case-header": e.caseHeader
                }]
            }, [n("div", {
                staticClass: "app-header__container"
            }, [n("h1", {
                ref: "logo",
                staticClass: "app-header__logo",
                on: {
                    mouseenter: e.onLogoIn,
                    mouseleave: e.onLogoOut,
                    click: e.logoClick
                }
            }, [n("NuxtLink", {
                ref: "logoLink",
                attrs: {
                    to: "/"
                }
            }, [n("span", {
                ref: "logoText"
            }, [e._v("Nils Schlegel")])])], 1), e._v(" "), n("div", {
                staticClass: "app-header__buttons"
            }, [n("div", {
                ref: "archiveBtn",
                staticClass: "app-header__link",
                on: {
                    mouseenter: e.onArchiveIn,
                    mouseleave: e.onArchiveOut
                }
            }, [n("NuxtLink", {
                ref: "archiveLink",
                attrs: {
                    to: "/archive"
                }
            }, [n("span", {
                ref: "archiveText"
            }, [e._v("Archive")]), e._v(" "), n("div", {
                ref: "archiveUnderline",
                staticClass: "app-header__underline"
            })])], 1), e._v(" "), n("div", {
                ref: "aboutBtn",
                staticClass: "app-header__link",
                on: {
                    mouseenter: e.onAboutIn,
                    mouseleave: e.onAboutOut
                }
            }, [n("NuxtLink", {
                ref: "aboutLink",
                attrs: {
                    to: "/about"
                }
            }, [n("span", {
                ref: "aboutText"
            }, [e._v("About")]), e._v(" "), n("div", {
                ref: "aboutUnderline",
                staticClass: "app-header__underline"
            })])], 1), e._v(" "), n("button", {
                ref: "switchBtn",
                staticClass: "app-header__switch",
                on: {
                    click: e.onClick
                }
            }, [n("div", {
                ref: "round",
                staticClass: "app-header__switch-round"
            }), e._v(" "), n("div", {
                ref: "sun",
                staticClass: "app-header__switch-i app-header__switch-i--sun"
            }), e._v(" "), n("div", {
                ref: "moon",
                staticClass: "app-header__switch-i app-header__switch-i--moon"
            })])])])])
        }
        ), [], !1, null, null, null);
        t.default = s.exports
    },
    136: function(e, t, n) {
        "use strict";
        var i = n(11)
          , r = n(0);
        i.a.mixin({
            created: function() {
                var e = this;
                this._eventsSub = [],
                this._delayedCalls = [],
                this._rafs = [],
                this.disposeEvents = function() {
                    e._eventsSub.forEach((function(e) {
                        var t = e.eventId
                          , n = e.callback;
                        r.c.off(t, n)
                    }
                    )),
                    e._rafs.forEach((function(e) {
                        var t = e.callback;
                        r.i.remove(t)
                    }
                    )),
                    e._delayedCalls.forEach((function(e) {
                        var t = e.timeout;
                        clearTimeout(t)
                    }
                    ))
                }
                ,
                this.$emit = function() {
                    r.c.emit.apply(r.c, arguments)
                }
                ,
                this.$sub = function(t, n, i) {
                    e._eventsSub.push({
                        eventId: t,
                        callback: n,
                        context: i
                    }),
                    r.c.on(t, n, i)
                }
                ,
                this.$unsub = function(t, n) {
                    r.c.off(t, n);
                    for (var i = 0, a = e._eventsSub.length; i < a; i++) {
                        var o = e._eventsSub[i];
                        o.id === t && o.callback === n && (e._eventsSub.splice(i, 1),
                        i--)
                    }
                }
                ,
                this.$delayedCall = function(t, n) {
                    var i = setTimeout(t, n);
                    return e._delayedCalls.push(i),
                    i
                }
                ,
                this.$addRaf = function(t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    r.i.add(t, n, i),
                    e._rafs.push(t)
                }
                ,
                this.$removeRaf = function(t) {
                    r.i.remove(t);
                    for (var n = 0, i = e._rafs.length; n < i; n++) {
                        e._rafs[n].callback === t && (e._rafs.splice(n, 1),
                        n--)
                    }
                }
            },
            beforeDestroy: function() {
                this.disposeEvents()
            }
        }),
        i.a.prototype.$events = r.c,
        i.a.prototype.$emitter = r.c
    },
    137: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            e.app
        }
    },
    14: function(e, t, n) {
        "use strict";
        var i = n(171)
          , r = n.n(i);
        t.a = new r.a
    },
    164: function(e, t, n) {},
    165: function(e, t, n) {},
    166: function(e, t, n) {},
    167: function(e, t, n) {},
    17: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        n.d(t, "d", (function() {
            return o
        }
        ));
        n(44),
        n(21),
        n(81),
        n(82);
        function i(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }
        function r(e, t, n) {
            return e + (t - e) * n
        }
        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
              , o = arguments.length > 5 ? arguments[5] : void 0
              , s = (e - t) * (a - r) / (n - t) + r;
            return o ? i(s, Math.min(r, a), Math.max(r, a)) : s
        }
        function o(e, t) {
            return e < 0 && (e = t + e % t),
            e >= t ? e % t : e
        }
    },
    180: function(e, t, n) {
        "use strict";
        n(15),
        n(216);
        var i = n(0)
          , r = n(128)
          , a = n(129)
          , o = n(130)
          , s = {
            components: {
                WebGL: a.default,
                Preloader: r.default,
                AppHeader: o.default
            },
            data: function() {
                return {
                    isMobile: i.b.isMobile,
                    mainClass: "main",
                    pageClass: "",
                    toggleGrid: !1
                }
            },
            watch: {
                "$store.state.darkMode": function(e, t) {
                    this.darkModeClass = e ? "is-dark" : "is-light",
                    e ? (document.body.classList.add("is-dark"),
                    document.body.classList.remove("is-light")) : (document.body.classList.add("is-light"),
                    document.body.classList.remove("is-dark"))
                },
                "$store.state.ready": function(e, t) {
                    e && (i.l.nbProject = this.$store.state.data.work.length,
                    i.l.dataFetching && i.l.dataFetching.resolve(this.$store.state.data))
                }
            },
            beforeCreate: function() {},
            created: function() {
                this.countSpace = 0;
                var e = navigator.userAgent;
                i.b.init(e),
                this.isMobile = i.b.isMobile,
                window.added || this.$store.dispatch("setDarkMode", i.l.isDarkMode),
                window.added = !0,
                i.k.addResize(this._onResize),
                this._onResize(),
                i.f.addUp(this._onKeyUp)
            },
            mounted: function() {
                this.$store.state.ready && (i.l.nbProject = this.$store.state.data.work.length,
                i.l.dataFetching && i.l.dataFetching.resolve(this.$store.state.data)),
                this.$router.beforeEach(this._onBeforeEach),
                this.$router.afterEach(this._onAfterEach),
                this._checkRoute()
            },
            methods: {
                _onBeforeEach: function(e, t, n) {
                    i.l.routeCount >= 1 && document.body.classList.add("have-navigated"),
                    n()
                },
                _onAfterEach: function(e, t) {
                    this._checkRoute()
                },
                _checkRoute: function() {
                    var e = "index" === this.$route.name ? "home" : this.$route.name;
                    this.pageClass = "is-".concat(e, "-page"),
                    i.l.routeCount++
                },
                _onKeyUp: function(e) {
                    32 === e.keyCode && this.countSpace++,
                    this.countSpace > 5 && (this.toggleGrid = !this.toggleGrid)
                },
                _onResize: function() {}
            }
        }
          , u = (n(227),
        n(38))
          , c = Object(u.a)(s, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("main", {
                class: [e.mainClass, e.pageClass]
            }, [n("div", {
                ref: "appWrapper",
                staticClass: "app-wrapper"
            }, [n("AppHeader"), e._v(" "), n("WebGL"), e._v(" "), n("Preloader"), e._v(" "), n("nuxt"), e._v(" "), n("div", {
                staticClass: "debug"
            }), e._v(" "), e.toggleGrid ? n("div", {
                staticClass: "grid"
            }, e._l(16, (function(e) {
                return n("div", {
                    staticClass: "grid-el"
                })
            }
            )), 0) : e._e()], 1)])
        }
        ), [], !1, null, null, null);
        t.a = c.exports;
        installComponents(c, {
            AppHeader: n(130).default,
            WebGL: n(129).default,
            Preloader: n(128).default
        })
    },
    184: function(e, t, n) {
        n(185),
        e.exports = n(186)
    },
    216: function(e, t, n) {
        n(21),
        Promise.create = function() {
            var e = this
              , t = new Promise((function(t, n) {
                e.temp_resolve = t,
                e.temp_reject = n
            }
            ));
            return t.resolve = this.temp_resolve,
            t.reject = this.temp_reject,
            delete this.temp_resolve,
            delete this.temp_reject,
            t
        }
    },
    224: function(e, t, n) {
        "use strict";
        n(164)
    },
    225: function(e, t, n) {
        "use strict";
        n(165)
    },
    226: function(e, t, n) {
        "use strict";
        n(166)
    },
    227: function(e, t, n) {
        "use strict";
        n(167)
    },
    228: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "state", (function() {
            return a
        }
        )),
        n.d(t, "mutations", (function() {
            return o
        }
        )),
        n.d(t, "actions", (function() {
            return s
        }
        ));
        var i = n(18)
          , r = (n(60),
        n(21),
        n(72),
        n(64),
        n(0))
          , a = function() {
            return {
                homeNavState: null,
                toWorkTransition: !1,
                navState: null,
                data: {},
                ready: !1,
                ua: "",
                darkMode: r.l.isDarkMode
            }
        }
          , o = {
            SET_HOME_NAV_STATE: function(e, t) {
                e.homeNavState = t
            },
            SET_TO_WORK_TRANSITION: function(e, t) {
                e.toWorkTransition = t
            },
            SET_NAV_STATE: function(e, t) {
                e.navState = t
            },
            SET_UA: function(e, t) {
                e.ua = t
            },
            SET_DATA: function(e, t) {
                e.data = t,
                e.ready = !0
            },
            SET_DARKMODE: function(e, t) {
                e.darkMode = t
            }
        }
          , s = {
            fetchCMS: function(e) {
                var t = this;
                return Object(i.a)(regeneratorRuntime.mark((function n() {
                    var i, a, o, s, u;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (i = e.state,
                                a = e.commit,
                                e.dispatch,
                                !i.data.work) {
                                    n.next = 4;
                                    break
                                }
                                return r.l.nbProject = i.data.work.length,
                                n.abrupt("return", i.data);
                            case 4:
                                return o = [],
                                s = [],
                                n.next = 8,
                                t.$prismic.api.getSingle("global");
                            case 8:
                                return (u = n.sent).data.highlighted_work.forEach((function(e, n) {
                                    if (e.work && e.work.id) {
                                        var i = n
                                          , r = Promise.create();
                                        t.$prismic.api.getByID(e.work.id).then((function(e) {
                                            e.data.uid = e.uid,
                                            s[n] = e.data,
                                            e.data._index = i,
                                            r.resolve(e.data)
                                        }
                                        )),
                                        o.push(r)
                                    }
                                }
                                )),
                                u.data.work = s,
                                r.l.workData = s,
                                n.next = 14,
                                Promise.all(o);
                            case 14:
                                return a("SET_DATA", u.data),
                                n.abrupt("return", u.data);
                            case 16:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            setData: function(e, t) {
                var n = e.commit;
                e.dispatch;
                n("SET_DATA", t)
            },
            setDarkMode: function(e, t) {
                var n = e.commit;
                e.dispatch;
                n("SET_DARKMODE", t)
            }
        }
    },
    23: function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(4)
          , a = n(173)
          , o = n.n(a)
          , s = n(14)
          , u = n(66)
          , c = n(6)
          , l = 30
          , h = function() {
            function e() {
                Object(i.a)(this, e),
                Object(c.a)(this),
                this._binded = !1,
                this.width = window.innerWidth,
                this.height = window.innerHeight,
                this.pixelRatio = window.devicePixelRatio,
                this.prWidth = this.width * this.pixelRatio,
                this.prHeight = this.height * this.pixelRatio,
                this.aspect = this.width / this.height,
                this.isFocused = !0,
                this.bind()
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this._binded || (this._handleDebounceResize = o()(this._handleResize, l),
                    window.addEventListener("resize", this._handleDebounceResize, !1),
                    window.addEventListener("blur", this._handleBlur, !1),
                    window.addEventListener("focus", this._handleFocus, !1),
                    this._binded = !0)
                }
            }, {
                key: "unbind",
                value: function() {
                    this._binded && (window.removeEventListener("resize", this._handleDebounceResize, !1),
                    window.removeEventListener("blur", this._handleBlur, !1),
                    window.removeEventListener("focus", this._handleFocus, !1),
                    this._binded = !1)
                }
            }, {
                key: "addResize",
                value: function(t) {
                    s.a.on(e.RESIZED, t)
                }
            }, {
                key: "removeResize",
                value: function(t) {
                    s.a.off(e.RESIZED, t)
                }
            }, {
                key: "addBlur",
                value: function(t) {
                    s.a.on(e.BLURRED, t)
                }
            }, {
                key: "removeBlur",
                value: function(t) {
                    s.a.off(e.BLURRED, t)
                }
            }, {
                key: "addFocus",
                value: function(t) {
                    s.a.on(e.FOCUSED, t)
                }
            }, {
                key: "removeFocus",
                value: function(t) {
                    s.a.off(e.FOCUSED, t)
                }
            }, {
                key: "_handleResize",
                value: function(t) {
                    var n = this;
                    this.pixelRatio = window.devicePixelRatio;
                    var i = function() {
                        n.width = window.innerWidth,
                        n.height = window.innerHeight,
                        n.prWidth = n.width * n.pixelRatio,
                        n.prHeight = n.height * n.pixelRatio,
                        n.aspect = n.width / n.height,
                        s.a.emit(e.RESIZED, n.width, n.height, n.aspect)
                    };
                    i(),
                    u.a.isMobile && (clearTimeout(this._rto),
                    this._rto = setTimeout((function() {
                        i()
                    }
                    ), 300))
                }
            }, {
                key: "_handleBlur",
                value: function(t) {
                    this.isFocused = !1,
                    s.a.emit(e.BLURRED, t)
                }
            }, {
                key: "_handleFocus",
                value: function(t) {
                    this.isFocused = !0,
                    s.a.emit(e.FOCUSED, t)
                }
            }]),
            e
        }();
        h.RESIZED = "stage_resized",
        h.BLURRED = "stage_blured",
        h.FOCUSED = "stage_focused",
        t.a = new h
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return u
        }
        )),
        n.d(t, "b", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return h
        }
        ));
        var i = n(6)
          , r = []
          , a = function(e) {
            return "background: ".concat(e, "; color: #FFFFFF; padding: 3px 10px; font-weight: bold; border-radius: 10px; font-familly: 'monospace'; font-size: 8px;")
        }
          , o = Object(i.c)("log");
        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Global"
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            o && (n = !0);
            var i = {
                enabled: !!n,
                key: e,
                color: t,
                log: function() {
                    var i = [];
                    i.push("%c".concat(e)),
                    i.push(a(t)),
                    i.push.apply(i, arguments),
                    n && console.log.apply(console, i)
                }
            };
            return r.push(i),
            i.log
        }
        function u(e, t) {
            for (var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = 0, a = r.length; i < a; i++) {
                var o = r[i];
                if (o.key === e && o.color === t)
                    return o.log
            }
            return s(e, t, n)
        }
        o && console.log("#### Force log enabled ####");
        var c = "#000000"
          , l = "#ffc107"
          , h = "#dc3545"
    },
    45: function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(4)
          , a = (n(21),
        n(12),
        n(13))
          , o = n(9)
          , s = n(8)
          , u = n(2)
          , c = n(0)
          , l = n(6)
          , h = n(1);
        function d(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var f = new h.M
          , v = function(e) {
            Object(o.a)(n, e);
            var t = d(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    antialias: Object(l.c)("antialias"),
                    alpha: !1,
                    autoClear: !0,
                    powerPreference: "high-performance",
                    dpr: 1
                };
                return Object(i.a)(this, n),
                e = t.call(this, r),
                Object(l.a)(Object(a.a)(e)),
                e._postProcessing = null,
                e.shadowMap.enabled = !1,
                e._dpr = c.m.DPR,
                e.setPixelRatio(e._dpr),
                e.setClearColor(16777215, 0),
                e._bind(),
                e._setSize(),
                e
            }
            return Object(r.a)(n, [{
                key: "update",
                value: function(e, t) {}
            }, {
                key: "destroy",
                value: function() {
                    this._unbind(),
                    this.dispose()
                }
            }, {
                key: "_bind",
                value: function() {
                    c.k.addResize(this._onWindowResize)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.k.removeResize(this._onWindowResize)
                }
            }, {
                key: "_setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    this._dpr = c.m.DPR,
                    this.setPixelRatio(this._dpr),
                    this.setSize(e, t)
                }
            }, {
                key: "_onWindowResize",
                value: function(e, t) {
                    this._setSize(e, t)
                }
            }, {
                key: "dpr",
                get: function() {
                    return this._dpr
                },
                set: function(e) {
                    this._dpr = e,
                    this.setPixelRatio(e),
                    this.getSize(f),
                    this._postProcessing.setSize(f.x, f.y)
                }
            }]),
            n
        }(h.R)
          , p = (n(15),
        n(48),
        n(5))
          , m = (n(24),
        n(26),
        n(27),
        n(32),
        n(34),
        n(16))
          , y = "#define GLSLIFY 1\n#define SHADER_NAME Quad\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 1.0);\n}\n"
          , _ = "#define GLSLIFY 1\n#define SHADER_NAME BasicTransition\n\nuniform sampler2D tDiffuse1;\nuniform sampler2D tDiffuse2;\nuniform float uTime;\nuniform float uProgress;\n\nvarying vec2 vUv;\n\nvec4 getFromColor(vec2 uv) {\n  return texture2D(tDiffuse1, uv);\n}\n\nvec4 getToColor(vec2 uv) {\n  return texture2D(tDiffuse2, uv);\n}\n\nvoid main() {\n  gl_FragColor = mix(getFromColor(vUv), getToColor(vUv), uProgress);\n}\n"
          , g = "#define GLSLIFY 1\n#define SHADER_NAME Basic-raw\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"
          , D = n(181)
          , b = (n(65),
        {
            common: "#define GLSLIFY 1\n#define PI 3.14159265359\n#define RECIPROCAL_PI 0.31830988618\n#define LOG2 1.442695\n",
            map: "#define GLSLIFY 1\nfloat map(float oldVal, float oldMin, float oldMax, float newMin, float newMax) {\n  float old = oldMax - oldMin;\n  float new = newMax - newMin;\n  return (((oldVal - oldMin) * new) / old) + newMin;\n}",
            cmap: "#define GLSLIFY 1\n// import map chunk\n\nfloat map(float oldVal, float oldMin, float oldMax, float newMin, float newMax) {\n  float old = oldMax - oldMin;\n  float new = newMax - newMin;\n  return (((oldVal - oldMin) * new) / old) + newMin;\n}\n\nfloat cmap(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {\n  return clamp(map(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));\n}\n\n",
            aastep: "#define GLSLIFY 1\n// import aastep\nfloat aastep(float threshold, float value) {\n return step(threshold, value);\n}",
            circle: "#define GLSLIFY 1\n// import circle\nfloat circle(vec2 st, float radius) {\n    return aastep(radius, length(st - vec2(0.5)));\n}\n",
            rectangle: "#define GLSLIFY 1\n// import rectangle\nfloat rectangle(vec2 st, vec2 size) {\n    size = vec2(0.5) - size * 0.5;\n    vec2 uv = vec2(aastep(size.x, st.x), aastep(size.y, st.y));\n    uv *= vec2(aastep(size.x, 1.0 - st.x), aastep(size.y, 1.0 - st.y));\n\n    return uv.x * uv.y;\n}",
            polygon: "#define GLSLIFY 1\n// import polygon\nfloat polygon(vec2 st, float radius, float sides) {\n    st = st * 2.0 - 1.0;\n    float angle = atan(st.x,st.y) + 3.1415926535897932384626433832795;\n    float slice = 3.1415926535897932384626433832795 * 2. / sides;\n\n    return aastep(radius, cos(floor(0.5 + angle / slice ) * slice - angle) * length(st));\n}",
            luma: "#define GLSLIFY 1\n// import luma chunk\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}",
            rotateUV: "#define GLSLIFY 1\n// Import rotate chunk\nvec2 rotateUV(vec2 uv, float rot, vec2 origin) {\n    vec3 u = vec3(uv, 1.0);\n\n    mat3 mo1 = mat3(\n        1, 0, -origin.x,\n        0, 1, -origin.y,\n        0, 0, 1);\n\n    mat3 mo2 = mat3(\n        1, 0, origin.x,\n        0, 1, origin.y,\n        0, 0, 1);\n\n    mat3 mr = mat3(\n        cos(rot), sin(rot), 0,\n        -sin(rot), cos(rot), 0,\n        0, 0, 1);\n\n    u = u * mo1;\n    u = u * mr;\n    u = u * mo2;\n\n    return u.xy;\n}\n\nvec2 rotateUV(vec2 uv, float rot) {\n    return rotateUV(uv, rot, vec2(0.5));\n}\n",
            scaleUV: "#define GLSLIFY 1\n// Import scale chunk\nvec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {\n    vec3 u = vec3(uv, 1.0);\n\n    mat3 mo1 = mat3(\n        1, 0, -origin.x,\n        0, 1, -origin.y,\n        0, 0, 1);\n\n    mat3 mo2 = mat3(\n        1, 0, origin.x,\n        0, 1, origin.y,\n        0, 0, 1);\n\n    mat3 ms = mat3(\n        1.0 / scale.x, 0, 0,\n        0, 1.0 / scale.y, 0,\n        0, 0, 1);\n\n    u = u * mo1;\n    u = u * ms;\n    u = u * mo2;\n    return u.xy;\n}\n\nvec2 scaleUV(vec2 uv, vec2 scale) {\n    return scaleUV(uv, scale, vec2(0.5));\n}",
            translateUV: "#define GLSLIFY 1\n// import translateUV\nvec2 translateUV(vec2 uv, vec2 translate) {\n    vec3 u = vec3(uv, 1.0);\n    mat3 mt = mat3(\n        1, 0, -translate.x,\n        0, 1, -translate.y,\n        0, 0, 1);\n\n    u = u * mt;\n    return u.xy;\n}",
            noise2d: "#define GLSLIFY 1\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec2 fade(vec2 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat noise2d(vec2 P) {\n  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n  Pi = mod289(Pi); // To avoid truncation effects in permutation\n  vec4 ix = Pi.xzxz;\n  vec4 iy = Pi.yyww;\n  vec4 fx = Pf.xzxz;\n  vec4 fy = Pf.yyww;\n\n  vec4 i = permute(permute(ix) + iy);\n\n  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;\n  vec4 gy = abs(gx) - 0.5 ;\n  vec4 tx = floor(gx + 0.5);\n  gx = gx - tx;\n\n  vec2 g00 = vec2(gx.x,gy.x);\n  vec2 g10 = vec2(gx.y,gy.y);\n  vec2 g01 = vec2(gx.z,gy.z);\n  vec2 g11 = vec2(gx.w,gy.w);\n\n  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n  g00 *= norm.x;\n  g01 *= norm.y;\n  g10 *= norm.z;\n  g11 *= norm.w;\n\n  float n00 = dot(g00, vec2(fx.x, fy.x));\n  float n10 = dot(g10, vec2(fx.y, fy.y));\n  float n01 = dot(g01, vec2(fx.z, fy.z));\n  float n11 = dot(g11, vec2(fx.w, fy.w));\n\n  vec2 fade_xy = fade(Pf.xy);\n  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n  return 2.3 * n_xy;\n}\n\n",
            random: "#define GLSLIFY 1\nfloat random(vec2 n, float offset) {\n  return 0.5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233))) * 43758.5453);\n}"
        })
          , k = function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "parse",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    r = r || On.renderer.capabilities.precision;
                    var a = this._getExtensions(i, t)
                      , o = this._parseChunks(e, n);
                    return "\n      ".concat(a.join(" "), "\n      ").concat(this._getPrecison(r), "\n      ").concat(o, "\n    ")
                }
            }, {
                key: "_getExtensions",
                value: function(e, t) {
                    var n = [];
                    for (var i in e) {
                        if (e[i]) {
                            var r = w[i];
                            if (r.type === t) {
                                var a = "#extension ".concat(r.name, " : require");
                                n.push(a)
                            }
                        }
                    }
                    return n
                }
            }, {
                key: "_getPrecison",
                value: function(e) {
                    return "\n      precision ".concat(e, " float;\n      precision ").concat(e, " int;\n    ")
                }
            }, {
                key: "_parseChunks",
                value: function(t) {
                    for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = e.CHUNK_REGEX, r = this._parseTemplate(t, n), a = null; null !== (a = i.exec(r)); )
                        if (a.index === i.lastIndex && i.lastIndex++,
                        "/" !== a.input[a.index - 2]) {
                            var o = a[0]
                              , s = a[1]
                              , u = this._parseChunks(b[s], n);
                            if (void 0 === u)
                                throw new TypeError("[ShaderParser] Shader chunk '".concat(s, "' not found!"));
                            r = this._parseTemplate(r.replace(o, u))
                        }
                    return r
                }
            }, {
                key: "_parseTemplate",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = e;
                    return Object.keys(t).length,
                    n
                }
            }]),
            e
        }();
        k.VERTEX_SHADER = 0,
        k.FRAGMENT_SHADER = 1,
        k.CHUNK_REGEX = /@import\s(.*[a-z])/gi;
        var w = {
            drawBuffers: {
                name: "GL_EXT_draw_buffers",
                type: k.FRAGMENT_SHADER
            },
            derivatives: {
                name: "GL_OES_standard_derivatives",
                type: k.FRAGMENT_SHADER
            }
        }
          , x = new k
          , O = n(46)
          , C = ["precision", "vertexShader", "fragmentShader", "alpha", "fog", "defines", "data"];
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function S(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var F = function(e) {
            Object(o.a)(n, e);
            var t = S(n);
            function n(e) {
                var r, a = e.precision, o = e.vertexShader, s = e.fragmentShader, u = e.alpha, c = void 0 === u ? 1 : u, l = (e.fog,
                e.defines), h = void 0 === l ? {} : l, d = e.data, f = void 0 === d ? {} : d, v = Object(D.a)(e, C);
                return Object(i.a)(this, n),
                (r = t.call(this, v))._world = On,
                r._precision = a,
                r._gui = O.a,
                r._vertexShader = null,
                r._fragmentShader = null,
                r.data = f,
                r.vertexShader = o || "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvoid main() {  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
                r.fragmentShader = s || "#define GLSLIFY 1\nvoid main() {\n  gl_FragColor = vec4(0.0);\n}\n",
                r.uniforms = j(j({}, r.uniforms), {}, {
                    uAlpha: {
                        value: c
                    },
                    uTime: On.uniforms.uTime
                }),
                r.defines = j({}, h),
                r
            }
            return Object(r.a)(n, [{
                key: "update",
                value: function(e, t) {}
            }, {
                key: "vertexShader",
                get: function() {
                    return this._vertexShader
                },
                set: function(e) {
                    this._vertexShader = x.parse(e, x.VERTEX_SHADER, this.data, this.extensions, this._precision)
                }
            }, {
                key: "fragmentShader",
                get: function() {
                    return this._fragmentShader
                },
                set: function(e) {
                    this._fragmentShader = x.parse(e, x.FRAGMENT_SHADER, this.data, this.extensions, this._precision)
                }
            }, {
                key: "alpha",
                get: function() {
                    return this.uniforms.uAlpha.value
                },
                set: function(e) {
                    this.uniforms && (this.uniforms.uAlpha.value = e)
                }
            }]),
            n
        }(h.B);
        function P(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function R(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var T = function(e) {
            Object(o.a)(n, e);
            var t = R(n);
            function n(e, r) {
                var a;
                Object(i.a)(this, n);
                var o = r.vertexShader || g
                  , s = r.fragmentShader || _;
                return (a = t.call(this, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? P(Object(n), !0).forEach((function(t) {
                            Object(m.a)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    vertexShader: o,
                    fragmentShader: s
                }, r))).uniforms = {
                    tDiffuse1: e.tDiffuse1,
                    tDiffuse2: e.tDiffuse2,
                    uProgress: e.progress,
                    tRetina: {
                        value: null
                    },
                    uTime: On.uniforms.uTime
                },
                a
            }
            return Object(r.a)(n, [{
                key: "update",
                value: function(e, t) {}
            }]),
            n
        }(F);
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function L(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function B(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var U = function(e) {
            Object(o.a)(n, e);
            var t = B(n);
            function n(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object(i.a)(this, n);
                var a = r.vertexShader || y
                  , o = _;
                return t.call(this, e, L(L({}, r), {}, {
                    vertexShader: a,
                    fragmentShader: o
                }))
            }
            return n
        }(T)
          , A = "#define GLSLIFY 1\nuniform sampler2D tDiffuse2;\nuniform sampler2D tRetina;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 retina = texture2D(tRetina, vUv);\n  gl_FragColor.rgb = mix(texture2D(tDiffuse2, vUv).rgb, retina.rgb, retina.a);\n  gl_FragColor.a = 1.;\n}\n"
          , z = "#define GLSLIFY 1\nuniform sampler2D tDiffuse2;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor.rgb = texture2D(tDiffuse2, vUv).rgb;\n  gl_FragColor.a = 1.;\n}\n";
        function I(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var G = function(e) {
            Object(o.a)(n, e);
            var t = N(n);
            function n(e) {
                var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(i.a)(this, n);
                var s = a.vertexShader || y
                  , u = a.retina ? A : z;
                return r = t.call(this, e, V(V({}, a), {}, {
                    vertexShader: s,
                    fragmentShader: u
                })),
                o.retina && (r.uniforms.tRetina.value = {
                    value: On.retinaScene.rtt.texture
                }),
                r
            }
            return n
        }(T);
        function H(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Y = function(e) {
            Object(o.a)(n, e);
            var t = H(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                (r = t.call(this)).progress = {
                    value: 0
                },
                r.tDiffuse1 = {
                    value: null
                },
                r.tDiffuse2 = {
                    value: null
                },
                r._loaderScene = e,
                r._init(),
                r.setSize(),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.width
                      , t = c.k.height;
                    this.scale.set(e, t, 1),
                    this.updateMatrix(),
                    this.mesh.material = this.material
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this.material.update(e, t)
                }
            }, {
                key: "setTransition",
                value: function(e) {
                    switch (e) {
                    case "fade":
                        this.material = this.fadeTransition;
                        break;
                    case "basic":
                    default:
                        this.material = this.noTransition
                    }
                    this.mesh.material = this.material
                }
            }, {
                key: "_init",
                value: function() {
                    this.geometry = On.GEOMS.quad,
                    this.fadeTransition = new U(this),
                    this.noTransition = new G(this),
                    this.material = this.noTransition,
                    this.mesh = new h.r(this.geometry,this.material),
                    this.add(this.mesh),
                    this.matrixAutoUpdate = !1
                }
            }, {
                key: "rtt1",
                get: function() {
                    return this.tDiffuse1.value
                },
                set: function(e) {
                    this.tDiffuse1.value = e
                }
            }, {
                key: "rtt2",
                get: function() {
                    return this.tDiffuse2.value
                },
                set: function(e) {
                    this.tDiffuse2.value = e
                }
            }]),
            n
        }(h.u);
        function W(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var X = function(e) {
            Object(o.a)(n, e);
            var t = W(n);
            function n(e) {
                var r;
                Object(i.a)(this, n),
                r = t.call(this),
                Object(l.a)(Object(a.a)(r)),
                r._scenes = e,
                r._entities = [],
                r._renderer = On.renderer;
                var o = c.k.width
                  , s = c.k.height;
                return r._camera = new h.v(o / -2,o / 2,s / 2,s / -2,-100,100),
                r._bind(),
                r._init(),
                r._setSize(),
                r
            }
            return Object(r.a)(n, [{
                key: "update",
                value: function(e, t) {
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t);
                    this._renderer.setRenderTarget(null),
                    this._renderer.render(this, this._camera)
                }
            }, {
                key: "_bind",
                value: function() {
                    c.k.addResize(this._onResize)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.k.removeResize(this._onResize)
                }
            }, {
                key: "_setSize",
                value: function() {
                    var e = c.k.width
                      , t = c.k.height;
                    this._camera.left = e / -2,
                    this._camera.right = e / 2,
                    this._camera.top = t / 2,
                    this._camera.bottom = t / -2,
                    this._camera.updateProjectionMatrix();
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].setSize(e, t)
                }
            }, {
                key: "_init",
                value: function() {
                    var e = this;
                    this.transitionQuad = new Y,
                    this.material = this.transitionQuad.material,
                    this.add(this.transitionQuad),
                    this._entities.push(this.transitionQuad),
                    c.g.glHiddenPromise.then((function() {
                        e._onLoaderHide()
                    }
                    ))
                }
            }, {
                key: "_onLoaderHide",
                value: function() {}
            }, {
                key: "setTransition",
                value: function(e) {
                    this.transitionQuad.setTransition(e)
                }
            }, {
                key: "_onResize",
                value: function() {
                    this._setSize()
                }
            }, {
                key: "rtt1",
                get: function() {
                    return this.transitionQuad.rtt1
                },
                set: function(e) {
                    this.transitionQuad.rtt1 = e
                }
            }, {
                key: "rtt2",
                get: function() {
                    return this.transitionQuad.rtt2
                },
                set: function(e) {
                    this.transitionQuad.rtt2 = e
                }
            }, {
                key: "progress",
                get: function() {
                    return this.transitionQuad.progress.value
                },
                set: function(e) {
                    this.transitionQuad.progress.value = e
                }
            }]),
            n
        }(h.D)
          , K = n(25)
          , $ = n(49)
          , q = n(176);
        function Z(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Q = function(e) {
            Object(o.a)(n, e);
            var t = Z(n);
            function n(e) {
                var r;
                Object(i.a)(this, n),
                (r = t.call(this, e)).domElement.classList.add("stats"),
                r.domElement.classList.add("stats--is-visible"),
                document.body.appendChild(r.domElement);
                return $.a.addUp((function(e, t) {
                    $.a.isDown("shift") && "g" === t && r.domElement.classList.toggle("stats--is-visible")
                }
                )),
                r
            }
            return n
        }(n.n(q).a)
          , J = n(7)
          , ee = Object(K.c)("Scenes", "#8a3ebc", !1)
          , te = Object(K.c)("Scenes", K.b, !1)
          , ne = []
          , ie = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var r in Object(i.a)(this, e),
                Object(l.a)(this),
                this._scenesMap = {},
                n)
                    this._scenesMap[r.toLowerCase()] = n[r];
                this._world = t,
                this._scenes = [],
                this._current = null,
                this._last = null,
                this._changeOrder = [],
                this._guiFolder = null,
                Object(l.c)("stats") && (this._stats = new Q),
                this.create("loader", !0),
                this.renderScene = new X(this),
                this._bind()
            }
            return Object(r.a)(e, [{
                key: "create",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t = t.toLowerCase(),
                    this._world.resume();
                    var i = this._scenesMap[t]
                      , r = this.get(t);
                    if (i) {
                        if (r && n)
                            return te("Create() : Scene '".concat(t, "' is already created")),
                            Promise.resolve(r);
                        var a;
                        a = r && !n ? this.destroy(t) : Promise.resolve();
                        var o = new i(t);
                        return this._scenes.push(o),
                        c.c.emit(e.INSTANCED, o),
                        a.then((function() {
                            return o.create()
                        }
                        )).then((function() {
                            return ee("Scene '".concat(t, "' created")),
                            c.c.emit(e.CREATED, o),
                            o
                        }
                        ))
                    }
                    te("Create() : Scene '".concat(t, "' does not exist"))
                }
            }, {
                key: "destroy",
                value: function(e) {
                    var t = this;
                    if (e) {
                        e = e.toLowerCase();
                        var n = this.get(e);
                        return n ? n.destroy().then((function() {
                            return ee("Scene '".concat(e, "' destroyed")),
                            t._scenes.splice(t._scenes.indexOf(n), 1),
                            n
                        }
                        )) : (te("Destroy() : Scene '".concat(e, "' does not exist")),
                        Promise.resolve())
                    }
                }
            }, {
                key: "change",
                value: function() {
                    var t = this
                      , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    n = n.toLowerCase();
                    var o = this._current
                      , s = Promise.resolve()
                      , u = o && n === o.name;
                    return o && !u ? (o.hideGUI(),
                    s = i ? this.destroy(o.name) : this.pause(o.name),
                    ee("Scene changed from '".concat(o.name, "' to '").concat(n, "'"))) : ee("Scene changed to '".concat(n, "'")),
                    "loader" !== n && this._world.loading ? (this.pending = n,
                    s) : s.then((function() {
                        return t._changeOrder.push(n),
                        Promise.resolve(t.get(n) || t.create(n))
                    }
                    )).then((function(n) {
                        return n && t._changeOrder[t._changeOrder.length - 1] === n.name ? (t._last = t._current,
                        t._current = n,
                        t._world.scene = n,
                        a && t._last ? u || t.swap(t._last, t._current) : t.setVisible(t._current),
                        c.c.emit(e.CHANGED, n),
                        t._updateGUI(),
                        r || !n.running ? t.start(t._current.name) : n) : Promise.resolve()
                    }
                    ))
                }
            }, {
                key: "start",
                value: function(t) {
                    var n = this.get(t);
                    return n ? (clearTimeout(n.runningTo),
                    n.running ? (te("Start() : Scene '".concat(t, "' already started")),
                    Promise.resolve()) : (n.running = !0,
                    n.start().then((function() {
                        return ee("Scene '".concat(t, "' started")),
                        c.c.emit(e.STARTED, n),
                        n
                    }
                    )))) : (te("Start() : Scene '".concat(t, "' does not exist")),
                    Promise.resolve())
                }
            }, {
                key: "pause",
                value: function(t) {
                    var n = this.get(t);
                    return n ? n.running ? (clearTimeout(n.runningTo),
                    n.runningTo = setTimeout((function() {
                        n.running = !1
                    }
                    ), 1e3),
                    n.pause().then((function() {
                        return ee("Scene '".concat(t, "' paused")),
                        c.c.emit(e.PAUSED, n),
                        n
                    }
                    ))) : (te("Pause() : Scene '".concat(t, "' already paused")),
                    Promise.resolve()) : (te("Pause() : Scene '".concat(t, "' does not exist")),
                    Promise.resolve())
                }
            }, {
                key: "update",
                value: function(t, n) {
                    var i = this._scenes;
                    c.c.emit(e.BEFORE_RENDER, t, n),
                    this.delta = t,
                    this.time = n,
                    this._stats && this._stats.begin();
                    for (var r = 0, a = i.length; r < a; r++) {
                        var o = i[r];
                        o.running && !ne.includes(o._name) && o.update(t, n)
                    }
                    this.renderScene.update(t, n),
                    this._stats && this._stats.end(),
                    c.c.emit(e.AFTER_RENDER, t, n)
                }
            }, {
                key: "pauseUpdate",
                value: function(e, t) {
                    this.renderScene.update(e, t)
                }
            }, {
                key: "get",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = 0, n = this._scenes.length; t < n; t++) {
                        var i = this._scenes[t]
                          , r = i.name.toLowerCase();
                        if (r === e)
                            return i
                    }
                    return null
                }
            }, {
                key: "createGUI",
                value: function() {}
            }, {
                key: "destroyGUI",
                value: function() {}
            }, {
                key: "setVisible",
                value: function(e) {
                    this.renderScene.rtt1 = e.rtt.texture,
                    this.renderScene.rtt2 = e.rtt.texture,
                    this.setSize(),
                    this.renderScene.progress = 1,
                    this.scene1 = e,
                    this.scene2 = e
                }
            }, {
                key: "swap",
                value: function(t, n) {
                    var i = this;
                    t && (this.renderScene.rtt1 = t.rtt.texture),
                    this.renderScene.rtt2 = n.rtt.texture,
                    this.setSize(),
                    this.scene1 = t,
                    this.scene2 = n,
                    J.a.killTweensOf(this.renderScene, {
                        progress: !0
                    });
                    var r = {};
                    this.renderScene.setTransition("fade"),
                    J.a.set(this.renderScene, {
                        progress: 0
                    }),
                    J.a.to(this.renderScene, {
                        progress: 1,
                        ease: r.ease || "power2.out",
                        duration: r.duration || .5,
                        delay: r.delay || .1,
                        onComplete: function() {
                            i.renderScene.setTransition("basic")
                        }
                    }),
                    t.onSwapLeave(n),
                    n.onSwap(t),
                    c.c.emit(e.SWAPPED, t, n),
                    n.update(this.delta || 0, this.time || 0)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.width
                      , t = c.k.height;
                    this._last && this.renderScene.delta < 1 && this._last.setSize(e, t),
                    this._current && this._current.setSize(e, t)
                }
            }, {
                key: "_bind",
                value: function() {
                    c.k.addResize(this._onResize)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.k.removeResize(this._onResize)
                }
            }, {
                key: "_updateGUI",
                value: function() {}
            }, {
                key: "_onResize",
                value: function() {
                    this.setSize()
                }
            }, {
                key: "scene",
                get: function() {
                    return this._current
                }
            }]),
            e
        }();
        ie.INSTANCED = "Scenes_instanced",
        ie.STARTED = "Scenes_started",
        ie.PAUSED = "Scenes_paused",
        ie.CREATED = "Scenes_created",
        ie.CHANGED = "Scenes_changed",
        ie.BEFORE_RENDER = "Scenes_before_render",
        ie.AFTER_RENDER = "Scenes_after_render",
        ie.SWAPPED = "Scenes_swapped";
        var re = ie;
        function ae(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var oe = function(e) {
            Object(o.a)(n, e);
            var t = ae(n);
            function n(e) {
                var r, o = e.fov, s = void 0 === o ? 75 : o, u = e.aspect, h = void 0 === u ? c.k.aspect : u, d = e.near, f = void 0 === d ? 1 : d, v = e.far, p = void 0 === v ? 1e3 : v, m = e.name, y = void 0 === m ? "Camera" : m, _ = e.isDefault, g = void 0 !== _ && _;
                return Object(i.a)(this, n),
                r = t.call(this, s, h, f, p),
                Object(l.a)(Object(a.a)(r)),
                r.name = y,
                r.isDefault = g,
                r._gui = c.d,
                r._guiIsCreated = !1,
                r._helper = null,
                r._bind(),
                r._createHelper(),
                r
            }
            return Object(r.a)(n, [{
                key: "createGUI",
                value: function(e) {
                    var t = this
                      , n = e.addFolder({
                        title: "".concat(this.isDefault ? "📸" : "📷", " ").concat(this.name)
                    });
                    return n.expanded = !1,
                    n.addInput(this, "near", {
                        min: 1,
                        max: 5e3,
                        step: 1
                    }).on("change", (function(e) {
                        t.updateProjectionMatrix()
                    }
                    )),
                    n.addInput(this, "far", {
                        min: 1,
                        max: 8e3,
                        step: 1
                    }).on("change", (function(e) {
                        t.updateProjectionMatrix()
                    }
                    )),
                    n.addInput(this, "fov", {
                        min: 1,
                        max: 180,
                        step: 1
                    }).on("change", (function(e) {
                        t.updateProjectionMatrix()
                    }
                    )),
                    n.addSeparator(),
                    this._gui.addVec(n, this.position, {
                        label: "pos",
                        step: .1,
                        min: -100,
                        max: 100
                    }),
                    n.addSeparator(),
                    this._gui.addVec(n, this.rotation, {
                        label: "rot",
                        step: .01,
                        min: 2 * -Math.PI,
                        max: 2 * Math.PI
                    }),
                    n
                }
            }, {
                key: "start",
                value: function() {}
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "update",
                value: function(e, t) {
                    this._helper && this._helper.visible && (this.updateMatrixWorld(),
                    this._helper.update())
                }
            }, {
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "remove", this).call(this),
                    this._unbind(),
                    this._destroyHelper()
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    this.aspect = e / t,
                    this.updateProjectionMatrix()
                }
            }, {
                key: "_bind",
                value: function() {
                    c.f.addDown(this._onKeyDown)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.f.removeDown(this._onKeyDown)
                }
            }, {
                key: "_onResize",
                value: function(e, t) {
                    this.setSize(e, t)
                }
            }, {
                key: "_onKeyDown",
                value: function(e, t) {}
            }, {
                key: "_createHelper",
                value: function() {
                    this._helper = new h.d(this),
                    this._helper.name = "CameraHelper",
                    this._helper.material.fog = !1
                }
            }, {
                key: "_destroyHelper",
                value: function() {
                    this._helper && this._helper.remove()
                }
            }, {
                key: "helper",
                get: function() {
                    return this._helper
                }
            }, {
                key: "cameraAngle",
                get: function() {
                    return this._cameraAngle
                }
            }]),
            n
        }(h.w);
        function se(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var ue = function(e) {
            Object(o.a)(n, e);
            var t = se(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                (e = t.call(this, r)).name = r.name || "Basic camera",
                e
            }
            return n
        }(oe);
        function ce(e, t, n) {
            var i = 2 * t * Math.tan(.5 * e.fov * (Math.PI / 180))
              , r = i * n;
            return {
                width: r,
                height: i,
                w: r,
                h: i
            }
        }
        var le = n(39)
          , he = n(57)
          , de = (n(157),
        n(55),
        n(66))
          , fe = Object(K.c)("Textures", "#73505F", !1)
          , ve = !0
          , pe = new (function() {
            function e() {
                Object(i.a)(this, e),
                this._loader = he.a,
                this.textures = {},
                this.compressed = !ve && de.a.supports.webgl.textureFormat.compressed,
                this.format = ve ? "uncompressed" : de.a.supports.webgl.textureFormat.format,
                this._log()
            }
            return Object(r.a)(e, [{
                key: "get",
                value: function(e, t) {
                    return this.textures[e] ? this.textures[e] : this._createTexture(e, t)
                }
            }, {
                key: "destroy",
                value: function(e) {
                    return !!this.textures[e] && ("function" == typeof this.textures[e].dispose && this.textures[e].dispose(),
                    this.textures[e] = null,
                    !0)
                }
            }, {
                key: "_createTexture",
                value: function(e) {
                    var t, n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = i.filtering, a = i.wrapping, o = i.repeat, s = i.noCompression, u = i.mipmaps, c = void 0 !== u && u, l = i.dynamicUrl, d = e.includes(".png") || e.indexOf(".jpg");
                    if (!this.compressed || s || d) {
                        var f = 0 === e.indexOf("http")
                          , v = l && f ? null : this._loader.get(e);
                        if (!v) {
                            if (!f)
                                return null;
                            var p = document.createElement("img");
                            (t = new h.H(p)).setFromUrl = !0,
                            p.crossOrigin = "anonymous",
                            p.onload = function() {
                                t.needsUpdate = !0
                            }
                            ,
                            p.src = e
                        }
                        t || (t = new h.H(v)),
                        t.flipY = !0,
                        t.generateMipmaps = c
                    } else {
                        t = new h.g;
                        var m = this._loader.get(e);
                        if (!m)
                            return null;
                        t.image.width = m.width,
                        t.image.height = m.height,
                        t.mipmaps = m.mipmaps,
                        t.format = m.format
                    }
                    return t.name = e,
                    t.minFilter = t.magFilter = r || h.o,
                    t.wrapS = t.wrapT = a || h.e,
                    t.anisotropy = On.renderer.capabilities.getMaxAnisotropy(),
                    t.destroyCb = function() {
                        return n.destroy(t.name)
                    }
                    ,
                    o && t.repeat.copy(o),
                    t.setFromUrl || (t.needsUpdate = !0),
                    this.textures[e] = t,
                    t
                }
            }, {
                key: "_log",
                value: function() {
                    var e = this;
                    setTimeout((function() {
                        var t = e.compressed ? "Compressed" : "Uncompressed"
                          , n = e.compressed ? "| ".concat(e.format.toUpperCase()) : "";
                        fe("".concat(t, " ").concat(n))
                    }
                    ), 0)
                }
            }]),
            e
        }());
        n(44),
        n(125);
        function me(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        function ye(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function _e(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ye(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ye(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ge(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var De = function(e) {
            Object(o.a)(n, e);
            var t = ge(n);
            function n(e) {
                var r, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object(i.a)(this, n),
                e || console.warn("You forgot to pass the scene to the entity"),
                (r = t.call(this, e)).scene = e,
                r.params = a,
                a && a.parent && (r._parent = a.parent),
                r._world = On,
                r._loader = he.a,
                r.xOffset = 0,
                r._engine = e.engine,
                r._engine && (r._pWorld = r._engine.world),
                r._uTime = On.uniforms.uTime,
                r._gui = O.a,
                r._tls = [],
                r._mats = [],
                r._maps = [],
                r._entities = [],
                r._retinas = [],
                r._timeouts = [],
                r._renderer = r._world.renderer,
                r._textures = pe,
                r.bodiesAdded = !0,
                r._isBinded = !1,
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    this._destroyed = !0,
                    this._timeouts.forEach((function(e) {
                        return clearTimeout(e)
                    }
                    )),
                    this._unbind(),
                    this._destroyTls(),
                    this.traverse((function(e) {
                        e.material && "function" == typeof e.material.dispose && e.material.dispose(),
                        e.geometry && "function" == typeof e.geometry.dispose && e.geometry.dispose(),
                        e._maps && e._maps.length && e._maps.forEach((function(e) {
                            e.destroyCb ? e.destroyCb() : "function" === e.dispose && e.dispose()
                        }
                        ))
                    }
                    ));
                    for (var e = 0, t = this._mats.length; e < t; e++)
                        this._mats[e] && "function" == typeof this._mats[e].dispose && this._mats[e].dispose();
                    for (var n = 0, i = this._maps.length; n < i; n++) {
                        var r = this._maps[n];
                        r.destroyCb ? r.destroyCb() : "function" === r.dispose && r.dispose()
                    }
                    this.remove();
                    for (var a = 0, o = this._entities.length; a < o; a++)
                        this._entities[a].destroy && !this._entities[a].destroyed && this._entities[a].destroy()
                }
            }, {
                key: "setSize",
                value: function() {}
            }, {
                key: "delayedCall",
                value: function(e, t) {
                    var n = setTimeout(e, t);
                    return this._timeouts.push(n),
                    n
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    for (var t = 0, n = this._entities.length; t < n; t++)
                        this._entities[t].onSwap && this._entities[t].onSwap(e)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    for (var t = 0, n = this._entities.length; t < n; t++)
                        this._entities[t].onSwapLeave && this._entities[t].onSwapLeave(e)
                }
            }, {
                key: "update",
                value: function(e, t) {}
            }, {
                key: "_bind",
                value: function() {}
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createFolder",
                value: function(e) {
                    return this.scene.pane.addFolder({
                        title: e,
                        expanded: !1
                    })
                }
            }, {
                key: "_createMaterial",
                value: function(e) {
                    var t = new F(e);
                    return e.name && (t.name = e.name),
                    this._mats.push(t),
                    t
                }
            }, {
                key: "_loadTexture",
                value: function(e, t, n, i) {
                    return On.textureLoader.load(e, t, n, i)
                }
            }, {
                key: "_addBody",
                value: function(e, t) {
                    e.sleepThreshold = 1e12
                }
            }, {
                key: "_removeBody",
                value: function(e, t, n) {}
            }, {
                key: "_addEntity",
                value: function(e) {
                    this._entities.push(e),
                    e._parent = this,
                    e._composite || (e._composite = this.composite),
                    this.add(e)
                }
            }, {
                key: "_addRetinaEntity",
                value: function(e, t) {
                    this._addEntity(e),
                    this._retinas.push(e),
                    On.retinaScene.addEntity(e, t),
                    e.baseGroup = this
                }
            }, {
                key: "_addConstraint",
                value: function(e) {
                    this.constraints || (this.constraints = []),
                    this.constraints.push(e)
                }
            }, {
                key: "_removeConstraint",
                value: function(e) {}
            }, {
                key: "_resetConstraints",
                value: function() {
                    this.constraints
                }
            }, {
                key: "_removeConstraints",
                value: function(e) {
                    this.constraints && (this.constraints = [])
                }
            }, {
                key: "_scaleBody",
                value: function(e, t, n) {}
            }, {
                key: "_sync",
                value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e.position.x = t.position.x,
                    e.position.y = -t.position.y,
                    n && (e.rotation.z = -t.angle % (2 * Math.PI))
                }
            }, {
                key: "_parseMesh",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    if (this.scene.pane) {
                        this.folder || (this.folder = this.scene.pane.addFolder({
                            title: "👻 ".concat(me(this.name), " entity")
                        }),
                        this.folder.expanded = !1);
                        var a, o = t.label;
                        this.folder.addSeparator(),
                        "boolean" == typeof e.visible && (this.folder.addInput(e, "visible", {
                            label: o + " visible"
                        }),
                        this.folder.addSeparator()),
                        n && (a = o + " pos",
                        t.position || (t.position = {
                            min: -10,
                            max: 10,
                            step: .05
                        }),
                        t.position.label = a,
                        this._gui.addVec(this.folder, e.position, t.position),
                        this.folder.addSeparator()),
                        i && (a = o + " rot",
                        t.rotation || (t.rotation = {
                            min: -Math.PI,
                            max: Math.PI,
                            step: .01
                        }),
                        t.rotation.label = a,
                        this._gui.addVec(this.folder, e.rotation, t.rotation),
                        this.folder.addSeparator()),
                        r && (a = o + " scale",
                        t.scale || (t.scale = {
                            min: .001,
                            max: 10,
                            step: .1
                        }),
                        t.scale.label = a,
                        this._gui.addVec(this.folder, e.scale, t.scale),
                        this.folder.addSeparator())
                    }
                }
            }, {
                key: "_createMatFolder",
                value: function(e, t) {
                    t || (t = this.scene.pane);
                    var n = t.addFolder({
                        title: "🎨 ".concat(me(e.name || this.name), " material")
                    });
                    return n.expanded = !1,
                    n
                }
            }, {
                key: "_parseMaterial",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (this.scene.pane) {
                        this.matFolder || (this.matFolder = this._createMatFolder(e));
                        for (var i = 0, r = t.length; i < r; i++) {
                            var a = t[i].label ? t[i].label : t[i]
                              , o = "object" === Object(le.a)(t[i]) ? t[i] : {}
                              , s = e.uniforms[a];
                            s && (void 0 !== s.value.x ? this._gui.addVec(this.matFolder, s.value, _e({
                                label: a
                            }, o)) : ("uAlpha" !== a && "uProgress" !== a || (o = _e(_e({}, o), {}, {
                                min: 0,
                                max: 1,
                                step: .01
                            })),
                            this.matFolder.addInput(s, "value", o)))
                        }
                        for (var u = 0, c = n.length; u < c; u++) {
                            var l = n[u]
                              , h = e[l];
                            void 0 !== h && (void 0 !== h.x ? this._gui.addVec(this.matFolder, h, {
                                label: l
                            }) : this.matFolder.addInput(e, l, {
                                label: l
                            }))
                        }
                    }
                }
            }, {
                key: "_enablePhysics",
                value: function() {}
            }, {
                key: "_createGUI",
                value: function() {
                    this.scene.pane
                }
            }, {
                key: "onVisible",
                value: function() {}
            }, {
                key: "onInvisible",
                value: function() {}
            }, {
                key: "onAnimateIn",
                value: function() {}
            }, {
                key: "onAnimateOut",
                value: function() {}
            }, {
                key: "_destroyTls",
                value: function() {
                    for (var e = 0, t = this._tls.length; e < t; e++) {
                        var n = this._tls[e];
                        n.kill(),
                        n.clear()
                    }
                }
            }, {
                key: "_updatePhysics",
                value: function(e, t) {
                    this.engine && Engine.update(this.engine, 1e3 / 60)
                }
            }, {
                key: "_togglePhysicRender",
                value: function() {}
            }]),
            n
        }(h.u);
        function be(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var ke = function(e) {
            Object(o.a)(n, e);
            var t = be(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                r = t.call(this, e),
                Object(l.a)(Object(a.a)(r)),
                r._init(),
                r.position.z = -100,
                c.c.on("darkmode:changed", r._onDarkModeChange),
                r.setSize(),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.aspect
                      , t = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, e)
                      , n = t.width
                      , i = t.height;
                    this.scale.set(n, i, 1),
                    this.updateMatrix()
                }
            }, {
                key: "update",
                value: function(e, t) {}
            }, {
                key: "_init",
                value: function() {
                    this.geometry = On.GEOMS.plane,
                    this.material = this._createMaterial({
                        vertexShader: g,
                        fragmentShader: "#define GLSLIFY 1\nuniform float uTime;\nuniform float uRandom;\n// uniform float uNoise;\nuniform float uVelocity;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nvarying vec2 vUv;\n\n@import random\n\nvoid main() {\n\n  float noise = random(vUv, uRandom);\n  float vel = min(.1, abs(uVelocity * .0001));\n  vec3 color = uColor1;// + vec3(noise * (uNoise + vel));\n  gl_FragColor.rgb = color;\n  gl_FragColor.a = 1.;\n}\n",
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            },
                            uColor2: {
                                value: this._world.color2
                            },
                            uNoise: {
                                value: c.l.isDarkMode ? .08 : .1
                            },
                            uRandom: this._world.uniforms.uRandom,
                            uVelocity: c.e.lerpedVelocity
                        }
                    }),
                    this.mesh = new h.r(this.geometry,this.material),
                    this.add(this.mesh),
                    this.matrixAutoUpdate = !1
                }
            }, {
                key: "_onDarkModeChange",
                value: function(e) {
                    J.a.to(this.material.uniforms.uNoise, {
                        value: e ? .08 : .1,
                        duration: .4
                    })
                }
            }, {
                key: "setColor",
                value: function(e) {
                    this.material.color.set(e)
                }
            }]),
            n
        }(De)
          , we = function() {
            function e(t) {
                var n = t.width
                  , r = void 0 === n ? 256 : n
                  , a = t.height
                  , o = void 0 === a ? 256 : a
                  , s = t.format
                  , u = void 0 === s ? h.z : s
                  , c = t.type
                  , l = void 0 === c ? h.m : c
                  , d = t.minFilter
                  , f = void 0 === d ? h.o : d
                  , v = t.magFilter
                  , p = void 0 === v ? h.o : v
                  , m = t.depthBuffer
                  , y = void 0 !== m && m
                  , _ = (t.material,
                t.debug)
                  , g = void 0 !== _ && _;
                Object(i.a)(this, e);
                var D = {
                    wrapS: h.e,
                    wrapT: h.e,
                    minFilter: f,
                    magFilter: p,
                    format: u,
                    type: l,
                    stencilBuffer: !1,
                    depthBuffer: y,
                    generateMipmaps: !1
                };
                this._read = new h.Q(r,o,D),
                this._write = new h.Q(r,o,D),
                g && this.debug()
            }
            return Object(r.a)(e, [{
                key: "swap",
                value: function() {
                    var e = this._read;
                    this._read = this._write,
                    this._write = e
                }
            }, {
                key: "debug",
                value: function() {}
            }, {
                key: "read",
                get: function() {
                    return this._read
                }
            }, {
                key: "write",
                get: function() {
                    return this._write
                }
            }]),
            e
        }()
          , xe = (n(95),
        "precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\n\nattribute lowp vec2 position;\nattribute lowp vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0., 1.);\n}")
          , Oe = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vec4 texture = texture2D(tMap, vUv);\n\n  vec3 color = texture.rgb;\n  float alpha = texture.a;\n\n  gl_FragColor = vec4(color, alpha);\n}";
        function Ce(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Ee = function(e) {
            Object(o.a)(n, e);
            var t = Ce(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = r.positions, s = void 0 === o ? new Float32Array([-.5, -.5, 1.5, -.5, -.5, 1.5]) : o, u = r.uvs, c = void 0 === u ? new Float32Array([0, 0, 2, 0, 0, 2]) : u, l = r.material, d = void 0 === l ? new h.B({
                    uniforms: {
                        tMap: null
                    },
                    vertexShader: xe,
                    fragmentShader: Oe
                }) : l, f = r.texture, v = void 0 === f ? null : f, p = r.scene, m = void 0 !== p && p;
                return Object(i.a)(this, n),
                e = t.call(this),
                n.CAMERA || (n.CAMERA = new h.v(-.5,.5,.5,-.5,0,1)),
                e._camera = n.CAMERA,
                n.GEOM || (n.GEOM = new h.c,
                n.GEOM.setAttribute("position", new h.b(s,2)),
                n.GEOM.setAttribute("uv", new h.b(c,2))),
                e._geometry = n.GEOM,
                v && (d.uniforms.tMap = {
                    value: v
                },
                d.uniforms.tMap.value.needsUpdate = !0),
                e._material = d,
                e._mesh = new h.r(e._geometry,e._material),
                e.add(e._mesh),
                m && (e._scene = new h.D,
                e._scene.add(Object(a.a)(e))),
                e
            }
            return Object(r.a)(n, [{
                key: "material",
                get: function() {
                    return this._material
                }
            }, {
                key: "scene",
                get: function() {
                    return this._scene
                }
            }, {
                key: "camera",
                get: function() {
                    return this._camera
                }
            }]),
            n
        }(h.u)
          , je = "precision highp float;\n#define GLSLIFY 1\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelViewMatrix;\nuniform vec2 uTexelSize;\n\nattribute lowp vec2 position;\nattribute lowp vec2 uv;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nvoid main() {\n\n  vUv = uv;\n  vL = vUv - vec2(uTexelSize.x, 0.0);\n  vR = vUv + vec2(uTexelSize.x, 0.0);\n  vT = vUv + vec2(0.0, uTexelSize.y);\n  vB = vUv - vec2(0.0, uTexelSize.y);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0., 1.0);\n}"
          , Se = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = t.autoClear
                  , r = void 0 === n || n
                  , a = t.iterations
                  , o = void 0 === a ? 3 : a
                  , s = t.densityDissipation
                  , u = void 0 === s ? .97 : s
                  , c = t.velocityDissipation
                  , l = void 0 === c ? .98 : c
                  , d = t.pressureDissipation
                  , f = void 0 === d ? .8 : d
                  , v = t.curlStrength
                  , p = void 0 === v ? 20 : v
                  , m = t.radius
                  , y = void 0 === m ? .2 : m
                  , _ = arguments.length > 1 ? arguments[1] : void 0;
                Object(i.a)(this, e),
                this.radiusCoef = 1,
                this._id = Math.random(),
                this._pool = _,
                this.offsetY = 0,
                this._gl = On.renderer.getContext(),
                this._autoClear = r,
                this._hasBigTriangle = !0,
                this._bgColor = new h.N(0,0,0),
                this._fluidColor = new h.N(1,1,1),
                this._rendererSize = new h.M,
                this._lastMouse = new h.M,
                this._lastSplat = new h.M,
                this._splats = [],
                this._simRes = 64,
                this._dyeRes = 128,
                this._iterations = o,
                this._densityDissipation = u,
                this._velocityDissipation = l,
                this._pressureDissipation = f,
                this._curlStrength = p,
                this._radius = y,
                this._opacity = 1,
                this._multiColorAmplitude = .0025,
                this._supportLinearFiltering = On.renderer.extensions.get("OES_texture_half_float_linear"),
                this.update = this.update.bind(this),
                this._setupFBOs(),
                this._setupPrograms(),
                this.uniform = {
                    value: this._density.read.texture
                }
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    if (!this.binded) {
                        this.binded = !0;
                        var e = "ontouchstart"in window;
                        this.updateMouse = this.updateMouse.bind(this),
                        e ? (window.addEventListener("touchstart", this.updateMouse, !1),
                        window.addEventListener("touchmove", this.updateMouse, !1)) : window.addEventListener("mousemove", this.updateMouse, !1)
                    }
                }
            }, {
                key: "unbind",
                value: function() {
                    this.binded = !1,
                    this._lastMouse.isInit = !1,
                    "ontouchstart"in window ? (window.removeEventListener("touchstart", this.updateMouse, !1),
                    window.removeEventListener("touchmove", this.updateMouse, !1)) : window.removeEventListener("mousemove", this.updateMouse, !1)
                }
            }, {
                key: "updateMouse",
                value: function(e) {
                    e.changedTouches && e.changedTouches.length && (e.x = e.changedTouches[0].pageX,
                    e.y = e.changedTouches[0].pageY),
                    void 0 === e.x && (e.x = e.pageX,
                    e.y = e.pageY);
                    var t = e.y + this.offsetY;
                    this._lastMouse.isInit || (this._lastMouse.isInit = !0,
                    this._lastMouse.set(e.x, t));
                    var n = e.x - this._lastMouse.x
                      , i = t - this._lastMouse.y;
                    this._lastMouse.set(e.x, t),
                    (Math.abs(n) || Math.abs(i)) && this._splats.push({
                        x: e.x / c.k.width,
                        y: 1 - t / c.k.height,
                        dx: 5 * n,
                        dy: -5 * i
                    })
                }
            }, {
                key: "_setupFBOs",
                value: function() {
                    this._curl = new h.Q(this._simRes,this._simRes,{
                        wrapS: h.e,
                        wrapT: h.e,
                        minFilter: h.t,
                        magFilter: h.t,
                        format: h.z,
                        type: h.n,
                        stencilBuffer: !1,
                        depthBuffer: !1,
                        generateMipmaps: !1
                    }),
                    this._divergence = new h.Q(this._simRes,this._simRes,{
                        wrapS: h.e,
                        wrapT: h.e,
                        minFilter: h.t,
                        magFilter: h.t,
                        format: h.z,
                        type: h.n,
                        stencilBuffer: !1,
                        depthBuffer: !1,
                        generateMipmaps: !1
                    }),
                    this._density = new we({
                        width: this._dyeRes,
                        height: this._dyeRes,
                        type: h.n
                    }),
                    this._velocity = new we({
                        width: this._simRes,
                        height: this._simRes,
                        format: h.z,
                        type: h.n
                    }),
                    this._pressure = new we({
                        width: this._simRes,
                        height: this._simRes,
                        type: h.n,
                        format: h.z,
                        minFilter: h.t,
                        magFilter: h.t
                    })
                }
            }, {
                key: "_setupPrograms",
                value: function() {
                    var e = {
                        value: new h.M(1 / this._simRes,1 / this._simRes)
                    };
                    this._splatProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tTarget: {
                                    value: null
                                },
                                uAspectRatio: {
                                    value: 1
                                },
                                uColor: {
                                    value: new h.N
                                },
                                uPoint: {
                                    value: new h.M
                                },
                                uRadius: {
                                    value: 1
                                }
                            },
                            vertexShader: je,
                            fragmentShader: "precision highp float;\nprecision highp sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tTarget;\nuniform float uAspectRatio;\nuniform vec3 uColor;\nuniform vec2 uPoint;\nuniform float uRadius;\n\nvarying vec2 vUv;\n\nvoid main () {\n\n    vec2 p = vUv - uPoint.xy;\n    // p.x *= uAspectRatio; = if perspective\n\n    vec3 splat = exp(-dot(p, p) / uRadius) * uColor;\n\n    vec3 base = texture2D(tTarget, vUv).xyz;\n\n    gl_FragColor = vec4(base + splat, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._curlProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tVelocity: {
                                    value: null
                                },
                                uTexelSize: e
                            },
                            vertexShader: je,
                            fragmentShader: "precision mediump float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tVelocity;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n  float L = texture2D(tVelocity, vL).y;\n  float R = texture2D(tVelocity, vR).y;\n  float T = texture2D(tVelocity, vT).x;\n  float B = texture2D(tVelocity, vB).x;\n  float vorticity = R - L - T + B;\n  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._vorticityProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tVelocity: {
                                    value: null
                                },
                                tCurl: {
                                    value: null
                                },
                                uTexelSize: e,
                                uCurl: {
                                    value: this._curlStrength
                                },
                                uDt: {
                                    value: .016
                                }
                            },
                            vertexShader: je,
                            fragmentShader: "precision highp float;\nprecision highp sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tVelocity;\nuniform sampler2D tCurl;\nuniform float uCurl;\nuniform float uDt;\n\nvarying vec2 vUv;\nvarying vec2 vL;\nvarying vec2 vR;\nvarying vec2 vT;\nvarying vec2 vB;\n\nvoid main () {\n  float L = texture2D(tCurl, vL).x;\n  float R = texture2D(tCurl, vR).x;\n  float T = texture2D(tCurl, vT).x;\n  float B = texture2D(tCurl, vB).x;\n  float C = texture2D(tCurl, vUv).x;\n  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n  force /= length(force) + 0.0001;\n  force *= uCurl * C;\n  force.y *= -1.0;\n  vec2 vel = texture2D(tVelocity, vUv).xy;\n  gl_FragColor = vec4(vel + force * uDt, 0.0, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._divergenceProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tVelocity: {
                                    value: null
                                },
                                uTexelSize: e
                            },
                            vertexShader: je,
                            fragmentShader: "precision mediump float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nuniform sampler2D tVelocity;\n\nvoid main () {\n    float L = texture2D(tVelocity, vL).x;\n    float R = texture2D(tVelocity, vR).x;\n    float T = texture2D(tVelocity, vT).y;\n    float B = texture2D(tVelocity, vB).y;\n    vec2 C = texture2D(tVelocity, vUv).xy;\n    if (vL.x < 0.0) { L = -C.x; }\n    if (vR.x > 1.0) { R = -C.x; }\n    if (vT.y > 1.0) { T = -C.y; }\n    if (vB.y < 0.0) { B = -C.y; }\n    float div = 0.5 * (R - L + T - B);\n    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._clearProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tDiffuse: {
                                    value: null
                                },
                                uTexelSize: e,
                                uDissipation: {
                                    value: this._pressureDissipation
                                }
                            },
                            vertexShader: je,
                            fragmentShader: "precision mediump float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tDiffuse;\nuniform float uDissipation;\n\nvarying highp vec2 vUv;\n\nvoid main () {\n  gl_FragColor = uDissipation * texture2D(tDiffuse, vUv);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._pressureProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                uTexelSize: e,
                                tPressure: {
                                    value: null
                                },
                                tDivergence: {
                                    value: null
                                }
                            },
                            vertexShader: je,
                            fragmentShader: "precision mediump float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tPressure;\nuniform sampler2D tDivergence;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n  float L = texture2D(tPressure, vL).x;\n  float R = texture2D(tPressure, vR).x;\n  float T = texture2D(tPressure, vT).x;\n  float B = texture2D(tPressure, vB).x;\n  float C = texture2D(tPressure, vUv).x;\n  float divergence = texture2D(tDivergence, vUv).x;\n  float pressure = (L + R + B + T - divergence) * 0.25;\n  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._gradientProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tPressure: {
                                    value: null
                                },
                                tVelocity: {
                                    value: null
                                },
                                uTexelSize: e
                            },
                            vertexShader: je,
                            fragmentShader: "precision mediump float;\nprecision mediump sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tPressure;\nuniform sampler2D tVelocity;\n\nvarying highp vec2 vUv;\nvarying highp vec2 vL;\nvarying highp vec2 vR;\nvarying highp vec2 vT;\nvarying highp vec2 vB;\n\nvoid main () {\n  float L = texture2D(tPressure, vL).x;\n  float R = texture2D(tPressure, vR).x;\n  float T = texture2D(tPressure, vT).x;\n  float B = texture2D(tPressure, vB).x;\n  vec2 velocity = texture2D(tVelocity, vUv).xy;\n  velocity.xy -= vec2(R - L, T - B);\n  gl_FragColor = vec4(velocity, 0.0, 1.0);\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    }),
                    this._advectionProgram = new Ee({
                        material: new h.B({
                            uniforms: {
                                tSource: {
                                    value: null
                                },
                                tVelocity: {
                                    value: null
                                },
                                uTexelSize: e,
                                uDyeTexelSize: {
                                    value: new h.M(1 / this._dyeRes,1 / this._dyeRes)
                                },
                                uDt: {
                                    value: .016
                                },
                                uDissipation: {
                                    value: 1
                                }
                            },
                            vertexShader: je,
                            fragmentShader: this._supportLinearFiltering ? "precision highp float;\nprecision highp sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tVelocity;\nuniform sampler2D tSource;\nuniform vec2 uTexelSize;\nuniform float uDt;\nuniform float uDissipation;\n\nvarying vec2 vUv;\n\nvoid main () {\n  vec2 coord = vUv - uDt * texture2D(tVelocity, vUv).xy * uTexelSize;\n  gl_FragColor = uDissipation * texture2D(tSource, coord);\n  gl_FragColor.a = 1.0;\n}" : "precision highp float;\nprecision highp sampler2D;\n#define GLSLIFY 1\n\nuniform sampler2D tVelocity;\nuniform sampler2D tSource;\nuniform vec2 uTexelSize;\nuniform vec2 uDyeTexelSize;\nuniform float uDt;\nuniform float uDissipation;\n\nvarying vec2 vUv;\n\nvec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n  vec2 st = uv / tsize - 0.5;\n  vec2 iuv = floor(st);\n  vec2 fuv = fract(st);\n  vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n  vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n  vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n  vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n  return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n}\n\nvoid main () {\n  vec2 coord = vUv - uDt * bilerp(tVelocity, vUv, uTexelSize).xy * uTexelSize;\n  gl_FragColor = uDissipation * bilerp(tSource, coord, uDyeTexelSize);\n  gl_FragColor.a = 1.0;\n}",
                            depthTest: !1,
                            depthWrite: !1,
                            transparent: !1
                        }),
                        scene: !0
                    })
                }
            }, {
                key: "_supportRenderTextureFormat",
                value: function(e, t, n, i) {
                    var r = e.createTexture();
                    e.bindTexture(e.TEXTURE_2D, r),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                    e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, n, i, null);
                    var a = e.createFramebuffer();
                    return e.bindFramebuffer(e.FRAMEBUFFER, a),
                    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, r, 0),
                    e.checkFramebufferStatus(e.FRAMEBUFFER) == e.FRAMEBUFFER_COMPLETE
                }
            }, {
                key: "_getSupportedFormat",
                value: function(e, t, n, i) {
                    if (!this._supportRenderTextureFormat(e, t, n, i))
                        switch (t) {
                        case e.R16F:
                            return this._getSupportedFormat(e, e.RG16F, e.RG, i);
                        case e.RG16F:
                            return this._getSupportedFormat(e, e.RGBA16F, e.RGBA, i);
                        default:
                            return null
                        }
                    return {
                        internalFormat: t,
                        format: n
                    }
                }
            }, {
                key: "createGUI",
                value: function(e) {
                    var t = e.addFolder({
                        title: "Fluid sim"
                    });
                    t.expanded = !1,
                    t.addInput(this, "_iterations", {
                        min: 1,
                        max: 10,
                        step: 1
                    }),
                    t.addInput(this, "_densityDissipation", {
                        min: .5,
                        max: 1,
                        step: .001
                    }),
                    t.addInput(this, "_velocityDissipation", {
                        min: .5,
                        max: 1,
                        step: .001
                    }),
                    t.addInput(this, "_pressureDissipation", {
                        min: .5,
                        max: 1,
                        step: .001
                    }),
                    t.addInput(this, "_curlStrength", {
                        min: 0,
                        max: 100,
                        step: .1
                    }),
                    t.addInput(this, "_radius", {
                        min: 0,
                        max: .8,
                        step: .001
                    })
                }
            }, {
                key: "release",
                value: function() {
                    this._pool.release(this)
                }
            }, {
                key: "draw",
                value: function(e) {
                    this._splats.push(e)
                }
            }, {
                key: "update",
                value: function() {
                    On.renderer.autoClear = !1;
                    for (var e = this._splats.length - 1; e >= 0; e--) {
                        var t = this._splats.splice(e, 1)[0];
                        this._updateSplat(t)
                    }
                    this._curlProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    On.renderer.setRenderTarget(this._curl),
                    On.renderer.render(this._curlProgram.scene, this._curlProgram.camera),
                    this._vorticityProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    this._vorticityProgram.material.uniforms.tCurl.value = this._curl.texture,
                    this._vorticityProgram.material.uniforms.uCurl.value = this._curlStrength,
                    On.renderer.setRenderTarget(this._velocity.write),
                    On.renderer.render(this._vorticityProgram.scene, this._vorticityProgram.camera),
                    this._velocity.swap(),
                    this._divergenceProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    On.renderer.setRenderTarget(this._divergence),
                    On.renderer.render(this._divergenceProgram.scene, this._divergenceProgram.camera),
                    this._clearProgram.material.uniforms.tDiffuse.value = this._pressure.read.texture,
                    this._clearProgram.material.uniforms.uDissipation.value = this._pressureDissipation,
                    On.renderer.setRenderTarget(this._pressure.write),
                    On.renderer.render(this._clearProgram.scene, this._clearProgram.camera),
                    this._pressure.swap(),
                    this._pressureProgram.material.uniforms.tDivergence.value = this._divergence.texture;
                    for (var n = 0; n < this._iterations; n++)
                        this._pressureProgram.material.uniforms.tPressure.value = this._pressure.read.texture,
                        On.renderer.setRenderTarget(this._pressure.write),
                        On.renderer.render(this._pressureProgram.scene, this._pressureProgram.camera),
                        this._pressure.swap();
                    this._gradientProgram.material.uniforms.tPressure.value = this._pressure.read.texture,
                    this._gradientProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    On.renderer.setRenderTarget(this._velocity.write),
                    On.renderer.render(this._gradientProgram.scene, this._gradientProgram.camera),
                    this._velocity.swap(),
                    this._advectionProgram.material.uniforms.uDyeTexelSize.value.set(1 / this._simRes, 1 / this._simRes),
                    this._advectionProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    this._advectionProgram.material.uniforms.tSource.value = this._velocity.read.texture,
                    this._advectionProgram.material.uniforms.uDissipation.value = this._velocityDissipation,
                    On.renderer.setRenderTarget(this._velocity.write),
                    On.renderer.render(this._advectionProgram.scene, this._advectionProgram.camera),
                    this._velocity.swap(),
                    this._advectionProgram.material.uniforms.uDyeTexelSize.value.set(1 / this._dyeRes, 1 / this._dyeRes),
                    this._advectionProgram.material.uniforms.tVelocity.value = this._velocity.read.texture,
                    this._advectionProgram.material.uniforms.tSource.value = this._density.read.texture,
                    this._advectionProgram.material.uniforms.uDissipation.value = this._densityDissipation,
                    On.renderer.setRenderTarget(this._density.write),
                    On.renderer.render(this._advectionProgram.scene, this._advectionProgram.camera),
                    this._density.swap(),
                    this.uniform.value = this._density.read.texture,
                    On.renderer.autoClear = !0
                }
            }, {
                key: "_updateSplat",
                value: function(e) {
                    var t = e.x
                      , n = e.y
                      , i = e.dx
                      , r = e.dy;
                    this._splatProgram.material.uniforms.tTarget.value = this._velocity.read.texture,
                    this._splatProgram.material.uniforms.uAspectRatio.value = c.k.width / c.k.height,
                    this._splatProgram.material.uniforms.uPoint.value.set(t, n),
                    this._splatProgram.material.uniforms.uColor.value.set(i, r, 1),
                    this._splatProgram.material.uniforms.uRadius.value = this._radius * this.radiusCoef / 100,
                    On.renderer.setRenderTarget(this._velocity.write),
                    On.renderer.render(this._splatProgram.scene, this._splatProgram.camera),
                    this._velocity.swap(),
                    this._splatProgram.material.uniforms.tTarget.value = this._density.read.texture,
                    On.renderer.setRenderTarget(this._density.write),
                    On.renderer.render(this._splatProgram.scene, this._splatProgram.camera),
                    this._density.swap()
                }
            }, {
                key: "tFluid",
                get: function() {
                    return this._density.read.texture
                }
            }, {
                key: "density",
                get: function() {
                    return this._density
                }
            }, {
                key: "iterations",
                set: function(e) {
                    this._iterations = e
                }
            }, {
                key: "densityDissipation",
                set: function(e) {
                    this._densityDissipation = e
                }
            }, {
                key: "velocityDissipation",
                set: function(e) {
                    this._velocityDissipation = e
                }
            }, {
                key: "curlStrength",
                set: function(e) {
                    this._curlStrength = e
                }
            }, {
                key: "radius",
                set: function(e) {
                    this._radius = e
                }
            }]),
            e
        }();
        function Fe(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Pe = function(e) {
            Object(o.a)(n, e);
            var t = Fe(n);
            function n(e) {
                var r, o = e.left, s = void 0 === o ? 0 : o, u = e.right, h = void 0 === u ? c.k.width : u, d = e.top, f = void 0 === d ? 0 : d, v = e.bottom, p = void 0 === v ? c.k.height : v, m = e.near, y = void 0 === m ? 0 : m, _ = e.far, g = void 0 === _ ? 1e3 : _, D = e.name, b = void 0 === D ? "UICamera" : D, k = e.isDefault, w = void 0 !== k && k;
                return Object(i.a)(this, n),
                (r = t.call(this, s, h, f, p, y, g)).name = b,
                r.isDefault = w,
                r._gui = c.d,
                r._guiIsCreated = !1,
                r._helper = null,
                Object(l.a)(Object(a.a)(r)),
                r._bind(),
                r._createHelper(),
                r
            }
            return Object(r.a)(n, [{
                key: "createGUI",
                value: function(e) {
                    var t = this
                      , n = e.addFolder({
                        title: "".concat(this.isDefault ? "📸" : "📷", " ").concat(this.name)
                    });
                    return n.expanded = !1,
                    n.addInput(this, "near", {
                        min: 1,
                        max: 5e3,
                        step: 1
                    }).on("change", (function(e) {
                        t.updateProjectionMatrix()
                    }
                    )),
                    n.addInput(this, "far", {
                        min: 1,
                        max: 8e3,
                        step: 1
                    }).on("change", (function(e) {
                        t.updateProjectionMatrix()
                    }
                    )),
                    n.addSeparator(),
                    this._gui.addVec(n, this.position, {
                        label: "pos",
                        step: .1,
                        min: -100,
                        max: 100
                    }),
                    n.addSeparator(),
                    this._gui.addVec(n, this.rotation, {
                        label: "rot",
                        tep: .01,
                        min: 2 * -Math.PI,
                        max: 2 * Math.PI
                    }),
                    n
                }
            }, {
                key: "start",
                value: function() {}
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "update",
                value: function(e, t) {
                    this._helper && this._helper.visible && (this.updateMatrixWorld(),
                    this._helper.update())
                }
            }, {
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "remove", this).call(this),
                    this._unbind(),
                    this._destroyHelper()
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    this.left = 0,
                    this.right = e,
                    this.top = 0,
                    this.bottom = -t,
                    this.updateProjectionMatrix()
                }
            }, {
                key: "_bind",
                value: function() {
                    c.f.addDown(this._onKeyDown)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.f.removeDown(this._onKeyDown)
                }
            }, {
                key: "_onResize",
                value: function(e, t) {
                    this.setSize(e, t)
                }
            }, {
                key: "_onKeyDown",
                value: function(e, t) {}
            }, {
                key: "_createHelper",
                value: function() {
                    this._helper = new h.d(this),
                    this._helper.name = "CameraHelper",
                    this._helper.material.fog = !1
                }
            }, {
                key: "_destroyHelper",
                value: function() {
                    this._helper && this._helper.remove()
                }
            }, {
                key: "helper",
                get: function() {
                    return this._helper
                }
            }]),
            n
        }(h.v)
          , Re = n(134)
          , Te = n.n(Re)
          , Me = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                Object(i.a)(this, e),
                this._tasks = t,
                this._requestId = null,
                this._runTasks = this._runTasks.bind(this)
            }
            return Object(r.a)(e, [{
                key: "add",
                value: function(e) {
                    if ("function" == typeof e)
                        this._tasks.push(e);
                    else if (Object(l.d)(e))
                        for (var t = 0, n = e.length; t < n; t++)
                            this.add(e)
                }
            }, {
                key: "execute",
                value: function() {
                    var e = this;
                    return this._tasks.length ? new Promise((function(t, n) {
                        e._requestId = e._request(t)
                    }
                    )) : Promise.resolve()
                }
            }, {
                key: "clear",
                value: function() {
                    this._tasks = null,
                    this._requestId && Te.a.cancel(this._requestId)
                }
            }, {
                key: "_runTasks",
                value: function(e, t) {
                    for (; this._tasks.length && e.timeRemaining() > 0; )
                        this._tasks.shift()();
                    this._tasks.length ? this._requestId = this._request(t) : t()
                }
            }, {
                key: "_request",
                value: function(e) {
                    var t = this;
                    return Te.a.request((function(n) {
                        return t._runTasks(n, e)
                    }
                    ))
                }
            }]),
            e
        }();
        n(123),
        n(56),
        n(126);
        function Le(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Be = function(e) {
            Object(o.a)(n, e);
            var t = Le(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this))._tasks = {},
                e
            }
            return Object(r.a)(n, [{
                key: "_addTask",
                value: function(e, t) {
                    this._tasks[e] = t || null
                }
            }, {
                key: "add",
                value: function(e, t) {
                    Object(p.a)(Object(u.a)(n.prototype), "add", this).call(this, e),
                    this._addTask(e, t)
                }
            }, {
                key: "first",
                value: function(e, t) {
                    Object(p.a)(Object(u.a)(n.prototype), "first", this).call(this, e),
                    this._addTask(e, t)
                }
            }, {
                key: "last",
                value: function(e, t) {
                    Object(p.a)(Object(u.a)(n.prototype), "last", this).call(this, e),
                    this._addTask(e, t)
                }
            }, {
                key: "before",
                value: function(e, t, i) {
                    Object(p.a)(Object(u.a)(n.prototype), "before", this).call(this, e, t),
                    this._addTask(t, i)
                }
            }, {
                key: "after",
                value: function(e, t, i) {
                    Object(p.a)(Object(u.a)(n.prototype), "after", this).call(this, e, t),
                    this._addTask(t, i)
                }
            }, {
                key: "get",
                value: function(e) {
                    var t = this
                      , n = new RegExp("^".concat(e));
                    return this.order.filter((function(e) {
                        return e.match(n)
                    }
                    )).map((function(e) {
                        return t._tasks[e]
                    }
                    )).join("\n")
                }
            }, {
                key: "getAll",
                value: function() {
                    var e = this;
                    return this.order.map((function(t) {
                        return e._tasks[t]
                    }
                    ))
                }
            }]),
            n
        }(function() {
            function e() {
                Object(i.a)(this, e),
                this.order = [],
                this.rules = {}
            }
            return Object(r.a)(e, [{
                key: "exists",
                value: function(e) {
                    return -1 !== this.order.indexOf(e)
                }
            }, {
                key: "index",
                value: function(e) {
                    return this.order.indexOf(e)
                }
            }, {
                key: "_add",
                value: function(e) {
                    this.exists(e) || (this.order.push(e),
                    this.rules[e] = {
                        before: this.order.slice(0, this.order.length - 1),
                        after: []
                    })
                }
            }, {
                key: "before",
                value: function(e, t) {
                    this._add(t),
                    this._add(e),
                    this.updateRules(t, e, "before"),
                    this.reorder()
                }
            }, {
                key: "after",
                value: function(e, t) {
                    this._add(t),
                    this._add(e),
                    this.updateRules(t, e, "after"),
                    this.reorder()
                }
            }, {
                key: "add",
                value: function(e) {
                    this._add(e),
                    this.refreshRules()
                }
            }, {
                key: "first",
                value: function(e) {
                    this.order[0] ? this.before(this.order[0], e) : this.add(e)
                }
            }, {
                key: "last",
                value: function(e) {
                    this.order[this.order.length - 1] ? this.after(this.order[this.order.length - 1], e) : this.add(e)
                }
            }, {
                key: "rule",
                value: function(e, t, n) {
                    if (-1 === this.rules[t][e].indexOf(n)) {
                        this.rules[t][e].push(n);
                        var i = "before" === e ? "after" : "before"
                          , r = this.rules[t][i].indexOf(n);
                        -1 !== r && this.rules[t][i].splice(r, 1)
                    }
                }
            }, {
                key: "refreshRules",
                value: function() {
                    for (var e = {}, t = 0, n = this.order.length; t < n; t++)
                        e[this.order[t]] = {
                            before: this.order.slice(0, t),
                            after: this.order.slice(t + 1, n)
                        };
                    this.rules = e
                }
            }, {
                key: "updateRules",
                value: function(e, t, n) {
                    "before" === n ? (this.rules[e].after = this.rules[t].after.slice(0),
                    this.rules[e].after.push(t),
                    this.rules[e].before = this.rules[t].before.slice(0)) : (this.rules[e].before = this.rules[t].before.slice(0),
                    this.rules[e].before.push(t),
                    this.rules[e].after = this.rules[t].after.slice(0));
                    for (var i = 0, r = this.order.length; i < r; i++)
                        this.rules[e].before.indexOf(this.order[i]) > -1 && this.rule("after", this.order[i], e),
                        this.rules[e].after.indexOf(this.order[i]) > -1 && this.rule("before", this.order[i], e)
                }
            }, {
                key: "reorder",
                value: function() {
                    for (var e, t, n = [this.order[0]], i = 0, r = 1, a = this.order.length; r < a; r++) {
                        e = this.order[r],
                        i = 0;
                        for (var o = 0, s = n.length; o < s; o++)
                            t = n[o],
                            this.rules[t].before.indexOf(e) > -1 && i--;
                        var u = Math.max(0, n.length + i);
                        n.splice(u, 0, e)
                    }
                    this.order = n,
                    this.refreshRules()
                }
            }]),
            e
        }())
          , Ue = n(17);
        n(64),
        n(223),
        n(160);
        function Ae(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var ze = function(e) {
            Object(o.a)(n, e);
            var t = Ae(n);
            function n(e, r) {
                var o, s, u, c, l, d;
                Object(i.a)(this, n),
                (o = t.call(this)).object = e,
                o.domElement = void 0 !== r ? r : document,
                o.enabled = !0,
                o.target = new h.N,
                o.minDistance = 0,
                o.maxDistance = 1 / 0,
                o.minZoom = 0,
                o.maxZoom = 1 / 0,
                o.minPolarAngle = 0,
                o.maxPolarAngle = Math.PI,
                o.minAzimuthAngle = -1 / 0,
                o.maxAzimuthAngle = 1 / 0,
                o.enableDamping = !1,
                o.dampingFactor = .25,
                o.enableZoom = !0,
                o.zoomSpeed = 1,
                o.enableRotate = !0,
                o.rotateSpeed = 1,
                o.enablePan = !0,
                o.keyPanSpeed = 7,
                o.autoRotate = !1,
                o.autoRotateSpeed = 2,
                o.enableKeys = !0,
                o.keys = {
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    BOTTOM: 40
                },
                o.mouseButtons = {
                    ORBIT: h.p.LEFT,
                    ZOOM: h.p.MIDDLE,
                    PAN: h.p.RIGHT
                },
                o.target0 = o.target.clone(),
                o.position0 = o.object.position.clone(),
                o.zoom0 = o.object.zoom,
                o.getPolarAngle = function() {
                    return D.phi
                }
                ,
                o.getAzimuthalAngle = function() {
                    return D.theta
                }
                ,
                o.reset = function() {
                    f.target.copy(f.target0),
                    f.object.position.copy(f.position0),
                    f.object.zoom = f.zoom0,
                    f.object.updateProjectionMatrix(),
                    f.dispatchEvent(v),
                    f.update(),
                    _ = y.NONE
                }
                ,
                o.update = (s = new h.N,
                u = (new h.y).setFromUnitVectors(e.up, new h.N(0,1,0)),
                c = u.clone().invert(),
                l = new h.N,
                d = new h.y,
                function() {
                    var e = f.object.position;
                    return s.copy(e).sub(f.target),
                    s.applyQuaternion(u),
                    D.setFromVector3(s),
                    f.autoRotate && _ === y.NONE && L(2 * Math.PI / 60 / 60 * f.autoRotateSpeed),
                    D.theta += b.theta,
                    D.phi += b.phi,
                    D.theta = Math.max(f.minAzimuthAngle, Math.min(f.maxAzimuthAngle, D.theta)),
                    D.phi = Math.max(f.minPolarAngle, Math.min(f.maxPolarAngle, D.phi)),
                    D.makeSafe(),
                    D.radius *= k,
                    D.radius = Math.max(f.minDistance, Math.min(f.maxDistance, D.radius)),
                    f.target.add(w),
                    s.setFromSpherical(D),
                    s.applyQuaternion(c),
                    e.copy(f.target).add(s),
                    f.object.lookAt(f.target),
                    !0 === f.enableDamping ? (b.theta *= 1 - f.dampingFactor,
                    b.phi *= 1 - f.dampingFactor) : b.set(0, 0, 0),
                    k = 1,
                    w.set(0, 0, 0),
                    !!(x || l.distanceToSquared(f.object.position) > g || 8 * (1 - d.dot(f.object.quaternion)) > g) && (f.dispatchEvent(v),
                    l.copy(f.object.position),
                    d.copy(f.object.quaternion),
                    x = !1,
                    !0)
                }
                ),
                o.destroy = function() {
                    f.domElement.removeEventListener("contextmenu", Z, !1),
                    f.domElement.removeEventListener("mousedown", G, !1),
                    f.domElement.removeEventListener("wheel", W, !1),
                    f.domElement.removeEventListener("touchstart", K, !1),
                    f.domElement.removeEventListener("touchend", q, !1),
                    f.domElement.removeEventListener("touchmove", $, !1),
                    f.domElement.removeEventListener("mousemove", H, !1),
                    f.domElement.removeEventListener("mouseup", Y, !1),
                    window.removeEventListener("keydown", X, !1)
                }
                ;
                var f = Object(a.a)(o)
                  , v = {
                    type: "change"
                }
                  , p = {
                    type: "start"
                }
                  , m = {
                    type: "end"
                }
                  , y = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_DOLLY: 4,
                    TOUCH_PAN: 5
                }
                  , _ = y.NONE
                  , g = 1e-6
                  , D = new h.G
                  , b = new h.G
                  , k = 1
                  , w = new h.N
                  , x = !1
                  , O = new h.M
                  , C = new h.M
                  , E = new h.M
                  , j = new h.M
                  , S = new h.M
                  , F = new h.M
                  , P = new h.M
                  , R = new h.M
                  , T = new h.M;
                function M() {
                    return Math.pow(.95, f.zoomSpeed)
                }
                function L(e) {
                    b.theta -= e
                }
                function B(e) {
                    b.phi -= e
                }
                var U, A = (U = new h.N,
                function(e, t) {
                    U.setFromMatrixColumn(t, 0),
                    U.multiplyScalar(-e),
                    w.add(U)
                }
                ), z = function() {
                    var e = new h.N;
                    return function(t, n) {
                        e.setFromMatrixColumn(n, 1),
                        e.multiplyScalar(t),
                        w.add(e)
                    }
                }(), I = function() {
                    var e = new h.N;
                    return function(t, n) {
                        var i = f.domElement === document ? f.domElement.body : f.domElement;
                        if (Object.getPrototypeOf(f.object).isPerspectiveCamera) {
                            var r = f.object.position;
                            e.copy(r).sub(f.target);
                            var a = e.length();
                            a *= Math.tan(f.object.fov / 2 * Math.PI / 180),
                            A(2 * t * a / i.clientHeight, f.object.matrix),
                            z(2 * n * a / i.clientHeight, f.object.matrix)
                        } else
                            Object.getPrototypeOf(f.object).isOrthographicCamera ? (A(t * (f.object.right - f.object.left) / f.object.zoom / i.clientWidth, f.object.matrix),
                            z(n * (f.object.top - f.object.bottom) / f.object.zoom / i.clientHeight, f.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                            f.enablePan = !1)
                    }
                }();
                function V(e) {
                    Object.getPrototypeOf(f.object).isPerspectiveCamera ? k /= e : Object.getPrototypeOf(f.object).isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom * e)),
                    f.object.updateProjectionMatrix(),
                    x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                    f.enableZoom = !1)
                }
                function N(e) {
                    Object.getPrototypeOf(f.object).isPerspectiveCamera ? k *= e : Object.getPrototypeOf(f.object).isOrthographicCamera ? (f.object.zoom = Math.max(f.minZoom, Math.min(f.maxZoom, f.object.zoom / e)),
                    f.object.updateProjectionMatrix(),
                    x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
                    f.enableZoom = !1)
                }
                function G(e) {
                    if (!1 !== f.enabled) {
                        if (e.button === f.mouseButtons.ORBIT) {
                            if (!1 === f.enableRotate)
                                return;
                            !function(e) {
                                O.set(e.clientX, e.clientY)
                            }(e),
                            _ = y.ROTATE
                        } else if (e.button === f.mouseButtons.ZOOM) {
                            if (!1 === f.enableZoom)
                                return;
                            !function(e) {
                                P.set(e.clientX, e.clientY)
                            }(e),
                            _ = y.DOLLY
                        } else if (e.button === f.mouseButtons.PAN) {
                            if (!1 === f.enablePan)
                                return;
                            !function(e) {
                                j.set(e.clientX, e.clientY)
                            }(e),
                            _ = y.PAN
                        }
                        _ !== y.NONE && (f.domElement.addEventListener("mousemove", H, !1),
                        f.domElement.addEventListener("mouseup", Y, !1),
                        f.dispatchEvent(p))
                    }
                }
                function H(e) {
                    if (!1 !== f.enabled)
                        if (_ === y.ROTATE) {
                            if (!1 === f.enableRotate)
                                return;
                            !function(e) {
                                C.set(e.clientX, e.clientY),
                                E.subVectors(C, O);
                                var t = f.domElement === document ? f.domElement.body : f.domElement;
                                L(2 * Math.PI * E.x / t.clientWidth * f.rotateSpeed),
                                B(2 * Math.PI * E.y / t.clientHeight * f.rotateSpeed),
                                O.copy(C),
                                f.update()
                            }(e)
                        } else if (_ === y.DOLLY) {
                            if (!1 === f.enableZoom)
                                return;
                            !function(e) {
                                R.set(e.clientX, e.clientY),
                                T.subVectors(R, P),
                                T.y > 0 ? V(M()) : T.y < 0 && N(M()),
                                P.copy(R),
                                f.update()
                            }(e)
                        } else if (_ === y.PAN) {
                            if (!1 === f.enablePan)
                                return;
                            !function(e) {
                                S.set(e.clientX, e.clientY),
                                F.subVectors(S, j),
                                I(F.x, F.y),
                                j.copy(S),
                                f.update()
                            }(e)
                        }
                }
                function Y(e) {
                    !1 !== f.enabled && (f.domElement.removeEventListener("mousemove", H, !1),
                    f.domElement.removeEventListener("mouseup", Y, !1),
                    f.dispatchEvent(m),
                    _ = y.NONE)
                }
                function W(e) {
                    !1 === f.enabled || !1 === f.enableZoom || _ !== y.NONE && _ !== y.ROTATE || (e.stopPropagation(),
                    function(e) {
                        e.deltaY < 0 ? N(M()) : e.deltaY > 0 && V(M()),
                        f.update()
                    }(e),
                    f.dispatchEvent(p),
                    f.dispatchEvent(m))
                }
                function X(e) {
                    !1 !== f.enabled && !1 !== f.enableKeys && !1 !== f.enablePan && function(e) {
                        switch (e.keyCode) {
                        case f.keys.UP:
                            I(0, f.keyPanSpeed),
                            f.update();
                            break;
                        case f.keys.BOTTOM:
                            I(0, -f.keyPanSpeed),
                            f.update();
                            break;
                        case f.keys.LEFT:
                            I(f.keyPanSpeed, 0),
                            f.update();
                            break;
                        case f.keys.RIGHT:
                            I(-f.keyPanSpeed, 0),
                            f.update()
                        }
                    }(e)
                }
                function K(e) {
                    if (!1 !== f.enabled) {
                        switch (e.touches.length) {
                        case 1:
                            if (!1 === f.enableRotate)
                                return;
                            !function(e) {
                                O.set(e.touches[0].pageX, e.touches[0].pageY)
                            }(e),
                            _ = y.TOUCH_ROTATE;
                            break;
                        case 2:
                            if (!1 === f.enableZoom)
                                return;
                            !function(e) {
                                var t = e.touches[0].pageX - e.touches[1].pageX
                                  , n = e.touches[0].pageY - e.touches[1].pageY
                                  , i = Math.sqrt(t * t + n * n);
                                P.set(0, i)
                            }(e),
                            _ = y.TOUCH_DOLLY;
                            break;
                        case 3:
                            if (!1 === f.enablePan)
                                return;
                            !function(e) {
                                j.set(e.touches[0].pageX, e.touches[0].pageY)
                            }(e),
                            _ = y.TOUCH_PAN;
                            break;
                        default:
                            _ = y.NONE
                        }
                        _ !== y.NONE && f.dispatchEvent(p)
                    }
                }
                function $(e) {
                    if (!1 !== f.enabled)
                        switch (e.preventDefault(),
                        e.stopPropagation(),
                        e.touches.length) {
                        case 1:
                            if (!1 === f.enableRotate)
                                return;
                            if (_ !== y.TOUCH_ROTATE)
                                return;
                            !function(e) {
                                C.set(e.touches[0].pageX, e.touches[0].pageY),
                                E.subVectors(C, O);
                                var t = f.domElement === document ? f.domElement.body : f.domElement;
                                L(2 * Math.PI * E.x / t.clientWidth * f.rotateSpeed),
                                B(2 * Math.PI * E.y / t.clientHeight * f.rotateSpeed),
                                O.copy(C),
                                f.update()
                            }(e);
                            break;
                        case 2:
                            if (!1 === f.enableZoom)
                                return;
                            if (_ !== y.TOUCH_DOLLY)
                                return;
                            !function(e) {
                                var t = e.touches[0].pageX - e.touches[1].pageX
                                  , n = e.touches[0].pageY - e.touches[1].pageY
                                  , i = Math.sqrt(t * t + n * n);
                                R.set(0, i),
                                T.subVectors(R, P),
                                T.y > 0 ? N(M()) : T.y < 0 && V(M()),
                                P.copy(R),
                                f.update()
                            }(e);
                            break;
                        case 3:
                            if (!1 === f.enablePan)
                                return;
                            if (_ !== y.TOUCH_PAN)
                                return;
                            !function(e) {
                                S.set(e.touches[0].pageX, e.touches[0].pageY),
                                F.subVectors(S, j),
                                I(F.x, F.y),
                                j.copy(S),
                                f.update()
                            }(e);
                            break;
                        default:
                            _ = y.NONE
                        }
                }
                function q(e) {
                    !1 !== f.enabled && (f.dispatchEvent(m),
                    _ = y.NONE)
                }
                function Z(e) {
                    e.preventDefault()
                }
                return f.domElement.addEventListener("contextmenu", Z, !1),
                f.domElement.addEventListener("mousedown", G, !1),
                f.domElement.addEventListener("wheel", W, !1),
                f.domElement.addEventListener("touchstart", K, !1),
                f.domElement.addEventListener("touchend", q, !1),
                f.domElement.addEventListener("touchmove", $, !1),
                window.addEventListener("keydown", X, !1),
                o.update(),
                o
            }
            return Object(r.a)(n, [{
                key: "center",
                get: function() {
                    return console.warn("OrbitControls: .center has been renamed to .target"),
                    this.target
                }
            }, {
                key: "noZoom",
                get: function() {
                    return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),
                    !this.enableZoom
                },
                set: function(e) {
                    console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),
                    this.enableZoom = !e
                }
            }, {
                key: "noRotate",
                get: function() {
                    return console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),
                    !this.enableRotate
                },
                set: function(e) {
                    console.warn("OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),
                    this.enableRotate = !e
                }
            }, {
                key: "noPan",
                get: function() {
                    return console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),
                    !this.enablePan
                },
                set: function(e) {
                    console.warn("OrbitControls: .noPan has been deprecated. Use .enablePan instead."),
                    this.enablePan = !e
                }
            }, {
                key: "noKeys",
                get: function() {
                    return console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),
                    !this.enableKeys
                },
                set: function(e) {
                    console.warn("OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),
                    this.enableKeys = !e
                }
            }, {
                key: "staticMoving",
                get: function() {
                    return console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),
                    !this.enableDamping
                },
                set: function(e) {
                    console.warn("OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),
                    this.enableDamping = !e
                }
            }, {
                key: "dynamicDampingFactor",
                get: function() {
                    return console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),
                    this.dampingFactor
                },
                set: function(e) {
                    console.warn("OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),
                    this.dampingFactor = e
                }
            }]),
            n
        }(h.l);
        function Ie(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Ve = function(e) {
            Object(o.a)(n, e);
            var t = Ie(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                (e = t.call(this, r)).name = r.name || "Orbit Camera",
                e.controls = new ze(Object(a.a)(e),r.domEl || document.body),
                e.controls.enabled = !1,
                e.controls.enableKeys = !1,
                e.controls.target.set(0, 0, 0),
                e.position.set(50, 50, 50),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this),
                    this.controls.destroy()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    Object(p.a)(Object(u.a)(n.prototype), "update", this).call(this, e, t),
                    this.controls.enabled && this.controls.update()
                }
            }, {
                key: "_createHelper",
                value: function() {}
            }, {
                key: "_destroyHelper",
                value: function() {}
            }]),
            n
        }(oe)
          , Ne = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                Object(i.a)(this, e),
                Object(l.a)(this),
                this.enabled = !0,
                this.movementSpeed = 15,
                this.accelerationSpeed = 3,
                this.decelerationSpeed = .25,
                this.lookSpeed = .1,
                this.zoomSpeed = 50,
                this.autoForward = !1,
                this.activeLook = !0,
                this._binded = !1,
                this._camera = t,
                this._target = new h.N(0,0,0),
                this._domElement = n,
                this._bodyElement = this._domElement === document ? this._domElement.body : n,
                this._defaultCameraFov = this._camera.fov,
                this._lat = 0,
                this._lon = -90,
                this._phi = 0,
                this._theta = 0,
                this._moveForward = !1,
                this._moveBackward = !1,
                this._moveLeft = !1,
                this._moveRight = !1,
                this._accelerate = !1,
                this._decelerate = !1,
                this._slookSpeed = this.lookSpeed,
                this._szoomSpeed = this.zoomSpeed,
                this._zoomIn = !1,
                this._zoomOut = !1
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this._binded || (this._binded = !0,
                    this._bodyElement.requestPointerLock(),
                    this._domElement.addEventListener("pointerlockchange", this._onPointerLockChange, !1),
                    c.h.addUp(this._handlePointerUp),
                    c.h.addDown(this._handlePointerDown),
                    c.h.addMove(this._handlePointerMove),
                    c.f.addUp(this._handleKeyUp),
                    c.f.addDown(this._handleKeyDown))
                }
            }, {
                key: "unbind",
                value: function() {
                    this._binded && (this._binded = !1,
                    this._domElement.exitPointerLock(),
                    this._domElement.removeEventListener("pointerlockchange", this._onPointerLockChange, !1),
                    c.h.removeUp(this._handlePointerUp),
                    c.h.removeDown(this._handlePointerDown),
                    c.h.removeMove(this._handlePointerMove),
                    c.f.removeUp(this._handleKeyUp),
                    c.f.removeDown(this._handleKeyDown))
                }
            }, {
                key: "update",
                value: function(e, t) {
                    if (!1 !== this.enabled) {
                        var n = e * this.movementSpeed;
                        this._accelerate ? n *= this.accelerationSpeed : this._decelerate && (n *= this.decelerationSpeed),
                        (this._moveForward || this.autoForward && !this._moveBackward) && this._camera.translateZ(-n),
                        this._moveBackward && this._camera.translateZ(n),
                        this._moveLeft && this._camera.translateX(-n),
                        this._moveRight && this._camera.translateX(n),
                        this._moveUp && (this._camera.position.y += n),
                        this._moveDown && (this._camera.position.y -= n),
                        this._lat = Math.max(-85, Math.min(85, this._lat)),
                        this._phi = h.q.degToRad(90 - this._lat),
                        this._theta = h.q.degToRad(this._lon);
                        var i = this._target
                          , r = this._camera.position;
                        i.x = r.x + Math.sin(this._phi) * Math.cos(this._theta),
                        i.y = r.y + Math.cos(this._phi),
                        i.z = r.z + Math.sin(this._phi) * Math.sin(this._theta),
                        this._camera.lookAt(i),
                        (this._zoomIn || this._zoomOut) && (this._camera.fov += e * this._szoomSpeed * (this._zoomIn ? -1 : 1),
                        this._camera.fov = h.q.clamp(this._camera.fov, 1, 179),
                        this._camera.updateProjectionMatrix());
                        var a = h.q.mapLinear(this._camera.fov / this.lookSpeed, this._defaultCameraFov / this.lookSpeed, 1 / this.lookSpeed, 1, 0);
                        a = h.q.clamp(a, .01, 1),
                        this._slookSpeed = this.lookSpeed * a,
                        this._szoomSpeed = this.zoomSpeed * a
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unbind()
                }
            }, {
                key: "_onPointerLockChange",
                value: function(e) {
                    this.enabled = this._domElement.pointerLockElement === this._bodyElement
                }
            }, {
                key: "_handlePointerDown",
                value: function(e) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    this._bodyElement.requestPointerLock(),
                    this.activeLook)
                        switch (e.button) {
                        case 0:
                            this._moveForward = !0;
                            break;
                        case 2:
                            this._moveBackward = !0
                        }
                }
            }, {
                key: "_handlePointerUp",
                value: function(e) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    this.activeLook)
                        switch (e.button) {
                        case 0:
                            this._moveForward = !1;
                            break;
                        case 2:
                            this._moveBackward = !1
                        }
                }
            }, {
                key: "_handlePointerMove",
                value: function(e) {
                    if (this.enabled) {
                        var t = h.q.clamp(e.movementX || 0, -250, 250)
                          , n = h.q.clamp(e.movementY || 0, -250, 250);
                        this._lat -= n * this._slookSpeed,
                        this._lon += t * this._slookSpeed
                    }
                }
            }, {
                key: "_handleKeyDown",
                value: function(e, t) {
                    switch (e.preventDefault(),
                    t) {
                    case "up":
                        this._moveForward = !0;
                        break;
                    case "left":
                        this._moveLeft = !0;
                        break;
                    case "down":
                        this._moveBackward = !0;
                        break;
                    case "right":
                        this._moveRight = !0;
                        break;
                    case "e":
                        this._moveUp = !0;
                        break;
                    case "q":
                        this._moveDown = !0;
                        break;
                    case "shift":
                        this._accelerate = !0;
                        break;
                    case "space":
                        this._decelerate = !0;
                        break;
                    case "x":
                        this._zoomIn = !0;
                        break;
                    case "z":
                        this._zoomOut = !0
                    }
                }
            }, {
                key: "_handleKeyUp",
                value: function(e, t) {
                    switch (e.preventDefault(),
                    t) {
                    case "up":
                        this._moveForward = !1;
                        break;
                    case "left":
                        this._moveLeft = !1;
                        break;
                    case "down":
                        this._moveBackward = !1;
                        break;
                    case "right":
                        this._moveRight = !1;
                        break;
                    case "e":
                        this._moveUp = !1;
                        break;
                    case "q":
                        this._moveDown = !1;
                        break;
                    case "shift":
                        this._accelerate = !1;
                        break;
                    case "space":
                        this._decelerate = !1;
                        break;
                    case "x":
                        this._zoomIn = !1;
                        break;
                    case "z":
                        this._zoomOut = !1
                    }
                }
            }]),
            e
        }();
        function Ge(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var He = function(e) {
            Object(o.a)(n, e);
            var t = Ge(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                (e = t.call(this, r)).name = r.name || "Fly Camera",
                e.controls = new Ne(Object(a.a)(e),r.domEl || document),
                e.controls.enabled = !1,
                e.position.set(50, 50, 50),
                e
            }
            return Object(r.a)(n, [{
                key: "start",
                value: function() {
                    this.controls.bind()
                }
            }, {
                key: "stop",
                value: function() {
                    this.controls.unbind()
                }
            }, {
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this),
                    this.controls.destroy()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    Object(p.a)(Object(u.a)(n.prototype), "update", this).call(this, e, t),
                    this.controls.enabled && this.controls.update(e / 1e3, t)
                }
            }, {
                key: "_createHelper",
                value: function() {}
            }, {
                key: "_destroyHelper",
                value: function() {}
            }]),
            n
        }(oe)
          , Ye = Object(K.c)("CameraCtrl", "#f67280", !1)
          , We = function() {
            function e(t) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                Object(i.a)(this, e),
                Object(l.a)(this),
                this._scene = t,
                this._cameras = [],
                this._currentCameraId = null,
                this._helpers = new h.u,
                this._isPaused = !0,
                this._guiIsCreated = !1,
                this._useDebugCamera = n
            }
            return Object(r.a)(e, [{
                key: "createGUI",
                value: function(e) {
                    this._pane = e
                }
            }, {
                key: "initDebugUI",
                value: function() {}
            }, {
                key: "addCamera",
                value: function(e) {
                    this._cameras.push(e),
                    this._checkDefaultCamera(e),
                    this._createHelper(e)
                }
            }, {
                key: "removeCamera",
                value: function(e) {
                    this._cameras.splice(this._cameras.indexOf(e), 1),
                    e.destroy()
                }
            }, {
                key: "nextCamera",
                value: function() {
                    var e = Object(Ue.d)(this._currentCameraId + 1, this._cameras.length);
                    this.changeCamera(e)
                }
            }, {
                key: "previousCamera",
                value: function() {
                    var e = Object(Ue.d)(this._currentCameraId - 1, this._cameras.length);
                    this.changeCamera(e)
                }
            }, {
                key: "changeCamera",
                value: function(t) {
                    var n = this._getCamera(this._currentCameraId);
                    n && (n.helper && (n.helper.visible = !0),
                    n.controls && (n.controls.enabled = !1),
                    n.stop()),
                    this._currentCameraId = t;
                    var i = this._getCamera(t);
                    i.controls && (i.controls.enabled = !0),
                    i.helper && (i.helper.visible = !1),
                    i.start(),
                    this._isPaused || (Ye("Camera changed from '".concat(n.name, "' to '").concat(i.name, "'")),
                    c.c.emit(e.CHANGED, {
                        scene: this._scene,
                        camera: i
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unbind();
                    for (var e = 0, t = this._cameras.length; e < t; e++)
                        this._cameras[e].destroy();
                    this._cameras = null,
                    this._currentCameraId = null
                }
            }, {
                key: "start",
                value: function() {
                    if (this._isPaused = !1,
                    this._bind(),
                    this._pane)
                        for (var e = 0, t = this._cameras.length; e < t; e++)
                            this._cameras[e].createGUI(this._pane)
                }
            }, {
                key: "pause",
                value: function() {
                    this._isPaused = !0,
                    this._unbind()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    for (var n = 0, i = this._cameras.length; n < i; n++)
                        this._cameras[n].update(e, t)
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    for (var n = 0, i = this._cameras.length; n < i; n++)
                        this._cameras[n].setSize(e, t)
                }
            }, {
                key: "_bind",
                value: function() {
                    this._useDebugCamera && c.f.addUp(this._onKeyUp)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.f.removeUp(this._onKeyUp)
                }
            }, {
                key: "_checkDefaultCamera",
                value: function(e) {
                    if (e.isDefault) {
                        var t = this._cameras.length - 1;
                        t !== this._currentCameraId && (this.changeCamera(t),
                        e.helper && (e.helper.visible = !1))
                    }
                }
            }, {
                key: "_createHelper",
                value: function(e) {
                    e.helper && this._helpers.add(e.helper)
                }
            }, {
                key: "_getCamera",
                value: function(e) {
                    return this._cameras[e]
                }
            }, {
                key: "_createDebugCameras",
                value: function() {
                    this._debugOrbitCamera = new Ve({
                        name: "Debug orbit camera",
                        isDefault: !1
                    }),
                    this.addCamera(this._debugOrbitCamera),
                    this._debugFlyCamera = new He({
                        name: "Debug fly camera",
                        isDefault: !1
                    }),
                    this.addCamera(this._debugFlyCamera)
                }
            }, {
                key: "_onKeyUp",
                value: function(e, t) {
                    c.f.isDown("shift") && Object(l.c)("debug") && "c" === t && this.nextCamera()
                }
            }, {
                key: "helpers",
                get: function() {
                    return this._helpers
                }
            }, {
                key: "camera",
                get: function() {
                    return this._cameras[this._currentCameraId] || console.warn("No camera found, check isDefault property on the main camera."),
                    this._cameras[this._currentCameraId]
                }
            }, {
                key: "cameras",
                get: function() {
                    return this._cameras
                }
            }, {
                key: "currentCameraId",
                get: function() {
                    return this._currentCameraId
                }
            }]),
            e
        }();
        We.CHANGED = "CameraCtrl_changed";
        var Xe = We;
        function Ke() {
            var e = new h.c;
            return e.setAttribute("uv", new h.b(new Float32Array([0, 0, 2, 0, 0, 2]),2)),
            e.setAttribute("position", new h.b(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),3)),
            e
        }
        var $e = Ke()
          , qe = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new h.D
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new h.v(-1,1,1,-1,0,1)
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new h.r($e,null);
                Object(i.a)(this, e),
                this.name = "Pass",
                this.scene = t,
                this.camera = n,
                this.quad = r,
                null !== this.quad && (this.quad.frustumCulled = !1,
                null !== this.scene && this.scene.add(this.quad)),
                this.needsSwap = !1,
                this.enabled = !0,
                this.renderToScreen = !1
            }
            return Object(r.a)(e, [{
                key: "setUniform",
                value: function(e, t) {
                    this.material.uniforms[e] && (this.material.uniforms[e].value = t)
                }
            }, {
                key: "render",
                value: function(e, t, n, i, r, a) {
                    throw new Error("Render method not implemented!")
                }
            }, {
                key: "setSize",
                value: function(e, t) {}
            }, {
                key: "init",
                value: function(e, t) {}
            }, {
                key: "destroy",
                value: function() {
                    for (var e, t = 0, n = Object.keys(this); t < n.length; t++)
                        this[e = n[t]] && "function" == typeof this[e].dispose && this[e].dispose()
                }
            }, {
                key: "material",
                get: function() {
                    return null !== this.quad ? this.quad.material : null
                },
                set: function(e) {
                    null !== this.quad && (this.quad.material = e)
                }
            }]),
            e
        }();
        function Ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Qe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Je(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var et = function(e) {
            Object(o.a)(n, e);
            var t = Je(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = r.name, o = r.vertexShader, s = r.fragmentShader, u = r.uniforms, c = void 0 === u ? {} : u, l = r.textureID, h = void 0 === l ? "tInput" : l;
                return Object(i.a)(this, n),
                (e = t.call(this)).name = a || "ShaderPass",
                e.textureID = h,
                e.vertexShader = o,
                e.fragmentShader = s,
                e.uniforms = c,
                e
            }
            return Object(r.a)(n, [{
                key: "init",
                value: function(e) {
                    this.material = new F({
                        uniforms: Qe({
                            tInput: {
                                value: null
                            }
                        }, this.uniforms),
                        vertexShader: this.vertexShader || g,
                        fragmentShader: this.fragmentShader || "#define GLSLIFY 1\nuniform sampler2D tInput;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 color = texture2D(tInput, vUv);\n  gl_FragColor = color;\n}\n",
                        precision: e.capabilities.precision
                    }),
                    this.quad.material = this.material
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    this.material.uniforms.uResolution && (this.material.uniforms.uResolution.value = new h.M(e,t))
                }
            }, {
                key: "render",
                value: function(e, t, n, i, r) {
                    var a = this.material;
                    a.uniforms[this.textureID] && (a.uniforms[this.textureID].value = t.texture),
                    this.renderToScreen ? (e.setRenderTarget(null),
                    e.render(this.scene, this.camera)) : (e.setRenderTarget(n),
                    e.render(this.scene, this.camera))
                }
            }]),
            n
        }(qe);
        function tt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var nt = function(e) {
            Object(o.a)(n, e);
            var t = tt(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this, null, null, null)).name = "ClearMaskPass",
                e
            }
            return Object(r.a)(n, [{
                key: "render",
                value: function(e) {
                    e.state.buffers.stencil.setTest(!1)
                }
            }]),
            n
        }(qe);
        function it(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var rt = function(e) {
            Object(o.a)(n, e);
            var t = it(n);
            function n(e, r) {
                var a;
                return Object(i.a)(this, n),
                (a = t.call(this, e, r, null)).name = "MaskPass",
                a.inverse = !1,
                a.clearStencil = !0,
                a
            }
            return Object(r.a)(n, [{
                key: "render",
                value: function(e, t, n) {
                    var i = e.context
                      , r = e.state
                      , a = this.scene
                      , o = this.camera
                      , s = this.inverse ? 0 : 1
                      , u = 1 - s;
                    r.buffers.color.setMask(!1),
                    r.buffers.depth.setMask(!1),
                    r.buffers.color.setLocked(!0),
                    r.buffers.depth.setLocked(!0),
                    r.buffers.stencil.setTest(!0),
                    r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
                    r.buffers.stencil.setFunc(i.ALWAYS, s, 4294967295),
                    r.buffers.stencil.setClear(u),
                    this.clearStencil && (e.setRenderTarget(t),
                    e.clearStencil(),
                    e.setRenderTarget(n),
                    e.clearStencil()),
                    e.render(a, o, t),
                    e.render(a, o, n),
                    r.buffers.color.setLocked(!1),
                    r.buffers.depth.setLocked(!1),
                    r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
                    r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP)
                }
            }]),
            n
        }(qe)
          , at = (new h.M,
        function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object(i.a)(this, e),
                this._renderer = t,
                this._context = t.getContext(),
                this._readBuffer = null,
                this._writeBuffer = null,
                this._defaultDPR = c.m.DPR,
                this._drawBufferSize = new h.M,
                this._noRenderToScreen = n.noRenderToScreen,
                null !== this._renderer && (this._renderer.autoClear = !1,
                this._readBuffer = this._createBuffer(n.depthBuffer, n.stencilBuffer, n.depthTexture),
                this._writeBuffer = this._readBuffer.clone()),
                this._passes = [],
                this._copyPass = new et,
                this._checkPassToRender()
            }
            return Object(r.a)(e, [{
                key: "addPass",
                value: function(e, t) {
                    var n = this._renderer;
                    c.m.DPR;
                    this._renderer.getDrawingBufferSize(this._drawBufferSize),
                    e.init(n, this._context.getContextAttributes().alpha),
                    e.setSize(this._drawBufferSize.width, this._drawBufferSize.height),
                    void 0 !== t ? this._passes.splice(t, 0, e) : this._passes.push(e),
                    this._checkPassToRender()
                }
            }, {
                key: "destroyPass",
                value: function(e) {
                    e.destroy(),
                    this._passes.splice(this._passes.indexOf(e), 1)
                }
            }, {
                key: "getPass",
                value: function(e) {
                    for (var t = 0, n = this._passes.length; t < n; t++) {
                        var i = this._passes[t];
                        if (i.name === e)
                            return i
                    }
                    return null
                }
            }, {
                key: "destroyPasses",
                value: function() {
                    for (var e = this._passes; e.length > 0; )
                        e.pop().destroy()
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n, i, r, a, o, s = this._passes, u = this._renderer, c = this._copyPass, l = this._readBuffer, h = this._writeBuffer, d = !1;
                    for (this.passEnabledNb = 0,
                    a = 0,
                    o = s.length; a < o; ++a)
                        s[a].enabled && this.passEnabledNb++;
                    for (a = 0,
                    o = s.length; a < o; ++a)
                        (n = s[a]).enabled && (n.render(u, l, h, e, t, d),
                        n.needsSwap && (d && ((i = this._context).stencilFunc(i.NOTEQUAL, 1, 4294967295),
                        c.render(u, l, h),
                        i.stencilFunc(i.EQUAL, 1, 4294967295)),
                        r = l,
                        l = h,
                        h = r),
                        n instanceof rt ? d = !0 : n instanceof nt && (d = !1))
                }
            }, {
                key: "reset",
                value: function(e) {
                    var t = this._readBuffer.depthBuffer
                      , n = this._readBuffer.stencilBuffer
                      , i = null !== this._readBuffer.depthTexture;
                    this.destroy(e ? this.createBuffer(t, n, i) : e)
                }
            }, {
                key: "destroy",
                value: function(e) {
                    null !== this._readBuffer && null !== this._writeBuffer && (this._readBuffer.dispose(),
                    this._writeBuffer.dispose(),
                    this._readBuffer = null,
                    this._writeBuffer = null),
                    this.destroyPasses(),
                    void 0 !== e ? (this._readBuffer = e,
                    this._writeBuffer = this._readBuffer.clone()) : this._copyPass.destroy()
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    var n = this._passes;
                    this._renderer.setSize(c.k.width, c.k.height);
                    var i = this.dpr || c.m.DPR;
                    e *= i,
                    t *= i,
                    this._readBuffer.setSize(e, t),
                    this._writeBuffer.setSize(e, t);
                    for (var r = 0, a = n.length; r < a; ++r)
                        n[r].setSize(e, t)
                }
            }, {
                key: "_createBuffer",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this._renderer.getDrawingBufferSize(this._drawBufferSize);
                    var i = this._context.getContextAttributes().alpha
                      , r = new h.Q(this._drawBufferSize.width,this._drawBufferSize.height,{
                        minFilter: h.o,
                        magFilter: h.o,
                        format: i ? h.z : h.A,
                        depthBuffer: e,
                        stencilBuffer: t,
                        depthTexture: n ? new h.i : null,
                        generateMipmaps: !1
                    });
                    return n && t && (r.depthTexture.format = h.h,
                    r.depthTexture.type = h.L),
                    r
                }
            }, {
                key: "_checkPassToRender",
                value: function() {
                    for (var e = 0, t = this._passes.length; e < t; e++) {
                        var n = this._passes[e];
                        n.renderToScreen = !1,
                        e !== t - 1 || this._noRenderToScreen || (n.renderToScreen = !0)
                    }
                }
            }, {
                key: "passes",
                get: function() {
                    return this._passes
                }
            }, {
                key: "readBuffer",
                get: function() {
                    return this._readBuffer
                }
            }, {
                key: "writeBuffer",
                get: function() {
                    return this._writeBuffer
                }
            }]),
            e
        }());
        function ot(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var st = function(e) {
            Object(o.a)(n, e);
            var t = ot(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this)).name = "FxaaPass",
                e
            }
            return Object(r.a)(n, [{
                key: "init",
                value: function(e) {
                    Object(p.a)(Object(u.a)(n.prototype), "init", this).call(this, e),
                    this.material.vertexShader = "#define GLSLIFY 1\n#define SHADER_NAME Fxaa\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nuniform vec2 uResolution;\n\nvarying vec2 vUv;\nvarying vec2 vrgbNW;\nvarying vec2 vrgbNE;\nvarying vec2 vrgbSW;\nvarying vec2 vrgbSE;\nvarying vec2 vrgbM;\n\nvoid main() {\n  vUv = uv;\n\n  vec2 fragCoord = uv * uResolution;\n  texcoords(fragCoord, uResolution, vrgbNW, vrgbNE, vrgbSW, vrgbSE, vrgbM);\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
                    this.material.fragmentShader = "#define GLSLIFY 1\n#define SHADER_NAME Fxaa\n\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nuniform sampler2D tInput;\nuniform vec2 uResolution;\n\nvarying vec2 vUv;\nvarying vec2 vrgbNW;\nvarying vec2 vrgbNE;\nvarying vec2 vrgbSW;\nvarying vec2 vrgbSE;\nvarying vec2 vrgbM;\n\nvoid main() {\n  vec2 fragCoord = vUv * uResolution;\n  vec4 color = fxaa(tInput, fragCoord, uResolution, vrgbNW, vrgbNE, vrgbSW, vrgbSE, vrgbM);\n\n  gl_FragColor = color;\n}\n",
                    this.material.uniforms.uResolution = On.uniforms.uResolution,
                    this.material.defines = {
                        FXAA_REDUCE_MIN: 1 / 128,
                        FXAA_REDUCE_MUL: 1 / 8,
                        FXAA_SPAN_MAX: 1
                    }
                }
            }]),
            n
        }(et)
          , ut = Object(K.c)("PostProcessing", "#2849cc", !1)
          , ct = function() {
            function e(t, n, r) {
                var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (Object(i.a)(this, e),
                Object(l.a)(this),
                this._renderer = On.renderer,
                this._scene = t,
                this._camera = n,
                this.passEnabledNb = 0,
                this._enabled = r,
                this._noRenderToScreen = a,
                this._gui = c.d,
                this._enabled)
                    this._composer = new at(this._renderer,{
                        noRenderToScreen: this._noRenderToScreen
                    });
                else {
                    var o = {
                        minFilter: h.o,
                        magFilter: h.o,
                        format: h.z,
                        type: h.K,
                        depthWrite: !1,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    };
                    On.isWebGL2 ? (this._defaultRtt = new h.P(c.k.width,c.k.height,o),
                    this._defaultRtt.samples = 3) : this._defaultRtt = new h.Q(c.k.width,c.k.height,o)
                }
                this._bind()
            }
            return Object(r.a)(e, [{
                key: "addPass",
                value: function(e, t) {
                    this.enabled ? this._composer.addPass(e, t) : console.warn("PostProcessing - try to add pass but post processing is not enabled for this scene")
                }
            }, {
                key: "addFxaa",
                value: function() {
                    this.addPass(new st)
                }
            }, {
                key: "removePass",
                value: function(e) {
                    this._composer.removePass(e)
                }
            }, {
                key: "getPass",
                value: function(e) {
                    return this._composer.getPass(e)
                }
            }, {
                key: "destroyPasses",
                value: function() {
                    this._composer && this._composer.destroyPasses()
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    if (this._enabled)
                        this._composer.setSize(e, t);
                    else {
                        var n = this.dpr || c.m.DPR;
                        this._defaultRtt.setSize(e * n, t * n)
                    }
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this._enabled ? this._composer.render(e, t) : (this._renderer.setRenderTarget(this._defaultRtt),
                    this._renderer.clear(),
                    this._renderer.render(this._scene, this._camera))
                }
            }, {
                key: "destroy",
                value: function() {
                    this._unbind(),
                    this._destroyGUI(),
                    this._composer && this._composer.destroy(),
                    this._defaultRtt && this._defaultRtt.dispose()
                }
            }, {
                key: "_bind",
                value: function() {
                    c.c.on(Xe.CHANGED, this._onCameraChanged)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.c.off(Xe.CHANGED, this._onCameraChanged)
                }
            }, {
                key: "_createGUI",
                value: function() {}
            }, {
                key: "_destroyGUI",
                value: function() {
                    this._guiFolder && this._gui.removeFolder(this._guiFolder)
                }
            }, {
                key: "_onCameraChanged",
                value: function(e) {
                    var t = e.scene
                      , n = e.camera;
                    t === this._scene && (this._camera = n)
                }
            }, {
                key: "enabled",
                get: function() {
                    return this._enabled
                },
                set: function(e) {
                    e !== this._enabled && (ut(e ? "Enabled" : "Disabled"),
                    this._guiEnabledCtrl && this._guiEnabledCtrl.updateDisplay())
                }
            }, {
                key: "scene",
                get: function() {
                    return this.scene
                },
                set: function(e) {
                    this._scene = e,
                    this._guiFolder && this._destroyGUI(),
                    this._createGUI()
                }
            }, {
                key: "camera",
                get: function() {
                    return this._camera
                },
                set: function(e) {
                    this._camera = e
                }
            }, {
                key: "rtt",
                get: function() {
                    return this._enabled ? this._composer.writeBuffer : this._defaultRtt
                }
            }]),
            e
        }();
        function lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var ht = new h.f
          , dt = function(e) {
            Object(o.a)(n, e);
            var t = lt(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                (e = t.call(this, null, null, null)).name = "ClearPass",
                e.clearColor = r.clearColor || null,
                e.clearAlpha = r.clearAlpha || 0,
                e
            }
            return Object(r.a)(n, [{
                key: "render",
                value: function(e, t) {
                    var n, i = this.clearColor;
                    null !== i && (ht.copy(e.getClearColor()),
                    n = e.getClearAlpha(),
                    e.setClearColor(i, this.clearAlpha)),
                    t ? (e.setRenderTarget(t),
                    e.clear()) : e.setRenderTarget(null),
                    null !== i && e.setClearColor(ht, n)
                }
            }]),
            n
        }(qe);
        function ft(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var vt = function(e) {
            Object(o.a)(n, e);
            var t = ft(n);
            function n(e, r) {
                var o, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return Object(i.a)(this, n),
                o = t.call(this, e, r, null),
                Object(l.a)(Object(a.a)(o)),
                o._scene = e,
                o.name = "RenderPass",
                o.clearPass = new dt(s),
                o.overrideMaterial = s.overrideMaterial || null,
                o.clearDepth = s.clearDepth || !1,
                o.clear = s.clear || !0,
                o._bind(),
                o
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this),
                    this._unbind()
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this.scene
                      , i = this.renderToScreen ? null : t;
                    this.clear ? this.clearPass.render(e, i) : this.clearDepth && (e.setRenderTarget(i),
                    e.clearDepth()),
                    n.overrideMaterial = this.overrideMaterial,
                    i ? e.setRenderTarget(i) : e.setRenderTarget(null),
                    e.render(n, this.camera),
                    n.overrideMaterial = null
                }
            }, {
                key: "_bind",
                value: function() {
                    c.c.on(Xe.CHANGED, this._handleCameraChange)
                }
            }, {
                key: "_unbind",
                value: function() {
                    c.c.off(Xe.CHANGED, this._handleCameraChange)
                }
            }, {
                key: "_handleCameraChange",
                value: function(e) {
                    var t = e.scene
                      , n = e.camera;
                    this._scene === t && (this.camera = n)
                }
            }]),
            n
        }(qe);
        function pt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var mt = function(e) {
            Object(o.a)(n, e);
            var t = pt(n);
            function n(e, r) {
                var a;
                return Object(i.a)(this, n),
                (a = t.call(this)).options = r,
                a.physicsEnabled = r.physics,
                a.postProcessingEnabled = r.postProcessing,
                a.noBatcher = r.noBatcher,
                a.isRtScene = r.rtScene,
                a.ready = Promise.create(),
                a._name = e,
                a._world = On,
                a._loader = he.a,
                a._textures = pe,
                a._useDebugCamera = void 0 === r.debugCamera || r.debugCamera,
                a.isRtScene && (a._useDebugCamera = !1),
                a._size = new h.M,
                a._gui = O.a,
                a.folders = {},
                a._tls = [],
                a._entities = [],
                a._lights = [],
                a._events = {},
                a._running = !1,
                a._paused = !1,
                a._renderer = On.renderer,
                a._initGUI(),
                a._createStack(),
                a._bind(),
                a._init(),
                a
            }
            return Object(r.a)(n, [{
                key: "create",
                value: function() {
                    var e = this._stack.getAll();
                    if (this.noBatcher) {
                        for (var t = 0, n = e.length; t < n; t++)
                            e[t]();
                        return Promise.resolve()
                    }
                    return this._batcher = new Me(e),
                    this._batcher.execute()
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    return this._running = !1,
                    this._unbind(),
                    this._destroyTls(),
                    this._destroyGUI(),
                    this._destroyAudios(),
                    this._cameraCtrl.destroy(),
                    setTimeout((function() {
                        e._postProcessing.destroy();
                        for (var t = function(t, n) {
                            e._entities[t].destroy && setTimeout((function() {
                                e._entities[t].destroy()
                            }
                            ), 30 * t)
                        }, n = 0, i = e._entities.length; n < i; n++)
                            t(n)
                    }
                    ), 2e3),
                    Promise.resolve()
                }
            }, {
                key: "start",
                value: function() {
                    return this._running = !0,
                    this._cameraCtrl.start(),
                    Promise.resolve()
                }
            }, {
                key: "pause",
                value: function() {
                    return this._cameraCtrl.pause(),
                    Promise.resolve()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this._running && this.tick(e, t)
                }
            }, {
                key: "tick",
                value: function(e, t) {
                    this._cameraCtrl.update(e, t),
                    this._onUpdate(e, t),
                    this._postProcessing.update(e, t)
                }
            }, {
                key: "addEntity",
                value: function(e, t) {
                    this._entities.push(e),
                    this.add(t || e)
                }
            }, {
                key: "addPhysicsDeep",
                value: function(e) {
                    var t = this;
                    e._entities && e._entities.forEach((function(e) {
                        if (e.bodies) {
                            t.addBody(e.bodies);
                            for (var n = 0, i = e.bodies.length; n < i; n++)
                                e.bodies[n].sleepThreshold = 1e12
                        } else
                            e.body && (t.addBody(e.body),
                            e.body.sleepThreshold = 1e12);
                        e.constraints && t.addConstraint(e.constraints),
                        e._entities && t.addPhysicsDeep(e)
                    }
                    ))
                }
            }, {
                key: "addConstraint",
                value: function(e) {}
            }, {
                key: "addCamera",
                value: function(e) {
                    this._cameraCtrl.addCamera(e)
                }
            }, {
                key: "addLight",
                value: function(e, t) {
                    t && (e.name = t),
                    this._lights.push(e),
                    this.add(e)
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    this._size.set(e, t),
                    this._cameraCtrl && this._cameraCtrl.setSize(e, t),
                    this._postProcessing && this._postProcessing.setSize(e, t)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    for (var t = 0, n = this._entities.length; t < n; t++) {
                        var i = this._entities[t];
                        i && i.onSwapLeave && i.onSwapLeave(e)
                    }
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    for (var t = 0, n = this._entities.length; t < n; t++) {
                        var i = this._entities[t];
                        i && i.onSwap && i.onSwap(e)
                    }
                }
            }, {
                key: "hideGUI",
                value: function() {}
            }, {
                key: "_init",
                value: function() {}
            }, {
                key: "_initGUI",
                value: function() {
                    this.paneName = me(this.name) + " Scene";
                    var e = O.a.create(this.paneName);
                    e && (window.pane = e,
                    this.pane = e)
                }
            }, {
                key: "_bind",
                value: function() {}
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_onUpdate",
                value: function(e, t) {}
            }, {
                key: "_createStack",
                value: function() {
                    var e = this;
                    this._stack = new Be;
                    ["ctrls", "cameras", "postProcessing", "audios", "entities", "lights", "GUI"].forEach((function(t) {
                        e._stack.add(t, (function() {
                            return e["_create".concat(me(t))]()
                        }
                        ))
                    }
                    )),
                    this._stack.add("afterCreate", (function() {
                        e._afterCreate(),
                        e.ready.resolve()
                    }
                    ))
                }
            }, {
                key: "_createCtrls",
                value: function() {
                    this._cameraCtrl = new Xe(this,this._useDebugCamera),
                    this.add(this._cameraCtrl.helpers)
                }
            }, {
                key: "_createCameras",
                value: function() {}
            }, {
                key: "_createPostProcessing",
                value: function() {
                    this._postProcessing = new ct(this,this.camera,this.postProcessingEnabled),
                    this.postProcessingEnabled && (this._renderPass = new vt(this,this.camera),
                    this._postProcessing.addPass(this._renderPass),
                    this._renderPass.renderToScreen = !1)
                }
            }, {
                key: "_createEnvironment",
                value: function() {}
            }, {
                key: "_createAudios",
                value: function() {}
            }, {
                key: "_createEntities",
                value: function() {}
            }, {
                key: "_createLights",
                value: function() {}
            }, {
                key: "_createGUI",
                value: function() {
                    var e = this;
                    this.pane && (this._cameraCtrl.createGUI(this.pane),
                    this._lights.length && Object(l.c)("lights") ? this._createLightsGUI() : this._lights.length && this.folders.debug.addButton({
                        title: "Add lights debug"
                    }).on("click", (function() {
                        e._createLightsGUI()
                    }
                    )))
                }
            }, {
                key: "_createLightsGUI",
                value: function() {
                    if (!this._lightsGUICreated) {
                        this._lightsGUICreated = !0;
                        for (var e = 0, t = this._lights.length; e < t; e++) {
                            var n = this._lights[e]
                              , i = this.pane.addFolder({
                                title: "💡 ".concat(me(n.name), " light")
                            });
                            i.expanded = !1,
                            i.addInput(n, "intensity", {
                                min: 0,
                                max: 1,
                                step: .01
                            }),
                            i.addInput(n, "color"),
                            n instanceof h.j && (n.helper = new h.k(n,5),
                            this.add(n.helper),
                            i.addSeparator(),
                            this._gui.addVec(i, n.position, {
                                label: "position",
                                min: -100,
                                max: 100,
                                step: .1
                            }),
                            i.addSeparator(),
                            this._gui.addVec(i, n.rotation, {
                                label: "rotation",
                                min: -Math.PI,
                                max: Math.PI,
                                step: .01
                            }))
                        }
                    }
                }
            }, {
                key: "_afterCreate",
                value: function() {}
            }, {
                key: "_destroyGUI",
                value: function() {
                    O.a.destroy(this.paneName || this.name)
                }
            }, {
                key: "_destroyAudios",
                value: function() {}
            }, {
                key: "_destroyTls",
                value: function() {
                    for (var e = 0, t = this._tls.length; e < t; e++)
                        this._tls[e] && (this._tls[e].kill(),
                        this._tls[e].clear())
                }
            }, {
                key: "addBody",
                value: function(e) {}
            }, {
                key: "_updatePhysics",
                value: function(e, t) {}
            }, {
                key: "_togglePhysicRender",
                value: function() {}
            }, {
                key: "_onBeforePhysics",
                value: function() {}
            }, {
                key: "_onAfterPhysics",
                value: function() {}
            }, {
                key: "name",
                get: function() {
                    return this._name
                },
                set: function(e) {
                    this._name = e
                }
            }, {
                key: "running",
                get: function() {
                    return this._running
                },
                set: function(e) {
                    this._running = e
                }
            }, {
                key: "paused",
                get: function() {
                    return this._paused
                },
                set: function(e) {
                    this._paused = e
                }
            }, {
                key: "camera",
                get: function() {
                    return this._cameraCtrl.camera
                }
            }, {
                key: "postProcessing",
                get: function() {
                    return this._postProcessing
                }
            }, {
                key: "rtt",
                get: function() {
                    return this._postProcessing.rtt
                }
            }]),
            n
        }(h.D)
          , yt = "#define GLSLIFY 1\n#include <common>\n#include <dithering_pars_fragment>\n\nuniform sampler2D tInput;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n\t// Sample top left texel.\n\tvec4 sum = texture2D(tInput, vUv0);\n\n\t// Sample top right texel.\n\tsum += texture2D(tInput, vUv1);\n\n\t// Sample bottom right texel.\n\tsum += texture2D(tInput, vUv2);\n\n\t// Sample bottom left texel.\n\tsum += texture2D(tInput, vUv3);\n\n\t// Compute the average.\n\tgl_FragColor = sum * 0.25;\n\n\t#include <dithering_fragment>\n\n}"
          , _t = "#define GLSLIFY 1\nuniform vec2 texelSize;\nuniform vec2 halfTexelSize;\nuniform float kernel;\n\nvarying vec2 vUv0;\nvarying vec2 vUv1;\nvarying vec2 vUv2;\nvarying vec2 vUv3;\n\nvoid main() {\n\n\tvec2 dUv = (texelSize * vec2(kernel)) + halfTexelSize;\n\n\tvUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);\n\tvUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);\n\tvUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);\n\tvUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n}"
          , gt = 3;
        function Dt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var bt = function(e) {
            Object(o.a)(n, e);
            var t = Dt(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new h.M;
                return Object(i.a)(this, n),
                (e = t.call(this, {
                    type: "ConvolutionMaterial",
                    uniforms: {
                        tInput: new h.J(null),
                        texelSize: new h.J(new h.M),
                        halfTexelSize: new h.J(new h.M),
                        kernel: new h.J(0)
                    },
                    fragmentShader: yt,
                    vertexShader: _t,
                    depthWrite: !1,
                    depthTest: !1
                })).setTexelSize(r.x, r.y),
                e.kernelSize = gt,
                e
            }
            return Object(r.a)(n, [{
                key: "getKernel",
                value: function() {
                    return kt[this.kernelSize]
                }
            }, {
                key: "setTexelSize",
                value: function(e, t) {
                    this.uniforms.texelSize.value.set(e, t),
                    this.uniforms.halfTexelSize.value.set(e, t).multiplyScalar(.5)
                }
            }]),
            n
        }(h.E)
          , kt = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])]
          , wt = bt
          , xt = "#define GLSLIFY 1\n#include <common>\n\nuniform sampler2D tInput;\nuniform float distinction;\nuniform vec2 range;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vec4 texel = texture2D(tInput, vUv);\n  float l = linearToRelativeLuminance(texel.rgb);\n\n  #ifdef RANGE\n\n    float low = step(range.x, l);\n    float high = step(l, range.y);\n\n    // Apply the mask.\n    l *= low * high;\n\n  #endif\n\n  l = pow(abs(l), distinction);\n\n  #ifdef COLOR\n\n    gl_FragColor = vec4(texel.rgb * l, texel.a);\n\n  #else\n\n    gl_FragColor = vec4(l, l, l, texel.a);\n\n  #endif\n\n}"
          , Ot = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n}";
        function Ct(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        h.E;
        var Et = "#define GLSLIFY 1\nuniform sampler2D texture1;\nuniform sampler2D texture2;\n\nuniform float opacity1;\nuniform float opacity2;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n  vec4 texel1 = opacity1 * texture2D(texture1, vUv);\n  vec4 texel2 = opacity2 * texture2D(texture2, vUv);\n\n  #ifdef SCREEN_MODE\n\n    vec3 invTexel1 = vec3(1.0) - texel1.rgb;\n    vec3 invTexel2 = vec3(1.0) - texel2.rgb;\n\n    vec4 color = vec4(\n      vec3(1.0) - invTexel1 * invTexel2,\n      texel1.a + texel2.a\n    );\n\n  #else\n\n    vec4 color = texel1 + texel2;\n\n  #endif\n\n  gl_FragColor = color;\n\n}"
          , jt = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n}";
        function St(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        h.E;
        function Ft(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Pt = function(e) {
            Object(o.a)(n, e);
            var t = Ft(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                (e = t.call(this, "BlurPass")).renderTargetX = new h.Q(1,1,{
                    minFilter: h.o,
                    magFilter: h.o,
                    stencilBuffer: !1,
                    depthBuffer: !1
                }),
                e.renderTargetX.texture.name = "Blur.TargetX",
                e.renderTargetX.texture.generateMipmaps = !1,
                e.renderTargetY = e.renderTargetX.clone(),
                e.renderTargetY.texture.name = "Blur.TargetY",
                e.resolutionScale = void 0 !== r.resolutionScale ? r.resolutionScale : .5,
                e.convolutionMaterial = new wt,
                e.ditheredConvolutionMaterial = new wt,
                e.ditheredConvolutionMaterial.dithering = !0,
                e.dithering = !1,
                e.kernelSize = r.kernelSize,
                e
            }
            return Object(r.a)(n, [{
                key: "width",
                get: function() {
                    return this.renderTargetX.width
                }
            }, {
                key: "height",
                get: function() {
                    return this.renderTargetX.height
                }
            }, {
                key: "kernelSize",
                get: function() {
                    return this.convolutionMaterial.kernelSize
                },
                set: function(e) {
                    void 0 === e && (e = gt),
                    this.convolutionMaterial.kernelSize = e,
                    this.ditheredConvolutionMaterial.kernelSize = e
                }
            }, {
                key: "render",
                value: function(e, t, n, i, r) {
                    var a, o, s, u = this.scene, c = this.camera, l = this.renderTargetX, h = this.renderTargetY, d = this.convolutionMaterial, f = d.uniforms, v = d.getKernel(), p = t;
                    for (this.material = d,
                    o = 0,
                    s = v.length - 1; o < s; ++o)
                        a = o % 2 == 0 ? l : h,
                        f.kernel.value = v[o],
                        f.tInput.value = p.texture,
                        e.setRenderTarget(a),
                        e.render(u, c),
                        p = a;
                    this.dithering && (f = (d = this.ditheredConvolutionMaterial).uniforms,
                    this.material = d),
                    f.kernel.value = v[o],
                    f.tInput.value = p.texture,
                    this.renderToScreen ? e.setRenderTarget(null) : e.setRenderTarget(n),
                    e.render(u, c)
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    e = Math.max(1, Math.floor(e * this.resolutionScale)),
                    t = Math.max(1, Math.floor(t * this.resolutionScale)),
                    this.renderTargetX.setSize(e, t),
                    this.renderTargetY.setSize(e, t),
                    this.convolutionMaterial.setTexelSize(1 / e, 1 / t),
                    this.ditheredConvolutionMaterial.setTexelSize(1 / e, 1 / t)
                }
            }, {
                key: "init",
                value: function(e, t) {
                    t || (this.renderTargetX.texture.format = h.A,
                    this.renderTargetY.texture.format = h.A)
                }
            }]),
            n
        }(et)
          , Rt = "precision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor;\nvarying vec2 vUv;\nfloat circle(vec2 st, float radius) {\n    return step(radius, length(st - vec2(0.5)));\n}\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.);\n  gl_FragColor.a = 1. - circle(vUv, .5);\n}\n";
        function Tt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Mt = function(e) {
            Object(o.a)(n, e);
            var t = Tt(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                (r = t.call(this, e, {
                    postProcessing: !0,
                    physics: !1,
                    noBatcher: !0
                }))._renderer.setClearColor(16777215, 1),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "initGUI",
                value: function(e) {}
            }, {
                key: "setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t),
                    this.background.scale.set(e, t, 1),
                    this.background.position.x = e / 2,
                    this.background.position.y = -t / 2,
                    this.shape.scale.set(.9 * c.k.height, .9 * c.k.height, 1),
                    this.shape2.scale.set(.7 * c.k.height, .7 * c.k.height, 1);
                    for (var i = 0, r = this._entities.length; i < r; i++) {
                        var a = this._entities[i];
                        a && a.setSize && a.setSize(e, t)
                    }
                    this._pRenderCanvas && (this._pRenderCanvas.width = e,
                    this._pRenderCanvas.height = t)
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this)
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this._camera = new Pe({
                        near: -110,
                        far: 110,
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this),
                    this.blurPass = new Pt({
                        resolutionScale: .05,
                        kernelSize: 4
                    }),
                    this.postProcessing.addPass(this.blurPass)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this.background = new h.r(this._world.GEOMS.plane,new h.B({
                        vertexShader: g,
                        fragmentShader: "\nprecision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor1;\nvarying vec2 vUv;\n\nvoid main() {\n  gl_FragColor.rgb = uColor1;\n  gl_FragColor.a = 1.;\n}",
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            }
                        }
                    })),
                    this.add(this.background),
                    this.shape = new h.r(this._world.GEOMS.plane,new h.B({
                        transparent: !0,
                        vertexShader: g,
                        fragmentShader: Rt,
                        uniforms: {
                            uColor: {
                                value: this._world.hColor1
                            }
                        }
                    })),
                    this.add(this.shape),
                    this.shape2 = new h.r(this._world.GEOMS.plane,new h.B({
                        transparent: !0,
                        vertexShader: g,
                        fragmentShader: Rt,
                        uniforms: {
                            uColor: {
                                value: this._world.hColor2
                            }
                        }
                    })),
                    this.add(this.shape2)
                }
            }, {
                key: "_initGUI",
                value: function() {}
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this),
                    this.setSize()
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t);
                    this.shape.position.x = c.k.width / 2 - .3 * c.k.width * Math.sin(.001 * t),
                    this.shape.position.y = -c.k.height / 2 - .4 * c.k.height * Math.sin(1.3 * t * .001),
                    this.shape2.position.x = c.k.width / 2 - .4 * c.k.width * Math.cos(1.1 * t * .001 + .6),
                    this.shape2.position.y = -c.k.height / 2 - .3 * c.k.height * Math.sin(1.4 * t * .001 + .3)
                }
            }]),
            n
        }(mt);
        function Lt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Bt = function(e) {
            Object(o.a)(n, e);
            var t = Lt(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                r = t.call(this, e),
                Object(l.a)(Object(a.a)(r)),
                r._init(),
                r.position.z = -50,
                c.c.on("darkmode:changed", r._onDarkModeChange),
                r.setSize(),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.aspect;
                    this._viewport = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, e);
                    var t = this._viewport
                      , n = t.width
                      , i = t.height;
                    this._data = c.e.sizes[0],
                    this.scale.x = n,
                    this.scale.y = this._data.height / c.k.height * i,
                    this._scene.setSize(c.k.width, c.k.height),
                    this.material.uniforms.uFuzz.value = 120 / c.k.height;
                    var r = c.k.width < 600 ? 50 : 60;
                    this.material.uniforms.uMaskScale.value.set(1 - r / c.k.width, 1 - r / c.k.height),
                    e < 1 && c.k.width < 700 && (this.material.uniforms.uFuzz.value = 100 / c.k.height)
                }
            }, {
                key: "_init",
                value: function() {
                    c.b.isDesktop && (this._fluid = new Se({
                        autoClear: !0,
                        iterations: 3,
                        densityDissipation: .967,
                        velocityDissipation: .967,
                        pressureDissipation: .967,
                        curlStrength: 18.2,
                        radius: .2
                    })),
                    this._scene = new Mt("experience"),
                    this._scene.create(),
                    this.geometry = new h.x(1,1,1,40),
                    this.material = this._createMaterial({
                        transparent: !0,
                        vertexShader: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform float uVelocity;\nuniform float uTime;\nvarying vec2 vUv;\n\n@import cmap\n\nvoid main() {\n  vUv = uv;\n  vec4 pos = modelViewMatrix * vec4(position, 1.0);\n  vec4 mPos = modelViewMatrix * vec4(position, 1.0);\n  float offsetZ = sin(pos.y * .025) * uVelocity * .02;\n  // pos.z += sin(pos.y * .025 + uTime) * 2. - 3.;\n  gl_Position = projectionMatrix * pos;\n}\n",
                        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform sampler2D tNormal;\nuniform vec2 uResolution;\nuniform vec2 uMaskScale;\nuniform vec2 uMaskScaleFactor;\nuniform float uAlpha;\n// uniform float uFuzz;\nuniform float uLuma;\nvarying vec2 vUv;\n\n#ifdef USE_FLUID\nuniform sampler2D tFluid;\nuniform float uFluid;\n#endif \n\n@import aastep\n@import cmap\n@import luma\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy/uResolution.xy;\n  vec2 uv = vUv;\n\n  vec3 normal = texture2D(tNormal, vec2(\n    fract(vUv.x * 5.),\n    fract(vUv.y * 5.)\n  )).rgb;\n  #ifdef USE_FLUID\n  vec4 fluid = texture2D(tFluid, st);\n  uv -= fluid.xy * .0001 * uFluid * normal.xy * 2.;\n  #endif\n\n  vec3 texel = texture2D(tMap, uv).rgb;\n  vec2 normalHightlight = vec2(0.5);\n  #ifdef USE_FLUID\n  normalHightlight = (fluid.xy * normal.xy);\n  #endif\n  float lum = luma(texel);\n\n  gl_FragColor.rgb = mix(texel, normal, length(normalHightlight) * .0001);\n\n  // gl_FragColor.a = cmap(vUv.y, 0., uFuzz, 0., 1.) * cmap(vUv.y, 1. - uFuzz, 1., 1., 0.);\n\n  vec2 boxPos = vec2(0.5, 0.5);\t// center of the screen\n  vec2 boxBnd = vec2(.5, .5) * uMaskScale * uMaskScaleFactor;\n  vec2 aspectRatio = vec2(uResolution.x/uResolution.y, 1.0);\n  uv = vUv * aspectRatio;// ;\n  boxPos *= aspectRatio;\n  boxBnd *= aspectRatio;\n  float radius = .013;\n  float frame = length(max(abs(uv - boxPos) - boxBnd, 0.0)) - radius;\n\n  gl_FragColor.a = aastep(frame, 0.);\n}\n",
                        uniforms: {
                            tMap: {
                                value: this._scene.rtt.texture
                            },
                            tNormal: {
                                value: this._textures.get("ice-map")
                            },
                            uResolution: this._world.uniforms.uResolution,
                            uTime: this._world.uniforms.uTime,
                            uFuzz: {
                                value: 0
                            },
                            uMaskScaleFactor: {
                                value: new h.M(1,1)
                            },
                            uMaskScale: {
                                value: new h.M(1,1)
                            },
                            uLuma: {
                                value: c.l.isDarkMode ? 2 : 5
                            },
                            uVelocity: c.e.lerpedVelocity
                        }
                    }),
                    this._fluid && (this.material.uniforms.tFluid = this._fluid.uniform,
                    this.material.uniforms.uFluid = {
                        value: 1
                    },
                    this.material.defines.USE_FLUID = !0),
                    this.mesh = new h.r(this.geometry,this.material),
                    this.add(this.mesh)
                }
            }, {
                key: "_onDarkModeChange",
                value: function(e) {
                    J.a.to(this.material.uniforms.uLuma, {
                        value: e ? 1 : 5,
                        duration: .3
                    })
                }
            }, {
                key: "initGUI",
                value: function() {
                    if (this.scene.pane) {
                        var e = this.scene.pane;
                        this._fluid.createGUI(e)
                    }
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e),
                    this._fluid && this._fluid.bind();
                    var t = this.material.uniforms.uMaskScaleFactor;
                    c.k.width > c.k.height ? (J.a.set(t.value, {
                        x: .7,
                        y: .9
                    }),
                    J.a.to(t.value, {
                        x: 1,
                        y: 1,
                        duration: 1.6,
                        ease: "elastic.out(.04, .05)"
                    })) : J.a.set(t.value, {
                        x: 1,
                        y: 1
                    })
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e),
                    this._fluid && this._fluid.unbind()
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this._data && (this._offsetY = this._data.ty,
                    this.position.y = -this._data.ty / c.k.height * this._viewport.height,
                    this._data.visible && (this._fluid && this._fluid.update(),
                    this._scene.tick(e, t)))
                }
            }]),
            n
        }(De)
          , Ut = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nuniform float uVelocity;\nuniform float uThres;\nuniform float uPress;\nuniform vec2 uMouse;\nuniform vec2 uMouseVelocity;\nuniform float uMouseFactor;\nvarying vec2 vUv;\nvarying float vOffsetZ;\n\n@import cmap\n\nvoid main() {\n  vUv = uv;\n  vec4 pos = modelViewMatrix * vec4(position, 1.0);\n  vec4 mPos = modelViewMatrix * vec4(position, 1.0);\n  float offsetZ = sin(pos.y * .025) * uVelocity * .02;\n  pos.z += sin(pos.y * .025) * uVelocity * .02;\n\n  float dist = distance(uMouse, mPos.xy);\n\n  float thres = 24. * uThres;\n\n  if (dist < thres) {\n    float velocityFactor = cmap(length(uMouseVelocity), 0., 15., 1., 0.);\n    float press = (thres - dist) * -.2  * velocityFactor * uPress;\n    pos.z += press * uMouseFactor;\n    offsetZ -= press * .4;\n  }\n  vOffsetZ = offsetZ;\n  gl_Position = projectionMatrix * pos;\n}\n";
        function At(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function zt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? At(Object(n), !0).forEach((function(t) {
                    Object(m.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function It(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Vt = function(e) {
            Object(o.a)(n, e);
            var t = It(n);
            function n(e, r) {
                var o, s = r.index, u = r.data, c = r.parent;
                return Object(i.a)(this, n),
                o = t.call(this, e),
                Object(l.a)(Object(a.a)(o)),
                o._parent = c,
                o._index = s,
                o._data = u,
                o._emitHead = "project-plane-".concat(s, "::"),
                o._init(),
                o.reset(),
                o
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "reset",
                value: function(e) {
                    e && (this._data = e),
                    J.a.set(this.alpha, {
                        value: 0
                    }),
                    this.videoMaterial && J.a.set(this.videoMaterial.uniforms.uVideoMix, {
                        value: 0
                    }),
                    this._pauseVideo(),
                    this._playing = !1,
                    this._scrollToggle = !1,
                    this._mouseIn = !1
                }
            }, {
                key: "setData",
                value: function(e) {
                    this._data = e
                }
            }, {
                key: "setSize",
                value: function() {
                    if (this._data) {
                        var e = this._parent.getViewport();
                        this._viewport = e;
                        var t = this._data.visualBbox
                          , n = t.width / c.k.width * e.x
                          , i = t.height / c.k.height * e.y;
                        this.scale.set(n, i, 1),
                        this.position.x = t.x / c.k.width * e.x,
                        this.mesh.position.x = .5 - e.x / 2 / n,
                        this.mesh.position.y = e.y / 2 / i - .5;
                        var r = Object(l.b)(!1, t.width, t.height, this._map.image.naturalWidth, this._map.image.naturalHeight)
                          , a = r.width
                          , o = r.height;
                        this._scaleUV.set(a / t.width, o / t.height),
                        this._setVideoUV()
                    }
                }
            }, {
                key: "_setVideoUV",
                value: function() {
                    if (this._parent.getViewport(),
                    this._video && this._videoReady) {
                        var e = this._data.visualBbox
                          , t = Object(l.b)(!1, e.width, e.height, this._video.videoWidth, this._video.videoHeight)
                          , n = t.width
                          , i = t.height;
                        this._scaleVideoUV.set(n / e.width, i / e.height)
                    }
                }
            }, {
                key: "_init",
                value: function() {
                    var e = this
                      , t = this._data.component.getImage();
                    this._map = new h.H(t),
                    this._scaleUV = new h.M(1,1),
                    this._scaleVideoUV = new h.M(1,1),
                    this._useVideo = "no" !== this._data.component.getVideoUrl(),
                    this._useVideo && this._initVideo(),
                    this.geometry = On.GEOMS.planeHigh,
                    this.baseMaterial = this._createMaterial({
                        transparent: !0,
                        vertexShader: Ut,
                        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D tMap;\nuniform float uVelocity;\nuniform float uProgress;\nuniform float uLoaded;\nuniform float uTime;\nuniform float uAlpha;\nuniform vec2 uScale;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform vec3 uHColor1;\nuniform vec3 uHColor2;\nvarying vec2 vUv;\nvarying float vOffsetZ;\n\n@import scaleUV\n@import translateUV\n@import cmap\n@import random\n\nvoid main() {\n  vec2 uv = vUv;\n  float s = 1.05;\n  uv = scaleUV(uv, uScale);\n  uv = scaleUV(uv, vec2(s));\n  float ty = cmap(uProgress, 0., 1., -1., 1.) * (1.- s) * 2.;\n  uv = translateUV(uv, vec2(0, ty));\n  \n  vec3 unloadedColor = mix(vec3(0.), mix(uHColor1, uHColor2, sin(uTime * 2. + (vUv.x + vUv.y) * 1.2) * .4), .8);\n  vec3 color = mix(uHColor1, uHColor2, cmap(vOffsetZ, -1., 1., 0., 1.));\n  float mixColor = cmap(abs(vOffsetZ), 0.5, 10., 0., .4);\n\n  vec4 texel = texture2D(tMap, uv);\n  gl_FragColor.rgb = mix(unloadedColor, mix(texel.rgb, color, mixColor), uLoaded);\n  gl_FragColor.a = uAlpha;\n}\n",
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            },
                            uColor2: {
                                value: this._world.color2
                            },
                            uHColor1: {
                                value: this._world.hColor1
                            },
                            uHColor2: {
                                value: this._world.hColor2
                            },
                            tMap: {
                                value: this._map
                            },
                            uScale: {
                                value: this._scaleUV
                            },
                            uThres: {
                                value: (c.b.isMobile,
                                1)
                            },
                            uPress: {
                                value: (c.b.isMobile,
                                1)
                            },
                            uVelocity: c.e.lerpedVelocity,
                            uMouse: {
                                value: this._parent.mouse
                            },
                            uMouseVelocity: {
                                value: this._parent.velocity
                            },
                            uProgress: {
                                value: 0
                            },
                            uLoaded: {
                                value: t.complete ? 1 : 0
                            },
                            uMouseFactor: {
                                value: 1
                            },
                            tVideo: {
                                value: this._videoMap
                            }
                        }
                    }),
                    this.videoMaterial = this._createMaterial({
                        transparent: !0,
                        vertexShader: Ut,
                        fragmentShader: "#define GLSLIFY 1\nuniform sampler2D tMap;\n\nuniform float uVelocity;\nuniform float uProgress;\nuniform float uLoaded;\nuniform float uTime;\nuniform float uAlpha;\nuniform vec2 uScale;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform vec3 uHColor1;\nuniform vec3 uHColor2;\nvarying vec2 vUv;\nvarying float vOffsetZ;\n\nuniform sampler2D tVideo;\nuniform vec2 uScaleVideo;\nuniform float uVideoMix;\n\n@import scaleUV\n@import translateUV\n@import cmap\n@import random\n\nvoid main() {\n  vec2 uv = vUv;\n  float s = 1.05;\n  uv = scaleUV(uv, uScale);\n  uv = scaleUV(uv, vec2(s));\n  float ty = cmap(uProgress, 0., 1., -1., 1.) * (1.- s) * 2.;\n  uv = translateUV(uv, vec2(0, ty));\n  \n  vec3 color = mix(uHColor1, uHColor2, cmap(vOffsetZ, -1., 1., 0., 1.));\n  float mixColor = cmap(abs(vOffsetZ), 0.5, 10., 0., .4);\n\n  vec4 texel = texture2D(tMap, uv);\n\n  vec2 videoUv = vUv;\n  videoUv = scaleUV(videoUv, uScaleVideo);\n  videoUv = scaleUV(videoUv, vec2(s));\n  videoUv = translateUV(videoUv, vec2(0, ty));\n\n  vec4 videoTexel = texture2D(tVideo, videoUv);\n  vec3 outp = mix(texel.rgb, videoTexel.rgb, uVideoMix);\n  vec3 unloadedColor = mix(vec3(0.), mix(uHColor1, uHColor2, sin(uTime * 2. + (vUv.x + vUv.y) * 1.2) * .4), .8);\n  gl_FragColor.rgb = mix(outp, color, mixColor);\n  gl_FragColor.rgb = mix(unloadedColor, gl_FragColor.rgb, uLoaded);\n  gl_FragColor.a = uAlpha;\n  \n}\n",
                        uniforms: zt(zt({}, this.baseMaterial.uniforms), {}, {
                            tVideo: {
                                value: this._videoMap
                            },
                            uScaleVideo: {
                                value: this._scaleVideoUV
                            },
                            uVideoMix: {
                                value: 0
                            }
                        })
                    }),
                    t.complete ? this._map.needsUpdate = !0 : t.onload = function() {
                        e._map.needsUpdate = !0,
                        e.setSize(),
                        J.a.to(e.material.uniforms.uLoaded, Object(m.a)({
                            value: 1,
                            ease: "cubic.out",
                            duration: .3
                        }, "ease", "cubic.out"))
                    }
                    ,
                    this.material = this.baseMaterial,
                    this.alpha = this.material.uniforms.uAlpha,
                    J.a.set(this.alpha, {
                        value: 0
                    }),
                    this.mesh = new h.r(this.geometry,this.material),
                    this.add(this.mesh),
                    c.c.on("".concat(this._emitHead, "animateIn"), this._animateIn),
                    c.c.on("".concat(this._emitHead, "animateOut"), this._animateOut),
                    c.c.on("".concat(this._emitHead, "enter"), this._onEnter),
                    c.c.on("".concat(this._emitHead, "leave"), this._onLeave),
                    c.c.on("homescroll:idleChanged", this._onScrollIdle)
                }
            }, {
                key: "_initVideo",
                value: function() {
                    var e = this
                      , t = document.createElement("video");
                    t.setAttribute("playsinline", ""),
                    t.setAttribute("webkit-playsinline", ""),
                    t.setAttribute("crossorigin", "anonymous"),
                    t.setAttribute("muted", ""),
                    t.muted = !0,
                    t.loop = !0,
                    t.src = this._data.component.getVideoUrl(),
                    this._videoMap = new h.O(t),
                    this._video = t,
                    this._videoReady = !1,
                    t.oncanplaythrough = function() {
                        e._setVideoUV(),
                        t.oncanplaythrough = null,
                        e._videoReady = !0
                    }
                }
            }, {
                key: "_animateIn",
                value: function() {
                    J.a.killTweensOf(this.alpha),
                    J.a.to(this.alpha, {
                        value: 1,
                        duration: .6,
                        ease: "cubic.out"
                    })
                }
            }, {
                key: "_animateOut",
                value: function() {
                    J.a.killTweensOf(this.alpha),
                    J.a.to(this.alpha, {
                        value: 0,
                        duration: .4
                    })
                }
            }, {
                key: "_onEnter",
                value: function() {
                    this._videoReady && (this._mouseIn = !0,
                    this._scrollToggle || this._playVideo())
                }
            }, {
                key: "_onLeave",
                value: function() {
                    this._mouseIn = !1,
                    this._scrollToggle || this._pauseVideo()
                }
            }, {
                key: "_onScrollIdle",
                value: function(e, t) {
                    c.b.isDesktop || (this._scrollToggle = !1,
                    this._mouseIn || this._pauseVideo(),
                    e && t === this._index + 1 && (this._scrollToggle = !0,
                    this._playVideo()))
                }
            }, {
                key: "_playVideo",
                value: function() {
                    var e = this;
                    this._video && !this._playing && (this._playing = !0,
                    this._video.play(),
                    this.mesh.material = this.videoMaterial,
                    J.a.killTweensOf(this.videoMaterial.uniforms.uVideoMix),
                    J.a.to(this.videoMaterial.uniforms.uVideoMix, {
                        value: 1,
                        duration: .5,
                        ease: "cubic.out",
                        delay: .2
                    }),
                    this.setSize(),
                    this._setVideoUV(),
                    setTimeout((function() {
                        e._setVideoUV()
                    }
                    ), 50))
                }
            }, {
                key: "_pauseVideo",
                value: function() {
                    var e = this;
                    this._video && this._playing && (this._playing = !1,
                    J.a.killTweensOf(this.videoMaterial.uniforms.uVideoMix),
                    J.a.to(this.videoMaterial.uniforms.uVideoMix, {
                        value: 0,
                        duration: .4,
                        delay: .25,
                        ease: "cubic.out",
                        onComplete: function() {
                            e._video.pause(),
                            e.mesh.material = e.baseMaterial
                        }
                    }))
                }
            }, {
                key: "update",
                value: function(e, t) {
                    this._data && (1 === this._scaleVideoUV.x && this._setVideoUV(),
                    this.position.y = -this._data.ty / c.k.height * this._viewport.y,
                    this.material.uniforms.uProgress.value = this._data.progress)
                }
            }]),
            n
        }(De);
        function Nt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Gt = function(e) {
            Object(o.a)(n, e);
            var t = Nt(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                r = t.call(this, e),
                Object(l.a)(Object(a.a)(r)),
                r.viewport = new h.M(1,1),
                r.mouse = new h.M(0,0),
                r.velocity = new h.M(0,0),
                r.planes = [],
                r._init(),
                r.setSize(),
                c.c.on("homescroll:resized", r.setSize),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "start",
                value: function() {
                    var e = this;
                    c.e.sizes.forEach((function(t, n) {
                        if (n > 0) {
                            var i = n - 1;
                            e.planes[i] ? e.planes[i].reset(t) : (e.planes[i] = new Vt(e.scene,{
                                index: i,
                                data: t,
                                parent: e
                            }),
                            e.scene.add(e.planes[i]))
                        }
                    }
                    )),
                    this.setSize()
                }
            }, {
                key: "reset",
                value: function() {
                    this.planes.forEach((function(e) {
                        return e.reset()
                    }
                    ))
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = this
                      , t = c.k.aspect
                      , n = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, t)
                      , i = n.width
                      , r = n.height;
                    this.viewport.set(i, r),
                    c.e.sizes.forEach((function(t, n) {
                        if (n > 0) {
                            var i = n - 1;
                            e.planes[i] && e.planes[i].setData(t)
                        }
                    }
                    )),
                    this.planes.forEach((function(t) {
                        return t.setSize(e.viewport)
                    }
                    ))
                }
            }, {
                key: "getViewport",
                value: function() {
                    var e = c.k.aspect
                      , t = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, e)
                      , n = t.width
                      , i = t.height;
                    return this.viewport.set(n, i),
                    this.viewport
                }
            }, {
                key: "update",
                value: function(e, t) {
                    if (this.viewport && this.mouse) {
                        var n = Object(Ue.c)(c.h.client.norm.x, 0, 1, -.5, .5) * this.viewport.x
                          , i = Object(Ue.c)(c.h.client.norm.y, 0, 1, -.5, .5) * -this.viewport.y;
                        this.mouse.x += .16 * (n - this.mouse.x),
                        this.mouse.y += .16 * (i - this.mouse.y),
                        this.mouse.x = n,
                        this.mouse.y = i,
                        this.velocity.x += .1 * (c.h.velocity.x - this.velocity.x),
                        this.velocity.y += .1 * (c.h.velocity.y - this.velocity.y)
                    }
                    this.planes.forEach((function(n) {
                        return n.update(e, t)
                    }
                    ))
                }
            }, {
                key: "_init",
                value: function() {}
            }]),
            n
        }(De);
        function Ht(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Yt = function(e) {
            Object(o.a)(n, e);
            var t = Ht(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this, "home", {
                    postProcessing: !1,
                    physics: !1,
                    noBatcher: !0
                }))._renderer.setClearColor(16777215, 0),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t);
                    for (var i = 0, r = this._entities.length; i < r; i++) {
                        var a = this._entities[i];
                        a && a.setSize && a.setSize(e, t)
                    }
                    this.planesCtrl.setSize(e, t),
                    this._pRenderCanvas && (this._pRenderCanvas.width = e,
                    this._pRenderCanvas.height = t)
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this)
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createLights",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this._camera = new ue({
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this.background = new ke(this),
                    this.addEntity(this.background),
                    this.exp = new Bt(this),
                    this.addEntity(this.exp)
                }
            }, {
                key: "_createGUI",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                    this.pane && this.exp.initGUI(this.pane)
                }
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this),
                    this.planesCtrl = new Gt(this),
                    this.setSize()
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    var t = this;
                    clearTimeout(this._resetCamTo),
                    this.planesCtrl.start(),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e),
                    setTimeout((function() {
                        t.setSize()
                    }
                    ), 0),
                    setTimeout((function() {
                        t.setSize()
                    }
                    ), 1e3)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    var t = this;
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e),
                    setTimeout((function() {
                        t.planesCtrl.reset()
                    }
                    ), 300)
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    this.planesCtrl.update(e, t);
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t);
                    c.e.update()
                }
            }]),
            n
        }(mt)
          , Wt = "\nprecision highp float;\n#define GLSLIFY 1\nuniform vec3 uColor1;\nuniform float uRandom;\n// uniform float uNoise;\nvarying vec2 vUv;\n\nfloat random(vec2 n, float offset) {\n  return 0.5 - fract(sin(dot(n.xy + vec2( offset, 0. ), vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  float noise = random(vUv, uRandom);\n  vec3 color = uColor1;\n  gl_FragColor.rgb = color;\n  gl_FragColor.a = 1.;\n}\n";
        function Xt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var Kt = new h.M
          , $t = new h.M
          , qt = {
            value: 20
        }
          , Zt = {
            value: -.5
        }
          , Qt = {
            value: .7
        }
          , Jt = {
            value: .1
        }
          , en = function(e) {
            Object(o.a)(n, e);
            var t = Xt(n);
            function n(e, r) {
                var o, s = r.parent, u = r.emitHead, c = r.index, d = r.strength, f = r.noInteration;
                return Object(i.a)(this, n),
                (o = t.call(this, e))._parent = s,
                o._index = c,
                o._emitHead = u,
                o._viewport = new h.M,
                f && (o._noInteration = !0),
                o._prevMouse = new h.M,
                o._mouse = new h.M,
                o._attrUpdate = !1,
                o._coef = d || 1,
                Object(l.a)(Object(a.a)(o)),
                o._init(),
                o
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    if (this.mesh.geom2 && (this.mesh.geom2.attributes.position.copyArray(this.mesh.geometry.attributes.position.array),
                    this.mesh.updateMatrix(),
                    this.mesh.geom2.applyMatrix4(this.mesh.matrix),
                    this.mesh.geometry.attributes.offset.needsUpdate = !0,
                    this._el)) {
                        this._bbox = this._el.getBoundingClientRect(),
                        this._lastScrollY = this._parent.scrollY;
                        var e = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, c.k.aspect)
                          , t = e.width
                          , n = e.height;
                        this._viewport.set(t, n);
                        var i = c.k.width / t
                          , r = c.k.height / n;
                        this.cW = i,
                        this.cH = r,
                        this.scale.x = this._bbox.width / i,
                        this.scale.y = this._bbox.height / r,
                        On.isWebGL2 || (this.scale.y *= 2),
                        this.position.x = (-c.k.width / 2 + this._bbox.x) / i,
                        this.position.y = (c.k.height / 2 - this._bbox.y) / r,
                        this._y = this._bbox.y + this._lastScrollY
                    }
                }
            }, {
                key: "sync",
                value: function(e) {
                    this._el = e,
                    this.setSize()
                }
            }, {
                key: "out",
                value: function() {
                    J.a.to(this._material.uniforms.uAlpha, {
                        value: 0,
                        duration: .3,
                        ease: "linear",
                        overwrite: !0
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    clearTimeout(this._leaveTo),
                    this._entered = !1,
                    this.setSize(),
                    this.revealed = !1;
                    var e = this._material.uniforms
                      , t = e.uProgress
                      , n = e.uColorMix;
                    J.a.set(t, {
                        value: 0,
                        overwrite: !0
                    }),
                    J.a.set(n, {
                        value: 0,
                        overwrite: !0
                    })
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this;
                    if (this.cH || this.setSize(),
                    this.cH) {
                        var i = (c.k.height / 2 - this._y) / this.cH;
                        if (this.position.y = i + this._parent.scrollY / this.cH,
                        !this._noInteration) {
                            this._prevMouse.copy(this._mouse),
                            this._mouse.x = (c.h.client.x - c.k.width / 2) / this.cW,
                            this._mouse.y = (c.k.height / 2 - c.h.client.y) / this.cH;
                            for (var r = Qt.value, a = Jt.value, o = !1, s = this.mesh, u = s.geom2.attributes, l = u.position.array, h = s.geometry.attributes.offset, d = 0, f = u.position.count; d < f; d++) {
                                var v = l[3 * d] * this.scale.x + this.position.x
                                  , p = l[3 * d + 1] * this.scale.y + this.position.y
                                  , m = s.geometry.springs[d];
                                Kt.set(v, p),
                                $t.set(this._mouse.x, this._mouse.y);
                                var y = Kt.distanceTo($t)
                                  , _ = Kt.set(v - this._mouse.x, p - this._mouse.y)
                                  , g = h.array[2 * d + 0]
                                  , D = h.array[2 * d + 1]
                                  , b = 0
                                  , k = 0;
                                if (y < qt.value) {
                                    var w = -10 * Object(Ue.c)(y, qt.value, 0, 0, 1);
                                    b = _.x * Zt.value * w * this._coef,
                                    k = _.y * Zt.value * w * this._coef,
                                    o = !0
                                }
                                m.x = Object(Ue.b)(m.x, (b - g) * r, a),
                                m.y = Object(Ue.b)(m.y, (k - D) * r, a),
                                h.array[2 * d + 0] += m.x,
                                h.array[2 * d + 1] += m.y
                            }
                            o && (this._attrUpdate = !0,
                            clearTimeout(this._attrTo),
                            this._attrTo = setTimeout((function() {
                                n._attrUpdate = !1
                            }
                            ), 3e3)),
                            h.needsUpdate = this._attrUpdate
                        }
                    }
                }
            }, {
                key: "_init",
                value: function() {
                    var e = new h.x(1,1,100,1)
                      , t = new Float32Array(2 * e.attributes.position.count);
                    e.setAttribute("offset", new h.b(t,2)),
                    this._nb = e.attributes.position.count,
                    e.springs = [];
                    for (var n = 0, i = this._nb; n < i; n++)
                        e.springs.push(new h.N);
                    this._material = this._createMaterial({
                        transparent: !0,
                        vertexShader: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec2 offset;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vPos;\n\nuniform float uProgress;\nuniform float uTime;\n\n@import cmap\n\nvoid main() {\n  vUv = uv;\n\n  vec3 pos = position;\n  vPos = position;\n  \n  float progress2 = cmap(uProgress, 0., 1., 0., 1.2);\n  float infl = cmap(vUv.x, progress2 - .2, progress2, 0., 1.) * cmap(vUv.x, progress2, progress2 + .2, 1., 0.);\n  float introWave = sin(uTime * 2. + vUv.x * 20.) * infl;\n  // pos.x +=  offset.x * .01;\n  pos.y += introWave * 25. + offset.y;\n  // pos.z -=  offset.y * .3;\n  // pos.z += introWave * 20.;\n  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);\n\n  // mvPos.x += offset.y;\n  // mvPos.y += offset.y;\n  // mvPos.z += offset.y;\n  \n  gl_Position = projectionMatrix * mvPos;\n}\n",
                        fragmentShader: "#define GLSLIFY 1\nuniform vec3 uColor;\nuniform vec3 uHColor1;\nuniform vec3 uHColor2;\nuniform float uProgress;\nuniform float uAlpha;\nvarying vec2 vUv;\nvarying vec3 vPos;\n\n@import cmap\n\nvoid main() {\n  vec3 color = uColor;\n  // if(vWave < -0.1) color = mix(color, uHColor1, cmap(vWave, -.1, -.4, 0., 1.));\n  // else if(vWave > -0.1)  color = mix(color, uHColor2, cmap(vWave, .1, .4, 0., 1.));\n\n  // color = mix(color, uHColor1, min(1., abs(vOffset / 15. * uMouseColor)));\n\n  float pAlpha = cmap(uProgress, 0., .5, 0., 1.);\n  gl_FragColor.rgb = uColor;\n  float edges = 1.;\n  #ifdef FALLBACK\n  float eps = .6;\n  edges = smoothstep(1., 1. - eps, vUv.y) * smoothstep(0., eps, vUv.y);\n  #endif\n  gl_FragColor.a = pAlpha * step(vUv.x, uProgress) * uAlpha * edges;\n}",
                        uniforms: {
                            uColor: {
                                value: this._world.color3
                            },
                            uHColor1: {
                                value: this._world.hColor1
                            },
                            uHColor2: {
                                value: this._world.hColor2
                            },
                            uAlpha: {
                                value: 0
                            },
                            uMouseColor: {
                                value: c.l.isDarkMode ? 1 : 2
                            },
                            uColorMix: {
                                value: 0
                            },
                            uProgress: {
                                value: 0
                            }
                        }
                    }),
                    On.isWebGL2 || (this._material.defines.FALLBACK = ""),
                    this.mesh = new h.r(e,this._material),
                    this.add(this.mesh),
                    this.mesh.position.x = .5,
                    this.mesh.vertices = [],
                    this.mesh.geom2 = e.clone(),
                    c.c.on(this._emitHead + "animateIn", this.animateIn),
                    c.c.on(this._emitHead + "entered", this.onEnter),
                    c.c.on(this._emitHead + "leaved", this.onLeave),
                    c.c.on("darkmode:changed", this.onDarkModeChange),
                    this.createGUI()
                }
            }, {
                key: "createGUI",
                value: function() {
                    this.scene.pane && !window.lineAdded && (window.lineAdded = !0,
                    this.folder = this.scene.pane.addFolder({
                        title: "Line"
                    }),
                    this.folder.expanded = !1,
                    this.folder.addInput(Zt, "value", {
                        label: "coef",
                        min: -1.2,
                        max: 1.2,
                        step: .01
                    }),
                    this.folder.addInput(Qt, "value", {
                        label: "spring coef",
                        min: 0,
                        max: 5,
                        step: .01
                    }),
                    this.folder.addInput(Jt, "value", {
                        label: "spring lerp",
                        min: 0,
                        max: 1,
                        step: .01
                    }),
                    this.folder.addInput(qt, "value", {
                        label: "dist",
                        min: 0,
                        max: 100,
                        step: 1
                    }))
                }
            }, {
                key: "animateIn",
                value: function(e) {
                    var t = e.index
                      , n = e.aboutHead;
                    (this._index - 1 === t || 0 === this._index || n && 0 === this._index) && this.reveal()
                }
            }, {
                key: "reveal",
                value: function() {
                    if (!this.revealed) {
                        this.revealed = !0,
                        this.setSize();
                        var e = this._material.uniforms
                          , t = e.uProgress
                          , n = e.uColorMix
                          , i = e.uAlpha;
                        J.a.to(i, {
                            value: 1,
                            duration: .1,
                            ease: "linear",
                            overwrite: !0
                        }),
                        J.a.to(t, {
                            value: 1,
                            duration: 2,
                            ease: "expo.out"
                        });
                        var r = .4;
                        this._emitHead.includes("about") && this._index > 0 && (r += .4),
                        J.a.to(n, {
                            value: 1,
                            duration: 1.4,
                            delay: r,
                            ease: "linear"
                        })
                    }
                }
            }, {
                key: "onEnter",
                value: function() {}
            }, {
                key: "onLeave",
                value: function() {}
            }, {
                key: "onDarkModeChange",
                value: function(e) {
                    this.mesh.material.uniforms.uMouseColor.value = e ? 1 : 2
                }
            }]),
            n
        }(De)
          , tn = function() {
            function e(t, n) {
                var r = n.key
                  , a = n.emitHead
                  , o = n.offsetIndex;
                Object(i.a)(this, e),
                Object(l.a)(this),
                this.scene = t,
                this.offsetIndex = o || 0,
                this._key = r,
                this._lines = [],
                this._emitHead = a,
                this._init()
            }
            return Object(r.a)(e, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(e.prototype), "destroy", this).call(this)
                }
            }, {
                key: "reset",
                value: function() {
                    this._lines.forEach((function(e, t) {
                        e.reset()
                    }
                    ))
                }
            }, {
                key: "parseDOM",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e, n) {
                        t._lines[n] || (t._lines[n] = new en(t.scene,{
                            parent: t,
                            emitHead: t._emitHead,
                            index: n
                        }),
                        t.scene.add(t._lines[n])),
                        t._lines[n].sync(e)
                    }
                    ))
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = this;
                    clearTimeout(this._sizeTo),
                    this.offsetY = this.scrollY,
                    this._lines.forEach((function(e, t) {
                        e.setSize()
                    }
                    )),
                    this._sizeTo = setTimeout((function() {
                        e.offsetY = e.scrollY,
                        e._lines.forEach((function(e, t) {
                            e.setSize()
                        }
                        ))
                    }
                    ), 100)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    this._lines.forEach((function(n, i) {
                        n.update(e, t)
                    }
                    ))
                }
            }, {
                key: "scrollY",
                get: function() {
                    return c.l[this._key]
                }
            }, {
                key: "_init",
                value: function() {}
            }]),
            e
        }();
        function nn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var rn = function(e) {
            Object(o.a)(n, e);
            var t = nn(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                r = t.call(this, e),
                Object(l.a)(Object(a.a)(r)),
                r.emitHead = "archive-el:",
                r.scaleFactor = 1,
                r._init(),
                r.reset(),
                r.setSize(),
                r._data = [],
                r._loaded = !1,
                r
            }
            return Object(r.a)(n, [{
                key: "parseDOM",
                value: function() {
                    var e = this;
                    if (!this.parsed) {
                        var t = document.body.querySelectorAll(".archive-el");
                        t.length && (this.parsed = !0),
                        t.forEach((function(t, n) {
                            var i = t.getAttribute("data-image")
                              , r = i && "null" !== i
                              , a = {
                                isActive: r
                            };
                            r && (a.width = parseInt(t.getAttribute("data-width")),
                            a.height = parseInt(t.getAttribute("data-height")),
                            a.image = document.createElement("img"),
                            a.image.crossOrigin = "anonymous",
                            a.map = new h.H(a.image),
                            a.loaded = !1,
                            a.image.onload = function() {
                                a.map.needsUpdate = !0,
                                a.loaded = !0
                            }
                            ,
                            a.image.src = i),
                            e._data[n] = a
                        }
                        ))
                    }
                }
            }, {
                key: "reset",
                value: function() {
                    clearTimeout(this._inTo);
                    var e = this.material.uniforms.uAlpha;
                    J.a.set(e, {
                        value: 0
                    }),
                    J.a.set(this.position, {
                        z: -40
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.aspect
                      , t = ce(this.scene.camera, this.scene.camera.position.z + 20, e);
                    this.viewport = t,
                    this.position.z = -20
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this.viewport
                      , i = n.width
                      , r = n.height
                      , a = c.h.client.x * i / c.k.width - i / 2
                      , o = r - c.h.client.y * r / c.k.height - r / 2;
                    this.position.x += .12 * (a - this.position.x),
                    this.position.y += .12 * (o - this.position.y),
                    this.mouseVel.lerp(c.h.velocity, .1)
                }
            }, {
                key: "_init",
                value: function() {
                    var e = new h.x(1,1,10,30);
                    this.mouseVel = new h.M,
                    this.material = this._createMaterial({
                        transparent: !0,
                        vertexShader: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec3 offset;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\n\nuniform float uProgress;\nuniform vec2 uMouseVelocity;\nuniform float uTime;\n\n@import cmap\n\nvoid main() {\n  vUv = uv;\n\n  float dist = distance(vec2(.5), vUv);\n\n  vec3 pos = position;\n  pos.x -= uMouseVelocity.x * dist * .01;\n  pos.y += uMouseVelocity.y * dist * .03;\n  pos.z -= length(uMouseVelocity) * dist * .2;\n\n  \n  // pos.y += introWave * 25. + offset.y;\n  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);\n  \n  gl_Position = projectionMatrix * mvPos;\n}\n",
                        fragmentShader: "#define GLSLIFY 1\nuniform float uAlpha;\nuniform float uBaseAlpha;\nuniform sampler2D tMap;\nvarying vec2 vUv;\nvoid main() {\n  vec4 texel = texture2D(tMap, vUv);\n\n  gl_FragColor = texel;\n  gl_FragColor.a *= uBaseAlpha * uAlpha;\n}\n",
                        uniforms: {
                            uBaseAlpha: {
                                value: (c.l.isDarkMode,
                                .5)
                            },
                            uMouseVelocity: {
                                value: this.mouseVel
                            },
                            tMap: {
                                value: null
                            }
                        }
                    }),
                    this.mesh = new h.r(e,this.material),
                    this.mesh.position.z = -1,
                    this.add(this.mesh),
                    c.c.on(this.emitHead + "entered", this.onEnter),
                    c.c.on(this.emitHead + "leaved", this.onLeave),
                    c.c.on("archive:list-out", this._animateOut),
                    c.c.on("darkmode:changed", this.onDarkModeChange)
                }
            }, {
                key: "onEnter",
                value: function(e) {
                    var t = e.index;
                    this._data[t] && (this._entered = !0,
                    this._data[t].loaded ? this._animateIn(this._data[t]) : this._animateOut())
                }
            }, {
                key: "onLeave",
                value: function() {
                    this._entered = !1
                }
            }, {
                key: "onDarkModeChange",
                value: function(e) {
                    J.a.to(this.material.uniforms.uBaseAlpha, {
                        value: c.l.isDarkMode ? .5 : .25,
                        duration: .3
                    })
                }
            }, {
                key: "_animateIn",
                value: function(e) {
                    var t = this;
                    clearTimeout(this._inTo),
                    this._inTo = setTimeout((function() {
                        var n = t.material.uniforms.uAlpha;
                        J.a.set(n, {
                            value: 0,
                            overwrite: !0
                        }),
                        t.material.uniforms.tMap.value = e.map,
                        J.a.to(n, {
                            value: 1,
                            duration: .2
                        }),
                        J.a.set(t.position, {
                            z: -30,
                            overwrite: !0
                        }),
                        J.a.to(t.position, {
                            z: -20,
                            duration: .4,
                            ease: "cubic.out"
                        }),
                        t.scale.y = .35 * t.viewport.height,
                        t.scale.x = t.scale.y * e.width / e.height;
                        var i = e.width / e.height;
                        i < .9 && (t.scale.x *= 1 / i,
                        t.scale.y *= 1 / i)
                    }
                    ), 200)
                }
            }, {
                key: "_animateOut",
                value: function() {
                    clearTimeout(this._inTo);
                    var e = this.material.uniforms.uAlpha;
                    J.a.to(e, {
                        value: 0,
                        duration: .2
                    }),
                    J.a.to(this.position, {
                        z: -40,
                        duration: .3,
                        ease: "cubic.out"
                    })
                }
            }]),
            n
        }(De);
        function an(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var on = function(e) {
            Object(o.a)(n, e);
            var t = an(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                e = t.call(this, "about", {
                    postProcessing: !1,
                    physics: !1,
                    noBatcher: !0
                }),
                Object(l.a)(Object(a.a)(e)),
                e._renderer.setClearColor(16777215, 0),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t);
                    var i = ce(this.camera, this.camera.position.z + 30, e / t);
                    this.usePerspective ? (this._background.position.z = -30,
                    this._background.scale.set(i.width, i.height, 1)) : (this._background.scale.set(e, t, 1),
                    this._background.position.x = e / 2,
                    this._background.position.y = -t / 2);
                    for (var r = 0, a = this._entities.length; r < a; r++) {
                        var o = this._entities[r];
                        o && o.setSize && o.setSize(e, t)
                    }
                    this._lineCtrl.setSize(e, t)
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this),
                    this.viewport = new h.M
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this.usePerspective = !0,
                    this._camera = new ue({
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this._bgMaterial = new h.B({
                        vertexShader: g,
                        fragmentShader: Wt,
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            },
                            uNoise: {
                                value: c.l.isDarkMode ? .05 * 3 : .6
                            },
                            uRandom: this._world.uniforms.uRandom
                        }
                    }),
                    this._background = new h.r(this._world.GEOMS.plane,this._bgMaterial),
                    this.add(this._background),
                    c.b.isDesktop && (this._preview = new rn(this),
                    this.addEntity(this._preview)),
                    this._lineCtrl = new tn(this,{
                        key: "aboutScrollY",
                        emitHead: "about-el:",
                        offsetIndex: 1
                    }),
                    c.c.on("about-scene:init", this._onInit),
                    c.c.on("darkmode:changed", this._onDarkModeChange),
                    this._onInit()
                }
            }, {
                key: "_createGUI",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                    this.pane
                }
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this)
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    clearTimeout(this._to),
                    clearTimeout(this._resetCamTo),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    clearTimeout(this._to),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e),
                    this._preview && this._preview.reset(),
                    this._lineCtrl.reset()
                }
            }, {
                key: "_onInit",
                value: function(e) {
                    var t, n = this;
                    t = e ? e.els : document.body.querySelectorAll(".about-line"),
                    clearTimeout(this._to),
                    0 === t.length ? this._to = setTimeout((function() {
                        n._onInit()
                    }
                    ), 100) : (this._preview && this._preview.parseDOM(),
                    this._lineCtrl.parseDOM(t)),
                    setTimeout((function() {
                        n._lineCtrl.setSize()
                    }
                    ), 100),
                    this._onUpdate = this._onUpdate.bind(this)
                }
            }, {
                key: "_onDarkModeChange",
                value: function(e) {
                    this._background.material.uniforms.uNoise.value = e ? .05 * 3 : .6
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    this._lineCtrl.render(e, t);
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t)
                }
            }]),
            n
        }(mt);
        function sn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var un = function(e) {
            Object(o.a)(n, e);
            var t = sn(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                e = t.call(this, "archive", {
                    postProcessing: !1,
                    physics: !1,
                    noBatcher: !0
                }),
                Object(l.a)(Object(a.a)(e)),
                e._renderer.setClearColor(16777215, 0),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t);
                    var i = ce(this.camera, this.camera.position.z + 30, e / t);
                    this.usePerspective ? (this._background.position.z = -30,
                    this._background.scale.set(i.width, i.height, 1)) : (this._background.scale.set(e, t, 1),
                    this._background.position.x = e / 2,
                    this._background.position.y = -t / 2);
                    for (var r = 0, a = this._entities.length; r < a; r++) {
                        var o = this._entities[r];
                        o && o.setSize && o.setSize(e, t)
                    }
                    this._lineCtrl.setSize(e, t)
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this),
                    this.viewport = new h.M
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this.usePerspective = !0,
                    this._camera = new ue({
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this._bgMaterial = new h.B({
                        vertexShader: g,
                        fragmentShader: Wt,
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            },
                            uNoise: {
                                value: c.l.isDarkMode ? .05 * 3 : .6
                            },
                            uRandom: this._world.uniforms.uRandom
                        }
                    }),
                    this._background = new h.r(this._world.GEOMS.plane,this._bgMaterial),
                    this.add(this._background),
                    c.b.isDesktop && (this._preview = new rn(this),
                    this.addEntity(this._preview)),
                    this._lineCtrl = new tn(this,{
                        key: "archiveScrollY",
                        emitHead: "archive-el:"
                    }),
                    c.c.on("archive-scene:init", this._onInit),
                    c.c.on("darkmode:changed", this._onDarkModeChange),
                    this._onInit()
                }
            }, {
                key: "_createGUI",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                    this.pane
                }
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this)
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    clearTimeout(this._to),
                    clearTimeout(this._resetCamTo),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    clearTimeout(this._to),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e),
                    this._preview && this._preview.reset(),
                    this._lineCtrl.reset()
                }
            }, {
                key: "_onInit",
                value: function(e) {
                    var t, n = this;
                    t = e ? e.els : document.body.querySelectorAll(".archive-line"),
                    clearTimeout(this._to),
                    0 === t.length ? this._to = setTimeout((function() {
                        n._onInit()
                    }
                    ), 100) : (this._preview && this._preview.parseDOM(),
                    this._lineCtrl.parseDOM(t)),
                    setTimeout((function() {
                        n._lineCtrl.setSize()
                    }
                    ), 100),
                    this._onUpdate = this._onUpdate.bind(this)
                }
            }, {
                key: "_onDarkModeChange",
                value: function(e) {
                    this._background.material.uniforms.uNoise.value = e ? .05 * 3 : .6
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    this._lineCtrl.render(e, t);
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t)
                }
            }]),
            n
        }(mt);
        function cn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var ln = function(e) {
            Object(o.a)(n, e);
            var t = cn(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this, "work", {
                    postProcessing: !1,
                    physics: !1,
                    noBatcher: !0
                }))._renderer.setClearColor(16777215, 0),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, t, i),
                    clearTimeout(this._sizeTo),
                    this.offsetY = this.scrollY,
                    this._lines.forEach((function(e, t) {
                        e.setSize()
                    }
                    )),
                    this._sizeTo = setTimeout((function() {
                        e.offsetY = e.scrollY,
                        e._lines.forEach((function(e, t) {
                            e.setSize()
                        }
                        ))
                    }
                    ), 100),
                    this.background.setSize(t, i)
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this),
                    this.offsetIndex = 0,
                    this._lines = [],
                    this.usePerspective = !0
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this),
                    c.c.on("work-scene:reset", this._sceneReset),
                    c.c.on("work-scene:changed", this._sceneChange),
                    c.c.on("work-scene:leave", this._sceneLeave),
                    c.c.on("work-scene:animateLine", this._animateLine)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createLights",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this._camera = new ue({
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this.background = new ke(this),
                    this.addEntity(this.background),
                    this._lines.length || this._addLines()
                }
            }, {
                key: "_addLines",
                value: function() {
                    for (var e = 0; e < 2; e++) {
                        var t = !1;
                        c.b.isDesktop && "safari" === c.b.browserName && (t = !0);
                        var n = new en(this,{
                            parent: this,
                            emitHead: "work-line:",
                            index: e,
                            strength: .5,
                            noInteration: t
                        });
                        this._lines.push(n),
                        this.add(n)
                    }
                }
            }, {
                key: "_createGUI",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                    this.pane
                }
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this)
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    clearTimeout(this._resetCamTo),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e)
                }
            }, {
                key: "_sceneChange",
                value: function() {
                    var e = this;
                    this._lines.forEach((function(t, n) {
                        e._lines[n].out(t)
                    }
                    ))
                }
            }, {
                key: "_sceneReset",
                value: function(e) {
                    var t = this
                      , n = e.lines;
                    this._lines.length || this._addLines(),
                    n.forEach((function(e, n) {
                        t._lines[n].sync(e),
                        t._lines[n].reset(e)
                    }
                    )),
                    setTimeout((function() {
                        t._leaved = !1
                    }
                    ), 3e3)
                }
            }, {
                key: "_sceneLeave",
                value: function(e) {
                    this._leaved = !0,
                    clearTimeout(this._resetTo)
                }
            }, {
                key: "_animateLine",
                value: function(e) {
                    var t = e.index;
                    this._lines[t].setSize(),
                    this._lines[t].reset(),
                    this._lines[t].reveal()
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    c.l.caseScroll && (c.l.caseScroll.render(),
                    this._leaved || this._lines.forEach((function(n) {
                        return n.update(e, t)
                    }
                    )));
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t)
                }
            }, {
                key: "scrollY",
                get: function() {
                    return this._leaved ? this.lastY || 0 : (this.lastY = c.l.caseScrollY,
                    c.l.caseScrollY)
                }
            }]),
            n
        }(mt);
        function hn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var dn = function(e) {
            Object(o.a)(n, e);
            var t = hn(n);
            function n() {
                var e;
                return Object(i.a)(this, n),
                (e = t.call(this, "blank", {
                    postProcessing: !1,
                    physics: !1,
                    noBatcher: !0
                }))._renderer.setClearColor(16777215, 0),
                e
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                    Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t);
                    for (var i = 0, r = this._entities.length; i < r; i++) {
                        var a = this._entities[i];
                        a && a.setSize && a.setSize(e, t)
                    }
                }
            }, {
                key: "_init",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this)
                }
            }, {
                key: "_bind",
                value: function() {
                    Object(l.a)(this)
                }
            }, {
                key: "_unbind",
                value: function() {}
            }, {
                key: "_createLights",
                value: function() {}
            }, {
                key: "_createCameras",
                value: function() {
                    this._camera = new ue({
                        isDefault: !0
                    }),
                    this._camera.position.set(0, 0, 100),
                    this._camera.lookAt(0, 0, 0),
                    this._camera.positionTarget = this._camera.position.clone(),
                    this.addCamera(this._camera)
                }
            }, {
                key: "_createPostProcessing",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                }
            }, {
                key: "_createEntities",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                    this.background = new ke(this),
                    this.addEntity(this.background)
                }
            }, {
                key: "_createGUI",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                    this.pane
                }
            }, {
                key: "_afterCreate",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this)
                }
            }, {
                key: "onSwap",
                value: function(e) {
                    clearTimeout(this._resetCamTo),
                    Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e)
                }
            }, {
                key: "onSwapLeave",
                value: function(e) {
                    Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e)
                }
            }, {
                key: "_onUpdate",
                value: function(e, t) {
                    for (var n = 0, i = this._entities.length; n < i; n++)
                        this._entities[n].update(e, t)
                }
            }]),
            n
        }(mt);
        function fn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var vn = function(e) {
            Object(o.a)(n, e);
            var t = fn(n);
            function n(e) {
                var r;
                return Object(i.a)(this, n),
                r = t.call(this, e),
                Object(l.a)(Object(a.a)(r)),
                r._init(),
                r.position.z = -100,
                c.c.on("preloader:progress", r._onProgress),
                c.c.on("darkmode:changed", r._onDarkModeChange),
                r.setSize(),
                r
            }
            return Object(r.a)(n, [{
                key: "destroy",
                value: function() {
                    Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = c.k.aspect
                      , t = ce(this.scene.camera, this.scene.camera.position.z - this.position.z, e)
                      , n = t.width
                      , i = t.height;
                    this.scale.set(n, i, 1),
                    this.updateMatrix()
                }
            }, {
                key: "update",
                value: function(e, t) {}
            }, {
                key: "_init",
                value: function() {
                    this.geometry = On.GEOMS.plane,
                    this.material = this._createMaterial({
                        vertexShader: g,
                        fragmentShader: "#define GLSLIFY 1\nuniform float uTime;\nuniform float uRandom;\nuniform float uNoise;\nuniform float uMix;\nuniform vec3 uColor1;\nuniform vec3 uColor2;\nuniform float uProgress;\nvarying vec2 vUv;\n\n@import random\n\nvoid main() {\n\n  float noise = random(vUv, uRandom);\n  // float noiseP = 1. + .3 * uProgress; \n  vec3 color = mix(mix(uColor1, uColor2, uMix), uColor1, step(vUv.x, uProgress));\n  // gl_FragColor.rgb = mix(color, vec3(.5), noise * uNoise);\n  gl_FragColor.rgb = color;\n  gl_FragColor.a = 1.;\n}\n",
                        uniforms: {
                            uColor1: {
                                value: this._world.color1
                            },
                            uColor2: {
                                value: this._world.hColor2
                            },
                            uNoise: {
                                value: c.l.isDarkMode ? .2 : .3 * 1.5
                            },
                            uMix: {
                                value: c.l.isDarkMode ? .05 : .3
                            },
                            uRandom: this._world.uniforms.uRandom,
                            uVelocity: c.e.lerpedVelocity,
                            uProgress: {
                                value: 0
                            }
                        }
                    }),
                    this.mesh = new h.r(this.geometry,this.material),
                    this.add(this.mesh),
                    this.matrixAutoUpdate = !1
                }
            }, {
                key: "_onProgress",
                value: function(e) {
                    this.material.uniforms.uProgress.value = e
                }
            }, {
                key: "_onDarkModeChange",
                value: function(e) {
                    J.a.to(this.material.uniforms.uNoise, {
                        value: e ? .05 * 3 : .3 * 3,
                        duration: .4
                    })
                }
            }]),
            n
        }(De);
        function pn(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var mn = {
            home: Yt,
            archive: un,
            about: on,
            work: ln,
            loader: function(e) {
                Object(o.a)(n, e);
                var t = pn(n);
                function n() {
                    var e;
                    return Object(i.a)(this, n),
                    (e = t.call(this, "loader", {
                        postProcessing: !1,
                        physics: !1,
                        noBatcher: !0
                    }))._renderer.setClearColor(16777215, 0),
                    e
                }
                return Object(r.a)(n, [{
                    key: "destroy",
                    value: function() {
                        return Object(p.a)(Object(u.a)(n.prototype), "destroy", this).call(this)
                    }
                }, {
                    key: "setSize",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.k.width
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.k.height;
                        Object(p.a)(Object(u.a)(n.prototype), "setSize", this).call(this, e, t);
                        for (var i = 0, r = this._entities.length; i < r; i++) {
                            var a = this._entities[i];
                            a && a.setSize && a.setSize(e, t)
                        }
                    }
                }, {
                    key: "_init",
                    value: function() {
                        Object(p.a)(Object(u.a)(n.prototype), "_init", this).call(this)
                    }
                }, {
                    key: "_bind",
                    value: function() {
                        Object(l.a)(this)
                    }
                }, {
                    key: "_unbind",
                    value: function() {}
                }, {
                    key: "_createLights",
                    value: function() {}
                }, {
                    key: "_createCameras",
                    value: function() {
                        this._camera = new ue({
                            isDefault: !0
                        }),
                        this._camera.position.set(0, 0, 100),
                        this._camera.lookAt(0, 0, 0),
                        this._camera.positionTarget = this._camera.position.clone(),
                        this.addCamera(this._camera)
                    }
                }, {
                    key: "_createPostProcessing",
                    value: function() {
                        Object(p.a)(Object(u.a)(n.prototype), "_createPostProcessing", this).call(this)
                    }
                }, {
                    key: "_createEntities",
                    value: function() {
                        Object(p.a)(Object(u.a)(n.prototype), "_createEntities", this).call(this),
                        this.background = new vn(this),
                        this.addEntity(this.background)
                    }
                }, {
                    key: "_createGUI",
                    value: function() {
                        Object(p.a)(Object(u.a)(n.prototype), "_createGUI", this).call(this),
                        this.pane
                    }
                }, {
                    key: "_afterCreate",
                    value: function() {
                        Object(p.a)(Object(u.a)(n.prototype), "_afterCreate", this).call(this)
                    }
                }, {
                    key: "onSwap",
                    value: function(e) {
                        clearTimeout(this._resetCamTo),
                        Object(p.a)(Object(u.a)(n.prototype), "onSwap", this).call(this, e)
                    }
                }, {
                    key: "onSwapLeave",
                    value: function(e) {
                        Object(p.a)(Object(u.a)(n.prototype), "onSwapLeave", this).call(this, e)
                    }
                }, {
                    key: "_onUpdate",
                    value: function(e, t) {
                        for (var n = 0, i = this._entities.length; n < i; n++)
                            this._entities[n].update(e, t)
                    }
                }]),
                n
            }(mt),
            blank: dn,
            render: X
        }
          , yn = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n  gl_FragColor = vec4(vUv.x, vUv.y, 0.3, 1.);\n}\n";
        function _n(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else
                    n = i.apply(this, arguments);
                return Object(s.a)(this, n)
            }
        }
        var gn = function(e) {
            Object(o.a)(n, e);
            var t = _n(n);
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object(i.a)(this, n),
                e.vertexShader = g,
                e.fragmentShader = yn,
                t.call(this, e)
            }
            return Object(r.a)(n, [{
                key: "update",
                value: function(e, t) {}
            }]),
            n
        }(F)
          , Dn = {}
          , bn = function() {
            function e(t) {
                Object(i.a)(this, e),
                window.sceneDebug = this,
                this.scene = null,
                t = t.toLowerCase(),
                this._getData(t)
            }
            return Object(r.a)(e, [{
                key: "_getData",
                value: function(e) {
                    var t = this
                      , n = !1;
                    for (var i in mn) {
                        var r = i.toLowerCase();
                        if (r === e) {
                            n = {
                                key: r,
                                id: i,
                                class: mn[i],
                                type: "scene"
                            };
                            break
                        }
                    }
                    if (!n)
                        for (var a in Dn) {
                            var o = a.toLowerCase();
                            if (o === e) {
                                n = {
                                    key: o,
                                    id: a,
                                    class: Dn[a],
                                    type: "entity"
                                };
                                break
                            }
                        }
                    n && (this.data = n,
                    "scene" === n.type ? On.initialized.then((function() {
                        On.scenes.change(n.key)
                    }
                    )) : On.initialized.then((function() {
                        On.scenes.change("entityDebug").then((function(e) {
                            t.entity = new n.class(e),
                            e.addDebugEntity(t.entity)
                        }
                        ))
                    }
                    )))
                }
            }]),
            e
        }()
          , kn = Object(K.c)("World", "#40bfc1", !1)
          , wn = Object(K.c)("World", K.a, !1)
          , xn = function() {
            function e() {
                Object(i.a)(this, e),
                c.b.isMobile || (Object(l.a)(this),
                this.initialized = Promise.create(),
                this.raycaster = new h.C,
                this.scene = null,
                this.loading = !0,
                this.textureLoader = new h.I,
                this.uniforms = {
                    uRandom: {
                        value: 0
                    },
                    uTime: {
                        value: 0
                    },
                    uResolution: {
                        value: new h.M
                    }
                },
                this.GEOMS = {
                    quad: Ke(),
                    plane: new h.x(1,1,1,1),
                    planeHigh: new h.x(1,1,40,40),
                    sphere: new h.F(1,32,32),
                    box: new h.a(1,1,1)
                },
                this.color1 = c.l.color1,
                this.color2 = c.l.color2,
                this.color3 = c.l.color3,
                this.hColor1 = new h.f(13455471),
                this.hColor2 = new h.f(6712741),
                this.EMPYT_MAP = new h.H,
                this._pauseNow = 0,
                this._pauseDuration = 0,
                this._paused = !1,
                c.k.addResize(this.setSize),
                this.setSize())
            }
            return Object(r.a)(e, [{
                key: "_createGUI",
                value: function() {}
            }, {
                key: "init",
                value: function(e) {
                    kn("Initialized"),
                    this.renderer = new v,
                    this.isWebGL2 = this.renderer.capabilities.isWebGL2,
                    this.MATS = {
                        UV: new gn,
                        normal: new h.s
                    },
                    this.scenes = new re(this,mn),
                    e && e.appendChild(this.renderer.domElement),
                    c.i.remove(this._pauseUpdate),
                    c.i.add(this._update),
                    this.initialized.resolve()
                }
            }, {
                key: "pause",
                value: function() {
                    this._paused || (this._pauseNow = Date.now(),
                    this._paused = !0,
                    c.i.remove(this._update),
                    c.i.add(this._pauseUpdate))
                }
            }, {
                key: "resume",
                value: function() {
                    this._paused && (this._paused = !1,
                    this._pauseDuration += Date.now() - this._pauseNow,
                    c.i.remove(this._pauseUpdate),
                    c.i.add(this._update))
                }
            }, {
                key: "setSize",
                value: function() {
                    var e = this
                      , t = c.k.width
                      , n = c.k.height
                      , i = c.m.DPR;
                    this.uniforms.uResolution.value.set(t * i, n * i),
                    setTimeout((function() {
                        e.uniforms.uResolution.value.set(c.k.width * i, c.k.height * i)
                    }
                    ), 100)
                }
            }, {
                key: "destroy",
                value: function() {
                    kn("Destroyed"),
                    c.i.remove(this._update),
                    this.scenes.destroy(),
                    this.renderer.destroy()
                }
            }, {
                key: "initDebugScene",
                value: function(e) {
                    this.sceneDebug = new bn(e),
                    this.sceneDebug.data ? kn("Scene debug created for", e) : wn("Scene/Entity: '".concat(e, "' does not exist in manifest"))
                }
            }, {
                key: "toggleCursor",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pointer"
                      , t = document.body.classList
                      , n = ["pointer", "grab", "grabbing"];
                    if (e !== this._lastType) {
                        this._lastType = e;
                        for (var i = 0, r = n.length; i < r; i++)
                            e === n[i] ? t.add("is-cursor-".concat(n[i])) : t.remove("is-cursor-".concat(n[i]))
                    }
                }
            }, {
                key: "_update",
                value: function(e, t) {
                    t -= this._pauseDuration,
                    this.uniforms.uTime.value = .001 * t,
                    this.scenes.update(e, t),
                    this.uniforms.uRandom.value = Math.random()
                }
            }, {
                key: "_pauseUpdate",
                value: function(e, t) {
                    t -= this._pauseDuration,
                    this.uniforms.uTime.value = t,
                    this.scenes.pauseUpdate(e, t)
                }
            }, {
                key: "canvas",
                get: function() {
                    return this.renderer.domElement
                }
            }]),
            e
        }()
          , On = t.a = new xn
    },
    46: function(e, t, n) {
        "use strict";
        var i = n(16)
          , r = n(3)
          , a = n(4)
          , o = (n(15),
        n(24),
        n(26),
        n(27),
        n(32),
        n(34),
        n(49))
          , s = n(174)
          , u = n(6)
          , c = n(1);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    Object(i.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = new (function() {
            function e() {
                Object(r.a)(this, e),
                Object(u.a)(this),
                this._autoOpen = Object(u.c)("debug"),
                this.container = document.createElement("div"),
                this.container.classList.add("debug-tools"),
                this._autoOpen && document.body.appendChild(this.container),
                this._autoOpen && this.container.classList.add("is-visible"),
                this._bind(),
                this.create("Debug")
            }
            return Object(a.a)(e, [{
                key: "create",
                value: function(e) {
                    if (window.pane && this.destroy(),
                    this.name = e,
                    Object(u.c)("pane") || Object(u.c)("debug"))
                        return window.pane = new s.Pane({
                            title: "---- ".concat(e, " ----")
                        }),
                        this.pane = window.pane,
                        window.pane
                }
            }, {
                key: "destroy",
                value: function(e) {
                    e && e !== this.name || this.pane && (window.pane.dispose(),
                    window.pane = null)
                }
            }, {
                key: "addVec",
                value: function(e, t, n) {
                    if (t instanceof c.M) {
                        var i = {
                            vec: t
                        };
                        e.addInput(i, "vec", h(h({}, n), {}, {
                            label: n.label
                        }))
                    } else
                        ["x", "y", "z", "w"].forEach((function(i) {
                            void 0 !== t[i] && e.addInput(t, i, h(h({}, n), {}, {
                                label: "".concat(n.label, " ").concat(i)
                            }))
                        }
                        ))
                }
            }, {
                key: "parseMaterial",
                value: function(e, t, n, i) {}
            }, {
                key: "_bind",
                value: function() {
                    o.a.addUp(this._onKeyUp)
                }
            }, {
                key: "_unbind",
                value: function() {
                    o.a.removeUp(this._onKeyUp)
                }
            }, {
                key: "_toggle",
                value: function() {
                    this.container && this.container.classList.toggle("is-visible")
                }
            }, {
                key: "_onKeyUp",
                value: function(e, t) {
                    o.a.isDown("shift") && "g" === t && this._toggle()
                }
            }]),
            e
        }());
        window.pane = null,
        window.gui = d,
        t.a = d
    },
    49: function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(4)
          , a = (n(55),
        n(48),
        n(85))
          , o = n.n(a)
          , s = n(6)
          , u = n(23)
          , c = n(14)
          , l = {
            layouts: {
                qwerty: {
                    up: [38, 87],
                    down: [40, 83],
                    left: [37, 65],
                    right: [39, 68]
                },
                azerty: {
                    up: [38, 90],
                    down: [40, 83],
                    left: [37, 81],
                    right: [39, 68]
                }
            }
        }
          , h = function() {
            function e() {
                Object(i.a)(this, e),
                this._binded = !1,
                this._isQwerty = !0,
                this.pressedKeys = {},
                Object(s.a)(this),
                this.bind()
            }
            return Object(r.a)(e, [{
                key: "bind",
                value: function() {
                    this._binded || (window.addEventListener("keydown", this._handleKeyDown, !1),
                    window.addEventListener("keyup", this._handleKeyUp, !1),
                    c.a.on(u.a.BLURRED, this._onWindowBlur),
                    this._binded = !0)
                }
            }, {
                key: "unbind",
                value: function() {
                    this._binded && (window.removeEventListener("keydown", this._handleKeyDown, !1),
                    window.removeEventListener("keyup", this._handleKeyUp, !1),
                    c.a.off(u.a.BLURRED, this._onWindowBlur),
                    this._binded = !1)
                }
            }, {
                key: "isDown",
                value: function(e) {
                    for (var t = !1, n = this._getKeyLayout(e), i = 0, r = n.length; i < r; i++) {
                        var a = n[i];
                        if (this.pressedKeys[a]) {
                            t = !0;
                            break
                        }
                    }
                    return t
                }
            }, {
                key: "addDown",
                value: function(t) {
                    c.a.on(e.DOWNED, t)
                }
            }, {
                key: "removeDown",
                value: function(t) {
                    c.a.off(e.DOWNED, t)
                }
            }, {
                key: "addUp",
                value: function(t) {
                    c.a.on(e.UPPED, t)
                }
            }, {
                key: "removeUp",
                value: function(t) {
                    c.a.off(e.UPPED, t)
                }
            }, {
                key: "_resetInputs",
                value: function() {
                    this.pressedKeys = {}
                }
            }, {
                key: "_getKeyLayout",
                value: function(e) {
                    return "number" == typeof e ? this._keyCodeToKeyName(e) : "string" == typeof e ? this._keyNameToKeyCodes(e) : Object(s.e)(e) && void 0 !== e.keyCode ? this._keyCodeToKeyName(e.keyCode) : void 0
                }
            }, {
                key: "_keyCodeToKeyName",
                value: function(e) {
                    var t = o()(e)
                      , n = this._isQwerty ? "qwerty" : "azerty"
                      , i = l.layouts[n];
                    for (var r in i) {
                        if (i[r].includes(e)) {
                            t = r;
                            break
                        }
                    }
                    return t
                }
            }, {
                key: "_keyNameToKeyCodes",
                value: function(e) {
                    var t = o()(e)
                      , n = this._isQwerty ? "qwerty" : "azerty"
                      , i = l.layouts[n][e];
                    return i && (t = i),
                    Object(s.d)(t) ? t : [t]
                }
            }, {
                key: "_handleKeyDown",
                value: function(t) {
                    this.downNow = (new Date).getTime(),
                    this.pressedKeys[t.keyCode] = !0;
                    var n = this._getKeyLayout(t)
                      , i = o()(t);
                    c.a.emit(e.DOWNED, t, n, i)
                }
            }, {
                key: "_handleKeyUp",
                value: function(t) {
                    var n = (new Date).getTime();
                    this.pressDuration = n - this.downNow,
                    delete this.pressedKeys[t.keyCode];
                    var i = this._getKeyLayout(t)
                      , r = o()(t);
                    c.a.emit(e.UPPED, t, i, r)
                }
            }, {
                key: "_onWindowBlur",
                value: function() {
                    this._resetInputs()
                }
            }, {
                key: "_onVisibilityChange",
                value: function(e) {
                    !1 === e && this._resetInputs()
                }
            }]),
            e
        }();
        h.UPPED = "keyboard_upped",
        h.DOWNED = "keyboard_downed",
        t.a = new h
    },
    57: function(e, t, n) {
        "use strict";
        var i = n(102)
          , r = n(3)
          , a = n(4)
          , o = (n(21),
        n(15),
        n(138))
          , s = n(14)
          , u = (n(127),
        n(17))
          , c = n(25)
          , l = n(6)
          , h = {
            preload: [],
            common: [{
                id: "ice-map",
                url: "/images/map/ice.jpg"
            }],
            about: []
        }
          , d = Object(c.c)("Loader", "#5f6769", !1)
          , f = Object(c.c)("Loader", c.a, !1)
          , v = Object(l.c)("loaderDebug") || Object(l.c)("verbose")
          , p = function() {
            function e() {
                Object(r.a)(this, e),
                this.PROGRESSED = "Loader_progressed",
                this.LOADED = "Loader_loaded",
                this.COMPLETED = "Loader_completed",
                this.HIDDEN = "Loader_hidden",
                Object(l.a)(this),
                this.loaded = Promise.create(),
                this.glHiddenPromise = Promise.create(),
                this.hiddenPromise = Promise.create(),
                this.loadCount = 0,
                this.loadPromises = [],
                this.resources = {},
                window.Loader = this
            }
            return Object(a.a)(e, [{
                key: "preload",
                value: function() {
                    var e = this;
                    this.preloading = !0,
                    this.load("preload").then((function() {
                        e.preloading = !1,
                        e.load(e.afterPreloadQueue ? e.afterPreloadQueue : null, e.afterPreloadDynamic)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function() {
                    var e, t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (this.preloading && "preload" !== n)
                        return this.afterPreloadQueue = n,
                        void (this.afterPreloadDynamic = r);
                    if (Array.isArray(n)) {
                        e = [];
                        for (var a = 0, s = n.length; a < s; a++)
                            e.concat(h[n])
                    } else
                        e = h[n] || [];
                    var u = "preload" === n ? [] : h.common
                      , c = [].concat(Object(i.a)(u), Object(i.a)(e), Object(i.a)(r))
                      , l = Promise.create();
                    this.lastPromise = l,
                    d("Load".concat(n ? " - " + n : "").concat(r.length ? " + dynamic" : ""), c),
                    this.loader = new o.a,
                    this.fileToLoadsNb = 0;
                    for (var f = [], v = 0, p = c.length; v < p; v++) {
                        var m = c[v]
                          , y = m.id || m.url;
                        this.resources[y] || (this.fileToLoadsNb++,
                        f.push({
                            id: y,
                            url: m.url
                        }))
                    }
                    return this.remainingFiles = this.fileToLoadsNb,
                    this.remainingFiles ? (this.loader = new o.a,
                    f.forEach((function(e) {
                        var n = e.id
                          , i = e.url;
                        t.loader.add(n, i, {
                            crossOrigin: "anonymous"
                        })
                    }
                    )),
                    this.loader.onLoad.add(this.onLoad),
                    this.preloading ? l.resolve() : (this.loader.onProgress.add(this.onProgress),
                    this.loader.onError.add(this.onError),
                    this.loader.onComplete.add(this.onComplete)),
                    this.loader.load()) : this.preloading ? l.resolve() : this.onComplete(),
                    l
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.resources[e] ? this.resources[e].data : (f("get: ".concat(e, " resource does not exist")),
                    null)
                }
            }, {
                key: "onError",
                value: function(e) {
                    f("OnError", e),
                    console.log("Something when wrong with the loader", e)
                }
            }, {
                key: "onProgress",
                value: function(e, t) {
                    this.remainingFiles--;
                    var n = Object(u.c)(this.remainingFiles, this.fileToLoadsNb, 0, 0, 100, !0);
                    e.computedProgress = Math.min(n, e.progress),
                    s.a.emit(this.PROGRESSED, e, t),
                    v && d("OnProgress", e, t)
                }
            }, {
                key: "onLoad",
                value: function(e, t) {
                    s.a.emit(this.LOADED, e, t),
                    this.resources[t.name] = t,
                    v && d("OnLoad", e, t)
                }
            }, {
                key: "onComplete",
                value: function(e) {
                    s.a.emit(this.COMPLETED, this.resources),
                    this.lastPromise.resolve(),
                    v ? d("Complete", e) : d("Complete")
                }
            }]),
            e
        }();
        t.a = new p
    },
    6: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "d", (function() {
                return i
            }
            )),
            n.d(t, "e", (function() {
                return r
            }
            )),
            n.d(t, "c", (function() {
                return a
            }
            )),
            n.d(t, "b", (function() {
                return o
            }
            )),
            n.d(t, "a", (function() {
                return s
            }
            ));
            n(21),
            n(81),
            n(82),
            n(65),
            n(123),
            n(160),
            n(218),
            n(32),
            n(44);
            function i(e) {
                return !(!e || e.constructor !== Array)
            }
            function r(e) {
                return e === Object(e) && !i(e)
            }
            function a(e, t) {
                t || (t = window.location.href),
                e = e.replace(/[\[\]]/g, "\\$&");
                var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                if (!n)
                    return !1;
                if (!n[2])
                    return !0;
                var i = decodeURIComponent(n[2].replace(/\+/g, " "));
                return "" === i || "true" === i ? i = !0 : null !== i && "false" !== i || (i = !1),
                i
            }
            function o(e, t, n, i, r) {
                var a = i / r
                  , o = t / n
                  , s = 0
                  , u = 0;
                return (e ? a > o : a < o) ? u = (s = t) / a : s = (u = n) * a,
                {
                    width: s,
                    height: u,
                    x: (t - s) / 2,
                    y: (n - u) / 2
                }
            }
            function s(e) {
                for (var t = function(e) {
                    var t = [];
                    do {
                        for (var n = Object.getOwnPropertyNames(e), i = 0, r = n.length; i < r; i++) {
                            var a = n[i]
                              , o = Object.getOwnPropertyDescriptor(e, a);
                            o.get || o.set || t.push(a)
                        }
                    } while (e = Object.getPrototypeOf(e));
                    return t
                }(e), n = 0, i = t.length; n < i; n++) {
                    var r = t[n]
                      , a = e[r];
                    "constructor" !== r && "function" == typeof a && (e[r] = e[r].bind(e))
                }
                return e
            }
        }
        ).call(this, n(124))
    },
    66: function(e, t, n) {
        "use strict";
        var i = n(3)
          , r = n(4)
          , a = (n(15),
        n(126),
        n(172))
          , o = n.n(a)
          , s = function() {
            function e() {
                Object(i.a)(this, e),
                this._webglContext = this._getWebglContext()
            }
            return Object(r.a)(e, [{
                key: "gamepad",
                get: function() {
                    return void 0 !== window.navigator.getGamepads
                }
            }, {
                key: "canvas",
                get: function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                }
            }, {
                key: "webgl",
                get: function() {
                    return {
                        supported: this._webglSupported(),
                        extensions: this._webglExtensions(),
                        textureFormat: this._webglTextureFormat()
                    }
                }
            }, {
                key: "blob",
                get: function() {
                    return !!window.Blob
                }
            }, {
                key: "worker",
                get: function() {
                    return "undefined" != typeof Worker
                }
            }, {
                key: "_getWebglContext",
                value: function() {
                    return document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl")
                }
            }, {
                key: "_webglSupported",
                value: function() {
                    return !!this._webglContext
                }
            }, {
                key: "_getWebglExtension",
                value: function(e, t) {
                    var n = ["", "WEBKIT_", "MOZ_"]
                      , i = null;
                    for (var r in n)
                        if (i = e.getExtension(n[r] + t))
                            break;
                    return i
                }
            }, {
                key: "_webglExtensions",
                value: function() {
                    var e = this._webglContext;
                    return e ? {
                        dxt: this._getWebglExtension(e, "WEBGL_compressed_texture_s3tc")
                    } : null
                }
            }, {
                key: "_webglTextureFormat",
                value: function() {
                    var e = this._webglExtensions()
                      , t = "uncompressed";
                    return e && e.dxt && e.dxt.COMPRESSED_RGB_S3TC_DXT1_EXT && (t = "dxt"),
                    {
                        format: t,
                        compressed: "uncompressed" !== t
                    }
                }
            }, {
                key: "webglContext",
                get: function() {
                    return this._webglContext
                }
            }]),
            e
        }()
          , u = function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "init",
                value: function(e) {
                    if (!this._init) {
                        this._init = !0,
                        this.sniffer = o()(e),
                        this.os = this.sniffer.os,
                        this.browser = this.sniffer.browser,
                        this.feature = this.sniffer.feature,
                        this.browserName = this.sniffer.browser.name,
                        this.isMobile = this.sniffer.features.mobile,
                        this.isDesktop = !this.sniffer.features.mobile;
                        var t = navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2
                          , n = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 0 || "iPad" === navigator.platform;
                        t && n && (this.isMobile = !0,
                        this.isDesktop = !1),
                        this.isTouch = !1,
                        this.addClasses(),
                        this.supports = new s,
                        "ontouchstart"in window && (this.isTouch = !0),
                        this.isAltBg = !1
                    }
                }
            }, {
                key: "addClasses",
                value: function() {
                    var e = document.querySelector("html");
                    e.classList.add("os-".concat(this.os.name)),
                    e.classList.add("browser-".concat(this.browserName)),
                    this.isMobile && e.classList.add("is-mobile"),
                    this.isDesktop && e.classList.add("is-desktop")
                }
            }]),
            e
        }();
        t.a = new u
    }
}, [[184, 19, 2, 20]]]);
