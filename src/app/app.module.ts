import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MainService } from './main/service/main.service';

import { AppComponent } from './app.component';
import { DataTableComponent } from './main/components/data-table/data-table.component';
import { TableFilterComponent } from './main/components/data-table/table-filter/table-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    TableFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
