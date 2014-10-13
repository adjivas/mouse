/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   right.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Right's class is calls for moves the cursor and right click.
*/

var Right = {
  'speed': Conf.mode.right,
  'interval': undefined,
  'click': 2,

  'start': function (number) {
    Event.forget = (typeof number !== 'number' ? 2 : number);

    Door.send({'class': 'mouse', 'method': 'click'}, {'click': Right.click});
  },
  'call': function (arg) {
    Event.action = !Event.action;

    if (!Event.action)
      Right.start(1);
    Cursor.action(Right.speed);
    Pointer.rotate();
  }
};
