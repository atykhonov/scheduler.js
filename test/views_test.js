define(['scheduler/views'], function(View) {
  describe('View', function() {
    describe('#getValue()', function() {
      it('should return "best-value"', function() {
        var view = View();
        assert.equal('best-value', view.getValue());
      });
    });
  })
});
