import { Company } from '../company/company';
import { Companies } from '../company/companies';
import { CompanyService } from '../company/company.service';
import { StateService } from '@uirouter/angular';
import { CompanyComponent } from '../company/company.component';
import { Component, Input, OnInit } from '@angular/core';
import {QueryParamsService} from '/Digi_client-master/src/app/home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from '/Digi_client-master/src/app/home/query-obeservables/query-params';
import {CompanyListComponent} from '../companylist/companylist.component';

// declare var jQuery:any;
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
const companylistState ={ name:'companylist', url:'/companylist', component:CompanyListComponent};
@Component({
  selector: 'office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit
 {
  private address: string ;
  private telephone: number ;
  private fax : string;
  private contact:string;

 constructor(private companyService: CompanyService,
             private companies: Companies, public stateService: StateService)  {

 }

  ngOnInit()
  {}
 }