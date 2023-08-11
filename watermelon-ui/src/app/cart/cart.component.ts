import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../entities/product-entity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }
}
