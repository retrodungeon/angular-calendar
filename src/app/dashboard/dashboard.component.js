(function () {
  'use strict';

    angular
    .module ('ngCalendar')
    .component ('dashboard', dashboard());
        function dashboard() {

        DashboardController.$inject = ['$log', 'Events'];
        function DashboardController($log, Events){
            this.events = Events.get();
        }

        return {
            bindings: {},
            controller: DashboardController,
            templateUrl: './app/dashboard/dashboard.tpl.html'
        }
    }
} ());