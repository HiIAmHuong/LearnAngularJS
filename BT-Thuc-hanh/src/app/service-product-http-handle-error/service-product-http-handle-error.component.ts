import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-http-handle-error',
  templateUrl: './service-product-http-handle-error.component.html',
  styleUrls: ['./service-product-http-handle-error.component.css']
})
export class ServiceProductHttpHandleErrorComponent {
  products:any
  errMessage:string=''
  constructor(
    _service:ProductService
    ){
      _service.getProductsHandleError().subscribe({
        next:(data)=>{this.products=data},
        error:(err)=>{this.errMessage=err}
      })
    }
}
