'use strict';

var appCtrl = require('./controllers/app-controller'),
    beerCtrl = require('./controllers/beer-controllers'),
    shopCtrl = require('./controllers/shop-controllers'),
    userCtrl = require('./controllers/user-controllers.js');


var app = angular.module('myApp.controllers', []);

app.controller('AppCtrl', ['$scope', '$http', appCtrl]);

app.controller('BeersIndexCtrl', ['$scope', '$http', beerCtrl.index]);
app.controller('BeersCreateCtrl', ['$scope', '$http', beerCtrl.create]);
app.controller('BeersSearchCtrl', ['$scope', '$http', '$location', beerCtrl.search]);
app.controller('BeersShowCtrl', ['$scope', '$http', '$routeParams', '$location', beerCtrl.show]);
app.controller('BeersEditCtrl', ['$scope', '$http', '$routeParams', beerCtrl.edit]);

app.controller('ShopsIndexCtrl', ['$scope', '$http', shopCtrl.index]);
app.controller('ShopsCreateCtrl', ['$scope', '$http', shopCtrl.create]);
app.controller('ShopsShowCtrl', ['$scope', '$http', '$routeParams', '$location', shopCtrl.show]);
app.controller('ShopsEditCtrl', ['$scope', '$http', '$routeParams', shopCtrl.edit]);

app.controller('UsersCreateCtrl', ['$scope', '$http', userCtrl.create]);