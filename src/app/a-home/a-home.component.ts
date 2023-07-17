import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.css']
})
export class AHomeComponent {
  isLoading=false
  constructor(private router:Router){}
 goToProduct(){
  this.isLoading = true
  console.log('trying to to update database');
  setTimeout(()=>{
    this.isLoading = false;
    console.log("database is updated");
    this.router.navigate(['products']);
  },2000)
 }
}
