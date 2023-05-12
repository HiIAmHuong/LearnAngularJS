import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
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
