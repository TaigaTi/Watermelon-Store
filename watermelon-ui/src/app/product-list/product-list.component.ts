import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {
    this.apiService.getProducts().subscribe((data: any[]) =>{
      this.products = data;
    })
    }
  }
