'use strict';

var left = {
  'target': 'left',
  'click': 0,

  'mirror': function (arg) {
    move.mirror();
  },
  'call': function (arg) {
    var click = left.click;

    door.click = click;
  }
}
