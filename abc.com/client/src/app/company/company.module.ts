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
    FormsModule

  ],
  exports : [CompanyComponent],
  providers: [Companies,
              CompanyService
              ],
  bootstrap: []
})
export class  CompanyModule { }
