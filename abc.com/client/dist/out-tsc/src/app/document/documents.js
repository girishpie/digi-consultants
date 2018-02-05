"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Documents = (function () {
    function Documents() {
        this.documents = new Array();
    }
    Documents.prototype.setDocuments = function (documents) {
        this.documents = documents;
    };
    Documents.prototype.getDocuments = function () {
        return this.documents;
    };
    Documents.prototype.deleteDocument = function (documentId) {
        var documentFound = this.documents.find(function (document) { return documentId === document.getId(); });
        var index = this.documents.indexOf(documentFound);
        if (index !== -1) {
            this.documents.splice(index, 1);
            this.totalItems--;
        }
    };
    Documents.prototype.addDocument = function (document) {
        this.documents.push(document);
        this.totalItems++;
    };
    Documents.prototype.setTotalItems = function (totalItems) {
        this.totalItems = totalItems;
    };
    Documents.prototype.getTotalItems = function () {
        return this.totalItems;
    };
    return Documents;
}());
Documents = __decorate([
    core_1.Injectable()
], Documents);
exports.Documents = Documents;
//# sourceMappingURL=documents.js.map