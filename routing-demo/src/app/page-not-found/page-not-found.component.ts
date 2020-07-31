import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h3>
      {{ message | titlecase }}
    </h3>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  public message = 'page not found';
  constructor() {}

  ngOnInit(): void {}
}
