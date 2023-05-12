import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-js-array-product',
  templateUrl: './js-array-product.component.html',
  styleUrls: ['./js-array-product.component.css']
})
export class JsArrayProductComponent {
  products: any
  constructor(private pservice:ProductService){
    this.products = pservice.getProducts()
  }
}
