/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   empty.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Empty's class is calls for simple moves the cursor.
*/

var Empty = {
  'stop': true,
  'delay': Configuration.mouse.speed.empty,
  'interval': undefined,
  'click': 0,

  'call': function (arg) {
    if (Empty.interval === undefined) {
      Event.action = true;
      Empty.interval = window.setInterval(mouse.move, Empty.delay);
    }
    else {
      Event.action = false;
      Empty.interval = window.clearInterval(Empty.interval);
    }
  }
};
