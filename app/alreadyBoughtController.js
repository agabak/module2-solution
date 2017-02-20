(function(){
    'use strict';

    angular.module('shoppingListCheckOff')
           .controller('alreadyBoughtController',alreadyBoughtController);
     alreadyBoughtController.$nject = ['shoppingListCheckOffService'];

     function alreadyBoughtController(shoppingListCheckOffService) {
          var alreadyBoughtItem = this;
          alreadyBoughtItem.title = "Items List"
          alreadyBoughtItem.addList = shoppingListCheckOffService.addItem();

          alreadyBoughtItem.isShow  =  function(){
                  var isShow= false
                  var length = alreadyBoughtItem.addList.length;
                  if(length > 0){
                     isShow = true;
                  };
                  return isShow;
              };
     };
}());
