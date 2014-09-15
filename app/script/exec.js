'use strict';
var py = require('python-shell');

/*
** The Exec's Object is thought for be call by Move's Object.
*/

var exec = {
  'silent': false,
  'speed': 10,

  'run': function (arg) {
    /* The function execs a move's python script who does the move
       of the cursor. */
    var x = exec.speed * arg.x;
    var y = exec.speed * arg.y * -1;

    if (exec.silent)
      return ;
    py.run('move.py', {
      'pythonPath': 'C:/Python27/python.exe',
      'scriptPath': './app/python/',
      'args': [x, y]
    }, function (err, results) {
      if (err)
        throw (err);
    });
  },
  'move': function (arg) {
    /* The function does a conversion from polar to cartesian coordinates,
       and calls the run's function for move the cursor. */
    var deg = move.degret;
    var rad = Math.PI * deg / 180;

    exec.run({
      'x': Math.sin(rad),
      'y': Math.cos(rad)
    });
  }
}
