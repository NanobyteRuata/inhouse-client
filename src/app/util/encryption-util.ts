import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';
import { ENCRYPTION_SECRET_KEY } from '../constants/secret-keys';

export class EncryptionUtil {
  static encryptData(data: any) {
    return data;
    // try {
    //   return CryptoJS.AES.encrypt(
    //     JSON.stringify(data),
    //     ENCRYPTION_SECRET_KEY
    //   ).toString();
    // } catch (e) {
    //   console.error(e);
    //   return null;
    // }
  }

  static decryptData(data: string) {
    return JSON.parse(data);
    // try {
    //   const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_SECRET_KEY);
    //   if (bytes.toString()) {
    //     return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //   }
    //   return data;
    // } catch (e) {
    //   console.error(e);
    //   return null;
    // }
  }
}
