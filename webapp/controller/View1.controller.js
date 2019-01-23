sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/mjzsoft/FragmentTest/controller/Part1.controller"
], function (Controller, Part1) {
	"use strict";

	return Controller.extend("com.mjzsoft.FragmentTest.controller.View1", {
		oPart1: new Part1(), // this pointer is window here and not the Controller  
		onInit: function () {
			
		},
		onClick: function (oEvent) {
			console.log("I am in View1 Controller.");
		},
		onClick2: function (oEvent) {
			console.log("I am in View1 Controller but called from fragment controller.");
		}
	});
});