/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   arrow.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var Arrow = {
  'stop': true,
  'delay': 150,
  'interval': undefined,
  'click': 0,

  'run': function (arg) {
    door.send({
      'class': 'keyboard',
      'method': 'press'
    }, {
      'key': arg
    });
  },
  'move': function (arg) {
    if (45 < move.degret && move.degret <= 135) Arrow.run('right');
    else if (135 < move.degret && move.degret <= 225) Arrow.run('down');
    else if (225 < move.degret && move.degret <= 315) Arrow.run('left');
    else Arrow.run('up');
  },
  'call': function (arg) {
    if (!Arrow.interval) {
      Event.action = true;
      Arrow.interval = window.setInterval(Arrow.move, Arrow.delay);
    }
    else {
      Event.action = false;
      Arrow.interval = window.clearInterval(Arrow.interval);
    }
  }
};
