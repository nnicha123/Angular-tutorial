import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentItems = ['item1', 'item2', 'item3', 'item4'];
  currentItem = 'Television';
  title = 'test';

  addItem(newItem: string) {
    this.parentItems.push(newItem);
  }
}
