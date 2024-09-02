import { Routes } from '@angular/router';

import { PageLoginComponent } from './modules/core/presentation/pages/page-login/page-login.component';
import { PageDashboardComponent } from './modules/dashboard/presentation/pages/page-dashboard/page-dashboard.component';

export const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: '**', redirectTo: '' },
];
