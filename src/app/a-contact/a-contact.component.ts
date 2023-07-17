import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-contact',
  templateUrl: './a-contact.component.html',
  styleUrls: ['./a-contact.component.css']
})
export class AContactComponent {

  myForm: FormGroup |any;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(null,Validators.required),
      pass: new FormControl(null),
      readTerms: new FormControl(false)
    })
  }


  onSubmit() {
  }
}
