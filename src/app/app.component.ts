import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <section class="boot">
    <router-outlet></router-outlet>
  </section>`,
  styles: [
    `
      @import '/src/assets/scss/_vars.scss';
      section.boot {
        background-color: black;
        border-radius: 8px;
        border: 6px solid #979797;
        overflow-y: auto;
        margin: 25px auto;
        padding: $boot_padding;
        width: 720px;
        height: 1080px;
      }
    `,
  ],
})
export class AppComponent {}
