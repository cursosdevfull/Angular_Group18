import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { QRComponent } from './components/qr/qr.component';
import { RegisterComponent } from './components/register/register.component';
import { TokenComponent } from './components/token/token.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'token', component: TokenComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'qr', component: QRComponent },
    ],
  },
];
