"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = (function () {
    function Category() {
    }
    Category.prototype.setId = function (id) {
        this.id = id;
    };
    Category.prototype.getId = function () {
        return this.id;
    };
    Category.prototype.setName = function (name) {
        this.name = name;
    };
    Category.prototype.getName = function () {
        return this.name;
    };
    Category.prototype.setDescription = function (description) {
        this.description = description;
    };
    Category.prototype.getDescription = function () {
        return this.description;
    };
    Category.prototype.setSubCategories = function (subCategories) {
        this.subCategories = subCategories;
    };
    Category.prototype.getSubCategories = function () {
        return this.subCategories;
    };
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=category.js.map