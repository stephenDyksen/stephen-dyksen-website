/*
 * sdspa.shell.js
 * Shell module for SPA
 */

/*global $, spa */

sdspa.shell = (function () {
    //---------------- BEGIN MODULE SCOPED VARIABLES --------------
    var
        // Use to store static configuration values
        staticConfigurationMap = {
            // See https://github.com/mmikowski/urianchor
            anchor_schema_map : {
                chat : { opened : true, closed : true }
            },

            html_content : String() +
              '<div class="sdspa-shell">'+
                '<div class="sdspa-shell-header"></div>' +
                '<div class="sdspa-shell-body">' +
                  '<div class="sdspa-shell-body-biocontainer sdspa-shell-body-pageitem"></div>' +
                '</div>' +
              '</div>'
        },

        // Place dynamic information shared across the module in dynamicStateMap.
        dynamicStateMap = { anchor_map : {} },

        // Use to cache jquery collections, and avoid extraneous document traversals
        jqueryMap = {},

        copyAnchorMap, setJqueryMap, changeAnchorPart, onHashchange,
        setChatAnchor, initializeModule
    ;
    //----------------- END MODULE SCOPED VARIABLES ---------------


    //-------------------- BEGIN UTILITY METHODS -----------------
    // Returns copy of stored anchor map; minimizes overhead
    copyAnchorMap = function () {
        return $.extend( true, {}, dynamicStateMap.anchor_map );
    };
    //--------------------- END UTILITY METHODS ------------------


    //--------------------- BEGIN DOM METHODS --------------------
    setJqueryMap = function () {
      var $container = jqueryMap.$html_container;
      jqueryMap = {
        $html_container: $container,
        $html_header_container: $container.find('.sdspa-shell-header'),
        $html_body_container: $container.find('.sdspa-shell-body')
      };
    };

    // Begin DOM method /changeAnchorPart/
    // Purpose : Changes part of the URI anchor component. Automically update the anchor. It takes
    // a map of what we want to change, for example { chat : 'open' }, and updates only the
    // specified key-value in the anchor component.
    // Arguments:
    // * arg_map - The map describing what part of the URI anchor
    // we want changed.
    // Returns : boolean
    // * true - the Anchor portion of the URI was updated
    // * false - the Anchor portion of the URI could not be updated
    // Action :
    // The current anchor rep stored in dynamicStateMap.anchor_map.
    // See uriAnchor for a discussion of encoding.
    // This method
    // * Creates a copy of this map using copyAnchorMap().
    // * Modifies the key-values using arg_map.
    // * Manages the distinction between independent
    // and dependent values in the encoding.
        // * Attempts to change the URI using uriAnchor.
    // * Returns true on success, and false on failure.
    //
    changeAnchorPart = function ( arg_map ) {
        var
            anchor_map_revise = copyAnchorMap(),
            bool_return       = true,

            key_name,
            key_name_dep
        ;

        // Begin merge changes into anchor map
        KEYVAL:
            // iterates over hash key|value pairs
            for ( key_name in arg_map ) {
                // if this key_name belongs to this object, not proto... for in
                // also enumerates over inherited properties
                if ( arg_map.hasOwnProperty( key_name ) ) {
                    // skip dependent keys during iteration
                    if ( key_name.indexOf( '_' ) === 0 ) { continue KEYVAL; }
                    // update independent key value
                    anchor_map_revise[key_name] = arg_map[key_name];
                    // update matching dependent key
                    key_name_dep = '_' + key_name;
                    if ( arg_map[key_name_dep] ) {
                        anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
                    }
                    else {
                        delete anchor_map_revise[key_name_dep];
                        delete anchor_map_revise['_s' + key_name_dep];
                    }
                }
            }
        // End merge changes into anchor map

        // Begin attempt to update URI; revert if not successful
        try {
            $.uriAnchor.setAnchor( anchor_map_revise );
        }
        catch ( error ) {
            // replace URI with existing state
            $.uriAnchor.setAnchor( dynamicStateMap.anchor_map, null, true );
            bool_return = false;
        }
        // End attempt to update URI...

        return bool_return;
    };
    // End DOM method /changeAnchorPart/
    //--------------------- END DOM METHODS ----------------------


    //------------------- BEGIN EVENT HANDLERS -------------------
    // Begin Event handler /onHashchange/
    // Purpose : Handles the hashchange event
    // Arguments:
    // * event - jQuery event object.
    // Settings : none
    // Returns : false
    // Action :
    // * Parses the URI anchor component
        // * Compares proposed application state with current
    // * Adjust the application only where proposed state
    // differs from existing and is allowed by anchor schema
    //
    onHashchange = function ( event ) {
        var
            _s_chat_previous, _s_chat_proposed, s_chat_proposed,
            anchor_map_proposed,
            is_ok = true,
            anchor_map_previous = copyAnchorMap();

        // attempt to parse anchor
        try { anchor_map_proposed = $.uriAnchor.makeAnchorMap(); }
        catch ( error ) {
            $.uriAnchor.setAnchor( anchor_map_previous, null, true );
            return false;
        }
        dynamicStateMap.anchor_map = anchor_map_proposed;

        // convenience vars
        _s_chat_previous = anchor_map_previous._s_chat;
        _s_chat_proposed = anchor_map_proposed._s_chat;

        // Begin adjust chat component if changed
        if ( ! anchor_map_previous || _s_chat_previous !== _s_chat_proposed) {
            s_chat_proposed = anchor_map_proposed.chat;
            switch ( s_chat_proposed ) {
                case 'opened' :
                    is_ok = spa.chat.setSliderPosition( 'opened' );
                    break;
                case 'closed' :
                    is_ok = spa.chat.setSliderPosition( 'closed' );
                    break;
                default :
                    spa.chat.setSliderPosition( 'closed' );
                    delete anchor_map_proposed.chat;
                    $.uriAnchor.setAnchor( anchor_map_proposed, null, true );
            }
        }
        // End adjust chat component if changed

        // Begin revert anchor if any changes denied
        if ( ! is_ok ){
            if ( anchor_map_previous ){
                $.uriAnchor.setAnchor( anchor_map_previous, null, true );
                dynamicStateMap.anchor_map = anchor_map_previous;
            } else {
                delete anchor_map_proposed.chat;
                $.uriAnchor.setAnchor( anchor_map_proposed, null, true );
            }
        }
        // End revert anchor if slider change denied

        // return false is equivalent to event.preventDefault() + event.stopPropagation()
        return false;
    };
    // End Event handler /onHashchange/

    //-------------------- END EVENT HANDLERS --------------------


    //---------------------- BEGIN CALLBACKS ---------------------
    // Because functions are first-class objects, we can pass a function as an
    // argument in another function and later execute that passed-in function
    // or even return it to be executed later.

    // Begin callback method /setChatAnchor/
    // Example : setChatAnchor( 'closed' );
    // Purpose : Change the chat component of the anchor
    // Arguments:
    // * position_type - may be 'closed' or 'opened'
    // Action :
    // Changes the URI anchor parameter 'chat' to the requested
    // value if possible.
    // Returns :
    // * true - requested anchor part was updated
    // * false - requested anchor part was not updated
    // Throws : none
    //
    setChatAnchor = function ( position_type ){
        return changeAnchorPart({ chat : position_type });
    };
    // End callback method /setChatAnchor/
    //----------------------- END CALLBACKS ----------------------


    //------------------- BEGIN PUBLIC METHODS -------------------
    // Begin Public method /initializeModule/
    // Example : spa.shell.initializeModule( $('#app_div_id') );
    // Purpose :
    // Directs the Shell to offer its capability to the user
    // Arguments :
    // * $html_container (example: $('#app_div_id')).
    // A jQuery collection that should represent
    // a single DOM container
    // Action :
    // Populates $html_container with the shell of the UI
    // and then configures and initializes feature modules.
    // The Shell is also responsible for browser-wide issues
    // such as URI anchor and cookie management.
    // Returns : none
    // Throws : none
    //
    initializeModule = function ( $html_container ) {
        // load HTML and map jQuery collections
        jqueryMap.$html_container = $html_container;
        jqueryMap.$html_container.html( staticConfigurationMap.html_content );
        setJqueryMap();

        // configure uriAnchor to use our schema
        $.uriAnchor.configModule({
            schema_map : staticConfigurationMap.anchor_schema_map
        });

        // configure and initialize feature modules
        sdspa.header.configureModule({
          // pass callback functions here
        });
        sdspa.header.initializeModule(jqueryMap.$html_header_container);

        // Handle URI anchor change events.
        // This is done after all feature modules are configured
        // and initialized, otherwise they will not be ready to handle
        // the trigger event, which is used to ensure the anchor
        // is considered on-load
        //
        $(window)
            .bind( 'hashchange', onHashchange )
            .trigger( 'hashchange' );
    };
    // End PUBLIC method /initializeModule/

    return { initializeModule : initializeModule };
    //------------------- END PUBLIC METHODS ---------------------
}());
