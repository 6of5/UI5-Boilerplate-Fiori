sap.ui.controller("ui5bp.view.Cart", {

    onInit: function() {
        var rootPath = jQuery.sap.getModulePath("ui5bp");
        this.getView().setModel(new sap.ui.model.json.JSONModel(rootPath + "/model/coffee.json"));
        this.getView().setModel(new sap.ui.model.json.JSONModel({Order:[{code:"CA2", name:"Cappucino",qty:1}]}), "card");
        
        this.bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getEventBus();
        //this.bus = sap.ui.getCore().getEventBus();
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    }    
    
});