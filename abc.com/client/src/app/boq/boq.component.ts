import {Component, OnInit, Inject, ElementRef, ViewChild, Output} from '@angular/core';
import {BoQService} from './boq.service';
import {BoQ} from './boq';
import {BoQs} from "./boqs";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";
import * as jsPDF from 'jspdf';
@Component({
  selector: 'boq',
  templateUrl: './boq.component.html',
  styleUrls: ['./boq.component.scss']
})

export class BoQComponent implements OnInit {

  isValid:boolean;
  loading: boolean  = false;
  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  currentBoQId: string;
  @Output('currentBoQNumber') currentBoQNumber:String;
    
  @ViewChild('table') el: ElementRef;
  constructor(private boqService: BoQService,
              private boqs: BoQs, public element: ElementRef,
              private queryParamsService: QueryParamsService)  {
    this.getBoQs(null);
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
          this.getBoQs(queryParam);
        }
      );
  }

  public getBoQs(queryParams: QueryParams) {
    this.boqService.getBoQs(queryParams).subscribe(data => {
      },
    error => {
       window.alert(error._body);
    });

  }

  public deleteBoQ(id: string) {
    // console.log("Id "+ id);
     this.boqService.delete(id).subscribe(data => {
     });
    //  console.log("delete");
   }

   public getBoQ(boq:BoQ) {
    this.currentBoQId = boq.getId();
    // console.log("In BoQ" + boq.getBoQNumber());
    this.currentBoQNumber = boq.getBoQNumber();
  }
  
  

  public exportAsPdf(){
  		let pdf = new jsPDF('p','pt','a4');
		let elementHandler = {
              '#Export': function (element, renderer) {
                return true;
                    }};
		pdf.setFillColor(204, 204,204,0);
        let options = {
        	 pagesplit: true,
        	'elementHandlers': elementHandler,
         	//background: '#ffffff'
   		 };
             pdf.addHTML(document.getElementById('tableboq'), 5, 5, options, function() {
    			pdf.save('web.pdf');
  			});
            
  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  setSelectedBoQNumber(boQNumber:string){
    this.boqService.setSelectedBoQNumber(boQNumber);
    // console.log("Selected BoQNumber " + boQNumber);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}

