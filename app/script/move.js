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

var move = {
  'target': 'pointer',
  'attribute': 'style',
  'time': undefined,
  'degret': 0,

  'circular': function (arg) {
    var target = document.querySelector(move.target);
    var attribute = move.attribute;
    var value = '-webkit-transform:';

    if (0 <= move.degret && move.degret < 360)
      move.degret += (arg ? arg : 1);
    else
      move.degret = 0;
    value += 'rotate(' + move.degret + 'deg);';
    if (target)
      target.setAttribute(attribute, value);
  },
  'rotate': function (arg) {
    if (move.time === undefined)
      move.time = window.setInterval(move.circular, 1);
    else
      move.time = window.clearInterval(move.time);
  },
  'default': window.addEventListener('load', function() {
    move.rotate();
  }, false)
}
