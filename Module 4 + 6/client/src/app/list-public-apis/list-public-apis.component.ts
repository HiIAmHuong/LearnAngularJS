import { Component } from '@angular/core';
import { API, APIList } from '../interfaces/ListPublicAPIs';
import { ListPublicApiService } from '../list-public-api.service';

@Component({
  selector: 'app-list-public-apis',
  templateUrl: './list-public-apis.component.html',
  styleUrls: ['./list-public-apis.component.css']
})
export class ListPublicApisComponent {
  data: API[]=[];
  errMessage: string = '';
  constructor(_service: ListPublicApiService) {
    _service.getListApisData().subscribe({
      next:(data) => {
        this.data = Object.values(data)[1]
        console.log("hi",(this.data))
      },
      error:(err)=>{
        this.errMessage = err
      }
    });
  }
}
