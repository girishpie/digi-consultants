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
var boq_service_1 = require("./boq.service");
var boqs_1 = require("./boqs");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var jsPDF = require("jspdf");
var BoQComponent = (function () {
    function BoQComponent(boqService, boqs, element, queryParamsService) {
        this.boqService = boqService;
        this.boqs = boqs;
        this.element = element;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.getBoQs(null);
    }
    BoQComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getBoQs(queryParam);
        });
    };
    BoQComponent.prototype.getBoQs = function (queryParams) {
        this.boqService.getBoQs(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    BoQComponent.prototype.deleteBoQ = function (boq) {
        this.boqService.delete(boq.getId()).subscribe(function (data) {
        });
    };
    BoQComponent.prototype.exportAsPdf = function () {
        var pdf = new jsPDF('p', 'pt', 'a4');
        var elementHandler = {
            '#Export': function (element, renderer) {
                return true;
            }
        };
        pdf.setFillColor(204, 204, 204, 0);
        var options = {
            pagesplit: true,
            'elementHandlers': elementHandler,
        };
        pdf.addHTML(document.getElementById('tableboq'), 5, 5, options, function () {
            pdf.save('web.pdf');
        });
    };
    BoQComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    BoQComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return BoQComponent;
}());
__decorate([
    core_1.ViewChild('table'),
    __metadata("design:type", core_1.ElementRef)
], BoQComponent.prototype, "el", void 0);
BoQComponent = __decorate([
    core_1.Component({
        selector: 'boq',
        templateUrl: './boq.component.html',
        styleUrls: ['./boq.component.scss']
    }),
    __metadata("design:paramtypes", [boq_service_1.BoQService,
        boqs_1.BoQs, core_1.ElementRef,
        query_params_service_1.QueryParamsService])
], BoQComponent);
exports.BoQComponent = BoQComponent;
//# sourceMappingURL=boq.component.js.map