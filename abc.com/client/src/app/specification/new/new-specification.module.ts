import { NgModule } from '@angular/core';
import {NewSpecificationComponent} from './new-specification.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NewSpecificationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewSpecificationComponent],
  providers: [],
  bootstrap: []
})
export class  NewSpecificationModule { }

