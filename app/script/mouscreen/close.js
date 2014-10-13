/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   close.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

/*
** The class is a procedure of program exit.
*/

var Close = {
  'target': 'close',
  'time': Conf.close.time * 1000,
  'out': undefined,

  'end': function (arg) {
    console.log(win.x, win.y);
    win.close();
  },
  'start': function (text) {
    Close.out = window.setTimeout(Close.end, Close.time);
    Message.out(text, Close);
  },
  'clear': function (arg) {
    if (typeof Close.out === 'number') {
      Message.clear();
      Close.out = clearTimeout(Close.out);
    }
  },
  'default': window.addEventListener('mouseup', function(arg) {
    var elemt = arg.toElement;

    elemt = elemt.tagName.toLowerCase();
    if (elemt === Close.target)
      Close.start(elemt);
  }, false)
};
