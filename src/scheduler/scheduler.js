define(
  [
    'scheduler/views/week',
    'scheduler/views/day',
    'scheduler/views/gym',
    'scheduler/views/hour',
    'scheduler/views/booking'
  ],
  function(WeekView, DayView, GymView, HourView, BookingView) {

    var Scheduler = function(element, options) {
      var hourViews = new Array();
      if (options === undefined) {
        options = {};
      }
      if (options.defaultView === undefined) {
        options.defaultView = 'week';
      }
      if (options.defaultView == 'week') {
        var weekView = new WeekView('week-view');
        for (var d = 0; d < 7; d++) {
          var dayId = 'day-' + (d + 1);
          var dayView = new DayView(dayId);
          for (var g = 0; g < 3; g++) {
            var gymId = dayId + '-' + 'gym' + '-' + (g + 1);
            var gymView = new GymView(gymId);

            if (d == 3 && g == 2) {
              gymView.addBookingView(new BookingView('test-booking', 13, 0, 2));
            }
            
            for (var h = 0; h < 24; h++) {
              var hourId = gymId + '-' + 'hour' + '-' + (h + 1);
              var hourView = new HourView(hourId);
              hourViews.push(hourView);
              gymView.addHourView(hourView);
            }
            dayView.addGymView(gymView);
          }
          weekView.addDayView(dayView);
        }
        this.view = weekView;
      } else if (options.defaultView == 'day') {
        this.view = new DayView();
      } else if (options.defaultView == 'month') {
        this.view = new MonthView();
      }

      this.view.display(element);
    }

    return Scheduler;
});
