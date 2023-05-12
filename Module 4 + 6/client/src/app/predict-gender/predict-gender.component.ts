import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PredictGender } from '../interfaces/PredictGender';
import { PredictGenderService } from '../predict-gender.service';

@Component({
  selector: 'app-predict-gender',
  templateUrl: './predict-gender.component.html',
  styleUrls: ['./predict-gender.component.css']
})
export class PredictGenderComponent {
  name: string="";
  predictGender: any="";
  errMessage: string = '';
  constructor(private _service: PredictGenderService){  }
  PredictGender(){

    this._service.getPredictGenderData(this.name).subscribe({
      next:(data) => {
        console.log("hello",this.name)
        this.predictGender = data.gender
        console.log("hi",this.predictGender)
      },
      error:(err)=>{
        this.errMessage = err
      }
    });
  }

}
