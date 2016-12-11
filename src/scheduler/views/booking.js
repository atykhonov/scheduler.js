define(
  [
    'scheduler/views/view',
    'scheduler/views/hour',
    'extend',
    'text!scheduler/templates/booking.html'
  ],
  function(View, HourView, extend, html) {

    var BookingView = function(id, hour, minutes, duration) {

      View.apply(this, arguments);

      var self = this;

      this.hour = hour;

      this.minutes = minutes;

      this.duration = duration;

      this.stairs = new Array();

      this.setTemplate(html.trim());

      this.setStairs = function(stairs) {
        this.stairs = stairs;
      }

      this.getStairs = function() {
        return this.stairs;
      }

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

      this.startMoving = function(event) {

        event.preventDefault();

        var element = self.getElement();

        var posX = event.clientX,
            posY = event.clientY,
            divTop = element.offsetTop,
            divLeft = element.offsetLeft,
            eWi = element.offsetWidth,
            eHe = element.offsetHeight,
            cWi = element.parentNode.offsetWidth,
            cHe = element.parentNode.offsetHeight;

        var diffX = posX - divLeft,
            diffY = posY - divTop;

        document.onmousemove = function(event) {
          event = event || window.event;
          var posX = event.clientX,
              posY = event.clientY,
              aX = posX - diffX,
              aY = posY - diffY;
          if (aX < 0) aX = 0;
          if (aY < 0) aY = 0;
          if (aX + eWi > cWi) aX = cWi - eWi;
          if (aY + eHe > cHe) aY = cHe - eHe;
          self.move(event, aX, aY);
        }
      }

      this.stopMoving = function() {
        document.onmousemove = function(){};
      }

      this.move = function(event, xpos, ypos) {

        var element = self.getElement();

        if (element.parentNode != event.target.parentNode) {
          if (event.target.view instanceof HourView) {
            event.target.parentNode.appendChild(element);
          }
        }

        var stairs = self.getStairs();
        for (var i = 0; i < stairs.length; i++) {
          if (ypos > stairs[i] && ypos < stairs[i+1]) {
            ypos = stairs[i+1];
          }
        }

        element.style.top = ypos + 'px';
      }
    }

    extend(BookingView, View);

    BookingView.prototype.assignEventListeners = function() {
      this.element.addEventListener("mousedown", this.startMoving);
      this.element.addEventListener("mouseup", this.stopMoving);
      window.addEventListener('mouseup', this.stopMoving, false);
      View.prototype.assignEventListeners.call(this);
    }

    return BookingView;
  });
