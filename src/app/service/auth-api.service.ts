import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private baseApiService: BaseApiService) {}

  login(username: string, password: string) {
    return this.baseApiService.post('auth/login', { username, password });
  }

  forgetPassword(email: string) {
    return this.baseApiService.post('auth/forget-password', { email });
  }

  validateVerfifcationCode(email: string, verificationCode: string) {
    return this.baseApiService.post('auth/validate-vcode', {
      email,
      verification_code: verificationCode,
    });
  }

  resetPassword(email: string, verificationCode: string, newPassword: string) {
    return this.baseApiService.post('auth/reset-password', {
      email,
      verification_code: verificationCode,
      password: newPassword,
    });
  }
}
