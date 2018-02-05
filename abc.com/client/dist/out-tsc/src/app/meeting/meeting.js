"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Meeting = (function () {
    function Meeting() {
        this.pplList = new Array();
    }
    Meeting.prototype.setId = function (id) {
        this.id = id;
    };
    Meeting.prototype.getId = function () {
        return this.id;
    };
    Meeting.prototype.setMeetingType = function (type) {
        this.meetingType = type;
    };
    Meeting.prototype.getMeetingType = function () {
        return this.meetingType;
    };
    Meeting.prototype.setVenue = function (venue) {
        this.venue = venue;
    };
    Meeting.prototype.getVenue = function () {
        return this.venue;
    };
    Meeting.prototype.setDate = function (ondate) {
        this.date = ondate;
    };
    Meeting.prototype.getDate = function () {
        return this.date;
    };
    Meeting.prototype.setTitle = function (title) {
        this.title = title;
    };
    Meeting.prototype.getTitle = function () {
        return this.title;
    };
    Meeting.prototype.setObjective = function (objective) {
        this.objective = objective;
    };
    Meeting.prototype.getObjective = function () {
        return this.objective;
    };
    Meeting.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Meeting.prototype.getProjectId = function () {
        return this.projectId;
    };
    Meeting.prototype.setMeetingNo = function (meetingNo) {
        this.meetingNo = meetingNo;
    };
    Meeting.prototype.getMeetingNo = function () {
        return this.meetingNo;
    };
    Meeting.prototype.setCreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Meeting.prototype.getCreatedBy = function () {
        return this.createdBy;
    };
    Meeting.prototype.setPplList = function (employees) {
        this.pplList = employees;
    };
    return Meeting;
}());
exports.Meeting = Meeting;
//# sourceMappingURL=meeting.js.map