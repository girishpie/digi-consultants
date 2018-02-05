"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PRESENT"] = 0] = "PRESENT";
    STATUS[STATUS["ABSENT"] = 1] = "ABSENT";
    STATUS[STATUS["APPOLOGIZED"] = 2] = "APPOLOGIZED";
})(STATUS || (STATUS = {}));
var MeetingEmployee = (function () {
    function MeetingEmployee(employee) {
        this.isPresent = true;
        this.isAbsent = false;
        this.isAppologized = false;
        this.employeeId = employee.getId();
        this.firstname = employee.getFirstname();
        this.lastname = employee.getLastname();
        this.role = employee.getRole();
        this.companyName = employee.getCompanyName();
        this.state = STATUS.PRESENT;
        this.isPartOfDL = true;
    }
    MeetingEmployee.prototype.setId = function (id) {
        this.employeeId = id;
    };
    MeetingEmployee.prototype.getId = function () {
        return this.employeeId;
    };
    MeetingEmployee.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    MeetingEmployee.prototype.getFirstname = function () {
        return this.firstname;
    };
    MeetingEmployee.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    MeetingEmployee.prototype.getLastname = function () {
        return this.lastname;
    };
    MeetingEmployee.prototype.setRole = function (role) {
        this.role = role;
    };
    MeetingEmployee.prototype.getRole = function () {
        return this.role;
    };
    MeetingEmployee.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    MeetingEmployee.prototype.getCompanyName = function () {
        return this.companyName;
    };
    MeetingEmployee.prototype.setStatus = function (status) {
        this.state = status;
        this.isPresent = false;
        this.isAbsent = false;
        this.isAppologized = false;
        if (status === STATUS.PRESENT) {
            this.isPresent = true;
        }
        else if (status === STATUS.ABSENT) {
            this.isAbsent = true;
        }
        else {
            this.isAppologized = true;
        }
    };
    MeetingEmployee.prototype.getStatus = function () {
        if (this.isPresent) {
            return STATUS.PRESENT;
        }
        else if (this.isAbsent) {
            return STATUS.ABSENT;
        }
        else {
            return STATUS.APPOLOGIZED;
        }
    };
    MeetingEmployee.prototype.setIsPartOfDL = function (isPartofDL) {
        this.isPartOfDL = isPartofDL;
    };
    MeetingEmployee.prototype.getIsPartOfDL = function () {
        return this.isPartOfDL;
    };
    return MeetingEmployee;
}());
exports.MeetingEmployee = MeetingEmployee;
//# sourceMappingURL=meeting-employee.js.map