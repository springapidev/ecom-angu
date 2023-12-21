import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-public-cart',
  templateUrl: './public-cart.component.html',
  styleUrls: ['./public-cart.component.css']
})
export class PublicCartComponent implements OnInit {
  public products: any[] = [];
  public grandTotal!: number;
  public totalAmount!: number;
  public discountAmount !: number;
  public shippingCharge=0;
  public serverport = 'http://localhost:8084';
  public discount = 0;
  public vatAmount = 0;
  public totalItems = 0;

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log("Products: ", this.products)
        this.totalAmount = this.cartService.getTotalPrice();
        this.grandTotal = this.cartService.getGrandTotal();
        this.totalItems = res.length;
        this.vatAmount=this.cartService.getVatAmount();
      })
      this.updateCartDetails();
  }
  getVatAmount() {
    this.vatAmount = this.cartService.vatAmount;
    this.updateCartDetails();
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.updateCartDetails();
  }
  emptycart() {
    this.cartService.removeAllCart();
    this.updateCartDetails();
  }

  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
    this.updateCartDetails();
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
    this.updateCartDetails();
  }
  setDiscount(discount: number): void {
    this.cartService.setDiscount(discount);
    this.updateCartDetails();
  }

  setShippingCharge(shippingCharge: number): void {
    this.cartService.setShippingCharge(shippingCharge);
    this.updateCartDetails();
  }
  updateCartDetails(): void {
    this.totalAmount = this.cartService.getTotalPrice();
    this.grandTotal = this.cartService.getGrandTotal();
    this.totalItems = this.products.length;
    this.cartService.setVatAmount(this.grandTotal);
    this.vatAmount = this.cartService.getVatAmount();
  }
}
