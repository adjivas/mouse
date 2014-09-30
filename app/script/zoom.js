/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   zoom.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

win.showDevTools();

/*
** The Zoom's Class is auto calls for resize the window.
*/

var Zoom = {
  'action': false,
  'frame': [18, 45],
  'size': [window.innerWidth, window.innerHeight],
  'last': [window.innerWidth, window.innerHeight],
  'node': window.addEventListener('load', function() {
    Zoom.node = document.body;
  }, false),

  'resize': function (arg) {
    var frame = Zoom.frame;

    if (Zoom.action) {
      Zoom.action = false;
      console.log(Zoom.last[0], Zoom.last[1])
//      win.resizeTo(200 + frame[0], 200 + frame[1]);
    }
  },
  'run': function (arg) {
    var node   = Zoom.node;
    var size   = [window.innerWidth, window.innerHeight];

    if (size[0] < Zoom.last[0]
    ||  size[1] < Zoom.last[1]) {
      Zoom.last = [size[0], size[0]];
    }
    else {
      Zoom.last = [size[1], size[1]];
    }
    size = size[0] > size[1] ? size[0] : size[1];
    node.style.zoom = size / Zoom.size;
    Zoom.action = true;
  },
  'default': window.addEventListener('resize', function (arg) {
    Zoom.run(arg);
  }, false)
};
 