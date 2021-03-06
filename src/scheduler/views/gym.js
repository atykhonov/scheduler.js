define(
  ['scheduler/views/view', 'extend', 'text!scheduler/templates/gym.html'],
  function (View, extend, html) {

    var GymView = function(id) {

      View.apply(this, arguments);

      this.hourViews = new Array();

      this.bookingViews = new Array();

      this.addHourView = function(view) {
        this.hourViews.push(view);
      }

      this.addHourViews = function(views) {
        var self = this;
        views.forEach(function(view) {
          self.addHourView(view);
        });
      }

      this.getHourViews = function() {
        return this.hourViews;
      }

      this.addBookingView = function(view) {
        this.bookingViews.push(view);
      }

      this.getBookingViews = function() {
        return this.bookingViews;
      }

      this.setTemplate(html.trim());

      this.setData({
        'hours': this.getHourViews(),
        'bookings': this.getBookingViews()
      });
    }

    extend(GymView, View);

    GymView.prototype.onDisplay = function() {
      View.prototype.onDisplay.call(this);
      this.hourViews.forEach(function(view) {
        view.onDisplay();
      });
      var parentElement = this.getElement();
      var hourView = this.hourViews[0].getElement();
      var hourViewOffsetHeight = hourView.offsetHeight;
      var hourViewClientHeight = hourView.clientHeight;
      var hourViewStyleWidth = hourView.style.width;
      this.bookingViews.forEach(function(view) {
        view.onDisplay();
        var element = view.getElement();
        element.style.top = hourViewOffsetHeight * view.getHour() + 'px';
        element.style.height = hourViewOffsetHeight * view.getDuration() + 'px';
      });

      var stairs = new Array();
      for (var i = 0; i < 24; i++) {
        var hourView = this.hourViews[i];
        var element = hourView.getElement();
        var parts = 4;
        var threshold = element.offsetHeight / parts;
        for (var y = 0; y < parts; y++) {
          stairs.push(element.offsetTop + y * threshold);
        }
      }
      this.bookingViews.forEach(function(view) {
        view.setStairs(stairs);
      });
    }

    return GymView;
});
