(function(){

    angular.module('app.controllers', []);
    angular.module('app.services', []);


    //module declaration
	var app = angular.module('app', 
                             [  'app.controllers', 
                                'app.services',
                                'ngRoute',
                                'ngAnimate',
                                'ngSanitize',
                                'ui.bootstrap'
                             ]);
                    
    //route provider
    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/welcome', {
            templateUrl: 'modules/welcome/welcome.html', 
            controller: 'WelcomeController'
        })
        

        .when( '/', { redirectTo: '/welcome' })
        .otherwise ({ redirectTo: '/welcome' });

    }]);


    //run
    app.run(function() {

    });

}).call(this);