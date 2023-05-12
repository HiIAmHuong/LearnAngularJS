import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(){
    let Products = [
      {"id": 1, "Name":"Coca Cola","Price":100,"Picture":"assets/h1.png"},
    {"id": 2, "Name":"Allen","Price":200,"Picture":"assets/h2.png"},
    {"id": 3, "Name":"Lifebouy","Price":500,"Picture":"assets/h3.png"},
    {"id": 4, "Name":"Budchen","Price":1000,"Picture":"assets/h4.png"},
    {"id": 5, "Name":"Lapogee","Price":1500,"Picture":"assets/h5.png"},
    {"id": 6, "Name":"Wazlll","Price":2100,"Picture":"assets/h6.png"},
    {"id": 7, "Name":"Dove","Price":3100,"Picture":"assets/h7.png"},
    {"id": 8, "Name":"Lifebouy","Price":3600,"Picture":"assets/h8.png"},
    {"id": 9, "Name":"Sanosan","Price":4000,"Picture":"assets/h9.png"},
    {"id": 10, "Name":"Clin","Price":4500,"Picture":"assets/h10.png"}
    ]

    return Products
  }
}
