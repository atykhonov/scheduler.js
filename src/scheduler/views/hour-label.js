define(
  [
    'scheduler/views/label',
    'extend',
  ],
  function (LabelView, extend) {

    function HourLabelView(id, hour) {

      this.hour = hour;

      var label = '';
      if (hour < 10) {
        label = '0' + hour;
      } else {
        label = hour;
      }
      label += ':00';

      arguments[1] = label;

      LabelView.apply(this, arguments);

      this.onDisplay = function() {
        LabelView.prototype.onDisplay.call(this);
        // if (this.hour == 7) {
        //   this.getElement().scrollIntoView();
        // }
      }
    }

    extend(HourLabelView, LabelView);

    return HourLabelView;
  });
