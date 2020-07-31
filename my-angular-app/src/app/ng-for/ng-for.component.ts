import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2 style="color:{{ color }}">{{ i }} {{ color }}</h2>
    </div>
  `,
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  public colors = ['red', 'blue', 'green', 'yellow'];

  constructor() {}

  ngOnInit(): void {}
}
