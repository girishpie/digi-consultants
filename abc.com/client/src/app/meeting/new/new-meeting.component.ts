import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MeetingService } from '../meeting.service';
import { MeetingComponent } from '../meeting.component';
import { Meetings } from '../meetings';
import { StateService } from '@uirouter/angular';
import {ProjectService} from "../../project/project.service";
import {Project} from "../../project/project";
import {Projects} from "../../project/projects";
import {Employee} from "../../employee/employee";
import {MeetingEmployee} from "../meeting-employee";
import {Discussion} from "../discussion";

//declare var jQuery:any;
const meetingState = { name: 'meeting', url: '/meeting',  component: MeetingComponent };

@Component({
    selector: 'new-meeting',
    templateUrl: './new-meeting.component.html',
    styleUrls: ['./new-meeting.component.scss']
})


export class NewMeetingComponent implements OnInit {

    private tittle: string ;
    private objective: string;
    private ondate: Date;
    //private  id: string;
    private  type: string;
    private  venue: string;
    private  uploaded: string;
    private projectId:string;
    private employees:Array<MeetingEmployee> = new Array<MeetingEmployee> ();
    private discussions:Array<Discussion> = new Array<Discussion>();

    constructor(private  meetingService: MeetingService,
                private meetings: Meetings,
                public stateService: StateService,
                private projectService:ProjectService,
                private projects: Projects
    )  {
        //this.router = router;
    }

    ngOnInit() {
        let discussion = new Discussion();
        discussion.setItem((this.discussions.length)+'.0');
        this.discussions.push(discussion);
        this.getProjects();
    }

    addNewMeeting() {
        let meeting: Meeting = new Meeting();
        meeting.setTitle(this.tittle);
        meeting.setObjective(this.objective);
        //meeting.setId(this.id);
        meeting.setMeetingType(this.type);
        meeting.setVenue(this.venue);
        meeting.setDate(new Date(this.ondate));
        meeting.setProjectId(this.projectId);
        meeting.setPplList(this.employees);

        this.meetingService.save(meeting).subscribe(data => {
            console.log(data);
            meeting.setId(data);
            this.meetings.addMeeting(meeting);
            this.stateService.go('meeting');

        }, error => {
            var errorMessage = JSON.parse(error._body);
            window.alert(errorMessage.errorMessage);
        });

    }

    goBack() {

        window.history.back();
    }

    getProjects() {
        this.projectService.getProjects(null).subscribe( data => {

        }, error => {
            console.log(error._body.toString() + " No roles found");
        });
    }

    onProjectChange(){
        let prs:Project[] = this.projects.getProjects();

        for(let i=0; i< prs.length; i++){
            if(prs[i].getId() === this.projectId){
                let ppl:Employee[] = prs[i].getPplList();
                for(let j=0; j< ppl.length; j++){
                    let emp = new MeetingEmployee(ppl[j]);
                    this.employees.push(emp);
                }
            }
        }
    }

    onPresent(emp:MeetingEmployee){
        emp.setStatus(0);
    }

    onAbsent(emp:MeetingEmployee){
        emp.setStatus(1);
    }
    onApologized(emp:MeetingEmployee){
        emp.setStatus(2);
    }

    onAddNewDiscussion(){
        let discussion = new Discussion();

        let length = this.discussions.length-1;
        let count = 1;
        for(let i = 0 ;  i< length ; i++){
            if(this.discussions[i].getType()=== 0){
               count++;
            }
        }
        let item = count +'.' + '0';
        discussion.setItem(item);
        this.discussions.push(discussion);

    }


    onAddNewSubDiscussion(parentDiscussion:Discussion){
        let discussion = new Discussion();
        discussion.setParentDiscussion(parentDiscussion);
        let item = parentDiscussion.getItem();
        let tokens:string[] = item.split('.');
        let childItem = tokens[0];
        childItem+='.' + parentDiscussion.getNumSubDiscussions();

        discussion.setItem(childItem);
        let i = this.discussions.indexOf(parentDiscussion);
        if(i!==-1){
            i++;
            for(;i< this.discussions.length;i++){
                if(this.discussions[i].getType()=== 0){
                    break;
                }
            }
            this.discussions.splice(i,0,discussion);
        }
    }
}
