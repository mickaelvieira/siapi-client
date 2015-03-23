"use strict";

var Data  = require('../collection/data.js');
var Links = require('../collection/links.js');

var Item = Backbone.Model.extend({

    data: new Data(),

    links: new Links(),

    constructor: function(attributes, options) {

        if (attributes.data) {
            this.data.set(attributes.data);
            delete attributes['data'];
        }
        if (attributes.links) {
            this.links.set(attributes.links);
            delete attributes['links'];
        }

        Backbone.Model.call(this, attributes, options);
    },
    getDataValue: function(name) {

        var value;
        var data = this.data.find(function(d) {
            return d.get('name') === name;
        });

        if (data) {
            value = data.get('value');
        }
        return value;
    },
    toJSON: function(options) {

        var data  = {};
        var links = {};
        var attrs = _.clone(this.attributes);

        this.data.each(function(d) {
            data[d.get('name')] = d.get('value');
        });
        this.links.each(function(l) {
            links[l.get('name')] = l.get('href');
        });

        return _.extend(attrs, data, links);
    }
});

module.exports = Item;