
var SearchForm = Backbone.View.extend({

    el: '#form-container',

    events: {
        "keyup #search-field"  : "suggest",
        "click #search-button" : "search"
    },

    initialize: function() {
        _.extend(this, Backbone.Events);
    },
    render: function() {

        return this;
    },
    suggest: function(e) {

        e.preventDefault();

        var params = {
            q: this.$('#search-field').val()
        };

        this.trigger("suggest", params);
    },
    search: function(e) {

        e.preventDefault();

        var params = {
            q: this.$('#search-field').val()
        };

        this.trigger("search", params);
    }

});

module.exports = SearchForm;