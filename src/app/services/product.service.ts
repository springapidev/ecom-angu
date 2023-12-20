import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/product';
  constructor(private http: HttpClient) {}

  getProducts(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}/active-list?page=${page}&size=${size}`;
    return this.http.get(url);
  }
  getProductBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/single/${slug}`);
  }
  getProductByFeatured(featured: boolean, page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}/featured?featured=true&page=${page}&size=${size}`;
    return this.http.get(url);
  }
}
