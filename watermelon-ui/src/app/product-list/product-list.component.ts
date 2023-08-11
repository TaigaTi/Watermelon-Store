import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Product } from '../entities/product-entity';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
    this.apiService.getProducts().subscribe((data: Product[]) =>{
      this.products = data;
    })
    }
  }
