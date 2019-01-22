sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("com.mjzsoft.FragmentTest.controller.Part1", {
		parent: null,
		onInit: function () {
			console.log("onInit of fragment will not call.");
		},
		onAfterRendering: function () {
			console.log("onAfterRendering of fragment will not call.");
		},
		onClick: function (oEvent) {
			console.log("I am in fragment controller");
		},
		constructor: function(oArg){
			console.log("The fragment controller has been made");
			console.log("You can pass some Argument to be set!!!", oArg);
			return Controller.call(this);
		}
	});
});