"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Categories = (function () {
    function Categories() {
        this.categories = new Array();
    }
    Categories.prototype.setCategories = function (categories) {
        this.categories = categories;
    };
    Categories.prototype.getCategories = function () {
        return this.categories;
    };
    Categories.prototype.deleteCategory = function (categoryId) {
        var categoryFound = this.categories.find(function (category) { return categoryId === category.getId(); });
        var index = this.categories.indexOf(categoryFound);
        if (index !== -1) {
            this.categories.splice(index, 1);
            this.totalItems--;
        }
    };
    Categories.prototype.addCategory = function (category) {
        this.categories.push(category);
        this.totalItems++;
    };
    Categories.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Categories.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Categories;
}());
Categories = __decorate([
    core_1.Injectable()
], Categories);
exports.Categories = Categories;
//# sourceMappingURL=categories.js.map