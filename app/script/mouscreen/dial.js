/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   dial.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Dial's class is calls for
*/

var Dial = {
  'target': 'dial',
  'active': Conf.mouscreen.active,
  'attribute': 'active',

  'call': function (door) {
    var attribute = Dial.attribute;
    var elemt = document.querySelector(Dial.target);

    if (Dial.active) {
      if (door === undefined) {
        if ((Door.active = !Door.active))
          Close.clear();
      }
      elemt.setAttribute(attribute, Door.active);
      Door.send({'class': 'eventcall', 'method': 'capture'},
                {'stop': Door.active});
    }
  },
  'mouse': window.addEventListener('mouseup', function (arg) {
    var elemt = arg.toElement;

    elemt = elemt.tagName.toLowerCase();
    if (elemt === Dial.target)
      Dial.call();
  }, false),
  'default': window.addEventListener('load', function (arg) {
    Dial.call(true);
  }, false)
}
