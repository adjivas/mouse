/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   control.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Control's class is call for moves the cursor and left clicks
** and press the control key.
*/

var Control = {
  'speed': Conf.mode.control,
  'interval': undefined,

  'start': function (number) {
    Event.forget = (typeof number !== 'number' ? 2 : number);

    Door.send({'class': 'keyboard', 'method': 'press'}, {'key':  'control'  });
    Door.send({'class': 'mouse'   , 'method': 'click'}, {'click': Left.click});
    Control.end();
  },
  'call': function (arg) {
    Event.action = !Event.action;

    if (!Event.action) {
      Door.send({'class': 'keyboard', 'method': 'press'}, {'key':  'control'});
      Left.start(1);
      Control.end();
    }
    Cursor.action(Left.speed);
    Pointer.rotate();
  },
  'end': function (arg) {
    Door.send({'class': 'keyboard', 'method': 'release'}, {'key': 'control' });
  }
};
