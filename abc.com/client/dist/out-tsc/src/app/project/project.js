"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = (function () {
    function Project() {
        this.pplList = new Array();
    }
    Project.prototype.setId = function (id) {
        this.id = id;
    };
    Project.prototype.getId = function () {
        return this.id;
    };
    Project.prototype.setProjectName = function (projectName) {
        this.projectName = projectName;
    };
    Project.prototype.getProjectName = function () {
        return this.projectName;
    };
    Project.prototype.setJobNumber = function (jobNumber) {
        this.jobNumber = jobNumber;
    };
    Project.prototype.getJobNumber = function () {
        return this.jobNumber;
    };
    Project.prototype.setSiteAddress = function (siteAddress) {
        this.siteAddress = siteAddress;
    };
    Project.prototype.getSiteAddress = function () {
        return this.siteAddress;
    };
    Project.prototype.setDescription = function (description) {
        this.description = description;
    };
    Project.prototype.getDescription = function () {
        return this.description;
    };
    Project.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    Project.prototype.getStartDate = function () {
        return this.startDate;
    };
    Project.prototype.setClientName = function (clientName) {
        this.clientName = clientName;
    };
    Project.prototype.getClientName = function () {
        return this.clientName;
    };
    Project.prototype.setPhaseName = function (phaseName) {
        this.phaseName = phaseName;
    };
    Project.prototype.getPhaseName = function () {
        return this.phaseName;
    };
    Project.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
    };
    Project.prototype.getClientId = function () {
        return this.clientId;
    };
    Project.prototype.setPhase = function (phase) {
        this.phase = phase;
    };
    Project.prototype.getPhase = function () {
        return this.phase;
    };
    Project.prototype.getPplList = function () {
        return this.pplList;
    };
    Project.prototype.setPplList = function (employees) {
        this.pplList = employees;
    };
    Project.prototype.addEmployee = function (employee) {
        this.pplList.push(employee);
    };
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map