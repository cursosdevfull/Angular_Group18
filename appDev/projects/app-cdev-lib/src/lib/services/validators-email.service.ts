import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable()
export class ValidatorsEmailService {
  constructor() {}

  includeOnlyCompanyEmails(...companyDomains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control || !control.value) return null;

      const email = control.value as string;
      const domain = email.split('@')[1].toLowerCase();
      if (
        !companyDomains.some((cd) => cd.toLowerCase() === domain.toLowerCase())
      ) {
        return { notEmailCompany: true };
      }

      return null;
    };
  }

  excludeEmailsFree(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;

    const email = control.value as string;
    if (email.match(/@(gmail|outlook|yahoo)\.com$/i)) {
      return { emailFree: true };
    }

    return null;
  }

  checkPasswords(controlName1: string, controlName2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control || !control.get(controlName1) || !control.get(controlName2))
        return null;

      const valueControl1 = control.get(controlName1)?.value;
      const valueControl2 = control.get(controlName2)?.value;

      if (valueControl1 !== valueControl2) {
        return { notMatch: true };
      }
      return null;
    };
  }
}
