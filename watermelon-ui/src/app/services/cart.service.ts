import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: any[] = [];
  items: any[]=[];

  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

  addToCart(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.apiService
      .getProductsById(productIdFromRoute)
      .subscribe((data: any) => {
        this.product = data;
      });

      this.items.push(this.product);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }
}
