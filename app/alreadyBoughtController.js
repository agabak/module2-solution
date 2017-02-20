(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('alreadyBoughtController',alreadyBoughtController);
     alreadyBoughtController.$nject = ['shoppingListCheckOffService'];

     function alreadyBoughtController(shoppingListCheckOffService) {
          var alreadyBoughtItem = this;
          alreadyBoughtItem.title = "Items List"
          alreadyBoughtItem.addList = shoppingListCheckOffService.addItem();
          alreadyBoughtItem.isShow =   false;
          function () {
            var length = shoppingListCheckOffService.addItem().length;
            if(length > 0){
              alreadyBoughtItem.isShow = true;
            }
            console.log(length);
          }
     };
}());
