import { NgModule } from '@angular/core';
import { DocumentComponent } from './document.component';
import {DocumentService} from './document.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewDocumentModule} from './new/new-file.module';
import {Documents} from './documents';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewDocumentModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports : [DocumentComponent],
  providers: [Documents,
              DocumentService
              ],
  bootstrap: []
})
export class  DocumentModule { }
