import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <section class="boot">
    <router-outlet></router-outlet>
  </section>`,
  styles: [
    `
      section.boot {
        background-color: black;
        border-radius: 8px;
        max-width: 700px;
        width: 100%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #979797;
      }
    `,
  ],
})
export class AppComponent {}
