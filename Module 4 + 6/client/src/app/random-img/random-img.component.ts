import { Component } from '@angular/core';
import { RandomImgService } from '../random-img.service';

@Component({
  selector: 'app-random-img',
  templateUrl: './random-img.component.html',
  styleUrls: ['./random-img.component.css']
})
export class RandomImgComponent {
  img:any
  errMessage: string = '';

  constructor(private _service: RandomImgService) { }
  RandomImg(){
    this._service.getRandomData().subscribe({
      next:(data) => {
        this.img = data.message
        console.log("hi",(this.img))
      },
      error:(err)=>{
        this.errMessage = err
      }
    });
  }
}
