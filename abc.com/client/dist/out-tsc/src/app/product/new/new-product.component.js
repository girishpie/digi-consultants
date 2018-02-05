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
var product_1 = require("../product");
var products_1 = require("../products");
var product_service_1 = require("../product.service");
var sections_1 = require("../../section/sections");
var section_service_1 = require("../../section/section.service");
var categories_1 = require("../../category/categories");
var category_service_1 = require("../../category/category.service");
var core_1 = require("@angular/core");
var angular_1 = require("@uirouter/angular");
var product_component_1 = require("../product.component");
//declare var jQuery:any;
var productState = { name: 'product', url: '/product', component: product_component_1.ProductComponent };
var NewProductComponent = (function () {
    function NewProductComponent(sectionService, productService, categoryService, products, sections, categories, stateService) {
        this.sectionService = sectionService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.products = products;
        this.sections = sections;
        this.categories = categories;
        this.stateService = stateService;
    }
    NewProductComponent.prototype.ngOnInit = function () {
        this.getSections();
        this.getCategories();
    };
    NewProductComponent.prototype.addNewProduct = function () {
        var _this = this;
        var product = new product_1.Product();
        product.setSectionId(this.sectionId);
        product.setCategoryId(this.categoryId);
        product.setName(this.name);
        product.setAmount(this.amount);
        product.setBimId(this.bimId);
        product.setDescription(this.description);
        product.setUnit(this.unit);
        product.setQuantity(this.quantity);
        this.productService.save(product).subscribe(function (data) {
            console.log(data);
            //product.setId(data);
            // this.products.addProduct(product);
            _this.stateService.go('product');
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.getSections = function () {
        var _this = this;
        this.sectionService.getSections(null).subscribe(function (data) {
            _this.availableSections = _this.sections.getSections();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories(null).subscribe(function (data) {
            _this.availableCategories = _this.categories.getCategories();
        }, function (error) {
            window.alert(error._body);
        });
    };
    NewProductComponent.prototype.goBack = function () {
        window.history.back();
    };
    return NewProductComponent;
}());
NewProductComponent = __decorate([
    core_1.Component({
        selector: 'new-product',
        templateUrl: './new-product.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [section_service_1.SectionService, product_service_1.ProductService, category_service_1.CategoryService,
        products_1.Products, sections_1.Sections, categories_1.Categories, angular_1.StateService])
], NewProductComponent);
exports.NewProductComponent = NewProductComponent;
//# sourceMappingURL=new-product.component.js.map