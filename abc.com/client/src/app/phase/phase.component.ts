import {Component, Input, OnInit} from '@angular/core';
import {PhaseService} from './phase.service';
import {Phase} from './phase';
import {Phases} from "./phases";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";
import { Project } from '../project/project';
import { Projects } from '../project/projects';
import { ProjectService } from '../project/project.service';
import { StateService } from '@uirouter/angular';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})

export class PhaseComponent implements OnInit {
  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid: boolean;
  loading: boolean = false;
  currentPhaseId: string;
  constructor(private  phaseService: PhaseService,
              private phases: Phases ,
              private queryParamsService: QueryParamsService)  {
    this.getPhases(null);
  }

  ngOnInit() {
    this.isValid = false;
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          // console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getPhases(queryParam);
        }
      );
  }

  public getPhases(queryParams: QueryParams) {
    this.phaseService.getPhases(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }

  // public deletePhase(phase: Phase) {
  //   this.loading = true;
  //   this.phaseService.delete(phase.getId()).subscribe(data => {
	// 	 this.loading = false;
  //   });
  // }
  public deletePhase(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
     this.phaseService.delete(id).subscribe(data => {
     });
    //  console.log("delete");
   }

  public getPhase(phase: Phase) {
    this.currentPhaseId = phase.getId();
  }
 public updatePhase(phase: Phase) {
    this.loading = true;
    this.phaseService.update(phase).subscribe(data => {
		 this.loading = false;
    });
  }
  
 onRowClick(event){
	this.isValid = true;
   // console.log(event.target.outerText, phase.id);
  } 

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
