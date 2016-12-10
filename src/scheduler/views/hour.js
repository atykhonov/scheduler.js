define(['scheduler/views/view', 'extend'], function (View, extend) {

  function HourView() {

    View.call(this, arguments);

    this.template = '<div>Hour!</div>';
  }

  extend(HourView, View);

  return HourView;
});
