jQuery.sap.require("ui5bp.app.config");
jQuery.sap.require("sap.ui.layout.Grid");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.jsview("ui5bp.view.Cart", {

    getControllerName: function() {
        return "ui5bp.view.Cart";
    },

    createContent: function(oController) {
        var that = this;

		var oGrid = new sap.ui.layout.Grid({
			defaultSpan : "L12 M12 S12",
			width       : "auto"
		});
		var oForm = new sap.ui.layout.form.SimpleForm({
			minWidth        : 1024,
			maxContainerCols: 2,
			editable        : true,
			layout          : "ResponsiveGridLayout",
			labelSpanL : 4,
			labelSpanM : 4,
			emptySpanL : 1,
			emptySpanM : 1,
			columnsL   : 1,
			columnsM   : 1,
			class      :"editableForm"			
		});

        var oOrderLabel = new sap.m.Label({
            text : "Order"
        });     
        var oOrder = new sap.m.Select({
        	visible: true,
        	enabled: true
         });
        oOrder.setModel(sap.ui.getCore().getModel());
        oOrder.bindAggregation("items", "/Coffee", new sap.ui.core.Item({
            key : "{code}",
            text : "{name}"
        })); 
        
        var oBtnAdd = new sap.m.Button({
            text : "Add to Card",
        	press : function(oEvent){
         		var selectedItem = oOrder.getSelectedItem();
                if (selectedItem) {
            		var model = that.getModel("card");
            		var data = model.getData().Order;
            		
            		var sName = selectedItem.getText();
            		var sCode = selectedItem.getKey();
            		
            		var item = {};
            		item.code = sCode;
            		item.name = sName;
            		item.qty = 1;
            		
            		data.push(item);
            		model.setProperty("/Order", data);        	
                }
        	} 
        });

        oForm.addContent(oOrderLabel); 
        oForm.addContent(oOrder); 
        oForm.addContent(oBtnAdd); 
        oGrid.addContent(oForm);        
        
        var oListTemplate = new sap.m.ObjectListItem({
            title: "{card>name}",
            icon: "sap-icon://sap-box",
            number: "{card>qty}",
            numberUnit: "Cup"
        });

        var oList = new sap.m.List({});
        oList.bindAggregation("items", "card>/Order", oListTemplate);

        var oBtnLaunchpad = new sap.m.Button({
            icon : "sap-icon://home",
            visible : ui5bp.app.config.LaunchpadMode,
            tooltip : "Back to Launchpad",
            press : function(ev) {
                var bus = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(that)).getEventBus();
                bus.publish("nav", "back", {id : "Launchpad"});
            }
        });

        return new sap.m.Page({
            title: "Shopping Cart",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],
            content: [oGrid, oList],
            headerContent: [oBtnLaunchpad],
            footer: new sap.m.Bar({})
        });
    }

});