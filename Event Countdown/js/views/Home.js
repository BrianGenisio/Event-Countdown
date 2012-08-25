
App.Templates.HomeList = '<ul data-role="listview"></ul>';

App.Views.Home = Backbone.View.extend({   
    template: _.template(App.Templates.HomeList),
    
    initialize: function() {
        _.bindAll(this, "renderItem");
    },
    
    render: function() {
        $('.nav', this.el).append(this.template());
        this.model.each(this.renderItem);
        this.$el.trigger('create');
        return this;
    },
    
    renderItem: function(item) {
    	var newView = new App.Views.HomeItem({model: item});
        $('.nav ul', this.el).append(newView.render().el);
    }
    
});



App.Templates.HomeItem = '<a href="#<%= id %>" data-transition="slide"><%= title %></a>';

App.Views.HomeItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template(App.Templates.HomeItem),
    
    render: function() {
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    }
});