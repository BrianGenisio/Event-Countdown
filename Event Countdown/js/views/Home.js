
App.Templates.HomeList = '<ul data-role="listview"></ul>';

App.Views.Home = Backbone.View.extend({   
    template: _.template(App.Templates.HomeList),
    
    events: {
        "click #addEvent": "addEvent",
        "click li": "selectItem"
    },
    
    initialize: function() {
        _.bindAll(this, "renderItem", "render");
        this.model.bind("reset", this.render);
        this.model.bind("add", this.render);
    },
    
    render: function() {
        $('.nav', this.el).html(this.template());
        this.model.each(this.renderItem);
        this.$el.trigger('create');
        return this;
    },
    
    renderItem: function(item) {
    	var newView = new App.Views.HomeItem({model: item});
        $('.nav ul', this.el).append(newView.render().el);
    },
    
    addEvent: function() {
    	  
    },
    
    selectItem: function(e) {
        console.log("selectItem");
        var id = $(e.target).attr("data-id");
        var model = this.model.get(id);
        
        this.event_aggregator.trigger("selectEvent", model);
    }
    
});



App.Templates.HomeItem = '<a href="#eventDetail" data-transition="slide" class="eventItem" data-id="<%= id %>"><%= title %></a>';

App.Views.HomeItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template(App.Templates.HomeItem),
    
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});