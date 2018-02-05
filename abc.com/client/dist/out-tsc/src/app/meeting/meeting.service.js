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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var meeting_1 = require("./meeting");
var meetings_1 = require("./meetings");
var globals_1 = require("../globals/globals");
var MeetingService = (function () {
    function MeetingService(http, meetings, globals) {
        this.http = http;
        this.meetings = meetings;
        this.globals = globals;
        this.meetingUrl = this.globals.getBackendUrl() + 'mom/';
    }
    MeetingService.prototype.getMeetings = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.meetingUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var meetings = new Array();
            for (i = 0; i < response.length; i++) {
                var meeting = new meeting_1.Meeting();
                meeting.setId(response[i].id);
                meeting.setMeetingType(response[i].type);
                meeting.setVenue(response[i].venue);
                meeting.setDate(response[i].date);
                meeting.setMeetingNo(response[i].meetingNo);
                meeting.setCreatedBy(response[i].createdBy);
                meetings.push(meeting);
            }
            _this.meetings.setMeeting(meetings);
            _this.meetings.setTotalItems(res1.totalElements);
            return true;
        });
    };
    MeetingService.prototype.save = function (meeting) {
        var _this = this;
        var endPoint = this.meetingUrl + meeting.getProjectId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, meeting)
            .map(function (res) {
            var res1 = res.json();
            meeting.setId(res1.id);
            _this.meetings.addMeeting(meeting);
            return res1.id;
        });
    };
    MeetingService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.meetingUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.meetings.deleteMeeting(res1.id);
        });
    };
    return MeetingService;
}());
MeetingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, meetings_1.Meetings, globals_1.Globals])
], MeetingService);
exports.MeetingService = MeetingService;
//# sourceMappingURL=meeting.service.js.map