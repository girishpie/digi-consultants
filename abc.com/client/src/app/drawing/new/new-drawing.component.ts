import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Drawing } from '../drawing';
import { DrawingService } from '../drawing.service';
import { Drawings } from '../drawings';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { DrawingComponent } from '../drawing.component';

//declare var jQuery:any;
const drawingState = { name: 'drawing', url: '/drawing',  component: DrawingComponent };
@Component({
  selector: 'new-drawing',
  templateUrl: './new-drawing.component.html',
  styleUrls: ['./new-drawing.component.scss']
})
export class NewDrawingComponent implements OnInit {
   private availableProjects: Project[];
   private displayName: string ;
   private projectId: string ;

  constructor(private drawingService: DrawingService, 
              private projectService: ProjectService, 
              private drawings: Drawings,
              private projects: Projects, public stateService: StateService)  {

  }

  ngOnInit() {
    this.getProjects();
  }
  
  addNewDrawing(event: any) {
    let drawing: Drawing = new Drawing();
    drawing.setProjectId(this.projectId);
    this.drawingService.save(event, drawing ).subscribe(data => {
        console.log(data);
         this.stateService.go('drawing');
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
