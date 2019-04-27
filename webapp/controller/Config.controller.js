sap.ui.define([
	"me/wirries/coffeemonitor/coffeeui5/controller/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("me.wirries.coffeemonitor.coffeeui5.controller.Config", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time
		 * initialization.
		 * @memberOf me.wirries.coffeemonitor.coffeeui5.view.Config
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf me.wirries.coffeemonitor.coffeeui5.view.Config
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering
		 * manipulations of the HTML could be done here. This hook is the same one that SAPUI5 controls
		 * get after being rendered.
		 * @memberOf me.wirries.coffeemonitor.coffeeui5.view.Config
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf me.wirries.coffeemonitor.coffeeui5.view.Config
		 */
		//	onExit: function() {
		//
		//	}

	});

});