import { Component } from '@angular/core';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent {
  database = [
    {"CateID":"Cate1","CatName":"Máy tính","Products":[
      {"ProductID":"p1","ProductName":"Dell 113","Price":300},
      {"ProductID":"p2","ProductName":"Sony 115","Price":500},
      {"ProductID":"p3","ProductName":"Thinpad X390","Price":4300}
    ]},
    {"CateID":"Cate2","CatName":"Điện thoại","Products":[
      {"ProductID":"d1","ProductName":"Iphone 15","Price":5000},
      {"ProductID":"d2","ProductName":"Sony Xperia","Price":4300},
      {"ProductID":"d3","ProductName":"Samsung A73","Price":2300}
    ]},
    {"CateID":"Cate3","CatName":"Phụ kiện","Products":[
      {"ProductID":"pk1","ProductName":"Giá đỡ","Price":30},
      {"ProductID":"pk2","ProductName":"Tản nhiệt","Price":100},
      {"ProductID":"pk3","ProductName":"Ốp lưng","Price":150}
    ]},
    {"CateID":"Cate4","CatName":"Điện máy","Products":[
      {"ProductID":"p1","ProductName":"Tủ lạnh","Price":30},
      {"ProductID":"p2","ProductName":"Bếp từ","Price":230},
      {"ProductID":"p3","ProductName":"Máy giặt","Price":190}
    ]},
    {"CateID":"Cate5","CatName":"Thiết bị âm thanh","Products":[
      {"ProductID":"a1","ProductName":"JBL","Price":100},
      {"ProductID":"a2","ProductName":"Bose","Price":290},
      {"ProductID":"a3","ProductName":"SoundMax","Price":570}
    ]},

  ]
}
