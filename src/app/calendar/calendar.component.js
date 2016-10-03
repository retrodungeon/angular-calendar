(function () {
    'use strict';

    angular
        .module ('ngCalendar')
        .component ('calendar', calendar());


    function calendar() {
        CalendarController.$inject = ['Events', 'Calendar']
        function CalendarController(Events, Calendar){
            this.WEEKDAYS = moment.weekdaysShort();

            this.$onInit = function() {
                // setup starting points
                var date = moment(),
                    start = date.clone();
                
                // generate dates for view
                this.today = date.format('MMMM DD YYYY');
                this.month = date.format('MMMM YYYY');

                // store the date so we can reuse it l8r
                this.date = date.clone();

                // set start day of first day of current month               
                start.date(1);

                Calendar.removeTime(start.day(0));

                this.weeks = Calendar.build(start, this.date);
            }

            this.getPreviousMonth = function() {
                var previous = this.date.clone(),
                    monthIndex = previous.month();
                
                //setup date for view
                this.date.month(monthIndex - 1);
                this.month = this.date.format('MMMM YYYY');

                previous.month(monthIndex - 1).date(1);

                Calendar.removeTime(previous.day(0));
                this.weeks = Calendar.build(previous, this.date);
            }

            this.getNextMonth = function() {
                var next = this.date.clone(),
                    monthIndex = next.month();
                
                //setup date for view
                this.date.month(monthIndex + 1);
                this.month = this.date.format('MMMM YYYY');

                next.month(monthIndex + 1).date(1);

                Calendar.removeTime(next.day(0));
                this.weeks = Calendar.build(next, this.date);
            }

            this.getEventsByDate = function (date) {
                this.events = Events.getByDate(date)
            };

            this.onSelect = function(events) {
                this.events = _.clone(events);
            }
            
            /** Determines whether should we 
             * show concurrent events or not
             * @param  {boolean} value
             */
            this.showConcurrentEvents = function(value) {
                this.showConcurrent = value;
            }

            function getFormattedMonth(date) {
                return date.format('MMMM YYYY');
            }

        }

        return {
            bindings: {},
            controller: CalendarController,
            templateUrl: './app/calendar/calendar.tpl.html'        
        }
    }

} ());