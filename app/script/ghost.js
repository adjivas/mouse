/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ghost.js                                           :+:      :+:    :+:   */
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
** The Ghost's class is calls about the invisibility window.
*/

var Ghost = {
  'target': 'pointer',
  'stop': true,
  'active': false,
  'click': 0,

  'domchange': function (arg) {
    if (Ghost.active) {
      Ghost.call(arg);
      move.rotate(arg);
    }
  },
  'call': function (arg) {
    win.show(Ghost.active);
    Ghost.active = !Ghost.active;
  }
};
