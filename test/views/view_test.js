define(['scheduler/views/view'], function(View) {

  describe('View', function() {

    describe('#render()', function() {
      it('should render as "best-value"', function() {
        var template = 'view';
        var view = new View();

        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });

    describe('#setTemplate #getTemplate', function() {
      it('should set and get the template', function() {
        var template = 'template';
        var view = new View();

        view.setTemplate(template);

        assert.equal(template, view.getTemplate());
      });
    });

    describe('#setData #getData', function() {
      it('should set and get the data', function() {
        var data = {'var': 'value'};
        var view = new View();

        view.setData(data);

        assert.equal(data, view.getData());
      });
    });
  });

});
