import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashions',
  templateUrl: './fashions.component.html',
  styleUrls: ['./fashions.component.css']
})
export class FashionsComponent {
  fashions: any;
  errMessage: string = '';
  constructor(private _service: FashionAPIService, private router: Router) {
    this._service.getFashions().subscribe({
      next:(data) => {
        this.fashions = data;
      },
      error:(err) => {
        this.errMessage = err;
      },
    });
  }
  edit(fashionId: any) {
    this.router.navigate(['fashion-update',fashionId]);
  }
  viewDetails(fashionId: any) {
    this.router.navigate(['fashion-detail', fashionId]);
  }
  delete(fashionId: any) {
    if (window.confirm('Are you sure you want to delete this row?')) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => {
          this.fashions = data;
          this.router.navigate(['']);
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    } else {
      alert('Canceled!');
    }
  }
}
