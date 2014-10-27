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
  'target': 'program',
  'x': (window.screen.availWidth - window.innerWidth) / 2,
  'y': (window.screen.availHeight - window.innerHeight) / 2,

  'show': function (arg) {
    win.show(true);
  },
  'position': function (func, x, y) {
    x = (x !== null ? x : Start.x);
    y = (y !== null ? y : Start.y);
    Position[func](x, y);
  },
  'default': window.addEventListener('load', function() {
    var dom  = document.querySelector(Start.target);
    var func = Conf.configuration.func;
    var left = Conf.configuration.left;
    var top  = Conf.configuration.top;

    Tools.init(dom);
    Start.position(func, left, top);
    Start.show();
  }, false)
};
