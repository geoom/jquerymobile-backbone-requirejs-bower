'use strict';

define('App', ['jquery','backbone', 'AppRouter'], function($, Backbone, AppRouter) {
	
	$(document).bind("mobileinit", function () {
	    $.mobile.ajaxEnabled = false;
	    // Prevents all anchor click handling
	    $.mobile.linkBindingEnabled = false; 
	    // Disabling this will prevent jQuery Mobile from handling hash changes
	    $.mobile.hashListeningEnabled = false;
	    $.mobile.pushStateEnabled = false;
	    $.mobile.defaultPageTransition = 'slide';

	    // Remove page from DOM when it's being replaced
	    $('div[data-role="page"]').on('pagehide', function (event, ui) {
	    	console.log('escuche el evento');
	        $(event.currentTarget).remove();
	    });
	});

	require([ "jquerymobile" ], function() {
		// Instantiates a new Backbone.js Mobile Router
		var router = new AppRouter();
	});

	var initialize = function() {
		// router.navigate('/home', {trigger: true});
	}

	return{
		initialize: initialize
	}
});
