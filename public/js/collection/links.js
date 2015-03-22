"use strict";

var Link = require('../model/link.js');

var Links = Backbone.Collection.extend({

    model: Link,

    getLinkByRelation: function(rel) {
        return model.links.find(function(link) {
            return (link.get('rel') === rel);
        });
    }

});

module.exports = Links;