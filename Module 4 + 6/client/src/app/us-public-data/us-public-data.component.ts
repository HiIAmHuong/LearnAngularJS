import { Component } from '@angular/core';
import { PopulationData } from '../interfaces/Population';
import { UsPublicDataService } from '../us-public-data.service';

@Component({
  selector: 'app-us-public-data',
  templateUrl: './us-public-data.component.html',
  styleUrls: ['./us-public-data.component.css']
})
export class UsPublicDataComponent {
  data: any;
  errMessage: string = '';
  constructor(_service: UsPublicDataService) {
    _service.getUSPublicData().subscribe({
      next:(data) => {
        this.data = data.data
        console.log("hi",(this.data))
      },
      error:(err)=>{
        this.errMessage = err
      }
    });
  }
}
