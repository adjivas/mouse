/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   move.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Move's class is calls for simple move a window.
*/

var Move = {
  'speed': Conf.mode.move * 100,
  'interval': undefined,
  'click': 1,

  'start': function (arg) {
    Door.send({'class': 'keyboard', 'method': 'press'  }, {'key': 'alt_l'});
    Door.send({'class': 'keyboard', 'method': 'press'  }, {'key': ' '});
    Door.send({'class': 'keyboard', 'method': 'release'}, {'key': ' '});
    Door.send({'class': 'keyboard', 'method': 'release'}, {'key': 'alt_l'});
    window.setTimeout(function (arg) {
      Door.send({'class': 'keyboard', 'method': 'press'  }, {'key': 'l'});
      Door.send({'class': 'keyboard', 'method': 'release'}, {'key': 'l'});
    }, 750);
  },
  'call': function (arg) {
    Event.action = !Event.action;

    Selector.action(Move.speed);
    Pointer.rotate();
  },
  'end': function (arg) {
    Left.start();
  }
};
