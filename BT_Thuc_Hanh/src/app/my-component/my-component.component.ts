import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  public myVar:string = "Hello Angular"

  //bài 4
  public name:string = "Nguyễn Văn Hướng"
  public email:string = "huongnv20406c@st.uel.edu.vn"
  public nameid:string = "nameid"
  public emailid:string = "emailid"
  public isDissabled:boolean =true

  getMyVar(){
    return this.myVar
  }
}
