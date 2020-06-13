! function() {
    for (var t, e = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = i.length, r = window.console = window.console || {}; n--;) t = i[n], r[t] || (r[t] = e)
}(),
    function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function P(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = a), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var i = t(this),
                    n = i.data(T);
                n || (n = new k(this, e), i.data(T, n))
            })
        }

        function k(S, P) {
            function K(e) {
                if (!(Re() || t(e.target).closest(P.excludedElements, W).length > 0)) {
                    var n, i = e.originalEvent ? e.originalEvent : e,
                        r = x ? i.touches[0] : i;
                    return Y = y, x ? H = i.touches.length : e.preventDefault(), C = 0, R = null, B = null, M = 0, z = 0, $ = 0, j = 1, D = 0, N = De(), X = We(), Ie(), !x || H === P.fingers || P.fingers === m || fe() ? (ze(0, r), U = Ze(), 2 == H && (ze(1, i.touches[1]), z = $ = Ne(N[0].start, N[1].start)), (P.swipeStatus || P.pinchStatus) && (n = oe(i, Y))) : n = !1, n === !1 ? (Y = b, oe(i, Y), n) : (Me(!0), null)
                }
            }

            function J(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Y !== w && Y !== b && !Ce()) {
                    var i, n = x ? e.touches[0] : e,
                        r = $e(n);
                    if (F = Ze(), x && (H = e.touches.length), Y = _, 2 == H && (0 == z ? (ze(1, e.touches[1]), z = $ = Ne(N[0].start, N[1].start)) : ($e(e.touches[1]), $ = Ne(N[0].end, N[1].end), B = Fe(N[0].end, N[1].end)), j = Ue(z, $), D = Math.abs(z - $)), H === P.fingers || P.fingers === m || !x || fe()) {
                        if (R = Qe(r.start, r.end), ce(t, R), C = qe(r.start, r.end), M = He(), Be(R, C), (P.swipeStatus || P.pinchStatus) && (i = oe(e, Y)), !P.triggerOnTouchEnd || P.triggerOnTouchLeave) {
                            var o = !0;
                            if (P.triggerOnTouchLeave) {
                                var s = Ge(this);
                                o = Ke(r.end, s)
                            }!P.triggerOnTouchEnd && o ? Y = re(_) : P.triggerOnTouchLeave && !o && (Y = re(w)), (Y == b || Y == w) && oe(e, Y)
                        }
                    } else Y = b, oe(e, Y);
                    i === !1 && (Y = b, oe(e, Y))
                }
            }

            function te(t) {
                var e = t.originalEvent;
                return x && e.touches.length > 0 ? (Le(), !0) : (Ce() && (H = V), t.preventDefault(), F = Ze(), M = He(), le() ? (Y = b, oe(e, Y)) : P.triggerOnTouchEnd || 0 == P.triggerOnTouchEnd && Y === _ ? (Y = w, oe(e, Y)) : !P.triggerOnTouchEnd && we() ? (Y = w, se(e, Y, c)) : Y === _ && (Y = b, oe(e, Y)), Me(!1), null)
            }

            function ee() {
                H = 0, F = 0, U = 0, z = 0, $ = 0, j = 1, Ie(), Me(!1)
            }

            function ie(t) {
                var e = t.originalEvent;
                P.triggerOnTouchLeave && (Y = re(w), oe(e, Y))
            }

            function ne() {
                W.unbind(E, K), W.unbind(I, ee), W.unbind(A, J), W.unbind(O, te), L && W.unbind(L, ie), Me(!1)
            }

            function re(t) {
                var e = t,
                    i = he(),
                    n = ae(),
                    r = le();
                return !i || r ? e = b : !n || t != _ || P.triggerOnTouchEnd && !P.triggerOnTouchLeave ? !n && t == w && P.triggerOnTouchLeave && (e = b) : e = w, e
            }

            function oe(t, e) {
                var i = void 0;
                return ve() || me() ? i = se(t, e, u) : (de() || fe()) && i !== !1 && (i = se(t, e, h)), Ae() && i !== !1 ? i = se(t, e, p) : Oe() && i !== !1 ? i = se(t, e, f) : Ee() && i !== !1 && (i = se(t, e, c)), e === b && ee(t), e === w && (x ? 0 == t.touches.length && ee(t) : ee(t)), i
            }

            function se(a, l, d) {
                var g = void 0;
                if (d == u) {
                    if (W.trigger("swipeStatus", [l, R || null, C || 0, M || 0, H]), P.swipeStatus && (g = P.swipeStatus.call(W, a, l, R || null, C || 0, M || 0, H), g === !1)) return !1;
                    if (l == w && ge()) {
                        if (W.trigger("swipe", [R, C, M, H]), P.swipe && (g = P.swipe.call(W, a, R, C, M, H), g === !1)) return !1;
                        switch (R) {
                            case e:
                                W.trigger("swipeLeft", [R, C, M, H]), P.swipeLeft && (g = P.swipeLeft.call(W, a, R, C, M, H));
                                break;
                            case i:
                                W.trigger("swipeRight", [R, C, M, H]), P.swipeRight && (g = P.swipeRight.call(W, a, R, C, M, H));
                                break;
                            case n:
                                W.trigger("swipeUp", [R, C, M, H]), P.swipeUp && (g = P.swipeUp.call(W, a, R, C, M, H));
                                break;
                            case r:
                                W.trigger("swipeDown", [R, C, M, H]), P.swipeDown && (g = P.swipeDown.call(W, a, R, C, M, H))
                        }
                    }
                }
                if (d == h) {
                    if (W.trigger("pinchStatus", [l, B || null, D || 0, M || 0, H, j]), P.pinchStatus && (g = P.pinchStatus.call(W, a, l, B || null, D || 0, M || 0, H, j), g === !1)) return !1;
                    if (l == w && pe()) switch (B) {
                        case o:
                            W.trigger("pinchIn", [B || null, D || 0, M || 0, H, j]), P.pinchIn && (g = P.pinchIn.call(W, a, B || null, D || 0, M || 0, H, j));
                            break;
                        case s:
                            W.trigger("pinchOut", [B || null, D || 0, M || 0, H, j]), P.pinchOut && (g = P.pinchOut.call(W, a, B || null, D || 0, M || 0, H, j))
                    }
                }
                return d == c ? (l === b || l === w) && (clearTimeout(Z), be() && !Se() ? (Q = Ze(), Z = setTimeout(t.proxy(function() {
                    Q = null, W.trigger("tap", [a.target]), P.tap && (g = P.tap.call(W, a, a.target))
                }, this), P.doubleTapThreshold)) : (Q = null, W.trigger("tap", [a.target]), P.tap && (g = P.tap.call(W, a, a.target)))) : d == p ? (l === b || l === w) && (clearTimeout(Z), Q = null, W.trigger("doubletap", [a.target]), P.doubleTap && (g = P.doubleTap.call(W, a, a.target))) : d == f && (l === b || l === w) && (clearTimeout(Z), Q = null, W.trigger("longtap", [a.target]), P.longTap && (g = P.longTap.call(W, a, a.target))), g
            }

            function ae() {
                var t = !0;
                return null !== P.threshold && (t = C >= P.threshold), t
            }

            function le() {
                var t = !1;
                return null !== P.cancelThreshold && null !== R && (t = Xe(R) - C >= P.cancelThreshold), t
            }

            function ue() {
                return null !== P.pinchThreshold ? D >= P.pinchThreshold : !0
            }

            function he() {
                var t;
                return t = P.maxTimeThreshold && M >= P.maxTimeThreshold ? !1 : !0
            }

            function ce(t, o) {
                if (P.allowPageScroll === a || fe()) t.preventDefault();
                else {
                    var s = P.allowPageScroll === l;
                    switch (o) {
                        case e:
                            (P.swipeLeft && s || !s && P.allowPageScroll != d) && t.preventDefault();
                            break;
                        case i:
                            (P.swipeRight && s || !s && P.allowPageScroll != d) && t.preventDefault();
                            break;
                        case n:
                            (P.swipeUp && s || !s && P.allowPageScroll != g) && t.preventDefault();
                            break;
                        case r:
                            (P.swipeDown && s || !s && P.allowPageScroll != g) && t.preventDefault()
                    }
                }
            }

            function pe() {
                var t = ye(),
                    e = _e(),
                    i = ue();
                return t && e && i
            }

            function fe() {
                return !!(P.pinchStatus || P.pinchIn || P.pinchOut)
            }

            function de() {
                return !(!pe() || !fe())
            }

            function ge() {
                var t = he(),
                    e = ae(),
                    i = ye(),
                    n = _e(),
                    r = le(),
                    o = !r && n && i && e && t;
                return o
            }

            function me() {
                return !!(P.swipe || P.swipeStatus || P.swipeLeft || P.swipeRight || P.swipeUp || P.swipeDown)
            }

            function ve() {
                return !(!ge() || !me())
            }

            function ye() {
                return H === P.fingers || P.fingers === m || !x
            }

            function _e() {
                return 0 !== N[0].end.x
            }

            function we() {
                return !!P.tap
            }

            function be() {
                return !!P.doubleTap
            }

            function xe() {
                return !!P.longTap
            }

            function Te() {
                if (null == Q) return !1;
                var t = Ze();
                return be() && t - Q <= P.doubleTapThreshold
            }

            function Se() {
                return Te()
            }

            function Pe() {
                return !(1 !== H && x || !isNaN(C) && 0 !== C)
            }

            function ke() {
                return M > P.longTapThreshold && v > C
            }

            function Ee() {
                return !(!Pe() || !we())
            }

            function Ae() {
                return !(!Te() || !be())
            }

            function Oe() {
                return !(!ke() || !xe())
            }

            function Le() {
                q = Ze(), V = event.touches.length + 1
            }

            function Ie() {
                q = 0, V = 0
            }

            function Ce() {
                var t = !1;
                if (q) {
                    var e = Ze() - q;
                    e <= P.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function Re() {
                return !(W.data(T + "_intouch") !== !0)
            }

            function Me(t) {
                t === !0 ? (W.bind(A, J), W.bind(O, te), L && W.bind(L, ie)) : (W.unbind(A, J, !1), W.unbind(O, te, !1), L && W.unbind(L, ie, !1)), W.data(T + "_intouch", t === !0)
            }

            function ze(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return N[t].identifier = i, N[t].start.x = N[t].end.x = e.pageX || e.clientX, N[t].start.y = N[t].end.y = e.pageY || e.clientY, N[t]
            }

            function $e(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = je(e);
                return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function je(t) {
                for (var e = 0; e < N.length; e++)
                    if (N[e].identifier == t) return N[e]
            }

            function De() {
                for (var t = [], e = 0; 5 >= e; e++) t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return t
            }

            function Be(t, e) {
                e = Math.max(e, Xe(t)), X[t].distance = e
            }

            function Xe(t) {
                return X[t] ? X[t].distance : void 0
            }

            function We() {
                var t = {};
                return t[e] = Ye(e), t[i] = Ye(i), t[n] = Ye(n), t[r] = Ye(r), t
            }

            function Ye(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function He() {
                return F - U
            }

            function Ne(t, e) {
                var i = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }

            function Ue(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }

            function Fe() {
                return 1 > j ? s : o
            }

            function qe(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function Ve(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    r = Math.atan2(n, i),
                    o = Math.round(180 * r / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)), o
            }

            function Qe(t, o) {
                var s = Ve(t, o);
                return 45 >= s && s >= 0 ? e : 360 >= s && s >= 315 ? e : s >= 135 && 225 >= s ? i : s > 45 && 135 > s ? r : n
            }

            function Ze() {
                var t = new Date;
                return t.getTime()
            }

            function Ge(e) {
                e = t(e);
                var i = e.offset(),
                    n = {
                        left: i.left,
                        right: i.left + e.outerWidth(),
                        top: i.top,
                        bottom: i.top + e.outerHeight()
                    };
                return n
            }

            function Ke(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var k = x || !P.fallbackToMouseEvents,
                E = k ? "touchstart" : "mousedown",
                A = k ? "touchmove" : "mousemove",
                O = k ? "touchend" : "mouseup",
                L = k ? null : "mouseleave",
                I = "touchcancel",
                C = 0,
                R = null,
                M = 0,
                z = 0,
                $ = 0,
                j = 1,
                D = 0,
                B = 0,
                X = null,
                W = t(S),
                Y = "start",
                H = 0,
                N = null,
                U = 0,
                F = 0,
                q = 0,
                V = 0,
                Q = 0,
                Z = null;
            try {
                W.bind(E, K), W.bind(I, ee)
            } catch (G) {
                t.error("events not supported " + E + "," + I + " on jQuery.swipe")
            }
            this.enable = function() {
                return W.bind(E, K), W.bind(I, ee), W
            }, this.disable = function() {
                return ne(), W
            }, this.destroy = function() {
                return ne(), W.data(T, null), W
            }, this.option = function(e, i) {
                if (void 0 !== P[e]) {
                    if (void 0 === i) return P[e];
                    P[e] = i
                } else t.error("Option " + e + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var e = "left",
            i = "right",
            n = "up",
            r = "down",
            o = "in",
            s = "out",
            a = "none",
            l = "auto",
            u = "swipe",
            h = "pinch",
            c = "tap",
            p = "doubletap",
            f = "longtap",
            d = "horizontal",
            g = "vertical",
            m = "all",
            v = 10,
            y = "start",
            _ = "move",
            w = "end",
            b = "cancel",
            x = "ontouchstart" in window,
            T = "TouchSwipe",
            S = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "label, button, input, select, textarea, a, .noSwipe"
            };
        t.fn.swipe = function(e) {
            var i = t(this),
                n = i.data(T);
            if (n && "string" == typeof e) {
                if (n[e]) return n[e].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + e + " does not exist on jQuery.swipe")
            } else if (!(n || "object" != typeof e && e)) return P.apply(this, arguments);
            return i
        }, t.fn.swipe.defaults = S, t.fn.swipe.phases = {
            PHASE_START: y,
            PHASE_MOVE: _,
            PHASE_END: w,
            PHASE_CANCEL: b
        }, t.fn.swipe.directions = {
            LEFT: e,
            RIGHT: i,
            UP: n,
            DOWN: r,
            IN: o,
            OUT: s
        }, t.fn.swipe.pageScroll = {
            NONE: a,
            HORIZONTAL: d,
            VERTICAL: g,
            AUTO: l
        }, t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: m
        }
    }), ! function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function r(e, i) {
            t.fn[e] = function(r) {
                if ("string" == typeof r) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a],
                            h = t.data(u, e);
                        if (h)
                            if (t.isFunction(h[r]) && "_" !== r.charAt(0)) {
                                var c = h[r].apply(h, s);
                                if (void 0 !== c) return c
                            } else o("no such method '" + r + "' for " + e + " instance");
                        else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var o = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), r(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
}(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
    }(this),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : o.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var n = 0, s = o.length; s > n; n++) {
                    var a = o[n];
                    a()
                }
            }
        }

        function n(n) {
            return n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i), e
        }
        var r = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], n)) : t.docReady = n(t.eventie)
    }(this),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            o = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, o = i.length; o > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function n(t) {
            function n(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = o(t);
                    if ("none" === n.display) return i();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var h = r.isBorderBox = !(!u || !n[u] || "border-box" !== n[u]), c = 0, p = s.length; p > c; c++) {
                        var f = s[c],
                            d = n[f];
                        d = a(t, d);
                        var g = parseFloat(d);
                        r[f] = isNaN(g) ? 0 : g
                    }
                    var m = r.paddingLeft + r.paddingRight,
                        v = r.paddingTop + r.paddingBottom,
                        y = r.marginLeft + r.marginRight,
                        _ = r.marginTop + r.marginBottom,
                        w = r.borderLeftWidth + r.borderRightWidth,
                        b = r.borderTopWidth + r.borderBottomWidth,
                        x = h && l,
                        T = e(n.width);
                    T !== !1 && (r.width = T + (x ? 0 : m + w));
                    var S = e(n.height);
                    return S !== !1 && (r.height = S + (x ? 0 : v + b)), r.innerWidth = r.width - (m + w), r.innerHeight = r.height - (v + b), r.outerWidth = r.width + y, r.outerHeight = r.height + _, r
                }
            }

            function a(t, e) {
                if (r || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    n = i.left,
                    o = t.runtimeStyle,
                    s = o && o.left;
                return s && (o.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = n, s && (o.left = s), e
            }
            var l, u = t("boxSizing");
            return function() {
                if (u) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[u] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var n = o(t);
                    l = 200 === e(n.width), i.removeChild(t)
                }
            }(), n
        }
        var r = t.getComputedStyle,
            o = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("get-style-property")) : t.getSize = n(t.getStyleProperty)
    }(window),
    function(t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function r(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), r = 0, o = i.length; o > r; r++)
                if (i[r] === t) return !0;
            return !1
        }

        function o(t, e) {
            return n(t), i(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
                var r = t[i],
                    o = r + "MatchesSelector";
                if (e[o]) return o
            }
        }();
        if (a) {
            var l = document.createElement("div"),
                u = i(l, "div");
            s = u ? i : o
        } else s = r;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t, r, o) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var l = o("transition"),
                u = o("transform"),
                h = l && u,
                c = !!o("perspective"),
                p = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                } [l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                d = function() {
                    for (var t = {}, e = 0, i = f.length; i > e; e++) {
                        var n = f[e],
                            r = o(n);
                        r && r !== n && (t[n] = r)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = r(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = d[i] || i;
                    e[n] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    r = parseInt(t[i ? "left" : "right"], 10),
                    o = parseInt(t[n ? "top" : "bottom"], 10);
                r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
                var a = this.layout.size;
                r -= i ? a.paddingLeft : a.paddingRight, o -= n ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var g = c ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    r = parseInt(t, 10),
                    o = parseInt(e, 10),
                    s = r === this.position.x && o === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
                var a = t - i,
                    l = e - n,
                    u = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, l = h.isOriginTop ? l : -l, u.transform = g(a, l), this.transition({
                    to: u,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = u && n(u) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(p, this, !1))
            }, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var v = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = v[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var r = e.onEnd[n];
                        r.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var y = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(y)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var o = t.getComputedStyle,
            s = o ? function(t) {
                return o(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], r) : (t.Outlayer = {}, t.Outlayer.Item = r(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === c.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, r = t.length; r > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function r(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function o(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, c, f, d, g) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !p(t)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var n = ++v;
                this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var v = 0,
                y = {};
            return m.namespace = "outlayer", m.Item = g, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, c.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, o = e.length; o > r; r++) {
                    var s = e[r],
                        a = new i(s, this);
                    n.push(a)
                }
                return n
            }, m.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], r = 0, o = t.length; o > r; r++) {
                    var s = t[r];
                    if (p(s))
                        if (e) {
                            d(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), l = 0, u = a.length; u > l; l++) i.push(a[l])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = f(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : p(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var r = t[i];
                    r.isIgnored || e.push(r)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (!t || !t.length) return void i();
                this._itemsOn(t, "layout", i);
                for (var r = [], o = 0, s = t.length; s > o; o++) {
                    var a = t[o],
                        l = this._getItemLayoutPosition(a);
                    l.item = a, l.isInstant = e || a.isLayoutInstant, r.push(l)
                }
                this._processLayoutQueue(r)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return r++, r === o && i.call(s), !0
                }
                for (var r = 0, o = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                    var u = t[a];
                    u.on(e, n)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        r(n, this.stamps), this.unignore(n)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = f(t),
                    r = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return r
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var r = t[i],
                            o = this.getItem(r);
                        o && e.push(o)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, o = e.length; o > i; i++) {
                        var s = e[i];
                        s.remove(), r(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && y[e]
            }, m.create = function(t, i) {
                function n() {
                    m.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(m.prototype) : e(n.prototype, m.prototype), n.prototype.constructor = n, n.defaults = e({}, m.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = m.data, n.Item = function() {
                    g.apply(this, arguments)
                }, n.Item.prototype = new g, s(function() {
                    for (var e = o(t), i = a.querySelectorAll(".js-" + e), r = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                        var c, p = i[s],
                            f = p.getAttribute(r);
                        try {
                            c = f && JSON.parse(f)
                        } catch (d) {
                            l && l.error("Error parsing " + r + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + d);
                            continue
                        }
                        var g = new n(p, c);
                        u && u.data(p, t, g)
                    }
                }), u && u.bridget && u.bridget(t, n), n
            }, m.Item = g, m
        }
        var a = t.document,
            l = t.console,
            u = t.jQuery,
            h = function() {},
            c = Object.prototype.toString,
            p = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t, e) {
            var n = t.create("masonry");
            return n.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, n.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, n.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, n.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    n = e && 1 > e ? "round" : "ceil",
                    r = Math[n](t.size.outerWidth / this.columnWidth);
                r = Math.min(r, this.cols);
                for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = i(o, s), l = {
                    x: this.columnWidth * a,
                    y: s
                }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, c = 0; h > c; c++) this.colYs[a + c] = u;
                return l
            }, n.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var r = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, r)
                }
                return e
            }, n.prototype._manageStamp = function(t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    r = this.options.isOriginLeft ? n.left : n.right,
                    o = r + i.outerWidth,
                    s = Math.floor(r / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(o / this.columnWidth);
                a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
            }, n.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, n.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, n.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, n
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                if (r === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, o, s, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                h = 1e-10,
                c = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                g = function(n, r, o, s) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(u) {
                        for (var h, c, p, f, m = r.length, v = m; --m > -1;)(h = d[r[m]] || new g(r[m], [])).gsClass ? (a[m] = h.gsClass, v--) : u && h.sc.push(this);
                        if (0 === v && o)
                            for (c = ("com.greensock." + n).split("."), p = c.pop(), f = l(c.join("."))[p] = this.gsClass = o.apply(o, a), s && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return f
                            }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = u._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                w = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                b = w.map = {},
                x = w.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (o = l[h], r = n ? v("easing." + o, null, !0) : u.easing[o] || {}, s = c.length; --s > -1;) a = c[s], b[o + "." + a] = b[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = w.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, x(new w(null, null, 1, r), o, "easeOut", !0), x(new w(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), x(new w(null, null, 3, r), o, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, l, u = this._listeners[t],
                    h = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) o = u[l], o.c === e && o.s === i ? u.splice(l, 1) : 0 === h && r > o.pr && (h = l + 1);
                u.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var S = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                E = k();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], P = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, o, l, u = this,
                    c = k(),
                    f = e !== !1 && S,
                    d = 500,
                    g = 33,
                    m = function(t) {
                        var e, s, a = k() - E;
                        a > d && (c += a - g), E += a, u.time = (E - c) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(m)), s && u.dispatchEvent("tick")
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    m(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / h, g = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (f && P ? P(r) : clearTimeout(r), n = p, r = null, u === s && (a = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (E = k() - d + 5), n = 0 === i ? p : f && S ? S : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - u.time) + 1)
                    }, u === s && (a = !0), m(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(i)) : f
                }, u.fps(t), setTimeout(function() {
                    f && (!r || 5 > u.frame) && u.useRAF(!1)
                }, 1500)
            }), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
            var A = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
                    a || s.wake();
                    var i = this.vars.useFrames ? Y : H;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = A.ticker = new u.Ticker, o = A.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var O = function() {
                a && k() - E > 2e3 && s.wake(), setTimeout(O, 2e3)
            };
            O(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, o._enabled = function(t, e) {
                return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), M.length && N())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || s.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var L = v("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = L.prototype = new A, o.constructor = L, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var I = v("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = s = c(e), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(c(o))) : (this._siblings[r] = U(o, this, !1), 1 === l && this._siblings[r].length > 1 && F(o, this, null, 1, this._siblings[r])) : (o = s[r--] = I.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && F(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
                }, !0),
                C = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) X[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = I.prototype = new A, o.constructor = I, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, I.version = "1.13.1", I.defaultEase = o._ease = new w(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = s, I.autoSleep = !0, I.lagSmoothing = function(t, e) {
                s.lagSmoothing(t, e)
            }, I.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [],
                z = {},
                $ = I._internals = {
                    isArray: f,
                    isSelector: C,
                    lazyTweens: M
                },
                j = I._plugins = {},
                D = $.tweenLookup = {},
                B = 0,
                X = $.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Y = A._rootFramesTimeline = new L,
                H = A._rootTimeline = new L,
                N = $.lazyRender = function() {
                    var t = M.length;
                    for (z = {}; --t > -1;) n = M[t], n && n._lazy !== !1 && (n.render(n._lazy, !1, !0), n._lazy = !1);
                    M.length = 0
                };
            H._startTime = s.time, Y._startTime = s.frame, H._active = Y._active = !0, setTimeout(N, 1), A._updateRoot = I.render = function() {
                var t, e, i;
                if (M.length && N(), H.render((s.time - H._startTime) * H._timeScale, !1, !1), Y.render((s.frame - Y._startTime) * Y._timeScale, !1, !1), M.length && N(), !(s.frame % 120)) {
                    for (i in D) {
                        for (e = D[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete D[i]
                    }
                    if (i = H._first, (!i || i._paused) && I.autoSleep && !Y._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", A._updateRoot);
            var U = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (D[o || (t._gsTweenID = o = "t" + B++)] || (D[o] = {
                        target: t,
                        tweens: []
                    }), e && (n = D[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return D[o].tweens
                },
                F = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || a._enabled(!1, !1) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var u, c = e._startTime + h,
                        p = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || q(e, 0, d), 0 === q(a, u, d) && (p[f++] = a)) : c >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && 2e-10 >= c - a._startTime || (p[f++] = a)));
                    for (o = f; --o > -1;) a = p[o], 2 === n && a._kill(i, t) && (s = !0), (2 !== n || !a._firstPT && a._initted) && a._enabled(!1, !1) && (s = !0);
                    return s
                },
                q = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * h > o - e ? h : (o += t.totalDuration() / t._timeScale / r) > e + h ? 0 : o - e - h
                };
            o._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    u = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (n in o) X[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    } if (this._ease = u = u ? u instanceof w ? u : "function" == typeof u ? new w(u, o.easeParams) : b[u] || I.defaultEase : I.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && I._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, r) {
                var o, s, a, l, u, h;
                if (null == e) return !1;
                z[e._gsTweenID] && N(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (o in this.vars) {
                    if (h = this.vars[o], X[o]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (j[o] && (l = new j[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: o,
                            pg: !0,
                            pr: l._priority
                        }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = u = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && F(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === h) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0 && u !== h) && (r = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : h)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === p ? 1 - c : 2 === p ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, M.push(this), void(this._lazy = t);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === l && this._rawPrevTime === h && s !== h && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var i, n, r, o, s, a, l, u;
                if ((f(e) || C(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (a = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                s = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        s = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        l = t || s, u = t !== n && "all" !== n && t !== s && ("object" != typeof t || !t._tempKill);
                        for (r in l)(o = s[r]) && (o.pg && o.t._kill(l) && (a = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), u && (n[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return a
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, o._enabled = function(t, e) {
                if (a || s.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = U(n[i], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, I.to = function(t, e, i) {
                return new I(t, e, i)
            }, I.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
            }, I.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
            }, I.delayedCall = function(t, e, i, n, r) {
                return new I(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, I.set = function(t, e) {
                return new I(t, 0, e)
            }, I.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : I.selector(t) || t;
                var i, n, r, o;
                if ((f(t) || C(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = U(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = I.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var V = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
            }, !0);
            if (o = V.prototype, V.version = "1.10.1", V.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, r, o) {
                var s, a;
                return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: s,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: o
                }, a._next && (a._next._prev = a), a) : void 0
            }, o.setRatio = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, o._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, o._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, I._onPluginEvent = function(t, e) {
                var i, n, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, V.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === V.API && (j[(new t[e])._propName] = t[e]);
                return !0
            }, m.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    o = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        V.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0),
                    a = s.prototype = new V(i);
                a.constructor = s, s.API = t.API;
                for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, V.activate([s]), s
            }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
            o = r.com.greensock,
            s = 2 * Math.PI,
            a = Math.PI / 2,
            l = o._class,
            u = function(e, i) {
                var n = l("easing." + e, function() {}, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, n
            },
            h = t.register || function() {},
            c = function(t, e, i, n) {
                var r = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return h(r, t), r
            },
            p = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            f = function(e, i) {
                var n = l("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = n.prototype = new t;
                return r.constructor = n, r.getRatio = i, r.config = function(t) {
                    return new n(t)
                }, n
            },
            d = c("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            g = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
            return new g(t, e, i)
        }, e = l("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function(t) {
            return new e(t)
        }, i = l("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, n, r, o, s, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), f = c, d = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / c * f, n = m ? m.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = .5 * o * o * v) : (o = 2 * (1 - i), r = .5 * o * o * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {
                x: i,
                y: n
            };
            for (u.sort(function(t, e) {
                return t.x - e.x
            }), a = new p(1, 1, null), f = c; --f > -1;) s = u[f], a = new p(s.x, s.y, a);
            this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function(t) {
            return new i(t)
        }, i.ease = new i, c("Bounce", u("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), u("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), u("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), c("Circ", u("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), u("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), u("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function(e, i, n) {
            var r = l("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                }, !0),
                o = r.prototype = new t;
            return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                return new r(t, e)
            }, r
        }, c("Elastic", n("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .3), n("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
        }, .3), n("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
        }, .45)), c("Expo", u("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), u("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), u("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), c("Sine", u("SineOut", function(t) {
            return Math.sin(t * a)
        }), u("SineIn", function(t) {
            return -Math.cos(t * a) + 1
        }), u("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, n, r, o, s = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
            },
            a = {},
            l = s.prototype = new t("css");
        l.constructor = s, s.version = "1.13.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", l = "px", s.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
        };
        var u, h, c, p, f, d, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            y = /[^\d\-\.]/g,
            _ = /(?:\d|\-|\+|=|#|\.)*/g,
            w = /opacity *= *([^)]*)/i,
            b = /opacity:([^;]*)/i,
            x = /alpha\(opacity *=.+?\)/i,
            T = /^(rgb|hsl)/,
            S = /([A-Z])/g,
            P = /-([a-z])/gi,
            k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            E = function(t, e) {
                return e.toUpperCase()
            },
            A = /(?:Left|Right|Width)/i,
            O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            I = /,(?=[^\)]*(?:\(|$))/gi,
            C = Math.PI / 180,
            R = 180 / Math.PI,
            M = {},
            z = document,
            $ = z.createElement("div"),
            j = z.createElement("img"),
            D = s._internals = {
                _specialProps: a
            },
            B = navigator.userAgent,
            X = function() {
                var t, e = B.indexOf("Android"),
                    i = z.createElement("div");
                return c = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === e || Number(B.substr(e + 8, 1)) > 3), f = c && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), p = -1 !== B.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) && (d = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
            }(),
            W = function(t) {
                return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            Y = function(t) {
                window.console && console.log(t)
            },
            H = "",
            N = "",
            U = function(t, e) {
                e = e || $;
                var i, n, r = e.style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                return n >= 0 ? (N = 3 === n ? "ms" : i[n], H = "-" + N.toLowerCase() + "-", N + t) : null
            },
            F = z.defaultView ? z.defaultView.getComputedStyle : function() {},
            q = s.getStyle = function(t, e, i, n, r) {
                var o;
                return X || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || F(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(t)
            },
            V = D.convertToPixels = function(t, i, n, r, o) {
                if ("px" === r || !r) return n;
                if ("auto" === r || !n) return 0;
                var a, l, u, h = A.test(i),
                    c = t,
                    p = $.style,
                    f = 0 > n;
                if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
                else {
                    if (p.cssText = "border:0 solid red;position:" + q(t, "position") + ";line-height:0;", "%" !== r && c.appendChild) p[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                    else {
                        if (c = t.parentNode || z.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u) return l.width * n / 100;
                        p[h ? "width" : "height"] = n + r
                    }
                    c.appendChild($), a = parseFloat($[h ? "offsetWidth" : "offsetHeight"]), c.removeChild($), h && "%" === r && s.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = 100 * (a / n)), 0 !== a || o || (a = V(t, i, n, r, !0))
                }
                return f ? -a : a
            },
            Q = D.calculateOffset = function(t, e, i) {
                if ("absolute" !== q(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top",
                    r = q(t, "margin" + n, i);
                return t["offset" + n] - (V(t, e, parseFloat(r), r.replace(_, "")) || 0)
            },
            Z = function(t, e) {
                var i, n, r = {};
                if (e = e || F(t, null))
                    if (i = e.length)
                        for (; --i > -1;) r[e[i].replace(P, E)] = e.getPropertyValue(e[i]);
                    else
                        for (i in e) r[i] = e[i];
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(P, E)] = e[i]);
                return X || (r.opacity = W(t)), n = Se(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, xe && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
            },
            G = function(t, e, i, n, r) {
                var o, s, a, l = {},
                    u = t.style;
                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : Q(t, s), void 0 !== u[s] && (a = new ce(u, s, u[s], a)));
                if (n)
                    for (s in n) "className" !== s && (l[s] = n[s]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            K = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            te = function(t, e, i) {
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = K[e],
                    o = r.length;
                for (i = i || F(t, null); --o > -1;) n -= parseFloat(q(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(q(t, "border" + r[o] + "Width", i, !0)) || 0;
                return n
            },
            ee = function(t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "),
                    n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                    r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
            },
            ie = function(t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            },
            ne = function(t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
            },
            re = function(t, e, i, n) {
                var r, o, s, a, l = 1e-6;
                return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), s = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : R) - ("=" === t.charAt(1) ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), l > a && a > -l && (a = 0), a
            },
            oe = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            se = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            },
            ae = function(t) {
                var e, i, n, r, o, s;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = se(r + 1 / 3, e, i), t[1] = se(r, e, i), t[2] = se(r - 1 / 3, e, i), t) : (t = t.match(g) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
            },
            le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (l in oe) le += "|" + l + "\\b";
        le = RegExp(le + ")", "gi");
        var ue = function(t, e, i, n) {
                if (null == t) return function(t) {
                    return t
                };
                var r, o = e ? (t.match(le) || [""])[0] : "",
                    s = t.split(o).join("").match(v) || [],
                    a = t.substr(0, t.indexOf(s[0])),
                    l = ")" === t.charAt(t.length - 1) ? ")" : "",
                    u = -1 !== t.indexOf(" ") ? " " : ",",
                    h = s.length,
                    c = h > 0 ? s[0].replace(g, "") : "";
                return h ? r = e ? function(t) {
                    var e, p, f, d;
                    if ("number" == typeof t) t += c;
                    else if (n && I.test(t)) {
                        for (d = t.replace(I, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                        return d.join(",")
                    }
                    if (e = (t.match(le) || [o])[0], p = t.split(e).join("").match(v) || [], f = p.length, h > f--)
                        for (; h > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : s[f];
                    return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, o, p;
                    if ("number" == typeof t) t += c;
                    else if (n && I.test(t)) {
                        for (o = t.replace(I, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                        return o.join(",")
                    }
                    if (e = t.match(v) || [], p = e.length, h > p--)
                        for (; h > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : s[p];
                    return a + e.join(u) + l
                } : function(t) {
                    return t
                }
            },
            he = function(t) {
                return t = t.split(","),
                    function(e, i, n, r, o, s, a) {
                        var l, u = (i + "").split(" ");
                        for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                        return r.parse(e, a, o, s)
                    }
            },
            ce = (D._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                    for (a = o.firstMPT; a;) {
                        if (i = a.t, i.type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                i.e = r
                            }
                        } else i.e = i.s + i.xs0;
                        a = a._next
                    }
            }, function(t, e, i, n, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
            }),
            pe = (D._parseToProxy = function(t, e, i, n, r, o) {
                var s, a, l, u, h, c = n,
                    p = {},
                    f = {},
                    d = i._transform,
                    g = M;
                for (i._transform = null, M = e, n = h = i.parse(t, e, n, r), M = g, o && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                    if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, o || (u = new ce(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                        for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], o || (u = new ce(n, l, a, u, n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: p,
                    end: f,
                    firstMPT: u,
                    pt: h
                }
            }, D.CSSPropTween = function(t, e, n, r, s, a, l, u, h, c, p) {
                this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof pe || o.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === p ? n + r : p, s && (this._next = s, s._prev = this)
            }),
            fe = s.parseComplex = function(t, e, i, n, r, o, s, a, l, h) {
                i = i || o || "", s = new pe(t, e, 0, 0, s, h ? 2 : 1, null, !1, a, i, n), n += "";
                var c, p, f, d, v, y, _, w, b, x, S, P, k = i.split(", ").join(",").split(" "),
                    E = n.split(", ").join(",").split(" "),
                    A = k.length,
                    O = u !== !1;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), A = k.length), A !== E.length && (k = (o || "").split(" "), A = k.length), s.plugin = l, s.setRatio = h, c = 0; A > c; c++)
                    if (d = k[c], v = E[c], w = parseFloat(d), w || 0 === w) s.appendXtra("", w, ie(v, w), v.replace(m, ""), O && -1 !== v.indexOf("px"), !0);
                    else if (r && ("#" === d.charAt(0) || oe[d] || T.test(d))) P = "," === v.charAt(v.length - 1) ? ")," : ")", d = ae(d), v = ae(v), b = d.length + v.length > 6, b && !X && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(E[c]).join("transparent")) : (X || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], b ? "," : P, !0), b && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, P, !1)));
                    else if (y = d.match(g)) {
                        if (_ = v.match(m), !_ || _.length !== y.length) return s;
                        for (f = 0, p = 0; y.length > p; p++) S = y[p], x = d.indexOf(S, f), s.appendXtra(d.substr(f, x - f), Number(S), ie(_[p], S), "", O && "px" === d.substr(x + S.length, 2), 0 === p), f = x + S.length;
                        s["xs" + s.l] += d.substr(f)
                    } else s["xs" + s.l] += s.l ? " " + d : d;
                if (-1 !== n.indexOf("=") && s.data) {
                    for (P = s.xs0 + s.data.s, c = 1; s.l > c; c++) P += s["xs" + c] + s.data["xn" + c];
                    s.e = P + s["xs" + c]
                }
                return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
            },
            de = 9;
        for (l = pe.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, r, o) {
            var s = this,
                a = s.l;
            return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new pe(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                s: e + i
            }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
        };
        var ge = function(t, e) {
                e = e || {}, this.p = e.prefix ? U(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            me = D._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var n, r, o = t.split(","),
                    s = e.defaultValue;
                for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new ge(o[n], e)
            },
            ve = function(t) {
                if (!a[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    me(t, {
                        parser: function(t, i, n, r, o, s, l) {
                            var u = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                            return u ? (u._cssRegister(), a[n].parse(t, i, n, r, o, s, l)) : (Y("Error: " + e + " js file not loaded."), o)
                        }
                    })
                }
            };
        l = ge.prototype, l.parseComplex = function(t, e, i, n, r, o) {
            var s, a, l, u, h, c, p = this.keyword;
            if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : p && (a = [e], l = [i])), l) {
                for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, p && (h = e.indexOf(p), c = i.indexOf(p), h !== c && (i = -1 === c ? l : a, i[s] += " " + p));
                e = a.join(", "), i = l.join(", ")
            }
            return fe(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
        }, l.parse = function(t, e, i, n, o, s) {
            return this.parseComplex(t.style, this.format(q(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
        }, s.registerSpecialProp = function(t, e, i) {
            me(t, {
                parser: function(t, n, r, o, s, a) {
                    var l = new pe(t, r, 0, 0, s, 2, r, !1, i);
                    return l.plugin = a, l.setRatio = e(t, n, o._tween, r), l
                },
                priority: i
            })
        };
        var ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            _e = U("transform"),
            we = H + "transform",
            be = U("transformOrigin"),
            xe = null !== U("perspective"),
            Te = D.Transform = function() {
                this.skewY = 0
            },
            Se = D.getTransform = function(t, e, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var r, o, a, l, u, h, c, p, f, d, g, m, v, y = i ? t._gsTransform || new Te : new Te,
                    _ = 0 > y.scaleX,
                    w = 2e-5,
                    b = 1e5,
                    x = 179.99,
                    T = x * C,
                    S = xe ? parseFloat(q(t, be, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                if (_e ? r = q(t, we, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(O), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                    for (o = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], a = o.length; --a > -1;) l = Number(o[a]), o[a] = (u = l - (l |= 0)) ? (0 | u * b + (0 > u ? -.5 : .5)) / b + l : l;
                    if (16 === o.length) {
                        var P = o[8],
                            k = o[9],
                            E = o[10],
                            A = o[12],
                            L = o[13],
                            I = o[14];
                        if (y.zOrigin && (I = -y.zOrigin, A = P * I - o[12], L = k * I - o[13], I = E * I + y.zOrigin - o[14]), !i || n || null == y.rotationX) {
                            var M, z, $, j, D, B, X, W = o[0],
                                Y = o[1],
                                H = o[2],
                                N = o[3],
                                U = o[4],
                                F = o[5],
                                V = o[6],
                                Q = o[7],
                                Z = o[11],
                                G = Math.atan2(V, E),
                                K = -T > G || G > T;
                            y.rotationX = G * R, G && (j = Math.cos(-G), D = Math.sin(-G), M = U * j + P * D, z = F * j + k * D, $ = V * j + E * D, P = U * -D + P * j, k = F * -D + k * j, E = V * -D + E * j, Z = Q * -D + Z * j, U = M, F = z, V = $), G = Math.atan2(P, W), y.rotationY = G * R, G && (B = -T > G || G > T, j = Math.cos(-G), D = Math.sin(-G), M = W * j - P * D, z = Y * j - k * D, $ = H * j - E * D, k = Y * D + k * j, E = H * D + E * j, Z = N * D + Z * j, W = M, Y = z, H = $), G = Math.atan2(Y, F), y.rotation = G * R, G && (X = -T > G || G > T, j = Math.cos(-G), D = Math.sin(-G), W = W * j + U * D, z = Y * j + F * D, F = Y * -D + F * j, V = H * -D + V * j, Y = z), X && K ? y.rotation = y.rotationX = 0 : X && B ? y.rotation = y.rotationY = 0 : B && K && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(W * W + Y * Y) * b + .5) / b, y.scaleY = (0 | Math.sqrt(F * F + k * k) * b + .5) / b, y.scaleZ = (0 | Math.sqrt(V * V + E * E) * b + .5) / b, y.skewX = 0, y.perspective = Z ? 1 / (0 > Z ? -Z : Z) : 0, y.x = A, y.y = L, y.z = I
                        }
                    } else if (!(xe && !n && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === q(t, "display", e))) {
                        var J = o.length >= 6,
                            te = J ? o[0] : 1,
                            ee = o[1] || 0,
                            ie = o[2] || 0,
                            ne = J ? o[3] : 1;
                        y.x = o[4] || 0, y.y = o[5] || 0, h = Math.sqrt(te * te + ee * ee), c = Math.sqrt(ne * ne + ie * ie), p = te || ee ? Math.atan2(ee, te) * R : y.rotation || 0, f = ie || ne ? Math.atan2(ie, ne) * R + p : y.skewX || 0, d = h - Math.abs(y.scaleX || 0), g = c - Math.abs(y.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (_ ? (h *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (c *= -1, f += 0 >= f ? 180 : -180)), m = (p - y.rotation) % 180, v = (f - y.skewX) % 180, (void 0 === y.skewX || d > w || -w > d || g > w || -w > g || m > -x && x > m && !1 | m * b || v > -x && x > v && !1 | v * b) && (y.scaleX = h, y.scaleY = c, y.rotation = p, y.skewX = f), xe && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(s.defaultTransformPerspective) || 0, y.scaleZ = 1)
                    }
                    y.zOrigin = S;
                    for (a in y) w > y[a] && y[a] > -w && (y[a] = 0)
                } else y = {
                    x: 0,
                    y: 0,
                    z: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    skewX: 0,
                    perspective: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    zOrigin: 0
                };
                return i && (t._gsTransform = y), y.xPercent = y.yPercent = 0, y
            },
            Pe = function(t) {
                var e, i, n = this.data,
                    r = -n.rotation * C,
                    o = r + n.skewX * C,
                    s = 1e5,
                    a = (0 | Math.cos(r) * n.scaleX * s) / s,
                    l = (0 | Math.sin(r) * n.scaleX * s) / s,
                    u = (0 | Math.sin(o) * -n.scaleY * s) / s,
                    h = (0 | Math.cos(o) * n.scaleY * s) / s,
                    c = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    i = l, l = -u, u = -i, e = p.filter, c.filter = "";
                    var f, g, m = this.t.offsetWidth,
                        v = this.t.offsetHeight,
                        y = "absolute" !== p.position,
                        b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                        x = n.x + m * n.xPercent / 100,
                        T = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (f = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, g = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, x += f - (f * a + g * l), T += g - (f * u + g * h)), y ? (f = m / 2, g = v / 2, b += ", Dx=" + (f - (f * a + g * l) + x) + ", Dy=" + (g - (f * u + g * h) + T) + ")") : b += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(L, b) : b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (y && -1 === b.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                        var S, P, k, E = 8 > d ? 1 : -1;
                        for (f = n.ieOffsetX || 0, g = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > u ? -u : u) * m)) / 2 + T), de = 0; 4 > de; de++) P = J[de], S = p[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : V(this.t, P, parseFloat(S), S.replace(_, "")) || 0, k = i !== n[P] ? 2 > de ? -n.ieOffsetX : -n.ieOffsetY : 2 > de ? f - n.ieOffsetX : g - n.ieOffsetY, c[P] = (n[P] = Math.round(i - k * (0 === de || 2 === de ? 1 : E))) + "px"
                    }
                }
            },
            ke = D.set3DTransformRatio = function(t) {
                var e, i, n, r, o, s, a, l, u, h, c, f, d, g, m, v, y, _, w, b, x, T, S, P = this.data,
                    k = this.t.style,
                    E = P.rotation * C,
                    A = P.scaleX,
                    O = P.scaleY,
                    L = P.scaleZ,
                    I = P.x,
                    R = P.y,
                    M = P.z,
                    z = P.perspective;
                if (!(1 !== t && 0 !== t || "auto" !== P.force3D || P.rotationY || P.rotationX || 1 !== L || z || M)) return void Ee.call(this, t);
                if (p) {
                    var $ = 1e-4;
                    $ > A && A > -$ && (A = L = 2e-5), $ > O && O > -$ && (O = L = 2e-5), !z || P.z || P.rotationX || P.rotationY || (z = 0)
                }
                if (E || P.skewX) _ = Math.cos(E), w = Math.sin(E), e = _, o = w, P.skewX && (E -= P.skewX * C, _ = Math.cos(E), w = Math.sin(E), "simple" === P.skewType && (b = Math.tan(P.skewX * C), b = Math.sqrt(1 + b * b), _ *= b, w *= b)), i = -w, s = _;
                else {
                    if (!(P.rotationY || P.rotationX || 1 !== L || z)) return void(k[_e] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + R + "px," + M + "px)" + (1 !== A || 1 !== O ? " scale(" + A + "," + O + ")" : ""));
                    e = s = 1, i = o = 0
                }
                c = 1, n = r = a = l = u = h = f = d = g = 0, m = z ? -1 / z : 0, v = P.zOrigin, y = 1e5, E = P.rotationY * C, E && (_ = Math.cos(E), w = Math.sin(E), u = c * -w, d = m * -w, n = e * w, a = o * w, c *= _, m *= _, e *= _, o *= _), E = P.rotationX * C, E && (_ = Math.cos(E), w = Math.sin(E), b = i * _ + n * w, x = s * _ + a * w, T = h * _ + c * w, S = g * _ + m * w, n = i * -w + n * _, a = s * -w + a * _, c = h * -w + c * _, m = g * -w + m * _, i = b, s = x, h = T, g = S), 1 !== L && (n *= L, a *= L, c *= L, m *= L), 1 !== O && (i *= O, s *= O, h *= O, g *= O), 1 !== A && (e *= A, o *= A, u *= A, d *= A), v && (f -= v, r = n * f, l = a * f, f = c * f + v), r = (b = (r += I) - (r |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + r : r, l = (b = (l += R) - (l |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + l : l, f = (b = (f += M) - (f |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + f : f, k[_e] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * y) / y, (0 | o * y) / y, (0 | u * y) / y, (0 | d * y) / y, (0 | i * y) / y, (0 | s * y) / y, (0 | h * y) / y, (0 | g * y) / y, (0 | n * y) / y, (0 | a * y) / y, (0 | c * y) / y, (0 | m * y) / y, r, l, f, z ? 1 + -f / z : 1].join(",") + ")"
            },
            Ee = D.set2DTransformRatio = function(t) {
                var e, i, n, r, o, s = this.data,
                    a = this.t,
                    l = a.style,
                    u = s.x,
                    h = s.y;
                return s.rotationX || s.rotationY || s.z || s.force3D === !0 || "auto" === s.force3D && 1 !== t && 0 !== t ? (this.setRatio = ke, void ke.call(this, t)) : void(s.rotation || s.skewX ? (e = s.rotation * C, i = e - s.skewX * C, n = 1e5, r = s.scaleX * n, o = s.scaleY * n, l[_e] = (s.xPercent || s.yPercent ? "translate(" + s.xPercent + "%," + s.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(e) * r) / n + "," + (0 | Math.sin(e) * r) / n + "," + (0 | Math.sin(i) * -o) / n + "," + (0 | Math.cos(i) * o) / n + "," + u + "," + h + ")") : l[_e] = (s.xPercent || s.yPercent ? "translate(" + s.xPercent + "%," + s.yPercent + "%) matrix(" : "matrix(") + s.scaleX + ",0,0," + s.scaleY + "," + u + "," + h + ")")
            };
        me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(t, e, i, n, o, a, l) {
                if (n._transform) return o;
                var u, h, c, p, f, d, g, m = n._transform = Se(t, r, !0, l.parseTransform),
                    v = t.style,
                    y = 1e-6,
                    _ = ye.length,
                    w = l,
                    b = {};
                if ("string" == typeof w.transform && _e) c = $.style, c[_e] = w.transform, c.display = "block", c.position = "absolute", z.body.appendChild($), u = Se($, null, !1), z.body.removeChild($);
                else if ("object" == typeof w) {
                    if (u = {
                        scaleX: ne(null != w.scaleX ? w.scaleX : w.scale, m.scaleX),
                        scaleY: ne(null != w.scaleY ? w.scaleY : w.scale, m.scaleY),
                        scaleZ: ne(w.scaleZ, m.scaleZ),
                        x: ne(w.x, m.x),
                        y: ne(w.y, m.y),
                        z: ne(w.z, m.z),
                        xPercent: ne(w.xPercent, m.xPercent),
                        yPercent: ne(w.yPercent, m.yPercent),
                        perspective: ne(w.transformPerspective, m.perspective)
                    }, g = w.directionalRotation, null != g)
                        if ("object" == typeof g)
                            for (c in g) w[c] = g[c];
                        else w.rotation = g;
                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && (u.x = 0, u.xPercent = ne(w.x, m.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (u.y = 0, u.yPercent = ne(w.y, m.yPercent)), u.rotation = re("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : m.rotation, m.rotation, "rotation", b), xe && (u.rotationX = re("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", b), u.rotationY = re("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", b)), u.skewX = null == w.skewX ? m.skewX : re(w.skewX, m.skewX), u.skewY = null == w.skewY ? m.skewY : re(w.skewY, m.skewY), (h = u.skewY - m.skewY) && (u.skewX += h, u.rotation += h)
                }
                for (xe && null != w.force3D && (m.force3D = w.force3D, d = !0), m.skewType = w.skewType || m.skewType || s.defaultSkewType, f = m.force3D || m.z || m.rotationX || m.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, f || null == w.scale || (u.scaleZ = 1); --_ > -1;) i = ye[_], p = u[i] - m[i], (p > y || -y > p || null != M[i]) && (d = !0, o = new pe(m, i, m[i], p, o), i in b && (o.e = b[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                return p = w.transformOrigin, (p || xe && f && m.zOrigin) && (_e ? (d = !0, i = be, p = (p || q(t, i, r, !1, "50% 50%")) + "", o = new pe(v, i, 0, 0, o, -1, "transformOrigin"), o.b = v[i], o.plugin = a, xe ? (c = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === c || "0px" !== p[2]) ? parseFloat(p[2]) : c) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new pe(m, "zOrigin", 0, 0, o, -1, o.n), o.b = c, o.xs0 = o.e = m.zOrigin) : o.xs0 = o.e = p) : ee(p + "", m)), d && (n._transformType = f || 3 === this._transformType ? 3 : 2), o
            },
            prefix: !0
        }), me("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), me("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, o, s) {
                e = this.format(e);
                var a, l, u, h, c, p, f, d, g, m, v, y, _, w, b, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    S = t.style;
                for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = U(T[l])), c = h = q(t, T[l], r, !1, "0px"), -1 !== c.indexOf(" ") && (h = c.split(" "), c = h[0], h = h[1]), p = u = a[l], f = parseFloat(c), y = c.substr((f + "").length), _ = "=" === p.charAt(1), _ ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = n[i] || y), v !== y && (w = V(t, "borderLeft", f, y), b = V(t, "borderTop", f, y), "%" === v ? (c = 100 * (w / g) + "%", h = 100 * (b / m) + "%") : "em" === v ? (x = V(t, "borderLeft", 1, "em"), c = w / x + "em", h = b / x + "em") : (c = w + "px", h = b + "px"), _ && (p = parseFloat(c) + d + v, u = parseFloat(h) + d + v)), s = fe(S, T[l], c + " " + h, p + " " + u, !1, "0px", s);
                return s
            },
            prefix: !0,
            formatter: ue("0px 0px 0px 0px", !1, !0)
        }), me("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, n, o, s) {
                var a, l, u, h, c, p, f = "background-position",
                    g = r || F(t, null),
                    m = this.format((g ? d ? g.getPropertyValue(f + "-x") + " " + g.getPropertyValue(f + "-y") : g.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (p = q(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                    for (a = m.split(" "), l = v.split(" "), j.setAttribute("src", p), u = 2; --u > -1;) m = a[u], h = -1 !== m.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[u] = h ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                    m = a.join(" ")
                }
                return this.parseComplex(t.style, m, v, o, s)
            },
            formatter: ee
        }), me("backgroundSize", {
            defaultValue: "0 0",
            formatter: ee
        }), me("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), me("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), me("transformStyle", {
            prefix: !0
        }), me("backfaceVisibility", {
            prefix: !0
        }), me("userSelect", {
            prefix: !0
        }), me("margin", {
            parser: he("marginTop,marginRight,marginBottom,marginLeft")
        }), me("padding", {
            parser: he("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), me("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, n, o, s) {
                var a, l, u;
                return 9 > d ? (l = t.currentStyle, u = 8 > d ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
            }
        }), me("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), me("autoRound,strictUnits", {
            parser: function(t, e, i, n, r) {
                return r
            }
        }), me("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, n, o, s) {
                return this.parseComplex(t.style, this.format(q(t, "borderTopWidth", r, !1, "0px") + " " + q(t, "borderTopStyle", r, !1, "solid") + " " + q(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
            }
        }), me("borderWidth", {
            parser: he("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), me("float,cssFloat,styleFloat", {
            parser: function(t, e, i, n, r) {
                var o = t.style,
                    s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new pe(o, s, 0, 0, r, -1, i, !1, 0, o[s], e)
            }
        });
        var Ae = function(t) {
            var e, i = this.t,
                n = i.filter || q(this.data, "filter"),
                r = 0 | this.s + this.c * t;
            100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !q(this.data, "filter")) : (i.filter = n.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
        };
        me("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, n, o, s) {
                var a = parseFloat(q(t, "opacity", r, !1, "1")),
                    l = t.style,
                    u = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === q(t, "visibility", r) && 0 !== e && (a = 0), X ? o = new pe(l, "opacity", a, e - a, o) : (o = new pe(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ae), u && (o = new pe(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
            }
        });
        var Oe = function(t, e) {
                e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
            },
            Le = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Oe(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        me("className", {
            parser: function(t, e, n, o, s, a, l) {
                var u, h, c, p, f, d = t.getAttribute("class") || "",
                    g = t.style.cssText;
                if (s = o._classNamePT = new pe(t, n, 0, 0, s, 2), s.setRatio = Le, s.pr = -11, i = !0, s.b = d, h = Z(t, r), c = t._gsClassPT) {
                    for (p = {}, f = c.data; f;) p[f.p] = 1, f = f._next;
                    c.setRatio(1)
                }
                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.setAttribute("class", s.e), u = G(t, h, Z(t), l, p), t.setAttribute("class", d), s.data = u.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, u.difs, s, a)), s
            }
        });
        var Ie = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, o = this.t.style,
                    s = a.transform.parse;
                if ("all" === this.e) o.cssText = "", r = !0;
                else
                    for (e = this.e.split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === s ? r = !0 : i = "transformOrigin" === i ? be : a[i].p), Oe(o, i);
                r && (Oe(o, _e), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        for (me("clearProps", {
            parser: function(t, e, n, r, o) {
                return o = new pe(t, n, 0, 0, o, 2), o.setRatio = Ie, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
            }
        }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ve(l[de]);
        l = s.prototype, l._firstPT = null, l._onInitTween = function(t, e, a) {
            if (!t.nodeType) return !1;
            this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = F(t, ""), o = this._overwriteProps;
            var l, p, d, g, m, v, y, _, w, x = t.style;
            if (h && "" === x.zIndex && (l = q(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (g = x.cssText, l = Z(t, r), x.cssText = g + ";" + e, l = G(t, l, Z(t)).difs, !X && b.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, x.cssText = g), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                for (w = 3 === this._transformType, _e ? c && (h = !0, "" === x.zIndex && (y = q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : x.zoom = 1, d = p; d && d._next;) d = d._next;
                _ = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = w && xe ? ke : _e ? Ee : Pe, _.data = this._transform || Se(t, r, !0), o.pop()
            }
            if (i) {
                for (; p;) {
                    for (v = p._next, d = g; d && d.pr > p.pr;) d = d._next;
                    (p._prev = d ? d._prev : m) ? p._prev._next = p: g = p, (p._next = d) ? d._prev = p : m = p, p = v
                }
                this._firstPT = g
            }
            return !0
        }, l.parse = function(t, e, i, o) {
            var s, l, h, c, p, f, d, g, m, v, y = t.style;
            for (s in e) f = e[s], l = a[s], l ? i = l.parse(t, f, s, this, i, o, e) : (p = q(t, s, r) + "", m = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && T.test(f) ? (m || (f = ae(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = fe(y, s, p, f, !0, "transparent", i, 0, o)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(p), d = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (h = te(t, s, r), d = "px") : "left" === s || "top" === s ? (h = Q(t, s, r), d = "px") : (h = "opacity" !== s ? 0 : 1, d = "")), v = m && "=" === f.charAt(1), v ? (c = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), c *= parseFloat(f), g = f.replace(_, "")) : (c = parseFloat(f), g = m ? f.substr((c + "").length) || "" : ""), "" === g && (g = s in n ? n[s] : d), f = c || 0 === c ? (v ? c + h : c) + g : e[s], d !== g && "" !== g && (c || 0 === c) && h && (h = V(t, s, h, d), "%" === g ? (h /= V(t, s, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === g ? h /= V(t, s, 1, "em") : "px" !== g && (c = V(t, s, c, g), g = "px"), v && (c || 0 === c) && (f = c + h + g)), v && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== y[s] && (f || "NaN" != f + "" && null != f) ? (i = new pe(y, s, c || h || 0, 0, i, -1, s, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : Y("invalid " + s + " tween value: " + e[s]) : (i = new pe(y, s, h, c - h, i, 0, s, u !== !1 && ("px" === g || "zIndex" === s), 0, p, f), i.xs0 = g)) : i = fe(y, s, p, f, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
            return i
        }, l.setRatio = function(t) {
            var e, i, n, r = this._firstPT,
                o = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                            if (1 === r.type)
                                if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next
                    } else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
                for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, l._enableTransforms = function(t) {
            this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Se(this._target, r, !0)
        };
        var Ce = function() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function(t, e, i) {
            var n = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = Ce, n.data = this
        }, l._linkCSSP = function(t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, l._kill = function(e) {
            var i, n, r, o = e;
            if (e.autoAlpha || e.alpha) {
                o = {};
                for (n in e) o[n] = e[n];
                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
        };
        var Re = function(t, e, i) {
            var n, r, o, s;
            if (t.slice)
                for (r = t.length; --r > -1;) Re(t[r], e, i);
            else
                for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(Z(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Re(o, e, i)
        };
        return s.cascadeTo = function(t, i, n) {
            var r, o, s, a = e.to(t, i, n),
                l = [a],
                u = [],
                h = [],
                c = [],
                p = e._internals.reservedProps;
            for (t = a._targets || a.target, Re(t, u, c), a.render(i, !0), Re(t, h), a.render(0, !0), a._enabled(!0), r = c.length; --r > -1;)
                if (o = G(c[r], u[r], h[r]), o.firstMPT) {
                    o = o.difs;
                    for (s in n) p[s] && (o[s] = n[s]);
                    l.push(e.to(c[r], i, o))
                } return l
        }, t.activate([s]), s
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function(i, n) {
            var r = "x" === n ? "Width" : "Height",
                o = "scroll" + r,
                s = "client" + r,
                a = document.body;
            return i === e || i === t || i === a ? Math.max(t[o], a[o]) - (e["inner" + r] || Math.max(t[s], a[s])) : i[o] - i["offset" + r]
        },
        n = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.4",
            init: function(t, n, r) {
                return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof n && (n = {
                    y: n
                }), this.vars = n, this._autoKill = n.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? i(t, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? i(t, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    o = r - this.yPrev,
                    s = n - this.xPrev;
                this._autoKill && (!this.skipX && (s > 7 || -7 > s) && i(this._target, "x") > n && (this.skipX = !0), !this.skipY && (o > 7 || -7 > o) && i(this._target, "y") > r && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        r = n.prototype;
    n.max = i, r.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, r.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, r._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), ! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var s = e || window.event,
            a = l.call(arguments, 1),
            u = 0,
            c = 0,
            p = 0,
            f = 0,
            d = 0,
            g = 0;
        if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (p = -1 * s.detail), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (c = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (c = -1 * p, p = 0), u = 0 === p ? c : p, "deltaY" in s && (p = -1 * s.deltaY, u = p), "deltaX" in s && (c = s.deltaX, 0 === p && (u = -1 * c)), 0 !== p || 0 !== c) {
            if (1 === s.deltaMode) {
                var m = t.data(this, "mousewheel-line-height");
                u *= m, p *= m, c *= m
            } else if (2 === s.deltaMode) {
                var v = t.data(this, "mousewheel-page-height");
                u *= v, p *= v, c *= v
            }
            if (f = Math.max(Math.abs(p), Math.abs(c)), (!o || o > f) && (o = f, n(s, f) && (o /= 40)), n(s, f) && (u /= 40, c /= 40, p /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), h.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                d = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = c, e.deltaY = p, e.deltaFactor = o, e.offsetX = d, e.offsetY = g, e.deltaMode = 0, a.unshift(e, u, c, p), r && clearTimeout(r), r = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }

    function i() {
        o = null
    }

    function n(t, e) {
        return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var u = s.length; u;) t.event.fixHooks[s[--u]] = t.event.mouseHooks;
    var h = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var i = t(e),
                n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}), ! function(t, e, i, n) {
    var r = t(e);
    t.fn.lazyload = function(o) {
        function s() {
            var e = 0;
            l.each(function() {
                var i = t(this);
                if (!u.skip_invisible || i.is(":visible"))
                    if (t.abovethetop(this, u) || t.leftofbegin(this, u));
                    else if (t.belowthefold(this, u) || t.rightoffold(this, u)) {
                        if (++e > u.failure_limit) return !1
                    } else i.trigger("appear"), e = 0
            })
        }
        var a, l = this,
            u = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: e,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return o && (n !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), n !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(u, o)), a = u.container === n || u.container === e ? r : t(u.container), 0 === u.event.indexOf("scroll") && a.bind(u.event, function() {
            return s()
        }), this.each(function() {
            var e = this,
                i = t(e);
            e.loaded = !1, (i.attr("src") === n || i.attr("src") === !1) && i.is("img") && i.attr("src", u.placeholder), i.one("appear", function() {
                if (!this.loaded) {
                    if (u.appear) {
                        var n = l.length;
                        u.appear.call(e, n, u)
                    }
                    t("<img />").bind("load", function() {
                        var n = i.attr("data-" + u.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"), i[u.effect](u.effect_speed), e.loaded = !0;
                        var r = t.grep(l, function(t) {
                            return !t.loaded
                        });
                        if (l = t(r), u.load) {
                            var o = l.length;
                            u.load.call(e, o, u)
                        }
                    }).attr("src", i.attr("data-" + u.data_attribute))
                }
            }), 0 !== u.event.indexOf("scroll") && i.bind(u.event, function() {
                e.loaded || i.trigger("appear")
            })
        }), r.bind("resize", function() {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function() {
                t(this).trigger("appear")
            })
        }), t(i).ready(function() {
            s()
        }), this
    }, t.belowthefold = function(i, o) {
        var s;
        return s = o.container === n || o.container === e ? (e.innerHeight ? e.innerHeight : r.height()) + r.scrollTop() : t(o.container).offset().top + t(o.container).height(), s <= t(i).offset().top - o.threshold
    }, t.rightoffold = function(i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.width() + r.scrollLeft() : t(o.container).offset().left + t(o.container).width(), s <= t(i).offset().left - o.threshold
    }, t.abovethetop = function(i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.scrollTop() : t(o.container).offset().top, s >= t(i).offset().top + o.threshold + t(i).height()
    }, t.leftofbegin = function(i, o) {
        var s;
        return s = o.container === n || o.container === e ? r.scrollLeft() : t(o.container).offset().left, s >= t(i).offset().left + o.threshold + t(i).width()
    }, t.inviewport = function(e, i) {
        return !(t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function(e) {
            return t.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !t.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return t.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !t.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
    function(t) {
        t.fn.setImg = function(e) {
            var i = t.extend({
                size: "cover",
                border: 0,
                container: window
            }, e);
            return this.each(function() {
                var e = t(i.container).innerHeight(),
                    n = t(i.container).innerWidth(),
                    r = parseFloat(t(this).attr("data-width")),
                    o = parseFloat(t(this).attr("data-height")),
                    s = (n - .5 * i.border) / r,
                    a = (e - i.border) / o,
                    l = null;
                l = "cover" == i.size ? 100 * Math.max(s, a) : "contain" == i.size ? 100 * Math.min(s, a) : 100 * Math.min(s, a);
                var u = .5 * e - .005 * o * l,
                    h = .5 * n - .005 * r * l;
                t(this).width(Math.round(.01 * r * l)), t(this).height(Math.round(.01 * o * l)), t(this).css({
                    "margin-top": Math.round(u),
                    "margin-left": Math.round(h)
                })
            })
        }
    }(jQuery),
    function(t) {
        var e = function(e, i) {
            function n() {
                h.nPercent > 100 || h.nPercent < 0 ? h.nPercent = 0 : h.nPercent, nRadians = 360 * h.nPercent / 100
            }

            function r() {
                h.thickness = h.thickness > 10 ? 10 : h.thickness < 1 ? 1 : Math.round(h.thickness)
            }

            function o() {
                m.css("font-size", h.circleSize + "px")
            }

            function s(t, e) {
                var i = "rotate(" + t + "deg)";
                e.css({
                    "-webkit-transform": i,
                    "-moz-transform": i,
                    "-ms-transform": i,
                    "-o-transform": i,
                    transform: i
                }), t > 180 && (s(180, _), w.addClass(" clipauto "))
            }

            function a() {
                m.find(" .slice > div ").css({
                    "border-width": f,
                    width: d,
                    height: d
                }), m.find(".after").css({
                    top: f,
                    left: f,
                    width: d,
                    height: d
                })
            }

            function l() {
                return w.show(), y.text(""), w.removeClass("clipauto"), s(20, v), s(20, _), this
            }

            function u() {
                h.showPercentText && y.text(h.nPercent + "%")
            }
            var h = t.extend({}, t.fn.progressCircle.defaults, i);
            n(), r();
            var f = "3px",
                d = "157px",
                g = t(e),
                m = g.find(".prog-circle"),
                v = m.find(".bar"),
                y = m.children(".percenttext"),
                _ = m.find(".fill"),
                w = m.find(".slice");
            0 == h.nPercent ? w.hide() : (l(), s(nRadians, v)), a(), u(), o()
        };
        t.fn.progressCircle = function(i) {
            return this.each(function() {
                var o = t(this);
                if (o.data("progressCircle")) {
                    var s = new e(this, i);
                    return o.data("progressCircle")
                }
                t(this).append('<div class="prog-circle">	<div class="slice">		<div class="bar"> </div>		<div class="fill"> </div>	</div>	<div class="after"> </div></div>');
                var s = new e(this, i);
                o.data("progressCircle", s)
            })
        }, t.fn.progressCircle.defaults = {
            nPercent: 50,
            showPercentText: !0,
            circleSize: 100,
            thickness: 3
        }
    }(jQuery),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            o = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function r(t) {
            return "[object Array]" === p.call(t)
        }

        function o(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var u = t.jQuery,
            h = t.console,
            c = void 0 !== h,
            p = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var r = i.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var a = r[o];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, r) {
                return e.options.debug && c && h.log("confirm", t, r), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var r = 0; n > r; r++) {
                var o = this.images[r];
                o.on("confirm", t), o.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, u && (u.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(u(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }),
    function(t) {
        t.belowthefold = function(e, i) {
            var n = t(window).height() + t(window).scrollTop();
            return n <= t(e).offset().top - i.threshold
        }, t.abovethetop = function(e, i) {
            var n = t(window).scrollTop();
            return n >= t(e).offset().top + t(e).height() - i.threshold
        }, t.rightofscreen = function(e, i) {
            var n = t(window).width() + t(window).scrollLeft();
            return n <= t(e).offset().left - i.threshold
        }, t.leftofscreen = function(e, i) {
            var n = t(window).scrollLeft();
            return n >= t(e).offset().left + t(e).width() - i.threshold
        }, t.inviewport = function(e, i) {
            return !(t.rightofscreen(e, i) || t.leftofscreen(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
        }, t.extend(t.expr[":"], {
            "below-the-fold": function(e) {
                return t.belowthefold(e, {
                    threshold: 0
                })
            },
            "above-the-top": function(e) {
                return t.abovethetop(e, {
                    threshold: 0
                })
            },
            "left-of-screen": function(e) {
                return t.leftofscreen(e, {
                    threshold: 0
                })
            },
            "right-of-screen": function(e) {
                return t.rightofscreen(e, {
                    threshold: 0
                })
            },
            "in-viewport": function(e) {
                return t.inviewport(e, {
                    threshold: 0
                })
            }
        })
    }(jQuery),
    function(t, e) {
        "use strict";
        var i = t.History = t.History || {},
            n = t.jQuery;
        if ("undefined" != typeof i.Adapter) throw new Error("History.js Adapter has already been loaded...");
        i.Adapter = {
            bind: function(t, e, i) {
                n(t).bind(e, i)
            },
            trigger: function(t, e, i) {
                n(t).trigger(e, i)
            },
            extractEventData: function(t, i, n) {
                var r = i && i.originalEvent && i.originalEvent[t] || n && n[t] || e;
                return r
            },
            onDomLoad: function(t) {
                n(t)
            }
        }, "undefined" != typeof i.init && i.init()
    }(window),
    function(t, e) {
        "use strict";
        var i = t.console || e,
            n = t.document,
            r = t.navigator,
            o = !1,
            s = t.setTimeout,
            a = t.clearTimeout,
            l = t.setInterval,
            u = t.clearInterval,
            h = t.JSON,
            c = t.alert,
            p = t.History = t.History || {},
            f = t.history;
        try {
            o = t.sessionStorage, o.setItem("TEST", "1"), o.removeItem("TEST")
        } catch (d) {
            o = !1
        }
        if (h.stringify = h.stringify || h.encode, h.parse = h.parse || h.decode, "undefined" != typeof p.init) throw new Error("History.js Core has already been loaded...");
        p.init = function() {
            return "undefined" == typeof p.Adapter ? !1 : ("undefined" != typeof p.initCore && p.initCore(), "undefined" != typeof p.initHtml4 && p.initHtml4(), !0)
        }, p.initCore = function() {
            if ("undefined" != typeof p.initCore.initialized) return !1;
            if (p.initCore.initialized = !0, p.options = p.options || {}, p.options.hashChangeInterval = p.options.hashChangeInterval || 100, p.options.safariPollInterval = p.options.safariPollInterval || 500, p.options.doubleCheckInterval = p.options.doubleCheckInterval || 500, p.options.disableSuid = p.options.disableSuid || !1, p.options.storeInterval = p.options.storeInterval || 1e3, p.options.busyDelay = p.options.busyDelay || 250, p.options.debug = p.options.debug || !1, p.options.initialTitle = p.options.initialTitle || n.title, p.options.html4Mode = p.options.html4Mode || !1, p.options.delayInit = p.options.delayInit || !1, p.intervalList = [], p.clearAllIntervals = function() {
                var t, e = p.intervalList;
                if ("undefined" != typeof e && null !== e) {
                    for (t = 0; t < e.length; t++) u(e[t]);
                    p.intervalList = null
                }
            }, p.debug = function() {
                (p.options.debug || !1) && p.log.apply(p, arguments)
            }, p.log = function() {
                var r, o, s, a, l, t = "undefined" != typeof i && "undefined" != typeof i.log && "undefined" != typeof i.log.apply,
                    e = n.getElementById("log");
                for (t ? (a = Array.prototype.slice.call(arguments), r = a.shift(), "undefined" != typeof i.debug ? i.debug.apply(i, [r, a]) : i.log.apply(i, [r, a])) : r = "\n" + arguments[0] + "\n", o = 1, s = arguments.length; s > o; ++o) {
                    if (l = arguments[o], "object" == typeof l && "undefined" != typeof h) try {
                        l = h.stringify(l)
                    } catch (u) {}
                    r += "\n" + l + "\n"
                }
                return e ? (e.value += r + "\n-----\n", e.scrollTop = e.scrollHeight - e.clientHeight) : t || c(r), !0
            }, p.getInternetExplorerMajorVersion = function() {
                var t = p.getInternetExplorerMajorVersion.cached = "undefined" != typeof p.getInternetExplorerMajorVersion.cached ? p.getInternetExplorerMajorVersion.cached : function() {
                    for (var t = 3, e = n.createElement("div"), i = e.getElementsByTagName("i");
                         (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && i[0];);
                    return t > 4 ? t : !1
                }();
                return t
            }, p.isInternetExplorer = function() {
                var t = p.isInternetExplorer.cached = "undefined" != typeof p.isInternetExplorer.cached ? p.isInternetExplorer.cached : Boolean(p.getInternetExplorerMajorVersion());
                return t
            }, p.emulated = p.options.html4Mode ? {
                pushState: !0,
                hashChange: !0
            } : {
                pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                hashChange: Boolean(!("onhashchange" in t || "onhashchange" in n) || p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8)
            }, p.enabled = !p.emulated.pushState, p.bugs = {
                setHash: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                safariPoll: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                ieDoubleCheck: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 7)
            }, p.isEmptyObject = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }, p.cloneObject = function(t) {
                var e, i;
                return t ? (e = h.stringify(t), i = h.parse(e)) : i = {}, i
            }, p.getRootUrl = function() {
                var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
                return n.location.port && (t += ":" + n.location.port), t += "/"
            }, p.getBaseHref = function() {
                var t = n.getElementsByTagName("base"),
                    e = null,
                    i = "";
                return 1 === t.length && (e = t[0], i = e.href.replace(/[^\/]+$/, "")), i = i.replace(/\/+$/, ""), i && (i += "/"), i
            }, p.getBaseUrl = function() {
                var t = p.getBaseHref() || p.getBasePageUrl() || p.getRootUrl();
                return t
            }, p.getPageUrl = function() {
                var i, t = p.getState(!1, !1),
                    e = (t || {}).url || p.getLocationHref();
                return i = e.replace(/\/+$/, "").replace(/[^\/]+$/, function(t) {
                    return /\./.test(t) ? t : t + "/"
                })
            }, p.getBasePageUrl = function() {
                var t = p.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t) {
                    return /[^\/]$/.test(t) ? "" : t
                }).replace(/\/+$/, "") + "/";
                return t
            }, p.getFullUrl = function(t, e) {
                var i = t,
                    n = t.substring(0, 1);
                return e = "undefined" == typeof e ? !0 : e, /[a-z]+\:\/\//.test(t) || (i = "/" === n ? p.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? p.getPageUrl().replace(/#.*/, "") + t : "?" === n ? p.getPageUrl().replace(/[\?#].*/, "") + t : e ? p.getBaseUrl() + t.replace(/^(\.\/)+/, "") : p.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), i.replace(/\#$/, "")
            }, p.getShortUrl = function(t) {
                var e = t,
                    i = p.getBaseUrl(),
                    n = p.getRootUrl();
                return p.emulated.pushState && (e = e.replace(i, "")), e = e.replace(n, "/"), p.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
            }, p.getLocationHref = function(t) {
                return t = t || n, t.URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
            }, p.store = {}, p.idToState = p.idToState || {}, p.stateToId = p.stateToId || {}, p.urlToId = p.urlToId || {}, p.storedStates = p.storedStates || [], p.savedStates = p.savedStates || [], p.normalizeStore = function() {
                p.store.idToState = p.store.idToState || {}, p.store.urlToId = p.store.urlToId || {}, p.store.stateToId = p.store.stateToId || {}
            }, p.getState = function(t, e) {
                "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0);
                var i = p.getLastSavedState();
                return !i && e && (i = p.createStateObject()), t && (i = p.cloneObject(i), i.url = i.cleanUrl || i.url), i
            }, p.getIdByState = function(t) {
                var i, e = p.extractId(t.url);
                if (!e)
                    if (i = p.getStateString(t), "undefined" != typeof p.stateToId[i]) e = p.stateToId[i];
                    else if ("undefined" != typeof p.store.stateToId[i]) e = p.store.stateToId[i];
                    else {
                        for (; e = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof p.idToState[e] || "undefined" != typeof p.store.idToState[e];);
                        p.stateToId[i] = e, p.idToState[e] = t
                    }
                return e
            }, p.normalizeState = function(t) {
                var e, i;
                return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = p.getFullUrl(t.url ? t.url : p.getLocationHref()), e.hash = p.getShortUrl(e.url), e.data = p.cloneObject(t.data), e.id = p.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, i = !p.isEmptyObject(e.data), (e.title || i) && p.options.disableSuid !== !0 && (e.hash = p.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = p.getFullUrl(e.hash), (p.emulated.pushState || p.bugs.safariPoll) && p.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
            }, p.createStateObject = function(t, e, i) {
                var n = {
                    data: t,
                    title: e,
                    url: i
                };
                return n = p.normalizeState(n)
            }, p.getStateById = function(t) {
                t = String(t);
                var i = p.idToState[t] || p.store.idToState[t] || e;
                return i
            }, p.getStateString = function(t) {
                var e, i, n;
                return e = p.normalizeState(t), i = {
                    data: e.data,
                    title: t.title,
                    url: t.url
                }, n = h.stringify(i)
            }, p.getStateId = function(t) {
                var e, i;
                return e = p.normalizeState(t), i = e.id
            }, p.getHashByState = function(t) {
                var e, i;
                return e = p.normalizeState(t), i = e.hash
            }, p.extractId = function(t) {
                var e, i, n, r;
                return r = -1 != t.indexOf("#") ? t.split("#")[0] : t, i = /(.*)\&_suid=([0-9]+)$/.exec(r), n = i ? i[1] || t : t, e = i ? String(i[2] || "") : "", e || !1
            }, p.isTraditionalAnchor = function(t) {
                var e = !/[\/\?\.]/.test(t);
                return e
            }, p.extractState = function(t, e) {
                var n, r, i = null;
                return e = e || !1, n = p.extractId(t), n && (i = p.getStateById(n)), i || (r = p.getFullUrl(t), n = p.getIdByUrl(r) || !1, n && (i = p.getStateById(n)), !i && e && !p.isTraditionalAnchor(t) && (i = p.createStateObject(null, null, r))), i
            }, p.getIdByUrl = function(t) {
                var i = p.urlToId[t] || p.store.urlToId[t] || e;
                return i
            }, p.getLastSavedState = function() {
                return p.savedStates[p.savedStates.length - 1] || e
            }, p.getLastStoredState = function() {
                return p.storedStates[p.storedStates.length - 1] || e
            }, p.hasUrlDuplicate = function(t) {
                var i, e = !1;
                return i = p.extractState(t.url), e = i && i.id !== t.id
            }, p.storeState = function(t) {
                return p.urlToId[t.url] = t.id, p.storedStates.push(p.cloneObject(t)), t
            }, p.isLastSavedState = function(t) {
                var i, n, r, e = !1;
                return p.savedStates.length && (i = t.id, n = p.getLastSavedState(), r = n.id, e = i === r), e
            }, p.saveState = function(t) {
                return p.isLastSavedState(t) ? !1 : (p.savedStates.push(p.cloneObject(t)), !0)
            }, p.getStateByIndex = function(t) {
                var e = null;
                return e = "undefined" == typeof t ? p.savedStates[p.savedStates.length - 1] : 0 > t ? p.savedStates[p.savedStates.length + t] : p.savedStates[t]
            }, p.getCurrentIndex = function() {
                var t = null;
                return t = p.savedStates.length < 1 ? 0 : p.savedStates.length - 1
            }, p.getHash = function(t) {
                var i, e = p.getLocationHref(t);
                return i = p.getHashByUrl(e)
            }, p.unescapeHash = function(t) {
                var e = p.normalizeHash(t);
                return e = decodeURIComponent(e)
            }, p.normalizeHash = function(t) {
                var e = t.replace(/[^#]*#/, "").replace(/#.*/, "");
                return e
            }, p.setHash = function(t, e) {
                var i, r;
                return e !== !1 && p.busy() ? (p.pushQueue({
                    scope: p,
                    callback: p.setHash,
                    args: arguments,
                    queue: e
                }), !1) : (p.busy(!0), i = p.extractState(t, !0), i && !p.emulated.pushState ? p.pushState(i.data, i.title, i.url, !1) : p.getHash() !== t && (p.bugs.setHash ? (r = p.getPageUrl(), p.pushState(null, null, r + "#" + t, !1)) : n.location.hash = t), p)
            }, p.escapeHash = function(e) {
                var i = p.normalizeHash(e);
                return i = t.encodeURIComponent(i), p.bugs.hashEscape || (i = i.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), i
            }, p.getHashByUrl = function(t) {
                var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return e = p.unescapeHash(e)
            }, p.setTitle = function(t) {
                var i, e = t.title;
                e || (i = p.getStateByIndex(0), i && i.url === t.url && (e = i.title || p.options.initialTitle));
                try {
                    n.getElementsByTagName("title")[0].innerHTML = e.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (r) {}
                return n.title = e, p
            }, p.queues = [], p.busy = function(t) {
                if ("undefined" != typeof t ? p.busy.flag = t : "undefined" == typeof p.busy.flag && (p.busy.flag = !1), !p.busy.flag) {
                    a(p.busy.timeout);
                    var e = function() {
                        var t, i, n;
                        if (!p.busy.flag)
                            for (t = p.queues.length - 1; t >= 0; --t) i = p.queues[t], 0 !== i.length && (n = i.shift(), p.fireQueueItem(n), p.busy.timeout = s(e, p.options.busyDelay))
                    };
                    p.busy.timeout = s(e, p.options.busyDelay)
                }
                return p.busy.flag
            }, p.busy.flag = !1, p.fireQueueItem = function(t) {
                return t.callback.apply(t.scope || p, t.args || [])
            }, p.pushQueue = function(t) {
                return p.queues[t.queue || 0] = p.queues[t.queue || 0] || [], p.queues[t.queue || 0].push(t), p
            }, p.queue = function(t, e) {
                return "function" == typeof t && (t = {
                    callback: t
                }), "undefined" != typeof e && (t.queue = e), p.busy() ? p.pushQueue(t) : p.fireQueueItem(t), p
            }, p.clearQueue = function() {
                return p.busy.flag = !1, p.queues = [], p
            }, p.stateChanged = !1, p.doubleChecker = !1, p.doubleCheckComplete = function() {
                return p.stateChanged = !0, p.doubleCheckClear(), p
            }, p.doubleCheckClear = function() {
                return p.doubleChecker && (a(p.doubleChecker), p.doubleChecker = !1), p
            }, p.doubleCheck = function(t) {
                return p.stateChanged = !1, p.doubleCheckClear(), p.bugs.ieDoubleCheck && (p.doubleChecker = s(function() {
                    return p.doubleCheckClear(), p.stateChanged || t(), !0
                }, p.options.doubleCheckInterval)), p
            }, p.safariStatePoll = function() {
                var i, e = p.extractState(p.getLocationHref());
                return p.isLastSavedState(e) ? void 0 : (i = e, i || (i = p.createStateObject()), p.Adapter.trigger(t, "popstate"), p)
            }, p.back = function(t) {
                return t !== !1 && p.busy() ? (p.pushQueue({
                    scope: p,
                    callback: p.back,
                    args: arguments,
                    queue: t
                }), !1) : (p.busy(!0), p.doubleCheck(function() {
                    p.back(!1)
                }), f.go(-1), !0)
            }, p.forward = function(t) {
                return t !== !1 && p.busy() ? (p.pushQueue({
                    scope: p,
                    callback: p.forward,
                    args: arguments,
                    queue: t
                }), !1) : (p.busy(!0), p.doubleCheck(function() {
                    p.forward(!1)
                }), f.go(1), !0)
            }, p.go = function(t, e) {
                var i;
                if (t > 0)
                    for (i = 1; t >= i; ++i) p.forward(e);
                else {
                    if (!(0 > t)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (i = -1; i >= t; --i) p.back(e)
                }
                return p
            }, p.emulated.pushState) {
                var g = function() {};
                p.pushState = p.pushState || g, p.replaceState = p.replaceState || g
            } else p.onPopState = function(e, i) {
                var o, s, n = !1,
                    r = !1;
                return p.doubleCheckComplete(), o = p.getHash(), o ? (s = p.extractState(o || p.getLocationHref(), !0), s ? p.replaceState(s.data, s.title, s.url, !1) : (p.Adapter.trigger(t, "anchorchange"), p.busy(!1)), p.expectedStateId = !1, !1) : (n = p.Adapter.extractEventData("state", e, i) || !1, r = n ? p.getStateById(n) : p.expectedStateId ? p.getStateById(p.expectedStateId) : p.extractState(p.getLocationHref()), r || (r = p.createStateObject(null, null, p.getLocationHref())), p.expectedStateId = !1, p.isLastSavedState(r) ? (p.busy(!1), !1) : (p.storeState(r), p.saveState(r), p.setTitle(r), p.Adapter.trigger(t, "statechange"), p.busy(!1), !0))
            }, p.Adapter.bind(t, "popstate", p.onPopState), p.pushState = function(e, i, n, r) {
                if (p.getHashByUrl(n) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (r !== !1 && p.busy()) return p.pushQueue({
                    scope: p,
                    callback: p.pushState,
                    args: arguments,
                    queue: r
                }), !1;
                p.busy(!0);
                var o = p.createStateObject(e, i, n);
                return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, f.pushState(o.id, o.title, o.url), p.Adapter.trigger(t, "popstate")), !0
            }, p.replaceState = function(e, i, n, r) {
                if (p.getHashByUrl(n) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (r !== !1 && p.busy()) return p.pushQueue({
                    scope: p,
                    callback: p.replaceState,
                    args: arguments,
                    queue: r
                }), !1;
                p.busy(!0);
                var o = p.createStateObject(e, i, n);
                return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, f.replaceState(o.id, o.title, o.url), p.Adapter.trigger(t, "popstate")), !0
            };
            if (o) {
                try {
                    p.store = h.parse(o.getItem("History.store")) || {}
                } catch (m) {
                    p.store = {}
                }
                p.normalizeStore()
            } else p.store = {}, p.normalizeStore();
            p.Adapter.bind(t, "unload", p.clearAllIntervals), p.saveState(p.storeState(p.extractState(p.getLocationHref(), !0))), o && (p.onUnload = function() {
                var t, e, i;
                try {
                    t = h.parse(o.getItem("History.store")) || {}
                } catch (n) {
                    t = {}
                }
                t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};
                for (e in p.idToState) p.idToState.hasOwnProperty(e) && (t.idToState[e] = p.idToState[e]);
                for (e in p.urlToId) p.urlToId.hasOwnProperty(e) && (t.urlToId[e] = p.urlToId[e]);
                for (e in p.stateToId) p.stateToId.hasOwnProperty(e) && (t.stateToId[e] = p.stateToId[e]);
                p.store = t, p.normalizeStore(), i = h.stringify(t);
                try {
                    o.setItem("History.store", i)
                } catch (r) {
                    if (r.code !== DOMException.QUOTA_EXCEEDED_ERR) throw r;
                    o.length && (o.removeItem("History.store"), o.setItem("History.store", i))
                }
            }, p.intervalList.push(l(p.onUnload, p.options.storeInterval)), p.Adapter.bind(t, "beforeunload", p.onUnload), p.Adapter.bind(t, "unload", p.onUnload)), p.emulated.pushState || (p.bugs.safariPoll && p.intervalList.push(l(p.safariStatePoll, p.options.safariPollInterval)), ("Apple Computer, Inc." === r.vendor || "Mozilla" === (r.appCodeName || "")) && (p.Adapter.bind(t, "hashchange", function() {
                p.Adapter.trigger(t, "popstate")
            }), p.getHash() && p.Adapter.onDomLoad(function() {
                p.Adapter.trigger(t, "hashchange")
            })))
        }, (!p.options || !p.options.delayInit) && p.init()
    }(window);