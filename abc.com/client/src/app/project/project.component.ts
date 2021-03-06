import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { Projects } from "./projects";
import { QueryParamsService } from '../home/query-obeservables/query-params.service';
import { Subscription } from "rxjs/Subscription";
import { QueryParams } from "../home/query-obeservables/query-params";


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid: boolean;
  loading: boolean = false;
  currentProjectName: string;
  currentProjectId: string;
  constructor(private projectService: ProjectService,
    private projects: Projects,
    private queryParamsService: QueryParamsService) {
    this.getProjects(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          // console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getProjects(queryParam);
        }
      );
  }

  public getProjects(queryParams: QueryParams) {
    this.projectService.getProjects(queryParams).subscribe(data => {
    },
      error => {
        window.alert(error._body);
      });

  }
  public updateProject(project: Project) {
    this.loading = true;
    this.projectService.update(project).subscribe(data => {
      this.loading = false;
    });
  }
  onRowClick(event) {
    this.isValid = true;
  }

  public deleteProject(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
    this.projectService.delete(id).subscribe(data => {
    });
    //  console.log("delete");
  }

  public getProject(project: Project) {
    this.currentProjectName = project.getProjectName();
    this.currentProjectId = project.getId();
  }
  getPage(page: number) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber(page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  editRowId: any;

  toggle(id) {
    this.editRowId = id;
  }

}

