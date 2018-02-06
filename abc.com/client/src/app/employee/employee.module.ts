import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import {EmployeeService} from './employee.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NewEmployeeModule} from './new/new-employee.module';
import {Employees} from './employees';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    //RouterModule,
    NgxPaginationModule,
    //NewEmployeeModule
    Ng2SearchPipeModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [
    EmployeeComponent
  ],
  exports : [EmployeeComponent],
  providers: [Employees,
              EmployeeService
              ],
  bootstrap: []
})
export class EmployeeModule { }
