import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  url = "../assets/data/products.json"

  constructor(private _http: HttpClient) { }
  getAllProducts(){
    return [
      {"id":1,"name": "Heineken","price":10000},
      {"id":2,"name": "Tiger","price":20000},
      {"id":3,"name": "Corona Extra","price":30000},
      {"id":4,"name": "Sapporo","price":40000},
    ]
  }

  getAllProducts_2(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.url)
  }

}
