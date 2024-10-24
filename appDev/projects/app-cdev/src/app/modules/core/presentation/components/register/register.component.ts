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

import { AuthRegister } from '../../../../auth/domain/auth-register';
import { AuthService } from '../../../../auth/infrastructure/services/auth.service';

@Component({
  selector: 'cdev-register',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  fg!: FormGroup;
  authService = inject(AuthService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();

    effect(() => {
      const registerResult = this.authService.registerResult();
      console.log(registerResult);
      if (registerResult) {
        const { accessToken, refreshToken } = registerResult.tokens;
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        this.router.navigate(['/auth', 'qr']);
      }
    });
  }

  createForm() {
    this.fg = this.fb.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [null, [Validators.required]],
    });
  }

  register() {
    this.fg.markAllAsTouched();

    const { name, lastname, email, password } = this.fg.value;
    const roleId = 'd18d0d20-d686-4520-a33c-e5e7653382bc';
    const auth: AuthRegister = new AuthRegister(
      name,
      lastname,
      email,
      password,
      roleId
    );
    this.authService.register(auth);
  }
}
