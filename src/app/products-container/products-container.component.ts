import { Component, OnInit } from '@angular/core';
import {PrimaryCategory} from '../protos/category';
import {categories} from '../mock-data/categories';
import {Product} from '../protos/product';
import {mock_products} from '../mock-data/products';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})

export class ProductsContainerComponent implements OnInit {
  categories:PrimaryCategory[] = categories;
  products: Product[] = mock_products;

  constructor() { }

  ngOnInit(): void {
  }

  filterProducts(category_id_to_filter: number) {
    this.retrieveProductsWithCategoryId(category_id_to_filter);
  }

  
  private retrieveProductsWithCategoryId(category_id: number): void {
    this.products = [];
    // http request to get products with specific category id
    for (const product of mock_products) {
      if(product.categories.includes(category_id))
      this.products.push(product);
    }
  }
}
