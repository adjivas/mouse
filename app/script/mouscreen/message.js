/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   message.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/* 
** The Notification's class is puts message in the principal window.
*/

var Message = {
  'attribute': 'hidden',
  'target': 'program',
  'target2': 'message',
  'active': false,

  'write': function (text) {
    var dom = document.querySelector(Message.target2);

    dom.textContent = text;
  },
  'clear': function (arg) {
    var dom = document.querySelector(Message.target);

    dom.removeAttribute(Message.attribute);
    Message.write('');
  },
  'out': function (text, variables) {
    var dom  = document.querySelector(Message.target);
    var text = Lang.translate(text, variables)

    dom.setAttribute(Message.attribute, Message.attribute);
    Message.write(text);
  }
};
