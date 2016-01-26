/*
 * sdspa.js
 * Root namespace module
 */

/*global $, spa */
var sdspa = (function () {
    var initializeModule = function ( $html_container ) {
        sdspa.shell.initializeModule( $html_container );
    };

    return { initializeModule: initializeModule };
}());
