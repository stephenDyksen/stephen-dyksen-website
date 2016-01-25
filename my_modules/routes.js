/*
 * routes.js - module to provide routing
 */

var
  configRoutes;

configRoutes = function ( app, server ) {

  app.get( '/', function ( request, response ) {
    //response.send( 'Hello World' );
    response.redirect( '/stephenspa.html' );
  });
  /*
   * The .all selector will apply to all the requests
   * Using : defines a parameter, * means apply to all, and ? means it is optional
   */
  app.all( '/api/:obj_type/*?', function ( request, response, next ) {
    response.contentType( 'json' );
    // Call next() to pass the request to the next applicable route
    next();
  });

  // List of Items
  app.get( '/api/:obj_type/list', function ( request, response ) {
    response.send({ title: request.params.obj_type + ' list' });
  });

  // CREATE
  app.post( '/api/:obj_type/create', function ( request, response ) {
    response.send({ title: request.params.obj_type + ' created' });
  });

  // READ
  app.get( '/api/:obj_type/read/:id([0-9]+)', function ( request, response ) {
    response.send({
      title: request.params.obj_type +
      ' with id ' + request.params.id + ' found'
    });
  });

  // UPDATE
  app.post( '/api/:obj_type/update/:id([0-9]+)', function ( request, response ) {
    response.send({
      title: request.params.obj_type +
      ' with id ' + request.params.id + ' updated'
    });
  });

  // DELETE
  app.get( '/api/:obj_type/delete/:id([0-9]+)', function ( request, response ) {
    response.send({
      title: request.params.obj_type +
      ' with id ' + request.params.id + ' deleted'
    });
  });

};

module.exports = { configRoutes : configRoutes };
