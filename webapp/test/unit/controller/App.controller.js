/*global QUnit*/
/* eslint-disable */
sap.ui.define([
	"me/wirries/coffeemonitor/coffeeui5/controller/App.controller"
], function (oController) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});