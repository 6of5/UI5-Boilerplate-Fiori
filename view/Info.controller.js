jQuery.sap.require("ui5bp.app.config");

sap.ui.controller("ui5bp.view.Info", {

    onInit: function() {
        var rootPath = jQuery.sap.getModulePath("ui5bp");
        var ctrlUI5LogoImage = this.byId("ui5logo");
        ctrlUI5LogoImage.setSrc(rootPath + "/img/114_iPhone-Retina_Web_Clip.png");
        
        this.bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getEventBus();
    },

    doNavBackLaunchpad: function(event) {
        this.bus.publish("nav", "back", {id : "Launchpad"});
    },

    doNavBack: function(event) {
        this.bus.publish("nav", "back");
    } 
});