import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>Hello from test component</h3>
    <h2>My name is {{ name }}</h2>
    <h2>{{ 2 + 3 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h3>{{ name.length }}</h3>
    <h3>{{ name.toUpperCase() }}</h3>
    <h3>{{ greetUser() }}</h3>
    <h3>{{ siteUrl }}</h3>`,
  // templateUrl: './test.component.html',
  styles: [
    `
      h2 {
        color: tomato;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Nichaa';
  public siteUrl = window.location.href;
  constructor() {}

  ngOnInit(): void {}
  greetUser(): string {
    return 'Hello ' + this.name;
  }
}
