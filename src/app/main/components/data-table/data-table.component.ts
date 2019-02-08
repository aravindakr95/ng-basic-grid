import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ExampleData } from '../../model/example-data.model';

import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {

  public serviceSubscription: Subscription;

  public dataSource: ExampleData[] = [];

  constructor(private mainService: MainService) {
  }

  public ngOnInit(): void {
    this.onFilterData();
  }

  public onFilterInvoke(key: string): void {
    this.onFilterData(key);
  }

  private onFilterData(filterKey: string = ''): void {
    this.serviceSubscription = this.mainService.getFilterApiData(filterKey).subscribe((data: ExampleData[]) => {
      this.dataSource = data;
    });
  }

  public ngOnDestroy(): void {
    if (this.serviceSubscription) {
      this.serviceSubscription.unsubscribe();
    }
  }
}
