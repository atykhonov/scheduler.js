define(['scheduler/views/view', 'extend'], function(View, extend) {

  var DayView = function() {

    View.call(this, arguments);

    this.gymViews = new Array();

    this.addGymView = function(view) {
      this.gymViews.push(view);
    }

    this.getGymViews = function() {
      return this.gymViews;
    }

    var template = '\
<div>\
  <% gyms.forEach(function(gym) { %>\
    <%- gym.render() %>\
  <% }) %>\
</div>';
    this.setTemplate(template);
    this.setData({'gyms': this.getGymViews()});
  }

  extend(DayView, View);

  return DayView;
});
