App.Views.NewEvent = Backbone.View.extend({
    
   events: {
       "click #saveNewEvent": "save"
   },
    
    save: function() {
        alert("save it");
    }
    
});