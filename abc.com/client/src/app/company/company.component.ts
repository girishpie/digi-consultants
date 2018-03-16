import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from './company.service';
import {Company} from './company';
import {Companies} from "./companies";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit {

  currentCompanyId:String;
  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  private currentCompanyAddress:string;
  private currentCompanyName:string;
  isValid:boolean;
  loading:boolean= false;
  constructor(private  companyService: CompanyService,
              private companies: Companies ,
              private queryParamsService: QueryParamsService)  {
    this.getCompanies(null);
  }

  public getCompany(company: Company) {
    this.currentCompanyId = company.getId();
    console.log(company.getCompanyName());
    console.log(company.getAddress());
    this.currentCompanyName = company.getCompanyName();
    this.currentCompanyAddress = company.getAddress();
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
          this.getCompanies(queryParam);
        }
      );
  }

  public getCompanies(queryParams: QueryParams) {
    this.companyService.getCompanies(queryParams).subscribe(data => {
      },
    error => {
       window.alert(error._body);
    });

  }
  public updateCompany(company: Company) {
    this.loading = true;
    this.companyService.update(company).subscribe(data => {
		 this.loading = false;
    });
  }
  onRowClick(event){
    this.isValid = true;
    } 

  public deleteCompany(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.companyService.delete(id).subscribe(data => {
     });
     console.log("delete");
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

