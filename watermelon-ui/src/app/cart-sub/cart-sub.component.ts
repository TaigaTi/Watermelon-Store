import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../entities/product-entity';

@Component({
  selector: 'app-cart-sub',
  templateUrl: './cart-sub.component.html',
  styleUrls: ['./cart-sub.component.css']
})
export class CartSubComponent {
  items: Product[] = [];
  subtotal:number = 0;

  constructor(private cartService:CartService){}

  ngOnInit(){

    this.items = this.cartService.getItems();

    for(let i=0;i<this.items.length;i++)
    {
      this.subtotal += this.items[i].price;
    }
  }
}
