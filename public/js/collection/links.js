"use strict";

var Link = require('../model/link.js');

var Links = Backbone.Collection.extend({

    model: Link,

    getLinkByRelation: function(rel) {
        return this.models.find(function(link) {
            return (link.get('rel') === rel);
        });
    },
    getLinkByName: function(name) {
        return this.models.find(function(link) {
            return (link.get('name') === name);
        });
    }

});

module.exports = Links;