import { Class } from '@angular/core';

export class Section {

  private  id: string;
  private  sectionName: string;
  private  specId: string;
  private  specificationName: string;
  private  boqId: string;
  private  productNames: Array<string>;
  private  drawingIds: Array<string>;
  private  noOfProducts: number;
  private  description:string;
  constructor() {
  }

   public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  
  public setSectionName ( name: string ) {
    this.sectionName = name;
  }
  
  public getSectionName (): string {
    return this.sectionName ;
  }
  public setSpecId ( specId: string ) {
    this.specId = specId;
  }
  public getSpecId (): string {
    return this.specId ;
  }

  public setSpecificationName ( specificationName: string ) {
    this.specificationName = specificationName;
  }
  public getSpecificationName (): string {
    return this.specificationName ;
  }
  public setDescription ( description: string ) {
    this.description = description;
  }
  public getDescription (): string {
    return this.description ;
  }
  public setBoqId ( boqId: string ) {
    this.boqId = boqId;
  }
  public getBoqId (): string {
    return this.boqId ;
  }
  public setDrawingIds ( drawingIds: Array<string> ) {
    this.drawingIds = drawingIds;
  }
  public getDrawingIds (): Array<string> {
    return this.drawingIds ;
  }
  public setProductNames( productNames: Array<string> ) {
    this.productNames = productNames;
  }
  public getProductNames(): Array<string> {
    return this.productNames;
  }
  public setNoOfProducts( NoOfProducts: number) {
    this.noOfProducts = NoOfProducts;
  }
  public getNoOfProducts(): number {
    return this.noOfProducts;
  }
}