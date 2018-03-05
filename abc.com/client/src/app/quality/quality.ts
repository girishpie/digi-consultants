import { Class } from '@angular/core';


export class Quality {
  
  private id: string;
  private assignee: string;
  private status: string;
  private shortDescription: string;
  private targetEnddate: Date;
  private projectId: string;
  private ProjectName : string;

  constructor() {
  }
  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }
  public setStatus ( status: string ) {
    this.status = status;
  }
  public getStatus (): string {
    return this.status ;
  }
  public setTitle ( assignee: string ) {
    this.assignee = assignee;
  }
  public getTitle (): string {
    return this.assignee ;
  }
  public setOpened ( targetEnddate: Date ) {
    this.targetEnddate = targetEnddate;
  }
  public getOpened (): Date {
    return this.targetEnddate ;
  }
  public setDescription ( shortDescription: string ) {
    this.shortDescription = shortDescription;
  }
  public getDescription (): string {
    return this.shortDescription ;
  }
  public setRectified ( targetEnddate: Date ) {
    this.targetEnddate = targetEnddate;
  }
  public getRectified (): Date {
    return this.targetEnddate ;
  }
  public setProjectId ( projectId: string ) {
    this.projectId = projectId;
  }
  public getProjectId (): string {
    return this.projectId ;
  }
  public setProjectName ( ProjectName: string ) {
    this.ProjectName = ProjectName;
  }
  public getProjectName (): string {
    return this.ProjectName ;
  }

}
