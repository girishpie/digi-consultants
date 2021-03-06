import { Department } from '../department';
import { Departments } from '../departments';
import { DepartmentService } from '../department.service';
import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { DepartmentComponent } from '../department.component';


//declare var jQuery:any;
const departmentState = { name: 'department', url: '/department',  component: DepartmentComponent };
@Component({
  selector: 'new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.scss']
})
export class NewDepartmentComponent implements OnInit {
   private availableProjects: Project[];
   private name: string ;
   private projectId: string;

  constructor(private departmentService: DepartmentService, private projectService: ProjectService,
              private departments: Departments, private projects: Projects, public stateService: StateService)  {

  }

  ngOnInit() {
     this.getProjects();
  }

  addNewDepartment() {
    let department: Department = new Department();
    department.setDepartmentName(this.name);
    department.setProjectId(this.projectId);
    this.departmentService.save(department).subscribe(data => {
      this.stateService.go('department');

    }, error => {
      window.alert(error._body);
    });
  }
  
getProjects(){
    this.projectService.getProjects(null).subscribe( data => {
      this.availableProjects = this.projects.getProjects();
    }, error => {
        window.alert(error._body);
    });
  }
  
  goBack() {
    window.history.back();
  }
}

