/* Zevlo header — injects site header + handles nav menus */
(function () {
  "use strict";

  /* path prefix based on page depth (e.g. "../" for /about/) */
  var depth = (location.pathname.replace(/\/index\.html$|\.html$/, "").match(/\//g) || []).length;
  if (location.pathname.endsWith("/") || location.pathname.endsWith("index.html")) depth = Math.max(0, depth - 1);
  var P = "../".repeat(depth);

  /* minimal CSS for header interactions */
  var css = document.createElement("style");
  css.textContent =
    ".wxm_mobile_menu_toggle{display:none;flex-direction:column;gap:5px;background:none;border:0;cursor:pointer;padding:8px}" +
    ".wxm_mobile_menu_toggle span{display:block;width:22px;height:2px;background:currentColor;transition:.2s}" +
    ".wxm_mobile_menu_toggle.wxm_open span:nth-child(1){transform:translateY(7px) rotate(45deg)}" +
    ".wxm_mobile_menu_toggle.wxm_open span:nth-child(2){opacity:0}" +
    ".wxm_mobile_menu_toggle.wxm_open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}" +
    "@media(max-width:1024px){.wxm_mobile_menu_toggle{display:flex}.wxm_primary_header nav[aria-label=Main],.wxm_header_actions{display:none}}" +
    ".wxm_mobile_navigation{display:none;position:absolute;left:0;right:0;top:100%;max-height:0;overflow:hidden;background:hsl(var(--background));box-shadow:0 12px 24px rgb(0 0 0 / .12);transition:max-height .3s}" +
    ".wxm_mobile_navigation.wxm_open{display:block;max-height:80vh;overflow-y:auto;border-top:1px solid hsl(var(--border))}" +
    ".wxm_mobile_navigation ul{list-style:none;padding:0}.wxm_mobile_navigation a,.wxm_mobile_navigation_toggle{display:flex;width:100%;padding:.75rem 1rem;text-decoration:none;align-items:center;justify-content:space-between;background:none;border:0;font:inherit;cursor:pointer}" +
    ".wxm_mobile_navigation_submenu{display:none;padding-left:1rem}.wxm_mobile_navigation_submenu.wxm_open{display:block}" +
    ".wxm_mobile_navigation_cta{font-weight:600;color:hsl(var(--primary))}" +
    ".wxm_desktop_nav_dropdown_menu{z-index:50}";
  document.head.appendChild(css);
  
  /* ---- mobile hamburger ---- */
  var burger = document.querySelector(".wxm_mobile_menu_toggle");
  var mnav = document.querySelector(".wxm_mobile_navigation");
  if (burger && mnav) burger.addEventListener("click", function () {
    var open = mnav.classList.toggle("wxm_open");
    burger.classList.toggle("wxm_open", open);
    burger.setAttribute("aria-expanded", open);
  });

  /* ---- mobile sub-menus ---- */
  document.querySelectorAll(".wxm_mobile_navigation_toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var sub = btn.nextElementSibling;
      if (sub) sub.classList.toggle("wxm_open");
      btn.setAttribute("aria-expanded", sub && sub.classList.contains("wxm_open"));
    });
  });

  /* ---- desktop dropdowns ---- */
  document.querySelectorAll(".wxm_desktop_nav_dropdown").forEach(function (dd) {
    var btn = dd.querySelector(".wxm_desktop_nav_dropdown_toggle"),
        menu = dd.querySelector(".wxm_desktop_nav_dropdown_menu");
    if (!btn || !menu) return;
    function setOpen(open) {
      menu.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    dd.addEventListener("mouseenter", function () { setOpen(true); });
    dd.addEventListener("mouseleave", function () { setOpen(false); });
    dd.addEventListener("focusin", function () { setOpen(true); });
    dd.addEventListener("focusout", function (event) {
      if (!dd.contains(event.relatedTarget)) setOpen(false);
    });
  });
})();


/* Zevlo main — page interactions: tabs + forms */
(function () {
  "use strict";

  /* ---- Radix-style tabs (services pages, get-quote) ---- */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var scope = tab.closest("[role=tablist]").parentElement || document;
        var listTabs = tab.closest("[role=tablist]").querySelectorAll('[role="tab"]');
        var idx = Array.prototype.indexOf.call(listTabs, tab);
        listTabs.forEach(function (t, i) {
          t.setAttribute("data-state", i === idx ? "active" : "inactive");
          t.setAttribute("aria-selected", i === idx ? "true" : "false");
          t.tabIndex = i === idx ? 0 : -1;
        });
        var panels = scope.querySelectorAll('[role="tabpanel"]');
        panels.forEach(function (p, i) {
          p.hidden = i !== idx;
          p.setAttribute("data-state", i === idx ? "active" : "inactive");
        });
      });
    });
  });

  /* ---- forms: validate + submit ---- */
  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) return; // let browser show native errors
      e.preventDefault();
      var action = form.getAttribute("action");
      if (action) {
        var mainScript = document.querySelector('script[src$="assets/js/main.js"]');
        var thankYouUrl = new URL("../../thank-you.html", mainScript.src).href;
        var nextField = form.querySelector('input[name="_next"]');
        if (!nextField) {
          nextField = document.createElement("input");
          nextField.type = "hidden";
          nextField.name = "_next";
          form.appendChild(nextField);
        }
        nextField.value = thankYouUrl;
        form.submit();
        return;
      } // real endpoint configured — go
      var successMessage = form.querySelector(".wxm_form_success_message");
      if (!successMessage) {
        successMessage = document.createElement("p");
        successMessage.className = "wxm_form_success_message mt-3 text-sm text-green-700";
        successMessage.setAttribute("role", "status");
        form.appendChild(successMessage);
      }
      successMessage.textContent = "Thank you! Your form has been submitted successfully. We'll get back to you shortly.";
      var mainScript = document.querySelector('script[src$="assets/js/main.js"]');
      var thankYouUrl = new URL("../../thank-you.html", mainScript.src).href;
      window.location.href = thankYouUrl;
    });
  });
})();