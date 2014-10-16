/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   alpha.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Alpha's class is calls for make alpha to the current window.
*/

var Alpha = {
  'speed': Conf.mode.alpha,
  'interval': undefined,
  'value': 255,

  'start': function (arg) {
    var value = Alpha.value;

    Door.send({'class': 'transparency', 'method': 'alpha'}, {'alpha': value});
  },
  'call': function (arg) {
    Event.action = !Event.action;

    Transparency.action(Alpha.speed);
    Pointer.rotate();
  },
  'end': function (arg) {
    Alpha.value = 255;
  }
};
