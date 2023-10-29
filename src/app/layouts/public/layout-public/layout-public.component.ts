import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout-public',
  templateUrl: './layout-public.component.html',
  styleUrls: ['./layout-public.component.css']
})
export class LayoutPublicComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    const html=this.document.documentElement;
    html.classList.add('no-js');
    html.setAttribute('lang', 'zxx');

  

    // Dynamically add frontend-specific CSS files
    const cssFiles = [
      // "assets/css/normalize.css",
      // "assets/css/font-awesome.min.css",
      // "assets/css/material-design-iconic-font.min.css",
      // "assets/css/bootstrap.min.css",
      // "assets/css/animate.css",
      // "assets/css/TimeCircles.css",
      // "assets/css/owl.carousel.css",
      // "assets/css/slicknav.min.css",
      // "assets/lib/css/nivo-slider.css",
      // "assets/lib/css/preview.css",
      // "assets/css/jquery-ui.css",
      // "assets/style.css",
      // "assets/css/responsive.css",
      // "assets/css/custom.css"

      "assets/css/main.css"
    ];

    for (const cssFile of cssFiles) {
      const link = this.renderer.createElement('link');
      link.setAttribute('rel', 'stylesheet');
          link.setAttribute('href', cssFile);
      this.renderer.appendChild(this.document.head, link);
    }
    //  const layoutJsFiles = [     
    //   "assets/js/vendor/modernizr-2.8.3.min.js"
          
    //   // Add more JS files as needed
    // ];
  
    // for (const jsFile of layoutJsFiles) {
    //   const script = this.renderer.createElement('script');
    //   script.type = 'text/javascript';
    //   script.src = jsFile;
    //   this.renderer.appendChild(this.document.head, script);
    // }

    // Dynamically add frontend-specific JS files
    const jsFiles = [             
      // Add more JS files as needed
      // "assets/js/vendor/modernizr-3.6.0.min.js",
    "assets/js/vendor/jquery-3.6.0.min.js",
    // "assets/js/vendor/jquery-migrate-3.3.0.min.js",
    "assets/js/vendor/bootstrap.bundle.min.js",
    "assets/js/plugins/slick.js",
    "assets/js/plugins/jquery.syotimer.min.js",
    "assets/js/plugins/wow.js",
    "assets/js/plugins/jquery-ui.js",
    "assets/js/plugins/perfect-scrollbar.js",
    "assets/js/plugins/magnific-popup.js",
    // "assets/js/plugins/select2.min.js",
    "assets/js/plugins/waypoints.js",
    "assets/js/plugins/counterup.js",
    "assets/js/plugins/jquery.countdown.min.js",
    "assets/js/plugins/images-loaded.js",
    "assets/js/plugins/isotope.js",
    "assets/js/plugins/scrollup.js",
    "assets/js/plugins/jquery.vticker-min.js",
    "assets/js/plugins/jquery.theia.sticky.js",
    // "assets/js/plugins/jquery.elevatezoom.js",
    "assets/js/main.js",
    "assets/js/shop.js",
    ];

    for (const jsFile of jsFiles) {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = jsFile;
      this.renderer.appendChild(this.document.body, script);
    }
  }
}
