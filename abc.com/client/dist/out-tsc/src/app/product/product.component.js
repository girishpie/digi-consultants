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
var product_service_1 = require("./product.service");
var products_1 = require("./products");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var sections_1 = require("../section/sections");
var section_service_1 = require("../section/section.service");
var ProductComponent = (function () {
    function ProductComponent(productService, sectionService, products, sections, queryParamsService) {
        this.productService = productService;
        this.sectionService = sectionService;
        this.products = products;
        this.sections = sections;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.loading = false;
        this.getProducts(null);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSections();
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getProducts(queryParam);
        });
    };
    ProductComponent.prototype.getProducts = function (queryParams) {
        this.productService.getProducts(queryParams, this.sectionId).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    ProductComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.loading = true;
        this.productService.update(product).subscribe(function (data) {
            _this.loading = false;
        });
    };
    ProductComponent.prototype.onRowClick = function (event) {
        this.isValid = true;
    };
    ProductComponent.prototype.deleteProduct = function (product) {
        this.productService.delete(product.getId()).subscribe(function (data) {
        });
    };
    ProductComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    ProductComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService.getSections(null).subscribe(function (data) {
            _this.availableSections = _this.sections.getSections();
        }, function (error) {
            window.alert(error._body);
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.scss']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, section_service_1.SectionService,
        products_1.Products, sections_1.Sections,
        query_params_service_1.QueryParamsService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map