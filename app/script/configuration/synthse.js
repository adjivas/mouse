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
  'actived': Conf.synthse.active,

  'change': function (arg) {
    var name = arg.srcElement.id;
    var dom  = document.getElementById(name);

    Conf.synthse.active = !!dom.value;
    console.log(name, dom.value);
  },
  'build': function (dom) {
    var tag = document.createElement('input');
    var cnt = -1;

    tag.setAttribute('id', 'speech');
    tag.setAttribute('type', 'checkbox');
    tag.addEventListener('change', Synthse.change, false);
    if (Synthse.actived)
      tag.setAttribute('checked', 'checked');
    dom.appendChild(tag);
  }
};
