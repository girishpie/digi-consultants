import { NgModule } from '@angular/core';
import { OfficeComponent } from './office.component'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
  ],
  exports : [OfficeComponent],
  providers: [],
  bootstrap: []
})
export class  OfficeModule { }
