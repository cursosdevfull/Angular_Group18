import { Component, ElementRef, signal, ViewChild } from '@angular/core';
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

import { CapsLockDirective } from '../../../../../../../../app-cdev-lib/src/lib/directives/caps-lock.directive';
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
    CapsLockDirective,
  ],
  providers: [ValidatorsEmailService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('email') inputEmail!: ElementRef<HTMLInputElement>;
  fg!: FormGroup;
  stateCapsLock = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private validatorsEmailService: ValidatorsEmailService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.fg = this.fb.group({
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
    });
  }

  auth() {
    this.fg.markAllAsTouched();
    this.router.navigate(['dashboard']);
  }

  capsLock(event: boolean) {
    this.stateCapsLock.set(event);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputEmail.nativeElement.focus();
    }, 0);
  }
}
