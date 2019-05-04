(function(){
	angular.module('app.controllers').controller('WelcomeController', ['$scope', 'api', function ($scope, api) {

        $scope.cafe = {};

        $scope.cafeList = [];

        $scope.addCafe = function(){
            api.cafes.add($scope.cafe).then(data=>{
                $scope.cafe = {};
                $scope.refresh();
            });
        };

        $scope.removeCafe = function(cafe){
            api.cafes.remove(cafe.id).then(data=>{
                $scope.refresh();
            });
        };

        $scope.refresh = function(){
            api.cafes.listAll().then( data => {
                $scope.cafeList = [];
                data.docs.forEach( doc => {
                    $scope.$apply(function(){
                        let item = angular.copy(doc.data());
                        item.id = doc.id;
                        $scope.cafeList.push(item);
                    });
                })
            });
        }

        $scope.refresh();

        
    }]);
}).call(this);