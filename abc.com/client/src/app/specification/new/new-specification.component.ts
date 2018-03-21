import { Component, Input, OnInit } from '@angular/core';
import { Specification } from '../specification';
import { SpecificationService } from '../specification.service';
import { SpecificationComponent } from '../specification.component';
import { Specifications } from '../specifications';
import { StateService } from '@uirouter/angular';
import { Section } from '../../section/section';
import { Sections } from '../../section/sections';
import { SectionService } from '../../section/section.service';
//declare var jQuery:any;
const specificationState ={name:'specification', url:'/specification', component:SpecificationComponent};

@Component({
  selector: 'new-specification',
  templateUrl: './new-specification.component.html',
  styleUrls: ['./new-specification.component.scss']
})
 

export class NewSpecificationComponent implements OnInit {

   private availableSections: Section[];
    private Id: string ;
    private DOB: Date;
    private specificationName: string;
    private sectionId: string;
    private answer: string;
    private label: string;
    showDetails: boolean = false;
    showDetailsA: boolean = false;
    showDetailsB: boolean = false;
    
    constructor(private sectionService: SectionService, private  specificationService: SpecificationService, 
        private specifications: Specifications, private sections: Sections,
        public stateService: StateService)  
        {}

    ngOnInit()  { 
      this.getSections();
    }
        
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
     specification.setId(this.Id);
     specification.setSpecificationName(this.specificationName);
    //  specification.setDOB(this.DOB);
     specification.setSectionId(this.sectionId);
     specification.setAnswer(this.answer);
     specification.setLabel(this.label);
    this.specificationService.save(specification).subscribe(data => {
        console.log(data);
       this.stateService.go('specification');
   
     }, error => {
      	window.alert(error._body);
     });
   }
   getSections() {
    this.sectionService.getSections(null).subscribe( data => {
      this.availableSections = this.sections.getSections();
    }, error => {
      window.alert(error._body);
    });
  }
   
  
  
  
  goBack() {
    window.history.back();
  }
  
}
