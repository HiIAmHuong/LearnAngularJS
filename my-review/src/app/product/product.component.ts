import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Products = {
    "ProductID":123,
    "ProductName": "Thuốc trị xàm",
    "Price": 300,
    "Image": "assets/h1.png"
  }
}
