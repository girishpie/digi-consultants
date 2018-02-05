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
var section_1 = require("./section");
var sections_1 = require("./sections");
var globals_1 = require("../globals/globals");
var SectionService = (function () {
    function SectionService(http, sections, globals) {
        this.http = http;
        this.sections = sections;
        this.globals = globals;
        this.sectionUrl = this.globals.getBackendUrl() + 'section/';
    }
    SectionService.prototype.getSections = function (queryParams) {
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
        var endPoint = this.sectionUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var sections = new Array();
            for (i = 0; i < response.length; i++) {
                var section = new section_1.Section();
                section.setSectionName(response[i].sectionName);
                section.setSpecificationName(response[i].sepecificationName);
                section.setProductNames(response[i].productNames);
                section.setId(response[i].id);
                sections.push(section);
            }
            _this.sections.setSections(sections);
            _this.sections.setTotalItems(res1.totalElements);
            return true;
        });
    };
    SectionService.prototype.save = function (section) {
        var _this = this;
        var endPoint = this.sectionUrl + section.getBoqId();
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, section)
            .map(function (res) {
            var res1 = res.json();
            section.setId(res1.id);
            _this.sections.addSection(section);
            return res1.id;
        });
    };
    SectionService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.sectionUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.sections.deleteSection(res1.response);
        });
    };
    SectionService.prototype.update = function (section) {
        var endPoint = this.sectionUrl + section.getId();
        // Returns response
        return this.http.patch(endPoint, document)
            .map(function (res) {
            var res1 = res.json();
        });
    };
    return SectionService;
}());
SectionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, sections_1.Sections, globals_1.Globals])
], SectionService);
exports.SectionService = SectionService;
//# sourceMappingURL=section.service.js.map