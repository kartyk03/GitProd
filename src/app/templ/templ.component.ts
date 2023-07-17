import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templ',
  templateUrl: './templ.component.html',
  styleUrls: ['./templ.component.css']
})
export class TemplComponent {
    vowels: any = [
    { letter: 'a', count: 0 },
    { letter: 'e', count: 0 },
    { letter: 'i', count: 0 },
    { letter: 'o', count: 0 },
    { letter: 'u', count: 0 }
  ]
  
  ngOnInit() {
  }

 
  analyzeWord(word: any) {
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;


    for (let letter of word) {
      if (letter === 'a') {
        aCount++;
      }
      if (letter === 'e') {
        eCount++;
      }
      if (letter === 'i') {
        iCount++;
      }
      if (letter === 'o') {
        oCount++;
      }
      if (letter === 'u') {
        uCount++;
      }
    }

    this.vowels = [
      {letter:'a', count:aCount},
      {letter:'e', count:eCount},
      {letter:'i', count:iCount},
      {letter:'o', count:oCount},
      {letter:'u', count:uCount},
    ]
  }
}

