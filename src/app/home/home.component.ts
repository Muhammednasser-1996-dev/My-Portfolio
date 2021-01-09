import { Component, OnInit } from '@angular/core';
import Typed  from 'typed.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
;
  constructor() { }

  ngOnInit() {
   let options = {
      strings: ['Developer', 'Designer'],
      typeSpeed : 80,
      backSpeed : 80,
      loop : true
    };
    
    let typed = new Typed('.type', options)
  }

}
