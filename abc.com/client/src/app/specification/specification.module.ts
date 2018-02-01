import { NgModule } from '@angular/core';
import { SpecificationComponent } from './specification.component';
import {Specification} from './specification';
import {Specifications} from './specifications';
import { SpecificationService} from './specification.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewSpecificationModule} from './new/new-specification.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { TooltipModule } from "ngx-tooltip";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpecificationComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewSpecificationModule,
    TooltipModule,
    Ng2SearchPipeModule,
    FormsModule

  ],
  exports : [SpecificationComponent],
  providers: [
    Specifications,
              SpecificationService
              ],
  bootstrap: []
})
export class  SpecificationModule { }
