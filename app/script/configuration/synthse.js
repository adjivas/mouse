/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   synthse.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Synthse's class on or off the speech's message.
*/

var Synthse = {
  'target': 'speech',
  'actived': Conf.synthse.active,

  'change': function (arg) {
    Conf.synthse.active = !Conf.synthse.active;
  },
  'build': function (dom) {
    var label = document.createElement('label');
    var input = document.createElement('input');

    label.setAttribute('for', Synthse.target);
    label.textContent = Lang.translate(Synthse.target, {});
    input.setAttribute('id', Synthse.target);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', Synthse.change, false);
    if (Synthse.actived)
      input.setAttribute('checked', 'checked');
    label.appendChild(input);
    dom.appendChild(label);
  }
};
