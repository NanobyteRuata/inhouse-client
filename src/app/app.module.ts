import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconDefinition } from '@ant-design/icons-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

import { NzMessageService } from 'ng-zorro-antd/message';

import { LoginPageComponent } from './page/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './page/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './page/reset-password-page/reset-password-page.component';
import { MainPageComponent } from './page/main-page/main-page.component';
import { EmployeePageComponent } from './page/employee-page/employee-page.component';
import { AttendancePageComponent } from './page/attendance-page/attendance-page.component';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { LeavePageComponent } from './page/leave-page/leave-page.component';
import { OvertimePageComponent } from './page/overtime-page/overtime-page.component';
import { CheckinCheckoutRequestPageComponent } from './page/checkin-checkout-request-page/checkin-checkout-request-page.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';

import {
  EyeInvisibleOutline,
  EyeOutline,
  HomeOutline,
  CheckOutline,
  ContainerOutline,
  TeamOutline,
  UserOutline,
  IdcardOutline,
  ApartmentOutline,
  DeploymentUnitOutline,
  SaveOutline,
  LoadingOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  UserAddOutline,
  DeleteOutline,
  PlusCircleOutline,
  LogoutOutline,
  ClockCircleOutline,
  MinusCircleOutline,
  CalendarOutline,
  PlusOutline,
  EditOutline,
} from '@ant-design/icons-angular/icons';
import { AttendanceDetailPageComponent } from './page/attendance-detail-page/attendance-detail-page.component';
import { EmployeeSearchComponentComponent } from './component/employee-search-component/employee-search-component.component';
import { CustomInputComponentComponent } from './component/custom-input-component/custom-input-component.component';
import { CustomSelectComponentComponent } from './component/custom-select-component/custom-select-component.component';
import { CustomDatePickerComponentComponent } from './component/custom-date-picker-component/custom-date-picker-component.component';
import { EmployeeCardComponentComponent } from './component/employee-card-component/employee-card-component.component';
import { MonthYearSelectComponentComponent } from './component/month-year-select-component/month-year-select-component.component';

const icons: IconDefinition[] = [
  EyeInvisibleOutline,
  EyeOutline,
  HomeOutline,
  CheckOutline,
  ContainerOutline,
  TeamOutline,
  UserOutline,
  IdcardOutline,
  ApartmentOutline,
  DeploymentUnitOutline,
  SaveOutline,
  LoadingOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  UserAddOutline,
  DeleteOutline,
  PlusCircleOutline,
  LogoutOutline,
  ClockCircleOutline,
  MinusCircleOutline,
  CalendarOutline,
  PlusOutline,
  EditOutline,
];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    ResetPasswordPageComponent,
    MainPageComponent,
    EmployeePageComponent,
    AttendancePageComponent,
    DashboardPageComponent,
    LeavePageComponent,
    OvertimePageComponent,
    CheckinCheckoutRequestPageComponent,
    NotFoundPageComponent,
    AttendanceDetailPageComponent,
    EmployeeSearchComponentComponent,
    CustomInputComponentComponent,
    CustomSelectComponentComponent,
    CustomDatePickerComponentComponent,
    EmployeeCardComponentComponent,
    MonthYearSelectComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
    NzInputModule,
    NzIconModule.forRoot(icons),
    NzButtonModule,
    NzMenuModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    NzAlertModule,
    NzModalModule,
    NzTableModule,
    NzCheckboxModule,
    NzTimePickerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
