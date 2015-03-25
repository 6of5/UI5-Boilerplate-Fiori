sap.ui.controller("ui5bp.view.CoffeeList", {

    onInit: function() {
        var rootPath = jQuery.sap.getModulePath("ui5bp");
        this.getView().setModel(new sap.ui.model.json.JSONModel(rootPath + "/model/coffee.json"));
        
        //var componentname = sap.ui.core.Component.getOwnerIdFor(this.getView());
        //var component = sap.ui.component(componentname);
        //this.bus = component.getEventBus();
        this.bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getEventBus();        
        //this.bus = sap.ui.getCore().getEventBus();
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    }        
    
});