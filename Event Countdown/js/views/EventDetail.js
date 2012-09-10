App.Views.EventDetail = Backbone.View.extend({
    
    events: {
        "click #removeEvent": "remove"
    },
    
    initialize: function(options) {
        this.collection = options.collection;
        
        _.bindAll(this, "updateModel");
     	this.event_aggregator.bind("selectEvent", this.updateModel);  
    },
    
    render: function() {
        $("#eventTitle").html(this.model.get("title"))
        $("#eventType").html(this.model.get("type"))
        $("#eventDate").html(this.model.get("date"))
        return this;
    },
    
    updateModel: function(newModel) {
        this.model = newModel;
        this.render();
    },
    
    remove: function() {
        this.model.destroy();
        this.collection.remove(this.model);
    }
    
});