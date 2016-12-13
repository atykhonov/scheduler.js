define(
  [
    'scheduler/views/view',
    'extend',
    'text!scheduler/templates/button.html'
  ],
  function (View, extend, html) {

    function ButtonView(id, label, onClick) {

      View.apply(this, arguments);

      this.label = label;

      this.onClick = onClick;

      this.setLabel = function(label) {
        this.label = label;
      }

      this.getLabel = function() {
        return this.label;
      }

      this.setTemplate(html.trim());

      this.setData({
        'label': this.getLabel()
      });

      var self = this;
      this.click = function() {
        self.onClick();
      }
    }

    extend(ButtonView, View);

    ButtonView.prototype.assignEventListeners = function() {
      console.log('event has been assigned!!!!');
      View.prototype.assignEventListeners.call(this);
      this.element.addEventListener('click', this.click);
    }

    // ButtonView.prototype.click = function() {
    //   console.log('ttttt!!!!!');
    // }

    return ButtonView;
  });
