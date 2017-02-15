/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    /***********************************************************************************************************************
    IMPORTANT : You need to add  routePermission? : Core.Models.RoutePermission; in  interface IRoute of angular-route.d.ts
    ************************************************************************************************************************/
    var RouteConfig = (function () {
        function RouteConfig($routeProvider, $locationProvider) {
            this.$routeProvider = $routeProvider;
            this.$locationProvider = $locationProvider;
            this.$routeProvider
                .when('/', {
                controller: "loginController",
                controllerAs: "vm",
                templateUrl: "template/login.html"
            })
                .when('/login', {
                controller: "loginController",
                controllerAs: "vm",
                templateUrl: "template/login.html"
            })
                .when('/about', {
                controller: "aboutController",
                controllerAs: "vm",
                templateUrl: "template/about.html"
            })
                .when('/home', {
                controller: "homeController",
                controllerAs: "vm",
                templateUrl: "template/home.html"
            })
                .when('/list', {
                controller: "listController",
                controllerAs: "vm",
                templateUrl: "template/list.html"
            })
                .when('/cart', {
                controller: "cartController",
                controllerAs: "vm",
                templateUrl: "template/cart.html"
            })
                .otherwise({ redirectTo: "login" });
            this.$locationProvider.html5Mode({
                enabled: false,
                requireBase: false
            });
        }
        RouteConfig.$inject = ['$routeProvider', '$locationProvider'];
        return RouteConfig;
    }());
    App.RouteConfig = RouteConfig;
})(App || (App = {}));
