import { NgModule } from '@angular/core';
import { MeetingComponent } from './meeting.component';
import { MeetingService} from './meeting.service';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { Meetings} from './meetings';
import { Meeting} from './meeting';
import { NgxPaginationModule} from 'ngx-pagination';
import { NewMeetingModule} from './new/new-meeting.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewMeetingModule,
    Ng2SearchPipeModule,
    FormsModule,
    TooltipModule
  ],
  declarations: [
    MeetingComponent
  ],
  exports : [MeetingComponent],
  providers: [ MeetingService,
              Meetings
              ],
  bootstrap: []
})
export class  MeetingModule { }
