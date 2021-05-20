import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {}

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('Unable to get permission to notify. ', err);
      }
    );
  }

  recieveMessage() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      console.log('new message recieved. ', payload);
      this.currentMessage.next(payload);
    });
  }
}
