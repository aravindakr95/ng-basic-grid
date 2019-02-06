import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ExampleData } from '../model/example-data.model';

@Injectable()
export class MainService {
  private static url = 'http://localhost:8080/data';

  constructor(private http: HttpClient) {
  }

  public getApiData(): Observable<ExampleData[]> {
    return this.http.get<ExampleData[]>(MainService.url);
  }

  public getFilterApiData(filterValue: string): Observable<ExampleData[]> {
    const params = new HttpParams().set('filter', filterValue);

    return this.http.get<ExampleData[]>(MainService.url, { params });
  }
}
