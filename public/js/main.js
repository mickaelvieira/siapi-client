"use strict";

var Siapi = {};

var Search = require("./search.js");

$(function(window) {

    var search = new Search();
    search.getResult(function(result) {

       console.log(result.getItems());
       console.log(result.getLinks());
       console.log(result.getPrevPageUrl());
       console.log(result.getNextPageUrl());
       console.log(result.getFirstPageUrl());
       console.log(result.getLastPageUrl());

    });

}(window));

