'use strict';
var py      = require('python-shell');

/*
**
*/

var speak = {
  'silent': !configuration.speech_synthesizer,

  'run': function (arg) {
    var word = arg.word;

    if (!speak.silent) {
      py.run('speak.py', {
        'scriptPath': './app/python/',
        'args': [word]
      }, function (err, results) {
        if (err)
          throw (err);
      });
    }
  }
}
