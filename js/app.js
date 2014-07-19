// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var meuMedico = angular.module('MeuMedico', ['ionic']);

meuMedico.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

meuMedico.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                'home': {
                    templateUrl: "home.html",
                    controller: 'HomeController'
                }
            }
        })
        .state('guia-medico', {
            url: "/guia-medico",
            views: {
                'home': {
                    templateUrl: "guia-medico.html",
                    controller: 'GuiaMedicoController'
                }
            }
        })
        .state('extrato-cotas', {
            url: "/extrato-cotas",
            views: {
                'home': {
                    templateUrl: "extrato-cotas.html"
                }
            }
        })
        .state('carteira-virtual', {
            url: "/carteira-virtual",
            views: {
                'home': {
                    templateUrl: "carteira-virtual.html"
                }
            }
        })
        .state('lista-credenciados', {
            url: "/lista-credenciados",
            views: {
                'home': {
                    templateUrl: "lista-credenciados.html"
                }
            }
        })
        .state('cidades', {
            url: "/cidades",
            views: {
                'home': {
                    templateUrl: "cidades.html"
                }
            }
        })
        .state('especialidades', {
            url: "/especialidades",
            views: {
                'home': {
                    templateUrl: "especialidades.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/home");

})

meuMedico.controller('HomeController', function($scope, $location) {
    $scope.onGuiaMedico = function() {
        $location.path("/guia-medico");
    };

    $scope.onExtratoCotas = function() {
        $location.path("/extrato-cotas");
    };

    $scope.onCarteiraVirtual = function() {
        $location.path("/carteira-virtual");
    };
});

meuMedico.controller('GuiaMedicoController', function($scope, $location) {
    $scope.onCidades = function() {
        $location.path("/cidades");
    };

    $scope.onEspecialidades = function() {
        $location.path("/especialidades");
    };

    $scope.onListaCredenciados = function() {
        $location.path("/lista-credenciados");
    };
});
