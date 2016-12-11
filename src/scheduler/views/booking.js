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

      this.startMoving = function(event) {
        event = event || window.event;
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

        element.parentNode.style.cursor = 'move';

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
        var a = document.createElement('script');
        document.getElementById('week-view').style.cursor = 'default';
        document.onmousemove = function(){}
      }

      this.move = function(event, xpos, ypos) {

        var element = self.getElement();

        if (element.parentNode != event.target.parentNode) {
          if (event.target.view instanceof HourView) {
            event.target.parentNode.appendChild(element);
          }
        }

        var gymElement = element.parentNode;

        var below;
        var hourElement;
        for (var i = 0; i < 24; i++) {
          hourElement = gymElement.children[i];
          if (ypos > hourElement.offsetTop && ypos < hourElement.offsetTop + hourElement.offsetHeight) {
            below = hourElement;
            break;
          }
        }

        if (!below) {
          return;
        }

        var parts = 4;
        var threshold = below.offsetHeight / parts;

        var thresholds = [];
        for (var i = 0; i < parts; i++) {
          if (ypos > below.offsetTop + i * threshold && ypos < below.offsetTop + (i + 1) * threshold) {
            ypos = below.offsetTop + (i + 1) * threshold;
          }
        }

        element.style.top = ypos + 'px';
      }

      this.divMove = function(event) {
        var element = self.getElement();
        element.style.position = "absolute";
        element.style.top = event.clientY - (event.clientY - element.offsetTop) + "px";
        element.style.left = event.clientX - (event.clientX - element.offsetLeft) + "px";
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
