import { Component, Input } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import {Globals} from "../globals/globals";

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent {
  overview: any[];
  Router: any;
  url:string;
  totalCompany:number;
  totalProjects:number;
  totalUsers:number;
  totalDocuments:number;


  private overviewUrl = 'http://localhost:8080/overview/';
  
  constructor(private http: Http,private globals: Globals ){
  }
  
  ngOnInit() {
    this.getOverviewDetails();
  }

  getOverviewDetails(){

  return this.http.get(this.overviewUrl).subscribe(res => {
    const res1 = res.json();
    const response = res1.response;  
    this.totalCompany = response.totalCompany;
    this.totalProjects = response.totalProjects;
    this.totalDocuments = response.totalDocuments;
    this.totalUsers = response.totalUsers;
    });
  }
}