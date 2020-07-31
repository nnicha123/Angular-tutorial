import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  // templateUrl: './binding.component.html',
  template: `
    <input [id]="myId" type="text" value="{{ name }}" />
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="{{ name }}"
    />
    <h2 class="text-success">Text success</h2>
    <h2 [class]="successClass">Text success</h2>

    <h2 class="text-danger">Text danger</h2>
    <h2 [class]="specialClass">Text special</h2>
    <h2 [class.text-danger]="hasDanger">Text danger</h2>

    <h2 [ngClass]="messageClasses">Test text</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class BindingComponent implements OnInit {
  public name = 'Niccha';
  public myId = 'testId';
  public isDisabled = false;
  public successClass = 'text-success';
  public specialClass = 'text-special';
  public hasDanger = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasDanger,
    'text-danger': this.hasDanger,
    'text-special': this.isSpecial,
  };
  constructor() {}

  ngOnInit(): void {}
}
