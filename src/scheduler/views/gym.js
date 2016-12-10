define(['scheduler/views/view', 'extend'], function (View, extend) {

  var GymView = function() {

    View.call(this, arguments);

    this.hourViews = new Array();

    this.addHourView = function(view) {
      this.hourViews.push(view);
    }

    this.addHourViews = function(views) {
      var self = this;
      views.forEach(function(view) {
        self.addHourView(view);
      });
    }

    this.getHourViews = function() {
      return this.hourViews;
    }

    this.getData = function() {
      return {
        'hours': this.getHourViews()
      }
    }

    var template = '\
<div>\
  <% hours.forEach(function(hour) { %>\
    <%- hour.render() %>\
  <% }) %>\
</div>';
    this.setTemplate(template);

    return this;
  }

  extend(GymView, View);

  return GymView;
});
