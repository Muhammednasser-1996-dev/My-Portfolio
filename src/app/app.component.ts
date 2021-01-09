import { Component } from '@angular/core';
import { toggleFade } from './routing';

let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[toggleFade]
})
export class AppComponent {
  title = 'portfolio';
}



