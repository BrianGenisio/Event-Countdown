App.Models.Event = Backbone.Model.extend({
    
    msAway: function() {
        var dueDate = new Date(this.get("date"));
        var today = new Date();
        return dueDate.getTime() - today.getTime();
    },
    
    daysAway: function() {
    	var msInADay = 1000 * 60 * 60 * 24;
        return Math.ceil(this.msAway() / msInADay);
    }
});

App.Collections.Events = Backbone.Collection.extend({
    model: App.Models.Event,
    localStorage: new Backbone.LocalStorage("SomeCollection")
});