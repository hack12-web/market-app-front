import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <section>
    <router-outlet></router-outlet>
    
  </section>
  `,
  styles: [`

  `],
  providers: []
})
export class AppComponent {
  title = 'simba';
}
