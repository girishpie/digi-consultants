import { Component, Input, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { RequestComponent } from '../request.component';
import { Requests } from '../requests';
import { StateService } from '@uirouter/angular';
import {ProjectService} from "../../project/project.service";
import {Project} from "../../project/project";
import {Projects} from "../../project/projects";

//declare var jQuery:any;
const requestState ={name:'request', url:'/request', component:RequestComponent};

@Component({
  selector: 'new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
 

export class NewRequestComponent implements OnInit {

    private id: string ;
    private DOB: Date;
    private type: string;
    private Raised: string;
    private projectId: string;
    private assignee: string;
    private Status: string ;
    private Action: string ;
    private Description: string ;

    constructor(private  requestService: RequestService, 
        private requests: Requests,
        public stateService: StateService, private projectService:ProjectService,
        private projects: Projects)  
        {}

    ngOnInit()  {
      this.getProjects();
    }
  
    addNewRequest() 
    {
     let request: Request = new Request();
      request.setId(this.id);
     request.setDescription(this.Description);
     request.setStatus(this.Status);
     request.setDOB(this.DOB);
     request.setProjectId(this.projectId);
     request.setRaised(this.Raised);
     request.setAction(this.Action);
   
   this.requestService.save(request).subscribe(data => {
        console.log(data);
       this.stateService.go('request');
   
     }, error => {
       window.alert(error._body);
     });
   }
   
  
   getProjects() {
    this.projectService.getProjects(null).subscribe( data => {

    }, error => {
        console.log(error._body.toString() + " No roles found");
    });
}
  
  goBack() {
    window.history.back();
  }
  
}
