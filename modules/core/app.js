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
                                'ui.bootstrap',
                                'blockUI'
                             ]);
                    
    //route provider
    app.config(['$routeProvider', 'blockUIConfig', function($routeProvider, blockUIConfig){

        blockUIConfig.message = 'Aguarde!';

        $routeProvider
        .when('/welcome', {
            templateUrl: 'modules/welcome/welcome.html', 
            controller: 'WelcomeController'
        })
        

        .when( '/', { redirectTo: '/welcome' })
        .otherwise ({ redirectTo: '/welcome' });

    }]);


    //run
    app.run(function( FIREBASE_CONFIG ) {
        // Initialize Firebase
        firebase.initializeApp(FIREBASE_CONFIG);
    });

}).call(this);