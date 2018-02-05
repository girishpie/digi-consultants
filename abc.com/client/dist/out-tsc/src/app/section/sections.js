"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sections = (function () {
    function Sections() {
        this.sections = new Array();
    }
    Sections.prototype.setSections = function (clients) {
        this.sections = clients;
    };
    Sections.prototype.getSections = function () {
        return this.sections;
    };
    Sections.prototype.deleteSection = function (sectionId) {
        var sectionFound = this.sections.find(function (section) { return sectionId === section.getId(); });
        var index = this.sections.indexOf(sectionFound);
        if (index !== -1) {
            this.sections.splice(index, 1);
            this.totalItems--;
        }
    };
    Sections.prototype.addSection = function (section) {
        this.sections.push(section);
        this.totalItems++;
    };
    Sections.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Sections.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Sections;
}());
Sections = __decorate([
    core_1.Injectable()
], Sections);
exports.Sections = Sections;
//# sourceMappingURL=sections.js.map