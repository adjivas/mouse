/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   menu.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Menu's class is call for change the cursor's mode.
*/

var Menu = {
  'target': 'menu',
  'atrib': 'selected',
  'find': 'menu > *[selected]',
  'distance': 180,
  'last': undefined,
  'new': undefined,

  'next': function (arg) {
    var atrib = Menu.atrib;
    var items = document.querySelectorAll(Menu.target + ' > *');
    var limit = items.length - 1;
    var count = -1;
    var last;

    if (!items[limit].getAttribute(atrib))
      while (++count < limit)
        if (items[count].getAttribute(atrib))
          break ;
    if (items[count]) {
      last = items[count];
      Menu.new  = items[count + 1];
    }
    else {
      last = items[items.length - 1];
      Menu.new  = items[0];
    }
    last.removeAttribute(atrib);
    Menu.new.setAttribute(atrib, atrib);
  },
  'init': function (body) {
    var items = body.querySelectorAll(Menu.target + ' > *');
    var deg   = 360 / items.length;
    var cnt   = -1;
    var crd   = {
      'left': 0,
      'top': 0
    };
    var rad;

    while (items[++cnt]) {
      rad = window.Math.PI * (deg * cnt) / 180;
      crd.left = window.Math.sin(rad) * Menu.distance | 0;
      crd.top = window.Math.cos(rad) * Menu.distance | 0;
      items[cnt].style.left = crd.left + 'px';
      items[cnt].style.top = crd.top + 'px';
    }
  }
};
