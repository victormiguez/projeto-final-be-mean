'use strict';

var appCtrl = require('./controllers/app-controller'),
    beersCtrl = require('./controllers/beers-controllers'),
    userCtrl = require('./controllers/user-controllers.js');


var app = angular.module('myApp.controllers', []);

app.controller('AppCtrl', ['$scope', '$http', appCtrl]);

app.controller('BeersIndexCtrl', ['$scope', '$http', beersCtrl.index]);
app.controller('BeersCreateCtrl', ['$scope', '$http', beersCtrl.create]);
app.controller('BeersSearchCtrl', ['$scope', '$http', '$location', beersCtrl.search]);
app.controller('BeersShowCtrl', ['$scope', '$http', '$routeParams', '$location', beersCtrl.show]);
app.controller('BeersEditCtrl', ['$scope', '$http', '$routeParams', beersCtrl.edit]);

app.controller('UsersCreateCtrl', ['$scope', '$http', userCtrl.create]);