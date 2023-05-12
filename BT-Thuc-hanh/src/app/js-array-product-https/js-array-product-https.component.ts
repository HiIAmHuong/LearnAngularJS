import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-js-array-product-https',
  templateUrl: './js-array-product-https.component.html',
  styleUrls: ['./js-array-product-https.component.css']
})
export class JsArrayProductHttpsComponent {
  products: any
  constructor(private _service: ProductService){
    this._service.getProducts().subscribe(
      {
        next:(data) =>{this.products=data}
      }
    )
  }
}
