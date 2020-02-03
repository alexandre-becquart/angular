import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[format]'
})
export class InputFormatDirective {

  @Input('format') format;

  constructor(private el: ElementRef) { } // ElementRef  = référence à un élément Dervice déjà défini dans Angular qui permet d'avoir accès à un élément du DOM.

  @HostListener('blur') onBlur() {
    console.log('onblur');

    let valeur: string = this.el.nativeElement.value
    if (this.format == "lowercase") {
      this.el.nativeElement.value = valeur.toLowerCase()
    } else if (this.format == "uppercase") {
      this.el.nativeElement.value = valeur.toUpperCase()
    } else {
      this.el.nativeElement.value = "Le format choisi n'es pas bon , retapez votre texte !"
    }
  } // blur - l'inverse du focus

}
