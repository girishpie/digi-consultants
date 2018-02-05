"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product() {
    }
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setProductCatName = function (productCatName) {
        this.productCatName = productCatName;
    };
    Product.prototype.getProductCatName = function () {
        return this.productCatName;
    };
    Product.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Product.prototype.getQuantity = function () {
        return this.quantity;
    };
    Product.prototype.setBimId = function (bimId) {
        this.bimId = bimId;
    };
    Product.prototype.getBimId = function () {
        return this.bimId;
    };
    Product.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Product.prototype.getAmount = function () {
        return this.amount;
    };
    Product.prototype.setUnit = function (unit) {
        this.unit = unit;
    };
    Product.prototype.getUnit = function () {
        return this.unit;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setSectionName = function (sectionName) {
        this.sectionName = sectionName;
    };
    Product.prototype.getSectionName = function () {
        return this.sectionName;
    };
    Product.prototype.setSectionId = function (sectionId) {
        this.sectionId = sectionId;
    };
    Product.prototype.getSectionId = function () {
        return this.sectionId;
    };
    Product.prototype.setCategoryId = function (categoryId) {
        this.categoryId = categoryId;
    };
    Product.prototype.getCategoryId = function () {
        return this.categoryId;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map