import { Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  // có 2 cách chèn Input
  // @Input() public parentData: any => {{parentData}}
  @Input("parentData") public data: any // => {{data}}
  @Output() public childEvent = new EventEmitter();
  display = true;

  products = [
    {productName:"Heineken",
    price: 10000}
    ,
    {productName:"SaiGon",
    price: 20000}
    ,
    {productName: "Beer333",
    price: 30000}
    ]
  changeView(){
    // if (this.display)(
    //   this.display = false;
    // )else(
    //   this.display = true;
    // )
    this.display = !this.display
  }
  sendData(){
    let productInfo = {
      name: "tiger",
      price: 10000
    }

    // send productInfo to App-Component
    this.childEvent.emit(productInfo)
  }
}
