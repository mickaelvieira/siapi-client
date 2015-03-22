"use strict";

var Item = require('../model/item.js');

var Items = Backbone.Collection.extend({

    model: Item

});

module.exports = Items;