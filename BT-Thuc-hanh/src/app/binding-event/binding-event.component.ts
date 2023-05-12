import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css']
})
export class BindingEventComponent {
  public inputA: number =0;
  public inputB: number =0;
  public sum: number =0;
  public minus: number =0;
  public multiply: number =0;
  public divide: any =0;

  onClick(event: any) {
    alert(event.pointerId)
  }
  onSubmit(value: string) {
    alert(value)
  }
  result:any
  xuLyPhepToan(arg0:string, arg1:string,arg2:string){
    let a = parseFloat(arg0)
    let b = parseFloat(arg1)
    if (arg2 === "+"){
      this.result = (a+b)
    }else if(arg2 === "-"){
      this.result = (a-b)
    } else if(arg2 === "/"){
      this.result = (a/b)
    }else if(arg2 === "*"){
      this.result = (a*b)
    }
}


  calculateSum() {
    this.sum =  Number(this.inputA) + Number(this.inputB);
  }
  calculateMinus() {
    this.minus =  Number(this.inputA) - Number(this.inputB);
  }
  calculateMultiply() {
    this.multiply =  Number(this.inputA) * Number(this.inputB);
  }
  calculateDivide() {
    this.divide =  Number(this.inputA) / Number(this.inputB);
  }
  reset() {

  }
}
