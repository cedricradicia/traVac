'use strict';
var modulesToLoad = [
  'angular-meteor',
  'ui.router',
  'app.controllers',
  'app.providers',
  'app.services'
];

angular.module('app', modulesToLoad);

function onReady() {
  angular.bootstrap(document, ['app']);
}

if (Meteor.isCordova) {
  angular.element(document).on("deviceready", onReady);
} else {
  angular.element(document).ready(onReady);	
}
