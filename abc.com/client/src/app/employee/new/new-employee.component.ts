import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project/project';
import { Projects } from '../../project/projects';
import { ProjectService } from '../../project/project.service';
import { Company } from '../../company/company';
import { Companies } from '../../company/companies';
import { CompanyService } from '../../company/company.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee.component';
import { Employees } from '../employees';
import { StateService } from '@uirouter/angular';

//declare var jQuery:any;
const employeeState = { name: 'employee', url: '/employee',  component: EmployeeComponent };

@Component({
  selector: 'new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
 

export class NewEmployeeComponent implements OnInit {
   private availableCompanies: Company[];
   private availableProjects: Project[];
   private firstname: string ;
   private lastname: string;
   private role: string;
   private DOB: Date;
   private gender: string;
   private country: string;
   private city: string;
   private address: string;
   private email: string ;
   private telephone: string ;
   private mobile: string ;
   private companyId: string ;
   private projectIds: string[];
   private file:File;
  
  constructor(private  employeeService: EmployeeService, private companyService: CompanyService, private projectService: ProjectService,
              private employees: Employees, private companies: Companies, private projects: Projects,
              public stateService: StateService)  {
  		//this.router = router;
  }

  ngOnInit() {
    this.getCompanies();
    this.getProjects();
  }
  
  addNewEmployee() {
    let employee: Employee = new Employee();
    employee.setFirstname(this.firstname);
    employee.setEmail(this.email);
    employee.setLastname(this.lastname);
    employee.setGender(this.gender);
    employee.setRole(this.role);
    employee.setAddress(this.address);
    employee.setCity(this.city);
    employee.setCountry(this.country);
    employee.setTelephone(this.telephone);
    employee.setMobile(this.mobile);
    employee.setEmail(this.email);
    // employee.setDOB(new Date(this.DOB));
    employee.setCompanyId(this.companyId);
    employee.setProjectIds(this.projectIds);
    
    this.employeeService.save(employee, this.file).subscribe(data => {
        console.log(data);
        employee.setId(data);
        this.employees.addEmployee(employee);
         this.stateService.go('employee');
	    
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
  
  getProjects() {
    this.projectService.getProjects(null).subscribe( data => {
      this.availableProjects = this.projects.getProjects();
    }, error => {
      var errorMessage = JSON.parse(error._body);
      window.alert(errorMessage.errorMessage);
    });
  }
  
  add(e: any) {
    let r = new FileReader();

    r.onload = (e:any) =>  {    
       document.getElementById("preview").setAttribute("src", e.target.result); 
    };

    r.readAsDataURL(e.target.files[0]);
    let fileList: FileList = e.target.files;
    if(fileList.length > 0) {
      	this.file = fileList[0];
    }
}

  goBack() {
    window.history.back();
  }
  
}
