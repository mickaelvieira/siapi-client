"use strict";

var Siapi = {};

var Search   = require("./search.js");
var FormView = require("./view/form-search.js");

$(function(window) {

    var search = new Search();
    var view = new FormView();

    view.on("search", function(params) {

        var endPoint    = "/search";
        var queryString = $.param(params);

        search.setUrl(endPoint + "?" + queryString);
        search.getResult(function(result) {
            console.log(result);
            console.log(result.getItems());
        });
    });

}(window));

