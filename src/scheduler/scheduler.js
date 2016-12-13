define(
  [
    'scheduler/views/scheduler',
    'scheduler/views/week',
    'scheduler/views/day',
    'scheduler/views/gym',
    'scheduler/views/hour',
    'scheduler/views/booking',
    'scheduler/views/hour-label',
    'scheduler/views/label',
    'scheduler/views/button',
    'scheduler/views/toolbar',
    'scheduler/views/day-label',
    'moment',
    'moment/locale/uk'
  ],
  function(SchedulerView, WeekView, DayView, GymView, HourView,
    BookingView, HourLabelView, LabelView, ButtonView,
    ToolbarView, DayLabelView, moment) {

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
        for (var hl = 0; hl < 24; hl++) {
          weekView.addHourLabelView(
            new HourLabelView('hour-label-' + hl, hl));
        }
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

        var schedulerView;

        var now = moment();

        var displayToday = function() {

          while (now.format('d') != 1) {
            now.subtract(1, 'd');
          }

          var dayLabelViews = schedulerView.getDayLabelViews();
          for (var i = 1; i < dayLabelViews.length; i++) {
            labelView = dayLabelViews[i].getLabel();
            labelView.setText(now.format('dd, DD MMMM'));
            now.add(1, 'd');
          }

          now.subtract(6, 'd');
        }
        
        var todayClick = function() {
          now = moment();

          displayToday();
        }

        var nextWeekClick = function() {
          now.add(7, 'd');

          displayToday();
        }

        var previousWeekClick = function() {
          now.subtract(7, 'd');

          displayToday();
        }

        var toolbarView = new ToolbarView('toolbar');
        toolbarView.addButton(new ButtonView('day-view-button', 'Day'));
        toolbarView.addButton(new ButtonView('week-view-button', 'Week'));
        toolbarView.addButton(new ButtonView('month-view-button', 'Month'));
        toolbarView.addButton(
          new ButtonView('today-view-button', 'Today', todayClick));
        toolbarView.addButton(
          new ButtonView('previous-view-button', '<', previousWeekClick));
        toolbarView.addButton(
          new ButtonView('next-view-button', '>', nextWeekClick));

        schedulerView = new SchedulerView(
          'scheduler-view', weekView, toolbarView);
        schedulerView.addDayLabelView(new LabelView('day-label-empty', '&nbsp;'));

        for (var d = 1; d < 8; d++) {
          var labelView = new DayLabelView(
            'day-label-' + d, new LabelView('day-label-label-' + d), 'some text');
          schedulerView.addDayLabelView(labelView);
        }
        
        this.view = schedulerView;
      } else if (options.defaultView == 'day') {
        this.view = new DayView();
      } else if (options.defaultView == 'month') {
        this.view = new MonthView();
      }

      this.view.display(element);

      displayToday();
    }

    return Scheduler;
});
