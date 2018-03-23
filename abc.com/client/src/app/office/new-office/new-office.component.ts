import { Company } from '../../company/company';
import { Companies } from '../../company/companies';
import { CompanyService } from '../../company/company.service';
import { StateService } from '@uirouter/angular';
import { OfficeComponent } from '../office.component';
import { Component, Input, OnInit } from '@angular/core';
import {OfficeService} from '../office.service';
import { Offices} from '../offices';
import {Office} from '../office';

//declare var jQuery:any;
const officeState = { name: 'office', url: '/office',  component: OfficeComponent };
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
    private companyId: string ;
    private file:File;
    private availableCompanies: Company[];
  
    constructor(private  officeService: OfficeService, private companyService: CompanyService,
      private offices: Offices, private companies: Companies, 
      public stateService: StateService)  {
//this.router = router;
}

ngOnInit() {
this.getCompanies();
}

addNewOffice() {
let office: Office = new Office();
office.setAddress(this.address);
office.setTelephone(this.telephone);
office.setFax(this.fax);
office.setCompanyId(this.companyId);

this.officeService.save(office).subscribe(data => {
  // console.log(data);
  office.setId(data);
  this.offices.addOffice(office);
  this.stateService.go('office');


}, error => {
var errorMessage = JSON.parse(error._body);
window.alert(errorMessage.errorMessage);
});

}

getCompanies() {
this.companyService.getCompanies(null).subscribe( data => {
this.availableCompanies = this.companies.getCompanies();
}, error => {
var errorMessage = JSON.parse(error._body);
window.alert(errorMessage.errorMessage);
});
}


goBack() {
window.history.back();
}

}
