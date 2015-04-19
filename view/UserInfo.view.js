jQuery.sap.require("sap.ui.layout.Grid");
jQuery.sap.require("sap.ui.layout.form.SimpleForm");

sap.ui.jsview("ui5bp.view.UserInfo", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf ui5bp.view.UserInfo
	 */
	getControllerName: function() {
		return "ui5bp.view.UserInfo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf ui5bp.view.UserInfo
	 */
	createContent: function(oController) {

		var oGrid = new sap.ui.layout.Grid({
			defaultSpan: "L12 M12 S12",
			width: "auto"
		});

		var oForm = new sap.ui.layout.form.SimpleForm({
			minWidth: 1024,
			maxContainerCols: 2,
			editable: false,
			layout: "ResponsiveGridLayout",
			title: "Information of logged in user",
			labelSpanL: 4,
			labelSpanM: 4,
			emptySpanL: 1,
			emptySpanM: 1,
			columnsL: 1,
			columnsM: 1
		});

		oForm.addContent(new sap.m.Label({
			text: 'Login'
		}));
		oForm.addContent(new sap.m.Text({
			text: '{currentuser>/name}'
		}));
		oForm.addContent(new sap.m.Label({
			text: 'First Name'
		}));
		oForm.addContent(new sap.m.Text({
			text: '{currentuser>/firstName}'
		}));
		oForm.addContent(new sap.m.Label({
			text: 'Last Name'
		}));
		oForm.addContent(new sap.m.Text({
			text: '{currentuser>/lastName}'
		}));
		oForm.addContent(new sap.m.Label({
			text: 'Display Name'
		}));
		oForm.addContent(new sap.m.Text({
			text: '{currentuser>/displayName}'
		}));
		oForm.addContent(new sap.m.Label({
			text: 'Email'
		}));
		oForm.addContent(new sap.m.Text({
			text: '{currentuser>/email}'
		}));
		oGrid.addContent(oForm);

		return new sap.m.Page({
			title: "User Information",
            showNavButton: "{device>/isPhone}",
            navButtonPress: [oController.doNavBack, oController],			
			content: [oGrid
			]
		});
	}

});