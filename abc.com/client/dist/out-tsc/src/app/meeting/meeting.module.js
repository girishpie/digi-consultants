"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meeting_component_1 = require("./meeting.component");
var meeting_service_1 = require("./meeting.service");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var meetings_1 = require("./meetings");
var ngx_pagination_1 = require("ngx-pagination");
var new_meeting_module_1 = require("./new/new-meeting.module");
var ng2_search_filter_1 = require("ng2-search-filter");
var forms_1 = require("@angular/forms");
var MeetingModule = (function () {
    function MeetingModule() {
    }
    return MeetingModule;
}());
MeetingModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_pagination_1.NgxPaginationModule,
            new_meeting_module_1.NewMeetingModule,
            ng2_search_filter_1.Ng2SearchPipeModule,
            forms_1.FormsModule
        ],
        declarations: [
            meeting_component_1.MeetingComponent
        ],
        exports: [meeting_component_1.MeetingComponent],
        providers: [meeting_service_1.MeetingService,
            meetings_1.Meetings
        ],
        bootstrap: []
    })
], MeetingModule);
exports.MeetingModule = MeetingModule;
//# sourceMappingURL=meeting.module.js.map