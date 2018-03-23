import { Company } from '../company';
import { Companies } from '../companies';
import { CompanyService } from '../company.service';
import { StateService } from '@uirouter/angular';
import { CompanyComponent } from '../company.component';
import { Component, Input, OnInit } from '@angular/core';

const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
@Component({
  selector: 'new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent implements OnInit {

   private companyName: string ;
   private address: string ;
   private email: string;
   private phone:number;


  constructor(private companyService: CompanyService,
              private companies: Companies, public stateService: StateService)  {

  }

  ngOnInit() {
  }
  
  addNewCompany() {
    
    let company: Company = new Company();
    company.setCompanyName(this.companyName);
    company.setAddress(this.address);
    company.setEmail(this.email);
    company.setPhone(this.phone);
    // console.log("Contact "+ this.email + "phone "+ this.phone );
    this.companyService.save(company).subscribe(data => {
        // console.log(data);
       // company.setId(data);
       // this.companies.addCompany(company);
      this.stateService.go('company');

    }, error => {
      window.alert(error._body);
    });
  }
  
  goBack() {
    	window.history.back();
  }
  	
}
