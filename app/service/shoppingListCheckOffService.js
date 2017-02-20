(function () {
   'use strict';

   angular.module('shoppingListCheckOff')
       .service('shoppingListCheckOffService',shoppingListCheckOffService);

       var items = [
          { name: "cookies", quantity: 10 },
          { name: "loaf of bread", quantity: 1 },
          { name: "Gallon of milk", quantity: 1},
          { name: "Orange", quantity: 8 },
          { name: "Bean", quantity: 10 }
      ];

      var alreadItem  = [];
      var data ={};
      var item = {};

       function shoppingListCheckOffService() {
               var  service =  this;
              service.getItems = function () {
                  return items;
              };

              service.removeItem = function(index){
                data =  items.splice(index,1);
                item  ={
                   name:data[index]['name'],
                   quantity:data[index]['quantity']
                };
                alreadItem.push(item);
                console.log(alreadItem);
            };

            service.addItem = function(){
              return alreadItem;
            };
       };
}());
