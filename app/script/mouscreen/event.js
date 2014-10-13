/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   event.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

String.prototype.toCapitalizeCase = function (arg) {
  return (this.toLowerCase().replace( /\b./g, function (character) {
    return (character.toUpperCase());
  }));
};

/*
** The Menu's class is calls for send signals.
*/

var Event = {
  'interval': undefined,
  'timestamp': undefined,
  'action': false,
  'forget': 0,
  'delay': Conf.mode.next,
  'find': Menu.item,

  'signal': function (dom, func) {
    var mode = dom.tagName.toCapitalizeCase();

    if (window[mode])
      if (window[mode][func])
        window[mode][func](null);
  },
  'call': function (arg) {
    var mode = document.querySelector(Event.find);

    mode = mode.tagName;
    mode = mode.toCapitalizeCase();
    if (window[mode]) {
      if (Event.forget)
        Event.forget -= 1;
      else
        window[mode].call();
    }
  },
  'down': function (arg) {
    if (!Event.action)
      if (!Event.interval)
        Event.interval = window.setInterval(Menu.next, Event.delay);
    Event.timestamp = (+new Date());
  },
  'up': function (data) {
    if (Event.interval)
      Event.interval = window.clearInterval(Event.interval);
    if ((+new Date()) - Event.timestamp < Event.delay)
      Event.call();
    else if (!Event.action) {
      if (Menu.last)
        Event.signal(Menu.last, 'end');
      Menu.last = Menu.new;
      Event.signal(Menu.new, 'start');
      Speak.call();
      Notification.call();
    }
  }
};
