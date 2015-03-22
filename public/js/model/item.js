"use strict";

var Item = Backbone.Model.extend({

    getDataValue: function(name) {

        var value, data = this.get('data');

        if (data) {
            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i].name === name) {
                    value = data[i].value;
                    break;
                }
            }
        }
        return value;
    }
});

module.exports = Item;