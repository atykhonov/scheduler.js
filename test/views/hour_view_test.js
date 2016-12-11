define(['scheduler/views/hour'], function(HourView) {

  describe('HourView', function() {

    describe('#render()', function() {
      it('should render "hour-view"', function() {
        var view = new HourView();
        var template = 'hour-view';

        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#render()', function() {
      it('should render default template', function() {
        var view = new HourView('hour-id');

        assert.equal(
          '<div id="hour-id" class="hour-view"></div>', view.render());
      });
    });
  })
});
