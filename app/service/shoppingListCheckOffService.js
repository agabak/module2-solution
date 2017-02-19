(function () {
   'use strict';

   angular.module('shoppingListCheckOff')
       .service('shoppingListCheckOffService',shoppingListCheckOffService);

       function shoppingListCheckOffService() {
               var  service =  this;

               var items = [
                  { name: "cookies", quantity: 10 },
                  { name: "loaf of bread", quantity: 1 },
                  { name: "Gallon of milk", quantity: 1},
                  { name: "Orange", quantity: 8 },
                  { name: "cookies", quantity: 10 }
              ];

              service.getItems = function () {
                  return items;
              };
       };
}());
