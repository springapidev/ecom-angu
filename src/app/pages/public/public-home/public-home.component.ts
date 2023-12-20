import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-public-home',
  templateUrl: './public-home.component.html',
  styleUrls: ['./public-home.component.css']
})
export class PublicHomeComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  totalPages = 0;
  totalItems = 0;
  serverport: string = 'http://localhost:8084';
  addedStatus: boolean = false;
  duplicateEntryStatus: boolean = false;
  constructor(private productService: ProductService, private router: Router, private cartService: CartServiceService) { }

  onProductClick(productSlug: string) {
    this.router.navigate(['/producto', productSlug]);
  }

  ngOnInit(): void {
    this.fetchProducts(this.currentPage, 12);
  }

  fetchProducts(page: number, size: number): void {
    
     this.productService.getProducts(page, size)
      .subscribe(res => {       
        this.products = res.products;
        this.products = this.products.filter(product => !this.cartService.isProductInCart(product.id)).slice();
        
        this.totalPages = res.totalPages;
        this.totalItems = res.totalItems - this.cartService.getLengthOfcartItems();
        this.products.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.products)
      });
  }

  loadPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchProducts(this.currentPage, 20);
    }
  }


  addToCart(item: any) {
    if (this.cartService.isProductInCart(item.id)) {
      this.duplicateEntryStatus=true;
      }else{
      this.cartService.addtoCart(item);
      this.loadPage(this.currentPage);
      this.addedStatus=true;
    }

    setTimeout(() => {
      this.addedStatus = false;
      this.duplicateEntryStatus=false;     
    }, 700);
  }
}
