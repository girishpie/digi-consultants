import { NgModule } from '@angular/core';
import { SectionComponent } from './section.component';
import {SectionService} from './section.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewSectionModule} from './new/new-section.module';
import {Sections} from './sections';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewSectionModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports : [SectionComponent],
  providers: [Sections,
              SectionService
              ],
  bootstrap: []
})
export class  SectionModule { }
