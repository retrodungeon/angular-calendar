(function(){
    'use strict';

    angular
        .module('ngCalendar')
        .filter('relevant', Filter)

    function Filter(){
        return function(items){
            var orderedItems = items;

            return orderedItems.sort(function(item) {
                return item.type === "important" ? 0 : -1; 
            });
        }
    }
}());