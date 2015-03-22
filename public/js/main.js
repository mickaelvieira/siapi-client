"use strict";

var Siapi = {};

var Search = require("./search.js");

$(function(window) {

    var search = new Search();
    search.getResults(function(collection) {

       console.log(collection);

        var items = collection.items;
        var item = items.first();

        var value = item.getDataValue('spacecraft');


        console.log(item.get('href'));
        console.log(value);

    });

}(window));

