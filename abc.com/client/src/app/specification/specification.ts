import { Class } from '@angular/core';

export class Specification 
{
    private  Id: string;
    private  specificationName: string;
    private  sectionId: string;
    private  label : string;
    private  answer : string;
    private  DOB:Date;
    private  sectionName:string;
     
    constructor() 
    {}
    public setId ( Id: string ) 
      {
      this.Id = Id;
      }
    public getId (): string 
      {
      return this.Id ;
      }
      public setDOB ( DOB: Date ) 
      {
      this.DOB = DOB;
      }
    public getDOB (): Date 
      {
      return this.DOB ;
      }
    
    public setSpecificationName ( specificationName: string ) 
    {
      this.specificationName = specificationName;
    }
    
    public getSpecificationName (): string 
    {
      return this.specificationName ;
    }

    public setSectionId ( sectionsId: string ) 
    {
      this.sectionId = sectionsId;
    }

    public getSectionId(): string 
    {
      return this.sectionId ;
    }
    public setAnswer (answer: string) 
    {
      return answer = answer ;
    }
    public getAnswer(): string 
    { 
      return this.answer ;
    }
    public setSectionName ( sectionsName: string ) 
    {
      this.sectionName = sectionsName;
    }

    public getSectionName(): string 
    {
      return this.sectionName ;
    }
    
    public setLabel (label: string) 
    {
      return label = label ;
    }
    public getLabel(): string 
    { 
      return this.label ;
    }
}