import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }

  url!: "http://localhost:2000";

  getList() : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:2000/products');
  }

  getProduct(id: any) : Observable<Product> {
    return this.http.get<Product>('http://localhost:2000/products/'+id);
  }

  getQuery(query:any) : Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:2000/search/'+query);
  }

  postReview(data:any) {
    return this.http.post('http://localhost:2000/review', data);
  }
}
