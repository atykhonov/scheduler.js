define(
  ['scheduler/views/day', 'scheduler/views/gym', 'scheduler/views/hour'],
  function(DayView, GymView, HourView) {

  describe('DayView', function() {

    describe('#render()', function() {
      it('should render "day-view"', function() {
        var template = 'day-view';
        var view = new DayView();

        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#addGymView #getGymViews', function() {
      it('the gym views should be added and returned', function() {
        var dayTemplate = 'day-view';
        var gymTemplate = 'gym-template';
        var dayView = new DayView();
        dayView.setTemplate(dayTemplate);
        var gymView1 = new GymView(gymTemplate);
        gymView1.setTemplate(gymTemplate);
        var gymView2 = new GymView(gymTemplate);
        gymView2.setTemplate(gymTemplate);

        dayView.addGymView(gymView1);
        dayView.addGymView(gymView2);

        assert.equal(dayView.getGymViews().length, 2);
      });
    });
  })
});
