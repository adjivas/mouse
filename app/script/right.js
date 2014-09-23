'use strict';

var right = {
  'target': 'right',
  'click': 2,

  'rotate': function (arg) {
    move.rotate();
  },
  'call': function (arg) {
    var click = right.click;

    door.click = click;
  }
}
