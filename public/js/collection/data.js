"use strict";

var DataModel = require('../model/data.js');

var Data = Backbone.Collection.extend({

    model: DataModel

});

module.exports = Data;