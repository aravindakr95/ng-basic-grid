import { Component, OnInit } from '@angular/core';

import { ExampleData } from '../../model/example-data.model';

import { MainService } from '../../service/main.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  public dataSource: ExampleData[] = [];

  constructor(private appService: MainService) {
  }

  public ngOnInit(): void {
    this.onDataBind();
  }

  public onFilterInvoke(key: string) {
    this.onFilterData(key);
  }

  private onDataBind(): void {
    this.appService.getApiData().subscribe((resource: ExampleData[]) => {
      this.dataSource = resource;
    });
  }

  private onFilterData(filterKey: string): void {
    if (filterKey === '') {
      this.onDataBind();
      return;
    }
    this.appService.getFilterApiData(filterKey).subscribe((data: ExampleData[]) => {
      this.dataSource = data;
    });
  }
}
