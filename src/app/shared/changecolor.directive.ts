import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'white'
    this.el.nativeElement.style.backgroundColor = 'rgb(165, 55, 253)	'
    this.el.nativeElement.style.border = 'none'    
  }
}
