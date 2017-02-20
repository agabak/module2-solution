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

          toBuyItem.isShow  =  function(){
                 var isShow= false;
                 var length = toBuyItem.arrayItems.length;
                 if(length < 0){
                    isShow = true;
                 };
                 return isShow;
             };
     };
}());
