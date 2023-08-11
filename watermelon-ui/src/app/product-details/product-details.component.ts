import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entities/product-entity';
import { NgToastService } from 'ng-angular-popup';
import { style } from '@angular/animations';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: Product;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private toast: NgToastService,
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.apiService
      .getProductsById(productIdFromRoute)
      .subscribe((data) => {
        this.product = data;
      });
      
  }

  openSuccess(){
    this.toast.success({detail:`${this.product.name} Added`,summary:'Product Added to Cart!', sticky:true,position:'topRight'})
    }

  addToCart(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.cartService.addToCart(productIdFromRoute);
    this.openSuccess();
    
  }
}
