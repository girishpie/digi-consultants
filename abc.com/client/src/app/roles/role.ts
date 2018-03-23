import { Class } from '@angular/core';



export class Role {

  public  id: string;
  public  name: string;
  public lastUpadated: string;
  public  permissions: Array<string>;


  constructor() {
  }


  public setName ( name: string ) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setLastUpadated ( lastUpadated: string ) {
    this.lastUpadated = lastUpadated;
  }

  public getLastUpadated (): string {
    return this.lastUpadated;
  }

  public setId ( id: string ) {
    this.id = id;
  }
  public getId (): string {
    return this.id ;
  }

  public setPermissions ( permissions: Array<string> ) {
    this.permissions = permissions;
  }
  public getPermissions (): Array<string> {
    return this.permissions ;
  }

  public  addPermission(permission:string) : void {
    if(this.permissions.find(item=> item === permission)) {
      return;
    }
    this.permissions.push(permission);
  }

  public  deletePermission(permission: string): void {
    let item = this.permissions.find(item => item === permission);
    const index: number = this.permissions.indexOf(item);
    if (index !== -1) {
      this.permissions.splice(index, 1);
    }
  }

}
