"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TYPE;
(function (TYPE) {
    TYPE[TYPE["DISCUSSION"] = 0] = "DISCUSSION";
    TYPE[TYPE["SUB_DISCUSSION"] = 1] = "SUB_DISCUSSION";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
;
var Discussion = (function () {
    function Discussion() {
        this.type = TYPE.DISCUSSION;
        this.numSubDiscussions = 0;
    }
    Discussion.prototype.getItem = function () {
        return this.item;
    };
    Discussion.prototype.setItem = function (item) {
        this.item = item;
    };
    Discussion.prototype.getText = function () {
        return this.text;
    };
    Discussion.prototype.setText = function (text) {
        this.text = text;
    };
    Discussion.prototype.setInfoActionBy = function (infoActionBy) {
        this.infoActionBy = infoActionBy;
    };
    Discussion.prototype.getInfoActionBy = function () {
        return this.infoActionBy;
    };
    /* public addSubTopic(discussion:Discussion){
     this.subDiscussions.push(discussion);
     }
     public getSubTopics():Array<Discussion>{
     return this.subDiscussions;
     }
     public setSubDiscussions(subDiscussions:Array<Discussion>){
     this.subDiscussions = subDiscussions;
     }*/
    Discussion.prototype.setParentDiscussion = function (parent) {
        this.parentDiscussion = parent;
        this.type = TYPE.SUB_DISCUSSION;
        parent.incrementSubDiscussions();
    };
    Discussion.prototype.getParentDiscussion = function () {
        return this.parentDiscussion;
    };
    Discussion.prototype.getNumSubDiscussions = function () {
        return this.numSubDiscussions;
    };
    Discussion.prototype.setNumSubDiscussions = function (numSubDiscussions) {
        this.numSubDiscussions = numSubDiscussions;
    };
    Discussion.prototype.incrementSubDiscussions = function () {
        this.numSubDiscussions++;
    };
    Discussion.prototype.getType = function () {
        return this.type;
    };
    return Discussion;
}());
exports.Discussion = Discussion;
//# sourceMappingURL=discussion.js.map