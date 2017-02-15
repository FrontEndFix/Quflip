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
        var CartController = (function (_super) {
            __extends(CartController, _super);
            function CartController(appService, $rootScope, storageService) {
                var _this = this;
                _super.call(this, appService);
                this.$rootScope = $rootScope;
                this.storageService = storageService;
                this.popuarItems = [];
                this.itemList = [];
                this.menuItems = [];
                this.selectedMenueItems = [];
                this.cartStatus = '';
                this.selectedTab = "credit";
                this.originalCost = 0;
                this.discountCost = 0;
                this.serviceTaxCost = 0;
                this.totalCost = 0;
                this.onLoadStoreTemp = function () {
                    _this.popuarItems = [{ "id": 0, "name": "Well-Done Beef Pho", "cost": 8.95, "isRecommended": true, "isSpicy": true, "isGreen": false, "isFish": false, "isChicken": false, "isCow": true, "isPig": false, "isSheep": false }, { "id": 1, "name": "House Special Chow Mein", "cost": 10.95, "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": true, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }, { "id": 2, "name": "Tortellini Alfredo", "cost": 13.95, "isRecommended": true, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }, { "id": 3, "name": "Amante Special Pizza", "cost": 14.4, "isRecommended": false, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }];
                    _this.itemList = [{ "id": 0, "name": "MexicanNine", "stars": 3, "type": "Mexican", "status": "wait 12-15 mins", "companyLogo": "l1.png", "foodImg": "f7.png" }, { "id": 1, "name": "Crisp", "stars": 4, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l2.png", "foodImg": "f9.png" }, { "id": 2, "name": "Ezzel's", "stars": 5, "type": "American", "status": "available", "companyLogo": "l3.png", "foodImg": "f8.png" }, { "id": 3, "name": "HaalaFalafel", "stars": 5, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l4.png", "foodImg": "f7.png" }, { "id": 4, "name": "iNosh", "stars": 4, "type": "Italian", "status": "wait 12-15 mins", "companyLogo": "l5.png", "foodImg": "f6.png" }, { "id": 5, "name": "GFF", "stars": 3, "type": "Europian", "status": "available", "companyLogo": "l6.png", "foodImg": "f7.png" }, { "id": 6, "name": "MexicanNine", "stars": 3, "type": "Mexican", "status": "wait 12-15 mins", "companyLogo": "l1.png", "foodImg": "f7.png" }, { "id": 7, "name": "Crisp", "stars": 4, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l2.png", "foodImg": "f9.png" }, { "id": 8, "name": "Ezzel's", "stars": 5, "type": "American", "status": "available", "companyLogo": "l3.png", "foodImg": "f8.png" }, { "id": 9, "name": "HaalaFalafel", "stars": 5, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l4.png", "foodImg": "f7.png" }, { "id": 10, "name": "iNosh", "stars": 4, "type": "Italian", "status": "wait 12-15 mins", "companyLogo": "l5.png", "foodImg": "f6.png" }, { "id": 5, "name": "GFF", "stars": 3, "type": "Europian", "status": "available", "companyLogo": "l6.png", "foodImg": "f7.png" }];
                    _this.selectedCart = _this.$rootScope.cart;
                    _this.menuItems = [{ "id": 0, "name": "Daily Specials", "items": [{ "id": 0, "name": "French Fries & Coke", "originalCost": "5.49", "atDiscount": true, "discountedCost": "3.49", "isRecommended": true, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 1, "name": "Chilli Cheese Fries & Sprite", "originalCost": "4.90", "atDiscount": true, "discountedCost": "2.90", "isRecommended": false, "isSpicy": true, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }] }, { "id": 1, "name": "Burgers", "items": [{ "id": 2, "name": "Hawaiian Burger", "originalCost": "3.49", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": true, "isGreen": false, "isFish": false, "isChicken": true, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 3, "name": "Grilled Becon Sandwich", "originalCost": "2.49", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": true, "isSheep": false, "quantity": 0 }, { "id": 4, "name": "Curry Fries", "originalCost": "3.99", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 5, "name": "Curry Fries", "originalCost": "4.99", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": true, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 6, "name": "BBQ Burger", "originalCost": "10.55", "atDiscount": true, "discountedCost": "2.90", "isRecommended": true, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": true, "isPig": false, "isSheep": false, "quantity": 0 }] }, { "id": 2, "name": "Sandwiches", "items": [{ "id": 7, "name": "Chilli Cheese Sandwich", "originalCost": "9.99", "atDiscount": false, "discountedCost": "", "isRecommended": true, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": true, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 8, "name": "Lamp Love Sandwich", "originalCost": "10.55", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": true, "quantity": 0 }, { "id": 9, "name": "Curry Fries Sandwiches", "originalCost": "12.99", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 10, "name": "The Chilli Fish Sandwich", "originalCost": "12.39", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": true, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 11, "name": "Chillie Cup", "originalCost": "10.90", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": true, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 12, "name": "The Chilli Cheeze Sandwich", "originalCost": "9.90", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": true, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }] }, { "id": 3, "name": "Drinks", "items": [{ "id": 13, "name": "Coke", "originalCost": "0.79", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 14, "name": "Sprite", "originalCost": "1.49", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 15, "name": "Coffee", "originalCost": "2.49", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 16, "name": "Green Tea", "originalCost": "1.79", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }, { "id": 17, "name": "Black Tea", "originalCost": "1.79", "atDiscount": false, "discountedCost": "", "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false, "quantity": 0 }] }];
                    _this.selectedMenueItems = _this.storageService.getItem('selectedMenueItems', true);
                    _this.selectedCart = _this.storageService.getItem('truck', true);
                    _this.calculateTotal();
                };
                this.updateCart = function (item) {
                    for (var i = 0; i < _this.selectedMenueItems.length; i++) {
                        if (_this.selectedMenueItems[i].id == item.id) {
                            if (item.quantity < 1) {
                                _this.selectedMenueItems.splice(i, 1);
                            }
                            else {
                                _this.selectedMenueItems[i] = item;
                            }
                            break;
                        }
                    }
                    _this.storageService.setItem('selectedMenueItems', _this.selectedMenueItems, true);
                    _this.calculateTotal();
                };
                this.calculateTotal = function () {
                    _this.originalCost = 0;
                    _this.totalCost = 0;
                    _this.discountCost = 0;
                    _this.serviceTaxCost = 0;
                    angular.forEach(_this.selectedMenueItems, function (selected) {
                        _this.originalCost = _this.originalCost + (selected.quantity * selected.originalCost);
                        if (selected.atDiscount) {
                            _this.discountCost = _this.discountCost + (selected.quantity * (selected.originalCost - selected.discountedCost));
                        }
                    });
                    console.log(_this.originalCost);
                    console.log(_this.discountCost);
                    _this.serviceTaxCost = .145 * _this.originalCost;
                    _this.totalCost = _this.originalCost - _this.discountCost + _this.serviceTaxCost;
                    console.log(_this.serviceTaxCost);
                    console.log(_this.totalCost);
                };
                this.onLoadStoreTemp();
            }
            CartController.prototype.goToPage = function (view) {
                this.appService.routerService.routeToPage(view);
            };
            CartController.prototype.routeTo = function (view) {
                this.appService.routerService.routeToPage(view);
            };
            CartController.$inject = ['baseAppService', '$rootScope', 'storageService'];
            return CartController;
        }(Controller.BaseController));
        Controller.CartController = CartController;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
