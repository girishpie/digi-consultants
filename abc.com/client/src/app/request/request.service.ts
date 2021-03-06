import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Request} from './request';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Requests} from "./requests";
import {Globals} from "../globals/globals";

@Injectable()
export class RequestService {


  private requestUrl = this.globals.getBackendUrl() +  'qualityControl/';

  constructor(private http: Http, private  requests: Requests, private globals: Globals ) {

  }

  public getRequests(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 10;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.requestUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const requests: Array<Request> =  new Array<Request>();
          for ( i = 0 ; i < response.length ; i++) {
            const request: Request = new Request();
            request.setId(response[i].id);
            request.setDescription(response[i].shortDescription);
            request.setStatus(response[i].status);
            request.setTargetEnddate(response[i].targetEnddate);
            request.setProjectId(response[i].projectId);
            request.setAssignee(response[i].assignee);
            request.setRemarks(response[i].remarks);
            requests.push(request);
        
          }
          this.requests.setRequests(requests);
          this.requests.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }


  public save(request: Request, file:File)  {
    const endPoint = this.requestUrl + request.getProjectId();
    var headers = new Headers();
    headers.append('Content-Type', undefined);
    let options = new RequestOptions({ headers: headers });
   
    let formData:FormData = new FormData();
    //if(file !== null){
    	formData.append('file', file, file.name);
    	formData.append('inputStr', JSON.stringify(request));
    //}
    // Returns response
    return this.http.post(endPoint, formData)
      .map(res => {
          const res1 = res.json();
          request.setId(res1.id);
          this.requests.addRequest(request);
          return res1.id;
        }
      );
  }


  public delete(id: string)  {
    const endPoint = this.requestUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.requests.deleteRequest(res1.response);
        }
      );
  }
  
}
