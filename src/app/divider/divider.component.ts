import { Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  isClearDisabled = true;
  chosenNum:number=1;
  numbers:number[]=[
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20];
 
 divi(divisibleBy:number){
  this.chosenNum = divisibleBy;
  if(divisibleBy===1){
    this.isClearDisabled = true;
  }else{
    this.isClearDisabled = false;
  }
}
}
