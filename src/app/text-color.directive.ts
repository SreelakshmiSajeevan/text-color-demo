import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextColor]'  // This is the directive's selector
})
export class TextColorDirective implements OnInit {

  @Input('appTextColor') textColor: string = '';  // Input property for the color

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor);
  }
}
