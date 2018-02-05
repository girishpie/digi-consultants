"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Section = (function () {
    function Section() {
    }
    Section.prototype.setId = function (id) {
        this.id = id;
    };
    Section.prototype.getId = function () {
        return this.id;
    };
    Section.prototype.setSectionName = function (name) {
        this.sectionName = name;
    };
    Section.prototype.getSectionName = function () {
        return this.sectionName;
    };
    Section.prototype.setSpecificationName = function (specificationName) {
        this.specificationName = specificationName;
    };
    Section.prototype.getSpecificationName = function () {
        return this.specificationName;
    };
    Section.prototype.setBoqId = function (boqId) {
        this.boqId = boqId;
    };
    Section.prototype.getBoqId = function () {
        return this.boqId;
    };
    Section.prototype.setDrawingIds = function (drawingIds) {
        this.drawingIds = drawingIds;
    };
    Section.prototype.getDrawingIds = function () {
        return this.drawingIds;
    };
    Section.prototype.setProductNames = function (productNames) {
        this.productNames = productNames;
    };
    Section.prototype.getProductNames = function () {
        return this.productNames;
    };
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=section.js.map