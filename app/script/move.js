'use strict';

var move = {
  'target': 'pointer',
  'attribute': 'style',
  'time': undefined,
  'timeno': undefined,
  'degret': 0,

  'circular': function (arg) {
    var target = document.querySelector(move.target);
    var attribute = move.attribute;
    var value = '-webkit-transform:';

    if (0 <= move.degret && move.degret < 360)
      move.degret += (arg ? arg : 1);
    else
      move.degret = 0;
    value += 'rotate(' + move.degret + 'deg);';
    if (target)
      target.setAttribute(attribute, value);
  },
  'mirror': function (arg) {
    if (move.time === undefined) {
      move.time = window.setInterval(move.circular, 1);
      if (move.timeno !== undefined)
        move.timeno = window.clearInterval(move.timeno);
    }
    else {
      move.time = window.clearInterval(move.time);
      if (move.timeno === undefined)
        if (arg === undefined)
          move.timeno = window.setInterval(exec.move, 100);
    }
  },
  'default': window.addEventListener('load', function() {
    move.mirror();
  }, false)
}
