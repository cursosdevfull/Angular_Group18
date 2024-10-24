import { Routes } from '@angular/router';

import { authenticationGuard } from './modules/core/presentation/guards/authentication.guard';
import { authorizationGuard } from './modules/core/presentation/guards/authorization.guard';
import { PageCourseComponent } from './modules/course/presentation/pages/page-course/page-course.component';
import { PageDashboardComponent } from './modules/dashboard/presentation/pages/page-dashboard/page-dashboard.component';
import { PageScheduleComponent } from './modules/schedule/presentation/pages/page-schedule/page-schedule.component';
import { PageUserComponent } from './modules/user/presentation/pages/page-user/page-user.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/core/presentation/auth.routes').then(
        (m) => m.authRoutes
      ),
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent,
    canActivate: [authenticationGuard, authorizationGuard],
    data: { rolesAllowed: ['ADMIN'] },
  },
  {
    path: 'course',
    component: PageCourseComponent,
    canActivate: [authenticationGuard, authorizationGuard],
    data: { rolesAllowed: ['ADMIN', 'OPERATOR'] },
  },
  {
    path: 'schedule',
    component: PageScheduleComponent,
    canActivate: [authenticationGuard, authorizationGuard],
    data: { rolesAllowed: ['ADMIN'] },
  },
  {
    path: 'user',
    component: PageUserComponent,
    canActivate: [authenticationGuard, authorizationGuard],
    data: { rolesAllowed: ['OPERATOR'] },
  },
  { path: '**', redirectTo: 'auth' },
];
