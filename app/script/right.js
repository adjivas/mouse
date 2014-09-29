/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   right.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var Right = {
  'stop': true,
  'action': false,
  'delay': 50,
  'click': 2,

  'run': function (arg) {
    door.send({
      'class': 'mouse',
      'method': 'click'
    }, {
      'click': Right.click
    });
  },
  'call': function (arg) {
    if (!Right.action) {
      if (Right.interval === undefined) {
        Right.interval = window.setInterval(mouse.move, Right.delay);
        Event.action = true;
      }
      else {
        Right.action = true;
        Right.interval = window.clearInterval(Right.interval);
        Right.run();
        Event.action = false;
      }
    }
    else {
      Right.action = false;
      move.rotate();
    }
  }
};
