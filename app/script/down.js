'use strict';
var py = require('python-shell');

var down = {
  'listen': undefined,
  'cord': {
    'x': 0,
    'y': 0
  },
  'file': 'mousedown.py',
  'args': {
    'scriptPath': './app/python/',
    'mode': 'json '
  },

  'open': function (arg) {
    var file = (typeof arg === 'string' ? arg : down.file);

    down.listen = new py(file, down.args);
    down.listen.on('message', down.call);
    down.listen.end(down.close);
  },
  'call': function (message) {
    var find = tool.target + ' > *[' + tool.attribute + ']';
    var mode = document.querySelector(find);
    var cord = JSON.parse(message);

    if (mode) {
      mode = mode.tagName.toLowerCase();
      down.cord.x = cord.x;
      down.cord.y = cord.y;
      exec.run({'click': window[mode].click});
      if (window[mode].exec)
        window[mode].exec();
      if (window[mode].rotate)
        window[mode].rotate();
    }
  },
  'close': function (err) {
    if (err)
      throw (err);
    down.open();
  },
  'default': window.addEventListener('load', function (arg) {
    down.open();
  }, false)
}
