(window.webpackJsonp = window.webpackJsonp || []).push([[16, 4, 5], {
    233: function(e, t, i) {
        "use strict";
        i(183)("link", (function(e) {
            return function(t) {
                return e(this, "a", "href", t)
            }
        }
        ))
    },
    235: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return h
        }
        ));
        i(12),
        i(24),
        i(26),
        i(27),
        i(32),
        i(34);
        var s = i(16)
          , a = i(3)
          , n = i(4)
          , o = i(9)
          , r = i(8)
          , c = i(2)
          , l = i(232);
        i(0);
        function u(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
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
                var i, s = Object(c.a)(e);
                if (t) {
                    var a = Object(c.a)(this).constructor;
                    i = Reflect.construct(s, arguments, a)
                } else
                    i = s.apply(this, arguments);
                return Object(r.a)(this, i)
            }
        }
        var h = function(e) {
            Object(o.a)(i, e);
            var t = d(i);
            function i() {
                return Object(a.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(n.a)(i, [{
                key: "transformDelta",
                value: function(e) {
                    return this.options.multiplier && (e.y *= this.options.multiplier),
                    this.options.getDelta && this.options.getDelta(e),
                    this.options.lockDirection && (e[this.options.lockDirection] = 1e-12),
                    this.options.lock && (e.x = 1e-12,
                    e.y = 1e-12),
                    function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(Object(i), !0).forEach((function(t) {
                                Object(s.a)(e, t, i[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                            }
                            ))
                        }
                        return e
                    }({}, e)
                }
            }, {
                key: "onRender",
                value: function(e) {}
            }]),
            i
        }(l.ScrollbarPlugin);
        h.pluginName = "disableScroll",
        h.defaultOptions = {
            direction: null
        }
    },
    241: function(e, t, i) {},
    242: function(e, t, i) {},
    243: function(e, t, i) {},
    244: function(e, t, i) {},
    252: function(e, t, i) {
        "use strict";
        i(241)
    },
    253: function(e, t, i) {
        "use strict";
        i(242)
    },
    254: function(e, t, i) {
        "use strict";
        i(243)
    },
    255: function(e, t, i) {
        "use strict";
        i(244)
    },
    261: function(e, t, i) {
        "use strict";
        i.r(t);
        i(21);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                caseData: Object
            },
            data: function() {
                var e = !1;
                return this.caseData.header_video && this.caseData.header_video.url && (e = !0),
                {
                    isVideo: e,
                    isIn: !1,
                    overlayIn: !1,
                    isLoaded: !1,
                    isWide: s.k.width / s.k.height >= 1.6
                }
            },
            watch: {},
            created: function() {
                this._ready = Promise.create()
            },
            mounted: function() {
                this.isVideo && (s.i.add(this.tick),
                this.$refs.video.load()),
                this.$refs.bgImg.complete && this._ready.resolve(),
                s.k.addResize(this.setSize),
                this.setSize()
            },
            beforeDestroy: function() {
                this.isVideo && s.i.remove(this.tick),
                s.k.removeResize(this.setSize),
                this._inTl && this._inTl.kill()
            },
            methods: {
                animateIn: function(e) {
                    var t = this;
                    this._animated = !0;
                    var i = s.k.width <= 600 ? 300 : 400;
                    this._inTl = a.a.timeline({
                        delay: .3,
                        onComplete: function() {
                            t.isIn = !0
                        }
                    }),
                    e ? (a.a.set(this.$el, {
                        height: i,
                        opacity: 0
                    }),
                    this.overlayIn = !0,
                    this._inTl.to(this.$el, {
                        opacity: 1,
                        duration: .3,
                        ease: "linear"
                    }, 0).set(this.$el, {
                        scale: 1.1,
                        transformOrigin: "top"
                    }, 0).to(this.$el, {
                        scale: 1,
                        duration: .6,
                        ease: "cubic.out"
                    }, 0).add((function() {
                        t.enableVideo()
                    }
                    ), 1)) : (a.a.set(this.$el, {
                        height: s.k.height,
                        opacity: 1
                    }),
                    a.a.set(this.$refs.container, {
                        bottom: 0,
                        height: 0
                    }),
                    this._inTl.to(this.$refs.container, {
                        height: s.k.height,
                        duration: .6,
                        ease: "cubic.out"
                    }, 0).set(this.$refs.container, {
                        bottom: "auto",
                        top: 0,
                        height: s.k.height
                    }, .8).to(this.$refs.container, {
                        height: i,
                        duration: 1.3,
                        ease: "elastic.out(.2, .2)"
                    }, .8).add((function() {
                        t.overlayIn = !0
                    }
                    ), 0).add((function() {
                        t.enableVideo()
                    }
                    ), 2.2))
                },
                setSize: function() {
                    this.isWide = s.k.width / s.k.height > 1.6;
                    var e = s.k.width <= 600 ? 300 : 400;
                    this._animated && (a.a.killTweensOf(this.$el, {
                        height: !0
                    }),
                    a.a.set(this.$el, {
                        height: e
                    }, 1),
                    this.$refs.container && a.a.set(this.$refs.container, {
                        height: e
                    }, 1))
                },
                setBackground: function(e) {
                    this.$refs.bg.style.backgroundImage = "url(".concat(e, ")")
                },
                onLoad: function() {
                    this.canPlay = !0,
                    this.animatdInDone && this.enableVideo()
                },
                enableVideo: function() {
                    this.isVideo && (this.isLoaded || (this.isLoaded = !0,
                    this.$refs.video && this.shouldPlay && (this.$refs.video.play(),
                    this.isPlaying = !0)))
                },
                tick: function() {
                    var e = s.l.caseScrollY
                      , t = s.k.width <= 600 ? 300 : 400;
                    this.shouldPlay = e < t,
                    this.isLoaded && this.shouldPlay && !this.isPlaying ? (this.$refs.video.play(),
                    this.isPlaying = !0) : this.isLoaded && !this.shouldPlay && this.isPlaying && (this.$refs.video.pause(),
                    this.isPlaying = !1)
                },
                imgReady: function() {
                    this._ready && this._ready.resolve()
                },
                readyPromise: function() {
                    return this._ready
                }
            }
        }
          , o = (i(252),
        i(38))
          , r = Object(o.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: ["case-hero", {
                    "case-hero--video": e.isLoaded,
                    "case-hero--narrow": !e.isWide,
                    "case-hero--wide": e.isWide,
                    "case-hero--in-completed": e.isIn
                }]
            }, [i("div", {
                ref: "container",
                staticClass: "case-hero__container"
            }, [i("img", {
                ref: "bgImg",
                staticClass: "case-hero__bg",
                attrs: {
                    src: e.caseData.header_image.url.split("?")[0],
                    alt: "header"
                },
                on: {
                    load: e.imgReady
                }
            }), e._v(" "), i("div", {
                ref: "overlay",
                class: ["case-hero__overlay", {
                    "case-hero__overlay--in": e.overlayIn
                }]
            }), e._v(" "), e.isVideo ? i("div", {
                ref: "videoC",
                staticClass: "case-hero__video"
            }, [i("video", {
                ref: "video",
                attrs: {
                    src: e.caseData.header_video.url,
                    preload: "",
                    loop: "",
                    muted: "",
                    playsinline: "",
                    "webkit-playsinline": ""
                },
                domProps: {
                    muted: !0
                },
                on: {
                    canplaythrough: e.onLoad
                }
            })]) : e._e()])])
        }
        ), [], !1, null, null, null);
        t.default = r.exports
    },
    262: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                caseData: Object
            },
            data: function() {
                return {}
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareIn()
            },
            beforeDestroy: function() {
                clearTimeout(this._inTo),
                this.inTl && this.inTl.kill()
            },
            methods: {
                prepareIn: function() {
                    var e = .5
                      , t = this.$refs
                      , i = t.title
                      , n = t.type
                      , o = t.date
                      , r = t.desc
                      , c = new s.j(i,{
                        split: "words, chars"
                    })
                      , l = new s.j(n,{
                        split: "words"
                    })
                      , u = new s.j(r,{
                        split: "words"
                    })
                      , d = this.$refs.credits.querySelectorAll(".case-infos__credits-el")
                      , h = s.k.width <= 600
                      , f = h ? .6 : 0;
                    this.inTl = a.a.timeline({
                        paused: !0
                    }),
                    a.a.set(c.chars, {
                        opacity: 0,
                        x: 8
                    }),
                    a.a.set(l.words, {
                        opacity: 0
                    }),
                    a.a.set(o, {
                        opacity: 0
                    }),
                    a.a.set(this.$el, {
                        opacity: 1
                    }),
                    a.a.set(u.words, {
                        opacity: 0,
                        rotationX: 20,
                        x: 8
                    }),
                    d && d.length && (h ? a.a.set(d, {
                        opacity: 0,
                        rotationX: 20,
                        x: -5
                    }) : a.a.set(d, {
                        opacity: 0,
                        rotationX: 4,
                        x: 0
                    })),
                    this.inTl.to(c.chars, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: .05
                    }, e).to(c.chars, {
                        opacity: 1,
                        duration: 1,
                        ease: "expo.out",
                        stagger: .05
                    }, e).to(l.words, {
                        opacity: 1,
                        rotationX: 0,
                        duration: 1.7,
                        stagger: .07,
                        ease: "linear"
                    }, .7).to(o, {
                        opacity: 1,
                        duration: 1.2,
                        ease: "linear"
                    }, .9).to(u.words, {
                        opacity: 1,
                        duration: 1,
                        stagger: .02,
                        ease: "cubic.out"
                    }, 1).to(u.words, {
                        rotationX: 0,
                        x: 0,
                        y: 0,
                        ease: "cubic.out",
                        stagger: .02
                    }, 1),
                    d && d.length && this.inTl.to(d, {
                        opacity: 1,
                        duration: 1.4,
                        stagger: .15,
                        ease: "cubic.out"
                    }, 1.1 + f).to(d, {
                        rotationX: 0,
                        x: 0,
                        y: 0,
                        duration: 1.4,
                        ease: "cubic.out",
                        stagger: .15
                    }, 1.1 + f)
                },
                emitted: function() {
                    return !!this._emitted
                },
                animateIn: function(e) {
                    var t = this;
                    this._inTo = setTimeout((function() {
                        t.inTl.play()
                    }
                    ), e ? 300 : 700)
                },
                setSize: function() {}
            }
        }
          , o = (i(253),
        i(38))
          , r = Object(o.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "case-infos"
            }, [i("div", {
                staticClass: "case-infos__head"
            }, [i("h1", {
                ref: "title",
                staticClass: "case-infos__title"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.caseData.title)) + "\n    ")]), e._v(" "), i("div", {
                ref: "type",
                staticClass: "case-infos__type"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.caseData.type)) + "\n    ")])]), e._v(" "), i("div", {
                ref: "line",
                staticClass: "case-infos__line case-line"
            }), e._v(" "), i("div", {
                staticClass: "case-infos__content"
            }, [i("div", {
                ref: "date",
                staticClass: "case-infos__date"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.caseData.date)) + "\n    ")]), e._v(" "), i("p", {
                ref: "desc",
                staticClass: "case-infos__desc"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.caseData.case_description)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "case-infos__credits-c"
            }, [i("ul", {
                ref: "credits",
                staticClass: "case-infos__credits"
            }, e._l(e.caseData.credits, (function(t, s) {
                return i("li", {
                    key: s,
                    staticClass: "case-infos__credits-el"
                }, [e._v("\n          " + e._s(e.$prismic.asText(t.name)) + "\n          " + e._s(e.$prismic.asText(t.role) ? " - " : "") + "\n          " + e._s(e.$prismic.asText(t.role)) + "\n        ")])
            }
            )), 0)])])])
        }
        ), [], !1, null, null, null);
        t.default = r.exports
    },
    263: function(e, t, i) {
        "use strict";
        i.r(t);
        i(229),
        i(233);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                stubData: Object,
                index: Number
            },
            data: function() {
                var e = this.$prismic.asText(this.stubData.primary.description_1)
                  , t = this.$prismic.asText(this.stubData.primary.description_2);
                return {
                    desc1: e,
                    desc2: t,
                    hasLink: this.$prismic.asText(this.stubData.primary.cta_text) && this.stubData.primary.link.url,
                    type: "" === t ? "half" : "full"
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareTls()
            },
            beforeDestroy: function() {
                this.textTracker && this.textTracker.destroy(),
                this.ctaTracker && this.ctaTracker.destroy()
            },
            methods: {
                animateIn: function() {},
                track: function() {
                    var e = this;
                    this.textTracker = new s.n(this.$refs.texts,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            e.textTl.restart()
                        },
                        onViewportDownOut: function() {
                            e.textTl.progress(0)
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    }),
                    this.ctaTracker = new s.n(this.$refs.cta,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            e.ctaTl.restart()
                        },
                        onViewportDownOut: function() {
                            e.ctaTl.progress(0),
                            e.ctaTl.pause()
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    })
                },
                prepareTls: function() {
                    this.textTl = a.a.timeline({
                        paused: !0
                    }),
                    this.ctaTl = a.a.timeline({
                        paused: !0
                    });
                    var e = this.$refs
                      , t = e.text1
                      , i = e.text2
                      , n = e.cta
                      , o = e.arrow
                      , r = e.ctaText
                      , c = e.underline;
                    if (t) {
                        a.a.set(t, {
                            opacity: 0
                        });
                        var l = new s.j(t,{
                            type: "words"
                        });
                        this.textTl.set(t, {
                            opacity: 1
                        }, 0).set(l.words, {
                            opacity: 0,
                            rotationX: 100,
                            x: -5
                        }, 0).to(l.words, {
                            opacity: 1,
                            duration: 1,
                            stagger: .02,
                            ease: "cubic.out"
                        }, 0).to(l.words, {
                            rotationX: 0,
                            x: 0,
                            y: 0,
                            ease: "cubic.out",
                            stagger: .02
                        }, 0)
                    }
                    if (i) {
                        a.a.set(i, {
                            opacity: 0
                        });
                        var u = new s.j(i,{
                            type: "words"
                        });
                        this.textTl.set(i, {
                            opacity: 1
                        }, 0).set(u.words, {
                            opacity: 0,
                            rotationX: 100,
                            x: -5
                        }, 0).to(u.words, {
                            opacity: 1,
                            duration: 1.4,
                            stagger: .015,
                            ease: "cubic.out"
                        }, .4).to(u.words, {
                            rotationX: 0,
                            x: 0,
                            y: 0,
                            ease: "cubic.out",
                            stagger: .02
                        }, .4)
                    }
                    this.textTl.progress(0),
                    this.hasLink && (a.a.set(n, {
                        opacity: 0
                    }),
                    this.ctaSplit = new s.j(r,{
                        type: "chars"
                    }),
                    this.ctaTl.set(n, {
                        opacity: 1
                    }, 0).set(this.ctaSplit.chars, {
                        opacity: 0
                    }, 0).set(c, {
                        scaleX: 0,
                        transformOrigin: "left bottom"
                    }, 0).set(r, {
                        x: -10
                    }, 0).set(o, {
                        opacity: 0,
                        scaleY: 0,
                        scaleX: 0,
                        transformOrigin: "left",
                        x: -5
                    }, 0).to(o, {
                        opacity: 1,
                        duration: .3,
                        ease: "cubic.out"
                    }, 0).to(o, {
                        x: 0,
                        duration: .6,
                        ease: "cubic.out"
                    }, .2).to(o, {
                        scaleX: 1,
                        duration: .6,
                        ease: "elastic.out(1, 1)"
                    }, .2).to(o, {
                        scaleY: 1,
                        duration: 1,
                        ease: "elastic.out"
                    }, .3).to(r, {
                        x: 0,
                        duration: .7,
                        ease: "elastic.out(.7, .5)"
                    }, .5).to(this.ctaSplit.chars, {
                        opacity: 1,
                        duration: .7,
                        stagger: .01
                    }, .5).to(c, {
                        scaleX: 1,
                        ease: "elastic.out(.5, .5)"
                    }, .5))
                },
                setSize: function() {},
                onMouseEnter: function() {
                    var e = this;
                    if (!(s.b.isMobile && this.ctaTl.progress() > .99)) {
                        this.mouseIn = !0;
                        var t = this.$refs
                          , i = t.arrow
                          , n = t.underline
                          , o = t.ctaText;
                        a.a.killTweensOf([i, n, o]),
                        a.a.to(i, {
                            x: 3,
                            duration: .3,
                            ease: "cubic.out",
                            onComplete: function() {}
                        }),
                        a.a.to(o, {
                            x: 10,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        a.a.to(n, {
                            x: 15,
                            opacity: .2,
                            duration: .3,
                            ease: "cubic.inOut"
                        });
                        !function t(i) {
                            s.a.loopText(e.ctaSplit.chars, i, (function() {
                                e.mouseIn && t(!0)
                            }
                            ))
                        }()
                    }
                },
                onMouseLeave: function() {
                    if (this.mouseIn = !1,
                    !(s.b.isMobile && this.ctaTl.progress() > .99)) {
                        var e = this.$refs
                          , t = e.arrow
                          , i = e.underline
                          , n = e.ctaText;
                        a.a.killTweensOf([t, i, n]),
                        a.a.to(t, {
                            x: 0,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        a.a.to(n, {
                            x: 0,
                            duration: .2,
                            ease: "cubic.out"
                        }),
                        i && a.a.to(i, {
                            x: 0,
                            scaleY: 1,
                            skewX: 0,
                            opacity: 1,
                            duration: .15,
                            ease: "cubic.out"
                        }),
                        s.a.resetLoopText(this.ctaSplit.chars)
                    }
                }
            }
        }
          , o = (i(254),
        i(38))
          , r = Object(o.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: ["case-text", "case-text--" + e.type]
            }, [i("div", {
                staticClass: "case-text__container"
            }, [i("div", {
                ref: "texts",
                staticClass: "case-text__texts"
            }, [e.desc1 ? i("p", {
                ref: "text1",
                staticClass: "case-text__desc case-text__desc--1"
            }, [e._v("\n        " + e._s(e.desc1) + "\n      ")]) : e._e(), e._v(" "), e.desc2 ? i("p", {
                ref: "text2",
                staticClass: "case-text__desc case-text__desc--2"
            }, [e._v("\n        " + e._s(e.desc2) + "\n      ")]) : e._e()]), e._v(" "), e.hasLink ? i("a", {
                ref: "cta",
                staticClass: "case-text__link",
                attrs: {
                    href: e.stubData.primary.link.url,
                    target: "_blank"
                },
                on: {
                    mouseenter: e.onMouseEnter,
                    mouseleave: e.onMouseLeave
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
            })]), e._v(" "), i("span", {
                ref: "ctaText",
                staticClass: "case-text__cta-text"
            }, [e._v(e._s(e.$prismic.asText(e.stubData.primary.cta_text)))]), e._v(" "), i("span", {
                ref: "underline",
                staticClass: "case-text__underline"
            })]) : e._e()])])
        }
        ), [], !1, null, null, null);
        t.default = r.exports
    },
    264: function(e, t, i) {
        "use strict";
        i.r(t);
        i(229);
        var s = i(0)
          , a = i(7)
          , n = {
            components: {},
            props: {
                itemData: Object,
                itemIndex: Number,
                index: Number
            },
            data: function() {
                var e = !1;
                return this.itemData.video_link && this.itemData.video_link.url && (e = !0),
                {
                    isVideo: e,
                    imageLoaded: !1,
                    isLoaded: !1
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                this.prepareTls(),
                s.k.addResize(this.setSize),
                this.setSize(),
                this.$refs.image && this.$refs.image.complete && this.onImageLoad()
            },
            beforeDestroy: function() {
                this.videoTracker && this.videoTracker.destroy(),
                this.imageTracker && this.imageTracker.destroy(),
                s.k.removeResize(this.setSize)
            },
            methods: {
                onImageLoad: function() {
                    this.imageLoaded = !0,
                    this.$refs.image && (this.$refs.image.onload = null)
                },
                prepareTls: function() {
                    this.imageTl = a.a.timeline({
                        paused: !0
                    }),
                    this.imageTl.set(this.$el, {
                        y: s.k.width < 600 ? 0 : 50,
                        skewY: 0,
                        transformOrigin: "top"
                    }).to(this.$el, {
                        y: 0,
                        skewY: 0,
                        duration: 1.4,
                        ease: "cubic.out"
                    }, .1).to(this.$el, {
                        opacity: 1,
                        duration: .3,
                        ease: "linear"
                    }, .1),
                    this.imageTl.progress(0)
                },
                setSize: function() {
                    var e = this.itemData.image.dimensions
                      , t = e.width
                      , i = e.height
                      , s = this.$el.getBoundingClientRect();
                    this.$el.style.height = Math.floor(i / t * s.width) + "px"
                },
                onLoad: function() {
                    var e = this;
                    this.videoNeedsToPlay && this.$refs.video && this.$refs.video.play().then((function() {
                        e.isLoaded = !0
                    }
                    ))
                },
                onClick: function(e) {
                    e.preventDefault()
                },
                track: function() {
                    var e = this;
                    this.videoTracker = new s.n(this.$el,{
                        onlyOnce: !1,
                        onViewportIn: function() {
                            e.$refs.video && (e.$refs.video.play().then((function() {
                                e.isLoaded = !0
                            }
                            )),
                            e.videoNeedsToPlay = !0)
                        },
                        onViewportOut: function() {
                            e.$refs.video && (e.videoNeedsToPlay = !1,
                            e.$refs.video.pause())
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    }),
                    this.imageTracker = new s.n(this.$el,{
                        onlyOnce: !1,
                        offset: 150,
                        onViewportDownIn: function() {
                            e.imageTl.restart()
                        },
                        onViewportDownOut: function() {
                            e.imageTl.progress(0)
                        },
                        scrollTopGetter: function() {
                            return s.l.caseScrollY
                        }
                    })
                }
            }
        }
          , o = (i(255),
        i(38))
          , r = Object(o.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: ["case-media", e.isVideo ? "case-media--video" : "", {
                    "case-media--image-loaded": e.imageLoaded,
                    "case-media--video-loaded": e.isLoaded
                }],
                on: {
                    click: e.onClick
                }
            }, [i("img", {
                staticClass: "case-media__img preload",
                attrs: {
                    src: e.itemData.image.url.split("?")[0]
                },
                on: {
                    load: e.onImageLoad
                }
            }), e._v(" "), e.isVideo ? i("div", {
                staticClass: "case-media__video"
            }, [i("video", {
                ref: "video",
                attrs: {
                    src: e.itemData.video_link.url,
                    preload: "",
                    loop: "",
                    muted: "",
                    playsinline: "",
                    "webkit-playsinline": ""
                },
                domProps: {
                    muted: !0
                },
                on: {
                    canplaythrough: e.onLoad
                }
            })]) : e._e()])
        }
        ), [], !1, null, null, null);
        t.default = r.exports
    },
    272: function(e, t, i) {},
    278: function(e, t, i) {
        "use strict";
        i(272)
    },
    283: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i(18)
          , a = (i(60),
        i(15),
        i(233),
        i(0))
          , n = i(45)
          , o = i(7)
          , r = i(232)
          , c = i.n(r)
          , l = i(235)
          , u = i(261)
          , d = i(262)
          , h = i(263)
          , f = i(264);
        c.a.use(l.a);
        var p = {
            components: {
                CaseHero: u.default,
                CaseInfos: d.default,
                CaseText: h.default,
                CaseMedia: f.default
            },
            transition: function(e, t) {
                return {
                    mode: "in-out",
                    enter: function(i, s) {
                        i.style.zIndex = 1,
                        "case" === t.name && "case-id" === e.name && a.c.emit("work-scene:leave", e),
                        s()
                    },
                    beforeLeave: function(e) {},
                    leave: function(t, i) {
                        t.style.zIndex = 0,
                        o.a.killTweensOf(t, {
                            opacity: !0,
                            autoAlpha: !0
                        }),
                        "case-id" === e.name ? a.k.width / a.k.height >= 1.6 ? (o.a.to(t, {
                            autoAlpha: 0,
                            duration: .4,
                            delay: .3
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 1100)) : (o.a.to(t, {
                            autoAlpha: 0,
                            duration: .3,
                            ease: "linear"
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 300)) : (o.a.to(t, {
                            autoAlpha: 0,
                            duration: .2,
                            ease: "linear"
                        }),
                        setTimeout((function() {
                            i()
                        }
                        ), 300))
                    }
                }
            },
            asyncData: function(e) {
                return Object(s.a)(regeneratorRuntime.mark((function t() {
                    var i, s;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return e.$prismic,
                                e.error,
                                i = e.store,
                                t.next = 3,
                                i.dispatch("fetchCMS");
                            case 3:
                                return s = t.sent,
                                t.abrupt("return", s);
                            case 5:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            data: function() {
                for (var e, t, i = {}, s = 0, a = this.$store.state.data.work, n = 0, o = a.length; n < o; n++) {
                    var r = a[n];
                    if (r.uid === this.$route.params.id) {
                        s = n,
                        i = r;
                        break
                    }
                }
                var c = 0;
                (a.length > 1 && (t = a[c = s + 1 < a.length ? s + 1 : 0]),
                a.length > 2) && (e = a[s - 1 >= 0 ? s - 1 : a.length - 1]);
                return {
                    isIn: !1,
                    caseData: i,
                    caseIndex: s,
                    prev: e,
                    nextIndex: c,
                    next: t
                }
            },
            head: function() {
                return {
                    title: "".concat(this.$prismic.asText(this.caseData.title), " | Nils Schlegel | Home")
                }
            },
            watch: {},
            created: function() {
                this.lastScrollTop = 0
            },
            mounted: function() {
                var e = this;
                document.title = "".concat(this.$prismic.asText(this.caseData.title), " | Nils Schlegel | Home"),
                a.l.lastProjectIndex = this.caseIndex,
                this.navState = null,
                this.setSize(),
                a.k.addResize(this.setSize),
                a.i.add(this.tick),
                this.prepareTls(),
                a.g.hiddenPromise.then((function() {
                    o.a.to(e.$refs.spinner, {
                        autoAlpha: 1,
                        duration: 1,
                        delay: .4
                    }),
                    n.a.scenes.change("work").then((function() {
                        var t = !1;
                        a.c.emit("work-scene:changed"),
                        e.$refs.hero.readyPromise().then((function() {
                            o.a.set(e.$el, {
                                opacity: 1
                            }),
                            o.a.killTweensOf(e.$refs.spinner),
                            o.a.to(e.$refs.spinner, {
                                autoAlpha: 0,
                                duration: .3
                            });
                            var i = a.k.width / a.k.height < 1.6;
                            e.animateIn(i),
                            e.$refs.infos.animateIn(i),
                            t && (a.c.emit("work-scene:reset", {
                                lines: e.$el.querySelectorAll(".case-line")
                            }),
                            a.c.emit("work-scene:animateLine", {
                                index: 0
                            })),
                            setTimeout((function() {
                                a.c.emit("work-scene:reset", {
                                    lines: e.$el.querySelectorAll(".case-line")
                                }),
                                t = !0,
                                setTimeout((function() {
                                    a.c.emit("work-scene:animateLine", {
                                        index: 0
                                    })
                                }
                                ), 300)
                            }
                            ), 1e3)
                        }
                        ))
                    }
                    ))
                }
                ))
            },
            beforeDestroy: function() {
                var e = this;
                this.footerTracker && this.footerTracker.destroy(),
                clearInterval(this.interval),
                clearTimeout(this._check),
                this._to && clearTimeout(this._to),
                this._inTo && clearTimeout(this._inTo),
                clearTimeout(this.scrollBarTo),
                a.k.removeResize(this.setSize),
                a.i.remove(this.tick),
                this.footerTl && this.footerTl.kill(),
                setTimeout((function() {
                    e.scrollBar && e.scrollBar.destroy()
                }
                ), 1e3)
            },
            methods: {
                prepareTls: function() {
                    this.footerTl = o.a.timeline({
                        paused: !0
                    }),
                    o.a.set(this.$refs.link, {
                        x: -30,
                        rotationX: 30,
                        opacity: 0
                    }),
                    this.footerTl.add((function() {
                        a.c.emit("work-scene:animateLine", {
                            index: 1
                        })
                    }
                    ), .1).to(this.$refs.link, {
                        opacity: 1,
                        x: 0,
                        rotationX: 0,
                        duration: 1,
                        ease: "cubic.easeOut"
                    }, .45),
                    this.ctaText = new a.j(this.$refs.ctaText,{
                        type: "words, chars",
                        reduceWhiteSpace: !1
                    }).chars
                },
                animateIn: function(e) {
                    var t = this;
                    this.isIn = !0,
                    this._inTo = setTimeout((function() {
                        t.initScrollBar(),
                        t._inTo = setTimeout((function() {
                            t.$refs.mediaText && t.$refs.mediaText.forEach((function(e) {
                                return e.track()
                            }
                            )),
                            t.$refs.medias && t.$refs.medias.forEach((function(e) {
                                return e.track()
                            }
                            )),
                            t.footerTracker = new a.n(t.$refs.line,{
                                onlyOnce: !1,
                                offset: 500,
                                onViewportDownIn: function() {
                                    t.footerTl.restart()
                                },
                                onViewportDownOut: function() {
                                    t.footerTl.progress(0)
                                },
                                scrollTopGetter: function() {
                                    return a.l.caseScrollY
                                }
                            })
                        }
                        ), 300)
                    }
                    ), e ? 1e3 : 1200),
                    this.$refs.hero.animateIn(e)
                },
                initScrollBar: function() {
                    var e, t = this;
                    this.scrollBar && (this.scrollBar.destroy(),
                    e = this.scrollBar.scrollTop),
                    this.scrollBar = c.a.init(this.$refs.wrapper, {
                        thumbMinSize: 100,
                        autoRender: !1,
                        plugins: {
                            disableScroll: {
                                lockDirection: "x"
                            }
                        }
                    }),
                    e && this.scrollBar.setPosition(0, e),
                    this.scrollBar.track.xAxis.element.remove(),
                    a.b.isMobile && this.scrollBar.track.yAxis.element.remove(),
                    a.l.caseScroll = this.scrollBar,
                    clearInterval(this.interval),
                    this.interval = setInterval((function() {
                        isNaN(t.scrollBar._momentum.y) && t.initScrollBar()
                    }
                    ), 200)
                },
                setSize: function() {},
                onTouchMove: function(e) {
                    "android" === a.b.os.name && e.preventDefault()
                },
                onNextEnter: function() {
                    var e = this;
                    if (!(a.b.isMobile && this.footerTl.progress() > .99)) {
                        this.mouseIn = !0;
                        var t = this.$refs
                          , i = t.arrow
                          , s = t.underline
                          , n = t.pName;
                        o.a.killTweensOf([i, s, n]),
                        o.a.to(i, {
                            x: 3,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        o.a.to(n, {
                            x: 10,
                            duration: .3,
                            ease: "cubic.inOut"
                        }),
                        o.a.to(s, {
                            x: 3,
                            opacity: .2,
                            duration: .3,
                            ease: "cubic.inOut"
                        });
                        !function t(i) {
                            a.a.loopText(e.ctaText, i, (function() {
                                e.mouseIn && t(!0)
                            }
                            ))
                        }()
                    }
                },
                onNextLeave: function() {
                    if (!(a.b.isMobile && this.footerTl.progress() > .99)) {
                        this.mouseIn = !1;
                        var e = this.$refs
                          , t = e.arrow
                          , i = e.underline
                          , s = e.pName;
                        t && (o.a.killTweensOf([t, i, s]),
                        o.a.to(t, {
                            x: 0,
                            duration: .3,
                            ease: "cubic.out"
                        }),
                        o.a.to(s, {
                            x: 0,
                            duration: .2,
                            ease: "cubic.out"
                        }),
                        i && o.a.to(i, {
                            x: 0,
                            scaleY: 1,
                            skewX: 0,
                            opacity: 1,
                            duration: .15,
                            ease: "cubic.out"
                        }),
                        a.a.resetLoopText(this.ctaText))
                    }
                },
                tick: function() {}
            }
        }
          , m = (i(278),
        i(38))
          , v = Object(m.a)(p, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: ["case", {
                    "case--is-in": e.isIn
                }],
                on: {
                    touchmove: e.onTouchMove
                }
            }, [i("div", {
                ref: "wrapper",
                staticClass: "case__wrapper"
            }, [i("case-hero", {
                ref: "hero",
                attrs: {
                    "case-data": e.caseData
                }
            }), e._v(" "), i("case-infos", {
                ref: "infos",
                attrs: {
                    "case-data": e.caseData
                }
            }), e._v(" "), i("div", {
                staticClass: "case__stubs"
            }, e._l(e.caseData.body, (function(t, s) {
                return i("div", {
                    key: s,
                    staticClass: "case__stub"
                }, ["description" === t.slice_type ? i("case-text", {
                    ref: "mediaText",
                    refInFor: !0,
                    attrs: {
                        index: s,
                        "stub-data": t
                    }
                }) : e._e(), e._v(" "), "media" === t.slice_type ? i("div", {
                    class: ["case__media-stub", "case__media-stub--" + t.items.length]
                }, e._l(t.items, (function(e, t) {
                    return i("case-media", {
                        key: t,
                        ref: "medias",
                        refInFor: !0,
                        attrs: {
                            "item-index": t,
                            index: s,
                            "item-data": e
                        }
                    })
                }
                )), 1) : e._e()], 1)
            }
            )), 0), e._v(" "), i("div", {
                ref: "footer",
                staticClass: "case__footer"
            }, [i("div", {
                ref: "line",
                staticClass: "case__line case-line"
            }), e._v(" "), i("div", {
                ref: "link",
                staticClass: "case__footer-link",
                on: {
                    mouseenter: e.onNextEnter,
                    mouseleave: e.onNextLeave
                }
            }, [i("NuxtLink", {
                attrs: {
                    to: "/case/" + e.next.uid
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
            })]), e._v(" "), i("span", [e._v("\n            Next Project:\n            "), i("span", {
                ref: "pName",
                staticClass: "case__footer-next-name"
            }, [i("span", {
                ref: "ctaText"
            }, [e._v(e._s(e.$prismic.asText(e.next.title)))]), e._v(" "), i("div", {
                ref: "underline",
                staticClass: "underline"
            })])])])], 1)])], 1), e._v(" "), i("div", {
                ref: "spinner",
                staticClass: "case__spinner"
            })])
        }
        ), [], !1, null, null, null);
        t.default = v.exports;
        installComponents(v, {
            CaseHero: i(261).default,
            CaseInfos: i(262).default,
            CaseText: i(263).default,
            CaseMedia: i(264).default
        })
    }
}]);
