'use strict';
define(['backbone', 'text!templates/signup.html'], function(Backbone, signupTemplate) {
	var singupView = Backbone.View.extend({

		render: function() {
			this.$el.html(signupTemplate);
		}
	});

	return singupView;
});
