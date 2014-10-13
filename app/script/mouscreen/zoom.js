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

/*
** The Zoom's Class is auto calls for resize the window.
*/

var Zoom = {
  'action': false,
  'size': window.innerHeight,
  'last': {
    'x': window.innerWidth, 
    'y': window.innerHeight
  },
  'mode': [0, 0],
  'node': window.addEventListener('load', function() {
    Zoom.node = document.body;
  }, false),

  'resize': function (arg) {   
    var rest = {
      '0': {
        '0': Zoom.last.x,
        '1': Zoom.last.x,
        '2': Zoom.last.x
      },
      '1': {
        '0': Zoom.last.y,
        '2': Zoom.last.x
      },
      '2': {
        '0': Zoom.last.y,
        '1': Zoom.last.y,
        '2': Zoom.last.y
      }
    }[Zoom.mode[0]][Zoom.mode[1]];

    if (Zoom.action) {
      win.resizeTo(rest, rest);
      Zoom.action = false;
    }
  },
  'define': function (size) {
    /* The function register the status' action for width's and height's windos:
       0-0-1: The cursor upper moves.
       0-1-0: The cursor not moves.
       1-0-0: The cursor lower moves. */
    var node = Zoom.node;
    var last = Zoom.last;
    var rest = {
      '0': {
        '0': {
          '1': 1
        },
        '1': {
          '0': 2
        }
      },
      '1': {
        '0': {
          '0': 0
        }
      }
    };

    Zoom.mode[0] = rest[(size.x < last.x) | 0][(size.x == last.x) | 0]
                       [(size.x > last.x) | 0];
    Zoom.mode[1] = rest[(size.y < last.y) | 0][(size.y == last.y) | 0]
                       [(size.y > last.y) | 0];
    node.style.zoom = (size.x < size.y ? size.x : size.y) / Zoom.size;
    Zoom.last = size;
  },
  'default': window.addEventListener('resize', function (arg) {
    Zoom.define({
      'x': window.innerWidth,
      'y': window.innerHeight
    });
    Zoom.action = true;
  }, false)
};
 