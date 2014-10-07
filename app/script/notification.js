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

var py = require('python-shell');

/* 
** The Notification's class is calls for request the python's script of
** writes a sentence on the device screen.
*/

var Notification = {
  'silent': !Configuration.notification.active,

  'run': function (sentence) {
    if (!Notification.silent) {
      py.run('notification.py', {
        'scriptPath': './app/python/',
        'pythonPath': Configuration.python.path,
        'args': [sentence]
      }, function (err, results) {
        if (err)
          Debug.console(err);
      });
    }
  },
  'call': function (arg) {
    var elemt = document.querySelector(Menu.find);

    elemt = elemt.tagName.toLowerCase();
    elemt = Lang.translate(elemt, {});
    Notification.run(elemt);
  }
};
