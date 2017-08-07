import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <top-nav></top-nav>
    <router-outlet></router-outlet>
        <top-nav></top-nav>
    <footer-component></footer-component>
  `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}
