import {Injectable} from "@angular/core";

@Injectable()
export class Globals{

  private backEndUrl = 'http://localhost:8080/api/';
  // 97.74.237.176
  public getBackendUrl() : string {
    return this.backEndUrl;
  } 
}
