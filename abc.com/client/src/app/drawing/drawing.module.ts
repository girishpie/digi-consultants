import { NgModule } from '@angular/core';
import { DrawingComponent } from './drawing.component';
import {DrawingService} from './drawing.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewDrawingModule} from './new/new-drawing.module';
import {Drawings} from './drawings';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  declarations: [
    DrawingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewDrawingModule,
    Ng2SearchPipeModule,
    FormsModule,
    TooltipModule
  ],
  exports : [DrawingComponent],
  providers: [Drawings,
    DrawingService
              ],
  bootstrap: []
})
export class  DrawingModule { }
