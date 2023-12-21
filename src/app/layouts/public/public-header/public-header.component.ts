import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {

  constructor(private cartService: CartServiceService,private router: Router) { }
  totalItems = 0;
  public products : any = [];
  public grandTotal !: number;
  serverport = 'http://localhost:8084';

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      console.log("Products: ",this.products)
      this.grandTotal = this.cartService.getGrandTotal();
      this.totalItems =  this.cartService.getLengthOfcartItems();
    })
  }

  openCartDetails(){
    this.router.navigate(['/carrito']);
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
