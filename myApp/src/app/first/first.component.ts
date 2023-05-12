import { Component } from '@angular/core';
@Component({
  // selector: 'app-first',
  // selector: '.app-first',
  selector: '[app-first]',
  template: `
  <h1>Product: {{productName}}</h1>
  <h2>{{"Product Name: " + productName}}</h2>
  <h2>{{productName.toUpperCase()}}</h2>
  <h3>{{test()}}</h3>
  <button (click) = "onClick($event)">Click me</button>
  <hr>

  <div>
    Enter Product Name <input type="text" [(ngModel)] = "name">
    <p>Name: {{name}}</p>
    <button (click)="changeName()">Change</button>
  </div>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  productName = "Tiger"
  name = ""
  onClick(event: any){
    this.productName = "Beer 333"
    // alert("Hello!")
  }
  test(){
    return "Corona Extra"
  }

  changeName(){
    this.name = "SaiGon"
  }
}
