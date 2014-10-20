/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   github.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var gui = require('nw.gui');

/*
** The Github's class is a procedure for open a link to the constructor's link.
*/

var Github = {
  'target': 'github',
  'link': 'https://github.com/adjivas/mouscreen-WINDOWS/',

  'default': window.addEventListener('mouseup', function(arg) {
    var elemt = arg.toElement;

    elemt = elemt.tagName.toLowerCase();
    if (elemt === Github.target)
      gui.Shell.openExternal(Github.link);
  }, false)
};
