"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var document_1 = require("./document");
var documents_1 = require("./documents");
var globals_1 = require("../globals/globals");
var DocumentService = (function () {
    function DocumentService(http, documents, globals) {
        this.http = http;
        this.documents = documents;
        this.globals = globals;
        this.documentUrl = this.globals.getBackendUrl() + 'document/';
    }
    DocumentService.prototype.getDocuments = function (queryParams) {
        var _this = this;
        var pageNumber = 0;
        var pageSize = 3;
        var searchString = null;
        if (queryParams !== null) {
            pageNumber = queryParams.pageNumber;
            if (queryParams.searchString) {
                searchString = queryParams.searchString;
            }
        }
        var endPoint = this.documentUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var documents = new Array();
            for (i = 0; i < response.length; i++) {
                var document_2 = new document_1.Document();
                document_2.setDisplayName(response[i].displayName);
                document_2.setProjectName(response[i].projectName);
                document_2.setCreatedBy(response[i].createdBy);
                document_2.setVersion(response[i].version);
                document_2.setCreationTime(response[i].creationTime);
                document_2.setId(response[i].id);
                documents.push(document_2);
            }
            _this.documents.setDocuments(documents);
            _this.documents.setTotalItems(res1.totalElements);
            return true;
        });
    };
    DocumentService.prototype.save = function (event, document) {
        var _this = this;
        var endPoint = this.documentUrl + document.getProjectId();
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            return this.http.post(endPoint, formData)
                .map(function (res) {
                var res1 = res.json();
                document.setId(res1.response.id);
                _this.documents.addDocument(document);
                return res1.id;
            });
        }
    };
    DocumentService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.documentUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.documents.deleteDocument(res1.response);
        });
    };
    DocumentService.prototype.update = function (document) {
        var endPoint = this.documentUrl + document.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return DocumentService;
}());
DocumentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, documents_1.Documents, globals_1.Globals])
], DocumentService);
exports.DocumentService = DocumentService;
//# sourceMappingURL=document.service.js.map