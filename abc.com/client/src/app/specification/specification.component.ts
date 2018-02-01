import {Component, Input, OnInit} from '@angular/core';
import {SpecificationService} from './specification.service';
import {Specification} from './specification';
import {Specifications} from "./specifications";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";



@Component({
  selector: 'specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss']
})

export class SpecificationComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;


  constructor(private  specificationService: SpecificationService,
              private specifications: Specifications , 
              private queryParamsService: QueryParamsService)  {
    this.getSpecifications(null);
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
          this.getSpecifications(queryParam);
        }
      );
  }

  public getSpecifications(queryParams: QueryParams) {
    this.specificationService.getSpecifications(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }



  public deleteSpecification(specification: Specification) {
    this.specificationService.delete(specification.getId()).subscribe(data => {

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
 
}

