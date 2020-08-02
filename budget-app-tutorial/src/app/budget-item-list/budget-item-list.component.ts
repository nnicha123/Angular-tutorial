import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  onDeleteButtonClick(item: BudgetItem) {
    this.delete.emit(item);
  }
  onCardClicked(item: BudgetItem) {
    // show edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
