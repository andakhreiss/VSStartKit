sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("org.ubb.books.controller.BookList", {
        onPressDelete(oEvent){
            const aSelContext = this.byId("idBooksTable").getSelectedContexts();

            const sPath = aSelContext[0].getPath();

            this.getView().getModel().remove(sPath, {
                success: () => {
                    MessageToast.show("Book deleted!");
                },
                error: () => {
                    MessageToast.show("Error deleting books!");
                }

            });
        }
    });
 });