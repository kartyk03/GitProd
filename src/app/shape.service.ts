import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  get(shape: any, color: any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getClassName(shape:any, color:any){
    return shape + '-' + color;
  }
}
