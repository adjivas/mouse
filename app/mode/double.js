/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   double.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Double's class is calls for moves the cursor and double click.
*/

var Double = {
  'speed': Conf.mode.double,
  'interval': undefined,
  'click': 1,

  'start': function (number) {
    Event.forget = (typeof number !== 'number' ? 3 : number);

    Door.send({'class': 'mouse', 'method': 'click'}, {'click': Double.click});
    Door.send({'class': 'mouse', 'method': 'click'}, {'click': Double.click});
  },
  'call': function (arg) {
    Event.action = !Event.action;

    if (!Event.action)
      Double.start(2);
    Cursor.action(Double.speed);
    Pointer.rotate();
  }
};
