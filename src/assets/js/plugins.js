(function () {
    var isChoicesScriptLoaded = false;
    var isFlatpickrScriptLoaded = false;
    var isToastifyScriptLoaded = false;

    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function loadExternalScripts() {
        if (isToastifyScriptLoaded && isChoicesScriptLoaded && isFlatpickrScriptLoaded) {
            // All scripts are loaded, you can perform your actions here
        }
    }

    loadScript('https://cdn.jsdelivr.net/npm/toastify-js', function () {
        isToastifyScriptLoaded = true;
        loadExternalScripts();
    });

    loadScript('assets/libs/choices.js/public/assets/scripts/choices.min.js', function () {
        isChoicesScriptLoaded = true;
        loadExternalScripts();
    });

    loadScript('assets/libs/flatpickr/flatpickr.min.js', function () {
        isFlatpickrScriptLoaded = true;
        loadExternalScripts();
    });
})();
