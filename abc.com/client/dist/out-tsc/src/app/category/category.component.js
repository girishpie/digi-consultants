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
var core_1 = require("@angular/core");
var category_service_1 = require("./category.service");
var categories_1 = require("./categories");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var subcategories_1 = require("../subcategory/subcategories");
var subcategory_service_1 = require("../subcategory/subcategory.service");
var CategoryComponent = (function () {
    function CategoryComponent(categoryService, queryParamsService, categories, subcategories, subcategoryService) {
        this.categoryService = categoryService;
        this.queryParamsService = queryParamsService;
        this.categories = categories;
        this.subcategories = subcategories;
        this.subcategoryService = subcategoryService;
        this.currentPage = 1;
        this.getCategories(null);
        this.getSubcategories();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageMode = "viewMode";
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getCategories(queryParam);
        });
    };
    CategoryComponent.prototype.getSubcategories = function () {
        var _this = this;
        this.subcategoryService.getSubcategories(null).subscribe(function (data) {
            _this.availableSubcat = _this.subcategories.getSubcategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    CategoryComponent.prototype.getCategories = function (queryParams) {
        this.categoryService.getCategories(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    CategoryComponent.prototype.editCategory = function (category) {
        this.pageMode = "editMode";
    };
    CategoryComponent.prototype.saveCategory = function (category) {
        this.pageMode = "viewMode";
    };
    CategoryComponent.prototype.cancelEdit = function () {
        this.pageMode = "viewMode";
    };
    CategoryComponent.prototype.deleteCategory = function (category) {
        this.categoryService.delete(category.getId()).subscribe(function (data) {
        });
    };
    CategoryComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'category',
        templateUrl: './category.component.html',
        styleUrls: ['./category.component.scss']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        query_params_service_1.QueryParamsService, categories_1.Categories,
        subcategories_1.Subcategories, subcategory_service_1.SubcategoryService])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map