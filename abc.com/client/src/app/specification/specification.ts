import { Class } from '@angular/core';

export class Specification 
{
    private  id: string;
    private  specificationName: string;
    private  section: string;
    private  answer : string;
    private  DOB:Date;
     
    constructor() 
    {}
    public setId ( id: string ) 
      {
      this.id = id;
      }
    public getId (): string 
      {
      return this.id ;
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

    public setSection ( sections: string ) 
    {
      this.section = sections;
    }

    public getSection(): string 
    {
      return this.section ;
    }
    public setAnswer (answer: string) 
    {
      return answer = answer ;
    }
    public getAnwer(): string 
    { 
      return this.answer ;
    }
  
}