import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-js-array-product-cata',
  templateUrl: './js-array-product-cata.component.html',
  styleUrls: ['./js-array-product-cata.component.css']
})
export class JsArrayProductCataComponent {
  catalog: any

  constructor(private _pservice:CatalogService){
    this.catalog = _pservice.getCategories()
  }
}
