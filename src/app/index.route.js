(function() {
  'use strict';

  angular
    .module('ngCalendar')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/dashboard')
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboard'
      })
      .state('calendar', {
        url: '/calendar',
        component: 'calendar'
      })
      .state('event', {
        url: '/event/:id',
        component: 'event'
      })
  }
})();
