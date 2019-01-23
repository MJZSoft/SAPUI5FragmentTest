sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("com.mjzsoft.FragmentTest.controller.Part1", {
		onInit: function () {
			console.log("onInit of fragment will not call.");
		},
		onAfterRendering: function () {
			console.log("onAfterRendering of fragment will not call.");
		},
		onClickParent: function (oEvent) {
			console.log("I will call a function from parent fragment controller");
			this.oView.oController.onClick2();
			// The key point for accessing the parent controller is `this.oView.oController`
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