import { NgModule } from '@angular/core';
import { CompanyListComponent } from './companylist.component'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {OfficeModule} from '../office/office.module';
import {EmployeeModule} from '../employee/employee.module';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    OfficeModule,
    EmployeeModule,
    NgxPaginationModule,
  ],
  exports : [CompanyListComponent],
  providers: [],
  bootstrap: []
})
export class  CompanyListModule { }
