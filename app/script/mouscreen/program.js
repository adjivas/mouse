/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   program.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The class is a procedure of program exit.
*/

var Program = {
  'target': 'program',
  'attribute': 'style',

  'out': function (text) {
    var elemt = document.querySelector(Program.target);
    var style = '-webkit-animation-duration: ' + Close.time + 'ms';

    elemt.setAttribute(Program.attribute, style);
    elemt.setAttribute(Close.target, Close.target);
    Speak.call(text);
    window.setTimeout(function () {
      Notification.call(text, Close.time);
    }, 500);
  },
  'clear': function (arg) {
    var elemt = document.querySelector(Program.target);

    elemt.removeAttribute(Program.attribute);
    elemt.removeAttribute(Close.target);
    if (Notification.win)
      Notification.win.close();
    Notification.sentence = undefined;
    Speak.sentence = undefined;
  }
};
