define(
  ['scheduler/views/view', 'extend', 'text!scheduler/templates/hour.html'],
  function (View, extend, html) {

  function HourView(id) {

    View.apply(this, arguments);

    this.template = html.trim();
  }

  extend(HourView, View);

  return HourView;
});
