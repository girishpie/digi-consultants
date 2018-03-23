import { Component, Input } from '@angular/core';
import {UserService} from '../user.service';
import {RoleService} from '../../roles/role.service';
import {Role} from '../../roles/role';
import {User} from '../user';
import { OnInit } from '@angular/core';
import {Users} from "../users";
import {Roles} from "../../roles/roles";
import {StateService } from '@uirouter/angular';
import { UserComponent } from '../user.component';

//declare var jQuery:any;
const userState = { name: 'user', url: '/user',  component: UserComponent };
@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})


export class NewUserComponent implements OnInit {

  private userId: string ;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;
  private password: string;
  private appliedRoles: Array<string>;
  private availableRoles: Role[];
  private userRole: string;


  constructor(private  userService: UserService,
              private  roleService: RoleService,
              private roles: Roles,
              private users: Users,  public stateService: StateService)  {

  }

  ngOnInit() {
    this.getRoles();
  }

  addNewUser() {
    this.appliedRoles = new Array<string>();

    this.appliedRoles.push(this.userRole);
    let user: User = new User();
    user.setUserId(this.userId);
    user.setFirstName(this.firstName);
    user.setLastName(this.lastName);
    user.setEmail(this.email);
    user.setPhoneNumber(this.phoneNumber);
    user.setPassword(this.password);
    user.setRoleIds(this.appliedRoles);
    this.userService.save(user).subscribe(data => {
      this.stateService.go('user');

    }, error => {
      window.alert(error._body);
    });


  }
  
  goBack() {
    window.history.back();
  }

  getRoles() {
    this.roleService.getRoles(null).subscribe( data => {
      this.availableRoles = this.roles.getRoles();
  }, error => {
     window.alert(error._body);
    });
  }
}
