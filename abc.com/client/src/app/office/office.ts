import { Class } from '@angular/core';

export class Office {

  private  id: string;
  private address: string;
  private fax: string;
  private  telephone: string;
  private companyId:string;
 
  
  constructor() {
  }
  
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  
  public setAddress ( address: string ) {
    this.address = address;
  }
  
  public getAddress (): string {
    return this.address ;
  }
  
   public setFax ( fax: string ) {
    this.fax = fax;
  }
  
  public getFax (): string {
    return this.fax ;
  }
  
   public setTelephone ( telephone: string ) {
    this.telephone = telephone;
  }
  
  public getTelephone (): string {
    return this.telephone ;
  }
  
   public setCompanyId( companyId: string ) {
    this.companyId = companyId;
  }
  
  public getCompanyId (): string {
    return this.companyId ;
  }
     
}
