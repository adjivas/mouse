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
var py = require('python-shell');
var Base64 = require('js-base64').Base64;

/* 
** The Notification's class is calls for request the python's script of
** writes a sentence on the device screen.
*/

/*
Notification.open('clic gauche avec la touche control activé')
*/

var Notification = {
  'win': undefined,
  'url': Configuration.notification.file,
  'time': Configuration.notification.time * 1000,
  'silent': !Configuration.notification.active,
  'window': {
    "position": 'center',
    "_position": Configuration.notification._position,
    "width": Configuration.notification.width !== null ?
                      Configuration.notification.width :
                      window.screen.width / 2 | 0,
    "height": Configuration.notification.height,
    "always-on-top": true,
    "frameless": false,
    "toolbar": false,
    "frame": false,
    "top": Configuration.notification.top,
    "left": Configuration.notification.left,
    "name": undefined
  },

  'open': function (name) {
    var url  = Notification.url;
    var wid  = Notification.window;
    var wcp  = wid;

    wcp.name = name;
    wcp.time = Notification.time;
    wcp      = JSON.stringify(wcp);
    wcp      = Base64.encode(wcp);
    if (Notification.win)
      Notification.win.close();
    if (!Notification.silent)
      Notification.win = gui.Window.open(url + '?' + wcp, wid);
  },
  'call': function (arg) {
    var elemt = document.querySelector(Menu.find);

    elemt = elemt.tagName.toLowerCase();
    elemt = Lang.translate(elemt, {});
    Notification.open(elemt);
  }
};
