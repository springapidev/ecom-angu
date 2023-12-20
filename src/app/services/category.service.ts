import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Category {
  id: string;
  name: string;
  subCategories?: Category[];
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/product/category';
  constructor(private http: HttpClient) {}

  getCategories(status:boolean, page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}/list?page=${page}&size=${size}`;
    return this.http.get(url);
  } 
  
}
