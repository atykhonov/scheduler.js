define(['scheduler/views/booking'], function(BookingView) {

  describe('BookingView', function() {

    describe('#render()', function() {
      it('should render "booking-view"', function() {
        var view = new BookingView();
        var template = 'booking-view';

        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#render()', function() {
      it('should render default template', function() {
        var view = new BookingView('booking-id');

        assert.equal(
          '<div id="booking-id" class="booking-view"></div>', view.render());
      });
    });
  })
});
