import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';
@Component({
  selector: 'app-fashion-api',
  templateUrl: './fashion-api.component.html',
  styleUrls: ['./fashion-api.component.css'],
})
export class FashionApiComponent {
  fashion:any;
  fashionId:any;
  fashions:any
  errMessage:string=''
  constructor(private _service: FashionAPIService,private router:Router,private route: ActivatedRoute){
    this.route.params.subscribe((params) => {
      this.fashionId = params['id']});
    this._service.getFashion(this.fashionId).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}

