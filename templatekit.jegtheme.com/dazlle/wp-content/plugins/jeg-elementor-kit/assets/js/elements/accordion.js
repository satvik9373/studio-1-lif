! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    class n extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-elementor-kit.jkit-accordion",
                    cards: ".card-wrapper"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $cards: this.$element.find(e.cards)
            }
        }
        bindEvents() {
            this.onClick()
        }
        onClick() {
            this.elements.$cards.each((function() {
                jQuery(this).on("click", (function(e) {
                    "A" === e.target.nodeName && !jQuery(e.target).hasClass("card-header-button") || jQuery(e.target).hasClass("card-body") || (e.preventDefault(), jQuery(this).hasClass("expand") ? (jQuery(this).find(".card-expand").slideUp(), jQuery(this).removeClass("expand")) : (jQuery(this).parent().find(".card-expand").slideUp(), jQuery(this).parent().find(".card-wrapper").removeClass("expand"), jQuery(this).addClass("expand"), jQuery(this).find(".card-expand").slideDown()))
                }))
            }))
        }
    }
    jQuery(window).on("elementor/frontend/init", (() => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_accordion.default", (e => {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }))
    }))
}]);