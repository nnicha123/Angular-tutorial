import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>Welcome {{ name }}</h2>
    <button (click)="onClick($event)">See event</button>
    <button (click)="greeting = 'Welcome ' + name">Greet</button>
    <h2>{{ greeting }}</h2>
  `,
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  public name = 'Nicha';
  public greeting = '';
  constructor() {}

  ngOnInit(): void {}
  onClick(event): void {
    console.log(event);
    this.greeting = event.type;
  }
}
