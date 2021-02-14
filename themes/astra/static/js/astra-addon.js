jQuery,
jQuery(document).ready(function(o) {
    var l = document.querySelector("#page header");
    jQuery("#ast-scroll-top") && jQuery("#ast-scroll-top").length && (ast_scroll_top = function() {
        var o = jQuery("#ast-scroll-top"),
            e = o.css("content"),
            t = o.data("on-devices"),
            e = e.replace(/[^0-9]/g, "");
        "both" == t || "desktop" == t && "769" == e || "mobile" == t && "" == e ? (e = window.pageYOffset || document.body.scrollTop, l && l.length ? e > l.offsetHeight + 100 ? o.show() : o.hide() : 300 < jQuery(window).scrollTop() ? o.show() : o.hide()) : o.hide()
    }, ast_scroll_top(), jQuery(window).on("scroll", function() {
        ast_scroll_top()
    }), jQuery("#ast-scroll-top").on("click", function(o) {
        o.preventDefault(),
        jQuery("html,body").animate({
            scrollTop: 0
        }, 200)
    }))
});
!function() {
    var e,
        t;
    function o(e) {
        var t = (t = document.body.className).replace(e, "");
        document.body.className = t
    }
    function d(e) {
        e.style.display = "block",
        setTimeout(function() {
            e.style.opacity = 1
        }, 1)
    }
    function n(e) {
        e.style.opacity = "",
        setTimeout(function() {
            e.style.display = ""
        }, 200)
    }
    e = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : "",
    t = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : "",
    document.body.className += " " + e,
    document.body.className += " " + t;
    for (var a = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"), s = 0; a.length > s; s++)
        a[s].onclick = function(e) {
            var t,
                a,
                o,
                n;
            if (e.preventDefault(), e = e || window.event, this.classList.contains("header-cover"))
                for (var s = document.querySelectorAll(".ast-search-box.header-cover"), c = astraAddon.is_header_builder_active || !1, r = 0; r < s.length; r++)
                    for (var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"), i = 0; i < l.length; i++)
                        l[i] == this && (d(s[r]), s[r].querySelector("input.search-field").focus(), c ? (t = s[r], n = o = a = void 0, document.body.classList.contains("ast-header-break-point") && (a = document.querySelector(".main-navigation"), n = document.querySelector(".main-header-bar"), o = document.querySelector(".ast-mobile-header-wrap"), null !== n && null !== a && (a = a.offsetHeight, n = n.offsetHeight, o = o.offsetHeight, n = a && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(a) - parseFloat(n) : parseFloat(n), t.parentNode.classList.contains("ast-mobile-header-wrap") && (n = parseFloat(o)), t.style.maxHeight = Math.abs(n) + "px"))) : (o = s[r], n = t = void 0, document.body.classList.contains("ast-header-break-point") && (t = document.querySelector(".main-navigation"), null !== (n = document.querySelector(".main-header-bar")) && null !== t && (t = t.offsetHeight, n = n.offsetHeight, n = t && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(t) - parseFloat(n) : parseFloat(n), o.style.maxHeight = Math.abs(n) + "px"))));
            else
                !this.classList.contains("full-screen") || (e = document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen") && (d(e), document.body.className += " full-screen", e.querySelector("input.search-field").focus())
        };
    for (var c = document.getElementsByClassName("close"), s = 0, r = c.length; s < r; ++s)
        c[s].onclick = function(e) {
            e = e || window.event;
            for (var t = this;;) {
                if (t.parentNode.classList.contains("ast-search-box")) {
                    n(t.parentNode),
                    o("full-screen");
                    break
                }
                if (t.parentNode.classList.contains("site-header"))
                    break;
                t = t.parentNode
            }
        };
    document.onkeydown = function(e) {
        if (27 == e.keyCode) {
            e = document.getElementById("ast-seach-full-screen-form");
            null != e && (n(e), o("full-screen"));
            for (var t = document.querySelectorAll(".ast-search-box.header-cover"), a = 0; a < t.length; a++)
                n(t[a])
        }
    },
    window.addEventListener("resize", function() {
        if ("BODY" === document.activeElement.tagName && "INPUT" != document.activeElement.tagName) {
            var e = document.querySelectorAll(".ast-search-box.header-cover");
            if (!document.body.classList.contains("ast-header-break-point"))
                for (var t = 0; t < e.length; t++)
                    e[t].style.maxHeight = "",
                    e[t].style.opacity = "",
                    e[t].style.display = ""
        }
    })
}();