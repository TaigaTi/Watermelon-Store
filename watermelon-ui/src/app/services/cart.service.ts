import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entities/product-entity';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  product: Product;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

ngOnInit()
{
}

  addToCart(productIdFromRoute: number) {
    this.apiService
      .getProductsById(productIdFromRoute)
      .subscribe((data) => {
        this.product = data;
        this.items.push(this.product);
      });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
