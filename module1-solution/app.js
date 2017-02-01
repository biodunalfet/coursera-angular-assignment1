(function() {
    'use strict';

    angular.module('LCApp', [])
    .controller('LCController', LCController);

    LCController.$inject = ['$scope'];

    function LCController($scope){
                
        $scope.scanItems = function() {
            var items = $scope.items;

            console.log(items);

            if (items == undefined || items.length == 0){
                items = [];
            }
            else {
                items = items.trim().split(',');
                var xitems = items.slice();  
                items = [];       
                for (var i = 0; i < xitems.length; i++){
                    if (xitems[i].trim() != ""){
                        //console.log("blank");
                        items.push(items[i]);
                    }
                }
            }
            
            var length = items.length;
            var result = "";
            var color = "";

            if (length == 0){
                 result = "Please enter data first";
                 color = "red";
            }
            else if (length <= 3){
                result = "Enjoy!";
                color = "green";
            }
            else if (length > 3){
                result = "Too much!";
                color = "green";
            }

            $scope.verdict = result;
            $scope.color = color;

        }

    }

})();