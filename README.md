# UI5 Boilerplate - Fiori Edition (UI5BP Fiori)

UI5 Boilerplate - Fiori Edition is a template for building Apps based on OpenUI5 or SAPUI5, which can be integrated into the SAP Fiori Launchpad. 
The UI5 Boilerplate uses the sap.m.SplitApp which itself is especially designed for tablet usage (iPad), but is also usable on smartphones with iOS and Android (iPhone 4s/5/5s/6, Nexus 4/5, ....). 

It could be used as starting point for your own development.

* Source: [https://github.com/6of5/UI5-Boilerplate-Fiori](https://github.com/6of5/UI5-Boilerplate-Fiori)
```
git clone https://github.com/6of5/UI5-Boilerplate-Fiori.git
```

More Info can be found here:
* UI5 Boilerplate Wiki Page: [All Infos collected on dedicated 6of5 Wiki Page](https://www.6of5.com/6of5/go/show/1001/UI5/displaypage.htm?PAGE=UI5Boilerplate)  
* Blog Entries [http://blog.mypro.de/tag/ui5boilerplate/](http://blog.mypro.de/tag/ui5boilerplate/)
* Follow UI5 Boilerplate on Twitter: [@UI5bp](http://twitter.com/UI5bp)
* Contacts: Twitter [@hpseitz](http://twitter.com/hpseitz) or Email to information@6of5.com

## Posts
* SAP Inside Track Frankfurt 2014 (sitFRA) - Birthday of UI5BP Fiori Edition: [http://blog.mypro.de/2015/04/17/sitfra-2015-birthday-ui5bp-fiori-edition/](http://blog.mypro.de/2015/04/17/sitfra-2015-birthday-ui5bp-fiori-edition/)
* Deploy UI5 Boilerplate on Fiori Launchpad of HANA Cloud Platform: [http://scn.sap.com/community/fiori/blog/2015/04/14/deploy-ui5-boilerplate-on-fiori-launchpad-of-hana-cloud-platform](http://scn.sap.com/community/fiori/blog/2015/04/14/deploy-ui5-boilerplate-on-fiori-launchpad-of-hana-cloud-platform)
* Extend Fiori UI5 Boilerplate with SAP Web IDE (add further view's) [http://scn.sap.com/community/fiori/blog/2015/04/20/extend-fiori-ui5-boilerplate-with-sap-web-ide](http://scn.sap.com/community/fiori/blog/2015/04/20/extend-fiori-ui5-boilerplate-with-sap-web-ide)

## Features
* Based on OpenUI5, more Infos under [http://sap.github.io/openui5/](http://sap.github.io/openui5/)
* Based on sap.m library of UI5, which provide touch optimized controls
* Follows "Mobile First" approach, but App also works on Desktop (Chrome latest, Firefox latest, Safari, IE9 and IE10)
* A self-contaning UI5 Component
* Uses Routing
* Default file structure (i18n, model, view, css, js)
* Navigation via LeftMenu navigation (default) or Launchpad of App itself 
* Automatic generation of navigation items (Launchpad or LeftMenu) and routing.
* i18n base model
* Fiori compliant (hopefully)
** Usage of EventBus of Component

## generate Component-preload.js file
* Prerequities: node.js and gulp are installed
execute the following command in the root folder to install necessary packages
```
npm install
```
to generate Component-preload.js run in the root folder:
```
gulp ui5-preload
```

## Screenshot
integrated into SAP Fiori Launchpad on HANA Cloud Platform
![ui5bp fiori screenhot](http://blog.mypro.de/wp-content/uploads/2015/04/UI5BP-31-UI5BP-Fiori-in-FLP.png)

## License
Apache License, Version 2.0

![ui5 boilerplate fiori Logo](http://blog.mypro.de/wp-content/uploads/2015/04/ui5-fiori.png)

