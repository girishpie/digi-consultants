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
var quality_1 = require("./quality");
var qualities_1 = require("./qualities");
var globals_1 = require("../globals/globals");
var QualityService = (function () {
    function QualityService(http, qualities, globals) {
        this.http = http;
        this.qualities = qualities;
        this.globals = globals;
        this.qualityUrl = this.globals.getBackendUrl() + 'quality/';
    }
    QualityService.prototype.getQualities = function (queryParams) {
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
        var endPoint = this.qualityUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var qualities = new Array();
            for (i = 0; i < response.length; i++) {
                var quality = new quality_1.Quality();
                quality.setTitle(response[i].Title);
                quality.setStatus(response[i].Status);
                quality.setOpened(response[i].Opened);
                quality.setDescription(response[i].Description);
                quality.setRectified(response[i].Rectified);
                qualities.push(quality);
            }
            _this.qualities.setQualities(qualities);
            _this.qualities.setTotalItems(res1.totalElements);
            return true;
        });
    };
    QualityService.prototype.save = function (quality) {
        var _this = this;
        var endPoint = this.qualityUrl + quality.getId();
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        // Returns response
        return this.http.post(endPoint, quality, options)
            .map(function (res) {
            var res1 = res.json();
            quality.setId(res1.id);
            _this.qualities.addQuality(quality);
            return res1.id;
        });
    };
    QualityService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.qualityUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.qualities.deleteQuality(res1.id);
        });
    };
    QualityService.prototype.update = function (quality) {
        var endPoint = this.qualityUrl + quality.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return QualityService;
}());
QualityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, qualities_1.Qualities, globals_1.Globals])
], QualityService);
exports.QualityService = QualityService;
//# sourceMappingURL=quality.service.js.map