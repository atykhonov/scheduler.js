define(['scheduler/views/view', 'extend'], function (View, extend) {

  var GridView = function() {

    View.call(this, arguments);
  }

  extend(GridView, View);

  return GridView;
});
