define(['scheduler/views/grid'], function(GridView) {

  describe('GridView', function() {

    describe('#render()', function() {

      it('should render "best-value"', function() {
        var template = 'best-value';
        var view = new GridView();
        view.setTemplate(template);

        assert.equal(template, view.render());
      });
    });
  })
});
