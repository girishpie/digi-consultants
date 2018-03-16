import {Component, Input, OnInit} from '@angular/core';
import {DepartmentService} from './department.service';
import {Department} from './department';
import {Departments} from "./departments";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  loading:boolean = false;
  isValid:boolean;
  currentDepartmentId: string;
  constructor(private departmentService: DepartmentService,
              private departments: Departments ,
              private queryParamsService: QueryParamsService)  {
    this.getDepartments(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getDepartments(queryParam);
        }
      );
  }

  public getDepartments(queryParams: QueryParams) {
    this.departmentService.getDepartments(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }

  public updateDepartment(department: Department) {
    this.loading = true;
    this.departmentService.update(department).subscribe(data => {
		 this.loading = false;
    });
  }
  onRowClick(event){
    this.isValid = true;
    } 
    
  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  public deleteDepartment(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.departmentService.delete(id).subscribe(data => {
     });
     console.log("delete");
   }
   public getDepartment(department: Department) {
    // this.currentSpecificationName = specification.getSpecificationName();
    this.currentDepartmentId = department.getId();
  }
}

