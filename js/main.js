/* =============================================================
   Nirvana — site behaviors & shared chrome injection
   Header, footer, mobile action bar are injected from here so
   business details live in ONE place (config.js).
   ============================================================= */
(function () {
  "use strict";
  var C = window.NIRVANA || {};
  var TOAST = C.TOAST_ORDER_URL || "#";

  var NAV = [
    { href: "index.html",    label: "Home" },
    { href: "about.html",    label: "About Us" },
    { href: "menu.html",     label: "Menu" },
    { href: "catering.html", label: "Catering" },
    { href: "blogs.html",    label: "Blogs" },
    { href: "offers.html",   label: "What's New" },
    { href: "gallery.html",  label: "Gallery" },
  ];

  var page = (document.body.getAttribute("data-page") || "index").toLowerCase();

  /* ---------- icons ---------- */
  var I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    peacock: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 4c-2 6-1 10 2 13 3 3 4 7 2 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="28" cy="30" r="3" fill="currentColor"/><path d="M24 4c2 6 1 10-2 13-3 3-4 7-2 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24 4c-6 4-9 8-9 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M24 4c6 4 9 8 9 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M16 40c2-3 5-5 8-5s6 2 8 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 2v7a2 2 0 0 1-2 2 2 2 0 0 1-2-2V2"/><path d="M4 11v11"/><path d="M18 2c-1.7 0-3 2-3 5s1.3 4 3 4"/><path d="M18 2v20"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20.6 13.4 11 3.8A2 2 0 0 0 9.6 3H4v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l3.6-3.6a2 2 0 0 0 0-2.6z"/><circle cx="7.6" cy="7.6" r="1.2" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7.2.7-5.4 4.8 1.6 7-6.4-3.8L5.6 21l1.6-7L1.8 9.3 9 8.6z"/></svg>',
  };

  function brandMarkup() {
    return '<a class="brand" href="index.html" aria-label="' + (C.name || "Nirvana") + ' Indian Restaurant home">' +
      '<img class="brand-logo" src="assets/nirvana-logo.png" alt="' + (C.name || "Nirvana") + ' Indian Restaurant" width="180" height="90" />' +
      '</a>';
  }

  function navList(extraClass) {
    return NAV.map(function (n) {
      var cur = (n.href.replace(".html", "") === page || (page === "index" && n.href === "index.html"));
      return '<li><a href="' + n.href + '"' + (cur ? ' aria-current="page"' : "") + '>' + n.label + "</a></li>";
    }).join("");
  }

  /* ---------- Header ---------- */
  function buildHeader() {
    var h = document.createElement("header");
    h.className = "site-header";
    h.innerHTML =
      '<div class="container">' +
        brandMarkup() +
        '<nav class="nav-desktop" aria-label="Primary"><ul>' + navList() + "</ul></nav>" +
        '<div class="header-actions">' +
          '<a class="btn btn-primary" href="' + TOAST + '" target="_blank" rel="noopener" data-order>Order Now</a>' +
          '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="navDrawer"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</div>";
    document.body.prepend(h);

    var drawer = document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.id = "navDrawer";
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML =
      '<div class="nav-drawer-top">' + brandMarkup() +
        '<button class="nav-drawer-close" aria-label="Close menu">&times;</button></div>' +
      '<span class="nav-drawer-label">Navigate</span>' +
      '<nav aria-label="Mobile"><ul role="list">' + navList() + "</ul></nav>" +
      '<a class="btn btn-primary btn-block drawer-cta" href="' + TOAST + '" target="_blank" rel="noopener" data-order>Order Now</a>' +
      '<div class="drawer-contact">' +
        '<a href="' + (C.phoneHref || "#") + '">' + I.phone + (C.phone || "") + "</a>" +
        '<div class="dc-meta"><span class="halal-badge"><span class="check">&#10003;</span> 100% Halal</span><span>' + (C.hoursTeaser || "") + "</span></div>" +
      "</div>";
    document.body.appendChild(drawer);

    var toggle = h.querySelector(".nav-toggle");
    var close = drawer.querySelector(".nav-drawer-close");
    function open() { drawer.classList.add("open"); document.body.classList.add("nav-open"); toggle.setAttribute("aria-expanded", "true"); drawer.setAttribute("aria-hidden", "false"); close.focus(); }
    function shut() { drawer.classList.remove("open"); document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); drawer.setAttribute("aria-hidden", "true"); }
    toggle.addEventListener("click", open);
    close.addEventListener("click", shut);
    drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") shut(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut(); });

    // Solid on scroll
    function onScroll() { h.classList.toggle("solid", window.scrollY > 24); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    var hours = (C.hours || []).map(function (h) {
      return '<li><span class="fday">' + h.day + '</span><span class="ftime">' + h.time + "</span></li>";
    }).join("");
    var f = document.createElement("footer");
    f.className = "site-footer";
    f.innerHTML =
      '<div class="container"><div class="footer-grid">' +
        '<div>' + brandMarkup() +
          '<p style="margin-top:16px;max-width:34ch">Halal Indian & Pakistani cuisine on Memorial Drive, Houston — slow-cooked curries, tandoori, biryani, karahi & a celebrated daily buffet.</p>' +
          '<div style="margin-top:16px"><span class="halal-badge"><span class="check">&#10003;</span> 100% Halal</span></div>' +
        "</div>" +
        '<div><h4>Visit</h4><ul class="footer-links">' +
          '<li><a href="' + (C.address ? C.address.mapsUrl : "#") + '" target="_blank" rel="noopener">' + (C.address ? C.address.line1 : "") + "<br>" + (C.address ? C.address.line2 : "") + "</a></li>" +
          '<li><a href="' + (C.phoneHref || "#") + '">' + (C.phone || "") + "</a></li>" +
          '<li><a href="mailto:' + (C.email || "") + '">' + (C.email || "") + "</a></li>" +
        "</ul></div>" +
        '<div><h4>Hours</h4><ul class="footer-links footer-hours">' + hours + "</ul></div>" +
        '<div><h4>Explore</h4><ul class="footer-links">' + navList() +
          '<li style="margin-top:8px"><a class="text-gold" href="' + TOAST + '" target="_blank" rel="noopener" data-order>Order Online &rarr;</a></li>' +
        "</ul>" +
        '<div class="social-row" style="margin-top:16px">' +
          '<a href="' + (C.social ? C.social.instagram : "#") + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.ig + "</a>" +
          '<a href="' + (C.social ? C.social.facebook : "#") + '" target="_blank" rel="noopener" aria-label="Facebook">' + I.fb + "</a>" +
        "</div></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>&copy; ' + new Date().getFullYear() + " " + (C.name || "Nirvana") + " Indian Restaurant. All rights reserved.</span></div>" +
      "</div>";
    document.body.appendChild(f);
  }

  /* ---------- Mobile sticky action bar (permanent, 4-up nav) ---------- */
  function buildActionBar() {
    var bar = document.createElement("nav");
    bar.className = "action-bar";
    bar.setAttribute("aria-label", "Quick navigation");
    bar.innerHTML =
      '<a class="ab-item" href="menu.html">' + I.menu + "<span>Menu</span></a>" +
      '<a class="ab-item" href="' + (C.phoneHref || "#") + '">' + I.phone + "<span>Call</span></a>" +
      '<a class="ab-item" href="' + (C.address ? C.address.mapsUrl : "#") + '" target="_blank" rel="noopener">' + I.pin + "<span>Directions</span></a>" +
      '<a class="ab-item" href="offers.html">' + I.tag + "<span>Offers</span></a>";
    document.body.appendChild(bar);
    // Mark the active destination
    var here = page + ".html";
    bar.querySelectorAll("a").forEach(function (a) {
      if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
    });
  }

  /* ---------- Hero: video + zoom-on-scroll ---------- */
  function initHero() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var media = hero.querySelector(".hero-media, .hero-bg img");
    var video = hero.querySelector("video.hero-media");
    var reduce = prefersReduced();
    if (video && reduce) { try { video.pause(); video.removeAttribute("autoplay"); } catch (e) {} }
    if (!media || reduce) return;
    var ticking = false;
    function update() {
      var h = hero.offsetHeight || window.innerHeight;
      var p = Math.min(Math.max(window.scrollY / h, 0), 1);
      media.style.transform = "scale(" + (1.05 + p * 0.22).toFixed(4) + ")";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Reveal on scroll (quiet fade + rise, once) ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || prefersReduced()) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Lazy image fade ---------- */
  function initLazyFade() {
    document.querySelectorAll("img.lazy-fade").forEach(function (img) {
      if (img.complete) img.classList.add("loaded");
      else img.addEventListener("load", function () { img.classList.add("loaded"); });
    });
  }

  /* ---------- Stat counters (count up once, respect reduced-motion) ---------- */
  function initCounters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      if (prefersReduced() || !("IntersectionObserver" in window)) { el.textContent = target.toLocaleString() + suffix; return; }
      var start = null, dur = 1400;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString() + suffix;
      }
      requestAnimationFrame(step);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Menu category chips (scroll-spy) ---------- */
  function initMenuNav() {
    var nav = document.querySelector(".menu-nav");
    if (!nav) return;
    var chips = Array.prototype.slice.call(nav.querySelectorAll(".menu-chip"));
    var sections = chips.map(function (c) { return document.querySelector(c.getAttribute("href")); }).filter(Boolean);
    chips.forEach(function (c) {
      c.addEventListener("click", function (e) {
        e.preventDefault();
        var t = document.querySelector(c.getAttribute("href"));
        if (t) t.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
      });
    });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          chips.forEach(function (c) { c.classList.toggle("active", c.getAttribute("href") === "#" + e.target.id); });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Gallery lightbox + filters ---------- */
  function initGallery() {
    var gal = document.querySelector(".gallery");
    if (!gal) return;
    var figs = Array.prototype.slice.call(gal.querySelectorAll("figure"));
    // filters
    document.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        figs.forEach(function (fig) {
          fig.style.display = (f === "all" || fig.getAttribute("data-cat") === f) ? "" : "none";
        });
      });
    });
    // lightbox
    var lb = document.createElement("div");
    lb.className = "lightbox"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&#8249;</button><img alt=""><button class="lb-next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var visible = function () { return figs.filter(function (f) { return f.style.display !== "none"; }); };
    var idx = 0;
    function show(i) {
      var v = visible(); idx = (i + v.length) % v.length;
      var src = v[idx].querySelector("img");
      lbImg.src = src.getAttribute("data-full") || src.src; lbImg.alt = src.alt;
    }
    function openLb(fig) { idx = visible().indexOf(fig); lbImg.src = (fig.querySelector("img").getAttribute("data-full") || fig.querySelector("img").src); lbImg.alt = fig.querySelector("img").alt; lb.classList.add("open"); }
    figs.forEach(function (fig) {
      fig.addEventListener("click", function () { openLb(fig); });
      fig.setAttribute("tabindex", "0"); fig.setAttribute("role", "button");
      fig.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLb(fig); } });
    });
    lb.querySelector(".lb-close").addEventListener("click", function () { lb.classList.remove("open"); });
    lb.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
    lb.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---------- Forms (validation, honeypot, designed success) ---------- */
  function initForms() {
    document.querySelectorAll("form[data-validate]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // honeypot
        var hp = form.querySelector(".honeypot input");
        if (hp && hp.value) return;
        var ok = true;
        form.querySelectorAll("[required]").forEach(function (input) {
          var field = input.closest(".field");
          var valid = input.checkValidity() && input.value.trim() !== "";
          if (field) field.classList.toggle("invalid", !valid);
          if (!valid && ok) { input.focus(); ok = false; }
        });
        if (!ok) return;
        // In production POST to C.cateringEndpoint. Here: designed success state.
        var card = document.createElement("div");
        card.className = "form-success reveal in";
        card.innerHTML = "<h3>Thank you — request received</h3><p style='margin-inline:auto'>Our catering team will reach out within one business day to craft your menu. For anything urgent, call <a class='text-gold' href='" + (C.phoneHref || "#") + "'>" + (C.phone || "") + "</a>.</p>";
        form.replaceWith(card);
        card.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "center" });
      });
      // clear invalid on input
      form.querySelectorAll("input,select,textarea").forEach(function (input) {
        input.addEventListener("input", function () { var f = input.closest(".field"); if (f) f.classList.remove("invalid"); });
      });
    });
  }

  function prefersReduced() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }

  /* ---------- Analytics hook for Order taps (KPI) ---------- */
  function trackOrders() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-order]");
      if (!a) return;
      if (window.gtag) window.gtag("event", "order_now_click", { source: page });
      if (window.dataLayer) window.dataLayer.push({ event: "order_now_click", source: page });
    });
  }

  /* ---------- boot ---------- */
  function wireOrderLinks() {
    document.querySelectorAll("a[data-order]").forEach(function (a) {
      a.setAttribute("href", TOAST);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireOrderLinks();
    buildHeader();
    buildFooter();
    if (window.matchMedia("(max-width: 979px)").matches) buildActionBar();
    initHero();
    initReveal();
    initLazyFade();
    initCounters();
    initMenuNav();
    initGallery();
    initForms();
    trackOrders();
  });
})();
