import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  getProductsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products/${id}`);
  }
}
