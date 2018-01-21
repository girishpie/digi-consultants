import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Specification} from './specification';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Specifications} from "./specifications";
import {Globals} from "../globals/globals";

@Injectable()
export class SpecificationService {


  private specificationUrl = this.globals.getBackendUrl() +  'specification/';

  constructor(private http: Http, private  specifications: Specifications, private globals: Globals ) {

  }

  public getSpecifications(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.specificationUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const specifications: Array<Specification> =  new Array<Specification>();
          for ( i = 0 ; i < response.length ; i++) {
            const specification: Specification = new Specification();
            specification.setId(response[i].Id);
            specification.setSpecificationName(response[i].specificationName);
            specification.setDOB(response[i].DOB);
            specification.setSectionId(response[i].sectionId);
            specification.setAnswer(response[i].answer);
            specifications.push(specification);
        
          }
          this.specifications.setSpecifications(specifications);
          this.specifications.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  public save(specification: Specification)  {
    const endPoint = this.specificationUrl + specification.getId();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    // Returns response
    return this.http.post(endPoint, specification, options)
      .map(res => {
          const res1 = res.json();
          specification.setId(res1.id);
          this.specifications.addSpecification(specification);
          return res1.id;
        }
      );
  }

  public delete(id: string)  
  {
    const endPoint = this.specificationUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.specifications.deleteSpecification(res1.id);
        }
      );
  }
}
