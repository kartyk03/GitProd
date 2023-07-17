import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highlightColor='white';
  highlight(color:string){
   this.highlightColor = color;
  }

  isStyleApplied = false;
  toggleStyle(){
    this.isStyleApplied = !this.isStyleApplied;
  }
}
