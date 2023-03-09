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
  trigger() {
    this.notyf.success({
      message: 'This is just a demo, this feature not implemented',
      dismissible: true,
      duration: 3500,
      icon: false,
    });
  }
}
