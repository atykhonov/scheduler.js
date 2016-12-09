describe('View', function() {
  describe('#getValue()', function() {
    it('should return "test-value"', function() {
      var View = require('views');
      var view = View23();
      assert.equal('test-value', view.getValue());
    });
  });
});
