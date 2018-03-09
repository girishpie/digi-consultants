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
  currentSpecificationName: string;
  currentSpecificationId: string;
  isValid:boolean;
  loading:boolean = false;
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
  public updateSpecification(specification: Specification) {
    this.loading = true;
    this.specificationService.update(specification).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 


    public deleteSpecification(id: string) {
      //.alert("Are You Sure You want to delete?");
      console.log("Id "+ id);
       this.specificationService.delete(id).subscribe(data => {
       });
       console.log("delete");
     }
     public getSpecification(specification: Specification) {
      this.currentSpecificationName = specification.getSpecificationName();
      this.currentSpecificationId = specification.getId();
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

