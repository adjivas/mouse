/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   warp.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Warp's Class define the behavior if
** the cursor touches the screen border.
*/

var Warp = {
  'choice': Conf.warp.locale,
  'limit': {
    'x': window.screen.width,
    'y': window.screen.height
  },

  'solar': function (cord) {
    var limit = Warp.limit;

    if ((limit.x <= (cord.x) || (cord.x) < 0)
    ||  (limit.y <= (cord.y) || (cord.y) < 0)) {
      cord.x = window.screen.availWidth / 2;
      cord.y = window.screen.availHeight / 2;
    }
    return (cord);
  },
  'portal': function (cord) {
    var limit = Warp.limit;

    if (limit.x <= (cord.x) || (cord.x) < 0)
      cord.x = (cord.x > 0 ? 0 : limit.x);
    if (limit.y <= (cord.y) || (cord.y) < 0)
      cord.y = (cord.y > 0 ? 0 : limit.y);
    return (cord);
  },
  'default': function (cord) {
    var limit = Warp.limit;

    if (limit.x <= (cord.x) || (cord.x) < 0)
      cord.x = (cord.x > 0 ? limit.x : 0);
    if (limit.y <= (cord.y) || (cord.y) < 0)
      cord.y = (cord.y > 0 ? limit.y : 0);
    return (cord);
  }
};
