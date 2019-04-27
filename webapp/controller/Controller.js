sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller, History, MessageToast) {
	"use strict";

	/**
	 * A template for a controller.
	 * 
	 * This base controller provides common methods for the application. This 
	 * controller give you methods for translation and showing message on the UI. 
	 * @class
	 * @extends sap.ui.core.mvc.Controller
	 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.core.mvc.Controller
	 * @public
	 * @author denisw
	 * @since 13.01.2019
	 * @name me.wirries.coffeemonitor.coffeeui5.controller.Controller
	 */
	return Controller.extend("me.wirries.coffeemonitor.coffeeui5.controller.Controller", /** @lends me.wirries.coffeemonitor.coffeeui5.controller.Controller */ {

		/**
		 * Convenience method for accessing the router in every controller of 
		 * the application.
		 * @public
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.core.routing.Router
		 * @returns {sap.ui.core.routing.Router} the router for this component
		 */
		getRouter: function () {
			return this.getOwnerComponent().getRouter();
		},

		/**
		 * Convenience method for getting the view model by name in every controller of 
		 * the application.
		 * @public
		 * @param {string} [sName] the model name, if null return the default model
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.model.Model
		 * @returns {sap.ui.model.Model} the model instance
		 */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model in every controller of the application.
		 * @public
		 * @param {sap.ui.model.Model} oModel the model instance
		 * @param {string} sName the model name
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.model.Model
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.core.mvc.View
		 * @returns {sap.ui.core.mvc.View} the view instance
		 */
		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		/**
		 * Convenience method for getting the resource bundle.
		 * @public
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.ui.model.resource.ResourceModel
		 * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
		 */
		getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/**
		 * Convenience method for getting translation of the given text.
		 * @public
		 * @param {string} sText Textkey for translation
		 * @returns {string} translation of the given text
		 */
		translate: function (sText) {
			return this.getResourceBundle().getText(sText);
		},

		/**
		 * This method shows the given text as popup (MessageToast).
		 * @public
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.m.MessageToast
		 * @param {string} sText text to display
		 */
		showMessage: function (sText) {
			MessageToast.show(sText);
		},

		/**
		 * This method shows the translation of given text as popup (MessageToast).
		 * @public
		 * @see https://sapui5.hana.ondemand.com/#/api/sap.m.MessageToast
		 * @param {string} sText translation to display
		 */
		showTranslation: function (sText) {
			this.showMessage(this.translate(sText));
		},

		/** 
		 * This method navigates to another page with this application.
		 * @public
		 * @param {string} sTarget name of the target
		 */
		navigateTo: function (sTarget) {
			this.getRouter().navTo(sTarget, {}, true);
		},

		/**
		 * Event handler for navigating back.
		 * It there is a history entry or an previous app-to-app navigation we go one step back in the browser history
		 * If not, it will replace the current entry of the browser history with the master route.
		 * @public
		 */
		onNavBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash(),
				oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");

			if (sPreviousHash !== undefined || !oCrossAppNavigator.isInitialNavigation()) {
				history.go(-1);
			} else {
				this.getRouter().navTo("dashboard", {}, true);
			}
		},

		/** 
		 * Navigate to dashboard.
		 */
		onNavigateToDashboard: function () {
			this.navigateTo("dashboard");
		},

		/** 
		 * Navigate to history.
		 */
		onNavigateToHistory: function () {
			this.navigateTo("history");
		},

		/** 
		 * Navigate to config.
		 */
		onNavigateToConfig: function () {
			this.navigateTo("config");
		}

	});
});