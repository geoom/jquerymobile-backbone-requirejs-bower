'use strict';

define('AppRouter', ['jquery','backbone', 'home','signup'], 
	function($, Backbone, HomeView, SignupView){
	
	var Router = Backbone.Router.extend({
		
		currentView: null,

		routes: {
			''		: 'home',
			'home'	: 'home',
			'signup': 'signup'
		},

		initialize:function () {
	        
	        // Handle back button throughout the application
	        $('.back').on('click', function(event) {
	            window.history.back();
	            return false;
	        });
	        
	        this.firstPage = true;

	        // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
	    },

		changeView: function(view){
			$(view.el).attr('data-role', 'page');
	        view.render();
	        $('body').append($(view.el));

			if(null != this.currentView){
				this.currentView.undelegateEvents();
			}

			var transition = $.mobile.defaultPageTransition;
	        if (this.firstPage) {
	            transition = 'none';
	            this.firstPage = false;
	        }

			this.currentView = view;

	        $.mobile.changePage($(view.el), { reverse: false, changeHash: false, transition: transition} );
		},

		home: function(){
			this.changeView(new HomeView());
		},

		signup: function(){
			this.changeView(new SignupView());
		}

	});

	return Router;
});