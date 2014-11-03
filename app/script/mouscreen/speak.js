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
** says a sentence.
*/

var Speak = {
  'silent': !Conf.synthse.active,
  'sentence': undefined,

  'run': function (sentence) {
    if (Speak.sentence !== sentence
    && !Speak.silent) {
      py.run('speak.py', {
        'scriptPath': './app/python/',
        'pythonPath': Conf.python.path,
        'args': [sentence]
      }, function (err, results) {
        if (err)
          Debug.console(err);
      });
    }
    Speak.sentence = sentence;
  },
  'call': function (elemt) {
    if (typeof elemt !== 'string') {
      elemt = document.querySelector(Menu.item)
      elemt = elemt.tagName.toLowerCase();
    }
    elemt = Lang.translate(elemt, {});
    Speak.run(elemt);
  }
};
