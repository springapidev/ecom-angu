import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Category, CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-public-product-search',
  templateUrl: './public-product-search.component.html',
  styleUrls: ['./public-product-search.component.css']
})
export class PublicProductSearchComponent  implements OnInit {
  products: any[] = [];
  currentPage = 1;
  totalPages = 0;
  totalItems = 0;
  serverport: string = 'http://localhost:8084';
  addedStatus: boolean = false;
  duplicateEntryStatus: boolean = false;
  productsFeatured: any[] = [];
  categories: any[] = [];

  constructor(private productService: ProductService,private categoryService : CategoryService, private router: Router, private cartService: CartServiceService) { }

  onProductClick(productSlug: string) {
    this.router.navigate(['/producto', productSlug]);
  }

  ngOnInit(): void {
    this.fetchProducts(this.currentPage, 12);
    this.getFeaturedProducts(true, this.currentPage, 6);
    this.getProductCategories(true,1,10);
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
  getProductCategories(status: boolean, page: number, size: number): void {
    this.categoryService.getCategories(status, page, size).subscribe(
      (data: any) => {
        this.categories = data.categories;
        console.log("Categories: ", this.categories);
        console.log("Categories Data: ", data);
        this.totalPages = data.totalPages;
        this.totalItems = data.totalItems;
      },
      (error) => {
        console.error('Error fetching Featired products:', error);
      }
    );
  }
}
