import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-public-featured-products',
  templateUrl: './public-featured-products.component.html',
  styleUrls: ['./public-featured-products.component.css']
})
export class PublicFeaturedProductsComponent  implements OnInit{
  fetchProducts: any[] = [];
  currentPage = 1;
  totalPages = 0;
  totalItems = 0;
  serverport: string='http://localhost:8084';

  constructor(private productService: ProductService) {}

  onProductClick(productSlug: string) {
    
  }

  ngOnInit(): void {
    this.getFeaturedProducts(true, this.currentPage, 12);
  }

  getFeaturedProducts(featured:boolean, page: number, size: number): void{
    this.productService.getProductByFeatured(featured, page, size).subscribe(
      (data: any) => {
        this.fetchProducts = data.products;
        this.totalPages = data.totalPages;
        this.totalItems = data.totalItems;
      },
      (error) => {
        console.error('Error fetching Featired products:', error);
      }
    );
  }
  loadPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getFeaturedProducts(true, this.currentPage, 20);
    }
  }
}

