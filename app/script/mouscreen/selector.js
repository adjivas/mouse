/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   selector.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Selector's class is call for move the text's cursor.
*/

var Selector = {
  'shift': false,
  'interval': undefined,

  'door': function (key) {
    var method = (Selector.shift ? 'shell' : 'tap');

    Door.send({'class': 'keyboard', 'method': method}, {'key': key});
  },
  'move': function (arg) {
    /* The function does a conversion from degret to direction,
       and requests the server for move the text's selector. */
    var key  = [
      ['right', '+{RIGHT}', (45 < Pointer.degret && Pointer.degret <= 135)],
      ['down' , '+{DOWN}' , (135 < Pointer.degret && Pointer.degret <= 225)],
      ['left' , '+{LEFT}' , (225 < Pointer.degret && Pointer.degret <= 315)],
      ['up'   , '+{UP}'   , true]
    ];
    var count = -1;

    while (key[++count])
      if (key[count][2])
        break ;
    key = key[count][Selector.shift | 0];
    Selector.door(key);
  },
  'action': function (number) {
    /* The function starts or stops the move. */
    var speed = (typeof number !== 'number' ? Selector.speed : number);

    if (Selector.interval !== undefined)
      Selector.interval = window.clearInterval(Selector.interval);
    else
      Selector.interval = window.setInterval(Selector.move, speed);
  }
};
