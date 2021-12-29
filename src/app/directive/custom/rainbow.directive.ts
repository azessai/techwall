import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tableau = [
    'blue',
    'lightblue',
    'coral',
    'pink',
    'green',
    'lightyellow',
    'lightgreen',
    'gold',
    'grey',
    'lightgrey',
    'purple'
  ];
  @HostBinding('style.borderColor') bc = 'red';
  @HostBinding('style.color') color = 'red';
  constructor() {}
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tableau.length - 1));
    this.bc = this.tableau[index];
    this.color = this.tableau[index];
  }
}
