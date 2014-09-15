var jade = require('jade');

var body = {
  'root': './app/view/',
  'node': window.addEventListener('load', function() {
    body.node = document.body;
  }, false),

  'inner': function (arg) {
    var root = body.root;
    var node = body.node;
    var fn = jade.compileFile(root + arg, {});

    if (node)
      node.innerHTML = fn();
  },
  'default': window.addEventListener('load', function() {
    body.inner('mouse.jade');
  }, false)
}
