'use strict';
var py     = require('python-shell');

var scroll = {
  'target': 'scroll',
  'silent': !configuration.directional_move,
  'click': 0,
  'time': undefined,
  'key': undefined,

  'run': function (arg) {
    if (!scroll.silent) {
      py.run('keyboard.py', {
        'scriptPath': './app/python/',
        'args': scroll.key
      }, function (err, results) {
        if (err)
          throw (err);
      });
    }
  },
  'get': function (arg) {
    if (45 < move.degret && move.degret <= 135)
      return ('right');
    else if (135 < move.degret && move.degret <= 225)
      return ('down');
    else if (225 < move.degret && move.degret <= 315)
      return ('left');
    else
      return ('up');
  },
  'rotate': function (arg) {
    move.rotate(true);
    if (scroll.time === undefined) {
      scroll.key = scroll.get();
      scroll.time = window.setInterval(scroll.run, 100);
    }
    else
      scroll.time = window.clearInterval(scroll.time);
  },
  'call': function (arg) {
    var click = left.click;

    door.click = click;
  }
}
