import {Injectable} from "@angular/core";
import {Specification} from "./Specification";


@Injectable()
export class Specifications 
{

     private specifications: Array<Specification> = new Array<Specification>();
     private  totalItems: number;
    
      public setSpecifications (specifications: Array<Specification>) 
      {
        this.specifications = specifications;
      }
      public getSpecifications (): Array<Specification> 
      {
        return this.specifications;
      }
      public deleteSpecification(specificationId: string) 
      {
        let specificationFound: Specification = this.specifications.find(specification => specificationId === specification.getId());
        const index: number = this.specifications.indexOf(specificationFound);
        if (index !== -1) 
        {
          this.specifications.splice(index, 1);
          this.totalItems--;
        }
      }
     public addSpecification (specification: Specification) 
     {
        this.specifications.push(specification);
        this.totalItems++;
      }
    
      public setTotalItems(totalItems: number) 
      {
        this.totalItems = totalItems;
      }
    
      public getTotalItems() 
      {
        return this.totalItems;
      }
    
}
    

