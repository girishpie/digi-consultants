"use strict";
/**
 * Created by gipai on 10/4/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var QueryParams = (function () {
    function QueryParams() {
        this._pageNumber = 0;
        this._pageSize = 3;
    }
    Object.defineProperty(QueryParams.prototype, "searchString", {
        get: function () {
            return this._searchString;
        },
        set: function (value) {
            this._searchString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageNumber", {
        get: function () {
            return this._pageNumber;
        },
        set: function (value) {
            this._pageNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueryParams.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    return QueryParams;
}());
exports.QueryParams = QueryParams;
//# sourceMappingURL=query-params.js.map