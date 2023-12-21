import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
interface Country {
  code: string;
  name: string;
}

interface State {
  name: string;
  code: string;
}

interface CountryAndStates {
  country: { [code: string]: string };
  states: { [code: string]: State[] };
}

@Component({
  selector: 'app-public-checkout',
  templateUrl: './public-checkout.component.html',
  styleUrls: ['./public-checkout.component.css']
})
export class PublicCheckoutComponent implements OnInit {
  cartItems: any[] = [];
  public grandTotal!: number;
  public totalAmount!: number;
  public discountAmount!: number;

  constructor(private cartService: CartServiceService, private http: HttpClient) {
    this.loadData();
  }


  ngOnInit(): void {
    // Use the cart service to get cart items for checkout
    this.cartItems = [];
    this.cartService.getProducts().subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.totalAmount = this.cartService.getTotalPrice();
      this.grandTotal = this.cartService.getGrandTotal();
      this.discountAmount = this.cartService.getDiscount();
    });

  }
  /** Country State Chain */
  countryAndStates: CountryAndStates = { country: {}, states: {} };
  countries: Country[] = [];
  states: State[] = [];
  selectedCountry = '';
  selectedState = '';



  loadData(): void {
    this.http.get<CountryAndStates>('assets/country-data.json').subscribe(data => {
      this.countryAndStates = data;
      this.countries = Object.entries(data.country).map(([code, name]) => ({ code, name }));
    });
  }

  onCountryChange(): void {
    this.states = this.selectedCountry ? this.countryAndStates.states[this.selectedCountry] || [] : [];
  }

}
