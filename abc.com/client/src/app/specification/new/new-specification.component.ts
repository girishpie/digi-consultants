import { Component, Input, OnInit } from '@angular/core';
import { Specification } from '../specification';
import { SpecificationService } from '../specification.service';
import { SpecificationComponent } from '../specification.component';
import { Specifications } from '../specifications';
import { StateService } from '@uirouter/angular';

//declare var jQuery:any;
const specificationState ={name:'specification', url:'/specification', component:SpecificationComponent};

@Component({
  selector: 'new-specification',
  templateUrl: './new-specification.component.html',
  styleUrls: ['./new-specification.component.scss']
})
 

export class NewSpecificationComponent implements OnInit {

    private id: string ;
    private DOB: Date;
    private specificationName: string;
    private section: string;
    private answer: string;
    showDetails: boolean = false;
    showDetailsA: boolean = false;
    showDetailsB: boolean = false;
    
    constructor(private  specificationService: SpecificationService, 
        private specifications: Specifications,
        public stateService: StateService)  
        {}

    ngOnInit()  {}
        
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
      }
      toggleDetailsA():void{
         this.showDetailsA = !this.showDetailsA;
      }
      toggleDetailsB():void{
         this.showDetailsB = !this.showDetailsB;
      }

    addNewSpecification() 
    {
     let specification: Specification = new Specification();
     specification.setId(this.id);
     specification.setSpecificationName(this.specificationName);
     specification.setDOB(this.DOB);
     specification.setSection(this.section);
     specification.setAnswer(this.answer);
   this.specificationService.save(specification).subscribe(data => {
        console.log(data);
       this.stateService.go('specification');
   
     }, error => {
       console.log(error._body.toString());
     });
   }
   
  
  
  
  goBack() {
    window.history.back();
  }
  
}
