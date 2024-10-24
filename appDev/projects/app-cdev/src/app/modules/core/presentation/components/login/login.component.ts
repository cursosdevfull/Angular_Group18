import {
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
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
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
} from 'ng-recaptcha';

import { CapsLockDirective } from '../../../../../../../../app-cdev-lib/src/lib/directives/caps-lock.directive';
import { ValidatorsEmailService } from '../../../../../../../../app-cdev-lib/src/lib/services/validators-email.service';
import { Auth } from '../../../../auth/domain/auth';
import { AuthService } from '../../../../auth/infrastructure/services/auth.service';

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
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    ValidatorsEmailService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6Len6pMpAAAAAHGxLZDXxvPwRLu4W8DjOpdIs13r' },
    },
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('email') inputEmail!: ElementRef<HTMLInputElement>;
  fg!: FormGroup;
  stateCapsLock = signal<boolean>(false);
  authService = inject(AuthService);

  constructor(
    private fb: FormBuilder,
    private validatorsEmailService: ValidatorsEmailService,
    private router: Router
  ) {
    this.createForm();

    effect(() => {
      const tokens = this.authService.loginResult();
      if (tokens) {
        const { accessToken, refreshToken } = tokens;
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        this.router.navigate(['/auth', 'token']);
      }
    });
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
          /*           this.validatorsEmailService.excludeEmailsFree,
          this.validatorsEmailService.includeOnlyCompanyEmails(
            'pe.company.com',
            'company.com',
            'mx.company.com'
          ), */
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          //Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[#?!]).{8,20}$/),
        ],
      ],
      recaptchaCode: [null, Validators.required],
    });
  }

  auth() {
    this.fg.markAllAsTouched();

    const { email, password, recaptchaCode } = this.fg.value;
    const auth: Auth = new Auth(email, password, recaptchaCode);
    this.authService.login(auth);
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
