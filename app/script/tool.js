'use strict';

/*
** The Tool's Object is never call by another Object, it's
** a independent event of cursor's type.
*/

var tool = {
  'target': 'mousetool',
  'attribute': 'selected',

  'clear': function (arg) {
    /* The function clears all tags who are selected. */
    var target = document.querySelectorAll(tool.target + ' *');
    var attribute = tool.attribute;
    var count = -1;

    while (target[++count])
      if (target[count].getAttribute(attribute))
        target[count].removeAttribute(attribute);
  },
  'select': function (arg) {
    /* The function selects the mousetool's current parent tag. */
    var attribute = tool.attribute;
    var element = arg.toElement;

    if (typeof element.parentNode.tagName === 'string') {
      if (element.parentNode.tagName.toLowerCase() === tool.target) {
        if (element.getAttribute(attribute) === null) {
          tool.clear(arg);
          element.setAttribute(attribute, attribute);
        }
      }
    }
  },
  'default': window.addEventListener('mouseup', function (arg) {
    tool.select(arg);
  }, false)
}
