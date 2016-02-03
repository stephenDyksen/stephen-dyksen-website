/*
 * sdspa.shell.header.js
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
					        '<a class="sdspa-shell-header-mainnavcontainer-mainnav-projectsbutton"><span data-hover="PROJECTS">PROJECTS</span></a>' +
                  '<a class="sdspa-shell-header-mainnavcontainer-mainnav-biobutton"><span data-hover="BIO">BIO</span></a>' +
					        '<a class="sdspa-shell-header-mainnavcontainer-mainnav-writingsbutton"><span data-hover="WRITINGS">WRITINGS</span></a>' +
				        '</nav>' +
              '</div>',

              settable_map : {
                set_section_anchor : true
              }
        },

        // Use to cache jquery collections, and avoid extraneous document traversals
        jqueryMap = {},

        setJqueryMap, configureModule, initializeModule, openPage
    ;
    //----------------- END MODULE SCOPED VARIABLES ---------------


    //-------------------- BEGIN UTILITY METHODS -----------------

    //--------------------- END UTILITY METHODS ------------------


    //--------------------- BEGIN DOM METHODS --------------------
    setJqueryMap = function () {
      var $container = jqueryMap.$html_header_container;
      jqueryMap = {
        $container: $container,
        $projects_button: $container.find('.sdspa-shell-header-mainnavcontainer-mainnav-projectsbutton'),
        $bio_button: $container.find('.sdspa-shell-header-mainnavcontainer-mainnav-biobutton'),
        $writings_button: $container.find('.sdspa-shell-header-mainnavcontainer-mainnav-writingsbutton')
      };
    };
    // End DOM method /changeAnchorPart/
    //--------------------- END DOM METHODS ----------------------


    //------------------- BEGIN EVENT HANDLERS -------------------
    openPage = function(page) {
      switch ( page ) {
          case 'projects' :
              break;
          case 'bio' :
              break;
          case 'writings' :
              break;
          default :
              break;
        }
        staticConfigurationMap.settable_map.set_section_anchor(page);
    };

    //-------------------- END EVENT HANDLERS --------------------


    //------------------- BEGIN PUBLIC METHODS -------------------
    // Begin PUBLIC method /configureModule/
    configureModule = function ( input_map ) {
      staticConfigurationMap.settable_map.set_section_anchor = input_map.set_section_anchor;
      return true;
    };

    // Begin PUBLIC method /initializeModule/
    initializeModule = function ( $html_header_container ) {
        // load HTML and map jQuery collections
        jqueryMap.$html_header_container = $html_header_container;
        jqueryMap.$html_header_container.html( staticConfigurationMap.html_header );
        setJqueryMap();

        // bind event handlers
        jqueryMap.$projects_button.bind( 'click', function() { openPage("projects"); });
        jqueryMap.$bio_button.bind('click', function() { openPage("bio"); });

        jqueryMap.$writings_button.bind('click', function() { openPage("writings"); });

        // configure and initialize feature modules
    };
    // End PUBLIC method /initializeModule/


    return {
      configureModule  : configureModule,
      initializeModule : initializeModule
    };
    //------------------- END PUBLIC METHODS ---------------------
}());
