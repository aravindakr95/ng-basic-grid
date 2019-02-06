import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {
  public modelValue = '';

  @Output()
  filterValue = new EventEmitter<string>();

  public onKeyPress() {
    this.filterValue.emit(this.modelValue);
  }
}
