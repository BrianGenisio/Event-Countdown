App.Views.HelloWorld = Backbone.View.extend({
   
    events: {
     	"click #sayHello": "sayHello",  
        "click #sayHelloReset": "sayHelloReset"
    },
    
    sayHello: function() {
        $('#helloWorldText').html('Hello, ' + $('#txtName').val() + '!');
        $('#helloWorldText').css('display', 'block');
        $('#helloWorldInput').css('display', 'none');
    },
    
    sayHelloReset: function() {
        $('#txtName').val('');
    	$('#helloWorldText').css('display', 'none');
        $('#helloWorldInput').css('display', 'block');
    }
});