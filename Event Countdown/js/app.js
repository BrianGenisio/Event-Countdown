window.App = {
    Models: {},
    Collections: {},
    Templates: {},
    Views: {},
    Routers: {}
};

var onDeviceReady = function() {
    var model = new Backbone.Collection([{id: 'page1', title: 'BB Interaction Example'}]);
	var homeView = new App.Views.Home({model: model, el: $('#home')});
	homeView.render();
    
    var helloView = new App.Views.HelloWorld({el: $('#page1')});
    
}
    
document.addEventListener("deviceready", onDeviceReady, false);