(window.webpackJsonp = window.webpackJsonp || []).push([[15], {
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
            return u
        }
        ));
        i(12),
        i(24),
        i(26),
        i(27),
        i(32),
        i(34);
        var a = i(16)
          , n = i(3)
          , r = i(4)
          , s = i(9)
          , c = i(8)
          , l = i(2)
          , o = i(232);
        i(0);
        function h(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                i.push.apply(i, a)
            }
            return i
        }
        function v(e) {
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
                var i, a = Object(l.a)(e);
                if (t) {
                    var n = Object(l.a)(this).constructor;
                    i = Reflect.construct(a, arguments, n)
                } else
                    i = a.apply(this, arguments);
                return Object(c.a)(this, i)
            }
        }
        var u = function(e) {
            Object(s.a)(i, e);
            var t = v(i);
            function i() {
                return Object(n.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(r.a)(i, [{
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
                            t % 2 ? h(Object(i), !0).forEach((function(t) {
                                Object(a.a)(e, t, i[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(t) {
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
        }(o.ScrollbarPlugin);
        u.pluginName = "disableScroll",
        u.defaultOptions = {
            direction: null
        }
    },
    240: function(e, t, i) {},
    251: function(e, t, i) {
        "use strict";
        i(240)
    },
    270: function(e, t, i) {},
    274: function(e, t, i) {
        "use strict";
        i.r(t);
        i(229),
        i(233);
        var a = i(0)
          , n = i(7)
          , r = {
            components: {},
            props: {
                archiveData: Object,
                index: Number
            },
            data: function() {
                var e = !1
                  , t = !1
                  , i = !1
                  , a = null;
                return this.archiveData.preview_image && this.archiveData.preview_image.url && (a = this.archiveData.preview_image.url),
                this.archiveData.internal_case_study && this.archiveData.internal_case_study.uid ? (t = "/case/".concat(this.archiveData.internal_case_study.uid),
                e = "internal") : this.archiveData.link && this.archiveData.link.url && (i = this.archiveData.link.url,
                e = "external"),
                {
                    image: a,
                    intenalLink: t,
                    externalLink: i,
                    linkType: e,
                    faded: !1
                }
            },
            watch: {},
            created: function() {
                this.emitHead = "archive-el:"
            },
            mounted: function() {
                this.content = this.intenalLink ? this.$refs.content.$el : this.$refs.content,
                a.c.on(this.emitHead + "entered", this.onEnter),
                a.c.on(this.emitHead + "leaved", this.onLeave),
                this.prepareIn(),
                this.archiveData.preview_image.url && (this.$el.setAttribute("data-width", this.archiveData.preview_image.dimensions.width),
                this.$el.setAttribute("data-height", this.archiveData.preview_image.dimensions.height))
            },
            beforeDestroy: function() {
                a.c.off(this.emitHead + "entered", this.onEnter),
                a.c.off(this.emitHead + "leaved", this.onLeave)
            },
            methods: {
                prepareIn: function(e) {
                    n.a.set(this.content, {
                        autoAlpha: 0
                    })
                },
                animateIn: function(e) {
                    this.reveal(.05 * this.index)
                },
                reveal: function(e, t) {
                    var i = this;
                    t && (e -= (Date.now() - this.now) / 1e3,
                    e = Math.max(0, e));
                    n.a.to(this.content, {
                        autoAlpha: 1.7,
                        duration: .6,
                        ease: "linear",
                        delay: e,
                        onStart: function() {
                            a.c.emit(i.emitHead + "animateIn", {
                                index: i.index
                            })
                        },
                        onComplete: function() {
                            i._in = !0
                        }
                    })
                },
                setSize: function() {},
                onMouseEnter: function() {
                    !a.b.isMobile && this._in && a.c.emit(this.emitHead + "entered", {
                        index: this.index
                    })
                },
                onMouseLeave: function() {
                    !a.b.isMobile && this._in && a.c.emit(this.emitHead + "leaved", {
                        index: this.index
                    })
                },
                onEnter: function(e) {
                    var t = e.index;
                    this.faded = t !== this.index
                },
                onLeave: function() {
                    this.faded = !1
                }
            }
        }
          , s = (i(251),
        i(38))
          , c = Object(s.a)(r, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("li", {
                class: ["archive-el", {
                    "archive-el--faded": e.faded
                }],
                attrs: {
                    "data-image": e.image
                },
                on: {
                    mouseenter: e.onMouseEnter,
                    mouseleave: e.onMouseLeave
                }
            }, [0 === e.index ? i("div", {
                staticClass: "archive-el__line archive-el__line--top archive-line"
            }) : e._e(), e._v(" "), "external" === e.linkType ? i("a", {
                ref: "content",
                staticClass: "archive-el__content",
                attrs: {
                    href: e.externalLink,
                    target: "_blank"
                }
            }, [i("div", {
                staticClass: "archive-el__date"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.date)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__title"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.title)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__client"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.client)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__role"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.role)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__type"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.type)) + "\n    ")])]) : e._e(), e._v(" "), "internal" === e.linkType ? i("NuxtLink", {
                ref: "content",
                staticClass: "archive-el__content",
                attrs: {
                    to: e.intenalLink
                }
            }, [i("div", {
                staticClass: "archive-el__date"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.date)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__title"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.title)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__client"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.client)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__role"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.role)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__type"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.type)) + "\n    ")])]) : e._e(), e._v(" "), e.linkType ? e._e() : i("div", {
                ref: "content",
                staticClass: "archive-el__content"
            }, [i("div", {
                staticClass: "archive-el__date"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.date)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__title"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.title)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__client"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.client)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__role"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.role)) + "\n    ")]), e._v(" "), i("div", {
                staticClass: "archive-el__type"
            }, [e._v("\n      " + e._s(e.$prismic.asText(e.archiveData.type)) + "\n    ")])]), e._v(" "), i("div", {
                staticClass: "archive-el__line archive-el__line--bottom archive-line"
            })], 1)
        }
        ), [], !1, null, null, null);
        t.default = c.exports
    },
    276: function(e, t, i) {
        "use strict";
        i(270)
    },
    281: function(e, t, i) {
        "use strict";
        i.r(t);
        var a = i(18)
          , n = (i(60),
        i(45))
          , r = i(0)
          , s = i(7)
          , c = i(235)
          , l = i(232)
          , o = i.n(l);
        o.a.use(c.a);
        var h = {
            components: {},
            transition: function(e, t) {
                return {
                    mode: "in-out",
                    enter: function(e, t) {
                        t()
                    },
                    beforeLeave: function(e) {},
                    leave: function(e, t) {
                        setTimeout((function() {
                            t()
                        }
                        ), 200)
                    }
                }
            },
            asyncData: function(e) {
                return Object(a.a)(regeneratorRuntime.mark((function t() {
                    var i, a;
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
                                return a = t.sent,
                                t.abrupt("return", a);
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
                return {
                    scroll: !1
                }
            },
            head: function() {
                return {
                    title: "Nils Schlegel | Archive"
                }
            },
            created: function() {
                r.l.lastProjectIndex = 0
            },
            mounted: function() {
                var e = this;
                document.title = "Nils Schlegel | Archive",
                n.a.scenes.change("archive"),
                r.k.addResize(this.setSize),
                this.setSize();
                var t = function() {
                    e.setSize(),
                    r.i.add(e.tick),
                    e.prepareIn(),
                    r.g.hiddenPromise.then((function() {
                        e._inTo = setTimeout((function() {
                            e.animateIn()
                        }
                        ), 300)
                    }
                    ))
                };
                this.$refs.archiveEls ? t() : this._interval = setInterval((function() {
                    e.$refs.archiveEls && (t(),
                    clearInterval(e._interval))
                }
                ), 100)
            },
            beforeDestroy: function() {
                this._inTl && this._inTl.kill(),
                clearTimeout(this._inTo),
                clearInterval(this._interval),
                r.k.removeResize(this.setSize),
                r.i.remove(this.tick),
                r.l.archiveScroll = null;
                var e = this.scrollBar;
                e && setTimeout((function() {
                    e.destroy()
                }
                ), 500)
            },
            methods: {
                setSize: function() {
                    var e = r.k.height
                      , t = this.$refs.wrapper.getBoundingClientRect()
                      , i = this.scroll
                      , a = t.height > e;
                    i !== a && this.toggleScroll(a)
                },
                toggleScroll: function(e) {
                    var t;
                    this.scroll = e,
                    this.scrollBar && (this.scrollBar.destroy(),
                    t = this.scrollBar.scrollTop,
                    this.scrollBar = null,
                    r.l.archiveScroll = this.scrollBar),
                    e && (this.scrollBar = o.a.init(this.$refs.scrollWrapper, {
                        thumbMinSize: 100,
                        autoRender: !1,
                        plugins: {
                            disableScroll: {
                                lockDirection: "x"
                            }
                        }
                    }),
                    r.l.archiveScroll = this.scrollBar,
                    t && this.scrollBar.setPosition(0, t),
                    r.b.isMobile && (this.scrollBar.track.xAxis.element.remove(),
                    this.scrollBar.track.yAxis.element.remove()))
                },
                prepareIn: function() {
                    this._titleSplitted = new r.j(this.$refs.title,{
                        type: "chars"
                    }),
                    s.a.set(this._titleSplitted.chars, {
                        opacity: 0,
                        x: 10
                    }),
                    this._inTl = s.a.timeline({
                        paused: !0
                    }),
                    this._inTl.to(this._titleSplitted.chars, {
                        opacity: 1,
                        duration: 1,
                        stagger: .05,
                        ease: "cubic.out"
                    }, 0).to(this._titleSplitted.chars, {
                        x: 0,
                        duration: 1,
                        stagger: .05,
                        ease: "cubic.out"
                    }, 0),
                    r.c.emit("archive-scene:init", {
                        els: this.$el.querySelectorAll(".archive-line")
                    })
                },
                animateIn: function() {
                    var e = this;
                    r.c.emit("archive-scene:init"),
                    s.a.set(this.$el, {
                        opacity: 1
                    }),
                    this._inTl.play(),
                    this._inTo = setTimeout((function() {
                        e.$refs.archiveEls.forEach((function(t) {
                            t.animateIn(e.scroll)
                        }
                        ))
                    }
                    ), 300)
                },
                onLeave: function() {
                    r.b.isMobile || r.c.emit("archive:list-out")
                },
                tick: function() {
                    this.scrollBar && this.scrollBar.render()
                }
            }
        }
          , v = (i(276),
        i(38))
          , u = Object(v.a)(h, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: ["archive", {
                    "archive--scroll": e.scroll
                }]
            }, [i("div", {
                ref: "scrollWrapper",
                staticClass: "archive__scroll-wrapper"
            }, [i("div", {
                ref: "wrapper",
                staticClass: "archive__wrapper"
            }, [i("h1", {
                ref: "title",
                staticClass: "archive__title"
            }, [e._v("\n        Past projects\n      ")]), e._v(" "), i("ul", {
                staticClass: "archive__list",
                on: {
                    mouseleave: e.onLeave
                }
            }, e._l(e.$store.state.data.archive_list, (function(e, t) {
                return i("archive-el", {
                    key: t,
                    ref: "archiveEls",
                    refInFor: !0,
                    attrs: {
                        index: t,
                        "archive-data": e
                    }
                })
            }
            )), 1)])])])
        }
        ), [], !1, null, null, null);
        t.default = u.exports;
        installComponents(u, {
            ArchiveEl: i(274).default
        })
    }
}]);
