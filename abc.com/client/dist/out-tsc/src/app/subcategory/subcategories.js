"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subcategories = (function () {
    function Subcategories() {
        this.subcategories = new Array();
    }
    Subcategories.prototype.setSubcategories = function (subcategories) {
        this.subcategories = subcategories;
    };
    Subcategories.prototype.getSubcategories = function () {
        return this.subcategories;
    };
    Subcategories.prototype.deleteSubcategory = function (categoryId) {
        var categoryFound = this.subcategories.find(function (category) { return categoryId === category.getId(); });
        var index = this.subcategories.indexOf(categoryFound);
        if (index !== -1) {
            this.subcategories.splice(index, 1);
            this.totalItems--;
        }
    };
    Subcategories.prototype.addSubcategory = function (category) {
        this.subcategories.push(category);
        this.totalItems++;
    };
    Subcategories.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Subcategories.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Subcategories;
}());
Subcategories = __decorate([
    core_1.Injectable()
], Subcategories);
exports.Subcategories = Subcategories;
//# sourceMappingURL=subcategories.js.map