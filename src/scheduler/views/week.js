define(['scheduler/views/view', 'extend'], function(View, extend) {

  var WeekView = function() {

    View.call(this, arguments);

    this.dayViews = new Array();

    this.addDayView = function(view) {
      this.dayViews.push(view);
    }

    this.getDayViews = function() {
      return this.dayViews;
    }

    var template = '\
<div>\
  <% days.forEach(function(day) { %>\
    <%- day.render() %>\
  <% }) %>\
</div>';
    this.setTemplate(template);
    this.setData({'days': this.getDayViews()});
  }

  extend(WeekView, View);

  return WeekView;
});
