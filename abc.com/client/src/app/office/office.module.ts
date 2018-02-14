import { NgModule } from '@angular/core';
import { OfficeComponent } from './office.component';
import {OfficeService} from './office.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NewOfficeModule} from './new-office/new-office.module';
import {Offices} from './offices';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [
    OfficeComponent
  ],
  exports : [OfficeComponent],
  providers: [Offices,
              OfficeService
              ],
  bootstrap: []
})
export class OfficeModule { }
