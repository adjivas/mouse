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

/* 
** The Speak's class is calls for request the socket of
** says a word.
*/

var Speak = {
  'silent': !Configuration.synthse.active,

  'run': function (arg) {
    if (!Speak.silent) {
      door.send({
        'class': 'speak',
        'method': 'say'
      }, {
        'sentence': arg
      });
    }
  },
  'call': function (arg) {
    var elemt = document.querySelector(Tool.find);

    Speak.run(elemt.tagName);
  }
}
