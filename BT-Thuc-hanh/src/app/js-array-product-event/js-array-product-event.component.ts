import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-js-array-product-event',
  templateUrl: './js-array-product-event.component.html',
  styleUrls: ['./js-array-product-event.component.css'],
})
export class JsArrayProductEventComponent {
  public products: any;
  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }
  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.maSP]);
  }
}
