import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Employee } from 'src/app/model/employee-model';
import { Response } from 'src/app/model/response-model';
import { AuthApiService } from 'src/app/service/auth-api.service';
import { EncryptionUtil } from 'src/app/util/encryption-util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private message: NzMessageService,
    private authApiService: AuthApiService,
  ) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;

    // TODO: Implement login with real api
    this.authApiService.login(this.username, this.password).subscribe(
      (response: Response) => {
        if (response.success) {
          console.log(response);
          let encryptedUserDataJsonString = EncryptionUtil.encryptData(
            JSON.stringify(response.result.data as Employee),
          );
          let encryptedToken = EncryptionUtil.encryptData(
            JSON.stringify(response.result.token),
          );
          if (encryptedUserDataJsonString == null || encryptedToken == null) {
            this.message.create(
              'error',
              'Something went wrong encrypting user session. Please contact the developer.',
            );
            return;
          }
          localStorage.setItem('current_employee', encryptedUserDataJsonString);
          localStorage.setItem('auth_token', encryptedToken);
          this.router.navigateByUrl('');
          this.message.create('success', response.message);
        } else {
          this.message.create('error', response.message);
        }
        this.isLoading = false;
      },
      (err) => {
        this.message.create('error', err.error.message);
        this.isLoading = false;
      },
    );
  }

  onPasswordKeydown(event: any) {
    if (event.key && event.key == 'Enter') this.login();
  }
}
