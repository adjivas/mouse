/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   empty.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Empty's class is calls for simple moves the cursor and never clicks.
*/

var Empty = {
  'speed': Conf.mode.empty,
  'interval': undefined,

  'call': function (arg) {
    Event.action = !Event.action;

    Cursor.action(Empty.speed);
    Pointer.rotate();
  }
};
