import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way',
  templateUrl: './binding-two-way.component.html',
  styleUrls: ['./binding-two-way.component.css']
})
export class BindingTwoWayComponent {
  public name:string = ''
  public address:string = ''
  public email:string = ''
  public phone:string = ''
  setDefaultInfo() {
    this.address = '13 đường Hùng Vương';
    this.email = 'huongnv20406c@st.uel.edu.vn';
    this.phone = '0354077665';
  }
}
