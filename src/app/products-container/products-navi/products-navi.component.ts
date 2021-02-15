import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import {PrimaryCategory} from '../../protos/category';

@Component({
  selector: 'app-products-navi',
  templateUrl: './products-navi.component.html',
  styleUrls: ['./products-navi.component.css']
})

export class ProductsNaviComponent implements OnInit {
  @Input() categories: PrimaryCategory[];
  @Output() category_id_to_filter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    // emit with category 'all' to show all products.
  }

  filterByCategory(category_id: number): void {
    this.category_id_to_filter.emit(category_id);
  }
}
