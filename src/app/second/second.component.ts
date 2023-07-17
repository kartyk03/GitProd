import { Component } from '@angular/core';
import { ShapeService } from '../shape.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
shape:any='';
color:any='';
shapeClass:any=''

constructor(private shapeService:ShapeService){}

ngOnInit():void{
}

drawShape(){
  this.shapeClass = this.shapeService.getClassName(this.shape,this.color);
}
}
