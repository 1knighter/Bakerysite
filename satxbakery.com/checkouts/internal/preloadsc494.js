
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/polyfills-legacy.Bf6hxhxU.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/app-legacy.CtoqM1r_.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/en-legacy.Co8JNMNI.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/page-OnePage-legacy.CG3EVFwD.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/DeliveryMethodSelectorSection-legacy.De3Xwhhl.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/useShopPayButtonClassName-legacy.AJfT8kiZ.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/VaultedPayment-legacy.CEkEFxI4.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/LocalizationExtensionField-legacy.DBKugrJ_.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/ShopPayOptInDisclaimer-legacy.CfcuGzF9.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/ShipmentBreakdown-legacy.5cv7NrCh.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/MerchandiseModal-legacy.zWBaLZCB.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/StackedMerchandisePreview-legacy.8URUJC15.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/PayButtonSection-legacy.IcC_Jd8e.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/component-ShopPayVerificationSwitch-legacy.CVp5Nkag.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/useSubscribeMessenger-legacy.LpuvXN2X.js","https://cdn.shopify.com/shopifycloud/checkout-web-dcb/assets/c1/index-legacy.BD1Mf-J5.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  