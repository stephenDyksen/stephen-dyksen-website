/*
 * sdspa.shell.body.js
 * Body module for SPA
 */

/*global $, spa */

sdspa.shell.body = (function () {
    //---------------- BEGIN MODULE SCOPED VARIABLES --------------
    var
        // Use to store static configuration values
        staticConfigurationMap = {

            html_body : String() +
              '<div class="sdspa-shell-body-projectscontainer sdspa-shell-body-lift"></div>' +
              '<div class="sdspa-shell-body-biocontainer sdspa-shell-body-lift">' +
                
              '</div>' +
              '<div class="sdspa-shell-body-writingscontainer sdspa-shell-body-lift"></div>'
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
      var $container = jqueryMap.$html_body_container;
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
    initializeModule = function ( $html_body_container ) {
        // load HTML and map jQuery collections
        jqueryMap.$html_body_container = $html_body_container;
        jqueryMap.$html_body_container.html( staticConfigurationMap.html_body );

        // configure and initialize feature modules
    };
    // End PUBLIC method /initializeModule/

    return {
      configureModule  : configureModule,
      initializeModule : initializeModule
    };
    //------------------- END PUBLIC METHODS ---------------------
}());
