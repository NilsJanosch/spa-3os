(window.webpackJsonp = window.webpackJsonp || []).push([[18, 9, 12, 13], {
    234: function(t, e, i) {},
    235: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return d
        }
        ));
        i(12),
        i(24),
        i(26),
        i(27),
        i(32),
        i(34);
        var o = i(16)
          , a = i(3)
          , s = i(4)
          , n = i(9)
          , r = i(8)
          , c = i(2)
          , l = i(232);
        i(0);
        function u(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, o)
            }
            return i
        }
        function h(t) {
            var e = function() {
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
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, o = Object(c.a)(t);
                if (e) {
                    var a = Object(c.a)(this).constructor;
                    i = Reflect.construct(o, arguments, a)
                } else
                    i = o.apply(this, arguments);
                return Object(r.a)(this, i)
            }
        }
        var d = function(t) {
            Object(n.a)(i, t);
            var e = h(i);
            function i() {
                return Object(a.a)(this, i),
                e.apply(this, arguments)
            }
            return Object(s.a)(i, [{
                key: "transformDelta",
                value: function(t) {
                    return this.options.multiplier && (t.y *= this.options.multiplier),
                    this.options.getDelta && this.options.getDelta(t),
                    this.options.lockDirection && (t[this.options.lockDirection] = 1e-12),
                    this.options.lock && (t.x = 1e-12,
                    t.y = 1e-12),
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(i), !0).forEach((function(e) {
                                Object(o.a)(t, e, i[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                            }
                            ))
                        }
                        return t
                    }({}, t)
                }
            }, {
                key: "onRender",
                value: function(t) {}
            }]),
            i
        }(l.ScrollbarPlugin);
        d.pluginName = "disableScroll",
        d.defaultOptions = {
            direction: null
        }
    },
    236: function(t, e, i) {
        "use strict";
        i.r(e);
        i(229);
        var o = i(0)
          , a = i(17)
          , s = i(7)
          , n = {
            components: {},
            props: {
                workData: Object,
                index: Number
            },
            data: function() {
                var t = "no";
                return this.workData.home_video_link && this.workData.home_video_link.url && (t = this.workData.home_video_link.url),
                {
                    toggle: !0,
                    dataVideo: t
                }
            },
            watch: {},
            created: function() {
                this.lastAnimateOut = 0,
                this.emitHead = "project-plane-".concat(this.index, "::")
            },
            mounted: function() {
                this.setSize(),
                o.k.addResize(this.setSize),
                this.preapreIn()
            },
            beforeDestroy: function() {
                clearInterval(this.interval),
                clearTimeout(this.outTo),
                o.k.removeResize(this.setSize),
                this.inTl && this.inTl.kill()
            },
            methods: {
                setSize: function() {
                    var t = o.k.width
                      , e = o.k.height
                      , i = this.workData.home_image.dimensions;
                    if (this.$refs.img && t !== this.lastWidth && e !== this.height) {
                        var a = this.$refs.img.getBoundingClientRect().width;
                        if (o.k.width <= 760) {
                            var s = a / 1.18;
                            this.$refs.visual.$el.style.height = s + "px"
                        } else {
                            var n = i.height / i.width * a;
                            this.$refs.visual.$el.style.height = n + "px"
                        }
                        this.bbox = this.$el.getBoundingClientRect(),
                        this.visualBbox = this.$refs.visual.$el.getBoundingClientRect()
                    }
                    this.lastWidth = t,
                    this.lastHeight = e
                },
                getImage: function() {
                    return this.$refs.img
                },
                getSize: function() {
                    return {
                        bbox: this.bbox,
                        visualBbox: this.visualBbox
                    }
                },
                getVideoUrl: function() {
                    return this.dataVideo
                },
                setScrollData: function(t) {
                    this.sData = t
                },
                preapreIn: function() {
                    var t = this.$refs
                      , e = t.type
                      , i = t.title
                      , a = t.desc;
                    s.a.set(e, {
                        opacity: 0,
                        y: 15,
                        rotateX: 90
                    }),
                    this.inTl = s.a.timeline({
                        paused: !0
                    });
                    var n = new o.j(i,{
                        type: "words, chars"
                    });
                    s.a.set(n.words, {
                        opacity: 0,
                        y: 3,
                        rotationX: 20
                    });
                    var r = new o.j(a,{
                        type: "words"
                    });
                    s.a.set(r.words, {
                        opacity: 0
                    }),
                    this.inTl.to(e, {
                        opacity: 1,
                        duration: .45,
                        ease: "cubic.out"
                    }, .15).to(e, {
                        rotateX: 0,
                        y: 0,
                        duration: .6,
                        ease: "expo.out"
                    }, .15).to(n.words, {
                        opacity: 1,
                        duration: .5,
                        ease: "linear",
                        stagger: .03
                    }, .15).to(n.words, {
                        y: 0,
                        rotationX: 0,
                        duration: 1,
                        ease: "expo.out",
                        stagger: .03
                    }, .15).to(r.words, {
                        opacity: 1,
                        duration: .7,
                        ease: "linear",
                        stagger: .02
                    }, .15),
                    this.inTl.progress(0),
                    this.animatedOut = !0,
                    this.titleSplit = n.chars
                },
                animateIn: function() {
                    this.outTo && (clearTimeout(this.outTo),
                    this.outTo = null),
                    this.animatedIn = !0,
                    this.titleSplit.forEach((function(t, e) {
                        s.a.killTweensOf(t, {
                            opacity: !0
                        })
                    }
                    )),
                    this.inTl.play(0),
                    o.c.emit("".concat(this.emitHead, "animateIn"))
                },
                animateOut: function() {
                    this.animatedOut = !0,
                    clearTimeout(this.outTo),
                    this.outTo = null,
                    this.animatedIn = !1,
                    this.inTl.progress(0),
                    this.inTl.pause(),
                    o.c.emit("".concat(this.emitHead, "animateOut"))
                },
                onEnter: function() {
                    var t = this;
                    if (!o.b.isMobile) {
                        o.c.emit("".concat(this.emitHead, "enter")),
                        this.mouseIn = !0;
                        !function e(i) {
                            o.a.loopText(t.titleSplit, i, (function() {
                                t.mouseIn && e(!0)
                            }
                            ), .6)
                        }()
                    }
                },
                onLeave: function() {
                    o.b.isMobile || (o.c.emit("".concat(this.emitHead, "leave")),
                    this.mouseIn = !1,
                    o.a.resetLoopText(this.titleSplit))
                },
                tick: function(t, e, i, s) {
                    var n = this
                      , r = o.k.height
                      , c = this.sData.top
                      , l = this.sData.bottom
                      , u = Object(a.c)(i + r, c, l + r, 0, 1)
                      , h = Object(a.c)(u, 0, 1, r, -this.sData.height)
                      , d = u >= 0 && u <= 1;
                    this.sData.progress = u,
                    this.sData.ty = h,
                    this.sData.visible = d,
                    this.toggle = d,
                    d && !this.animatedIn && this.animatedOut ? this.animateIn() : d || this.outTo || !this.animatedIn || (this.outTo = setTimeout((function() {
                        n.toggle ? n.animatedOut = !0 : n.animateOut(),
                        n.outTo = null
                    }
                    ), 1e3)),
                    this.lastScrollY && Math.abs(t - this.lastScrollY) < .1 || d && (this.$el && (this.$el.style.transform = "translate3d(0, ".concat(h, "px, 0)")),
                    this.$refs.img && (this.$refs.img.style.transform = "translate3d(0, ".concat(Object(a.c)(u, 0, 1, -5, 5, !0), "%, 0)")),
                    this.lastScrollY = t)
                }
            }
        }
          , r = (i(246),
        i(38))
          , c = Object(r.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                class: ["project", "project--" + t.workData.home_layout, "project--" + t.workData.home_image_format],
                style: {
                    visibility: t.toggle ? "visible" : "hidden"
                }
            }, [i("div", {
                staticClass: "project__wrapper"
            }, [i("NuxtLink", {
                ref: "visual",
                staticClass: "project__visual",
                attrs: {
                    to: "case/" + t.workData.uid
                }
            }, [i("div", {
                staticClass: "project__visual-content",
                on: {
                    mouseenter: t.onEnter,
                    mouseleave: t.onLeave
                }
            }, [i("img", {
                ref: "img",
                staticClass: "project__img preload",
                attrs: {
                    src: t.workData.home_image.url,
                    alt: t.$prismic.asText(t.workData.title),
                    crossorigin: "anonymous"
                }
            })])]), t._v(" "), i("div", {
                staticClass: "project__content"
            }, [i("div", {
                staticClass: "project__head"
            }, [i("span", {
                ref: "type",
                staticClass: "project__type"
            }, [t._v(t._s(t.$prismic.asText(t.workData.type)))]), t._v(" "), i("h3", {
                ref: "title",
                staticClass: "project__title"
            }, [t._v("\n          " + t._s(t.$prismic.asText(t.workData.title)) + "\n        ")])]), t._v(" "), i("p", {
                ref: "desc",
                staticClass: "project__desc"
            }, [t._v("\n        " + t._s(t.$prismic.asText(t.workData.short_description)) + "\n      ")])])], 1)])
        }
        ), [], !1, null, null, null);
        e.default = c.exports
    },
    238: function(t, e, i) {
        "use strict";
        var o = i(239)
          , a = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        t.exports = function(t, e) {
            var i, s, n, r, c, l, u = !1;
            e || (e = {}),
            i = e.debug || !1;
            try {
                if (n = o(),
                r = document.createRange(),
                c = document.getSelection(),
                (l = document.createElement("span")).textContent = t,
                l.style.all = "unset",
                l.style.position = "fixed",
                l.style.top = 0,
                l.style.clip = "rect(0, 0, 0, 0)",
                l.style.whiteSpace = "pre",
                l.style.webkitUserSelect = "text",
                l.style.MozUserSelect = "text",
                l.style.msUserSelect = "text",
                l.style.userSelect = "text",
                l.addEventListener("copy", (function(o) {
                    if (o.stopPropagation(),
                    e.format)
                        if (o.preventDefault(),
                        void 0 === o.clipboardData) {
                            i && console.warn("unable to use e.clipboardData"),
                            i && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var s = a[e.format] || a.default;
                            window.clipboardData.setData(s, t)
                        } else
                            o.clipboardData.clearData(),
                            o.clipboardData.setData(e.format, t);
                    e.onCopy && (o.preventDefault(),
                    e.onCopy(o.clipboardData))
                }
                )),
                document.body.appendChild(l),
                r.selectNodeContents(l),
                c.addRange(r),
                !document.execCommand("copy"))
                    throw new Error("copy command was unsuccessful");
                u = !0
            } catch (o) {
                i && console.error("unable to copy using execCommand: ", o),
                i && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(e.format || "text", t),
                    e.onCopy && e.onCopy(window.clipboardData),
                    u = !0
                } catch (o) {
                    i && console.error("unable to copy using clipboardData: ", o),
                    i && console.error("falling back to prompt"),
                    s = function(t) {
                        var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                        return t.replace(/#{\s*key\s*}/g, e)
                    }("message"in e ? e.message : "Copy to clipboard: #{key}, Enter"),
                    window.prompt(s, t)
                }
            } finally {
                c && ("function" == typeof c.removeRange ? c.removeRange(r) : c.removeAllRanges()),
                l && document.body.removeChild(l),
                n()
            }
            return u
        }
    },
    239: function(t, e) {
        t.exports = function() {
            var t = document.getSelection();
            if (!t.rangeCount)
                return function() {}
                ;
            for (var e = document.activeElement, i = [], o = 0; o < t.rangeCount; o++)
                i.push(t.getRangeAt(o));
            switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                e.blur();
                break;
            default:
                e = null
            }
            return t.removeAllRanges(),
            function() {
                "Caret" === t.type && t.removeAllRanges(),
                t.rangeCount || i.forEach((function(e) {
                    t.addRange(e)
                }
                )),
                e && e.focus()
            }
        }
    },
    245: function(t, e, i) {},
    246: function(t, e, i) {
        "use strict";
        i(234)
    },
    247: function(t, e, i) {},
    248: function(t, e, i) {},
    249: function(t, e, i) {},
    256: function(t, e, i) {
        "use strict";
        i(245)
    },
    257: function(t, e, i) {
        "use strict";
        i(247)
    },
    258: function(t, e, i) {
        "use strict";
        i(248)
    },
    259: function(t, e, i) {
        "use strict";
        i(249)
    },
    265: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(16)
          , a = i(0)
          , s = i(17)
          , n = i(7)
          , r = i(238)
          , c = i.n(r)
          , l = {
            components: {},
            data: function() {
                return {
                    toggle: !0,
                    text: "Get in touch"
                }
            },
            watch: {},
            created: function() {
                this.idleText = "Get in touch",
                this.copyText = "Copy mail?",
                this.copiedText = "Mail copied"
            },
            mounted: function() {
                this.setSize(),
                a.k.addResize(this.setSize),
                this.prepareIn()
            },
            beforeDestroy: function() {
                clearInterval(this._lockedTo),
                this._inTl && this._inTl.kill(),
                this._ctaTl && this._ctaTl.kill()
            },
            methods: {
                prepareIn: function() {
                    var t = this;
                    this._inTl = n.a.timeline({
                        paused: !0,
                        onComplete: function() {
                            t.inDone = !0
                        }
                    }),
                    this._ctaTl = n.a.timeline({
                        paused: !0,
                        delay: .3
                    }),
                    this._blinkTl = n.a.timeline({
                        paused: !0
                    });
                    var e = this.$el.querySelectorAll("a");
                    a.b.isMobile || e.forEach((function(e, i) {
                        var o = new a.j(e,{
                            type: "chars,words",
                            reduceWhiteSpace: !1
                        }).chars
                          , s = !1;
                        e.onmouseenter = function() {
                            if (t.inDone) {
                                s = !0;
                                !function t(e) {
                                    a.a.loopText(o, e, (function() {
                                        s && t(!0)
                                    }
                                    ))
                                }()
                            }
                        }
                        ,
                        e.onmouseleave = function() {
                            t.inDone && (s = !1,
                            a.a.resetLoopText(o))
                        }
                    }
                    ));
                    var i = this.$refs
                      , s = i.cta
                      , r = i.ctaText
                      , c = i.underline
                      , l = i.arrow
                      , u = i.infos
                      , h = new a.j(u,{
                        type: "words"
                    }).words;
                    n.a.set(h, {
                        opacity: 0,
                        x: 10
                    }),
                    this._inTl.to(h, {
                        opacity: 1,
                        duration: .7,
                        ease: "linear",
                        stagger: .05
                    }).to(h, {
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: .05
                    }, 0);
                    var d = u.querySelectorAll("a")
                      , p = [];
                    d.forEach((function(t) {
                        var e = document.createElement("div");
                        e.classList.add("underline"),
                        t.appendChild(e),
                        p.push(e)
                    }
                    )),
                    n.a.set(s, {
                        opacity: 0
                    }),
                    n.a.set(r, {
                        opacity: 0
                    }),
                    this._ctaTl.set(s, {
                        opacity: 1
                    }, 0).set(c, {
                        scaleX: 0,
                        transformOrigin: "left bottom"
                    }, 0).set(r, {
                        x: -10
                    }, 0).set(l, Object(o.a)({
                        opacity: 0,
                        x: -150,
                        scaleY: 0,
                        scaleX: 0,
                        transformOrigin: "left"
                    }, "x", -5), 0).to(l, {
                        opacity: 1,
                        duration: .3,
                        ease: "cubic.out"
                    }, .3).to(l, {
                        scaleX: 1,
                        duration: .6,
                        ease: "elastic.out(1, 1)"
                    }, .2).to(l, {
                        scaleY: 1,
                        duration: 1,
                        ease: "elastic.out"
                    }, .3).to(l, {
                        x: 0,
                        duration: 1.5,
                        ease: "expo.out"
                    }, .3).to(r, {
                        x: 0,
                        duration: .7,
                        ease: "elastic.out(.7, .5)"
                    }, .5).to(r, {
                        opacity: 1,
                        duration: .7
                    }, .5).to(c, {
                        scaleX: 1,
                        ease: "elastic.out(.5, .5)"
                    }, .5).add((function() {
                        p.forEach((function(t) {
                            t.classList.add("in")
                        }
                        ))
                    }
                    ), .7)
                },
                animateIn: function() {
                    this._inTl.play(),
                    this._ctaTl.play()
                },
                setSize: function() {
                    this.$el.style.height = "".concat(this.getSize().bbox.height, "px")
                },
                getSize: function() {
                    return {
                        bbox: {
                            height: a.k.height
                        }
                    }
                },
                setScrollData: function(t) {
                    this.sData = t
                },
                onEnter: function() {
                    if (!(a.b.isMobile || this._ctaTl.progress() < .99 || this.locked)) {
                        this.text = this.copyText;
                        var t = this.$refs
                          , e = t.underline
                          , i = t.ctaText
                          , o = t.ctaHoverText;
                        n.a.killTweensOf([i, o, e]),
                        n.a.to([i, o], {
                            x: 10,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        n.a.to(e, {
                            x: 15,
                            opacity: .2,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        n.a.to(i, {
                            opacity: 0,
                            duration: .1
                        }),
                        n.a.to(o, {
                            opacity: 1,
                            duration: .3
                        })
                    }
                },
                onLeave: function() {
                    if (!(a.b.isMobile || this._ctaTl.progress() < .99)) {
                        this.text = this.idleText;
                        var t = this.$refs
                          , e = t.underline
                          , i = t.ctaText
                          , o = t.ctaHoverText;
                        n.a.killTweensOf([i, o, e]),
                        n.a.to([i, o], {
                            x: 0,
                            duration: .2,
                            ease: "cubic.out"
                        }),
                        n.a.to(o, {
                            opacity: 0,
                            duration: .1
                        }),
                        n.a.to(i, {
                            opacity: 1,
                            duration: .3
                        }),
                        n.a.to(e, {
                            x: 0,
                            opacity: 1,
                            duration: .15,
                            ease: "cubic.out"
                        })
                    }
                },
                onClick: function() {
                    var t = this;
                    if (!(this._ctaTl.progress() < .99 || this.locked)) {
                        c()("nils.janosch.schlegel@hotmail.com"),
                        this.locked = !0,
                        this.text = this.copiedText;
                        var e = this.$refs
                          , i = e.ctaText
                          , o = e.ctaHoverText;
                        n.a.to(i, {
                            opacity: 0,
                            duration: .1
                        }),
                        n.a.to(o, {
                            opacity: 1,
                            duration: .3
                        }),
                        n.a.set(o, {
                            opacity: 0
                        }),
                        n.a.set(o, {
                            opacity: 1,
                            delay: .08
                        }),
                        n.a.set(o, {
                            opacity: 0,
                            delay: .12
                        }),
                        n.a.set(o, {
                            opacity: 1,
                            delay: .16
                        }),
                        this._lockedTo = setTimeout((function() {
                            t.text = t.idleText,
                            t.locked = !1
                        }
                        ), 2e3)
                    }
                },
                tick: function(t, e, i, o) {
                    var n, r, c, l, u, h = this.sData.height, d = a.k.height;
                    e > .5 ? (n = a.e.totalHeight - this.sData.paddingBottom / 2,
                    r = a.e.totalHeight + h + this.sData.paddingBottom / 2,
                    c = Object(s.c)(i + d, n, r + d, 0, 1),
                    l = Object(s.c)(i + d, n, r + d, d, -h)) : (n = 0,
                    r = h,
                    c = Object(s.c)(i + d, n, r + d, 0, 1),
                    l = Object(s.c)(i + d, n, r + d, d, -h)),
                    u = c >= 0 && c <= 1,
                    this.toggle = u,
                    this.sData.progress = c,
                    this.sData.ty = l,
                    this.sData.visible = u,
                    u && (this.$el.style.transform = "translate3d(0, ".concat(l, "px, 0)"),
                    this.lastScrollY = t)
                }
            }
        }
          , u = (i(256),
        i(38))
          , h = Object(u.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "home-intro",
                style: {
                    visibility: t.toggle ? "visible" : "hidden"
                }
            }, [i("div", {
                staticClass: "home-intro__wrapper"
            }, [i("div", {
                staticClass: "home-intro__btn-c"
            }, [i("div", {
                ref: "infos",
                staticClass: "home-intro__infos",
                domProps: {
                    innerHTML: t._s(t.$prismic.asHtml(t.$store.state.data.home_intro))
                }
            }), t._v(" "), i("button", {
                ref: "cta",
                staticClass: "home-intro__btn",
                on: {
                    mouseenter: t.onEnter,
                    mouseleave: t.onLeave,
                    click: t.onClick
                }
            }, [i("svg", {
                ref: "arrow",
                staticStyle: {
                    "enable-background": "new 0 0 267 176.1"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 267 176.1",
                    "xml:space": "preserve"
                }
            }, [i("path", {
                attrs: {
                    d: "M266,88.1l-11-9.5L165.8,2.1L135.6,21l61.2,52.5H2v29.2h194.8l-61.2,52.5l30.2,18.9L255,97.6L266,88.1z"
                }
            })]), t._v(" "), i("span", [i("span", {
                ref: "ctaText",
                staticClass: "home-intro__inner-text"
            }, [t._v("Get in touch")]), t._v(" "), i("span", {
                ref: "ctaHoverText",
                staticClass: "home-intro__hover-text"
            }, [t._v(t._s(t.text))]), t._v(" "), i("div", {
                ref: "underline",
                staticClass: "home-intro__underline"
            })])])])])])
        }
        ), [], !1, null, null, null);
        e.default = h.exports
    },
    266: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(0)
          , a = {
            components: {
                Project: i(236).default
            },
            data: function() {
                return {}
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.setSize(),
                o.k.addResize(this.setSize)
            },
            beforeDestroy: function() {
                clearInterval(this.interval)
            },
            methods: {
                animateIn: function() {},
                prepareScroll: function() {
                    for (var t = 0, e = this.$refs.projects.length; t < e; t++)
                        o.e.components.push(this.$refs.projects[t])
                },
                setSize: function() {},
                tick: function(t) {}
            }
        }
          , s = (i(257),
        i(38))
          , n = Object(s.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "projects"
            }, [i("div", {
                staticClass: "projects__wrapper"
            }, t._l(t.$store.state.data.work, (function(t, e) {
                return i("project", {
                    key: e,
                    ref: "projects",
                    refInFor: !0,
                    attrs: {
                        index: e,
                        "work-data": t
                    }
                })
            }
            )), 1)])
        }
        ), [], !1, null, null, null);
        e.default = n.exports;
        installComponents(n, {
            Project: i(236).default
        })
    },
    267: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(0)
          , a = i(7)
          , s = {
            components: {},
            props: {},
            data: function() {
                return {
                    visible: !1
                }
            },
            watch: {},
            created: function() {
                this.lastClick = Date.now()
            },
            mounted: function() {
                var t = this;
                this.setSize(),
                o.k.addResize(this.setSize),
                this.splitted = new o.j(this.$refs.text,{
                    type: "words, chars"
                }),
                o.i.add(this.tick, 30),
                this.loopTl = a.a.timeline({
                    paused: !0,
                    repeat: -1
                }),
                this.inTl = a.a.timeline({
                    paused: !0,
                    onComplete: function() {
                        t.loopTl.play()
                    }
                });
                var e = .5;
                this.inTl.set(this.$refs.arrow, {
                    y: -5,
                    opacity: 0
                }, e).set(this.splitted.words, {
                    y: "100%",
                    rotation: 10
                }, e).to(this.splitted.words, {
                    y: "0%",
                    rotation: 0,
                    duration: .6,
                    ease: "cubic.out",
                    stagger: .05
                }, e).to(this.$refs.arrow, {
                    y: 0,
                    opacity: 1,
                    duration: .6
                }, 1),
                this.loopTl.to(this.$refs.arrow, {
                    y: -3,
                    duration: .7
                }).to(this.$refs.arrow, {
                    y: 3,
                    duration: .7
                }).to(this.$refs.arrow, {
                    y: 0,
                    duration: .7
                }).to(this.splitted.chars, {
                    opacity: .6,
                    stagger: .05,
                    duration: .3
                }, 0).to(this.splitted.chars, {
                    opacity: 1,
                    stagger: .05,
                    duration: .3
                }, .3)
            },
            beforeDestroy: function() {
                o.i.remove(this.tick, 30)
            },
            methods: {
                animateIn: function() {
                    a.a.to(this.$el, {
                        autoAlpha: 1,
                        overwrite: !0,
                        delay: .5
                    }),
                    this.inTl.progress() < .1 && (this.loopTl.pause(),
                    this.inTl.play(0))
                },
                animateOut: function() {
                    var t = this;
                    a.a.to(this.$el, {
                        autoAlpha: 0,
                        duration: .3,
                        overwrite: !0,
                        onComplete: function() {
                            t.inTl.pause(),
                            t.inTl.progress(0),
                            t.loopTl.pause()
                        }
                    })
                },
                setSize: function() {
                    var t = o.k.height
                      , e = o.k.width > 650 ? 100 : 80;
                    this.$el.style.top = "".concat(t - e, "px")
                },
                onClick: function() {
                    var t = Date.now();
                    t - this.lastClick < 1e3 || (this.lastClick = t,
                    o.e.scrollHeadPart())
                },
                tick: function() {
                    if (o.g.hiddenPromiseDone) {
                        var t = this.visible
                          , e = (o.l.homeScrollY + 200 * o.e.totalHeight) % o.e.totalHeight
                          , i = o.k.width < 600 ? 200 : .5 * o.k.height
                          , a = e < i;
                        e > o.e.totalHeight - i && (a = !0),
                        a !== t && (this.visible = a,
                        a ? this.animateIn() : this.animateOut())
                    }
                }
            }
        }
          , n = (i(258),
        i(38))
          , r = Object(n.a)(s, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "scroll-to-discover",
                on: {
                    click: t.onClick
                }
            }, [i("div", {
                ref: "textC",
                staticClass: "scroll-to-discover__text"
            }, [i("span", {
                ref: "text"
            }, [t._v("Scroll to discover")])]), t._v(" "), i("svg", {
                ref: "arrow",
                staticStyle: {
                    "enable-background": "new 0 0 172 212.1"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 172 212.1",
                    "xml:space": "preserve"
                }
            }, [i("path", {
                attrs: {
                    d: "M86,212.1l9.5-8.8l76.5-71.7l-18.9-24.3l-52.5,49.2V0H71.4v156.5l-52.5-49.2L0,131.6l76.5,71.7L86,212.1z"
                }
            })])])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    268: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(0)
          , a = i(7)
          , s = {
            components: {},
            props: {},
            data: function() {
                return {
                    visible: !1
                }
            },
            watch: {},
            created: function() {
                this.lastProgress = 0
            },
            mounted: function() {
                o.i.add(this.tick)
            },
            beforeDestroy: function() {
                o.i.remove(this.tick)
            },
            methods: {
                animateIn: function() {},
                tick: function() {
                    if (o.e.totalHeight) {
                        var t = (o.l.homeScrollY + 200 * o.e.totalHeight) % o.e.totalHeight / o.e.totalHeight
                          , e = Math.abs(t - this.lastProgress);
                        e > .01 && (this.$refs.cursor.style.transform = "scaleY(".concat(t, ")"),
                        e > .8 && (a.a.killTweensOf(this.$refs.cursor),
                        a.a.set(this.$refs.cursor, {
                            opacity: 0
                        }),
                        a.a.to(this.$refs.cursor, {
                            opacity: 1,
                            duration: .6
                        })),
                        this.lastProgress = t)
                    }
                }
            }
        }
          , n = (i(259),
        i(38))
          , r = Object(n.a)(s, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "scroll-indicator"
            }, [e("div", {
                ref: "cursor",
                staticClass: "scroll-indicator__cursor"
            })])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    273: function(t, e, i) {},
    279: function(t, e, i) {
        "use strict";
        i(273)
    },
    284: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = i(18)
          , a = (i(15),
        i(60),
        i(0))
          , s = i(45)
          , n = i(6)
          , r = i(232)
          , c = i.n(r)
          , l = i(235)
          , u = i(265)
          , h = i(266)
          , d = i(267)
          , p = i(268)
          , f = i(7);
        c.a.use(l.a);
        var m = {
            components: {
                HomeIntro: u.default,
                ScrollToDiscover: d.default,
                ScrollIndicator: p.default,
                Projects: h.default
            },
            transition: function(t, e) {
                return {
                    mode: "in-out",
                    enter: function(t, e) {
                        e()
                    },
                    beforeLeave: function(t) {},
                    leave: function(t, e) {
                        setTimeout((function() {
                            e()
                        }
                        ), 300)
                    }
                }
            },
            asyncData: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var i, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.$prismic,
                                t.error,
                                i = t.store,
                                e.next = 3,
                                i.dispatch("fetchCMS");
                            case 3:
                                return o = e.sent,
                                e.abrupt("return", o);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            data: function() {
                return {
                    workData: []
                }
            },
            head: function() {
                return {
                    title: "Nils Schlegel | Home"
                }
            },
            watch: {
                "$store.state.ready": function(t, e) {}
            },
            created: function() {
                a.e.reset(),
                this.scrollLocked = a.b.isMobile,
                a.l.homeScrollY = 0,
                a.l.homeScrollYTarget = 0
            },
            mounted: function() {
                var t = this;
                document.title = "Nils Schlegel | Home",
                a.e.components.push(this.$refs.intro),
                this.$refs.projects.prepareScroll(),
                this.$store.state.ready && (a.l.nbProject = this.$store.state.data.work.length,
                a.l.dataFetching && a.l.dataFetching.resolve(this.$store.state.data)),
                Object(n.c)("loading") || s.a.scenes.change("home"),
                this.setSize(),
                a.g.hiddenPromise.then((function() {
                    t.animateIn()
                }
                )),
                this.navState = null,
                a.k.addResize(this.setSize)
            },
            beforeDestroy: function() {
                var t = this;
                a.e.exit(),
                a.l.lastProjectIndex = 0,
                clearInterval(this.interval),
                clearTimeout(this.timeout),
                clearTimeout(this._to),
                this._scrollTo = setTimeout((function() {
                    t.scrollBar && t.scrollBar.destroy(),
                    a.l.homeScroll = null
                }
                ), 1400),
                a.i.remove(this.tick),
                a.k.removeResize(this.setSize)
            },
            methods: {
                animateIn: function() {
                    this.initScrollBar(),
                    a.i.add(this.tick),
                    f.a.set(this.$el, {
                        opacity: 1,
                        delay: .3
                    }),
                    this.$refs.intro.animateIn(),
                    this.checkScroll = !0
                },
                initScrollBar: function() {
                    var t, e = this;
                    this.scrollBar && (this.scrollBar.destroy(),
                    t = this.scrollBar.scrollTop),
                    clearTimeout(this._scrollTo),
                    this.scrollBar = c.a.init(this.$refs.wrapper, {
                        thumbMinSize: 100,
                        autoRender: !1,
                        plugins: {
                            disableScroll: {
                                lock: !0,
                                getDelta: this.onDeltaChange,
                                multiplier: a.b.isMobile ? 1.3 : 1.12
                            }
                        }
                    }),
                    t && this.scrollBar.setPosition(0, t),
                    this.scrollBar.track.xAxis.element.remove(),
                    this.scrollBar.track.yAxis.element.remove(),
                    a.l.homeScroll = this.scrollBar,
                    this.scrollBar.initScrollbar = this.initScrollBar,
                    clearInterval(this.interval),
                    this.interval = setInterval((function() {
                        isNaN(e.scrollBar._momentum.y) && e.initScrollBar()
                    }
                    ), 200)
                },
                onDeltaChange: function(t) {
                    a.l.homeScrollYTarget += t.y
                },
                setSize: function() {
                    a.e.compute()
                },
                onTouchMove: function(t) {
                    "android" === a.b.os.name && t.preventDefault()
                },
                tick: function() {}
            }
        }
          , v = (i(279),
        i(38))
          , g = Object(v.a)(m, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "home",
                on: {
                    touchmove: t.onTouchMove
                }
            }, [i("div", {
                ref: "wrapper",
                staticClass: "home__wrapper"
            }, [i("home-intro", {
                ref: "intro"
            }), t._v(" "), i("projects", {
                ref: "projects"
            }), t._v(" "), i("scroll-to-discover")], 1), t._v(" "), i("scroll-indicator")], 1)
        }
        ), [], !1, null, null, null);
        e.default = g.exports;
        installComponents(g, {
            HomeIntro: i(265).default,
            Projects: i(266).default,
            ScrollToDiscover: i(267).default,
            ScrollIndicator: i(268).default
        })
    }
}]);
