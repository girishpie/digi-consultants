import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {QueryParams} from "../home/query-obeservables/query-params";
import {Offices} from "./offices";
import {Globals} from "../globals/globals";
import {OfficeComponent } from './office.component';
import {Office } from './office';
  
@Injectable()
export class OfficeService {


  private officeUrl = this.globals.getBackendUrl() +  'office/';
  
  constructor(private http: Http, private  offices: Offices, private globals: Globals ) {
  	
  }

  public getOffices(queryParams: QueryParams)  {

    let pageNumber = 0;
    const pageSize = 3;
    let searchString = null;

    if (queryParams !== null) {
      pageNumber = queryParams.pageNumber;
      if (queryParams.searchString) {
        searchString = queryParams.searchString;
      }
    }
    let endPoint = this.officeUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
    if (searchString) {
      endPoint += '&searchString=' + searchString;
    }
    // Returns response
    return this.http.get(endPoint)
      .map(res => {
          const res1 = res.json();
          const response = res1.response;
          let i = 0;
          const offices: Array<Office> =  new Array<Office>();
          for ( i = 0 ; i < response.length ; i++) {
            const office: Office = new Office();
            office.setAddress(response[i].address);
            office.setFax(response[i].fax);
            office.setTelephone(response[i].telephone);
            office.setId(response[i].id);
            offices.push(office);
          }
          this.offices.setOffices(offices);
          this.offices.setTotalItems(res1.totalElements);
          return true;
        }
      );
  }



  // public save(office: Office)  {
  //   const endPoint = this.officeUrl;// + office.getCompanyId();
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   let options = new RequestOptions({ headers: headers });
   
  //   // let formData:FormData = new FormData();
  //   // //if(file !== null){
  //   // 	formData.append('file', file, file.name);
  //   // 	formData.append('inputStr', JSON.stringify(office));
  //   // //}
  //   // Returns response
  //   return this.http.post(endPoint, office)
  //     .map(res => {
  //         const res1 = res.json();
  //         office.setId(res1.id);
  //         this.offices.addOffice(office);
  //         return res1.id;
  //       }
  //     );
  // }

  public delete(id: string)  {
    const endPoint = this.officeUrl  + id ;
      // Returns response
    return this.http.delete(endPoint)
      .map(res => {
          const res1 = res.json();
          this.offices.deleteOffice(res1.response);
        }
      );
  }
  public update(office: Office)  {
    const endPoint = this.officeUrl  + office.getId();
      // Returns response
    return this.http.patch(endPoint, document)
      .map(res => {
          const res1 = res.json();
        }
      );
  }
}
