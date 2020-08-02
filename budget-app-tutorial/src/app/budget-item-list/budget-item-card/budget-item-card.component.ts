import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  // type to be any because parent component already knows what item to delete because they are passing the item to this component
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}
  onXButtonClick() {
    // want to emit event
    console.log('x button clicked');
    this.xButtonClick.emit();
  }
  onCardClick() {
    this.cardClick.emit();
  }
}
