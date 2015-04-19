sap.ui.controller("ui5bp.view.UserInfo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5bp.view.UserInfo
*/
	onInit: function() {
        this.getView().setModel(new sap.ui.model.json.JSONModel("/services/userapi/currentUser"), "currentuser");
        this.bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getEventBus();
	},
	
    doNavBack: function() {
        this.bus.publish("nav", "back");
    }  	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5bp.view.UserInfo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5bp.view.UserInfo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5bp.view.UserInfo
*/
//	onExit: function() {
//
//	}

});