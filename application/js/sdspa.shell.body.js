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
              '<div class=sdspa-shell-body-bodywrap>' +
                '<div class="sdspa-shell-body-bodywrap-projectscontainer sdspa-shell-body-bodywrap-container">' +
                  'Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.' +
                '</div>' +
                '<div class="sdspa-shell-body-bodywrap-biocontainer sdspa-shell-body-bodywrap-container">' +
                  'Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. ' +
                '</div>' +
                '<div class="sdspa-shell-body-bodywrap-writingscontainer sdspa-shell-body-bodywrap-container">' +
                  'Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.Lorem ipsum dolor sit amet, mea no laboramus adipiscing consectetuer, pri definitiones necessitatibus te. Vim ne alia quodsi liberavisse, eum et dicat assum nostrud. Dicta iudicabit vim et. Est an sumo doctus scripserit.' +
                '</div>' +
              '</div>'
        },

        // Use to cache jquery collections, and avoid extraneous document traversals
        jqueryMap = {},

        setJqueryMap, configureModule, initializeModule, setBody
    ;
    //----------------- END MODULE SCOPED VARIABLES ---------------


    //-------------------- BEGIN UTILITY METHODS -----------------
    //--------------------- END UTILITY METHODS ------------------


    //--------------------- BEGIN DOM METHODS --------------------
    setJqueryMap = function () {
      var $container = jqueryMap.$html_body_container;
      jqueryMap = {
        $container: $container,
        $projects_container: $container.find('.sdspa-shell-body-bodywrap-projectscontainer'),
        $bio_container: $container.find('.sdspa-shell-body-bodywrap-biocontainer'),
        $writings_container: $container.find('.sdspa-shell-body-bodywrap-writingscontainer')
      };
    };

    setBody = function (selected_section) {
      switch(selected_section) {
        case 'projects':
          jqueryMap.$projects_container.addClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$bio_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$writings_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          break;
        case 'bio':
          jqueryMap.$projects_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$bio_container.addClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$writings_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          break;
        case 'writings':
          jqueryMap.$projects_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$bio_container.removeClass("sdspa-shell-body-bodywrap-container-open");
          jqueryMap.$writings_container.addClass("sdspa-shell-body-bodywrap-container-open");
          break;
        default:
          break;
      }
      return true;
    };
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
        setJqueryMap();

        // configure and initialize feature modules
    };
    // End PUBLIC method /initializeModule/

    return {
      setBody          : setBody,
      configureModule  : configureModule,
      initializeModule : initializeModule
    };
    //------------------- END PUBLIC METHODS ---------------------
}());
