import { Directive, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header-footer]', // Attribute selector
  host: {
  	'(ionScroll)' : 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {

	@Input("header") header: HTMLElement;
	headerHeight;
	scrollContent;

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello HideHeaderDirective Directive');
  }

  ngOnInit() {
  	this.headerHeight = this.header.clientHeight;
  	this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 300ms');
  	this.scrollContent = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
  	this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
  }

  onContentScroll(event) {
  	if(event.scrollTop > 56) {
	  	this.renderer.setElementStyle(this.header, 'top', '-60px');
	  	this.renderer.setElementStyle('this.scrollContent', 'margin-top', '0px');
  	} else {
	  	this.renderer.setElementStyle(this.header, 'top', '0');  	
	  	this.renderer.setElementStyle('this.scrollContent', 'margin-top', '56px');
  	}

  	 console.log(event);
  }
}
