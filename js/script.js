let hamburger = document.querySelector('.ham')
let body = document.querySelector('body')
let nav = document.querySelector('.nav')
let headerLink = document.querySelectorAll('.nav__link')
let load = document.querySelector('.loading')
let headerLogo = document.querySelector('.header__logo')

document.addEventListener("DOMContentLoaded", function () {
   // ? SCROLL ANIMATION
   AOS.init();

   // ? HAMBURGER AND LOGO AND NAV
   hamburger.onclick = function (params) {
      body.classList.toggle('lock')
      nav.classList.toggle('is-active')
      hamburger.classList.toggle('active')
   }
   headerLogo.onclick = function (params) {
      nav.classList.remove('is-active');
      hamburger.classList.remove('active')
      body.classList.remove('lock')
   }
   for (let i = 0; i < headerLink.length; i++) {
      headerLink[i].onclick = function () {
         nav.classList.remove('is-active');
         hamburger.classList.remove('active')
         body.classList.remove('lock')
      };
   }

   // ? PROCESS SLIDER
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: {
         delay: 2500,
      },
      pagination: {
         el: '.swiper-pagination',
         type: 'progressbar',
      },
   });

   //? TEAM SLIDER
   var swiper = new Swiper('.swiper-container2', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 3,
         slideShadows: true,
      },
      autoplay: {
         delay: 3000,
      },
   });
});


// ? PRELOADER
window.onload = function () {
   load.classList.add('none');
}


// ? HEADER ANIMATION
!function (t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).Headroom = n() }(this, function () { "use strict"; function t() { return "undefined" != typeof window } function d(t) { return function (t) { return t && t.document && function (t) { return 9 === t.nodeType }(t.document) }(t) ? function (t) { var n = t.document, o = n.body, s = n.documentElement; return { scrollHeight: function () { return Math.max(o.scrollHeight, s.scrollHeight, o.offsetHeight, s.offsetHeight, o.clientHeight, s.clientHeight) }, height: function () { return t.innerHeight || s.clientHeight || o.clientHeight }, scrollY: function () { return void 0 !== t.pageYOffset ? t.pageYOffset : (s || o.parentNode || o).scrollTop } } }(t) : function (t) { return { scrollHeight: function () { return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) }, height: function () { return Math.max(t.offsetHeight, t.clientHeight) }, scrollY: function () { return t.scrollTop } } }(t) } function n(t, s, e) { var n, o = function () { var n = !1; try { var t = { get passive() { n = !0 } }; window.addEventListener("test", t, t), window.removeEventListener("test", t, t) } catch (t) { n = !1 } return n }(), i = !1, r = d(t), l = r.scrollY(), a = {}; function c() { var t = Math.round(r.scrollY()), n = r.height(), o = r.scrollHeight(); a.scrollY = t, a.lastScrollY = l, a.direction = l < t ? "down" : "up", a.distance = Math.abs(t - l), a.isOutOfBounds = t < 0 || o < t + n, a.top = t <= s.offset[a.direction], a.bottom = o <= t + n, a.toleranceExceeded = a.distance > s.tolerance[a.direction], e(a), l = t, i = !1 } function h() { i || (i = !0, n = requestAnimationFrame(c)) } var u = !!o && { passive: !0, capture: !1 }; return t.addEventListener("scroll", h, u), c(), { destroy: function () { cancelAnimationFrame(n), t.removeEventListener("scroll", h, u) } } } function o(t) { return t === Object(t) ? t : { down: t, up: t } } function s(t, n) { n = n || {}, Object.assign(this, s.options, n), this.classes = Object.assign({}, s.options.classes, n.classes), this.elem = t, this.tolerance = o(this.tolerance), this.offset = o(this.offset), this.initialised = !1, this.frozen = !1 } return s.prototype = { constructor: s, init: function () { return s.cutsTheMustard && !this.initialised && (this.addClass("initial"), this.initialised = !0, setTimeout(function (t) { t.scrollTracker = n(t.scroller, { offset: t.offset, tolerance: t.tolerance }, t.update.bind(t)) }, 100, this)), this }, destroy: function () { this.initialised = !1, Object.keys(this.classes).forEach(this.removeClass, this), this.scrollTracker.destroy() }, unpin: function () { !this.hasClass("pinned") && this.hasClass("unpinned") || (this.addClass("unpinned"), this.removeClass("pinned"), this.onUnpin && this.onUnpin.call(this)) }, pin: function () { this.hasClass("unpinned") && (this.addClass("pinned"), this.removeClass("unpinned"), this.onPin && this.onPin.call(this)) }, freeze: function () { this.frozen = !0, this.addClass("frozen") }, unfreeze: function () { this.frozen = !1, this.removeClass("frozen") }, top: function () { this.hasClass("top") || (this.addClass("top"), this.removeClass("notTop"), this.onTop && this.onTop.call(this)) }, notTop: function () { this.hasClass("notTop") || (this.addClass("notTop"), this.removeClass("top"), this.onNotTop && this.onNotTop.call(this)) }, bottom: function () { this.hasClass("bottom") || (this.addClass("bottom"), this.removeClass("notBottom"), this.onBottom && this.onBottom.call(this)) }, notBottom: function () { this.hasClass("notBottom") || (this.addClass("notBottom"), this.removeClass("bottom"), this.onNotBottom && this.onNotBottom.call(this)) }, shouldUnpin: function (t) { return "down" === t.direction && !t.top && t.toleranceExceeded }, shouldPin: function (t) { return "up" === t.direction && t.toleranceExceeded || t.top }, addClass: function (t) { this.elem.classList.add.apply(this.elem.classList, this.classes[t].split(" ")) }, removeClass: function (t) { this.elem.classList.remove.apply(this.elem.classList, this.classes[t].split(" ")) }, hasClass: function (t) { return this.classes[t].split(" ").every(function (t) { return this.classList.contains(t) }, this.elem) }, update: function (t) { t.isOutOfBounds || !0 !== this.frozen && (t.top ? this.top() : this.notTop(), t.bottom ? this.bottom() : this.notBottom(), this.shouldUnpin(t) ? this.unpin() : this.shouldPin(t) && this.pin()) } }, s.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: t() ? window : null, classes: { frozen: "headroom--frozen", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, s.cutsTheMustard = !!(t() && function () { }.bind && "classList" in document.documentElement && Object.assign && Object.keys && requestAnimationFrame), s });

var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(myElement);
// initialise
headroom.init();