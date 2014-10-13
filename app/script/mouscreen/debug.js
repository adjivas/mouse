/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   debug.js                                           :+:      :+:    :+:   */
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
** The Debug's class is auto call, if it's activated
** then the terminal is open.
*/

var Debug = {
  'active': Conf.mouscreen.debug,

  'open': function (arg) {
    var active = Debug.active;

    if (active)
      win.showDevTools();
  },
  'console': function (data) {
    console.log('console', data);
  },
  'default': window.addEventListener('load', function (arg) {
    Debug.open(arg);
  }, false)
};
