import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from './client.service';
import {Client} from './client';
import {Clients} from "./clients";
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from "rxjs/Subscription";
import {QueryParams} from "../home/query-obeservables/query-params";


@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {

  private subscription: Subscription;
  private currentSearchString: string;
  private currentPage = 1;
  isValid:boolean;
  loading:boolean= false;
  currentClientId:string;
  constructor(private  clientService: ClientService,
              private clients: Clients ,
              private queryParamsService: QueryParamsService)  {
    this.getClients(null);
  }

  ngOnInit() {
    this.subscription = this.queryParamsService.getQueryParams()
      .subscribe(
        queryParam => {
          console.log(queryParam);
          if (this.currentSearchString !== queryParam.searchString ) {
            queryParam.pageNumber = 0;
            this.currentPage = 1;
            this.currentSearchString = queryParam.searchString;
          }
          this.getClients(queryParam);
        }
      );
  }

  public getClients(queryParams: QueryParams) {
    this.clientService.getClients(queryParams).subscribe(data => {
      },
    error => {
      window.alert(error._body);
    });

  }
  public updateClient(client: Client) {
    this.loading = true;
    this.clientService.update(client).subscribe(data => {
		 this.loading = false;
    });
  }
  onRowClick(event){
    this.isValid = true;
    } 


  // public deleteClient(client: Client) {
  //   this.clientService.delete(client.getId()).subscribe(data => {

  //   });
  // }
  
  public deleteClient(id: string) {
    //.alert("Are You Sure You want to delete?");
    console.log("Id "+ id);
     this.clientService.delete(id).subscribe(data => {
     });
     console.log("delete");
   }
   public getClient(client: Client) {
    // this.currentSpecificationName = specification.getSpecificationName();
    this.currentClientId = client.getId();
  }
  

  getPage(page: number ){
    this.currentPage= page;
    this.queryParamsService.setPageNumber( page-1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

