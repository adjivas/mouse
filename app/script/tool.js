/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tool.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Tool's class is call for change the cursor's mode.
*/

var Tool = {
  'target': 'mousetool',
  'atrib': 'selected',
  'find': 'mousetool > *[selected]',
  'distance': 180,

  'next': function (arg) {
    var atrib = Tool.atrib;
    var items = document.querySelectorAll(Tool.target + ' > *');
    var limit = items.length - 1;
    var count = -1;

    if (!items[limit].getAttribute(atrib))
      while (++count < limit)
        if (items[count].getAttribute(atrib))
          break ;
    if (items[count]) {
      items[count].removeAttribute(atrib);
      items[count + 1].setAttribute(atrib, atrib);
    }
    else {
      items[items.length - 1].removeAttribute(atrib);
      items[0].setAttribute(atrib, atrib); 
    }
  },
  'run': function (body) {
    var items = body.querySelectorAll(Tool.target + ' > *');
    var deg   = 360 / items.length;
    var cnt   = -1;
    var crd   = {
      'left': 0,
      'top': 0
    };
    var rad;

    while (items[++cnt]) {
      rad = window.Math.PI * (deg * cnt) / 180;
      crd.left = window.Math.sin(rad) * Tool.distance | 0;
      crd.top = window.Math.cos(rad) * Tool.distance | 0;
      items[cnt].style.left = crd.left + 'px';
      items[cnt].style.top = crd.top + 'px';
    }
  }
};
