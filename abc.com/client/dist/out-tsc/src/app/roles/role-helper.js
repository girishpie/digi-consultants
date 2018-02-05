"use strict";
/**
 * Created by gipai on 10/8/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoleHelper = (function () {
    function RoleHelper() {
        this.permissions = new Map();
        this.permissions.set('READ_USER', 'Can view the list of Users');
        this.permissions.set('CREATE_USER', 'Can add a User');
        this.permissions.set('DELETE_USER', 'Can delete a User');
        this.permissions.set('UPDATE_USER', 'Can edit a User');
        this.permissions.set('CREATE_ROLE', 'Can add a Role');
        this.permissions.set('DELETE_ROLE', 'Can delete a Role');
        this.permissions.set('READ_ROLE', 'Can view the list of Roles');
        this.permissions.set('UPDATE_ROLE', 'Can edit a Role');
        this.permissions.set('CREATE_PROJECT', 'Can add a new Project');
        this.permissions.set('READ_PROJECT', 'Can view the list of Projects');
        this.permissions.set('DELETE_PROJECT', 'Can delete a Project');
        this.permissions.set('UPDATE_PROJECT', 'Can edit a Project');
        this.permissions.set('UPDATE_COMPANY', 'Can edit a Company');
        this.permissions.set('CREATE_COMPANY', 'Can add a new Company');
        this.permissions.set('DELETE_COMPANY', 'Can delete Company');
        this.permissions.set('READ_COMPANY', 'Can view the list of Companies');
        //
        //    this.permissions.set('CREATE_DEPARTMENT', "Can add a new Department");
        //    this.permissions.set('DELETE_DEPARTMENT', "Can delete a new Department");
        //    this.permissions.set('READ_DEPARTMENT', "Can view the list of Departments");
        //    this.permissions.set('UPDATE_DEPARTMENT', "Can edit a Department");
        this.permissions.set('CREATE_CLIENT', 'Can add a new Client');
        this.permissions.set('DELETE_CLIENT', 'Can delete a Client');
        this.permissions.set('READ_CLIENT', 'Can view the list Clients');
        this.permissions.set('UPDATE_CLIENT', 'Can edit a Client');
        this.permissions.set('CREATE_PHASE', 'Can add a new Phase');
        this.permissions.set('DELETE_PHASE', 'Can delete a Phase');
        this.permissions.set('READ_PHASE', 'Can view the list Phases');
        this.permissions.set('UPDATE_PHASE', 'Can edit a Phase');
        this.permissions.set('CREATE_PRODUCT', 'Can add a new Product');
        this.permissions.set('DELETE_PRODUCT', 'Can delete a Product');
        this.permissions.set('READ_PRODUCT', 'Can view the list Products');
        this.permissions.set('UPDATE_PRODUCT', 'Can edit a Product');
        this.permissions.set('CREATE_CATEGORY', 'Can add a new Category');
        this.permissions.set('DELETE_CATEGORY', 'Can delete a Category');
        this.permissions.set('READ_CATEGORY', 'Can view the list Categories');
        this.permissions.set('UPDATE_CATEGORY', 'Can edit a Category');
        this.permissions.set('CREATE_DOCUMENT', 'Can add a new Document');
        this.permissions.set('DELETE_DOCUMENT', 'Can delete a Document');
        this.permissions.set('READ_DOCUMENT', 'Can view the list Documents');
        this.permissions.set('UPDATE_DOCUMENT', 'Can edit a Document');
        this.permissions.set('CREATE_SPECIFICATION', 'Can add a new Specification');
        this.permissions.set('DELETE_SPECIFICATION', 'Can delete a Specification');
        this.permissions.set('READ_SPECIFICATION', 'Can view the list Specifications');
        this.permissions.set('UPDATE_SPECIFICATION', 'Can edit a Specification');
        this.permissions.set('CREATE_BOQ', 'Can add a new BoQ');
        this.permissions.set('DELETE_BOQ', 'Can delete a BoQ');
        this.permissions.set('READ_BOQ', 'Can view the list BoQs');
        this.permissions.set('UPDATE_BOQ', 'Can edit a BoQ');
        this.permissions.set('CREATE_BOQDEPARTMENT', 'Can add a new Department');
        this.permissions.set('DELETE_BOQDEPARTMENT', 'Can delete a Department');
        this.permissions.set('READ_BOQDEPARTMENT', 'Can view the list Department');
        this.permissions.set('UPDATE_BOQDEPARTMENT', 'Can edit a Department');
        this.permissions.set('CREATE_SECTION', 'Can add a new Section');
        this.permissions.set('DELETE_SECTION', 'Can delete a Section');
        this.permissions.set('READ_SECTION', 'Can view the list Sections');
        this.permissions.set('UPDATE_SECTION', 'Can edit a Section');
        this.permissions.set('CREATE_CR', 'Can add a new Change Request');
        this.permissions.set('DELETE_CR', 'Can delete a Change Request');
        this.permissions.set('READ_CR', 'Can view the list Change Requests');
        this.permissions.set('UPDATE_CR', 'Can edit a Change Request');
        this.permissions.set('CREATE_EMPLOYEE', 'Can add a new Employee');
        this.permissions.set('DELETE_EMPLOYEE', 'Can delete a Employee');
        this.permissions.set('READ_EMPLOYEE', 'Can view the list Employees');
        this.permissions.set('UPDATE_EMPLOYEE', 'Can edit a Employee');
        this.permissions.set('CREATE_MOM', 'Can add a new Meeting');
        this.permissions.set('DELETE_MOM', 'Can delete a Meeting');
        this.permissions.set('READ_MOM', 'Can view the list Meetings');
        this.permissions.set('UPDATE_MOM', 'Can edit a Meeting');
    }
    RoleHelper.prototype.getPermissions = function () {
        var permis = new Array();
        this.permissions.forEach(function (value, key) {
            permis.push(value);
        });
        return permis;
    };
    RoleHelper.prototype.getPermissionskey = function () {
        var permis = new Array();
        this.permissions.forEach(function (value, key) {
            permis.push(key);
        });
        return permis;
    };
    return RoleHelper;
}());
RoleHelper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RoleHelper);
exports.RoleHelper = RoleHelper;
//# sourceMappingURL=role-helper.js.map