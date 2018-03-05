import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NewRequestComponent}  from '../new/new-request.component';
import { FormsModule } from '@angular/forms';
import {ProjectModule} from '../../project/project.module';
import {EmployeeModule} from '../../employee/employee.module';


 @NgModule({
  declarations: [
    NewRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    ProjectModule,
    EmployeeModule,

    
  ],
  exports : [NewRequestComponent],
  providers: [],
  bootstrap: []
})
export class  NewRequestModule { }
