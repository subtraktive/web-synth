'use strict';

var xperiment = angular.module('kumarz.github.ioApp',['ui.router']);

xperiment.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('synth', {
      url: "/synth",
      templateUrl: 'views/synth.html',
      controller: 'MainCtrl'
    })
   
});

xperiment.run(['$window', 'keypadService', function (window, keypad){
  window.onkeydown = function(e){ keypad.keydown(e)};
  window.onkeyup = function(e){keypad.keyup(e)};
}])