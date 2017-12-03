import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ReactiveValidators {
  static noCalderon(control: AbstractControl): ValidationErrors | null {
      if ((control.value as string).toLowerCase() === 'calderon') {
        return {
          noCalderon: true
        };
      }
      return null;
    }

  static notEqual(control: AbstractControl, password2: string): ValidationErrors | null {
    if ((control.value as string).toLowerCase() !== password2.toLowerCase() ) {
      return {
        notEqual: true
      };
    }
    return null;
  }
}
