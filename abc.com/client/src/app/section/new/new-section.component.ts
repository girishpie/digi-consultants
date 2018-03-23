import { BoQ } from '../../boq/boq';
import { BoQs } from '../../boq/boqs';
import { BoQService } from '../../boq/boq.service';
import { Specification} from '../../specification/specification';
import { Specifications} from '../../specification/specifications';
import {SpecificationService} from '../../specification/specification.service';
import { Section } from '../section';
import { SectionService } from '../section.service';
import { Sections } from '../sections';
import { Component, Input, OnInit } from '@angular/core';
import {StateService } from '@uirouter/angular';
import { SectionComponent } from '../section.component';

//declare var jQuery:any;
const sectionState = { name: 'section', url: '/section',  component: SectionComponent };
@Component({
  selector: 'new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss']
})
export class NewSectionComponent implements OnInit {
   private availableBoQs: BoQ[];
   private sectionName: string ;
   private boqId: string ;
   private specificationName: string;
   private specId: string;
   private description:string;
   private availableSpecifications: Specification[];


  constructor(private sectionService: SectionService, 
              private boQService: BoQService, private specificationService: SpecificationService,
              private sections: Sections, private  specifications : Specifications,
              private boQs: BoQs,  public stateService: StateService)  {
  }

  ngOnInit() {
    this.getBoQs();
    this.getSpecifications();
  }

  addNewSection(){
    let section: Section = new Section();
    section.setSectionName(this.sectionName);
    section.setBoqId(this.boqId);
    section.setSpecId(this.specId);
    section.setDescription(this.description);
    
    this.sectionService.save(section).subscribe(data => {
       // console.log(data);
        //section.setId(data);
        //this.sections.addSection(section);
      this.stateService.go('section');

    }, error => {
      window.alert(error._body);
    });


  }
  getBoQs() {
    this.boQService.getBoQs(null).subscribe( data => {
      this.availableBoQs = this.boQs.getBoQs();
    }, error => {
      window.alert(error._body);
    });
  }
  getSpecifications(){
    this.specificationService.getSpecifications(null).subscribe( data => {
      this.availableSpecifications = this.specifications.getSpecifications();
    }, error => {
      window.alert(error._body);
    });
  }

  goBack() {
    window.history.back();
  }
}
