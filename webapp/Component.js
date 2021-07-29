sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
 ], function (UIComponent, JSONModel, ResourceModel, HelloDialog, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        
        metadata : {
            manifest: "json"
         },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);


          var oData = {
            recipient : {
               name : "World"
            }
          
         };

         var oData2 = {
            panelTitle: "Titlu 1"
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         var oModel2 = new JSONModel(oData2);
         this.setModel(oModel2, "titleModel");

         // set i18n model
         // var i18nModel = new ResourceModel({
         //    bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         // });
         // this.setModel(i18nModel, "i18n");

         this._helloDialog = new HelloDialog(this.getRootControl());
         this.getRouter().initialize();

       },
       exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
      },
      
		getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
    });
 });