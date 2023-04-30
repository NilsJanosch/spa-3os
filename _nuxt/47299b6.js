(window.webpackJsonp = window.webpackJsonp || []).push([[14], {
    235: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return d
        }
        ));
        a(12),
        a(24),
        a(26),
        a(27),
        a(32),
        a(34);
        var i = a(16)
          , n = a(3)
          , o = a(4)
          , s = a(9)
          , r = a(8)
          , c = a(2)
          , l = a(232);
        a(0);
        function u(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function p(t) {
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
                var a, i = Object(c.a)(t);
                if (e) {
                    var n = Object(c.a)(this).constructor;
                    a = Reflect.construct(i, arguments, n)
                } else
                    a = i.apply(this, arguments);
                return Object(r.a)(this, a)
            }
        }
        var d = function(t) {
            Object(s.a)(a, t);
            var e = p(a);
            function a() {
                return Object(n.a)(this, a),
                e.apply(this, arguments)
            }
            return Object(o.a)(a, [{
                key: "transformDelta",
                value: function(t) {
                    return this.options.multiplier && (t.y *= this.options.multiplier),
                    this.options.getDelta && this.options.getDelta(t),
                    this.options.lockDirection && (t[this.options.lockDirection] = 1e-12),
                    this.options.lock && (t.x = 1e-12,
                    t.y = 1e-12),
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(a), !0).forEach((function(e) {
                                Object(i.a)(t, e, a[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
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
            a
        }(l.ScrollbarPlugin);
        d.pluginName = "disableScroll",
        d.defaultOptions = {
            direction: null
        }
    },
    237: function(t, e, a) {},
    238: function(t, e, a) {
        "use strict";
        var i = a(239)
          , n = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        t.exports = function(t, e) {
            var a, o, s, r, c, l, u = !1;
            e || (e = {}),
            a = e.debug || !1;
            try {
                if (s = i(),
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
                l.addEventListener("copy", (function(i) {
                    if (i.stopPropagation(),
                    e.format)
                        if (i.preventDefault(),
                        void 0 === i.clipboardData) {
                            a && console.warn("unable to use e.clipboardData"),
                            a && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var o = n[e.format] || n.default;
                            window.clipboardData.setData(o, t)
                        } else
                            i.clipboardData.clearData(),
                            i.clipboardData.setData(e.format, t);
                    e.onCopy && (i.preventDefault(),
                    e.onCopy(i.clipboardData))
                }
                )),
                document.body.appendChild(l),
                r.selectNodeContents(l),
                c.addRange(r),
                !document.execCommand("copy"))
                    throw new Error("copy command was unsuccessful");
                u = !0
            } catch (i) {
                a && console.error("unable to copy using execCommand: ", i),
                a && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(e.format || "text", t),
                    e.onCopy && e.onCopy(window.clipboardData),
                    u = !0
                } catch (i) {
                    a && console.error("unable to copy using clipboardData: ", i),
                    a && console.error("falling back to prompt"),
                    o = function(t) {
                        var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                        return t.replace(/#{\s*key\s*}/g, e)
                    }("message"in e ? e.message : "Copy to clipboard: #{key}, Enter"),
                    window.prompt(o, t)
                }
            } finally {
                c && ("function" == typeof c.removeRange ? c.removeRange(r) : c.removeAllRanges()),
                l && document.body.removeChild(l),
                s()
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
            for (var e = document.activeElement, a = [], i = 0; i < t.rangeCount; i++)
                a.push(t.getRangeAt(i));
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
                t.rangeCount || a.forEach((function(e) {
                    t.addRange(e)
                }
                )),
                e && e.focus()
            }
        }
    },
    250: function(t, e, a) {
        "use strict";
        a(237)
    },
    260: function(t, e, a) {
        "use strict";
        a.r(e);
        a(229);
        var i = a(0)
          , n = a(7)
          , o = {
            components: {},
            props: {
                expData: Object,
                index: Number,
                isLast: Boolean
            },
            data: function() {
                return {
                    faded: !1
                }
            },
            watch: {},
            created: function() {
                this.emitHead = "about-el:"
            },
            mounted: function() {
                i.c.on(this.emitHead + "entered", this.onEnter),
                i.c.on(this.emitHead + "leaved", this.onLeave),
                this.prepareIn()
            },
            beforeDestroy: function() {},
            methods: {
                prepareIn: function(t) {
                    n.a.set(this.$refs.content, {
                        autoAlpha: 0
                    })
                },
                animateIn: function(t) {
                    this.reveal(.1 * this.index)
                },
                reveal: function(t, e) {
                    var a = this;
                    if (e) {
                        var o = Date.now();
                        t -= (o - this.now) / 1e3,
                        t = Math.max(0, t)
                    }
                    n.a.to(this.$refs.content, {
                        autoAlpha: 1.7,
                        duration: .6,
                        ease: "linear",
                        delay: t,
                        onStart: function() {
                            i.c.emit(a.emitHead + "animateIn", {
                                index: a.index
                            }),
                            a.isLast && setTimeout((function() {
                                i.c.emit(a.emitHead + "animateIn", {
                                    index: a.index + 1
                                })
                            }
                            ), t)
                        },
                        onComplete: function() {
                            a._in = !0
                        }
                    })
                },
                onMouseEnter: function() {
                    !i.b.isMobile && this._in && i.c.emit(this.emitHead + "entered", {
                        index: this.index
                    })
                },
                onMouseLeave: function() {
                    !i.b.isMobile && this._in && i.c.emit(this.emitHead + "leaved", {
                        index: this.index
                    })
                },
                onEnter: function(t) {
                    var e = t.index;
                    this.faded = e !== this.index
                },
                onLeave: function() {
                    this.faded = !1
                }
            }
        }
          , s = (a(250),
        a(38))
          , r = Object(s.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("li", {
                class: ["experiences-el", {
                    "experiences-el--faded": t.faded
                }],
                on: {
                    mouseenter: t.onMouseEnter,
                    mouseleave: t.onMouseLeave
                }
            }, [a("div", {
                ref: "content",
                staticClass: "experiences-el__content"
            }, [a("div", {
                staticClass: "experiences-el__date"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.expData.date)) + "\n    ")]), t._v(" "), a("div", {
                staticClass: "experiences-el__company"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.expData.company)) + "\n    ")]), t._v(" "), a("div", {
                staticClass: "experiences-el__role"
            }, [t._v("\n      " + t._s(t.$prismic.asText(t.expData.role)) + "\n    ")])]), t._v(" "), a("div", {
                staticClass: "experiences-el__line experiences-el__line--bottom about-line"
            })])
        }
        ), [], !1, null, null, null);
        e.default = r.exports
    },
    269: function(t, e, a) {},
    275: function(t, e, a) {
        "use strict";
        a(269)
    },
    280: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a(18)
          , n = (a(60),
        a(0))
          , o = a(7)
          , s = a(235)
          , r = a(232)
          , c = a.n(r)
          , l = a(45)
          , u = a(260)
          , p = a(238)
          , d = a.n(p);
        c.a.use(s.a);
        var f = {
            components: {
                ExperiencesEl: u.default
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
                        ), 200)
                    }
                }
            },
            asyncData: function(t) {
                return Object(i.a)(regeneratorRuntime.mark((function e() {
                    var a, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.$prismic,
                                t.error,
                                a = t.store,
                                e.next = 3,
                                a.dispatch("fetchCMS");
                            case 3:
                                return i = e.sent,
                                e.abrupt("return", i);
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
                    emailText: "Email",
                    scroll: !1
                }
            },
            head: function() {
                return {
                    title: "Nils Schlegel | About"
                }
            },
            created: function() {
                n.l.lastProjectIndex = 0,
                this.idleText = "Email",
                this.copyText = "Copy mail?",
                this.copiedText = "Mail copied"
            },
            mounted: function() {
                var t = this;
                n.l.homeScroll = null,
                document.title = "Nils Schlegel | About",
                this.prepareIn(),
                n.g.hiddenPromise.then((function() {
                    t._inTo = setTimeout((function() {
                        t.animateIn()
                    }
                    ), 500)
                }
                )),
                l.a.scenes.change("about"),
                n.k.addResize(this.setSize),
                this.setSize(),
                n.i.add(this.tick),
                this.$refs.desc.querySelectorAll("a").forEach((function(t, e) {
                    t.classList.add("underline")
                }
                ));
                var e = this.$refs.content.querySelectorAll("a");
                n.b.isMobile || e.forEach((function(t, e) {
                    var a = new n.j(t,{
                        type: "chars,words",
                        reduceWhiteSpace: !1
                    }).chars
                      , i = !1;
                    t.onmouseenter = function() {
                        i = !0;
                        !function t(e) {
                            n.a.loopText(a, e, (function() {
                                i && t(!0)
                            }
                            ))
                        }()
                    }
                    ,
                    t.onmouseleave = function() {
                        i = !1,
                        n.a.resetLoopText(a)
                    }
                }
                ))
            },
            beforeDestroy: function() {
                var t = this.scrollBar;
                t && setTimeout((function() {
                    t.destroy()
                }
                ), 500),
                this._inTl && this._inTl.kill(),
                clearTimeout(this._inTo),
                n.k.removeResize(this.setSize),
                n.i.remove(this.tick),
                n.l.aboutScroll = null
            },
            methods: {
                prepareIn: function() {
                    var t = this;
                    this._titleSplitted = new n.j(this.$refs.title,{
                        type: "chars"
                    }),
                    o.a.set(this._titleSplitted.chars, {
                        opacity: 0,
                        x: 10
                    }),
                    this._titleSplitted2 = new n.j(this.$refs.xpTitle,{
                        type: "chars",
                        reduceWhiteSpace: !1
                    }),
                    o.a.set(this._titleSplitted2.chars, {
                        opacity: 0,
                        x: 10
                    });
                    var e = new n.j(this.$refs.desc,{
                        type: "words",
                        reduceWhiteSpace: !1
                    }).words
                      , a = new n.j(this.$refs.info,{
                        type: "words",
                        reduceWhiteSpace: !1
                    }).words
                      , i = this.$refs.socials.children
                      , s = this.$refs.email;
                    o.a.set(s, {
                        autoAlpha: 0,
                        x: 8
                    }),
                    o.a.set(i, {
                        autoAlpha: 0,
                        x: 8
                    }),
                    o.a.set(e, {
                        autoAlpha: 0,
                        x: 8
                    }),
                    o.a.set(a, {
                        autoAlpha: 0,
                        x: 8
                    });
                    var r = n.k.width < 770;
                    this._inTl = o.a.timeline({
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
                    }, 0).to(s, {
                        autoAlpha: 1,
                        duration: .8,
                        ease: "linear"
                    }, r ? .8 : .2).to(s, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out"
                    }, r ? .8 : .2).to(i, {
                        autoAlpha: 1,
                        duration: .8,
                        ease: "linear",
                        stagger: .07
                    }, r ? .9 : .2).to(i, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: .07
                    }, r ? .9 : .2).to(e, {
                        autoAlpha: 1,
                        duration: .8,
                        ease: "linear",
                        stagger: r ? .01 : .02
                    }, r ? .3 : .2).to(e, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: r ? .01 : .02
                    }, r ? .3 : .2).to(a, {
                        autoAlpha: 1,
                        duration: .8,
                        ease: "linear",
                        stagger: .02
                    }, r ? .6 : .3).to(a, {
                        x: 0,
                        duration: 1,
                        ease: "cubic.out",
                        stagger: .02
                    }, r ? .6 : .3).add((function() {
                        t.$el.querySelectorAll(".underline").forEach((function(t) {
                            return t.classList.add("underline--is-in")
                        }
                        ))
                    }
                    ), 1).to(this._titleSplitted2.chars, {
                        opacity: 1,
                        duration: 1,
                        stagger: .05,
                        ease: "cubic.out"
                    }, .5).to(this._titleSplitted2.chars, {
                        x: 0,
                        duration: 1,
                        stagger: .05,
                        ease: "cubic.out"
                    }, .5).add((function() {
                        n.c.emit("about-el:animateIn", {
                            index: -1,
                            aboutHead: !0
                        })
                    }
                    ), .2),
                    n.c.emit("about-scene:init", {
                        els: this.$el.querySelectorAll(".about-line")
                    })
                },
                animateIn: function() {
                    var t = this;
                    o.a.set(this.$el, {
                        opacity: 1
                    }),
                    n.c.emit("about-scene:init"),
                    this._inTl.play(),
                    this._inTo = setTimeout((function() {
                        t.$refs.expEls.forEach((function(t) {
                            t.animateIn()
                        }
                        ))
                    }
                    ), 600)
                },
                setSize: function() {
                    var t = n.k.height
                      , e = this.$refs.wrapper.getBoundingClientRect()
                      , a = this.scroll
                      , i = e.height > t;
                    a !== i && this.toggleScroll(i)
                },
                toggleScroll: function(t) {
                    var e;
                    this.scroll = t,
                    this.scrollBar && (this.scrollBar.destroy(),
                    e = this.scrollBar.scrollTop,
                    this.scrollBar = null,
                    n.l.aboutScroll = null),
                    t && (this.scrollBar = c.a.init(this.$refs.scrollWrapper, {
                        thumbMinSize: 100,
                        autoRender: !1,
                        plugins: {
                            disableScroll: {
                                lockDirection: "x"
                            }
                        }
                    }),
                    n.l.aboutScroll = this.scrollBar,
                    e && this.scrollBar.setPosition(0, e),
                    n.b.isMobile && (this.scrollBar.track.xAxis.element.remove(),
                    this.scrollBar.track.yAxis.element.remove()))
                },
                onMailEnter: function() {
                    n.b.isMobile || this.locked || (this.emailText = this.copyText)
                },
                onMailLeave: function() {
                    n.b.isMobile || this.locked || (this.emailText = this.idleText)
                },
                onMailClick: function() {
                    this.emailText = this.copiedText;
                    var t = this.$refs.mail;
                    o.a.to(t, {
                        opacity: 1,
                        duration: .3
                    }),
                    o.a.set(t, {
                        opacity: 0
                    }),
                    o.a.set(t, {
                        opacity: 1,
                        delay: .08
                    }),
                    o.a.set(t, {
                        opacity: 0,
                        delay: .12
                    }),
                    o.a.set(t, {
                        opacity: 1,
                        delay: .2
                    }),
                    d()("nils.janosch.schlegel@hotmail.com")
                },
                tick: function() {
                    this.scrollBar && this.scrollBar.render()
                }
            }
        }
          , h = (a(275),
        a(38))
          , m = Object(h.a)(f, (function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                class: ["about", {
                    "about--scroll": t.scroll
                }]
            }, [a("div", {
                ref: "scrollWrapper",
                staticClass: "about__scroll-wrapper"
            }, [a("div", {
                ref: "wrapper",
                staticClass: "about__wrapper"
            }, [a("h1", {
                ref: "title",
                staticClass: "about__title"
            }, [t._v("\n        About\n      ")]), t._v(" "), a("div", {
                staticClass: "about__line about-line"
            }), t._v(" "), a("div", {
                ref: "content",
                staticClass: "about__content"
            }, [a("div", {
                staticClass: "about__left"
            }, [a("div", {
                ref: "email",
                staticClass: "about__mail"
            }, [a("span", {
                ref: "mail",
                staticClass: "underline",
                on: {
                    mouseenter: t.onMailEnter,
                    mouseleave: t.onMailLeave,
                    click: t.onMailClick
                }
            }, [t._v(t._s(t.emailText))])]), t._v(" "), a("div", {
                ref: "socials",
                staticClass: "about__socials"
            }, [a("span", {
                staticClass: "about__socials-head"
            }, [t._v("Also available on")]), t._v(" "), t._l(t.$store.state.data.socials, (function(e, i) {
                return a("a", {
                    key: i,
                    staticClass: "about__social",
                    attrs: {
                        href: e.social_link.url,
                        target: "_blank"
                    }
                }, [a("span", {
                    staticClass: "underline"
                }, [t._v(" " + t._s(t.$prismic.asText(e.social_name)))])])
            }
            ))], 2)]), t._v(" "), a("div", {
                staticClass: "about__right"
            }, [a("div", {
                ref: "desc",
                staticClass: "about__desc",
                domProps: {
                    innerHTML: t._s(t.$prismic.asHtml(t.$store.state.data.description))
                }
            }), t._v(" "), a("p", {
                ref: "info",
                staticClass: "about__info"
            }, [t._m(0), t._v(" "), a("span", {
                staticClass: "about__info-sp"
            }, [t._v("\n              Typeface - Neue Montreal by\n            ")]), t._v(" "), t._m(1)])])]), t._v(" "), a("div", {
                staticClass: "about__experience"
            }, [a("h2", {
                ref: "xpTitle",
                staticClass: "about__title"
            }, [t._v("\n          Experiences\n        ")]), t._v(" "), a("div", {
                staticClass: "about__line about-line"
            }), t._v(" "), t._l(t.$store.state.data.experiences, (function(e, i) {
                return a("experiences-el", {
                    key: i,
                    ref: "expEls",
                    refInFor: !0,
                    attrs: {
                        index: i,
                        "exp-data": e,
                        "is-last": i === t.$store.state.data.experiences.length - 1
                    }
                })
            }
            ))], 2)])])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("span", {
                staticClass: "about__info-sp about__info-top"
            }, [t._v("\n              Portfolio coded with love by "), a("a", {
                attrs: {
                    href: "https://patrickheng.com",
                    target: "_blank"
                }
            }, [a("span", {
                staticClass: "underline"
            }, [t._v("Patou")])])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("a", {
                attrs: {
                    href: "https://pangrampangram.com/",
                    target: "_blank"
                }
            }, [a("span", {
                staticClass: "underline"
            }, [t._v("Pangram Pangram Foundry")])])
        }
        ], !1, null, null, null);
        e.default = m.exports;
        installComponents(m, {
            ExperiencesEl: a(260).default
        })
    }
}]);
