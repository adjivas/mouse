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

var Drag = {
  'stop': false,
  'delay': 50,
  'interval': undefined,
  'click': 1,

  'run': function (arg) {
    door.send({
      'class': 'mouse',
      'method': 'click'
    }, {
      'click': Drag.click
    });
  },
  'call': function (arg) {
    if (Drag.interval === undefined) {
      Event.action = true;
      Drag.interval = window.setInterval(mouse.move, Drag.delay);
    }
    else {
      Event.action = false;
      Drag.interval = window.clearInterval(Drag.interval);
    }
  }
};
