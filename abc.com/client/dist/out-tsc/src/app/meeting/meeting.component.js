"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var meeting_service_1 = require("./meeting.service");
var meetings_1 = require("./meetings");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var MeetingComponent = (function () {
    function MeetingComponent(meetingService, meetings, queryParamsService) {
        this.meetingService = meetingService;
        this.meetings = meetings;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getMeetings(null);
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getMeetings(queryParam);
        });
    };
    MeetingComponent.prototype.getMeetings = function (queryParams) {
        this.meetingService.getMeetings(queryParams).subscribe(function (data) {
        }, function (error) {
            console.log(error._body.toString() + ' No Meeting are available');
        });
    };
    MeetingComponent.prototype.deleteMeeting = function (meeting) {
        this.meetingService.delete(meeting.getId()).subscribe(function (data) {
        });
    };
    MeetingComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    MeetingComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return MeetingComponent;
}());
MeetingComponent = __decorate([
    core_1.Component({
        selector: 'meeting',
        templateUrl: './meeting.component.html',
        styleUrls: ['./meeting.component.scss']
    }),
    __metadata("design:paramtypes", [meeting_service_1.MeetingService,
        meetings_1.Meetings,
        query_params_service_1.QueryParamsService])
], MeetingComponent);
exports.MeetingComponent = MeetingComponent;
//# sourceMappingURL=meeting.component.js.map