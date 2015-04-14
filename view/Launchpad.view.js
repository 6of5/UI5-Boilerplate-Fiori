jQuery.sap.require("ui5bp.app.config");

sap.ui.jsview("ui5bp.view.Launchpad", {

    getControllerName: function() {
        return "ui5bp.view.Launchpad";
    },

    createContent: function(oController) {

        var tc = new sap.m.TileContainer("tc", {});

        var rootPath = jQuery.sap.getModulePath("ui5bp");
        var model = new sap.ui.model.json.JSONModel(rootPath + "/model/menu.json");
        model.attachRequestCompleted(null, function() {
            function navFn(target) {
                return function() {
                    oController.doNavOnSelect(target);
                }
            }

            var data = null,
                m = 0,
                menu = null;
            data = model.getData();
            if (data && data.Menu) {
                for (m = 0; m < data.Menu.length; m++) {
                    menu = data.Menu[m];
                    tc.addTile(new sap.m.StandardTile({
                        icon: menu.icon,
                        title: menu.title,
                        info: menu.title,
                        press: navFn(menu.targetPage)
                    }));
                }
            }

        });

        var page = new sap.m.Page({
            customHeader: new sap.m.Bar({
                contentLeft: [new sap.m.Image({
                    src: jQuery.sap.getModulePath("ui5bp") + "/img/57_iPhone_Desktop_Launch.png",
                    width: "35px",
                    height: "35px"
                }).addStyleClass("ui5Logo")],
                contentMiddle: [new sap.m.Text({
                    text: "{i18n>WELCOME_TITLE} Launchpad"
                })]
            }),
            footer: new sap.m.Bar({
                contentMiddle: [new sap.m.Link("myproLinkLP", {
                    text: "v" + ui5bp.app.config.APP_VERSION,
                    href: "http://blog.mypro.de/tag/ui5boilerplate/"
                })]

            })
        });

        page.setEnableScrolling(false);
        page.setShowHeader(true);
        page.addContent(tc);

        return page;
    }

});