import { NgModule } from '@angular/core';
import { CompanyComponent } from './company.component';
import {CompanyService} from './company.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewCompanyModule} from './new/new-company.module';
import {Companies} from './companies';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
//import {CompanyListModule} from '../companylist/compnylist.module';
import {EmployeeModule} from '../employee/employee.module';
import {OfficeModule} from '../office/office.module';
// import {NewOfficeModule} from '../office/new-office/new-office.module';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewCompanyModule,
    Ng2SearchPipeModule,
    FormsModule,
   // CompanyListModule,
    EmployeeModule,
    OfficeModule,
    // NewOfficeModule,
    TooltipModule
  ],
  exports : [CompanyComponent],
  providers: [Companies,
              CompanyService
              ],
  bootstrap: []
})
export class  CompanyModule { }
