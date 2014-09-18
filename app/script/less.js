'use strict';
var less = require('less');

var style = {
  'root': './app/style/',
  'node': document.head,

  'content': function (arg) {
    var address = arg.address;
    var node = arg.node;

    file.read(address).then(function(res, err) {
      less.render(res, function (e, css) {
        node.textContent = css;
      });
    });
  },
  'append': function (arg) {
    var node = style.node;
    var root = style.root;
    var address = root + arg;
    var link;
  
    link = document.createElement('style');
    node.appendChild(link);
    style.content({
      'address': address,
      'node': link
    })
  },
  'default': window.addEventListener('load', function() {
    style.append('env.less');
  }, false)
}
