import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { Information } from '../interfaces/info';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  @Input()
  info:any
  _url:string ="./assets/Data/information.json"
  constructor(private _pservice:ProductService,private _http: HttpClient){
    _pservice.getInfo().subscribe({
      next:(data) => {this.info = data}
    })
  }
  getNewInfo(){
    const newInfo = new Information()
    this._http.post(this._url,newInfo)
  }
}
