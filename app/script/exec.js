'use strict';
var py = require('python-shell');

/*
** The Exec's Object is thought for be call by Move's Object.
*/

var exec = {
  'silent': !configuration.mouse_move_pixel,
  'speed': configuration.mouse_speed_pixel,

  'run': function (arg) {
    /* The function execs a move's python script who does the move
       of the cursor. */
    var x = !arg.x ? 0 : exec.speed * arg.x;
    var y = !arg.y ? 0 : exec.speed * arg.y * -1;
    var c = !arg.click ? 0 : arg.click;

    if (!exec.silent) {
      py.run('mouse.py', {
        'scriptPath': './app/python/',
        'args': c ? [x, y, c] : [x, y]
      }, function (err, results) {
        if (err)
          throw (err);
      });
    }
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
