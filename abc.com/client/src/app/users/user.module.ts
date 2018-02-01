import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {UserService} from './user.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NewUserModule} from './new/new-user.module';
import {RoleService} from '../roles/role.service';
import {Users} from './users';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewUserModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports : [UserComponent],
  providers: [Users,
              UserService,
              RoleService
              ],
  bootstrap: []
})
export class  UserModule { }
