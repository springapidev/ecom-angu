(function () {
    var scriptUrls = [
      'https://cdn.jsdelivr.net/npm/toastify-js',
      'assets/admin/libs/choices.js/public/assets/scripts/choices.min.js',
      'assets/admin/libs/flatpickr/flatpickr.min.js'
    ];
  
    var loadScript = function (url) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      document.head.appendChild(script);
    };
  
    var elements = document.querySelectorAll("[toast-list], [data-choices], [data-provider]");
    
    if (elements.length > 0) {
      scriptUrls.forEach(function (url) {
        loadScript(url);
      });
    }
  })();
  