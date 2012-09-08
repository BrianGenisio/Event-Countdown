App.Views.NewEvent = Backbone.View.extend({
    
    events: {
       "click #saveNewEvent": "save"
    },
    
    initialize: function(options) {
        this.collection = options.collection;  
    },
      
    save: function() {
        var data = {
            title: this.$("#input-title").val(),
            type: this.$("#input-type").val(),
            date: this.$("#input-date").val()
        };
        
        this.collection.create(data, {wait: true});
    }
    
});