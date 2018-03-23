import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Drawing} from './drawing';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Drawings} from "./drawings";
import {Globals} from "../globals/globals";


@Injectable()
export class DrawingService {

  private drawingUrl = this.globals.getBackendUrl() +  'drawing/';

  constructor(private http: Http, private  drawings: Drawings, private globals: Globals ) {

  }

  public getDrawings(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 10;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.drawingUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const drawings: Array<Drawing> =  new Array<Drawing>();
          for ( i = 0 ; i < response.length ; i++) {
            const drawing: Drawing = new Drawing();
            drawing.setDisplayName(response[i].displayName);
            drawing.setProjectName(response[i].projectName);
            drawing.setCreatedBy(response[i].createdBy);
            drawing.setVersion(response[i].version);
            drawing.setCreationTime(response[i].creationTime);
            drawing.setId(response[i].id);
            drawings.push(drawing);
          }
          this.drawings.setDrawings(drawings);
          this.drawings.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(event: any, drawing: Drawing)  {
    const endPoint = this.drawingUrl + drawing.getProjectId();
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      let formData:FormData = new FormData();
      formData.append('file', file, file.name);
      return this.http.post(endPoint, formData )
      .map(res => {
          const res1 = res.json();
          drawing.setId(res1.response.id);
          this.drawings.addDrawing(drawing);
          return res1.id;
        }
      );
    }
  }

  public delete(id: string)  {
    const endPoint = this.drawingUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.drawings.deleteDrawing(res1.response);
        }
      );
  }
  public update(drawing: Drawing)  {
    const endPoint = this.drawingUrl  + drawing.getId();
      // Returns response
    return this.http.patch(endPoint, drawing)
      .map(res => {
          const res1 = res.json();
        }
      );
  }
  public getDrawing(drawing: Drawing)  {
    const endPoint = this.drawingUrl  + drawing.getId();
      // Returns response
    return this.http.get(endPoint)
      .map(res => {
          // var mediaType = "image/png";
          // var blob = new Blob([res], {type: mediaType});
          // var filename = 'test.pdf';
          // saveAs(blob, filename);
          var blob = new Blob([res], { type: 'image/png' });
          var url= window.URL.createObjectURL(blob);
          window.open(endPoint);
        }
      );
  }
}
