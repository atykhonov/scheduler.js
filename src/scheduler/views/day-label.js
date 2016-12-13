define(
  [
    'scheduler/views/label',
    'extend',
    'text!scheduler/templates/day-label.html'
  ],
  function (LabelView, extend, html) {

    function DayLabelView(id, label) {

      // LabelView.apply(this, arguments);
      this.id = id;

      this.label = label;

      this.setLabel = function(label) {
        this.label = label;
      }

      this.getLabel = function() {
        return this.label;
      }

      this.setTemplate(html.trim());

      this.getData = function() {
        return {
          'label': this.getLabel()
        }
      }
    }

    extend(DayLabelView, LabelView);

    DayLabelView.prototype.onDisplay = function() {
      LabelView.prototype.onDisplay.call(this);
      this.label.onDisplay();
    }

    return DayLabelView;
  });
