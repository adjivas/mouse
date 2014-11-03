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
  'speed': Conf.mode.drag,
  'interval': undefined,
  'init': true,

  'start': function (arg) {
    Event.action = !Event.action;
    Drag.init = !Drag.init;
    Door.send({'class': 'mouse', 'method': 'press'}, {});
  },
  'call': function (arg) {
    Cursor.action(Drag.speed);
    Pointer.rotate();
    if (Drag.init)
      Event.action = !Event.action;
    else
      Drag.init = !Drag.init;
  },
  'end': function (arg) {
    Door.send({'class': 'mouse', 'method': 'release'}, {});
  }
};
