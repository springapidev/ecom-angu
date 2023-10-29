import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
     const cssFiles = [
    "assets/admin/libs/gridjs/theme/mermaid.min.css",
    "assets/admin/libs/nouislider/nouislider.min.css",
    ];

    for (const cssFile of cssFiles) {
      const link = this.renderer.createElement('link');
      link.setAttribute('rel', 'stylesheet');
          link.setAttribute('href', cssFile);
      this.renderer.appendChild(this.document.head, link);
    }

    const jsFiles = [   
      "assets/libs/nouislider/nouislider.min.js",
      "assets/admin/libs/wnumb/wNumb.min.js",
      "assets/admin/libs/gridjs/gridjs.umd.js",
      "https://unpkg.com/gridjs/plugins/selection/dist/selection.umd.js",
      "assets/admin/js/pages/ecommerce-product-list.init.js",
    ];

    for (const jsFile of jsFiles) {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = jsFile;
      this.renderer.appendChild(this.document.body, script);
    }
  }
}
