"use strict";

var Collection = require("./model/collection.js");
var Result = require("./result.js");

var Search = function() {
    this.collection = new Collection();
};

Search.prototype.getResult = function(success, error) {

    this.collection.fetch({
        success: function(model, response, options) {

            var result = new Result(
                model.items,
                model.links
            );

            if (typeof success === 'function') {
                success(result);
            }
        },
        error: function(model, response, options) {

            var result = new Result(
                model.items,
                model.links
            );

            if (typeof error === 'function') {
                error(result);
            }
        }
    });
};

module.exports = Search;