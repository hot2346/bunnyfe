import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../protos/product';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css'],
})
export class ProductMainComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit(): void {}
}
