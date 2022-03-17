import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appSecchangecolor]'
})
export class SecchangecolorDirective {

  constructor(private secEl: ElementRef) { 
    this.secEl.nativeElement.style.color = 'white'
    this.secEl.nativeElement.style.backgroundColor = 'red'
    this.secEl.nativeElement.style.border = 'none'    
  }

}
