import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {Employees} from "./employees";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean = false;
  currentEmployeeId: string;
  constructor(private employeeService: EmployeeService,
              private employees: Employees ,
              private queryParamsService: QueryParamsService)  {
    this.getEmployees(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          // console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getEmployees(queryParam);
        }
      );
  }

  public getEmployees(queryParams: QueryParams) {
    this.employeeService.getEmployees(queryParams).subscribe(data => {
      },
    error => {
     	window.alert(error._body);
    });

  }
  public updateEmployee(employee: Employee) {
    this.loading = true;
    this.employeeService.update(employee).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 
    
  public deleteEmployee(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
     this.employeeService.delete(id).subscribe(data => {
     });
    //  console.log("delete");
   }
   public getEmployee(employee: Employee) {
    this.currentEmployeeId = employee.getId();
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

