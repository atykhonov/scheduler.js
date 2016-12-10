define(['scheduler/views/gym', 'scheduler/views/hour'], function(GymView, HourView) {

  describe('GymView', function() {

    describe('#render()', function() {
      it('should render "gym-view"', function() {
        var template = 'gym-view';
        var view = new GymView();
        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#render()', function() {
      it('should render predefined template', function() {
        var view = new GymView();
        var hourView1 = new HourView();
        var hourView2 = new HourView();
        view.addHourView(hourView1);
        view.addHourView(hourView2);

        assert.equal(
          '<div>      <div>Hour!</div>      <div>Hour!</div>  </div>',
          view.render()
        );
      });
    });

    describe('#addHourViews #getHourViews', function() {
      it('the hour views should be added and returned', function() {
        var gymView = new GymView();
        var hourViews = Array();
        for(var i = 0; i < 24; i++) {
          hourViews.push(new HourView());
        }
        gymView.addHourViews(hourViews);

        assert.equal(24, gymView.getHourViews().length);
      });
    });

    describe('#addHourView #getHourViews', function() {
      it('the hour view should be added and returned', function() {
        var gymView = new GymView();
        var hourView = new HourView();
        gymView.addHourView(hourView);

        assert.equal(hourView, gymView.getHourViews()[0]);
      });
    });
  })
});
