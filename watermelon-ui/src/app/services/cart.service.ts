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

        sessionStorage.setItem("Cart", JSON.stringify(this.items));
      });
  }

  getItems() {
    const Items: string = sessionStorage.getItem("Cart")!;

    if (Items) {
      this.items = JSON.parse(Items) as Product[];
    }
    return this.items;
  }

  clearCart() {
    sessionStorage.removeItem("Cart");
    return this.items;
  }
}
