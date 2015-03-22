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
    },
    toJSON: function(options) {

        var copy  = {};
        var attrs = _.clone(this.attributes);
        var data  = attrs.data;

        for (var i = 0, l = data.length; i < l; i++) {
            copy[data[i].name] = data[i].value;
        }

        delete attrs['data'];

        return _.extend(attrs, copy);
    }
});

module.exports = Item;