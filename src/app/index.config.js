(function() {
  'use strict';

  angular
    .module('ngCalendar')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    
  }

})();
