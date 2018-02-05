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
var meeting_1 = require("../meeting");
var meeting_service_1 = require("../meeting.service");
var meeting_component_1 = require("../meeting.component");
var meetings_1 = require("../meetings");
var angular_1 = require("@uirouter/angular");
var project_service_1 = require("../../project/project.service");
var projects_1 = require("../../project/projects");
var meeting_employee_1 = require("../meeting-employee");
var discussion_1 = require("../discussion");
//declare var jQuery:any;
var meetingState = { name: 'meeting', url: '/meeting', component: meeting_component_1.MeetingComponent };
var NewMeetingComponent = (function () {
    function NewMeetingComponent(meetingService, meetings, stateService, projectService, projects) {
        this.meetingService = meetingService;
        this.meetings = meetings;
        this.stateService = stateService;
        this.projectService = projectService;
        this.projects = projects;
        this.employees = new Array();
        this.discussions = new Array();
        //this.router = router;
    }
    NewMeetingComponent.prototype.ngOnInit = function () {
        var discussion = new discussion_1.Discussion();
        discussion.setItem((this.discussions.length) + '.0');
        this.discussions.push(discussion);
        this.getProjects();
    };
    NewMeetingComponent.prototype.addNewMeeting = function () {
        var _this = this;
        var meeting = new meeting_1.Meeting();
        meeting.setTitle(this.tittle);
        meeting.setObjective(this.objective);
        //meeting.setId(this.id);
        meeting.setMeetingType(this.type);
        meeting.setVenue(this.venue);
        meeting.setDate(this.ondate);
        meeting.setProjectId(this.projectId);
        meeting.setPplList(this.employees);
        this.meetingService.save(meeting).subscribe(function (data) {
            console.log(data);
            meeting.setId(data);
            _this.meetings.addMeeting(meeting);
            _this.stateService.go('meeting');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewMeetingComponent.prototype.goBack = function () {
        window.history.back();
    };
    NewMeetingComponent.prototype.getProjects = function () {
        this.projectService.getProjects(null).subscribe(function (data) {
        }, function (error) {
            console.log(error._body.toString() + " No roles found");
        });
    };
    NewMeetingComponent.prototype.onProjectChange = function () {
        var prs = this.projects.getProjects();
        for (var i = 0; i < prs.length; i++) {
            if (prs[i].getId() === this.projectId) {
                var ppl = prs[i].getPplList();
                for (var j = 0; j < ppl.length; j++) {
                    var emp = new meeting_employee_1.MeetingEmployee(ppl[j]);
                    this.employees.push(emp);
                }
            }
        }
    };
    NewMeetingComponent.prototype.onPresent = function (emp) {
        emp.setStatus(0);
    };
    NewMeetingComponent.prototype.onAbsent = function (emp) {
        emp.setStatus(1);
    };
    NewMeetingComponent.prototype.onApologized = function (emp) {
        emp.setStatus(2);
    };
    NewMeetingComponent.prototype.onAddNewDiscussion = function () {
        var discussion = new discussion_1.Discussion();
        var length = this.discussions.length - 1;
        var count = 1;
        for (var i = 0; i < length; i++) {
            if (this.discussions[i].getType() === 0) {
                count++;
            }
        }
        var item = count + '.' + '0';
        discussion.setItem(item);
        this.discussions.push(discussion);
    };
    NewMeetingComponent.prototype.onAddNewSubDiscussion = function (parentDiscussion) {
        var discussion = new discussion_1.Discussion();
        discussion.setParentDiscussion(parentDiscussion);
        var item = parentDiscussion.getItem();
        var tokens = item.split('.');
        var childItem = tokens[0];
        childItem += '.' + parentDiscussion.getNumSubDiscussions();
        discussion.setItem(childItem);
        var i = this.discussions.indexOf(parentDiscussion);
        if (i !== -1) {
            i++;
            for (; i < this.discussions.length; i++) {
                if (this.discussions[i].getType() === 0) {
                    break;
                }
            }
            this.discussions.splice(i, 0, discussion);
        }
    };
    return NewMeetingComponent;
}());
NewMeetingComponent = __decorate([
    core_1.Component({
        selector: 'new-meeting',
        templateUrl: './new-meeting.component.html',
        styleUrls: ['./new-meeting.component.scss']
    }),
    __metadata("design:paramtypes", [meeting_service_1.MeetingService,
        meetings_1.Meetings,
        angular_1.StateService,
        project_service_1.ProjectService,
        projects_1.Projects])
], NewMeetingComponent);
exports.NewMeetingComponent = NewMeetingComponent;
//# sourceMappingURL=new-meeting.component.js.map