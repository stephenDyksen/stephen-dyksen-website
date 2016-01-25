/*
 * server.js is the main server for Friend Frequency
 */

// ---------- BEGIN MODULE SCOPE VARIABLES ----------
var
  http    = require( 'http' ),
  express = require( 'express' ),
  routes  = require( './my_modules/routes' ),

  app     = express(),
  server  = http.createServer( app );
// ----------- END MODULE SCOPE VARIABLES -----------

// ---------- BEGIN SERVER CONFIGURATION ----------
app.set( 'port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set( 'ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1' );

app.configure( function () {
  app.use( express.static( __dirname + '/application' ) );
  app.use( app.router );
});

routes.configRoutes( app, server );
// ----------- END SERVER CONFIGURATION -----------

// ---------- BEGIN START SERVER ----------
server.listen( app.get( 'port' ), app.get( 'ip' ) );
console.log( 'Express Server Started' );
// ----------- END START SERVER -----------
