'use strict';
var py = require('python-shell');

/*
** Mouselog
*/

var door = {
  'listen': undefined,
  'file': 'door.py',
  'args': {
    'scriptPath': './app/python/',
    'mode': 'json '
  },

  'open': function (arg) {
    var file = (typeof arg === 'string' ? arg : door.file);

    door.listen = new py(file, door.args);
    door.listen.on('message', door.call)
    door.listen.end(door.close);
  },
  'call': function (message) {
    var find = tool.target + ' > *[' + tool.attribute + ']';
    var mode = document.querySelector(find);
    var time = JSON.parse(message);

    time = (time.end - time.start);
    if (2 < time)
      tool.next();
    else if (mode) {
      mode = mode.tagName.toLowerCase();
      exec.run({'click': window[mode].click});
      if (window[mode].exec)
        window[mode].exec();
      if (window[mode].mirror)
        window[mode].mirror();
    }
  },
  'close': function (err) {
    if (err)
      throw (err);
    door.open();
  },
  'default': window.addEventListener('load', function (arg) {
    door.open();
  }, false)
}
