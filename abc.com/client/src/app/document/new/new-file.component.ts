import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Document } from '../document';
import { DocumentService } from '../document.service';
import { Documents } from '../documents';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { DocumentComponent } from '../document.component';

//declare var jQuery:any;
const documentState = { name: 'document', url: '/document',  component: DocumentComponent };
@Component({
  selector: 'new-document',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss']
})
export class NewDocumentComponent implements OnInit {
   private availableProjects: Project[];
   private displayName: string ;
   private projectId: string ;

  constructor(private documentService: DocumentService, 
              private projectService: ProjectService, 
              private documents: Documents,
              private projects: Projects, public stateService: StateService)  {

  }

  ngOnInit() {
    this.getProjects();
  }
  
  addNewDocument(event: any) {
    let document: Document = new Document();
    document.setProjectId(this.projectId);
    this.documentService.save(event, document ).subscribe(data => {
        console.log(data);
         this.stateService.go('document');
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
