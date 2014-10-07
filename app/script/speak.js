/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   speak.js                                           :+:      :+:    :+:   */
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
** The Speak's class is calls for request the socket of
** says a word.
*/

var Speak = {
  'silent': !Configuration.synthse.active,

  'run': function (word) {
    if (!Speak.silent) {
      py.run('speak.py', {
        'scriptPath': './app/python/',
        'pythonPath': Configuration.python.path,
        'args': [word]
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
    Speak.run(elemt);
  }
};
