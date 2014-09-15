var py = require('python-shell');

/*
** Mouselog
*/

var door = {
  'listen': undefined,
  'file': 'test.py',
  'args': {
    'mode': 'text ',
    'scriptPath': './app/python/'
  },

  'open': function (arg) {
    var file = (typeof arg === 'string' ? arg : door.file);

    door.listen = new py(file, door.args);
    door.listen.on('message', door.info)
    door.listen.end(door.close);
  },
  'info': function (message) {
    move.mirror();
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
