import {Component, Input, OnInit} from '@angular/core';
import {DocumentService} from './document.service';
import {Document} from './document';
import {Documents} from './documents';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from 'rxjs/Subscription';
import {QueryParams} from '../home/query-obeservables/query-params';


@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})

export class DocumentComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean= false;
  currentDocumentId: string;
  constructor(private  documentService: DocumentService,
              private documents: Documents ,
              private queryParamsService: QueryParamsService)  {
    this.getDocuments(null);
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
          this.getDocuments(queryParam);
        }
      );
  }

  public getDocuments(queryParams: QueryParams){
    this.documentService.getDocuments(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }
  public updateDocument(document: Document) {
    this.loading = true;
    this.documentService.update(document).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 
    
  public deleteDocument(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
     this.documentService.delete(id).subscribe(data => {
     });
    //  console.log("delete");
   }
   public getDocument(document: Document) {
    this.currentDocumentId = document.getId();
  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  downloadFile(document: Document) {
    // console.log("In Dowload Document");
    this.documentService.getDocument(document).subscribe(
        (data) => {
        
        });
    }
}

