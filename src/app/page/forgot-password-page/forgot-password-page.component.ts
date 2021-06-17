import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Response } from 'src/app/model/response-model';
import { AuthApiService } from 'src/app/service/auth-api.service';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent implements OnInit {
  current = 0;

  email: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  isLoading: boolean = false;

  constructor(
    private authApiService: AuthApiService,
    private message: NzMessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    this.isLoading = true;
    switch (this.current) {
      case 0: {
        if (!this.isEmailValid) return;
        this.authApiService.forgetPassword(this.email).subscribe(
          (response: Response) => {
            if (response.success) {
              this.current += 1;
              this.code = '';
              this.message.create('success', response.message);
            } else {
              this.showErrorMessageFromApi(response);
            }
            this.isLoading = false;
          },
          (error) => this.showErrorMessageFromApi(error),
        );
        break;
      }
      case 1: {
        if (!this.isEmailValid) return;
        if (!this.isCodeValid) return;
        this.authApiService
          .validateVerfifcationCode(this.email, this.code)
          .subscribe(
            (response: Response) => {
              if (response.success) {
                this.current += 1;
                this.newPassword = '';
                this.confirmPassword = '';
                this.message.create('success', response.message);
              } else {
                this.showErrorMessageFromApi(response);
              }
              this.isLoading = false;
            },
            (error) => {
              console.log(error);
              this.showErrorMessageFromApi(error);
            },
          );
        break;
      }
      case 2: {
        if (!this.isEmailValid) return;
        if (!this.isCodeValid) return;
        if (!this.isPasswordsValid) return;
        this.authApiService
          .resetPassword(this.email, this.code, this.newPassword)
          .subscribe(
            (response: Response) => {
              if (response.success) {
                this.current += 1;
                this.newPassword = '';
                this.confirmPassword = '';
                this.message.create('success', response.message);
                this.router.navigateByUrl('/login');
              } else {
                this.showErrorMessageFromApi(response);
              }
              this.isLoading = false;
            },
            (error) => this.showErrorMessageFromApi(error),
          );
        break;
      }
      default: {
      }
    }
  }

  showErrorMessageFromApi(error: any) {
    this.message.create(
      'error',
      error.error && error.error.message
        ? error.error.message
        : error.message
        ? error.message
        : error,
    );
    this.isLoading = false;
  }

  isEmailValid(): boolean {
    if (this.email.length < 1) {
      this.message.create('error', 'Please enter your email!');
      return false;
    }
    let emailRegExp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (!emailRegExp.test(this.email)) {
      this.message.create('error', 'Email is invalid!');
      return false;
    }
    return true;
  }

  isCodeValid(): boolean {
    if (this.code.length < 1) {
      this.message.create('error', 'Please enter the code!');
      return false;
    }
    if (this.code.length != 6) {
      this.message.create('error', 'Invalid code!');
      return false;
    }
    return true;
  }

  isPasswordsValid(): boolean {
    if (this.newPassword.length < 1) {
      this.message.create('error', 'Please enter new password!');
      return false;
    }
    if (this.confirmPassword != this.newPassword) {
      this.message.create('error', "Passwords don't match!");
      return false;
    }
    return true;
  }
}
