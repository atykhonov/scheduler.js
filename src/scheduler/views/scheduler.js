define(['scheduler/views/view', 'extend'], function(View, extend) {

  var SchedulerView = function() {

    View.call(this, arguments);

    this.weekView;

    this.setWeekView = function(view) {
      this.weekView = view;
    }

    this.getWeekView = function() {
      return this.weekView;
    }

    var template = '\
<div>\
  <%- week.render() %>\
</div>';
    this.setTemplate(template);
    this.setData({'week': this.getWeekView()});
  }

  extend(SchedulerView, View);

  return SchedulerView;
});
