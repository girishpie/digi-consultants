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
/**
 * Created by gipai on 10/2/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var user_1 = require("./user");
var users_1 = require("./users");
var globals_1 = require("../globals/globals");
var UserService = (function () {
    function UserService(http, users, globals) {
        this.http = http;
        this.users = users;
        this.globals = globals;
        this.userUrl = this.globals.getBackendUrl() + 'user/';
    }
    UserService.prototype.getUsers = function (queryParams) {
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
        var endPoint = this.userUrl + '?pageNumber=' + pageNumber + '&size=' + pageSize;
        if (searchString) {
            endPoint += '&searchString=' + searchString;
        }
        // Returns response
        return this.http.get(endPoint)
            .map(function (res) {
            var res1 = res.json();
            var response = res1.response;
            var i = 0;
            var users = new Array();
            for (i = 0; i < response.length; i++) {
                var user = new user_1.User();
                user.setUserId(response[i].userId);
                user.setFirstName(response[i].firstName);
                user.setLastName(response[i].lastName);
                user.setEmail(response[i].firstEmail);
                user.setPhoneNumber(response[i].phoneNumber);
                user.setPassword(response[i].password);
                user.setId(response[i].id);
                user.setRoleIds(response[i].roleIds);
                users.push(user);
            }
            _this.users.setUsers(users);
            _this.users.setTotalItems(res1.totalElements);
            return true;
        });
    };
    UserService.prototype.save = function (user) {
        var _this = this;
        var endPoint = this.userUrl;
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // Returns response
        return this.http.post(endPoint, user)
            .map(function (res) {
            var res1 = res.json();
            user.setId(res1.id);
            _this.users.addUser(user);
            return res1.id;
        });
    };
    UserService.prototype.delete = function (id) {
        var _this = this;
        var endPoint = this.userUrl + id;
        // Returns response
        return this.http.delete(endPoint)
            .map(function (res) {
            var res1 = res.json();
            _this.users.deleteUser(res1.response);
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, users_1.Users, globals_1.Globals])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map