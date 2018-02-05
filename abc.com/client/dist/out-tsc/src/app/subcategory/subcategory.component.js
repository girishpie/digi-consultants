"use strict";
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
var category_service_1 = require("../category/category.service");
var core_1 = require("@angular/core");
var subcategory_service_1 = require("./subcategory.service");
var subcategories_1 = require("./subcategories");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var SubcategoryComponent = (function () {
    function SubcategoryComponent(subcategoryService, categoryService, queryParamsService, subcategories) {
        this.subcategoryService = subcategoryService;
        this.categoryService = categoryService;
        this.queryParamsService = queryParamsService;
        this.subcategories = subcategories;
        this.currentPage = 1;
        this.loading = false;
        this.getSubcategories(null);
    }
    SubcategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getSubcategories(queryParam);
        });
    };
    SubcategoryComponent.prototype.getSubcategories = function (queryParams) {
        this.subcategoryService.getSubcategories(queryParams).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            window.alert(error._body);
        });
    };
    SubcategoryComponent.prototype.deleteSubcategory = function (category) {
        var parentCatId = this.categoryService.getCategory(category.getParentName());
        this.subcategoryService.delete(category.getId(), parentCatId).subscribe(function (data) {
        });
    };
    SubcategoryComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    SubcategoryComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    SubcategoryComponent.prototype.updateSubcategory = function (category) {
        var _this = this;
        this.loading = true;
        this.categoryService.update(category).subscribe(function (data) {
            _this.loading = false;
        });
    };
    SubcategoryComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    return SubcategoryComponent;
}());
SubcategoryComponent = __decorate([
    core_1.Component({
        selector: 'subcategory',
        templateUrl: './subcategory.component.html',
        styleUrls: ['./subcategory.component.scss']
    }),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService, category_service_1.CategoryService,
        query_params_service_1.QueryParamsService, subcategories_1.Subcategories])
], SubcategoryComponent);
exports.SubcategoryComponent = SubcategoryComponent;
//# sourceMappingURL=subcategory.component.js.map