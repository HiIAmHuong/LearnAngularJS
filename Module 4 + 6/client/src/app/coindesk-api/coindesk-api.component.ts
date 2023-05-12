import { Component } from '@angular/core';
import { CoindeskApiService } from '../coindesk-api.service';
import { ICoindeskBPI } from '../interfaces/CoindeskInfo';

@Component({
  selector: 'app-coindesk-api',
  templateUrl: './coindesk-api.component.html',
  styleUrls: ['./coindesk-api.component.css'],
})
export class CoindeskApiComponent {
  data: ICoindeskBPI[] =[];
  errMessage: string = '';
  constructor(_service: CoindeskApiService) {
    _service.getCoinData().subscribe({
      next:(data) => {
        this.data = Object.values(data.bpi)
        console.log("hi",(this.data))
      },
      error:(err)=>{
        this.errMessage = err
      }
    });
  }
}
