import {Injectable} from "@angular/core";

@Injectable()
export class Globals{

  private backEndUrl = 'http:// 97.74.237.176:8080/api/';

  public getBackendUrl() : string {
    return this.backEndUrl;
  } 
}
