import { Class } from '@angular/core';

export class Office {

  private  id: string;
  private address: string;
  private fax: string;
  private  telephone: number;
  private companyId:string;
  private  companyName: string;

  
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
  
   public setTelephone ( telephone: number ) {
    this.telephone = telephone;
  }
  
  public getTelephone (): number {
    return this.telephone ;
  }
  
   public setCompanyId( companyId: string ) {
    this.companyId = companyId;
  }
  
  public getCompanyId (): string {
    return this.companyId ;
  }
  public setCompanyName( companyName: string ) {
    this.companyName = companyName;
  }
  public getCompanyName (): string {
    return this.companyName ;
  }
     
}
