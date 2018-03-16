import { NgModule } from '@angular/core';
import { NewDrawingComponent } from './new-drawing.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    NewDrawingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports : [NewDrawingComponent],
  providers: [],
  bootstrap: []
})
export class  NewDrawingModule { }
