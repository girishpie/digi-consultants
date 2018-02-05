"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subcategory = (function () {
    function Subcategory() {
    }
    Subcategory.prototype.setId = function (id) {
        this.id = id;
    };
    Subcategory.prototype.getId = function () {
        return this.id;
    };
    Subcategory.prototype.setName = function (name) {
        this.name = name;
    };
    Subcategory.prototype.getName = function () {
        return this.name;
    };
    Subcategory.prototype.setDescription = function (description) {
        this.description = description;
    };
    Subcategory.prototype.getDescription = function () {
        return this.description;
    };
    Subcategory.prototype.setParentName = function (parentName) {
        this.parentName = parentName;
    };
    Subcategory.prototype.getParentName = function () {
        return this.parentName;
    };
    Subcategory.prototype.setCategoryId = function (categoryId) {
        this.categoryId = categoryId;
    };
    Subcategory.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    return Subcategory;
}());
exports.Subcategory = Subcategory;
//# sourceMappingURL=subcategory.js.map