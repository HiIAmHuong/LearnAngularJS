import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-js-array-group-customer',
  templateUrl: './js-array-group-customer.component.html',
  styleUrls: ['./js-array-group-customer.component.css']
})
export class JsArrayGroupCustomerComponent {
  ngOnInit(): void {}
  Customer: any;
  constructor(private _service: ProductService) {
    this._service.getCustomerGroup().subscribe({
      next: (data) => {
        this.Customer = data;
      },
    });
  }
}
