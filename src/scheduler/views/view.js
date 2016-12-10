define(['lib/ejs'], function (ejs) {

  function View() {

    this.template;

    this.data;

    // return this;
  }

  View.prototype = {
    setTemplate: function(template) {
      this.template = template;
    },
    getTemplate: function() {
      return this.template;
    },
    setData: function(data) {
      this.data = data;
    },
    getData: function() {
      return this.data;
    },
    render: function() {
      return ejs.render(this.getTemplate(), this.getData());
    }
  }

  return View;
});
