
/**
 * Module dependencies
 */

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}


// production only
if (env === 'production') {
  // TODO
}


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/expose/:dir/:name', routes.expose);

// JSON API

// API REST
var api = {};
// requisitando nosso controller
api.beer = require('./controllers/api/beer');
app.get('/api/beers', api.beer.retrieve);
app.get('/api/beers/:id', api.beer.findOne);
app.post('/api/beers', api.beer.create);
app.put('/api/beers/:id', api.beer.update);
app.delete('/api/beers/:id', api.beer.delete);

api.shop = require('./controllers/api/shop');
app.get('/api/shops', api.shop.retrieve);
app.get('/api/shops/:id', api.shop.findOne);
app.post('/api/shops', api.shop.create);
app.put('/api/shops/:id', api.shop.update);
app.delete('/api/shops/:id', api.shop.delete);

api.user = require('./controllers/api/user');
app.get('/api/users', api.user.retrieve);
app.get('/api/users/:id', api.user.findOne);
app.post('/api/users', api.user.create);
app.put('/api/users/:id', api.user.update);
app.delete('/api/users/:id', api.user.delete);

api.auth = require('./controllers/passport.js');
app.post('/api/users/login',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  }));
app.get('/loginFailure' , function(req, res, next){
  res.send('Failure to authenticate');
});

app.get('/loginSuccess' , function(req, res, next){
  res.send('Successfully authenticated');
});






// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
