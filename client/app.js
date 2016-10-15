var app = angular.module('jobjs', ['ngAnimate', 'ngRoute', 'ngMaterial'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/github.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthController'
      })
      .when('/github', {
        templateUrl: 'views/github.html',
        controller: 'HomeController'
      })
      .when('/remoteok', {
        templateUrl: 'views/remoteok.html',
        controller: 'HomeController'
      })
      .when('/dice', {
        templateUrl: 'views/dice.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
