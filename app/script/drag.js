/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   drag.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Drag's class is calls for simple moves the cursor.
*/

var Drag = {
  'stop': false,
  'delay': Configuration.mouse.speed.drag,
  'interval': undefined,
  'click': 1,

  'call': function (arg) {
    if (!Drag.interval) {
      Event.action = true;
      Drag.interval = window.setInterval(mouse.move, Drag.delay);
    }
    else {
      Event.action = false;
      Drag.interval = window.clearInterval(Drag.interval);
    }
  }
};
