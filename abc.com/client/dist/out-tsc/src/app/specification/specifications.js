"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Specifications = (function () {
    function Specifications() {
        this.specifications = new Array();
    }
    Specifications.prototype.setSpecifications = function (specifications) {
        this.specifications = specifications;
    };
    Specifications.prototype.getSpecifications = function () {
        return this.specifications;
    };
    Specifications.prototype.deleteSpecification = function (specificationId) {
        var specificationFound = this.specifications.find(function (specification) { return specificationId === specification.getId(); });
        var index = this.specifications.indexOf(specificationFound);
        if (index !== -1) {
            this.specifications.splice(index, 1);
            this.totalItems--;
        }
    };
    Specifications.prototype.addSpecification = function (specification) {
        this.specifications.push(specification);
        this.totalItems++;
    };
    Specifications.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Specifications.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Specifications;
}());
Specifications = __decorate([
    core_1.Injectable()
], Specifications);
exports.Specifications = Specifications;
//# sourceMappingURL=specifications.js.map