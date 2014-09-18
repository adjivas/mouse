'use strict';
var py = require('python-shell');

/*
** Mouselog
*/

var door = {
  'right': false,
  'listen': undefined,
  'targetno': 'left',
  'target': 'right',
  'file': 'door.py',
  'args': {
    'scriptPath': './app/python/',
    'mode': 'text '
  },

  'open': function (arg) {
    var file = (typeof arg === 'string' ? arg : door.file);

    door.listen = new py(file, door.args);
    door.listen.on('message', door.info)
    door.listen.end(door.close);
  },
  'info': function (message) {
    var target = document.querySelector(door.target);
    var attribute = tool.attribute;

    if (target && target.getAttribute(attribute)) {
      if (door.right) {
        move.mirror();
        exec.run({
          'click': 2
        });
        tool.select({
          'toElement': document.querySelector(door.targetno)
        });
        door.right = false;
      }
      else
        door.right = true
    }
  },
  'close': function (err) {
    if (err)
      throw err;
    door.open();
  },
  'default': window.addEventListener('load', function (arg) {
    door.open();
  }, false)
}
