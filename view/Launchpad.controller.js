sap.ui.controller("ui5bp.view.Launchpad", {
	
    onInit: function() {
        this.bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getEventBus();
    },

	doNavOnSelect : function (event) {
		this.bus.publish("nav", "to", {
			id : event
		});
	}	

});