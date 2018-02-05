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
var user_service_1 = require("./user.service");
var users_1 = require("./users");
var query_params_service_1 = require("../home/query-obeservables/query-params.service");
var UserComponent = (function () {
    function UserComponent(userService, users, queryParamsService) {
        this.userService = userService;
        this.users = users;
        this.queryParamsService = queryParamsService;
        this.currentPage = 1;
        this.getUsers(null);
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.queryParamsService.getQueryParams()
            .subscribe(function (queryParam) {
            console.log(queryParam);
            if (_this.currentSearchString !== queryParam.searchString) {
                queryParam.pageNumber = 0;
                _this.currentPage = 1;
                _this.currentSearchString = queryParam.searchString;
            }
            _this.getUsers(queryParam);
        });
    };
    UserComponent.prototype.getUsers = function (queryParams) {
        this.userService.getUsers(queryParams).subscribe(function (data) {
        }, function (error) {
            window.alert(error._body);
        });
    };
    UserComponent.prototype.deleteUser = function (user) {
        this.userService.delete(user.getId()).subscribe(function (data) {
        });
    };
    UserComponent.prototype.getPage = function (page) {
        this.currentPage = page;
        this.queryParamsService.setPageNumber(page - 1);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.scss']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        users_1.Users,
        query_params_service_1.QueryParamsService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map