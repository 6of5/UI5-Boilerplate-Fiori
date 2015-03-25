jQuery.sap.require("jquery.sap.history");

sap.ui.controller("ui5bp.view.App", {
	
	onInit : function () {
	    
        var componentname = sap.ui.core.Component.getOwnerIdFor(this.getView()); 
		var bus = sap.ui.component(componentname).getEventBus();

		bus.subscribe("nav", "back", this.navRouterHandler, this);
		bus.subscribe("nav", "to", this.navRouterHandler, this);
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	navRouterHandler: function (channelId, eventId, data) {
		var router = this.router;
		if (eventId === "to") {
			router.navTo(data.id);
			//this.navTo(data.id, data.data, true);
		} else if (eventId === "back") {
			if(data && data.id){
				router.navTo(data.id);
			} else {
				jQuery.sap.history.back();				
			}
		}
	}		
	
});