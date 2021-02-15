import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import {Product} from '../../protos/product';

@Component({
  selector: 'app-products-displayer',
  templateUrl: './products-displayer.component.html',
  styleUrls: ['./products-displayer.component.css']
})

export class ProductsDisplayerComponent implements OnInit {
  @Input() products: Product[];

  constructor() { }

  ngOnInit(): void {
  }
}
