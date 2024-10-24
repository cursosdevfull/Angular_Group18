import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt from 'jwt-decode';

import { Auth } from '../../domain/auth';
import { AuthRegister } from '../../domain/auth-register';
import {
  AuthDto,
  AuthLoginResponse,
  AuthRegisterResponse,
  ResultRegisterDataResponse,
  Tokens,
} from './dto/auth-login.response';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  loginResult = signal<Tokens | undefined>(undefined);
  loginVerify2FA = signal<Tokens | undefined>(undefined);
  registerResult = signal<ResultRegisterDataResponse | undefined>(undefined);
  activateResult = signal<boolean | undefined>(undefined);

  login(auth: Auth) {
    this.http
      .post<AuthLoginResponse>(
        'https://backend-cursos-dev.h7dtvegsb89r2.us-east-1.cs.amazonlightsail.com/v1/auth/login',
        auth.properties
      )
      .subscribe((response) => {
        this.loginResult.update(() => AuthDto.fromDataToTokens(response));
      });
  }

  verifyToken(token: string) {
    const accessToken = sessionStorage.getItem('accessToken');
    this.http
      .post<AuthLoginResponse>(
        'https://backend-cursos-dev.h7dtvegsb89r2.us-east-1.cs.amazonlightsail.com/v1/auth/verify-2fa',
        { token }
      )
      .subscribe((response) => {
        this.loginVerify2FA.update(() => AuthDto.fromDataToTokens(response));
      });
  }

  register(auth: AuthRegister) {
    this.http
      .post<AuthRegisterResponse>(
        'https://backend-cursos-dev.h7dtvegsb89r2.us-east-1.cs.amazonlightsail.com/v1/auth/register',
        { ...auth.properties, roles: [{ roleId: auth.properties.roleId }] }
      )
      .subscribe((response) => {
        this.registerResult.update(() =>
          AuthDto.fromDataToInfoRegister(response)
        );
      });
  }

  active2FA(token: string, secret: string) {
    const accessToken = sessionStorage.getItem('accessToken');
    this.http
      .post<AuthLoginResponse>(
        'https://backend-cursos-dev.h7dtvegsb89r2.us-east-1.cs.amazonlightsail.com/v1/auth/enable-2fa',
        { token, secret }
      )
      .subscribe(() => {
        this.activateResult.update(() => true);
      });
  }

  getQR() {
    return this.registerResult()?.qrCode;
  }

  getSecret() {
    return this.registerResult()?.secret;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  isUserLogged() {
    return !!sessionStorage.getItem('accessToken');
  }

  getPayload() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      return jwt.jwtDecode(accessToken);
    }

    return null;
  }
}
