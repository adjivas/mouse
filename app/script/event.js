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

var Event = {
  'interval': undefined,
  'timestamp': undefined,
  'action': false,
  'delay': Configuration.mouse.change,
  'find': Tool.find,

  'call': function (arg) {
    var mode = document.querySelector(Event.find);

    mode = mode.tagName;
    mode = mode.toCapitalizeCase();
    if (window[mode]) {
      door.send({
        'class': 'eventcall',
        'method': 'capture'
      }, {
        'stop': window[mode].stop
      });
      window[mode].call();
      move.rotate();
    }
  },
  'domchange': function (arg) {
    var modes = document.querySelectorAll(Tool.target + ' > *');
    var count = -1;
    var mode;

    while (modes[++count]) {
      mode = modes[count];
      mode = mode.tagName;
      mode = mode.toCapitalizeCase();
      if (window[mode] && window[mode].domchange)
        window[mode].domchange();
    }
  },
  'down': function (arg) {
    if (!Event.action)
      if (!Event.interval)
        Event.interval = window.setInterval(Tool.next, Event.delay);
    Event.timestamp = (+new Date());
  },
  'up': function (data) {
    if (Event.interval)
      Event.interval = window.clearInterval(Event.interval);
    if ((+new Date()) - Event.timestamp < Event.delay)
      Event.call();
    else if (!Event.action) {
      Event.domchange();
      Speak.call();
    }
  }
};
