/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   shift.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Shift's class is call for move the text's cursor.
*/

var Shift = {
  'speed': Conf.mode.shift * 100,
  'interval': undefined,

  'start': function (arg) {
  	Selector.shift = !Selector.shift;
  },
  'call': function (arg) {
    Event.action = !Event.action;

    Selector.action(Shift.speed);
    Pointer.rotate();
  },
  'end': function (arg) {
  	Selector.shift = !Selector.shift;
  }
};
