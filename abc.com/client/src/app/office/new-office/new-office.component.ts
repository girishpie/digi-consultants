// import { Company } from '../company';
// import { Companies } from '../companies';
// import { CompanyService } from '/';
import { StateService } from '@uirouter/angular';
import { OfficeComponent } from '../office.component';
import { Component, Input, OnInit } from '@angular/core';

//declare var jQuery:any;
const companyState = { name: 'company', url: '/company',  component: OfficeComponent };
@Component({
  selector: 'new-office',
  templateUrl: './new-office.component.html',
  styleUrls: ['./new-office.component.scss']
})
export class NewOfficeComponent implements OnInit {

    private address: string ;
    private telephone: number ;
    private fax : string;
    private contact:string;
  
  constructor()
    // private companyService: CompanyService,
//               private companies: Companies, public stateService: StateService)  
{

  }

  ngOnInit() {
  }
  
  addNewOffice() {
    
  }
  
  goBack() {
    	window.history.back();
  }
  	
}
