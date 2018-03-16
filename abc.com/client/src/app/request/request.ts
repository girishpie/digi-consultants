import { Class } from '@angular/core';

export class Request {
  private id: string;
  private changeId: string;
  private shortDescription: string;
  private status: string;
  private targetEnddate: Date;
  private projectId: string;
  private assignee: string;
  private remarks: string;
  private type: string;
  private distributionlist: string;
  private detailedDescription: string;
  constructor() { }
  public setId(id: string) {
    this.id = id;
  }
  public getId(): string {
    return this.id;
  }

  public setDescription(shortDescription: string) {
    this.shortDescription = shortDescription;
  }

  public getDescription(): string {
    return this.shortDescription;
  }

  public setStatus(status: string) {
    this.status = status;
  }

  public getStatus(): string {
    return this.status;
  }
  public setTargetEnddate(targetEnddate: Date) {
    return targetEnddate = targetEnddate;
  }
  public getTargetEnddate(): Date {
    return this.targetEnddate;
  }
  public setProjectId(projectId: string) {
    this.projectId = projectId;
  }
  public getProjectId(): string {
    return this.projectId;
  }
  public setAssignee(assignee: string) {
    this.assignee = assignee;
  }
  public getAssignee(): string {
    return this.assignee;
  }
  public setRemarks(remarks: string) {
    this.remarks = remarks;
  }
  public getRemarks(): string {
    return this.remarks;
  }
  public setChangeId(changeId: string) {
    this.changeId = changeId;
  }
  public getChangeId(): string {
    return this.changeId;
  }


}