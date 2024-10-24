import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, effect, inject, viewChild } from '@angular/core';
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

import { AuthService } from '../../../../auth/infrastructure/services/auth.service';

@Component({
  selector: 'cdev-token',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css',
})
export class TokenComponent {
  readonly inputToken = viewChild.required<HTMLInputElement>('token');
  fg!: FormGroup;
  authService = inject(AuthService);
  readonly focusMonitor = inject(FocusMonitor);

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();

    effect(() => {
      const tokens = this.authService.loginVerify2FA();
      if (tokens) {
        const { accessToken, refreshToken } = tokens;
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  createForm() {
    this.fg = this.fb.group({
      token: [null, [Validators.required, Validators.pattern(/^[0-9]{6,6}$/)]],
    });
  }

  verify2FA() {
    const { token } = this.fg.value;
    this.authService.verifyToken(token);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.focusMonitor.focusVia(this.inputToken(), 'program');
    }, 0);
  }
}
