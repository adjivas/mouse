/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cursor.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Cursor's Class is call by anothers function for 
** request the server of move the cursor.
*/

var Cursor = {
  'position': {
    'x': window.screen.availWidth / 2,
    'y': window.screen.availHeight / 2
  },
  'speed': 1,
  'interval': undefined,

  'warp': function (cord) {
    /* The function execs a move's python script who does the move
       of the cursor. */
    var warp = Warp[Warp.choice]({
      'x': cord.x,
      'y': cord.y
    });

    Cursor.position.x = warp.x;
    Cursor.position.y = warp.y;
    Door.send({
      'class': 'mouse',
      'method': 'warp'
    }, {
      'x': Cursor.position.x,
      'y': Cursor.position.y
    });
  },
  'move': function (arg) {
    /* The function does a conversion from polar to cartesian coordinates,
       and requests the server for move the cursor. */
    var deg = Pointer.degret;
    var rad = window.Math.PI * deg / 180;

    Cursor.warp({
      'x': Cursor.position.x + window.Math.sin(rad),
      'y': Cursor.position.y - window.Math.cos(rad)
    });
  },
  'action': function (number) {
    /* The function starts or stops the move. */
    var speed = (typeof number !== 'number' ? Cursor.speed : number);

    if (Cursor.interval !== undefined)
      Cursor.interval = window.clearInterval(Cursor.interval);
    else
      Cursor.interval = window.setInterval(Cursor.move, speed);
  }
};
