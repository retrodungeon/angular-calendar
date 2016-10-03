(function() {
'use strict';

    angular
        .module('ngCalendar')
        .service('Events', Events);

    Events.$inject = ['EventsData'];
    function Events(EventsData) {
        var events = EventsData;

        this.get = get;
        ////////////////

        function getAll() { 
            return events;
        }

        function getById(id) {
            return _.find(events, {'id': id});
        }

        function getByDate(date) {
            var startDate, endDate,    
                momentDate = moment(date)

            return events.filter(function(item){
                startDate = moment(item.startdate);
                endDate = moment(item.enddate);

                return (momentDate >= startDate) && (momentDate <= endDate);
            });
        }

        function get(params) {
            var events = getAll();

            if (params) {
                if (params.id) {
                    events = getById(params.id);
                }

                if(params.date) {
                    events = getByDate(params.date);
                }
            }

            return events;
        }
    }
})();