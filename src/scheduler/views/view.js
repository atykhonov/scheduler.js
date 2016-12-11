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
    click: function(event) {
      console.log('This is click on ' + event.target.id);
    },
    assignEventListeners: function() {
      this.element.addEventListener("click", this.click);
    },
    onDisplay: function() {
      this.setElement(document.getElementById(this.getId()));
      this.assignEventListeners();
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
