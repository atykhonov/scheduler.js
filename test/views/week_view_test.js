define(
  ['scheduler/views/week', 'scheduler/views/day', 'scheduler/views/gym'],
  function(WeekView, DayView, GymView) {

  describe('WeekView', function() {

    describe('#render()', function() {
      it('should render "week-view"', function() {
        var template = 'week-view';
        var view = new WeekView();
        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#render()', function() {
      it('should render predefined template', function() {
        var view = new WeekView('week-id');

        assert.equal(
          '<div id="week-id" class="week-view">\n  \n</div>',
          view.render()
        );
      });
    });

    describe('#addDayView #getDayViews', function() {
      it('the day views should be added and returned', function() {
        var weekView = new WeekView();
        weekView.setTemplate('week-view');
        var dayView1 = new DayView();
        dayView1.setTemplate('day-view-1')
        var dayView2 = new DayView();
        dayView2.setTemplate('day-view-2')

        weekView.addDayView(dayView1);
        weekView.addDayView(dayView2);

        assert.equal(weekView.getDayViews().length, 2);
      });
    });

    describe('build whole view', function() {
      it('should be built and rendered', function() {

        var addGymViewsToDayView = function(dayView) {
          var template = 'gym-view';
          var gymView1 = new GymView(template);
          var gymView2 = new GymView(template);
          var gymView3 = new GymView(template);
          dayView.addGymView(gymView1);
          dayView.addGymView(gymView2);
          dayView.addGymView(gymView3);
          return dayView;
        }

        var weekView = new WeekView('week-view');
        var template = 'day-view';
        var dayView1 = new DayView(template);
        addGymViewsToDayView(dayView1);
        var dayView2 = new DayView(template);
        addGymViewsToDayView(dayView2);
        var dayView3 = new DayView(template);
        addGymViewsToDayView(dayView3);
        var dayView4 = new DayView(template);
        addGymViewsToDayView(dayView4);
        var dayView5 = new DayView(template);
        addGymViewsToDayView(dayView5);
        var dayView6 = new DayView(template);
        addGymViewsToDayView(dayView6);
        var dayView7 = new DayView(template);
        addGymViewsToDayView(dayView7);

        weekView.addDayView(dayView1);
        weekView.addDayView(dayView2);
        weekView.addDayView(dayView3);
        weekView.addDayView(dayView4);
        weekView.addDayView(dayView5);
        weekView.addDayView(dayView6);
        weekView.addDayView(dayView7);

        assert.equal(weekView.getDayViews().length, 7);
      });
    });
  })
});
