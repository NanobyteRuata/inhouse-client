import { Injectable } from '@angular/core';
import { TestApi } from './test-api';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor() {}

  login(username: string, password: string) {
    return TestApi.login(username, password);
  }
}
