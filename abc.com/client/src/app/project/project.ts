import { Class } from '@angular/core';
import {Employee} from "../employee/employee";

export class Project {

  private  id: string;
  private  projectName: string;
  private  jobNumber: string;
  private  siteAddress: string;
  private  description: string;
  private  startDate: Date;
  private  clientName: string;
 
  private  pplList : Array<Employee> = new Array<Employee>();

  private  clientId: string;
  private  phase: string;
  constructor() {
  }
  
   public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  
  public setProjectName ( projectName: string ) {
    this.projectName = projectName;
  }
  
  public getProjectName (): string {
    return this.projectName ;
  }
  
  public setJobNumber ( jobNumber: string ) {
    this.jobNumber = jobNumber;
  }
  public getJobNumber (): string {
    return this.jobNumber ;
  }
  public setSiteAddress ( siteAddress: string ) {
    this.siteAddress = siteAddress;
  }
  public getSiteAddress (): string {
    return this.siteAddress ;
  }
  public setDescription( description: string ) {
    this.description = description;
  }
  public getDescription (): string {
    return this.description ;
  }
  public setStartDate ( startDate: Date ) {
    this.startDate = startDate;
  }
  public getStartDate (): Date {
    return this.startDate ;
  }
  public setClientName( clientName: string ) {
    this.clientName = clientName;
  }
  public getClientName (): string {
    return this.clientName ;
  }
  
   public setClientId( clientId: string ) {
    this.clientId = clientId;
  }
  public getClientId(): string {
    return this.clientId;
  }
   public setPhase(phase: string ) {
    this.phase = phase;
  }

  public getPhase(): string {
    return this.phase;
  }

  public getPplList() : Array<Employee>{
      return this.pplList;
  }

  public setPplList(employees : Array<Employee>) {
     this.pplList = employees;
  }

  public addEmployee (employee :Employee){
    this.pplList.push(employee);
  }
}