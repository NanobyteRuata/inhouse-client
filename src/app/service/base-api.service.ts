import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncryptionUtil } from '../util/encryption-util';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  authToken: string | null;

  get headers() {
    let basicHeaders: any = {
      'Content-Type': 'application/json',
    };
    if (this.authToken) {
      basicHeaders['Authorization'] = 'Bearer ' + this.authToken;
      return basicHeaders;
    } else {
      return basicHeaders;
    }
  }

  constructor(private http: HttpClient) {
    let encryptedAuthToken = localStorage.getItem('auth_token');
    this.authToken = EncryptionUtil.decryptData(
      encryptedAuthToken != null ? encryptedAuthToken : ''
    );
  }

  public get(url: string) {
    return this.http.get(url, { headers: this.headers });
  }
}
