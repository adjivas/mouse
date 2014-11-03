/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   altab.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

/*
** The Altab's class is call for switch between the windows.
*/

var Altab = {
  'speed': Conf.mode.altab * 100,
  'interval': undefined,

  'start': function (number) {
    Door.send({'class': 'keyboard', 'method': 'press'  }, {'key': 'alt'});
    Door.send({'class': 'keyboard', 'method': 'tap'    }, {'key': 'tab'});
    Pointer.rotate();
    Pointer.degret = 90;
    Selector.action(Altab.speed);
    Event.action = !Event.action;
  },
  'call': function (arg) {
    if (Event.action) {
      Event.action = !Event.action;
      Selector.action(Altab.speed);
      Door.send({'class': 'keyboard', 'method': 'tap'  }, {'key': 'enter'});
      Pointer.rotate();
    }
    else
      Altab.start(arg);
  },
  'end': function (arg) {
    Door.send({'class': 'keyboard', 'method': 'release'}, {'key': 'alt'});
    win.show(true);
  }
};
