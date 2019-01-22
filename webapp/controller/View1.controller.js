sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/mjzsoft/FragmentTest/controller/Part1.controller"
], function (Controller, Part1) {
	"use strict";

	return Controller.extend("com.mjzsoft.FragmentTest.controller.View1", {
		Part1: new Part1(this), // this pointer is window here and not the Controller  
		onInit: function () {
			
		},
		onClick: function (oEvent) {
			console.log("I am in View1 Controller.");
		}
	});
});