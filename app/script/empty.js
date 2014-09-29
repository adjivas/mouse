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

var Empty = {
  'stop': true,
  'delay': 50,
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
