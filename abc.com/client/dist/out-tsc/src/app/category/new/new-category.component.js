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
var category_1 = require("../category");
var categories_1 = require("../categories");
var category_service_1 = require("../category.service");
var category_component_1 = require("../category.component");
var angular_1 = require("@uirouter/angular");
var core_1 = require("@angular/core");
var categoryState = { name: 'category', url: '/category', component: category_component_1.CategoryComponent };
var NewCategoryComponent = (function () {
    function NewCategoryComponent(categoryService, categories, stateService) {
        this.categoryService = categoryService;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewCategoryComponent.prototype.ngOnInit = function () {
    };
    NewCategoryComponent.prototype.addNewCategory = function () {
        var _this = this;
        var category = new category_1.Category();
        category.setName(this.name);
        category.setDescription(this.description);
        this.categoryService.save(category).subscribe(function (data) {
            console.log(data);
            _this.stateService.go('category');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewCategoryComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewCategoryComponent;
}());
NewCategoryComponent = __decorate([
    core_1.Component({
        selector: 'new-category',
        templateUrl: './new-category.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, categories_1.Categories, angular_1.StateService])
], NewCategoryComponent);
exports.NewCategoryComponent = NewCategoryComponent;
//# sourceMappingURL=new-category.component.js.map