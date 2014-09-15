'use strict';

/*
** The Tool's Object is never call by another Object, it's
** a independent event of cursor's type.
*/

var tool = {
  'target': 'click',
  'attribute': 'selected',

  'clear': function (arg) {
    /* The function clears all tags who are selected. */
    var target = document.querySelectorAll(tool.target);
    var attribute = tool.attribute;
    var count = -1;

    while (target[++count])
      if (target[count].getAttribute(attribute))
        target[count].removeAttribute(attribute);
  },
  'select': function (arg) {
    /* The function selects the click's current tag. */
    var attribute = tool.attribute;
    var element = arg.toElement;

    if (element.tagName.toLowerCase() === tool.target) {
      tool.clear(arg);
      element.setAttribute(attribute, attribute);
    }
  },
  'default': window.addEventListener('mouseup', function (arg) {
    tool.select(arg);
  }, false)
}
