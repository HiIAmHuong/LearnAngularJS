import { Component } from '@angular/core';
import { DongABankService } from '../dong-a-bank.service';
@Component({
  selector: 'app-dong-a-bank',
  templateUrl: './dong-a-bank.component.html',
  styleUrls: ['./dong-a-bank.component.css']
})
export class DongABankComponent {
  data: any
  errMessage:string =''
  constructor(_service: DongABankService){
    _service.getDongABankData().subscribe(
      {
        next:(data) => {
          this.data = data
        },
        error:(err)=>{
          this.errMessage = err
        }
      }
    )
  }
}
