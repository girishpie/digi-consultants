import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Quality } from '../quality';
import { QualityService } from '../quality.service';
import { QualityComponent } from '../quality.component';
import { Qualities } from '../qualities';
import { StateService } from '@uirouter/angular';

//declare var jQuery:any;
const qualityState ={name:'quality', url:'/quality', component:QualityComponent};

@Component({
  selector: 'new-quality',
  templateUrl: './new-quality.component.html',
  styleUrls: ['./new-quality.component.scss']
})
 

export class NewQualityComponent implements OnInit {

  private id: string;
  private assignee: string;
  private status: string;
  private targetEnddate: Date;
  private description: string;
  private Rectified: Date;
  private availableProjects: Project[];
   private projectId: string;
  
  constructor(private  qualityservice: QualityService, private projectService: ProjectService,
       private projects: Projects,public qualities:Qualities ,public stateService: StateService)  {
  
  }

    ngOnInit() {
    this.getProjects();
  }
  
  addNewQuality() {
    let quality: Quality = new Quality();
    quality.setId(this.id);
    quality.setTitle(this.assignee);
    quality.setStatus(this.status);
    quality.setOpened(this.targetEnddate);
    // quality.setDescription(this.Description);
    // quality.setRectified(this.Rectified);
    quality.setProjectId(this.projectId);
    this.qualityservice.save(quality).subscribe(data => {
        console.log(data);
        quality.setId(data);
        this.qualities.addQuality(quality);
         this.stateService.go('quality');
	    
    }, error => {
      window.alert(error._body);
    });
   
  }
  
  getProjects() {
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
