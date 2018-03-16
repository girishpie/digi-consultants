import { Component, Input, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { RequestComponent } from '../request.component';
import { Requests } from '../requests';
import { StateService } from '@uirouter/angular';
import { ProjectService } from "../../project/project.service";
import { Project } from "../../project/project";
import { Projects } from "../../project/projects";

//declare var jQuery:any;
const requestState = { name: 'request', url: '/request', component: RequestComponent };

@Component({
  selector: 'new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})


export class NewRequestComponent implements OnInit {

  private id: string;
  private targetEnddate: Date;
  private type: string;
  private raised: string;
  private projectId: string;
  private assignee: string;
  private status: string;
  private remarks: string;
  private shortDescription: string;
  private file: File;
  constructor(private requestService: RequestService,
    private requests: Requests,
    public stateService: StateService, private projectService: ProjectService,
    private projects: Projects) { }

  ngOnInit() {
    this.getProjects();
  }


  addNewRequest(event: any) {
    let request: Request = new Request();
    request.setId(this.id);
    request.setDescription(this.shortDescription);
    request.setStatus(this.status);
    request.setTargetEnddate(this.targetEnddate);
    request.setProjectId(this.projectId);
    request.setAssignee(this.assignee);
    request.setRemarks(this.remarks);

    this.requestService.save(request, this.file).subscribe(data => {
      console.log(data);
      request.setId(data);
      this.requests.addRequest(request);
      this.stateService.go('request');

    }, error => {
      window.alert(error._body);
    });
  }


  getProjects() {
    this.projectService.getProjects(null).subscribe(data => {

    }, error => {
      console.log(error._body.toString() + " No roles found");
    });
  }

  add(e: any) {
    let r = new FileReader();

    r.onload = (e: any) => {
      document.getElementById("preview").setAttribute("src", e.target.result);
    };

    r.readAsDataURL(e.target.files[0]);
    let fileList: FileList = e.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }
  goBack() {
    window.history.back();
  }

}
