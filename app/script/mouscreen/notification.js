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

var gui = require('nw.gui'); 
var win = gui.Window.get();
var Base64 = require('js-base64').Base64;

/* 
** The Notification's class is calls for open 
** a new window during a time with a message.
*/

var Notification = {
  'win': undefined,
  'sentence': undefined,
  'url': Conf.notification.file,
  'time': Conf.notification.time * 1000,
  'silent': !Conf.notification.active,
  'window': {
    'position': 'center',
    'func': Conf.notification.func,
    'width': Conf.notification.width,
    'height': Conf.notification.height ?
              Conf.notification.height :
              window.screen.availHeight / 8 | 0,
    'transparent': true,
    'focus': false,
    'always-on-top': true,
    'resizable': false,
    'toolbar': false,
    'frame': false,
    'show': false,
    'top': Conf.notification.top,
    'left': Conf.notification.left,
    'name': null
  },

  'open': function (sentence, time) {
    var url  = Notification.url;
    var wid  = Notification.window;
    var wcp  = wid;

    wcp.name = sentence;
    wcp.time = time;
    wcp      = JSON.stringify(wcp);
    wcp      = Base64.encode(wcp);
    if (Notification.win)
      Notification.win = Notification.win.close();
    if (Notification.sentence !== sentence
    && !Notification.silent)
      Notification.win = gui.Window.open(url + '?' + wcp, wid);
    Notification.sentence = sentence;
  },
  'call': function (elemt, time) {
    if (typeof elemt !== 'string') {
      elemt = document.querySelector(Menu.item);
      elemt = elemt.tagName.toLowerCase();
    }
    time  = (typeof time === 'number' ? time : Notification.time);
    elemt = Lang.translate(elemt, {});
    Notification.open(elemt, time);
  }
};
