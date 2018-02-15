import { NgModule } from '@angular/core';
import {NewSpecificationComponent} from './new-specification.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SectionModule } from '../../section/section.module';
import { SearchModule } from '../../search/search.module';

@NgModule({
  declarations: [
    NewSpecificationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    SectionModule
  ],
  exports : [NewSpecificationComponent],
  providers: [],
  bootstrap: []
})
export class  NewSpecificationModule { }

