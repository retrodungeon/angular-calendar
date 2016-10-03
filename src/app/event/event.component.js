(function () {
    'use strict';

    angular
        .module ('ngCalendar')
        .component ('event', event());


    function event() {

        EventController.$inject = ['Events', '$stateParams'];
        function EventController(Events, $stateParams){
            this.$onInit = function() {
                if($stateParams.id) {
                    this.event = Events.get({id: $stateParams.id});
                }
            };
        }

        return {
            bindings: {},
            controller: EventController,
            templateUrl: './app/event/event.tpl.html'       
        }
    }

} ());