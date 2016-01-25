/*
 * sdspa.js
 * Root namespace module
 */

/*global $, spa */
var sdspa = (function () {
    var initializeModule = function ( $html_body_container ) {
        sdspa.shell.initializeModule( $html_body_container );
    };

    return { initializeModule: initializeModule };
}());
