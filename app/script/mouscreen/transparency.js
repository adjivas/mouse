/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   transparency.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Transparency's class evals and make the alpha of the current window.
*/

var Transparency = {
  'interval': undefined,

  'move': function (arg) {
    /* The function does a conversion from degret to direction,
       and requests the server for transparency the current window. */
    var key  = [
      [1, (Pointer.degret < 90 || Pointer.degret >= 270)],
      [-1, true]
    ];
    var count = -1;

    while (key[++count])
      if (key[count][1])
        break ;
    if (0 < key[count][0] && Alpha.value < 255)
      Alpha.value += key[count][0];
    else if (0 > key[count][0] && Alpha.value >= 127)
      Alpha.value += key[count][0];
    else
      return ;
    Door.send({'class': 'transparency', 'method': 'alpha'},
              {'alpha': Alpha.value});
  },
  'action': function (number) {
    /* The function starts or stops the move. */
    var speed = (typeof number !== 'number' ? Transparency.speed : number);

    if (Transparency.interval !== undefined)
      Transparency.interval = window.clearInterval(Transparency.interval);
    else
      Transparency.interval = window.setInterval(Transparency.move, speed);
  }
};
