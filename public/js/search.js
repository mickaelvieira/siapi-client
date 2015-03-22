"use strict";

var Collection = require("./model/collection.js");

var Search = function() {
    this.collection = new Collection();
};

Search.prototype.getResults = function(success, error) {

    this.collection.fetch({
        success: function(model, response, options) {
            if (typeof success === 'function') {
                success(model);
            }
        },
        error: function(model, response, options) {
            if (typeof error === 'function') {
                error(model);
            }
        }
    });
};

module.exports = Search;