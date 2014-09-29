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
  'silent': !configuration.mouse_move_pixel,
  'speed': configuration.mouse_speed_pixel,

  'run': function (arg) {
    /* The function execs a move's python script who does the move
       of the cursor. */
    var x = !arg.x ? 0 : mouse.speed * arg.x;
    var y = !arg.y ? 0 : mouse.speed * arg.y * -1;
    var c = !arg.click ? 0 : arg.click;

    door.send({
      'class': 'mouse',
      'method': 'move'
    }, {
      'x': x,
      'y': y
    });
  },
  'move': function (arg) {
    /* The function does a conversion from polar to cartesian coordinates,
       and calls the run's function for move the cursor. */
    var deg = move.degret;
    var rad = Math.PI * deg / 180;

    mouse.run({
      'x': Math.sin(rad),
      'y': Math.cos(rad)
    });
  }
}
