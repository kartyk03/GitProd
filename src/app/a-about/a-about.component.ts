import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-a-about',
  templateUrl: './a-about.component.html',
  styleUrls: ['./a-about.component.css']
})
export class AAboutComponent {

  users:any;
  url = "https://api.github.com/users";
  isLoading =false;

  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.isLoading=true;
    this.http.get(this.url).subscribe(res=>{
      console.log('success');
      console.log(res);
      setTimeout(()=>{
        this.isLoading=false
        this.users = res  
      },1000);
      
    }, error=>{
      console.log('Error');
      console.log(error);
    },()=>{
      console.log('Completed');
    } )
  }

  goToGithub(url: any) {
    window.open(url, '_blank');
  }
}
