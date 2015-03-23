"use strict";

var Collection = require("./model/collection.js");
var Result = require("./result.js");

var Search = function() {
    this.collection = new Collection();
};

Search.prototype.getResult = function(success, error) {

    this.collection.fetch({
        success: function(model, response, options) {

            if (typeof success === 'function') {
                success(this.prepareResult(model));
            }

        }.bind(this),
        error: function(model, response, options) {

            if (typeof error === 'function') {
                error(this.prepareResult(model));
            }

        }.bind(this)
    });
};
Search.prototype.prepareResult = function(collection) {
    return new Result(
        collection.items,
        collection.links
    );
};

module.exports = Search;