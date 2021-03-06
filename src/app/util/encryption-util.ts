import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ENCRYPTION_SECRET_KEY } from '../constants/secret-keys';

export class EncryptionUtil {
  static encryptData(data: any) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        ENCRYPTION_SECRET_KEY
      ).toString();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static decryptData(data: string) {
    try {
      if (data == null) return null;
      const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_SECRET_KEY);
      if (bytes.toString()) {
        return JSON.parse(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
      }
      return JSON.parse(data);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
