(function() {
'use strict';

    angular
        .module('ngCalendar')
        .service('Calendar', Calendar);


    Calendar.$inject = ['Events'];
    function Calendar(Events) {
        this.build = buildMonth;
        this.removeTime = removeTime;
        ////////////////

        /** Set time as midnight
         * @param  {moment object} date
         */
        function removeTime(date) {
            return date.startOf('day');
        }
        
        /** Main method which creates weeks array
         * @param  {} start
         * @param  {} month
         */
        function buildMonth(start, current) {
            var weeks = [],
                done = false, 
                date = start.clone(), 
                monthIndex = date.month(), 
                count = 0;

            while (!done) {
                weeks.push({ days: buildWeek(date.clone(), current) });
                date.add(1, "w");
                done = count++ > 2 && monthIndex !== date.month();
                monthIndex = date.month();
            }

            return weeks;
        }
        
        /** Create array of weekdays with mapped events
         * @param  {moment object} date 
         * @param  {moment object} current
         */
        function buildWeek(date, current) {
            var days = [];

            for (var i = 0; i < 7; i++) {
                days.push({
                    number: date.date(),
                    isCurrentMonth: date.month() === current.month(),
                    events: Events.get({date: date.format("YYYY-MM-DD")})
                });

                date.add(1, "d");
            }
            return days;
        }
    }
})();