import { NgModule } from '@angular/core';
import {DepartmentComponent } from './department.component';
import {DepartmentService} from './department.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewDepartmentModule} from './new/new-department.module';
import {Departments} from './departments';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewDepartmentModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports : [DepartmentComponent],
  providers: [Departments,
              DepartmentService
              ],
  bootstrap: []
})
export class DepartmentModule { }
