"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Qualities = (function () {
    function Qualities() {
        this.qualities = new Array();
    }
    Qualities.prototype.setQualities = function (qualities) {
        this.qualities = qualities;
    };
    Qualities.prototype.getQualities = function () {
        return this.qualities;
    };
    Qualities.prototype.deleteQuality = function (qualityId) {
        var qualityFound = this.qualities.find(function (quality) { return qualityId === quality.getId(); });
        var index = this.qualities.indexOf(qualityFound);
        if (index !== -1) {
            this.qualities.splice(index, 1);
            this.totalItems--;
        }
    };
    Qualities.prototype.addQuality = function (quality) {
        this.qualities.push(quality);
        this.totalItems++;
    };
    Qualities.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Qualities.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Qualities;
}());
Qualities = __decorate([
    core_1.Injectable()
], Qualities);
exports.Qualities = Qualities;
//# sourceMappingURL=qualities.js.map