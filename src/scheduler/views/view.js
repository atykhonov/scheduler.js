define(['lib/ejs'], function (ejs) {

  function View(id) {

    this.id = id;

    this.template;

    this.data;

    this.element;
  }

  View.prototype = {
    setId: function(id) {
      this.id = id;
    },
    getId: function() {
      return this.id;
    },
    setElement: function(element) {
      this.element = element;
    },
    getElement: function() {
      return this.element;
    },
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
    assignEventListeners: function() {
    },
    onDisplay: function() {
      var element = document.getElementById(this.getId());
      if (element) {
        element.view = this;
        this.setElement(element);
        this.assignEventListeners();
      }
    },
    render: function() {
      var data = this.getData();
      if (data === undefined) {
        data = {};
      }
      data['id'] = this.getId();
      var result = ejs.render(this.getTemplate(), data);
      return result;
    },
    display: function(element) {
      // Abstract function.
    }
  }

  return View;
});
