import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  template: `
    <input type="text" [(ngModel)]="name" />
    {{ name }}

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
  `,
  styleUrls: ['./twoway-binding.component.css'],
})
export class TwowayBindingComponent implements OnInit {
  public name = '';
  displayName = false;
  constructor() {}

  ngOnInit(): void {}
}
