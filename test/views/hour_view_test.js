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

    describe('#getTemplate', function() {
      it('should return the predefined template', function() {
        var view = new HourView();
        var template = view.getTemplate();

        assert.equal('<div>Hour!</div>', template);
      });
    });

    describe('#render()', function() {
      it('should render default template', function() {
        var view = new HourView();

        assert.equal('<div>Hour!</div>', view.render());
      });
    });
  })
});
