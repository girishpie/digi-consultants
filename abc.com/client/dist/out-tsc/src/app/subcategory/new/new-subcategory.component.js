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
var category_service_1 = require("../../category/category.service");
var categories_1 = require("../../category/categories");
var subcategory_1 = require("../subcategory");
var subcategory_service_1 = require("../subcategory.service");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var subcategory_component_1 = require("../subcategory.component");
//declare var jQuery:any;
var subcategoryState = { name: 'subcategory', url: '/subcategory', component: subcategory_component_1.SubcategoryComponent };
var NewSubcategoryComponent = (function () {
    function NewSubcategoryComponent(subcategoryService, categoryService, categories, stateService) {
        this.subcategoryService = subcategoryService;
        this.categoryService = categoryService;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewSubcategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    NewSubcategoryComponent.prototype.addNewSubcategory = function () {
        var _this = this;
        var category = new subcategory_1.Subcategory();
        category.setName(this.name);
        category.setDescription(this.description);
        category.setCategoryId(this.categoryId);
        this.subcategoryService.save(category).subscribe(function (data) {
            console.log(data);
            _this.stateService.go('subcategory');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSubcategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories(null).subscribe(function (data) {
            _this.availableCategories = _this.categories.getCategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewSubcategoryComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewSubcategoryComponent;
}());
NewSubcategoryComponent = __decorate([
    core_1.Component({
        selector: 'new-subcategory',
        templateUrl: './new-subcategory.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [subcategory_service_1.SubcategoryService, category_service_1.CategoryService,
        categories_1.Categories, angular_1.StateService])
], NewSubcategoryComponent);
exports.NewSubcategoryComponent = NewSubcategoryComponent;
//# sourceMappingURL=new-subcategory.component.js.map