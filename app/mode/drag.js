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

/* !Bug: this object cannot be selected in mouse.jade. */
/* !Bug: this object cannot good work with another click than one. */

var Drag = {
  'speed': Configuration.mode.drag.speed,
  'interval': undefined,
  'click': 1,

  'start': function (arg) {
    Door.send({'class': 'eventcall', 'method': 'capture'}, {'stop': false});
  },
  'call': function (arg) {
    Event.action = !Event.action;

    Cursor.action(Left.speed);
    Pointer.rotate();
  },
  'end': function (arg) {
    Door.send({'class': 'eventcall', 'method': 'capture'}, {'stop': true});
  }
};
