import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <h2>Hello {{ name }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  fireEvent(): void {
    console.log('event fired');
    this.childEvent.emit('Hey there from child');
  }
}
