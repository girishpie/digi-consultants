import {Component} from "@angular/core";
import {QueryParamsService} from "../home/query-obeservables/query-params.service";
import {RoleService} from "./role.service";
import {QueryParams} from "../home/query-obeservables/query-params";
import {Roles} from "./roles";
import {RoleHelper} from "./role-helper";
import {Role} from "./role";

@Component({
  selector: 'role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent {


  private roleMap : Map<string,Map<string,boolean>>;
  private check:boolean;
  loading:boolean = false;
  isValid:boolean;
  currentRoleName:string;
  currentRoleId:String;
  constructor(private  roleService: RoleService,
              private roles: Roles ,
              private roleHelper:RoleHelper,
              private queryParamsService: QueryParamsService)  {
    this.getRoles(null);
  }

  public getRoles(queryParams: QueryParams) {
    this.roleService.getRoles(queryParams).subscribe(data => {

      this.roleMap = new  Map<string,Map<string,boolean>>();
      for(let i = 0 ; i < this.roles.getRoles().length; i++){

        let role = this.roles.getRoles()[i];
        let permissions = new Map<string,boolean>();
        for (let j = 0; j < this.roleHelper.getPermissions().length ; j ++) {
          let permission = this.roleHelper.getPermissions()[j];
          permissions.set(permission , this.hasPermission(role,permission))
        }
        this.roleMap.set(this.roles.getRoles()[i].getId(), permissions)
      }
      },
      error => {
       window.alert(error._body);
      });

  }

  public hasPermission(role:Role , permission : string){
     let permissions = role.getPermissions();
     if(permissions.find(item => permission == item)){
       return true;
     }
     return false;
  }
  public updateRole(role: Role) {
    this.loading = true;
    this.roleService.update(role).subscribe(data => {
		 this.loading = false;
    });
  }
    onRowClick(event){
     this.isValid = true;
    } 

  public save(role:Role , permission : string){
      let value = this.roleMap.get(role.getId()).get(permission);
      this.roleMap.get(role.getId()).set(permission,!value);
      if(value){
        role.deletePermission( permission);
      }else {
        role.addPermission( permission);
      }


      this.roleService.patch(role).subscribe();
  }
  
 
  
  public deleteRole(id: string) {
    //.alert("Are You Sure You want to delete?");
    // console.log("Id "+ id);
     this.roleService.delete(id).subscribe(data => {
     });
    //  console.log("delete");
   }
  public getRole(role: Role) {
    this.currentRoleName = role.getName();
    this.currentRoleId = role.getId();
  }
}
