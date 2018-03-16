import {Component, Input, OnInit} from '@angular/core';
import {SectionService} from './section.service';
import {Section} from './section';
import {Sections} from "./sections";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean = false;
  currentSectionName:string;
  currentSectionId: string;
  constructor(private  sectionService: SectionService,
              private sections: Sections ,
              private queryParamsService: QueryParamsService)  {
    this.getSections(null);
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
          this.getSections(queryParam);
        }
      );
  }

  public getSections(queryParams: QueryParams) {
    this.sectionService.getSections(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }
  public updateSection(section: Section) {
    this.loading = true;
    this.sectionService.update(section).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 


  // public deleteSection(section: Section) {
  //   this.sectionService.delete(section.getId()).subscribe(data => {

  //   });
  // }
  
  public deleteSection(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.sectionService.delete(id).subscribe(data => {
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

  public getSection(section: Section) {
    // this.currentSectionName = section.getSectionName();
    this.currentSectionId = section.getId();
  }
}

