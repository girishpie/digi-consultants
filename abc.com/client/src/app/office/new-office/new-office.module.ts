import { NgModule } from '@angular/core';
import { NewOfficeComponent } from './new-office.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewOfficeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewOfficeComponent],
  providers: [],
  bootstrap: []
})
export class  NewOfficeModule { }
