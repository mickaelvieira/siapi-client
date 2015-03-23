
var SearchForm = Backbone.Marionette.View.extend({

    el: '#form-container',

    events: {
        "keyup #search-field"  : "suggest",
        "click #search-button" : "search"
    },

    render: function() {
        console.log("render form");
        return this;
    },
    close: function() {
        console.log("close form");
    },
    onShow: function() {
        console.log("on show form");
    },
    suggest: function(e) {

        console.log("suggest");
        e.preventDefault();

        var params = {
            q: this.$('#search-field').val()
        };

        this.trigger("suggest", params);
    },
    search: function(e) {

        console.log("search");
        e.preventDefault();

        var params = {
            q: this.$('#search-field').val()
        };

        this.trigger("search", params);
    }

});

module.exports = SearchForm;