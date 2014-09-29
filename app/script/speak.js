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
** The class speak request the socket of python's server
** for say a word.
*/

var Speak = {
  'silent': !configuration.speech_synthesizer,

  'run': function (arg) {
    door.send({
      'class': 'speak',
      'method': 'say'
    }, {
      'sentence': arg
    });
  },
  'call': function (arg) {
    var elemt = document.querySelector(Tool.find);

    if (!Speak.silent)
      Speak.run(elemt.tagName);
  }
}
