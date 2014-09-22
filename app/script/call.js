'use strict';

var call = {
  'target': 'mousetool',
  'change': 'mousecontent',
  'attribute': 'mode',

  'detect': function (arg) {
    var func = arg.toElement.tagName;
    var node = document.querySelector(call.change);
    var attribute = call.attribute;

    if (typeof func === 'string') {
      func = func.toLowerCase();
      node.setAttribute(attribute, func);
      window[func].call();
    }
  },
  'default': window.addEventListener('load', function (arg) {
    var node = document.querySelector(call.target);

    node.addEventListener('mouseup', call.detect, false);
  }, false)
}
