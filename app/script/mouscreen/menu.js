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

Object.prototype.index = function (find) {
  var count = -1;
  var limit = this.length - 1;
  
  while (++count < limit) {
    if (this[count] == find)
      break ;
  }
  return (this[count] == find ? count : -1);
};

Object.prototype.loop = function (start) {
  var count = start ? this.index(start) : -1;
  var limit = this.length - 1;
  var close = this.length;
  var items = [];

  while (--close) {
    count += (count == limit ? -count : 1)
    items[items.length] = this[count];
  }
  return (items);
};

/*
** The Menu's class is call for change the cursor's mode.
*/

var Menu = {
  'target': 'selected',
  'item': 'menu > *[selected]',
  'items': 'menu > *:not([disabled])',
  'jump': 'disabled',
  'disabled': Conf.mouscreen.disabled,
  'distance': 180,
  'last': undefined,
  'new': undefined,

  'next': function (arg) {
    var start = document.querySelector(Menu.item);
    var items = document.querySelectorAll(Menu.items);
    var count = -1;

    items = items.loop(start);
    while (items[++count]) {
      if (Menu.target === items[count].getAttribute(Menu.target))
        break ;
    }
    start.removeAttribute(Menu.target);
    items[count - 1].setAttribute(Menu.target, Menu.target);
    Menu.new = items[count - 1];
  },
  'init': function (body) {
    var items = body.querySelectorAll(Menu.items);
    var deg   = 360 / items.length;
    var cnt   = -1;
    var crd   = {
      'left': 0,
      'top': 0
    };
    var name;
    var rad;

    while (items[++cnt]) {
      rad      = window.Math.PI * (deg * cnt) / 180;
      crd.left = window.Math.sin(rad) * Menu.distance | 0;
      crd.top  = window.Math.cos(rad) * Menu.distance | 0;
      items[cnt].style.left = crd.left + 'px';
      items[cnt].style.top = crd.top + 'px';
      name = items[cnt].tagName.toLowerCase();
      if (Menu.disabled === Conf.mode[name])
        items[cnt].setAttribute(Menu.jump, Menu.jump);
    }
  }
};
