import {Component, Input, OnInit} from '@angular/core';
import {OfficeService} from './office.service';
import {Office} from './office';
import {Offices} from "./offices";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})

export class OfficeComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean = false;
  currentOfficeId: string;
  constructor(private officeService: OfficeService,
              private offices: Offices ,
              private queryParamsService: QueryParamsService)  {
    this.getOffices(null);
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
          this.getOffices(queryParam);
        }
      );
  }

  public getOffices(queryParams: QueryParams) {
    this.officeService.getOffices(queryParams).subscribe(data => {
      },
    error => {
      var errorMessage = JSON.parse(error._body);
      window.alert(errorMessage.errorMessage);
    }
  );

  }
  public updateOffice(office: Office) {
    this.loading = true;
    this.officeService.update(office).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 



  // public deleteOffice(office: Office) {
  //   this.officeService.delete(office.getId()).subscribe(data => {

  //   });
  // }

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  public deleteOffice(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.officeService.delete(id).subscribe(data => {
     });
     console.log("delete");
   }
   
   public getOffice(office: Office) {
    this.currentOfficeId = office.getId();
  }
}

