sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
 ], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("", {
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		 
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
		// onButtonPress:function(){
		
		// 		// show a native JavaScript alert
		// 		var oBundle = this.getView().getModel("i18n").getResourceBundle();
		// 		var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		// 	//	var sRecipient = this.getView().byId("input").getValue();
		// 		var sMsg = oBundle.getText("helloMsg", [sRecipient]);
		// 		// show message
		// 		MessageToast.show(sMsg);

			 
		// }
	
	});
 });