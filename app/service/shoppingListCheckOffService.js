(function () {
   'use strict';

   angular.module('shoppingListCheckOff')
       .service('shoppingListCheckOffService',shoppingListCheckOffService);

       var items = [
          { name: "cookies", quantity: 10 },
          { name: "loaf of bread", quantity: 1 },
          { name: "Gallon of milk", quantity: 1},
          { name: "Orange", quantity: 8 },
          { name: "cookies", quantity: 10 }
      ];

      var alreadItem  = [];

       function shoppingListCheckOffService() {
               var  service =  this;
              service.getItems = function () {
                  return items;
              };

              service.removeItem = function(index){
                var item =  items.splice(index,1);
                 console.log(item)                  
              };
       };
}());
