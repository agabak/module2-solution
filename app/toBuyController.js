(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('toBuyController',toBuyController);
     toBuyController.$nject = ['shoppingListCheckOffService'];

     function toBuyController(shoppingListCheckOffService) {
          var toBuyItem = this;
             toBuyItem.arrayItems = shoppingListCheckOffService.getItems();
          toBuyItem.title = "Items List";

          toBuyItem.check = function(value){
            shoppingListCheckOffService.removeItem(value);
          }
     };
}());
