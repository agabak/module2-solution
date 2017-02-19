(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('toBuyController',toBuyController);
     toBuyController.$nject = [];

     function toBuyController() {
          var toBuyItem = this;

          toBuyItem.title = "To Buy Item";
     };
}());
