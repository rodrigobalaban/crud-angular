import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator {
  @Input("valorMinimo") valorMinimo = 0;

  constructor() {}

  validate(control: FormControl): ValidationErrors | null {
    let value: number = +control.value;

    if (isNaN(value)) {
      return { 'minimo': true, 'requiredValue': this.valorMinimo }
    }

    if (value < +this.valorMinimo) {
      return { 'minimo': true, 'requiredValue': this.valorMinimo }
    }

    return null;
  }
}
