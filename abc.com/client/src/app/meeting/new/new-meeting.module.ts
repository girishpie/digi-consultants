import { NgModule } from '@angular/core';
import { NewMeetingComponent } from './new-meeting.component';
import { MeetingComponent } from '../meeting.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule} from '@uirouter/angular';
import {ProjectModule} from '../../project/project.module'
import {EmployeeModule} from '../../employee/employee.module'

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ProjectModule,
    EmployeeModule
    ],
  declarations: [
    NewMeetingComponent
  ],
  exports : [NewMeetingComponent],
  providers: [],
  bootstrap: []
})
export class  NewMeetingModule { }
