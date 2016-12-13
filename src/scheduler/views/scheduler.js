define(
  [
    'scheduler/views/view',
    'extend',
    'text!scheduler/templates/scheduler.html'
  ],
  function(View, extend, html) {

    var SchedulerView = function(id, weekView, toolbarView) {

      View.call(this, arguments);

      this.weekView = weekView;

      this.toolbarView = toolbarView;

      this.dayLabels = new Array();

      this.setWeekView = function(view) {
        this.weekView = view;
      }

      this.getWeekView = function() {
        return this.weekView;
      }

      this.addDayLabelView = function(view) {
        this.dayLabels.push(view);
      }

      this.getDayLabelViews = function() {
        return this.dayLabels;
      }

      this.setToolbarView = function(view) {
        this.toolbarView = view;
      }

      this.getToolbarView = function() {
        return this.toolbarView;
      }

      this.setTemplate(html.trim());

      this.setData({
        'week': this.getWeekView(),
        'toolbar': this.getToolbarView(),
        'dayLabels': this.getDayLabelViews()
      });

      this.display = function(element) {
        element.innerHTML = this.render();
        this.weekView.onDisplay();
        this.toolbarView.onDisplay();
        this.dayLabels.forEach(function(label) {
          label.onDisplay();
        });
      }
    }

    extend(SchedulerView, View);

    return SchedulerView;
  });
