import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import {ProjectService} from './project.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewProjectModule} from './new/new-project.module';
import {Projects} from './projects';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from "ngx-tooltip";
import {PhaseModule} from '../phase/phase.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewProjectModule,
    Ng2SearchPipeModule,
    FormsModule,
    TooltipModule,
    PhaseModule
  ],
  declarations: [
    ProjectComponent
  ],
  exports : [ProjectComponent],
  providers: [Projects,
              ProjectService
              ],
  bootstrap: []
})
export class  ProjectModule { }
