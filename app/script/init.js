'use strict';
var jade = require('jade');
var node = document.body;

window.onload = function (arg) {
  var root = './app/view/';
  var fn = jade.compileFile(root + 'mouse.jade', {});

  node.innerHTML = fn();	
}
