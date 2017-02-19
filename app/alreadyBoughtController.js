(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('alreadyBoughtController',alreadyBoughtController);
     alreadyBoughtController.$nject = [];

     function alreadyBoughtController() {
          var alreadyBoughtItem = this;
          alreadyBoughtItem.title = "Items List"
     };
}());
