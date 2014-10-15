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
  'save': Conf.configuration.save,
  'target': 'close',
  'path': './package.json',
  'out': undefined,

  'end': function (arg) {
    var path = Close.path;
    var data = JSON.stringify(Package, null, 2, '\t');

    data += '\n';
    if (Close.save) {
      File.write(path, data).then(function(res, err) {
        win.close();
      });
    }
    else
      win.close();
  },
  'build': function (dom) {
    var tag = document.createElement('input');
    var cnt = -1;

    tag.setAttribute('id', 'close');
    tag.setAttribute('value', 'close');
    tag.setAttribute('type', 'submit');
    tag.addEventListener('click', Close.end, false);
    dom.appendChild(tag);
  }
};
