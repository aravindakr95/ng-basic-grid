import {
  Component,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { debounceTime } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit, OnDestroy {
  public modelValue = '';

  private filterSubject = new Subject();

  private subjectSubscription = new Subscription();

  @Output()
  filterValue = new EventEmitter<string>();

  @Input()
  enableFilteringDebounce = false;

  @Input()
  filteringDebounceTime = 500;

  public ngOnInit(): void {
    this.subjectSubscription = this.filterSubject.pipe(debounceTime(this.filteringDebounceTime)).subscribe(() => {
      this.filterValue.emit(this.modelValue);
    });
  }

  public onKeyPress() {
    if (!this.enableFilteringDebounce) {
      this.filterValue.emit(this.modelValue);
      return;
    }

    this.filterSubject.next();
  }

  public ngOnDestroy(): void {
    if (this.subjectSubscription) {
      this.subjectSubscription.unsubscribe();
    }
  }
}
