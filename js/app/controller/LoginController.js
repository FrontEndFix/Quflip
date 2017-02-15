/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var LoginController = (function (_super) {
            __extends(LoginController, _super);
            function LoginController(appService, userAuthorizationService, storageService, eventService) {
                _super.call(this, appService);
                this.userAuthorizationService = userAuthorizationService;
                this.storageService = storageService;
                this.eventService = eventService;
                this.loginInfo = new App.Model.LoginModel();
            }
            LoginController.prototype.logOut = function () {
                this.storageService.clearAll(false);
                this.eventService.broadcast(this.appService.appConstant.appEvants.onLogOut, "User logged out.");
            };
            LoginController.prototype.goToHome = function () {
                this.appService.routerService.routeToPage('home');
            };
            LoginController.$inject = ['baseAppService', 'userAuthorizationService', 'storageService', 'eventService',];
            return LoginController;
        }(Controller.BaseController));
        Controller.LoginController = LoginController;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
