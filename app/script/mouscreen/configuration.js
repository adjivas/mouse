/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   configuration.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var gui = require('nw.gui');

var Configuration = {
  'target': 'configuration',
  'url': './configuration.html',
  'win': gui.Window.get(),
  'left': window.screen.availWidth - window.innerWidth,
  'top': (window.screen.availHeight - window.innerHeight) / 2,
  'active': false,
  'window': {
    'position': 'center',
    'always-on-top': true,
    'frameless': false,
    'resizable': false,
    'toolbar': false,
    'frame': false,
    'width': 800,
    'height': 420,
    'show': false,
    'top': Conf.configuration.top,
    'left': Conf.configuration.left,
  },

  'start': function (arg) {
    var url  = Configuration.url;
    var wid  = Configuration.window;

    Configuration.active = !Configuration.active;
    gui.Window.open(url, wid).on('close', Configuration.end);
    Position.to(Configuration.left, Configuration.top);
  },
  'end': function (arg) {
    Configuration.active = !Configuration.active;
    this.close(true);
    Door.close();
    Configuration.win.reload();
  },
  'default': window.addEventListener('mouseup', function(arg) {
    var elemt = arg.toElement;

    elemt = elemt.tagName.toLowerCase();
    if (elemt === Configuration.target)
      if (!Configuration.active)
        Configuration.start();
  }, false)
};
