"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = (function () {
    function Request() {
    }
    Request.prototype.setId = function (id) {
        this.id = id;
    };
    Request.prototype.getId = function () {
        return this.id;
    };
    Request.prototype.setDescription = function (Description) {
        this.Description = Description;
    };
    Request.prototype.getDescription = function () {
        return this.Description;
    };
    Request.prototype.setStatus = function (Status) {
        this.Status = Status;
    };
    Request.prototype.getStatus = function () {
        return this.Status;
    };
    Request.prototype.setDOB = function (DOB) {
        return DOB = DOB;
    };
    Request.prototype.getDOB = function () {
        return this.DOB;
    };
    Request.prototype.setProject = function (Project) {
        this.Project = Project;
    };
    Request.prototype.getProject = function () {
        return this.Project;
    };
    Request.prototype.setRaised = function (Raised) {
        this.Raised = Raised;
    };
    Request.prototype.getRaised = function () {
        return this.Raised;
    };
    Request.prototype.setAction = function (Action) {
        this.Action = Action;
    };
    Request.prototype.getAction = function () {
        return this.Action;
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=request.js.map