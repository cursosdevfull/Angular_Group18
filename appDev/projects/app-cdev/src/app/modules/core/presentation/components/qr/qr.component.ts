import { Component, effect, inject } from '@angular/core';
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
  selector: 'cdev-qr',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css',
})
export class QRComponent {
  fg!: FormGroup;
  authService = inject(AuthService);
  qr: string;
  secret: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.qr = this.authService.getQR() as string;
    this.secret = this.authService.getSecret() as string;

    this.fg = this.fb.group({
      token: [null, Validators.required],
      secret: [this.secret, Validators.required],
    });

    effect(() => {
      const active2FAResult = this.authService.activateResult();
      if (active2FAResult) {
        sessionStorage.clear();
        this.router.navigate(['/auth']);
      }
    });
  }

  active2FA() {
    this.fg.markAllAsTouched();

    const { token, secret } = this.fg.value;
    this.authService.active2FA(token, secret);
  }
}
