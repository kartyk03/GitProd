import { Component } from '@angular/core';
import { ShapeService } from './../shape.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
 shape:any='';
 color:any='';
 shapeClass:any='';

 constructor(private shapeService:ShapeService){}

 ngOnIt():void{}

 drawShape(){
  this.shapeClass = this.shapeService.getClassName(this.shape,this.color);
 }
}
