import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { MenuComponent } from './app/components/menu.component';
import { Button } from './app/components/button.component';
import { EntryDataComponent } from './app/components/entry-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, Button, EntryDataComponent],
  styleUrls: ['./index.css'],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <h1>Olá mundão</h1>
    <menu-component></menu-component>
    <my-button></my-button>
    <my-button></my-button>

    <!-->Two Way data binding -->
    <app-entry-data></app-entry-data>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
