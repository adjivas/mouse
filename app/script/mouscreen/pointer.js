/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pointer.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Body's Class is auto calls and calls by another class for
** starts and closes the pointer.
*/

var Pointer = {
  'target': 'pointer',
  'attribute': 'style',
  'speed': Conf.mode.pointer * 2,
  'time': undefined,
  'degret': 0,

  'circular': function (degret) {
    var target = document.querySelector(Pointer.target);
    var attribute = Pointer.attribute;
    var value = '-webkit-transform:';

    if (0 <= Pointer.degret && Pointer.degret < 360)
      Pointer.degret += (typeof degret === 'number' ? degret : 1);
    else
      Pointer.degret = 0;
    value += 'rotate(' + Pointer.degret + 'deg);';
    if (target)
      target.setAttribute(attribute, value);
  },
  'rotate': function (arg) {
    if (Pointer.time === undefined)
      Pointer.time = window.setInterval(Pointer.circular, Pointer.speed);
    else
      Pointer.time = window.clearInterval(Pointer.time);
  },
  'default': window.addEventListener('load', function() {
    Pointer.rotate();
  }, false)
};
