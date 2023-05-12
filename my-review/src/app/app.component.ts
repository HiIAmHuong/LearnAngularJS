import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-review';
  constructor(private router: Router){}

  openListProduct (){
    this.router.navigate(['list-product'])
  }
}
