import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  template: `
    <h2>Welcome {{ name }}</h2>
    <input #message type="text" />
    <button (click)="onClick(message.value)">Log</button>
    <p>{{ message.value }}</p>
  `,
  styleUrls: ['./template-reference.component.css'],
})
export class TemplateReferenceComponent implements OnInit {
  constructor() {}
  public name = 'Nicha';
  ngOnInit(): void {}
  onClick(value): void {
    console.log(value);
  }
}
