define(
  [
    'scheduler/views/view',
    'extend',
    'text!scheduler/templates/week.html'
  ],
  function(View, extend, html) {

    var WeekView = function(id) {

      View.apply(this, arguments);

      this.dayViews = new Array();

      this.hourLabels = new Array();

      this.addDayView = function(view) {
        this.dayViews.push(view);
      }

      this.getDayViews = function() {
        return this.dayViews;
      }

      this.addHourLabelView = function(view) {
        this.hourLabels.push(view);
      }

      this.getHourLabelViews = function() {
        return this.hourLabels;
      }

      this.setTemplate(html.trim());

      this.setData({
        'hours': this.getHourLabelViews(),
        'days': this.getDayViews()
      });

      this.onDisplay = function() {
        View.prototype.onDisplay.call(this);
        this.dayViews.forEach(function(view) {
          view.onDisplay();
        });
        this.hourLabels.forEach(function(view) {
          view.onDisplay();
        });
      }
    }

    extend(WeekView, View);

    return WeekView;
  });
