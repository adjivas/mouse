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
    var tag = document.createElement('input');
    var cnt = -1;

    tag.setAttribute('id', Synthse.target);
    tag.setAttribute('type', 'checkbox');
    tag.setAttribute('label', Lang.translate(Synthse.target, {}));
    tag.addEventListener('change', Synthse.change, false);
    if (Synthse.actived)
      tag.setAttribute('checked', 'checked');
    dom.appendChild(tag);
  }
};
