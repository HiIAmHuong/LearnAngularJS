import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../models/Fashion';

@Component({
  selector: 'app-fashion-delete',
  templateUrl: './fashion-delete.component.html',
  styleUrls: ['./fashion-delete.component.css']
})
export class FashionDeleteComponent {
  fashion:any
  fashions:any
  errMessage: string = '';
  id:string =''
  constructor(private _service: FashionAPIService) {}
  public setFashion(f: Fashion) {
    this.fashion = f;
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  delFashion() {
    this._service.deleteFashion(this.id).subscribe({
      next: (data) => {
        alert("Delete sucesssful!!")
        this.fashion = ""
        this.fashions = new Fashion();
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
