/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   mouse.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Mouse's Object is thought for be call by Move's Object.
*/

var mouse = {
  'position': {
    'x': window.screen.availWidth / 2,
    'y': window.screen.availHeight / 2
  },
  'silent': !Configuration.mouse.active,
  'speed': Configuration.mouse.speed.default,

  'run': function (arg) {
    /* The function execs a move's python script who does the move
       of the cursor. */
    if (!mouse.silent) {
      mouse.position.x += mouse.speed * arg.x;
      mouse.position.y -= mouse.speed * arg.y;
      door.send({
        'class': 'mouse',
        'method': 'warp'
      }, {
        'x': mouse.position.x,
        'y': mouse.position.y
      });
    }
  },
  'move': function (arg) {
    /* The function does a conversion from polar to cartesian coordinates,
       and calls the run's function for move the cursor. */
    var deg = move.degret;
    var rad = window.Math.PI * deg / 180;

    mouse.run({
      'x': window.Math.sin(rad),
      'y': window.Math.cos(rad)
    });
  }
}
