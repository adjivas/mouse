'use strict';
var py = require('python-shell');

/*
** Mouselog
*/

var door = {
  'listen': undefined,
  'file': 'door.py',
  'cord': {
    'x': 0,
    'y': 0
  },
  'args': {
    'scriptPath': './app/python/',
    'mode': 'json '
  },

  'open': function (arg) {
    var file = (typeof arg === 'string' ? arg : door.file);

    door.listen = new py(file, door.args);
    door.listen.on('message', door.call);
    door.listen.end(door.close);
  },
  'call': function (message) {
    var find = tool.target + ' > *[' + tool.attribute + ']';
    var mode = document.querySelector(find);
    var json = JSON.parse(message);

    json = (json.end - json.start);
    door.cord.x = json.x;
    door.cord.y = json.y;
    if (2 < json)
      tool.next();
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
