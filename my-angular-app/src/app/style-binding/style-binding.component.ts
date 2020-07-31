import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <h2>Welcome {{ name }}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">See hasError param</h2>
    <h2 [style.color]="highlightColor">Style Binding</h2>
    <h2 [ngStyle]="titleStyles">Style Binding</h2>
  `,
  styleUrls: ['./style-binding.component.css'],
})
export class StyleBindingComponent implements OnInit {
  public name = 'Nicha';
  public hasError = true;
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  constructor() {}

  ngOnInit(): void {}
}
