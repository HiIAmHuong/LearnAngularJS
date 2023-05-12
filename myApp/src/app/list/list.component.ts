import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  products: any

  constructor(private _service: ExampleService){}

  ngOnInit(): void {
    // this.products = this._service.getAllProducts_2();
    this._service.getAllProducts_2().subscribe({
      next: (data) => {this.products = data}
    })
  }
}
