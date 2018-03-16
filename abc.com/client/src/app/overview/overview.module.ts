import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TooltipModule } from "ngx-tooltip";
import {OverviewComponent} from '../overview/overview.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    TooltipModule,
    //HttpClientModule
  ],
  exports : [OverviewComponent],
  providers: [],
  bootstrap: []
})
export class  OverviewModule { }
