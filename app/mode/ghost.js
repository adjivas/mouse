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
  'status': false,

  'call': function (arg) {
    /* Does invisible or not invisible according to Ghost status. */
    win.show(Ghost.status);
    Ghost.status = !Ghost.status;
  },
  'end': function (arg) {
    /* If the mode is change and the window is always invisible. */
    /* Than the window is does not invisible. */
    if (Ghost.status)
      Ghost.call(arg);
  },
};
