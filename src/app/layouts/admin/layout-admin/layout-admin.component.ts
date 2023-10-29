import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
declare var myExternalScript: any; // Declare the external script variable

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void{
    // Dynamically add frontend-specific CSS files
    // const body = this.document.body;
    // body.classList.add('vertical-layout', 'vertical-menu', '2-columns', 'navbar-sticky', 'mat-typography');
    // body.setAttribute('data-menu', 'vertical-menu');
    // body.setAttribute('data-col', '2-columns');
    
    const html=this.document.documentElement;
    html.classList.remove('no-js');
    // Add the specified attributes
    html.setAttribute('lang', 'en');
    html.classList
    html.setAttribute('data-layout', 'vertical');
    html.setAttribute('data-topbar', 'light');
    html.setAttribute('data-sidebar', 'dark');
    html.setAttribute('data-sidebar-size', 'lg');
    html.setAttribute('data-sidebar-image', 'none');
    html.setAttribute('data-preloader', 'disable');
 
    // Dynamically add frontend-specific JS files
  const layoutJsFiles = [     
    "assets/admin/js/layout.js"   
        
    // Add more JS files as needed
  ];

  for (const jsFile of layoutJsFiles) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = jsFile;
    this.renderer.appendChild(this.document.head, script);
  }

    const cssFiles = [
      'assets/admin/test.css',
      'assets/admin/css/bootstrap.min.css',
      'assets/admin/css/icons.min.css',
      'assets/admin/css/app.min.css',
      'assets/admin/css/custom.min.css'     
    ];
    
    for (const cssFile of cssFiles) {
      const link = this.renderer.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', cssFile);
      this.renderer.appendChild(this.document.head, link);
    }
    

// Dynamically load frontend-specific JS files with proper order
this.loadScript('assets/admin/libs/bootstrap/js/bootstrap.bundle.min.js')
.then(() => this.loadScript('assets/admin/libs/simplebar/simplebar.min.js'))
.then(() => this.loadScript('assets/admin/libs/node-waves/waves.min.js'))
.then(() => this.loadScript('assets/admin/libs/feather-icons/feather.min.js'))
.then(() => this.loadScript('assets/admin/js/pages/plugins/lord-icon-2.1.0.js'))
.then(() => this.loadScript('assets/admin/js/plugins.js'))
.then(() => this.loadScript('assets/admin/js/app.js'))
.catch(error => console.error('Error loading script: ', error));
}

private loadScript(src: string): Promise<void> {
return new Promise<void>((resolve, reject) => {
const script = this.renderer.createElement('script');
script.type = 'text/javascript';
script.src = src;
script.onload = resolve;
script.onerror = reject;
this.renderer.appendChild(this.document.body, script);
});
}

   
  
}
