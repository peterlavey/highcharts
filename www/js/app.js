angular.module('starter', ['ionic', 'controller', 'service'])

.run(function($ionicPlatform, $http) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  var defaultHTTPHeaders={
     'Content-Type':'application/json',
     'Accept':'application/json'
   };

   $http.defaults.headers.post=defaultHTTPHeaders;
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
  .state('dashboard', {
    url:'/dashboard',
    abstract:true,
    templateUrl:'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('dashboard.highcharts', {
      url: '/highcharts',
      views: {
        'content': {
          templateUrl: 'views/highcharts.html',
          controller: 'HighchartsCtrl'
        }
      }  
  })
  $urlRouterProvider.otherwise('/login');

})
