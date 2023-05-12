import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionStyleService } from '../fashion-style.service';

@Component({
  selector: 'app-fashion-select',
  templateUrl: './fashion-select.component.html',
  styleUrls: ['./fashion-select.component.css']
})
export class FashionSelectComponent {
  fashions: any;
  fashionStyle: any[] = [];
  errMessage: string = '';
  styles: any;
  selectedStyle: string = '';
  searchQuery: string = '';
  constructor(private _service: FashionStyleService, private router: Router) {
    this._service.getFashionsStyle().subscribe({
      next: (data) => {
        this.fashions = data;
        this.styles = Object.keys(data);
        console.log("co data roi", data);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  viewDetail(fashion: string){
    this.router.navigate(['/fashions-style', fashion])
  }

  getFilteredFashions(category: string): any[] {
    if (category === '') {
      // If 'All' is selected, return all fashion items
      return this.fashionStyle = Object.values(this.fashions).flat();
    } else {
      // Otherwise, filter the fashion items by category
      return this.fashionStyle = this.fashions[category];
    }
  }
  // getFilteredFashions1(): any[] {
  //   if (this.searchQuery === '') {
  //     // If search query is empty, return all fashion items
  //     return this.fashionStyle = this.fashions;
  //   } else {
  //     // Otherwise, filter the fashion items by category
  //     const filteredFashions = {};
  //     for (const [category, fashions] of Object.entries(this.fashions)) {
  //       filteredFashions[category] = fashions.filter((fashion: any) => {
  //         return fashion.fashion_subject.toLowerCase().includes(this.searchQuery.toLowerCase());
  //       });
  //     }
  //     return this.fashionStyle = filteredFashions;
  //   }
  // }
}
