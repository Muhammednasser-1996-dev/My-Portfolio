import { Component, OnInit } from '@angular/core';
import { skillsAnimation } from './../animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[skillsAnimation]

})
export class SkillsComponent implements OnInit {

 isAnimated:boolean;

  constructor() { 

    this.isAnimated=true;
  }

  ngOnInit(): void {
  }

}
