/*
 * sdspa.shell.js
 * Header module for SPA
 */

/*global $, spa */

sdspa.shell.header = (function () {
    //---------------- BEGIN MODULE SCOPED VARIABLES --------------
    var
        // Use to store static configuration values
        staticConfigurationMap = {

            html_header : String() +
              '<div class="sdspa-shell-header-mainnavcontainer">' +
                '<div class="sdspa-shell-header-mainnavcontainer-name">STEPHEN DYKSEN</div>' +
                '<nav class="sdspa-shell-header-mainnavcontainer-mainnav nav-link-rolling-effect">' +
					        '<a href="#"><span data-hover="PROJECTS">PROJECTS</span></a>' +
                  '<a href=""><span data-hover="BIO">BIO</span></a>' +
					        '<a href="#"><span data-hover="WRITINGS">WRITINGS</span></a>' +
				        '</nav>' +
              '</div>'
        },

        // Use to cache jquery collections, and avoid extraneous document traversals
        jqueryMap = {},

        setJqueryMap, configureModule, initializeModule
    ;
    //----------------- END MODULE SCOPED VARIABLES ---------------


    //-------------------- BEGIN UTILITY METHODS -----------------
    //--------------------- END UTILITY METHODS ------------------


    //--------------------- BEGIN DOM METHODS --------------------
    setJqueryMap = function () {
      var $container = jqueryMap.$html_container;
      jqueryMap = {
        $container: $container,
        $html_header: $container.find('sdspa-shell-header'),
        $html_body: $container.find('sdspa-shell-body'),
      };
    };
    // End DOM method /changeAnchorPart/
    //--------------------- END DOM METHODS ----------------------


    //------------------- BEGIN EVENT HANDLERS -------------------
    //-------------------- END EVENT HANDLERS --------------------


    //------------------- BEGIN PUBLIC METHODS -------------------
    // Begin PUBLIC method /configureModule/
    configureModule = function ( input_map ) {
      return true;
    };

    // Begin PUBLIC method /initializeModule/
    initializeModule = function ( $html_header_container ) {
        // load HTML and map jQuery collections
        jqueryMap.$html_header_container = $html_header_container;
        jqueryMap.$html_header_container.html( staticConfigurationMap.html_header );

        // configure and initialize feature modules
    };
    // End PUBLIC method /initializeModule/

    return {
      configureModule  : configureModule,
      initializeModule : initializeModule
    };
    //------------------- END PUBLIC METHODS ---------------------
}());
