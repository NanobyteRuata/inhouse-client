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
}
