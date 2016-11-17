app.controller('mainController', function ($scope, $rootScope) {
    $scope.openMenu = function(){
        $rootScope.toggleClass = !$rootScope.toggleClass;

    }
});
