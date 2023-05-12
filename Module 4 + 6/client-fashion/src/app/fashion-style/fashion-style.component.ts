import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionStyleService } from '../fashion-style.service';
import { Fashion, FashionsStyle } from '../models/Fashion';

@Component({
  selector: 'app-fashion-style',
  templateUrl: './fashion-style.component.html',
  styleUrls: ['./fashion-style.component.css']
})
export class FashionStyleComponent {
  fashionStyle:any;
  errMessage: string = '';
  styles: any;
  selectedStyle:any='';
  constructor(private _service: FashionStyleService, private router: Router) {
    this._service.getFashionsStyle().subscribe({
      next: (data) => {
        this.fashions = data;
        this.styles = Object.keys(data)
        console.log("co data roi", data);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  viewDetail(fashion:string){
    this.router.navigate(['/fashions-style', fashion])
  }
  getFilteredFashions(category: string): any[] {
    if (category === '') {
      // If 'All' is selected, return all fashion items
      return this.fashionStyle = this.fashions;
    } else {
      // Otherwise, filter the fashion items by category
      return this.fashionStyle =this.fashions[category];
    }
  }
}
