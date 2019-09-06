import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-home></app-home>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-header></app-header>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
