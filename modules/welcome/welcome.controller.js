(function(){
	angular.module('app.controllers').controller('WelcomeController', ['$scope', 'api', 'blockUI', function ($scope, api, blockUI) {

        $scope.cafe = {};

        $scope.cafeList = [];

        $scope.addCafe = function(){
            blockUI.start();
            api.cafes.add($scope.cafe).then(()=>{
                $scope.cafe = {};
                $scope.refresh();
            });
        };

        $scope.removeCafe = function(cafe){
            blockUI.start();
            api.cafes.remove(cafe.id).then(()=>{
                $scope.refresh();
            });
        };

        $scope.refresh = function(){
            api.cafes.listAll().then( data => {
                $scope.cafeList = data;
                blockUI.stop();
            });
        }

        blockUI.start();
        $scope.refresh();

        
    }]);
}).call(this);