import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NewRequestComponent}  from '../new/new-request.component';
import { FormsModule } from '@angular/forms';
import {ProjectModule} from '../../project/project.module';


 @NgModule({
  declarations: [
    NewRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    ProjectModule
    
  ],
  exports : [NewRequestComponent],
  providers: [],
  bootstrap: []
})
export class  NewRequestModule { }
