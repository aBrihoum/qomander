import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class NotoficationService {
  constructor() {}
  notyf = new Notyf({
    position: {
      x: 'center',
      y: 'bottom',
    },
  });
  trigger(console?: boolean) {
    let message = 'This is just a demo, this feature is not implemented';
    if (console) message = 'check the console';
    this.notyf.success({
      message: message,
      dismissible: true,
      duration: 3000,
      icon: false,
    });
  }
}
