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
    // Dynamically add frontend-specific CSS files
    const cssFiles = [
      "assets/css/normalize.css",
      "assets/css/font-awesome.min.css",
      "assets/css/material-design-iconic-font.min.css",
      "assets/css/bootstrap.min.css",
      "assets/css/animate.css",
      "assets/css/TimeCircles.css",
      "assets/css/owl.carousel.css",
      "assets/css/slicknav.min.css",
      "assets/lib/css/nivo-slider.css",
      "assets/lib/css/preview.css",
      "assets/css/jquery-ui.css",
      "assets/style.css",
      "assets/css/responsive.css",
      "assets/css/custom.css"
    ];

    for (const cssFile of cssFiles) {
      const link = this.renderer.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', cssFile);
      this.renderer.appendChild(this.document.head, link);
    }

    // Dynamically add frontend-specific JS files
    const jsFiles = [     
      "assets/js/vendor/modernizr-2.8.3.min.js",
      "assets/js/vendor/jquery-1.12.4.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/jquery-price-slider.js",
      "assets/js/TimeCircles.js",
      "assets/js/jquery.easing.js",
      "assets/js/jquery.slicknav.min.js",
      "assets/js/owl.carousel.min.js",
      "assets/lib/js/jquery.nivo.slider.js",
      "assets/lib/home.js",
      "assets/js/plugins.js",
      "assets/js/cart-open.js"
          
      // Add more JS files as needed
    ];

    for (const jsFile of jsFiles) {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = jsFile;
      this.renderer.appendChild(this.document.body, script);
    }
  }
}
