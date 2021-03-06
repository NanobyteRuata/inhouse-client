import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from '../constants/api-constants';
import { EncryptionUtil } from '../util/encryption-util';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  getHeaders() {
    let encryptedAuthToken = localStorage.getItem('auth_token');
    let authToken = EncryptionUtil.decryptData(encryptedAuthToken);
    let basicHeaders: any = {
      'Content-Type': 'application/json',
    };
    if (authToken) {
      basicHeaders['Authorization'] = 'Token ' + authToken;
      return basicHeaders;
    } else {
      return basicHeaders;
    }
  }

  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(ApiConstants.BASE_URL + url, {
      headers: this.getHeaders(),
    });
  }

  public post(url: string, body: any) {
    return this.http.post(ApiConstants.BASE_URL + url, body, {
      headers: this.getHeaders(),
    });
  }

  public put(url: string, body: any) {
    return this.http.put(ApiConstants.BASE_URL + url, body, {
      headers: this.getHeaders(),
    });
  }

  public formPut(url: string, body: any) {
    return this.http.put(ApiConstants.BASE_URL + url, body, {
      headers: {
        Authorization:
          'Token ' +
          EncryptionUtil.decryptData(localStorage.getItem('auth_token')),
      },
    });
  }

  public delete(url: string) {
    return this.http.delete(ApiConstants.BASE_URL + url, {
      headers: this.getHeaders(),
    });
  }
}
