(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('toBuyController',toBuyController);
     toBuyController.$nject = [];

     function toBuyController() {
          var toBuyItem = this;
             toBuyItem.arrayItems = [
                { name: "cookies", quantity: 10 },
                { name: "loaf of bread", quantity: 1 },
                { name: "Gallon of milk", quantity: 1},
                { name: "Orange", quantity: 8 },
                { name: "cookies", quantity: 10 }
            ];
          toBuyItem.title = "To Buy Item";
     };
}());
