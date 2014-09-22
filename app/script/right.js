'use strict';

var right = {
  'target': 'right',
  'click': 2,

  'mirror': function (arg) {
    move.mirror();
  },
  'call': function (arg) {
    var click = right.click;

    door.click = click;
  }
}
