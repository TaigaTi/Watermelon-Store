import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  product: any;

  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

  addToCart(){
     const routeParams = this.route.snapshot.paramMap;
     const productIdFromRoute = Number(routeParams.get('productId'));

     this.product = this.apiService.getProductsById(productIdFromRoute);
    
    this.items.push(this.product);
    console.log(this.items);
    // localStorage.setItem('cart-items', JSON.stringify(this.product))
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }
}
