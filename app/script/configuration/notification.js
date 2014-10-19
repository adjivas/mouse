/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   notification.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Synthse's class on or off the notification's message.
*/

var Notification = {
  'target': 'notif',
  'actived': Conf.notification.active,

  'change': function (arg) {
    Conf.notification.active = !Conf.notification.active;
  },
  'build': function (dom) {
    var label = document.createElement('label');
    var input = document.createElement('input');

    label.setAttribute('for', Notification.target);
    label.textContent = Lang.translate(Notification.target, {});
    input.setAttribute('id', Notification.target);
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', Notification.change, false);
    if (Notification.actived)
      input.setAttribute('checked', 'checked');
    label.appendChild(input);
    dom.appendChild(label);
  }
};
