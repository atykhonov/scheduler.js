define(
  ['scheduler/views/view', 'extend', 'text!scheduler/templates/day.html'],
  function(View, extend, html) {

    var DayView = function() {

      View.apply(this, arguments);

      this.gymViews = new Array();

      this.addGymView = function(view) {
        this.gymViews.push(view);
      }

      this.getGymViews = function() {
        return this.gymViews;
      }

      this.setTemplate(html.trim());

      this.setData({
        'gyms': this.getGymViews()
      });
    }

    extend(DayView, View);

    DayView.prototype.onDisplay = function() {
      View.prototype.onDisplay.call(this);
      this.gymViews.forEach(function(view) {
        view.onDisplay();
      });
    }
    
    return DayView;
  });
