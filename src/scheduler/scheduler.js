define(['scheduler/views/week'], function(WeekView) {

  var Scheduler = function(element, options) {
    if (options === undefined) {
      options = {};
    }
    if (options.defaultView === undefined) {
      options.defaultView = 'week';
    }
    if (options.defaultView == 'week') {
      this.view = new WeekView();
    } else if (options.defaultView == 'day') {
      this.view = new DayView();
    } else if (options.defaultView == 'month') {
      this.view = new MonthView();
    }
    element.innerHTML = this.view.render();
  }

  return Scheduler;
});
