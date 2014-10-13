/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   start.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

var Start = {
  'x': (window.screen.availWidth - window.innerWidth) / 2,
  'y': window.screen.availHeight - window.innerHeight,

  'show': function (arg) {
    win.show(true);
  },
  'position': function (func, x, y) {
    x = (x !== null ? x : Start.x);
    y = (y !== null ? y : Start.y);
    Position[func](x, y);
  },
  'init': function (func, x, y) {
    Start.position(func, x, y);
    Start.show();
  }
};
