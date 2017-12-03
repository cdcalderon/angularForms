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
}
