import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-quadric',
  templateUrl: './binding-two-way-quadric.component.html',
  styleUrls: ['./binding-two-way-quadric.component.css']
})
export class BindingTwoWayQuadricComponent {
  public result:any
  giaiPTB2(arg0:string, arg1:string,arg2:string){
    let a = parseFloat(arg0)
    let b = parseFloat(arg1)
    let c = parseFloat(arg2)
    let delta = b * b - 4 * a * c
    if (delta < 0) {
      this.result = "Phương trình vô nghiệm";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      this.result = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      this.result = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    }
  }

}
