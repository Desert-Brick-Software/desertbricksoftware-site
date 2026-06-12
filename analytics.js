(function () {
  function track(eventName, params) {
    if (typeof gtag === "function") {
      gtag("event", eventName, params);
    }
  }

  function trackProductOpened(productName) {
    track("product_opened", { product_name: productName });
  }

  function trackProductCtaClicked(productName, cta) {
    track("product_cta_clicked", { product_name: productName, cta: cta });
  }

  document.addEventListener(
    "click",
    function (e) {
      var header = e.target.closest(".accordion-header");
      if (header) {
        var item = header.closest(".accordion-item[data-product]");
        if (!item) return;

        var content = item.querySelector(".accordion-content");
        if (!content || content.style.maxHeight) return;

        trackProductOpened(item.getAttribute("data-product"));
        return;
      }

      var ctaEl = e.target.closest("[data-track-cta]");
      if (!ctaEl) return;

      var productEl = ctaEl.closest("[data-product]");
      if (!productEl) return;

      var productName = productEl.getAttribute("data-product");
      var cta = ctaEl.getAttribute("data-track-cta");
      if (productName && cta) {
        trackProductCtaClicked(productName, cta);
      }
    },
    true
  );

  window.DBS = window.DBS || {};
  window.DBS.analytics = {
    trackProductOpened: trackProductOpened,
    trackProductCtaClicked: trackProductCtaClicked,
  };
})();
