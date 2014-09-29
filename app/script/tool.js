/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tool.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Tool's Object is never call by another Object, it's
** a independent event of cursor's type.
*/

var Tool = {
  'atrib': 'selected',
  'target': 'mousetool',
  'find': 'mousetool > *[selected]',

  'next': function (arg) {
    var atrib = Tool.atrib;
    var elemt = document.querySelectorAll(Tool.target + ' > *');
    var limit = elemt.length - 1;
    var count = -1;

    if (!elemt[limit].getAttribute(atrib))
      while (++count < limit)
        if (elemt[count].getAttribute(atrib))
          break ;
    if (elemt[count]) {
      elemt[count].removeAttribute(atrib);
      elemt[count + 1].setAttribute(atrib, atrib);
    }
    else {
      elemt[elemt.length - 1].removeAttribute(atrib);
      elemt[0].setAttribute(atrib, atrib); 
    }
  }
};
