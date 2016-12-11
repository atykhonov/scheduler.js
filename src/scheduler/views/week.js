define(
  ['scheduler/views/view', 'extend', 'text!scheduler/templates/week.html'],
  function(View, extend, html) {

    var WeekView = function(id) {

      View.apply(this, arguments);

      this.dayViews = new Array();

      this.addDayView = function(view) {
        this.dayViews.push(view);
      }

      this.getDayViews = function() {
        return this.dayViews;
      }

      this.setTemplate(html.trim());

      this.setData({
        'id': this.getId(),
        'days': this.getDayViews()
      });

      this.display = function(element) {
        element.innerHTML = this.render();
        this.dayViews.forEach(function(view) {
          view.onDisplay();
        });
      }
    }

    extend(WeekView, View);

    return WeekView;
  });
