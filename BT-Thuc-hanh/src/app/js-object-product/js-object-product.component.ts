import { Component } from '@angular/core';

@Component({
  selector: 'app-js-object-product',
  templateUrl: './js-object-product.component.html',
  styleUrls: ['./js-object-product.component.css']
})
export class JsObjectProductComponent {
  product = {
    productId: "123",
    productName: "Thuốc trị xàm",
    price: "300",
    img: "assets/coke.png"
  }
}
