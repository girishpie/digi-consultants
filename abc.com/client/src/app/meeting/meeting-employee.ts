/**
 * Created by gipai on 1/18/2018.
 */
import { Class } from '@angular/core';
import {Employee} from '../employee/employee'

enum STATUS {PRESENT = 0,ABSENT = 1, APPOLOGIZED = 2}
export class MeetingEmployee {

    private  employeeId: string;
    private  firstname: string;
    private lastname: string;
    private role: string;
    private companyName: string;
    private state :STATUS;
    private isPartOfDL : boolean;
    public isPresent:boolean = true;
    public isAbsent:boolean=false;
    public isAppologized:boolean = false;


    constructor( employee:Employee) {
        this.employeeId = employee.getId();
        this.firstname = employee.getFirstname();
        this.lastname = employee.getLastname();
        this.role = employee.getRole();
        this.companyName = employee.getCompanyName();
        this.state = STATUS.PRESENT;
        this.isPartOfDL = true;
    }

    public setId ( id: string ) {
        this.employeeId = id;
    }

    public getId (): string {
        return this.employeeId ;
    }

    public setFirstname ( firstname: string ) {
        this.firstname = firstname;
    }

    public getFirstname (): string {
        return this.firstname ;
    }

    public setLastname ( lastname: string ) {
        this.lastname = lastname;
    }

    public getLastname (): string {
        return this.lastname ;
    }

    public setRole ( role: string ) {
        this.role = role;
    }
    public getRole (): string {
        return this.role ;
    }

    public setCompanyName( companyName: string ) {
        this.companyName = companyName;
    }
    public getCompanyName (): string {
        return this.companyName ;
    }

    public setStatus(status :STATUS){
        this.state = status;
        this.isPresent = false;
        this.isAbsent = false;
        this.isAppologized = false;
        if(status === STATUS.PRESENT){
            this.isPresent = true;
        }else if(status === STATUS.ABSENT){
            this.isAbsent = true;
        }else {
            this.isAppologized = true;
        }
    }

    public  getStatus() : STATUS{
        if(this.isPresent){
            return STATUS.PRESENT;
        }else if (this.isAbsent){
            return STATUS.ABSENT;
        }else {
            return STATUS.APPOLOGIZED;
        }

    }

    public setIsPartOfDL(isPartofDL :boolean){
        this.isPartOfDL = isPartofDL;
    }

    public  getIsPartOfDL() : boolean{
        return this.isPartOfDL;
    }
}
