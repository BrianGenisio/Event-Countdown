App.Views.EventDetail = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, "updateModel");
     	this.event_aggregator.bind("selectEvent", this.updateModel);  
    },
    
    render: function() {
        $("#eventTitle").html(this.model.get("title"))
        return this;
    },
    
    updateModel: function(newModel) {
        this.model = newModel;
        this.render();
    }
});