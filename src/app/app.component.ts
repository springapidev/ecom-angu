import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eCommerce';
  loadScript(url : any) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit() {
    // this.loadScript('../assets/js/vendor/jquery-1.12.4.min.js');
    // this.loadScript('../assets/js/bootstrap.min.js');
    // this.loadScript('../assets/js/TimeCircles.js');
    // this.loadScript('../assets/js/jquery.easing.js');
    // this.loadScript('../assets/js/jquery.slicknav.min.js');
    // this.loadScript('../assets/js/owl.carousel.min.js');
    // this.loadScript('../assets/lib/js/jquery.nivo.slider.js');
    // this.loadScript('../assets/lib/home.js');
    // this.loadScript('../assets/js/plugins.js');
    // this.loadScript('../assets/js/main.js');
  }
}
