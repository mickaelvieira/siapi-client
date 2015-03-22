"use strict";

var Links = require('../collection/links.js');
var Items = require('../collection/items.js');

var Collection = Backbone.Model.extend({

    url: '/search',

    parse: function(response) {

        if (response.collection) {

            this.set('version', response.collection.version);
            this.set('href', response.collection.href);

            if (response.collection.links) {
                this.links = new Links(response.collection.links);
            }
            if (response.collection.items) {
                this.items = new Items(response.collection.items);
            }
        }
    }

});

module.exports = Collection;