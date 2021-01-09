import { trigger, style, state, transition, animate } from '@angular/animations';

export const toggleFade = trigger('fade',[
  transition('* <=> *',[
    style({opacity:0,transform: 'translateY(50px)'}),
    animate('700ms', style({opacity:1,transform: 'translateY(0px)'})),
  ]),
]);