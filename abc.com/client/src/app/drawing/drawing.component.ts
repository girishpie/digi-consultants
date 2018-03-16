import {Component, Input, OnInit} from '@angular/core';
import {DrawingService} from './drawing.service';
import {Drawing} from './drawing';
import {Drawings} from './drawings';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from 'rxjs/Subscription';
import {QueryParams} from '../home/query-obeservables/query-params';


@Component({
  selector: 'drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})

export class DrawingComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean= false;
  currentDrawingId: string;
  constructor(private  drawingService: DrawingService,
              private drawings: Drawings ,
              private queryParamsService: QueryParamsService)  {
    this.getDrawings(null);
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
          this.getDrawings(queryParam);
        }
      );
  }

  public getDrawings(queryParams: QueryParams){
    this.drawingService.getDrawings(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }
  public updateDrawing(drawing: Drawing) {
    this.loading = true;
    this.drawingService.update(drawing).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 
    
  public deleteDrawing(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.drawingService.delete(id).subscribe(data => {
     });
     console.log("delete");
   }
   public getDrawing(drawing: Drawing) {
    this.currentDrawingId = drawing.getId();
  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

