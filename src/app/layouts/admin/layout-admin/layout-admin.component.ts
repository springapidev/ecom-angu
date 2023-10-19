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
    const body = this.document.body;
    body.classList.add('vertical-layout', 'vertical-menu', '2-columns', 'navbar-sticky', 'mat-typography');
    body.setAttribute('data-menu', 'vertical-menu');
    body.setAttribute('data-col', '2-columns');
    
    const cssFiles = [
      'assets/admin/test.css',
      'assets/admin/fonts/feather/style.min.css',
      'assets/admin/fonts/simple-line-icons/style.css',
      'assets/admin/fonts/font-awesome/css/font-awesome.min.css',
      'assets/admin/vendors/css/perfect-scrollbar.min.css',
      'assets/admin/vendors/css/prism.min.css',
      'assets/admin/vendors/css/switchery.min.css',
      'assets/admin/css/bootstrap.css',
      'assets/admin/css/bootstrap-extended.css',
      'assets/admin/css/colors.css',
      'assets/admin/css/components.css',
      'assets/admin/css/themes/layout-dark.css',
      'assets/admin/css/plugins/switchery.css',
      'assets/admin/css/style.css'
    ];

    for (const cssFile of cssFiles) {
      const link = this.renderer.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', cssFile);
      this.renderer.appendChild(this.document.head, link);
    }

    // Dynamically add frontend-specific JS files
// Dynamically load frontend-specific JS files with proper order
this.loadScript('assets/admin/vendors/js/vendors.min.js')
.then(() => this.loadScript('assets/admin/vendors/js/switchery.min.js'))
.then(() => this.loadScript('assets/admin/js/core/app-menu.js'))
.then(() => this.loadScript('assets/admin/js/core/app.js'))
.then(() => this.loadScript('assets/admin/js/notification-sidebar.js'))
.then(() => this.loadScript('assets/admin/js/customizer.js'))
.then(() => this.loadScript('assets/admin/js/scroll-top.js'))
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
