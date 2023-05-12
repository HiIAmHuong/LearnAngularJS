import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
@Component({
  selector: 'app-fashion-api',
  templateUrl: './fashion-api.component.html',
  styleUrls: ['./fashion-api.component.css'],
})
export class FashionApiComponent {
  fashions: any;
  errMessage: string = '';
  fashion:any;
  id:string =''
  constructor(public _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  getFashion(id:string){
    this._service.getFashion(id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
