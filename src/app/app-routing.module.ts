import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendancePageComponent } from './page/attendance-page/attendance-page.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { EmployeePageComponent } from './page/employee-page/employee-page.component';
import { ForgotPasswordPageComponent } from './page/forgot-password-page/forgot-password-page.component';
import { LeavePageComponent } from './page/leave-page/leave-page.component';
import { LeaveTypePageComponent } from './page/leave-type-page/leave-type-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { OvertimePageComponent } from './page/overtime-page/overtime-page.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        data: { customBreadcrumb: 'Dashboard' },
      },
      { path: 'employee', component: EmployeePageComponent },
      {
        path: 'attendance',
        component: AttendancePageComponent,
      },
      { path: 'overtime', component: OvertimePageComponent },
      {
        path: 'leave',
        children: [
          { path: '', component: LeavePageComponent },
          { path: 'leave-type', component: LeaveTypePageComponent },
        ],
      },
    ],
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'forgot-password', component: ForgotPasswordPageComponent },
    ],
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
