import { NgModule } from '@angular/core';
import { RequestComponent } from './request.component';
import {RequestService} from './request.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewRequestModule} from './new/new-request.module'
import {Requests} from './requests'
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewRequestModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [ RequestComponent],
  exports : [    RequestComponent  ],
  providers: [Requests,
              RequestService
              ],
  bootstrap: []
})
export class  RequestModule { }
