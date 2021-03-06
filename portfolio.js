
$(function() {
    function r(e) {
        var o = "original-large";
        return 500 >= e ? o = "original-small" : e > 500 && 1200 >= e ? o = "original-medium" : e > 1100 && (o = "original-large"), o
    }

    function l() {
        return /(iPhone|iPod|iPad)/i.test(navigator.userAgent) ? /OS [1-7](.*) like Mac OS X/i.test(navigator.userAgent) ? !1 : !0 : void 0
    }

    function g(o) {
        TweenLite.to(u, e.page.time, {
            myProp: o,
            onUpdate: d
        })
    }

    function d() {
        $(".circle").progressCircle({
            nPercent: u.myProp,
            showPercentText: !1,
            thickness: 1.3,
            circleSize: 163
        })
    }

    function f() {
        if ($("body").hasClass("work-page") && e.win.w > e.page.mobileBreak) e.page.where = Math.round(o / e.win.h), TweenLite.set($(".work-carousel .project:eq(" + e.page.where + ")"), {
            transformOrigin: "50% 50% 0",
            scale: .9
        }), TweenLite.to($(".page-loader"), e.page.time, {
            opacity: "0",
            scale: 1.1,
            ease: Expo.easeInOut,
            onComplete: function() {
                $(".page-loader").remove(), a = !0
            }
        }), TweenLite.to($("#wrap, .wc-nav"), e.page.time, {
            opacity: "1",
            ease: Expo.easeInOut,
            delay: .3
        }), TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ")"), e.page.time, {
            opacity: "1",
            scale: 1,
            ease: Expo.easeInOut,
            delay: .4
        }), TweenLite.to($(".mainNav"), e.page.time, {
            top: "0px",
            ease: Expo.easeInOut,
            delay: .4
        }), no();
        else if (e.win.w > e.page.mobileBreak) {
            $(".masonry").masonry();
            var t = Math.round(100 * (.5 * e.win.h + $(window).scrollTop()) / $("body").height());
            TweenLite.set($("#wrap"), {
                transformOrigin: "50% " + t + "% 0",
                scale: .9
            }), TweenLite.to($(".page-loader"), e.page.time, {
                opacity: "0",
                scale: 1.1,
                ease: Expo.easeInOut,
                onComplete: function() {
                    $(".page-loader").remove()
                }
            }), TweenLite.to($("#wrap, .wc-nav"), e.page.time, {
                opacity: "1",
                scale: 1,
                ease: Expo.easeInOut,
                delay: .3,
                onComplete: function() {
                    $("#wrap").css({
                        "transform-origin": "",
                        transform: "",
                        "-webkit-transform": ""
                    })
                }
            }), TweenLite.to($(".mainNav"), e.page.time, {
                top: "0px",
                ease: Expo.easeInOut,
                delay: .3
            }), no()
        } else $(".masonry").masonry(), TweenLite.to($(".page-loader"), e.page.time, {
            opacity: "0",
            ease: Expo.easeInOut,
            onComplete: function() {
                $(".page-loader").remove()
            }
        }), TweenLite.to($("#wrap, .wc-nav"), e.page.time, {
            opacity: "1",
            ease: Expo.easeInOut,
            delay: .3,
            onComplete: function() {
                $("#wrap").css({
                    "transform-origin": "",
                    transform: ""
                })
            }
        }), TweenLite.to($(".mainNav"), e.page.time, {
            top: "0px",
            ease: Expo.easeInOut,
            delay: .4
        }), $("body").hasClass("work-page") && Modernizr.touch && e.win.w < e.page.mobileBreak ? ($(".work-carousel .project").removeAttr("style"), $(".work-carousel .img").removeAttr("style"), $(".work-carousel .img img").removeAttr("style"), $("#wrap").css({
            height: ""
        }), $("nav, .work-carousel").css({
            width: ""
        }), TweenLite.killTweensOf(".work-carousel .project .img"), TweenLite.set($("#wrap"), {
            scrollTo: {
                y: 0,
                x: 0
            }
        })) : no()
    }

    function y() {
        o = $(window).scrollTop(), o >= 200 && e.win.w > e.page.mobileBreak ? (m || ($(".mainNav").clone().addClass("sticky").insertAfter(".mainNav").removeAttr("style"), m = !0, $(".anchor").on("click", D)), TweenLite.to($(".mainNav").not(".sticky"), e.page.time_fast, {
            opacity: "0",
            ease: Expo.easeOut
        }), TweenLite.to($(".sticky"), e.page.time, {
            top: "0px",
            ease: Expo.easeOut
        }), v = !1, $(".scroll-top").css({
            opacity: "1"
        })) : 199 >= o && (v || (TweenLite.to($(".sticky"), e.page.time, {
            top: "-50px",
            ease: Expo.easeOut
        }), TweenLite.to($(".mainNav").not(".sticky"), e.page.time, {
            opacity: "1",
            ease: Expo.easeOut
        }), v = !0), $(".scroll-top").css({
            opacity: ""
        })), $(".scroll-top").css(o + $(window).height() > $(document).height() - 150 ? {
            position: "absolute",
            top: $(document).height() - 150 + "px"
        } : {
            position: "",
            top: ""
        })
    }

    function b() {
        if (!Modernizr.touch && e.win.w > 800 || l() && e.win.w > 800)
            if ($(".sticky-text:in-viewport").addClass("visibile"), $(".sticky-text:above-the-top").removeClass("visibile"), $(".sticky-text:below-the-fold").removeClass("visibile"), $(".sticky-text").hasClass("visibile") && $(".visibile .intro-b").outerHeight() <= e.win.h - 210) {
                var o = $(".visibile").offset().top,
                    a = $(".visibile").height(),
                    t = $(".visibile .intro-b").height(),
                    i = $(".visibile .intro-b").outerWidth(),
                    r = $(window).scrollTop() >= $(".visibile").offset().top - 130,
                    n = $(window).scrollTop() <= o + a - 130 - t,
                    s = $(window).scrollTop() <= $(".visibile").offset().top - 130;
                r && n ? ($(".visibile:eq(0) .intro-b").css({
                    position: "fixed",
                    width: i + "px",
                    top: "130px",
                    "z-index": "5"
                }), $(".visibile:eq(1) .intro-b").css({
                    position: "",
                    width: "",
                    top: ""
                })) : s && n ? ($(".visibile:eq(0) .intro-b").css({
                    position: "",
                    width: "",
                    top: ""
                }), $(".visibile:eq(1) .intro-b").css({
                    position: "",
                    width: "",
                    top: ""
                })) : ($(".visibile:eq(0) .intro-b").css({
                    position: "absolute",
                    width: "",
                    top: a - t + "px"
                }), $(".visibile:eq(1) .intro-b").css({
                    position: "",
                    width: "",
                    top: ""
                }))
            } else $(".sticky-text .intro-b").css({
                position: "",
                width: "",
                top: ""
            });
        else $(".sticky-text .intro-b").css({
            position: "",
            width: "",
            top: ""
        })
    }

    function k(e) {
        e.preventDefault();
        var o = $(this).attr("href").split("/", 2);
        R.pushState(null, o[1].slice(0, -4), "/photography/" + o[1].slice(0, -4)), ga("send", "pageview", {
            page: "/photography/" + o[1].slice(0, -4),
            title: "Ajax - " + o[1].slice(0, -4)
        })
    }

    function T(e) {
        e.preventDefault(), R.pushState(null, "Photography / Vito Salvatore - Interactive Art Director", "/photography"), ga("send", "pageview", {
            page: "/photography/",
            title: "Ajax - Photography"
        })
    }

    function x() {
        e.photo = !0, $(".carousel-nav .where").empty().append(e.page.where + 1), $(".carousel-nav .lenght").empty().append(e.page.number), $(".photo-carousel").css({
            display: "block",
            left: "0%"
        });
        var o = Math.round(100 * (.5 * e.win.h + $(window).scrollTop()) / $("body").height());
        $("#wrap, nav").css({
            width: $("body").width()
        }), $("html").css({
            "overflow-y": "hidden"
        }).delay(500), TweenLite.set($(".photography-page #wrap"), {
            transformOrigin: "50% " + o + "% 0"
        }), TweenLite.set($(".photo-carousel"), {
            opacity: "0",
            scale: 1.1
        }), TweenLite.to($(".photo-carousel"), e.page.time_fast, {
            opacity: "1",
            scale: 1,
            ease: Expo.easeInOut,
            delay: .2
        }), TweenLite.to($(".photography-page #wrap"), e.page.time_fast, {
            opacity: "0",
            scale: .9,
            ease: Expo.easeInOut
        }), Q(e.win.h * e.page.where, 0, e.container)
    }

    function j() {
        e.photo = !1, $("#wrap, nav").css({
            width: ""
        }), $("html").css({
            "overflow-y": "auto"
        }), $(".masonry").masonry(), TweenLite.to($(".photo-carousel"), e.page.time_fast, {
            opacity: "0",
            scale: 1.1,
            ease: Expo.easeInOut
        }), TweenLite.to($(".photography-page #wrap"), e.page.time_fast, {
            opacity: "1",
            scale: 1,
            ease: Expo.easeInOut,
            delay: .2,
            onComplete: function() {
                $(".photo-carousel").css({
                    display: "none",
                    left: "100%"
                })
            }
        })
    }

    function C() {
        if ($("body").hasClass("work-page")) {
            $(".work-carousel").append('<div class="wc-nav"><div class="vertical-Center titles"><ul class="ul-nostyle latinModern"> </ul> </div> <div class="littleTitles-After anchors overflowHidden"><ul class="ul-nostyle brandon-Medium upperCase letterSpacingBIG"></ul></div><div class="littleTitles-Before anchors overflowHidden"><ul class="ul-nostyle brandon-Medium upperCase letterSpacingBIG"> </ul></div></div>');
            for (var o = 0; o < e.page.number; o++) {
                var a = $(".work-carousel .project:eq(" + o + ") img").attr("src"),
                    t = "#" + $(".work-carousel .project:eq(" + o + ")").attr("id"),
                    i = $(".work-carousel .project:eq(" + o + ") img").attr("alt"),
                    r = $(".work-carousel .project:eq(" + o + ") .cta").attr("href");
                e.myWorks[o] = {
                    id: t,
                    title: i,
                    imgUrl: a,
                    link: r
                }, $(".work-carousel .project:eq(" + o + ")").append('<div class="img relative"></div>'), $(".work-carousel .project:eq(" + o + ") img").clone().appendTo(".work-carousel .project:eq(" + o + ") .img"), $(".titles ul").append('<li><a class="css3Animate" href="' + r + '">' + i + "</a></li>"), o > 0 && $(".littleTitles-After ul").append('<li><span class="line"></span><a class="css3Animate anchor" href="' + t + '">' + i + "</a></li>"), o < e.page.number - 1 && $(".littleTitles-Before ul").append('<li><a class="css3Animate anchor" href="' + t + '">' + i + '</a><span class="line"></span></li>'), $(".anchor").on("click", D)
            }
            Modernizr.touch || ($(".titles ul a").on("mouseover", O), $(".titles ul a").bind("mouseout", A)), $(".titles ul a").bind("click", z)
        }
    }

    function O() {
        TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ")>div"), e.page.time, {
            opacity: "0.5",
            ease: Expo.easeOut
        })
    }

    function A() {
        TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ")>div"), e.page.time, {
            opacity: "1",
            ease: Expo.easeOut
        })
    }

    function z(o) {
        o.preventDefault(), !L && e.can && (R.pushState(null, $(this).text(), $(this).attr("href")), ga("send", "pageview", {
            page: $(this).attr("href"),
            title: "Ajax - " + $(this).text()
        }))
    }

    function E(o) {
        e.win.w > e.page.mobileBreak && (o.preventDefault(), q = $(this).attr("href"), R.pushState(null, $(this).text(), $(this).attr("href")), ga("send", "pageview", {
            page: $(this).attr("href"),
            title: "Ajax - " + $(this).text()
        }))
    }

    function I() {
        Modernizr.touch || io || (e.page.where = Math.round(o / e.win.h)), $(".titles ul").css("margin-top", "-" + $(".titles ul").height() * $(e.container).scrollTop() / (e.win.h * e.page.number) + "px"), $(".littleTitles-After ul").css("margin-top", "-" + $(".littleTitles-After ul").height() * $(e.container).scrollTop() / (e.win.h * (e.page.number - 1)) + "px"), $(".littleTitles-Before ul").css("margin-top", "-" + $(".littleTitles-Before ul").height() * $(e.container).scrollTop() / (e.win.h * (e.page.number - 1)) + "px")
    }

    function M(o) {
        o.preventDefault(), B.url = $(this).attr("href"), $(".video-module").append('<iframe id="#youtube" width="100%" height="100%" src="' + B.url + B.template + '" frameborder="0" allowfullscreen></iframe>'), TweenLite.to($(".video-module iframe"), e.page.time, {
            opacity: "1",
            delay: .3,
            ease: Expo.easeInOut
        })
    }

    function D(a) {
        a.preventDefault();
        var t = $(this).attr("href").substring(1);
        "#" != t && "" != t && "top" != t ? (where = $('.work-carousel .project[id="' + t + '"]').index() * e.win.h, e.page.where = $('.work-carousel .project[id="' + t + '"]').index(), Q(where, e.page.time, e.container)) : "top" == t ? Q(0, e.page.time, window) : L ? (R.pushState(null, "Vito Salvatore - Interactive Art Director", "/"), ga("send", "pageview", {
            page: "/",
            title: "Ajax - Vito Salvatore"
        })) : o > 0 && (e.page.where = 0, Q(0, e.page.time, e.container))
    }

    function P(o) {
        if ($("body").hasClass("work-page") && !L || $("body").hasClass("photography-page") && e.photo) switch (o.preventDefault(), o.which) {
            case 40:
                e.can && Z("down");
                break;
            case 38:
                e.can && Z("up")
        }
    }

    function W(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        "#up" == o ? Z("up") : "#down" == o && Z("down")
    }

    function N(o) {
        if (!L) {
            o.preventDefault(), _.push(Math.abs(o.deltaY));
            var a = Math.max.apply(Math, _);
            Math.abs(o.deltaY) < 1 ? (_.length = 0, H = 0) : a > 1 && 80 > a ? (_.length = 0, H = 1) : a > 80 && 180 > a ? H = 5 : a > 180 && (H = 10), e.can && (o.deltaY > H ? Z("up") : o.deltaY < -1 * H && Z("down"))
        }
    }

    function F(t, i, r, s) {
        n ? (TweenLite.killTweensOf(".work-carousel .project .img"), e.page.where = Math.round($(e.container).scrollTop() / e.win.h), U = !0, Z("dont"), V = null) : (U = !1, e.page.ease = Expo.easeOut, a && TweenLite.killTweensOf(e.container), TweenLite.killTweensOf(".work-carousel .project .img"), "up" == r ? (V = "up", TweenLite.set(e.container, {
            scrollTo: {
                y: o + s,
                x: 0
            }
        })) : "down" == r && (V = "down", TweenLite.set(e.container, {
            scrollTo: {
                y: o - s,
                x: 0
            }
        })), 0 == e.page.where && "down" == r ? TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), 0, {
            "margin-top": s + "px"
        }) : e.page.where == e.page.number - 1 && "up" == r && TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), 0, {
            "margin-top": "-" + s + "px"
        }), ("end" == i || "cancel" == i) && (U = !0, e.can = !0, TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), 20, {
            scale: 1.15,
            delay: .2
        }), "down" == V || "down" == r ? (Z("up"), V = null) : "up" == V || "up" == r ? (Z("down"), V = null) : "cancel" == i && (Z("dont"), V = null), 0 == e.page.where && "down" == r ? TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), e.page.time, {
            "margin-top": "0px",
            ease: Expo.easeOut
        }) : e.page.where == e.page.number - 1 && "up" == r && TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), e.page.time, {
            "margin-top": "0px",
            ease: Expo.easeOut
        })))
    }

    function G(a, t, i, r) {
        U = !1, e.page.ease = Expo.easeOut, TweenLite.killTweensOf(e.container), 0 == r && (Y = $(".photo-carousel .photo:eq(" + e.page.where + ") img").css("margin-top")), "up" == i ? (V = "up", TweenLite.set(e.container, {
            scrollTo: {
                y: o + r,
                x: 0
            }
        })) : "down" == i && (V = "down", TweenLite.set(e.container, {
            scrollTo: {
                y: o - r,
                x: 0
            }
        })), 0 == e.page.where && "down" == i ? (TweenLite.to($(".photo-carousel .photo:eq(" + e.page.where + ") img"), 0, {
            "margin-top": parseFloat(Y) + r + "px"
        }), $(".photo-carousel figure").css({
            background: "#000"
        })) : e.page.where == e.page.number - 1 && "up" == i && (TweenLite.to($(".photo-carousel .photo:eq(" + e.page.where + ") img"), 0, {
            "margin-top": parseFloat(Y) - r + "px"
        }), $(".photo-carousel figure").css({
            background: "#000"
        })), ("end" == t || "cancel" == t) && (U = !0, e.can = !0, "down" == V || "down" == i ? (Z("up"), V = null) : "up" == V || "up" == i ? (Z("down"), V = null) : "cancel" == t && (Z("dont"), V = null), 0 == e.page.where && "down" == i ? TweenLite.to($(".photo-carousel .photo:eq(" + e.page.where + ") img"), e.page.time, {
            "margin-top": Y + "",
            ease: Expo.easeOut,
            onComplete: function() {
                $(".photo-carousel figure").css({
                    background: "",
                    "background-size": ""
                })
            }
        }) : e.page.where == e.page.number - 1 && "up" == i && TweenLite.to($(".photo-carousel .photo:eq(" + e.page.where + ") img"), e.page.time, {
            "margin-top": Y + "",
            ease: Expo.easeOut,
            onComplete: function() {
                $(".photo-carousel figure").css({
                    background: "",
                    "background-size": ""
                })
            }
        }))
    }

    function X(o) {
        L ? TweenLite.to($("body"), .5, {
            opacity: 0,
            onComplete: function() {
                e.page.time = 0, K(), e.page.where = $('.work-carousel a[href="' + q + '"]').parent().parent().index(), Q(e.page.where * e.win.h, 0, e.container), e.page.time = 1, TweenLite.to($("body"), .5, {
                    opacity: 1,
                    onComplete: function() {
                        e.page.where = $('.work-carousel a[href="' + q + '"]').parent().parent().index(), X(o)
                    }
                })
            }
        }) : (L = !0, $(window).unbind("mousewheel"), Modernizr.touch || $(".titles ul a").unbind("mouseout, mouseover"), $(window).unbind("touchmove"), $(window).swipe("disable"), $("body, html").css({
            overflow: "auto"
        }), $("#wrap").css({
            overflow: "hidden"
        }), TweenLite.killTweensOf(".work-carousel .project .img"), TweenLite.to($(".littleTitles-After, .littleTitles-Before"), .3, {
            opacity: 0,
            onComplete: function() {
                $(".work-carousel .wc-nav").append('<span class="ajax-loader vertical-Center">' +
                    '<a href="/" class="icon-close anchor css3Animate"></a>' +
                    '<span class="loader css3Animate"></span></span>'), $("#wrap").after("<div id='content' class='project-page'></div>"), $(".js .ajax-loader").css({
                    left: .5 * (e.win.w - e.win.barWidth)
                }), $("#content").load(o.url + " .ajax-content", function() {
                    J(), $(".project-page img.lazy").lazyload({
                        data_attribute: r(e.win.w),
                        threshold: 1e3
                    }).trigger("appear"), $(document).trigger("scroll"), $(".next-prev a").bind("click", E), $(window).bind("scroll resize", b)
                })
            }
        }))
    }

    function J() {
        $(".anchor").on("click", D), TweenLite.to(window, 0, {
            scrollTo: {
                y: 0,
                x: 0
            },
            delay: .01
        }), TweenLite.to($("#wrap, .wc-nav"), e.page.time, {
            height: .6 * e.win.h,
            ease: e.page.ease
        }), TweenLite.to($(".wc-nav .titles"), e.page.time, {
            top: .32 * e.win.h,
            ease: e.page.ease
        }), $(".js .ajax-loader .loader").css({
            border: "2px solid rgba(255, 255, 255, 0.2)"
        }), $(".js .ajax-loader .icon-close").css({
            opacity: "1"
        }), TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ")>div"), e.page.time, {
            opacity: "1",
            ease: Expo.easeOut
        }), TweenLite.to($(".project .img"), e.page.time, {
            top: -0.3 * e.win.h,
            ease: e.page.ease,
            onComplete: function() {
                i[0] = r(e.win.w), i[1] = e.win.w, $(".littleTitles-After, .littleTitles-Before").css({
                    left: "-100%"
                }), $(".video-module .play").on("click", M), $(".masonry img").imagesLoaded(function() {
                    $(".masonry").masonry()
                })
            }
        })
    }

    function K() {
        $("body, html").css({
            overflow: "hidden"
        }), $("#wrap").css({
            overflow: "auto"
        }), TweenLite.to($("#wrap"), e.page.time, {
            height: e.win.h,
            ease: e.page.ease,
            onComplete: function() {
                L = !1, $("#content").remove(), $(".ajax-loader").remove(), $(window).bind("mousewheel", N), o = $(e.container).scrollTop(), $(window).bind("touchmove", function(e) {
                    e.preventDefault()
                }), $(window).swipe("enable"), Modernizr.touch || ($(".titles ul a").on("mouseover", O), $(".titles ul a").bind("mouseout", A)), $(".titles ul a").bind("click", z), $(window).unbind("scroll resize", b)
            }
        }), $(".littleTitles-After, .littleTitles-Before").css({
            left: ""
        }), TweenLite.to($(".wc-nav .titles"), e.page.time, {
            top: .5 * e.win.h,
            ease: e.page.ease
        }), TweenLite.to($(".project .img"), e.page.time, {
            top: 0,
            ease: e.page.ease
        }), TweenLite.to($(".wc-nav"), e.page.time, {
            height: e.win.h,
            ease: e.page.ease
        }), TweenLite.to($(".littleTitles-After, .littleTitles-Before"), e.page.time, {
            opacity: 1,
            ease: e.page.ease
        }), TweenLite.to($(".ajax-loader"), e.page.time, {
            opacity: "0",
            ease: e.page.ease
        })
    }

    function Z(o) {
        if (e.project.where = !1, "up" == o && e.page.where > 0)
            if (e.page.where -= 1, $("body").hasClass("photography-page")) {
                var t = $(".masonry .item:eq(" + e.page.where + ") a").attr("href"),
                    i = t.slice(4, -4);
                R.pushState(null, i, "/photography/" + i), ga("send", "pageview", {
                    page: "/photography/" + i,
                    title: "Ajax - " + i
                }), e.can = !1
            } else Q(e.win.h * e.page.where, e.page.time, e.container), e.can = !1, $(".work-carousel .project .img").css({
                transform: ""
            });
        else if ("down" == o && e.page.where >= 0 && e.page.where < e.page.number - 1)
            if (e.page.where += 1, $("body").hasClass("photography-page")) {
                var t = $(".masonry .item:eq(" + e.page.where + ") a").attr("href"),
                    i = t.slice(4, -4);
                R.pushState(null, i, "/photography/" + i), ga("send", "pageview", {
                    page: "/photography/" + i,
                    title: "Ajax - " + i
                }), e.can = !1
            } else Q(e.win.h * e.page.where, e.page.time, e.container), e.can = !1;
        else "dont" == o && (Q(e.win.h * e.page.where, e.page.time, e.container), e.can = !1);
        $(".carousel-nav .where").empty().append(e.page.where + 1), $(".carousel-nav .lenght").empty().append(e.page.number), $(".icon-arrowup").css(0 == e.page.where ? {
            opacity: "0.5",
            cursor: "default"
        } : {
            opacity: "",
            cursor: "initial"
        }), $(".icon-arrowdown").css(e.page.where + 1 == e.page.number ? {
            opacity: "0.5",
            cursor: "default"
        } : {
            opacity: "",
            cursor: "initial"
        })
    }

    function eo(o, a, t) {
        settings = {
            item: o,
            perc: a,
            difference: t
        }, $(settings.item).css({
            height: .01 * (e.win.h - settings.difference) * settings.perc + "px"
        })
    }

    function ro() {
        (U || $("body").hasClass("work-page")) && (o = $(e.container).scrollTop())
    }

    function no() {
        e.win.w = window.innerWidth, e.win.h = window.innerHeight, e.can = !0, e.page.ease = Expo.easeInOut, o = $(e.container).scrollTop(), $("body").hasClass("work-page") && (e.win.w > e.page.mobileBreak ? (eo(".work-carousel .project, .js-work-carousel .project", 100, 0), eo(".project .img", 100, 0), e.win.barWidth > 0 && ($(".titles, nav, .anchors, .wc-nav").css({
            width: e.win.w - e.win.barWidth
        }), $(".work-carousel").css({
            width: e.win.w - e.win.barWidth
        })), $(".js .ajax-loader").css({
            left: .5 * (e.win.w - e.win.barWidth)
        }), $(".work-carousel .img img").setImg({
            size: "cover",
            border: 0,
            container: ".work-carousel .project"
        }), $(".wc-nav .littleTitles-After").css({
            height: .5 * (e.win.h - 120) + "px"
        }), $(".wc-nav .littleTitles-Before").css({
            height: .5 * (e.win.h - 340) + "px"
        }), L ? (eo("#wrap", 60, 0), eo(".wc-nav", 60, 0), $(".wc-nav .titles").css({
            top: .32 * e.win.h + "px"
        }), $(".project .img").css({
            top: "-" + .3 * e.win.h + "px"
        }), $(".project").not(".on").css({
            display: ""
        }), $(".project.on .cta").css({
            display: ""
        }), $(".ajax-loader").css({
            display: ""
        })) : (eo("#wrap", 100, 0), $(".wc-nav ").css({
            height: e.win.h
        }), $(".project .img").css({
            top: ""
        }), $(".wc-nav .titles").css({
            top: ""
        }), I(), r(e.win.w) != i[0] && i[1] <= e.win.w && ($("img.lazy").lazyload({
            container: $("#wrap"),
            data_attribute: r(e.win.w)
        }), $(document).trigger("scroll"), i[0] = r(e.win.w), i[1] = e.win.w)), $(".work-carousel .project>div").not(".work-carousel .project:eq(" + e.page.where + ")>div").css({
            opacity: "1"
        }), io && !L && TweenLite.killTweensOf(".work-carousel .project .img"), L || TweenLite.to($(".work-carousel .project .img"), 0, {
            scale: 1,
            onComplete: function() {
                TweenLite.to($(".work-carousel .project:eq(" + e.page.where + ") .img"), 20, {
                    scale: 1.15,
                    delay: .2
                })
            }
        }), $(".work-carousel .project").unbind("click"), $(".work-carousel .project").css({
            cursor: ""
        })) : ($(".work-carousel .project").removeAttr("style"), $(".work-carousel .img").removeAttr("style"), $(".work-carousel .img img").removeAttr("style"), $("#wrap").css({
            height: ""
        }), $("nav, .work-carousel").css({
            width: ""
        }), L ? ($(".project").not(".on").css({
            display: "none"
        }), $(".project.on .cta").css({
            display: "none"
        }), $(".ajax-loader").css({
            display: "none"
        }), $(".titles").removeAttr("style")) : ($(".work-carousel .project").css({
            cursor: "pointer"
        }), $(".work-carousel .project").bind("click", function() {
            location.href = $(this).children().children("a").attr("href")
        }))), e.win.w > e.page.mobileBreak && (e.project.where ? TweenLite.set(e.container, {
            scrollTo: {
                y: e.win.h * e.project.where,
                x: 0
            }
        }) : TweenLite.set(e.container, {
            scrollTo: {
                y: e.win.h * e.page.where,
                x: 0
            }
        }))), $("body").hasClass("contact-page") && ($(".contacts").height() + $("nav").height() < e.win.h ? (eo(".contact-page #wrap", 100, 0), $(".contacts").addClass("vertical-Center"), $(".contact-page #wrap").css({
            "margin-top": ""
        })) : $(".contacts").removeAttr("style")), $("body").hasClass("photography-page") && (eo(".photo-carousel", 100, 0), eo(".photo-wrap", 100, 0), eo(".photo-carousel .photo", 100, 0), eo(".carousel-nav", 100, 0), e.win.w / e.win.h > 1.3 && e.win.w / e.win.h < 1.8 ? ($(".photo-carousel .horizontal").setImg({
            size: "cover",
            border: 0,
            container: ".photo-carousel"
        }), $(".photo-carousel .vertical").setImg({
            size: "contain",
            border: 0,
            container: ".photo-carousel"
        })) : ($(".photo-carousel .horizontal").setImg({
            size: "contain",
            border: 0,
            container: ".photo-carousel"
        }), $(".photo-carousel .vertical").setImg({
            size: "contain",
            border: 0,
            container: ".photo-carousel"
        })), TweenLite.set($(e.container), {
            scrollTo: {
                y: e.win.h * e.page.where,
                x: 0
            }
        })), eo(".video-player", 100, 0), $("body").hasClass("project-page") && e.win.w > e.page.mobileBreak ? (eo(".hero", 60, 0), $(".hero img").setImg({
            size: "cover",
            border: 0,
            container: ".hero"
        })) : ($(".hero").removeAttr("style"), $(".hero img").removeAttr("style")), ($("body").hasClass("work-page") && L || $("body").hasClass("project-page")) && r(e.win.w) != i[0] && i[1] <= e.win.w && (i[0] = r(e.win.w), i[1] = e.win.w, $(".project-page img.lazy").lazyload({
            data_attribute: r(e.win.w),
            threshold: 1e3
        }).trigger("appear"), $(document).trigger("scroll"), $("#wrap img.lazy").lazyload({
            container: $("#wrap"),
            data_attribute: r(e.win.w)
        })), $("body").hasClass("photography-page") && (r(e.win.w) != i[0] && i[1] <= e.win.w && ($(".photo-wrap img.lazy").lazyload({
            container: $(".photo-wrap"),
            effect: "fadeIn",
            placeholder: "/img/alpha0.gif",
            data_attribute: r(e.win.w)
        }), $(".masonry img.lazy").lazyload({
            data_attribute: r(e.win.w)
        }), i[0] = r(e.win.w), i[1] = e.win.w), o = $(e.container).scrollTop())
    }

    function so() {
        new Date - oo < to ? setTimeout(so, to) : (ao = !1, io = !1, $("body").hasClass("work-page") && (e.win.w > e.page.mobileBreak && !L ? $(window).bind("mousewheel", N) : $(window).unbind("mousewheel"), o = $(e.container).scrollTop(), I()))
    }
    var e = function() {
            var e = {
                    h: window.innerHeight,
                    w: window.innerWidth,
                    barWidth: 0
                },
                o = {
                    where: 0,
                    number: null,
                    time: 1,
                    time_fast: .8,
                    ease: Expo.easeInOut,
                    mobileBreak: 670
                },
                a = new Array,
                t = {
                    state: !1,
                    headerHigh: e.h,
                    where: !1
                },
                i = {
                    state: !1
                },
                r = !0,
                n = null;
            return {
                win: e,
                page: o,
                myWorks: a,
                project: t,
                photo: i,
                can: r,
                container: n
            }
        }(),
        o = $(e.container).scrollTop(),
        a = !1;
    $("body").append("<div class='bar'></div>"), $(".bar").css({
        position: "absolute",
        overflow: "scroll",
        height: "50px",
        width: "50px",
        "z-index": "-10",
        top: "-50px",
        left: "-50px"
    }), $(".bar").append("<div class='inside'></div>"), e.win.barWidth = $(".bar").width() - $(".bar .inside").width(), $(".bar").remove();
    var i = [null, e.win.w],
        n = !1,
        s = null;
    $("body").hasClass("work-page") && !Modernizr.touch && $(document).mousedown(function(o) {
        s = e.page.where, n = "wrap" == o.target.id ? !0 : !1
    }), $("body").hasClass("photography-page") ? (e.page.number = $(".masonry .item").length, e.container = $(".photo-wrap"), $(".carousel-nav .where").empty().append(e.page.where + 1), $(".carousel-nav .lenght").empty().append(e.page.number)) : $("body").hasClass("work-page") ? (e.container = $("#wrap"), e.page.number = $(".work-carousel .project").length) : $("body").hasClass("project-page") && (e.container = $("#wrap")), Modernizr.touch && $(".hover").removeClass("hover");
    var c = $("img").length,
        w = 0,
        h = 0,
        u = {
            myProp: 0
        };
    $("body").append('<div class="page-loader"><?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="vs-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="37.804px" viewBox="0 0 50 37.804" enable-background="new 0 0 50 37.804" xml:space="preserve"> <path d="M0,25.325V0.002l19.561,24.625L40.167,0c0,0,8.115,12.05,9.607,20.228c1.701,9.341-6.847,18.066-12.226,17.554 c-1.107-0.015-3.449-0.448-4.248-1.572c0,0,2.791,1.951,6.085,0.656c6.873-2.702,7.644-9.435,7.644-9.435s2.643-8.008-8.863-22.159 L10.828,37.723L0,25.325z"/></svg><div class="circle"></div></div>'), $(".circle").progressCircle({
        nPercent: 0,
        showPercentText: !1,
        thickness: 1.3,
        circleSize: 163
    }), 0 == c && (g(100), $(window).load(f)), $("img").each(function() {
        $(this).imagesLoaded(function() {
            w += 1, h = Math.round(100 / c * w), g(h), w == c && setTimeout(f, 500)
        })
    });
    var m = !1,
        v = !1;
    $(".photography-page .masonry .item a").on("click", k), $(".photography-page .close").on("click", T), $(e.container).bind("click", function() {
        TweenLite.to($(".photo-carousel"), e.page.time, {
            opacity: "1"
        })
    });
    var L = !1,
        q = null;
    $(".video-module .play").on("click", M);
    var B = {
            on: !1,
            url: null,
            template: "?autoplay=1&autohide=1&rel=0&showinfo=0",
            position: null
        },
        S = $(".masonry");
    S.masonry({
        itemSelector: ".item",
        transitionDuration: 0
    }), $(".anchor").on("click", D), $("body").hasClass("stickynav") && e.win.w > e.page.mobileBreak && $(window).bind("scroll", y), $("body").hasClass("work-page") && $("#wrap").bind("scroll", I), $("body").hasClass("project-page") && $(window).bind("scroll resize", b), $(document).bind("keydown", function(o) {
        ($("body").hasClass("work-page") && !L || $("body").hasClass("photography-page") && e.photo) && o.preventDefault()
    }), $(document).bind("keyup", P), $(".carousel-nav a").on("click", W), $("body").hasClass("work-page") && e.win.w > e.page.mobileBreak ? $(window).bind("mousewheel", N) : $("body").hasClass("photography-page") && $(e.container).bind("mousewheel", N);
    var _ = [0],
        H = 0,
        V = null,
        U = !1,
        Y = null;
    ($("body").hasClass("work-page") && e.win.w > e.page.mobileBreak || $("body").hasClass("photography-page")) && ($(e.container).bind("touchmove", {}, function(e) {
        L || e.preventDefault()
    }), $("body").hasClass("work-page") ? ($(window).bind("touchmove", {}, function(e) {
        e.preventDefault()
    }), $(window).swipe({
        swipeStatus: function(e, o, a, t, i, r) {
            F(e, o, a, t, i, r)
        },
        threshold: 0
    })) : $(e.container).swipe({
        swipeStatus: function(e, o, a, t, i, r) {
            G(e, o, a, t, i, r)
        },
        threshold: 0
    })), $(window).mouseup(function() {
        n && (e.page.where = Math.round($(e.container).scrollTop() / e.win.h), Z("dont"))
    });
    var R = window.History;
    if (!R.enabled) return !1;
    e.photo = !1, R.Adapter.bind(window, "statechange", function() {
        var o = R.getState(),
            a = R.getState().url.split("/", 6);
        if ($("body").hasClass("photography-page"))
            if (void 0 != a[4] && "" != a[4]) {
                var t = a[4];
                e.page.where = $('.masonry .item a[href="img/' + t + '.jpg"]').parent().index(), e.photo ? Q(e.win.h * e.page.where, e.page.time, e.container) : x()
            } else(void 0 == a[4] || "" == a[4]) && e.photo && (j(), e.photo = !1);
        else $("body").hasClass("work-page") && ("work" == a[3] ? (X(o), $(".project").removeClass("on"), $('.project a[href="/' + a[3] + "/" + a[4] + '/"]').parent().parent().addClass("on"), e.project.where = $('.project a[href="/' + a[3] + "/" + a[4] + '/"]').parent().parent().index()) : $(window).scrollTop() > 0 && e.win.w > e.page.mobileBreak ? TweenLite.to(window, e.page.time, {
            scrollTo: {
                y: 0,
                x: 0
            },
            ease: e.page.ease,
            onComplete: K
        }) : e.win.w > e.page.mobileBreak ? K() : location.href = "/")
    }), $("body").hasClass("photography-page") && $(window).load(function() {
        var e = window.location.href,
            o = e.split("/", 6);
        void 0 != o[4] && "" != o[4] && "index.html" != o[4] && (TweenLite.killTweensOf(".photography-page #wrap"), R.replaceState(null, "Photography / Vito Salvatore - Interactive Art Director", "/photography"), R.pushState(null, o[4], "/photography/" + o[4]), ga("send", "pageview", {
            page: "/photography/" + o[4],
            title: "Ajax - " + o[4]
        }))
    });
    var Q = function(o, a, t) {
            e.project.where = !1;
            new TweenLite.to(t, a, {
                scrollTo: {
                    y: o,
                    x: 0
                },
                ease: e.page.ease,
                onUpdate: ro,
                onComplete: no
            })
        },
        oo = new Date(1, 1, 2e3, 12, 0, 0),
        ao = !1,
        to = 200,
        io = !1;
    C(), no(), $(window).resize(function() {
        no(), $(".masonry").masonry(), time = new Date, ao === !1 && (ao = !0, setTimeout(so, to)), io = !0
    })
});