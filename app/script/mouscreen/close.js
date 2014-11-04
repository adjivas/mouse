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
  'path': './package.json',
  'save': Conf.mouscreen.save,
  'time': Conf.close.time * 1000,
  'active': false,
  'out': undefined,

  'end': function (arg) {
    var path = Close.path;
    var data;

    if (Close.save && (Conf.mouscreen.left !== win.x 
                   ||  Conf.mouscreen.right !== win.y)) {
      Conf.mouscreen.left = win.x;
      Conf.mouscreen.top = win.y;
      data = JSON.stringify(Package, null, 2, '\t');
      data += '\n';
      File.write(path, data).then(function(res, err) {
        win.close(true);
      });
    }
    else
      win.close(true);
  },
  'start': function (text) {
    if (Dial.active && !Door.active)
      Close.end();
    else {
      Close.active = true;
      Close.out = window.setTimeout(Close.end, Close.time);
      Program.out(text);
    }   
  },
  'clear': function (arg) {
    if (Close.active)
      Close.active = false;
    else if (typeof Close.out === 'number') {
      Close.out = clearTimeout(Close.out);
      Program.clear();
    }
  },
  'forced': win.on('close', function() {
    Close.end();
  }),
  'default': window.addEventListener('mouseup', function(arg) {
    var elemt = arg.toElement;

    elemt = elemt.tagName.toLowerCase();
    if (elemt === Close.target) {
      if (Configuration.win)
        Configuration.win.close();
      else if (Close.out === undefined)
        Close.start(elemt);
    }
  }, false)
};
