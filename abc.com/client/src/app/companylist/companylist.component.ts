import { Company } from '../company/company';
import { Companies } from '../company/companies';
import { CompanyService } from '../company/company.service';
import { StateService } from '@uirouter/angular';
import { CompanyComponent } from '../company/company.component';
import { Component, Input, OnInit } from '@angular/core';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from '../home/query-obeservables/query-params';

// declare var jQuery:any;
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
@Component({
  selector: 'companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanyListComponent implements OnInit
 {
  
  private companyName: string ;
  private address: string ;
  //private availableCompany:Company;

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  loading: boolean = false;
  constructor(private  companyService: CompanyService,
             // private companyComponent: CompanyComponent ,
              private queryParamsService: QueryParamsService,public stateService: StateService)  {
    // this.getCompanies(null);
   // this.findCompany();
  }

  ngOnInit() {
    this.getUrlParams();
   // this.findCompany(this.companyId);
  }

  // findCompany(companyId) {
  //   this.loading = true;
  //   this.companyService.getCompany(companyId).subscribe(data => {
  //     company => this.company = company
  //   },
  // error => {
  //    console.log(error._body.toString());
  // });
  //   console.log("Company Id "+ this.company.getCompanyName())
  // }

  public deleteCompany(company: Company) {
    this.loading = true;
    this.companyService.delete(company.getId()).subscribe(data => {
		 this.loading = false;
    });
  }
 
  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getUrlParams() {
    let loc = window.location.href;
    let hashes = loc.split('=');
    let hash = hashes[1].split("&");
    this.companyName = hash[0];
    this.address = hashes[2];

    console.log(" Company Name "+this.companyName);
    console.log(" Address "+this.address)
  }

}