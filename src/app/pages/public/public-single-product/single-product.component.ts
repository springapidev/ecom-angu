import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  productSlug!: string;
  productDetails: any;
  serverport: string = 'http://localhost:8084';
  productsFeatured: any[] = [];
  currentPage = 1;
  totalPages = 0;
  totalItems = 0;



  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productSlug = params.get('slug') || '';
      this.getProductDetails();
    });
    this.getFeaturedProducts(true, this.currentPage, 6);


  }

  getProductDetails() {
    if (this.productSlug) {
      this.productService.getProductBySlug(this.productSlug).subscribe(
        (data) => {
          this.productDetails = data;
          console.log("Raj: ", this.productDetails)
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
    } else {
      console.warn('Product title is not available.');
    }
  }
  getFeaturedProducts(featured: boolean, page: number, size: number): void {
    this.productService.getProductByFeatured(featured, page, size).subscribe(
      (data: any) => {
        this.productsFeatured = data.products;
        this.totalPages = data.totalPages;
        this.totalItems = data.totalItems;
      },
      (error) => {
        console.error('Error fetching Featired products:', error);
      }
    );
  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }
  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
  }
 
}