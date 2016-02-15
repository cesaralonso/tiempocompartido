
'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster','slick','angular-jwt', 'angular-storage']);

app.constant('CONFIG', {
    APIURL: "http://www.tiempocompartido.com/codeigniter/codeigniter/cijwt",
})

.config(["$routeProvider", "$httpProvider", "jwtInterceptorProvider",  function ($routeProvider, $httpProvider, jwtInterceptorProvider)  {

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $httpProvider.interceptors.push('jwtInterceptor');

    $routeProvider.
        when('/', {
                title: 'Bienvenidos',
                templateUrl: 'front/inicio.html',
                controller: 'inicioCtrl',
                role: '0',
                authorization: true
            })
            .when('/login', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'partials/signup.html',
                controller: 'authCtrl'
            })
            .when('/inicio', {
                title: 'Bienvenidos',
                templateUrl: 'front/inicio.html',
                controller: 'inicioCtrl',
                authorization: true
            })
            .when('/edit', {
                title: 'Editar membresia',
                templateUrl: 'property/edit.html',
                controller: 'authCtrl'
            })
            .when('/listing', {
                title: 'listing',
                templateUrl: 'front/listing.html',
                controller: 'authCtrl'
            })
            .when('/faqs', {
                title: 'faqs',
                templateUrl: 'front/faqs.html',
                controller: 'authCtrl'
            })
            .when('/comprar-tiempos-compartidos', {
                title: 'comprar-tiempos-compartidos',
                templateUrl: 'front/comprar-tiempos-compartidos.html',
                controller: 'authCtrl',
                authorization: true
            })
            .when('/alquilar-tiempos-compartidos', {
                title: 'alquilar-tiempos-compartidos',
                templateUrl: 'front/alquilar-tiempos-compartidos.html',
                controller: 'authCtrl'
            })
            .when('/condiciones-de-uso', {
                title: 'condiciones-de-uso',
                templateUrl: 'front/condiciones-de-uso.html',
                controller: 'authCtrl'
            })
            .when('/politicas-de-privacidad', {
                title: 'politicas-de-privacidad',
                templateUrl: 'front/politicas-de-privacidad.html',
                controller: 'authCtrl'
            })
            .when('/quienes-somos', {
                title: 'quienes-somos',
                templateUrl: 'front/quienes-somos.html',
                controller: 'authCtrl'
            })
            .when('/contacto', {
                title: 'contacto',
                templateUrl: 'front/contacto.html',
                controller: 'authCtrl'
            })
            .when('/property', {
                title: 'property',
                templateUrl: 'front/property.html',
                controller: 'propertyCtrl'
            })
            .otherwise({
                redirectTo: 'front/property.html'
            });
        }])
.run(["$rootScope", 'jwtHelper', 'store', '$location', function($rootScope, jwtHelper, store, $location)
{
    $rootScope.$on('$routeChangeStart', function (event, next) 
    {
        
        var token = store.get("token") || null;

        console.log(token);
        if(!token)
            //$location.path("/inicio");

            console.log(jwtHelper.isTokenExpired(token));

        var bool = jwtHelper.isTokenExpired(token);
        if(bool === true){}
            //$location.path("/inicio");
    });
}]);



        /*
        //initially set those objects to null to avoid undefined error
        $rootScope.login = {};
        $rootScope.signup = {};
        $rootScope.doLogin = function (customer) {
            Data.post('login', {
                customer: customer
            }).then(function (results) {
                Data.toast(results);
                if (results.status == "success") {
                    $location.path('inicio');
                }
            });
        };
        $rootScope.signup = {email:'',password:'',nombre:'',telefono:'',ciudad:'',pais:''};
        $rootScope.signUp = function (customer) {
            Data.post('signUp', {
                customer: customer
            }).then(function (results) {
                Data.toast(results);
                if (results.status == "success") {
                    $location.path('inicio');
                }
            });
        };
        $rootScope.logout = function () {
            Data.get('logout').then(function (results) {
                Data.toast(results);
                $location.path('login');
            });
        }
       



    }); */


