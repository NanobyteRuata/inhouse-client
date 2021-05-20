import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceDetailPageComponent } from './page/attendance-detail-page/attendance-detail-page.component';
import { AttendancePageComponent } from './page/attendance-page/attendance-page.component';
import { CheckinCheckoutRequestPageComponent } from './page/checkin-checkout-request-page/checkin-checkout-request-page.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { EmployeePageComponent } from './page/employee-page/employee-page.component';
import { ForgotPasswordPageComponent } from './page/forgot-password-page/forgot-password-page.component';
import { LeavePageComponent } from './page/leave-page/leave-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { OvertimePageComponent } from './page/overtime-page/overtime-page.component';
import { ResetPasswordPageComponent } from './page/reset-password-page/reset-password-page.component';
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
        children: [
          { path: '', component: AttendancePageComponent },
          { path: 'detail', component: AttendanceDetailPageComponent },
        ],
      },
      {
        path: 'checkin-checkout-request',
        component: CheckinCheckoutRequestPageComponent,
      },
      { path: 'overtime', component: OvertimePageComponent },
      { path: 'leave', component: LeavePageComponent },
    ],
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginPageComponent },
      { path: 'forgot-password', component: ForgotPasswordPageComponent },
      { path: 'reset-password', component: ResetPasswordPageComponent },
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
