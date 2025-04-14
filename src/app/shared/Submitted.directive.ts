import { Directive,ElementRef } from '@angular/core';
@Directive({
  selector: '[appSubmitted]'
})
export class SubmittedDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.border = '1px solid lightgray';
    el.nativeElement.style.color = '#000000'; // Чёрный текст
    el.nativeElement.style.backgroundColor = '#008000'; // Тёмно-зелёный фон (Green)
    el.nativeElement.style.padding = '10px 15px';
    el.nativeElement.style.borderRadius = '5px';
     }

}

