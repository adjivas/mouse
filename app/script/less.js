var less = require('less');

var style = {
  'root': './app/style/',
  'node': document.head,

  'content': function (arg) {
    read = arg.read;
    node = arg.node;

  	file.read(read).then(function(res, err) {
      less.render(res, function (e, css) {
        node.textContent = css;
      });
    });
  },
  'append': function (arg) {
    var node = style.node;
    var root = style.root;
    var link;
    
    link = document.createElement('style');
    node.appendChild(link);
    style.content({
      'read': root + arg,
      'node': link
    })
  },
  'default': window.addEventListener('load', function() {
    style.append('env.less');
    style.append('agent.less');
  }, false)
}
