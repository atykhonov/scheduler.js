define(
  [
    'scheduler/views/view',
    'extend',
    'text!scheduler/templates/toolbar.html'
  ],
  function (View, extend, html) {

    function ToolbarView(id) {

      View.apply(this, arguments);

      this.buttons = {};

      this.setTemplate(html.trim());

      this.addButton = function(button) {
        this.buttons[button.getId()] = button;
      }

      this.getButtons = function() {
        return this.buttons;
      }

      this.setData({
        'buttons': this.getButtons()
      });

      ToolbarView.prototype.onDisplay = function() {
        console.log('toolbar onDisplay');
        View.prototype.onDisplay.call(this);
        for (var key in this.buttons) {
          var button = this.buttons[key];
          button.onDisplay();
        }
      };
    }

    extend(ToolbarView, View);

    return ToolbarView;
  });
