/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   left.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Left's class is calls for moves the cursor and left click.
*/

var Left = {
  'stop': true,
  'action': false,
  'delay': Configuration.mouse.speed.left,
  'click': 1,

  'run': function (arg) {
    door.send({
      'class': 'mouse',
      'method': 'click'
    }, {
      'click': Left.click
    });
  },
  'call': function (arg) {
    if (!Left.action) {
      if (Left.interval === undefined) {
        Left.interval = window.setInterval(mouse.move, Left.delay);
        Event.action = true;
      }
      else {
        Left.action = true;
        Left.interval = window.clearInterval(Left.interval);
        Left.run();
        Event.action = false;
      }
    }
    else {
      Left.action = false;
      move.rotate();
    }
  }
};
