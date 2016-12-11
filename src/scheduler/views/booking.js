define(
  ['scheduler/views/view', 'extend', 'text!scheduler/templates/booking.html'],
  function(View, extend, html) {

    var BookingView = function(id, hour, minutes, duration) {

      View.apply(this, arguments);

      this.hour = hour;

      this.minutes = minutes;

      this.duration = duration;

      this.setTemplate(html.trim());

      this.setData({
        'var': 'val'
      });

      this.getHour = function() {
        return this.hour;
      }

      this.getMinutes = function() {
        return this.minutes;
      }

      this.getDuration = function() {
        return this.duration;
      }
    }

    extend(BookingView, View);

    return BookingView;
  });
