import { Routes } from '@angular/router';

import { PageLoginComponent } from './modules/core/presentation/pages/page-login/page-login.component';
import { PageCourseComponent } from './modules/course/presentation/pages/page-course/page-course.component';
import { PageDashboardComponent } from './modules/dashboard/presentation/pages/page-dashboard/page-dashboard.component';
import { PageScheduleComponent } from './modules/schedule/presentation/pages/page-schedule/page-schedule.component';
import { PageUserComponent } from './modules/user/presentation/pages/page-user/page-user.component';

export const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'course', component: PageCourseComponent },
  { path: 'schedule', component: PageScheduleComponent },
  { path: 'user', component: PageUserComponent },
  { path: '**', redirectTo: '' },
];
