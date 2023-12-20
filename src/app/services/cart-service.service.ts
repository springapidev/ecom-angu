import { animate } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  public cartItemList: any[] = []
  public productList = new BehaviorSubject<any>([]);
  private discount: number = 0;
  private shippingCharge: number = 0;
  public vatAmount: number = 0;

  
  setVatAmount(grandtotal: number) {
    this.vatAmount = grandtotal * .21;
  }
  getVatAmount() {
    return this.vatAmount;
  }
  getDiscount(){
    return this.discount;
  }
  setDiscount(discount: number): void {
    this.discount = discount;
    this.calculateVAT();
    this.getGrandTotal();


  }

  setShippingCharge(shippingCharge: number): void {
    this.shippingCharge = shippingCharge;
  }
  constructor() { }
  getLengthOfcartItems(): number {
    return this.cartItemList.length;
  }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  isProductInCart(productId: string): boolean {
    return this.cartItemList.some(item => item.id === productId);
  }
  addtoCart(product: any) {
    const existingItem = this.cartItemList.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.price * existingItem.quantity;
    } else {
      const newItem = { ...product, quantity: 1, total: product.price };
      this.cartItemList.push(newItem);
    }
    this.getTotalPrice();
    this.productList.next([...this.cartItemList]);
    this.calculateVAT();
    console.log(this.cartItemList);
  }

  increaseQuantity(product: any) {
    product.quantity += 1;
    product.total = product.price * product.quantity;
    this.getTotalPrice();
    this.productList.next([...this.cartItemList]);
    console.log(this.cartItemList);
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      product.total = product.price * product.quantity;
      this.getTotalPrice();
      this.productList.next([...this.cartItemList]);
      console.log(this.cartItemList);
    }
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })

    return grandTotal;
  }

  getGrandTotal(): number {
    const subtotal = this.getTotalPrice();
    console.log("Discount Amount: "+this.discount)
    return subtotal - this.discount + this.shippingCharge;
  }
  
 
  private calculateVAT(): void {
    // Calculate the VAT based on your logic
    const vatAmount = this.getGrandTotal() * 0.21; // 21% VAT
    this.setVatAmount(vatAmount);
    // Set the VAT amount in the service
    this.vatAmount = vatAmount;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }


}
