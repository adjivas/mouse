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

var py = require('python-shell');

'use strict';

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
        'pythonPath': 'C:/Python27/python.exe',
        'args': [word]
      }, function (err, results) {
        if (err)
          console.log('Speak /!\\:', err);
      });
    }
  },
  'call': function (arg) {
    var elemt = document.querySelector(Tool.find);

    Speak.run(elemt.tagName);
  }
}
