define(
  ['scheduler/views/gym', 'scheduler/views/hour', 'scheduler/views/booking'],
  function(GymView, HourView, BookingView) {

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
        var view = new GymView('gym-id');
        var hourView1 = new HourView();
        var hourView2 = new HourView();
        view.addHourView(hourView1);
        view.addHourView(hourView2);

        assert.equal(
          '<div id="gym-id" class="gym-view">\n  \n  <div class="hour-view"></div>\n  \n  <div class="hour-view"></div>\n  \n</div>\n',
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

    describe('#addBookingView #getBookingViews', function() {
      it('the booking view should be added and returned', function() {
        var gymView = new GymView();
        var bookingView1 = new BookingView();
        var bookingView2 = new BookingView();

        gymView.addBookingView(bookingView1);
        gymView.addBookingView(bookingView2);

        assert.equal(bookingView1, gymView.getBookingViews()[0]);
        assert.equal(bookingView2, gymView.getBookingViews()[1]);
      });
    });
  })
});
