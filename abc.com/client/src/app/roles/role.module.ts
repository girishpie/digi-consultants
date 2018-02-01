import {RoleComponent} from './role.component';
import {RoleService} from "./role.service";
import {NewRoleModule} from "../roles/new/new-role.module";
import {NgxPaginationModule} from "ngx-pagination/dist/ngx-pagination";
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Roles} from "./roles";
import {RoleHelper} from "./role-helper";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    NgxPaginationModule,
    NewRoleModule,
    Ng2SearchPipeModule
  ],
  exports : [RoleComponent],
  providers: [
    RoleService,
    Roles,
    RoleHelper
  ],
  bootstrap: []
})
export class  RoleModule { }
