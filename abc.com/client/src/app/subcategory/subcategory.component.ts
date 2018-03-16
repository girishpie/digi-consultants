import { CategoryService } from '../category/category.service';
import {Component, Input, OnInit} from '@angular/core';
import {SubcategoryService} from './subcategory.service';
import {Subcategory} from './subcategory';
import {Subcategories} from './subcategories';
import {QueryParamsService} from '../home/query-obeservables/query-params.service';
import {Subscription} from 'rxjs/Subscription';
import {QueryParams} from '../home/query-obeservables/query-params';

@Component({
  selector: 'subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})

export class SubcategoryComponent implements OnInit {
  private subscription: Subscription;
  private currentSearchString: string;
  currentSubcategoryId:string;
  private currentPage = 1;
  loading:boolean =false;
  isValid:boolean;
  constructor(private subcategoryService: SubcategoryService, private categoryService: CategoryService,
              private queryParamsService: QueryParamsService, private subcategories: Subcategories)  {
    this.getSubcategories(null);
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
          this.getSubcategories(queryParam);
        }
      );
  }

  public getSubcategories(queryParams: QueryParams) {
    this.subcategoryService.getSubcategories(queryParams).subscribe(data => {
     console.log(data);
      },
    error => {
      window.alert(error._body);
    });

  }

  public deleteSubcategory(category: Subcategory) {
    let parentCatId: string = this.categoryService.getCategory(category.getParentName());
    this.subcategoryService.delete(category.getId(), parentCatId).subscribe(data => {

    });
  }
  // public deleteSubcategory(id: string) {
  //   //.alert("Are You Sure You want to delete?");
  //   console.log("Id "+ id);
  //    this.subcategoryService.delete(category.getId(), parentCatId).subscribe(data => {
  //    });
  //  }

  getPage(page: number ) {
    this.currentPage = page;
    this.queryParamsService.setPageNumber( page - 1);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  public updateSubcategory(category: Subcategory) {
    this.loading = true;
    this.subcategoryService.update(category).subscribe(data => {
		 this.loading = false;
    });
  }
 
    onRowClick(event){
     this.isValid = true;
    } 
    
  // public getSubcategory(subcategory: Subcategory) {
  //     this.currentSubcategoryId = subcategory.getId();
  //  }

}

