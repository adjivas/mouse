/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   left.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Left's class is calls for moves the cursor and left click.
*/

var Left = {
  'speed': Conf.mode.left,
  'interval': undefined,
  'click': 1,

  'start': function (number) {
    Event.forget = (typeof number !== 'number' ? 2 : number);

    Door.send({'class': 'mouse', 'method': 'click'}, {'click': Left.click});
  },
  'call': function (arg) {
    Event.action = !Event.action;

    if (!Event.action)
      Left.start(1);
    Cursor.action(Left.speed);
    Pointer.rotate();
  }
};
