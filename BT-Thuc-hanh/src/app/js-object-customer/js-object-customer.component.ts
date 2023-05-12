import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-js-object-customer',
  templateUrl: './js-object-customer.component.html',
  styleUrls: ['./js-object-customer.component.css']
})
export class JsObjectCustomerComponent {
  customer:any;

  constructor(private service:ProductService){
    this.customer = service.getCustomer()
  }
}
