import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

import { ValidatorsEmailService } from '../../../../../../../../app-cdev-lib/src/lib/services/validators-email.service';

@Component({
  selector: 'cdev-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [ValidatorsEmailService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fg!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validatorsEmailService: ValidatorsEmailService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.fg = this.fb.group(
      {
        email: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            ),
            this.validatorsEmailService.excludeEmailsFree,
            this.validatorsEmailService.includeOnlyCompanyEmails(
              'pe.company.com',
              'company.com',
              'mx.company.com'
            ),
          ],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[#?!]).{8,20}$/),
          ],
        ],
        //confirmPassword: [null, Validators.required],
      }
      /* {
        validators: this.validatorsEmailService.checkPasswords(
          'password',
          'confirmPassword'
        ),
      } */
    );
    /*     this.fg = new FormGroup(
      {
        email: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
          this.validatorsEmailService.excludeEmailsFree,
          this.validatorsEmailService.includeOnlyCompanyEmails(
            'pe.company.com',
            'company.com',
            'mx.company.com'
          ),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[#?!]).{8,20}$/),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      },
      {
        validators: this.validatorsEmailService.checkPasswords(
          'password',
          'confirmPassword'
        ),
      }
    ); */
  }

  /*   checkPasswords(controlName1: string, controlName2: string): ValidatorFn {
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
  } */

  /*   checkPasswords(control: AbstractControl): ValidationErrors | null {
    console.log('checkPasswords', control);
    if (!control || !control.get('password') || !control.get('confirmPassword'))
      return null;

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { notMatch: true };
    }
    return null;
  } */

  /*   includeOnlyCompanyEmails(...companyDomains: string[]): ValidatorFn {
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
  } */

  auth() {
    this.fg.markAllAsTouched();
    console.log('auth', this.fg.value);
    console.log(this.fg);
    this.router.navigate(['dashboard']);
  }
}
