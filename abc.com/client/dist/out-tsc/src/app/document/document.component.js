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
var document_service_1 = require("./document.service");
var documents_1 = require("./documents");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var DocumentComponent = (function () {
    function DocumentComponent(documentService, documents, queryParamsService) {
        this.documentService = documentService;
        this.documents = documents;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getDocuments(null);
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getDocuments(queryParam);
        });
    };
    DocumentComponent.prototype.getDocuments = function (queryParams) {
        this.documentService.getDocuments(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    DocumentComponent.prototype.updateDocument = function (document) {
        var _this = this;
        this.loading = true;
        this.documentService.update(document).subscribe(function (data) {
            _this.loading = false;
        });
    };
    DocumentComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    DocumentComponent.prototype.deleteDocument = function (document) {
        this.documentService.delete(document.getId()).subscribe(function (data) {
        });
    };
    DocumentComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return DocumentComponent;
}());
DocumentComponent = __decorate([
    core_1.Component({
        selector: 'document',
        templateUrl: './document.component.html',
        styleUrls: ['./document.component.scss']
    }),
    __metadata("design:paramtypes", [document_service_1.DocumentService,
        documents_1.Documents,
        query_params_service_1.QueryParamsService])
], DocumentComponent);
exports.DocumentComponent = DocumentComponent;
//# sourceMappingURL=document.component.js.map