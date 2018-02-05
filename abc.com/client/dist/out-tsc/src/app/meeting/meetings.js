"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Meetings = (function () {
    function Meetings() {
        this.meetings = new Array();
    }
    Meetings.prototype.setMeeting = function (meetings) {
        this.meetings = meetings;
    };
    Meetings.prototype.getMeeting = function () {
        return this.meetings;
    };
    Meetings.prototype.deleteMeeting = function (meetingId) {
        var meetingFound = this.meetings.find(function (meeting) { return meetingId === meeting.getId(); });
        var index = this.meetings.indexOf(meetingFound);
        if (index !== -1) {
            this.meetings.splice(index, 1);
            this.totalItems--;
        }
    };
    Meetings.prototype.addMeeting = function (meeting) {
        this.meetings.push(meeting);
        this.totalItems++;
    };
    Meetings.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Meetings.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Meetings;
}());
Meetings = __decorate([
    core_1.Injectable()
], Meetings);
exports.Meetings = Meetings;
//# sourceMappingURL=meetings.js.map