jQuery.sap.declare("ui5bp.Component");
jQuery.sap.require("ui5bp.app.config");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");

sap.ui.core.UIComponent.extend("ui5bp.Component", {
	metadata: {
		"name": "UI5 Boilerplate Fiori",
		"version": "0.8.0",
		"includes": ["css/style.css"],
		"dependencies": {
			"libs": ["sap.m"],
			"components": []
		},

		"config": {
			"resourceBundle": "i18n/i18n.properties",
			"titleResource": "xtit.shellTitle",
			"favIcon": "img/favicon.ico",
			"phone": "img/57_iPhone_Desktop_Launch.png",
			"phone@2": "img/114_iPhone-Retina_Web_Clip.png",
			"tablet": "img/72_iPad_Desktop_Launch.png",
			"tablet@2": "img/144_iPad_Retina_Web_Clip.png",
			"serviceConfig": {}
		},

		rootView: {
			viewName: "ui5bp.view.App",
			type: "JS"
		},
		routing: {
			config: {
				viewType: "JS",
				viewPath: "ui5bp.view", // common prefix
				targetAggregation: "detailPages",
				targetControl: "idAppControl",
				clearTarget: false
			},
			routes: [{
					pattern: "Launchpad",
					name: "Launchpad",
					view: "Launchpad",
					viewLevel: 0,
					targetAggregation: "detailPages"
			}, {
					pattern: "",
					name: "Menu",
					view: "Menu",
					viewLevel: 0,
					targetAggregation: "masterPages"

			}, {
					pattern: "CoffeeList",
					name: "CoffeeList",
					viewLevel: 1,
					view: "CoffeeList"
			}, {
					pattern: "Cart",
					name: "Cart",
					viewLevel: 1,
					view: "Cart"
			}, {
					pattern: "NewFeatures-v122",
					name: "NewFeatures-v122",
					viewLevel: 1,
					view: "NewFeatures-v122"
			}, {
					pattern: "Info",
					name: "Info",
					viewLevel: 1,
					view: "Info",
					viewType: "XML"
				}
			]
		}
	},

	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// always use absolute paths relative to our own component
		// (relative paths will fail if running in the Fiori Launchpad)
		var rootPath = jQuery.sap.getModulePath("ui5bp");

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: rootPath + "/i18n/i18n.properties"
		});
		this.setModel(i18nModel, "i18n");

		this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
		var router = this.getRouter();
		router.initialize();


        if(ui5bp.app.config.LaunchpadMode){
            router.navTo("Launchpad");
        } else {
            router.navTo("Menu");            
        }		
	}

});