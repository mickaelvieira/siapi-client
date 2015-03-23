"use strict";

var Siapi = {};

var Search   = require("./search.js");
var Layout = require("./view/layout.js");
var FormView = require("./view/form-search.js");

$(function(window) {

    var layout = new Layout();


    var Siapi = new Backbone.Marionette.Application();
    Siapi.rootView = layout;


    Siapi.on('before:start', function(options) {
        console.log('before');
        console.log(options);
    });
    Siapi.on('start', function(options) {
        console.log('start');
        console.log(options);
    });

    Siapi.start({});

    var view = new FormView();
    view.on("search", function(params) {

        var search      = new Search();
        var endPoint    = "/search";
        var queryString = $.param(params);

        search.setUrl(endPoint + "?" + queryString);
        search.getResult(function(result) {
            console.log(result);
            console.log(result.getItems());
        });
    });

    Siapi.addRegions({
        search: view
    });


}(window));

