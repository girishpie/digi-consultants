"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BoQs = (function () {
    function BoQs() {
        this.boqs = new Array();
    }
    BoQs.prototype.setBoQs = function (boqs) {
        this.boqs = boqs;
    };
    BoQs.prototype.getBoQs = function () {
        return this.boqs;
    };
    BoQs.prototype.deleteBoQ = function (boqId) {
        var boqFound = this.boqs.find(function (boq) { return boqId === boq.getId(); });
        var index = this.boqs.indexOf(boqFound);
        if (index !== -1) {
            this.boqs.splice(index, 1);
            this.totalItems--;
        }
    };
    BoQs.prototype.addBoQ = function (boq) {
        this.boqs.push(boq);
        this.totalItems++;
    };
    BoQs.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    BoQs.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return BoQs;
}());
BoQs = __decorate([
    core_1.Injectable()
], BoQs);
exports.BoQs = BoQs;
//# sourceMappingURL=boqs.js.map