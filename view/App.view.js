jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.App", {

    getControllerName: function() {
        return "ui5bp.view.App";
    },

    createContent: function(oController) {

        if(jQuery.sap.getUriParameters().get("mode") === "LeftMenuNavi"){
            ui5bp.app.config.LaunchpadMode = false;
        }

        // set device model
        var oDeviceModel = new sap.ui.model.json.JSONModel({
            isTouch: sap.ui.Device.support.touch,
            isNoTouch: !sap.ui.Device.support.touch,
            isPhone: sap.ui.Device.system.phone && !ui5bp.app.config.LaunchpadMode,
            isNoPhone: !sap.ui.Device.system.phone,
            listMode: (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
            listItemType: (sap.ui.Device.system.phone) ? "Active" : "Inactive",
            launchpadMode: ui5bp.app.config.LaunchpadMode
        });
        oDeviceModel.setDefaultBindingMode("OneWay");
        sap.ui.getCore().setModel(oDeviceModel, "device");
        this.setModel(oDeviceModel, "device");

        // to avoid scrollbars on desktop the root view must be set to block display
        this.setDisplayBlock(true);

        this.app = new sap.m.SplitApp(this.createId("idAppControl"), {
            afterDetailNavigate: function() {
                if (sap.ui.Device.system.phone || ui5bp.app.config.LaunchpadMode) {
                    this.hideMaster();
                }
            },
            homeIcon: {
                'phone': 'img/57_iPhone_Desktop_Launch.png',
                'phone@2': 'img/114_iPhone-Retina_Web_Clip.png',
                'tablet': 'img/72_iPad_Desktop_Launch.png',
                'tablet@2': 'img/144_iPad_Retina_Web_Clip.png',
                'favicon': 'img/favicon.ico',
                'precomposed': false
            }
        });
        if(ui5bp.app.config.LaunchpadMode){
            this.app.setMode(sap.m.SplitAppMode.HideMode);
        }

        return this.app;
    }
});