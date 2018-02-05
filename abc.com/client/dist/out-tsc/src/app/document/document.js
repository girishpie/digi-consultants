"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Document = (function () {
    function Document() {
    }
    Document.prototype.setId = function (id) {
        this.id = id;
    };
    Document.prototype.getId = function () {
        return this.id;
    };
    Document.prototype.setDisplayName = function (name) {
        this.displayName = name;
    };
    Document.prototype.getDisplayName = function () {
        return this.displayName;
    };
    Document.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Document.prototype.getProjectName = function () {
        return this.projectName;
    };
    Document.prototype.setProjectId = function (projectId) {
        this.projectId = projectId;
    };
    Document.prototype.getProjectId = function () {
        return this.projectId;
    };
    Document.prototype.setCreatedBy = function (createdBy) {
        this.createdBy = createdBy;
    };
    Document.prototype.getCreatedBy = function () {
        return this.createdBy;
    };
    Document.prototype.setVersion = function (version) {
        this.version = version;
    };
    Document.prototype.getVersion = function () {
        return this.version;
    };
    Document.prototype.setCreationTime = function (creationTime) {
        this.creationTime = creationTime;
    };
    Document.prototype.getCreationTime = function () {
        return this.creationTime;
    };
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=document.js.map