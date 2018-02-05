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
var boq_1 = require("./boq");
var boqs_1 = require("./boqs");
var globals_1 = require("../globals/globals");
var BoQService = (function () {
    function BoQService(http, boqs, globals) {
        this.http = http;
        this.boqs = boqs;
        this.globals = globals;
        this.boqUrl = this.globals.getBackendUrl() + 'boq/';
    }
    BoQService.prototype.getBoQs = function (queryParams) {
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
        var endPoint = this.boqUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var boqs = new Array();
            for (i = 0; i < response.length; i++) {
                var boq = new boq_1.BoQ();
                boq.setProjectId(response[i].projectId);
                boq.setBoQDepartmentName(response[i].departmentName);
                boq.setVersion(response[i].version);
                boq.setTotalVersions(response[i].totalVersions);
                boq.setId(response[i].id);
                boqs.push(boq);
            }
            _this.boqs.setBoQs(boqs);
            _this.boqs.setTotalItems(res1.totalElements);
            return true;
        });
    };
    BoQService.prototype.save = function (boq) {
        var _this = this;
        var endPoint = this.boqUrl + boq.getBoQDepartmentId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, boq)
            .map(function (res) {
            var res1 = res.json();
            boq.setId(res1.id);
            _this.boqs.addBoQ(boq);
            return res1.id;
        });
    };
    BoQService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.boqUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.boqs.deleteBoQ(res1.response);
        });
    };
    return BoQService;
}());
BoQService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, boqs_1.BoQs, globals_1.Globals])
], BoQService);
exports.BoQService = BoQService;
//# sourceMappingURL=boq.service.js.map