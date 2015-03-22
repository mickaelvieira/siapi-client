"use strict";

var Result = function(items, links) {
    this.items = items;
    this.links = links;
};
Result.prototype.getItems = function() {
    return this.items.toJSON();
};
Result.prototype.getLinks = function() {
    return this.links.toJSON();
};
Result.prototype.getLinkUrl = function(name) {
    var url, link = this.links.getLinkByRelation(name);
    if (link) {
        url = link.get('href');
    }
    return url;
};
Result.prototype.getPrevPageUrl = function() {
    return this.getLinkUrl('prev');
};
Result.prototype.getNextPageUrl = function() {
    return this.getLinkUrl('next');
};
Result.prototype.getFirstPageUrl = function() {
    return this.getLinkUrl('first');
};
Result.prototype.getLastPageUrl = function() {
    return this.getLinkUrl('last');
};

module.exports = Result;
