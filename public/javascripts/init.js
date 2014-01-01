'use strict';

require.config({
	paths: {
		jquery			: '../vendor/jquery/jquery',
		jquerymobile	: '../vendor/jquery-mobile-min/jquery.mobile.min',
		underscore		: '../vendor/underscore-amd/underscore',
		backbone		: '../vendor/backbone-amd/backbone',
		text			: '../vendor/requirejs-text/text',
		templates		: '../templates',
		App 			: 'app',
		AppRouter		: 'routes'
	},
	shim: {
		'jquery':{
			exports: '$'
		},

		'underscore': {
			exports: '_'
		},

		'backbone': {
			exports: 'Backbone',
		   	deps: ['underscore', 'jquery']
		},
	}
});

require(['App'], function(App) {
	App.initialize();
});