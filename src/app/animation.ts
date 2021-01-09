import { trigger, style, state, transition, animate } from '@angular/animations';

export const skillsAnimation = trigger('animate',[
  transition('void <=> *',[
    style({width:'0%'}),
    animate('700ms', style({width:'80%'})),
  ]),
]);
