'use strict';
define(['backbone', 'text!templates/home.html'], function(Backbone, homeTemplate) {
	var homeView = Backbone.View.extend({

		render: function() {
			this.$el.html(homeTemplate);
		}
	});

	return homeView;
});
