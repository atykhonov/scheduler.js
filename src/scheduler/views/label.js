define(
  [
    'scheduler/views/view',
    'extend',
    'text!scheduler/templates/label.html'
  ],
  function (View, extend, html) {

    function LabelView(id, text) {

      View.apply(this, arguments);

      this.text = text;

      this.setText = function(text) {
        this.text = text;
        if (this.element) {
          this.element.innerHTML = text;
        } else {
          console.log('There is no an element!');
        }
      }

      this.getText = function() {
        return this.text;
      }

      this.setTemplate(html.trim());

      this.getData = function() {
        return {
          'text': this.getText()
        }
      }
    }

    extend(LabelView, View);

    return LabelView;
  });
