import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionStyleService } from '../fashion-style.service';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent {
  fashion:any;

  fashionId:any;
  fashions:any
  errMessage:string=''
  constructor(private _service: FashionStyleService,private router:Router,private route: ActivatedRoute){
    this.route.params.subscribe((params) => {
      this.fashionId = params['id']});
    this._service.getFashion(this.fashionId).subscribe({
      next:(data)=>{this.fashion=data},
      error:(err)=>{this.errMessage=err}
    })
  }

}
